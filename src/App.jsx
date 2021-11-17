import React from 'react';
import './style/reset.scss'
import './App.scss';
import './style/__fonts.scss';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import About from './components/About/About';

const App = () => {
  return (
    <div className='container'>
      <Menu />
      <Profile />
      <About />
    </div>
  );
}

export default App;