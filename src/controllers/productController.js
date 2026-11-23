const productController = {

  products: (req, res) => {
    res.send("ALL PRODUCTS");
  },


  singleProduct: (req, res) => {
    const id = req.params.id;
    res.send(`SINGLE PRODUCT - ${id}`);
  },
};

export default productController;