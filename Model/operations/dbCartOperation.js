const Tables = require("../dbAssociation");

const addUserAndProductToCart = async (currentUser, addedProduct) => {
  let existingCartProduct;

  try {
    existingCartProduct = await Tables.CartTable.findOne({
      where: {
        UserTableId: currentUser.id,
        ProductTableId: addedProduct.id,
      },
    });
  } catch (err) {
    console.error(err);
  }

  if (existingCartProduct) {
    try {
      await existingCartProduct.update({
        quantity: existingCartProduct.quantity + 1,
      });
    } catch (err) {
      console.error(err);
    }

    return;
  }

  try {
    await Tables.CartTable.create({
      quantity: 1,
      UserTableId: currentUser.id,
      ProductTableId: addedProduct.id,
    });
  } catch (err) {
    console.error(err);
  }
};

const getCartProducts = async (currentUser) => {
  const foundUser = await Tables.UserTable.findOne({
    where: { id: currentUser.id },
  });

  const foundCartItemsDB = await foundUser.getProductTables({
    through: {
      model: Tables.CartTable, // Specify the join table (CartTable)
    },
  });

  const allCartItems = foundCartItemsDB.map((value) => value.toJSON());
  let totalPrice = 0;

  if (allCartItems) {
    allCartItems.map((cartItem) => {
      totalPrice += cartItem.productPrice * cartItem.CartTable.quantity;

      return totalPrice;
    });
  }

  return [allCartItems, totalPrice];
};

const deleteCartProduct = async (currentUser, deletedItem) => {
  let foundUser;

  try {
    foundUser = await Tables.UserTable.findOne({
      where: { id: currentUser.userId },
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await foundUser.removeProductTable(deletedItem);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addUserAndProductToCart,
  getCartProducts,
  deleteCartProduct,
};
