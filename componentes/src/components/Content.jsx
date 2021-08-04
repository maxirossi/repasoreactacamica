

import Alumnos from './Alumnos';

function Content() {

const alumnos = ['Wilker', 'Lore', 'Maru', 'Jose'];

    return (
      <div className="App">
          <h1>Content</h1>
          { alumnos.map((alumno) => {
              return <Alumnos nombre={alumno} />
          })}
      </div>
    );
  }
  
  export default Content;