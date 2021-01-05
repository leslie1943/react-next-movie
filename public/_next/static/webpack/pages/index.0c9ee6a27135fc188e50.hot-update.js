webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Swiper.js":
/*!******************************!*\
  !*** ./components/Swiper.js ***!
  \******************************/
/*! exports provided: default, loadSwiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSwiper", function() { return loadSwiper; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../axiosConfig */ "./axiosConfig.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Leslie\\Web_learning\\React-Part\\react-next-movie\\components\\Swiper.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











var CarouselItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eq558820",
  label: "CarouselItem"
})(false ? undefined : {
  name: "253pyo",
  styles: "position:relative;&>div{position:absolute;left:50%;top:0;transform:translateX(-50%);color:#fff;padding-top:180px;text-align:left;width:100%;max-width:1200px;&>p{margin:15px 0;font-size:14px;width:450px;}}&>img{filter:brightness(50%);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMZXNsaWVcXFdlYl9sZWFybmluZ1xcUmVhY3QtUGFydFxccmVhY3QtbmV4dC1tb3ZpZVxcY29tcG9uZW50c1xcU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUrQiIsImZpbGUiOiJDOlxcTGVzbGllXFxXZWJfbGVhcm5pbmdcXFJlYWN0LVBhcnRcXHJlYWN0LW5leHQtbW92aWVcXGNvbXBvbmVudHNcXFN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgJiA+IHAge1xyXG4gICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBpbWcge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiA+IC5jYXJvdXNlbDpsYXN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAmID4gLnRodW1icy13cmFwcGVyID4gLnRodW1icyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXIoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvY2Fyb3VzZWwubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+MTk0MyDnlLXlvbE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGNzcz17c3dpcGVyQ29udGFpbmVyfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsSXRlbSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogZGV0YWlsOiBwYWdlc+aWh+S7tuS4i+eahGRldGFpbOaWh+S7tuWkuSAqL31cclxuICAgICAgICAgICAgICAgIHsvKiBbaWRdOiDmjIfnmoTlsLHmmK/ov5nkuKpkZXRhaWzmlofku7blpLnkuIvnmoQgW2lkXS5qcyDmlofku7YgKi99XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RldGFpbC9baWRdXCIgYXM9e2AvZGV0YWlsLyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+Q0hFQ0sgREVUVEFJTDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8g5Yqg6L296L2u5pKt5Zu+5pWw5o2uXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3dpcGVyKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvc3dpcGVyYCwge1xyXG4gICAgYmFzZVVSTCxcclxuICB9KVxyXG59XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var swiperContainer = false ? undefined : {
  name: "w644fx-swiperContainer",
  styles: "position:relative;&>.carousel:last-child{position:absolute;left:0;bottom:0;&>.thumbs-wrapper>.thumbs{display:flex;justify-content:center;}};label:swiperContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMZXNsaWVcXFdlYl9sZWFybmluZ1xcUmVhY3QtUGFydFxccmVhY3QtbmV4dC1tb3ZpZVxcY29tcG9uZW50c1xcU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDMkIiLCJmaWxlIjoiQzpcXExlc2xpZVxcV2ViX2xlYXJuaW5nXFxSZWFjdC1QYXJ0XFxyZWFjdC1uZXh0LW1vdmllXFxjb21wb25lbnRzXFxTd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL2F4aW9zQ29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICYgPiBwIHtcclxuICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gaW1nIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gIH1cclxuYFxyXG5jb25zdCBzd2lwZXJDb250YWluZXIgPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgPiAuY2Fyb3VzZWw6bGFzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgJiA+IC50aHVtYnMtd3JhcHBlciA+IC50aHVtYnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpcGVyKHsgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2Nhcm91c2VsLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPHRpdGxlPjE5NDMg55S15b2xPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBjc3M9e3N3aXBlckNvbnRhaW5lcn1cclxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJsfSAvPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dD57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIGRldGFpbDogcGFnZXPmlofku7bkuIvnmoRkZXRhaWzmlofku7blpLkgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogW2lkXTog5oyH55qE5bCx5piv6L+Z5LiqZGV0YWls5paH5Lu25aS55LiL55qEIFtpZF0uanMg5paH5Lu2ICovfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXRhaWwvW2lkXVwiIGFzPXtgL2RldGFpbC8ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkNIRUNLIERFVFRBSUw8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIOWKoOi9vei9ruaSreWbvuaVsOaNrlxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN3aXBlcigpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3N3aXBlcmAsIHtcclxuICAgIGJhc2VVUkwsXHJcbiAgfSlcclxufVxyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
function Swiper(_ref) {
  var _this = this;

  var data = _ref.data;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("link", {
    rel: "stylesheet",
    href: "css/carousel.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    },
    __self: this
  }, "1943 \u7535\u5F71")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["Carousel"], {
    css: swiperContainer,
    showArrows: false,
    showIndicators: false,
    showStatus: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    },
    __self: this
  }, data.map(function (item) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      as: "h2",
      size: "lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      },
      __self: _this
    }, item.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      },
      __self: _this
    }, item.description), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      colorScheme: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/detail/[id]",
      as: "/detail/".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      },
      __self: _this
    }, "CHECK DETTAIL")))));
  })));
} // 加载轮播图数据

