import React from "react";
import { Col, Card, ListGroup } from "react-bootstrap";
import { buildSubCatUrl, buildCatUrl } from "../../utils/buildUrl";
import { connect } from "react-redux";

const SideBar = ({ displaySubCat, categories, ...props }) => {
  return (
    <Col md={3}>
      <Card style={{ border: "none" }} className="mb-2">
        <Card.Header
          style={{ borderRadius: "2px" }}
          className="text-center bg-primary text-dark font-weight-bold"
        >
          {!displaySubCat ? "FILTER BY CATEGORY" : "FILTER BY SUB-CATEGORY"}
        </Card.Header>

        <ListGroup className="side-filter" variant="flush">
          {displaySubCat
            ? categories
                .find((cat) => cat.id == props.catId)
                ?.subcategories.map(({ id, name }, idx) => (
                  <ListGroup.Item
                    href={buildSubCatUrl(props.catId, id)}
                    action
                    active={props.subCatId == id}
                  >
                    {name.toUpperCase()}
                  </ListGroup.Item>
                ))
            : categories.map(({ id, name }) => (
                <ListGroup.Item href={buildCatUrl(id)} action>
                  {name.toUpperCase()}
                </ListGroup.Item>
              ))}
        </ListGroup>
        <Card.Footer
          as="a"
          style={{ borderRadius: "2px" }}
          href="/search"
          className="btn  bg-primary text-dark font-weight-bold"
        >
          {"VIEW ALL BOOKS >"}{" "}
        </Card.Footer>
      </Card>
    </Col>
  );
};
const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(SideBar);
