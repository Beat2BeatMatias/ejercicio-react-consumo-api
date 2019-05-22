var React = require('react');
var ReactDom = require('react-dom');
class Categorias extends React.Component {

    constructor(props){
        super(props);
        console.log(props.match.params.id);
        console.log();
        this.state={
            categories:[],
            siteId:props.match.params.id
        }

    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites/' + this.state.siteId + '/categories')
            .then(response => response.json())
            .then(categorias => {
                this.setState({
                    categories:categorias
                })
            });
    }
    verCategoria=(categoryId,name)=>{
        this.props.history.push('/categoria/' + categoryId + '/' + name);
    };
    render() {

        return (
            <div>
                <h2>Lista de categorias</h2>
                <ul className="list-group">
                    {this.state.categories.map((cat, index) =>
                        <li className="list-group-item" key={index} onClick={this.verCategoria.bind(this, cat.id, cat.name)}>
                            {cat.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }

}
export default Categorias