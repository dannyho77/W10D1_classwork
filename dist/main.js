/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(arr) {\n        this.nodes = arr;\n    }\n\n    html(string) {\n        if (string !== undefined) {\n            this.nodes.forEach( (el) => el.innerHTML = string);\n            return this;\n        }\n        else\n            return this.nodes[0].innerHTML;\n    }\n\n    empty() {\n        this.nodes.forEach((el) => el.innerHTML = \"\");\n    }\n\n    append (...content) {\n        this.nodes.forEach (node => {\n            content.forEach((el) => {\n                if (el instanceof HTMLElement){\n                    node.insertAdjacentHTML('beforeend',el.outerHTML);\n                } else if (el instanceof DOMNodeCollection){\n                    el.nodes.forEach(function(el2){\n                        node.insertAdjacentHTML('beforeend', el2.outerHTML);\n                    })\n                }\n                else {\n                    node.insertAdjacentHTML('beforeend', el);\n                }\n            });\n        });\n    }\n\n    addClass (...classes) {\n        this.nodes.forEach(function(node){\n                node.classList.add(...classes);   \n        })\n    }\n\n    removeClass (...classes) {\n        this.nodes.forEach(function(node){\n                node.classList.remove(...classes);   \n        })\n    }\n\n    attr (name, value){\n        if (value === undefined) {\n            return this.nodes.map(function(el){\n                el.getAttribute(name);\n            })\n        }\n        this.nodes.forEach(function(node){\n            node.setAttribute(name, value);\n        })\n    }\n\n    children (){\n        let arr = [];\n        this.nodes.forEach(function(node){\n            arr = arr.concat(Array.from(node.children));\n        })\n        return new DOMNodeCollection(arr);\n    }\n\n    parent() {\n        let arr = [];\n        this.nodes.forEach(function (node) {\n            if (node.parentNode && !arr.includes(node.parentNode))\n                arr.push(node.parentNode);\n        })\n        return new DOMNodeCollection(arr);\n    }\n\n    //Still to do: Need to only push unique elements, as in parent\n    find(selectors) {\n        let arr = [];\n        this.nodes.forEach(function (node) {\n            arr = arr.concat(Array.from(node.querySelectorAll(selectors)));\n        })\n        return new DOMNodeCollection(arr);\n    }\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import DOMNodeCollection;\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg) {\n    if (arg instanceof HTMLElement){\n        return new DOMNodeCollection([arg]);\n    }\n    else {\n        let obj = Array.from(document.querySelectorAll(arg));\n        return new DOMNodeCollection(obj);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;