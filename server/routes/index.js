const borrowingrequestsController = require('../controllers').borrowingrequests;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the borrowingrequests API!',
  }));

  app.post('/api/borrowingrequests', borrowingrequestsController.create);
};