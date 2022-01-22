const userModel = require("../model/user");

// Show details of specific user
const getUser = async (req, res) => {
  const userID = req.params.id;
  try {
    const matchedUser = await userModel.findById(userID);
    if (!matchedUser) {
      return res.status(404).send(`user id ${id} cannot be found`);
    }
    res.status(200).send(matchedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Adding a new user
const addUser = async (req, res) => {
  const newUser = await new userModel(req.body);
  try {
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Depositing
const depositing = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const updatedUser = await userModel.findById(id);
    updatedUser.cash += amount;
    const user = await userModel.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).send(`user id ${id} cannot be found`);
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Update credit
const creditUpdate = async (req, res) => {
  const { id, amount } = req.body;
  try {
    if (amount <= 0) {
      throw Error("positive money only");
    } else {
      const updatedUser = await userModel.findById(id);
      updatedUser.credit += amount;
      const user = await userModel.findByIdAndUpdate(id, updatedUser, {
        new: true,
      });
      if (!user) {
        return res.status(404).send(`user id ${id} cannot be found`);
      }
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Withdraw money
const withdrawMoney = async (req, res) => {
  const { id, amount } = req.body;
  try {
    if (amount < 0) {
      return res.status(400).send("positive amount only");
    }
    const updatedUser = await userModel.findById(id);
    if (!updatedUser) {
      return res.status(404).send(`user id ${id} cannot be found`);
    }
    if (amount > updatedUser.cash + updatedUser.credit) {
      return res
        .status(400)
        .send("cannot withdraw that amount. try a lower amount");
    }
    if (updatedUser.cash >= amount) {
      updatedUser.cash -= amount;
      const user = await userModel.findByIdAndUpdate(id, updatedUser, {
        new: true,
      });
      res.status(200).send(user);
    } else {
      amount -= updatedUser.cash;
      updatedUser.cash = 0;
      updatedUser.credit -= amount;
      const user = await userModel.findByIdAndUpdate(id, updatedUser, {
        new: true,
      });
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// transferring
const transferring = async (req, res) => {
  const { transferringID, recievingID, amount } = req.body;
  try {
    if (amount < 0) {
      return res.status(400).send("positive amount only");
    }
    const tuser = await userModel.findById(transferringID);
    const ruser = await userModel.findById(recievingID);
    if (!tuser || !ruser) {
      return res.status(404).send("one or two users dont exist");
    }
    if (amount > tuser.cash + tuser.credit) {
      return res
        .status(400)
        .send("cannot transfer that amount. try a lower amount");
    }
    if (tuser.cash >= amount) {
      tuser.cash -= amount;
      ruser.cash += amount;
      await tuser.save();
      await ruser.save();
      res.status(200).send(`${amount} was transffered to ${ruser}`);
    } else {
      ruser.cash += amount;
      amount -= tuser.cash;
      tuser.cash = 0;
      tuser.credit -= amount;
      await tuser.save();
      await ruser.save();
      res.status(200).send(`${amount} was transffered to ${ruser}`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getUser,
  getAllUsers,
  addUser,
  depositing,
  creditUpdate,
  withdrawMoney,
  transferring,
};
