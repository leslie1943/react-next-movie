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
  console.info('data', data);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    maxW: 1200,
    mx: "auto",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    fontSize: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdMovie"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    fontSize: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    },
    __self: this
  }, "\u7535\u5F71")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    mt: "20px",
    spacing: 3,
    fontSize: "12px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    },
    __self: this
  }, data.map(function (item) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: 290,
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mt: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZS5qcyJdLCJuYW1lcyI6WyJNb3ZpZSIsImRhdGEiLCJjb25zb2xlIiwiaW5mbyIsIm1hcCIsIml0ZW0iLCJpZCIsInVybCIsInRpdGxlIiwibG9hZE1vdmllIiwiYXhpb3MiLCJnZXQiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEtBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdENDLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLE1BQWIsRUFBcUJGLElBQXJCO0FBQ0EsU0FDRSwyREFBQyxvREFBRDtBQUFLLFFBQUksRUFBRSxJQUFYO0FBQWlCLE1BQUUsRUFBQyxNQUFwQjtBQUEyQixNQUFFLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDJEQUFDLHVEQUFEO0FBQVEsWUFBUSxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSwyREFBQyx3REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFlBQVEsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLENBREYsRUFRRSwyREFBQyx1REFBRDtBQUFRLE1BQUUsRUFBQyxNQUFYO0FBQWtCLFdBQU8sRUFBRSxDQUEzQjtBQUE4QixZQUFRLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDUiwyREFBQyxvREFBRDtBQUFLLE9BQUMsRUFBRSxHQUFSO0FBQWEsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSwyREFBQyxzREFBRDtBQUFPLFNBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSwyREFBQyxxREFBRDtBQUFNLFFBQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUJGLElBQUksQ0FBQ0csS0FBdEIsQ0FGRixDQURRO0FBQUEsR0FBVCxDQURILENBUkYsQ0FERjtBQW1CRCxDLENBRUQ7O0tBdkJ3QlIsSztBQXdCakIsU0FBU1MsU0FBVCxHQUFxQjtBQUMxQixTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF3QjtBQUM3QkMsV0FBTyxFQUFQQSxvREFBT0E7QUFEc0IsR0FBeEIsQ0FBUDtBQUdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzYTBjNmNlMTE2YzBkOTVjYWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhlYWRpbmcsIEhTdGFjaywgSW1hZ2UsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBNZE1vdmllIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9heGlvc0NvbmZpZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWUoeyBkYXRhIH0pIHtcclxuICBjb25zb2xlLmluZm8oJ2RhdGEnLCBkYXRhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1heFc9ezEyMDB9IG14PVwiYXV0b1wiIG10PVwiMjBweFwiPlxyXG4gICAgICA8SFN0YWNrIGZvbnRTaXplPVwiMjRweFwiPlxyXG4gICAgICAgIDxNZE1vdmllIC8+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGZvbnRTaXplPVwiMjRweFwiPlxyXG4gICAgICAgICAg55S15b2xXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0hTdGFjaz5cclxuXHJcbiAgICAgIDxIU3RhY2sgbXQ9XCIyMHB4XCIgc3BhY2luZz17M30gZm9udFNpemU9XCIxMnB4XCI+XHJcbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Qm94IHc9ezI5MH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgIDxUZXh0IG10PVwiMTBweFwiPntpdGVtLnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0hTdGFjaz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuLy8g6I635Y+W55S15b2x5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW92aWUoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9tb3ZpZScsIHtcclxuICAgIGJhc2VVUkwsXHJcbiAgfSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9