import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Using React Router v6
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Welcome to the App</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
