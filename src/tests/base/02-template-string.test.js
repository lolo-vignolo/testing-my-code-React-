import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";




describe ("pruebas en 02-template-string.js", ()=>{

// test("prueva en method getSaludo", () => {
    
//     const nombre = "Lorenzo";

//     const saludo = getSaludo(nombre);

//     expect(saludo).toBe("Hola " + nombre)
// })
  
test (" Return Hola carlos si no hay argument", ()=>{

    const saludo = getSaludo();

    expect(saludo).toBe('Hola Carlos !')
})


})