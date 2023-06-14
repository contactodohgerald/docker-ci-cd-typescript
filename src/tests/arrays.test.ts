import { describe, expect, test } from "@jest/globals";

describe("array testing", () => {
    const data = ['pastries', 'vegies', 'whole', 'beverages', 'water']
    test('check if contain in array', () => {
        expect(data).toContain('vegies')
        expect(new Set(data)).toContain('pastries')
        expect(data).toContain('whole')
    })
})