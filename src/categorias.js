// // import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
//
// var React = require('react');
// var ReactDom = require('react-dom');
//
// class Categorias extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             categories:[]
//         }
//     }
//     componentDidMount() {
//         fetch('https://api.mercadolibre.com/categories/MLA1071')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 this.setState({
//                     categories:data
//                 })
//             });
//     }
//
//     render() {
//         return (
//
//             <div>
//                 <ul>
//                     {this.state.categories.map(cat =>
//                         <li>cat.name</li>
//                     )}
//
//                 </ul>
//             </div>
//         );
//     }
//
// }
//
// Categorias.defaultProps={
//     nombre: "Matias"
// };
//
// export default Categorias;
