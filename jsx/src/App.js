
function App() {

  // JSX :D
  // https://es.reactjs.org/docs/introducing-jsx.html
  // condicionales en JSX
  // https://es.reactjs.org/docs/conditional-rendering.html

  const name = 'Pepito';
  const apellido = 'Mendez';
  const frase = <h1>Mi nombre es.. {name} {apellido} </h1>;

  const multiplicar = (n) => {
    return n*n;
  };
  
  const saludar = () => name + ' ' + apellido;

  return (
    <div className="App">
      {frase}
      El cuadro de 2 es {multiplicar(5)}
      Uso de operador ternario :
      { (1 === false) ? 
        <p>Es mayor...</p> : 
        <p>Es menor... </p> 
      }
      {saludar()}
    </div>
  );
}

export default App;
