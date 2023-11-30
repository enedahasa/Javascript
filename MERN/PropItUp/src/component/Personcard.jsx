import React, { useState } from "react";

const Personcard = (props) => {

    return (
        <>
            <h2>{props.name}</h2>
            <p>Age: {props.age} </p>
            <p>Hair color: {props.description}</p>
        </>
    
    )

}

export default Personcard

