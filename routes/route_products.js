
const express = require('express');
const product_operations = require('../controller/products')
const router = express.Router();
// router methods
router.get('/',product_operations.getAllProducts)
      .get('/add',product_operations.post_form_SSR)       // for serverside rendering
      .get('/ssr',product_operations.getAllProducts_SSR)  // for serverside rendering
      .get('/:id',product_operations.getOneProduct)
      .post('/',product_operations.postProduct)
      .put('/:id',product_operations.replaceProduct)
      .patch('/:id',product_operations.changeProduct)
      .delete('/:id',product_operations.deleteProduct);

module.exports=router;
