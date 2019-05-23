var React = require('react');
var ReactDom = require('react-dom');
class Categorias extends React.Component {

    constructor(props){
        super(props);
        this.state={
            categories:[],
            siteId:props.match.params.id
        }
        this.mounted=false;

    }
    componentDidMount() {
        //fetch('http://localhost:9090/sites/' + this.state.siteId + '/categories')
        fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites/' + this.state.siteId + '/categories')
            .then(response => response.json())
            .then(categorias => {
                this.mounted=true;
                this.setState({
                    categories:categorias
                })
            }).catch(function(error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
              });
    }
    verCategoria=(categoryId,name)=>{
        this.props.history.push('/categoria/' + categoryId + '/' + name);
    };
    render() {
        let view=<div><h2>Lista de categorias</h2></div>
        if(this.mounted){
            if (this.state.categories.length > 0){
                view=<div>
                <h2>Lista de categorias</h2>
                <hr/>
                <ul className="list-group">
                    {this.state.categories.map((cat, index) =>
                        <li className="list-group-item" key={index} onClick={this.verCategoria.bind(this, cat.id, cat.name)}>
                            {cat.name}
                        </li>
                    )}
                </ul>
                </div>
            }else{
                view=<div>
                    <h2>Lista de categorias</h2>
                <strong>No contiene categorias...</strong>
            </div>
            }
        }
        return (
            <div>
                {view}
            </div>
        )
    }

}
export default Categorias