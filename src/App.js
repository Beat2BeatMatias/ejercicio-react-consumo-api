// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Notfound from './notfound';
import Categoria from './categoria.js';
import Sitios from './sitios'
import Categorias from './categorias'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

var React = require('react');
var ReactDom = require('react-dom');

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="container">
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Sitios} />
                <Route exact path="/categorias/:id" component={Categorias} />
                <Route path="/categoria/:id/:name" component={Categoria} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </Router>
        </div>
    );
  }

}

export default App;
