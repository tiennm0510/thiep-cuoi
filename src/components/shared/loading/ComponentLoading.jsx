import React from 'react';
import './ComponentLoading.css';

const ComponentLoading = ({ message = "Đang tải..." }) => {
  return (
    <div className="component-loading">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default ComponentLoading;