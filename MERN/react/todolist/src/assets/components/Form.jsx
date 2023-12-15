import React, {useState} from "react";
 
const Form = (props) => {

    const [text, setText] = useState("")
    const [status, setStatus] = useState (false)
    const [error, setError] = useState ("")
    const {form, setForm} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.length < 2 ){
            setError("Todo text must be longer than 2 characters")
        }
        else{
            setForm([...form, {text:text, status: status } ])
            setError("")
            setText("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} placeholder="What do you want to do" onChange={(e)=> setText(e.target.value)}/>

            {error ? <p>{error}</p> : null}
            <button>Add</button>
        </form>

    )
}

export default Form;