import React from "react";
import "./ProductSearchResults.scss";
import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import SideBar from "./sideBar";
import ProductsPaginator from "./ProductsPaginator";
const ProductSearchResults = ({ categories, ...props }) => {
  const displaySubCat = props.isSearch !== true;

  return (
    <Container fluid>
      <Row className="pt-3 pb-5">
        <SideBar
          displaySubCat={displaySubCat}
          catId={props.match.params.catId}
          subCatId={props.match.params.subCatId}
        />
        <ProductsPaginator
          isSearch={!displaySubCat}
          catId={props.match.params.catId}
          subCatId={props.match.params.subCatId}
          queryString={props.location.search}
        />
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ProductSearchResults);
