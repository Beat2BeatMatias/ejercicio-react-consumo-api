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
      categories:[],
      sites:[],
      clicked:false,
      index:null
    };
    this.verCategoria=this.verCategoria.bind(this);
    this.verCategorias=this.verCategorias.bind(this);
  }
  componentDidMount() {
    // fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites')
    //     .then(response => response.json())
    //     .then(sites => {
    //       console.log(sites);
    //       this.setState({
    //         sites:sites
    //       })
    //     });
    fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites/MLA/categories')
        .then(response => response.json())
        .then(categorias => {
          console.log(categorias);
          this.setState({
            categories:categorias
          })
        });
  }
  verCategoria(index){
    console.log("entró");
    this.setState({
      index:index,
      clicked:true
    });
    //ReactDom.render(<Categoria id={id} name={name}/>, document.getElementById('root'))
  }
  verCategorias(){
    console.log("entró");
    this.setState({
      index:null,
      clicked:false
    });
    //ReactDom.render(<Categoria id={id} name={name}/>, document.getElementById('root'))
  }


  render() {
    var vista;
    if (!this.state.clicked) {
        vista = <div>
                   <h2>Lista de categorías</h2>
                   <ul className="list-group">
                      {this.state.categories.map((cat, index) =>
                          <li className="list-group-item" key={index} onClick={this.verCategoria.bind(this, index)}>
                            {cat.name}
                          </li>
                      )}
                   </ul>
                </div>
    } else {
       vista = <div>
                  <Categoria id={this.state.categories[this.state.index].id}/>
                  <button className="btn btn-primary" onClick={this.verCategorias}>VOLVER</button>
               </div>
    }

    return (
        <div className="container">
          {vista}
        </div>
    );
  }

}
//
// Categorias.defaultProps={
//   nombre: "Matias"
// };

export default Categorias;
