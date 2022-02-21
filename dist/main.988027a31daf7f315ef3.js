/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 237:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




if (false) {} // Hamburger Menu


var hamburgerMenu = document.querySelector('.hamburger-menu');
var mainNav = document.querySelector('.main-nav ul');
var body = document.querySelector('body');
hamburgerMenu.addEventListener('click', function (e) {
  hamburgerMenu.classList.toggle('hamburger-menu-active');
  mainNav.classList.toggle('menu-active');
  body.classList.toggle('no-scroll');
}); // Smooth Scroll

mainNav.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    var id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
    mainNav.classList.remove('menu-active');
    hamburgerMenu.classList.remove('hamburger-menu-active');
    body.classList.remove('no-scroll');
  }
}); // Sticky Navigation

function sticky() {
  var header = document.querySelector('header');
  var navHeight = mainNav.getBoundingClientRect().height;
  var observer = new IntersectionObserver(function (entries, observer) {
    var _entries = _slicedToArray(entries, 1),
        entry = _entries[0];

    document.querySelector('.main-nav').classList.remove('sticky');

    if (!entry.isIntersecting) {
      document.querySelector('.main-nav').classList.add('sticky');
    }
  }, {
    root: null,
    threshold: 0,
    rootMargin: "-".concat(navHeight, "px")
  });
  observer.observe(header);
}

sticky(); // Elements on scroll

function scrollElement() {
  var sections = document.querySelectorAll('section');
  var sectionObserver = new IntersectionObserver(function (entries, observer) {
    var _entries2 = _slicedToArray(entries, 1),
        entry = _entries2[0];

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden');
    observer.unobserve(entry.target);
  }, {
    root: null,
    threshold: 0.1
  });
  sections.forEach(function (section) {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
  });
} // scrollElement();
// Slider


function slider() {
  var slides = document.querySelectorAll('.slide');
  var btnLeft = document.querySelector('.slider-button-left');
  var btnRight = document.querySelector('.slider-button-right');
  var sliderDots = document.querySelector('.slider-dots');
  var currentSlide = 0;
  var maxSlides = slides.length;

  function createDot() {
    slides.forEach(function (slide, i) {
      sliderDots.insertAdjacentHTML('beforeend', "<button class=\"slider-dot\" data-slide=\"".concat(i, "\"></button>"));
    });
  }

  function activeDot(slide) {
    document.querySelectorAll('.slider-dot').forEach(function (dot) {
      return dot.classList.remove('slider-dot-active');
    });
    document.querySelector(".slider-dot[data-slide=\"".concat(slide, "\"]")).classList.add('slider-dot-active');
  }

  function goToSlide(slide) {
    slides.forEach(function (s, i) {
      return s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
    activeDot(slide);
  }

  createDot();
  goToSlide(currentSlide);

  function nextSlide() {
    currentSlide === maxSlides - 1 ? currentSlide = 0 : currentSlide++;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide == 0 ? currentSlide = maxSlides - 1 : currentSlide--;
    goToSlide(currentSlide);
  }

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    e.preventDefault();

    if (e.code === "ArrowRight") {
      nextSlide();
    } else if (e.code === "ArrowLeft") {
      prevSlide();
    }
  });
  sliderDots.addEventListener('click', function (e) {
    if (e.target.classList.contains('slider-dot')) {
      currentSlide = +e.target.dataset.slide;
      goToSlide(currentSlide);
    }
  }); // Drag effect optional
}

