// import { render } from "@testing-library/react";
import React from "react";

import { shallow } from "enzyme"
import PrimerApp from "../PrimeraApp";

describe('I´ll test my first App', () => {
    
    // test('this has to get a prop from index.js to render in my app', () => {
    //     const saludo = "Hola soy Lorenzo";
    //     const {getByText} = render (<PrimerApp saludo= {saludo} />)
    //     expect (getByText(saludo)).toBeInTheDocument();
    // })

    test('debe mostrar <PrimeraApp /> correctamente ', () => {

        const saludo = "Hola soy Lorenzo";

        const wrapper =shallow( <PrimerApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();
        
    })
    

    test('debe mostrar un subtitulo', () => {
        
        const saludo = "Hola soy Lorenzo"; 
        const subtit =  "soy un subtitulo"
        const wrapper = shallow( <PrimerApp saludo={ saludo }
        subtitulo={subtit} />);
        const textoParrafo = wrapper.find("p");
        expect (textoParrafo).toBe(subtit);
        
    })
    


    
})
