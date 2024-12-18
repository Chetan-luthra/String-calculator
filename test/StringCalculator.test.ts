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


})