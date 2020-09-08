import React from "react";
import ReactStars from "react-stars";
import "./ProductDetails.scss";
import {
  Row,
  Col,
  Image,
  Button,
  Container,
  Carousel,
  Form,
  Breadcrumb,
} from "react-bootstrap";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import QuantityChooser from "../utils/QuantityChooser";
import ProductListing from "../productListing/productListing";
import { get } from "../../utils/requests";
import { productDetailsApi, subCategorySearchApi } from "../../utils/endpoints";
import OverLayLoader from "../utils/OverlayLoader";
import OverLay from "../utils/overLay";
import { buildCatUrl, buildSubCatUrl } from "../../utils/buildUrl";
import { desktopRes } from "../../viewPortBreakpoints";
import { useViewportHook } from "../utils/viewPortHandler";
const ProductDetails = (props) => {
  const { width: viewPortWidth } = useViewportHook();
  const [product, setProduct] = React.useState({});
  const [similarproducts, setsimilarproducts] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [similarLoading, setSimilarLoading] = React.useState(true);
  const [plan, setPlan] = React.useState({});
  React.useEffect(() => {
    async function getData() {
      try {
        const [product] = await get(
          productDetailsApi(props.match.params.bookId),
          false
        );
        setProduct(product);
        setPlan({ plan: "oneMonth", rent: product.rent.oneMonth, qty: 1 });
        setLoading(false);
        const [similarproducts] = await get(
          subCategorySearchApi(product.subCat.category.id, product.subCat.id)
        );
        setsimilarproducts(similarproducts.books);
        setSimilarLoading(false);
        console.log(similarproducts);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  const changePlan = ({ target: { value } }) =>
    setPlan({ ...plan, plan: value, rent: product.rent[value] });
  const modifyQuantity = (qty) => setPlan({ ...plan, qty });

  return isLoading ? (
    <OverLay>
      <OverLayLoader />
    </OverLay>
  ) : (
    <Container fluid>
      <Row>
        <Col
          className="p-4 carouselContainer d-flex justify-content-center"
          md={4}
        >
          <Carousel className="w-75 imgcarousel">
            {product.images.map((img, idx) => (
              <Carousel.Item>
                <img className="d-block w-100 " src={img.url} />
              </Carousel.Item>
            ))}
            <Carousel.Item>
              <img className="d-block w-100 " src="/book1.png" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={8} className="py-4 ">
          <Breadcrumb className="prod-breadcrumb">
            <Breadcrumb.Item href={buildCatUrl(product.subCat.category.id)}>
              {product.subCat.category.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href={buildSubCatUrl(
                product.subCat.category.id,
                product.subCat.id
              )}
            >
              {product.subCat.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
          <h3 className="prod-name">{product.name}</h3>
          <p className="sub-head">
            Author: <b className="val">{product.author}</b>
          </p>
          <p className="sub-head">
            Publication:<b className="val"> {product.publisher}</b>
          </p>
          <p className="sub-head">
            Book Edition:{" "}
            <b className="val">{product.edition || "Not available"}</b>
          </p>
          <p className="sub-head">
            Book ISBN: <b className="val">{product.isbn}</b>
          </p>
          <p className="sub-head">
            Availability: <b className="val">In Stock</b>
          </p>
          <Row className="align-items-center pl-3">
            Average Rating :{" "}
            <ReactStars
              className="ratings"
              count={5}
              half={false}
              onChange={(rating) => console.log(rating)}
              size={30}
              color2={"#ffd700"}
            />{" "}
            (0)
          </Row>
          <Row className=" pl-3 py-3 align-items-center">
            <p className="mr-4">
              <b>Quantity</b>
            </p>
            <QuantityChooser
              onChange={modifyQuantity}
              initialQuantity={1}
              maxQuantity={product.quantity}
            />
          </Row>
          <Row className="w-100 py-2">
            <Col md={6}>
              <Form className="w-100">
                <Form.Label>Rental Period</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  custom
                  onChange={changePlan}
                >
                  <option value="oneMonth">1 Month</option>
                  <option value="threeMonth">3 Months</option>
                  <option value="sixMonth">6 months</option>
                  <option value="nineMonth">9 months</option>
                  <option value="twelveMonth">12 months</option>
                </Form.Control>
              </Form>
            </Col>
          </Row>
          <p className="amount">
            Rental Amount : <span>₹{plan.rent}</span>
          </p>
          <p className="amount">
            Amount You Pay Now:{" "}
            <span>₹ {plan.rent + product.rent.deposit}</span>
          </p>
          <p className="amount">
            Your Savings:{" "}
            <span>
              {((product.rent.mrp - (plan.rent + product.rent.deposit)) /
                product.rent.mrp) *
                100}
              %
            </span>
          </p>
          <Row className="my-4">
            <Col md={3} className="py-2">
              <Button block size="lg" variant="success">
                <FaShoppingCart className="mr-2" size={20} />
                ADD TO CART
              </Button>
            </Col>
            <Col md={3} className="py-2">
              <Button block size="lg" variant="warning">
                <FaRegHeart className="mr-2" size={20} />
                ADD TO WISHLIST
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {product.description && (
        <Row className="mb-3">
          <Row className="w-100 pb-2 row-header-box">
            <h2 className="row-header">DESCRIPTION</h2>
          </Row>
          <Col className="px-4">{product.description}</Col>
        </Row>
      )}
      <Row>
        <Row className="w-100 pb-2 row-header-box">
          <h2 className="row-header">RELATED PRODUCTS</h2>
        </Row>

        <ProductListing
          style={{ padding: "0 20px" }}
          displayType={viewPortWidth < desktopRes ? "grid" : "list"}
          isLoading={similarLoading}
          products={similarproducts}
        />
      </Row>
    </Container>
  );
};

export default ProductDetails;
