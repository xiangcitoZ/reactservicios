import React, { Component } from 'react'
import axios from'axios';
import Global from '../../Global';
import MaestroEmpleados from './MaestroEmpleados';
export default class MaestroDepartamentos extends Component {
    slectedDepartamentosRef = React.createRef();
    state = {
        departamentos:[],
        status : false, 
       idDepartamento: 0
    }
    mostrarEmpleados =(e) =>{
        e.preventDefault();
        var idDept = this.slectedDepartamentosRef.current.value;
        this.setState({
            idDepartamento : idDept
        });

    }
    loadDepartamentos =() =>{
        var request1 = "api/departamentos";
        var url = Global.urlDepartamentos+request1;
        axios.get(url).then(res =>{
            this.setState({
                status:true,
                departamentos: res.data
            })
        })
    }
    componentDidMount = () =>{
        this.loadDepartamentos();
    }


  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Maestro Departamentos Empleados</h1>
        <form onSubmit={this.mostrarEmpleados}>
        <select ref={this.slectedDepartamentosRef}>
        {
            this.state.status == true &&(
                this.state.departamentos.map((dept,index)=>{
                    return(<option 
                     key={dept.Numero} value={dept.Numero}>
                        
                        {dept.Nombre}
                    </option>)
                })
            )
        }
        </select>
        <button>
            Mostrar empleados
        </button>
        <h2 style={{color:"red"}}>
            Departamento seleccionado : {this.state.idDepartamento}
        </h2>
        </form>
        {   this.state.idDepartamento != 0 &&
                <MaestroEmpleados 
                 iddepartamento={this.state.idDepartamento}/>
        }
      </div>
    )
  }
}
