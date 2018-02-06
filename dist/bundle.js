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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// KSortable plugin useing html5 DnD API start
var KSortable = function () {
  var KSortable = function KSortable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$target = _ref.target,
        target = _ref$target === undefined ? null : _ref$target;

    var elems = target.children;

    this.dragElem;
    this.init(elems);
  };

  KSortable.prototype = function () {
    function _handlerDragStart(e) {
      this.dragElem = e.target;

      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.innerHTML);
    }

    function _handlerDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
    }

    function _handlerDrop(e) {
      this.dragElem.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData("text/html");
    }

    function init(elems, only) {
      var _this = this;

      [].forEach.call(elems, function (elem) {
        elem.addEventListener("dragstart", _this._handlerDragStart.bind(_this));
        elem.addEventListener("dragover", _this._handlerDragOver.bind(_this));
        elem.addEventListener("drop", _this._handlerDrop.bind(_this));
      });
    }

    function update(elem) {
      elem.addEventListener("dragstart", this._handlerDragStart.bind(this));
      elem.addEventListener("dragover", this._handlerDragOver.bind(this));
      elem.addEventListener("drop", this._handlerDrop.bind(this));
    }

    return {
      init: init,
      update: update,
      _handlerDragStart: _handlerDragStart,
      _handlerDragOver: _handlerDragOver,
      _handlerDrop: _handlerDrop
    };
  }();

  return KSortable;
}();
// KSortable plugin useing html5 DnD API end

// user code start
function addUser() {
  document.querySelector(".add-user form").addEventListener("submit", function (e) {
    e.preventDefault();

    var value = e.target.querySelector("#user-name").value;
    value = value.trim();
    value = value.length == 0 ? null : value;

    if (value === null) return;

    var newElem = document.createElement("li");
    newElem.setAttribute("draggable", true);
    newElem.innerHTML = value;

    e.target.querySelector("#user-name").value = "";
    document.querySelector(".user-list ul").appendChild(newElem);

    // update events for new elements
    sortableList1.update(newElem);
  });
}

addUser();

// turn on KSortable plugin
var sortableList1 = new KSortable({
  target: document.getElementById("sortable-list-1")
});
// user code end

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);