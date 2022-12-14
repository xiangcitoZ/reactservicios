import React, { Component } from 'react'
import axios from'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    slectedDepartamentosRef = React.createRef();
    state = {
        departamentos:[],
        status : false, 
        empleados:[]
    }
    mostrarEmpleados =(e) =>{
        e.preventDefault();
        var idDept = this.slectedDepartamentosRef.current.value;
        var request2 = "api/Empleados/EmpleadosDepartamento/" + idDept;
        console.log(idDept)
        var url = Global.urlEmpleados+request2
        console.log(url);
        axios.get(url).then(res =>{
            this.setState({
                status:true,
                empleados: res.data
            })
        })

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
        <h1>Buscardor de Empleados</h1>
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
        </form>
        {
            this.state.status == true &&(
                this.state.empleados.map((empl,index)=>{
                    return(<li 
                     key={empl.idEmpleado}>
                        {empl.apellido}
                    </li>)
                })
            )
        }
      </div>
    )
  }
}
