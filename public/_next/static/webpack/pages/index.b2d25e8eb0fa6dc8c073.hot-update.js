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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMZXNsaWVcXFdlYl9sZWFybmluZ1xcUmVhY3QtUGFydFxccmVhY3QtbmV4dC1tb3ZpZVxcY29tcG9uZW50c1xcU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQiIsImZpbGUiOiJDOlxcTGVzbGllXFxXZWJfbGVhcm5pbmdcXFJlYWN0LVBhcnRcXHJlYWN0LW5leHQtbW92aWVcXGNvbXBvbmVudHNcXFN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICYgPiBwIHtcclxuICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gaW1nIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gIH1cclxuYFxyXG5jb25zdCBzd2lwZXJDb250YWluZXIgPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgPiAuY2Fyb3VzZWw6bGFzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgJiA+IC50aHVtYnMtd3JhcHBlciA+IC50aHVtYnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpcGVyKHsgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2Nhcm91c2VsLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPHRpdGxlPjE5NDMg55S15b2xPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBjc3M9e3N3aXBlckNvbnRhaW5lcn1cclxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnVybH0gLz5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5DSEVDSyBERVRUQUlMPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMi5qcGdcIiAvPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIENBUFRBSU4gQU1FUklDQVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHNob2NraW5nIGNoYXB0ZXIgaW4gRG9ubnkgQ2F0ZXMgYWQgUnlhbiBTdGVnbWFuJ3MgVmVub21cclxuICAgICAgICAgICAgICBTYWdhIGlzIHJldmVhbGVkIVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5DSEVDSyBERVRUQUlMPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuXHJcbiAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgVUxUUkEgTUFOXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgdGhlIG5leHQgc2hvY2tpbmcgY2hhcHRlciBpbiBEb25ueSBDYXRlcyBhZCBSeWFuIFN0ZWdtYW4ncyBWZW5vbVxyXG4gICAgICAgICAgICAgIFNhZ2EgaXMgcmV2ZWFsZWQhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPkNIRUNLIERFVFRBSUw8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyDliqDovb3ova7mkq3lm77mlbDmja5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTd2lwZXIoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9zd2lwZXJgLCB7XHJcbiAgICBiYXNlVVJMLFxyXG4gIH0pXHJcbn1cclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var swiperContainer = false ? undefined : {
  name: "w644fx-swiperContainer",
  styles: "position:relative;&>.carousel:last-child{position:absolute;left:0;bottom:0;&>.thumbs-wrapper>.thumbs{display:flex;justify-content:center;}};label:swiperContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMZXNsaWVcXFdlYl9sZWFybmluZ1xcUmVhY3QtUGFydFxccmVhY3QtbmV4dC1tb3ZpZVxcY29tcG9uZW50c1xcU3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCMkIiLCJmaWxlIjoiQzpcXExlc2xpZVxcV2ViX2xlYXJuaW5nXFxSZWFjdC1QYXJ0XFxyZWFjdC1uZXh0LW1vdmllXFxjb21wb25lbnRzXFxTd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL2F4aW9zQ29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGltZyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxuICB9XHJcbmBcclxuY29uc3Qgc3dpcGVyQ29udGFpbmVyID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gLmNhcm91c2VsOmxhc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgICYgPiAudGh1bWJzLXdyYXBwZXIgPiAudGh1bWJzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aXBlcih7IGRhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9jYXJvdXNlbC5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIDx0aXRsZT4xOTQzIOeUteW9sTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgY3NzPXtzd2lwZXJDb250YWluZXJ9XHJcbiAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+Q0hFQ0sgREVUVEFJTDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLzIuanBnXCIgLz5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICBDQVBUQUlOIEFNRVJJQ0FcclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICB0aGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFkIFJ5YW4gU3RlZ21hbidzIFZlbm9tXHJcbiAgICAgICAgICAgICAgU2FnYSBpcyByZXZlYWxlZCFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+Q0hFQ0sgREVUVEFJTDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcblxyXG4gICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMy5qcGdcIiAvPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIFVMVFJBIE1BTlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHNob2NraW5nIGNoYXB0ZXIgaW4gRG9ubnkgQ2F0ZXMgYWQgUnlhbiBTdGVnbWFuJ3MgVmVub21cclxuICAgICAgICAgICAgICBTYWdhIGlzIHJldmVhbGVkIVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5DSEVDSyBERVRUQUlMPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8g5Yqg6L296L2u5pKt5Zu+5pWw5o2uXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3dpcGVyKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvc3dpcGVyYCwge1xyXG4gICAgYmFzZVVSTCxcclxuICB9KVxyXG59XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
function Swiper(_ref) {
  var _this = this;

  var data = _ref.data;
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
  }, data.map(function (item) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      as: "h2",
      size: "lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      },
      __self: _this
    }, item.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      },
      __self: _this
    }, item.description), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      colorScheme: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      },
      __self: _this
    }, "CHECK DETTAIL")));
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "/images/2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    as: "h2",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    },
    __self: this
  }, "CAPTAIN AMERICA"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    },
    __self: this
  }, "the next shocking chapter in Donny Cates ad Ryan Stegman's Venom Saga is revealed!"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    colorScheme: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    },
    __self: this
  }, "CHECK DETTAIL"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CarouselItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "/images/3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    },
    __self: this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    },
    __self: this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    as: "h2",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    },
    __self: this
  }, "ULTRA MAN"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    },
    __self: this
  }, "the next shocking chapter in Donny Cates ad Ryan Stegman's Venom Saga is revealed!"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    colorScheme: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    },
    __self: this
  }, "CHECK DETTAIL")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2lwZXIuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxJdGVtIiwic3dpcGVyQ29udGFpbmVyIiwiU3dpcGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9hZFN3aXBlciIsImF4aW9zIiwiZ2V0IiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWxCOztBQXNCQSxJQUFNQyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQjtBQVllLFNBQVNDLE1BQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdkMsU0FDRSx3SEFDRSwyREFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsc0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsQ0FERixFQUtFLDJEQUFDLGtFQUFEO0FBQ0UsT0FBRyxFQUFFRixlQURQO0FBRUUsY0FBVSxFQUFFLEtBRmQ7QUFHRSxrQkFBYyxFQUFFLEtBSGxCO0FBSUUsY0FBVSxFQUFFLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDUiwyREFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLDJEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSwyREFBQyx3REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBQUksQ0FBQ0UsS0FEUixDQURGLEVBSUUsMkRBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPRixJQUFJLENBQUNHLFdBQVosQ0FKRixFQUtFLDJEQUFDLHVEQUFEO0FBQVEsaUJBQVcsRUFBQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGLENBRkYsQ0FEUTtBQUFBLEdBQVQsQ0FOSCxFQW1CRSwyREFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLDJEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQyx3REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBSUUsMkRBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRkFKRixFQVFFLDJEQUFDLHVEQUFEO0FBQVEsZUFBVyxFQUFDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsQ0FGRixDQW5CRixFQWlDRSwyREFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLDJEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQyx3REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUUsMkRBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRkFKRixFQVFFLDJEQUFDLHVEQUFEO0FBQVEsZUFBVyxFQUFDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsQ0FGRixDQWpDRixDQUxGLENBREY7QUF1REQsQyxDQUVEOztLQTFEd0JOLE07QUEyRGpCLFNBQVNPLFVBQVQsR0FBc0I7QUFDM0IsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixnQkFBeUI7QUFDOUJDLFdBQU8sRUFBUEEsb0RBQU9BO0FBRHVCLEdBQXpCLENBQVA7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMmQyNWU4ZWIwZmE2ZGM4YzA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9heGlvc0NvbmZpZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgJiA+IHAge1xyXG4gICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBpbWcge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IHN3aXBlckNvbnRhaW5lciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiA+IC5jYXJvdXNlbDpsYXN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAmID4gLnRodW1icy13cmFwcGVyID4gLnRodW1icyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXIoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvY2Fyb3VzZWwubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+MTk0MyDnlLXlvbE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGNzcz17c3dpcGVyQ29udGFpbmVyfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJsfSAvPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dD57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPkNIRUNLIERFVFRBSUw8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8yLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgQ0FQVEFJTiBBTUVSSUNBXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgdGhlIG5leHQgc2hvY2tpbmcgY2hhcHRlciBpbiBEb25ueSBDYXRlcyBhZCBSeWFuIFN0ZWdtYW4ncyBWZW5vbVxyXG4gICAgICAgICAgICAgIFNhZ2EgaXMgcmV2ZWFsZWQhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiPkNIRUNLIERFVFRBSUw8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG5cclxuICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLzMuanBnXCIgLz5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICBVTFRSQSBNQU5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICB0aGUgbmV4dCBzaG9ja2luZyBjaGFwdGVyIGluIERvbm55IENhdGVzIGFkIFJ5YW4gU3RlZ21hbidzIFZlbm9tXHJcbiAgICAgICAgICAgICAgU2FnYSBpcyByZXZlYWxlZCFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCI+Q0hFQ0sgREVUVEFJTDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIOWKoOi9vei9ruaSreWbvuaVsOaNrlxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN3aXBlcigpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3N3aXBlcmAsIHtcclxuICAgIGJhc2VVUkwsXHJcbiAgfSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9