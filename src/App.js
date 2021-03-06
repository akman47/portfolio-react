import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Terminal from './pages/Terminal';
import NoMatch from './pages/NoMatch';

function App() {
  const [currentPage, handlePageChange] = useState('Terminal');

  // function renderPage() {
  //   switch (currentPage) {
  //     case "Home":
  //       return <Home />;
  //     case "About":
  //       return <About />;
  //     case "Portfolio":
  //       return <Portfolio />;
  //     case "Contact":
  //       return <ContactForm />;
  //     case "Resume":
  //       return <Resume />;
  //   }
  // };

  return (
    <React.Fragment>
      <Router>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}>
        </Header>
      <main className="content-container">
        <Switch>
          <Route exact path="/portfolio-react" component={Terminal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/resume" component={Resume} />
          <Route component={NoMatch} />
        </Switch>
      </main>
      <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;