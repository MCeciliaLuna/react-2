import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/404' element={<ErrorPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    <Footer />
    </>
  );
};

export default App;