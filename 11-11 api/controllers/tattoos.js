var url = require('url');
const Tattoos = require("../models/Tattoos");

module.exports = {
  get: {
    allTattoos: (req, res, next) => {
      try {
        Tattoos.find()
          .then(tattoos => res.send(tattoos))
          .catch(next);
      } catch (error) {
        res.status(500).json({ message: err.message });
      }
    },
    tatoosFromStyle: (req, res, next) => {
        var style = url.parse(req.url, true).pathname.split('/')[2];
        try {
          Tattoos.find({style: style})
          .then(tattoos => res.send(tattoos))
          .catch(next);
        } catch (error) {
          res.status(500).json({ message: err.message });
        }
    }
  }
};
