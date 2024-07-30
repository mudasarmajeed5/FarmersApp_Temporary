import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import React from 'react';
import Login from "./Login";
import Home from './Home';
import Info from './Info';
import Leaf from './Leaf';
import ImageUpload from './ImageUpload';
import Results from './Results';
const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/leaf" element={<Leaf />} />
      <Route path="/results" element={<Results />} />
      <Route path="/upload" element={<ImageUpload />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
  export default AppRouter;