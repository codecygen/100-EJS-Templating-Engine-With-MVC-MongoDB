const Tables = require("../dbAssociation");
const dbAdminOperation = require("./dbAdminOperation");
const dbProductOperation = require("./dbProductOperation");

const addUserAndProductToCart = async (currentUser, addedProduct) => {
  console.log(currentUser);
  console.log(addedProduct);
  
  // let existingCartProduct;

  // try {
  //   existingCartProduct = await Tables.CartTable.findOne({
  //     where: {
  //       UserTableId: currentUser.id,
  //       ProductTableId: addedProduct.id,
  //     },
  //   });
  // } catch (err) {
  //   console.error(err);
  // }

  // if (existingCartProduct) {
  //   try {
  //     await existingCartProduct.update({
  //       quantity: existingCartProduct.quantity + 1,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   return;
  // }

  // try {
  //   await Tables.CartTable.create({
  //     quantity: 1,
  //     UserTableId: currentUser.id,
  //     ProductTableId: addedProduct.id,
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
};

const getCartProducts = async (currentUser) => {
  const foundUser = await dbAdminOperation.getOneUser(currentUser._id);

  const userCartDB = foundUser.userCart;
  let totalPrice = 0;

  if (!userCartDB) {
    // return [allCartItems, totalPrice];
    return [[], 0];
  }

  const allCartItems = await Promise.all(
    userCartDB.map(async (cartItem) => {
      const productDetails = await dbProductOperation.getOneProduct(
        cartItem._id
      );
      return { ...productDetails, productQty: cartItem.qty };
    })
  );

  allCartItems.forEach((item) => {
    totalPrice += item.productPrice * item.productQty;
  });

  return [allCartItems, totalPrice];
};

// const deleteCartProduct = async (currentUser, deletedItem) => {
//   let foundUser;

//   try {
//     foundUser = await Tables.UserTable.findOne({
//       where: { id: currentUser.userId },
//     });
//   } catch (err) {
//     console.error(err);
//   }

//   try {
//     await foundUser.removeProductTable(deletedItem);
//   } catch (err) {
//     console.error(err);
//   }
// };

module.exports = {
  addUserAndProductToCart,
  getCartProducts,
  // deleteCartProduct,
};
