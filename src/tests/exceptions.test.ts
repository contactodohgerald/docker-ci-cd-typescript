import { describe, expect, test } from "@jest/globals"


function toThrowException () {
    throw new Error('an error occured, not sure what caused it though!')
}

describe('check for exception', () => {
    test('exception handler', () => {
        expect(() => toThrowException()).toThrow()
        expect(() => toThrowException()).toThrow(Error)
        expect(() => toThrowException()).toThrow(/though/)
        expect(() => toThrowException()).toThrow('an error occured, not sure what caused it though!')
    })
})