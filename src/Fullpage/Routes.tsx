import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom'
import AboutSection from "./Components/Home";
import AboutPage from "./Components/pages/About";
import LogIn from "./Components/pages/Login";
import SignUp from "./Components/pages/Signup";


const AppRoutes: FC = () => {
  return (
    <div>
        <Routes>
            <Route path="/home" element={<AboutSection />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </div>
  );
};
export default AppRoutes;
