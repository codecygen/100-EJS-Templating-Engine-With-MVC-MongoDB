const Tables = require("../dbAssociation");

const addNewProduct = async (newProduct) => {
  const { productName, productDesc, productPrice, productImg, adminId } =
    newProduct;

    const _id = null;

  const productTable = new Tables.ProductTable(
    _id,
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
};

const getOneProduct = async (productId) => {
  const foundProduct = await Tables.ProductTable.findById(productId);

  return foundProduct;
};

const updateOneProduct = async (updatedData) => {
  const {
    _id,
    productName,
    productDesc,
    productPrice,
    productImg,
    adminId,
  } = updatedData;

  const productTable = new Tables.ProductTable(
    _id,
    productName,
    productDesc,
    productPrice,
    productImg,
    adminId,
  );

  await productTable.save();
};

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
  getOneProduct,
  updateOneProduct,
  // deleteOneProduct,
};
