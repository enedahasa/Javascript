import axios from "axios";
import React, { useEffect } from "react";
const Display = (props) => {
    const {pokemon, setPokemon}= props;

useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807').then(response=>{
        console.log(response.data);
        setPokemon(response.data.results);
    })
}, []);

return (
    <div>
        {pokemon.length > 0 && pokemon.map((person, index)=>{
            return (<div key={index}>{person.name}</div>)
        })}
    </div>
);
}


export default Display;