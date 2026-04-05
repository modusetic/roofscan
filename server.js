require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';

app.get('/', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  // Override the config.js key with the value from .env
  html = html.replace(
    '</head>',
    `<script>window.GOOGLE_MAPS_API_KEY=${JSON.stringify(API_KEY)};</script>\n</head>`
  );
  res.send(html);
});

// Serve other static assets (fonts, images, etc.) if added later
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`\nRoofScan running at http://localhost:${PORT}\n`);
  if (!API_KEY || API_KEY === 'your_google_maps_api_key_here') {
    console.log('  ⚠  No API key found — app will run in demo mode.');
    console.log('     Set GOOGLE_MAPS_API_KEY in your .env file to enable real data.\n');
  } else {
    console.log('  ✓  Google Maps API key loaded from .env\n');
  }
});
