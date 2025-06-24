import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Bandeirinhas } from './components/Bandeirinhas/Bandeirinhas';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';


export function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <>

{loading ? (
        <div class="loading-screen">
        <div class="barra-container">
          <div class="barra-preenchida">
            <span class="milho">🌽</span>
          </div>
        </div>
      </div>
      ) : (
        <div className="app-content">
      <Navbar />
      <Bandeirinhas />
      <Header />
      <Main />
      <Footer />
        </div>
      )}
    </>
  );
}
