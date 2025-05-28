import React from 'react';
import './CalendarView.css';

const CalendarView = () => {
  const days = [
    { name: 'Mon', number: 25 },
    { name: 'Tues', number: 26 },
    { name: 'Wed', number: 27 },
    { name: 'Thurs', number: 28 },
    { name: 'Fri', number: 29 },
    { name: 'Sat', number: 30 },
    { name: 'Sun', number: 31 }
  ].map(day => ({
    ...day,
    displayFormat: (
      <div className="day-column">
        <div className="day-name">{day.name}</div>
        <div className="day-number">{day.number}</div>
      </div>
    )
  }));

  const timeSlots = {
    25: ['10:00', '11:00', '12:00'],
    26: ['08:00', '09:00', '10:00'],
    27: ['12:00', '13:00'],
    28: ['10:00', '11:00'],
    29: ['14:00', '16:00'],
    30: ['12:00', '14:00', '15:00'],
    31: ['09:00', '10:00', '11:00']
  };
  const appointments = [
    {
      id: 1,
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      color: '#3a4276',
      day: 26
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪',
      color: '#e0e7ff',
      textColor: '#333',
      day: 28
    }
  ];

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2 className="calendar-title">October 2021</h2>
        
        <div className="calendar-arrows">
          <button className="arrow-btn prev">◀</button>
          <button className="arrow-btn next">▶</button>
        </div>
      </div>
      
      <div className="calendar-grid">
        <div className="days-row">
          {days.map((day, index) => (
            <div key={index} className="day-column">
              <span className="day-name">{day.name}</span>
              <span className="day-number">{day.number}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="time-slots">
        {days.map((day, index) => (
          <div key={index} className="day-slots">
            {timeSlots[day.number]?.map((time, timeIndex) => {
              const isActive = appointments.some(app => app.day === day.number && app.time.includes(time));
              const activeAppointment = isActive ? 
                appointments.find(app => app.day === day.number && app.time.includes(time)) : null;
              
              return (
                <div 
                  key={timeIndex} 
                  className={`time-slot ${isActive ? 'active' : ''}`}
                  style={isActive ? { backgroundColor: activeAppointment.color, color: 'white' } : {}}
                >
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="featured-appointments">
        {appointments.map(appointment => (
          <div 
            key={appointment.id} 
            className="featured-appointment-card"
            style={{ 
              backgroundColor: appointment.color,
              color: appointment.id === 1 ? 'white' : appointment.textColor || '#333'
            }}
          >
            <div className="appointment-icon-wrapper">
              <div className="appointment-icon">
                {appointment.icon}
              </div>
            </div>
            <div className="appointment-details">
              <h3 className="appointment-title">{appointment.title}</h3>
              <p className="appointment-time">{appointment.time}</p>
              <p className="appointment-doctor">{appointment.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;