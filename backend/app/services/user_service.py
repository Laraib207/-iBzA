from models.user import UserCreate
from core.security import hash_password


def create_user(db, user: UserCreate):
    users = db["users"]   # 👈 collection yahin define hoti hai

    existing = users.find_one({"email": user.email})
    if existing:
        return None

    user_dict = {
        "username": user.username,
        "email": user.email,
        "hashed_password": hash_password(user.password),
        "is_active": True,
        "is_admin": False,
    }

    result = users.insert_one(user_dict)

    return {
        "id": str(result.inserted_id),
        "username": user.username,
        "email": user.email,
        "is_active": True,
        "is_admin": False,
    }
from core.security import verify_password


def authenticate_user(db, identifier: str, password: str):
    users = db["users"]

    # allow login with either email or username
    user = users.find_one({"email": identifier})
    if not user:
        user = users.find_one({"username": identifier})
    if not user:
        return None

    if not verify_password(password, user["hashed_password"]):
        return None

    return {
        "id": str(user["_id"]),
        "username": user["username"],
        "email": user["email"],
        "is_active": user.get("is_active", True),
        "is_admin": user.get("is_admin", False),
    }
