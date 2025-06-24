import React from "react";
import { Fogueira } from "./../Fogueira/Fogueira";
import './Header.css'


export function Header() {
  return (
    <header className="header">
      <h1>🌽 Junina Byte 🌵</h1>
      <p className="slogan">Onde a Tradição Junina Encontra a Magia da Tecnologia</p>
      <div className="arrasta-pe"></div>
      <Fogueira />

    </header>
  );
}