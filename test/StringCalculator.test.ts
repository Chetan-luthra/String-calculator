import { expect } from 'chai';
import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator

    beforeEach(() => {
        calculator = new StringCalculator();
    })

    it('should return 0 for an empty string', () => {
        expect(calculator.calculate('')).to.equal(0);
    })

    it('should return the number for a single number input', () => {
        expect(calculator.calculate('1')).to.equal(1);
    });

    it('should return the sum of two numbers', () => {
        expect(calculator.calculate('1,2')).to.equal(3);
    });

    it('should return the sum of multiple numbers', () => {
        expect(calculator.calculate('1,2,3,4,5')).to.equal(15);
    });

    it('should handle numbers with leading and trailing whitespace', () => {
        expect(calculator.calculate(' 1 , 2 , 3 ')).to.equal(6);
    });

})