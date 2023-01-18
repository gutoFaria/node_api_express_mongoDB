const express = require('express');
const routes = express.Router();

const userController = require('../controllers/usercontroller');
const productController = require('../controllers/productController');

routes.get("/api/users", userController.getAllUsers);
routes.get('/api/users/:id',userController.getbyId);
routes.post('api/users',userController.createUser);
routes.put('/api/users/:id',userController.updateUser);
routes.delete('/api/users/:id',userController.deleteUser);

routes.get("/api/products", productController.getAllProducts);
routes.get('/api/products/:id',productController.getbyId);
routes.post('/api/products/',productController.createProduct);
routes.put('/api/products/:id',productController.updateProduct);
routes.delete('/api/products/:id',productController.deleteProduct);


module.exports = routes;