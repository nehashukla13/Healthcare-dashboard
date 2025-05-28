import React from 'react';
import Header from './Header';
import AnatomySection from '../dashboard/AnatomySection';
import HealthStatusCards from '../dashboard/HealthStatusCards';
import CalendarView from '../dashboard/CalendarView';
import UpcomingSchedule from '../dashboard/UpcomingSchedule';
import ActivityFeed from '../dashboard/ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="main-content-wrapper">
      <div className="dashboard-content">
        <div className="dashboard-left">
          <Header />
          <h1 className="dashboard-title">Dashboard</h1>
          
          <div className="anatomy-container">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          
          <div className="activity-container">
            <ActivityFeed />
          </div>
        </div>
        
        <div className="dashboard-right">
          <div className="user-profile">
            {/* <div className="notification-bell">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div> */}
            <div className="user-avatar">
              <span>👨‍⚕️</span>
            </div>
            <button className="add-button">+</button>
          </div>
          
          <div className="calendar-container">
            <CalendarView />
          </div>
          
          <div className="schedule-container">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;