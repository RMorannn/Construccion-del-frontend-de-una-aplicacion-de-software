# backend/app/routers/students.py

from fastapi import APIRouter

router = APIRouter()

@router.get("/students/{student_id}")
async def get_student_info(student_id: int):
    # Lógica para obtener información del estudiante
    return {"student_id": student_id, "name": "Juan Pérez"}

@router.post("/students/register")
async def register_student(data: dict):
    # Lógica para registrar y actualizar datos del estudiante
    return {"message": "Estudiante registrado/actualizado correctamente"}
