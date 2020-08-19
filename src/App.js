import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <ViewportProvider>
      <div className="App">
        <Header />
        <ProductListing />
        <Footer />
      </div>
    </ViewportProvider>
  );
}

export default App;
