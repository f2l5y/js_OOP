/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tenant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenant.js */ \"./src/tenant.js\");\n/* harmony import */ var _landlord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landlord.js */ \"./src/landlord.js\");\n\n\n\nconst tenant = new _tenant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Alex Morgan', 'alex@rentex.com', 1200);\nconst landlord = new _landlord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Domenico','domenico@rentex.com','IT-992384');\n\nconsole.log('-----Rentex Frontend Loaded-----');\nconsole.log(tenant.getDetails());\nconsole.log(`Landlord Fee: ${landlord.calculateMonthlyFee(tenant.monthly_rent)}`)\n\nconst appDiv = document.getElementById('app')\nif(appDiv){\n    appDiv.innerHTML = `<h1>Welcome back, ${tenant.name}!</h1>`\n}\n\n//# sourceURL=webpack://rentex/./src/index.js?\n}");

/***/ },

/***/ "./src/landlord.js"
/*!*************************!*\
  !*** ./src/landlord.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ \"./src/user.js\");\n     \n\n     class Landlord extends _user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n         #bank_account_id;\n\n         static MANAGEMENT_FEE_RATE = 0.10;\n\n         constructor(name,email,bank_id){\n            super(name,email)\n            this.#bank_account_id = bank_id;\n         }\n\n         get bank_account_id(){\n            return this.#bank_account_id;\n         }\n\n         getDetails(){\n            return `${super.getDetails()}, bank id: ${this.#bank_account_id}`\n         }\n\n         calculateMonthlyFee(rentAmount){\n            return _user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formatCurrency(rentAmount*Landlord.MANAGEMENT_FEE_RATE)\n         }\n      }\n\n\n      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landlord);\n\n//# sourceURL=webpack://rentex/./src/landlord.js?\n}");

/***/ },

/***/ "./src/tenant.js"
/*!***********************!*\
  !*** ./src/tenant.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ \"./src/user.js\");\n\n\nclass Tenant extends _user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n      #onTimeStreak = 0;\n\n      constructor(name,email,monthly_rent){\n         super(name,email) \n         this.monthly_rent = monthly_rent;\n      }\n\n      getDetails(){\n        \n         return `${super.getDetails()}, Rent: ${this.monthly_rent}`\n      }\n\n      set monthly_rent(value){\n         if(typeof value != 'number' || value <0)\n            {\n               throw new Error('Incorrect value for monthly rent')\n            }\n\n         this._monthly_rent = value;\n\n      }\n\n      get monthly_rent(){\n         return this._monthly_rent\n      }\n               \n\n      recordPayment(wasOnTime){\n         if(wasOnTime){\n            this.#onTimeStreak +=1;\n            this.addPoints(10);\n            if(this.#onTimeStreak === 6){\n               this.addPoints(500);\n            }\n         }else{\n               this.#onTimeStreak = 0;\n            }\n      }\n   }\n\n   /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tenant);\n\n//# sourceURL=webpack://rentex/./src/tenant.js?\n}");

/***/ },

/***/ "./src/user.js"
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n  //User class\n  class User{\n\n      constructor(name,email){\n         this._validationRequired({ name, email }); \n         this.name = name;\n         this.email = email;\n         this.points = 0\n\n      }\n\n      getDetails(){\n         return `Name: ${this.name}, Email: ${this.email}`\n      }\n\n      _validationRequired(fields){\n         for(const [key,value] of Object.entries(fields)){\n            if(!value || (typeof value === 'string' && value.trim() === '')){\n               throw new Error(`${key} cannot be empty`)\n            }\n            if(typeof value !== 'string'){\n               throw new Error(`${key} must be text`)\n            }\n         \n         }\n      }\n\n      static formatCurrency(amount){\n         return `€${amount.toFixed(2)}`\n      }\n\n\n      set name(value){\n       this._validationRequired({name: value})\n       this._name = value\n      }\n\n      get name(){\n         return this._name\n      }\n      \n      set email(value){\n         this._validationRequired({email:value})\n         this._email = value\n      }\n\n      get email(){\n         return this._email\n      }\n\n      addPoints(amount){\n         if(typeof amount !== 'number' || amount < 0){\n            throw new Error('Amount must be a positive number')\n         }\n         this.points +=amount;\n         return this.points\n      }\n   }\n\n\n   \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n\n      \n\n\n\n\n\n\n//# sourceURL=webpack://rentex/./src/user.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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