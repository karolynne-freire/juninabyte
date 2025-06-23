import React from 'react';
import './Bandeirinhas.css'

function Bandeirinha({ tipo, color }) {
  return (
    <div
      className={`bandeirinha ${tipo}`}
      style={{ color }}
    ></div>
  );
}

function Balão() {
  return (
    <div className="teste">
      <div className="triangulo top"></div>
      <div className="triangulo bottom"></div>
    </div>
  );
}

export function Bandeirinhas() {
  return (
    <div className="app">
      <div className="bandeirinhas">
        <Bandeirinha tipo="b1" color="red" />
        <Bandeirinha tipo="b2" color="blue" />
        <Bandeirinha tipo="b3" color="green" />
        <Bandeirinha tipo="b2" color="rgb(0, 255, 200)" />
        <Bandeirinha tipo="b1" color="rgb(255, 0, 119)" />
        <Bandeirinha tipo="b2" color="rgb(255, 217, 0)" />

        {/* <Balão /> */}

        <Bandeirinha tipo="b4" color="goldenrod" />
        <Bandeirinha tipo="b1" color="purple" />
        <Bandeirinha tipo="b2" color="pink" />
        <Bandeirinha tipo="b4" color="rgb(218, 91, 32)" />
        <Bandeirinha tipo="b3" color="rgb(128, 113, 0)" />
        <Bandeirinha tipo="b2" color="rgb(192, 228, 255)" />
        <Bandeirinha tipo="b1" color="purple" />
        <Bandeirinha tipo="b2" color="pink" />
      </div>
    </div>
  );
}