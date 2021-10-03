import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe("testing promesas", ()=>{

    test('debe retornar un heroe async ', (done) => {
        

        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe =>{
            expect(heroe).toBe(heroes[0]);
            done();
        });

    });

    test('get an error if this heroe by id there is not exist', (done) => {

        const id = 10;
        getHeroeByIdAsync(id)
        .catch(err=>{
          expect(err).toBe('No se pudo encontrar el héroe');
          done();
        });
        
    })
    
    

})