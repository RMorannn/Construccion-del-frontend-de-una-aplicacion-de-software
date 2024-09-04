import React from 'react';

const successMessageStyle = {
  padding: '20px',
  maxWidth: '500px',
  margin: '40px auto',
  textAlign: 'center',
  backgroundColor: '#dff0d8',
  color: '#3c763d',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const SuccessMessage = ({ message, onAcknowledge }) => {
  return (
    <div style={successMessageStyle}>
      <h2>¡Éxito!</h2>
      <p>{message}</p>
      <button 
        style={{
          padding: '10px 20px',
          backgroundColor: '#3c763d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
        onClick={onAcknowledge}
      >
        Aceptar
      </button>
    </div>
  );
};

export default SuccessMessage;
