const auth = (req, res, next) => {
  req.user = {
    _id: "66bd8591984fda4687c097c5",
  };
  next();
};

module.exports = auth;
