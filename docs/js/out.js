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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/1000yards.jpg":
/*!******************************!*\
  !*** ./images/1000yards.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/1000yards.jpg\";\n\n//# sourceURL=webpack:///./images/1000yards.jpg?");

/***/ }),

/***/ "./images/1000yards1st-step.jpg":
/*!**************************************!*\
  !*** ./images/1000yards1st-step.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/1000yards1st-step.jpg\";\n\n//# sourceURL=webpack:///./images/1000yards1st-step.jpg?");

/***/ }),

/***/ "./images/1000yards2nd-step.jpg":
/*!**************************************!*\
  !*** ./images/1000yards2nd-step.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/1000yards2nd-step.jpg\";\n\n//# sourceURL=webpack:///./images/1000yards2nd-step.jpg?");

/***/ }),

/***/ "./images/1st-state.jpg":
/*!******************************!*\
  !*** ./images/1st-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/1st-state.jpg\";\n\n//# sourceURL=webpack:///./images/1st-state.jpg?");

/***/ }),

/***/ "./images/2nd-state.jpg":
/*!******************************!*\
  !*** ./images/2nd-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/2nd-state.jpg\";\n\n//# sourceURL=webpack:///./images/2nd-state.jpg?");

/***/ }),

/***/ "./images/3rd-state.jpg":
/*!******************************!*\
  !*** ./images/3rd-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/3rd-state.jpg\";\n\n//# sourceURL=webpack:///./images/3rd-state.jpg?");

/***/ }),

/***/ "./images/3states.jpg":
/*!****************************!*\
  !*** ./images/3states.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/3states.jpg\";\n\n//# sourceURL=webpack:///./images/3states.jpg?");

/***/ }),

/***/ "./images/4th-state.jpg":
/*!******************************!*\
  !*** ./images/4th-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/4th-state.jpg\";\n\n//# sourceURL=webpack:///./images/4th-state.jpg?");

/***/ }),

/***/ "./images/5th-state.jpg":
/*!******************************!*\
  !*** ./images/5th-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/5th-state.jpg\";\n\n//# sourceURL=webpack:///./images/5th-state.jpg?");

/***/ }),

/***/ "./images/5th-stateDetail.jpg":
/*!************************************!*\
  !*** ./images/5th-stateDetail.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/5th-stateDetail.jpg\";\n\n//# sourceURL=webpack:///./images/5th-stateDetail.jpg?");

/***/ }),

/***/ "./images/6th-state.jpg":
/*!******************************!*\
  !*** ./images/6th-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/6th-state.jpg\";\n\n//# sourceURL=webpack:///./images/6th-state.jpg?");

/***/ }),

/***/ "./images/7th-state.jpg":
/*!******************************!*\
  !*** ./images/7th-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/7th-state.jpg\";\n\n//# sourceURL=webpack:///./images/7th-state.jpg?");

/***/ }),

/***/ "./images/8th&9th-state.jpg":
/*!**********************************!*\
  !*** ./images/8th&9th-state.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/8th&9th-state.jpg\";\n\n//# sourceURL=webpack:///./images/8th&9th-state.jpg?");

/***/ }),

/***/ "./images/8th-state.jpg":
/*!******************************!*\
  !*** ./images/8th-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/8th-state.jpg\";\n\n//# sourceURL=webpack:///./images/8th-state.jpg?");

/***/ }),

/***/ "./images/9th-state.jpg":
/*!******************************!*\
  !*** ./images/9th-state.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/9th-state.jpg\";\n\n//# sourceURL=webpack:///./images/9th-state.jpg?");

/***/ }),

/***/ "./images/InBloom1.jpg":
/*!*****************************!*\
  !*** ./images/InBloom1.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/InBloom1.jpg\";\n\n//# sourceURL=webpack:///./images/InBloom1.jpg?");

/***/ }),

/***/ "./images/InBloom1Detail.jpg":
/*!***********************************!*\
  !*** ./images/InBloom1Detail.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/InBloom1Detail.jpg\";\n\n//# sourceURL=webpack:///./images/InBloom1Detail.jpg?");

/***/ }),

/***/ "./images/InBloom2.jpg":
/*!*****************************!*\
  !*** ./images/InBloom2.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/InBloom2.jpg\";\n\n//# sourceURL=webpack:///./images/InBloom2.jpg?");

/***/ }),

/***/ "./images/InBloom3.jpg":
/*!*****************************!*\
  !*** ./images/InBloom3.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/InBloom3.jpg\";\n\n//# sourceURL=webpack:///./images/InBloom3.jpg?");

/***/ }),

/***/ "./images/Pillar1.jpg":
/*!****************************!*\
  !*** ./images/Pillar1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Pillar1.jpg\";\n\n//# sourceURL=webpack:///./images/Pillar1.jpg?");

/***/ }),

/***/ "./images/Pillar1Detail.jpg":
/*!**********************************!*\
  !*** ./images/Pillar1Detail.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Pillar1Detail.jpg\";\n\n//# sourceURL=webpack:///./images/Pillar1Detail.jpg?");

/***/ }),

/***/ "./images/Pillar2.jpg":
/*!****************************!*\
  !*** ./images/Pillar2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Pillar2.jpg\";\n\n//# sourceURL=webpack:///./images/Pillar2.jpg?");

/***/ }),

/***/ "./images/Pillar3.jpg":
/*!****************************!*\
  !*** ./images/Pillar3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Pillar3.jpg\";\n\n//# sourceURL=webpack:///./images/Pillar3.jpg?");

/***/ }),

/***/ "./images/Pillar4.jpg":
/*!****************************!*\
  !*** ./images/Pillar4.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Pillar4.jpg\";\n\n//# sourceURL=webpack:///./images/Pillar4.jpg?");

/***/ }),

/***/ "./images/ascendingOneAndAwakeningOne.jpg":
/*!************************************************!*\
  !*** ./images/ascendingOneAndAwakeningOne.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ascendingOneAndAwakeningOne.jpg\";\n\n//# sourceURL=webpack:///./images/ascendingOneAndAwakeningOne.jpg?");

/***/ }),

/***/ "./images/background.jpg":
/*!*******************************!*\
  !*** ./images/background.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/background.jpg\";\n\n//# sourceURL=webpack:///./images/background.jpg?");

/***/ }),

/***/ "./images/bewilderingOne.jpg":
/*!***********************************!*\
  !*** ./images/bewilderingOne.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/bewilderingOne.jpg\";\n\n//# sourceURL=webpack:///./images/bewilderingOne.jpg?");

/***/ }),

/***/ "./images/bewilderingOneDetail.jpg":
/*!*****************************************!*\
  !*** ./images/bewilderingOneDetail.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/bewilderingOneDetail.jpg\";\n\n//# sourceURL=webpack:///./images/bewilderingOneDetail.jpg?");

/***/ }),

/***/ "./images/datascape01and03.jpg":
/*!*************************************!*\
  !*** ./images/datascape01and03.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/datascape01and03.jpg\";\n\n//# sourceURL=webpack:///./images/datascape01and03.jpg?");

/***/ }),

/***/ "./images/datascape02.jpg":
/*!********************************!*\
  !*** ./images/datascape02.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/datascape02.jpg\";\n\n//# sourceURL=webpack:///./images/datascape02.jpg?");

/***/ }),

/***/ "./images/datascape02detail.jpg":
/*!**************************************!*\
  !*** ./images/datascape02detail.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/datascape02detail.jpg\";\n\n//# sourceURL=webpack:///./images/datascape02detail.jpg?");

/***/ }),

/***/ "./images/datascape04and05and06.jpg":
/*!******************************************!*\
  !*** ./images/datascape04and05and06.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/datascape04and05and06.jpg\";\n\n//# sourceURL=webpack:///./images/datascape04and05and06.jpg?");

/***/ }),

/***/ "./images/datascape07and08.jpg":
/*!*************************************!*\
  !*** ./images/datascape07and08.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/datascape07and08.jpg\";\n\n//# sourceURL=webpack:///./images/datascape07and08.jpg?");

/***/ }),

/***/ "./images/datascape08detail.jpg":
/*!**************************************!*\
  !*** ./images/datascape08detail.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/datascape08detail.jpg\";\n\n//# sourceURL=webpack:///./images/datascape08detail.jpg?");

/***/ }),

/***/ "./images/diminishingOne.jpg":
/*!***********************************!*\
  !*** ./images/diminishingOne.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/diminishingOne.jpg\";\n\n//# sourceURL=webpack:///./images/diminishingOne.jpg?");

/***/ }),

/***/ "./images/diminishingOneDetail.jpg":
/*!*****************************************!*\
  !*** ./images/diminishingOneDetail.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/diminishingOneDetail.jpg\";\n\n//# sourceURL=webpack:///./images/diminishingOneDetail.jpg?");

/***/ }),

/***/ "./images/diver1.jpg":
/*!***************************!*\
  !*** ./images/diver1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/diver1.jpg\";\n\n//# sourceURL=webpack:///./images/diver1.jpg?");

/***/ }),

/***/ "./images/diver2.jpg":
/*!***************************!*\
  !*** ./images/diver2.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/diver2.jpg\";\n\n//# sourceURL=webpack:///./images/diver2.jpg?");

/***/ }),

/***/ "./images/diver3.jpg":
/*!***************************!*\
  !*** ./images/diver3.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/diver3.jpg\";\n\n//# sourceURL=webpack:///./images/diver3.jpg?");

/***/ }),

/***/ "./images/dreamingOneAndEnglighteningOneAndSuffocatingOne.jpg":
/*!********************************************************************!*\
  !*** ./images/dreamingOneAndEnglighteningOneAndSuffocatingOne.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/dreamingOneAndEnglighteningOneAndSuffocatingOne.jpg\";\n\n//# sourceURL=webpack:///./images/dreamingOneAndEnglighteningOneAndSuffocatingOne.jpg?");

/***/ }),

/***/ "./images/exhibitions/Cutting-Egde Printmaking1.jpg":
/*!**********************************************************!*\
  !*** ./images/exhibitions/Cutting-Egde Printmaking1.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Cutting-Egde Printmaking1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/Cutting-Egde_Printmaking1.jpg?");

/***/ }),

/***/ "./images/exhibitions/Cutting-Egde Printmaking2.jpg":
/*!**********************************************************!*\
  !*** ./images/exhibitions/Cutting-Egde Printmaking2.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Cutting-Egde Printmaking2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/Cutting-Egde_Printmaking2.jpg?");

/***/ }),

/***/ "./images/exhibitions/SCG_international_printmaking_conference1.jpg":
/*!**************************************************************************!*\
  !*** ./images/exhibitions/SCG_international_printmaking_conference1.jpg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/SCG_international_printmaking_conference1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/SCG_international_printmaking_conference1.jpg?");

/***/ }),

/***/ "./images/exhibitions/SCG_international_printmaking_conference2.jpg":
/*!**************************************************************************!*\
  !*** ./images/exhibitions/SCG_international_printmaking_conference2.jpg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/SCG_international_printmaking_conference2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/SCG_international_printmaking_conference2.jpg?");

/***/ }),

/***/ "./images/exhibitions/corazciasniej.jpg":
/*!**********************************************!*\
  !*** ./images/exhibitions/corazciasniej.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/corazciasniej.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/corazciasniej.jpg?");

/***/ }),

/***/ "./images/exhibitions/corazciasniej2.jpg":
/*!***********************************************!*\
  !*** ./images/exhibitions/corazciasniej2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/corazciasniej2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/corazciasniej2.jpg?");

/***/ }),

/***/ "./images/exhibitions/impact9.jpg":
/*!****************************************!*\
  !*** ./images/exhibitions/impact9.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/impact9.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/impact9.jpg?");

/***/ }),

/***/ "./images/exhibitions/isfahan.jpg":
/*!****************************************!*\
  !*** ./images/exhibitions/isfahan.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/isfahan.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/isfahan.jpg?");

/***/ }),

/***/ "./images/exhibitions/liberec1.jpg":
/*!*****************************************!*\
  !*** ./images/exhibitions/liberec1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/liberec1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/liberec1.jpg?");

/***/ }),

/***/ "./images/exhibitions/liberec2.jpg":
/*!*****************************************!*\
  !*** ./images/exhibitions/liberec2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/liberec2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/liberec2.jpg?");

/***/ }),

/***/ "./images/exhibitions/liberec3.jpg":
/*!*****************************************!*\
  !*** ./images/exhibitions/liberec3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/liberec3.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/liberec3.jpg?");

/***/ }),

/***/ "./images/exhibitions/mtg2015.jpg":
/*!****************************************!*\
  !*** ./images/exhibitions/mtg2015.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mtg2015.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/mtg2015.jpg?");

/***/ }),

/***/ "./images/exhibitions/mtg2015b.jpg":
/*!*****************************************!*\
  !*** ./images/exhibitions/mtg2015b.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mtg2015b.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/mtg2015b.jpg?");

/***/ }),

/***/ "./images/exhibitions/pollution_aulaASP1.jpg":
/*!***************************************************!*\
  !*** ./images/exhibitions/pollution_aulaASP1.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pollution_aulaASP1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/pollution_aulaASP1.jpg?");

/***/ }),

/***/ "./images/exhibitions/pollution_aulaASP2.jpg":
/*!***************************************************!*\
  !*** ./images/exhibitions/pollution_aulaASP2.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pollution_aulaASP2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/pollution_aulaASP2.jpg?");

/***/ }),

/***/ "./images/exhibitions/redefinition_of_matrix1.jpg":
/*!********************************************************!*\
  !*** ./images/exhibitions/redefinition_of_matrix1.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/redefinition_of_matrix1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/redefinition_of_matrix1.jpg?");

/***/ }),

/***/ "./images/exhibitions/redefinition_of_matrix2.jpg":
/*!********************************************************!*\
  !*** ./images/exhibitions/redefinition_of_matrix2.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/redefinition_of_matrix2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/redefinition_of_matrix2.jpg?");

/***/ }),

/***/ "./images/exhibitions/sollentuna1.jpg":
/*!********************************************!*\
  !*** ./images/exhibitions/sollentuna1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/sollentuna1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/sollentuna1.jpg?");

/***/ }),

/***/ "./images/exhibitions/sollentuna2.jpg":
/*!********************************************!*\
  !*** ./images/exhibitions/sollentuna2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/sollentuna2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/sollentuna2.jpg?");

/***/ }),

/***/ "./images/exhibitions/staryBrowar_poznan1.jpg":
/*!****************************************************!*\
  !*** ./images/exhibitions/staryBrowar_poznan1.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/staryBrowar_poznan1.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/staryBrowar_poznan1.jpg?");

/***/ }),

/***/ "./images/exhibitions/staryBrowar_poznan2.jpg":
/*!****************************************************!*\
  !*** ./images/exhibitions/staryBrowar_poznan2.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/staryBrowar_poznan2.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/staryBrowar_poznan2.jpg?");

/***/ }),

/***/ "./images/exhibitions/wilno.jpg":
/*!**************************************!*\
  !*** ./images/exhibitions/wilno.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/wilno.jpg\";\n\n//# sourceURL=webpack:///./images/exhibitions/wilno.jpg?");

/***/ }),

/***/ "./images/facebook.png":
/*!*****************************!*\
  !*** ./images/facebook.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/facebook.png\";\n\n//# sourceURL=webpack:///./images/facebook.png?");

/***/ }),

/***/ "./images/floaringdrowning.jpg":
/*!*************************************!*\
  !*** ./images/floaringdrowning.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/floaringdrowning.jpg\";\n\n//# sourceURL=webpack:///./images/floaringdrowning.jpg?");

/***/ }),

/***/ "./images/floaringdrowningdetail.jpg":
/*!*******************************************!*\
  !*** ./images/floaringdrowningdetail.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/floaringdrowningdetail.jpg\";\n\n//# sourceURL=webpack:///./images/floaringdrowningdetail.jpg?");

/***/ }),

/***/ "./images/floaringdrowningdetail2.jpg":
/*!********************************************!*\
  !*** ./images/floaringdrowningdetail2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/floaringdrowningdetail2.jpg\";\n\n//# sourceURL=webpack:///./images/floaringdrowningdetail2.jpg?");

/***/ }),

