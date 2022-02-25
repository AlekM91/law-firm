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
    threshold: 0 // rootMargin: `-${navHeight}px`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnRlcnNlY3Rpb24gfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcblxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxyXG4vLyBIYW1idXJnZXIgTWVudVxyXG5sZXQgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xyXG5sZXQgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdiB1bCcpO1xyXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXItbWVudS1hY3RpdmUnKTtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1hY3RpdmUnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICBcclxufSlcclxuXHJcbi8vIFNtb290aCBTY3JvbGxcclxubWFpbk5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWxpbmsnKSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hhbWJ1cmdlci1tZW51LWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyBTdGlja3kgTmF2aWdhdGlvblxyXG5mdW5jdGlvbiBzdGlja3koKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcclxuICAgIGxldCBuYXZIZWlnaHQgPSBtYWluTmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzLCBvYnNlcnZlcil7XHJcbiAgICAgICAgY29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5JylcclxuICAgICAgICBcclxuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3Rpbmcpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKS5jbGFzc0xpc3QuYWRkKCdzdGlja3knKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIHtcclxuICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgIHRocmVzaG9sZDogMCxcclxuICAgICAgICAvLyByb290TWFyZ2luOiBgLSR7bmF2SGVpZ2h0fXB4YFxyXG4gICAgfSk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGhlYWRlcik7XHJcbn1cclxuc3RpY2t5KCk7XHJcblxyXG4vLyBFbGVtZW50cyBvbiBzY3JvbGxcclxuZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCgpIHtcclxuICAgIGxldCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcclxuICAgIGxldCBzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgICAgICBsZXQgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm4gXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlY3Rpb24taGlkZGVuJyk7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9LCB7XHJcbiAgICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuMVxyXG4gICAgfSlcclxuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgIHNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG4gICAgfSlcclxufVxyXG4vLyBzY3JvbGxFbGVtZW50KCk7XHJcblxyXG5cclxuLy8gU2xpZGVyXHJcbmZ1bmN0aW9uIHNsaWRlcigpIHtcclxuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xyXG4gICAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYnV0dG9uLWxlZnQnKTtcclxuICAgIGNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1idXR0b24tcmlnaHQnKTtcclxuICAgIGNvbnN0IHNsaWRlckRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWRvdHMnKTtcclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgY29uc3QgbWF4U2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEb3QoKSB7XHJcbiAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlckRvdHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1kb3RcIiBkYXRhLXNsaWRlPVwiJHtpfVwiPjwvYnV0dG9uPmApXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmVEb3Qoc2xpZGUpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWRvdCcpLmZvckVhY2goZG90ID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXItZG90LWFjdGl2ZScpKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyLWRvdFtkYXRhLXNsaWRlPVwiJHtzbGlkZX1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzbGlkZXItZG90LWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShzbGlkZSkge1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKChzLCBpKSA9PiBzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7MTAwICogKGkgLSBzbGlkZSl9JSlgKTtcclxuICAgICAgICBhY3RpdmVEb3Qoc2xpZGUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZURvdCgpXHJcbiAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID09PSBtYXhTbGlkZXMgLSAxID8gY3VycmVudFNsaWRlID0gMCA6IGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZTbGlkZSgpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPT0gMCA/IGN1cnJlbnRTbGlkZSA9IG1heFNsaWRlcyAtIDEgOiBjdXJyZW50U2xpZGUtLTtcclxuICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XHJcbiAgICBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZihlLmNvZGUgPT09IFwiQXJyb3dSaWdodFwiICkge1xyXG4gICAgICAgICAgICBuZXh0U2xpZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYoZS5jb2RlID09PSBcIkFycm93TGVmdFwiICkge1xyXG4gICAgICAgICAgICBwcmV2U2xpZGUoKTtcclxuICAgICAgICB9IFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpZGVyRG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlci1kb3QnKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSArZS50YXJnZXQuZGF0YXNldC5zbGlkZTtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERyYWcgZWZmZWN0IG9wdGlvbmFsXHJcbn1cclxuc2xpZGVyKCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfcHJvamVjdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Byb2plY3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs0ODZdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygyMzcpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiaW50ZXJzZWN0aW9uIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiaGFtYnVyZ2VyTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW5OYXYiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNvbnRhaW5zIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwicmVtb3ZlIiwic3RpY2t5IiwiaGVhZGVyIiwibmF2SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYWRkIiwicm9vdCIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJzY3JvbGxFbGVtZW50Iiwic2VjdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbk9ic2VydmVyIiwidW5vYnNlcnZlIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJzbGlkZXIiLCJzbGlkZXMiLCJidG5MZWZ0IiwiYnRuUmlnaHQiLCJzbGlkZXJEb3RzIiwiY3VycmVudFNsaWRlIiwibWF4U2xpZGVzIiwibGVuZ3RoIiwiY3JlYXRlRG90Iiwic2xpZGUiLCJpIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWN0aXZlRG90IiwiZG90IiwiZ29Ub1NsaWRlIiwicyIsInN0eWxlIiwidHJhbnNmb3JtIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiY29kZSIsImRhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9