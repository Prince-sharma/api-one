const BorrowingRequest = require('../models').BorrowingRequest;

module.exports = {
  create(req, res) {
    return BorrowingRequest
      .create({
        serialNo: req.body.serialNo,
        date: req.body.date,
        quantity: req.body.quantity,
        site: req.body.site,
      })
      .then(todo => res.status(201).send(borrowingrequest))
      .catch(error => res.status(400).send(error));
  },
};