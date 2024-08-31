import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import ReactContent from "../HOC/ReactContent";
import CartItemComponent from "./CartItemComponent";
import productItem from "../../data/products.json";
type CartProps = {
  isOpen: boolean;
};

const CartComponent = ({ isOpen }: CartProps) => {
  const { closeCart, cartItems } = useCartContext();
  return (
    <ReactContent>
      <Offcanvas show={isOpen} onHide={closeCart} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItemComponent key={item.id} {...item} />
            ))}
            <div className="fw-bold fs-5 text-dark">
              Total :{" "}
              {cartItems.reduce((total, currentItem) => {
                const product = productItem.find(
                  (item) => item.id === currentItem.id
                );
                return total + (product?.price || 0) * currentItem.qty;
              }, 0)}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </ReactContent>
  );
};
export default CartComponent;
