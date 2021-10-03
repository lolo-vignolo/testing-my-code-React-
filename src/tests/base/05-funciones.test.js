import { getUsuarioActivo } from "../../base/05-funciones";

// import { getUser } from "../../base/05-funciones"

describe("testing 05-function", () => {

// test('debe retornar una objeto ', () => {
    
//     const userTest = {
//         uid: 'ABC123',
//         username: 'El_Papi1502'
//     }

//     const user = getUser();
//     expect(user).toStrictEqual(userTest);

// })


test('debe retornar una objeto ', () => {

    const nombre = "Lorenzo";

    const testGetUsiuarioAct = {
        uid: 'ABC567',
        username: nombre,
    }

    const activo = getUsuarioActivo(nombre);

    expect(activo).toEqual(testGetUsiuarioAct);

})

})
