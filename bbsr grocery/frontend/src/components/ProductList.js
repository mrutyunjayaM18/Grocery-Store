import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h3>Available Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price} ({p.stock} in stock)
          </li>
        ))}
      </ul>
    </div>
  );
}
