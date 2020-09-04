import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
import Footer from "./components/Footer/Footer";
import ProductSearchResults from "./components/productSearchResults/ProductSearchresults";
function App() {
  return (
    <ViewportProvider>
      <div className="App">
        <Header />
        <ProductSearchResults />
        <Footer />
      </div>
    </ViewportProvider>
  );
}

export default App;
