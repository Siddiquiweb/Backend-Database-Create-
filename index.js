const express = require('express');
const app = express();
const PORT = 3000;

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, pakistan imran khan !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
