const Styles = require("../models/Styles");

module.exports = {
  get: {
    allStyles: (req, res, next) => {
      try {
        Styles.find()
          .then(styles => res.send(styles))
          .catch(next);
      } catch (error) {
        res.status(500).json({ message: err.message });
      }
    }
  },
  post: {

  }
};
