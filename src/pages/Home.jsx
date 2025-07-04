import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{
    textAlign: 'center',
    marginTop: '100px'
  }}>
    <h1>Welcome to the MERN To-Do App</h1>
    <p style={{ fontSize: '18px', marginBottom: '30px' }}>
      Stay productive. Stay organized. It’s simple & free.
    </p>
    <Link to="/login">
      <button>Get Started</button>
    </Link>
  </div>
);

export default Home;