/***/ "./images/glaringngOneAndBellowingOne.jpg":
/*!************************************************!*\
  !*** ./images/glaringngOneAndBellowingOne.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/glaringngOneAndBellowingOne.jpg\";\n\n//# sourceURL=webpack:///./images/glaringngOneAndBellowingOne.jpg?");

/***/ }),

/***/ "./images/inBetween.jpg":
/*!******************************!*\
  !*** ./images/inBetween.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/inBetween.jpg\";\n\n//# sourceURL=webpack:///./images/inBetween.jpg?");

/***/ }),

/***/ "./images/inBetweenDetail1.jpg":
/*!*************************************!*\
  !*** ./images/inBetweenDetail1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/inBetweenDetail1.jpg\";\n\n//# sourceURL=webpack:///./images/inBetweenDetail1.jpg?");

/***/ }),

/***/ "./images/inBetweenDetail2.jpg":
/*!*************************************!*\
  !*** ./images/inBetweenDetail2.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/inBetweenDetail2.jpg\";\n\n//# sourceURL=webpack:///./images/inBetweenDetail2.jpg?");

/***/ }),

/***/ "./images/instagram.png":
/*!******************************!*\
  !*** ./images/instagram.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/instagram.png\";\n\n//# sourceURL=webpack:///./images/instagram.png?");

/***/ }),

/***/ "./images/kainabel1.jpg":
/*!******************************!*\
  !*** ./images/kainabel1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel1.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel1.jpg?");

/***/ }),

/***/ "./images/kainabel2.jpg":
/*!******************************!*\
  !*** ./images/kainabel2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel2.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel2.jpg?");

/***/ }),

/***/ "./images/kainabel3.jpg":
/*!******************************!*\
  !*** ./images/kainabel3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel3.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel3.jpg?");

/***/ }),

/***/ "./images/kainabel4ale2.jpg":
/*!**********************************!*\
  !*** ./images/kainabel4ale2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel4ale2.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel4ale2.jpg?");

/***/ }),

/***/ "./images/kainabel5.jpg":
/*!******************************!*\
  !*** ./images/kainabel5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel5.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel5.jpg?");

/***/ }),

/***/ "./images/kainabel6.jpg":
/*!******************************!*\
  !*** ./images/kainabel6.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel6.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel6.jpg?");

/***/ }),

/***/ "./images/kainabel7.jpg":
/*!******************************!*\
  !*** ./images/kainabel7.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel7.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel7.jpg?");

/***/ }),

/***/ "./images/kainabel8.jpg":
/*!******************************!*\
  !*** ./images/kainabel8.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel8.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel8.jpg?");

/***/ }),

/***/ "./images/kainabel9.jpg":
/*!******************************!*\
  !*** ./images/kainabel9.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/kainabel9.jpg\";\n\n//# sourceURL=webpack:///./images/kainabel9.jpg?");

/***/ }),

/***/ "./images/linkedin.png":
/*!*****************************!*\
  !*** ./images/linkedin.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/linkedin.png\";\n\n//# sourceURL=webpack:///./images/linkedin.png?");

/***/ }),

/***/ "./images/mirror1.jpg":
/*!****************************!*\
  !*** ./images/mirror1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror1.jpg\";\n\n//# sourceURL=webpack:///./images/mirror1.jpg?");

/***/ }),

/***/ "./images/mirror2.jpg":
/*!****************************!*\
  !*** ./images/mirror2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror2.jpg\";\n\n//# sourceURL=webpack:///./images/mirror2.jpg?");

/***/ }),

/***/ "./images/mirror3.jpg":
/*!****************************!*\
  !*** ./images/mirror3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror3.jpg\";\n\n//# sourceURL=webpack:///./images/mirror3.jpg?");

/***/ }),

/***/ "./images/mirror4.jpg":
/*!****************************!*\
  !*** ./images/mirror4.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror4.jpg\";\n\n//# sourceURL=webpack:///./images/mirror4.jpg?");

/***/ }),

/***/ "./images/mirror5.jpg":
/*!****************************!*\
  !*** ./images/mirror5.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror5.jpg\";\n\n//# sourceURL=webpack:///./images/mirror5.jpg?");

/***/ }),

/***/ "./images/mirror6.jpg":
/*!****************************!*\
  !*** ./images/mirror6.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror6.jpg\";\n\n//# sourceURL=webpack:///./images/mirror6.jpg?");

/***/ }),

/***/ "./images/mirror7.jpg":
/*!****************************!*\
  !*** ./images/mirror7.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/mirror7.jpg\";\n\n//# sourceURL=webpack:///./images/mirror7.jpg?");

/***/ }),

/***/ "./images/pollution1.jpg":
/*!*******************************!*\
  !*** ./images/pollution1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pollution1.jpg\";\n\n//# sourceURL=webpack:///./images/pollution1.jpg?");

/***/ }),

/***/ "./images/pollution1Detail.jpg":
/*!*************************************!*\
  !*** ./images/pollution1Detail.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pollution1Detail.jpg\";\n\n//# sourceURL=webpack:///./images/pollution1Detail.jpg?");

/***/ }),

/***/ "./images/pollution2.jpg":
/*!*******************************!*\
  !*** ./images/pollution2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pollution2.jpg\";\n\n//# sourceURL=webpack:///./images/pollution2.jpg?");

/***/ }),

/***/ "./images/pollution3.jpg":
/*!*******************************!*\
  !*** ./images/pollution3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pollution3.jpg\";\n\n//# sourceURL=webpack:///./images/pollution3.jpg?");

/***/ }),

/***/ "./images/pp-logo-black.png":
/*!**********************************!*\
  !*** ./images/pp-logo-black.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pp-logo-black.png\";\n\n//# sourceURL=webpack:///./images/pp-logo-black.png?");

/***/ }),

/***/ "./images/pp-logo-white.png":
/*!**********************************!*\
  !*** ./images/pp-logo-white.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pp-logo-white.png\";\n\n//# sourceURL=webpack:///./images/pp-logo-white.png?");

/***/ }),

/***/ "./images/raveningOneAndabolishingOneAndDenoucingOne.jpg":
/*!***************************************************************!*\
  !*** ./images/raveningOneAndabolishingOneAndDenoucingOne.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/raveningOneAndabolishingOneAndDenoucingOne.jpg\";\n\n//# sourceURL=webpack:///./images/raveningOneAndabolishingOneAndDenoucingOne.jpg?");

/***/ }),

/***/ "./images/ripples.jpg":
/*!****************************!*\
  !*** ./images/ripples.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ripples.jpg\";\n\n//# sourceURL=webpack:///./images/ripples.jpg?");

/***/ }),

/***/ "./images/ripples2.jpg":
/*!*****************************!*\
  !*** ./images/ripples2.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ripples2.jpg\";\n\n//# sourceURL=webpack:///./images/ripples2.jpg?");

/***/ }),

/***/ "./images/ripples2Detail1.jpg":
/*!************************************!*\
  !*** ./images/ripples2Detail1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ripples2Detail1.jpg\";\n\n//# sourceURL=webpack:///./images/ripples2Detail1.jpg?");

/***/ }),

/***/ "./images/ripples2Detail2.jpg":
/*!************************************!*\
  !*** ./images/ripples2Detail2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ripples2Detail2.jpg\";\n\n//# sourceURL=webpack:///./images/ripples2Detail2.jpg?");

/***/ }),

/***/ "./images/ripplesDetail1.jpg":
/*!***********************************!*\
  !*** ./images/ripplesDetail1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ripplesDetail1.jpg\";\n\n//# sourceURL=webpack:///./images/ripplesDetail1.jpg?");

/***/ }),

/***/ "./images/ripplesDetail2.jpg":
/*!***********************************!*\
  !*** ./images/ripplesDetail2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/ripplesDetail2.jpg\";\n\n//# sourceURL=webpack:///./images/ripplesDetail2.jpg?");

/***/ }),

/***/ "./images/selfglitched1.jpg":
/*!**********************************!*\
  !*** ./images/selfglitched1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched1.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched1.jpg?");

/***/ }),

/***/ "./images/selfglitched10and11and12.jpg":
/*!*********************************************!*\
  !*** ./images/selfglitched10and11and12.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched10and11and12.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched10and11and12.jpg?");

/***/ }),

/***/ "./images/selfglitched14and15.jpg":
/*!****************************************!*\
  !*** ./images/selfglitched14and15.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched14and15.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched14and15.jpg?");

/***/ }),

/***/ "./images/selfglitched16and17.jpg":
/*!****************************************!*\
  !*** ./images/selfglitched16and17.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched16and17.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched16and17.jpg?");

/***/ }),

/***/ "./images/selfglitched18.jpg":
/*!***********************************!*\
  !*** ./images/selfglitched18.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched18.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched18.jpg?");

/***/ }),

/***/ "./images/selfglitched19and20.jpg":
/*!****************************************!*\
  !*** ./images/selfglitched19and20.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched19and20.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched19and20.jpg?");

/***/ }),

/***/ "./images/selfglitched21.jpg":
/*!***********************************!*\
  !*** ./images/selfglitched21.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched21.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched21.jpg?");

/***/ }),

/***/ "./images/selfglitched22.jpg":
/*!***********************************!*\
  !*** ./images/selfglitched22.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched22.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched22.jpg?");

/***/ }),

/***/ "./images/selfglitched23.jpg":
/*!***********************************!*\
  !*** ./images/selfglitched23.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched23.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched23.jpg?");

/***/ }),

/***/ "./images/selfglitched2and3.jpg":
/*!**************************************!*\
  !*** ./images/selfglitched2and3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched2and3.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched2and3.jpg?");

/***/ }),

/***/ "./images/selfglitched4and5and6.jpg":
/*!******************************************!*\
  !*** ./images/selfglitched4and5and6.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched4and5and6.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched4and5and6.jpg?");

/***/ }),

/***/ "./images/selfglitched7.jpg":
/*!**********************************!*\
  !*** ./images/selfglitched7.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched7.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched7.jpg?");

/***/ }),

/***/ "./images/selfglitched8and9.jpg":
/*!**************************************!*\
  !*** ./images/selfglitched8and9.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitched8and9.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitched8and9.jpg?");

/***/ }),

/***/ "./images/selfglitchedintro.jpg":
/*!**************************************!*\
  !*** ./images/selfglitchedintro.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitchedintro.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitchedintro.jpg?");

/***/ }),

/***/ "./images/selfglitchedset.jpg":
/*!************************************!*\
  !*** ./images/selfglitchedset.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/selfglitchedset.jpg\";\n\n//# sourceURL=webpack:///./images/selfglitchedset.jpg?");

/***/ }),

/***/ "./images/shapeBig1.png":
/*!******************************!*\
  !*** ./images/shapeBig1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeBig1.png\";\n\n//# sourceURL=webpack:///./images/shapeBig1.png?");

/***/ }),

/***/ "./images/shapeBig2.png":
/*!******************************!*\
  !*** ./images/shapeBig2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeBig2.png\";\n\n//# sourceURL=webpack:///./images/shapeBig2.png?");

/***/ }),

/***/ "./images/shapeBig3.png":
/*!******************************!*\
  !*** ./images/shapeBig3.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeBig3.png\";\n\n//# sourceURL=webpack:///./images/shapeBig3.png?");

/***/ }),

/***/ "./images/shapeSmall1.png":
/*!********************************!*\
  !*** ./images/shapeSmall1.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeSmall1.png\";\n\n//# sourceURL=webpack:///./images/shapeSmall1.png?");

/***/ }),

/***/ "./images/shapeSmall2.png":
/*!********************************!*\
  !*** ./images/shapeSmall2.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeSmall2.png\";\n\n//# sourceURL=webpack:///./images/shapeSmall2.png?");

/***/ }),

/***/ "./images/shapeSmall3.png":
/*!********************************!*\
  !*** ./images/shapeSmall3.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeSmall3.png\";\n\n//# sourceURL=webpack:///./images/shapeSmall3.png?");

/***/ }),

