import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
export default class BuscadorCoches extends Component {
    cajaMarcaRef = React.createRef();
    filtrarCoches = (e) => {
        e.preventDefault();
        //NO VOY A UTILIZAR AXIOS
        var coches = this.state.coches;
        var marca = this.cajaMarcaRef.current.value.toLowerCase();
        //DEBEMOS RECORRER TODOS LOS COCHES DEL ARRAY Y
        //TENER UN IF
        //VOY A UTILIZAR UN METODO DE Array LLAMADO filter()
        // Array.filter(obj => obj.propiedad == valor)
        var cochesfiltrados = 
            coches.filter(car => car.marca.toLowerCase().includes(marca));
        //ASIGNAMOS DE NUEVO LOS COCHES DE STATE
        this.setState({
            coches: cochesfiltrados
        });
    }
    state = {
        coches: [],
        status: false
    }

    loadCoches = (e) => {
        //ESTA PREGUNTA ES PARA CARGAR DE NUEVO LA PAGINA
        if (e != null){
           e.preventDefault();  
        }
        var request = "/webresources/coches";
        var url = Global.urlCoches + request;
        axios.get(url).then(res => {
            this.setState({
                status: true,
                coches: res.data
            })
        });
    }
    componentDidMount = () => {
        this.loadCoches();
    }
  render() {
    return (
      <div>
        <h1>Buscador Api Coches</h1>
        <form>
            <label>Marca: </label>
            <input type="text" ref={this.cajaMarcaRef}/>
            <button onClick={this.filtrarCoches}>
                Filtrar coches
            </button>
            <button onClick={this.loadCoches}>
                Mostrar todos coches
            </button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>MARCA</th>
                    <th>MODELO</th>
                    <th>CONDUCTOR</th>
                    <th>IMAGEN</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true &&
                    (
                        this.state.coches.map((coche, index) => {
                            return (<tr key={index}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td>
                                    <img style={{width: "80px", height: "80px"}}
                                    src={coche.imagen}/>
                                </td>
                            </tr>);
                        })
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }

}
