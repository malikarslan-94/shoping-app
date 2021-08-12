webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/malik/dev/Demianaragon/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var KlinkerWork = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var benifits = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var keyFeature = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      mainHeader = _useState[0],\n      setMainHeader = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      signUpImage = _useState2[0],\n      setSignUpImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      orderImage = _useState3[0],\n      setOrderImage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      mobileheaderActive = _useState4[0],\n      setMobileheaderActive = _useState4[1];\n\n  var mobileHeaderStatus = function mobileHeaderStatus() {\n    setMobileheaderActive(!mobileheaderActive);\n  };\n\n  var scrollRef = function scrollRef(id) {\n    console.log(\"value\", id);\n    id.current.scrollIntoView();\n    console.log(\"function\");\n  };\n\n  var changeImage = function changeImage(value) {\n    console.log({\n      value: value\n    });\n    value === \"signup\" ? setSignUpImage(\"signup\") : value === \"order\" ? setSignUpImage(\"order\") : setSignUpImage(\"rest\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"relative bg-white\",\n    style: {\n      scrollBehavior: \"smooth\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"max-w  flex-row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mainHeader: mainHeader,\n        scrollReff: scrollRef,\n        KlinkerWork: KlinkerWork,\n        benifits: benifits,\n        keyFeature: keyFeature,\n        mobileHeaderStatus: mobileHeaderStatus\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        \"class\": mobileheaderActive ? \" max-w-full mt-52 md:mt-0\" : \" max-w-full\",\n        style: {\n          backgroundColor: \"#d9ecff\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \" lg:inset-y-0 absolute\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"h-full w-screen z-10\",\n            src: \"./heroSection.png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \" absolute opacity-30 left-1/4 top-2/4 z-40\",\n            style: {\n              backgroundColor: \"#594843\",\n              height: \"30vh\",\n              width: \"20vw\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-96\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-white\",\n          children: \"Empty Div\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 31\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-48\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-white\",\n          children: \"Empty Div\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 31\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \" lg:pb-16 mb-12 lg:mb-16 mt-20\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"max-w-screen-xl px-36 gap-3 mx-auto lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-6 bg-yellow-500\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full justify-self-center bg-green-300\",\n            src: \"./Rectangle (3).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (4).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (5).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (6).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (7).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (8).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"m8yrRcvrqi4dN8PkquVv4PgwhoE=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiS2xpbmtlcldvcmsiLCJ1c2VSZWYiLCJiZW5pZml0cyIsImtleUZlYXR1cmUiLCJ1c2VTdGF0ZSIsIm1haW5IZWFkZXIiLCJzZXRNYWluSGVhZGVyIiwic2lnblVwSW1hZ2UiLCJzZXRTaWduVXBJbWFnZSIsIm9yZGVySW1hZ2UiLCJzZXRPcmRlckltYWdlIiwibW9iaWxlaGVhZGVyQWN0aXZlIiwic2V0TW9iaWxlaGVhZGVyQWN0aXZlIiwibW9iaWxlSGVhZGVyU3RhdHVzIiwic2Nyb2xsUmVmIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiY2hhbmdlSW1hZ2UiLCJ2YWx1ZSIsInNjcm9sbEJlaGF2aW9yIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxNQUFNRSxVQUFVLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUF6Qjs7QUFIaUIsa0JBSW1CRyxzREFBUSxDQUFDLEVBQUQsQ0FKM0I7QUFBQSxNQUlWQyxVQUpVO0FBQUEsTUFJRUMsYUFKRjs7QUFBQSxtQkFLcUJGLHNEQUFRLENBQUMsRUFBRCxDQUw3QjtBQUFBLE1BS1ZHLFdBTFU7QUFBQSxNQUtHQyxjQUxIOztBQUFBLG1CQU1tQkosc0RBQVEsQ0FBQyxJQUFELENBTjNCO0FBQUEsTUFNVkssVUFOVTtBQUFBLE1BTUVDLGFBTkY7O0FBQUEsbUJBT21DTixzREFBUSxDQUFDLEtBQUQsQ0FQM0M7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LG1CQVZGLGVBY0U7QUFDRSxxQkFBTSx5Q0FEUjtBQUVFLGVBQUcsRUFBQyxxQkFGTjtBQUU0QixlQUFHLEVBQUM7QUFGaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQWtCRTtBQUNFLHFCQUFNLHlDQURSO0FBRUUsZUFBRyxFQUFDLHFCQUZOO0FBRTRCLGVBQUcsRUFBQztBQUZoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRixlQXNCRTtBQUNFLHFCQUFNLHlDQURSO0FBRUUsZUFBRyxFQUFDLHFCQUZOO0FBRTRCLGVBQUcsRUFBQztBQUZoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBcUZFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5RkQsQ0FwSEQ7O0dBQU0xQixJOztLQUFBQSxJO0FBcUhTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IEtsaW5rZXJXb3JrID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBiZW5pZml0cyA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qga2V5RmVhdHVyZSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW21haW5IZWFkZXIsIHNldE1haW5IZWFkZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaWduVXBJbWFnZSwgc2V0U2lnblVwSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcmRlckltYWdlLCBzZXRPcmRlckltYWdlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbW9iaWxlaGVhZGVyQWN0aXZlLCBzZXRNb2JpbGVoZWFkZXJBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1vYmlsZUhlYWRlclN0YXR1cyA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVoZWFkZXJBY3RpdmUoIW1vYmlsZWhlYWRlckFjdGl2ZSk7XG4gIH07XG4gIGNvbnN0IHNjcm9sbFJlZiA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgaWQpO1xuICAgIGlkLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBjb25zb2xlLmxvZyhcImZ1bmN0aW9uXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUltYWdlID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coeyB2YWx1ZSB9KTtcbiAgICB2YWx1ZSA9PT0gXCJzaWdudXBcIlxuICAgICAgPyBzZXRTaWduVXBJbWFnZShcInNpZ251cFwiKVxuICAgICAgOiB2YWx1ZSA9PT0gXCJvcmRlclwiXG4gICAgICAgID8gc2V0U2lnblVwSW1hZ2UoXCJvcmRlclwiKVxuICAgICAgICA6IHNldFNpZ25VcEltYWdlKFwicmVzdFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBiZy13aGl0ZVwiIHN0eWxlPXt7IHNjcm9sbEJlaGF2aW9yOiBcInNtb290aFwiIH19PlxuICAgICAgPGRpdiBjbGFzcz1cIm1heC13ICBmbGV4LXJvd1wiPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgbWFpbkhlYWRlcj17bWFpbkhlYWRlcn1cbiAgICAgICAgICBzY3JvbGxSZWZmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgS2xpbmtlcldvcms9e0tsaW5rZXJXb3JrfVxuICAgICAgICAgIGJlbmlmaXRzPXtiZW5pZml0c31cbiAgICAgICAgICBrZXlGZWF0dXJlPXtrZXlGZWF0dXJlfVxuICAgICAgICAgIG1vYmlsZUhlYWRlclN0YXR1cz17bW9iaWxlSGVhZGVyU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgICA8bWFpblxuICAgICAgICAgIGNsYXNzPXtcbiAgICAgICAgICAgIG1vYmlsZWhlYWRlckFjdGl2ZSA/IFwiIG1heC13LWZ1bGwgbXQtNTIgbWQ6bXQtMFwiIDogXCIgbWF4LXctZnVsbFwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZDllY2ZmXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbGc6aW5zZXQteS0wIGFic29sdXRlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LXNjcmVlbiB6LTEwXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9oZXJvU2VjdGlvbi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFic29sdXRlIG9wYWNpdHktMzAgbGVmdC0xLzQgdG9wLTIvNCB6LTQwXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM1OTQ4NDNcIiwgaGVpZ2h0OiBcIjMwdmhcIiwgd2lkdGg6IFwiMjB2d1wiIH19PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTZcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+RW1wdHkgRGl2PC9wPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDhcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+RW1wdHkgRGl2PC9wPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOnBiLTE2IG1iLTEyIGxnOm1iLTE2IG10LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXNjcmVlbi14bCBweC0zNiBnYXAtMyBteC1hdXRvIGxnOnB4LTggeGw6cHgtNCBncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zICB4bDpncmlkLWNvbHMtNiBiZy15ZWxsb3ctNTAwXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGp1c3RpZnktc2VsZi1jZW50ZXIgYmctZ3JlZW4tMzAwXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9SZWN0YW5nbGUgKDMpLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBwLTEgc2VsZi1lbmQganVzdGlmeS1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIHNyYz1cIi4vUmVjdGFuZ2xlICg0KS5wbmdcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgcC0xIHNlbGYtZW5kIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCIuL1JlY3RhbmdsZSAoNSkucG5nXCIgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIHAtMSBzZWxmLWVuZCBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9SZWN0YW5nbGUgKDYpLnBuZ1wiIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBwLTEgc2VsZi1lbmQganVzdGlmeS1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIHNyYz1cIi4vUmVjdGFuZ2xlICg3KS5wbmdcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgcC0xIHNlbGYtZW5kIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCIuL1JlY3RhbmdsZSAoOCkucG5nXCIgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzcz1cImxnOnRleHQtbGVmdCBtZDpweC0yMCBweC01IGJnLWJsdWUtMTAwIHB0LTEgcGItMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtc20gdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTN4bCBtZDp0ZXh0LTN4bCBteS03XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiB0ZXh0LTR4bCBsZWFkaW5nLTggZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS01MDAgc206dGV4dC00eGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICBUZXN0aW1vbmlhbHNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMiBtYi00IHRleHQteGwgbGVhZGluZy04IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTcwMCBzbTp0ZXh0LXhsIGZsZXgganVzdGlmeS1jZW50ZXIgIG1kOm14LTQ4IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXZSBhcmUgdmVyeSBmb3J0dW5hdGUgdG8gaGF2ZSBmb3JtZWQgZXhjZWxsZW50IHBhcnRuZXJzaGlwcyB3aXRoXG4gICAgICAgICAgICBtYW55IG9mIG91ciBjbGllbnRzLiBBbmQgd2XigJl2ZSBmb3JtZWQgbW9yZSB0aGFuIGp1c3Qgd29ya2luZ1xuICAgICAgICAgICAgcmVsYXRpb25zaGlwcyB3aXRoIHRoZW07IHdlIGhhdmUgZm9ybWVkIHRydWUgZnJpZW5kc2hpcHMuIEhlcmXigJlzXG4gICAgICAgICAgICB3aGF0IHRoZXnigJlyZSBzYXlpbmcgYWJvdXQgdXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxUZXN0aW1vbmlhbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMjIwXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiNEQkVBRkVcIlxuICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjFcIlxuICAgICAgICAgIGQ9XCJNMCwyMjRMNjAsMjE4LjdDMTIwLDIxMywyNDAsMjAzLDM2MCwxODEuM0M0ODAsMTYwLDYwMCwxMjgsNzIwLDEwNi43Qzg0MCw4NSw5NjAsNzUsMTA4MCw2OS4zQzEyMDAsNjQsMTMyMCw2NCwxMzgwLDY0TDE0NDAsNjRMMTQ0MCwwTDEzODAsMEMxMzIwLDAsMTIwMCwwLDEwODAsMEM5NjAsMCw4NDAsMCw3MjAsMEM2MDAsMCw0ODAsMCwzNjAsMEMyNDAsMCwxMjAsMCw2MCwwTDAsMFpcIlxuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+ICovfVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})