webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/malik/dev/Demianaragon/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var KlinkerWork = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var benifits = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var keyFeature = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      mainHeader = _useState[0],\n      setMainHeader = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      signUpImage = _useState2[0],\n      setSignUpImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      orderImage = _useState3[0],\n      setOrderImage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      mobileheaderActive = _useState4[0],\n      setMobileheaderActive = _useState4[1];\n\n  var mobileHeaderStatus = function mobileHeaderStatus() {\n    setMobileheaderActive(!mobileheaderActive);\n  };\n\n  var scrollRef = function scrollRef(id) {\n    console.log(\"value\", id);\n    id.current.scrollIntoView();\n    console.log(\"function\");\n  };\n\n  var changeImage = function changeImage(value) {\n    console.log({\n      value: value\n    });\n    value === \"signup\" ? setSignUpImage(\"signup\") : value === \"order\" ? setSignUpImage(\"order\") : setSignUpImage(\"rest\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"relative bg-white\",\n    style: {\n      scrollBehavior: \"smooth\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"max-w  flex-row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mainHeader: mainHeader,\n        scrollReff: scrollRef,\n        KlinkerWork: KlinkerWork,\n        benifits: benifits,\n        keyFeature: keyFeature,\n        mobileHeaderStatus: mobileHeaderStatus\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        \"class\": mobileheaderActive ? \" max-w-full mt-52 md:mt-0\" : \" max-w-full\",\n        style: {\n          backgroundColor: \"#d9ecff\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \" lg:inset-y-0 absolute\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"h-full w-screen\",\n            src: \"./heroSection.png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-96\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-white\",\n          children: \"Empty Div\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 31\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-48\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-white\",\n          children: \"Empty Div\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 31\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \" lg:pb-16 mb-12 lg:mb-16 mt-20\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-6 col-gap-6\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-4/12 p-1 self-end justify-self-center\",\n            src: \"./Rectangle (3).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-4/12 p-1 self-end justify-self-center\",\n            src: \"./Rectangle (4).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-4/12 p-1 self-end justify-self-center\",\n            src: \"./Rectangle (5).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-4/12 p-1 self-end justify-self-center\",\n            src: \"./Rectangle (6).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-4/12 p-1 self-end justify-self-center\",\n            src: \"./Rectangle (7).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"w-4/12 p-1 self-end justify-self-center\",\n            src: \"./Rectangle (8).png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"m8yrRcvrqi4dN8PkquVv4PgwhoE=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiS2xpbmtlcldvcmsiLCJ1c2VSZWYiLCJiZW5pZml0cyIsImtleUZlYXR1cmUiLCJ1c2VTdGF0ZSIsIm1haW5IZWFkZXIiLCJzZXRNYWluSGVhZGVyIiwic2lnblVwSW1hZ2UiLCJzZXRTaWduVXBJbWFnZSIsIm9yZGVySW1hZ2UiLCJzZXRPcmRlckltYWdlIiwibW9iaWxlaGVhZGVyQWN0aXZlIiwic2V0TW9iaWxlaGVhZGVyQWN0aXZlIiwibW9iaWxlSGVhZGVyU3RhdHVzIiwic2Nyb2xsUmVmIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiY2hhbmdlSW1hZ2UiLCJ2YWx1ZSIsInNjcm9sbEJlaGF2aW9yIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBekI7O0FBSGlCLGtCQUltQkcsc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJVkMsVUFKVTtBQUFBLE1BSUVDLGFBSkY7O0FBQUEsbUJBS3FCRixzREFBUSxDQUFDLEVBQUQsQ0FMN0I7QUFBQSxNQUtWRyxXQUxVO0FBQUEsTUFLR0MsY0FMSDs7QUFBQSxtQkFNbUJKLHNEQUFRLENBQUMsSUFBRCxDQU4zQjtBQUFBLE1BTVZLLFVBTlU7QUFBQSxNQU1FQyxhQU5GOztBQUFBLG1CQU9tQ04sc0RBQVEsQ0FBQyxLQUFELENBUDNDO0FBQUEsTUFPVk8sa0JBUFU7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QUFBO0FBQUE7QUFBQSxtQkFsQkYsZUFzQkU7QUFDRSxxQkFBTSx5Q0FEUjtBQUVFLGVBQUcsRUFBQyxxQkFGTjtBQUU0QixlQUFHLEVBQUM7QUFGaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQW9GRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0ZELENBbkhEOztHQUFNeEIsSTs7S0FBQUEsSTtBQW9IU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBLbGlua2VyV29yayA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgYmVuaWZpdHMgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGtleUZlYXR1cmUgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFttYWluSGVhZGVyLCBzZXRNYWluSGVhZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2lnblVwSW1hZ2UsIHNldFNpZ25VcEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3JkZXJJbWFnZSwgc2V0T3JkZXJJbWFnZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW21vYmlsZWhlYWRlckFjdGl2ZSwgc2V0TW9iaWxlaGVhZGVyQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtb2JpbGVIZWFkZXJTdGF0dXMgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlaGVhZGVyQWN0aXZlKCFtb2JpbGVoZWFkZXJBY3RpdmUpO1xuICB9O1xuICBjb25zdCBzY3JvbGxSZWYgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIGlkKTtcbiAgICBpZC5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgY29uc29sZS5sb2coXCJmdW5jdGlvblwiKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VJbWFnZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHsgdmFsdWUgfSk7XG4gICAgdmFsdWUgPT09IFwic2lnbnVwXCJcbiAgICAgID8gc2V0U2lnblVwSW1hZ2UoXCJzaWdudXBcIilcbiAgICAgIDogdmFsdWUgPT09IFwib3JkZXJcIlxuICAgICAgICA/IHNldFNpZ25VcEltYWdlKFwib3JkZXJcIilcbiAgICAgICAgOiBzZXRTaWduVXBJbWFnZShcInJlc3RcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgYmctd2hpdGVcIiBzdHlsZT17eyBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIiB9fT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdyAgZmxleC1yb3dcIj5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIG1haW5IZWFkZXI9e21haW5IZWFkZXJ9XG4gICAgICAgICAgc2Nyb2xsUmVmZj17c2Nyb2xsUmVmfVxuICAgICAgICAgIEtsaW5rZXJXb3JrPXtLbGlua2VyV29ya31cbiAgICAgICAgICBiZW5pZml0cz17YmVuaWZpdHN9XG4gICAgICAgICAga2V5RmVhdHVyZT17a2V5RmVhdHVyZX1cbiAgICAgICAgICBtb2JpbGVIZWFkZXJTdGF0dXM9e21vYmlsZUhlYWRlclN0YXR1c31cbiAgICAgICAgLz5cbiAgICAgICAgPG1haW5cbiAgICAgICAgICBjbGFzcz17XG4gICAgICAgICAgICBtb2JpbGVoZWFkZXJBY3RpdmUgPyBcIiBtYXgtdy1mdWxsIG10LTUyIG1kOm10LTBcIiA6IFwiIG1heC13LWZ1bGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Q5ZWNmZlwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOmluc2V0LXktMCBhYnNvbHV0ZVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1zY3JlZW5cIlxuICAgICAgICAgICAgICBzcmM9XCIuL2hlcm9TZWN0aW9uLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTZcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+RW1wdHkgRGl2PC9wPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDhcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+RW1wdHkgRGl2PC9wPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOnBiLTE2IG1iLTEyIGxnOm1iLTE2IG10LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXNjcmVlbi14bCBteC1hdXRvIHB4LTYgbGc6cHgtOCB4bDpweC00IGdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgIHhsOmdyaWQtY29scy02IGNvbC1nYXAtNlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctNC8xMiBwLTEgc2VsZi1lbmQganVzdGlmeS1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIHNyYz1cIi4vUmVjdGFuZ2xlICgzKS5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LTQvMTIgcC0xIHNlbGYtZW5kIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCIuL1JlY3RhbmdsZSAoNCkucG5nXCIgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwidy00LzEyIHAtMSBzZWxmLWVuZCBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9SZWN0YW5nbGUgKDUpLnBuZ1wiIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctNC8xMiBwLTEgc2VsZi1lbmQganVzdGlmeS1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIHNyYz1cIi4vUmVjdGFuZ2xlICg2KS5wbmdcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LTQvMTIgcC0xIHNlbGYtZW5kIGp1c3RpZnktc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCIuL1JlY3RhbmdsZSAoNykucG5nXCIgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwidy00LzEyIHAtMSBzZWxmLWVuZCBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9SZWN0YW5nbGUgKDgpLnBuZ1wiIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cblxuICAgICAgey8qIDxkaXYgY2xhc3M9XCJsZzp0ZXh0LWxlZnQgbWQ6cHgtMjAgcHgtNSBiZy1ibHVlLTEwMCBwdC0xIHBiLTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXNtIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgc206dGV4dC0zeGwgbWQ6dGV4dC0zeGwgbXktN1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIgdGV4dC00eGwgbGVhZGluZy04IGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktNTAwIHNtOnRleHQtNHhsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgVGVzdGltb25pYWxzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTIgbWItNCB0ZXh0LXhsIGxlYWRpbmctOCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS03MDAgc206dGV4dC14bCBmbGV4IGp1c3RpZnktY2VudGVyICBtZDpteC00OCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgV2UgYXJlIHZlcnkgZm9ydHVuYXRlIHRvIGhhdmUgZm9ybWVkIGV4Y2VsbGVudCBwYXJ0bmVyc2hpcHMgd2l0aFxuICAgICAgICAgICAgbWFueSBvZiBvdXIgY2xpZW50cy4gQW5kIHdl4oCZdmUgZm9ybWVkIG1vcmUgdGhhbiBqdXN0IHdvcmtpbmdcbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcHMgd2l0aCB0aGVtOyB3ZSBoYXZlIGZvcm1lZCB0cnVlIGZyaWVuZHNoaXBzLiBIZXJl4oCZc1xuICAgICAgICAgICAgd2hhdCB0aGV54oCZcmUgc2F5aW5nIGFib3V0IHVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8VGVzdGltb25pYWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDIyMFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCIjREJFQUZFXCJcbiAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIxXCJcbiAgICAgICAgICBkPVwiTTAsMjI0TDYwLDIxOC43QzEyMCwyMTMsMjQwLDIwMywzNjAsMTgxLjNDNDgwLDE2MCw2MDAsMTI4LDcyMCwxMDYuN0M4NDAsODUsOTYwLDc1LDEwODAsNjkuM0MxMjAwLDY0LDEzMjAsNjQsMTM4MCw2NEwxNDQwLDY0TDE0NDAsMEwxMzgwLDBDMTMyMCwwLDEyMDAsMCwxMDgwLDBDOTYwLDAsODQwLDAsNzIwLDBDNjAwLDAsNDgwLDAsMzYwLDBDMjQwLDAsMTIwLDAsNjAsMEwwLDBaXCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPiAqL31cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})