const Tables = require("../dbAssociation");

// const getOrders = async (currentUser) => {
//   const foundUser = await Tables.UserTable.findOne({
//     where: { id: currentUser.userId },
//   });

//   const foundOrders = await foundUser.getOrderTables();

//   // Find-Max-Number-For-Key-In-Table
//   const maxOderNumber = await Tables.OrderTable.max("orderNumber", {
//     where: { userTableId: foundUser.toJSON().id },
//   });

//   let detailedOrderList = [];

//   for (let i = 0; i < maxOderNumber; i++) {
//     let singleOrderList = [];
    
//     for (const foundOrder of foundOrders) {
//       if (foundOrder.orderNumber === i + 1) {

//         const orderProductDB = await foundOrder.getProductTable({
//           where: { id: foundOrder.ProductTableId },
//         });

//         singleOrderList = [
//           ...singleOrderList,
//           {
//             ...foundOrder.toJSON(),
//             productDetails: { ...orderProductDB.toJSON() },
//           },
//         ];
//       }
//     }

//     detailedOrderList.push(singleOrderList);
//   }

//   return detailedOrderList;
// };

const postCartToOrders = async (currentUser) => {
  const foundUser = await Tables.UserTable.findById(currentUser.userId);
  const foundCartItems = foundUser.userCart;

  const adjustedCartItems = foundCartItems.map(item => {
    return {productId: item._id, qty: item.qty};
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
  // getOrders, 
  postCartToOrders,
 };
