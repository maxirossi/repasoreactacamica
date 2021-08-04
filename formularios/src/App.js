import React, { useState} from "react";

function App() {

  const [name,updateName] = useState('');
  const [saludo,updateSaludo] = useState('');
  
  const saludar = (e) => {
    let name = e.target.value;
    updateName(name);
    name !== '' ? updateSaludo('Hola ' + name) : updateSaludo('');
  };

  return (
    <div className="App">
      <br/>
      <label>Tu Nombre : </label>
      <input type="text" placeholder="Tu nombre" value={name} onChange={saludar} />
      <p>{saludo}</p>
    </div>
  );
}

export default App;
