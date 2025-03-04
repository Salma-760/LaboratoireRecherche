import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;
