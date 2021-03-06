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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_MobileNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/MobileNav */ "./resources/js/module/MobileNav.js");
/* harmony import */ var _module_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/DropdownMenu */ "./resources/js/module/DropdownMenu.js");


var mobileNav = new _module_MobileNav__WEBPACK_IMPORTED_MODULE_0__["default"]();
var dropDownMenu = new _module_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
var menuMobileIcon = document.querySelector('.hamburger-menu');
menuMobileIcon.addEventListener('click', function (e) {
  mobileNav.open();
});
var closeBtn = document.querySelector('.menu-mobile__close-btn');
closeBtn.addEventListener('click', function (e) {
  mobileNav.close();
});
window.addEventListener('click', function (e) {
  if (!document.querySelector('.menu-mobile').contains(e.target) && !menuMobileIcon.contains(e.target)) {
    if (mobileNav.isOpen()) {
      mobileNav.close();
      e.preventDefault();
    }
  }
});
var dropDownList = document.querySelector('.menu-mobile__dropdown');
var dropDownLink = document.querySelector('menu-mobile__dropdown__item');
dropDownList.addEventListener('click', function (e) {
  e.preventDefault();
  dropDownMenu.down();
});

/***/ }),

/***/ "./resources/js/module/DropdownMenu.js":
/*!*********************************************!*\
  !*** ./resources/js/module/DropdownMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownMenu =
/*#__PURE__*/
function () {
  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    this.dropDownMenu = document.querySelector('.menu-mobile__dropdown');
    this.dropDownList = document.querySelector('.menu-mobile__dropdown__list');
  }

  _createClass(DropdownMenu, [{
    key: "down",
    value: function down() {
      this.dropDownMenu.classList.toggle('menu-mobile__dropdown--height-down');
      this.dropDownList.classList.toggle('menu-mobile__dropdown__list--down-list');
    }
  }]);

  return DropdownMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./resources/js/module/MobileNav.js":
/*!******************************************!*\
  !*** ./resources/js/module/MobileNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileNav =
/*#__PURE__*/
function () {
  function MobileNav() {
    _classCallCheck(this, MobileNav);

    this.mobileNav = document.querySelector('.menu-mobile');
  }

  _createClass(MobileNav, [{
    key: "open",
    value: function open() {
      this.mobileNav.classList.add('menu-mobile--open');
      this.mobileNav.classList.remove('menu-mobile__close-btn--close');
    }
  }, {
    key: "close",
    value: function close() {
      this.mobileNav.classList.add('menu-mobile__close-btn--close');
      this.mobileNav.classList.remove('menu-mobile--open');
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.mobileNav.classList.contains();
    }
  }]);

  return MobileNav;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/bertomalone/Project/header-menu/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/bertomalone/Project/header-menu/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });