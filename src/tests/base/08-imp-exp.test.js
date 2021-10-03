import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe("using it to test 08 imp-export", ()=>{
    test('receive information from heroes Object', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
    });

    test('receive undefined from heroes Object', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toBe(undefined);
    });
    
});


describe("testing the second function", ()=>{

    test('get an array from DC owner', () => {

        const ownerName = "DC"; 

        const byOwner = getHeroesByOwner(ownerName);

        const heroeOwner =heroes.filter(u=>u.owner===ownerName)

        console.log(heroeOwner);

        expect(byOwner).toEqual(heroeOwner);
        
        
    })
    
    test('array equel 2', () => {
        const ownerName = "Marvel"; 
        const heroes = getHeroesByOwner(ownerName);

        expect(heroes.length).toBe(2);

    })
    


} )