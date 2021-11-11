import React from 'react';
import './style/reset.scss'
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';

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