const express = require("express");
const app = express();

app.use(express.json());

app.post("/cart/total", (req, res) => {
  const items = req.body.items;
  let total = 0;

  items.forEach(i => total += i.price * i.qty);

  res.json({ total });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
