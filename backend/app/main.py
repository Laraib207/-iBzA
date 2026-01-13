from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles
import os

# ===== Core Imports =====
from core.database import get_db
from core.security import (
    create_access_token,
    hash_password,
    verify_password,
)

# ===== Services & Models =====
from services.user_service import create_user, authenticate_user
from models.user import UserCreate

# =========================
# APP INIT
# =========================
app = FastAPI(
    title="@iBzA",
    description="thelaraib — We build next-gen digital experiences with FOSS & Web3",
    version="0.1.0",
)

# =========================
# STATIC FILES
# =========================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_DIR = os.path.join(BASE_DIR, "static")

if os.path.exists(STATIC_DIR):
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# =========================
# CORS
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://ibza.vercel.app",
        "https://ibza.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# BASIC ROUTES
# =========================
@app.get("/")
def root():
    return {
        "brand": "@iBzA",
        "tagline": "thelaraib",
        "message": "Backend is live. FOSS + Web3 ready."
    }

@app.get("/health")
def health_check():
    return {"status": "OK"}

# =========================
# AUTH — SIGNUP
# =========================
@app.post("/auth/signup")
def signup(user: UserCreate, db=Depends(get_db)):
    created = create_user(db, user)

    if not created:
        raise HTTPException(status_code=400, detail="Email already registered")

    return {
        "message": "User created successfully",
        "user": created
    }

# =========================
# AUTH — LOGIN
# =========================
@app.post("/auth/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db=Depends(get_db)
):
    # OAuth2PasswordRequestForm uses 'username' field for the identifier (can be email)
    user = authenticate_user(db, form_data.username, form_data.password)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(
        data={"sub": user["email"]}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "username": user["username"],
            "email": user["email"]
        }
    }
