import { Route, Switch } from 'wouter';
import Home from './components/js/home';
import About from './components/js/about';
import Projects from './components/js/projects';
import Contact from './components/js/contact';
import Navbar from './components/js/navbar';
import Footer from './components/js/footer'; // Import Footer
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        {/* <Route path='/about' component={About} /> */}
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
