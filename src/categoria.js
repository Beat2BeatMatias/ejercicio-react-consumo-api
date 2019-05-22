// import React from 'react';
// import logo from './logo.svg';
import './App.css';

var React = require('react');
var ReactDom = require('react-dom');

class Categoria extends React.Component{
    constructor(props){
        super(props);
        console.log(props.match.params);
        this.state={
            id: props.match.params.id,
            name: props.match.params.name,
            total_item: null,
            urlImg: null
        }
    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/categories/'+this.state.id)
            .then(response => response.json())
            .then(data => {
                console.log(data.picture);
                this.setState({
                    id:data.id,
                    name:data.name,
                    total_item:data.total_items_in_this_category,
                    urlImg:data.picture
                })
            });
    }

    render() {
        return (
            <div className="container">
                <h2>Categoria</h2>
                <hr/>
                <div className="row">
                    <div className="col-sm">
                        <img src={this.state.urlImg} />
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
