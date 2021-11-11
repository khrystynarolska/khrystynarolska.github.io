import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Profile />
      <About />
    </div>
  );
}

export default App;