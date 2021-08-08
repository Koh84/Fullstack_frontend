import AdminWrapper from './components/AdminWrapper'
import PageWrapper from './components/PageWrapper'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Login from './components/Pages/Login'
import Dashboard from './components/Pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>

        <Route
          path="/admin"
          render={(props) => {
            return(
            <AdminWrapper>
              {this.props.auth.token ? <Dashboard/> : <Login/>}
            </AdminWrapper>)}
            }
        />

        
        <Route
          exact path="/"
          render={(props) => (
            <PageWrapper>   
              <Home {...props}/> 
            </PageWrapper>
          )}
        />

        <Route
          path="/about"
          render={(props) => (
            <PageWrapper>   
              <About {...props}/> 
            </PageWrapper>
          )}
        />

        <Route
          path="/contact"
          render={(props) => (
              <PageWrapper>   
                <Contact {...props}/> 
              </PageWrapper>
          )}
        />
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
