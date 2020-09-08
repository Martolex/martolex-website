import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
import Footer from "./components/Footer/Footer";
import ProductSearchResults from "./components/productSearchResults/ProductSearchresults";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { connect } from "react-redux";
import { FetchCategories } from "./redux/actions/CategoriesActions";
import productDetails from "./components/ProductDetails/ProductDetails";
import Home from "./components/Home/Home";
function start(props) {
  props.getCategories();
  return (
    <ViewportProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={productDetails} />
          <Route
            path="/cat/:catId/subCat/:subCatId"
            component={(props) => <ProductSearchResults {...props} isSubCat />}
          />
          <Route
            path="/cat/:catId/"
            component={(props) => <ProductSearchResults {...props} isCat />}
          />
          <Route
            path="/search"
            render={(props) => (
              <ProductSearchResults {...props} isSearch={true} />
            )}
          />
          <Route path="/books/:bookId" component={ProductDetails} />
        </Switch>
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
