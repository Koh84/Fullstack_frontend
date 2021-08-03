import PageWrapper from './components/PageWrapper'
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'

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
      </PageWrapper>
    </Router>
  );
}

export default App;
