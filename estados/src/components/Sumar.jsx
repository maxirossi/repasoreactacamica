import React, {useState} from "react";

function Sumar(props) {

const [like,updateLike] = useState(false);

    const likeAction = () => {
        updateLike(!like);
    }

    const sumarAction = () => {
       props.evento('+');
    }

    return (
      <div>
          <h1>Sumar</h1>
          <button type="button" onClick={likeAction}>
          Like / UnLike
          </button> <br/><br/>
          Estado local : { (like) ? <p> Like :) </p> : <p> Unlike :( </p> }
          <br/>
          <button type="button" onClick={sumarAction}>
          Sumar!
          </button> <br/><br/>
          <hr/>
      </div>
    );
  }
  
  export default Sumar;
  