module.exports = function(app){

	var products = require('./../controllers/products.server.controller.js');
	var users = require('./../controllers/users.server.controller.js');

	app.route('/product/list')
	.get(products.list)
	
	app.route('/product/new')
	.get(products.new)
	
	app.route('/product/view')
	.get(products.view)
	
	app.route('/product/:productId')
	.get(products.view)
	
	app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);
	
	app.route('/api/products/:productId')
	.get(products.read)
	.delete(users.requiresLogin, products.delete);
	
	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);
	
	
	app.param('productId', products.productByID);
}
