import { Operation } from '../enums/operation.enum';

export function detectOperation(delimiter: string): Operation {
    switch (delimiter) {
        case '+':
            return Operation.Addition;
        default:
            return Operation.Addition;
    }
}

export function extractDelimiter(input: string): { rawDelimiter: string, delimiter: RegExp, numbersSection: string } {
    if (input.startsWith("//")) {
        const delimiterEndIndex = input.indexOf("\n");
        const rawDelimiter = input.substring(2, delimiterEndIndex);
        const escapedDelimiter = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const numbersSection = input.substring(delimiterEndIndex + 1);
        return { rawDelimiter, delimiter: new RegExp(escapedDelimiter), numbersSection };
    }
    return { rawDelimiter: ',', delimiter: /,|\n/, numbersSection: input };
}


export function splitNumbers(numbers: string, delimiter: RegExp): number[] {
    const numList: number[] = [];
    let currentNumber = '';
    for (let i = 0; i < numbers.length; i++) {
        const char = numbers[i];
        if (char.match(delimiter)) {
            if (currentNumber.trim() !== '') {
                const num = parseInt(currentNumber.trim(), 10);
                if (!isNaN(num)) {
                    numList.push(num);
                }
            }
            currentNumber = '';
        } else {
            currentNumber += char;
        }
    }
    if (currentNumber.trim() !== '') {
        const num = parseInt(currentNumber.trim(), 10);
        if (!isNaN(num)) {
            numList.push(num);
        }
    }

    return numList;
}

export function validateNoNegatives(numbers: number[]): void {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}