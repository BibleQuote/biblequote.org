import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Main from './Main';
import Footer from './Footer';
import NavBar from './NavBar';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-128935379-1');
    ReactGA.pageview('/');
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
