interface IBaseEntity {
  Id: number;
  Title: string;
}
class Product implements IBaseEntity {
  Id: number;
  Title: string;

  constructor(Id: number, name: string) {
    this.Id = Id;
    this.Title = name;
  }
}
interface IDropDown {
  Title: string;
  Value: number;
}
class DropDown implements IDropDown {
  Title: string;
  Value: number;
  constructor(Title: string, Value: number) {
    this.Title = Title;
    this.Value = Value;
  }
}

abstract class BaseService<TEntity extends IBaseEntity> {
  private DataList: TEntity[] = [];

  constructor() {}

  Create = (TEntity: TEntity): void => {
    this.DataList.push(TEntity);
  };

  Update = (TEntity: TEntity): number => {
    const index = this.DataList.findIndex((item) => item.Id === TEntity.Id);
    if (index !== -1) {
      this.DataList[index] = TEntity;
    } else {
      this.DataList.push(TEntity);
    }
    return TEntity.Id;
  };

  Delete = (TEntity: TEntity): void => {
    this.DataList = this.DataList.filter((item) => item.Id !== TEntity.Id);
  };

  Get = (id: number): TEntity | undefined => {
    return this.DataList.find((item) => item.Id === id);
  };
  GetAll = (): TEntity[] | undefined => {
    return this.DataList;
  };

  GetDropDown = (): DropDown[] => {
    return this.DataList.map((item) => new DropDown(item.Title, item.Id));
  };
}

class ProductService extends BaseService<Product> {}

const productService = new ProductService();
productService.Create(new Product(1, "Product A"));
productService.Create(new Product(2, "Product B"));
productService.Create(new Product(3, "Product C"));
productService.Create(new Product(4, "Product D"));
productService.Create(new Product(5, "Product E"));
productService.Create(new Product(6, "Product F"));
productService.Create(new Product(7, "Product G"));
productService.Create(new Product(8, "Product I"));
productService.Create(new Product(9, "Product J"));
productService.Create(new Product(10, "Product K"));

const product = productService.Get(1); // Gets the product with Id 1
productService.Update(new Product(1, "Updated Product A")); // Updates product with Id 1
productService.Delete(new Product(2, "Product B")); // Deletes product with Id 2

console.log(productService.GetDropDown());
