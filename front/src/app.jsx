import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Bandeirinhas } from './components/Bandeirinhas/Bandeirinhas';


export function App() {
  return (
    <>
      <Navbar />
      <Bandeirinhas />
      <Footer />
    </>
  );
}
