const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/contests", async (req, res) => {
  try {
    const response = await axios.get("https://kontests.net/api/v1/all");
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch contests", error);
    res.status(500).json({ error: "Failed to fetch contests" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
