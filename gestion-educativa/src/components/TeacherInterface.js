import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage'; // Importa el componente de éxito

const RegistroActualizacionDatos = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={containerStyle}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Datos actualizados con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={headerStyle}>Registro y Actualización de Datos Personales</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>Nombres:</label>
            <input type="text" placeholder="Ingrese sus nombres" style={inputStyle} required />
            
            <label>Materia:</label>
            <input type="text" placeholder="Ingrese la materia que dará" style={inputStyle} required />
            
            <label>Correo Electrónico:</label>
            <input type="email" placeholder="Ingrese su correo electrónico" style={inputStyle} required />
            
            <label>Número de Teléfono:</label>
            <input type="tel" placeholder="Ingrese su número de teléfono" style={inputStyle} required />
            
            <label>Dirección:</label>
            <input type="text" placeholder="Ingrese su dirección" style={inputStyle} required />
            
            <button type="submit" style={buttonStyle}>Actualizar Datos</button>
          </form>
        </>
      )}
    </div>
  );
};

const CursosAsignados = () => (
  <div style={containerStyle}>
    <h3 style={headerStyle}>Cursos Asignados</h3>
    <p>Tienes 5 cursos a cargo.</p>
  </div>
);

const GeneracionBoletines = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={containerStyle}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Boletín generado con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={headerStyle}>Generación de Boletines de Calificaciones</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>Materia:</label>
            <input type="text" placeholder="Ingrese la materia" style={inputStyle} required />
            
            <label>Nombre del Estudiante:</label>
            <input type="text" placeholder="Ingrese el nombre del estudiante" style={inputStyle} required />
            
            <label>Calificación:</label>
            <input type="number" min="0" max="100" placeholder="Ingrese la calificación" style={inputStyle} required />
            
            <button type="submit" style={buttonStyle}>Generar Boletín</button>
          </form>
        </>
      )}
    </div>
  );
};

const ReportesAsistenciaConducta = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={containerStyle}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Reporte de asistencia y conducta guardado con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={headerStyle}>Reportes de Asistencia y Conducta de los Estudiantes</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>Fecha de Asistencia:</label>
            <input type="date" style={inputStyle} required />
            
            <label>Faltas:</label>
            <input type="number" min="0" placeholder="Ingrese el número de faltas" style={inputStyle} required />
            
            <label>Conducta:</label>
            <input type="text" placeholder="Describa la conducta" style={inputStyle} required />
            
            <button type="submit" style={buttonStyle}>Guardar Reporte</button>
          </form>
        </>
      )}
    </div>
  );
};

const RegistroAsistencia = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={containerStyle}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Asistencia registrada con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={headerStyle}>Registro de Asistencia</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>Profesor:</label>
            <input type="text" placeholder="Ingrese nombre" style={inputStyle} required />
            
            <label>Hora de Entrada:</label>
            <input type="time" style={inputStyle} required />
            
            <label>Hora de Salida:</label>
            <input type="time" style={inputStyle} required />
            
            <label>Fecha:</label>
            <input type="date" defaultValue={new Date().toISOString().split('T')[0]} style={inputStyle} required />
            
            <button type="submit" style={buttonStyle}>Registrar Asistencia</button>
          </form>
        </>
      )}
    </div>
  );
};

const TeacherInterface = ({ onBack }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const renderContenido = () => {
    switch (opcionSeleccionada) {
      case 'registro':
        return <RegistroActualizacionDatos />;
      case 'asistencia':
        return <RegistroAsistencia />;
      case 'cursos':
        return <CursosAsignados />;
      case 'boletines':
        return <GeneracionBoletines />;
      case 'reportes':
        return <ReportesAsistenciaConducta />;
      default:
        return (
          <div style={containerStyle}>
            <h2 style={headerStyle}>Página Personal de Profesor</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('registro')}>
                  Registro y actualización de datos personales
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('cursos')}>
                  Cursos Asignados
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('boletines')}>
                  Generación de boletines de calificaciones
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('asistencia')}>
                  Registro de asistencia personal
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('reportes')}>
                  Reportes de asistencia y conducta de los estudiantes
                </button>
              </li>
            </ul>
          </div>
        );
    }
  };

  return (
    <div>
      {renderContenido()}
      {opcionSeleccionada && <button style={buttonStyle} onClick={() => setOpcionSeleccionada(null)}>Regresar</button>}
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

export default TeacherInterface;
