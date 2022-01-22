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

// // Depositing
// const depositing = async (req, res) => {
//   const userIndex = usersData.findIndex((user) => {
//     return user.passportID === id;
//   });
//   if (userIndex !== -1) {
//     usersData[userIndex].cash = cash;
//     saveUsers(usersData);
//     return usersData[userIndex];
//   } else {
//     throw Error("cannot find user");
//   }
// };

// //Update credit
// const creditUpdate = (id, money) => {
//   if (money <= 0) {
//     throw Error("positive money only");
//   } else {
//     const usersData = loadUsers();
//     const userIndex = usersData.findIndex((user) => {
//       return user.passportID === id;
//     });
//     const isActive = usersData[userIndex].isActive;
//     if (userIndex !== -1) {
//       if (!isActive) {
//         throw Error("user is not active");
//       } else {
//         usersData[userIndex].credit = usersData[userIndex].credit + money;
//         saveUsers(usersData);
//         return usersData[userIndex];
//       }
//     } else {
//       throw Error("cannot find user");
//     }
//   }
// };

// // Withdraw money
// const withdrawMoney = (id, money) => {
//   if (money < 0) {
//     throw Error("positive money only");
//   } else {
//     const usersData = loadUsers();
//     const userIndex = usersData.findIndex((user) => {
//       return user.passportID === id;
//     });
//     const isActive = usersData[userIndex].isActive;
//     if (userIndex !== -1) {
//       if (!isActive) {
//         throw Error("user is not active");
//       } else {
//         if (money > userCash + userCredit) {
//           throw Error("cannot withdraw that amount. try a lower amount");
//         } else if (userCash >= money) {
//           usersData[userIndex].cash -= money;
//           saveUsers(usersData);
//           return usersData[userIndex];
//         } else {
//           money -= usersData[userIndex].cash;
//           usersData[userIndex].cash = 0;
//           usersData[userIndex].credit -= money;
//           saveUsers(usersData);
//           return usersData[userIndex];
//         }
//       }
//     } else {
//       throw Error("cannot find user");
//     }
//   }
// };

// // transferring
// const transferring = (transferringID, recievingID, money) => {
//   if (money < 0) {
//     throw Error("positive money only");
//   } else {
//     const usersData = loadUsers();
//     const transferringUserIdx = usersData.findIndex((user) => {
//       return user.passportID === transferringID;
//     });
//     const recievingUserIdx = usersData.findIndex((user) => {
//       return user.passportID === recievingID;
//     });
//     let userCash = usersData[transferringUserIdx].cash;
//     let userCredit = usersData[transferringUserIdx].credit;

//     if (transferringUserIdx !== -1 && recievingUserIdx !== -1) {
//       if (money > userCash + userCredit) {
//         throw Error("cannot transfer that amount. try a lower amount");
//       } else if (userCash >= money) {
//         userCash -= money;
//         usersData[recievingUserIdx].cash += money;
//         saveUsers(usersData);
//         return [usersData[transferringUserIdx], usersData[recievingUserIdx]];
//       } else {
//         usersData[recievingUserIdx].cash += money;
//         money -= usersData[transferringUserIdx].cash;
//         usersData[transferringUserIdx].cash = 0;
//         usersData[transferringUserIdx].credit -= money;
//         saveUsers(usersData);
//         return [usersData[transferringUserIdx], usersData[recievingUserIdx]];
//       }
//     } else {
//       throw Error("one or two users dont exist");
//     }
//   }
// };

module.exports = {
  getUser,
  getAllUsers,
  addUser,
  // creditUpdate,
  // withdrawMoney,
  // depositing,
  // transferring,
};
