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
import SignUp from "./components/auth/signUp";
import { Collapse } from "react-bootstrap";
import Toast from "./components/utils/Toast";

function Start(props) {
  props.getCategories();
  const [cartToastShow, setCarToastShow] = React.useState(false);
  const [newCartLength, setNewCartLength] = React.useState(0);
  React.useEffect(() => {
    props.cartHydrated &&
      props.cartLength > newCartLength &&
      setCarToastShow(true);
    setNewCartLength(props.cartLength);
  }, [props.cartLength]);
  return (
    <ViewportProvider>
      <div className="App">
        <Toast
          isVisible={cartToastShow}
          onClose={() => setCarToastShow(false)}
          header="added"
          body="Item Added To cart"
        />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signUp" component={SignUp} />
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
const mapStateToProps = (state) => ({
  cartLength: state.cart.items.length,
  cartHydrated: state.cart.hydrated,
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
