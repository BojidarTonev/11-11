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
    }
  }
};
