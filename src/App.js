<<<<<<< HEAD


import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for React Router v6
import Barre from './Barre'; // Ton composant Barre
import Accueil from './pages/Accueil';
import Evenements from './pages/Evenements';
import Actualites from './pages/Actualites';
import Presentation from './pages/Presentation';
import Recherche from './pages/Recherche';
import Publications from './pages/Publications';
import Formation from './pages/Formation';
import Emplois from './pages/Emplois';
=======
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
>>>>>>> 9e75013a964f3c185add1699758d4e87d89f8430

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/actualites/actualites" element={<Actualites />} />
          <Route path="/presentation/equipe" element={<Presentation />} />
          <Route path="/recherche/projets" element={<Recherche />} />
          <Route path="/publications/articles" element={<Publications />} />
          <Route path="/formation/cours" element={<Formation />} />
          <Route path="/emplois/offres" element={<Emplois />} />
        </Routes>
=======
      <div className="flex flex-col min-h-screen">
        {/* Affichage du Logo */}
        <Logo />

        {/* Navbar collée au Logo */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Contenu principal avec flex-grow pour remplir l'espace */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Footer toujours en bas */}
        <Footer />
>>>>>>> 9e75013a964f3c185add1699758d4e87d89f8430
      </div>
    </Router>
  );
}

export default App;

