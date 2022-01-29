import logo from './logo.svg';
import './App.css';
//components
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Recreation from './components/RecreationMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Portfolio />
      <AboutMe />
      <Recreation />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
// 