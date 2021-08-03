import PageWrapper from './components/PageWrapper'
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

function App() {
  return (
    <Router>
      <PageWrapper>   
        <Route
          exact path="/"
          component={Home}
        />
        <Route
          path="/about"
          render={() => <About showHeader={true}/>}
        />
        <Route
          path="/contact"
          component={Contact}
        />
      </PageWrapper>
    </Router>
  );
}

export default App;
