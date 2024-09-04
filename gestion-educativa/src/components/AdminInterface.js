import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage'; // Importar el componente de éxito

const CalendarioAcademico = () => (
  <div style={containerStyle}>
    <h3 style={headerStyle}>CALENDARIO ACADÉMICO</h3>
    <p>SEPTIEMBRE 2024 - FEBRERO 2025</p>

    <div>
      <p>Solicitud de Homologaciones: Del 12 de agosto al 07 de septiembre de 2024</p>
      <p>Inicio de matrículas de estudiantes nuevos: 01 de mayo de 2024</p>
      <p>Matrículas Ordinarias: Desde 19 de agosto al 13 de septiembre del 2024</p>
      <p>Matrículas Extraordinarias: Desde 16 al 30 de septiembre del 2024</p>
      <p>Matrícula Especial: Desde 01 al 15 de octubre del 2024</p>
    </div>

    <div>
      <p><strong>SEPTIEMBRE 2024</strong></p>
      <ul style={listStyle}>
        <li>1 - Inicio Nuevo Período Académico</li>
        <li>6 - Reunión de coordinación académica de sede</li>
        <li>13 - Asignación de becas</li>
        <li>13 - Jornadas de Formación Docente</li>
        <li>13 - Inicio de clases</li>
        <li>21 - Inicio de inducción de alumnos nuevos</li>
      </ul>
    </div>

    <div>
      <p><strong>OCTUBRE 2024</strong></p>
      <ul style={listStyle}>
        <li>2 - Elección de directivas de curso</li>
        <li>6 - Reunión de coordinación académica de sede</li>
        <li>9 - Independencia de Guayaquil</li>
        <li>15 - Fecha máxima de incremento o retiro de asignaturas</li>
      </ul>
    </div>
  </div>
);

const HorariosClases = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedMateria, setSelectedMateria] = useState(''); // State for selected "Materia"

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={containerStyle}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Horario creado con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={headerStyle}>Creación y Asignación de Horarios de Clases</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>Materia:</label>
            <select
              value={selectedMateria}
              onChange={(e) => setSelectedMateria(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Seleccione una materia</option>
              <option value="Matemáticas">Matemáticas</option>
              <option value="Física">Física</option>
              <option value="Química">Química</option>
              <option value="Historia">Historia</option>
              <option value="Lengua">Lengua</option>
            </select>
            <br />
            <label>Día:</label>
            <input type="date" style={inputStyle} required />
            <br />
            <label>Hora:</label>
            <input type="time" style={inputStyle} required />
            <br />
            <button type="submit" style={buttonStyle}>Crear Horario</button>
          </form>
        </>
      )}
    </div>
  );
};

const GestionPagos = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={containerStyle}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Pago registrado con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={headerStyle}>Gestión de Pagos y Cobranzas</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>Nombres y Apellidos:</label>
            <input type="text" placeholder="Ingrese nombres y apellidos" style={inputStyle} required />
            <br />
            <label>Fecha de Pago:</label>
            <input type="date" style={inputStyle} required />
            <br />
            <label>Monto a Pagar/Cobrar:</label>
            <input type="number" placeholder="Ingrese el monto" style={inputStyle} required />
            <br />
            <button type="submit" style={buttonStyle}>Registrar Pago</button>
          </form>
        </>
      )}
    </div>
  );
};

const AdminInterface = ({ onBack }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const renderContenido = () => {
    switch (opcionSeleccionada) {
      case 'calendario':
        return <CalendarioAcademico />;
      case 'horarios':
        return <HorariosClases />;
      case 'pagos':
        return <GestionPagos />;
      default:
        return (
          <div style={containerStyle}>
            <h2 style={headerStyle}>Administrador</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('calendario')}>
                  Calendario académico
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('horarios')}>
                  Creación y asignación de horarios de clases
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('pagos')}>
                  Gestión de pagos y cobranzas
                </button>
              </li>
            </ul>
          </div>
        );
    }
  };

  return (
    <div style={containerStyle}>
      {renderContenido()}
      {opcionSeleccionada && (
        <button style={buttonStyle} onClick={() => setOpcionSeleccionada(null)}>Regresar</button>
      )}
    </div>
  );
};

// Estilos en línea para mejorar la apariencia de la interfaz
const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: 'auto',
  textAlign: 'center'
};

const headerStyle = {
  color: '#003366'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
};

const inputStyle = {
  width: '80%',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#003366',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px'
};

const listStyle = {
  textAlign: 'left',
  paddingLeft: '20px'
};

export default AdminInterface;
