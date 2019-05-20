// import React from 'react';
// import logo from './logo.svg';
import './App.css';

var React = require('react');
var ReactDom = require('react-dom');

class Categoria extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: props.id,
            name: props.name,
            total_item: props.total_item
        }
    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/categories/'+this.state.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    id:data.id,
                    name:data.name,
                    total_item:data.total_items_in_this_category
                })
            });
    }

    render() {
        return (
            <div className="container">
                <h1>Categoria</h1>
                <div className="row">
                    <div className="col-sm">
                        <img src="http://resources.mlstatic.com/category/images/6fc20d84-2ce6-44ee-8e7e-e5479a78eab0.png" />
                    </div>
                    <div className="col-sm">
                        <ul className="list-group">
                            <li className="list-group-item">Id: {this.state.id}</li>
                            <li className="list-group-item">Name: {this.state.name}</li>
                            <li className="list-group-item">Permalink: {this.state.total_item}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

Categoria.defaultProps={
    nombre: "Matias"
};

export default Categoria;
