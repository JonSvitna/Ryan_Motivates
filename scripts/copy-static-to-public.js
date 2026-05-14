#!/usr/bin/env node
/**
 * Vercel (and many static presets) expect build output under `public/`.
 * This site is authored at repo root; we mirror those files into `public/` at build time.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dest = path.join(root, "public");

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

const rootFiles = ["index.html", "styles.css", "image-slot.js", "favicon.svg"];
for (const name of rootFiles) {
  fs.copyFileSync(path.join(root, name), path.join(dest, name));
}

for (const name of fs.readdirSync(root)) {
  if (name.endsWith(".jsx") || (name.endsWith(".js") && name !== "image-slot.js")) {
    fs.copyFileSync(path.join(root, name), path.join(dest, name));
  }
}

fs.cpSync(path.join(root, "assets"), path.join(dest, "assets"), { recursive: true });
