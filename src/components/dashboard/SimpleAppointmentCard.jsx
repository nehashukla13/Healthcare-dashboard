import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-info">
        <h3 className="appointment-name">{appointment.title}</h3>
        <p className="appointment-time">{appointment.time}</p>
      </div>
      <div 
        className="appointment-icon" 
        style={{ backgroundColor: appointment.iconColor }}
      >
        {getAppointmentIcon(appointment.icon)}
      </div>
    </div>
  );
};

// Helper function to return icon based on appointment type
function getAppointmentIcon(type) {
  switch (type) {
    case 'checkup': return '✓';
    case 'eye': return '👁️';
    case 'heart': return '❤️';
    case 'brain': return '🧠';
    default: return '•';
  }
}

export default SimpleAppointmentCard;