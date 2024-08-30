//  Decorator
function Logger(target: Function) {
  console.log("Logger ...");
}

@Logger
class Product {
  title = "Book";

  constructor() {
    console.log("Create Product Object");
  }
}
const newProduct = new Product();
console.log(newProduct);
