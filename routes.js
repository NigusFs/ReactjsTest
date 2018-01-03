var routes = {get:{},post:{},delete:{},put:{},sockets:{}};
routes.get['/index'] = require("./modules/index.js");
routes.get['/'] = require("./modules/index.js");

module.exports = routes;
