import React, { useState, useEffect } from "react";
import './Historia.css'

const CORES = ["#fff8e1", "#ffae3f"];

function aleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

function FoguinhosEspalhados({ quantidade = 20, areaWidth = 300, areaHeight = 300 }) {
  const [fogos, setFogos] = useState([]);

  useEffect(() => {
    const novosFogos = [];
    for (let i = 0; i < quantidade; i++) {
      novosFogos.push({
        id: i,
        left: aleatorio(0, areaWidth),
        top: aleatorio(0, areaHeight),
        cor: CORES[Math.floor(Math.random() * CORES.length)],
        delay: aleatorio(0, 1.5),
        duration: aleatorio(1, 2),
      });
    }
    setFogos(novosFogos);
  }, [quantidade, areaWidth, areaHeight]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: areaWidth,
        height: areaHeight,
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2,
      }}
    >
      {fogos.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: f.left,
            top: f.top,
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => {
            const angle = index * 45;
            return (
              <span
                key={index}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "2px",
                  height: "12px",
                  backgroundColor: f.cor,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  transformOrigin: "center",
                  opacity: 1,
                  animationName: "fogoAnim",
                  animationDuration: `${f.duration}s`,
                  animationDelay: `${f.delay}s`,
                  animationFillMode: "forwards",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
  
}

export function Historia() {
  const [showFogos, setShowFogos] = useState(false);

  return (
    <section id="historia" className="historia">
      <h2>História e Tradições</h2>
      <div className="historia-content">
      <div
  style={{ position: "relative" }}
  onMouseEnter={() => setShowFogos(true)}
  onMouseLeave={() => setShowFogos(false)}
>
  <img
    src="https://www.rioquente.com.br/images/news/0315/festa_junina_1.jpg"
    alt="Festa Junina"
    className={showFogos ? "active" : ""}
    style={{ position: "relative", zIndex: 1 }}
  />
  {showFogos && (
    <FoguinhosEspalhados quantidade={50} areaWidth={400} areaHeight={200} />
  )}
</div>

        <div className="historia-text">
          <p>
            A festa de São João tem origem nas tradições rurais e religiosas, sendo uma das
            celebrações mais animadas do Brasil. Realizada no mês de junho, esta comemoração marca o
            solstício de inverno e homenageia São João Batista. É marcada por danças típicas,
            comidas à base de milho, fogueiras, bandeirinhas coloridas e muita música tradicional
            como o forró e a quadrilha.
          </p>
          <p>
            Além de representar a devoção e a gratidão pela colheita, a festa carrega uma atmosfera
            de partilha e alegria, preservando as tradições e fortalecendo laços entre comunidades e famílias.
          </p>
        </div>
      </div>
    </section>
  );
}
