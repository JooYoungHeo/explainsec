const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

let options = {
	swaggerDefinition: {
		info: {
			title: 'swagger-test docs',
			version: '0.0.1',
			description: 'test swagger api for using real service'
		},
		host: 'xxx.xxx.xx.x',
		basePath: '/'
	},
	apis: []
};

module.exports.swaggerSpec = swaggerJSDoc(options);
module.exports.swaggerUi = swaggerUi;
					  
