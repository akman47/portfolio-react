import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [homeSelected, setHomeSelected] = useState(true);
  const [currentPage, handlePageChange] = useState('Home');

  function renderPage() {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
    }
  };

  return (
    <React.Fragment>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}>
        </Header>
      <main className="content-container">
        {renderPage()}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;