import { Col, Row } from "react-bootstrap";
import ReactContent from "../../../components/HOC/ReactContent";
import productItems from "../../../data/products.json";
import Product from "../../../components/Products/Product";
const ProductsPage = () => {
  return (
    <ReactContent>
      <Row md={2} xs={1} lg={3} className="g-3 justify-content-center">
        {productItems.map((item) => (
          <Col key={item.id}>
            <Product
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
              price={item.price}
              title={item.title}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </ReactContent>
  );
};
export default ProductsPage;
