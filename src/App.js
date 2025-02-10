import { Route, Switch } from 'wouter';
import Home from './components/js/Home';
// import Intro from './components/js/intro';
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';
import Navbar from './components/js/Navbar';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        {/* <Route path='/intro' component={Intro} /> */}
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
