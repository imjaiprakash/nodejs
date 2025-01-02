import { expect } from "chai";
import Calculator from "../src/calc";

describe("Test calculator class.", ()=>{
    it('Return sum', ()=>{
        // arrange
        const calc = new Calculator();
        
        // act
        const res = calc.add(5,7);

        // assert
        expect(res).to.equal(5);
    });

    it('Return sub', ()=>{
        // arrange
        const calc = new Calculator();
        
        // act
        const res = calc.sub(15,7);

        // assert
        expect(res).to.equal(8);
    });
});