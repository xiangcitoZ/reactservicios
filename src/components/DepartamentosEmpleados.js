import React, { Component } from 'react'
import axios from'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    cajaEmpleadosRef = React.createRef();
    state = {
        departamentos:[],
        status : false, 
        empleados:[]
    }
    mostrarEmpleados =(e) =>{
        e.preventDefault();
        var request2 = "api/Empleados/" + this.selectRef.current.value;
        var url = Global.urlEmpleados+request2
        console.log(url);
        axios.get(url).then(res =>{
            this.setState({
                status:true,
                empleados: res.data
            })
        })

    }
    loadDepartamento =() =>{
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
        this.loadDepartamento();
    }


  render() {
    return (
      <div>
        <h1>Buscardor de Empleados</h1>
        <form onSubmit={this.mostrarEmpleados}>
        <select>
        {
            this.state.status == true &&(
                this.state.departamentos.map((dept,index)=>{
                    return(<option 
                    ref={this.cajaEmpleadosRef} key={dept.Numero} value={dept.Numero}>
                        
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
