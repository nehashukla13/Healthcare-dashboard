import React from 'react';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  const scheduleData = [
    {
      day: 'Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '✏️',
          bgColor: '#e0e7ff'
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️',
          bgColor: '#e0e7ff'
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️',
          bgColor: '#e0e7ff'
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠',
          bgColor: '#e0e7ff'
        }
      ]
    }
  ];

  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      
      {scheduleData.map((daySchedule, dayIndex) => (
        <div key={dayIndex} className="day-schedule">
          <h3 className="day-title">On {daySchedule.day}</h3>
          <div className="appointments-container">
            {daySchedule.appointments.map(appointment => (
              <div 
                key={appointment.id} 
                className="simple-appointment-card"
                style={{ backgroundColor: appointment.bgColor }}
              >
                <div className="appointment-info">
                  <h4 className="appointment-name">{appointment.title}</h4>
                  <p className="appointment-time">{appointment.time}</p>
                </div>
                <div className="appointment-icon">
                  {appointment.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;