import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {

  const activityData = [
    { day: 'Mon', values: [0.65, 0.3, 0.45, 0.2, 0.55] },
    { day: 'Tues', values: [0.35, 0.7, 0.25, 0.5, 0.3] },
    { day: 'Wed', values: [0.45, 0.25, 0.6, 0.35, 0.5] },
    { day: 'Thurs', values: [0.55, 0.4, 0.25, 0.7, 0.35] },
    { day: 'Fri', values: [0.35, 0.5, 0.65, 0.25, 0.45] },
    { day: 'Sat', values: [0.5, 0.35, 0.25, 0.6, 0.45] },
    { day: 'Sun', values: [0.4, 0.55, 0.3, 0.45, 0.25] }
  ];


  const colors = ['#00C2A8', '#6979F8', '#A5AFFB', '#FFB6B6', '#B6FFF2'];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <div className="activity-title-container">
          <h2 className="activity-title">Activity</h2>
          <p className="activity-subtitle">3 appointment on this week</p>
        </div>
        <button className="details-button">
          Details <span className="details-icon">→</span>
        </button>
      </div>
      
      <div className="activity-chart">
        {activityData.map((day, dayIndex) => (
          <div key={dayIndex} className="chart-column">
            <div className="bars-container">
              {day.values.map((value, valueIndex) => (
                <div 
                  key={valueIndex} 
                  className="activity-bar"
                  style={{ 
                    height: `${value * 120}px`,
                    backgroundColor: colors[valueIndex]
                  }}
                ></div>
              ))}
            </div>
            <div className="day-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;