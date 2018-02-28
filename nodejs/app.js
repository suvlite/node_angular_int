const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const controllers = require('./src/controllers');
const errorHandler = require('./src/middleware/errorHandler');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'src', 'public')));

// View engine setup
app.set('views', path.resolve(__dirname, 'src', 'views'));
nunjucks.configure(app.get('views'), {
	autoescape: true,
	express: app
});
app.set('view engine', 'njk');

//Router
app.use(controllers);

//Error Handling
if (app.get('env') != 'production') {
	app.use(errorHandler['dev']);
} else {
	app.use(errorHandler['prod'])
}

module.exports = app;


