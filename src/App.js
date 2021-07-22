import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}>
        </Header>
      <main>
        {aboutSelected && <About />}
        {contactSelected && <ContactForm />}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;