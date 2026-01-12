# from fastapi import FastAPI
# from fastapi.staticfiles import StaticFiles
# from pydantic import BaseModel
# import os

# # app = FastAPI()

# # # static folder (absolute path safe)
# # BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# # STATIC_DIR = os.path.join(BASE_DIR, "static")

# # app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")




# import os

# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# STATIC_DIR = os.path.join(BASE_DIR, "static")

# app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


# class LoginData(BaseModel):
#     email: str
#     password: str


# @app.get("/")
# def root():
#     return {"status": "API running"}


# @app.get("/auth/login")
# def login_info():
#     return {"message": "Use POST method to login"}


# @app.post("/auth/login")
# def login(data: LoginData):
#     return {
#         "email": data.email,
#         "message": "Login successful"
#     }
# # from fastapi import FastAPI, Depends, HTTPException
# # from fastapi.middleware.cors import CORSMiddleware
# # from fastapi.security import OAuth2PasswordRequestForm

# # # ===== Core Imports =====
# # from core.database import get_db
# # from core.security import (
# #     create_access_token,
# #     hash_password,
# #     verify_password,
# # )

# # # ===== Services & Models =====
# # from services.user_service import create_user, authenticate_user
# # from models.user import UserCreate

# # # =========================
# # # APP INIT
# # # =========================
# # app = FastAPI(
# #     title="@iBzA",
# #     description="thelaraib — We build next-gen digital experiences with FOSS & Web3",
# #     version="0.1.0",
# # )

# # # =========================
# # # CORS (VERY IMPORTANT)
# # # =========================
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=[
# #         "http://localhost:3000",
# #         "http://127.0.0.1:3000",
# #     ],
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # =========================
# # # BASIC ROUTES
# # # =========================
# # @app.get("/")
# # def root():
# #     return {
# #         "brand": "@iBzA",
# #         "tagline": "thelaraib",
# #         "message": "Backend is live. FOSS + Web3 ready."
# #     }

# # @app.get("/health")
# # def health_check():
# #     return {"status": "OK"}

# # # =========================
# # # DATABASE TEST
# # # =========================
# # @app.get("/db-test")
# # def db_test(db=Depends(get_db)):
# #     return {
# #         "message": "✅ MongoDB connected successfully",
# #         "collections": db.list_collection_names()
# #     }

# # # =========================
# # # USER TEST
# # # =========================
# # @app.get("/user-test")
# # def user_test():
# #     return {
# #         "message": "User model loaded successfully",
# #         "example": {
# #             "username": "ibza_user",
# #             "email": "user@ibza.dev"
# #         }
# #     }

# # # =========================
# # # PASSWORD HASH TEST
# # # =========================
# # @app.get("/hash-test")
# # def hash_test():
# #     raw = "TestPassword123"
# #     hashed = hash_password(raw)

# #     return {
# #         "raw": raw,
# #         "hashed": hashed,
# #         "verified": verify_password(raw, hashed)
# #     }

# # # =========================
# # # AUTH — SIGNUP
# # # =========================
# # @app.post("/auth/signup")
# # def signup(user: UserCreate, db=Depends(get_db)):
# #     created = create_user(db, user)

# #     if not created:
# #         raise HTTPException(status_code=400, detail="Email already registered")

# #     return {
# #         "message": "User created successfully",
# #         "user": created
# #     }

# # # =========================
# # # AUTH — LOGIN
# # # =========================
# # @app.post("/auth/login")
# # def login(
# #     form_data: OAuth2PasswordRequestForm = Depends(),
# #     db=Depends(get_db)
# # ):
# #     user = authenticate_user(db, form_data.username, form_data.password)

# #     if not user:
# #         raise HTTPException(status_code=401, detail="Invalid credentials")

# #     access_token = create_access_token(
# #         data={"sub": user["email"]}
# #     )

# #     return {
# #         "access_token": access_token,
# #         "token_type": "bearer",
# #         "user": user
# #     }






# from fastapi import FastAPI
# from fastapi.staticfiles import StaticFiles
# from pydantic import BaseModel

# app = FastAPI()

# # serve static files (favicon)
# app.mount("/static", StaticFiles(directory="static"), name="static")


# # ---------- MODELS ----------
# class LoginData(BaseModel):
#     email: str
#     password: str


# # ---------- ROUTES ----------
# @app.get("/")
# async def root():
#     return {"status": "API is running"}


# # OPTIONAL: avoid 405 when opening in browser
# @app.get("/auth/login")
# async def login_info():
#     return {"message": "Use POST method to login"}


# # REAL LOGIN API (POST)
# @app.post("/auth/login")
# async def login(data: LoginData):
#     return {
#         "email": data.email,
#         "message": "Login successful"
#     }










# from fastapi import FastAPI
# from fastapi.staticfiles import StaticFiles
# from pydantic import BaseModel
# import os

# # ------------------
# # APP INIT (FIRST!)
# # ------------------
# app = FastAPI()

# # ------------------
# # STATIC FILES
# # ------------------
# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# STATIC_DIR = os.path.join(BASE_DIR, "static")

# app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# # ------------------
# # MODELS
# # ------------------
# class LoginData(BaseModel):
#     email: str
#     password: str

# # ------------------
# # ROUTES
# # ------------------
# @app.get("/")
# def root():
#     return {"status": "API running"}

# @app.get("/auth/login")
# def login_info():
#     return {"message": "Use POST method to login"}

# @app.post("/auth/login")
# def login(data: LoginData):
#     return {
#         "email": data.email,
#         "message": "Login successful"
#     }







from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os

# ------------------
# APP INIT
# ------------------
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://ibza.vercel.app",
        "https://ibza.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ------------------
# STATIC FILES (SAFE)
# ------------------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_DIR = os.path.join(BASE_DIR, "static")

if os.path.exists(STATIC_DIR):
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# ------------------
# MODELS
# ------------------
class LoginData(BaseModel):
    email: str
    password: str

# ------------------
# ROUTES
# ------------------
@app.get("/")
def root():
    return {"status": "API running"}

@app.get("/auth/login")
def login_info():
    return {"message": "Use POST method to login"}

@app.post("/auth/login")
def login(data: LoginData):
    return {
        "email": data.email,
        "message": "Login successful"
    }
