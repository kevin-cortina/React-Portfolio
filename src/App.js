import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume'

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contacts') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Message') {
      return <ContactMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
  
    </>
  );
}

export default App;
