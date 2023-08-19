const Tables = require("../dbAssociation");

const getOrders = async (currentUser) => {
  const foundUser = await Tables.UserTable.findOne({
    where: { id: currentUser.userId },
  });

  const foundOrders = await foundUser.getOrderTables();

  // Find-Max-Number-For-Key-In-Table
  const maxOderNumber = await Tables.OrderTable.max("orderNumber", {
    where: { userTableId: foundUser.toJSON().id },
  });

  let detailedOrderList = [];

  for (let i = 0; i < maxOderNumber; i++) {
    let singleOrderList = [];
    
    for (const foundOrder of foundOrders) {
      if (foundOrder.orderNumber === i + 1) {

        const orderProductDB = await foundOrder.getProductTable({
          where: { id: foundOrder.ProductTableId },
        });

        singleOrderList = [
          ...singleOrderList,
          {
            ...foundOrder.toJSON(),
            productDetails: { ...orderProductDB.toJSON() },
          },
        ];
      }
    }

    detailedOrderList.push(singleOrderList);
  }

  return detailedOrderList;
};

const postCartToOrders = async (currentUser) => {
  const foundUser = await Tables.UserTable.findOne({
    where: { id: currentUser.userId },
  });

  const foundCartItemsDB = await foundUser.getProductTables({
    through: Tables.CartTable,
  });

  const allCartItems = foundCartItemsDB.map((value) => value.toJSON());

  // Find-Max-Number-For-Key-In-Table
  const maxOderNumber = await Tables.OrderTable.max("orderNumber", {
    where: { userTableId: foundUser.toJSON().id },
  });

  let nextOrderNumber;

  if (maxOderNumber) {
    nextOrderNumber = maxOderNumber + 1;
  } else {
    nextOrderNumber = 1;
  }

  const allOrders = allCartItems.map((cartItem) => {
    return {
      quantity: cartItem.CartTable.quantity,
      orderNumber: nextOrderNumber,
      UserTableId: foundUser.toJSON().id,
      ProductTableId: cartItem.id,
    };
  });

  const createdOrders = await Promise.all(
    allOrders.map((order) => {
      return Tables.OrderTable.create(order);
    })
  );

  await foundUser.removeProductTable(foundCartItemsDB, {
    through: Tables.CartTable,
  });
};

module.exports = { getOrders, postCartToOrders };
