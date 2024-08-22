import React from 'react';

const ViewModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Details</h2>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  textAlign: 'center',
  width: '300px',
};

export default ViewModal;
