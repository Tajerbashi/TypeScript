function multiply(a: number, b: number) {
    return a * b;
}
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}
function add1(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;