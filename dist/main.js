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

  // create projectsDisplay's navigation menu
  const navItems = ['Inbox'];

  const navContainer = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('nav', 'navContainer');
  const navList = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', 'navList');
  navContainer.appendChild(navList);

  navItems.forEach((item) => {
    let newItem = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', null, ['navItem']);
    let newItemIcon = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
      'span',
      null,
      ['material-symbols-outlined'],
      'all_inbox'
    );
    let newItemButton = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', null, null, item);

    newItem.appendChild(newItemIcon);
    newItem.appendChild(newItemButton);
    navList.appendChild(newItem);
  });

  projectsDisplay.appendChild(navContainer);

  // create and append tasksDisplay's basic interface and create an "add new task" button

  const tasksDisplayInterface = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    'div',
    'tasksDisplayInterface'
  );

  const tasksDisplayTitle = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    'h2',
    'tasksDisplayTitle',
    null,
    'Inbox'
  );
  const addNewTaskButton = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'addNewTaskButton');
  const addNewTaskIcon = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    'span',
    null,
    ['material-symbols-outlined'],
    'add'
  );
  const addNewTaskText = (0,___WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, 'Add new task');

  addNewTaskButton.appendChild(addNewTaskIcon);
  addNewTaskButton.appendChild(addNewTaskText);

  tasksDisplayInterface.appendChild(tasksDisplayTitle);
  tasksDisplayInterface.appendChild(addNewTaskButton);

  tasksDisplay.appendChild(tasksDisplayInterface);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBUTs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlU7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUEwQjtBQUM1QixFQUFFLHlEQUEwQjtBQUM1QixFQUFFLHlEQUEwQjs7QUFFNUI7QUFDQSxxQkFBcUIsb0RBQWlCO0FBQ3RDOztBQUVBO0FBQ0EsMEJBQTBCLG9EQUFpQjtBQUMzQyx1QkFBdUIsb0RBQWlCOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLG9EQUFpQjtBQUN4QyxrQkFBa0Isb0RBQWlCO0FBQ25DOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFpQjtBQUNuQyxzQkFBc0Isb0RBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQWlCOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLGdDQUFnQyxvREFBaUI7QUFDakQ7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvREFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBaUI7QUFDNUMseUJBQXlCLG9EQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFpQjs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7O1VDN0VwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyVUkgfSBmcm9tICcuL21vZHVsZXMvVUknO1xuXG5jb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsIGlkLCBhcnJyYXlDbGFzc2VzLCBjb250ZW50KSB7XG4gIC8vY3JlYXRlIGEgbmV3IGh0bWwgZWxlbWVudFxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICBpZiAoaWQpIHtcbiAgICAvL3NldCBlbGVtZW50IElEXG4gICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICB9XG5cbiAgaWYgKGFycnJheUNsYXNzZXMpIHtcbiAgICAvL3NldCBlbGVtZW50IGNsYXNzKGVzKVxuICAgIGFycnJheUNsYXNzZXMuZm9yRWFjaCgoY3VzdG9tQ2xhc3MpID0+IHtcbiAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjdXN0b21DbGFzcyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY29udGVudCkge1xuICAgIC8vc2V0IEhUTUwgY29udGVudCBmb3IgZWxlbWVudFxuICAgIG5ld0VsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5yZW5kZXJVSSgpO1xuXG5leHBvcnQgeyBjb250ZW50RWxlbWVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50LCBjb250ZW50RWxlbWVudCB9IGZyb20gJy4uJztcblxuZnVuY3Rpb24gcmVuZGVyVUkoKSB7XG4gIC8vICAgY3JlYXRlIGhlYWRlciwgbWFpbiBhbmQgZm9vdGVyIGNvbnRhaW5lcnMgYW5kIGFwcGVuZCB0byBjb250ZW50IGVsZW1lbnRcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcblxuICAvLyAgIGNyZWF0ZSBhbmQgYXBwZW5kIGxvZ28gdG8gaGVhZGVyXG4gIGNvbnN0IGxvZ29IZWFkZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDEnLCAnbG9nbycsIG51bGwsICd0b2RvJyk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSGVhZGVyKTtcblxuICAvLyAgIGNyZWF0ZSBhbmQgYXBwZW5kIHR3byBkaWZmZXJlbnQgc2VjdGlvbnMgdG8gZGl2aWRlIHRoZSBtYWluIGNvbnRhaW5lclxuICBjb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ3Byb2plY3RzRGlzcGxheScpO1xuICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ3Rhc2tzRGlzcGxheScpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXNwbGF5KTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0Rpc3BsYXkpO1xuXG4gIC8vIGNyZWF0ZSBwcm9qZWN0c0Rpc3BsYXkncyBuYXZpZ2F0aW9uIG1lbnVcbiAgY29uc3QgbmF2SXRlbXMgPSBbJ0luYm94J107XG5cbiAgY29uc3QgbmF2Q29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ25hdicsICduYXZDb250YWluZXInKTtcbiAgY29uc3QgbmF2TGlzdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICduYXZMaXN0Jyk7XG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgbGV0IG5ld0l0ZW0gPSBjcmVhdGVIdG1sRWxlbWVudCgnbGknLCBudWxsLCBbJ25hdkl0ZW0nXSk7XG4gICAgbGV0IG5ld0l0ZW1JY29uID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBudWxsLFxuICAgICAgWydtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJ10sXG4gICAgICAnYWxsX2luYm94J1xuICAgICk7XG4gICAgbGV0IG5ld0l0ZW1CdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgbnVsbCwgaXRlbSk7XG5cbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0l0ZW1JY29uKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0l0ZW1CdXR0b24pO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gIH0pO1xuXG4gIHByb2plY3RzRGlzcGxheS5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRhc2tzRGlzcGxheSdzIGJhc2ljIGludGVyZmFjZSBhbmQgY3JlYXRlIGFuIFwiYWRkIG5ldyB0YXNrXCIgYnV0dG9uXG5cbiAgY29uc3QgdGFza3NEaXNwbGF5SW50ZXJmYWNlID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgJ3Rhc2tzRGlzcGxheUludGVyZmFjZSdcbiAgKTtcblxuICBjb25zdCB0YXNrc0Rpc3BsYXlUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICdoMicsXG4gICAgJ3Rhc2tzRGlzcGxheVRpdGxlJyxcbiAgICBudWxsLFxuICAgICdJbmJveCdcbiAgKTtcbiAgY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnYWRkTmV3VGFza0J1dHRvbicpO1xuICBjb25zdCBhZGROZXdUYXNrSWNvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICdzcGFuJyxcbiAgICBudWxsLFxuICAgIFsnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCddLFxuICAgICdhZGQnXG4gICk7XG4gIGNvbnN0IGFkZE5ld1Rhc2tUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCBudWxsLCBudWxsLCAnQWRkIG5ldyB0YXNrJyk7XG5cbiAgYWRkTmV3VGFza0J1dHRvbi5hcHBlbmRDaGlsZChhZGROZXdUYXNrSWNvbik7XG4gIGFkZE5ld1Rhc2tCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTmV3VGFza1RleHQpO1xuXG4gIHRhc2tzRGlzcGxheUludGVyZmFjZS5hcHBlbmRDaGlsZCh0YXNrc0Rpc3BsYXlUaXRsZSk7XG4gIHRhc2tzRGlzcGxheUludGVyZmFjZS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnV0dG9uKTtcblxuICB0YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza3NEaXNwbGF5SW50ZXJmYWNlKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyVUkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=