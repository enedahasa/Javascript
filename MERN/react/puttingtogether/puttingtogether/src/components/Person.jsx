import React,{useState} from "react";
const Person = (props) => {

    const {name, description}=props;
    const [age,setAge]= useState(props.age)
    const countage= ()=>{
        setAge(age+1)
    }
    return(
        <>
            <h1>{name}</h1>
            <p>Age: {age} </p>
            <p>{props.description}</p>
            <button  onClick={countage}>Birthday Button</button>
        </>

    )
}

export default Person;