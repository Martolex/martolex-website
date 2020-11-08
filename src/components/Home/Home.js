import React from "react";
import Toast from "../utils/Toast";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import ProductCarousel from "./ProductsCarousel";
import "./home.scss";
import { connect } from "react-redux";
const Home = ({ categories, ...props }) => {
  const [loginToastShow, setLoginToastShow] = React.useState(false);

  React.useEffect(() => {
    if (props?.location?.state?.loginError) {
      setLoginToastShow(true);
    }
  }, [props?.location?.state?.loginError]);
  console.log(categories);
  return (
    <div>
      <Toast
        isVisible={loginToastShow}
        onClose={() => setLoginToastShow(false)}
        header="login Error"
        body="please login to continue"
      />
      <Container className="mb-5" fluid>
        <Row>
          <Col className="p-0 m-0">
            <Carousel>
              <Carousel.Item className="banner">
                <img
                  className="d-block w-100 h-100 "
                  alt="banner 1"
                  srcset="/banners/Banner-550x230.png 500w, /banners/Banner-700x250.png 800w,/banners/Banner-1300x360.png 1024w"
                  src="/banners/Banner-1300x360.png"
                />
              </Carousel.Item>
              <Carousel.Item className="banner">
                <img
                  alt="banner 1"
                  className="d-block w-100 h-100 "
                  src="/banners/Banner1-1300x360.png"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCarousel
              catId={categories[0]?.id}
              label={categories[0]?.name}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCarousel
              catId={categories[1]?.id}
              label={categories[1]?.name}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              width="100%"
              src="https://www.martolex.com/image/bg-images/promo-banner-full.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCarousel
              catId={categories[2]?.id}
              label={categories[2]?.name}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Home);
