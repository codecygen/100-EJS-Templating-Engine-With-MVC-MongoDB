const Tables = require("../dbAssociation");

const addNewProduct = async (newProduct) => {
  const { productName, productDesc, productPrice, productImg, adminId } =
    newProduct;

  const productTable = new Tables.ProductTable(
    productName,
    productDesc,
    productPrice,
    productImg,
    adminId
  );

  await productTable.save();
};

const getAllProducts = async () => {
  const allProducts = await Tables.ProductTable.getProducts();

  return allProducts;

  // let result;

  // try {
  //   result = await Tables.ProductTable.findAll();
  // } catch (err) {
  //   console.error(err);
  // }

  // const allProducts = result.map((value) => value.toJSON());

  // return allProducts;
};

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
  getAllProducts,
  // getOneProduct,
  // updateOneProduct,
  // deleteOneProduct,
};
