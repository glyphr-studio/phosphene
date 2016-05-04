/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _WindowRegister = __webpack_require__(1);
	
	var _WindowRegister2 = _interopRequireDefault(_WindowRegister);
	
	var _EventUnit = __webpack_require__(2);
	
	var _EventUnit2 = _interopRequireDefault(_EventUnit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventStream = function () {
	  function EventStream(options) {
	    _classCallCheck(this, EventStream);
	
	    this._options = {
	      rootStreamName: "_eventStream",
	      staticsName: "_statics",
	      namespaceURI: "http://www.w3.org/1999/xhtml",
	      qualifiedName: "root",
	      doctype: null
	    };
	
	    this._options = Object.assign(this._options, options);
	    var options = this._options;
	
	    this._windowRegister = new _WindowRegister2.default(options.rootStreamName, options.staticsName);
	
	    if (this._windowRegister.getStatic(this._options.rootStreamName)) return this._windowRegister.getStatic(this._options.rootStreamName);else return this._init(options);
	  }
	
	  _createClass(EventStream, [{
	    key: "_init",
	    value: function _init(options) {
	      this._DOMEventStream = document.implementation.createDocument(options.namespaceURI, options.qualifiedName, options.doctype);
	      this._windowRegister.attachStatic(_defineProperty({}, this._options.rootStreamName, this._DOMEventStream));
	      return this._windowRegister.getStatic(this._options.rootStreamName);
	    }
	  }, {
	    key: "DOMEventStream",
	    get: function get() {
	      return this._DOMEventStream;
	    }
	  }]);
	
	  return EventStream;
	}();
	
	exports.default = EventStream;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WindowRegister = function () {
	  function WindowRegister(rootObjectName, staticsObjectName) {
	    _classCallCheck(this, WindowRegister);
	
	    this._rootObjectName = rootObjectName;
	    this._staticRootObjectName = staticsObjectName;
	
	    if (window[this._rootObjectName] && _typeof(window[this._rootObjectName]) !== "object") {
	      throw new TypeError("window." + this._rootObjectName + " must be either of type undefined or object, got " + _typeof(window[this._rootObjectName]));
	    }
	    // Initialize window registry onto the window object if needed
	    else if (typeof window[this._rootObjectName] === "undefined") {
	        window[this._rootObjectName] = _defineProperty({}, this._staticRootObjectName, {});
	      }
	  }
	
	  _createClass(WindowRegister, [{
	    key: "getRoot",
	    value: function getRoot() {
	      // Ask for read access
	      return window[this._rootObjectName];
	    }
	  }, {
	    key: "getStatic",
	    value: function getStatic(name) {
	      return window[this._rootObjectName][this._staticRootObjectName][name];
	    }
	  }, {
	    key: "attachStatic",
	    value: function attachStatic(object) {
	      return window[this._rootObjectName][this._staticRootObjectName] = Object.assign(this.getStatic() || {}, object);
	    }
	  }, {
	    key: "detachStatic",
	    value: function detachStatic(object) {
	      for (var sObject in window[this._rootObjectName][this._staticRootObjectName]) {
	        var current = window[this._rootObjectName][this._staticRootObjectName][sObject];
	        if (current === object) {
	          delete window[this._rootObjectName][this._staticRootObjectName][sObject];
	          return current;
	        }
	      }
	    }
	  }]);
	
	  return WindowRegister;
	}();
	
	exports.default = WindowRegister;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(4))

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "\"use strict\";\n\n(function ($) {\n  var mutedToken = \"_muted\";\n\n  $.fn.extend({\n    notify: function notify() {\n      if (!this.data(mutedToken)) this.trigger.apply(this, arguments);\n    },\n    mute: function mute() {\n      this.data(mutedToken, true);\n    },\n    unmute: function unmute() {\n      this.data(mutedToken, false);\n    }\n  });\n})($);"

/***/ }
/******/ ]);
//# sourceMappingURL=xml-event-stream.js.map