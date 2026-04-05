module.exports = function handler(req, res) {
  res.status(200).json({
    apiKey: process.env.GOOGLE_MAPS_API_KEY || '',          // server-side: Solar API + Geocoding
    browserKey: process.env.GOOGLE_MAPS_BROWSER_KEY || '',  // client-side: Maps JavaScript API
  });
};
