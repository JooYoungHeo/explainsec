const express = require('express');
const swaggerTest = require('./swagger-test');

const port = 3000;
let app = express();

app.get('/', (req, res) => {
	res.json({desc: 'express swagger test'});
});

app.use('/api-docs', swaggerTest.swaggerUi.serve,
		swaggerTest.swaggerUi.setup(swaggerTest.swaggerSpec));

app.listen(port, () => {
	console.log('server start with port : #%s', port);
});
