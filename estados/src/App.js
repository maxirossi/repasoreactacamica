
import React, {useState} from "react";
import './App.css';
import Sumar from './components/Sumar';
import Restar from './components/Restar';

function App() {

  const [contador,updateContador] = useState(0); // estado global
  
  const updateEstadoGlobal = (accion) => {
    if (accion === '+'){
      updateContador(contador + 1);
    }else{
      updateContador(contador - 1);
    }
  }

  return (
    <div className="App">
      <br/>
      El contador es : {contador} <br/><br/>
      <hr/>
      <Sumar evento={updateEstadoGlobal}></Sumar>
      <Restar evento={updateEstadoGlobal}></Restar>
    </div>
  );
}

export default App;
