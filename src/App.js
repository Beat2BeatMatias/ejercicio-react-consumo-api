// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Categoria from './categoria.js';

var React = require('react');
var ReactDom = require('react-dom');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      categories:[],
      sites:[],
      clicked:false,
      index:null,
      flag_categorias:false
    };
    this.verCategoria=this.verCategoria.bind(this);
    this.verCategorias=this.verCategorias.bind(this);
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites')
        .then(response => response.json())
        .then(sites => {
          console.log(sites);
          this.setState({
            sites:sites
          })
        });

  }
  verCategoria(index){
    console.log("entró");
    var select=document.getElementById("s_sites");
    ReactDom.findDOMNode(select).style.display="none";
    var titulo=document.getElementById("titulo");
    ReactDom.findDOMNode(titulo).style.display="none";
    this.setState({
      index:index,
      clicked:true
    });
    //ReactDom.render(<Categoria id={id} name={name}/>, document.getElementById('root'))
  }
  verCategorias(){
    console.log("entró");
    var titulo=document.getElementById("titulo");
    ReactDom.findDOMNode(titulo).style.display="block";
    var select=document.getElementById("s_sites");
    ReactDom.findDOMNode(select).style.display="block";
    var siteId=document.getElementById("s_sites").value;
    console.log(siteId);
    fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites/'+ siteId +'/categories')
        .then(response => response.json())
        .then(categorias => {
          console.log(categorias);
          this.setState({
            categories:categorias
          })
        });
    this.setState({
      index:null,
      clicked:false,
      flag_categorias:true
    });
    //ReactDom.render(<Categoria id={id} name={name}/>, document.getElementById('root'))
  }


  render() {
    var vista;
    if(this.state.flag_categorias) {
      if (!this.state.clicked) {
        vista = <div>
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
    }
    return (
        <div className="container">
          <h2 id="titulo">Lista de categorías</h2>
          <select id="s_sites" onChange={this.verCategorias}>
            {this.state.sites.map((sites,index) =>
                <option key={index} value={sites.id}>{sites.name}</option>
            )}
          </select>
          {vista}
        </div>
    );
  }

}

export default App;
