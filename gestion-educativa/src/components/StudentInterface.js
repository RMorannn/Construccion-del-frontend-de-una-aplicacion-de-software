import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage'; // Importa el componente de éxito

const RegistroActualizacionDatosPersonales = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Mostrar la interfaz de éxito
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      {showSuccessMessage ? (
        <SuccessMessage 
          message="Datos personales actualizados con éxito"
          onAcknowledge={() => setShowSuccessMessage(false)}
        />
      ) : (
        <>
          <h3 style={{ textAlign: 'center', color: '#003366' }}>Registro y Actualización de Datos Personales</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={handleSubmit}>
            <label>Nombres:</label>
            <input type="text" placeholder="Ingrese sus nombres" required />
            
            <label>Materia:</label>
            <input type="text" placeholder="Ingrese la materia que dará" required />
            
            <label>Correo Electrónico:</label>
            <input type="email" placeholder="Ingrese su correo electrónico" required />
            
            <label>Número de Teléfono:</label>
            <input type="tel" placeholder="Ingrese su número de teléfono" required />
            
            <label>Dirección:</label>
            <input type="text" placeholder="Ingrese su dirección" required />
            
            <button type="submit" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '5px' }}>Actualizar Datos</button>
          </form>
        </>
      )}
    </div>
  );
};

const HistorialAcademico = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
    <h3 style={{ textAlign: 'center', color: '#003366' }}>Historial Académico</h3>
    <div>
      <p><strong>MODALIDAD:</strong> PRESENCIAL</p>
      <p><strong>TÍTULO:</strong> INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN</p>
      <p><strong>PROYECTO:</strong> COMPUTACIÓN (AJUSTE CURRICULAR)</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#003366', color: 'white' }}>
            <th>Nivel</th>
            <th>Código Asignatura</th>
            <th>Asignatura</th>
            <th>Horas</th>
            <th>Período Académico</th>
            <th>No. de Matrícula</th>
            <th>Calificación</th>
            <th>Estado de la Asignatura</th>
            <th>Tipo Aprobación</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: 'center', backgroundColor: '#f2f2f2' }}>
            <td>1</td>
            <td>C-CE-ICO-101</td>
            <td>ÁLGEBRA LINEAL</td>
            <td>160</td>
            <td>2021 - 2021</td>
            <td>I</td>
            <td>96</td>
            <td>APROBADO</td>
            <td>NORMAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const HorarioClases = () => (
  <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
    <h3 style={{ textAlign: 'center', color: '#003366' }}>Horario de Clases</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#003366', color: 'white' }}>
          <th>Hora</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>07:00-08:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style={{ textAlign: 'center', backgroundColor: '#e6f7ff' }}>
          <td>17:00-18:00</td>
          <td></td>
          <td>SISTEMAS DISTRIBUIDOS</td>
          <td>SISTEMAS DISTRIBUIDOS</td>
          <td>APRENDIZAJE AUTOMÁTICO</td>
          <td>SISTEMAS DISTRIBUIDOS</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

const VisualizacionBoletines = () => (
  <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
    <h3 style={{ textAlign: 'center', color: '#003366' }}>Visualización de Boletines de Calificaciones</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#003366', color: 'white' }}>
          <th>Materia</th>
          <th>Calificación</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ textAlign: 'center', backgroundColor: '#f2f2f2' }}>
          <td>ÁLGEBRA LINEAL</td>
          <td>95</td>
        </tr>
        <tr style={{ textAlign: 'center', backgroundColor: '#e6f7ff' }}>
          <td>PROGRAMACIÓN</td>
          <td>89</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const InformeFinancieros = () => (
  <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
    <h3 style={{ color: '#003366' }}>Informe Financieros</h3>
    <p>Debe pagar: <strong>$800</strong></p>
  </div>
);

const StudentInterface = ({ onBack }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const renderContenido = () => {
    switch (opcionSeleccionada) {
      case 'registro':
        return <RegistroActualizacionDatosPersonales />;
      case 'historial':
        return <HistorialAcademico />;
      case 'horarios':
        return <HorarioClases />;
      case 'boletines':
        return <VisualizacionBoletines />;
      case 'informes':
        return <InformeFinancieros />;
      default:
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#003366' }}>Pagina Personal del Estudiante</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('registro')}>
                  Registro y actualización de datos personales
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('historial')}>
                  Historial académico
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('horarios')}>
                  Horario de clases
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('boletines')}>
                  Visualización de boletines de calificaciones
                </button>
              </li>
              <li style={{ margin: '10px 0' }}>
                <button style={buttonStyle} onClick={() => setOpcionSeleccionada('informes')}>
                  Informe financieros
                </button>
              </li>
            </ul>
          </div>
        );
    }
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      {renderContenido()}
      {opcionSeleccionada && <button style={buttonStyle} onClick={() => setOpcionSeleccionada(null)}>Regresar</button>}
    </div>
  );
};

export default StudentInterface;
