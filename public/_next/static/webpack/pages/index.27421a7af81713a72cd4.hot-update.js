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



var _jsxFileName = "C:\\Leslie\\Web_learning\\React-Part\\react-next-movie\\components\\Swiper.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










var CarouselItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eq558820",
  label: "CarouselItem"
})(false ? undefined : {
  name: "253pyo",
  styles: "position:relative;&>div{position:absolute;left:50%;top:0;transform:translateX(-50%);color:#fff;padding-top:180px;text-align:left;width:100%;max-width:1200px;&>p{margin:15px 0;font-size:14px;width:450px;}}&>img{filter:brightness(50%);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMZXNsaWVcXFdlYl9sZWFybmluZ1xcUmVhY3QtUGFydFxccmVhY3QtbmV4dC1tb3ZpZVxcY29tcG9uZW50c1xcU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQiIsImZpbGUiOiJDOlxcTGVzbGllXFxXZWJfbGVhcm5pbmdcXFJlYWN0LVBhcnRcXHJlYWN0LW5leHQtbW92aWVcXGNvbXBvbmVudHNcXFN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICYgPiBwIHtcclxuICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gaW1nIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gIH1cclxuYFxyXG5jb25zdCBzd2lwZXJDb250YWluZXIgPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgPiAuY2Fyb3VzZWw6bGFzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgJiA+IC50aHVtYnMtd3JhcHBlciA+IC50aHVtYnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpcGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9jYXJvdXNlbC5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIDx0aXRsZT4xOTQzIOeUteW9sTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgY3NzPXtzd2lwZXJDb250YWluZXJ9XHJcbiAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8xLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgS0lORyBJTiBCTEFDS1xyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHNob2NraW5nIGNoYXB0ZXIgaW4gRG9ubnkgQ2F0ZXMgYWQgUnlhbiBTdGVnbWFuJ3MgVmVub21cclxuICAgICAgICAgICAgICBTYWdhIGlzIHJldmVhbGVkIVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5DSEVDSyBERVRUQUlMPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuXHJcbiAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8yLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgQ0FQVEFJTiBBTUVSSUNBXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgdGhlIG5leHQgc2hvY2tpbmcgY2hhcHRlciBpbiBEb25ueSBDYXRlcyBhZCBSeWFuIFN0ZWdtYW4ncyBWZW5vbVxyXG4gICAgICAgICAgICAgIFNhZ2EgaXMgcmV2ZWFsZWQhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPkNIRUNLIERFVFRBSUw8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG5cclxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLzMuanBnXCIgLz5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICBVTFRSQSBNQU5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICB0aGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFkIFJ5YW4gU3RlZ21hbidzIFZlbm9tXHJcbiAgICAgICAgICAgICAgU2FnYSBpcyByZXZlYWxlZCFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+Q0hFQ0sgREVUVEFJTDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3dpcGVyKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvc3dpcGVyYCwge1xyXG4gICAgYmFzZVVSTCxcclxuICB9KVxyXG59XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var swiperContainer = false ? undefined : {
  name: "w644fx-swiperContainer",
  styles: "position:relative;&>.carousel:last-child{position:absolute;left:0;bottom:0;&>.thumbs-wrapper>.thumbs{display:flex;justify-content:center;}};label:swiperContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMZXNsaWVcXFdlYl9sZWFybmluZ1xcUmVhY3QtUGFydFxccmVhY3QtbmV4dC1tb3ZpZVxcY29tcG9uZW50c1xcU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCMkIiLCJmaWxlIjoiQzpcXExlc2xpZVxcV2ViX2xlYXJuaW5nXFxSZWFjdC1QYXJ0XFxyZWFjdC1uZXh0LW1vdmllXFxjb21wb25lbnRzXFxTd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL2F4aW9zQ29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGltZyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxuICB9XHJcbmBcclxuY29uc3Qgc3dpcGVyQ29udGFpbmVyID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gLmNhcm91c2VsOmxhc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgICYgPiAudGh1bWJzLXdyYXBwZXIgPiAudGh1bWJzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aXBlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvY2Fyb3VzZWwubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+MTk0MyDnlLXlvbE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGNzcz17c3dpcGVyQ29udGFpbmVyfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMS5qcGdcIiAvPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIEtJTkcgSU4gQkxBQ0tcclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICB0aGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFkIFJ5YW4gU3RlZ21hbidzIFZlbm9tXHJcbiAgICAgICAgICAgICAgU2FnYSBpcyByZXZlYWxlZCFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+Q0hFQ0sgREVUVEFJTDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcblxyXG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMi5qcGdcIiAvPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIENBUFRBSU4gQU1FUklDQVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHNob2NraW5nIGNoYXB0ZXIgaW4gRG9ubnkgQ2F0ZXMgYWQgUnlhbiBTdGVnbWFuJ3MgVmVub21cclxuICAgICAgICAgICAgICBTYWdhIGlzIHJldmVhbGVkIVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5DSEVDSyBERVRUQUlMPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuXHJcbiAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgVUxUUkEgTUFOXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgdGhlIG5leHQgc2hvY2tpbmcgY2hhcHRlciBpbiBEb25ueSBDYXRlcyBhZCBSeWFuIFN0ZWdtYW4ncyBWZW5vbVxyXG4gICAgICAgICAgICAgIFNhZ2EgaXMgcmV2ZWFsZWQhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPkNIRUNLIERFVFRBSUw8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN3aXBlcigpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3N3aXBlcmAsIHtcclxuICAgIGJhc2VVUkwsXHJcbiAgfSlcclxufVxyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
function Swiper() {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("link", {
    rel: "stylesheet",
    href: "css/carousel.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 51,
      columnNumber: 7
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "/images/1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    as: "h2",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    },
    __self: this
  }, "KING IN BLACK"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    },
    __self: this
  }, "the next shocking chapter in Donny Cates ad Ryan Stegman's Venom Saga is revealed!"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    colorScheme: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    },
    __self: this
  }, "CHECK DETTAIL"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "/images/2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    as: "h2",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    },
    __self: this
  }, "CAPTAIN AMERICA"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    },
    __self: this
  }, "the next shocking chapter in Donny Cates ad Ryan Stegman's Venom Saga is revealed!"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    colorScheme: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    },
    __self: this
  }, "CHECK DETTAIL"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "/images/3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    as: "h2",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    },
    __self: this
  }, "ULTRA MAN"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    },
    __self: this
  }, "the next shocking chapter in Donny Cates ad Ryan Stegman's Venom Saga is revealed!"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    colorScheme: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    },
    __self: this
  }, "CHECK DETTAIL")))));
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2lwZXIuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxJdGVtIiwic3dpcGVyQ29udGFpbmVyIiwiU3dpcGVyIiwibG9hZFN3aXBlciIsImF4aW9zIiwiZ2V0IiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWxCOztBQXNCQSxJQUFNQyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQjtBQVllLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0IsU0FDRSx3SEFDRSwyREFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsc0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsQ0FERixFQUtFLDJEQUFDLGtFQUFEO0FBQ0UsT0FBRyxFQUFFRCxlQURQO0FBRUUsY0FBVSxFQUFFLEtBRmQ7QUFHRSxrQkFBYyxFQUFFLEtBSGxCO0FBSUUsY0FBVSxFQUFFLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLDJEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsMkRBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDJEQUFDLHdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFJRSwyREFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUpGLEVBUUUsMkRBQUMsdURBQUQ7QUFBUSxlQUFXLEVBQUMsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixDQUZGLENBTkYsRUFvQkUsMkRBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSwyREFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQUMsd0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFLDJEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBSkYsRUFRRSwyREFBQyx1REFBRDtBQUFRLGVBQVcsRUFBQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLENBRkYsQ0FwQkYsRUFrQ0UsMkRBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSwyREFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQUMsd0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlFLDJEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBSkYsRUFRRSwyREFBQyx1REFBRDtBQUFRLGVBQVcsRUFBQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLENBRkYsQ0FsQ0YsQ0FMRixDQURGO0FBd0REO0tBekR1QkMsTTtBQTJEakIsU0FBU0MsVUFBVCxHQUFzQjtBQUMzQixTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLGdCQUF5QjtBQUM5QkMsV0FBTyxFQUFQQSxvREFBT0E7QUFEdUIsR0FBekIsQ0FBUDtBQUdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3NDIxYTdhZjgxNzEzYTcyY2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL2F4aW9zQ29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGltZyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxuICB9XHJcbmBcclxuY29uc3Qgc3dpcGVyQ29udGFpbmVyID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gLmNhcm91c2VsOmxhc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgICYgPiAudGh1bWJzLXdyYXBwZXIgPiAudGh1bWJzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aXBlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvY2Fyb3VzZWwubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+MTk0MyDnlLXlvbE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGNzcz17c3dpcGVyQ29udGFpbmVyfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMS5qcGdcIiAvPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIEtJTkcgSU4gQkxBQ0tcclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICB0aGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFkIFJ5YW4gU3RlZ21hbidzIFZlbm9tXHJcbiAgICAgICAgICAgICAgU2FnYSBpcyByZXZlYWxlZCFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+Q0hFQ0sgREVUVEFJTDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcblxyXG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMi5qcGdcIiAvPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIENBUFRBSU4gQU1FUklDQVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHNob2NraW5nIGNoYXB0ZXIgaW4gRG9ubnkgQ2F0ZXMgYWQgUnlhbiBTdGVnbWFuJ3MgVmVub21cclxuICAgICAgICAgICAgICBTYWdhIGlzIHJldmVhbGVkIVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5DSEVDSyBERVRUQUlMPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuXHJcbiAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgVUxUUkEgTUFOXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgdGhlIG5leHQgc2hvY2tpbmcgY2hhcHRlciBpbiBEb25ueSBDYXRlcyBhZCBSeWFuIFN0ZWdtYW4ncyBWZW5vbVxyXG4gICAgICAgICAgICAgIFNhZ2EgaXMgcmV2ZWFsZWQhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPkNIRUNLIERFVFRBSUw8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN3aXBlcigpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3N3aXBlcmAsIHtcclxuICAgIGJhc2VVUkwsXHJcbiAgfSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9