# backend/app/routers/admins.py

from fastapi import APIRouter

router = APIRouter()

@router.post("/admin/create_schedule")
async def create_schedule(data: dict):
    # Lógica para crear un horario académico
    return {"message": "Horario académico creado correctamente"}
