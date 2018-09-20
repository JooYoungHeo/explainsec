const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

let options = {
	swaggerDefinition: {
		info: {
			title: 'swagger-test docs',
			version: '0.0.1',
			description: 'test swagger api for using real service'
		},
		host: 'localhost:3000',
		basePath: '/',
		contact: {
			email: 'jyhur900226@gmail.com'
		},
		components: {
			res: {
				BadRequest: {
					description: 'bad request',
					schema: {
						$ref: '#/components/errorResult/Error'
					}
				},
				Forbidden: {
					description: 'no authority',
					schema: {
						$ref: '#/components/errorResult/Error'
					}
				},
				NotFound: {
					description: 'no resource',
					schema: {
						$ref: '#/components/errorResult/Error'
					}
				}
			},
			errorResult: {
				Error: {
					type: 'object',
					properties: {
						errMsg: {
							type: 'string',
							description: 'send error message'
						}
					}
				}
			}
		},
		schemes: ['http', 'https'],
		definitions: {
			'User': {
				type: 'object',
				properties: {
					id: {
						type: 'integer'
					},
					name: {
						type: 'string'
					},
					hp: {
						type: 'string'
					}
				}
			}
		}
	},
	apis: ['./routes/*.js']
};

module.exports.swaggerSpec = swaggerJSDoc(options);
module.exports.swaggerUi = swaggerUi;