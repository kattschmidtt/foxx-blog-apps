import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteContainer from './components/SiteContainer/SiteContainer.jsx';
import BlogList from './components/Blog/BlogList.jsx';
import MapboxComponent from './components/Apps/MapboxApp/MapboxApp.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import LeafletComponent from './components/Apps/LeafletApp/LeafletApp.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<SiteContainer />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path='/projects' element={<></>} />
          <Route path="/projects/mapbox" element={<MapboxComponent />} />
          <Route path="/projects/leaflet" element={<LeafletComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;