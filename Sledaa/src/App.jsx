import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.jsx';
import Event from './pages/Event.jsx';
import News from './pages/News.jsx';
import Projects from './pages/Projects.jsx';
import Gallery from './pages/Gallery.jsx';
import SleedaTechno from './pages/SleedaTechno.jsx';
import Committee from './pages/Committee.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/techno-nite-2023" element={<SleedaTechno />} />
        <Route path="/committee" element={<Committee />} />
        {/* You can add more routes here for other pages like /contact-us, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
