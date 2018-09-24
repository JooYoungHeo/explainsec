const express = require('express');
const bodyParser = require('body-parser');
const swaggerTest = require('./swagger-test');

const api = require('./routes');

const port = 3000;
let app = express();

app.use(bodyParser.json());
app.use('/api', api);

app.get('/', (req, res) => {
	res.json({desc: 'express swagger test'});
});

app.use('/api-docs', swaggerTest.swaggerUi.serve,
		swaggerTest.swaggerUi.setup(swaggerTest.swaggerSpec));

app.listen(port, () => {
	console.log('server start with port : #%s', port);
});
