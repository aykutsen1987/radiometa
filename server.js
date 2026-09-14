const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const CATALOG_PATH = path.join(__dirname, "radio_catalog.json");

app.get("/radios", (_req, res) => {
  try {
    const raw = fs.readFileSync(CATALOG_PATH, "utf-8");
    const data = JSON.parse(raw);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "catalog_read_failed", detail: err.message });
  }
});

app.get("/", (_req, res) => {
  res.json({ status: "ok", endpoint: "/radios" });
});

app.listen(PORT, () => {
  console.log(`RadioMeta API listening on port ${PORT}`);
});
