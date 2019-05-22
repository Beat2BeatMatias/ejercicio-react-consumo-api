var React = require('react');
var ReactDom = require('react-dom');
class Sitios extends React.Component {

    constructor(props){
        super(props);
        this.state={
            sites:[]
        }
        this.verCategorias=this.verCategorias.bind(this);
    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites')
            .then(response => response.json())
            .then(sites => {
                this.setState({
                    sites:sites
                })
            });
    }
    verCategorias(){
        let siteId=document.getElementById("s_sites").value;
        this.props.history.push('/categorias/' + siteId)
    };
    render() {

        return (
            <div>
                <h2 id="titulo">Sitios</h2>
                <select id="s_sites" onChange={this.verCategorias}>
                {this.state.sites.map((sites, index) =>
                    <option key={index} value={sites.id}>{sites.name}</option>
                )}
                </select>
            </div>
        )
    }

}
export default Sitios