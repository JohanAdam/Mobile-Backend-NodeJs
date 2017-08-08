'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This is main of the app index.

//create our app


//use index.js in config folder
var app = (0, _express2.default)();
//use index.js in routes folder

app.server = _http2.default.createServer(app);

//middleware
//parse application/json
app.use(_bodyParser2.default.json({
  //limit the input data ; so user cant insert more than ex:2tb data
  limit: _config2.default.bodyLimit
}));

//passport config

//api routes v1
//Domain/v1/
app.use('/v1', _routes2.default);

app.server.listen(_config2.default.port);
console.log('Started on port ' + app.server.address().port);

exports.default = app;
//# sourceMappingURL=index.js.map