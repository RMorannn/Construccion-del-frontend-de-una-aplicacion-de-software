# backend/app/routers/users.py

from fastapi import APIRouter

router = APIRouter()

@router.get("/roles")
async def get_roles():
    return {"roles": ["administrador", "profesor", "estudiante", "padre", "personal administrativo"]}

@router.post("/login")
async def login_user(username: str, password: str):
    # Lógica de autenticación
    return {"message": "Usuario autenticado correctamente"}
