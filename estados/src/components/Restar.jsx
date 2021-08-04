import React, {useState} from "react";

function Restar(props) {

const [like,updateLike] = useState(false); // estado local

    const likeAction = () => {
        updateLike(!like);
    }

    const restarAction = () => {
        props.evento('-');
     }

    return (
      <div>
          <h1>Restar</h1>
          <button type="button" onClick={likeAction}>
          Like / UnLike
          </button> <br/> <br/> 
          Estado local : { (like) ? <p> Like :) </p> : <p> Unlike :( </p> }
        <button type="button" onClick={restarAction}>
            Restar !
        </button>
      </div>
    );
  }
  
  export default Restar;
  