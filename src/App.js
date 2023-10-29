import './App.css';
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';





function App() {
  return (
    <div className="App">
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contacts" element={<Contacts/>} />
    </Routes>
    <Footer />
  </Router>
    </div>
  );
}

export default App;
 