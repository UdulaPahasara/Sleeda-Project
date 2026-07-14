import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.jsx';
import Event from './pages/Event.jsx';
import News from './pages/News.jsx';
import Projects from './pages/Projects.jsx';
import Gallery from './pages/Gallery.jsx';
import SleedaTechno from './pages/SleedaTechno.jsx';
import Committee from './pages/Committee.jsx';
import CanSupport from './pages/CanSupport.jsx';
import NeedSupport from './pages/NeedSupport.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AnnualReport from './pages/AnnualReport.jsx';
import Resources from './pages/Resources.jsx';
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
        <Route path="/supporting-new-arrivals/can-support" element={<CanSupport />} />
        <Route path="/supporting-new-arrivals/need-support" element={<NeedSupport />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
