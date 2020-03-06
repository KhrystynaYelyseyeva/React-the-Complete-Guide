import React from "react";

const userOutput=(props)=>{
    const style = {
        background: "#ffcb1d",
        width: "200px",
        padding: "3px",
        margin:"15px auto"
    }
    return(
        <div className="UserOutput" >
            <p><b>The Carpathian Mountains</b> The most popular destination for locals and travelers in Ukraine during winter is the Carpathians. Everyone will find an activity here: one can go skiing, snowboarding, or hiking. Creative people will have the opportunity to capture fabulous landscapes. Others can just enjoy themselves and watch the snow falling from the window of their cosy chalet. The Carpathian Mountains welcome thousands of tourists each year and offer a huge number of winter resorts for every taste and budget.</p>
            <p style={style}>You are: {props.username} </p>
            <hr/>
        </div>
    );
};

export default userOutput;