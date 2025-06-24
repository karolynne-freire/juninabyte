import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Bandeirinhas } from './components/Bandeirinhas/Bandeirinhas';
import { Header } from './components/Header/Header';


export function App() {
  return (
    <>
      <Navbar />
      <Bandeirinhas />
      <Header />
      <Footer />
    </>
  );
}
