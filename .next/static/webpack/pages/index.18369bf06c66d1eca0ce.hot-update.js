webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/malik/dev/Demianaragon/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var KlinkerWork = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var benifits = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var keyFeature = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      mainHeader = _useState[0],\n      setMainHeader = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      signUpImage = _useState2[0],\n      setSignUpImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      orderImage = _useState3[0],\n      setOrderImage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      mobileheaderActive = _useState4[0],\n      setMobileheaderActive = _useState4[1];\n\n  var mobileHeaderStatus = function mobileHeaderStatus() {\n    setMobileheaderActive(!mobileheaderActive);\n  };\n\n  var scrollRef = function scrollRef(id) {\n    console.log(\"value\", id);\n    id.current.scrollIntoView();\n    console.log(\"function\");\n  };\n\n  var changeImage = function changeImage(value) {\n    console.log({\n      value: value\n    });\n    value === \"signup\" ? setSignUpImage(\"signup\") : value === \"order\" ? setSignUpImage(\"order\") : setSignUpImage(\"rest\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"relative bg-white\",\n    style: {\n      scrollBehavior: \"smooth\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"max-w  flex-row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mainHeader: mainHeader,\n        scrollReff: scrollRef,\n        KlinkerWork: KlinkerWork,\n        benifits: benifits,\n        keyFeature: keyFeature,\n        mobileHeaderStatus: mobileHeaderStatus\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        \"class\": mobileheaderActive ? \" max-w-full mt-52 md:mt-0\" : \" max-w-full\",\n        style: {\n          backgroundColor: \"#d9ecff\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \" lg:inset-y-0 absolute\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"h-full w-screen\",\n            src: \"./heroSection.png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"m8yrRcvrqi4dN8PkquVv4PgwhoE=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiS2xpbmtlcldvcmsiLCJ1c2VSZWYiLCJiZW5pZml0cyIsImtleUZlYXR1cmUiLCJ1c2VTdGF0ZSIsIm1haW5IZWFkZXIiLCJzZXRNYWluSGVhZGVyIiwic2lnblVwSW1hZ2UiLCJzZXRTaWduVXBJbWFnZSIsIm9yZGVySW1hZ2UiLCJzZXRPcmRlckltYWdlIiwibW9iaWxlaGVhZGVyQWN0aXZlIiwic2V0TW9iaWxlaGVhZGVyQWN0aXZlIiwibW9iaWxlSGVhZGVyU3RhdHVzIiwic2Nyb2xsUmVmIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiY2hhbmdlSW1hZ2UiLCJ2YWx1ZSIsInNjcm9sbEJlaGF2aW9yIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBekI7O0FBSGlCLGtCQUltQkcsc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJVkMsVUFKVTtBQUFBLE1BSUVDLGFBSkY7O0FBQUEsbUJBS3FCRixzREFBUSxDQUFDLEVBQUQsQ0FMN0I7QUFBQSxNQUtWRyxXQUxVO0FBQUEsTUFLR0MsY0FMSDs7QUFBQSxtQkFNbUJKLHNEQUFRLENBQUMsSUFBRCxDQU4zQjtBQUFBLE1BTVZLLFVBTlU7QUFBQSxNQU1FQyxhQU5GOztBQUFBLG1CQU9tQ04sc0RBQVEsQ0FBQyxLQUFELENBUDNDO0FBQUEsTUFPVk8sa0JBUFU7QUFBQSxNQU9VQyxxQkFQVjs7QUFTakIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CRCx5QkFBcUIsQ0FBQyxDQUFDRCxrQkFBRixDQUFyQjtBQUNELEdBRkQ7O0FBR0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsRUFBRCxFQUFRO0FBQ3hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixFQUFyQjtBQUNBQSxNQUFFLENBQUNHLE9BQUgsQ0FBV0MsY0FBWDtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0JMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVJLFdBQUssRUFBTEE7QUFBRixLQUFaO0FBQ0FBLFNBQUssS0FBSyxRQUFWLEdBQ0liLGNBQWMsQ0FBQyxRQUFELENBRGxCLEdBRUlhLEtBQUssS0FBSyxPQUFWLEdBQ0ViLGNBQWMsQ0FBQyxPQUFELENBRGhCLEdBRUVBLGNBQWMsQ0FBQyxNQUFELENBSnBCO0FBS0QsR0FQRDs7QUFTQSxzQkFDRTtBQUFLLGFBQU0sbUJBQVg7QUFBK0IsU0FBSyxFQUFFO0FBQUVjLG9CQUFjLEVBQUU7QUFBbEIsS0FBdEM7QUFBQSw0QkFDRTtBQUFLLGVBQU0saUJBQVg7QUFBQSw4QkFDRSxxRUFBQywwREFBRDtBQUNFLGtCQUFVLEVBQUVqQixVQURkO0FBRUUsa0JBQVUsRUFBRVMsU0FGZDtBQUdFLG1CQUFXLEVBQUVkLFdBSGY7QUFJRSxnQkFBUSxFQUFFRSxRQUpaO0FBS0Usa0JBQVUsRUFBRUMsVUFMZDtBQU1FLDBCQUFrQixFQUFFVTtBQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFTRTtBQUNFLGlCQUNFRixrQkFBa0IsR0FBRywyQkFBSCxHQUFpQyxhQUZ2RDtBQUlFLGFBQUssRUFBRTtBQUFFWSx5QkFBZSxFQUFFO0FBQW5CLFNBSlQ7QUFBQSwrQkFNRTtBQUFLLG1CQUFNLHdCQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLGlCQURaO0FBRUUsZUFBRyxFQUFDLG1CQUZOO0FBR0UsZUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF3REUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRERCxDQXZGRDs7R0FBTXhCLEk7O0tBQUFBLEk7QUF3RlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgS2xpbmtlcldvcmsgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGJlbmlmaXRzID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBrZXlGZWF0dXJlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbWFpbkhlYWRlciwgc2V0TWFpbkhlYWRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NpZ25VcEltYWdlLCBzZXRTaWduVXBJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29yZGVySW1hZ2UsIHNldE9yZGVySW1hZ2VdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttb2JpbGVoZWFkZXJBY3RpdmUsIHNldE1vYmlsZWhlYWRlckFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbW9iaWxlSGVhZGVyU3RhdHVzID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZWhlYWRlckFjdGl2ZSghbW9iaWxlaGVhZGVyQWN0aXZlKTtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCBpZCk7XG4gICAgaWQuY3VycmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIGNvbnNvbGUubG9nKFwiZnVuY3Rpb25cIik7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IHZhbHVlIH0pO1xuICAgIHZhbHVlID09PSBcInNpZ251cFwiXG4gICAgICA/IHNldFNpZ25VcEltYWdlKFwic2lnbnVwXCIpXG4gICAgICA6IHZhbHVlID09PSBcIm9yZGVyXCJcbiAgICAgICAgPyBzZXRTaWduVXBJbWFnZShcIm9yZGVyXCIpXG4gICAgICAgIDogc2V0U2lnblVwSW1hZ2UoXCJyZXN0XCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGJnLXdoaXRlXCIgc3R5bGU9e3sgc2Nyb2xsQmVoYXZpb3I6IFwic21vb3RoXCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWF4LXcgIGZsZXgtcm93XCI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBtYWluSGVhZGVyPXttYWluSGVhZGVyfVxuICAgICAgICAgIHNjcm9sbFJlZmY9e3Njcm9sbFJlZn1cbiAgICAgICAgICBLbGlua2VyV29yaz17S2xpbmtlcldvcmt9XG4gICAgICAgICAgYmVuaWZpdHM9e2JlbmlmaXRzfVxuICAgICAgICAgIGtleUZlYXR1cmU9e2tleUZlYXR1cmV9XG4gICAgICAgICAgbW9iaWxlSGVhZGVyU3RhdHVzPXttb2JpbGVIZWFkZXJTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxtYWluXG4gICAgICAgICAgY2xhc3M9e1xuICAgICAgICAgICAgbW9iaWxlaGVhZGVyQWN0aXZlID8gXCIgbWF4LXctZnVsbCBtdC01MiBtZDptdC0wXCIgOiBcIiBtYXgtdy1mdWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNkOWVjZmZcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzppbnNldC15LTAgYWJzb2x1dGVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctc2NyZWVuXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi9oZXJvU2VjdGlvbi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L21haW4+XG5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG5cblxuICAgICAgey8qIDxkaXYgY2xhc3M9XCJsZzp0ZXh0LWxlZnQgbWQ6cHgtMjAgcHgtNSBiZy1ibHVlLTEwMCBwdC0xIHBiLTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXNtIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgc206dGV4dC0zeGwgbWQ6dGV4dC0zeGwgbXktN1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIgdGV4dC00eGwgbGVhZGluZy04IGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktNTAwIHNtOnRleHQtNHhsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgVGVzdGltb25pYWxzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTIgbWItNCB0ZXh0LXhsIGxlYWRpbmctOCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS03MDAgc206dGV4dC14bCBmbGV4IGp1c3RpZnktY2VudGVyICBtZDpteC00OCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgV2UgYXJlIHZlcnkgZm9ydHVuYXRlIHRvIGhhdmUgZm9ybWVkIGV4Y2VsbGVudCBwYXJ0bmVyc2hpcHMgd2l0aFxuICAgICAgICAgICAgbWFueSBvZiBvdXIgY2xpZW50cy4gQW5kIHdl4oCZdmUgZm9ybWVkIG1vcmUgdGhhbiBqdXN0IHdvcmtpbmdcbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcHMgd2l0aCB0aGVtOyB3ZSBoYXZlIGZvcm1lZCB0cnVlIGZyaWVuZHNoaXBzLiBIZXJl4oCZc1xuICAgICAgICAgICAgd2hhdCB0aGV54oCZcmUgc2F5aW5nIGFib3V0IHVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8VGVzdGltb25pYWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDIyMFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCIjREJFQUZFXCJcbiAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIxXCJcbiAgICAgICAgICBkPVwiTTAsMjI0TDYwLDIxOC43QzEyMCwyMTMsMjQwLDIwMywzNjAsMTgxLjNDNDgwLDE2MCw2MDAsMTI4LDcyMCwxMDYuN0M4NDAsODUsOTYwLDc1LDEwODAsNjkuM0MxMjAwLDY0LDEzMjAsNjQsMTM4MCw2NEwxNDQwLDY0TDE0NDAsMEwxMzgwLDBDMTMyMCwwLDEyMDAsMCwxMDgwLDBDOTYwLDAsODQwLDAsNzIwLDBDNjAwLDAsNDgwLDAsMzYwLDBDMjQwLDAsMTIwLDAsNjAsMEwwLDBaXCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPiAqL31cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})