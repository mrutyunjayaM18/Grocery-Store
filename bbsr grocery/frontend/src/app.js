import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h2>BBSR Grocery Store 🛒</h2>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
