import { Button, Stack } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import productItems from "../../data/products.json";
type CartItemProps = {
  id: number;
  qty: number;
};

const CartItemComponent = ({ id, qty }: CartItemProps) => {
  const { removeItemQty } = useCartContext();
  const product = productItems.find((item) => item.id === id);

  if (product == null) return null;

  return (
    <Stack
      className="d-flex flex-row justify-content-between align-items-center shadow rounded-2 p-2"
      direction="horizontal"
      gap={2}
    >
      <div className="d-flex flex-row justify-content-start align-items-center">
        <img
          src={product.imgUrl}
          style={{
            width: "125px",
            height: "75px",
            objectFit: "cover",
            borderRadius: ".5rem",
            boxShadow: "0px 0px 8px 0px black",
          }}
        />
        <div className="mx-2">
          <div>
            <span className="fw-bold">{product.title}</span> {"  "}
            {qty > 1 && (
              <span
                className="text-muted text-danger"
                style={{
                  fontSize: "1rem",
                }}
              >
                {qty}
              </span>
            )}
          </div>
          <div className="fw-bold">Price : {product.price}</div>
          <div>Total : {product.price * qty}</div>
        </div>
      </div>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => removeItemQty(product.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
export default CartItemComponent;
