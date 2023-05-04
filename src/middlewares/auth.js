const protect = async (req, res, next) => {
  console.log("this middleware ran")
  next();
};

module.exports = {
  protect
}

