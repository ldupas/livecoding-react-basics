import { Routes, Route  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import AnimalDetails from './components/animal-cards/AnimalDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="a-propos" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="animaux/:id" element={<AnimalDetails />} />
        {/* Gestion de page erreur
        <Route path="animaux/*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
