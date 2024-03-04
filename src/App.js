import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteContainer from './components/SiteContainer/SiteContainer.jsx';
import BlogList from './components/Blog/BlogList.jsx';
import MapboxComponent from './components/Apps/MapboxApp/MapboxApp.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteContainer />}>
          <Route index element={<SiteContainer />} />
          <Route path='blog' element={<BlogList />} />
          <Route path='data' element={<MapboxComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;