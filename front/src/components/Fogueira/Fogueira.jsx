import React from "react";
import "./Fogueira.css";

export function Fogueira() {
  return (
    <div className="fogueira-detalhada">
  <div className="tronco tronco1"></div>
  <div className="tronco tronco2"></div>
  <div className="tronco tronco3"></div>
  <div className="tronco tronco4"></div>



  <div className="chama chama1"></div>
  <div className="chama chama2"></div>
  <div className="chama chama3"></div>

  {[...Array(6)].map((_, i) => (
    <div key={i} className={`faisca faisca${i + 1}`}></div>
  ))}
</div>

  );
}