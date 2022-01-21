const express = require("express");
const router = express.Router();
const {
  getUser,
  getAllUsers,
  addUser,
  // creditUpdate,
  // withdrawMoney,
  // depositing,
  // transferring,
} = require("../controllers/userControllers");

router.get("api/users/:id", getUser);
router.get("api/users", getAllUsers);
router.post("api/users", addUser);
// router.patch("/users/:id", creditUpdate);
// router.patch("/users/:id", withdrawMoney);
// router.patch("/users/:id", depositing);
// router.patch("/users/:id", transferring);

module.exports = router;
