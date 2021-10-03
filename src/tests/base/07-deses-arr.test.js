import { retornaArreglo } from "../../base/07-deses-arr";



describe("Pruevas con arreglos 07-destructuration arr.", ()=>{

test('should return a destructuration from an array ', () => {
    
    // const arr = retornaArreglo();

    // expect(arr).toEqual(['ABC', 123]);
    
    const [letras, numeros]= retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");

})


})

