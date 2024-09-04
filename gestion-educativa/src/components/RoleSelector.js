import React, { useEffect, useState } from 'react';

const RoleSelector = ({ setRole }) => {
  const [roles, setRoles] = useState([]); // Si no se usa, coméntalo o elimínalo

  useEffect(() => {
    fetch("http://127.0.0.1:8000/roles")
      .then((response) => response.json())
      .then((data) => setRoles(data.roles));
  }, []);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <label htmlFor="roles">Seleccione un rol: </label>
      <select id="roles" onChange={handleRoleChange}>
        <option value="">--Seleccione un rol--</option>
        <option value="administrador">Administrador</option>
        <option value="profesor">Profesor</option>
        <option value="estudiante">Estudiante</option>
      </select>
    </div>
  );
};

export default RoleSelector;
