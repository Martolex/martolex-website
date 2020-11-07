import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { categorySearchApi } from "../../utils/endpoints";
import { get } from "../../utils/requests";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from "../productListItem/productCard/ProductCard";
import { Link } from "react-router-dom";
import { buildCatUrl } from "../../utils/buildUrl";
const ProductCarousel = ({ catId, label, ...props }) => {
  const [products, setProducts] = React.useState([]);
  async function getData(api, params) {
    console.log(params);
    try {
      const [data] = await get(api, true, params);
      console.log(data);
      setProducts(data.books);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getData(categorySearchApi(catId));
  }, []);

  return (
    <Container className="prod-carousel my-3" fluid>
      <Row>
        <Col className="text-center">
          <h2>
            <Link className="btn-link text-dark" to={buildCatUrl(catId)}>
              <u>{label.toUpperCase()}</u>
            </Link>
          </h2>
        </Col>
      </Row>
      <Row className="scrollable-div">
        <Col className="d-block">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={5000}
            autoPlay
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              smallDesktop: {
                breakpoint: {
                  max: 1024,
                  min: 768,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 768,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard product={product} style={{ width: "100%" }} />
              ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(ProductCarousel);
