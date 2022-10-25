import React, { Component } from 'react'
import{ NavLink } from 'react-router-dom';

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>                             
            </li>
            <li>
                <NavLink to="/tabla/9">Tabla 9</NavLink> 
                
            </li>
            <li>
                <NavLink to='/tabla/3'>Tabla 3</NavLink>
                
            </li>
            <li>
                <NavLink to='/tabla/21'>Tabla 21</NavLink>
                
            </li>
            <li>
                <NavLink to='/noexisto'>Sin ruta mapeada</NavLink>
                
            </li>
        </ul>
      </div>
    )
  }
}
