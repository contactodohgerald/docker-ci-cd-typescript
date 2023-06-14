import { describe, expect, test } from "@jest/globals"


async function returnValue(a: number, b: number): Promise<number> {
    return a + b
}

describe('testing promise', () => {
    test('equal to numbers', async () => {
        await expect(returnValue(2, 4)).resolves.toBe(6)
        await expect(returnValue(1, 5)).resolves.not.toBe(5)
    })
})