import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import Name from './components/Name/Name';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero  />
        <Projects />
        <Contact />
        <Name />
      </div>
    );
  }
}

export default App;
