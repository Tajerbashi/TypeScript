enum Color {
  BLUE,
  GREEN,
  RED,
  BLACK,
}

const product: {
  name: string;
  price: number;
  discount: string[];
  color: Color;
  model: [number, string];
} = {
  name: "Phone",
  price: 9900,
  discount: ["smr", "atm"],
  color: Color.BLACK,
  model: [2014, "toyta"],
};

console.log("Product 1: ", product.color == Color.BLACK);
console.log("Product 2: ", product.color == Color.BLUE);
console.log("=======================");
var Calculator = {
  Sum: (input1: number | string, input2: number, string) => {
    if (typeof input1 === "number" && typeof input2 === "number") {
      return input1 + input2;
    } else {
      return input1.toString() + input2.toString();
    }
  },
};
