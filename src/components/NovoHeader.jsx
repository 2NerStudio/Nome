import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const NovoHeader = () => {
  return (
    <header className="app-header">
      <Link to="/" className="logo-link">
        <img 
          src="/imagens/logo-gramatica.png" 
          alt="Logo Gramática Divertida" 
          className="logo"
        />
        <h1>Gramática Divertida</h1>
      </Link>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/quiz" className="nav-link">Quiz</Link>
      </nav>
    </header>
  );
};