type Combine = string | number | boolean;
function Logger(value: Combine): void {
  console.log("Result ", value);
}

function add(input1: number, input2: number): number {
  Logger(input1 + input2);
  return input1 + input2;
}
let funCombine: (input1: number, input2: number) => number;

funCombine = add;

funCombine(1, 2);
