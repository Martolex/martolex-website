import React, { useState, useCallback } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import AsyncCreatableSelect from "react-select/async-creatable";
import Select from "react-select";
import { get } from "../../utils/requests";
import { bookUploadApi } from "../../utils/endpoints";
import OverLay from "../utils/overLay";
import OverlayLoader from "../utils/OverlayLoader";
import _ from "lodash";
import ImageUpload from "./ImageUpload";
import { connect } from "react-redux";
import { deliveryLocations } from "../../utils/deliveryLocations";
import "./BookUpload.scss";

const BookUpload = (props) => {
  const [details, setDetails] = useState({
    prices: { mrp: undefined, sellingPrice: undefined },
    buyBackEnabled: true,
  });
  const [subCategories, setSubCategories] = useState([]);

  const categories =
    props.categories &&
    props.categories.map((category) => ({
      value: category.id,
      label: category.name,
    }));
  const [isLoading, setloading] = useState(false);
  const handleNewBookName = (inputValue) => {
    console.log("abcd");
    const newValue = {
      value: inputValue.toLowerCase(),
      label: inputValue,
      isNew: true,
    };

    setDetails({ name: newValue, author: "", isbn: "", edition: "" });
  };

  const loadBookNames = useCallback(
    _.debounce((inputValue, callback) => {
      try {
        get(bookUploadApi.getBookNames, true, { query: inputValue }).then(
          ([books]) => {
            callback(
              books.map((item) => ({ value: item.id, label: item.name }))
            );
          }
        );
      } catch (err) {
        console.log(err);
      }
    }, 300),
    []
  );

  const handleBookChange = async () => {
    if (details.name) {
      if (!details.name.isNew) {
        setloading(true);
        try {
          const [bookDetails] = await get(
            bookUploadApi.getBookDetails(details.name.value)
          );
          const { isbn, author, edition } = bookDetails;
          setDetails({ ...details, isbn, author, edition });
        } catch (err) {
          alert(err);
        }
        setloading(false);
      }
    }
  };
  React.useEffect(() => {
    handleBookChange();
  }, [details.name]);
  const handleCategoryChange = (inputValue) => {
    setDetails({ ...details, category: inputValue, subcategory: {} });

    setSubCategories(
      props.categories
        .find((category) => category.id === inputValue.value)
        ["subcategories"].map((subcategory) => ({
          value: subcategory.id,
          label: subcategory.name,
        }))
    );
  };
  return (
    <Container className="my-4 upload-form" fluid>
      {isLoading && (
        <OverLay style={{ position: "fixed", top: 0, left: 0 }}>
          <OverlayLoader style={{ position: "absolute", top: "45vh" }} />
        </OverLay>
      )}
      <Row className="justify-content-center">
        <Col style={{ borderRadius: 5 }} md={7}>
          <Card>
            <Card.Header>
              <h3 className="text-center py-2 mb-0">SELL YOUR BOOK</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <h4>INCLUDE SOME DETAILS</h4>
              </Row>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="book-category">
                      <Form.Label>Category *</Form.Label>
                      <Select
                        value={details.category}
                        options={categories}
                        onChange={handleCategoryChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="book-subcategory">
                      <Form.Label>Sub-Category *</Form.Label>
                      <Select
                        value={details.subcategory}
                        options={subCategories}
                        onChange={(inputValue) =>
                          setDetails({ ...details, subcategory: inputValue })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="book-name">
                      <Form.Label>Book Name *</Form.Label>
                      <AsyncCreatableSelect
                        isClearable
                        value={details.name}
                        options={[{ value: 1, label: "abcd" }]}
                        onChange={(inputValue) =>
                          setDetails({ ...details, name: inputValue })
                        }
                        allowCreateWhileLoading={false}
                        createOptionPosition="first"
                        onCreateOption={handleNewBookName}
                        cacheOptions
                        loadOptions={loadBookNames}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="book-author">
                      <Form.Label>Author *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={details.author}
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            author: event.target.value,
                          });
                        }}
                        placeholder="Author Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Author Name is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="book-edition">
                      <Form.Label>Edition </Form.Label>
                      <Form.Control
                        type="text"
                        value={details.edition}
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            edition: event.target.value,
                          });
                        }}
                        placeholder="book edition"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="book-isbn">
                      <Form.Label>ISBN *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        pattern="[0-9]{13}|[0-9]{11}"
                        value={details.isbn}
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            isbn: event.target.value,
                          });
                        }}
                        placeholder="Enter the ISBN of the book"
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter valid ISBN
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <Row>
                  <h4>UPLOAD IMAGES</h4>
                </Row>
                <Row>
                  <Col className="mb-3" md={4} xs={12}>
                    <ImageUpload
                      onChange={(files) =>
                        setDetails({ ...details, frontCover: [...files] })
                      }
                      tag="Front Cover"
                      maxImages={1}
                    />
                  </Col>
                  <Col className="mb-3" md={4} xs={12}>
                    <ImageUpload
                      onChange={(files) =>
                        setDetails({ ...details, backCover: [...files] })
                      }
                      tag="Back Cover"
                      maxImages={1}
                    />
                  </Col>
                  <Col className="mb-3" md={4} xs={12}>
                    <ImageUpload
                      onChange={(files) =>
                        setDetails({ ...details, firstPage: [...files] })
                      }
                      tag="First Page"
                      maxImages={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ImageUpload
                      onChange={(files) =>
                        setDetails({ ...details, otherImages: [...files] })
                      }
                      tag="Any other Images of the book. Max 3"
                      maxImages={3}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <h4>SET A PRICE</h4>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="book-mrp">
                      <Form.Label>Enter Book MRP *</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        step={0.01}
                        value={details.prices.mrp}
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            prices: {
                              ...details.prices,
                              mrp: event.target.value,
                            },
                          });
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        MRP is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="book-sellingprice">
                      <Form.Label>Enter Book Selling Price *</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        step={0.01}
                        value={details.prices.sellingPrice}
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            prices: {
                              ...details.prices,
                              sellingPrice: event.target.value,
                            },
                          });
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Selling Price is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      type="switch"
                      checked={details.buyBackEnabled}
                      id="custom-switch"
                      onChange={(event) => {
                        console.log(event.target.value);
                        setDetails({
                          ...details,
                          buyBackEnabled: !details.buyBackEnabled,
                        });
                      }}
                      label="Opt for BuyBack"
                    />
                  </Col>
                </Row>
                {details.buyBackEnabled && (
                  <div>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="book-onemonth-buyback">
                          <Form.Label>Price for one Month</Form.Label>
                          <Form.Control
                            type="number"
                            step={0.01}
                            value={details.prices.oneMonth}
                            onChange={(event) => {
                              setDetails({
                                ...details,
                                prices: {
                                  ...details.prices,
                                  oneMonth: event.target.value,
                                },
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="book-threeMonth-buyback">
                          <Form.Label>Price for three Months</Form.Label>
                          <Form.Control
                            type="number"
                            step={0.01}
                            value={details.prices.threeMonth}
                            onChange={(event) => {
                              setDetails({
                                ...details,
                                prices: {
                                  ...details.prices,
                                  threeMonth: event.target.value,
                                },
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="book-sixmonth-buyback">
                          <Form.Label>Price for six Months</Form.Label>
                          <Form.Control
                            type="number"
                            step={0.01}
                            value={details.prices.sixMonth}
                            onChange={(event) => {
                              setDetails({
                                ...details,
                                prices: {
                                  ...details.prices,
                                  sixMonth: event.target.value,
                                },
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="book-nineMonth-buyback">
                          <Form.Label>Price for nine Months</Form.Label>
                          <Form.Control
                            type="number"
                            step={0.01}
                            value={details.prices.nineMonth}
                            onChange={(event) => {
                              setDetails({
                                ...details,
                                prices: {
                                  ...details.prices,
                                  nineMonth: event.target.value,
                                },
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="book-twelvemonth-buyback">
                          <Form.Label>Price for 12 Months</Form.Label>
                          <Form.Control
                            type="number"
                            step={0.01}
                            value={details.prices.twelveMonth}
                            onChange={(event) => {
                              setDetails({
                                ...details,
                                prices: {
                                  ...details.prices,
                                  twelveMonth: event.target.value,
                                },
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="book-deposit-buyback">
                          <Form.Label>Book Deposit</Form.Label>
                          <Form.Control
                            type="number"
                            step={0.01}
                            value={details.prices.deposit}
                            onChange={(event) => {
                              setDetails({
                                ...details,
                                prices: {
                                  ...details.prices,
                                  deposit: event.target.value,
                                },
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}
                <hr />
                <Row>
                  <h4>PICKUP ADDRESS</h4>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="address-line1">
                      <Form.Label>Address line 1*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            addLine1: event.target.value,
                          });
                        }}
                        placeholder="Address line 1"
                      />
                      <Form.Control.Feedback type="invalid">
                        address is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="address-line2">
                      <Form.Label>Address line 2*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            addLine2: event.target.value,
                          });
                        }}
                        placeholder="Address line 2"
                      />
                      <Form.Control.Feedback type="invalid">
                        Address is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="town">
                      <Form.Label>town / city*</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        onChange={(event) => {
                          setDetails({ ...details, city: event.target.value });
                        }}
                        placeholder="Town / city"
                      >
                        {deliveryLocations.map((location) => (
                          <option value={location.value}>
                            {location.label}
                          </option>
                        ))}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        City Name is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="state">
                      <Form.Label>State*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        pattern="[a-zA-Z]+"
                        onChange={(event) => {
                          setDetails({ ...details, state: event.target.value });
                        }}
                        placeholder="state"
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter valid state name
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="pincode">
                      <Form.Label>PIN Code*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        maxLength={6}
                        minLength={6}
                        pattern="[1-9][0-9]+"
                        onChange={(event) => {
                          setDetails({
                            ...details,
                            pincode: event.target.value,
                          });
                        }}
                        placeholder="PIN Code"
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter valid Pincode
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({ categories: state.categories });
export default connect(mapStateToProps)(BookUpload);
