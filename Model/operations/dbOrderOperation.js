const Tables = require("../dbAssociation");
const dbProductOperation = require("./dbProductOperation");

const getOrders = async (currentUser) => {
  const productIdsAndQty = await Tables.OrderTable.getOrderList(
    currentUser.userId
  );

  let detailedOrderList = [];

  for (order of productIdsAndQty) {
    const modifiedOrder = await Promise.all(order.map(async (product) => {
      const productDetails = await dbProductOperation.getOneProduct(
        product.productId
      );

      return {
        ...productDetails,
        qty: product.qty,
      };
    }));

    detailedOrderList.push(modifiedOrder);
  }

  return detailedOrderList;
};

const postCartToOrders = async (currentUser) => {
  const foundUser = await Tables.UserTable.findById(currentUser.userId);
  const foundCartItems = foundUser.userCart;

  const adjustedCartItems = foundCartItems.map((item) => {
    return { productId: item._id, qty: item.qty };
  });

  // console.log(foundUser._id);
  // console.log(adjustedCartItems);

  if (!foundCartItems || foundCartItems.length === 0) {
    console.log("Nothing will be done!");
    return;
  }

  const orderTable = new Tables.OrderTable(adjustedCartItems, foundUser._id);
  await orderTable.save();
};

module.exports = {
  getOrders,
  postCartToOrders,
};
