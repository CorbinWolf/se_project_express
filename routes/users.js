const router = require("express").Router();

const auth = require("../middlewares/auth");
const { validateUserUpdate } = require("../middlewares/validation");
const { updateUserProfile, getCurrentUser } = require("../controllers/users");

router.use(auth);
router.patch("/me", validateUserUpdate, updateUserProfile);
router.get("/me", getCurrentUser);

module.exports = router;
