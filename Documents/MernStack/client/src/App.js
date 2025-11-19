import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
