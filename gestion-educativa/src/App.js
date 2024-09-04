// frontend/src/App.js

import React, { useState } from 'react';
import AdminInterface from './components/AdminInterface';
import LoginForm from './components/LoginForm'; // Importar el nuevo componente de formulario de inicio de sesión
import RoleSelector from './components/RoleSelector';
import StudentInterface from './components/StudentInterface';
import TeacherInterface from './components/TeacherInterface';

function App() {
  const [role, setRole] = useState(null); // Estado para almacenar el rol seleccionado
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar si el usuario ha iniciado sesión

  // Función para regresar al menú principal
  const handleBackToMenu = () => {
    setRole(null);
    setIsLoggedIn(false);
  };

  // Función que se llama después de un inicio de sesión exitoso
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Estilos en línea para contenedores y elementos
  const containerStyle = {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFF3E0', // Fondo cálido
    maxWidth: '500px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    color: '#FF7043', // Naranja cálido
    marginBottom: '20px',
    fontSize: '28px',
    borderBottom: '2px solid #FF7043',
    paddingBottom: '10px',
  };

  const welcomeTextStyle = {
    color: '#333',
    fontSize: '18px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#FF7043', // Naranja cálido
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>SISTEMA DE GESTIÓN DE UNA INSTITUCIÓN EDUCATIVA</h1>

      {/* Mensaje de bienvenida y selector de roles */}
      {!role && (
        <div>
          <p style={welcomeTextStyle}>
            Bienvenido al sistema de gestión educativa. Por favor, seleccione un rol para comenzar.
          </p>
          <RoleSelector setRole={setRole} />
        </div>
      )}

      {/* Formulario de inicio de sesión si se ha seleccionado un rol pero aún no ha iniciado sesión */}
      {role && !isLoggedIn && <LoginForm onLoginSuccess={handleLoginSuccess} />}

      {/* Interfaces específicas según el rol seleccionado y si el usuario ha iniciado sesión */}
      {role === 'estudiante' && isLoggedIn && <StudentInterface onBack={handleBackToMenu} />}
      {role === 'administrador' && isLoggedIn && <AdminInterface onBack={handleBackToMenu} />}
      {role === 'profesor' && isLoggedIn && <TeacherInterface onBack={handleBackToMenu} />}

      {/* Botón de regreso al menú principal */}
      {role && (
        <button 
          style={buttonStyle} 
          onClick={handleBackToMenu}
        >
          Regresar al Menú
        </button>
      )}
    </div>
  );
}

export default App;
