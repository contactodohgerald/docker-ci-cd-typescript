
class TestController {
    calculateTwoNumber(a: number, b: number): number {
        return a * (b / 100) + (b - a)
    }
}

export default new TestController()


export class TestingController {
    addTwoNumber (arg: number, arg2: number): number {
        return arg + arg2
    }
}