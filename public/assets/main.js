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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

$(document).ready(function () {

  $("#owo").on('load', function () {
    UIkit.scrollspy(".tf-2", function () {
      UIkit.util.on('.tf-2', 'inview', function () {
        $('.tf-2').css({ 'bottom': '150px',
          'right': '300px',
          'height': 'calc(100vh - 300px)',
          'transition-delay': '0.5s'
        });
      });
    });

    UIkit.scrollspy("#title-heading", function () {
      UIkit.util.on('#title-heading', 'inview', function () {
        $('#title-heading>span:nth-child(1)').css({ 'padding-top': '0', 'transition-delay': '1.4s' });
        $('#title-heading>span:nth-child(3)').css({ 'padding-top': '0', 'transition-delay': '1.8s' });
        console.log('in');
      });
    });

    UIkit.scrollspy(".tf-1", function () {
      UIkit.util.on('.tf-1', 'inview', function () {
        $('.tf-1').css({ 'height': '300px', 'width': '300px', 'transition-delay': '2s' });
        $('.tf-1>div').css({ 'opacity': '1', 'transition-delay': '1.6s' });
        console.log('in-tf1');
      });
    });

    UIkit.scrollspy(".tr-3", function () {
      UIkit.util.on('.tr-3', 'inview', function () {
        $('.tr-3').css({ 'height': '300px', 'width': '300px', 'transition-delay': '2.4s' });
        $('.tr-3>div').css({ 'opacity': '1', 'transition-delay': '2s' });
        console.log('intr3');
      });
    });

    UIkit.scrollspy(".tr-2", function () {
      UIkit.util.on('.tr-2', 'inview', function () {
        $('.tr-2').css({ 'height': '300px', 'width': '300px', 'transition-delay': '2.8s' });
        $('.tr-2>div').css({ 'opacity': '1', 'transition-delay': '2.4s' });
      });
    });

    $("#service-item-a").on('load', function () {
      UIkit.scrollspy("#service-item-a", function () {
        UIkit.util.on('#service-item-a', 'inview', function () {
          $('.overlay-show').css({ 'width': '0' });
        });
      });
    });

    $("#service-item-b").on('load', function () {
      UIkit.scrollspy("#service-item-b", function () {
        UIkit.util.on('#service-item-b', 'inview', function () {
          $('.overlay-show-b').css({ 'width': '0' });
          console.log('trigger b');
        });
      });
    });

    $("#service-item-c").on('load', function () {
      UIkit.scrollspy("#service-item-c", function () {
        UIkit.util.on('#service-item-c', 'inview', function () {
          $('.overlay-show-c').css({ 'width': '0' });
        });
      });
    });

    $("#service-item-d").on('load', function () {
      UIkit.scrollspy("#service-item-d", function () {
        UIkit.util.on('#service-item-d', 'inview', function () {
          $('.overlay-show-d').css({ 'width': '0' });
        });
      });
    });
  });

  //Modal navbar

  $(document).ready(function () {

    $('.toggle-nav-modal').click(function () {

      console.log('clicked');

      $('.modal-nav').css({
        'height': '90vh',
        'transition-delay': '0.4s'
      });

      $('.modal-nav>div').css({ 'visibility': 'visible', 'opacity': '1', 'transition-delay': '0.6s' });
    });

    $('.close-nav-modal').click(function () {

      console.log('clicked');

      $('.modal-nav').css({
        'height': '0',
        'transition-delay': '0.4s'
      });

      $('.modal-nav>div').css({ 'visibility': 'collapse', 'opacity': '0', 'transition-delay': '0.4s' });
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDI5NDQ3ZTEyYzg4MjA0MTFkYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsIlVJa2l0Iiwic2Nyb2xsc3B5IiwidXRpbCIsImNzcyIsImNvbnNvbGUiLCJsb2ciLCJjbGljayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVTs7QUFFNUJGLElBQUUsTUFBRixFQUFVRyxFQUFWLENBQWEsTUFBYixFQUFvQixZQUFVO0FBQzVCQyxVQUFNQyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCLFlBQVU7QUFDakNELFlBQU1FLElBQU4sQ0FBV0gsRUFBWCxDQUFjLE9BQWQsRUFBdUIsUUFBdkIsRUFBaUMsWUFBWTtBQUMxQ0gsVUFBRSxPQUFGLEVBQVdPLEdBQVgsQ0FDRSxFQUFDLFVBQVMsT0FBVjtBQUNDLG1CQUFTLE9BRFY7QUFFQyxvQkFBVSxxQkFGWDtBQUdDLDhCQUFvQjtBQUhyQixTQURGO0FBT0YsT0FSRDtBQVNELEtBVkQ7O0FBWUFILFVBQU1DLFNBQU4sQ0FBZ0IsZ0JBQWhCLEVBQWtDLFlBQVU7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aEIsRUFBNkIsV0FBWSxHQUF6QyxFQUE2QyxvQkFBb0IsTUFBakUsRUFBeEI7QUFFRixLQVhEO0FBYUQsR0E1QkQ7QUFpQ0QsQ0FySEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL21haW4uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDI5NDQ3ZTEyYzg4MjA0MTFkYmEiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4kKFwiI293b1wiKS5vbignbG9hZCcsZnVuY3Rpb24oKXtcbiAgVUlraXQuc2Nyb2xsc3B5KFwiLnRmLTJcIiwgZnVuY3Rpb24oKXtcbiAgICBVSWtpdC51dGlsLm9uKCcudGYtMicsICdpbnZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgJCgnLnRmLTInKS5jc3MoXG4gICAgICAgICB7J2JvdHRvbSc6JzE1MHB4JyxcbiAgICAgICAgICAncmlnaHQnOiAnMzAwcHgnLFxuICAgICAgICAgICdoZWlnaHQnOiAnY2FsYygxMDB2aCAtIDMwMHB4KScsXG4gICAgICAgICAgJ3RyYW5zaXRpb24tZGVsYXknOiAnMC41cydcbiAgICAgICAgIH1cbiAgICAgICApO1xuICAgIH0pO1xuICB9KTtcblxuICBVSWtpdC5zY3JvbGxzcHkoXCIjdGl0bGUtaGVhZGluZ1wiLCBmdW5jdGlvbigpe1xuICAgIFVJa2l0LnV0aWwub24oJyN0aXRsZS1oZWFkaW5nJywgJ2ludmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAkKCcjdGl0bGUtaGVhZGluZz5zcGFuOm50aC1jaGlsZCgxKScpLmNzcyh7J3BhZGRpbmctdG9wJzonMCcsICd0cmFuc2l0aW9uLWRlbGF5JzogJzEuNHMnfSk7XG4gICAgICAgJCgnI3RpdGxlLWhlYWRpbmc+c3BhbjpudGgtY2hpbGQoMyknKS5jc3MoeydwYWRkaW5nLXRvcCc6JzAnLCAndHJhbnNpdGlvbi1kZWxheSc6ICcxLjhzJ30pO1xuICAgICAgIGNvbnNvbGUubG9nKCdpbicpO1xuICAgIH0pO1xuICB9KTtcblxuICBVSWtpdC5zY3JvbGxzcHkoXCIudGYtMVwiLCBmdW5jdGlvbigpe1xuICAgIFVJa2l0LnV0aWwub24oJy50Zi0xJywgJ2ludmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAkKCcudGYtMScpLmNzcyh7J2hlaWdodCcgOiAnMzAwcHgnLCAnd2lkdGgnIDogJzMwMHB4JywgJ3RyYW5zaXRpb24tZGVsYXknOiAnMnMnfSk7XG4gICAgICAgJCgnLnRmLTE+ZGl2JykuY3NzKHsnb3BhY2l0eSc6JzEnLCAndHJhbnNpdGlvbi1kZWxheSc6ICcxLjZzJ30pO1xuICAgICAgIGNvbnNvbGUubG9nKCdpbi10ZjEnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgVUlraXQuc2Nyb2xsc3B5KFwiLnRyLTNcIiwgZnVuY3Rpb24oKXtcbiAgICBVSWtpdC51dGlsLm9uKCcudHItMycsICdpbnZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgJCgnLnRyLTMnKS5jc3MoeydoZWlnaHQnIDogJzMwMHB4JywgJ3dpZHRoJyA6ICczMDBweCcsICd0cmFuc2l0aW9uLWRlbGF5JzogJzIuNHMnfSk7XG4gICAgICAgJCgnLnRyLTM+ZGl2JykuY3NzKHsnb3BhY2l0eSc6JzEnLCAndHJhbnNpdGlvbi1kZWxheSc6ICcycyd9KTtcbiAgICAgICBjb25zb2xlLmxvZygnaW50cjMnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgVUlraXQuc2Nyb2xsc3B5KFwiLnRyLTJcIiwgZnVuY3Rpb24oKXtcbiAgICBVSWtpdC51dGlsLm9uKCcudHItMicsICdpbnZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgJCgnLnRyLTInKS5jc3MoeydoZWlnaHQnIDogJzMwMHB4JywgJ3dpZHRoJyA6ICczMDBweCcsICd0cmFuc2l0aW9uLWRlbGF5JzogJzIuOHMnfSk7XG4gICAgICAgJCgnLnRyLTI+ZGl2JykuY3NzKHsnb3BhY2l0eSc6JzEnLCAndHJhbnNpdGlvbi1kZWxheSc6ICcyLjRzJ30pO1xuICAgIH0pO1xuICB9KTtcblxuICAkKFwiI3NlcnZpY2UtaXRlbS1hXCIpLm9uKCdsb2FkJyxmdW5jdGlvbigpe1xuICBVSWtpdC5zY3JvbGxzcHkoXCIjc2VydmljZS1pdGVtLWFcIiwgZnVuY3Rpb24oKXtcbiAgICBVSWtpdC51dGlsLm9uKCcjc2VydmljZS1pdGVtLWEnLCAnaW52aWV3JywgZnVuY3Rpb24gKCkge1xuICAgICAgICQoJy5vdmVybGF5LXNob3cnKS5jc3Moeyd3aWR0aCcgOiAnMCd9KTtcbiAgICB9KTtcbiAgfSk7XG4gIH0pO1xuXG5cbiAgJChcIiNzZXJ2aWNlLWl0ZW0tYlwiKS5vbignbG9hZCcsZnVuY3Rpb24oKXtcbiAgVUlraXQuc2Nyb2xsc3B5KFwiI3NlcnZpY2UtaXRlbS1iXCIsIGZ1bmN0aW9uKCl7XG4gICAgVUlraXQudXRpbC5vbignI3NlcnZpY2UtaXRlbS1iJywgJ2ludmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAkKCcub3ZlcmxheS1zaG93LWInKS5jc3Moeyd3aWR0aCcgOiAnMCd9KTtcbiAgICAgICBjb25zb2xlLmxvZygndHJpZ2dlciBiJyk7XG4gICAgfSk7XG4gIH0pO1xuICB9KTtcblxuICAkKFwiI3NlcnZpY2UtaXRlbS1jXCIpLm9uKCdsb2FkJyxmdW5jdGlvbigpe1xuICBVSWtpdC5zY3JvbGxzcHkoXCIjc2VydmljZS1pdGVtLWNcIiwgZnVuY3Rpb24oKXtcbiAgICBVSWtpdC51dGlsLm9uKCcjc2VydmljZS1pdGVtLWMnLCAnaW52aWV3JywgZnVuY3Rpb24gKCkge1xuICAgICAgICQoJy5vdmVybGF5LXNob3ctYycpLmNzcyh7J3dpZHRoJyA6ICcwJ30pO1xuICAgIH0pO1xuICB9KTtcbiAgfSk7XG5cbiAgJChcIiNzZXJ2aWNlLWl0ZW0tZFwiKS5vbignbG9hZCcsZnVuY3Rpb24oKXtcbiAgVUlraXQuc2Nyb2xsc3B5KFwiI3NlcnZpY2UtaXRlbS1kXCIsIGZ1bmN0aW9uKCl7XG4gICAgVUlraXQudXRpbC5vbignI3NlcnZpY2UtaXRlbS1kJywgJ2ludmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAkKCcub3ZlcmxheS1zaG93LWQnKS5jc3Moeyd3aWR0aCcgOiAnMCd9KTtcbiAgICB9KTtcbiAgfSk7XG4gIH0pO1xuXG59KTtcblxuLy9Nb2RhbCBuYXZiYXJcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgJCgnLnRvZ2dsZS1uYXYtbW9kYWwnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcblxuICAgICAgJCgnLm1vZGFsLW5hdicpLmNzcyh7XG4gICAgICAgICAnaGVpZ2h0JyA6ICc5MHZoJyxcbiAgICAgICAgICd0cmFuc2l0aW9uLWRlbGF5JzogJzAuNHMnXG4gICAgICAgfSk7XG5cbiAgICAgICAkKCcubW9kYWwtbmF2PmRpdicpLmNzcyh7J3Zpc2liaWxpdHknIDogJ3Zpc2libGUnICwnb3BhY2l0eScgOiAnMScsJ3RyYW5zaXRpb24tZGVsYXknOiAnMC42cycgfSk7XG5cbiAgICB9KTtcblxuICAgICQoJy5jbG9zZS1uYXYtbW9kYWwnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcblxuICAgICAgJCgnLm1vZGFsLW5hdicpLmNzcyh7XG4gICAgICAgICAnaGVpZ2h0JyA6ICcwJyxcbiAgICAgICAgICd0cmFuc2l0aW9uLWRlbGF5JzogJzAuNHMnXG4gICAgICAgfSk7XG5cbiAgICAgICAkKCcubW9kYWwtbmF2PmRpdicpLmNzcyh7J3Zpc2liaWxpdHknIDogJ2NvbGxhcHNlJyAsICdvcGFjaXR5JyA6ICcwJywndHJhbnNpdGlvbi1kZWxheSc6ICcwLjRzJ30pO1xuXG4gICAgfSk7XG5cbiAgfSk7XG5cblxuXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9