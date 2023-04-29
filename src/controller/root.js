function extractLocation(req) {
  if (!req.headers.location) {
    throw "Could not find location";
  }
  return req.headers.location;
}

module.exports = { extractLocation };

// THIS IS A COMMENT