/***/ "./images/shapeSmall4.png":
/*!********************************!*\
  !*** ./images/shapeSmall4.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/shapeSmall4.png\";\n\n//# sourceURL=webpack:///./images/shapeSmall4.png?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\nvar _parallaxJs = __webpack_require__(/*! parallax-js */ \"./node_modules/parallax-js/dist/parallax.js\");\n\nvar _parallaxJs2 = _interopRequireDefault(_parallaxJs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//paralax setup\n\nvar scene = document.getElementById('scene');\nvar parallaxInstance = new _parallaxJs2.default(scene);\n\n//initial\n\nfunction preloader() {\n\n    $(window).on(\"load\", function () {\n        $('.preloader').delay(1200).fadeOut();\n        $('.loader').delay(800).fadeOut();\n        scrollToTopOnReload();\n        checkAndSetParallaxLayersHeight();\n    });\n}\n\npreloader();\n\nfunction scrollToTopOnReload() {\n\n    $(\"html, body\").animate({\n        scrollTop: $(document)\n    }, 800);\n}\n\nfunction disableLoadersInIE() {\n\n    $('.loader').hide();\n    $('.video-preloader').remove();\n}\n\n//hamburger & main-menu\n\nfunction hamburgerToggler() {\n\n    $(\".hamburger-toggler\").on('click', function () {\n\n        $(this).find(\".hamburger-toggler--wrapper\").toggleClass('open');\n        menuSlideToggle();\n        menuItemsDelayedToggle();\n        setDarkHamburgerOnLightBackground();\n        changeSiteLogoValueOnMenuOpen();\n        onClickMenuItems();\n    });\n}\nhamburgerToggler();\n\nfunction menuSlideToggle() {\n\n    var mainMenu = $('.main-menu');\n    var hamburgerToggler = $('.hamburger-toggler--wrapper');\n\n    if (hamburgerToggler.hasClass(\"open\")) {\n        mainMenu.addClass('main-menu__open');\n        mainMenu.removeClass('main-menu__closed');\n    } else {\n        mainMenu.addClass('main-menu__closed');\n        mainMenu.removeClass('main-menu__open');\n    }\n}\n\nfunction menuItemsDelayedToggle() {\n\n    var mainMenu = $('.main-menu');\n    var hamburgerToggler = $('.hamburger-toggler--wrapper');\n\n    if (hamburgerToggler.hasClass(\"open\")) {\n        mainMenu.find('li').css('opacity', '1');\n    } else {\n        mainMenu.find('li').css('opacity', '0');\n    }\n}\n\nfunction onClickMenuItems() {\n\n    $('.vertical-menu--item').on('click', function () {\n\n        $(\".hamburger-toggler--wrapper\").removeClass('open');\n\n        var item = $(this);\n        var itemTitle = item.children().text().toLowerCase();\n        var offsetCorrectionValue = 0;\n\n        if (itemTitle === \"curriculum vitae\") {\n            itemTitle = \"cv\";\n        }\n        var selectedSection = $('#' + itemTitle);\n\n        if (itemTitle === \"contact\") {\n            offsetCorrectionValue = -190;\n        } else {\n            offsetCorrectionValue = 120;\n        }\n\n        $('html,body').stop(true, false).animate({\n            scrollTop: selectedSection.offset().top + offsetCorrectionValue }, 'slow');\n\n        var mainMenu = $('.main-menu');\n        mainMenu.addClass('main-menu__closed');\n        mainMenu.removeClass('main-menu__open');\n    });\n}\n\nfunction changeHamburgerTogglerValueOnScroll() {\n\n    var hamburger = $('.hamburger-toggler--wrapper').find('div');\n    hamburger.addClass('light-color-background');\n\n    $(document).on('scroll', function () {\n        if ($(document).scrollTop() >= $('#about').offset().top && !$('.main-menu').hasClass('main-menu__open')) {\n            hamburger.addClass('dark-color-background');\n            hamburger.removeClass('light-color-background');\n        } else if ($(document).scrollTop() < $('#about').offset().top) {\n            hamburger.addClass('light-color-background');\n            hamburger.removeClass('dark-color-background');\n        }\n    });\n}\nchangeHamburgerTogglerValueOnScroll();\n\nfunction setDarkHamburgerOnLightBackground() {\n\n    var hamburger = $('.hamburger-toggler--wrapper').find('div');\n\n    if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')) {\n        hamburger.addClass('light-color-background');\n        hamburger.removeClass('dark-color-background');\n    } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')) {\n        hamburger.addClass('dark-color-background');\n        hamburger.removeClass('light-color-background');\n    }\n}\n\nfunction changeSiteLogoValueOnScroll() {\n\n    var siteLogo = $('.site-logo');\n\n    $(document).on('scroll', function () {\n        if ($(document).scrollTop() >= $('#about').offset().top && !$('.main-menu').hasClass('main-menu__open')) {\n            siteLogo.addClass('site-logo__black');\n            siteLogo.removeClass('site-logo__white');\n        } else {\n            siteLogo.addClass('site-logo__white');\n            siteLogo.removeClass('site-logo__black');\n        }\n    });\n}\nchangeSiteLogoValueOnScroll();\n\nfunction changeSiteLogoValueOnMenuOpen() {\n\n    var siteLogo = $('.site-logo');\n\n    if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')) {\n        siteLogo.addClass('site-logo__white');\n        siteLogo.removeClass('site-logo__black');\n    } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')) {\n        siteLogo.addClass('site-logo__black');\n        siteLogo.removeClass('site-logo__white');\n    }\n}\n\nfunction showHamburgerTogglerOnScroll() {\n\n    var hamburger = $('.hamburger-toggler');\n\n    $(document).on('scroll', function () {\n        if ($(window).width() >= 900) {\n            if ($(document).scrollTop() >= $('#about').offset().top) {\n                hamburger.css('display', 'block');\n            } else {\n                hamburger.css('display', 'none');\n            }\n        } else {\n            hamburger.css('display', 'block');\n        }\n    });\n}\nshowHamburgerTogglerOnScroll();\n\nfunction showHamburgerTogglerOnResize() {\n\n    var hamburger = $('.hamburger-toggler');\n\n    $(window).resize(function () {\n        if ($(window).width() >= 900 && $(document).scrollTop() < $('#about').offset().top) {\n            hamburger.css('display', 'none');\n        } else {\n            hamburger.css('display', 'block');\n        }\n    });\n}\nshowHamburgerTogglerOnResize();\n\nvar hamburgerWrapper = $('.hamburger-toggler--wrapper');\n\nfunction hoverChangeToMediumColor(element) {\n\n    element.hover(function () {\n        $(this).find('div').toggleClass('medium-color-background');\n    });\n}\nhoverChangeToMediumColor(hamburgerWrapper);\n\n//galllery\n\nfunction detectIE() {\n\n    var ua = window.navigator.userAgent;\n    var is_ie = /MSIE|Trident/.test(ua);\n\n    if (is_ie) {\n        galleryToggleForIE();\n        disableLoadersInIE();\n    } else {\n        galleryToggle();\n    }\n}\n\ndetectIE();\n\nfunction galleryToggle() {\n\n    $('.gallery-menu--item-title').on('click', function (event) {\n        if (event.detail == 1) {\n\n            $('.gallery-menu--item').removeClass('gallery-menu--item-title__active');\n            $('.gallery-menu--item-close-button').removeClass('gallery-menu--item-close-button__visible');\n            $('.gallery-menu--item-close-button').addClass('gallery-menu--item-close-button__hidden');\n            hideGalleryItemDescription(300);\n            hideWorkInfoButton();\n            setVideo();\n\n            $('.gallery').delay(300).slideUp(500);\n            var menuItemId = $(this).parent().parent().attr('id');\n            var selectedGallery = $('#gallery-' + menuItemId);\n\n            selectedGallery.delay(500).slideDown(500, function () {\n                $('html,body').animate({\n                    scrollTop: $(this).offset().top - 30 }, 'slow');\n            });\n            $(this).parent().parent().addClass('gallery-menu--item-title__active');\n\n            showCloseGalleryButton($(this));\n            showGalleryItemDescription($(this), 1200);\n            closeGalleryItem();\n            galleryDescriptionCloseButton($(this));\n\n            setTimeout(function () {\n                checkAndSetParallaxLayersHeight();\n            }, 1500);\n        }\n    });\n}\n\nfunction galleryToggleForIE() {\n\n    $('.gallery-menu--item-title').on('click', function () {\n\n        $('.gallery-menu--item').removeClass('gallery-menu--item-title__active');\n        $('.gallery-menu--item-close-button').removeClass('gallery-menu--item-close-button__visible');\n        $('.gallery-menu--item-close-button').addClass('gallery-menu--item-close-button__hidden');\n        hideGalleryItemDescription(300);\n        hideWorkInfoButton();\n        setVideo();\n\n        $('.gallery').delay(300).slideUp(500);\n        var menuItemId = $(this).parent().parent().attr('id');\n        var selectedGallery = $('#gallery-' + menuItemId);\n\n        selectedGallery.delay(300).slideDown(500, function () {\n            $('html,body').animate({\n                scrollTop: $(this).offset().top - 30 }, 'slow');\n        });\n\n        $(this).parent().parent().addClass('gallery-menu--item-title__active');\n\n        showCloseGalleryButton($(this));\n        showGalleryItemDescription($(this), 1200);\n        closeGalleryItem();\n        galleryDescriptionCloseButton($(this));\n\n        setTimeout(function () {\n            checkAndSetParallaxLayersHeight();\n        }, 1500);\n    });\n}\n\nfunction closeGalleryItem() {\n\n    var closeButton = $('.gallery-menu--item-close-button');\n\n    closeButton.on('click', function () {\n\n        stopVideo(1000);\n        hideGalleryItemDescription(300);\n        hideWorkInfoButton();\n\n        $(this).parent().siblings('.gallery').delay(400).slideUp('slow');\n\n        $(this).addClass('gallery-menu--item-close-button__hidden');\n        $(this).removeClass('gallery-menu--item-close-button__visible');\n\n        var menuItemTitle = $(this).parent().parent();\n\n        setTimeout(function () {\n            menuItemTitle.removeClass('gallery-menu--item-title__active');\n        }, 300);\n\n        setTimeout(function () {\n            checkAndSetParallaxLayersHeight();\n        }, 1000);\n\n        $('work-info--show-button').hide();\n    });\n}\n\nfunction stopVideo(delay) {\n\n    setTimeout(function () {\n        $('.youtube-player').attr('src', '');\n    }, delay);\n}\n\nfunction setVideo() {\n\n    $('.youtube-player').attr('src', 'https://www.youtube.com/embed/4uC3pYJJF0w');\n}\n\nfunction showCloseGalleryButton(closeButtonParent) {\n\n    var closeButton = closeButtonParent.next();\n    closeButton.addClass('gallery-menu--item-close-button__visible');\n    closeButton.removeClass('gallery-menu--item-close-button__hidden');\n}\n\nfunction showGalleryItemDescription(galleryItem, delay) {\n\n    var galleryItemDescription = galleryItem.parent().siblings('.work-info--wrapper').find(\".work-info\");\n\n    setTimeout(function () {\n        galleryItemDescription.show();\n        galleryItemDescription.removeClass(\"work-info__hidden\");\n        galleryItemDescription.addClass(\"work-info__visible\");\n    }, delay);\n}\n\nfunction hideGalleryItemDescription(delay) {\n\n    var galleryItemDescription = $(\".work-info\");\n\n    galleryItemDescription.addClass(\"work-info__hidden\");\n    galleryItemDescription.removeClass(\"work-info__visible\");\n\n    setTimeout(function () {\n        galleryItemDescription.hide();\n    }, delay);\n}\n\nfunction defaultHideWorkInfo() {\n\n    $(\".work-info\").hide();\n}\ndefaultHideWorkInfo();\n\nfunction galleryDescriptionCloseButton(galleryItem) {\n    var closeButton = galleryItem.parent().parent().find('.work-info--close-button');\n\n    closeButton.on('click', function () {\n        hideGalleryItemDescription(500);\n\n        setTimeout(function () {\n            showWorkInfoButton(galleryItem);\n        }, 500);\n    });\n}\n\nfunction showWorkInfoButton(galleryItemDescription) {\n\n    var workInfoButton = galleryItemDescription.parent().parent().find('.work-info--show-button');\n\n    workInfoButton.show('500', function () {\n        workInfoButton.removeClass(\"work-info--show-button__hidden\");\n        workInfoButton.addClass(\"work-info--show-button__visible\");\n    });\n\n    onPressWorkInfoButton(workInfoButton);\n}\n\nfunction onPressWorkInfoButton(workInfoButton) {\n\n    workInfoButton.on(\"click\", function () {\n\n        var button = $(this);\n        button.hide(300);\n        button.removeClass(\"work-info--show-button__visible\");\n        button.addClass(\"work-info--show-button__hidden\");\n\n        var galleryItem = workInfoButton.siblings().find(\".gallery-menu--item-title\");\n        showGalleryItemDescription(galleryItem, 100);\n    });\n}\n\nfunction hideWorkInfoButton() {\n\n    var showInfoButton = $(\".work-info--show-button\");\n\n    setTimeout(function () {\n        showInfoButton.removeClass(\"work-info--show-button__visible\");\n        showInfoButton.addClass(\"work-info--show-button__hidden\");\n        showInfoButton.hide(300);\n    }, 100);\n}\n\n// textbox scroll buttons\n\nfunction scrollTextBox() {\n\n    var scrollValue = 300;\n\n    $(\".up\").click(function () {\n\n        $(\".info-text\").animate({\n            scrollTop: $('.info-text').scrollTop() - scrollValue\n        }, 'fast');\n\n        $('.up').addClass('arrow__clicked');\n\n        setTimeout(function () {\n            $('.up').removeClass('arrow__clicked');\n        }, 500);\n    });\n\n    $(\".down\").click(function () {\n\n        $(\".info-text\").animate({\n            scrollTop: $('.info-text').scrollTop() + scrollValue\n        }, 'fast');\n\n        $('.down').addClass('arrow__clicked');\n\n        setTimeout(function () {\n            $('.down').removeClass('arrow__clicked');\n        }, 200);\n    });\n}\nscrollTextBox();\n\n//parallax layers height fix\n\n\nfunction setParallaxLayersToContentHeight() {\n\n    checkAndSetParallaxLayersHeight();\n\n    $(window).on('resize', function () {\n\n        checkAndSetParallaxLayersHeight();\n    });\n\n    $(window).on(\"orientationchange\", function () {\n\n        checkAndSetParallaxLayersHeight();\n    });\n}\n\nsetParallaxLayersToContentHeight();\n\nfunction checkAndSetParallaxLayersHeight() {\n\n    var pageContentHeight = $('.mid-plane').outerHeight();\n\n    $('.farest-plane').height(pageContentHeight);\n    $(\".far-mid-plane\").height(pageContentHeight);\n    $(\".middle-close-plane\").height(pageContentHeight);\n    $(\".closest-plane\").height(pageContentHeight);\n}\n\n// navbar\n\nfunction onPressNavbarItem() {\n\n    var navbarMenuItems = $('.horizontal-menu--item');\n\n    var offsetCorrectionValue = 0;\n\n    navbarMenuItems.on('click', function () {\n        var item = $(this);\n        var itemTitle = item.children().children().text();\n        var selectedSection = $('#' + itemTitle);\n\n        if (itemTitle === \"contact\") {\n            offsetCorrectionValue = -190;\n        } else {\n            offsetCorrectionValue = 120;\n        }\n\n        $('html,body').animate({\n            scrollTop: selectedSection.offset().top + offsetCorrectionValue }, 'slow');\n    });\n}\n\nonPressNavbarItem();\n\nfunction onPressLogo() {\n\n    $('.site-logo').on(\"click\", function () {\n        $('html,body').delay(50).animate({\n            scrollTop: $('html,body').offset().top }, 'slow');\n\n        var mainMenu = $('.main-menu');\n        mainMenu.addClass('main-menu__closed');\n        mainMenu.removeClass('main-menu__open');\n\n        $(\".hamburger-toggler--wrapper\").removeClass('open');\n    });\n}\n\nonPressLogo();\n\nfunction onPressScrollArrow() {\n    $('.scroll-arrow').on(\"click\", function () {\n        $('html,body').delay(50).animate({\n            scrollTop: $('#about').offset().top + 80 }, 'slow');\n    });\n}\n\nonPressScrollArrow();\n\n// secure e-mail address\n\nfunction changeFalseEmailToCorrect() {\n\n    $('a.mail').on('click', function () {\n        var href = $(this).attr('href');\n        $(this).attr('href', href.replace('falsemail.', ''));\n    });\n}\n\nchangeFalseEmailToCorrect();\n\n// owl carousel\n\n$(document).ready(function () {\n    $(\".owl-carousel\").owlCarousel({\n        loop: true,\n        lazyLoad: true,\n        margin: 10,\n        video: true,\n        responsive: {\n            0: { items: 1 }\n        }\n    });\n});\n\nfunction owlChangeVideoToggle() {\n\n    $(\".owl-carousel\").on('translate.owl.carousel', function () {\n\n        var videoPreloader = $('.video-preloader');\n        var videoLoader = $('.video-loader');\n\n        setTimeout(function () {\n            if ($('.youtube-player').parent().parent().hasClass(\"active\")) {\n                setVideo();\n                videoPreloader.delay(1200).fadeOut();\n                videoLoader.delay(800).fadeOut();\n            } else {\n                stopVideo();\n                videoPreloader.fadeIn();\n                videoLoader.fadeIn();\n            }\n        }, 500);\n    });\n}\n\nowlChangeVideoToggle();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/main.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--6-2!./node_modules/sass-loader/lib/loader.js!./scss/main.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\na {\\n  text-decoration: none;\\n  color: #25e0d9; }\\n\\nbody {\\n  overflow-x: hidden; }\\n\\ntextarea {\\n  white-space: pre-wrap; }\\n\\n.noselect {\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  /* Safari */\\n  /* Konqueror HTML */\\n  /* Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n  /* Non-prefixed version, currently supported by Chrome and Opera */\\n  -webkit-tap-highlight-color: transparent; }\\n\\n.far-background {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/background.jpg */ \"./images/background.jpg\")) + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  width: 100%;\\n  height: 100vh;\\n  transform: scale(1.1, 1.1); }\\n\\n.mid-plane {\\n  width: 100%; }\\n\\n.site-header {\\n  width: 100%;\\n  height: 100vh; }\\n  .site-header .site-header--wrapper {\\n    height: 100%; }\\n    .site-header .site-header--wrapper .site-header--inner {\\n      height: 100%; }\\n      .site-header .site-header--wrapper .site-header--inner .site-bar {\\n        width: 100%; }\\n      .site-header .site-header--wrapper .site-header--inner .header-lead {\\n        text-align: center;\\n        opacity: 0;\\n        animation: slideUp 2.5s normal forwards ease-in-out;\\n        animation-delay: 1s; }\\n        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\\n          .site-header .site-header--wrapper .site-header--inner .header-lead span {\\n            display: block; } }\\n  @media screen and (-ms-high-contrast: active) and (min-width: 900px), (-ms-high-contrast: none) and (min-width: 900px) {\\n    .site-header .site-header--wrapper .site-header--inner .header-lead span {\\n      display: inline-block; } }\\n\\n.scroll-arrow {\\n  font-family: \\\"lato\\\", Arial, sans-serif;\\n  transform: rotate(90deg) scale(1, 2);\\n  color: #fff;\\n  font-weight: lighter;\\n  font-size: 50px; }\\n\\n.section-title {\\n  font-family: \\\"lato\\\", Arial, sans-serif;\\n  font-weight: lighter;\\n  font-style: italic;\\n  font-size: 48px;\\n  letter-spacing: 0.15em;\\n  position: relative;\\n  display: inline; }\\n  .section-title:after {\\n    content: \\\"\\\";\\n    display: block;\\n    border-bottom: 1px solid #000;\\n    padding-top: 8px;\\n    left: 0;\\n    position: absolute;\\n    width: 0;\\n    animation: growWidth 0.5s normal forwards ease-in-out;\\n    animation-delay: 3s; }\\n\\n.section-title__light {\\n  color: #fff;\\n  font-weight: 500; }\\n  .section-title__light:after {\\n    border-bottom: 1px solid #fff; }\\n\\n.section-title__dark {\\n  color: #000; }\\n\\n.section-title__big {\\n  font-size: 92px;\\n  text-transform: uppercase; }\\n  @media (min-width: 650px) {\\n    .section-title__big {\\n      font-size: 116px; } }\\n  @media (min-width: 1300px) {\\n    .section-title__big {\\n      font-size: 138px; } }\\n  @media (min-width: 1500px) {\\n    .section-title__big {\\n      font-size: 160px; } }\\n  @media (min-width: 1800px) {\\n    .section-title__big {\\n      font-size: 192px; } }\\n  .section-title__big:after {\\n    margin-top: 10px; }\\n\\n.text {\\n  color: #000;\\n  font-family: \\\"lato\\\", Arial, sans-serif;\\n  font-size: 10px;\\n  font-weight: 500;\\n  letter-spacing: 0.2em;\\n  line-height: 1.7em; }\\n  @media (min-width: 380px) {\\n    .text {\\n      font-size: 13px; } }\\n\\n.text__menu-item {\\n  font-size: 16px;\\n  font-weight: 300; }\\n\\n.text__light {\\n  color: #fff; }\\n\\n.text__small {\\n  font-size: 10px;\\n  letter-spacing: normal; }\\n  @media (min-width: 1100px) {\\n    .text__small {\\n      font-size: 13px; } }\\n\\n.text__description {\\n  font-size: 10px;\\n  text-transform: none;\\n  font-style: italic;\\n  font-weight: bolder;\\n  width: 100%; }\\n\\n.wrapper {\\n  display: table;\\n  height: 100%;\\n  width: 100%; }\\n  .wrapper div {\\n    display: table-cell;\\n    width: 100%;\\n    height: 100%;\\n    vertical-align: middle;\\n    text-align: center; }\\n\\n.site-bar {\\n  width: 100%; }\\n  .site-bar .site-bar--wrapper {\\n    padding: 0 20px; }\\n    .site-bar .site-bar--wrapper .site-bar--inner {\\n      padding: 20px 0; }\\n\\n.header-lead {\\n  text-align: center; }\\n  .header-lead .header-lead--wrapper {\\n    padding: 140px 0; }\\n\\n.flex {\\n  display: flex;\\n  height: 100%;\\n  width: 100%; }\\n\\n.flex__vertical {\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.flex__horizontal {\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.flex__flex-end {\\n  justify-content: flex-end; }\\n\\n.flex__rwd {\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: flex-start; }\\n  @media (min-width: 900px) {\\n    .flex__rwd {\\n      flex-direction: row;\\n      justify-content: flex-start; } }\\n\\n.section-wrapper {\\n  padding: 60px 0; }\\n  @media (min-width: 550px) {\\n    .section-wrapper {\\n      padding: 70px 0; } }\\n  @media (min-width: 900px) {\\n    .section-wrapper {\\n      padding: 130px 0; } }\\n  .section-wrapper .section-inner {\\n    padding: 0 80px; }\\n    @media (min-width: 500px) {\\n      .section-wrapper .section-inner {\\n        padding: 0 100px; } }\\n\\n.section-title--wrapper .section-title--inner {\\n  text-align: center; }\\n\\n.text-container {\\n  padding: 100px 0 100px 0;\\n  width: 100%; }\\n  @media (min-width: 900px) {\\n    .text-container {\\n      width: 50%;\\n      padding: 100px 100px 100px 0; } }\\n  @media (min-width: 1300px) {\\n    .text-container {\\n      width: 41%;\\n      padding: 100px 200px 100px 0; } }\\n  @media (min-width: 1500px) {\\n    .text-container {\\n      width: 36%;\\n      padding: 100px 170px 100px 64px; } }\\n\\n.gallery--wrapper {\\n  height: 100%; }\\n  .gallery--wrapper .gallery--inner {\\n    width: 100%;\\n    height: 100%;\\n    margin-top: 25px; }\\n    @media (min-width: 1100px) {\\n      .gallery--wrapper .gallery--inner {\\n        margin-top: 0; } }\\n\\n.work-info--wrapper .work-info--inner {\\n  width: 100%; }\\n\\n.work-info-component--wrapper {\\n  padding: 10px 0; }\\n  .work-info-component--wrapper .work-info--description {\\n    text-align: left; }\\n\\n.site-logo {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pp-logo-white.png */ \"./images/pp-logo-white.png\")) + \");\\n  height: 30px;\\n  width: 30px;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: contain;\\n  transition: .5s ease-in-out; }\\n  @media (min-width: 550px) {\\n    .site-logo {\\n      height: 50px;\\n      width: 50px; } }\\n\\n.sticky-icon {\\n  position: fixed;\\n  top: 28px;\\n  left: 22px;\\n  z-index: 1; }\\n  @media (min-width: 550px) {\\n    .sticky-icon {\\n      top: 20px;\\n      left: 20px; } }\\n\\n.horizontal-menu {\\n  display: none; }\\n  @media (min-width: 900px) {\\n    .horizontal-menu {\\n      display: block; } }\\n  .horizontal-menu .horizontal-menu--item {\\n    display: inline-block;\\n    padding: 0 10px;\\n    position: relative;\\n    z-index: 0; }\\n\\n.main-menu {\\n  width: 100%;\\n  position: fixed;\\n  top: -100%;\\n  background: rgba(0, 0, 0, 0.8);\\n  transition: .5s ease-in-out; }\\n  @media (orientation: landscape) {\\n    .main-menu {\\n      top: -200%; } }\\n  .main-menu .main-menu--wrapper {\\n    padding: 100px 0; }\\n\\n.main-menu__open {\\n  top: 0; }\\n\\n.main-menu__closed {\\n  top: -100%; }\\n  @media (orientation: landscape) {\\n    .main-menu__closed {\\n      top: -200%; } }\\n\\n.vertical-menu .vertical-menu--item {\\n  text-align: center;\\n  padding: 10px 0;\\n  text-transform: uppercase;\\n  transition: .5s ease-in-out;\\n  transition-delay: .5s;\\n  opacity: 0;\\n  list-style: none; }\\n  .vertical-menu .vertical-menu--item a {\\n    letter-spacing: 0.2em;\\n    transition: .3s ease-in-out;\\n    position: relative;\\n    cursor: pointer; }\\n    .vertical-menu .vertical-menu--item a:after {\\n      content: '';\\n      display: block;\\n      position: absolute;\\n      left: 20px;\\n      right: 20px;\\n      top: 50%;\\n      border-left: 10px solid #FF003D;\\n      border-right: 10px solid #FF003D;\\n      transform: translateY(-50%);\\n      height: 3px;\\n      transition: all 0.35s ease;\\n      opacity: 0; }\\n    .vertical-menu .vertical-menu--item a:hover:after {\\n      left: -29px;\\n      right: -20px;\\n      border-left: 16px solid #FF003D;\\n      border-right: 16px solid #FF003D;\\n      opacity: 1; }\\n    .vertical-menu .vertical-menu--item a:hover {\\n      letter-spacing: 0.5em; }\\n\\n.gallery-menu--wrapper {\\n  padding: 0 60px; }\\n  @media (min-width: 380px) {\\n    .gallery-menu--wrapper {\\n      padding: 0 70px; } }\\n  @media (min-width: 480px) {\\n    .gallery-menu--wrapper {\\n      padding: 0 100px; } }\\n  .gallery-menu--wrapper .gallery-menu--inner {\\n    padding: 100px 0; }\\n\\n.gallery-menu {\\n  transition: all 0.35s ease;\\n  width: 100%; }\\n  .gallery-menu .gallery-menu--item {\\n    text-align: center;\\n    padding: 10px 0;\\n    text-transform: uppercase;\\n    transition: .5s ease-in-out;\\n    transition-delay: .5s;\\n    opacity: 1;\\n    list-style: none;\\n    cursor: pointer;\\n    position: relative; }\\n    .gallery-menu .gallery-menu--item p {\\n      letter-spacing: 0.2em;\\n      transition: .3s ease-in-out;\\n      position: relative;\\n      display: inline-block; }\\n      .gallery-menu .gallery-menu--item p:after {\\n        content: '';\\n        display: block;\\n        background: #FF003D;\\n        width: 100%;\\n        height: 2px;\\n        transition: all 0.35s ease;\\n        transform: scaleX(0);\\n        opacity: 0; }\\n      .gallery-menu .gallery-menu--item p:hover:after {\\n        transform: scaleX(1);\\n        opacity: 1; }\\n      .gallery-menu .gallery-menu--item p:hover {\\n        letter-spacing: 0.5em; }\\n  .gallery-menu .gallery-menu--item-title__active p {\\n    letter-spacing: 0.5em; }\\n    .gallery-menu .gallery-menu--item-title__active p:after {\\n      transform: scaleX(1);\\n      opacity: 1; }\\n\\n.gallery-menu--item-close-button {\\n  position: relative;\\n  background: #fff;\\n  color: #000;\\n  border: 1px solid #000;\\n  display: inline-block;\\n  border-radius: 10px;\\n  width: 20px;\\n  height: 20px;\\n  text-align: center;\\n  transition: .3s ease-in-out;\\n  font-size: 15px; }\\n  .gallery-menu--item-close-button div {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    width: 12px;\\n    height: 1px;\\n    background: #000;\\n    transition: .3s ease-in-out;\\n    transform-origin: left top; }\\n  .gallery-menu--item-close-button div:first-child {\\n    transform: rotate(45deg) translate(-50%, -50%); }\\n  .gallery-menu--item-close-button div:last-child {\\n    transform: rotate(-45deg) translate(-50%, -50%); }\\n\\n.gallery-menu--item-close-button__hidden {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n  transform: scale(0); }\\n  .gallery-menu--item-close-button__hidden div {\\n    width: 0; }\\n\\n.gallery-menu--item-close-button__visible {\\n  opacity: 100%;\\n  width: 20px;\\n  height: 20px;\\n  transform: scale(1); }\\n  .gallery-menu--item-close-button__visible div {\\n    width: 12px; }\\n\\n.gallery-menu--item-close-button__visible:hover {\\n  transform: scale(1.125); }\\n\\n.gallery-menu__visible {\\n  opacity: 1; }\\n\\n.gallery-menu__hidden {\\n  opacity: 0; }\\n\\n.info-content--wrapper {\\n  padding: 80px 0; }\\n  .info-content--wrapper .info-content--inner .flex__rwd {\\n    align-items: flex-start; }\\n\\n.info-text-container {\\n  width: 100%; }\\n  @media (min-width: 900px) {\\n    .info-text-container {\\n      width: 40%;\\n      padding: 0 50px; } }\\n  @media (min-width: 1100px) {\\n    .info-text-container {\\n      width: 30%;\\n      padding: 0 50px; } }\\n  .info-text-container .info-text {\\n    font-size: 11px;\\n    letter-spacing: 0.1em;\\n    height: 75vh;\\n    width: 100%;\\n    overflow: auto;\\n    -ms-overflow-style: none;\\n    scrollbar-width: none; }\\n    .info-text-container .info-text span {\\n      text-decoration: underline;\\n      display: block;\\n      margin: 20px 0; }\\n    .info-text-container .info-text div {\\n      display: inline;\\n      color: #fff;\\n      background-color: #000; }\\n  .info-text-container .info-text::-webkit-scrollbar {\\n    width: 0 !important; }\\n  .info-text-container .scroll-arrows-container {\\n    margin-right: 9px;\\n    margin-top: 25px; }\\n    .info-text-container .scroll-arrows-container .arrow {\\n      color: #000;\\n      background: #fff;\\n      height: 20px;\\n      width: 20px;\\n      border-radius: 20px;\\n      border: 1px solid #000;\\n      text-align: center;\\n      margin: 10px;\\n      cursor: pointer;\\n      transition: .3s ease-in-out;\\n      position: relative; }\\n      .info-text-container .scroll-arrows-container .arrow span {\\n        display: block;\\n        position: absolute;\\n        top: 50%;\\n        left: 50%;\\n        transform: translate(-50%, -50%); }\\n      .info-text-container .scroll-arrows-container .arrow span:first-child {\\n        transform: translate(-50%, -50%) rotate(90deg); }\\n      .info-text-container .scroll-arrows-container .arrow span:last-child {\\n        transform: translate(-50%, -50%) rotate(-90deg); }\\n      .info-text-container .scroll-arrows-container .arrow:hover {\\n        transform: scale(1.1); }\\n    .info-text-container .scroll-arrows-container .arrow__clicked {\\n      animation: singlePulse 0.2s ease-in-out; }\\n\\n.info-gallery--wrapper {\\n  width: 100%; }\\n  @media (min-width: 900px) {\\n    .info-gallery--wrapper {\\n      width: 60%;\\n      padding: 0 50px; } }\\n  @media (min-width: 1100px) {\\n    .info-gallery--wrapper {\\n      width: 70%;\\n      padding: 0 50px; } }\\n  .info-gallery--wrapper .info-gallery--inner .gallery--image {\\n    background-color: #fff;\\n    width: 100%;\\n    height: 70vh;\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    background-position: center; }\\n    @media (min-width: 1100px) {\\n      .info-gallery--wrapper .info-gallery--inner .gallery--image {\\n        height: 75vh;\\n        margin-top: 20px; } }\\n\\n.gallery--image--container .text__description {\\n  font-style: normal;\\n  text-align: center;\\n  padding-top: 10px; }\\n\\n.contact-info--wrapper {\\n  padding: 150px 0; }\\n  .contact-info--wrapper .contact-info--inner {\\n    padding: 0 100px; }\\n    .contact-info--wrapper .contact-info--inner .contact-info {\\n      text-align: center; }\\n      .contact-info--wrapper .contact-info--inner .contact-info .text {\\n        margin: 20px; }\\n\\n.social .social-icon {\\n  width: 25px;\\n  height: 25px;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  margin: 50px 5px 5px 5px; }\\n\\n.facebook {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/facebook.png */ \"./images/facebook.png\")) + \"); }\\n\\n.instagram {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/instagram.png */ \"./images/instagram.png\")) + \"); }\\n\\n.linkedin {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/linkedin.png */ \"./images/linkedin.png\")) + \"); }\\n\\n.footer-content {\\n  margin-left: 0; }\\n  @media (min-width: 900px) {\\n    .footer-content {\\n      margin-left: 10%; } }\\n  .footer-content .flex__horizontal {\\n    justify-content: center; }\\n    @media (min-width: 900px) {\\n      .footer-content .flex__horizontal {\\n        justify-content: flex-start; } }\\n    .footer-content .flex__horizontal .footer--icon {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/pp-logo-black.png */ \"./images/pp-logo-black.png\")) + \");\\n      width: 20px;\\n      height: 20px;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      margin: 10px; }\\n    .footer-content .flex__horizontal .text {\\n      font-size: 10px; }\\n\\n.hamburger-toggler {\\n  position: fixed;\\n  top: 36px;\\n  right: 26px;\\n  z-index: 1; }\\n  @media (min-width: 900px) {\\n    .hamburger-toggler {\\n      display: none; } }\\n  .hamburger-toggler .hamburger-toggler--wrapper {\\n    width: 20px;\\n    height: 15px;\\n    position: relative;\\n    margin: 0 auto;\\n    cursor: pointer; }\\n    @media (min-width: 550px) {\\n      .hamburger-toggler .hamburger-toggler--wrapper {\\n        width: 35px;\\n        height: 40px; } }\\n    .hamburger-toggler .hamburger-toggler--wrapper div {\\n      display: block;\\n      position: absolute;\\n      height: 3px;\\n      width: 50%;\\n      opacity: 1;\\n      transform: rotate(0deg);\\n      transition: .25s ease-in-out; }\\n      .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(even) {\\n        left: 50%;\\n        border-radius: 0 9px 9px 0; }\\n      .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(odd) {\\n        left: 0;\\n        border-radius: 9px 0 0 9px; }\\n      .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(1), .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(2) {\\n        top: 0; }\\n      .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(3), .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(4) {\\n        top: 5px; }\\n        @media (min-width: 550px) {\\n          .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(3), .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(4) {\\n            top: 8px; } }\\n      .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(5), .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(6) {\\n        top: 10px; }\\n        @media (min-width: 550px) {\\n          .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(5), .hamburger-toggler .hamburger-toggler--wrapper div:nth-child(6) {\\n            top: 16px; } }\\n  .hamburger-toggler .open div:nth-child(even) {\\n    transform: rotate(45deg) scale(1.5, 1); }\\n  .hamburger-toggler .open div:nth-child(odd) {\\n    transform: rotate(-45deg) scale(1.5, 1); }\\n  .hamburger-toggler .open div:nth-child(1), .hamburger-toggler .open div:nth-child(2), .hamburger-toggler .open div:nth-child(5), .hamburger-toggler .open div:nth-child(6) {\\n    opacity: 0; }\\n\\n.work-section {\\n  position: relative; }\\n\\n.gallery {\\n  display: none;\\n  width: 100%;\\n  overflow: hidden;\\n  box-sizing: content-box; }\\n  .gallery .gallery--image {\\n    background-color: #fff;\\n    width: 100%;\\n    height: 70vh;\\n    margin-top: 20px;\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    background-position: center; }\\n    @media (min-width: 1100px) {\\n      .gallery .gallery--image {\\n        height: 88vh; } }\\n\\n.gallery__visible {\\n  display: block; }\\n\\n.gallery__hidden {\\n  display: none; }\\n\\n.work-info {\\n  position: relative;\\n  opacity: 1;\\n  transition: .7s ease-in-out;\\n  transition-delay: .1s;\\n  z-index: 2;\\n  transform: translate(0);\\n  left: 0; }\\n  @media (min-width: 1100px) {\\n    .work-info {\\n      position: absolute;\\n      top: 50%;\\n      transform: translate(0, -50%);\\n      left: -7%;\\n      width: 50%; } }\\n  @media (min-width: 1300px) {\\n    .work-info {\\n      width: 40%; } }\\n  @media (min-width: 1500px) {\\n    .work-info {\\n      width: 30%; } }\\n  .work-info .work-info--title {\\n    background: #FF003D;\\n    color: #fff;\\n    text-transform: uppercase;\\n    text-decoration: underline;\\n    padding: 10px 20px;\\n    text-align: center;\\n    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.5); }\\n  .work-info .work-info--description {\\n    background: #fff;\\n    color: #000;\\n    padding: 40px 30px;\\n    height: 80vh;\\n    overflow: auto;\\n    width: 100%;\\n    -ms-overflow-style: none;\\n    scrollbar-width: none; }\\n    @media (min-width: 650px) {\\n      .work-info .work-info--description {\\n        padding: 40px 50px; } }\\n    @media (min-width: 1100px) {\\n      .work-info .work-info--description {\\n        height: 100%;\\n        color: #fff;\\n        background: #000;\\n        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.5); } }\\n    .work-info .work-info--description .text__description {\\n      color: #000;\\n      font-size: 11px; }\\n      @media (min-width: 1100px) {\\n        .work-info .work-info--description .text__description {\\n          color: #fff;\\n          font-size: 10px; } }\\n    .work-info .work-info--description .work-info--close-button {\\n      position: absolute;\\n      top: 20px;\\n      right: 10px;\\n      color: #fff;\\n      border: 1px solid #fff;\\n      border-radius: 10px;\\n      width: 20px;\\n      height: 20px;\\n      text-align: center;\\n      transition: .3s ease-in-out;\\n      font-size: 15px;\\n      display: none; }\\n      @media (min-width: 1100px) {\\n        .work-info .work-info--description .work-info--close-button {\\n          display: block; } }\\n      .work-info .work-info--description .work-info--close-button div {\\n        position: absolute;\\n        top: 50%;\\n        left: 50%;\\n        width: 12px;\\n        height: 1px;\\n        background: #fff;\\n        transition: .3s ease-in-out;\\n        transform-origin: top left; }\\n      .work-info .work-info--description .work-info--close-button div:first-child {\\n        transform: rotate(45deg) translate(-50%, -50%); }\\n      .work-info .work-info--description .work-info--close-button div:last-child {\\n        transform: rotate(-45deg) translate(-50%, -50%); }\\n    .work-info .work-info--description .work-info--close-button:hover {\\n      transform: scale(1.125); }\\n\\n.work-info--description::-webkit-scrollbar {\\n  width: 0 !important; }\\n\\n.work-info__hidden {\\n  left: -100%;\\n  opacity: 0; }\\n\\n.work-info__visible {\\n  left: 0;\\n  opacity: 1; }\\n  @media (min-width: 1100px) {\\n    .work-info__visible {\\n      left: -7%; } }\\n\\n.work-info--show-button {\\n  position: relative;\\n  display: none;\\n  background: #FF003D;\\n  color: #fff;\\n  padding: 0 8px;\\n  transition: .3s ease-in-out;\\n  z-index: 2;\\n  margin: 20px 0;\\n  transform: translate(-50%, 0);\\n  width: 60%; }\\n  .work-info--show-button:hover {\\n    width: 65%; }\\n    @media (min-width: 650px) {\\n      .work-info--show-button:hover {\\n        width: 45%; } }\\n    @media (min-width: 1100px) {\\n      .work-info--show-button:hover {\\n        width: 23%; } }\\n    @media (min-width: 1300px) {\\n      .work-info--show-button:hover {\\n        width: 16%; } }\\n  @media (min-width: 650px) {\\n    .work-info--show-button {\\n      width: 40%; } }\\n  @media (min-width: 650px) {\\n    .work-info--show-button {\\n      padding: 0 10px; } }\\n  @media (min-width: 1100px) {\\n    .work-info--show-button {\\n      position: absolute;\\n      top: 50%;\\n      transform: translate(0, -50%);\\n      left: -7%;\\n      width: 20%;\\n      padding: 10px 10px;\\n      margin-top: 0;\\n      border-radius: 0;\\n      box-shadow: 0 10px 18px rgba(0, 0, 0, 0.5); } }\\n  @media (min-width: 1300px) {\\n    .work-info--show-button {\\n      width: 15%; } }\\n\\n.work-info--show-button__hidden {\\n  left: -100%;\\n  opacity: 0; }\\n\\n.work-info--show-button__visible {\\n  left: 50%;\\n  opacity: 1; }\\n  @media (min-width: 1100px) {\\n    .work-info--show-button__visible {\\n      left: -7%; } }\\n\\n.pollution1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pollution1.jpg */ \"./images/pollution1.jpg\")) + \"); }\\n\\n.pollution2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pollution2.jpg */ \"./images/pollution2.jpg\")) + \"); }\\n\\n.pollution3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pollution3.jpg */ \"./images/pollution3.jpg\")) + \"); }\\n\\n.inBloom1Detail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/InBloom1Detail.jpg */ \"./images/InBloom1Detail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.pollution1Detail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pollution1Detail.jpg */ \"./images/pollution1Detail.jpg\")) + \");\\n  background-size: cover !important;\\n  background-position: left !important; }\\n\\n.inBloom1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/InBloom1.jpg */ \"./images/InBloom1.jpg\")) + \"); }\\n\\n.inBloom2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/InBloom2.jpg */ \"./images/InBloom2.jpg\")) + \"); }\\n\\n.inBloom3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/InBloom3.jpg */ \"./images/InBloom3.jpg\")) + \"); }\\n\\n.pillar1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/Pillar1.jpg */ \"./images/Pillar1.jpg\")) + \"); }\\n\\n.pillar2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/Pillar2.jpg */ \"./images/Pillar2.jpg\")) + \"); }\\n\\n.pillar3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/Pillar3.jpg */ \"./images/Pillar3.jpg\")) + \"); }\\n\\n.pillar4 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/Pillar4.jpg */ \"./images/Pillar4.jpg\")) + \"); }\\n\\n.pillar1Detail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/Pillar1Detail.jpg */ \"./images/Pillar1Detail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.datascape1and3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/datascape01and03.jpg */ \"./images/datascape01and03.jpg\")) + \"); }\\n\\n.datascape2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/datascape02.jpg */ \"./images/datascape02.jpg\")) + \"); }\\n\\n.datascape2detail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/datascape02detail.jpg */ \"./images/datascape02detail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.datascape4and5and6 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/datascape04and05and06.jpg */ \"./images/datascape04and05and06.jpg\")) + \"); }\\n\\n.datascape7and8 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/datascape07and08.jpg */ \"./images/datascape07and08.jpg\")) + \"); }\\n\\n.datascape8detail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/datascape08detail.jpg */ \"./images/datascape08detail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.kain-and-abel1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel1.jpg */ \"./images/kainabel1.jpg\")) + \"); }\\n\\n.kain-and-abel2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel2.jpg */ \"./images/kainabel2.jpg\")) + \"); }\\n\\n.kain-and-abel3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel3.jpg */ \"./images/kainabel3.jpg\")) + \"); }\\n\\n.kain-and-abel4 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel4ale2.jpg */ \"./images/kainabel4ale2.jpg\")) + \"); }\\n\\n.kain-and-abel5 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel5.jpg */ \"./images/kainabel5.jpg\")) + \"); }\\n\\n.kain-and-abel6 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel6.jpg */ \"./images/kainabel6.jpg\")) + \"); }\\n\\n.kain-and-abel7 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel7.jpg */ \"./images/kainabel7.jpg\")) + \"); }\\n\\n.kain-and-abel8 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel8.jpg */ \"./images/kainabel8.jpg\")) + \"); }\\n\\n.kain-and-abel9 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/kainabel9.jpg */ \"./images/kainabel9.jpg\")) + \"); }\\n\\n.kain-abel-video {\\n  background: #000; }\\n\\n.diver1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/diver1.jpg */ \"./images/diver1.jpg\")) + \"); }\\n\\n.diver2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/diver2.jpg */ \"./images/diver2.jpg\")) + \"); }\\n\\n.diver3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/diver3.jpg */ \"./images/diver3.jpg\")) + \"); }\\n\\n.bewilderingOneDetail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/bewilderingOneDetail.jpg */ \"./images/bewilderingOneDetail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.bewilderingOne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/bewilderingOne.jpg */ \"./images/bewilderingOne.jpg\")) + \"); }\\n\\n.glaringOneAndBellowingOne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/glaringngOneAndBellowingOne.jpg */ \"./images/glaringngOneAndBellowingOne.jpg\")) + \"); }\\n\\n.raveningOneAndAbolishingOneAndDenoucingOne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/raveningOneAndabolishingOneAndDenoucingOne.jpg */ \"./images/raveningOneAndabolishingOneAndDenoucingOne.jpg\")) + \"); }\\n\\n.diminishingOneDetail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/diminishingOneDetail.jpg */ \"./images/diminishingOneDetail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.diminishingOne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/diminishingOne.jpg */ \"./images/diminishingOne.jpg\")) + \"); }\\n\\n.ascendingOneAndAwakeningOne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ascendingOneAndAwakeningOne.jpg */ \"./images/ascendingOneAndAwakeningOne.jpg\")) + \"); }\\n\\n.dreamingOneAndEnlighteningOneAndSuffocatingOne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/dreamingOneAndEnglighteningOneAndSuffocatingOne.jpg */ \"./images/dreamingOneAndEnglighteningOneAndSuffocatingOne.jpg\")) + \"); }\\n\\n.selfglitchedintro {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitchedintro.jpg */ \"./images/selfglitchedintro.jpg\")) + \"); }\\n\\n.selfglitched1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched1.jpg */ \"./images/selfglitched1.jpg\")) + \"); }\\n\\n.selfglitched2and3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched2and3.jpg */ \"./images/selfglitched2and3.jpg\")) + \"); }\\n\\n.selfglitched4and5and6 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched4and5and6.jpg */ \"./images/selfglitched4and5and6.jpg\")) + \"); }\\n\\n.selfglitched7 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched7.jpg */ \"./images/selfglitched7.jpg\")) + \"); }\\n\\n.selfglitched8and9 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched8and9.jpg */ \"./images/selfglitched8and9.jpg\")) + \"); }\\n\\n.selfglitched10and11and12 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched10and11and12.jpg */ \"./images/selfglitched10and11and12.jpg\")) + \"); }\\n\\n.selfglitched14and15 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched14and15.jpg */ \"./images/selfglitched14and15.jpg\")) + \"); }\\n\\n.selfglitched16and17 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched16and17.jpg */ \"./images/selfglitched16and17.jpg\")) + \"); }\\n\\n.selfglitched18 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched18.jpg */ \"./images/selfglitched18.jpg\")) + \"); }\\n\\n.selfglitched19and20 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched19and20.jpg */ \"./images/selfglitched19and20.jpg\")) + \"); }\\n\\n.selfglitched21 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched21.jpg */ \"./images/selfglitched21.jpg\")) + \"); }\\n\\n.selfglitched22 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched22.jpg */ \"./images/selfglitched22.jpg\")) + \"); }\\n\\n.selfglitched23 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitched23.jpg */ \"./images/selfglitched23.jpg\")) + \"); }\\n\\n.selfglitchedset {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/selfglitchedset.jpg */ \"./images/selfglitchedset.jpg\")) + \"); }\\n\\n.thousandYards {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/1000yards.jpg */ \"./images/1000yards.jpg\")) + \"); }\\n\\n.thousandYards1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/1000yards1st-step.jpg */ \"./images/1000yards1st-step.jpg\")) + \"); }\\n\\n.thousandYards2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/1000yards2nd-step.jpg */ \"./images/1000yards2nd-step.jpg\")) + \"); }\\n\\n.firstState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/1st-state.jpg */ \"./images/1st-state.jpg\")) + \"); }\\n\\n.secondState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/2nd-state.jpg */ \"./images/2nd-state.jpg\")) + \"); }\\n\\n.thirdState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/3rd-state.jpg */ \"./images/3rd-state.jpg\")) + \"); }\\n\\n.firstSecondAndThirdState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/3states.jpg */ \"./images/3states.jpg\")) + \"); }\\n\\n.fourthState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/4th-state.jpg */ \"./images/4th-state.jpg\")) + \"); }\\n\\n.fifthState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/5th-state.jpg */ \"./images/5th-state.jpg\")) + \"); }\\n\\n.fifthStateDetail {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/5th-stateDetail.jpg */ \"./images/5th-stateDetail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.sixthState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/6th-state.jpg */ \"./images/6th-state.jpg\")) + \"); }\\n\\n.seventhState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/7th-state.jpg */ \"./images/7th-state.jpg\")) + \"); }\\n\\n.eighthAndNinthState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/8th&9th-state.jpg */ \"./images/8th&9th-state.jpg\")) + \"); }\\n\\n.eighthState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/8th-state.jpg */ \"./images/8th-state.jpg\")) + \"); }\\n\\n.ninthState {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/9th-state.jpg */ \"./images/9th-state.jpg\")) + \"); }\\n\\n.ripplesDetail1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ripplesDetail1.jpg */ \"./images/ripplesDetail1.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.ripplesDetail2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ripplesDetail2.jpg */ \"./images/ripplesDetail2.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.ripples1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ripples.jpg */ \"./images/ripples.jpg\")) + \"); }\\n\\n.ripples2Detail1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ripples2Detail1.jpg */ \"./images/ripples2Detail1.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.ripples2Detail2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ripples2Detail2.jpg */ \"./images/ripples2Detail2.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.ripples2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/ripples2.jpg */ \"./images/ripples2.jpg\")) + \"); }\\n\\n.inBetweenDetail1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/inBetweenDetail1.jpg */ \"./images/inBetweenDetail1.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.inBetweenDetail2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/inBetweenDetail2.jpg */ \"./images/inBetweenDetail2.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.inBetween {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/inBetween.jpg */ \"./images/inBetween.jpg\")) + \"); }\\n\\n.floatingAndDrowning {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/floaringdrowning.jpg */ \"./images/floaringdrowning.jpg\")) + \"); }\\n\\n.floatingAndDrowningDetail1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/floaringdrowningdetail.jpg */ \"./images/floaringdrowningdetail.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.floatingAndDrowningDetail2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/floaringdrowningdetail2.jpg */ \"./images/floaringdrowningdetail2.jpg\")) + \");\\n  background-size: cover !important; }\\n\\n.mirror1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror1.jpg */ \"./images/mirror1.jpg\")) + \"); }\\n\\n.mirror2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror2.jpg */ \"./images/mirror2.jpg\")) + \"); }\\n\\n.mirror3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror3.jpg */ \"./images/mirror3.jpg\")) + \"); }\\n\\n.mirror4 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror4.jpg */ \"./images/mirror4.jpg\")) + \"); }\\n\\n.mirror5 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror5.jpg */ \"./images/mirror5.jpg\")) + \"); }\\n\\n.mirror6 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror6.jpg */ \"./images/mirror6.jpg\")) + \"); }\\n\\n.mirror7 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/mirror7.jpg */ \"./images/mirror7.jpg\")) + \"); }\\n\\n.liberec1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/liberec3.jpg */ \"./images/exhibitions/liberec3.jpg\")) + \"); }\\n\\n.liberec2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/liberec2.jpg */ \"./images/exhibitions/liberec2.jpg\")) + \"); }\\n\\n.liberec3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/liberec1.jpg */ \"./images/exhibitions/liberec1.jpg\")) + \"); }\\n\\n.staryBrowar1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/staryBrowar_poznan1.jpg */ \"./images/exhibitions/staryBrowar_poznan1.jpg\")) + \"); }\\n\\n.staryBrowar2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/staryBrowar_poznan2.jpg */ \"./images/exhibitions/staryBrowar_poznan2.jpg\")) + \"); }\\n\\n.wilno {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/wilno.jpg */ \"./images/exhibitions/wilno.jpg\")) + \"); }\\n\\n.pollutionASP1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/pollution_aulaASP1.jpg */ \"./images/exhibitions/pollution_aulaASP1.jpg\")) + \"); }\\n\\n.pollutionASP2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/pollution_aulaASP2.jpg */ \"./images/exhibitions/pollution_aulaASP2.jpg\")) + \"); }\\n\\n.sollentuna1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/sollentuna2.jpg */ \"./images/exhibitions/sollentuna2.jpg\")) + \"); }\\n\\n.sollentuna2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/sollentuna1.jpg */ \"./images/exhibitions/sollentuna1.jpg\")) + \"); }\\n\\n.isfahan {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/isfahan.jpg */ \"./images/exhibitions/isfahan.jpg\")) + \"); }\\n\\n.corazciasniej1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/corazciasniej.jpg */ \"./images/exhibitions/corazciasniej.jpg\")) + \"); }\\n\\n.corazciasniej2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/corazciasniej2.jpg */ \"./images/exhibitions/corazciasniej2.jpg\")) + \"); }\\n\\n.scg1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/SCG_international_printmaking_conference1.jpg */ \"./images/exhibitions/SCG_international_printmaking_conference1.jpg\")) + \"); }\\n\\n.scg2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/SCG_international_printmaking_conference2.jpg */ \"./images/exhibitions/SCG_international_printmaking_conference2.jpg\")) + \"); }\\n\\n.redefinitionOfMatrix1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/redefinition_of_matrix1.jpg */ \"./images/exhibitions/redefinition_of_matrix1.jpg\")) + \"); }\\n\\n.redefinitionOfMatrix2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/redefinition_of_matrix2.jpg */ \"./images/exhibitions/redefinition_of_matrix2.jpg\")) + \"); }\\n\\n.mtg2015 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/mtg2015.jpg */ \"./images/exhibitions/mtg2015.jpg\")) + \"); }\\n\\n.mtg2015b {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/mtg2015b.jpg */ \"./images/exhibitions/mtg2015b.jpg\")) + \"); }\\n\\n.impact9 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/impact9.jpg */ \"./images/exhibitions/impact9.jpg\")) + \"); }\\n\\n.cuttingEdgePrintmaking1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/Cutting-Egde Printmaking1.jpg */ \"./images/exhibitions/Cutting-Egde Printmaking1.jpg\")) + \"); }\\n\\n.cuttingEdgePrintmaking2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/exhibitions/Cutting-Egde Printmaking2.jpg */ \"./images/exhibitions/Cutting-Egde Printmaking2.jpg\")) + \"); }\\n\\n.shape-container {\\n  width: 100%;\\n  position: relative;\\n  height: 100%; }\\n\\n.farest-plane {\\n  width: 100%; }\\n  .farest-plane .shape-container {\\n    overflow: hidden; }\\n    .farest-plane .shape-container .big-shape-2 {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig2.png */ \"./images/shapeBig2.png\")) + \");\\n      width: 62%;\\n      height: 21vh;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      position: absolute;\\n      top: 26vh;\\n      left: 28%;\\n      filter: blur(5px);\\n      transform: rotate(-10deg);\\n      animation: slideUp 3.5s normal forwards ease-in-out; }\\n      @media (min-width: 900px) {\\n        .farest-plane .shape-container .big-shape-2 {\\n          width: 35%;\\n          height: 38vh;\\n          left: 45%; } }\\n    .farest-plane .shape-container .small-shape-2 {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall2.png */ \"./images/shapeSmall2.png\")) + \");\\n      width: 14%;\\n      height: 13vh;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      position: absolute;\\n      bottom: 77vh;\\n      left: 8%;\\n      filter: blur(0px);\\n      transform: rotate(80deg); }\\n      @media (min-width: 900px) {\\n        .farest-plane .shape-container .small-shape-2 {\\n          width: 14%;\\n          height: 29vh;\\n          left: 15%;\\n          bottom: 53vh; } }\\n    .farest-plane .shape-container .big-shape-3 {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig3.png */ \"./images/shapeBig3.png\")) + \");\\n      width: 74%;\\n      height: 26vh;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      position: absolute;\\n      bottom: 7vh;\\n      left: 28%;\\n      filter: blur(0px);\\n      transform: rotate(170deg); }\\n      @media (min-width: 900px) {\\n        .farest-plane .shape-container .big-shape-3 {\\n          width: 89%;\\n          height: 51vh;\\n          left: 18%;\\n          bottom: -23vh; } }\\n    .farest-plane .shape-container .small-shape-3 {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall3.png */ \"./images/shapeSmall3.png\")) + \");\\n      width: 16%;\\n      height: 17vh;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      position: absolute;\\n      bottom: 62vh;\\n      left: 75%;\\n      filter: blur(0px);\\n      transform: rotate(138deg); }\\n      @media (min-width: 900px) {\\n        .farest-plane .shape-container .small-shape-3 {\\n          width: 13%;\\n          height: 17vh;\\n          left: 78%;\\n          bottom: 55vh; } }\\n\\n.far-mid-plane {\\n  width: 100%; }\\n  .far-mid-plane .big-shape-1 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig1.png */ \"./images/shapeBig1.png\")) + \");\\n    width: 69%;\\n    height: 27vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    top: 134vh;\\n    left: -43%;\\n    filter: blur(5px);\\n    transform: rotate(-20deg); }\\n    @media (min-width: 650px) {\\n      .far-mid-plane .big-shape-1 {\\n        left: -31%; } }\\n    @media (min-width: 900px) {\\n      .far-mid-plane .big-shape-1 {\\n        left: -22%; } }\\n    @media (min-width: 1100px) {\\n      .far-mid-plane .big-shape-1 {\\n        left: -18%; } }\\n  .far-mid-plane .big-shape-2 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig2.png */ \"./images/shapeBig2.png\")) + \");\\n    width: 37%;\\n    height: 14vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    bottom: 24vh;\\n    left: 61%;\\n    filter: blur(0px);\\n    transform: rotate(20deg); }\\n    @media (min-width: 900px) {\\n      .far-mid-plane .big-shape-2 {\\n        width: 25%;\\n        height: 28vh;\\n        left: 64%;\\n        bottom: 13vh; } }\\n  .far-mid-plane .small-shape-1 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall1.png */ \"./images/shapeSmall1.png\")) + \");\\n    width: 12%;\\n    height: 10vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    bottom: 63vh;\\n    left: 86%;\\n    filter: blur(0px);\\n    transform: rotate(174deg); }\\n    @media (min-width: 900px) {\\n      .far-mid-plane .small-shape-1 {\\n        width: 9%;\\n        height: 14vh;\\n        left: 82%;\\n        bottom: 53vh; } }\\n  .far-mid-plane .big-shape-2b {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig2.png */ \"./images/shapeBig2.png\")) + \");\\n    width: 29%;\\n    height: 15vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    bottom: 2vh;\\n    left: -9%;\\n    filter: blur(0px);\\n    transform: rotate(172deg); }\\n    @media (min-width: 900px) {\\n      .far-mid-plane .big-shape-2b {\\n        width: 29%;\\n        height: 32vh;\\n        left: -10%;\\n        bottom: 14vh; } }\\n\\n.middle-close-plane {\\n  width: 100%;\\n  pointer-events: none; }\\n  .middle-close-plane .animation-container {\\n    opacity: 0;\\n    animation: slideUp 1.5s normal forwards ease-in-out;\\n    animation-delay: 1.5s; }\\n  .middle-close-plane .big-shape-2 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig2.png */ \"./images/shapeBig2.png\")) + \");\\n    width: 29%;\\n    height: 23vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    top: 230vh;\\n    left: 54%;\\n    transform: rotate(320deg);\\n    filter: blur(1px);\\n    display: none; }\\n    @media (min-width: 900px) {\\n      .middle-close-plane .big-shape-2 {\\n        display: block; } }\\n    @media (min-width: 1100px) {\\n      .middle-close-plane .big-shape-2 {\\n        left: 64%; } }\\n    @media (min-width: 1300px) {\\n      .middle-close-plane .big-shape-2 {\\n        top: 200vh; } }\\n    @media (min-width: 1500px) {\\n      .middle-close-plane .big-shape-2 {\\n        top: 185vh; } }\\n    @media (min-width: 1700px) {\\n      .middle-close-plane .big-shape-2 {\\n        top: 175vh; } }\\n  .middle-close-plane .small-shape-4 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall4.png */ \"./images/shapeSmall4.png\")) + \");\\n    width: 27%;\\n    height: 34vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    top: 39vh;\\n    left: 19%;\\n    filter: blur(2px);\\n    transform: rotate(-40deg); }\\n    @media (min-width: 900px) {\\n      .middle-close-plane .small-shape-4 {\\n        width: 20%;\\n        top: 53vh; } }\\n  .middle-close-plane .big-shape-1 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig1.png */ \"./images/shapeBig1.png\")) + \");\\n    width: 52%;\\n    height: 27vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    top: 202vh;\\n    left: 57%;\\n    transform: rotate(150deg);\\n    display: none; }\\n    @media (min-width: 650px) {\\n      .middle-close-plane .big-shape-1 {\\n        left: 57%; } }\\n    @media (min-width: 900px) {\\n      .middle-close-plane .big-shape-1 {\\n        display: block;\\n        top: 179vh; } }\\n    @media (min-width: 1300px) {\\n      .middle-close-plane .big-shape-1 {\\n        top: 140vh;\\n        width: 44%;\\n        height: 38vh; } }\\n  .middle-close-plane .big-shape-1b {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig1.png */ \"./images/shapeBig1.png\")) + \");\\n    width: 14%;\\n    height: 26vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    bottom: 71vh;\\n    left: 14%;\\n    filter: blur(1px);\\n    transform: rotate(220deg); }\\n    @media (min-width: 900px) {\\n      .middle-close-plane .big-shape-1b {\\n        width: 8%;\\n        height: 22vh;\\n        left: 21%;\\n        bottom: 48vh; } }\\n  .middle-close-plane .small-shape-4b {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall4.png */ \"./images/shapeSmall4.png\")) + \");\\n    width: 10%;\\n    height: 12vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    bottom: 30vh;\\n    left: 71%;\\n    filter: blur(1px);\\n    transform: rotate(340deg); }\\n    @media (min-width: 900px) {\\n      .middle-close-plane .small-shape-4b {\\n        width: 8%;\\n        height: 22vh;\\n        left: 62%;\\n        bottom: 11vh; } }\\n\\n.closest-plane {\\n  width: 100%;\\n  pointer-events: none; }\\n  .closest-plane .animation-container {\\n    opacity: 0;\\n    animation: slideUp 1.2s normal forwards ease-in-out;\\n    animation-delay: 2s; }\\n  .closest-plane .small-shape-1 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall1.png */ \"./images/shapeSmall1.png\")) + \");\\n    width: 29%;\\n    height: 22vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    top: 62vh;\\n    left: 66%;\\n    transform: rotate(20deg); }\\n    @media (min-width: 900px) {\\n      .closest-plane .small-shape-1 {\\n        width: 29%;\\n        height: 22vh;\\n        top: 62vh;\\n        left: 66%; } }\\n  .closest-plane .small-shape-1b {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall1.png */ \"./images/shapeSmall1.png\")) + \");\\n    width: 40%;\\n    height: 15vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    top: 216vh;\\n    left: 57%;\\n    filter: blur(5px);\\n    transform: rotate(150deg); }\\n    @media (min-width: 900px) {\\n      .closest-plane .small-shape-1b {\\n        top: 193vh; } }\\n    @media (min-width: 1300px) {\\n      .closest-plane .small-shape-1b {\\n        top: 166vh;\\n        width: 46%;\\n        height: 23vh;\\n        left: 51%; } }\\n  .closest-plane .big-shape-1b {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeBig1.png */ \"./images/shapeBig1.png\")) + \");\\n    width: 18%;\\n    height: 12vh;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    position: absolute;\\n    bottom: 39vh;\\n    left: 81%;\\n    filter: blur(2px);\\n    transform: rotate(295deg); }\\n    @media (min-width: 900px) {\\n      .closest-plane .big-shape-1b {\\n        width: 19%;\\n        height: 21vh;\\n        left: 77%;\\n        bottom: 26vh; } }\\n\\n.mid-plane {\\n  width: 100%; }\\n  .mid-plane .shape-container {\\n    pointer-events: none; }\\n    .mid-plane .shape-container .small-shape-2 {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall2.png */ \"./images/shapeSmall2.png\")) + \");\\n      width: 30%;\\n      height: 21vh;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      position: absolute;\\n      top: -4vh;\\n      left: 2%;\\n      transform: rotate(200deg); }\\n      @media (min-width: 900px) {\\n        .mid-plane .shape-container .small-shape-2 {\\n          width: 22%; } }\\n    .mid-plane .shape-container .small-shape-4 {\\n      background-image: url(\" + escape(__webpack_require__(/*! ../images/shapeSmall4.png */ \"./images/shapeSmall4.png\")) + \");\\n      width: 30%;\\n      height: 22vh;\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      position: absolute;\\n      top: 124vh;\\n      left: 49%;\\n      transform: rotate(-20deg);\\n      display: none; }\\n      @media (min-width: 900px) {\\n        .mid-plane .shape-container .small-shape-4 {\\n          display: block; } }\\n      @media (min-width: 1100px) {\\n        .mid-plane .shape-container .small-shape-4 {\\n          left: 65%; } }\\n      @media (min-width: 1300px) {\\n        .mid-plane .shape-container .small-shape-4 {\\n          top: 100vh; } }\\n      @media (min-width: 1500px) {\\n        .mid-plane .shape-container .small-shape-4 {\\n          top: 85vh; } }\\n      @media (min-width: 1700px) {\\n        .mid-plane .shape-container .small-shape-4 {\\n          top: 75vh; } }\\n\\n.horizontal-menu--item:after {\\n  content: '';\\n  display: block;\\n  width: 100%;\\n  height: 400%;\\n  background: #FF003D;\\n  position: absolute;\\n  top: -140px;\\n  left: 0;\\n  opacity: 0;\\n  z-index: -1;\\n  transition: all 0.3s ease-out;\\n  background: #FF003D;\\n  /* Old browsers */\\n  /* FF3.6-15 */\\n  /* Chrome10-25,Safari5.1-6 */\\n  background: linear-gradient(to bottom, #3500c9 1%, #c900db 20%, #FF003D 100%);\\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$medium-color', endColorstr='$medium-color-02',GradientType=0 ); }\\n\\n.horizontal-menu--item:hover:after {\\n  top: -50px;\\n  opacity: 1; }\\n\\n.site-logo {\\n  position: relative;\\n  cursor: pointer; }\\n  .site-logo:after {\\n    content: '';\\n    display: block;\\n    width: 100%;\\n    height: 100%;\\n    background: #FF003D;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    opacity: 0;\\n    border-radius: 50%;\\n    z-index: -1;\\n    transition: all 0.3s ease-out;\\n    transform: scale(0.9, 0.9); }\\n  .site-logo:hover:after {\\n    opacity: 1; }\\n\\n.site-logo__white {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pp-logo-white.png */ \"./images/pp-logo-white.png\")) + \"); }\\n\\n.site-logo__black {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/pp-logo-black.png */ \"./images/pp-logo-black.png\")) + \"); }\\n\\n.scroll-arrow {\\n  cursor: pointer; }\\n  .scroll-arrow:hover {\\n    animation-duration: 0.3s;\\n    animation-name: changewidth;\\n    animation-iteration-count: infinite;\\n    animation-direction: alternate-reverse; }\\n\\n@keyframes changewidth {\\n  0% {\\n    transform: rotate(90deg) scale(1, 2) translate(10px, 0); }\\n  100% {\\n    transform: rotate(90deg) scale(1, 2) translate(0, 0); } }\\n\\n@keyframes singlePulse {\\n  0% {\\n    transform: scale(1.1); }\\n  50% {\\n    transform: scale(1.2); }\\n  100% {\\n    transform: scale(1.1); } }\\n\\n@keyframes slideUp {\\n  0% {\\n    transform: translate(0, 100px);\\n    opacity: 0; }\\n  100% {\\n    transform: translate(0, 0);\\n    opacity: 1; } }\\n\\n@keyframes growWidth {\\n  0% {\\n    width: 0; }\\n  100% {\\n    width: 100%; } }\\n\\n.light-color-background {\\n  background: #fff; }\\n\\n.dark-color-background {\\n  background: #000; }\\n\\n.medium-color-background {\\n  background: #FF003D; }\\n\\n.preloader {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  z-index: 999;\\n  width: 100%;\\n  height: 100%;\\n  overflow: visible;\\n  background-color: #000; }\\n  .preloader .loader {\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    bottom: 0;\\n    margin: auto; }\\n    .preloader .loader .loader--animation {\\n      fill: none;\\n      stroke-width: 4px;\\n      stroke: #fff;\\n      stroke-dasharray: 40;\\n      stroke-dashoffset: 50%;\\n      animation: rotate 1s forwards 0s infinite; }\\n\\n.video-preloader {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  z-index: 999;\\n  width: 100%;\\n  height: 100%;\\n  overflow: visible;\\n  background-color: #000; }\\n  .video-preloader .video-loader {\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    bottom: 0;\\n    margin: auto; }\\n    .video-preloader .video-loader .video-loader--animation {\\n      fill: none;\\n      stroke-width: 4px;\\n      stroke: #fff;\\n      stroke-dasharray: 40;\\n      stroke-dashoffset: 50%;\\n      animation: rotate 1s forwards 0s infinite; }\\n\\n@keyframes rotate {\\n  to {\\n    stroke-dashoffset: 250%; } }\\n\\n.owl-theme .owl-dots .owl-dot {\\n  display: inline-flex; }\\n\\n.owl-theme .owl-dots .owl-dot.active span {\\n  background: #000;\\n  outline: none;\\n  height: 10px; }\\n\\n.owl-theme .owl-dots .owl-dot span {\\n  width: 4px;\\n  height: 4px;\\n  background-color: #fff;\\n  border: 1px solid #000;\\n  transition: .3s ease-in-out; }\\n\\n.owl-theme .owl-dots .owl-dot:hover span {\\n  background: #FF003D;\\n  border: 1px solid #FF003D;\\n  outline: none; }\\n\\n.owl-theme .owl-dots, .owl-theme .owl-dots .owl-dot.active, .owl-theme .owl-dots .owl-dot:hover {\\n  outline: none; }\\n\\n.owl-carousel .owl-video-wrapper {\\n  width: 100%;\\n  height: 88vh; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./scss/main.scss?./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--6-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\n/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n'use strict';\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n},{}],2:[function(require,module,exports){\n(function (process){\n// Generated by CoffeeScript 1.12.2\n(function() {\n  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;\n\n  if ((typeof performance !== \"undefined\" && performance !== null) && performance.now) {\n    module.exports = function() {\n      return performance.now();\n    };\n  } else if ((typeof process !== \"undefined\" && process !== null) && process.hrtime) {\n    module.exports = function() {\n      return (getNanoSeconds() - nodeLoadTime) / 1e6;\n    };\n    hrtime = process.hrtime;\n    getNanoSeconds = function() {\n      var hr;\n      hr = hrtime();\n      return hr[0] * 1e9 + hr[1];\n    };\n    moduleLoadTime = getNanoSeconds();\n    upTime = process.uptime() * 1e9;\n    nodeLoadTime = moduleLoadTime - upTime;\n  } else if (Date.now) {\n    module.exports = function() {\n      return Date.now() - loadTime;\n    };\n    loadTime = Date.now();\n  } else {\n    module.exports = function() {\n      return new Date().getTime() - loadTime;\n    };\n    loadTime = new Date().getTime();\n  }\n\n}).call(this);\n\n\n\n}).call(this,require('_process'))\n\n},{\"_process\":3}],3:[function(require,module,exports){\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n},{}],4:[function(require,module,exports){\n(function (global){\nvar now = require('performance-now')\n  , root = typeof window === 'undefined' ? global : window\n  , vendors = ['moz', 'webkit']\n  , suffix = 'AnimationFrame'\n  , raf = root['request' + suffix]\n  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]\n\nfor(var i = 0; !raf && i < vendors.length; i++) {\n  raf = root[vendors[i] + 'Request' + suffix]\n  caf = root[vendors[i] + 'Cancel' + suffix]\n      || root[vendors[i] + 'CancelRequest' + suffix]\n}\n\n// Some versions of FF have rAF but not cAF\nif(!raf || !caf) {\n  var last = 0\n    , id = 0\n    , queue = []\n    , frameDuration = 1000 / 60\n\n  raf = function(callback) {\n    if(queue.length === 0) {\n      var _now = now()\n        , next = Math.max(0, frameDuration - (_now - last))\n      last = next + _now\n      setTimeout(function() {\n        var cp = queue.slice(0)\n        // Clear queue here to prevent\n        // callbacks from appending listeners\n        // to the current frame's queue\n        queue.length = 0\n        for(var i = 0; i < cp.length; i++) {\n          if(!cp[i].cancelled) {\n            try{\n              cp[i].callback(last)\n            } catch(e) {\n              setTimeout(function() { throw e }, 0)\n            }\n          }\n        }\n      }, Math.round(next))\n    }\n    queue.push({\n      handle: ++id,\n      callback: callback,\n      cancelled: false\n    })\n    return id\n  }\n\n  caf = function(handle) {\n    for(var i = 0; i < queue.length; i++) {\n      if(queue[i].handle === handle) {\n        queue[i].cancelled = true\n      }\n    }\n  }\n}\n\nmodule.exports = function(fn) {\n  // Wrap in a new function to prevent\n  // `cancel` potentially being assigned\n  // to the native rAF function\n  return raf.call(root, fn)\n}\nmodule.exports.cancel = function() {\n  caf.apply(root, arguments)\n}\nmodule.exports.polyfill = function() {\n  root.requestAnimationFrame = raf\n  root.cancelAnimationFrame = caf\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n\n},{\"performance-now\":2}],5:[function(require,module,exports){\n'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n* Parallax.js\n* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org\n* @description Creates a parallax effect between an array of layers,\n*              driving the motion from the gyroscope output of a smartdevice.\n*              If no gyroscope is available, the cursor position is used.\n*/\n\nvar rqAnFr = require('raf');\nvar objectAssign = require('object-assign');\n\nvar helpers = {\n  propertyCache: {},\n  vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],\n\n  clamp: function clamp(value, min, max) {\n    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;\n  },\n  data: function data(element, name) {\n    return helpers.deserialize(element.getAttribute('data-' + name));\n  },\n  deserialize: function deserialize(value) {\n    if (value === 'true') {\n      return true;\n    } else if (value === 'false') {\n      return false;\n    } else if (value === 'null') {\n      return null;\n    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {\n      return parseFloat(value);\n    } else {\n      return value;\n    }\n  },\n  camelCase: function camelCase(value) {\n    return value.replace(/-+(.)?/g, function (match, character) {\n      return character ? character.toUpperCase() : '';\n    });\n  },\n  accelerate: function accelerate(element) {\n    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');\n    helpers.css(element, 'transform-style', 'preserve-3d');\n    helpers.css(element, 'backface-visibility', 'hidden');\n  },\n  transformSupport: function transformSupport(value) {\n    var element = document.createElement('div'),\n        propertySupport = false,\n        propertyValue = null,\n        featureSupport = false,\n        cssProperty = null,\n        jsProperty = null;\n    for (var i = 0, l = helpers.vendors.length; i < l; i++) {\n      if (helpers.vendors[i] !== null) {\n        cssProperty = helpers.vendors[i][0] + 'transform';\n        jsProperty = helpers.vendors[i][1] + 'Transform';\n      } else {\n        cssProperty = 'transform';\n        jsProperty = 'transform';\n      }\n      if (element.style[jsProperty] !== undefined) {\n        propertySupport = true;\n        break;\n      }\n    }\n    switch (value) {\n      case '2D':\n        featureSupport = propertySupport;\n        break;\n      case '3D':\n        if (propertySupport) {\n          var body = document.body || document.createElement('body'),\n              documentElement = document.documentElement,\n              documentOverflow = documentElement.style.overflow,\n              isCreatedBody = false;\n\n          if (!document.body) {\n            isCreatedBody = true;\n            documentElement.style.overflow = 'hidden';\n            documentElement.appendChild(body);\n            body.style.overflow = 'hidden';\n            body.style.background = '';\n          }\n\n          body.appendChild(element);\n          element.style[jsProperty] = 'translate3d(1px,1px,1px)';\n          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);\n          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';\n          documentElement.style.overflow = documentOverflow;\n          body.removeChild(element);\n\n          if (isCreatedBody) {\n            body.removeAttribute('style');\n            body.parentNode.removeChild(body);\n          }\n        }\n        break;\n    }\n    return featureSupport;\n  },\n  css: function css(element, property, value) {\n    var jsProperty = helpers.propertyCache[property];\n    if (!jsProperty) {\n      for (var i = 0, l = helpers.vendors.length; i < l; i++) {\n        if (helpers.vendors[i] !== null) {\n          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);\n        } else {\n          jsProperty = property;\n        }\n        if (element.style[jsProperty] !== undefined) {\n          helpers.propertyCache[property] = jsProperty;\n          break;\n        }\n      }\n    }\n    element.style[jsProperty] = value;\n  }\n};\n\nvar MAGIC_NUMBER = 30,\n    DEFAULTS = {\n  relativeInput: false,\n  clipRelativeInput: false,\n  inputElement: null,\n  hoverOnly: false,\n  calibrationThreshold: 100,\n  calibrationDelay: 500,\n  supportDelay: 500,\n  calibrateX: false,\n  calibrateY: true,\n  invertX: true,\n  invertY: true,\n  limitX: false,\n  limitY: false,\n  scalarX: 10.0,\n  scalarY: 10.0,\n  frictionX: 0.1,\n  frictionY: 0.1,\n  originX: 0.5,\n  originY: 0.5,\n  pointerEvents: false,\n  precision: 1,\n  onReady: null,\n  selector: null\n};\n\nvar Parallax = function () {\n  function Parallax(element, options) {\n    _classCallCheck(this, Parallax);\n\n    this.element = element;\n\n    var data = {\n      calibrateX: helpers.data(this.element, 'calibrate-x'),\n      calibrateY: helpers.data(this.element, 'calibrate-y'),\n      invertX: helpers.data(this.element, 'invert-x'),\n      invertY: helpers.data(this.element, 'invert-y'),\n      limitX: helpers.data(this.element, 'limit-x'),\n      limitY: helpers.data(this.element, 'limit-y'),\n      scalarX: helpers.data(this.element, 'scalar-x'),\n      scalarY: helpers.data(this.element, 'scalar-y'),\n      frictionX: helpers.data(this.element, 'friction-x'),\n      frictionY: helpers.data(this.element, 'friction-y'),\n      originX: helpers.data(this.element, 'origin-x'),\n      originY: helpers.data(this.element, 'origin-y'),\n      pointerEvents: helpers.data(this.element, 'pointer-events'),\n      precision: helpers.data(this.element, 'precision'),\n      relativeInput: helpers.data(this.element, 'relative-input'),\n      clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),\n      hoverOnly: helpers.data(this.element, 'hover-only'),\n      inputElement: document.querySelector(helpers.data(this.element, 'input-element')),\n      selector: helpers.data(this.element, 'selector')\n    };\n\n    for (var key in data) {\n      if (data[key] === null) {\n        delete data[key];\n      }\n    }\n\n    objectAssign(this, DEFAULTS, data, options);\n\n    if (!this.inputElement) {\n      this.inputElement = this.element;\n    }\n\n    this.calibrationTimer = null;\n    this.calibrationFlag = true;\n    this.enabled = false;\n    this.depthsX = [];\n    this.depthsY = [];\n    this.raf = null;\n\n    this.bounds = null;\n    this.elementPositionX = 0;\n    this.elementPositionY = 0;\n    this.elementWidth = 0;\n    this.elementHeight = 0;\n\n    this.elementCenterX = 0;\n    this.elementCenterY = 0;\n\n    this.elementRangeX = 0;\n    this.elementRangeY = 0;\n\n    this.calibrationX = 0;\n    this.calibrationY = 0;\n\n    this.inputX = 0;\n    this.inputY = 0;\n\n    this.motionX = 0;\n    this.motionY = 0;\n\n    this.velocityX = 0;\n    this.velocityY = 0;\n\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);\n    this.onDeviceMotion = this.onDeviceMotion.bind(this);\n    this.onOrientationTimer = this.onOrientationTimer.bind(this);\n    this.onMotionTimer = this.onMotionTimer.bind(this);\n    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);\n    this.onAnimationFrame = this.onAnimationFrame.bind(this);\n    this.onWindowResize = this.onWindowResize.bind(this);\n\n    this.windowWidth = null;\n    this.windowHeight = null;\n    this.windowCenterX = null;\n    this.windowCenterY = null;\n    this.windowRadiusX = null;\n    this.windowRadiusY = null;\n    this.portrait = false;\n    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);\n    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;\n    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;\n    this.orientationStatus = 0;\n    this.motionStatus = 0;\n\n    this.initialise();\n  }\n\n  _createClass(Parallax, [{\n    key: 'initialise',\n    value: function initialise() {\n      if (this.transform2DSupport === undefined) {\n        this.transform2DSupport = helpers.transformSupport('2D');\n        this.transform3DSupport = helpers.transformSupport('3D');\n      }\n\n      // Configure Context Styles\n      if (this.transform3DSupport) {\n        helpers.accelerate(this.element);\n      }\n\n      var style = window.getComputedStyle(this.element);\n      if (style.getPropertyValue('position') === 'static') {\n        this.element.style.position = 'relative';\n      }\n\n      // Pointer events\n      if (!this.pointerEvents) {\n        this.element.style.pointerEvents = 'none';\n      }\n\n      // Setup\n      this.updateLayers();\n      this.updateDimensions();\n      this.enable();\n      this.queueCalibration(this.calibrationDelay);\n    }\n  }, {\n    key: 'doReadyCallback',\n    value: function doReadyCallback() {\n      if (this.onReady) {\n        this.onReady();\n      }\n    }\n  }, {\n    key: 'updateLayers',\n    value: function updateLayers() {\n      if (this.selector) {\n        this.layers = this.element.querySelectorAll(this.selector);\n      } else {\n        this.layers = this.element.children;\n      }\n\n      if (!this.layers.length) {\n        console.warn('ParallaxJS: Your scene does not have any layers.');\n      }\n\n      this.depthsX = [];\n      this.depthsY = [];\n\n      for (var index = 0; index < this.layers.length; index++) {\n        var layer = this.layers[index];\n\n        if (this.transform3DSupport) {\n          helpers.accelerate(layer);\n        }\n\n        layer.style.position = index ? 'absolute' : 'relative';\n        layer.style.display = 'block';\n        layer.style.left = 0;\n        layer.style.top = 0;\n\n        var depth = helpers.data(layer, 'depth') || 0;\n        this.depthsX.push(helpers.data(layer, 'depth-x') || depth);\n        this.depthsY.push(helpers.data(layer, 'depth-y') || depth);\n      }\n    }\n  }, {\n    key: 'updateDimensions',\n    value: function updateDimensions() {\n      this.windowWidth = window.innerWidth;\n      this.windowHeight = window.innerHeight;\n      this.windowCenterX = this.windowWidth * this.originX;\n      this.windowCenterY = this.windowHeight * this.originY;\n      this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);\n      this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);\n    }\n  }, {\n    key: 'updateBounds',\n    value: function updateBounds() {\n      this.bounds = this.inputElement.getBoundingClientRect();\n      this.elementPositionX = this.bounds.left;\n      this.elementPositionY = this.bounds.top;\n      this.elementWidth = this.bounds.width;\n      this.elementHeight = this.bounds.height;\n      this.elementCenterX = this.elementWidth * this.originX;\n      this.elementCenterY = this.elementHeight * this.originY;\n      this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);\n      this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);\n    }\n  }, {\n    key: 'queueCalibration',\n    value: function queueCalibration(delay) {\n      clearTimeout(this.calibrationTimer);\n      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);\n    }\n  }, {\n    key: 'enable',\n    value: function enable() {\n      if (this.enabled) {\n        return;\n      }\n      this.enabled = true;\n\n      if (this.orientationSupport) {\n        this.portrait = false;\n        window.addEventListener('deviceorientation', this.onDeviceOrientation);\n        this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);\n      } else if (this.motionSupport) {\n        this.portrait = false;\n        window.addEventListener('devicemotion', this.onDeviceMotion);\n        this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);\n      } else {\n        this.calibrationX = 0;\n        this.calibrationY = 0;\n        this.portrait = false;\n        window.addEventListener('mousemove', this.onMouseMove);\n        this.doReadyCallback();\n      }\n\n      window.addEventListener('resize', this.onWindowResize);\n      this.raf = rqAnFr(this.onAnimationFrame);\n    }\n  }, {\n    key: 'disable',\n    value: function disable() {\n      if (!this.enabled) {\n        return;\n      }\n      this.enabled = false;\n\n      if (this.orientationSupport) {\n        window.removeEventListener('deviceorientation', this.onDeviceOrientation);\n      } else if (this.motionSupport) {\n        window.removeEventListener('devicemotion', this.onDeviceMotion);\n      } else {\n        window.removeEventListener('mousemove', this.onMouseMove);\n      }\n\n      window.removeEventListener('resize', this.onWindowResize);\n      rqAnFr.cancel(this.raf);\n    }\n  }, {\n    key: 'calibrate',\n    value: function calibrate(x, y) {\n      this.calibrateX = x === undefined ? this.calibrateX : x;\n      this.calibrateY = y === undefined ? this.calibrateY : y;\n    }\n  }, {\n    key: 'invert',\n    value: function invert(x, y) {\n      this.invertX = x === undefined ? this.invertX : x;\n      this.invertY = y === undefined ? this.invertY : y;\n    }\n  }, {\n    key: 'friction',\n    value: function friction(x, y) {\n      this.frictionX = x === undefined ? this.frictionX : x;\n      this.frictionY = y === undefined ? this.frictionY : y;\n    }\n  }, {\n    key: 'scalar',\n    value: function scalar(x, y) {\n      this.scalarX = x === undefined ? this.scalarX : x;\n      this.scalarY = y === undefined ? this.scalarY : y;\n    }\n  }, {\n    key: 'limit',\n    value: function limit(x, y) {\n      this.limitX = x === undefined ? this.limitX : x;\n      this.limitY = y === undefined ? this.limitY : y;\n    }\n  }, {\n    key: 'origin',\n    value: function origin(x, y) {\n      this.originX = x === undefined ? this.originX : x;\n      this.originY = y === undefined ? this.originY : y;\n    }\n  }, {\n    key: 'setInputElement',\n    value: function setInputElement(element) {\n      this.inputElement = element;\n      this.updateDimensions();\n    }\n  }, {\n    key: 'setPosition',\n    value: function setPosition(element, x, y) {\n      x = x.toFixed(this.precision) + 'px';\n      y = y.toFixed(this.precision) + 'px';\n      if (this.transform3DSupport) {\n        helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');\n      } else if (this.transform2DSupport) {\n        helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');\n      } else {\n        element.style.left = x;\n        element.style.top = y;\n      }\n    }\n  }, {\n    key: 'onOrientationTimer',\n    value: function onOrientationTimer() {\n      if (this.orientationSupport && this.orientationStatus === 0) {\n        this.disable();\n        this.orientationSupport = false;\n        this.enable();\n      } else {\n        this.doReadyCallback();\n      }\n    }\n  }, {\n    key: 'onMotionTimer',\n    value: function onMotionTimer() {\n      if (this.motionSupport && this.motionStatus === 0) {\n        this.disable();\n        this.motionSupport = false;\n        this.enable();\n      } else {\n        this.doReadyCallback();\n      }\n    }\n  }, {\n    key: 'onCalibrationTimer',\n    value: function onCalibrationTimer() {\n      this.calibrationFlag = true;\n    }\n  }, {\n    key: 'onWindowResize',\n    value: function onWindowResize() {\n      this.updateDimensions();\n    }\n  }, {\n    key: 'onAnimationFrame',\n    value: function onAnimationFrame() {\n      this.updateBounds();\n      var calibratedInputX = this.inputX - this.calibrationX,\n          calibratedInputY = this.inputY - this.calibrationY;\n      if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {\n        this.queueCalibration(0);\n      }\n      if (this.portrait) {\n        this.motionX = this.calibrateX ? calibratedInputY : this.inputY;\n        this.motionY = this.calibrateY ? calibratedInputX : this.inputX;\n      } else {\n        this.motionX = this.calibrateX ? calibratedInputX : this.inputX;\n        this.motionY = this.calibrateY ? calibratedInputY : this.inputY;\n      }\n      this.motionX *= this.elementWidth * (this.scalarX / 100);\n      this.motionY *= this.elementHeight * (this.scalarY / 100);\n      if (!isNaN(parseFloat(this.limitX))) {\n        this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);\n      }\n      if (!isNaN(parseFloat(this.limitY))) {\n        this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);\n      }\n      this.velocityX += (this.motionX - this.velocityX) * this.frictionX;\n      this.velocityY += (this.motionY - this.velocityY) * this.frictionY;\n      for (var index = 0; index < this.layers.length; index++) {\n        var layer = this.layers[index],\n            depthX = this.depthsX[index],\n            depthY = this.depthsY[index],\n            xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),\n            yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));\n        this.setPosition(layer, xOffset, yOffset);\n      }\n      this.raf = rqAnFr(this.onAnimationFrame);\n    }\n  }, {\n    key: 'rotate',\n    value: function rotate(beta, gamma) {\n      // Extract Rotation\n      var x = (beta || 0) / MAGIC_NUMBER,\n          //  -90 :: 90\n      y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180\n\n      // Detect Orientation Change\n      var portrait = this.windowHeight > this.windowWidth;\n      if (this.portrait !== portrait) {\n        this.portrait = portrait;\n        this.calibrationFlag = true;\n      }\n\n      if (this.calibrationFlag) {\n        this.calibrationFlag = false;\n        this.calibrationX = x;\n        this.calibrationY = y;\n      }\n\n      this.inputX = x;\n      this.inputY = y;\n    }\n  }, {\n    key: 'onDeviceOrientation',\n    value: function onDeviceOrientation(event) {\n      var beta = event.beta;\n      var gamma = event.gamma;\n      if (beta !== null && gamma !== null) {\n        this.orientationStatus = 1;\n        this.rotate(beta, gamma);\n      }\n    }\n  }, {\n    key: 'onDeviceMotion',\n    value: function onDeviceMotion(event) {\n      var beta = event.rotationRate.beta;\n      var gamma = event.rotationRate.gamma;\n      if (beta !== null && gamma !== null) {\n        this.motionStatus = 1;\n        this.rotate(beta, gamma);\n      }\n    }\n  }, {\n    key: 'onMouseMove',\n    value: function onMouseMove(event) {\n      var clientX = event.clientX,\n          clientY = event.clientY;\n\n      // reset input to center if hoverOnly is set and we're not hovering the element\n      if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {\n        this.inputX = 0;\n        this.inputY = 0;\n        return;\n      }\n\n      if (this.relativeInput) {\n        // Clip mouse coordinates inside element bounds.\n        if (this.clipRelativeInput) {\n          clientX = Math.max(clientX, this.elementPositionX);\n          clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);\n          clientY = Math.max(clientY, this.elementPositionY);\n          clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);\n        }\n        // Calculate input relative to the element.\n        if (this.elementRangeX && this.elementRangeY) {\n          this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;\n          this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;\n        }\n      } else {\n        // Calculate input relative to the window.\n        if (this.windowRadiusX && this.windowRadiusY) {\n          this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;\n          this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;\n        }\n      }\n    }\n  }, {\n    key: 'destroy',\n    value: function destroy() {\n      this.disable();\n\n      clearTimeout(this.calibrationTimer);\n      clearTimeout(this.detectionTimer);\n\n      this.element.removeAttribute('style');\n      for (var index = 0; index < this.layers.length; index++) {\n        this.layers[index].removeAttribute('style');\n      }\n\n      delete this.element;\n      delete this.layers;\n    }\n  }, {\n    key: 'version',\n    value: function version() {\n      return '3.1.0';\n    }\n  }]);\n\n  return Parallax;\n}();\n\nmodule.exports = Parallax;\n\n},{\"object-assign\":1,\"raf\":4}]},{},[5])(5)\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwic3JjL3BhcmFsbGF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNEO0FBQ0Q7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNBLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNEO0FBQ0YsT0FiRCxNQWFPO0FBQ0w7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGFBQWhCLElBQWlDLEtBQUssYUFBcEQ7QUFDQSxlQUFLLE1BQUwsR0FBYyxDQUFDLFVBQVUsS0FBSyxhQUFoQixJQUFpQyxLQUFLLGFBQXBEO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVM7QUFDUixXQUFLLE9BQUw7O0FBRUEsbUJBQWEsS0FBSyxnQkFBbEI7QUFDQSxtQkFBYSxLQUFLLGNBQWxCOztBQUVBLFdBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsT0FBN0I7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssTUFBTCxDQUFZLE1BQXhDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3ZELGFBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsZUFBbkIsQ0FBbUMsT0FBbkM7QUFDRDs7QUFFRCxhQUFPLEtBQUssT0FBWjtBQUNBLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sT0FBUDtBQUNEOzs7Ozs7QUFJSCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsIi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxuY29uc3QgcnFBbkZyID0gcmVxdWlyZSgncmFmJylcbmNvbnN0IG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCd3ZWJraXQnXSwgWyctbW96LScsJ01veiddLCBbJy1vLScsJ08nXSwgWyctbXMtJywnbXMnXV0sXG5cbiAgY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heFxuICAgICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxuICB9LFxuXG4gIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScrbmFtZSkpXG4gIH0sXG5cbiAgZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJ1xuICAgIH0pXG4gIH0sXG5cbiAgYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIH0sXG5cbiAgdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJ1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KVxuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSdcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuXG4gICAgICAgICAgaWYgKCBpc0NyZWF0ZWRCb2R5ICkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnRcbiAgfSxcblxuICBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldXG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZVxuICB9XG5cbn1cblxuY29uc3QgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgICBERUZBVUxUUyA9IHtcbiAgICAgICAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgICAgICBob3Zlck9ubHk6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICAgICAgICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gICAgICAgIHN1cHBvcnREZWxheTogNTAwLFxuICAgICAgICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WDogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WTogdHJ1ZSxcbiAgICAgICAgbGltaXRYOiBmYWxzZSxcbiAgICAgICAgbGltaXRZOiBmYWxzZSxcbiAgICAgICAgc2NhbGFyWDogMTAuMCxcbiAgICAgICAgc2NhbGFyWTogMTAuMCxcbiAgICAgICAgZnJpY3Rpb25YOiAwLjEsXG4gICAgICAgIGZyaWN0aW9uWTogMC4xLFxuICAgICAgICBvcmlnaW5YOiAwLjUsXG4gICAgICAgIG9yaWdpblk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gICAgICAgIHByZWNpc2lvbjogMSxcbiAgICAgICAgb25SZWFkeTogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGxcbiAgICAgIH1cblxuY2xhc3MgUGFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucylcblxuICAgIGlmKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsXG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG4gICAgdGhpcy5yYWYgPSBudWxsXG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDBcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDBcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwXG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcblxuICAgIHRoaXMuaW5wdXRYID0gMFxuICAgIHRoaXMuaW5wdXRZID0gMFxuXG4gICAgdGhpcy5tb3Rpb25YID0gMFxuICAgIHRoaXMubW90aW9uWSA9IDBcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMFxuICAgIHRoaXMudmVsb2NpdHlZID0gMFxuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGxcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKVxuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwXG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwXG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJylcbiAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpXG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcbiAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgIGlmKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2V0dXBcbiAgICB0aGlzLnVwZGF0ZUxheWVycygpXG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSlcbiAgfVxuXG4gIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcbiAgICAgIHRoaXMub25SZWFkeSgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGF5ZXJzKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5cbiAgICB9XG5cbiAgICBpZighdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpXG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpXG4gICAgICB9XG5cbiAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJ1xuICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwXG4gICAgICBsYXllci5zdHlsZS50b3AgPSAwXG5cbiAgICAgIGxldCBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMFxuICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKVxuICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSlcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGhcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpXG4gIH1cblxuICBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSlcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKVxuICB9XG5cbiAgY2FsaWJyYXRlKHgsIHkpIHtcbiAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4XG4gICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeVxuICB9XG5cbiAgaW52ZXJ0KHgsIHkpIHtcbiAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4XG4gICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeVxuICB9XG5cbiAgZnJpY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4XG4gICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHlcbiAgfVxuXG4gIHNjYWxhcih4LCB5KSB7XG4gICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeFxuICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHlcbiAgfVxuXG4gIGxpbWl0KHgsIHkpIHtcbiAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeFxuICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5XG4gIH1cblxuICBvcmlnaW4oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHhcbiAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5XG4gIH1cblxuICBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geFxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5XG4gICAgfVxuICB9XG5cbiAgb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25Nb3Rpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlQm91bmRzKClcbiAgICBsZXQgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZXG4gICAgaWYgKChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHx8IChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpKSB7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMClcbiAgICB9XG4gICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgfVxuICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApXG4gICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApXG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKVxuICAgIH1cbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWFxuICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KVxuICAgIH1cbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICByb3RhdGUoYmV0YSwgZ2FtbWEpe1xuICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICBsZXQgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLCAvLyAgLTkwIDo6IDkwXG4gICAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVIgLy8gLTE4MCA6OiAxODBcblxuICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGhcbiAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdFxuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHhcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geVxuICAgIH1cblxuICAgIHRoaXMuaW5wdXRYID0geFxuICAgIHRoaXMuaW5wdXRZID0geVxuICB9XG5cbiAgb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFlcblxuICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICBpZih0aGlzLmhvdmVyT25seSAmJlxuICAgICAgKChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCkgfHxcbiAgICAgIChjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDBcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKVxuICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICBpZih0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICBpZih0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcilcblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudFxuICAgIGRlbGV0ZSB0aGlzLmxheWVyc1xuICB9XG5cbiAgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzMuMS4wJ1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheFxuIl19\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/parallax-js/dist/parallax.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib??ref--6-2!../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./scss/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ });