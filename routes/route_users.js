
const express = require('express');
const users_operations = require('../controller/users')
const router = express.Router();
// router methods
// here post method for user is not there,  user will be creaed with proper authentication process using tokens
router.get('/',users_operations.getAllUsers)
      .get('/:id',users_operations.getOneUser)
      .put('/:id',users_operations.replaceUser)
      .patch('/:id',users_operations.changeUser)
      .delete('/:id',users_operations.deleteUser)

module.exports=router;
