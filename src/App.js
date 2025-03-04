

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

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;

