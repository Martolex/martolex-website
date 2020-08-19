import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
function App() {
  return (
    <ViewportProvider>
      <div className="App">
        <Header />
        <ProductListing />
      </div>
    </ViewportProvider>
  );
}

export default App;
