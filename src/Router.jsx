import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from "./Login";
import Home from './Home';
import Info from './Info';
import Leaf from './Leaf';
// import Login from "./Login"
const AppRouter = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/leaf" element={<Leaf />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  
  export default AppRouter;