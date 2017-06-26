module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports =
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = moggy;
	
	var _utility = __webpack_require__(1);
	
	/**
	 * @method apply
	 * @param {Object|Array} value
	 * @return {Object}
	 */
	function moggy(value) {
	  return (0, _utility.extend)(value);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.each = each;
	exports.isFunction = isFunction;
	exports.patch = patch;
	exports.typeOf = typeOf;
	exports.extend = extend;
	/**
	 * @method each
	 * @param {Object} proto
	 * @param {Function} fn
	 * @return {void}
	 */
	function each(proto, fn) {
	    Object.getOwnPropertyNames(proto).forEach(fn);
	}
	
	/**
	 * @method isFunction
	 * @param {*} x
	 * @return {Boolean}
	 */
	function isFunction(x) {
	    return typeof x === 'function';
	}
	
	/**
	 * @method patch
	 * @param {Object} proto
	 * @param {String} name
	 * @param {Function} fn
	 * @return {*}
	 */
	function patch(proto, name, fn) {
	
	    Object.defineProperty(proto, name, {
	        configurable: false,
	        writable: false,
	        enumerable: false,
	        value: function (...args) {
	            return fn(this, ...args);
	        }
	    });
	}
	
	/**
	 * @method typeOf
	 * @param {*} value
	 * @return {Object}
	 */
	function typeOf(value) {
	
	    switch (true) {
	        case Array.isArray(value):
	            return Array;
	        case typeof value === 'object':
	            return Object;
	    }
	}
	
	/**
	 * @method extend
	 * @param {*} value
	 * @return {Object}
	 */
	function extend(value) {
	
	    const type = typeOf(value);
	    const proto = type['prototype'];
	
	    class Immutable extends Array {}
	
	    each(proto, name => isFunction(proto[name]) && patch(Immutable.prototype, name, (context, ...args) => {
	
	        // Make a copy of the object before making it immutable.
	        const extensibleContext = [...context];
	
	        try {
	
	            // Attempt to apply a function which we'll assume doesn't have any side-effects.
	            return proto[name].apply(Object.freeze(context), args);
	        } catch (e) {
	
	            // However if the function did in fact attempt to mutate the frozen object, then we'll
	            // handle that gracefully, and return a tuple of the result and its side-effect.
	            const result = proto[name].apply(extensibleContext, args);
	            return Object.freeze([extensibleContext, result]);
	        }
	    }));
	
	    return Object.freeze(Array.isArray(value) ? new Immutable(...value) : new Immutable(value));
	}

/***/ }
/******/ ]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _moggy = __webpack_require__(0);

var _moggy2 = _interopRequireDefault(_moggy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @method parse
 * @param {Object} input
 * @param {Array} group
 * @return {Array} 
 */
var parse = exports.parse = function parse(input) {
    var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


    return Object.keys(input).reduce(function (xs, key) {

        var isGroup = _typeof(input[key]) === 'object' && !Array.isArray(input[key]);
        var model = { field: group.concat(key), messages: input[key] };

        return isGroup ? xs.concat(parse(_extends({}, input[key]), group.concat(key))) : [].concat(_toConsumableArray(xs), [model]);
    }, []);
};

/***/ })
/******/ ]);