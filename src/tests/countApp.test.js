import React from "react";

import { shallow } from "enzyme"
import CounterApp from "../CounterApp.js";

describe("testisn my counter App", ()=>{

    let wrapper = shallow(<CounterApp />);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });

    
    test('que se renderice el valor inicial si no asigno ninguno ', () => {

       
        expect (wrapper).toMatchSnapshot();
    });
    

    test('debaría haber un valor por defecto de 0', () => {
        
        const valorInicial = "100";

        const wrapper = shallow(<CounterApp value={100} />);
        const number = wrapper.find("p").text().trim();

        expect(number).toBe(valorInicial);
    });
    

    test('incrementar uno con c/click', () => {

        // const wapper = shallow(<CounterApp />); al sacarlo afuera
        // no hace falta que lo escriba de nuevo aqui.

        const bt1 = wrapper.find("button").at(0).simulate("click");
        const number = wrapper.find("p").text().trim();

        expect(number).toBe("11");
        
    });

    test('decrecer uno con c/click', () => {

        // const wapper = shallow(<CounterApp />); al sacarlo afuera
        // no hace falta que lo escriba de nuevo aqui.

        const bt1 = wrapper.find("button").at(2).simulate("click");
        const number = wrapper.find("p").text().trim();

        expect(number).toBe("9");
        
    }) ;
    

    test('reiniciar al valor por defecto', () => {

        // const wapper = shallow(<CounterApp />); al sacarlo afuera
        // no hace falta que lo escriba de nuevo aqui.
        const wrapper = shallow(<CounterApp value={105} />);

        const bt0 = wrapper.find("button").at(0).simulate("click");
        
        const bt1 = wrapper.find("button").at(1).simulate("click");
        const number = wrapper.find("p").text().trim();

        expect(number).toBe("105");

       

        
        
    }) ;
    
    

})