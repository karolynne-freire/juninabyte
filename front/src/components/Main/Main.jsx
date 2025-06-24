import React from 'react';
import './Main.css'

export function Main() {
  return (
    <main className="main-cards">
      <div className="card">
        <img src="https://s2-g1.glbimg.com/0eY3-2xQSfsjjsmpVQy-jtk9L58=/0x0:591x447/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/Y/j/fMYcLJQ9OCHAkuXFi8lg/foto-comidas.jpg" alt="Comidas típicas" />
        <h2>Comidas Típicas</h2>
        <p>Delícias do São João para todos os gostos!</p>
      </div>

      <div className="card">
        <img src="https://cdn.folhape.com.br/upload/dn_arquivo/2021/06/2606-lecticia-greg.jpg" alt="Forró e Música" />
        <h2>Forró e Música</h2>
        <p>O arrasta‑pé não pode faltar nesta festa!</p>
      </div>

      <div className="card">
        <img src="https://s2.glbimg.com/08K_ZoM6SVMpPvqvnVnok6FBom27oQ2HH2MBZY5FgapIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/06/13/fogo_1.jpg" alt="Fogos e Tradições" />
        <h2>Fogos e Tradições</h2>
        <p>Espetáculo de luz e cor para celebrar!</p>
      </div>
    </main>
  );
}