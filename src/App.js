import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './components/Global';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