slider();

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [486], () => (__webpack_require__(237)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW50ZXJzZWN0aW9uIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xyXG5cclxuaWYobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cclxuLy8gSGFtYnVyZ2VyIE1lbnVcclxubGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcclxubGV0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYgdWwnKTtcclxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLW1lbnUtYWN0aXZlJyk7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtYWN0aXZlJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xyXG4gICAgXHJcbn0pXHJcblxyXG4vLyBTbW9vdGggU2Nyb2xsXHJcbm1haW5OYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1saW5rJykpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KTtcclxuICAgICAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYWN0aXZlJyk7XHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoYW1idXJnZXItbWVudS1hY3RpdmUnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gU3RpY2t5IE5hdmlnYXRpb25cclxuZnVuY3Rpb24gc3RpY2t5KCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXHJcbiAgICBsZXQgbmF2SGVpZ2h0ID0gbWFpbk5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpe1xyXG4gICAgICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpXHJcbiAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCB7XHJcbiAgICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgcm9vdE1hcmdpbjogYC0ke25hdkhlaWdodH1weGBcclxuICAgIH0pO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShoZWFkZXIpO1xyXG59XHJcbnN0aWNreSgpO1xyXG5cclxuLy8gRWxlbWVudHMgb24gc2Nyb2xsXHJcbmZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoKSB7XHJcbiAgICBsZXQgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XHJcbiAgICBsZXQgc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuIFxyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWN0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSwge1xyXG4gICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjFcclxuICAgIH0pXHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oaWRkZW4nKTtcclxuICAgICAgICBzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxuICAgIH0pXHJcbn1cclxuLy8gc2Nyb2xsRWxlbWVudCgpO1xyXG5cclxuXHJcbi8vIFNsaWRlclxyXG5mdW5jdGlvbiBzbGlkZXIoKSB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKTtcclxuICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWJ1dHRvbi1sZWZ0Jyk7XHJcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYnV0dG9uLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCBzbGlkZXJEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1kb3RzJyk7XHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IG1heFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRG90KCkge1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXJEb3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxidXR0b24gY2xhc3M9XCJzbGlkZXItZG90XCIgZGF0YS1zbGlkZT1cIiR7aX1cIj48L2J1dHRvbj5gKVxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZlRG90KHNsaWRlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1kb3QnKS5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyLWRvdC1hY3RpdmUnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNsaWRlci1kb3RbZGF0YS1zbGlkZT1cIiR7c2xpZGV9XCJdYCkuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWRvdC1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnb1RvU2xpZGUoc2xpZGUpIHtcclxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgocywgaSkgPT4gcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpIC0gc2xpZGUpfSUpYCk7XHJcbiAgICAgICAgYWN0aXZlRG90KHNsaWRlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVEb3QoKVxyXG4gICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9PT0gbWF4U2xpZGVzIC0gMSA/IGN1cnJlbnRTbGlkZSA9IDAgOiBjdXJyZW50U2xpZGUrKztcclxuICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID09IDAgPyBjdXJyZW50U2xpZGUgPSBtYXhTbGlkZXMgLSAxIDogY3VycmVudFNsaWRlLS07XHJcbiAgICAgICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xyXG4gICAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYoZS5jb2RlID09PSBcIkFycm93UmlnaHRcIiApIHtcclxuICAgICAgICAgICAgbmV4dFNsaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIiApIHtcclxuICAgICAgICAgICAgcHJldlNsaWRlKCk7XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWRlckRvdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXItZG90JykpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gK2UudGFyZ2V0LmRhdGFzZXQuc2xpZGU7XHJcbiAgICAgICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEcmFnIGVmZmVjdCBvcHRpb25hbFxyXG59XHJcbnNsaWRlcigpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Byb2plY3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja19wcm9qZWN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNDg2XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oMjM3KSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImludGVyc2VjdGlvbiIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsImhhbWJ1cmdlck1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluTmF2IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjb250YWlucyIsImlkIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInJlbW92ZSIsInN0aWNreSIsImhlYWRlciIsIm5hdkhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFkZCIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsInNjcm9sbEVsZW1lbnQiLCJzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9uT2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJmb3JFYWNoIiwic2VjdGlvbiIsInNsaWRlciIsInNsaWRlcyIsImJ0bkxlZnQiLCJidG5SaWdodCIsInNsaWRlckRvdHMiLCJjdXJyZW50U2xpZGUiLCJtYXhTbGlkZXMiLCJsZW5ndGgiLCJjcmVhdGVEb3QiLCJzbGlkZSIsImkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhY3RpdmVEb3QiLCJkb3QiLCJnb1RvU2xpZGUiLCJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJjb2RlIiwiZGF0YXNldCJdLCJzb3VyY2VSb290IjoiIn0=