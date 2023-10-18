import React from 'react';
import './styles.css';

const Sidebar = ({ isOpen, toggleSidebar, children }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      {children}
    </div>
  );
};

export default Sidebar;
