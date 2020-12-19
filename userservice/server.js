const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(morgan("[UserService] :method :url :status :response-time ms"));

app.get('/v1/users', (req, res) => {
  const users = [{
    name: 'John Doe'
  }, {
    name: 'Jane Doe'
  }, {
    name: 'Jordan Doe'
  }];

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
})