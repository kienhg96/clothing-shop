const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const api = require('../routes/api');
const clientBuildPath = path.join(__dirname, '../../client/build');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(clientBuildPath, 'static')));

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(clientBuildPath, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
module.exports = app;
