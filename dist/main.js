/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentElement": () => (/* binding */ contentElement),
/* harmony export */   "createHtmlElement": () => (/* binding */ createHtmlElement)
/* harmony export */ });
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


const contentElement = document.getElementById('content');

function createHtmlElement(type, id, arrrayClasses, content) {
  //create a new html element
  const newElement = document.createElement(type);

  if (id) {
    //set element ID
    newElement.id = id;
  }

  if (arrrayClasses) {
    //set element class(es)
    arrrayClasses.forEach((customClass) => {
      newElement.classList.add(customClass);
    });
  }

  if (content) {
    //set HTML content for element
    newElement.innerText = content;
  }

  return newElement;
}

(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__.renderUI)();




/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderUI": () => (/* binding */ renderUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


function renderUI() {
  //   create header, main and footer containers and append to content element
  const headerContainer = document.createElement('header');
  const mainContainer = document.createElement('main');
  const footerContainer = document.createElement('footer');
  ___WEBPACK_IMPORTED_MODULE_0__.contentElement.appendChild(headerContainer);
  ___WEBPACK_IMPORTED_MODULE_0__.contentElement.appendChild(mainContainer);
  ___WEBPACK_IMPORTED_MODULE_0__.contentElement.appendChild(footerContainer);

  //   create and append logo to header
  const logoHeader = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', 'logo', null, 'todo');
  headerContainer.appendChild(logoHeader);

  //   create and append two different sections to divide the main container
  const projectsDisplay = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', 'projectsDisplay');
  const tasksDisplay = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', 'tasksDisplay');
  mainContainer.appendChild(projectsDisplay);
  mainContainer.appendChild(tasksDisplay);
}




/***/ })

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBUTs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlU7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUEwQjtBQUM1QixFQUFFLHlEQUEwQjtBQUM1QixFQUFFLHlEQUEwQjs7QUFFNUI7QUFDQSxxQkFBcUIsb0RBQWlCO0FBQ3RDOztBQUVBO0FBQ0EsMEJBQTBCLG9EQUFpQjtBQUMzQyx1QkFBdUIsb0RBQWlCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7VUN0QnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJVSSB9IGZyb20gJy4vbW9kdWxlcy9VSSc7XG5cbmNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycnJheUNsYXNzZXMsIGNvbnRlbnQpIHtcbiAgLy9jcmVhdGUgYSBuZXcgaHRtbCBlbGVtZW50XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGlmIChpZCkge1xuICAgIC8vc2V0IGVsZW1lbnQgSURcbiAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gIH1cblxuICBpZiAoYXJycmF5Q2xhc3Nlcykge1xuICAgIC8vc2V0IGVsZW1lbnQgY2xhc3MoZXMpXG4gICAgYXJycmF5Q2xhc3Nlcy5mb3JFYWNoKChjdXN0b21DbGFzcykgPT4ge1xuICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGN1c3RvbUNsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250ZW50KSB7XG4gICAgLy9zZXQgSFRNTCBjb250ZW50IGZvciBlbGVtZW50XG4gICAgbmV3RWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnJlbmRlclVJKCk7XG5cbmV4cG9ydCB7IGNvbnRlbnRFbGVtZW50LCBjcmVhdGVIdG1sRWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQsIGNvbnRlbnRFbGVtZW50IH0gZnJvbSAnLi4nO1xuXG5mdW5jdGlvbiByZW5kZXJVSSgpIHtcbiAgLy8gICBjcmVhdGUgaGVhZGVyLCBtYWluIGFuZCBmb290ZXIgY29udGFpbmVycyBhbmQgYXBwZW5kIHRvIGNvbnRlbnQgZWxlbWVudFxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gIC8vICAgY3JlYXRlIGFuZCBhcHBlbmQgbG9nbyB0byBoZWFkZXJcbiAgY29uc3QgbG9nb0hlYWRlciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMScsICdsb2dvJywgbnVsbCwgJ3RvZG8nKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29IZWFkZXIpO1xuXG4gIC8vICAgY3JlYXRlIGFuZCBhcHBlbmQgdHdvIGRpZmZlcmVudCBzZWN0aW9ucyB0byBkaXZpZGUgdGhlIG1haW4gY29udGFpbmVyXG4gIGNvbnN0IHByb2plY3RzRGlzcGxheSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAncHJvamVjdHNEaXNwbGF5Jyk7XG4gIGNvbnN0IHRhc2tzRGlzcGxheSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAndGFza3NEaXNwbGF5Jyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXNwbGF5KTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0Rpc3BsYXkpO1xufVxuXG5leHBvcnQgeyByZW5kZXJVSSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==