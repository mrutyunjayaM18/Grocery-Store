import express from "express";
const router = express.Router();

// Mock products (can later connect to MongoDB/Postgres)
let products = [
  { id: 1, name: "Apples", price: 120, stock: 50 },
  { id: 2, name: "Bananas", price: 60, stock: 100 },
  { id: 3, name: "Milk", price: 50, stock: 30 }
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// Add new product
router.post("/", (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

// Update stock
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id == id);
  if (product) {
    Object.assign(product, req.body);
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// Delete product
router.delete("/:id", (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
