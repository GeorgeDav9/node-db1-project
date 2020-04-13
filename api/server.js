const express = require('express');

const AccountsRouter = require('./accounts/AccountsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
  res.send('Welcome to the node-db1-project server!');
});

module.exports = server;