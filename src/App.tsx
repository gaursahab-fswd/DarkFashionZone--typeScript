
import React, {FC} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeSection from './Fullpage/Components/Home';
import Routes from './Fullpage/Routes';
import SignUp from './Fullpage/Components/pages/Signup';
import LogIn from './Fullpage/Components/pages/Login';
import AppRoutes from './Fullpage/Routes';
import AboutSection from './Fullpage/Components/Home';

function App() {
  return(
    
    <BrowserRouter>
      <AboutSection />
      <Routes/>
      </BrowserRouter>
    
  );
}

export default App;
  