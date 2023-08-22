const Tables = require("../dbAssociation");
// const createNextAdminId = require("./utils/createNextAdminId");

const userTable = new Tables.UserTable();

const checkAndCreateAdminsAndUsers = async () => {
  console.log("Admins and users created!");

  // const nextAdminId = await createNextAdminId();
  const allUsers = await userTable.getUsers();

  if (allUsers.length > 0) {
    return;
  }

  const newUsers = [
    {
      userName: "Aras",
      userEmail: "aras@gmail.com",
      adminId: 1,
    },
    {
      userName: "Jason",
      userEmail: "jason@gmail.com",
      adminId: 2,
    },
    {
      userName: "Alice",
      userEmail: "alice@gmail.com",
    },
    {
      userName: "Amanda",
      userEmail: "amanda@gmail.com",
    },
  ];

  await userTable.createUsers(newUsers);
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
