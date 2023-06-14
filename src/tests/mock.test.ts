

import { describe, jest, test } from "@jest/globals"
import { TestingController } from './../app/controllers/test.controller';

jest.mock('../app/controllers/test.controller')

describe('mock fn on function', () => {
    const mockFn = jest.fn((scaler: number) => 48 + scaler)
    test('mock function', () => {
        mockFn(4) 
        mockFn(2) 
    
        mockFn.mockImplementation(scaler => 29 + scaler)
    
        mockFn(4)
        mockFn(39)
    })
})

describe('mock fn on class instances', () => {
    test('mock on class', () => {
        const mockMethod = jest.fn<(a: number, b: number) => number>();
        jest.mocked(TestingController).mockImplementation(() => {
            return {
                addTwoNumber : mockMethod
            }
        })

        const tests = new TestingController();
        tests.addTwoNumber(34, 3);

        //console.log('Calls to method: ', mockMethod.mock.calls);

    })
})


