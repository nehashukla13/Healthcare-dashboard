import React from 'react';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  const healthData = [
    {
      id: 1,
      title: 'Lungs',
      date: 'Date: 24 Oct 2021',
      icon: '🫁',
      progress: 80,
      color: '#FF5757',
      gradientColor: 'linear-gradient(90deg, #FF5757, #FF7A7A)',
      type: 'lungs'
    },
    {
      id: 2,
      title: 'Teeth',
      date: 'Date: 24 Oct 2021',
      icon: '🦷',
      progress: 90,
      color: '#00C2A8',
      gradientColor: 'linear-gradient(90deg, #00C2A8, #00D6BA)',
      type: 'teeth'
    },
    {
      id: 3,
      title: 'Bone',
      date: 'Date: 24 Oct 2021',
      icon: '🦴',
      progress: 75,
      color: '#FF5757',
      gradientColor: 'linear-gradient(90deg, #FF5757, #FF7A7A)',
      type: 'bone'
    }
  ];

  return (
    <div className="health-status-cards">
      {healthData.map(item => (
        <div key={item.id} className="health-card" data-type={item.type}>
          <div className="health-card-header">
            <div 
              className="health-icon-container" 
              style={{ 
                background: `${item.color}15`,
                boxShadow: `0 4px 8px ${item.color}20`
              }}
            >
              <span className="health-icon">{item.icon}</span>
            </div>
            <h3 className="health-title">{item.title}</h3>
          </div>
          
          <div className="health-date">{item.date}</div>
          
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ 
                width: `${item.progress}%`,
                background: item.gradientColor
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;