const Tables = require("../dbAssociation");

const addNewProduct = async (newProduct) => {
  console.log(newProduct);

  await Tables.productTable.save(newProduct);

  // try {
  //   const createdProduct = await Tables.ProductTable.create(newProduct);
  // } catch (err) {
  //   console.error(err);
  // }
};

// const getAllProducts = async () => {
//   let result;

//   try {
//     result = await Tables.ProductTable.findAll();
//   } catch (err) {
//     console.error(err);
//   }

//   const allProducts = result.map((value) => value.toJSON());

//   return allProducts;
// };

// const getOneProduct = async (productId) => {
//   let result;

//   try {
//     result = await Tables.ProductTable.findByPk(productId);
//   } catch (err) {
//     console.error(err);
//   }

//   return result.toJSON();
// };

// const updateOneProduct = async (productId, updatedData) => {
//   try {
//     const result = await Tables.ProductTable.update(updatedData, {
//       where: { id: productId },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// const deleteOneProduct = async (productId) => {
//   try {
//     const result = await Tables.ProductTable.destroy({
//       where: { id: productId },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

module.exports = {
  addNewProduct,
  // getAllProducts,
  // getOneProduct,
  // updateOneProduct,
  // deleteOneProduct,
};
