import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './touts/Header';
import Footer from './touts/Footer';
import Connexion from './touts/Connexion';
import Inscription from './touts/Inscription';
import Accueil from './touts/Accueil';
import Formation from './touts/Formation';
import Financement from './touts/Financement';
import Apropos from './touts/Apropos';
import Blog from './touts/Blog';
import After from './touts/After';
import Modification from './touts/Modification';
import Profil from './touts/Profil';

function AppLayout() {
  const location = useLocation();

  // Liste des chemins où tu ne veux pas afficher le Header
  const noHeaderPaths = ['/profil', '/modification'];

  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/financement" element={<Financement />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/modification" element={<Modification />} />
        <Route path="/after" element={<After />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;