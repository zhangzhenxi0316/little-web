(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************!*\
  !*** /Users/zzx/Project/little-web/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 19));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbkFwcC5tcFR5cGUgPSAnYXBwJ1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAuLi5BcHBcbn0pXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** /Users/zzx/Project/little-web/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/home/home', function () {return Vue.extend(__webpack_require__(/*! pages/home/home.vue?mpType=page */ 9).default);});

/***/ }),
/* 2 */
/*!***********************************************************************!*\
  !*** /Users/zzx/Project/little-web/pages/index/index.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************************************************************************************!*\
  !*** /Users/zzx/Project/little-web/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _vm._l(_vm._$s(1, "f", { forItems: _vm.deviceArray }), function(
        item,
        $10,
        $20,
        $30
      ) {
        return [
          _c(
            "view",
            {
              key: _vm._$s(1, "f", {
                forIndex: $20,
                keyIndex: 0,
                key: 1 + "-0" + $30
              }),
              staticClass: _vm._$s("2-" + $30, "sc", "device_box"),
              attrs: {
                "data-deviceId": _vm._$s(
                  "2-" + $30,
                  "a-data-deviceId",
                  item.ID
                ),
                "data-deviceName": _vm._$s(
                  "2-" + $30,
                  "a-data-deviceName",
                  item.name
                ),
                _i: "2-" + $30
              },
              on: { click: _vm.onLianTap }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s("3-" + $30, "sc", "device_NI"),
                  attrs: { _i: "3-" + $30 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("4-" + $30, "sc", "device_name"),
                      attrs: { _i: "4-" + $30 }
                    },
                    [_vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(item.name)))]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("5-" + $30, "sc", "device_id"),
                      attrs: { _i: "5-" + $30 }
                    },
                    [_vm._v(_vm._$s("5-" + $30, "t0-0", _vm._s(item.ID)))]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s("6-" + $30, "sc", "device_RSSI"),
                  attrs: { _i: "6-" + $30 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s("7-" + $30, "sc", "RSSI_img"),
                    attrs: {
                      src: _vm._$s("7-" + $30, "a-src", item.img),
                      _i: "7-" + $30
                    }
                  }),
                  _c("text", [
                    _vm._v(_vm._$s("8-" + $30, "t0-0", _vm._s(item.RSSI)))
                  ])
                ]
              )
            ]
          )
        ]
      })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***********************************************************************************************!*\
  !*** /Users/zzx/Project/little-web/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW90QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      userInfo: {},\n\n      deviceArray: [] };\n\n  },\n  onLoad: function onLoad() {\n    __f__(\"log\", 'onLoad', \" at pages/index/index.vue:28\");\n    var that = this;\n    var device = [];\n    //调用应用实例的方法获取全局数据\n    uni.getUserInfo(function (userInfo) {\n      //更新数据\n      that.userInfo = userInfo;\n\n    });\n    /* 初始化蓝牙适配器 */\n    uni.openBluetoothAdapter({\n      success: function success(res) {\n        __f__(\"log\", '初始化蓝牙适配器成功', \" at pages/index/index.vue:40\");\n        uni.startBluetoothDevicesDiscovery({\n          services: [],\n          allowDuplicatesKey: false,\n          success: function success(res) {\n            __f__(\"log\", '这里是开始搜索附近设备', res, \" at pages/index/index.vue:45\");\n            uni.onBluetoothDeviceFound(function (res) {\n              __f__(\"log\", \"成功\", res, \" at pages/index/index.vue:47\");\n\n\n              /* 获取设备信号，判断信号强度 */\n              var device_RSSI_1 = res.devices[0].RSSI;\n              var device_RSSI_2 = Number(device_RSSI_1);\n              var device_RSSI = Math.abs(device_RSSI_2);\n\n\n              if (device_RSSI <= 60) {\n\n                var img = \"../../static/images/signal4.png\";\n\n              } else if (device_RSSI > 60 && device_RSSI <= 70) {\n                var img = \"../../static/images/signal3.png\";\n\n              } else if (device_RSSI > 70 && device_RSSI <= 80) {\n\n                var img = \"../../static/images/signal2.png\";\n\n              } else if (device_RSSI > 80) {\n\n                var img = \"../../static/images/signal1.png\";\n\n              }\n\n\n              if (res.devices[0].name == \"\") {\n                var temp = {\n                  ID: res.devices[0].deviceId,\n                  name: \"Unknow device\",\n                  RSSI: res.devices[0].RSSI,\n                  img: img };\n\n              } else {\n                var temp = {\n                  ID: res.devices[0].deviceId,\n                  name: res.devices[0].name,\n                  RSSI: res.devices[0].RSSI,\n                  img: img };\n\n              }\n\n              device.push(temp);\n              that.device = device;\n\n              that.group(that.device, 'ID');\n            });\n          } });\n\n      } });\n\n  },\n  onShow: function onShow() {\n    var that = this;\n    uni.showLoading({\n      title: '请打开蓝牙重新进入小程序' });\n\n    var device = [];\n    uni.closeBluetoothAdapter({\n      success: function success(res) {\n        __f__(\"log\", '关闭蓝牙模块', \" at pages/index/index.vue:108\");\n        /* 初始化蓝牙适配器 */\n        uni.openBluetoothAdapter({\n          success: function success(res) {\n            __f__(\"log\", '初始化蓝牙适配器成功', \" at pages/index/index.vue:112\");\n            uni.hideLoading();\n            uni.startBluetoothDevicesDiscovery({\n              services: [],\n              allowDuplicatesKey: false,\n              success: function success(res) {\n                __f__(\"log\", '这里是开始搜索附近设备', res, \" at pages/index/index.vue:118\");\n                uni.onBluetoothDeviceFound(function (res) {\n                  __f__(\"log\", \"成功\", res, \" at pages/index/index.vue:120\");\n\n                  /* 获取设备信号，判断信号强度 */\n                  var device_RSSI_1 = res.devices[0].RSSI;\n                  var device_RSSI_2 = Number(device_RSSI_1);\n                  var device_RSSI = Math.abs(device_RSSI_2);\n                  if (device_RSSI <= 60) {\n\n                    var img = \"../../static/images/signal4.png\";\n\n                  } else if (device_RSSI > 60 && device_RSSI <= 70) {\n                    var img = \"../../static/images/signal3.png\";\n\n                  } else if (device_RSSI > 70 && device_RSSI <= 80) {\n\n                    var img = \"../../static/images/signal2.png\";\n\n                  } else if (device_RSSI > 80) {\n\n                    var img = \"../../static/images/signal1.png\";\n\n                  }\n\n\n                  if (res.devices[0].name == \"\") {\n                    var temp = {\n                      ID: res.devices[0].deviceId,\n                      name: \"Unknow device\",\n                      RSSI: res.devices[0].RSSI,\n                      img: img };\n\n                  } else {\n                    var temp = {\n                      ID: res.devices[0].deviceId,\n                      name: res.devices[0].name,\n                      RSSI: res.devices[0].RSSI,\n                      img: img };\n\n                  }\n                  device.push(temp);\n                  that.device = device;\n\n                  that.group(that.device, 'ID');\n                });\n              } });\n\n          } });\n\n\n      } });\n\n\n  },\n  onPullDownRefresh: function onPullDownRefresh() {\n    // var that = this;\n    __f__(\"log\", '开始下拉刷新事件', \" at pages/index/index.vue:175\");\n    uni.showNavigationBarLoading(); //加载动画开始\n    this.again_search();\n  },\n\n  methods: {\n    again_search: function again_search() {\n      var that = this;\n      var device = [];\n      uni.closeBluetoothAdapter({\n        success: function success(res) {\n          __f__(\"log\", '关闭蓝牙模块', \" at pages/index/index.vue:186\");\n        } });\n\n      /* 初始化蓝牙适配器 */\n      uni.openBluetoothAdapter({\n        success: function success(res) {\n          __f__(\"log\", '初始化蓝牙适配器成功', \" at pages/index/index.vue:192\");\n          uni.startBluetoothDevicesDiscovery({\n            services: [],\n            allowDuplicatesKey: false,\n            success: function success(res) {\n              __f__(\"log\", '这里是开始搜索附近设备', res, \" at pages/index/index.vue:197\");\n              uni.onBluetoothDeviceFound(function (res) {\n                __f__(\"log\", \"成功\", res, \" at pages/index/index.vue:199\");\n                uni.hideNavigationBarLoading(); //加载动画结束\n                uni.stopPullDownRefresh(); //停止当前页面的下拉刷新\n\n\n                /* 获取设备信号，判断信号强度 */\n                var device_RSSI_1 = res.devices[0].RSSI;\n                var device_RSSI_2 = Number(device_RSSI_1);\n                var device_RSSI = Math.abs(device_RSSI_2);\n                if (device_RSSI <= 60) {\n\n                  var img = \"../../static/images/signal4.png\";\n\n                } else if (device_RSSI > 60 && device_RSSI <= 70) {\n                  var img = \"../../static/images/signal3.png\";\n\n                } else if (device_RSSI > 70 && device_RSSI <= 80) {\n\n                  var img = \"../../static/images/signal2.png\";\n\n                } else if (device_RSSI > 80) {\n\n                  var img = \"../../static/images/signal1.png\";\n\n                }\n                if (res.devices[0].name == \"\") {\n                  var temp = {\n                    ID: res.devices[0].deviceId,\n                    name: \"Unknow device\",\n                    RSSI: res.devices[0].RSSI,\n                    img: img };\n\n                } else {\n                  var temp = {\n                    ID: res.devices[0].deviceId,\n                    name: res.devices[0].name,\n                    RSSI: res.devices[0].RSSI,\n                    img: img };\n\n                }\n                device.push(temp);\n                that.device = device;\n\n                that.group(that.device, 'ID');\n              });\n            } });\n\n        } });\n\n    },\n    /* 去重 */\n    group: function group(data, key) {\n      var that = this;\n      var obj = {},arr = [];\n      for (var a = 0; a < data.length; a++) {\n        if (!obj[data[a][key]]) {\n          obj[data[a][key]] = [data[a]];\n          arr.push(data[a]);\n          that.deviceArray = arr;\n\n        } else {\n          obj[data[a][key]].push(data[a]);\n        }\n      }\n    },\n    /* 点击事件 */\n    onLianTap: function onLianTap(event) {\n      // console.log(1111)\n      uni.stopBluetoothDevicesDiscovery({\n        success: function success(res) {\n          __f__(\"log\", '停止搜索设备', res, \" at pages/index/index.vue:269\");\n        } });\n\n      var title = event.currentTarget.dataset.deviceid;\n      var name = event.currentTarget.dataset.devicename;\n      // console.log(title,name)\n      uni.navigateTo({\n        url: '../home/home?id=' + title + '&name=' + name });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ1c2VySW5mbyIsImRldmljZUFycmF5Iiwib25Mb2FkIiwidGhhdCIsImRldmljZSIsInVuaSIsImdldFVzZXJJbmZvIiwib3BlbkJsdWV0b290aEFkYXB0ZXIiLCJzdWNjZXNzIiwicmVzIiwic3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5Iiwic2VydmljZXMiLCJhbGxvd0R1cGxpY2F0ZXNLZXkiLCJvbkJsdWV0b290aERldmljZUZvdW5kIiwiZGV2aWNlX1JTU0lfMSIsImRldmljZXMiLCJSU1NJIiwiZGV2aWNlX1JTU0lfMiIsIk51bWJlciIsImRldmljZV9SU1NJIiwiTWF0aCIsImFicyIsImltZyIsIm5hbWUiLCJ0ZW1wIiwiSUQiLCJkZXZpY2VJZCIsInB1c2giLCJncm91cCIsIm9uU2hvdyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJjbG9zZUJsdWV0b290aEFkYXB0ZXIiLCJoaWRlTG9hZGluZyIsIm9uUHVsbERvd25SZWZyZXNoIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwiYWdhaW5fc2VhcmNoIiwibWV0aG9kcyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJrZXkiLCJvYmoiLCJhcnIiLCJhIiwibGVuZ3RoIiwib25MaWFuVGFwIiwiZXZlbnQiLCJzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGV2aWNlaWQiLCJkZXZpY2VuYW1lIiwibmF2aWdhdGVUbyIsInVybCJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZEEsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTEMsY0FBUSxFQUFF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SixDQUFlO0FBQ1ZDLFdBQUcsRUFBRSxxQkFBcUJ0QixLQUFyQixHQUE2QixRQUE3QixHQUF3Q1IsSUFEbkMsRUFBZjs7QUFHRixLQWxHTyxFQWpLSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQgdXNlckluZm86IHt9LFxuXHRcdFx0IFxuXHRcdFx0IGRldmljZUFycmF5OltdXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQgKCkge1xuXHQgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG5cdCAgICB2YXIgdGhhdCA9IHRoaXNcblx0XHRsZXQgZGV2aWNlID0gW11cblx0ICAgIC8v6LCD55So5bqU55So5a6e5L6L55qE5pa55rOV6I635Y+W5YWo5bGA5pWw5o2uXG5cdCAgICB1bmkuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG5cdCAgICAgICAgLy/mm7TmlrDmlbDmja5cblx0ICAgICAgICB0aGF0LnVzZXJJbmZvPXVzZXJJbmZvXG5cdCAgICAgICAgXG5cdCAgICB9KTtcblx0ICAgIC8qIOWIneWni+WMluiTneeJmemAgumFjeWZqCAqL1xuXHQgICAgdW5pLm9wZW5CbHVldG9vdGhBZGFwdGVyKHtcblx0ICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG5cdCAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliJ3lp4vljJbok53niZnpgILphY3lmajmiJDlip8nKTtcblx0ICAgICAgICAgICAgdW5pLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG5cdCAgICAgICAgICAgICAgICBzZXJ2aWNlczogW10sXG5cdCAgICAgICAgICAgICAgICBhbGxvd0R1cGxpY2F0ZXNLZXk6IGZhbHNlLFxuXHQgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5nph4zmmK/lvIDlp4vmkJzntKLpmYTov5Horr7lpIcnLCByZXMpO1xuXHQgICAgICAgICAgICAgICAgICAgdW5pLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoZnVuY3Rpb24gKHJlcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn1wiLCByZXMpO1xuXHRcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8qIOiOt+WPluiuvuWkh+S/oeWPt++8jOWIpOaWreS/oeWPt+W8uuW6piAqL1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGV2aWNlX1JTU0lfMSA9IHJlcy5kZXZpY2VzWzBdLlJTU0k7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXZpY2VfUlNTSV8yID0gTnVtYmVyKGRldmljZV9SU1NJXzEpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGV2aWNlX1JTU0kgPSBNYXRoLmFicyhkZXZpY2VfUlNTSV8yKTtcblx0XG5cdFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV2aWNlX1JTU0kgPD0gNjApIHtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NpZ25hbDQucG5nXCJcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX1JTU0kgPiA2MCAmJiBkZXZpY2VfUlNTSSA8PSA3MCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IFwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaWduYWwzLnBuZ1wiXG5cdFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV9SU1NJID4gNzAgJiYgZGV2aWNlX1JTU0kgPD0gODApIHtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NpZ25hbDIucG5nXCJcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX1JTU0kgPiA4MCkge1xuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2lnbmFsMS5wbmdcIlxuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGV2aWNlc1swXS5uYW1lID09IFwiXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEOiByZXMuZGV2aWNlc1swXS5kZXZpY2VJZCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlVua25vdyBkZXZpY2VcIixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSU1NJOiByZXMuZGV2aWNlc1swXS5SU1NJLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogaW1nXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRDogcmVzLmRldmljZXNbMF0uZGV2aWNlSWQsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzLmRldmljZXNbMF0ubmFtZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSU1NJOiByZXMuZGV2aWNlc1swXS5SU1NJLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogaW1nXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZS5wdXNoKHRlbXApO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmRldmljZT0gZGV2aWNlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdyb3VwKHRoYXQuZGV2aWNlLCAnSUQnKVxuXHQgICAgICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSxcblx0ICAgIH0pXG5cdH0sXG5cdG9uU2hvdyAoKSB7XG5cdCAgICB2YXIgdGhhdCA9IHRoaXM7XG5cdCAgIHVuaS5zaG93TG9hZGluZyh7XG5cdCAgICAgICAgdGl0bGU6ICfor7fmiZPlvIDok53niZnph43mlrDov5vlhaXlsI/nqIvluo8nLFxuXHQgICAgfSk7XG5cdCAgICB2YXIgZGV2aWNlID0gW107XG5cdCAgIHVuaS5jbG9zZUJsdWV0b290aEFkYXB0ZXIoe1xuXHQgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+WFs+mXreiTneeJmeaooeWdlycpO1xuXHQgICAgICAgICAgICAvKiDliJ3lp4vljJbok53niZnpgILphY3lmaggKi9cblx0ICAgICAgICAgICB1bmkub3BlbkJsdWV0b290aEFkYXB0ZXIoe1xuXHQgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliJ3lp4vljJbok53niZnpgILphY3lmajmiJDlip8nKTtcblx0ICAgICAgICAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpO1xuXHQgICAgICAgICAgICAgICAgICAgdW5pLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VzOiBbXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dEdXBsaWNhdGVzS2V5OiBmYWxzZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/memHjOaYr+W8gOWni+aQnOe0oumZhOi/keiuvuWkhycsIHJlcyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5vbkJsdWV0b290aERldmljZUZvdW5kKGZ1bmN0aW9uIChyZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn1wiLCByZXMpO1xuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiDojrflj5borr7lpIfkv6Hlj7fvvIzliKTmlq3kv6Hlj7flvLrluqYgKi9cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGV2aWNlX1JTU0lfMSA9IHJlcy5kZXZpY2VzWzBdLlJTU0k7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRldmljZV9SU1NJXzIgPSBOdW1iZXIoZGV2aWNlX1JTU0lfMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRldmljZV9SU1NJID0gTWF0aC5hYnMoZGV2aWNlX1JTU0lfMik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRldmljZV9SU1NJIDw9IDYwKSB7XG5cdFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NpZ25hbDQucG5nXCJcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2VfUlNTSSA+IDYwICYmIGRldmljZV9SU1NJIDw9IDcwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2lnbmFsMy5wbmdcIlxuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV9SU1NJID4gNzAgJiYgZGV2aWNlX1JTU0kgPD0gODApIHtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2lnbmFsMi5wbmdcIlxuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV9SU1NJID4gODApIHtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2lnbmFsMS5wbmdcIlxuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFxuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRldmljZXNbMF0ubmFtZSA9PSBcIlwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUQ6IHJlcy5kZXZpY2VzWzBdLmRldmljZUlkLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJVbmtub3cgZGV2aWNlXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSU1NJOiByZXMuZGV2aWNlc1swXS5SU1NJLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBpbWdcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUQ6IHJlcy5kZXZpY2VzWzBdLmRldmljZUlkLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzLmRldmljZXNbMF0ubmFtZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJTU0k6IHJlcy5kZXZpY2VzWzBdLlJTU0ksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGltZ1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZS5wdXNoKHRlbXApO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZGV2aWNlPWRldmljZVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ3JvdXAodGhhdC5kZXZpY2UsICdJRCcpXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIH0pXG5cdFxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHRcblx0fSxcblx0b25QdWxsRG93blJlZnJlc2ggKCkge1xuXHQgICAgLy8gdmFyIHRoYXQgPSB0aGlzO1xuXHQgICAgY29uc29sZS5sb2coJ+W8gOWni+S4i+aLieWIt+aWsOS6i+S7ticpO1xuXHQgICB1bmkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7ICAvL+WKoOi9veWKqOeUu+W8gOWni1xuXHQgICAgdGhpcy5hZ2Fpbl9zZWFyY2goKTtcblx0fSxcblx0XG5cdG1ldGhvZHM6IHtcblx0XHRhZ2Fpbl9zZWFyY2ggKCkge1xuXHRcdCAgICB2YXIgdGhhdCA9IHRoaXM7XG5cdFx0ICAgIHZhciBkZXZpY2UgPSBbXTtcblx0XHQgICB1bmkuY2xvc2VCbHVldG9vdGhBZGFwdGVyKHtcblx0XHQgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHQgICAgICAgICAgICBjb25zb2xlLmxvZygn5YWz6Zet6JOd54mZ5qih5Z2XJylcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSk7XG5cdFx0ICAgIC8qIOWIneWni+WMluiTneeJmemAgumFjeWZqCAqL1xuXHRcdCAgIHVuaS5vcGVuQmx1ZXRvb3RoQWRhcHRlcih7XG5cdFx0ICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG5cdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIneWni+WMluiTneeJmemAgumFjeWZqOaIkOWKnycpO1xuXHRcdCAgICAgICAgICAgdW5pLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG5cdFx0ICAgICAgICAgICAgICAgIHNlcnZpY2VzOiBbXSxcblx0XHQgICAgICAgICAgICAgICAgYWxsb3dEdXBsaWNhdGVzS2V5OiBmYWxzZSxcblx0XHQgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/memHjOaYr+W8gOWni+aQnOe0oumZhOi/keiuvuWkhycsIHJlcyk7XG5cdFx0ICAgICAgICAgICAgICAgICAgIHVuaS5vbkJsdWV0b290aERldmljZUZvdW5kKGZ1bmN0aW9uIChyZXMpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn1wiLCByZXMpO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgdW5pLmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WKoOi9veWKqOeUu+e7k+adn1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgdW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTsgIC8v5YGc5q2i5b2T5YmN6aG16Z2i55qE5LiL5ouJ5Yi35pawXG5cdFx0XG5cdFx0XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLyog6I635Y+W6K6+5aSH5L+h5Y+377yM5Yik5pat5L+h5Y+35by65bqmICovXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRldmljZV9SU1NJXzEgPSByZXMuZGV2aWNlc1swXS5SU1NJO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXZpY2VfUlNTSV8yID0gTnVtYmVyKGRldmljZV9SU1NJXzEpO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXZpY2VfUlNTSSA9IE1hdGguYWJzKGRldmljZV9SU1NJXzIpO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXZpY2VfUlNTSSA8PSA2MCkge1xuXHRcdFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NpZ25hbDQucG5nXCJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2VfUlNTSSA+IDYwICYmIGRldmljZV9SU1NJIDw9IDcwKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2lnbmFsMy5wbmdcIlxuXHRcdFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX1JTU0kgPiA3MCAmJiBkZXZpY2VfUlNTSSA8PSA4MCkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IFwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaWduYWwyLnBuZ1wiXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX1JTU0kgPiA4MCkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NpZ25hbDEucG5nXCJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGV2aWNlc1swXS5uYW1lID09IFwiXCIpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRDogcmVzLmRldmljZXNbMF0uZGV2aWNlSWQsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlVua25vdyBkZXZpY2VcIixcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJTU0k6IHJlcy5kZXZpY2VzWzBdLlJTU0ksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGltZ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRDogcmVzLmRldmljZXNbMF0uZGV2aWNlSWQsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXMuZGV2aWNlc1swXS5uYW1lLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlNTSTogcmVzLmRldmljZXNbMF0uUlNTSSxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogaW1nXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlLnB1c2godGVtcCk7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5kZXZpY2U9ZGV2aWNlXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5ncm91cCh0aGF0LmRldmljZSwgJ0lEJylcblx0XHQgICAgICAgICAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgICAgICAgICB9LFxuXHRcdCAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgfSxcblx0XHQgICAgfSlcblx0XHR9LFxuXHRcdC8qIOWOu+mHjSAqL1xuXHRcdGdyb3VwIChkYXRhLCBrZXkpIHtcblx0XHQgICAgdmFyIHRoYXQgPSB0aGlzO1xuXHRcdCAgICB2YXIgb2JqID0ge30sIGFyciA9IFtdO1xuXHRcdCAgICBmb3IgKHZhciBhID0gMDsgYSA8IGRhdGEubGVuZ3RoOyBhKyspIHtcblx0XHQgICAgICAgIGlmICghb2JqW2RhdGFbYV1ba2V5XV0pIHtcblx0XHQgICAgICAgICAgICBvYmpbZGF0YVthXVtrZXldXSA9IFtkYXRhW2FdXTtcblx0XHQgICAgICAgICAgICBhcnIucHVzaChkYXRhW2FdKTtcblx0XHQgICAgICAgICAgICB0aGF0LmRldmljZUFycmF5PSBhcnJcblx0XHQgICAgICAgICAgICBcblx0XHQgICAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICAgICAgb2JqW2RhdGFbYV1ba2V5XV0ucHVzaChkYXRhW2FdKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0Lyog54K55Ye75LqL5Lu2ICovXG5cdFx0b25MaWFuVGFwKGV2ZW50KSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygxMTExKVxuXHRcdCAgIHVuaS5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG5cdFx0ICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG5cdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+WBnOatouaQnOe0ouiuvuWkhycsIHJlcylcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSlcblx0XHQgICAgdmFyIHRpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRldmljZWlkO1xuXHRcdCAgICB2YXIgbmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZXZpY2VuYW1lO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGl0bGUsbmFtZSlcblx0XHQgICB1bmkubmF2aWdhdGVUbyh7XG5cdFx0ICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWU/aWQ9JyArIHRpdGxlICsgJyZuYW1lPScgKyBuYW1lXG5cdFx0ICAgIH0pXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** /Users/zzx/Project/little-web/pages/home/home.vue?mpType=page ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=44021cb6&scoped=true&mpType=page */ 10);\n/* harmony import */ var _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"44021cb6\",\n  null,\n  false,\n  _home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/home/home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQwMjFjYjYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NDAyMWNiNlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9ob21lL2hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***************************************************************************************************************!*\
  !*** /Users/zzx/Project/little-web/pages/home/home.vue?vue&type=template&id=44021cb6&scoped=true&mpType=page ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=44021cb6&scoped=true&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/pages/home/home.vue?vue&type=template&id=44021cb6&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniEcCanvas: __webpack_require__(/*! @/components/uni-ec-canvas/uni-ec-canvas.vue */ 12).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "msg"), attrs: { _i: 1 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(2, "sc", "project"), attrs: { _i: 2 } },
          [
            _c("view", {
              staticClass: _vm._$s(3, "sc", "title item"),
              attrs: { _i: 3 }
            }),
            _vm._l(_vm._$s(4, "f", { forItems: _vm.list.press.msg }), function(
              item,
              $10,
              $20,
              $30
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(4, "f", { forIndex: $20, key: item.id }),
                  staticClass: _vm._$s("4-" + $30, "sc", "item"),
                  attrs: { _i: "4-" + $30 }
                },
                [
                  _vm._v(
                    _vm._$s("4-" + $30, "t0-0", _vm._s(item.name)) +
                      _vm._$s("4-" + $30, "t0-1", _vm._s(item.value))
                  )
                ]
              )
            })
          ],
          2
        ),
        _c(
          "view",
          { staticClass: _vm._$s(5, "sc", "project"), attrs: { _i: 5 } },
          [
            _c("view", {
              staticClass: _vm._$s(6, "sc", "title item"),
              attrs: { _i: 6 }
            }),
            _vm._l(_vm._$s(7, "f", { forItems: _vm.list.cui.msg }), function(
              item,
              $11,
              $21,
              $31
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(7, "f", { forIndex: $21, key: item.id }),
                  staticClass: _vm._$s("7-" + $31, "sc", "item"),
                  attrs: { _i: "7-" + $31 }
                },
                [
                  _vm._v(
                    _vm._$s("7-" + $31, "t0-0", _vm._s(item.name)) +
                      _vm._$s("7-" + $31, "t0-1", _vm._s(item.value))
                  )
                ]
              )
            })
          ],
          2
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "echarts"), attrs: { _i: 8 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(9, "sc", "deep"), attrs: { _i: 9 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(10, "sc", "num"), attrs: { _i: 10 } },
                [_vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.pressDeep)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(11, "sc", "progress"),
                  attrs: { _i: 11 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(12, "sc", "result"),
                      style: _vm._$s(12, "s", { height: _vm.pressDeep + "%" }),
                      attrs: { _i: 12 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(13, "sc", "square"),
                        attrs: { _i: 13 }
                      })
                    ]
                  )
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(14, "sc", "text"),
                attrs: { _i: 14 }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(15, "sc", "position"),
            attrs: { _i: 15 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(16, "sc", "cui"), attrs: { _i: 16 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(17, "sc", "num"), attrs: { _i: 17 } },
                [_vm._v(_vm._$s(17, "t0-0", _vm._s(_vm.cuiDeep)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "progress"),
                  attrs: { _i: 18 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(19, "sc", "result"),
                      style: _vm._$s(19, "s", {
                        height: _vm.cuiDeep / 10 + "%"
                      }),
                      attrs: { _i: 19 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(20, "sc", "square"),
                        attrs: { _i: 20 }
                      })
                    ]
                  )
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(21, "sc", "text"),
                attrs: { _i: 21 }
              })
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(22, "sc", "gauge-container"),
          attrs: { _i: 22 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(23, "sc", "gauge"), attrs: { _i: 23 } },
            [
              _c("uni-ec-canvas", {
                ref: "canvas",
                staticClass: _vm._$s(24, "sc", "uni-ec-canvas"),
                attrs: {
                  id: "line-chart",
                  "canvas-id": "lazy-load-chart",
                  ec: _vm.ec,
                  _i: 24
                }
              })
            ],
            1
          ),
          _c(
            "view",
            { staticClass: _vm._$s(25, "sc", "data"), attrs: { _i: 25 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(26, "sc", "data-item"),
                  attrs: { _i: 26 }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$s(27, "sc", "space"),
                      attrs: { _i: 27 }
                    },
                    [_vm._v(_vm._$s(27, "t0-0", _vm._s(_vm.count)))]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(28, "sc", "data-item"),
                  attrs: { _i: 28 }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$s(29, "sc", "space"),
                      attrs: { _i: 29 }
                    },
                    [_vm._v(_vm._$s(29, "t0-0", _vm._s(_vm.loop)))]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!********************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/uni-ec-canvas.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-ec-canvas.vue?vue&type=template&id=77bf01da& */ 13);\n/* harmony import */ var _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-ec-canvas.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/uni-ec-canvas/uni-ec-canvas.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDs7O0FBRzVEO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1lYy1jYW52YXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YmYwMWRhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWVjLWNhbnZhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1lYy1jYW52YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdW5pLWVjLWNhbnZhcy91bmktZWMtY2FudmFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***************************************************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=template&id=77bf01da& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-ec-canvas.vue?vue&type=template&id=77bf01da& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=template&id=77bf01da& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.isUseNewCanvas)
    ? _c("canvas", {
        staticClass: _vm._$s(0, "sc", "ec-canvas"),
        attrs: { "canvas-id": _vm._$s(0, "a-canvas-id", _vm.canvasId), _i: 0 },
        on: {
          init: _vm.init,
          touchstart: _vm.touchStart,
          touchmove: _vm.touchMove,
          touchend: _vm.touchEnd
        }
      })
    : _c("canvas", {
        staticClass: _vm._$s(1, "sc", "ec-canvas"),
        attrs: { "canvas-id": _vm._$s(1, "a-canvas-id", _vm.canvasId), _i: 1 },
        on: {
          init: _vm.init,
          touchstart: _vm.touchStart,
          touchmove: _vm.touchMove,
          touchend: _vm.touchEnd
        }
      })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*********************************************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-ec-canvas.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWl0QixDQUFnQixtdEJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1lYy1jYW52YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktZWMtY2FudmFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\nvar _wxCanvas = _interopRequireDefault(__webpack_require__(/*! ./wx-canvas */ 20));\nvar echarts = _interopRequireWildcard(__webpack_require__(/*! ./echarts */ 21));function _getRequireWildcardCache() {if (typeof WeakMap !== \"function\") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\nvar ctx;function wrapTouch(event) {for (var i = 0; i < event.touches.length; ++i) {var touch = event.touches[i];touch.offsetX = touch.x;touch.offsetY = touch.y;}\n  return event;\n}var _default2 =\n\n{\n  props: {\n    canvasId: {\n      type: String,\n      default: function _default() {\n        return \"ec-canvas\";\n      } },\n\n    ec: {\n      type: Object },\n\n    forceUseOldCanvas: {\n      type: Boolean,\n      value: false } },\n\n\n  data: function data() {\n    return {\n      $curChart: {},\n      toHandleList: [],\n      isUseNewCanvas: true };\n\n  },\n  watch: {\n    \"ec.option\": {\n      deep: true,\n      handler: function handler(val, oldVal) {\n        this.setOption(val);\n      } } },\n\n\n  onReady: function onReady() {\n    if (!this.ec) {\n      __f__(\"warn\",\n      '组件需绑定 ec 变量，例：<ec-canvas id=\"mychart-dom-bar\" ' +\n      'canvas-id=\"mychart-bar\" ec=\"{{ ec }}\"></ec-canvas>', \" at components/uni-ec-canvas/uni-ec-canvas.vue:58\");\n\n      return;\n    }\n    if (!this.ec.lazyLoad) {\n      this.init();\n    }\n  },\n  methods: {\n    compareVersion: function compareVersion(v1, v2) {\n      v1 = v1.split(\".\");\n      v2 = v2.split(\".\");\n      var len = Math.max(v1.length, v2.length);\n\n      while (v1.length < len) {\n        v1.push(\"0\");\n      }\n      while (v2.length < len) {\n        v2.push(\"0\");\n      }\n\n      for (var i = 0; i < len; i++) {\n        var num1 = parseInt(v1[i]);\n        var num2 = parseInt(v2[i]);\n\n        if (num1 > num2) {\n          return 1;\n        } else if (num1 < num2) {\n          return -1;\n        }\n      }\n      return 0;\n    },\n    init: function init(callback) {\n      var version = wx.getSystemInfoSync().SDKVersion;\n\n      var canUseNewCanvas = this.compareVersion(version, \"2.9.0\") >= 0;\n      if (this.forceUseOldCanvas) {\n        if (canUseNewCanvas) __f__(\"warn\", \"开发者强制使用旧canvas,建议关闭\", \" at components/uni-ec-canvas/uni-ec-canvas.vue:98\");\n        canUseNewCanvas = false;\n      }\n      this.isUseNewCanvas = canUseNewCanvas && !this.forceUseOldCanvas;\n      if (this.isUseNewCanvas) {\n        __f__(\"log\", '微信基础库版本大于2.9.0，开始使用<canvas type=\"2d\"/>', \" at components/uni-ec-canvas/uni-ec-canvas.vue:103\");\n        // 2.9.0 可以使用 <canvas type=\"2d\"></canvas>\n        this.initByNewWay(callback);\n      } else {\n        var isValid = this.compareVersion(version, \"1.9.91\") >= 0;\n        if (!isValid) {\n          __f__(\"error\",\n          \"微信基础库版本过低，需大于等于 1.9.91。\" +\n          \"参见：https://github.com/ecomfe/echarts-for-weixin\" +\n          \"#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82\", \" at components/uni-ec-canvas/uni-ec-canvas.vue:109\");\n\n          return;\n        } else {\n          __f__(\"warn\",\n          \"建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能\", \" at components/uni-ec-canvas/uni-ec-canvas.vue:116\");\n\n          this.initByOldWay(callback);\n        }\n      }\n    },\n    initByOldWay: function initByOldWay(callback) {\n      // 1.9.91 <= version < 2.9.0：原来的方式初始化\n      ctx = wx.createCanvasContext(this.canvasId, this);\n      var canvas = new _wxCanvas.default(ctx, this.canvasId, false);\n      var that = this;\n      echarts.setCanvasCreator(function () {\n        return canvas;\n      });\n      // const canvasDpr = wx.getSystemInfoSync().pixelRatio // 微信旧的canvas不能传入dpr\n      var canvasDpr = 1;\n      var query = wx.createSelectorQuery().in(this);\n      query.\n      select(\".ec-canvas\").\n      boundingClientRect(function (res) {\n        if (typeof callback === \"function\") {\n          that.$curChart = callback(canvas, res.width, res.height, canvasDpr);\n        } else if (that.ec) {\n          that.initChart(canvas, res.width, res.height, canvasDpr);\n        } else {\n          that.triggerEvent(\"init\", {\n            canvas: canvas,\n            width: res.width,\n            height: res.height,\n            devicePixelRatio: canvasDpr // 增加了dpr，可方便外面echarts.init\n          });\n        }\n      }).\n      exec();\n    },\n    initByNewWay: function initByNewWay(callback) {\n      var that = this;\n      // version >= 2.9.0：使用新的方式初始化\n      var query = wx.createSelectorQuery().in(this);\n      query.\n      select(\".ec-canvas\").\n      fields({\n        node: true,\n        size: true }).\n\n      exec(function (res) {\n        var canvasNode = res[0].node;\n\n        var canvasDpr = wx.getSystemInfoSync().pixelRatio;\n        var canvasWidth = res[0].width;\n        var canvasHeight = res[0].height;\n\n        var ctx = canvasNode.getContext(\"2d\");\n\n        var canvas = new _wxCanvas.default(ctx, that.canvasId, true, canvasNode);\n        echarts.setCanvasCreator(function () {\n          return canvas;\n        });\n\n        if (typeof callback === \"function\") {\n          that.$curChart = callback(\n          canvas,\n          canvasWidth,\n          canvasHeight,\n          canvasDpr);\n\n        } else if (that.ec) {\n          that.initChart(canvas, canvasWidth, canvasHeight, canvasDpr);\n        } else {\n          that.triggerEvent(\"init\", {\n            canvas: canvas,\n            width: canvasWidth,\n            height: canvasHeight,\n            devicePixelRatio: canvasDpr });\n\n        }\n      });\n    },\n    setOption: function setOption(val) {\n      if (!this.$curChart || !this.$curChart.setOption) {\n        this.toHandleList.push(val);\n      } else {\n        this.$curChart.setOption(val);\n      }\n    },\n    canvasToTempFilePath: function canvasToTempFilePath(opt) {var _this = this;\n      if (this.isUseNewCanvas) {\n        // 新版\n        var query = wx.createSelectorQuery().in(this);\n        query.\n        select(\".ec-canvas\").\n        fields({\n          node: true,\n          size: true }).\n\n        exec(function (res) {\n          var canvasNode = res[0].node;\n          opt.canvas = canvasNode;\n          wx.canvasToTempFilePath(opt);\n        });\n      } else {\n        // 旧的\n        if (!opt.canvasId) {\n          opt.canvasId = this.canvasId;\n        }\n        ctx.draw(true, function () {\n          wx.canvasToTempFilePath(opt, _this);\n        });\n      }\n    },\n\n    touchStart: function touchStart(e) {\n      if (this.ec.stopTouchEvent) {\n        e.preventDefault();\n        e.stopPropagation();\n        return;\n      }\n      this.$emit(\"touchstart\", e);\n      if (this.$curChart && e.touches.length > 0) {\n        var touch = e.touches[0];\n        var handler = this.$curChart.getZr().handler;\n        if (handler) {\n          handler.dispatch(\"mousedown\", {\n            zrX: touch.x,\n            zrY: touch.y });\n\n          handler.dispatch(\"mousemove\", {\n            zrX: touch.x,\n            zrY: touch.y });\n\n          handler.processGesture(wrapTouch(e), \"start\");\n        }\n      }\n    },\n\n    touchMove: function touchMove(e) {\n      if (this.ec.stopTouchEvent) {\n        e.preventDefault();\n        e.stopPropagation();\n        return;\n      }\n      this.$emit(\"touchmove\", e);\n      if (this.$curChart && e.touches.length > 0) {\n        var touch = e.touches[0];\n        var handler = this.$curChart.getZr().handler;\n        if (handler) {\n          handler.dispatch(\"mousemove\", {\n            zrX: touch.x,\n            zrY: touch.y });\n\n          handler.processGesture(wrapTouch(e), \"change\");\n        }\n      }\n    },\n\n    touchEnd: function touchEnd(e) {\n      if (this.ec.stopTouchEvent) {\n        e.preventDefault();\n        e.stopPropagation();\n        return;\n      }\n      this.$emit(\"touchend\", e);\n      if (this.$curChart) {\n        var touch = e.changedTouches ? e.changedTouches[0] : {};\n        var handler = this.$curChart.getZr().handler;\n        if (handler) {\n          handler.dispatch(\"mouseup\", {\n            zrX: touch.x,\n            zrY: touch.y });\n\n          handler.dispatch(\"click\", {\n            zrX: touch.x,\n            zrY: touch.y });\n\n          handler.processGesture(wrapTouch(e), \"end\");\n        }\n      }\n    },\n\n    initChart: function initChart(canvas, width, height, canvasDpr) {\n      this.$curChart = echarts.init(canvas, null, {\n        width: width,\n        height: height,\n        devicePixelRatio: canvasDpr });\n\n      canvas.setChart(this.$curChart);\n      this.$curChart.setOption(this.ec.option);\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 17)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktZWMtY2FudmFzL3VuaS1lYy1jYW52YXMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUNBLGdGOzs7Ozs7Ozs7QUFFQSxRQUVBLDJCQUNBLGdEQUNBLDZCQUNBLHdCQUNBLHdCQUNBO0FBQ0E7QUFDQSxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFEQTs7QUFPQTtBQUNBLGtCQURBLEVBUEE7O0FBVUE7QUFDQSxtQkFEQTtBQUVBLGtCQUZBLEVBVkEsRUFEQTs7O0FBZ0JBLE1BaEJBLGtCQWdCQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQTtBQUdBLDBCQUhBOztBQUtBLEdBdEJBO0FBdUJBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGFBRkEsbUJBRUEsR0FGQSxFQUVBLE1BRkEsRUFFQTtBQUNBO0FBQ0EsT0FKQSxFQURBLEVBdkJBOzs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0ExQ0E7QUEyQ0E7QUFDQSxrQkFEQSwwQkFDQSxFQURBLEVBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsUUF6QkEsZ0JBeUJBLFFBekJBLEVBeUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQURBO0FBRUEsbUVBSEE7O0FBS0E7QUFDQSxTQVBBLE1BT0E7QUFDQTtBQUNBLDZDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBdERBO0FBdURBLGdCQXZEQSx3QkF1REEsUUF2REEsRUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQURBLENBQ0EsWUFEQTtBQUVBLHdCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBLDBCQURBO0FBRUEsNEJBRkE7QUFHQSw4QkFIQTtBQUlBLHVDQUpBLENBSUE7QUFKQTtBQU1BO0FBQ0EsT0FmQTtBQWdCQSxVQWhCQTtBQWlCQSxLQW5GQTtBQW9GQSxnQkFwRkEsd0JBb0ZBLFFBcEZBLEVBb0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQURBLENBQ0EsWUFEQTtBQUVBLFlBRkEsQ0FFQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFGQTs7QUFNQSxVQU5BLENBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTs7QUFJQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxxQkFGQTtBQUdBLHNCQUhBO0FBSUEsbUJBSkE7O0FBTUEsU0FQQSxNQU9BO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBLDBCQURBO0FBRUEsOEJBRkE7QUFHQSxnQ0FIQTtBQUlBLHVDQUpBOztBQU1BO0FBQ0EsT0FyQ0E7QUFzQ0EsS0E5SEE7QUErSEEsYUEvSEEscUJBK0hBLEdBL0hBLEVBK0hBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXJJQTtBQXNJQSx3QkF0SUEsZ0NBc0lBLEdBdElBLEVBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBLENBQ0EsWUFEQTtBQUVBLGNBRkEsQ0FFQTtBQUNBLG9CQURBO0FBRUEsb0JBRkEsRUFGQTs7QUFNQSxZQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVZBO0FBV0EsT0FkQSxNQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0EsS0E5SkE7O0FBZ0tBLGNBaEtBLHNCQWdLQSxDQWhLQSxFQWdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0Esd0JBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQXRMQTs7QUF3TEEsYUF4TEEscUJBd0xBLENBeExBLEVBd0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0ExTUE7O0FBNE1BLFlBNU1BLG9CQTRNQSxDQTVNQSxFQTRNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0Esd0JBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQWxPQTs7QUFvT0EsYUFwT0EscUJBb09BLE1BcE9BLEVBb09BLEtBcE9BLEVBb09BLE1BcE9BLEVBb09BLFNBcE9BLEVBb09BO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHNCQUZBO0FBR0EsbUNBSEE7O0FBS0E7QUFDQTtBQUNBLEtBNU9BLEVBM0NBLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxjYW52YXMgdHlwZT1cIjJkXCIgdi1pZj1cImlzVXNlTmV3Q2FudmFzXCIgY2xhc3M9XCJlYy1jYW52YXNcIiA6Y2FudmFzLWlkPVwiY2FudmFzSWRcIiBAaW5pdD1cImluaXRcIiBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnRcIlxuICAgIEB0b3VjaG1vdmU9XCJ0b3VjaE1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaEVuZFwiPlxuICA8L2NhbnZhcz5cbiAgPGNhbnZhcyB2LWVsc2UgY2xhc3M9XCJlYy1jYW52YXNcIiA6Y2FudmFzLWlkPVwiY2FudmFzSWRcIiBAaW5pdD1cImluaXRcIiBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnRcIiBAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCJcbiAgICBAdG91Y2hlbmQ9XCJ0b3VjaEVuZFwiPlxuICA8L2NhbnZhcz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBXeENhbnZhcyBmcm9tIFwiLi93eC1jYW52YXNcIjtcbiAgaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tIFwiLi9lY2hhcnRzXCI7XG5cbiAgbGV0IGN0eDtcblxuICBmdW5jdGlvbiB3cmFwVG91Y2goZXZlbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1tpXTtcbiAgICAgIHRvdWNoLm9mZnNldFggPSB0b3VjaC54O1xuICAgICAgdG91Y2gub2Zmc2V0WSA9IHRvdWNoLnk7XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgY2FudmFzSWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFwiZWMtY2FudmFzXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlYzoge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG4gICAgICBmb3JjZVVzZU9sZENhbnZhczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAkY3VyQ2hhcnQ6IHt9LFxuICAgICAgICB0b0hhbmRsZUxpc3Q6IFtdLFxuICAgICAgICBpc1VzZU5ld0NhbnZhczogdHJ1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBcImVjLm9wdGlvblwiOiB7XG4gICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIGhhbmRsZXIodmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICB0aGlzLnNldE9wdGlvbih2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvblJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5lYykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ+e7hOS7tumcgOe7keWumiBlYyDlj5jph4/vvIzkvovvvJo8ZWMtY2FudmFzIGlkPVwibXljaGFydC1kb20tYmFyXCIgJyArXG4gICAgICAgICAgJ2NhbnZhcy1pZD1cIm15Y2hhcnQtYmFyXCIgZWM9XCJ7eyBlYyB9fVwiPjwvZWMtY2FudmFzPidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVjLmxhenlMb2FkKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgY29tcGFyZVZlcnNpb24odjEsIHYyKSB7XG4gICAgICAgIHYxID0gdjEuc3BsaXQoXCIuXCIpO1xuICAgICAgICB2MiA9IHYyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpO1xuXG4gICAgICAgIHdoaWxlICh2MS5sZW5ndGggPCBsZW4pIHtcbiAgICAgICAgICB2MS5wdXNoKFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodjIubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgICAgdjIucHVzaChcIjBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbnVtMSA9IHBhcnNlSW50KHYxW2ldKTtcbiAgICAgICAgICBjb25zdCBudW0yID0gcGFyc2VJbnQodjJbaV0pO1xuXG4gICAgICAgICAgaWYgKG51bTEgPiBudW0yKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgICAgIGluaXQoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvbjtcblxuICAgICAgICBsZXQgY2FuVXNlTmV3Q2FudmFzID0gdGhpcy5jb21wYXJlVmVyc2lvbih2ZXJzaW9uLCBcIjIuOS4wXCIpID49IDA7XG4gICAgICAgIGlmICh0aGlzLmZvcmNlVXNlT2xkQ2FudmFzKSB7XG4gICAgICAgICAgaWYgKGNhblVzZU5ld0NhbnZhcykgY29uc29sZS53YXJuKFwi5byA5Y+R6ICF5by65Yi25L2/55So5penY2FudmFzLOW7uuiuruWFs+mXrVwiKTtcbiAgICAgICAgICBjYW5Vc2VOZXdDYW52YXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVXNlTmV3Q2FudmFzID0gY2FuVXNlTmV3Q2FudmFzICYmICF0aGlzLmZvcmNlVXNlT2xkQ2FudmFzO1xuICAgICAgICBpZiAodGhpcy5pc1VzZU5ld0NhbnZhcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCflvq7kv6Hln7rnoYDlupPniYjmnKzlpKfkuo4yLjkuMO+8jOW8gOWni+S9v+eUqDxjYW52YXMgdHlwZT1cIjJkXCIvPicpO1xuICAgICAgICAgIC8vIDIuOS4wIOWPr+S7peS9v+eUqCA8Y2FudmFzIHR5cGU9XCIyZFwiPjwvY2FudmFzPlxuICAgICAgICAgIHRoaXMuaW5pdEJ5TmV3V2F5KGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5jb21wYXJlVmVyc2lvbih2ZXJzaW9uLCBcIjEuOS45MVwiKSA+PSAwO1xuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCLlvq7kv6Hln7rnoYDlupPniYjmnKzov4fkvY7vvIzpnIDlpKfkuo7nrYnkuo4gMS45Ljkx44CCXCIgK1xuICAgICAgICAgICAgICBcIuWPguinge+8mmh0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvZWNoYXJ0cy1mb3Itd2VpeGluXCIgK1xuICAgICAgICAgICAgICBcIiMlRTUlQkUlQUUlRTQlQkYlQTElRTclODklODglRTYlOUMlQUMlRTglQTYlODElRTYlQjElODJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIuW7uuiuruWwhuW+ruS/oeWfuuehgOW6k+iwg+aVtOWkp+S6juetieS6jjIuOS4w54mI5pys44CC5Y2H57qn5ZCO57uY5Zu+5bCG5pyJ5pu05aW95oCn6IO9XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmluaXRCeU9sZFdheShjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5pdEJ5T2xkV2F5KGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIDEuOS45MSA8PSB2ZXJzaW9uIDwgMi45LjDvvJrljp/mnaXnmoTmlrnlvI/liJ3lp4vljJZcbiAgICAgICAgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCh0aGlzLmNhbnZhc0lkLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gbmV3IFd4Q2FudmFzKGN0eCwgdGhpcy5jYW52YXNJZCwgZmFsc2UpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICBlY2hhcnRzLnNldENhbnZhc0NyZWF0b3IoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zdCBjYW52YXNEcHIgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnBpeGVsUmF0aW8gLy8g5b6u5L+h5pen55qEY2FudmFz5LiN6IO95Lyg5YWlZHByXG4gICAgICAgIGNvbnN0IGNhbnZhc0RwciA9IDE7XG4gICAgICAgIHZhciBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcbiAgICAgICAgcXVlcnlcbiAgICAgICAgICAuc2VsZWN0KFwiLmVjLWNhbnZhc1wiKVxuICAgICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QocmVzID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICB0aGF0LiRjdXJDaGFydCA9IGNhbGxiYWNrKGNhbnZhcywgcmVzLndpZHRoLCByZXMuaGVpZ2h0LCBjYW52YXNEcHIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGF0LmVjKSB7XG4gICAgICAgICAgICAgIHRoYXQuaW5pdENoYXJ0KGNhbnZhcywgcmVzLndpZHRoLCByZXMuaGVpZ2h0LCBjYW52YXNEcHIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGF0LnRyaWdnZXJFdmVudChcImluaXRcIiwge1xuICAgICAgICAgICAgICAgIGNhbnZhczogY2FudmFzLFxuICAgICAgICAgICAgICAgIHdpZHRoOiByZXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRldmljZVBpeGVsUmF0aW86IGNhbnZhc0RwciAvLyDlop7liqDkuoZkcHLvvIzlj6/mlrnkvr/lpJbpnaJlY2hhcnRzLmluaXRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZXhlYygpO1xuICAgICAgfSxcbiAgICAgIGluaXRCeU5ld1dheShjYWxsYmFjaykge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAvLyB2ZXJzaW9uID49IDIuOS4w77ya5L2/55So5paw55qE5pa55byP5Yid5aeL5YyWXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xuICAgICAgICBxdWVyeVxuICAgICAgICAgIC5zZWxlY3QoXCIuZWMtY2FudmFzXCIpXG4gICAgICAgICAgLmZpZWxkcyh7XG4gICAgICAgICAgICBub2RlOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmV4ZWMocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc05vZGUgPSByZXNbMF0ubm9kZTtcblxuICAgICAgICAgICAgY29uc3QgY2FudmFzRHByID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5waXhlbFJhdGlvO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSByZXNbMF0ud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSByZXNbMF0uaGVpZ2h0O1xuXG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gbmV3IFd4Q2FudmFzKGN0eCwgdGhhdC5jYW52YXNJZCwgdHJ1ZSwgY2FudmFzTm9kZSk7XG4gICAgICAgICAgICBlY2hhcnRzLnNldENhbnZhc0NyZWF0b3IoKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICB0aGF0LiRjdXJDaGFydCA9IGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgICAgICBjYW52YXNXaWR0aCxcbiAgICAgICAgICAgICAgICBjYW52YXNIZWlnaHQsXG4gICAgICAgICAgICAgICAgY2FudmFzRHByXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQuZWMpIHtcbiAgICAgICAgICAgICAgdGhhdC5pbml0Q2hhcnQoY2FudmFzLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjYW52YXNEcHIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGF0LnRyaWdnZXJFdmVudChcImluaXRcIiwge1xuICAgICAgICAgICAgICAgIGNhbnZhczogY2FudmFzLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYW52YXNXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbnZhc0hlaWdodCxcbiAgICAgICAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvOiBjYW52YXNEcHJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc2V0T3B0aW9uKHZhbCkge1xuICAgICAgICBpZiAoIXRoaXMuJGN1ckNoYXJ0IHx8ICF0aGlzLiRjdXJDaGFydC5zZXRPcHRpb24pIHtcbiAgICAgICAgICB0aGlzLnRvSGFuZGxlTGlzdC5wdXNoKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kY3VyQ2hhcnQuc2V0T3B0aW9uKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjYW52YXNUb1RlbXBGaWxlUGF0aChvcHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVc2VOZXdDYW52YXMpIHtcbiAgICAgICAgICAvLyDmlrDniYhcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcbiAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgLnNlbGVjdChcIi5lYy1jYW52YXNcIilcbiAgICAgICAgICAgIC5maWVsZHMoe1xuICAgICAgICAgICAgICBub2RlOiB0cnVlLFxuICAgICAgICAgICAgICBzaXplOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmV4ZWMocmVzID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2FudmFzTm9kZSA9IHJlc1swXS5ub2RlO1xuICAgICAgICAgICAgICBvcHQuY2FudmFzID0gY2FudmFzTm9kZTtcbiAgICAgICAgICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgob3B0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOaXp+eahFxuICAgICAgICAgIGlmICghb3B0LmNhbnZhc0lkKSB7XG4gICAgICAgICAgICBvcHQuY2FudmFzSWQgPSB0aGlzLmNhbnZhc0lkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdHguZHJhdyh0cnVlLCAoKSA9PiB7XG4gICAgICAgICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aChvcHQsIHRoaXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICB0b3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWMuc3RvcFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZW1pdChcInRvdWNoc3RhcnRcIiwgZSk7XG4gICAgICAgIGlmICh0aGlzLiRjdXJDaGFydCAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuJGN1ckNoYXJ0LmdldFpyKCkuaGFuZGxlcjtcbiAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5kaXNwYXRjaChcIm1vdXNlZG93blwiLCB7XG4gICAgICAgICAgICAgIHpyWDogdG91Y2gueCxcbiAgICAgICAgICAgICAgenJZOiB0b3VjaC55XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhhbmRsZXIuZGlzcGF0Y2goXCJtb3VzZW1vdmVcIiwge1xuICAgICAgICAgICAgICB6clg6IHRvdWNoLngsXG4gICAgICAgICAgICAgIHpyWTogdG91Y2gueVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoYW5kbGVyLnByb2Nlc3NHZXN0dXJlKHdyYXBUb3VjaChlKSwgXCJzdGFydFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLmVjLnN0b3BUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGVtaXQoXCJ0b3VjaG1vdmVcIiwgZSk7XG4gICAgICAgIGlmICh0aGlzLiRjdXJDaGFydCAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuJGN1ckNoYXJ0LmdldFpyKCkuaGFuZGxlcjtcbiAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5kaXNwYXRjaChcIm1vdXNlbW92ZVwiLCB7XG4gICAgICAgICAgICAgIHpyWDogdG91Y2gueCxcbiAgICAgICAgICAgICAgenJZOiB0b3VjaC55XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhhbmRsZXIucHJvY2Vzc0dlc3R1cmUod3JhcFRvdWNoKGUpLCBcImNoYW5nZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHRvdWNoRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWMuc3RvcFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZW1pdChcInRvdWNoZW5kXCIsIGUpO1xuICAgICAgICBpZiAodGhpcy4kY3VyQ2hhcnQpIHtcbiAgICAgICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXMgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDoge307XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLiRjdXJDaGFydC5nZXRacigpLmhhbmRsZXI7XG4gICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGlzcGF0Y2goXCJtb3VzZXVwXCIsIHtcbiAgICAgICAgICAgICAgenJYOiB0b3VjaC54LFxuICAgICAgICAgICAgICB6clk6IHRvdWNoLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGFuZGxlci5kaXNwYXRjaChcImNsaWNrXCIsIHtcbiAgICAgICAgICAgICAgenJYOiB0b3VjaC54LFxuICAgICAgICAgICAgICB6clk6IHRvdWNoLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGFuZGxlci5wcm9jZXNzR2VzdHVyZSh3cmFwVG91Y2goZSksIFwiZW5kXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgaW5pdENoYXJ0KGNhbnZhcywgd2lkdGgsIGhlaWdodCwgY2FudmFzRHByKSB7XG4gICAgICAgIHRoaXMuJGN1ckNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNhbnZhcywgbnVsbCwge1xuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvOiBjYW52YXNEcHJcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbnZhcy5zZXRDaGFydCh0aGlzLiRjdXJDaGFydCk7XG4gICAgICAgIHRoaXMuJGN1ckNoYXJ0LnNldE9wdGlvbih0aGlzLmVjLm9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAuZWMtY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 19));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 18)))

/***/ }),
/* 18 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 20 */
/*!***************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/wx-canvas.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var WxCanvas = /*#__PURE__*/function () {\n  function WxCanvas(ctx, canvasId, isNew, canvasNode) {_classCallCheck(this, WxCanvas);\n    this.ctx = ctx;\n    this.canvasId = canvasId;\n    this.chart = null;\n    this.isNew = isNew;\n    if (isNew) {\n      this.canvasNode = canvasNode;\n    } else {\n      this._initStyle(ctx);\n    }\n\n    // this._initCanvas(zrender, ctx);\n\n    this._initEvent();\n  }_createClass(WxCanvas, [{ key: \"getContext\", value: function getContext(\n\n    contextType) {\n      if (contextType === '2d') {\n        return this.ctx;\n      }\n    }\n\n    // canvasToTempFilePath(opt) {\n    //   if (!opt.canvasId) {\n    //     opt.canvasId = this.canvasId;\n    //   }\n    //   return wx.canvasToTempFilePath(opt, this);\n    // }\n  }, { key: \"setChart\", value: function setChart(\n    chart) {\n      this.chart = chart;\n    } }, { key: \"attachEvent\", value: function attachEvent()\n\n    {\n      // noop\n    } }, { key: \"detachEvent\", value: function detachEvent()\n\n    {\n      // noop\n    } }, { key: \"_initCanvas\", value: function _initCanvas(\n\n    zrender, ctx) {\n      zrender.util.getContext = function () {\n        return ctx;\n      };\n\n      zrender.util.$override('measureText', function (text, font) {\n        ctx.font = font || '12px sans-serif';\n        return ctx.measureText(text);\n      });\n    } }, { key: \"_initStyle\", value: function _initStyle(\n\n    ctx) {var _arguments = arguments;\n      var styles = ['fillStyle', 'strokeStyle', 'globalAlpha',\n      'textAlign', 'textBaseAlign', 'shadow', 'lineWidth',\n      'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];\n\n\n      styles.forEach(function (style) {\n        Object.defineProperty(ctx, style, {\n          set: function set(value) {\n            if (style !== 'fillStyle' && style !== 'strokeStyle' ||\n            value !== 'none' && value !== null)\n            {\n              ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);\n            }\n          } });\n\n      });\n\n      ctx.createRadialGradient = function () {\n        return ctx.createCircularGradient(_arguments);\n      };\n    } }, { key: \"_initEvent\", value: function _initEvent()\n\n    {var _this = this;\n      this.event = {};\n      var eventNames = [{\n        wxName: 'touchStart',\n        ecName: 'mousedown' },\n      {\n        wxName: 'touchMove',\n        ecName: 'mousemove' },\n      {\n        wxName: 'touchEnd',\n        ecName: 'mouseup' },\n      {\n        wxName: 'touchEnd',\n        ecName: 'click' }];\n\n\n      eventNames.forEach(function (name) {\n        _this.event[name.wxName] = function (e) {\n          var touch = e.touches[0];\n          _this.chart.getZr().handler.dispatch(name.ecName, {\n            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,\n            zrY: name.wxName === 'tap' ? touch.clientY : touch.y });\n\n        };\n      });\n    } }, { key: \"width\", set: function set(\n\n    w) {\n      if (this.canvasNode) this.canvasNode.width = w;\n    }, get: function get()\n\n\n\n\n    {\n      if (this.canvasNode)\n      return this.canvasNode.width;\n      return 0;\n    } }, { key: \"height\", set: function set(h) {if (this.canvasNode) this.canvasNode.height = h;}, get: function get()\n    {\n      if (this.canvasNode)\n      return this.canvasNode.height;\n      return 0;\n    } }]);return WxCanvas;}();exports.default = WxCanvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktZWMtY2FudmFzL3d4LWNhbnZhcy5qcyJdLCJuYW1lcyI6WyJXeENhbnZhcyIsImN0eCIsImNhbnZhc0lkIiwiaXNOZXciLCJjYW52YXNOb2RlIiwiY2hhcnQiLCJfaW5pdFN0eWxlIiwiX2luaXRFdmVudCIsImNvbnRleHRUeXBlIiwienJlbmRlciIsInV0aWwiLCJnZXRDb250ZXh0IiwiJG92ZXJyaWRlIiwidGV4dCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInN0eWxlcyIsImZvckVhY2giLCJzdHlsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwidmFsdWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJjcmVhdGVDaXJjdWxhckdyYWRpZW50IiwiYXJndW1lbnRzIiwiZXZlbnQiLCJldmVudE5hbWVzIiwid3hOYW1lIiwiZWNOYW1lIiwibmFtZSIsImUiLCJ0b3VjaCIsInRvdWNoZXMiLCJnZXRaciIsImhhbmRsZXIiLCJkaXNwYXRjaCIsInpyWCIsImNsaWVudFgiLCJ4IiwienJZIiwiY2xpZW50WSIsInkiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoid3ZCQUFxQkEsUTtBQUNuQixvQkFBWUMsR0FBWixFQUFpQkMsUUFBakIsRUFBMkJDLEtBQTNCLEVBQWtDQyxVQUFsQyxFQUE4QztBQUM1QyxTQUFLSCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsUUFBSUEsS0FBSixFQUFXO0FBQ1QsV0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLRSxVQUFMLENBQWdCTCxHQUFoQjtBQUNEOztBQUVEOztBQUVBLFNBQUtNLFVBQUw7QUFDRCxHOztB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LE1BQUwsS0FBZ0IsS0FBaEIsR0FBd0JJLEtBQUssQ0FBQ1MsT0FBOUIsR0FBd0NULEtBQUssQ0FBQ1UsQ0FGSixFQUFqRDs7QUFJRCxTQU5EO0FBT0QsT0FSRDtBQVNELEs7O0FBRVNDLEssRUFBRztBQUNYLFVBQUksS0FBSzFDLFVBQVQsRUFBcUIsS0FBS0EsVUFBTCxDQUFnQjJDLEtBQWhCLEdBQXdCRCxDQUF4QjtBQUN0QixLOzs7OztBQUtXO0FBQ1YsVUFBSSxLQUFLMUMsVUFBVDtBQUNFLGFBQU8sS0FBS0EsVUFBTCxDQUFnQjJDLEtBQXZCO0FBQ0YsYUFBTyxDQUFQO0FBQ0QsSyx1Q0FSVUMsQyxFQUFHLENBQ1osSUFBSSxLQUFLNUMsVUFBVCxFQUFxQixLQUFLQSxVQUFMLENBQWdCNkMsTUFBaEIsR0FBeUJELENBQXpCLENBQ3RCLEM7QUFPWTtBQUNYLFVBQUksS0FBSzVDLFVBQVQ7QUFDRSxhQUFPLEtBQUtBLFVBQUwsQ0FBZ0I2QyxNQUF2QjtBQUNGLGFBQU8sQ0FBUDtBQUNELEsiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXeENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzSWQsIGlzTmV3LCBjYW52YXNOb2RlKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xuICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIHRoaXMuaXNOZXcgPSBpc05ld1xuICAgIGlmIChpc05ldykge1xuICAgICAgdGhpcy5jYW52YXNOb2RlID0gY2FudmFzTm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5pdFN0eWxlKGN0eCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5faW5pdENhbnZhcyh6cmVuZGVyLCBjdHgpO1xuXG4gICAgdGhpcy5faW5pdEV2ZW50KCk7XG4gIH1cblxuICBnZXRDb250ZXh0KGNvbnRleHRUeXBlKSB7XG4gICAgaWYgKGNvbnRleHRUeXBlID09PSAnMmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdHg7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FudmFzVG9UZW1wRmlsZVBhdGgob3B0KSB7XG4gIC8vICAgaWYgKCFvcHQuY2FudmFzSWQpIHtcbiAgLy8gICAgIG9wdC5jYW52YXNJZCA9IHRoaXMuY2FudmFzSWQ7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aChvcHQsIHRoaXMpO1xuICAvLyB9XG5cbiAgc2V0Q2hhcnQoY2hhcnQpIHtcbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gIH1cblxuICBhdHRhY2hFdmVudCgpIHtcbiAgICAvLyBub29wXG4gIH1cblxuICBkZXRhY2hFdmVudCgpIHtcbiAgICAvLyBub29wXG4gIH1cblxuICBfaW5pdENhbnZhcyh6cmVuZGVyLCBjdHgpIHtcbiAgICB6cmVuZGVyLnV0aWwuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjdHg7XG4gICAgfTtcblxuICAgIHpyZW5kZXIudXRpbC4kb3ZlcnJpZGUoJ21lYXN1cmVUZXh0JywgZnVuY3Rpb24gKHRleHQsIGZvbnQpIHtcbiAgICAgIGN0eC5mb250ID0gZm9udCB8fCAnMTJweCBzYW5zLXNlcmlmJztcbiAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBfaW5pdFN0eWxlKGN0eCkge1xuICAgIHZhciBzdHlsZXMgPSBbJ2ZpbGxTdHlsZScsICdzdHJva2VTdHlsZScsICdnbG9iYWxBbHBoYScsXG4gICAgICAndGV4dEFsaWduJywgJ3RleHRCYXNlQWxpZ24nLCAnc2hhZG93JywgJ2xpbmVXaWR0aCcsXG4gICAgICAnbGluZUNhcCcsICdsaW5lSm9pbicsICdsaW5lRGFzaCcsICdtaXRlckxpbWl0JywgJ2ZvbnRTaXplJ1xuICAgIF07XG5cbiAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBzdHlsZSwge1xuICAgICAgICBzZXQ6IHZhbHVlID0+IHtcbiAgICAgICAgICBpZiAoc3R5bGUgIT09ICdmaWxsU3R5bGUnICYmIHN0eWxlICE9PSAnc3Ryb2tlU3R5bGUnIHx8XG4gICAgICAgICAgICB2YWx1ZSAhPT0gJ25vbmUnICYmIHZhbHVlICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjdHhbJ3NldCcgKyBzdHlsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlLnNsaWNlKDEpXSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBjdHguY3JlYXRlQ2lyY3VsYXJHcmFkaWVudChhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBfaW5pdEV2ZW50KCkge1xuICAgIHRoaXMuZXZlbnQgPSB7fTtcbiAgICBjb25zdCBldmVudE5hbWVzID0gW3tcbiAgICAgIHd4TmFtZTogJ3RvdWNoU3RhcnQnLFxuICAgICAgZWNOYW1lOiAnbW91c2Vkb3duJ1xuICAgIH0sIHtcbiAgICAgIHd4TmFtZTogJ3RvdWNoTW92ZScsXG4gICAgICBlY05hbWU6ICdtb3VzZW1vdmUnXG4gICAgfSwge1xuICAgICAgd3hOYW1lOiAndG91Y2hFbmQnLFxuICAgICAgZWNOYW1lOiAnbW91c2V1cCdcbiAgICB9LCB7XG4gICAgICB3eE5hbWU6ICd0b3VjaEVuZCcsXG4gICAgICBlY05hbWU6ICdjbGljaydcbiAgICB9XTtcblxuICAgIGV2ZW50TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMuZXZlbnRbbmFtZS53eE5hbWVdID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICB0aGlzLmNoYXJ0LmdldFpyKCkuaGFuZGxlci5kaXNwYXRjaChuYW1lLmVjTmFtZSwge1xuICAgICAgICAgIHpyWDogbmFtZS53eE5hbWUgPT09ICd0YXAnID8gdG91Y2guY2xpZW50WCA6IHRvdWNoLngsXG4gICAgICAgICAgenJZOiBuYW1lLnd4TmFtZSA9PT0gJ3RhcCcgPyB0b3VjaC5jbGllbnRZIDogdG91Y2gueVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBzZXQgd2lkdGgodykge1xuICAgIGlmICh0aGlzLmNhbnZhc05vZGUpIHRoaXMuY2FudmFzTm9kZS53aWR0aCA9IHdcbiAgfVxuICBzZXQgaGVpZ2h0KGgpIHtcbiAgICBpZiAodGhpcy5jYW52YXNOb2RlKSB0aGlzLmNhbnZhc05vZGUuaGVpZ2h0ID0gaFxuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGlmICh0aGlzLmNhbnZhc05vZGUpXG4gICAgICByZXR1cm4gdGhpcy5jYW52YXNOb2RlLndpZHRoXG4gICAgcmV0dXJuIDBcbiAgfVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGlmICh0aGlzLmNhbnZhc05vZGUpXG4gICAgICByZXR1cm4gdGhpcy5jYW52YXNOb2RlLmhlaWdodFxuICAgIHJldHVybiAwXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/echarts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 22 */
/*!*********************************************************************************************!*\
  !*** /Users/zzx/Project/little-web/pages/home/home.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQixxdEJBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/pages/home/home.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar deviceDiscover = false;\n\nvar msg = '';var _default =\n{\n\n  data: function data() {\n    return {\n      pressDeep: 0,\n      cuiDeep: 0,\n      list: {\n        press: {\n          // deep: 10,\n          msg: [{\n            id: 0,\n            name: '正确',\n            value: 0 },\n\n\n          {\n            id: 1,\n            name: '过大',\n            value: 0 },\n\n\n          {\n            id: 2,\n            name: '不足',\n            value: 0 },\n\n\n          {\n            id: 3,\n            name: '少按',\n            value: 0 },\n\n\n          {\n            id: 4,\n            name: '多按',\n            value: 0 }] },\n\n\n\n        cui: {\n          // deep: 50,\n          msg: [{\n            id: 0,\n            name: '正确',\n            value: 0 },\n\n\n          {\n            id: 1,\n            name: '过大',\n            value: 0 },\n\n\n          {\n            id: 2,\n            name: '不足',\n            value: 0 },\n\n\n          {\n            id: 3,\n            name: '少按',\n            value: 0 },\n\n\n          {\n            id: 4,\n            name: '多吹',\n            value: 0 }] } },\n\n\n\n\n      ec: {\n        option: {\n\n          series: [_defineProperty({\n            name: '业务指标',\n            type: 'gauge',\n            detail: {\n              formatter: '{value}%' },\n\n            data: [{\n              value: 30,\n              name: '频率' }],\n\n            radius: '100%',\n            axisLine: {\n              show: true,\n              lineStyle: {\n                width: 10 } },\n\n\n\n            splitNumber: 3,\n            splitLine: {\n              show: false },\n\n            axisLabel: {\n              show: false },\n\n\n            pointer: {\n              width: 6 },\n\n            title: {\n              offsetCenter: [0, '80%'],\n              color: '#7f7f7f' } }, \"detail\",\n\n          {\n            show: false,\n            fontSize: 18 })] } },\n\n\n\n\n      loop: 0,\n      count: 0,\n      serviceId: '',\n      deviceId: '',\n      notycharacteristicsId: '',\n      characteristicsId: '' };\n\n\n\n  },\n  onLoad: function onLoad(e) {\n    // this.openBluetoothAdapter()\n    // console.log(e)\n    this.deviceId = e.id;\n    // this.createBLEConnection(e.id)\n  },\n  onUnload: function onUnload() {\n    uni.closeBLEConnection({\n      deviceId: this.deviceId });\n\n  },\n  onHide: function onHide() {\n    uni.closeBLEConnection({\n      deviceId: this.deviceId });\n\n  },\n  onShow: function onShow() {\n    this.createBLEConnection(this.deviceId);\n  },\n  methods: {\n    // // 初始化蓝牙适配器\n    // openBluetoothAdapter() {\n    // \tuni.openBluetoothAdapter({\n    // \t\tsuccess: (res) => {\n    // \t\t\t// 蓝牙适配器初始化成功\n    // \t\t\tconsole.log('openBluetoothAdapter success', res);\n    // \t\t\tthis.startBluetoothDevicesDiscovery()\n    // \t\t},\n    // \t\tfail: (err) => {\n    // \t\t\t// 蓝牙适配器初始化失败\n    // \t\t\tuni.showToast({\n    // \t\t\t\ttitle: '请打开蓝牙',\n    // \t\t\t\tduration: 1000,\n    // \t\t\t\ticon:'none'\n    // \t\t\t})\n    // \t\t\tif (err.errCode === 10001) {\n    // \t\t\t\t// 监听蓝牙适配器状态改变\n    // \t\t\t\tuni.onBluetoothAdapterStateChange(function(res) {\n    // \t\t\t\t\tconsole.log('BluetoothAdapterStateChange', +res);\n    // \t\t\t\t\tif (res.available) {\n    // \t\t\t\t\t\tthis.startBluetoothDevicesDiscovery()\n    // \t\t\t\t\t}\n\n    // \t\t\t\t})\n    // \t\t\t}\n    // \t\t}\n    // \t})\n    // },\n    // // 开始搜寻蓝牙外围设备\n    // startBluetoothDevicesDiscovery() {\n\n    // \tif (deviceDiscover) {\n    // \t\treturn\n    // \t}\n    // \tdeviceDiscover = true\n    // \tuni.startBluetoothDevicesDiscovery({\n    // \t\tallowDuplicatesKey: false,\n    // \t\tsuccess: (res) => {\n    // \t\t\tconsole.log('startBluetoothDevicesDiscovery', res);\n    // \t\t\tthis.onBluetoothDeviceFound();\n    // \t\t}\n    // \t})\n    // },\n    // // 监听到寻找到的新设备\n    // onBluetoothDeviceFound() {\n    // \tlet that = this\n    // \tuni.showLoading({\n    // \t\ttitle: '正在搜索设备'\n    // \t})\n    // \tuni.onBluetoothDeviceFound(function(res) {\n    // \t\tres.devices.forEach(device => {\n    // \t\t\tif (!device.name && !device.localName) {\n    // \t\t\t\treturn\n    // \t\t\t}\n    // \t\t\tconsole.log('device',device);\n    // \t\t\t//如果名字相同连接设备\n    // \t\t\tif (device.name == devicename) {\n    // \t\t\t\tthat.createBLEConnection(device.deviceId);\n    // \t\t\t\tthat.deviceId = device.deviceId\n    // \t\t\t\tuni.hideLoading()\n    // \t\t\t\t// console.log('ddddd')\n    // \t\t\t\tthat.stopBluetoothDevicesDiscovery()\n    // \t\t\t\tuni.showLoading({\n    // \t\t\t\t\ttitle: '搜索到设备正在连接'\n    // \t\t\t\t})\n    // \t\t\t}\n    // \t\t})\n\n    // \t})\n    // },\n    // 创建连接\n    createBLEConnection: function createBLEConnection(deviceId) {var _this = this;\n      uni.createBLEConnection({\n        deviceId: deviceId,\n        success: function success(res) {\n          uni.showToast({\n            title: '连接成功' });\n\n          __f__(\"log\", 'createBLEConnection', res, \" at pages/home/home.vue:288\");\n          setTimeout(function () {\n            _this.getBLEDeviceServices(deviceId);\n          }, 1000);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", '创建连接失败', \" at pages/home/home.vue:294\");\n        } });\n\n\n    },\n    // 停止蓝牙搜索\n    // stopBluetoothDevicesDiscovery() {\n    // \tuni.stopBluetoothDevicesDiscovery({\n    // \t\tsuccess: (res) => {\n    // \t\t\tconsole.log('停止蓝牙设备搜索')\n    // \t\t}\n    // \t})\n    // },\n    // 获取蓝牙所有服务\n    getBLEDeviceServices: function getBLEDeviceServices(deviceId) {\n      var that = this;\n      // console.log(1111,this.deviceId)\n      uni.getBLEDeviceServices({\n        deviceId: deviceId,\n        success: function success(service) {\n          var all_UUID = service.services; //取出所有的服务\n          __f__(\"log\", '所有的服务', all_UUID, \" at pages/home/home.vue:315\");\n          var UUID_lenght = all_UUID.length; //获取到服务数组的长度\n          /* 遍历服务数组 */\n          for (var index = 0; index < UUID_lenght; index++) {\n            var ergodic_UUID = all_UUID[index].uuid; //取出服务里面的UUID\n            var UUID_slice = ergodic_UUID.slice(4, 8); //截取4到8位\n            // console.log(11111,UUID_slice)\n            /* 判断是否是我们需要的FEE0 */\n            if (UUID_slice == 'FEE0' || UUID_slice == 'fee0') {\n              var index_uuid = index;\n              that.serviceId = all_UUID[index_uuid].uuid; //确定需要的服务UUID\n\n            };\n          };\n          __f__(\"log\", '需要的服务UUID', that.serviceId, \" at pages/home/home.vue:329\");\n          that.getBLEDeviceCharacteristics(); //调用获取特征值函数\n        } });\n\n\n    },\n    // 获取所有服务的特征值\n    getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics() {\n      var that = this;\n      var device_characteristics = [];\n      var characteristics_uuid = {};\n      uni.getBLEDeviceCharacteristics({\n        deviceId: this.deviceId,\n        serviceId: this.serviceId,\n        success: function success(res) {\n          var characteristics = res.characteristics; //获取到所有特征值\n          var characteristics_length = characteristics.length; //获取到特征值数组的长度\n          __f__(\"log\", '获取到特征值', characteristics, \" at pages/home/home.vue:346\");\n          __f__(\"log\", '获取到特征值数组长度', characteristics_length, \" at pages/home/home.vue:347\");\n          /* 遍历数组获取notycharacteristicsId */\n          for (var index = 0; index < characteristics_length; index++) {\n            var noty_characteristics_UUID = characteristics[index].uuid; //取出特征值里面的UUID\n            var characteristics_slice = noty_characteristics_UUID.slice(4, 8); //截取4到8位\n            // console.log('id'+characteristics_slice)\n            /* 判断是否是我们需要的FEE1 */\n            if (characteristics_slice == 'FEE1' || characteristics_slice == 'fee1') {\n              var index_uuid = index;\n              that.notycharacteristicsId = characteristics[index_uuid].uuid; //需确定要的使能UUID\n              that.characteristicsId = characteristics[index_uuid].uuid; //暂时确定的写入UUID\n              // console.log('id1'+characteristicsId)\n              /* 遍历获取characteristicsId */\n              for (var _index = 0; _index < characteristics_length; _index++) {\n                var characteristics_UUID = characteristics[_index].uuid; //取出特征值里面的UUID\n                var _characteristics_slice = characteristics_UUID.slice(4, 8); //截取4到8位\n                /* 判断是否是我们需要的FEE2 */\n                if (_characteristics_slice == 'FEE2' || _characteristics_slice == 'fee2') {\n                  var _index_uuid = _index;\n                  that.characteristicsId = characteristics[_index_uuid].uuid; //确定的写入UUID\n\n                };\n              };\n            };\n          };\n          __f__(\"log\", '使能characteristicsId', that.notycharacteristicsId, \" at pages/home/home.vue:372\");\n          __f__(\"log\", '写入characteristicsId', that.characteristicsId, \" at pages/home/home.vue:373\");\n          that.notycharacteristics(); //使能事件\n\n        },\n        fail: function fail(err) {\n          __f__(\"log\", 'getBLEDeviceCharacteristics', err, \" at pages/home/home.vue:378\");\n        } });\n\n\n    },\n    /* 使能函数 */\n    notycharacteristics: function notycharacteristics() {\n      var that = this;\n      var recv_value_ascii = \"\";\n      var string_value = \"\";\n      var recve_value = \"\";\n      uni.notifyBLECharacteristicValueChange({\n        deviceId: that.deviceId,\n        serviceId: that.serviceId,\n        characteristicId: that.notycharacteristicsId,\n        state: true,\n        success: function success(res) {\n          __f__(\"log\", '使能成功', res, \" at pages/home/home.vue:395\");\n          /* 设备返回值 */\n          uni.onBLECharacteristicValueChange(function (res) {\n\n            var result = res.value;\n            var hex = that.buf2hex(result);\n            hex = hex + msg;\n            // console.log('返回的值', hex);\n            var resObj = that.parse(hex);\n            msg = resObj.slice;\n            // console.log(hex)\n            resObj.strArr.map(function (item, index) {\n              var category = item.slice(6, 8);\n              switch (category) {\n                case \"02\":\n                  var obj = that.parse02(item);\n                  that.pressDeep = obj.pressDeep;\n                  that.cuiDeep = obj.cui;\n                  // console.log(that.pressDeep)\n                  __f__(\"log\", obj.pressDeep, obj.cui, \" at pages/home/home.vue:414\");}\n\n            });\n          });\n        },\n\n        fail: function fail(res) {\n          __f__(\"log\", '使能失败', res, \" at pages/home/home.vue:421\");\n        } });\n\n    },\n\n\n    /* ArrayBuffer类型数据转为16进制字符串 */\n    buf2hex: function buf2hex(buffer) {// buffer is an ArrayBuffer\n      return Array.prototype.map.call(new Uint8Array(buffer), function (x) {return ('00' + x.toString(16)).slice(-2);}).join('');\n    },\n\n\n\n    parse02: function parse02(str) {\n      var i = 8;\n      var pressDeep = parseInt(str.slice(8, 10), 16); //按压距离\n      var cui = parseInt(parseInt(str.slice(10, 12), 16) << 8) + parseInt(str.slice(12, 14), 16);\n      var position = str.slice(14, 16);\n      return {\n        pressDeep: pressDeep,\n        cui: cui,\n        position: position };\n\n    },\n    parse: function parse(str) {\n      var exp = /a55a/g;\n      var tap = true;\n      var indexArr = [];\n      var strArr = [];\n      var obj = {};\n      while (tap) {\n        var res = exp.exec(str);\n        if (res) {\n          indexArr.push(res.index);\n        } else {\n          tap = false;\n        }\n      }\n\n      for (var i = 0; i < indexArr.length; i++) {\n        // 获取长度\n        var length = parseInt(str.slice(indexArr[i] + 4, indexArr[i] + 6), 16) * 2 + 6;\n        // indexArr[i]+4==str.length?length=0:length=length\n        // console.log(indexArr[i]+length)\n        if (indexArr[i] + length - 1 < str.length) {\n          var strRes = str.slice(indexArr[i], indexArr[i] + length);\n          strArr.push(strRes);\n          if (i == indexArr.length - 1) {\n            strRes = str.slice(indexArr[i] + length);\n            obj.slice = strRes;\n            // console.log(strRes)\n          }\n        } else {\n          var _strRes = str.slice(indexArr[i]);\n          obj.slice = _strRes;\n          // console.log(indexArr[i]+length)\n        }\n\n      }\n      if (indexArr.pop())\n      return _objectSpread({\n        strArr: strArr },\n      obj);\n\n    },\n    write: function write(str) {\n      var that = this;\n      var value = str;\n      __f__(\"log\", 'value', value, \" at pages/home/home.vue:489\");\n      /* 将数值转为ArrayBuffer类型数据 */\n      var typedArray = new Uint8Array(value.match(/[\\da-f]{2}/gi).map(function (h) {\n        return parseInt(h, 16);\n      }));\n      var buffer = typedArray.buffer;\n      uni.writeBLECharacteristicValue({\n        deviceId: that.deviceId,\n        serviceId: that.serviceId,\n        characteristicId: that.characteristicsId,\n        value: buffer,\n        success: function success(res) {\n          __f__(\"log\", '数据发送成功', res, \" at pages/home/home.vue:501\");\n        },\n        fail: function fail(res) {\n          __f__(\"log\", '调用失败', res, \" at pages/home/home.vue:504\");\n          /* 调用失败时，再次调用 */\n          uni.writeBLECharacteristicValue({\n            deviceId: that.deviceId,\n            serviceId: that.serviceId,\n            characteristicId: that.characteristicsId,\n            value: buffer,\n            success: function success(res) {\n              __f__(\"log\", '第2次数据发送成功', res, \" at pages/home/home.vue:512\");\n            },\n            fail: function fail(res) {\n              __f__(\"log\", '第2次调用失败', res, \" at pages/home/home.vue:515\");\n              /* 调用失败时，再次调用 */\n              uni.writeBLECharacteristicValue({\n                deviceId: that.deviceId,\n                serviceId: that.serviceId,\n                characteristicId: that.data.characteristicsId,\n                value: buffer,\n                success: function success(res) {\n                  __f__(\"log\", '第3次数据发送成功', res, \" at pages/home/home.vue:523\");\n                },\n                fail: function fail(res) {\n                  __f__(\"log\", '第3次调用失败', res, \" at pages/home/home.vue:526\");\n                } });\n\n            } });\n\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaG9tZS9ob21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTs7QUFFQSxhO0FBQ0E7O0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxzQkFGQTtBQUdBLG9CQUhBOzs7QUFNQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQSxFQU5BOzs7QUFZQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQSxFQVpBOzs7QUFrQkE7QUFDQSxpQkFEQTtBQUVBLHNCQUZBO0FBR0Esb0JBSEEsRUFsQkE7OztBQXdCQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQSxFQXhCQSxDQUZBLEVBREE7Ozs7QUFrQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxzQkFGQTtBQUdBLG9CQUhBOzs7QUFNQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQSxFQU5BOzs7QUFZQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQSxFQVpBOzs7QUFrQkE7QUFDQSxpQkFEQTtBQUVBLHNCQUZBO0FBR0Esb0JBSEEsRUFsQkE7OztBQXdCQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQSxFQXhCQSxDQUZBLEVBbENBLEVBSEE7Ozs7O0FBdUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFDQSxtQ0FEQSxFQUhBOztBQU1BO0FBQ0EsdUJBREE7QUFFQSx3QkFGQSxHQU5BOztBQVVBLDBCQVZBO0FBV0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0EseUJBREEsRUFGQSxFQVhBOzs7O0FBa0JBLDBCQWxCQTtBQW1CQTtBQUNBLHlCQURBLEVBbkJBOztBQXNCQTtB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blx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8IS0tIOeKtuaAgeagjyAtLT5cclxuXHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJzdGF0dXNcIj48L3ZpZXc+IC0tPlxyXG5cdFx0PCEtLSA8dmlldyBjbGFzcz1cInRhYmJhclwiPjwvdmlldz4gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm1zZ1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInByb2plY3RcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIGl0ZW1cIj7mjInljos8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgdi1mb3I9XCJpdGVtIGluIGxpc3QucHJlc3MubXNnICBcIiA6a2V5PVwiaXRlbS5pZFwiPiB7e2l0ZW0ubmFtZX19IHt7aXRlbS52YWx1ZX19IOasoTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInByb2plY3RcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIGl0ZW1cIj7lkLnmsJQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgdi1mb3I9XCJpdGVtIGluIGxpc3QuY3VpLm1zZyBcIiA6a2V5PVwiaXRlbS5pZFwiPiB7e2l0ZW0ubmFtZX19IHt7aXRlbS52YWx1ZX19IOasoTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDmlbDmja7lj6/op4bljJYgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImVjaGFydHNcIj5cclxuXHRcdFx0PCEtLSDmjInljovmt7HluqYgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGVlcFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibnVtXCI+e3twcmVzc0RlZXB9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlc3VsdFwiIDpzdHlsZT1cIntoZWlnaHQ6cHJlc3NEZWVwKyclJ31cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcXVhcmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPuaMieWOi+a3seW6pjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOaMieWOi+S9jee9riAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvblwiPjwvdmlldz5cclxuXHRcdFx0PCEtLSDlkLnmsJTph48gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3VpXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1cIj57e2N1aURlZXB9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlc3VsdFwiIDpzdHlsZT1cIntoZWlnaHQ6Y3VpRGVlcC8xMCsnJSd9XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3F1YXJlXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj7lkLnmsJTph488L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZ2F1Z2UtY29udGFpbmVyXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZ2F1Z2VcIj5cclxuXHRcdFx0XHQ8dW5pLWVjLWNhbnZhcyBjbGFzcz1cInVuaS1lYy1jYW52YXNcIiBpZD1cImxpbmUtY2hhcnRcIiByZWY9XCJjYW52YXNcIiBjYW52YXMtaWQ9XCJsYXp5LWxvYWQtY2hhcnRcIiA6ZWM9XCJlY1wiPjwvdW5pLWVjLWNhbnZhcz5cclxuXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkYXRhXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXRhLWl0ZW1cIj5cclxuXHRcdFx0XHRcdOWAkuiuoeaXtjxkaXYgY2xhc3M9XCJzcGFjZVwiPnt7Y291bnR9fTwvZGl2PuenklxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRhdGEtaXRlbVwiPlxyXG5cdFx0XHRcdFx05b6q546vPGRpdiBjbGFzcz1cInNwYWNlXCI+e3tsb29wfX08L2Rpdj7mlbBcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRsZXQgZGV2aWNlRGlzY292ZXIgPSBmYWxzZTtcclxuXHRcblx0bGV0IG1zZyA9ICcnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHByZXNzRGVlcDowLFxuXHRcdFx0XHRjdWlEZWVwOjAsXHJcblx0XHRcdFx0bGlzdDoge1xyXG5cdFx0XHRcdFx0cHJlc3M6IHtcclxuXHRcdFx0XHRcdFx0Ly8gZGVlcDogMTAsXHJcblx0XHRcdFx0XHRcdG1zZzogW3tcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogJ+ato+ehricsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMCxcclxuXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICfov4flpKcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDAsXHJcblxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiAn5LiN6LazJyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAwLFxyXG5cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogJ+WwkeaMiScsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMCxcclxuXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogNCxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICflpJrmjIknLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDAsXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y3VpOiB7XHJcblx0XHRcdFx0XHRcdC8vIGRlZXA6IDUwLFxyXG5cdFx0XHRcdFx0XHRtc2c6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICfmraPnoa4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDAsXHJcblxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiAn6L+H5aSnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAwLFxyXG5cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogJ+S4jei2sycsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMCxcclxuXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICflsJHmjIknLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDAsXHJcblxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IDQsXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiAn5aSa5ZC5JyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAwLFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZWM6IHtcclxuXHRcdFx0XHRcdG9wdGlvbjoge1xyXG5cclxuXHRcdFx0XHRcdFx0c2VyaWVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICfkuJrliqHmjIfmoIcnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdnYXVnZScsXHJcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtYXR0ZXI6ICd7dmFsdWV9JSdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMzAsXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiAn6aKR546HJ1xyXG5cdFx0XHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0XHRcdHJhZGl1czogJzEwMCUnLFxyXG5cdFx0XHRcdFx0XHRcdGF4aXNMaW5lOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0bGluZVN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMCxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRzcGxpdE51bWJlcjogMyxcclxuXHRcdFx0XHRcdFx0XHRzcGxpdExpbmU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRheGlzTGFiZWw6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNob3c6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHBvaW50ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA2XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0b2Zmc2V0Q2VudGVyOiBbMCwgJzgwJSddLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjN2Y3ZjdmJ1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzaG93OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAxOFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGxvb3A6IDAsXHJcblx0XHRcdFx0Y291bnQ6IDAsXHJcblx0XHRcdFx0c2VydmljZUlkOiAnJyxcclxuXHRcdFx0XHRkZXZpY2VJZDogJycsXHJcblx0XHRcdFx0bm90eWNoYXJhY3RlcmlzdGljc0lkOiAnJyxcclxuXHRcdFx0XHRjaGFyYWN0ZXJpc3RpY3NJZDogJycsXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKGUpIHtcclxuXHRcdFx0Ly8gdGhpcy5vcGVuQmx1ZXRvb3RoQWRhcHRlcigpXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlKVxuXHRcdFx0dGhpcy5kZXZpY2VJZCA9IGUuaWRcblx0XHRcdC8vIHRoaXMuY3JlYXRlQkxFQ29ubmVjdGlvbihlLmlkKVxyXG5cdFx0fSxcblx0XHRvblVubG9hZCgpIHtcblx0XHRcdHVuaS5jbG9zZUJMRUNvbm5lY3Rpb24oe1xuXHRcdFx0XHRkZXZpY2VJZDp0aGlzLmRldmljZUlkXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0b25IaWRlKCkge1xuXHRcdFx0dW5pLmNsb3NlQkxFQ29ubmVjdGlvbih7XG5cdFx0XHRcdGRldmljZUlkOnRoaXMuZGV2aWNlSWRcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRvblNob3coKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUJMRUNvbm5lY3Rpb24odGhpcy5kZXZpY2VJZClcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyAvLyDliJ3lp4vljJbok53niZnpgILphY3lmahcclxuXHRcdFx0Ly8gb3BlbkJsdWV0b290aEFkYXB0ZXIoKSB7XHJcblx0XHRcdC8vIFx0dW5pLm9wZW5CbHVldG9vdGhBZGFwdGVyKHtcclxuXHRcdFx0Ly8gXHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0Ly8gXHRcdFx0Ly8g6JOd54mZ6YCC6YWN5Zmo5Yid5aeL5YyW5oiQ5YqfXHJcblx0XHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdvcGVuQmx1ZXRvb3RoQWRhcHRlciBzdWNjZXNzJywgcmVzKTtcblx0XHRcdC8vIFx0XHRcdHRoaXMuc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KClcclxuXHRcdFx0Ly8gXHRcdH0sXHJcblx0XHRcdC8vIFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdC8vIFx0XHRcdC8vIOiTneeJmemAgumFjeWZqOWIneWni+WMluWksei0pVxyXG5cdFx0XHQvLyBcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0Ly8gXHRcdFx0XHR0aXRsZTogJ+ivt+aJk+W8gOiTneeJmScsXHJcblx0XHRcdC8vIFx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0XHQvLyBcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdC8vIFx0XHRcdH0pXHJcblx0XHRcdC8vIFx0XHRcdGlmIChlcnIuZXJyQ29kZSA9PT0gMTAwMDEpIHtcclxuXHRcdFx0Ly8gXHRcdFx0XHQvLyDnm5HlkKzok53niZnpgILphY3lmajnirbmgIHmlLnlj5hcclxuXHRcdFx0Ly8gXHRcdFx0XHR1bmkub25CbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdC8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ZXRvb3RoQWRhcHRlclN0YXRlQ2hhbmdlJywgK3Jlcyk7XHJcblx0XHRcdC8vIFx0XHRcdFx0XHRpZiAocmVzLmF2YWlsYWJsZSkge1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0XHR0aGlzLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSgpXHJcblx0XHRcdC8vIFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBcdFx0XHRcdH0pXHJcblx0XHRcdC8vIFx0XHRcdH1cclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9KVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyAvLyDlvIDlp4vmkJzlr7vok53niZnlpJblm7Torr7lpIdcclxuXHRcdFx0Ly8gc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KCkge1xyXG5cclxuXHRcdFx0Ly8gXHRpZiAoZGV2aWNlRGlzY292ZXIpIHtcclxuXHRcdFx0Ly8gXHRcdHJldHVyblxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gXHRkZXZpY2VEaXNjb3ZlciA9IHRydWVcclxuXHRcdFx0Ly8gXHR1bmkuc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KHtcclxuXHRcdFx0Ly8gXHRcdGFsbG93RHVwbGljYXRlc0tleTogZmFsc2UsXHJcblx0XHRcdC8vIFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdzdGFydEJsdWV0b290aERldmljZXNEaXNjb3ZlcnknLCByZXMpO1xyXG5cdFx0XHQvLyBcdFx0XHR0aGlzLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoKTtcclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9KVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyAvLyDnm5HlkKzliLDlr7vmib7liLDnmoTmlrDorr7lpIdcclxuXHRcdFx0Ly8gb25CbHVldG9vdGhEZXZpY2VGb3VuZCgpIHtcblx0XHRcdC8vIFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdC8vIFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0Ly8gXHRcdHRpdGxlOiAn5q2j5Zyo5pCc57Si6K6+5aSHJ1xyXG5cdFx0XHQvLyBcdH0pXHJcblx0XHRcdC8vIFx0dW5pLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdC8vIFx0XHRyZXMuZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XHJcblx0XHRcdC8vIFx0XHRcdGlmICghZGV2aWNlLm5hbWUgJiYgIWRldmljZS5sb2NhbE5hbWUpIHtcclxuXHRcdFx0Ly8gXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0Ly8gXHRcdFx0fVxyXG5cdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZygnZGV2aWNlJyxkZXZpY2UpO1xyXG5cdFx0XHQvLyBcdFx0XHQvL+WmguaenOWQjeWtl+ebuOWQjOi/nuaOpeiuvuWkh1xyXG5cdFx0XHQvLyBcdFx0XHRpZiAoZGV2aWNlLm5hbWUgPT0gZGV2aWNlbmFtZSkge1xyXG5cdFx0XHQvLyBcdFx0XHRcdHRoYXQuY3JlYXRlQkxFQ29ubmVjdGlvbihkZXZpY2UuZGV2aWNlSWQpO1xyXG5cdFx0XHQvLyBcdFx0XHRcdHRoYXQuZGV2aWNlSWQgPSBkZXZpY2UuZGV2aWNlSWRcblx0XHRcdC8vIFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcblx0XHRcdC8vIFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2RkZGRkJylcblx0XHRcdC8vIFx0XHRcdFx0dGhhdC5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSgpXHJcblx0XHRcdC8vIFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0Ly8gXHRcdFx0XHRcdHRpdGxlOiAn5pCc57Si5Yiw6K6+5aSH5q2j5Zyo6L+e5o6lJ1xyXG5cdFx0XHQvLyBcdFx0XHRcdH0pXHJcblx0XHRcdC8vIFx0XHRcdH1cclxuXHRcdFx0Ly8gXHRcdH0pXHJcblxyXG5cdFx0XHQvLyBcdH0pXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIOWIm+W7uui/nuaOpVxyXG5cdFx0XHRjcmVhdGVCTEVDb25uZWN0aW9uKGRldmljZUlkKSB7XHJcblx0XHRcdFx0dW5pLmNyZWF0ZUJMRUNvbm5lY3Rpb24oe1xyXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6IGRldmljZUlkLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/nuaOpeaIkOWKnydcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nLCByZXMpO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0QkxFRGV2aWNlU2VydmljZXMoZGV2aWNlSWQpO1xuXHRcdFx0XHRcdFx0fSwxMDAwKVxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfliJvlu7rov57mjqXlpLHotKUnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWBnOatouiTneeJmeaQnOe0olxyXG5cdFx0XHQvLyBzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSgpIHtcclxuXHRcdFx0Ly8gXHR1bmkuc3RvcEJsdWV0b290aERldmljZXNEaXNjb3Zlcnkoe1xyXG5cdFx0XHQvLyBcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZygn5YGc5q2i6JOd54mZ6K6+5aSH5pCc57SiJylcclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9KVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyDojrflj5bok53niZnmiYDmnInmnI3liqFcclxuXHRcdFx0Z2V0QkxFRGV2aWNlU2VydmljZXMoZGV2aWNlSWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKDExMTEsdGhpcy5kZXZpY2VJZClcclxuXHRcdFx0XHR1bmkuZ2V0QkxFRGV2aWNlU2VydmljZXMoe1xyXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6IGRldmljZUlkLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHNlcnZpY2UpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGFsbF9VVUlEID0gc2VydmljZS5zZXJ2aWNlczsgLy/lj5blh7rmiYDmnInnmoTmnI3liqFcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aJgOacieeahOacjeWKoScsIGFsbF9VVUlEKTtcclxuXHRcdFx0XHRcdFx0bGV0IFVVSURfbGVuZ2h0ID0gYWxsX1VVSUQubGVuZ3RoOyAvL+iOt+WPluWIsOacjeWKoeaVsOe7hOeahOmVv+W6plxyXG5cdFx0XHRcdFx0XHQvKiDpgY3ljobmnI3liqHmlbDnu4QgKi9cclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFVVSURfbGVuZ2h0OyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGVyZ29kaWNfVVVJRCA9IGFsbF9VVUlEW2luZGV4XS51dWlkOyAvL+WPluWHuuacjeWKoemHjOmdoueahFVVSURcclxuXHRcdFx0XHRcdFx0XHRsZXQgVVVJRF9zbGljZSA9IGVyZ29kaWNfVVVJRC5zbGljZSg0LCA4KTsgLy/miKrlj5Y05YiwOOS9jVxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygxMTExMSxVVUlEX3NsaWNlKVxyXG5cdFx0XHRcdFx0XHRcdC8qIOWIpOaWreaYr+WQpuaYr+aIkeS7rOmcgOimgeeahEZFRTAgKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoVVVJRF9zbGljZSA9PSAnRkVFMCcgfHwgVVVJRF9zbGljZSA9PSAnZmVlMCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBpbmRleF91dWlkID0gaW5kZXg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnNlcnZpY2VJZCA9IGFsbF9VVUlEW2luZGV4X3V1aWRdLnV1aWQgLy/noa7lrprpnIDopoHnmoTmnI3liqFVVUlEXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn6ZyA6KaB55qE5pyN5YqhVVVJRCcsIHRoYXQuc2VydmljZUlkKVxyXG5cdFx0XHRcdFx0XHR0aGF0LmdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcygpOyAvL+iwg+eUqOiOt+WPlueJueW+geWAvOWHveaVsFxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5bmiYDmnInmnI3liqHnmoTnibnlvoHlgLxcclxuXHRcdFx0Z2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgZGV2aWNlX2NoYXJhY3RlcmlzdGljcyA9IFtdO1xyXG5cdFx0XHRcdGxldCBjaGFyYWN0ZXJpc3RpY3NfdXVpZCA9IHt9O1xyXG5cdFx0XHRcdHVuaS5nZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3Moe1xyXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXHJcblx0XHRcdFx0XHRzZXJ2aWNlSWQ6IHRoaXMuc2VydmljZUlkLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgY2hhcmFjdGVyaXN0aWNzID0gcmVzLmNoYXJhY3RlcmlzdGljczsgLy/ojrflj5bliLDmiYDmnInnibnlvoHlgLxcclxuXHRcdFx0XHRcdFx0bGV0IGNoYXJhY3RlcmlzdGljc19sZW5ndGggPSBjaGFyYWN0ZXJpc3RpY3MubGVuZ3RoOyAvL+iOt+WPluWIsOeJueW+geWAvOaVsOe7hOeahOmVv+W6plxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W5Yiw54m55b6B5YC8JywgY2hhcmFjdGVyaXN0aWNzKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluWIsOeJueW+geWAvOaVsOe7hOmVv+W6picsIGNoYXJhY3RlcmlzdGljc19sZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHQvKiDpgY3ljobmlbDnu4Tojrflj5Zub3R5Y2hhcmFjdGVyaXN0aWNzSWQgKi9cclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoYXJhY3RlcmlzdGljc19sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgbm90eV9jaGFyYWN0ZXJpc3RpY3NfVVVJRCA9IGNoYXJhY3RlcmlzdGljc1tpbmRleF0udXVpZDsgLy/lj5blh7rnibnlvoHlgLzph4zpnaLnmoRVVUlEXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoYXJhY3RlcmlzdGljc19zbGljZSA9IG5vdHlfY2hhcmFjdGVyaXN0aWNzX1VVSUQuc2xpY2UoNCwgOCk7IC8v5oiq5Y+WNOWIsDjkvY1cblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2lkJytjaGFyYWN0ZXJpc3RpY3Nfc2xpY2UpXHJcblx0XHRcdFx0XHRcdFx0Lyog5Yik5pat5piv5ZCm5piv5oiR5Lus6ZyA6KaB55qERkVFMSAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGFyYWN0ZXJpc3RpY3Nfc2xpY2UgPT0gJ0ZFRTEnIHx8IGNoYXJhY3RlcmlzdGljc19zbGljZSA9PSAnZmVlMScpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBpbmRleF91dWlkID0gaW5kZXg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm5vdHljaGFyYWN0ZXJpc3RpY3NJZCA9IGNoYXJhY3RlcmlzdGljc1tpbmRleF91dWlkXS51dWlkIC8v6ZyA56Gu5a6a6KaB55qE5L2/6IO9VVVJRFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jaGFyYWN0ZXJpc3RpY3NJZD0gY2hhcmFjdGVyaXN0aWNzW2luZGV4X3V1aWRdLnV1aWQgLy/mmoLml7bnoa7lrprnmoTlhpnlhaVVVUlEXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdpZDEnK2NoYXJhY3RlcmlzdGljc0lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lyog6YGN5Y6G6I635Y+WY2hhcmFjdGVyaXN0aWNzSWQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJpc3RpY3NfbGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjaGFyYWN0ZXJpc3RpY3NfVVVJRCA9IGNoYXJhY3RlcmlzdGljc1tpbmRleF0udXVpZDsgLy/lj5blh7rnibnlvoHlgLzph4zpnaLnmoRVVUlEXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjaGFyYWN0ZXJpc3RpY3Nfc2xpY2UgPSBjaGFyYWN0ZXJpc3RpY3NfVVVJRC5zbGljZSg0LCA4KTsgLy/miKrlj5Y05YiwOOS9jVxuXHRcdFx0XHRcdFx0XHRcdFx0Lyog5Yik5pat5piv5ZCm5piv5oiR5Lus6ZyA6KaB55qERkVFMiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyaXN0aWNzX3NsaWNlID09ICdGRUUyJyB8fCBjaGFyYWN0ZXJpc3RpY3Nfc2xpY2UgPT0gJ2ZlZTInKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGluZGV4X3V1aWQgPSBpbmRleDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNoYXJhY3RlcmlzdGljc0lkID0gY2hhcmFjdGVyaXN0aWNzW2luZGV4X3V1aWRdLnV1aWQgLy/noa7lrprnmoTlhpnlhaVVVUlEXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5L2/6IO9Y2hhcmFjdGVyaXN0aWNzSWQnLCB0aGF0Lm5vdHljaGFyYWN0ZXJpc3RpY3NJZCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflhpnlhaVjaGFyYWN0ZXJpc3RpY3NJZCcsIHRoYXQuY2hhcmFjdGVyaXN0aWNzSWQpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm5vdHljaGFyYWN0ZXJpc3RpY3MoKTsgLy/kvb/og73kuovku7ZcclxuXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzJywgZXJyKVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiDkvb/og73lh73mlbAgKi9cclxuXHRcdFx0bm90eWNoYXJhY3RlcmlzdGljcygpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IHJlY3ZfdmFsdWVfYXNjaWkgPSBcIlwiO1xyXG5cdFx0XHRcdGxldCBzdHJpbmdfdmFsdWUgPSBcIlwiO1xyXG5cdFx0XHRcdGxldCByZWN2ZV92YWx1ZSA9IFwiXCI7XHJcblx0XHRcdFx0dW5pLm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2Uoe1xyXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6IHRoYXQuZGV2aWNlSWQsXHJcblx0XHRcdFx0XHRzZXJ2aWNlSWQ6IHRoYXQuc2VydmljZUlkLFxyXG5cdFx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNJZDogdGhhdC5ub3R5Y2hhcmFjdGVyaXN0aWNzSWQsXHJcblx0XHRcdFx0XHRzdGF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5L2/6IO95oiQ5YqfJywgcmVzKTtcclxuXHRcdFx0XHRcdFx0Lyog6K6+5aSH6L+U5Zue5YC8ICovXHJcblx0XHRcdFx0XHRcdHVuaS5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKHJlcykgPT57XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHJlcy52YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaGV4ID0gdGhhdC5idWYyaGV4KHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcdGhleCA9IGhleCttc2dcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn6L+U5Zue55qE5YC8JywgaGV4KTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgcmVzT2JqID0gdGhhdC5wYXJzZShoZXgpXG5cdFx0XHRcdFx0XHRcdG1zZyA9cmVzT2JqLnNsaWNlXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGhleClcblx0XHRcdFx0XHRcdFx0cmVzT2JqLnN0ckFyci5tYXAoKGl0ZW0saW5kZXgpPT57XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGNhdGVnb3J5ID0gaXRlbS5zbGljZSg2LDgpXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoKGNhdGVnb3J5KXtcblx0XHRcdFx0XHRcdFx0XHQgICAgY2FzZSBcIjAyXCI6XG5cdFx0XHRcdFx0XHRcdFx0ICAgIGxldCBvYmogPSAgdGhhdC5wYXJzZTAyKGl0ZW0pXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnByZXNzRGVlcCA9IG9iai5wcmVzc0RlZXA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmN1aURlZXAgPSBvYmouY3VpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0LnByZXNzRGVlcClcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG9iai5wcmVzc0RlZXAsb2JqLmN1aSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+S9v+iDveWksei0pScsIHJlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFxuXHRcdFx0LyogQXJyYXlCdWZmZXLnsbvlnovmlbDmja7ovazkuLoxNui/m+WItuWtl+espuS4siAqL1xuXHRcdFx0ICAgIGJ1ZjJoZXggKGJ1ZmZlcikgeyAvLyBidWZmZXIgaXMgYW4gQXJyYXlCdWZmZXJcblx0XHRcdCAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChuZXcgVWludDhBcnJheShidWZmZXIpLCB4ID0+ICgnMDAnICsgeC50b1N0cmluZygxNikpLnNsaWNlKC0yKSkuam9pbignJyk7XG5cdFx0XHQgICAgfSxcblx0XHRcdFxuXHRcdFx0XHQgICAgXG5cdFx0XHRcdFxuXHRcdFx0XHQgcGFyc2UwMihzdHIpe1xuXHRcdFx0XHRsZXQgaSA9IDg7XG5cdFx0XHRcdGxldCBwcmVzc0RlZXAgPSBwYXJzZUludChzdHIuc2xpY2UoOCwxMCksMTYpLy/mjInljovot53nprtcblx0XHRcdFx0bGV0IGN1aSA9IHBhcnNlSW50KHBhcnNlSW50KHN0ci5zbGljZSgxMCwxMiksMTYpPDw4KStwYXJzZUludChzdHIuc2xpY2UoMTIsMTQpLDE2KVxuXHRcdFx0XHRsZXQgcG9zaXRpb24gPSBzdHIuc2xpY2UoMTQsMTYpXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdCAgICBwcmVzc0RlZXAsXG5cdFx0XHRcdCAgICBjdWksXG5cdFx0XHRcdCAgICBwb3NpdGlvblxuXHRcdFx0XHR9XG5cdFx0XHRcdH0sXHJcblx0XHRcdCBwYXJzZShzdHIpe1xuXHRcdFx0ICAgIGxldCBleHAgPSAvYTU1YS9nXG5cdFx0XHQgICAgbGV0IHRhcCA9IHRydWU7XG5cdFx0XHQgICAgbGV0IGluZGV4QXJyID0gW11cblx0XHRcdCAgICBsZXQgc3RyQXJyID0gW11cblx0XHRcdCAgICBsZXQgb2JqID0ge31cblx0XHRcdCAgICB3aGlsZSh0YXApe1xuXHRcdFx0ICAgICAgICBsZXQgcmVzID0gZXhwLmV4ZWMoc3RyKTtcblx0XHRcdCAgICAgICAgaWYocmVzKXtcblx0XHRcdCAgICAgICAgICAgIGluZGV4QXJyLnB1c2gocmVzLmluZGV4KVxuXHRcdFx0ICAgICAgICB9ZWxzZXtcblx0XHRcdCAgICAgICAgICAgIHRhcCA9IGZhbHNlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgfVxuXHRcdFx0ICAgIFxuXHRcdFx0ICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhBcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdCAgICAgICAgLy8g6I635Y+W6ZW/5bqmXG5cdFx0XHQgICAgICAgIGxldCBsZW5ndGggPSBwYXJzZUludChzdHIuc2xpY2UoaW5kZXhBcnJbaV0rNCxpbmRleEFycltpXSs2KSwxNikqMiArNlxuXHRcdFx0ICAgICAgICAvLyBpbmRleEFycltpXSs0PT1zdHIubGVuZ3RoP2xlbmd0aD0wOmxlbmd0aD1sZW5ndGhcblx0XHRcdCAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXhBcnJbaV0rbGVuZ3RoKVxuXHRcdFx0ICAgICAgICBpZihpbmRleEFycltpXStsZW5ndGgtMTxzdHIubGVuZ3RoKXtcblx0XHRcdCAgICAgICAgICAgIGxldCBzdHJSZXMgPSBzdHIuc2xpY2UoaW5kZXhBcnJbaV0saW5kZXhBcnJbaV0rbGVuZ3RoKVxuXHRcdFx0ICAgICAgICAgICAgc3RyQXJyLnB1c2goc3RyUmVzKVxuXHRcdFx0ICAgICAgICAgICAgaWYoaT09aW5kZXhBcnIubGVuZ3RoLTEpe1xuXHRcdFx0ICAgICAgICAgICAgICAgIHN0clJlcyA9IHN0ci5zbGljZShpbmRleEFycltpXStsZW5ndGgpXG5cdFx0XHQgICAgICAgICAgICAgICAgb2JqLnNsaWNlID0gc3RyUmVzXG5cdFx0XHQgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RyUmVzKVxuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICB9ZWxzZXtcblx0XHRcdCAgICAgICAgICAgIGxldCBzdHJSZXMgPSBzdHIuc2xpY2UoaW5kZXhBcnJbaV0pXG5cdFx0XHQgICAgICAgICAgICBvYmouc2xpY2UgPSBzdHJSZXNcblx0XHRcdCAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4QXJyW2ldK2xlbmd0aClcblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgICAgICBcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgaWYoaW5kZXhBcnIucG9wKCkpXG5cdFx0XHQgICAgcmV0dXJuIHtcblx0XHRcdCAgICAgICAgc3RyQXJyLFxuXHRcdFx0ICAgICAgICAuLi5vYmpcblx0XHRcdCAgICB9XG5cdFx0XHR9LFxyXG4gd3JpdGUgKHN0cikge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0cjtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICAvKiDlsIbmlbDlgLzovazkuLpBcnJheUJ1ZmZlcuexu+Wei+aVsOaNriAqL1xuICAgICAgICB2YXIgdHlwZWRBcnJheSA9IG5ldyBVaW50OEFycmF5KHZhbHVlLm1hdGNoKC9bXFxkYS1mXXsyfS9naSkubWFwKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaCwgMTYpXG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHR5cGVkQXJyYXkuYnVmZmVyO1xuICAgICAgICB1bmkud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcbiAgICAgICAgICAgIGRldmljZUlkOiB0aGF0LmRldmljZUlkLFxuICAgICAgICAgICAgc2VydmljZUlkOiB0aGF0LnNlcnZpY2VJZCxcbiAgICAgICAgICAgIGNoYXJhY3RlcmlzdGljSWQ6IHRoYXQuY2hhcmFjdGVyaXN0aWNzSWQsXG4gICAgICAgICAgICB2YWx1ZTogYnVmZmVyLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7lj5HpgIHmiJDlip8nLCByZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6LCD55So5aSx6LSlJywgcmVzKTtcbiAgICAgICAgICAgICAgICAvKiDosIPnlKjlpLHotKXml7bvvIzlho3mrKHosIPnlKggKi9cbiAgICAgICAgICAgICAgICB1bmkud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlSWQ6IHRoYXQuZGV2aWNlSWQsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJZDogdGhhdC5zZXJ2aWNlSWQsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcmlzdGljSWQ6IHRoYXQuY2hhcmFjdGVyaXN0aWNzSWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBidWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrKwy5qyh5pWw5o2u5Y+R6YCB5oiQ5YqfJywgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+esrDLmrKHosIPnlKjlpLHotKUnLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyog6LCD55So5aSx6LSl5pe277yM5YaN5qyh6LCD55SoICovXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmkud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDogdGhhdC5kZXZpY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlSWQ6IHRoYXQuc2VydmljZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcmlzdGljSWQ6IHRoYXQuZGF0YS5jaGFyYWN0ZXJpc3RpY3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+esrDPmrKHmlbDmja7lj5HpgIHmiJDlip8nLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn56ysM+asoeiwg+eUqOWksei0pScsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdFxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQvKiAuc3RhdHVze1xyXG5cdFx0aGVpZ2h0OiB2YXIoLS0tLXN0YXR1cy1iYXItaGVpZ2h0KTtcclxuXHR9XHJcblx0LnRhYmJhcntcclxuXHRcdGJhY2tncm91bmQ6IGJsdWU7XHJcblx0fSAqL1xyXG5cdC5lY2hhcnRzIHtcclxuXHRcdGhlaWdodDogMzAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiBibHVlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblxyXG5cdFx0LmRlZXAsXHJcblx0XHQuY3VpIHtcclxuXHRcdFx0d2lkdGg6IDI1dnc7XHJcblx0XHRcdC8vIGJhY2tncm91bmQ6ICMyQzQwNUE7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0LnByb2dyZXNzIHtcclxuXHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG5cdFx0XHRcdC5yZXN1bHQge1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogI2FmZmYyYTtcclxuXHRcdFx0XHRcdC8vIGhlaWdodDozMCU7XHJcblx0XHRcdFx0XHQvLyBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC41IHM7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcblx0XHRcdFx0XHQuc3F1YXJlIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogIzk1ZWI5MDtcclxuXHRcdFx0XHRcdFx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHQvLyBib3R0b206IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC5kZWVwIHtcclxuXHRcdFx0LnJlc3VsdCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2FmZmYyYTtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwJTtcclxuXHJcblx0XHRcdFx0LnNxdWFyZSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjOTVlYjkwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5wb3NpdGlvbiB7XHJcblx0XHRcdHdpZHRoOiA1MHZ3O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZWQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC5jdWkge1xyXG5cdFx0XHR3aWR0aDogMjV2dztcclxuXHJcblx0XHRcdC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdC5yZXN1bHQge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG5cdFx0XHRcdC8vIGhlaWdodDolO1xyXG5cdFx0XHRcdC5zcXVhcmUge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4YTE3YjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5tc2cge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuO1xyXG5cclxuXHRcdC5wcm9qZWN0IHtcclxuXHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdFx0Lml0ZW0ge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcclxuXHRcdFx0XHRib3JkZXItcmlnaHQ6IDA7XHJcblx0XHRcdFx0Y29sb3I6ICNlYzcyNTk7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmdhdWdlLWNvbnRhaW5lciB7XHJcblx0XHQvLyBtYXJnaW4tdG9wOiAxMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRoZWlnaHQ6IDI1MHJweDtcclxuXHJcblx0XHQuZ2F1Z2Uge1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMTVycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0XHRcdHdpZHRoOiA0MCU7XHJcblxyXG5cdFx0XHRmb250LXNpemU6IDEwLjI5cnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5kYXRhIHtcclxuXHRcdFx0d2lkdGg6IDYwJTtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym9yZGVyOiAxMHJweCBzb2xpZCAjNUNDQ0ZDO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHRcdC5kYXRhLWl0ZW0ge1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRcdFx0Ly8gY29sb3I6IHJlZDtcclxuXHRcdFx0XHQuc3BhY2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*********************************************!*\
  !*** /Users/zzx/Project/little-web/App.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdU07QUFDdk0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!**********************************************************************!*\
  !*** /Users/zzx/Project/little-web/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStxQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zzx/Project/little-web/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ })
],[[0,"app-config"]]]);