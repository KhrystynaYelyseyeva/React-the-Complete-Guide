import React from "react";
import Radium from "radium";

const validationComponent = (props) => {
    const style={
        color:'green',
    };
    let message = "text long enough";

    if (props.length <= 5) {
        message = "text too short";
        style.color='red';
    }
    return (

        <div className="validationComponent">
            <output style={style}>{message}</output>
        </div>
    )
};

export default Radium(validationComponent);