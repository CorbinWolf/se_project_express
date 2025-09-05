const router = require("express").Router();
const userRouter = require("./users");
const itemRouter = require("./clothingItems");

const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");
const NotFoundError = require("../errors/NotFoundError");
const { loginUser, createUser } = require("../controllers/users");

router.post("/signin", validateLogin, loginUser);
router.post("/signup", validateUserBody, createUser);

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res, next) => next(new NotFoundError("Route not found")));

module.exports = router;
