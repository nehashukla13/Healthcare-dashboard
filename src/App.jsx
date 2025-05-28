import React from 'react';
import Sidebar from './components/layout/Sidebar';
import DashboardMainContent from './components/layout/DashboardMainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}

export default App;
