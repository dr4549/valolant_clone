import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './pages/home/index.jsx';
import Info from './pages/info/index.jsx';
import Media from './pages/media/index.jsx';
import News from './pages/news/index.jsx';
import Leaderboards from './pages/Leaderboards/index.jsx';
import Support from './pages/support/index.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news" element={<News />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
