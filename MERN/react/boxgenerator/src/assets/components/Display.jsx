import React, {useState} from "react";

const Display = (props) => {

const{ box} = props


return (

    <>

     {
        box.map((kutia,index) =>(

            <div key={index} style={{
                width: "50px",
                height: "50px",
                margin: "10px",
                display: "inline-block",
                backgroundColor: kutia,
            }}>

            </div>

        ) )

     }
     
    </>
)

}

export default Display;