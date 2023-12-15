import React, {useState} from "react";

const Display = (props) => {

    const {form, setForm} = props

    const changeStatus = (task) => {
        
        
        let updatedForm = form.map ((tasku)=> {
            if(tasku!=task){
                return tasku;
            }
            else {
                let updatedTask = {...tasku}
                updatedTask.status = !updatedTask.status
                return updatedTask;
            }
        }
        )
        setForm(updatedForm)
    }

return (
    <div>
        {
            form.map((task, index)=>
            <div key={index}>

                {task.status === true ? <p style={{textDecoration : "line-through", color:"green"}}>{task.text}</p>: <p style={{color : "red"}}>{task.text}</p>}
                {task.status === true?<input type="checkbox"  onClick={() => changeStatus(task)} checked />
                :<input type= "checkbox" onClick={() => changeStatus(task)} />}
            </div>

            )
        }
    </div>
)
    }
export default Display;