webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/malik/dev/Demianaragon/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var KlinkerWork = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var benifits = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var keyFeature = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      mainHeader = _useState[0],\n      setMainHeader = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      signUpImage = _useState2[0],\n      setSignUpImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      orderImage = _useState3[0],\n      setOrderImage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      mobileheaderActive = _useState4[0],\n      setMobileheaderActive = _useState4[1];\n\n  var mobileHeaderStatus = function mobileHeaderStatus() {\n    setMobileheaderActive(!mobileheaderActive);\n  };\n\n  var scrollRef = function scrollRef(id) {\n    console.log(\"value\", id);\n    id.current.scrollIntoView();\n    console.log(\"function\");\n  };\n\n  var changeImage = function changeImage(value) {\n    console.log({\n      value: value\n    });\n    value === \"signup\" ? setSignUpImage(\"signup\") : value === \"order\" ? setSignUpImage(\"order\") : setSignUpImage(\"rest\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"relative bg-white\",\n    style: {\n      scrollBehavior: \"smooth\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"max-w  flex-row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mainHeader: mainHeader,\n        scrollReff: scrollRef,\n        KlinkerWork: KlinkerWork,\n        benifits: benifits,\n        keyFeature: keyFeature,\n        mobileHeaderStatus: mobileHeaderStatus\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        \"class\": mobileheaderActive ? \" max-w-full mt-52 md:mt-0\" : \" max-w-full\",\n        style: {\n          backgroundColor: \"#d9ecff\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \" lg:inset-y-0 absolute\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"h-full w-screen z-10\",\n            src: \"./heroSection.png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"h-10 w-3/12 absolute bg-gray-700 opacity-30 left-10 top-2/4 z-40\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-96\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-white\",\n          children: \"Empty Div\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 31\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-48\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-white\",\n          children: \"Empty Div\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 31\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \" lg:pb-16 mb-12 lg:mb-16 mt-20\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"max-w-screen-xl px-36 gap-3 mx-auto lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-6 bg-yellow-500\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full justify-self-center bg-green-300\",\n            src: \"./Rectangle (3).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (4).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (5).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (6).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (7).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-full p-1 self-end justify-self-center\",\n            src: \"./Rectangle (8).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"m8yrRcvrqi4dN8PkquVv4PgwhoE=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiS2xpbmtlcldvcmsiLCJ1c2VSZWYiLCJiZW5pZml0cyIsImtleUZlYXR1cmUiLCJ1c2VTdGF0ZSIsIm1haW5IZWFkZXIiLCJzZXRNYWluSGVhZGVyIiwic2lnblVwSW1hZ2UiLCJzZXRTaWduVXBJbWFnZSIsIm9yZGVySW1hZ2UiLCJzZXRPcmRlckltYWdlIiwibW9iaWxlaGVhZGVyQWN0aXZlIiwic2V0TW9iaWxlaGVhZGVyQWN0aXZlIiwibW9iaWxlSGVhZGVyU3RhdHVzIiwic2Nyb2xsUmVmIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiY2hhbmdlSW1hZ2UiLCJ2YWx1ZSIsInNjcm9sbEJlaGF2aW9yIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBekI7O0FBSGlCLGtCQUltQkcsc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJVkMsVUFKVTtBQUFBLE1BSUVDLGFBSkY7O0FBQUEsbUJBS3FCRixzREFBUSxDQUFDLEVBQUQsQ0FMN0I7QUFBQSxNQUtWRyxXQUxVO0FBQUEsTUFLR0MsY0FMSDs7QUFBQSxtQkFNbUJKLHNEQUFRLENBQUMsSUFBRCxDQU4zQjtBQUFBLE1BTVZLLFVBTlU7QUFBQSxNQU1FQyxhQU5GOztBQUFBLG1CQU9tQ04sc0RBQVEsQ0FBQyxLQUFELENBUDNDO0FBQUEsTUFPVk8sa0JBUFU7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QU0seUNBRFI7QUFFRSxlQUFHLEVBQUMscUJBRk47QUFFNEIsZUFBRyxFQUFDO0FBRmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGLGVBc0JFO0FBQ0UscUJBQU0seUNBRFI7QUFFRSxlQUFHLEVBQUMscUJBRk47QUFFNEIsZUFBRyxFQUFDO0FBRmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFxRkUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlGRCxDQXBIRDs7R0FBTXhCLEk7O0tBQUFBLEk7QUFxSFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgS2xpbmtlcldvcmsgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGJlbmlmaXRzID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBrZXlGZWF0dXJlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbWFpbkhlYWRlciwgc2V0TWFpbkhlYWRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NpZ25VcEltYWdlLCBzZXRTaWduVXBJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29yZGVySW1hZ2UsIHNldE9yZGVySW1hZ2VdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttb2JpbGVoZWFkZXJBY3RpdmUsIHNldE1vYmlsZWhlYWRlckFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbW9iaWxlSGVhZGVyU3RhdHVzID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZWhlYWRlckFjdGl2ZSghbW9iaWxlaGVhZGVyQWN0aXZlKTtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCBpZCk7XG4gICAgaWQuY3VycmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIGNvbnNvbGUubG9nKFwiZnVuY3Rpb25cIik7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IHZhbHVlIH0pO1xuICAgIHZhbHVlID09PSBcInNpZ251cFwiXG4gICAgICA/IHNldFNpZ25VcEltYWdlKFwic2lnbnVwXCIpXG4gICAgICA6IHZhbHVlID09PSBcIm9yZGVyXCJcbiAgICAgICAgPyBzZXRTaWduVXBJbWFnZShcIm9yZGVyXCIpXG4gICAgICAgIDogc2V0U2lnblVwSW1hZ2UoXCJyZXN0XCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGJnLXdoaXRlXCIgc3R5bGU9e3sgc2Nyb2xsQmVoYXZpb3I6IFwic21vb3RoXCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWF4LXcgIGZsZXgtcm93XCI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBtYWluSGVhZGVyPXttYWluSGVhZGVyfVxuICAgICAgICAgIHNjcm9sbFJlZmY9e3Njcm9sbFJlZn1cbiAgICAgICAgICBLbGlua2VyV29yaz17S2xpbmtlcldvcmt9XG4gICAgICAgICAgYmVuaWZpdHM9e2JlbmlmaXRzfVxuICAgICAgICAgIGtleUZlYXR1cmU9e2tleUZlYXR1cmV9XG4gICAgICAgICAgbW9iaWxlSGVhZGVyU3RhdHVzPXttb2JpbGVIZWFkZXJTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxtYWluXG4gICAgICAgICAgY2xhc3M9e1xuICAgICAgICAgICAgbW9iaWxlaGVhZGVyQWN0aXZlID8gXCIgbWF4LXctZnVsbCBtdC01MiBtZDptdC0wXCIgOiBcIiBtYXgtdy1mdWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNkOWVjZmZcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzppbnNldC15LTAgYWJzb2x1dGVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctc2NyZWVuIHotMTBcIlxuICAgICAgICAgICAgICBzcmM9XCIuL2hlcm9TZWN0aW9uLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwIHctMy8xMiBhYnNvbHV0ZSBiZy1ncmF5LTcwMCBvcGFjaXR5LTMwIGxlZnQtMTAgdG9wLTIvNCB6LTQwXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05NlwiPjxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5FbXB0eSBEaXY8L3A+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00OFwiPjxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5FbXB0eSBEaXY8L3A+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIgbGc6cGItMTYgbWItMTIgbGc6bWItMTYgbXQtMjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctc2NyZWVuLXhsIHB4LTM2IGdhcC0zIG14LWF1dG8gbGc6cHgtOCB4bDpweC00IGdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgIHhsOmdyaWQtY29scy02IGJnLXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwganVzdGlmeS1zZWxmLWNlbnRlciBiZy1ncmVlbi0zMDBcIlxuICAgICAgICAgICAgICBzcmM9XCIuL1JlY3RhbmdsZSAoMykucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIHAtMSBzZWxmLWVuZCBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9SZWN0YW5nbGUgKDQpLnBuZ1wiIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBwLTEgc2VsZi1lbmQganVzdGlmeS1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIHNyYz1cIi4vUmVjdGFuZ2xlICg1KS5wbmdcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgcC0xIHNlbGYtZW5kIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCIuL1JlY3RhbmdsZSAoNikucG5nXCIgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIHAtMSBzZWxmLWVuZCBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9SZWN0YW5nbGUgKDcpLnBuZ1wiIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBwLTEgc2VsZi1lbmQganVzdGlmeS1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIHNyYz1cIi4vUmVjdGFuZ2xlICg4KS5wbmdcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzPVwibGc6dGV4dC1sZWZ0IG1kOnB4LTIwIHB4LTUgYmctYmx1ZS0xMDAgcHQtMSBwYi0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1zbSB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtM3hsIG1kOnRleHQtM3hsIG15LTdcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiIHRleHQtNHhsIGxlYWRpbmctOCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBzbTp0ZXh0LTR4bCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIFRlc3RpbW9uaWFsc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0yIG1iLTQgdGV4dC14bCBsZWFkaW5nLTggZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktNzAwIHNtOnRleHQteGwgZmxleCBqdXN0aWZ5LWNlbnRlciAgbWQ6bXgtNDggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIFdlIGFyZSB2ZXJ5IGZvcnR1bmF0ZSB0byBoYXZlIGZvcm1lZCBleGNlbGxlbnQgcGFydG5lcnNoaXBzIHdpdGhcbiAgICAgICAgICAgIG1hbnkgb2Ygb3VyIGNsaWVudHMuIEFuZCB3ZeKAmXZlIGZvcm1lZCBtb3JlIHRoYW4ganVzdCB3b3JraW5nXG4gICAgICAgICAgICByZWxhdGlvbnNoaXBzIHdpdGggdGhlbTsgd2UgaGF2ZSBmb3JtZWQgdHJ1ZSBmcmllbmRzaGlwcy4gSGVyZeKAmXNcbiAgICAgICAgICAgIHdoYXQgdGhleeKAmXJlIHNheWluZyBhYm91dCB1cy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFRlc3RpbW9uaWFsIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgey8qIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQ0MCAyMjBcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiI0RCRUFGRVwiXG4gICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMVwiXG4gICAgICAgICAgZD1cIk0wLDIyNEw2MCwyMTguN0MxMjAsMjEzLDI0MCwyMDMsMzYwLDE4MS4zQzQ4MCwxNjAsNjAwLDEyOCw3MjAsMTA2LjdDODQwLDg1LDk2MCw3NSwxMDgwLDY5LjNDMTIwMCw2NCwxMzIwLDY0LDEzODAsNjRMMTQ0MCw2NEwxNDQwLDBMMTM4MCwwQzEzMjAsMCwxMjAwLDAsMTA4MCwwQzk2MCwwLDg0MCwwLDcyMCwwQzYwMCwwLDQ4MCwwLDM2MCwwQzI0MCwwLDEyMCwwLDYwLDBMMCwwWlwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz4gKi99XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})