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
        fetch('localhost:9090/sites/')
        //fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites')
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
                <form onSubmit={this.verCategorias}>
                    <hr/>
                    <select className="custom-select" id="s_sites" required>
                        <option value="">Eliga un pais</option>
                    {this.state.sites.map((sites, index) =>
                        <option key={index} value={sites.id}>{sites.name}</option>
                    )}
                    </select>
                    <br/>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="submit"/>
                </form>                
            </div>
        )
    }

}
export default Sitios