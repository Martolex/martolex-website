import React from "react";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
import Footer from "./components/Footer/Footer";
import ProductSearchResults from "./components/productSearchResults/ProductSearchresults";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { connect } from "react-redux";
import { FetchCategories } from "./redux/actions/CategoriesActions";
function start(props) {
  props.getCategories();
  return (
    <ViewportProvider>
      <div className="App">
        <Header />
        <ProductDetails />
        <Footer />
      </div>
    </ViewportProvider>
  );
}
const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(FetchCategories());
  },
});

export default connect(null, mapDispatchToProps)(start);
