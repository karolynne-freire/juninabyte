import React, { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [theme, setTheme] = useState('light');

  const alternarTema = () => {
    const novoTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(novoTheme);
    document.documentElement.setAttribute('data-theme', novoTheme);
  };
  
  return (
    <nav>
      <a href="#">Início</a>
      <a href="#">Comidas</a>
      <a href="#">Música</a>
      <a href="#">Fogos</a>
      <button className="theme-toggle" onClick={alternarTema}>
  {theme === 'light' ? '🔥' : '🎈'}
</button>
    </nav>
  );
}
