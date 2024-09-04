# backend/app/routers/teachers.py

from fastapi import APIRouter

router = APIRouter()

@router.post("/teachers/assign_course")
async def assign_course(data: dict):
    # Lógica para asignar cursos a un profesor
    return {"message": "Curso asignado correctamente"}
