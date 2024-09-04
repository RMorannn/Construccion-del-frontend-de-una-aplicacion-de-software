from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users, students, admins, teachers

app = FastAPI()

# Configuración de CORS
origins = [
    "http://localhost:3000",
    "http://192.168.100.85:3000"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir routers
app.include_router(users.router)
app.include_router(students.router)
app.include_router(admins.router)
app.include_router(teachers.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

