import "./style.css";
import { useCartContext } from "../../context/CartContext";
import ReactContent from "../HOC/ReactContent";
import { Button, Card } from "react-bootstrap";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  description: string;
};

const Product = ({ id, title, price, imgUrl, description }: ProductProps) => {
  const { addItemQty, decreaseItemQty, getItemQty, removeItemQty } =
    useCartContext();
  const qty: number = getItemQty(id);

  return (
    <ReactContent>
      <Card id="card-product-img" className="parent shadow mt-5 h-100">
        <Card.Img
          className="child"
          variant="top"
          src={imgUrl}
          height={"200px"}
          style={{
            objectFit: "cover",
          }}
        />
        <Card.Body className="d-flex flex-column bg-dark rounded-bottom-3">
          <Card.Title className="d-flex flex-row justify-content-between align-items-center mb-4">
            <span className="fs-5 text-light">{title}</span>
            <span className="ms-2 text-light bg-dark bg-gradient pe-3 rounded-3">
              {price}
            </span>
          </Card.Title>
          <div>
            {qty === 0 ? (
              <Button
                className="w-100 btn-secondary"
                onClick={() => addItemQty(id)}
              >
                Add to Cart
              </Button>
            ) : (
              <div>
                <div
                  className="d-flex flex-row justify-content-center align-items-center text-light"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    className="btn btn-secondary"
                    onClick={() => addItemQty(id)}
                  >
                    <i className="bi bi-plus-circle-fill"></i>
                  </Button>

                  <span className="fs-5 m-3">{qty}</span>
                  <Button
                    className="btn btn-secondary"
                    onClick={() => decreaseItemQty(id)}
                  >
                    <i className="bi bi-patch-minus"></i>
                  </Button>
                </div>
                <Button
                  className="w-100 btn-danger"
                  onClick={() => removeItemQty(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
          <Card.Footer>
            <p className="text-light">{description}</p>
          </Card.Footer>
        </Card.Body>
      </Card>
    </ReactContent>
  );
};
export default Product;
