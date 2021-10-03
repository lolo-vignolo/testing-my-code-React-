import React, {useState} from 'react';
import PropTypes from "prop-types";


const CounterApp = ({value = 10})=>{
    
   const [counter, setCounter] = useState(value);


   const handleAdd = ()=>{
        setCounter(counter +1);
       //si no tengo el valor de useState dev poner dentro del setteador una nueva funcion
       //donde c (cualquier valor) tomara el lugar del useState faltante.
      // setCounter((c)=> c + 1 );
   }

   const handleSust = ()=>{
    setCounter(counter - 1);
   }

   const resetCount = ()=>{
    setCounter(value);
    }



    return (
        <>
            <h1>CounterApp</h1> 
            <p> {counter} </p>

            <button onClick= {handleAdd}>+1</button>
            <button onClick = {resetCount} >Reset </button>
            <button onClick= {handleSust } > -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number, 

}

export default CounterApp;