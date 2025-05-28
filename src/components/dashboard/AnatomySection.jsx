import React from 'react';
import './AnatomySection.css';
import anatomyImage from '../../assets/images/human-anatomy.png';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img 
          src={anatomyImage} 
          alt="Human anatomy" 
          className="anatomy-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            document.querySelector('.anatomy-placeholder').style.display = 'flex';
          }}
        />
        
        {/* Fallback placeholder if image fails to load */}
        <div className="anatomy-placeholder" style={{ display: 'none' }}>
          <div className="anatomy-figure">
            <div className="anatomy-head"></div>
            <div className="anatomy-torso"></div>
            <div className="anatomy-arms"></div>
            <div className="anatomy-legs"></div>
          </div>
        </div>
        

        <div className="anatomy-shadow"></div>
        
        <div className="anatomy-indicator healthy-heart">
          <span className="indicator-icon">❤️</span>
          <span className="indicator-text">Healthy Heart</span>
        </div>
        
        <div className="anatomy-indicator healthy-leg">
          <span className="indicator-icon">🦵</span>
          <span className="indicator-text">Healthy Leg</span>
        </div>
        
        {/* Magnifying glass icon */}
        <div className="magnify-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;