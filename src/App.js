import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle"

import './App.css';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscadorCoches from './components/BuscarCoches';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import MaestroDepartamentos from './components/MaestroDetalle/MaestroDepartamentos';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import Home from './components/RutasParametros/Home';
import MenuRutas from './components/RutasParametros/MenuRutas';
import Router from './components/Router';


function App() {
  return (
    <div className="App">
        {/* <ServicioCustomers/> */}
        {/* <BuscadorCustomer/> */}
        {/* <BuscadorCoches/> */}
        {/* <DepartamentosEmpleados/> */}
        {/* <MaestroDepartamentos/> */}
        {/* <TablaMultiplicar numero="5"/>
        <TablaMultiplicar numero="21"/> */}

        <Router/>
    </div>
  );
}

export default App;
