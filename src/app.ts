//  Decorator
function Logger(logString: string) {
  return (target: Function) => {
    console.log(logString);
    console.log(target);
  };
}

function addToDom(content: string, id: string) {
  return function (_: Function) {
    const element = document.getElementById(id);
    console.log("Render Template", element?.id);
    if (element) {
      element.innerHTML = content;
      let counter = 0;
      element.addEventListener("click", () => {
        console.log(`Counter ${++counter}`);
      });
    }
  };
}

@Logger("Logging Product ...")
@addToDom('<a class="btn btn-primary">First</a>', "app1")
@addToDom('<a class="btn btn-dark">Second</a>', "app2")
@addToDom('<a class="btn btn-danger">Thirth</a>', "app3")
class Product {
  title = "Book";

  constructor() {
    console.log("Create Product Object");
  }
}
const newProduct = new Product();
console.log(newProduct);
