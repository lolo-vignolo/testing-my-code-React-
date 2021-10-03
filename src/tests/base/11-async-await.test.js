import { getImagen } from "../../base/11-async-await"


describe('testings async and awaits', () => {
    test('should receive an URL with a picture', async() => {

       const url = await  getImagen();

       expect(url.includes("https://")).toBe(true);

        
    })
    
    
})
