import { describe, expect, test } from "@jest/globals";

describe("String Tests", () => {
    test("check for values in string", () => {
        const data = "just for testing purpose"
        expect(data).toMatch(/us/)
        expect(data).toMatch(/or/)
        expect(data).toMatch(/test/)
        expect(data).toMatch(/pose/)
    })
})