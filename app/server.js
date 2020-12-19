const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fetch = require("node-fetch");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan("[App Server] :method :url :status :response-time ms"));

app.get('/ping', (req, res) => {
  return res.json({
    message: 'Pong! 🏓',
  });
});

app.get('/api/users', async (req, res) => {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = await fetch('http://user-service-clusterip-service/v1/users');
  } else {
    response = await fetch("http://localhost:4000/v1/users");
  }

  const data = await response.json();

  return res.json({
    data,
  });
});

app.get('/', (req, res) => {
  return res.send('This page is rendered from the App');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})