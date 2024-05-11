import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar />
      <MovieList />
    </div>
  );
}

export default Dashboard;