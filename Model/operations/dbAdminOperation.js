// const Tables = require("../dbAssociation");
// const createNextAdminId = require("./utils/createNextAdminId");

const checkAndCreateAdminsAndUsers = async () => {
  console.log("Admins and users created!");

  // const nextAdminId = await createNextAdminId();
  // let allAdmins;

  // try {
  //   allAdmins = await Tables.UserTable.findAll();
  // } catch (err) {
  //   console.error(err);
  // }

  // if (allAdmins.length > 0) {
  //   return allAdmins;
  // }

  // const newUsers = [
  //   {
  //     userName: "Aras",
  //     userEmail: "aras@gmail.com",
  //     adminId: nextAdminId,
  //   },
  //   {
  //     userName: "Jason",
  //     userEmail: "jason@gmail.com",
  //     adminId: nextAdminId + 1,
  //   },
  //   {
  //     userName: "Alice",
  //     userEmail: "alice@gmail.com",
  //   },
  //   {
  //     userName: "Amanda",
  //     userEmail: "amanda@gmail.com",
  //   },
  // ];

  // try {
  //   allAdmins = await Tables.UserTable.bulkCreate(newUsers);
  // } catch (err) {
  //   console.error(err);
  // }

  // return allAdmins;
};

// const getAllAdmins = async () => {
//   let result;

//   try {
//     result = await Tables.UserTable.findAll({ where: { adminId: true } });
//   } catch (err) {
//     console.error(err);
//   }

//   const allAdmins = result.map((value) => value.toJSON());
//   return allAdmins;
// };

// const getAllUsers = async () => {
//   let result;

//   try {
//     result = await Tables.UserTable.findAll();
//   } catch (err) {
//     console.error(err);
//   }

//   const allUsers = result.map((value) => value.toJSON());
//   return allUsers;
// };

// const getOneUser = async (userId) => {
//   let result;

//   try {
//     result = await Tables.UserTable.findByPk(userId);
//   } catch (err) {
//     console.error(err);
//   }

//   return result.toJSON();
// };

// const getAdminProducts = async (adminId) => {
//   let result;

//   try {
//     result = await Tables.ProductTable.findAll({
//       where: { adminId: adminId },
//     });
//   } catch (err) {
//     console.error(err);
//   }

//   return result;
// };

module.exports = {
  checkAndCreateAdminsAndUsers,
  // getAllAdmins,
  // getAllUsers,
  // getOneUser,
  // getAdminProducts,
};