_c = Swiper;
function loadSwiper() {
  return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/swiper", {
    baseURL: _axiosConfig__WEBPACK_IMPORTED_MODULE_7__["baseURL"]
  });
}

var _c;

$RefreshReg$(_c, "Swiper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2lwZXIuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxJdGVtIiwic3dpcGVyQ29udGFpbmVyIiwiU3dpcGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2FkU3dpcGVyIiwiYXhpb3MiLCJnZXQiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWxCOztBQXNCQSxJQUFNQyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQjtBQVllLFNBQVNDLE1BQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdkMsU0FDRSx3SEFDRSwyREFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsc0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsQ0FERixFQUtFLDJEQUFDLGtFQUFEO0FBQ0UsT0FBRyxFQUFFRixlQURQO0FBRUUsY0FBVSxFQUFFLEtBRmQ7QUFHRSxrQkFBYyxFQUFFLEtBSGxCO0FBSUUsY0FBVSxFQUFFLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDUiwyREFBQyxZQUFEO0FBQWMsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLDJEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSwyREFBQyx3REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dGLElBQUksQ0FBQ0csS0FEUixDQURGLEVBSUUsMkRBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPSCxJQUFJLENBQUNJLFdBQVosQ0FKRixFQUtFLDJEQUFDLHVEQUFEO0FBQVEsaUJBQVcsRUFBQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsMkRBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixRQUFFLG9CQUFhSixJQUFJLENBQUNDLEVBQWxCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBSEYsQ0FMRixDQUZGLENBRFE7QUFBQSxHQUFULENBTkgsQ0FMRixDQURGO0FBaUNELEMsQ0FFRDs7S0FwQ3dCSixNO0FBcUNqQixTQUFTUSxVQUFULEdBQXNCO0FBQzNCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sZ0JBQXlCO0FBQzlCQyxXQUFPLEVBQVBBLG9EQUFPQTtBQUR1QixHQUF6QixDQUFQO0FBR0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGM5ZWU2YTI3MTM1ZmMxODhlNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgJiA+IHAge1xyXG4gICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBpbWcge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiA+IC5jYXJvdXNlbDpsYXN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAmID4gLnRodW1icy13cmFwcGVyID4gLnRodW1icyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXIoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvY2Fyb3VzZWwubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+MTk0MyDnlLXlvbE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGNzcz17c3dpcGVyQ29udGFpbmVyfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsSXRlbSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogZGV0YWlsOiBwYWdlc+aWh+S7tuS4i+eahGRldGFpbOaWh+S7tuWkuSAqL31cclxuICAgICAgICAgICAgICAgIHsvKiBbaWRdOiDmjIfnmoTlsLHmmK/ov5nkuKpkZXRhaWzmlofku7blpLnkuIvnmoQgW2lkXS5qcyDmlofku7YgKi99XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RldGFpbC9baWRdXCIgYXM9e2AvZGV0YWlsLyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+Q0hFQ0sgREVUVEFJTDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8g5Yqg6L296L2u5pKt5Zu+5pWw5o2uXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3dpcGVyKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvc3dpcGVyYCwge1xyXG4gICAgYmFzZVVSTCxcclxuICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=