import React from "react";
import "./CharComponent.css";
import Radium from "radium";

const charComponent=(props)=>{
    const style={
      ':hover':{
          background:"lightblue",
          color:'darkblue'
      }
    };
    return (
        <div className="charComponent" onClick={props.click} style={style}>{props.character}</div>
    )
}

export default Radium(charComponent);