// frontend/src/components/LoginForm.js

import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulación de verificación de credenciales (aquí puedes añadir la lógica real de autenticación)
    if (username === 'admin' && password === 'password') {
      onLoginSuccess(); // Llamar a la función de éxito de inicio de sesión
    } else {
      setError('Credenciales incorrectas, por favor intente de nuevo.');
    }
  };

  return (
    <div>
      <h2>Ingrese sus credenciales</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
