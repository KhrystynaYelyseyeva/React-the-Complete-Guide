import React from "react";

const userInput = (props) => {
    const style = {
        fontSize:"19px",
        background: "#ffcb1d",
        minWidth: "12em",
        borderRadius: "9999em",
        border: "3px solid black",
        margin:"2vh auto",
        padding: "10px",
        paddingLeft:"20px",
        outline:"none"
    }
    return (
        <div className="UserInput">
            <input type="text"
                   onChange={props.method}
                   value={props.userName}
                   style={style}/>
        </div>
    );
};

export default userInput;