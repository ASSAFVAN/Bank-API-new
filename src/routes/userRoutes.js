const express = require("express");
const router = express.Router();
const {
  getUser,
  getAllUsers,
  addUser,
  depositing,
  creditUpdate,
  withdrawMoney,
  transferring,
} = require("../controllers/userControllers");

router.get("/users", getAllUsers);
router.post("/users", addUser);
router.put("/users/depositing", depositing);
router.put("/users/creditupdate", creditUpdate);
router.put("/users/withdrawmoney", withdrawMoney);
router.put("/users/transferring", transferring);
router.get("/users/:id", getUser);

module.exports = router;
