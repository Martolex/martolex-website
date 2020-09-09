import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
import Footer from "./components/Footer/Footer";
import ProductSearchResults from "./components/productSearchResults/ProductSearchresults";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Provider, connect } from "react-redux";
import { FetchCategories } from "./redux/actions/CategoriesActions";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

import Start from "./start";
import { BrowserRouter } from "react-router-dom";
function App({ props }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Start />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
