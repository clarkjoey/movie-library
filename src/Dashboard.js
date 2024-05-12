import React, { useState } from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import './Dashboard.css';

function Dashboard() {
  const [overflowToggle, setOverflowToggle] = useState(false);

  const handleOverflowToggle = (toggle) => {
    setOverflowToggle(toggle);
  };

  return (
    <div className={`dashboard ${overflowToggle ? "overflow-hidden" : ""}`}>
      <Navbar />
      <MovieList handleOverflowToggle={handleOverflowToggle} />    
    </div>
  );
}

export default Dashboard;