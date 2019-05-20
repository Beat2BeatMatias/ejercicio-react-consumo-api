// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Categoria from './categoria.js';

var React = require('react');
var ReactDom = require('react-dom');

class Categorias extends React.Component{
  constructor(props){
    super(props);
    this.state={
      categories:[]
    }
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites/MLA/categories')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            categories:data
          })
        });
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.categories.map((cat,index) =>
                <li key={index}><Categoria id  />

                </li>
            )}
          </ul>
        </div>
    );
  }

}
//
// Categorias.defaultProps={
//   nombre: "Matias"
// };

export default Categorias;
