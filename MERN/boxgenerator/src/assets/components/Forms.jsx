import React, {useState} from "react";

const Form = (props) => {

    const { box,setBox } = props

    const [color, setColor] = useState("")

    const CreateBox= (e) => {

        e.preventDefault();
        setBox ([...box,color])
    }


return (

    <>

    <form onSubmit={CreateBox}>
        <label> Color</label>
        <input type="text" name="" id="" onChange={(e) => setColor(e.target.value)}/>
        <button>Add</button>
    </form>

    </>
)

}

export default Form;