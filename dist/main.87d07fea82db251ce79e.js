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
hamburgerMenu.addEventListener('click', function (e) {
  hamburgerMenu.classList.toggle('hamburger-menu-active');
  mainNav.classList.toggle('menu-active');
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
}

scrollElement(); // Slider

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW50ZXJzZWN0aW9uIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xyXG5cclxuaWYobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cclxuLy8gSGFtYnVyZ2VyIE1lbnVcclxubGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcclxubGV0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYgdWwnKTtcclxuaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLW1lbnUtYWN0aXZlJyk7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtYWN0aXZlJylcclxufSlcclxuXHJcbi8vIFNtb290aCBTY3JvbGxcclxubWFpbk5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWxpbmsnKSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hhbWJ1cmdlci1tZW51LWFjdGl2ZScpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gU3RpY2t5IE5hdmlnYXRpb25cclxuZnVuY3Rpb24gc3RpY2t5KCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXHJcbiAgICBsZXQgbmF2SGVpZ2h0ID0gbWFpbk5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpe1xyXG4gICAgICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpXHJcbiAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCB7XHJcbiAgICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgcm9vdE1hcmdpbjogYC0ke25hdkhlaWdodH1weGBcclxuICAgIH0pO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShoZWFkZXIpO1xyXG59XHJcbnN0aWNreSgpO1xyXG5cclxuLy8gRWxlbWVudHMgb24gc2Nyb2xsXHJcbmZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoKSB7XHJcbiAgICBsZXQgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XHJcbiAgICBsZXQgc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuIFxyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWN0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSwge1xyXG4gICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjFcclxuICAgIH0pXHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oaWRkZW4nKTtcclxuICAgICAgICBzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxuICAgIH0pXHJcbn1cclxuc2Nyb2xsRWxlbWVudCgpO1xyXG5cclxuXHJcbi8vIFNsaWRlclxyXG5mdW5jdGlvbiBzbGlkZXIoKSB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKTtcclxuICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWJ1dHRvbi1sZWZ0Jyk7XHJcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYnV0dG9uLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCBzbGlkZXJEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1kb3RzJyk7XHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IG1heFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRG90KCkge1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXJEb3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxidXR0b24gY2xhc3M9XCJzbGlkZXItZG90XCIgZGF0YS1zbGlkZT1cIiR7aX1cIj48L2J1dHRvbj5gKVxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZlRG90KHNsaWRlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1kb3QnKS5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyLWRvdC1hY3RpdmUnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNsaWRlci1kb3RbZGF0YS1zbGlkZT1cIiR7c2xpZGV9XCJdYCkuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWRvdC1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnb1RvU2xpZGUoc2xpZGUpIHtcclxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgocywgaSkgPT4gcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpIC0gc2xpZGUpfSUpYCk7XHJcbiAgICAgICAgYWN0aXZlRG90KHNsaWRlKVxyXG4gICAgfVxyXG5cclxuXHJcbiBcclxuICAgIFxyXG4gICAgY3JlYXRlRG90KClcclxuICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPT09IG1heFNsaWRlcyAtIDEgPyBjdXJyZW50U2xpZGUgPSAwIDogY3VycmVudFNsaWRlKys7XHJcbiAgICAgICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldlNsaWRlKCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9PSAwID8gY3VycmVudFNsaWRlID0gbWF4U2xpZGVzIC0gMSA6IGN1cnJlbnRTbGlkZS0tO1xyXG4gICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcclxuICAgIGJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmKGUuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIgKSB7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZihlLmNvZGUgPT09IFwiQXJyb3dMZWZ0XCIgKSB7XHJcbiAgICAgICAgICAgIHByZXZTbGlkZSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGlkZXJEb3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyLWRvdCcpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9ICtlLnRhcmdldC5kYXRhc2V0LnNsaWRlO1xyXG4gICAgICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRHJhZyBlZmZlY3Qgb3B0aW9uYWxcclxufVxyXG5zbGlkZXIoKTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja19wcm9qZWN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfcHJvamVjdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzQ4Nl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNykpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJpbnRlcnNlY3Rpb24iLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJoYW1idXJnZXJNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpbk5hdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjb250YWlucyIsImlkIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInJlbW92ZSIsInN0aWNreSIsImhlYWRlciIsIm5hdkhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFkZCIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsInNjcm9sbEVsZW1lbnQiLCJzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9uT2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJmb3JFYWNoIiwic2VjdGlvbiIsInNsaWRlciIsInNsaWRlcyIsImJ0bkxlZnQiLCJidG5SaWdodCIsInNsaWRlckRvdHMiLCJjdXJyZW50U2xpZGUiLCJtYXhTbGlkZXMiLCJsZW5ndGgiLCJjcmVhdGVEb3QiLCJzbGlkZSIsImkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhY3RpdmVEb3QiLCJkb3QiLCJnb1RvU2xpZGUiLCJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJjb2RlIiwiZGF0YXNldCJdLCJzb3VyY2VSb290IjoiIn0=