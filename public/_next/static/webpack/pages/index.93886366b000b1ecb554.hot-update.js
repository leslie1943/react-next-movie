webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default, loadMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovie", function() { return loadMovie; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axiosConfig */ "./axiosConfig.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");

var _jsxFileName = "C:\\Leslie\\Web_learning\\React-Part\\react-next-movie\\components\\Movie.js";





function Movie(_ref) {
  var _this = this;

  var data = _ref.data;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    maxW: 1200,
    mx: "auto",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    fontSize: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdMovie"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    fontSize: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    },
    __self: this
  }, "\u7535\u5F71")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    mt: "20px",
    spacing: 3,
    fontSize: "12px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    },
    __self: this
  }, data.map(function (item) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: 290,
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mt: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      },
      __self: _this
    }, item.title));
  })));
} // 获取电影列表

_c = Movie;
function loadMovie() {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/movie', {
    baseURL: _axiosConfig__WEBPACK_IMPORTED_MODULE_3__["baseURL"]
  });
}

var _c;

$RefreshReg$(_c, "Movie");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZS5qcyJdLCJuYW1lcyI6WyJNb3ZpZSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ1cmwiLCJ0aXRsZSIsImxvYWRNb3ZpZSIsImF4aW9zIiwiZ2V0IiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxLQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3RDLFNBQ0UsMkRBQUMsb0RBQUQ7QUFBSyxRQUFJLEVBQUUsSUFBWDtBQUFpQixNQUFFLEVBQUMsTUFBcEI7QUFBMkIsTUFBRSxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQyx1REFBRDtBQUFRLFlBQVEsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsMkRBQUMsd0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixDQURGLEVBUUUsMkRBQUMsdURBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUUsQ0FBM0I7QUFBOEIsWUFBUSxFQUFDLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IsMkRBQUMsb0RBQUQ7QUFBSyxPQUFDLEVBQUUsR0FBUjtBQUFhLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsMkRBQUMsc0RBQUQ7QUFBTyxTQUFHLEVBQUVELElBQUksQ0FBQ0UsR0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsMkRBQUMscURBQUQ7QUFBTSxRQUFFLEVBQUMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCRixJQUFJLENBQUNHLEtBQXRCLENBRkYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQVJGLENBREY7QUFtQkQsQyxDQUVEOztLQXRCd0JOLEs7QUF1QmpCLFNBQVNPLFNBQVQsR0FBcUI7QUFDMUIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLFlBQVYsRUFBd0I7QUFDN0JDLFdBQU8sRUFBUEEsb0RBQU9BO0FBRHNCLEdBQXhCLENBQVA7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Mzg4NjM2NmIwMDBiMWVjYjU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBIU3RhY2ssIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgTWRNb3ZpZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllKHsgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbWF4Vz17MTIwMH0gbXg9XCJhdXRvXCIgbXQ9XCIyMHB4XCI+XHJcbiAgICAgIDxIU3RhY2sgZm9udFNpemU9XCIyNHB4XCI+XHJcbiAgICAgICAgPE1kTW92aWUgLz5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgZm9udFNpemU9XCIyNHB4XCI+XHJcbiAgICAgICAgICDnlLXlvbFcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvSFN0YWNrPlxyXG5cclxuICAgICAgPEhTdGFjayBtdD1cIjIwcHhcIiBzcGFjaW5nPXszfSBmb250U2l6ZT1cIjEycHhcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxCb3ggdz17MjkwfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLnVybH0gLz5cclxuICAgICAgICAgICAgPFRleHQgbXQ9XCIxMHB4XCI+e2l0ZW0udGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvSFN0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG4vLyDojrflj5bnlLXlvbHliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb3ZpZSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL21vdmllJywge1xyXG4gICAgYmFzZVVSTCxcclxuICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=