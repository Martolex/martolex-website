import React from "react";
import ProductListing from "../productListing/productListing";
import {
  BsGrid3X3GapFill,
  BsList,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { desktopRes } from "../../viewPortBreakpoints";
import { useViewportHook } from "../utils/viewPortHandler";
import { connect } from "react-redux";
import { buildCatUrl, buildSubCatUrl } from "../../utils/buildUrl";
import QueryString from "query-string";
import { Col, Row } from "react-bootstrap";
import { categorySearchApi, subCategorySearchApi } from "../../utils/endpoints";
import { get } from "../../utils/requests";
import OverlayLoader from "../utils/OverlayLoader";

const ProductsPaginator = (props) => {
  const { width } = useViewportHook();
  const [displayType, setDisplayType] = React.useState("grid");

  const [products, setProducts] = React.useState([]);
  const [pagination, setPagination] = React.useState({});
  const [pageNum, setPageNum] = React.useState(1);
  const [isLoading, setLoading] = React.useState(false);
  const { isSearch } = props;
  async function getData(api) {
    try {
      setLoading(true);
      const [{ books }, pagination] = await get(api, false);
      setProducts(books);
      setPagination(pagination);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const nextPage = () => {
    const { offset } = QueryString.parse(pagination.nextUrl);
    console.log(offset);
    if (offset) {
      setPageNum(pageNum + 1);
      getData(pagination.nextUrl);
    }
  };
  const prevPage = () => {
    const { offset } = QueryString.parse(pagination.prevUrl);
    console.log(offset);
    if (offset) {
      setPageNum(pageNum - 1);
      getData(pagination.prevUrl);
    }
  };
  React.useEffect(() => {
    let api = "";
    if (isSearch) {
      const queryParams = QueryString.parse(props.queryString);
      api = ""; //search api
    } else {
      const { catId, subCatId } = props;
      api = !subCatId
        ? categorySearchApi(catId)
        : subCategorySearchApi(catId, subCatId);
    }
    getData(api);
  }, []);
  const getNewPage = (url) => {};
  return (
    <Col md={9} className="px-4">
      <Row className="w-100 mb-4" className="pagination-selector">
        {desktopRes < width && (
          <Col md={1} className="text-dark">
            <BsGrid3X3GapFill
              className="mr-1 buttons "
              size={20}
              onClick={() => {
                setDisplayType("grid");
              }}
            />
            <BsList
              className="mr-1 buttons"
              size={25}
              onClick={() => {
                setDisplayType("row");
              }}
            />
          </Col>
        )}
        <Col md={11} className="pagination-header">
          Showing page {pageNum}
        </Col>
      </Row>
      {isLoading && <OverlayLoader />}
      <ProductListing
        isLoading={isLoading}
        products={products}
        displayType={displayType}
      />
      <Row className="pagination justify-content-center mt-3 p-0">
        <Col md={3} className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col onClick={prevPage} className="button">
              <BsChevronLeft size={20} />
            </Col>
            <Col className="button pageNum">
              <span style={{ fontSize: "1.3em" }}>{pageNum}</span>
            </Col>
            <Col onClick={nextPage} className="button m-0">
              <BsChevronRight size={20} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductsPaginator;
