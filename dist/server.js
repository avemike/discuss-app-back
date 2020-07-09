/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar userSchema = new Schema({\n  username: String\n});\nmodule.exports = mongoose.model('User', userSchema);\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./schema/schema.js":
/*!**************************!*\
  !*** ./schema/schema.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var graphql = __webpack_require__(/*! graphql */ \"graphql\");\n\nvar User = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nvar GraphQLObjectType = graphql.GraphQLObjectType,\n    GraphQLString = graphql.GraphQLString,\n    GraphQLID = graphql.GraphQLID,\n    GraphQLSchema = graphql.GraphQLSchema,\n    GraphQLList = graphql.GraphQLList,\n    GraphQLNonNull = graphql.GraphQLNonNull;\nvar UserType = new GraphQLObjectType({\n  name: \"User\",\n  fields: function fields() {\n    return {\n      id: {\n        type: GraphQLID\n      },\n      username: {\n        type: GraphQLString\n      }\n    };\n  }\n});\nvar RootQuery = new GraphQLObjectType({\n  name: \"RootQueryType\",\n  fields: {\n    user: {\n      type: UserType,\n      args: {\n        id: {\n          type: GraphQLID\n        }\n      },\n      resolve: function resolve(_, input) {\n        return User.findById(input.id);\n      }\n    },\n    users: {\n      type: new GraphQLList(UserType),\n      resolve: function resolve(_, __) {\n        return User.find({});\n      }\n    }\n  }\n});\nvar Mutation = new GraphQLObjectType({\n  name: 'Mutation',\n  fields: {\n    createUser: {\n      type: UserType,\n      args: {\n        username: {\n          type: new GraphQLNonNull(GraphQLString)\n        }\n      },\n      resolve: function resolve(_, input) {\n        var newUser = new User({\n          username: input.username\n        });\n        return newUser.save();\n      }\n    }\n  }\n});\nmodule.exports = new GraphQLSchema({\n  query: RootQuery,\n  mutation: Mutation\n});\n\n//# sourceURL=webpack:///./schema/schema.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar _require = __webpack_require__(/*! express-graphql */ \"express-graphql\"),\n    graphqlHTTP = _require.graphqlHTTP;\n\nvar schema = __webpack_require__(/*! ./schema/schema */ \"./schema/schema.js\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar app = express(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path.join(DIST_DIR, 'index.html');\nmongoose.connect('mongodb://localhost:27017/message-app');\nmongoose.connection.once('open', function () {\n  console.log('Connected to database');\n});\napp.use(express[\"static\"](DIST_DIR));\napp.use('/graphql', graphqlHTTP({\n  schema: schema,\n  graphiql: true\n}));\napp.get('*', function (req, res) {\n  res.sendFile(HTML_FILE);\n});\nvar PORT = process.env.PORT || 8080;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });