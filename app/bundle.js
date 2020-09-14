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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/modules/calcPostfix.js":
/*!*******************************************!*\
  !*** ./app/assets/modules/calcPostfix.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//.calculates postFix\r\nconst calculate = (postFixStr) => {\r\n\t//split postfix using spaces in between.\r\n\tlet postFixArr = postFixStr.split(' ');\r\n\r\n\tif (postFixStr != 'invalid entry') {\r\n\t\tfor (let i = 0; i <= postFixArr.length - 1; ) {\r\n\t\t\tif (postFixArr[i] === '+' && !isNaN(postFixArr[i - 2])) {\r\n\t\t\t\tpostFixArr.splice(\r\n\t\t\t\t\ti - 2,\r\n\t\t\t\t\t3,\r\n\t\t\t\t\tNumber(postFixArr[i - 2]) + Number(postFixArr[i - 1])\r\n\t\t\t\t);\r\n\t\t\t\tconsole.log(`current index is +. splice, counter reset`);\r\n\t\t\t\ti = 0;\r\n\t\t\t} else if (postFixArr[i] === '-' && !isNaN(postFixArr[i - 2])) {\r\n\t\t\t\tpostFixArr.splice(\r\n\t\t\t\t\ti - 2,\r\n\t\t\t\t\t3,\r\n\t\t\t\t\tNumber(postFixArr[i - 2]) - Number(postFixArr[i - 1])\r\n\t\t\t\t);\r\n\t\t\t\tconsole.log(`current index is -. splice, counter reset`);\r\n\t\t\t\ti = 0;\r\n\t\t\t} else if (postFixArr[i] === '*' && !isNaN(postFixArr[i - 2])) {\r\n\t\t\t\tpostFixArr.splice(\r\n\t\t\t\t\ti - 2,\r\n\t\t\t\t\t3,\r\n\t\t\t\t\tNumber(postFixArr[i - 2]) * Number(postFixArr[i - 1])\r\n\t\t\t\t);\r\n\t\t\t\tconsole.log(`current index is *. splice, counter reset`);\r\n\t\t\t\ti = 0;\r\n\t\t\t} else if (postFixArr[i] === '/' && !isNaN(postFixArr[i - 2])) {\r\n\t\t\t\tpostFixArr.splice(\r\n\t\t\t\t\ti - 2,\r\n\t\t\t\t\t3,\r\n\t\t\t\t\tNumber(postFixArr[i - 2]) / Number(postFixArr[i - 1])\r\n\t\t\t\t);\r\n\t\t\t\tconsole.log(`current index is /. splice, counter reset`);\r\n\t\t\t\ti = 0;\r\n\t\t\t} else if (postFixArr[i] === '^' && !isNaN(postFixArr[i - 2])) {\r\n\t\t\t\tpostFixArr.splice(\r\n\t\t\t\t\ti - 2,\r\n\t\t\t\t\t3,\r\n\t\t\t\t\tMath.pow(Number(postFixArr[i - 2]), Number(postFixArr[i - 1]))\r\n\t\t\t\t);\r\n\t\t\t\tconsole.log(`current index is ^. splice, counter reset`);\r\n\t\t\t\ti = 0;\r\n\t\t\t} else if (/\\w/.test(postFixArr[i])) {\r\n\t\t\t\tconsole.log(`is alphanumeric. counter: + 1`);\r\n\t\t\t\ti++;\r\n\t\t\t\tconsole.log(`new counter. ${i}`);\r\n\t\t\t} else if (isNaN(postFixArr[i]) && isNaN(postFixArr[i - 2])) {\r\n\t\t\t\treturn 'incorrect formula';\r\n\t\t\t}\r\n\t\t}\r\n\t\tconsole.log('end of calculation');\r\n\t\treturn postFixArr.join('');\r\n\t} else {\r\n\t\treturn 'incorrect formula';\r\n\t}\r\n}; //#end of calculate function\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculate);\r\n\n\n//# sourceURL=webpack:///./app/assets/modules/calcPostfix.js?");

/***/ }),

/***/ "./app/assets/modules/infixToPostfix.js":
/*!**********************************************!*\
  !*** ./app/assets/modules/infixToPostfix.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//.converts string of infix to postfix.\r\nconst infixToPostfix = function (input) {\r\n\tlet result = '';\r\n\tconst stack = [];\r\n\tlet inputArr = input.split('');\r\n\r\n\t//check if operator\r\n\tconst isOperator = function (char) {\r\n\t\treturn ['+', '-', '/', '*', '^', '~', '%'].includes(char);\r\n\t};\r\n\r\n\t//validator\r\n\tif (['+', '-'].includes(inputArr[0])) {\r\n\t\tinputArr.unshift('0');\r\n\t} else if (isNaN(inputArr[0])) {\r\n\t\treturn 'invalid entry';\r\n\t}\r\n\r\n\tfor (const [index, value] of inputArr.entries()) {\r\n\t\tif (isOperator(value) && isOperator(inputArr[index + 1])) {\r\n\t\t\treturn 'invalid entry';\r\n\t\t}\r\n\t}\r\n\r\n\t//groups numeric values together\r\n\tfor (let i = 0; i <= inputArr.length - 1; ) {\r\n\t\t!isNaN(inputArr[i]) && !isNaN(inputArr[i + 1])\r\n\t\t\t? (inputArr.splice(i, 2, inputArr[i] + inputArr[i + 1]), (i = 0))\r\n\t\t\t: i++;\r\n\t}\r\n\r\n\t//get top of stack or (last element of stack array)\r\n\tconst topOfStack = () => {\r\n\t\treturn stack[stack.length - 1];\r\n\t};\r\n\r\n\t//evaluates level of symbol\r\n\tconst getPrecedence = function (symbol) {\r\n\t\tswitch (symbol) {\r\n\t\t\tcase '^':\r\n\t\t\t\treturn 5;\r\n\t\t\tcase '*' || false:\r\n\t\t\t\treturn 4;\r\n\t\t\tcase '+' || false:\r\n\t\t\t\treturn 3;\r\n\t\t\tcase '=':\r\n\t\t\t\treturn 2;\r\n\t\t\tdefault:\r\n\t\t\t\treturn true;\r\n\t\t}\r\n\t};\r\n\r\n\t//checks if parentheses if preceded by a number of operator. if it's alphanumeric, it adds a \"*\" between\r\n\tif (input.includes('(')) {\r\n\t\tfor (const [index, value] of inputArr.entries()) {\r\n\t\t\tif (\r\n\t\t\t\tvalue === '(' &&\r\n\t\t\t\t(/\\w/.test(inputArr[index - 1]) || inputArr[index - 1] === ')') &&\r\n\t\t\t\tinputArr[index - 1] !== undefined\r\n\t\t\t) {\r\n\t\t\t\tinputArr.splice(index, 0, '*');\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t//evaluate inputArr and convert to postfix\r\n\tinputArr.forEach((element, idx, arr) => {\r\n\t\tif (/\\w/.test(element)) {\r\n\t\t\tresult += `${element} `;\r\n\t\t} else if (\r\n\t\t\t(isNaN(element) && topOfStack() === undefined) ||\r\n\t\t\telement === '('\r\n\t\t) {\r\n\t\t\tstack.push(element);\r\n\t\t} else if (element === ')') {\r\n\t\t\twhile (topOfStack() !== '(') {\r\n\t\t\t\tresult += `${stack.pop()} `;\r\n\t\t\t}\r\n\t\t\tstack.pop();\r\n\t\t} else {\r\n\t\t\twhile (getPrecedence(element) <= getPrecedence(topOfStack())) {\r\n\t\t\t\tresult += `${stack.pop()} `;\r\n\t\t\t}\r\n\t\t\tstack.push(element);\r\n\t\t}\r\n\t});\r\n\r\n\t//push remaining operators in stack to result after each element has been evaluated\r\n\twhile (stack.length > 0) {\r\n\t\tresult += `${stack.pop()} `;\r\n\t}\r\n\r\n\t//since each operator and number is followed by a space, last number/operator will contain a space, this cleans that and prepares result for calculation which splits the string by space.\r\n\treturn result.trimEnd();\r\n}; //#end of infixToPostfix function;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (infixToPostfix);\r\n\n\n//# sourceURL=webpack:///./app/assets/modules/infixToPostfix.js?");

/***/ }),

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_infixToPostfix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/infixToPostfix */ \"./app/assets/modules/infixToPostfix.js\");\n/* harmony import */ var _modules_calcPostfix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/calcPostfix */ \"./app/assets/modules/calcPostfix.js\");\n\r\n\r\n\r\nif (false) {}\r\n\r\n/* @ts-check \r\n#Order of operation\r\nParentheses,\r\nExponents,\r\nMultiplication or Division (left-to-right),\r\nSubtraction or Addition (left-to-right)\r\n\r\n#RPN stack precedence\r\nIf symbol is lower or equal precedence, stack gets popped into the result.\r\n\r\nhttps://www.youtube.com/watch?v=LQ-iW8jm6Mk&t=26s\r\n\r\nSymbol      Name\r\n^           Exponential\r\n* / ~       Multiplication, Division, Roughly Equal\r\n+ -         Plus, Minus\r\n(           Parentheses\r\n=           Equal\r\n*/\r\n\r\n//.compare if two elements in an array have the same quantity\r\nconst isEqualQty = function (element1, element2, iterative) {\r\n\tlet count = [0, 0];\r\n\r\n\tfor (const cur of iterative) {\r\n\t\tif (cur === element1) {\r\n\t\t\tcount[0]++;\r\n\t\t} else if (cur === element2) {\r\n\t\t\tcount[1]++;\r\n\t\t}\r\n\t}\r\n\r\n\treturn count[0] === count[1];\r\n};\r\n\r\nconst submitBtn = document.querySelector('input[type=\"button\"]');\r\n\r\nsubmitBtn.addEventListener('click', () => {\r\n\tconst input = document.querySelector('input[type=\"text\"]').value;\r\n\r\n\tconst showResult = document.getElementById('result');\r\n\r\n\tconsole.log(`test`);\r\n\r\n\t//validator. prevents user from entering invalid formula or alphabet characters.\r\n\tif (\r\n\t\tObject(_modules_calcPostfix__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_modules_infixToPostfix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input)) === 'incorrect formula' ||\r\n\t\t/[a-zA-Z]/.test(input)\r\n\t) {\r\n\t\tconsole.log(/[0-9]/.test(input[0]));\r\n\t\tdocument.getElementById('result').innerHTML =\r\n\t\t\t'Please enter numerical values only and make sure each operator has two operands to evaluate';\r\n\t\tdocument.getElementById('rpn').innerHTML = '';\r\n\t} else {\r\n\t\tconsole.log(/[0-9]/.test(input[0]));\r\n\t\tdocument.getElementById(\r\n\t\t\t'result'\r\n\t\t).innerHTML = `reverse polish notation: ${Object(_modules_infixToPostfix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input)}`;\r\n\r\n\t\tdocument.getElementById('rpn').innerHTML = `total: ${Object(_modules_calcPostfix__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n\t\t\tObject(_modules_infixToPostfix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input)\r\n\t\t)}\r\n\t\t`;\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ })

/******/ });