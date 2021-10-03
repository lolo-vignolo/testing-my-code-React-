import React from "react";
import PropTypes  from "prop-types";


//functional components:

// const PrimerApp = (props )=>{
const PrimerApp = ({saludo , subtitulo} )=>{


    // const saludo = "Hi mate,";
    // console.log (props);


    return (
   <> 
        <h1>{ saludo }</h1>
        {/* <h1>{props.saludo}</h1> */}
       {/* <pre> {JSON.stringify(saludo, null, 3)}</pre> */}
        <p>{ subtitulo }</p>

   </>
);
//1
//2
}

PrimerApp.propTypes = {
    saludo : PropTypes.string.isRequired,

}

PrimerApp.defaultProps = {
    subtitulo: "soy un subtitulo"
}

export default PrimerApp;





//  1- voy a usar Div en lugar de fragment si tengo que utilizar una class por ejemplo
//  ( <div>
//     <h1>Hola mundo</h1>
// </div>
// );


// // 2 - fragment lo puedo usar tambien solo poniendo <> ,,,,, </>
// <Fragment> 
// <h1>Hola mundo</h1>
// <p>training using React</p>

// </Fragment>