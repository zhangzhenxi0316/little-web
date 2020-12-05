(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
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

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
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

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
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

/***/ 32:
/*!***************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/wx-canvas.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var WxCanvas = /*#__PURE__*/function () {
  function WxCanvas(ctx, canvasId, isNew, canvasNode) {_classCallCheck(this, WxCanvas);
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this._initStyle(ctx);
    }

    // this._initCanvas(zrender, ctx);

    this._initEvent();
  }_createClass(WxCanvas, [{ key: "getContext", value: function getContext(

    contextType) {
      if (contextType === '2d') {
        return this.ctx;
      }
    }

    // canvasToTempFilePath(opt) {
    //   if (!opt.canvasId) {
    //     opt.canvasId = this.canvasId;
    //   }
    //   return wx.canvasToTempFilePath(opt, this);
    // }
  }, { key: "setChart", value: function setChart(
    chart) {
      this.chart = chart;
    } }, { key: "attachEvent", value: function attachEvent()

    {
      // noop
    } }, { key: "detachEvent", value: function detachEvent()

    {
      // noop
    } }, { key: "_initCanvas", value: function _initCanvas(

    zrender, ctx) {
      zrender.util.getContext = function () {
        return ctx;
      };

      zrender.util.$override('measureText', function (text, font) {
        ctx.font = font || '12px sans-serif';
        return ctx.measureText(text);
      });
    } }, { key: "_initStyle", value: function _initStyle(

    ctx) {var _arguments = arguments;
      var styles = ['fillStyle', 'strokeStyle', 'globalAlpha',
      'textAlign', 'textBaseAlign', 'shadow', 'lineWidth',
      'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];


      styles.forEach(function (style) {
        Object.defineProperty(ctx, style, {
          set: function set(value) {
            if (style !== 'fillStyle' && style !== 'strokeStyle' ||
            value !== 'none' && value !== null)
            {
              ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);
            }
          } });

      });

      ctx.createRadialGradient = function () {
        return ctx.createCircularGradient(_arguments);
      };
    } }, { key: "_initEvent", value: function _initEvent()

    {var _this = this;
      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown' },
      {
        wxName: 'touchMove',
        ecName: 'mousemove' },
      {
        wxName: 'touchEnd',
        ecName: 'mouseup' },
      {
        wxName: 'touchEnd',
        ecName: 'click' }];


      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.touches[0];
          _this.chart.getZr().handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y });

        };
      });
    } }, { key: "width", set: function set(

    w) {
      if (this.canvasNode) this.canvasNode.width = w;
    }, get: function get()




    {
      if (this.canvasNode)
      return this.canvasNode.width;
      return 0;
    } }, { key: "height", set: function set(h) {if (this.canvasNode) this.canvasNode.height = h;}, get: function get()
    {
      if (this.canvasNode)
      return this.canvasNode.height;
      return 0;
    } }]);return WxCanvas;}();exports.default = WxCanvas;

/***/ }),

/***/ 33:
/*!*************************************************************************!*\
  !*** /Users/zzx/Project/little-web/components/uni-ec-canvas/echarts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function (t, e) { true ? e(exports) : undefined;}(this, function (t) {"use strict";function e(t) {var e = {},n = {},i = t.match(/Firefox\/([\d.]+)/),r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),o = t.match(/Edge\/([\d.]+)/),a = /micromessenger/i.test(t);return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, n.version = o[1]), a && (n.weChat = !0), { browser: n, os: e, node: !1, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11), domSupported: "undefined" != typeof document };}function n(t, e) {"createCanvas" === t && (lp = null), ap[t] = e;}function i(t) {if (null == t || "object" != typeof t) return t;var e = t,n = Jf.call(t);if ("[object Array]" === n) {if (!z(t)) {e = [];for (var r = 0, o = t.length; o > r; r++) {e[r] = i(t[r]);}}} else if (Qf[n]) {if (!z(t)) {var a = t.constructor;if (t.constructor.from) e = a.from(t);else {e = new a(t.length);for (var r = 0, o = t.length; o > r; r++) {e[r] = i(t[r]);}}}} else if (!$f[n] && !z(t) && !C(t)) {e = {};for (var s in t) {t.hasOwnProperty(s) && (e[s] = i(t[s]));}}return e;}function r(t, e, n) {if (!S(e) || !S(t)) return n ? i(e) : t;for (var o in e) {if (e.hasOwnProperty(o)) {var a = t[o],s = e[o];!S(s) || !S(a) || x(s) || x(a) || C(s) || C(a) || M(s) || M(a) || z(s) || z(a) ? !n && o in t || (t[o] = i(e[o], !0)) : r(a, s, n);}}return t;}function o(t, e) {for (var n = t[0], i = 1, o = t.length; o > i; i++) {n = r(n, t[i], e);}return n;}function a(t, e) {for (var n in e) {e.hasOwnProperty(n) && (t[n] = e[n]);}return t;}function s(t, e, n) {for (var i in e) {e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);}return t;}function l() {return lp || (lp = sp().getContext("2d")), lp;}function u(t, e) {if (t) {if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; i > n; n++) {if (t[n] === e) return n;}}return -1;}function h(t, e) {function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) {i.hasOwnProperty(r) && (t.prototype[r] = i[r]);}t.prototype.constructor = t, t.superClass = e;}function c(t, e, n) {t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n);}function d(t) {return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0;}function f(t, e, n) {if (t && e) if (t.forEach && t.forEach === ep) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) {e.call(n, t[i], i, t);} else for (var o in t) {t.hasOwnProperty(o) && e.call(n, t[o], o, t);}}function p(t, e, n) {if (t && e) {if (t.map && t.map === rp) return t.map(e, n);for (var i = [], r = 0, o = t.length; o > r; r++) {i.push(e.call(n, t[r], r, t));}return i;}}function g(t, e, n, i) {if (t && e) {if (t.reduce && t.reduce === op) return t.reduce(e, n, i);for (var r = 0, o = t.length; o > r; r++) {n = e.call(i, n, t[r], r, t);}return n;}}function v(t, e, n) {if (t && e) {if (t.filter && t.filter === np) return t.filter(e, n);for (var i = [], r = 0, o = t.length; o > r; r++) {e.call(n, t[r], r, t) && i.push(t[r]);}return i;}}function m(t, e, n) {if (t && e) for (var i = 0, r = t.length; r > i; i++) {if (e.call(n, t[i], i, t)) return t[i];}}function y(t, e) {var n = ip.call(arguments, 2);return function () {return t.apply(e, n.concat(ip.call(arguments)));};}function _(t) {var e = ip.call(arguments, 1);return function () {return t.apply(this, e.concat(ip.call(arguments)));};}function x(t) {return "[object Array]" === Jf.call(t);}function w(t) {return "function" == typeof t;}function b(t) {return "[object String]" === Jf.call(t);}function S(t) {var e = typeof t;return "function" === e || !!t && "object" === e;}function M(t) {return !!$f[Jf.call(t)];}function I(t) {return !!Qf[Jf.call(t)];}function C(t) {return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument;}function T(t) {return t !== t;}function D() {for (var t = 0, e = arguments.length; e > t; t++) {if (null != arguments[t]) return arguments[t];}}function k(t, e) {return null != t ? t : e;}function A(t, e, n) {return null != t ? t : null != e ? e : n;}function P() {return Function.call.apply(ip, arguments);}function L(t) {if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;}function O(t, e) {if (!t) throw new Error(e);}function E(t) {return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");}function B(t) {t[up] = !0;}function z(t) {return t[up];}function R(t) {function e(t, e) {n ? i.set(t, e) : i.set(e, t);}var n = x(t);this.data = {};var i = this;t instanceof R ? t.each(e) : t && f(t, e);}function N(t) {return new R(t);}function F(t, e) {for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) {n[i] = t[i];}var r = t.length;for (i = 0; i < e.length; i++) {n[i + r] = e[i];}return n;}function H() {}function V(t, e) {var n = new cp(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;}function G(t, e) {return t[0] = e[0], t[1] = e[1], t;}function W(t) {var e = new cp(2);return e[0] = t[0], e[1] = t[1], e;}function X(t, e, n) {return t[0] = e, t[1] = n, t;}function Y(t, e, n) {return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;}function U(t, e, n, i) {return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;}function j(t, e, n) {return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;}function q(t) {return Math.sqrt(Z(t));}function Z(t) {return t[0] * t[0] + t[1] * t[1];}function K(t, e, n) {return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;}function $(t, e, n) {return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;}function Q(t, e) {return t[0] * e[0] + t[1] * e[1];}function J(t, e, n) {return t[0] = e[0] * n, t[1] = e[1] * n, t;}function te(t, e) {var n = q(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;}function ee(t, e) {return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));}function ne(t, e) {return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);}function ie(t, e) {return t[0] = -e[0], t[1] = -e[1], t;}function re(t, e, n, i) {return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;}function oe(t, e, n) {var i = e[0],r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;}function ae(t, e, n) {return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;}function se(t, e, n) {return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;}function le() {this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this);}function ue(t, e) {return { target: t, topTarget: e && e.topTarget };}function he(t, e) {var n = t._$eventProcessor;return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;}function ce(t, e, n, i, r, o) {var a = t._$handlers;if ("function" == typeof n && (r = i, i = n, n = null), !i || !e) return t;n = he(t, n), a[e] || (a[e] = []);for (var s = 0; s < a[e].length; s++) {if (a[e][s].h === i) return t;}var l = { h: i, one: o, query: n, ctx: r || t, callAtLast: i.zrEventfulCallAtLast },u = a[e].length - 1,h = a[e][u];return h && h.callAtLast ? a[e].splice(u, 0, l) : a[e].push(l), t;}function de(t, e, n, i, r, o) {var a = i + "-" + r,s = t.length;if (o.hasOwnProperty(a)) return o[a];if (1 === e) {var l = Math.round(Math.log((1 << s) - 1 & ~r) / _p);return t[n][l];}for (var u = i | 1 << n, h = n + 1; i & 1 << h;) {h++;}for (var c = 0, d = 0, f = 0; s > d; d++) {var p = 1 << d;p & r || (c += (f % 2 ? -1 : 1) * t[n][d] * de(t, e - 1, h, u, r | p, o), f++);}return o[a] = c, c;}function fe(t, e) {var n = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],i = {},r = de(n, 8, 0, 0, 0, i);if (0 !== r) {for (var o = [], a = 0; 8 > a; a++) {for (var s = 0; 8 > s; s++) {null == o[s] && (o[s] = 0), o[s] += ((a + s) % 2 ? -1 : 1) * de(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i) / r * e[a];}}return function (t, e, n) {var i = e * o[6] + n * o[7] + 1;t[0] = (e * o[0] + n * o[1] + o[2]) / i, t[1] = (e * o[3] + n * o[4] + o[5]) / i;};}}function pe(t, e, n, i, r) {return ge(wp, e, i, r, !0) && ge(t, n, wp[0], wp[1]);}function ge(t, e, n, i, r) {if (e.getBoundingClientRect && Kf.domSupported && !ye(e)) {var o = e[xp] || (e[xp] = {}),a = ve(e, o),s = me(a, o, r);if (s) return s(t, n, i), !0;}return !1;}function ve(t, e) {var n = e.markers;if (n) return n;n = e.markers = [];for (var i = ["left", "right"], r = ["top", "bottom"], o = 0; 4 > o; o++) {var a = document.createElement("div"),s = a.style,l = o % 2,u = (o >> 1) % 2;s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(a), n.push(a);}return n;}function me(t, e, n) {for (var i = n ? "invTrans" : "trans", r = e[i], o = e.srcCoords, a = !0, s = [], l = [], u = 0; 4 > u; u++) {var h = t[u].getBoundingClientRect(),c = 2 * u,d = h.left,f = h.top;s.push(d, f), a = a && o && d === o[c] && f === o[c + 1], l.push(t[u].offsetLeft, t[u].offsetTop);}return a && r ? r : (e.srcCoords = s, e[i] = n ? fe(l, s) : fe(s, l));}function ye(t) {return "CANVAS" === t.nodeName.toUpperCase();}function _e(t, e, n, i) {return n = n || {}, i || !Kf.canvasSupported ? xe(t, e, n) : Kf.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : xe(t, e, n), n;}function xe(t, e, n) {if (Kf.domSupported && t.getBoundingClientRect) {var i = e.clientX,r = e.clientY;if (ye(t)) {var o = t.getBoundingClientRect();return n.zrX = i - o.left, void (n.zrY = r - o.top);}if (ge(Mp, t, i, r)) return n.zrX = Mp[0], void (n.zrY = Mp[1]);}n.zrX = n.zrY = 0;}function we(t) {return t || window.event;}function be(t, e, n) {if (e = we(e), null != e.zrX) return e;var i = e.type,r = i && i.indexOf("touch") >= 0;if (r) {var o = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];o && _e(t, o, e, n);} else _e(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var a = e.button;return null == e.which && void 0 !== a && Sp.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;}function Se(t, e, n, i) {bp ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n);}function Me(t, e, n, i) {bp ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n);}function Ie(t) {var e = t[1][0] - t[0][0],n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);}function Ce(t) {return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];}function Te(t, e, n) {return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: !1, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which, stop: De };}function De() {Ip(this.event);}function ke() {}function Ae(t, e, n) {if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {for (var i, r = t; r;) {if (r.clipPath && !r.clipPath.contain(e, n)) return !1;r.silent && (i = !0), r = r.parent;}return i ? Dp : !0;}return !1;}function Pe(t, e, n) {var i = t.painter;return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight();}function Le() {var t = new Pp(6);return Oe(t), t;}function Oe(t) {return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;}function Ee(t, e) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;}function Be(t, e, n) {var i = e[0] * n[0] + e[2] * n[1],r = e[1] * n[0] + e[3] * n[1],o = e[0] * n[2] + e[2] * n[3],a = e[1] * n[2] + e[3] * n[3],s = e[0] * n[4] + e[2] * n[5] + e[4],l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t;}function ze(t, e, n) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;}function Re(t, e, n) {var i = e[0],r = e[2],o = e[4],a = e[1],s = e[3],l = e[5],u = Math.sin(n),h = Math.cos(n);return t[0] = i * h + a * u, t[1] = -i * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t;}function Ne(t, e, n) {var i = n[0],r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;}function Fe(t, e) {var n = e[0],i = e[2],r = e[4],o = e[1],a = e[3],s = e[5],l = n * a - o * i;return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null;}function He(t) {var e = Le();return Ee(e, t), e;}function Ve(t) {return t > Ep || -Ep > t;}function Ge(t) {this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;}function We(t) {return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;}function Xe(t) {return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;}function Ye(t) {return 0 > t ? 0 : t > 1 ? 1 : t;}function Ue(t) {return We(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));}function je(t) {return Ye(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));}function qe(t, e, n) {return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;}function Ze(t, e, n) {return t + (e - t) * n;}function Ke(t, e, n, i, r) {return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;}function $e(t, e) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;}function Qe(t, e) {qp && $e(qp, e), qp = jp.put(t, qp || e.slice());}function Je(t, e) {if (t) {e = e || [];var n = jp.get(t);if (n) return $e(e, n);t += "";var i = t.replace(/ /g, "").toLowerCase();if (i in Up) return $e(e, Up[i]), Qe(t, e), e;if ("#" !== i.charAt(0)) {var r = i.indexOf("("),o = i.indexOf(")");if (-1 !== r && o + 1 === i.length) {var a = i.substr(0, r),s = i.substr(r + 1, o - (r + 1)).split(","),l = 1;switch (a) {case "rgba":if (4 !== s.length) return void Ke(e, 0, 0, 0, 1);l = je(s.pop());case "rgb":return 3 !== s.length ? void Ke(e, 0, 0, 0, 1) : (Ke(e, Ue(s[0]), Ue(s[1]), Ue(s[2]), l), Qe(t, e), e);case "hsla":return 4 !== s.length ? void Ke(e, 0, 0, 0, 1) : (s[3] = je(s[3]), tn(s, e), Qe(t, e), e);case "hsl":return 3 !== s.length ? void Ke(e, 0, 0, 0, 1) : (tn(s, e), Qe(t, e), e);default:return;}}Ke(e, 0, 0, 0, 1);} else {if (4 === i.length) {var u = parseInt(i.substr(1), 16);return u >= 0 && 4095 >= u ? (Ke(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Qe(t, e), e) : void Ke(e, 0, 0, 0, 1);}if (7 === i.length) {var u = parseInt(i.substr(1), 16);return u >= 0 && 16777215 >= u ? (Ke(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Qe(t, e), e) : void Ke(e, 0, 0, 0, 1);}}}}function tn(t, e) {var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,i = je(t[1]),r = je(t[2]),o = .5 >= r ? r * (i + 1) : r + i - r * i,a = 2 * r - o;return e = e || [], Ke(e, We(255 * qe(a, o, n + 1 / 3)), We(255 * qe(a, o, n)), We(255 * qe(a, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;}function en(t) {if (t) {var e,n,i = t[0] / 255,r = t[1] / 255,o = t[2] / 255,a = Math.min(i, r, o),s = Math.max(i, r, o),l = s - a,u = (s + a) / 2;if (0 === l) e = 0, n = 0;else {n = .5 > u ? l / (s + a) : l / (2 - s - a);var h = ((s - i) / 6 + l / 2) / l,c = ((s - r) / 6 + l / 2) / l,d = ((s - o) / 6 + l / 2) / l;i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : o === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1);}var f = [360 * e, n, u];return null != t[3] && f.push(t[3]), f;}}function nn(t, e) {var n = Je(t);if (n) {for (var i = 0; 3 > i; i++) {n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);}return un(n, 4 === n.length ? "rgba" : "rgb");}}function rn(t) {var e = Je(t);return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;}function on(t, e, n) {if (e && e.length && t >= 0 && 1 >= t) {n = n || [];var i = t * (e.length - 1),r = Math.floor(i),o = Math.ceil(i),a = e[r],s = e[o],l = i - r;return n[0] = We(Ze(a[0], s[0], l)), n[1] = We(Ze(a[1], s[1], l)), n[2] = We(Ze(a[2], s[2], l)), n[3] = Ye(Ze(a[3], s[3], l)), n;}}function an(t, e, n) {if (e && e.length && t >= 0 && 1 >= t) {var i = t * (e.length - 1),r = Math.floor(i),o = Math.ceil(i),a = Je(e[r]),s = Je(e[o]),l = i - r,u = un([We(Ze(a[0], s[0], l)), We(Ze(a[1], s[1], l)), We(Ze(a[2], s[2], l)), Ye(Ze(a[3], s[3], l))], "rgba");return n ? { color: u, leftIndex: r, rightIndex: o, value: i } : u;}}function sn(t, e, n, i) {return t = Je(t), t ? (t = en(t), null != e && (t[0] = Xe(e)), null != n && (t[1] = je(n)), null != i && (t[2] = je(i)), un(tn(t), "rgba")) : void 0;}function ln(t, e) {return t = Je(t), t && null != e ? (t[3] = Ye(e), un(t, "rgba")) : void 0;}function un(t, e) {if (t && t.length) {var n = t[0] + "," + t[1] + "," + t[2];return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";}}function hn(t, e) {return t[e];}function cn(t, e, n) {t[e] = n;}function dn(t, e, n) {return (e - t) * n + t;}function fn(t, e, n) {return n > .5 ? e : t;}function pn(t, e, n, i, r) {var o = t.length;if (1 === r) for (var a = 0; o > a; a++) {i[a] = dn(t[a], e[a], n);} else for (var s = o && t[0].length, a = 0; o > a; a++) {for (var l = 0; s > l; l++) {i[a][l] = dn(t[a][l], e[a][l], n);}}}function gn(t, e, n) {var i = t.length,r = e.length;if (i !== r) {var o = i > r;if (o) t.length = r;else for (var a = i; r > a; a++) {t.push(1 === n ? e[a] : Qp.call(e[a]));}}for (var s = t[0] && t[0].length, a = 0; a < t.length; a++) {if (1 === n) isNaN(t[a]) && (t[a] = e[a]);else for (var l = 0; s > l; l++) {isNaN(t[a][l]) && (t[a][l] = e[a][l]);}}}function vn(t, e, n) {if (t === e) return !0;var i = t.length;if (i !== e.length) return !1;if (1 === n) {for (var r = 0; i > r; r++) {if (t[r] !== e[r]) return !1;}} else for (var o = t[0].length, r = 0; i > r; r++) {for (var a = 0; o > a; a++) {if (t[r][a] !== e[r][a]) return !1;}}return !0;}function mn(t, e, n, i, r, o, a, s, l) {var u = t.length;if (1 === l) for (var h = 0; u > h; h++) {s[h] = yn(t[h], e[h], n[h], i[h], r, o, a);} else for (var c = t[0].length, h = 0; u > h; h++) {for (var d = 0; c > d; d++) {s[h][d] = yn(t[h][d], e[h][d], n[h][d], i[h][d], r, o, a);}}}function yn(t, e, n, i, r, o, a) {var s = .5 * (n - t),l = .5 * (i - e);return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e;}function _n(t) {if (d(t)) {var e = t.length;if (d(t[0])) {for (var n = [], i = 0; e > i; i++) {n.push(Qp.call(t[i]));}return n;}return Qp.call(t);}return t;}function xn(t) {return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";}function wn(t) {var e = t[t.length - 1].value;return d(e && e[0]) ? 2 : 1;}function bn(t, e, n, i, r, o) {var a = t._getter,s = t._setter,l = "spline" === e,u = i.length;if (u) {var h,c = i[0].value,f = d(c),p = !1,g = !1,v = f ? wn(i) : 0;i.sort(function (t, e) {return t.time - e.time;}), h = i[u - 1].time;for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {m.push(i[w].time / h);var b = i[w].value;if (f && vn(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {var S = Je(b);S ? (b = S, p = !0) : g = !0;}y.push(b);}if (o || !x) {for (var M = y[u - 1], w = 0; u - 1 > w; w++) {f ? gn(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);}f && gn(a(t._target, r), M, v);var I,C,T,D,k,A,P = 0,L = 0;if (p) var O = [0, 0, 0, 0];var E = function E(t, e) {var n;if (0 > e) n = 0;else if (L > e) {for (I = Math.min(P + 1, u - 1), n = I; n >= 0 && !(m[n] <= e); n--) {;}n = Math.min(n, u - 2);} else {for (n = P; u > n && !(m[n] > e); n++) {;}n = Math.min(n - 1, u - 2);}P = n, L = e;var i = m[n + 1] - m[n];if (0 !== i) if (C = (e - m[n]) / i, l) {if (D = y[n], T = y[0 === n ? n : n - 1], k = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], f) mn(T, D, k, A, C, C * C, C * C * C, a(t, r), v);else {var o;if (p) o = mn(T, D, k, A, C, C * C, C * C * C, O, 1), o = xn(O);else {if (g) return fn(D, k, C);o = yn(T, D, k, A, C, C * C, C * C * C);}s(t, r, o);}} else if (f) pn(y[n], y[n + 1], C, a(t, r), v);else {var o;if (p) pn(y[n], y[n + 1], C, O, 1), o = xn(O);else {if (g) return fn(y[n], y[n + 1], C);o = dn(y[n], y[n + 1], C);}s(t, r, o);}},B = new Ge({ target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: E, ondestroy: n });return e && "spline" !== e && (B.easing = e), B;}}}function Sn(t, e, n, i, r, o, a, s) {function l() {h--, h || o && o();}b(i) ? (o = r, r = i, i = 0) : w(r) ? (o = r, r = "linear", i = 0) : w(i) ? (o = i, i = 0) : w(n) ? (o = n, n = 500) : n || (n = 500), t.stopAnimation(), Mn(t, "", t, e, n, i, s);var u = t.animators.slice(),h = u.length;h || o && o();for (var c = 0; c < u.length; c++) {u[c].done(l).start(r, a);}}function Mn(t, e, n, i, r, o, a) {var s = {},l = 0;for (var u in i) {i.hasOwnProperty(u) && (null != n[u] ? S(i[u]) && !d(i[u]) ? Mn(t, e ? e + "." + u : u, n[u], i[u], r, o, a) : (a ? (s[u] = n[u], In(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || a || In(t, e, u, i[u]));}l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(o || 0);}function In(t, e, n, i) {if (e) {var r = {};r[e] = {}, r[e][n] = i, t.attr(r);} else t.attr(n, i);}function Cn(t, e, n, i) {0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;}function Tn(t) {for (var e = 0; t >= cg;) {e |= 1 & t, t >>= 1;}return t + e;}function Dn(t, e, n, i) {var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {for (; n > r && i(t[r], t[r - 1]) < 0;) {r++;}kn(t, e, r);} else for (; n > r && i(t[r], t[r - 1]) >= 0;) {r++;}return r - e;}function kn(t, e, n) {for (n--; n > e;) {var i = t[e];t[e++] = t[n], t[n--] = i;}}function An(t, e, n, i, r) {for (i === e && i++; n > i; i++) {for (var o, a = t[i], s = e, l = i; l > s;) {o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;}var u = i - s;switch (u) {case 3:t[s + 3] = t[s + 2];case 2:t[s + 2] = t[s + 1];case 1:t[s + 1] = t[s];break;default:for (; u > 0;) {t[s + u] = t[s + u - 1], u--;}}t[s] = a;}}function Pn(t, e, n, i, r, o) {var a = 0,s = 0,l = 1;if (o(t, e[n + r]) > 0) {for (s = i - r; s > l && o(t, e[n + r + l]) > 0;) {a = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s), a += r, l += r;} else {for (s = r + 1; s > l && o(t, e[n + r - l]) <= 0;) {a = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s);var u = a;a = r - l, l = r - u;}for (a++; l > a;) {var h = a + (l - a >>> 1);o(t, e[n + h]) > 0 ? a = h + 1 : l = h;}return l;}function Ln(t, e, n, i, r, o) {var a = 0,s = 0,l = 1;if (o(t, e[n + r]) < 0) {for (s = r + 1; s > l && o(t, e[n + r - l]) < 0;) {a = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s);var u = a;a = r - l, l = r - u;} else {for (s = i - r; s > l && o(t, e[n + r + l]) >= 0;) {a = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s), a += r, l += r;}for (a++; l > a;) {var h = a + (l - a >>> 1);o(t, e[n + h]) < 0 ? l = h : a = h + 1;}return l;}function On(t, e) {function n(t, e) {l[c] = t, u[c] = e, c += 1;}function i() {for (; c > 1;) {var t = c - 2;if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;else if (u[t] > u[t + 1]) break;o(t);}}function r() {for (; c > 1;) {var t = c - 2;t > 0 && u[t - 1] < u[t + 1] && t--, o(t);}}function o(n) {var i = l[n],r = u[n],o = l[n + 1],h = u[n + 1];u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;var d = Ln(t[o], t, i, r, 0, e);i += d, r -= d, 0 !== r && (h = Pn(t[i + r - 1], t, o, h, h - 1, e), 0 !== h && (h >= r ? a(i, r, o, h) : s(i, r, o, h)));}function a(n, i, r, o) {var a = 0;for (a = 0; i > a; a++) {d[a] = t[n + a];}var s = 0,l = r,u = n;if (t[u++] = t[l++], 0 !== --o) {if (1 === i) {for (a = 0; o > a; a++) {t[u + a] = t[l + a];}return void (t[u + o] = d[s]);}for (var c, f, p, g = h;;) {c = 0, f = 0, p = !1;do {if (e(t[l], d[s]) < 0) {if (t[u++] = t[l++], f++, c = 0, 0 === --o) {p = !0;break;}} else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {p = !0;break;}} while (g > (c | f));if (p) break;do {if (c = Ln(t[l], d, s, i, 0, e), 0 !== c) {for (a = 0; c > a; a++) {t[u + a] = d[s + a];}if (u += c, s += c, i -= c, 1 >= i) {p = !0;break;}}if (t[u++] = t[l++], 0 === --o) {p = !0;break;}if (f = Pn(d[s], t, l, o, 0, e), 0 !== f) {for (a = 0; f > a; a++) {t[u + a] = t[l + a];}if (u += f, l += f, o -= f, 0 === o) {p = !0;break;}}if (t[u++] = d[s++], 1 === --i) {p = !0;break;}g--;} while (c >= dg || f >= dg);if (p) break;0 > g && (g = 0), g += 2;}if (h = g, 1 > h && (h = 1), 1 === i) {for (a = 0; o > a; a++) {t[u + a] = t[l + a];}t[u + o] = d[s];} else {if (0 === i) throw new Error();for (a = 0; i > a; a++) {t[u + a] = d[s + a];}}} else for (a = 0; i > a; a++) {t[u + a] = d[s + a];}}function s(n, i, r, o) {var a = 0;for (a = 0; o > a; a++) {d[a] = t[r + a];}var s = n + i - 1,l = o - 1,u = r + o - 1,c = 0,f = 0;if (t[u--] = t[s--], 0 !== --i) {if (1 === o) {for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) {t[f + a] = t[c + a];}return void (t[u] = d[l]);}for (var p = h;;) {var g = 0,v = 0,m = !1;do {if (e(d[l], t[s]) < 0) {if (t[u--] = t[s--], g++, v = 0, 0 === --i) {m = !0;break;}} else if (t[u--] = d[l--], v++, g = 0, 1 === --o) {m = !0;break;}} while (p > (g | v));if (m) break;do {if (g = i - Ln(d[l], t, n, i, i - 1, e), 0 !== g) {for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, a = g - 1; a >= 0; a--) {t[f + a] = t[c + a];}if (0 === i) {m = !0;break;}}if (t[u--] = d[l--], 1 === --o) {m = !0;break;}if (v = o - Pn(t[s], d, 0, o, o - 1, e), 0 !== v) {for (u -= v, l -= v, o -= v, f = u + 1, c = l + 1, a = 0; v > a; a++) {t[f + a] = d[c + a];}if (1 >= o) {m = !0;break;}}if (t[u--] = t[s--], 0 === --i) {m = !0;break;}p--;} while (g >= dg || v >= dg);if (m) break;0 > p && (p = 0), p += 2;}if (h = p, 1 > h && (h = 1), 1 === o) {for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) {t[f + a] = t[c + a];}t[u] = d[l];} else {if (0 === o) throw new Error();for (c = u - (o - 1), a = 0; o > a; a++) {t[c + a] = d[a];}}} else for (c = u - (o - 1), a = 0; o > a; a++) {t[c + a] = d[a];}}var l,u,h = dg,c = 0,d = [];l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;}function En(t, e, n, i) {n || (n = 0), i || (i = t.length);var r = i - n;if (!(2 > r)) {var o = 0;if (cg > r) return o = Dn(t, n, i, e), void An(t, n, i, n + o, e);var a = new On(t, e),s = Tn(r);do {if (o = Dn(t, n, i, e), s > o) {var l = r;l > s && (l = s), An(t, n, n + l, n + o, e), o = l;}a.pushRun(n, o), a.mergeRuns(), r -= o, n += o;} while (0 !== r);a.forceMergeRuns();}}function Bn(t, e) {return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;}function zn(t, e, n) {var i = null == e.x ? 0 : e.x,r = null == e.x2 ? 1 : e.x2,o = null == e.y ? 0 : e.y,a = null == e.y2 ? 0 : e.y2;e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, a = a * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a;var s = t.createLinearGradient(i, o, r, a);return s;}function Rn(t, e, n) {var i = n.width,r = n.height,o = Math.min(i, r),a = null == e.x ? .5 : e.x,s = null == e.y ? .5 : e.y,l = null == e.r ? .5 : e.r;e.global || (a = a * i + n.x, s = s * r + n.y, l *= o);var u = t.createRadialGradient(a, s, 0, a, s, l);return u;}function Nn() {return !1;}function Fn(t, e, n) {var i = sp(),r = e.getWidth(),o = e.getHeight(),a = i.style;return a && (a.position = "absolute", a.left = 0, a.top = 0, a.width = r + "px", a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, i;}function Hn(t) {if ("string" == typeof t) {var e = Cg.get(t);return e && e.image;}return t;}function Vn(t, e, n, i, r) {if (t) {if ("string" == typeof t) {if (e && e.__zrImageSrc === t || !n) return e;var o = Cg.get(t),a = { hostEl: n, cb: i, cbPayload: r };return o ? (e = o.image, !Wn(e) && o.pending.push(a)) : (e = new Image(), e.onload = e.onerror = Gn, Cg.put(t, e.__cachedImgObj = { image: e, pending: [a] }), e.src = e.__zrImageSrc = t), e;}return t;}return e;}function Gn() {var t = this.__cachedImgObj;this.onload = this.onerror = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {var n = t.pending[e],i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();}t.pending.length = 0;}function Wn(t) {return t && t.width && t.height;}function Xn(t, e) {e = e || Pg;var n = t + ":" + e;if (Tg[n]) return Tg[n];for (var i = (t + "").split("\n"), r = 0, o = 0, a = i.length; a > o; o++) {r = Math.max(ni(i[o], e).width, r);}return Dg > kg && (Dg = 0, Tg = {}), Dg++, Tg[n] = r, r;}function Yn(t, e, n, i, r, o, a, s) {return a ? jn(t, e, n, i, r, o, a, s) : Un(t, e, n, i, r, o, s);}function Un(t, e, n, i, r, o, a) {var s = ii(t, e, r, o, a),l = Xn(t, e);r && (l += r[1] + r[3]);var u = s.outerHeight,h = qn(0, l, n),c = Zn(0, u, i),d = new Cn(h, c, l, u);return d.lineHeight = s.lineHeight, d;}function jn(t, e, n, i, r, o, a, s) {var l = ri(t, { rich: a, truncate: s, font: e, textAlign: n, textPadding: r, textLineHeight: o }),u = l.outerWidth,h = l.outerHeight,c = qn(0, u, n),d = Zn(0, h, i);return new Cn(c, d, u, h);}function qn(t, e, n) {return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;}function Zn(t, e, n) {return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;}function Kn(t, e, n) {var i = e.textPosition,r = e.textDistance,o = n.x,a = n.y;r = r || 0;var s = n.height,l = n.width,u = s / 2,h = "left",c = "top";switch (i) {case "left":o -= r, a += u, h = "right", c = "middle";break;case "right":o += r + l, a += u, c = "middle";break;case "top":o += l / 2, a -= r, h = "center", c = "bottom";break;case "bottom":o += l / 2, a += s + r, h = "center";break;case "inside":o += l / 2, a += u, h = "center", c = "middle";break;case "insideLeft":o += r, a += u, c = "middle";break;case "insideRight":o += l - r, a += u, h = "right", c = "middle";break;case "insideTop":o += l / 2, a += r, h = "center";break;case "insideBottom":o += l / 2, a += s - r, h = "center", c = "bottom";break;case "insideTopLeft":o += r, a += r;break;case "insideTopRight":o += l - r, a += r, h = "right";break;case "insideBottomLeft":o += r, a += s - r, c = "bottom";break;case "insideBottomRight":o += l - r, a += s - r, h = "right", c = "bottom";}return t = t || {}, t.x = o, t.y = a, t.textAlign = h, t.textVerticalAlign = c, t;}function $n(t, e, n, i, r) {if (!e) return "";var o = (t + "").split("\n");r = Qn(e, n, i, r);for (var a = 0, s = o.length; s > a; a++) {o[a] = Jn(o[a], r);}return o.join("\n");}function Qn(t, e, n, i) {i = a({}, i), i.font = e;var n = k(n, "...");i.maxIterations = k(i.maxIterations, 2);var r = i.minChar = k(i.minChar, 0);i.cnCharWidth = Xn("国", e);var o = i.ascCharWidth = Xn("a", e);i.placeholder = k(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= o; l++) {s -= o;}var u = Xn(n, e);return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i;}function Jn(t, e) {var n = e.containerWidth,i = e.font,r = e.contentWidth;if (!n) return "";var o = Xn(t, i);if (n >= o) return t;for (var a = 0;; a++) {if (r >= o || a >= e.maxIterations) {t += e.ellipsis;break;}var s = 0 === a ? ti(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;t = t.substr(0, s), o = Xn(t, i);}return "" === t && (t = e.placeholder), t;}function ti(t, e, n, i) {for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {var s = t.charCodeAt(o);r += s >= 0 && 127 >= s ? n : i;}return o;}function ei(t) {return Xn("国", t);}function ni(t, e) {return Lg.measureText(t, e);}function ii(t, e, n, i, r) {null != t && (t += "");var o = k(i, ei(e)),a = t ? t.split("\n") : [],s = a.length * o,l = s,u = !0;if (n && (l += n[0] + n[2]), t && r) {u = !1;var h = r.outerHeight,c = r.outerWidth;if (null != h && l > h) t = "", a = [];else if (null != c) for (var d = Qn(c - (n ? n[1] + n[3] : 0), e, r.ellipsis, { minChar: r.minChar, placeholder: r.placeholder }), f = 0, p = a.length; p > f; f++) {a[f] = Jn(a[f], d);}}return { lines: a, height: s, outerHeight: l, lineHeight: o, canCacheByTextString: u };}function ri(t, e) {var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = Ag.lastIndex = 0; null != (i = Ag.exec(t));) {var o = i.index;o > r && oi(n, t.substring(r, o)), oi(n, i[2], i[1]), r = Ag.lastIndex;}r < t.length && oi(n, t.substring(r, t.length));var a = n.lines,s = 0,l = 0,u = [],h = e.textPadding,c = e.truncate,d = c && c.outerWidth,f = c && c.outerHeight;h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));for (var p = 0; p < a.length; p++) {for (var g = a[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {var _ = g.tokens[y],x = _.styleName && e.rich[_.styleName] || {},w = _.textPadding = x.textPadding,b = _.font = x.font || e.font,S = _.textHeight = k(x.textHeight, ei(b));if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = A(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return { lines: [], width: 0, height: 0 };_.textWidth = Xn(_.text, b);var M = x.textWidth,I = null == M || "auto" === M;if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0;else {if (I) {M = _.textWidth;var C = x.textBackgroundColor,T = C && C.image;T && (T = Hn(T), Wn(T) && (M = Math.max(M, T.width * S / T.height)));}var D = w ? w[1] + w[3] : 0;M += D;var P = null != d ? d - m : null;null != P && M > P && (!I || D > P ? (_.text = "", _.textWidth = M = 0) : (_.text = $n(_.text, P - D, b, c.ellipsis, { minChar: c.minChar }), _.textWidth = Xn(_.text, b), M = _.textWidth + D));}m += _.width = M, x && (v = Math.max(v, _.lineHeight));}g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);}n.outerWidth = n.width = k(e.textWidth, l), n.outerHeight = n.height = k(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);for (var p = 0; p < u.length; p++) {var _ = u[p],L = _.percentWidth;_.width = parseInt(L, 10) / 100 * l;}return n;}function oi(t, e, n) {for (var i = "" === e, r = e.split("\n"), o = t.lines, a = 0; a < r.length; a++) {var s = r[a],l = { styleName: n, text: s, isLineHolder: !s && !i };if (a) o.push({ tokens: [l] });else {var u = (o[o.length - 1] || (o[0] = { tokens: [] })).tokens,h = u.length;1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l);}}}function ai(t) {var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && E(e) || t.textFont || t.font;}function si(t, e) {var n,i,r,o,a = e.x,s = e.y,l = e.width,u = e.height,h = e.r;0 > l && (a += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = o = h : h instanceof Array ? 1 === h.length ? n = i = r = o = h[0] : 2 === h.length ? (n = r = h[0], i = o = h[1]) : 3 === h.length ? (n = h[0], i = o = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], o = h[3]) : n = i = r = o = 0;var c;n + i > l && (c = n + i, n *= l / c, i *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + o > u && (c = n + o, n *= u / c, o *= u / c), t.moveTo(a + n, s), t.lineTo(a + l - i, s), 0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(a + l, s + u - r), 0 !== r && t.arc(a + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(a + o, s + u), 0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI), t.lineTo(a, s + n), 0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI);}function li(t) {return ui(t), f(t.rich, ui), t;}function ui(t) {if (t) {t.font = ai(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || Eg[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || Bg[n] ? n : "top";var i = t.textPadding;i && (t.textPadding = L(t.textPadding));}}function hi(t, e, n, i, r, o) {i.rich ? di(t, e, n, i, r, o) : ci(t, e, n, i, r, o);}function ci(t, e, n, i, r, o) {var a,s = vi(i),l = !1,u = e.__attrCachedBy === vg.PLAIN_TEXT;o !== mg ? (o && (a = o.style, l = !s && u && a), e.__attrCachedBy = s ? vg.NONE : vg.PLAIN_TEXT) : u && (e.__attrCachedBy = vg.NONE);var h = i.font || Og;l && h === (a.font || Og) || (e.font = h);var c = t.__computedFont;t.__styleFont !== h && (t.__styleFont = h, c = t.__computedFont = e.font);var d = i.textPadding,f = i.textLineHeight,p = t.__textCotentBlock;(!p || t.__dirtyText) && (p = t.__textCotentBlock = ii(n, c, d, f, i.truncate));var g = p.outerHeight,v = p.lines,m = p.lineHeight,y = _i(Ng, t, i, r),_ = y.baseX,x = y.baseY,w = y.textAlign || "left",b = y.textVerticalAlign;pi(e, i, r, _, x);var S = Zn(x, g, b),M = _,I = S;if (s || d) {var C = Xn(n, c),T = C;d && (T += d[1] + d[3]);var D = qn(_, T, w);s && mi(t, e, i, D, S, T, g), d && (M = Mi(_, w, d), I += d[0]);}e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = i.opacity || 1;for (var k = 0; k < zg.length; k++) {var A = zg[k],P = A[0],L = A[1],O = i[P];l && O === a[P] || (e[L] = gg(e, L, O || A[2]));}I += m / 2;var E = i.textStrokeWidth,B = l ? a.textStrokeWidth : null,z = !l || E !== B,R = !l || z || i.textStroke !== a.textStroke,N = wi(i.textStroke, E),F = bi(i.textFill);if (N && (z && (e.lineWidth = E), R && (e.strokeStyle = N)), F && (l && i.textFill === a.textFill || (e.fillStyle = F)), 1 === v.length) N && e.strokeText(v[0], M, I), F && e.fillText(v[0], M, I);else for (var k = 0; k < v.length; k++) {N && e.strokeText(v[k], M, I), F && e.fillText(v[k], M, I), I += m;}}function di(t, e, n, i, r, o) {o !== mg && (e.__attrCachedBy = vg.NONE);var a = t.__textCotentBlock;(!a || t.__dirtyText) && (a = t.__textCotentBlock = ri(n, i)), fi(t, e, a, i, r);}function fi(t, e, n, i, r) {var o = n.width,a = n.outerWidth,s = n.outerHeight,l = i.textPadding,u = _i(Ng, t, i, r),h = u.baseX,c = u.baseY,d = u.textAlign,f = u.textVerticalAlign;pi(e, i, r, h, c);var p = qn(h, a, d),g = Zn(c, s, f),v = p,m = g;l && (v += l[3], m += l[0]);var y = v + o;vi(i) && mi(t, e, i, p, g, a, s);for (var _ = 0; _ < n.lines.length; _++) {for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, C = 0, T = v, D = y, k = S - 1; S > C && (x = b[C], !x.textAlign || "left" === x.textAlign);) {gi(t, e, x, i, M, m, T, "left"), I -= x.width, T += x.width, C++;}for (; k >= 0 && (x = b[k], "right" === x.textAlign);) {gi(t, e, x, i, M, m, D, "right"), I -= x.width, D -= x.width, k--;}for (T += (o - (T - v) - (y - D) - I) / 2; k >= C;) {x = b[C], gi(t, e, x, i, M, m, T + x.width / 2, "center"), T += x.width, C++;}m += M;}}function pi(t, e, n, i, r) {if (n && e.textRotation) {var o = e.textOrigin;"center" === o ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : o && (i = o[0] + n.x, r = o[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);}}function gi(t, e, n, i, r, o, a, s) {var l = i.rich[n.styleName] || {};l.text = n.text;var u = n.textVerticalAlign,h = o + r / 2;
    "top" === u ? h = o + n.height / 2 : "bottom" === u && (h = o + r - n.height / 2), !n.isLineHolder && vi(l) && mi(t, e, l, "right" === s ? a - n.width : "center" === s ? a - n.width / 2 : a, h - n.height / 2, n.width, n.height);var c = n.textPadding;c && (a = Mi(a, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), xi(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), xi(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), xi(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), xi(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), xi(e, "textAlign", s), xi(e, "textBaseline", "middle"), xi(e, "font", n.font || Og);var d = wi(l.textStroke || i.textStroke, p),f = bi(l.textFill || i.textFill),p = k(l.textStrokeWidth, i.textStrokeWidth);d && (xi(e, "lineWidth", p), xi(e, "strokeStyle", d), e.strokeText(n.text, a, h)), f && (xi(e, "fillStyle", f), e.fillText(n.text, a, h));}function vi(t) {return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor);}function mi(t, e, n, i, r, o, a) {var s = n.textBackgroundColor,l = n.textBorderWidth,u = n.textBorderColor,h = b(s);if (xi(e, "shadowBlur", n.textBoxShadowBlur || 0), xi(e, "shadowColor", n.textBoxShadowColor || "transparent"), xi(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), xi(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {e.beginPath();var c = n.textBorderRadius;c ? si(e, { x: i, y: r, width: o, height: a, r: c }) : e.rect(i, r, o, a), e.closePath();}if (h) {if (xi(e, "fillStyle", s), null != n.fillOpacity) {var d = e.globalAlpha;e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d;} else e.fill();} else if (S(s)) {var f = s.image;f = Vn(f, null, t, yi, s), f && Wn(f) && e.drawImage(f, i, r, o, a);}if (l && u) if (xi(e, "lineWidth", l), xi(e, "strokeStyle", u), null != n.strokeOpacity) {var d = e.globalAlpha;e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d;} else e.stroke();}function yi(t, e) {e.image = t;}function _i(t, e, n, i) {var r = n.x || 0,o = n.y || 0,a = n.textAlign,s = n.textVerticalAlign;if (i) {var l = n.textPosition;if (l instanceof Array) r = i.x + Si(l[0], i.width), o = i.y + Si(l[1], i.height);else {var u = e && e.calculateTextPosition ? e.calculateTextPosition(Rg, n, i) : Kn(Rg, n, i);r = u.x, o = u.y, a = a || u.textAlign, s = s || u.textVerticalAlign;}var h = n.textOffset;h && (r += h[0], o += h[1]);}return t = t || {}, t.baseX = r, t.baseY = o, t.textAlign = a, t.textVerticalAlign = s, t;}function xi(t, e, n) {return t[e] = gg(t, e, n), t[e];}function wi(t, e) {return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;}function bi(t) {return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;}function Si(t, e) {return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;}function Mi(t, e, n) {return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];}function Ii(t, e) {return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);}function Ci(t) {t = t || {}, ag.call(this, t);for (var e in t) {t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);}this.style = new _g(t.style, this), this._rect = null, this.__clipPaths = null;}function Ti(t) {Ci.call(this, t);}function Di(t) {return parseInt(t, 10);}function ki(t) {return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1;}function Ai(t, e, n) {return Yg.copy(t.getBoundingRect()), t.transform && Yg.applyTransform(t.transform), Ug.width = e, Ug.height = n, !Yg.intersect(Ug);}function Pi(t, e) {if (t === e) return !1;if (!t || !e || t.length !== e.length) return !0;for (var n = 0; n < t.length; n++) {if (t[n] !== e[n]) return !0;}return !1;}function Li(t, e) {for (var n = 0; n < t.length; n++) {var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);}}function Oi(t, e) {var n = document.createElement("div");return n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;}function Ei(t) {return "mousewheel" === t && Kf.browser.firefox ? "DOMMouseScroll" : t;}function Bi(t) {var e = t.pointerType;return "pen" === e || "touch" === e;}function zi(t) {t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {t.touching = !1, t.touchTimer = null;}, 700);}function Ri(t) {t && (t.zrByTouch = !0);}function Ni(t, e) {return be(t.dom, new Hi(t, e), !0);}function Fi(t, e) {for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot);) {n = n.parentNode;}return i;}function Hi(t, e) {this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;}function Vi(t, e) {var n = e.domHandlers;Kf.pointerEventsSupported ? f($g.pointer, function (i) {Wi(e, i, function (e) {n[i].call(t, e);});}) : (Kf.touchEventsSupported && f($g.touch, function (i) {Wi(e, i, function (r) {n[i].call(t, r), zi(e);});}), f($g.mouse, function (i) {Wi(e, i, function (r) {r = we(r), e.touching || n[i].call(t, r);});}));}function Gi(t, e) {function n(n) {function i(i) {i = we(i), Fi(t, i.target) || (i = Ni(t, i), e.domHandlers[n].call(t, i));}Wi(e, n, i, { capture: !0 });}Kf.pointerEventsSupported ? f(Qg.pointer, n) : Kf.touchEventsSupported || f(Qg.mouse, n);}function Wi(t, e, n, i) {t.mounted[e] = n, t.listenerOpts[e] = i, Se(t.domTarget, Ei(e), n, i);}function Xi(t) {var e = t.mounted;for (var n in e) {e.hasOwnProperty(n) && Me(t.domTarget, Ei(n), e[n], t.listenerOpts[n]);}t.mounted = {};}function Yi(t, e) {if (t._mayPointerCapture = null, Kg && t._pointerCapturing ^ e) {t._pointerCapturing = e;var n = t._globalHandlerScope;e ? Gi(t, n) : Xi(n);}}function Ui(t, e) {this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = !1;}function ji(t, e) {yp.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new Ui(t, tv), Kg && (this._globalHandlerScope = new Ui(document, ev)), this._pointerCapturing = !1, this._mayPointerCapture = null, Vi(this, this._localHandlerScope);}function qi(t, e) {var n = new sv(qf(), t, e);return ov[n.id] = n, n;}function Zi(t) {if (t) t.dispose();else {for (var e in ov) {ov.hasOwnProperty(e) && ov[e].dispose();}ov = {};}return this;}function Ki(t) {return ov[t];}function $i(t, e) {rv[t] = e;}function Qi(t) {delete ov[t];}function Ji(t) {return t instanceof Array ? t : null == t ? [] : [t];}function tr(t, e, n) {if (t) {t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; r > i; i++) {var o = n[i];!t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o]);}}}function er(t) {return !hv(t) || cv(t) || t instanceof Date ? t : t.value;}function nr(t) {return hv(t) && !(t instanceof Array);}function ir(t, e) {e = (e || []).slice();var n = p(t || [], function (t) {return { exist: t };});return uv(e, function (t, i) {if (hv(t)) {for (var r = 0; r < n.length; r++) {if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);}for (var r = 0; r < n.length; r++) {var o = n[r].exist;if (!(n[r].option || null != o.id && null != t.id || null == t.name || ar(t) || ar(o) || o.name !== t.name + "")) return n[r].option = t, void (e[i] = null);}}}), uv(e, function (t) {if (hv(t)) {for (var e = 0; e < n.length; e++) {var i = n[e].exist;if (!n[e].option && !ar(i) && null == t.id) {n[e].option = t;break;}}e >= n.length && n.push({ option: t });}}), n;}function rr(t) {var e = N();uv(t, function (t) {var n = t.exist;n && e.set(n.id, t);}), uv(t, function (t) {var n = t.option;O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});}), uv(t, function (t, n) {var i = t.exist,r = t.option,o = t.keyInfo;if (hv(r)) {if (o.name = null != r.name ? r.name + "" : i ? i.name : dv + n, i) o.id = i.id;else if (null != r.id) o.id = r.id + "";else {var a = 0;do {o.id = "\x00" + o.name + "\x00" + a++;} while (e.get(o.id));}e.set(o.id, t);}});}function or(t) {var e = t.name;return !(!e || !e.indexOf(dv));}function ar(t) {return hv(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");}function sr(t, e) {return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function (e) {return t.indexOfRawIndex(e);}) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function (e) {return t.indexOfName(e);}) : t.indexOfName(e.name) : void 0;}function lr() {var t = "__\x00ec_inner_" + pv++ + "_" + Math.random().toFixed(5);return function (e) {return e[t] || (e[t] = {});};}function ur(t, e, n) {if (b(e)) {var i = {};i[e + "Index"] = 0, e = i;}var r = n && n.defaultMainType;!r || hr(e, r + "Index") || hr(e, r + "Id") || hr(e, r + "Name") || (e[r + "Index"] = 0);var o = {};return uv(e, function (i, r) {var i = e[r];if ("dataIndex" === r || "dataIndexInside" === r) return void (o[r] = i);var a = r.match(/^(\w+)(Index|Id|Name)$/) || [],s = a[1],l = (a[2] || "").toLowerCase();if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {var h = { mainType: s };("index" !== l || "all" !== i) && (h[l] = i);var c = t.queryComponents(h);o[s + "Models"] = c, o[s + "Model"] = c[0];}}), o;}function hr(t, e) {return t && t.hasOwnProperty(e);}function cr(t, e, n) {t.setAttribute ? t.setAttribute(e, n) : t[e] = n;}function dr(t, e) {return t.getAttribute ? t.getAttribute(e) : t[e];}function fr(t) {return "auto" === t ? Kf.domSupported ? "html" : "richText" : t || "html";}function pr(t) {var e = { main: "", sub: "" };return t && (t = t.split(gv), e.main = t[0] || "", e.sub = t[1] || ""), e;}function gr(t) {O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');}function vr(t, e) {t.$constructor = t, t.extend = function (t) {Uf && f(e, function (e) {t[e] || console.warn("Method `" + e + "` should be implemented" + (t.type ? " in " + t.type : "") + ".");});var n = this,i = function i() {t.$constructor ? t.$constructor.apply(this, arguments) : n.apply(this, arguments);};return a(i.prototype, t), i.extend = this.extend, i.superCall = yr, i.superApply = _r, h(i, this), i.superClass = n, i;};}function mr(t) {var e = ["__\x00is_clz", mv++, Math.random().toFixed(3)].join("_");t.prototype[e] = !0, Uf && O(!t.isInstance, 'The method "is" can not be defined.'), t.isInstance = function (t) {return !(!t || !t[e]);};}function yr(t, e) {var n = P(arguments, 2);return this.superClass.prototype[e].apply(t, n);}function _r(t, e, n) {return this.superClass.prototype[e].apply(t, n);}function xr(t, e) {function n(t) {var e = i[t.main];return e && e[vv] || (e = i[t.main] = {}, e[vv] = !0), e;}e = e || {};var i = {};if (t.registerClass = function (t, e) {if (e) if (gr(e), e = pr(e), e.sub) {if (e.sub !== vv) {var r = n(e);r[e.sub] = t;}} else Uf && i[e.main] && console.warn(e.main + " exists."), i[e.main] = t;return t;}, t.getClass = function (t, e, n) {var r = i[t];if (r && r[vv] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;}, t.getClassesByMainType = function (t) {t = pr(t);var e = [],n = i[t.main];return n && n[vv] ? f(n, function (t, n) {n !== vv && e.push(t);}) : e.push(n), e;}, t.hasClass = function (t) {return t = pr(t), !!i[t.main];}, t.getAllClassMainTypes = function () {var t = [];return f(i, function (e, n) {t.push(n);}), t;}, t.hasSubTypes = function (t) {t = pr(t);var e = i[t.main];return e && e[vv];}, t.parseClassType = pr, e.registerWhenExtend) {var r = t.extend;r && (t.extend = function (e) {var n = r.call(this, e);return t.registerClass(n, e.type);});}return t;}function wr(t) {return t > -Iv && Iv > t;}function br(t) {return t > Iv || -Iv > t;}function Sr(t, e, n, i, r) {var o = 1 - r;return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n);}function Mr(t, e, n, i, r) {var o = 1 - r;return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r);}function Ir(t, e, n, i, r, o) {var a = i + 3 * (e - n) - t,s = 3 * (n - 2 * e + t),l = 3 * (e - t),u = t - r,h = s * s - 3 * a * l,c = s * l - 9 * a * u,d = l * l - 3 * s * u,f = 0;if (wr(h) && wr(c)) {if (wr(s)) o[0] = 0;else {var p = -l / s;p >= 0 && 1 >= p && (o[f++] = p);}} else {var g = c * c - 4 * h * d;if (wr(g)) {var v = c / h,p = -s / a + v,m = -v / 2;p >= 0 && 1 >= p && (o[f++] = p), m >= 0 && 1 >= m && (o[f++] = m);} else if (g > 0) {var y = Mv(g),_ = h * s + 1.5 * a * (-c + y),x = h * s + 1.5 * a * (-c - y);_ = 0 > _ ? -Sv(-_, Dv) : Sv(_, Dv), x = 0 > x ? -Sv(-x, Dv) : Sv(x, Dv);var p = (-s - (_ + x)) / (3 * a);p >= 0 && 1 >= p && (o[f++] = p);} else {var w = (2 * h * s - 3 * a * c) / (2 * Mv(h * h * h)),b = Math.acos(w) / 3,S = Mv(h),M = Math.cos(b),p = (-s - 2 * S * M) / (3 * a),m = (-s + S * (M + Tv * Math.sin(b))) / (3 * a),I = (-s + S * (M - Tv * Math.sin(b))) / (3 * a);p >= 0 && 1 >= p && (o[f++] = p), m >= 0 && 1 >= m && (o[f++] = m), I >= 0 && 1 >= I && (o[f++] = I);}}return f;}function Cr(t, e, n, i, r) {var o = 6 * n - 12 * e + 6 * t,a = 9 * e + 3 * i - 3 * t - 9 * n,s = 3 * e - 3 * t,l = 0;if (wr(a)) {if (br(o)) {var u = -s / o;u >= 0 && 1 >= u && (r[l++] = u);}} else {var h = o * o - 4 * a * s;if (wr(h)) r[0] = -o / (2 * a);else if (h > 0) {var c = Mv(h),u = (-o + c) / (2 * a),d = (-o - c) / (2 * a);u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);}}return l;}function Tr(t, e, n, i, r, o) {var a = (e - t) * r + t,s = (n - e) * r + e,l = (i - n) * r + n,u = (s - a) * r + a,h = (l - s) * r + s,c = (h - u) * r + u;o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i;}function Dr(t, e, n, i, r, o, a, s, l, u, h) {var c,d,f,p,g,v = .005,m = 1 / 0;kv[0] = l, kv[1] = u;for (var y = 0; 1 > y; y += .05) {Av[0] = Sr(t, n, r, a, y), Av[1] = Sr(e, i, o, s, y), p = gp(kv, Av), m > p && (c = y, m = p);}m = 1 / 0;for (var _ = 0; 32 > _ && !(Cv > v); _++) {d = c - v, f = c + v, Av[0] = Sr(t, n, r, a, d), Av[1] = Sr(e, i, o, s, d), p = gp(Av, kv), d >= 0 && m > p ? (c = d, m = p) : (Pv[0] = Sr(t, n, r, a, f), Pv[1] = Sr(e, i, o, s, f), g = gp(Pv, kv), 1 >= f && m > g ? (c = f, m = g) : v *= .5);}return h && (h[0] = Sr(t, n, r, a, c), h[1] = Sr(e, i, o, s, c)), Mv(m);}function kr(t, e, n, i) {var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;}function Ar(t, e, n, i) {return 2 * ((1 - i) * (e - t) + i * (n - e));}function Pr(t, e, n, i, r) {var o = t - 2 * e + n,a = 2 * (e - t),s = t - i,l = 0;if (wr(o)) {if (br(a)) {var u = -s / a;u >= 0 && 1 >= u && (r[l++] = u);}} else {var h = a * a - 4 * o * s;if (wr(h)) {var u = -a / (2 * o);u >= 0 && 1 >= u && (r[l++] = u);} else if (h > 0) {var c = Mv(h),u = (-a + c) / (2 * o),d = (-a - c) / (2 * o);u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);}}return l;}function Lr(t, e, n) {var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;}function Or(t, e, n, i, r) {var o = (e - t) * i + t,a = (n - e) * i + e,s = (a - o) * i + o;r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n;}function Er(t, e, n, i, r, o, a, s, l) {var u,h = .005,c = 1 / 0;kv[0] = a, kv[1] = s;for (var d = 0; 1 > d; d += .05) {Av[0] = kr(t, n, r, d), Av[1] = kr(e, i, o, d);var f = gp(kv, Av);c > f && (u = d, c = f);}c = 1 / 0;for (var p = 0; 32 > p && !(Cv > h); p++) {var g = u - h,v = u + h;Av[0] = kr(t, n, r, g), Av[1] = kr(e, i, o, g);var f = gp(Av, kv);if (g >= 0 && c > f) u = g, c = f;else {Pv[0] = kr(t, n, r, v), Pv[1] = kr(e, i, o, v);var m = gp(Pv, kv);1 >= v && c > m ? (u = v, c = m) : h *= .5;}}return l && (l[0] = kr(t, n, r, u), l[1] = kr(e, i, o, u)), Mv(c);}function Br(t, e, n) {if (0 !== t.length) {var i,r = t[0],o = r[0],a = r[0],s = r[1],l = r[1];for (i = 1; i < t.length; i++) {r = t[i], o = Lv(o, r[0]), a = Ov(a, r[0]), s = Lv(s, r[1]), l = Ov(l, r[1]);}e[0] = o, e[1] = s, n[0] = a, n[1] = l;}}function zr(t, e, n, i, r, o) {r[0] = Lv(t, n), r[1] = Lv(e, i), o[0] = Ov(t, n), o[1] = Ov(e, i);}function Rr(t, e, n, i, r, o, a, s, l, u) {var h,c = Cr,d = Sr,f = c(t, n, r, a, Hv);for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {var p = d(t, n, r, a, Hv[h]);l[0] = Lv(p, l[0]), u[0] = Ov(p, u[0]);}for (f = c(e, i, o, s, Vv), h = 0; f > h; h++) {var g = d(e, i, o, s, Vv[h]);l[1] = Lv(g, l[1]), u[1] = Ov(g, u[1]);}l[0] = Lv(t, l[0]), u[0] = Ov(t, u[0]), l[0] = Lv(a, l[0]), u[0] = Ov(a, u[0]), l[1] = Lv(e, l[1]), u[1] = Ov(e, u[1]), l[1] = Lv(s, l[1]), u[1] = Ov(s, u[1]);}function Nr(t, e, n, i, r, o, a, s) {var l = Lr,u = kr,h = Ov(Lv(l(t, n, r), 1), 0),c = Ov(Lv(l(e, i, o), 1), 0),d = u(t, n, r, h),f = u(e, i, o, c);a[0] = Lv(t, r, d), a[1] = Lv(e, o, f), s[0] = Ov(t, r, d), s[1] = Ov(e, o, f);}function Fr(t, e, n, i, r, o, a, s, l) {var u = ae,h = se,c = Math.abs(r - o);if (1e-4 > c % zv && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);if (Rv[0] = Bv(r) * n + t, Rv[1] = Ev(r) * i + e, Nv[0] = Bv(o) * n + t, Nv[1] = Ev(o) * i + e, u(s, Rv, Nv), h(l, Rv, Nv), r %= zv, 0 > r && (r += zv), o %= zv, 0 > o && (o += zv), r > o && !a ? o += zv : o > r && a && (r += zv), a) {var d = o;o = r, r = d;}for (var f = 0; o > f; f += Math.PI / 2) {f > r && (Fv[0] = Bv(f) * n + t, Fv[1] = Ev(f) * i + e, u(s, Fv, s), h(l, Fv, l));}}function Hr(t, e, n, i, r, o, a) {if (0 === r) return !1;var s = r,l = 0,u = t;if (a > e + s && a > i + s || e - s > a && i - s > a || o > t + s && o > n + s || t - s > o && n - s > o) return !1;if (t === n) return Math.abs(o - t) <= s / 2;l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);var h = l * o - a + u,c = h * h / (l * l + 1);return s / 2 * s / 2 >= c;}function Vr(t, e, n, i, r, o, a, s, l, u, h) {if (0 === l) return !1;var c = l;if (h > e + c && h > i + c && h > o + c && h > s + c || e - c > h && i - c > h && o - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > a + c || t - c > u && n - c > u && r - c > u && a - c > u) return !1;var d = Dr(t, e, n, i, r, o, a, s, u, h, null);return c / 2 >= d;}function Gr(t, e, n, i, r, o, a, s, l) {if (0 === a) return !1;var u = a;if (l > e + u && l > i + u && l > o + u || e - u > l && i - u > l && o - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;var h = Er(t, e, n, i, r, o, s, l, null);return u / 2 >= h;}function Wr(t) {return t %= em, 0 > t && (t += em), t;}function Xr(t, e, n, i, r, o, a, s, l) {if (0 === a) return !1;var u = a;s -= t, l -= e;var h = Math.sqrt(s * s + l * l);if (h - u > n || n > h + u) return !1;if (Math.abs(i - r) % nm < 1e-4) return !0;if (o) {var c = i;i = Wr(r), r = Wr(c);} else i = Wr(i), r = Wr(r);i > r && (r += nm);var d = Math.atan2(l, s);return 0 > d && (d += nm), d >= i && r >= d || d + nm >= i && r >= d + nm;}function Yr(t, e, n, i, r, o) {if (o > e && o > i || e > o && i > o) return 0;if (i === e) return 0;var a = e > i ? 1 : -1,s = (o - e) / (i - e);(1 === s || 0 === s) && (a = e > i ? .5 : -.5);var l = s * (n - t) + t;return l === r ? 1 / 0 : l > r ? a : 0;}function Ur(t, e) {return Math.abs(t - e) < om;}function jr() {var t = sm[0];sm[0] = sm[1], sm[1] = t;}function qr(t, e, n, i, r, o, a, s, l, u) {if (u > e && u > i && u > o && u > s || e > u && i > u && o > u && s > u) return 0;var h = Ir(e, i, o, s, u, am);if (0 === h) return 0;for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {var v = am[g],m = 0 === v || 1 === v ? .5 : 1,y = Sr(t, n, r, a, v);l > y || (0 > p && (p = Cr(e, i, o, s, sm), sm[1] < sm[0] && p > 1 && jr(), c = Sr(e, i, o, s, sm[0]), p > 1 && (d = Sr(e, i, o, s, sm[1]))), f += 2 === p ? v < sm[0] ? e > c ? m : -m : v < sm[1] ? c > d ? m : -m : d > s ? m : -m : v < sm[0] ? e > c ? m : -m : c > s ? m : -m);}return f;}function Zr(t, e, n, i, r, o, a, s) {if (s > e && s > i && s > o || e > s && i > s && o > s) return 0;var l = Pr(e, i, o, s, am);if (0 === l) return 0;var u = Lr(e, i, o);if (u >= 0 && 1 >= u) {for (var h = 0, c = kr(e, i, o, u), d = 0; l > d; d++) {var f = 0 === am[d] || 1 === am[d] ? .5 : 1,p = kr(t, n, r, am[d]);a > p || (h += am[d] < u ? e > c ? f : -f : c > o ? f : -f);}return h;}var f = 0 === am[0] || 1 === am[0] ? .5 : 1,p = kr(t, n, r, am[0]);return a > p ? 0 : e > o ? f : -f;}function Kr(t, e, n, i, r, o, a, s) {if (s -= e, s > n || -n > s) return 0;var l = Math.sqrt(n * n - s * s);am[0] = -l, am[1] = l;var u = Math.abs(i - r);if (1e-4 > u) return 0;if (1e-4 > u % rm) {i = 0, r = rm;var h = o ? 1 : -1;return a >= am[0] + t && a <= am[1] + t ? h : 0;}if (o) {var l = i;i = Wr(r), r = Wr(l);} else i = Wr(i), r = Wr(r);i > r && (r += rm);for (var c = 0, d = 0; 2 > d; d++) {var f = am[d];if (f + t > a) {var p = Math.atan2(s, f),h = o ? 1 : -1;0 > p && (p = rm + p), (p >= i && r >= p || p + rm >= i && r >= p + rm) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h);}}return c;}function $r(t, e, n, i, r) {for (var o = 0, a = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {var c = t[h++];switch (c === im.M && h > 1 && (n || (o += Yr(a, s, l, u, i, r))), 1 === h && (a = t[h], s = t[h + 1], l = a, u = s), c) {case im.M:l = t[h++], u = t[h++], a = l, s = u;break;case im.L:if (n) {if (Hr(a, s, t[h], t[h + 1], e, i, r)) return !0;} else o += Yr(a, s, t[h], t[h + 1], i, r) || 0;a = t[h++], s = t[h++];break;case im.C:if (n) {if (Vr(a, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0;} else o += qr(a, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;a = t[h++], s = t[h++];break;case im.Q:if (n) {if (Gr(a, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0;} else o += Zr(a, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;a = t[h++], s = t[h++];break;case im.A:var d = t[h++],f = t[h++],p = t[h++],g = t[h++],v = t[h++],m = t[h++];h += 1;var y = 1 - t[h++],_ = Math.cos(v) * p + d,x = Math.sin(v) * g + f;h > 1 ? o += Yr(a, s, _, x, i, r) : (l = _, u = x);var w = (i - d) * g / p + d;if (n) {if (Xr(d, f, g, v, v + m, y, e, w, r)) return !0;} else o += Kr(d, f, g, v, v + m, y, w, r);a = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;break;case im.R:l = a = t[h++], u = s = t[h++];var b = t[h++],S = t[h++],_ = l + b,x = u + S;if (n) {if (Hr(l, u, _, u, e, i, r) || Hr(_, u, _, x, e, i, r) || Hr(_, x, l, x, e, i, r) || Hr(l, x, l, u, e, i, r)) return !0;} else o += Yr(_, u, _, x, i, r), o += Yr(l, x, l, u, i, r);break;case im.Z:if (n) {if (Hr(a, s, l, u, e, i, r)) return !0;} else o += Yr(a, s, l, u, i, r);a = l, s = u;}}return n || Ur(s, u) || (o += Yr(a, s, l, u, i, r) || 0), 0 !== o;}function Qr(t, e, n) {return $r(t, 0, !1, e, n);}function Jr(t, e, n, i) {return $r(t, e, !0, n, i);}function to(t) {Ci.call(this, t), this.path = null;}function eo(t, e, n, i, r, o, a, s, l, u, h) {var c = l * (_m / 180),d = ym(c) * (t - n) / 2 + mm(c) * (e - i) / 2,f = -1 * mm(c) * (t - n) / 2 + ym(c) * (e - i) / 2,p = d * d / (a * a) + f * f / (s * s);p > 1 && (a *= vm(p), s *= vm(p));var g = (r === o ? -1 : 1) * vm((a * a * s * s - a * a * f * f - s * s * d * d) / (a * a * f * f + s * s * d * d)) || 0,v = g * a * f / s,m = g * -s * d / a,y = (t + n) / 2 + ym(c) * v - mm(c) * m,_ = (e + i) / 2 + mm(c) * v + ym(c) * m,x = bm([1, 0], [(d - v) / a, (f - m) / s]),w = [(d - v) / a, (f - m) / s],b = [(-1 * d - v) / a, (-1 * f - m) / s],S = bm(w, b);wm(w, b) <= -1 && (S = _m), wm(w, b) >= 1 && (S = 0), 0 === o && S > 0 && (S -= 2 * _m), 1 === o && 0 > S && (S += 2 * _m), h.addData(u, y, _, a, s, x, S, c, o);}function no(t) {if (!t) return new tm();for (var e, n = 0, i = 0, r = n, o = i, a = new tm(), s = tm.CMD, l = t.match(Sm), u = 0; u < l.length; u++) {for (var h, c = l[u], d = c.charAt(0), f = c.match(Mm) || [], p = f.length, g = 0; p > g; g++) {f[g] = parseFloat(f[g]);}for (var v = 0; p > v;) {var m,y,_,x,w,b,S,M = n,I = i;switch (d) {case "l":n += f[v++], i += f[v++], h = s.L, a.addData(h, n, i);break;case "L":n = f[v++], i = f[v++], h = s.L, a.addData(h, n, i);break;case "m":n += f[v++], i += f[v++], h = s.M, a.addData(h, n, i), r = n, o = i, d = "l";break;case "M":n = f[v++], i = f[v++], h = s.M, a.addData(h, n, i), r = n, o = i, d = "L";break;case "h":n += f[v++], h = s.L, a.addData(h, n, i);break;case "H":n = f[v++], h = s.L, a.addData(h, n, i);break;case "v":i += f[v++], h = s.L, a.addData(h, n, i);break;case "V":i = f[v++], h = s.L, a.addData(h, n, i);break;case "C":h = s.C, a.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];break;case "c":h = s.C, a.addData(h, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];break;case "S":m = n, y = i;var C = a.len(),T = a.data;e === s.C && (m += n - T[C - 4], y += i - T[C - 3]), h = s.C, M = f[v++], I = f[v++], n = f[v++], i = f[v++], a.addData(h, m, y, M, I, n, i);break;case "s":m = n, y = i;var C = a.len(),T = a.data;e === s.C && (m += n - T[C - 4], y += i - T[C - 3]), h = s.C, M = n + f[v++], I = i + f[v++], n += f[v++], i += f[v++], a.addData(h, m, y, M, I, n, i);break;case "Q":M = f[v++], I = f[v++], n = f[v++], i = f[v++], h = s.Q, a.addData(h, M, I, n, i);break;case "q":M = f[v++] + n, I = f[v++] + i, n += f[v++], i += f[v++], h = s.Q, a.addData(h, M, I, n, i);break;case "T":m = n, y = i;var C = a.len(),T = a.data;e === s.Q && (m += n - T[C - 4], y += i - T[C - 3]), n = f[v++], i = f[v++], h = s.Q, a.addData(h, m, y, n, i);break;case "t":m = n, y = i;var C = a.len(),T = a.data;e === s.Q && (m += n - T[C - 4], y += i - T[C - 3]), n += f[v++], i += f[v++], h = s.Q, a.addData(h, m, y, n, i);break;case "A":_ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n = f[v++], i = f[v++], h = s.A, eo(M, I, n, i, b, S, _, x, w, h, a);break;case "a":_ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n += f[v++], i += f[v++], h = s.A, eo(M, I, n, i, b, S, _, x, w, h, a);}}("z" === d || "Z" === d) && (h = s.Z, a.addData(h), n = r, i = o), e = h;}return a.toStatic(), a;}function io(t, e) {var n = no(t);return e = e || {}, e.buildPath = function (t) {if (t.setData) {t.setData(n.data);var e = t.getContext();e && t.rebuildPath(e);} else {var e = t;n.rebuildPath(e);}}, e.applyTransform = function (t) {gm(n, t), this.dirty(!0);}, e;}function ro(t, e) {return new to(io(t, e));}function oo(t, e) {return to.extend(io(t, e));}function ao(t, e) {for (var n = [], i = t.length, r = 0; i > r; r++) {var o = t[r];o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), n.push(o.path);}var a = new to(e);return a.createPathProxy(), a.buildPath = function (t) {t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);}, a;}function so(t, e, n, i, r, o, a) {var s = .5 * (n - t),l = .5 * (i - e);return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e;}function lo(t, e, n) {var i = e.points,r = e.smooth;if (i && i.length >= 2) {if (r && "spline" !== r) {var o = Lm(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var a = i.length, s = 0; (n ? a : a - 1) > s; s++) {var l = o[2 * s],u = o[2 * s + 1],h = i[(s + 1) % a];t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);}} else {"spline" === r && (i = Pm(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; c > s; s++) {t.lineTo(i[s][0], i[s][1]);}}n && t.closePath();}}function uo(t, e, n) {if (e) {var i = e.x1,r = e.x2,o = e.y1,a = e.y2;t.x1 = i, t.x2 = r, t.y1 = o, t.y2 = a;var s = n && n.lineWidth;s && (Bm(2 * i) === Bm(2 * r) && (t.x1 = t.x2 = co(i, s, !0)), Bm(2 * o) === Bm(2 * a) && (t.y1 = t.y2 = co(o, s, !0)));}}function ho(t, e, n) {if (e) {var i = e.x,r = e.y,o = e.width,a = e.height;t.x = i, t.y = r, t.width = o, t.height = a;var s = n && n.lineWidth;s && (t.x = co(i, s, !0), t.y = co(r, s, !0), t.width = Math.max(co(i + o, s, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(co(r + a, s, !1) - t.y, 0 === a ? 0 : 1));}}function co(t, e, n) {if (!e) return t;var i = Bm(2 * t);return (i + Bm(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;}function fo(t, e, n) {var i = t.cpx2,r = t.cpy2;return null === i || null === r ? [(n ? Mr : Sr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Mr : Sr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Ar : kr)(t.x1, t.cpx1, t.x2, e), (n ? Ar : kr)(t.y1, t.cpy1, t.y2, e)];}function po(t) {Ci.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;}function go(t) {return to.extend(t);}function vo(t, e) {return oo(t, e);}function mo(t, e) {iy[t] = e;}function yo(t) {return iy.hasOwnProperty(t) ? iy[t] : void 0;}function _o(t, e, n, i) {var r = ro(t, e);return n && ("center" === i && (n = wo(n, r.getBoundingRect())), bo(r, n)), r;}function xo(t, e, n) {var i = new Ti({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function onload(t) {if ("center" === n) {var r = { width: t.width, height: t.height };i.setStyle(wo(e, r));}} });return i;}function wo(t, e) {var n,i = e.width / e.height,r = t.height * i;r <= t.width ? n = t.height : (r = t.width, n = r / i);var o = t.x + t.width / 2,a = t.y + t.height / 2;return { x: o - r / 2, y: a - n / 2, width: r, height: n };}function bo(t, e) {if (t.applyTransform) {var n = t.getBoundingRect(),i = n.calculateTransform(e);t.applyTransform(i);}}function So(t) {return uo(t.shape, t.shape, t.style), t;}function Mo(t) {return ho(t.shape, t.shape, t.style), t;}function Io(t) {return null != t && "none" !== t;}function Co(t) {if ("string" != typeof t) return t;var e = ay.get(t);return e || (e = nn(t, -.1), 1e4 > sy && (ay.set(t, e), sy++)), e;}function To(t) {if (t.__hoverStlDirty) {t.__hoverStlDirty = !1;var e = t.__hoverStl;if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);var n = t.__cachedNormalStl = {};t.__cachedNormalZ2 = t.z2;var i = t.style;for (var r in e) {null != e[r] && (n[r] = i[r]);}n.fill = i.fill, n.stroke = i.stroke;}}function Do(t) {var e = t.__hoverStl;if (e && !t.__highlighted) {var n = t.__zr,i = t.useHoverLayer && n && "canvas" === n.painter.type;if (t.__highlighted = i ? "layer" : "plain", !(t.isGroup || !n && t.useHoverLayer)) {var r = t,o = t.style;i && (r = n.addHover(t), o = r.style), $o(o), i || To(r), o.extendFrom(e), ko(o, e, "fill"), ko(o, e, "stroke"), Ko(o), i || (t.dirty(!1), t.z2 += $m);}}}function ko(t, e, n) {!Io(e[n]) && Io(t[n]) && (t[n] = Co(t[n]));}function Ao(t) {var e = t.__highlighted;if (e && (t.__highlighted = !1, !t.isGroup)) if ("layer" === e) t.__zr && t.__zr.removeHover(t);else {var n = t.style,i = t.__cachedNormalStl;i && ($o(n), t.setStyle(i), Ko(n));var r = t.__cachedNormalZ2;null != r && t.z2 - r === $m && (t.z2 = r);}}function Po(t, e, n) {var i,r = ty,o = ty;t.__highlighted && (r = Jm, i = !0), e(t, n), t.__highlighted && (o = Jm, i = !0), t.isGroup && t.traverse(function (t) {!t.isGroup && e(t, n);}), i && t.__highDownOnUpdate && t.__highDownOnUpdate(r, o);}function Lo(t, e) {e = t.__hoverStl = e !== !1 && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, Ao(t), Do(t));}function Oo(t) {!Ro(this, t) && !this.__highByOuter && Po(this, Do);}function Eo(t) {!Ro(this, t) && !this.__highByOuter && Po(this, Ao);}function Bo(t) {this.__highByOuter |= 1 << (t || 0), Po(this, Do);}function zo(t) {!(this.__highByOuter &= ~(1 << (t || 0))) && Po(this, Ao);}function Ro(t, e) {return t.__highDownSilentOnTouch && e.zrByTouch;}function No(t, e) {Fo(t, !0), Po(t, Lo, e);}function Fo(t, e) {var n = e === !1;if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !n || t.__highDownDispatcher) {var i = n ? "off" : "on";t[i]("mouseover", Oo)[i]("mouseout", Eo), t[i]("emphasis", Bo)[i]("normal", zo), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !n;}}function Ho(t) {return !(!t || !t.__highDownDispatcher);}function Vo(t) {var e = ny[t];return null == e && 32 >= ey && (e = ny[t] = ey++), e;}function Go(t, e, n, i, r, o, a) {r = r || Km;var s,l = r.labelFetcher,u = r.labelDataIndex,h = r.labelDimIndex,c = r.labelProp,d = n.getShallow("show"),f = i.getShallow("show");(d || f) && (l && (s = l.getFormattedLabel(u, "normal", null, h, c)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));var p = d ? s : null,g = f ? k(l ? l.getFormattedLabel(u, "emphasis", null, h, c) : null, s) : null;(null != p || null != g) && (Xo(t, n, o, r), Xo(e, i, a, r, !0)), t.text = p, e.text = g;}function Wo(t, e, n) {var i = t.style;e && ($o(i), t.setStyle(e), Ko(i)), i = t.__hoverStl, n && i && ($o(i), a(i, n), Ko(i));}function Xo(t, e, n, i, r) {return Uo(t, e, i, r), n && a(t, n), t;}function Yo(t, e, n) {var i,r = { isRectText: !0 };n === !1 ? i = !0 : r.autoColor = n, Uo(t, e, r, i);}function Uo(t, e, n, i) {if (n = n || Km, n.isRectText) {var r;n.getTextPosition ? r = n.getTextPosition(e, i) : (r = e.getShallow("position") || (i ? null : "inside"), "outside" === r && (r = "top")), t.textPosition = r, t.textOffset = e.getShallow("offset");var o = e.getShallow("rotate");null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = k(e.getShallow("distance"), i ? null : 5);}var a,s = e.ecModel,l = s && s.option.textStyle,u = jo(e);if (u) {a = {};for (var h in u) {if (u.hasOwnProperty(h)) {var c = e.getModel(["rich", h]);qo(a[h] = {}, c, l, n, i);}}}return t.rich = a, qo(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;}function jo(t) {for (var e; t && t !== t.ecModel;) {var n = (t.option || Km).rich;if (n) {e = e || {};for (var i in n) {n.hasOwnProperty(i) && (e[i] = 1);}}t = t.parentModel;}return e;}function qo(t, e, n, i, r, o) {n = !r && n || Km, t.textFill = Zo(e.getShallow("color"), i) || n.color, t.textStroke = Zo(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = k(e.getShallow("textBorderWidth"), n.textBorderWidth), r || (o && (t.insideRollbackOpt = i, Ko(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && i.disableBox || (t.textBackgroundColor = Zo(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Zo(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;}function Zo(t, e) {return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;}function Ko(t) {var e,n = t.textPosition,i = t.insideRollbackOpt;if (i && null == t.textFill) {var r = i.autoColor,o = i.isRectText,a = i.useInsideStyle,s = a !== !1 && (a === !0 || o && n && "string" == typeof n && n.indexOf("inside") >= 0),l = !s && null != r;(s || l) && (e = { textFill: t.textFill, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = r);}t.insideRollback = e;}function $o(t) {var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);}function Qo(t, e) {var n = e && e.getModel("textStyle");return E([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));}function Jo(t, e, n, i, r, o) {"function" == typeof r && (o = r, r = null);var a = i && i.isAnimationEnabled();if (a) {var s = t ? "Update" : "",l = i.getShallow("animationDuration" + s),u = i.getShallow("animationEasing" + s),h = i.getShallow("animationDelay" + s);"function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, o, !!o) : (e.stopAnimation(), e.attr(n), o && o());} else e.stopAnimation(), e.attr(n), o && o();}function ta(t, e, n, i, r) {Jo(!0, t, e, n, i, r);}function ea(t, e, n, i, r) {Jo(!1, t, e, n, i, r);}function na(t, e) {for (var n = Oe([]); t && t !== e;) {Be(n, t.getLocalTransform(), n), t = t.parent;}return n;}function ia(t, e, n) {return e && !d(e) && (e = Bp.getLocalTransform(e)), n && (e = Fe([], e)), oe([], t, e);}function ra(t, e, n) {var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];return o = ia(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top";}function oa(t, e, n) {function i(t) {var e = {};return t.traverse(function (t) {!t.isGroup && t.anid && (e[t.anid] = t);}), e;}function r(t) {var e = { position: W(t.position), rotation: t.rotation };return t.shape && (e.shape = a({}, t.shape)), e;}if (t && e) {var o = i(t);e.traverse(function (t) {if (!t.isGroup && t.anid) {var e = o[t.anid];if (e) {var i = r(t);t.attr(r(e)), ta(t, i, n, t.dataIndex);}}});}}function aa(t, e) {return p(t, function (t) {var n = t[0];n = qm(n, e.x), n = Zm(n, e.x + e.width);var i = t[1];return i = qm(i, e.y), i = Zm(i, e.y + e.height), [n, i];});}function sa(t, e) {var n = qm(t.x, e.x),i = Zm(t.x + t.width, e.x + e.width),r = qm(t.y, e.y),o = Zm(t.y + t.height, e.y + e.height);return i >= n && o >= r ? { x: n, y: r, width: i - n, height: o - r } : void 0;}function la(t, e, n) {e = a({ rectHover: !0 }, e);var i = e.style = { strokeNoScale: !0 };return n = n || { x: -1, y: -1, width: 2, height: 2 }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new Ti(e)) : _o(t.replace("path://", ""), e, n, "center") : void 0;}function ua(t, e, n, i, r) {for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {var s = r[o];if (ha(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;a = s;}}function ha(t, e, n, i, r, o, a, s) {var l = n - t,u = i - e,h = a - r,c = s - o,d = ca(h, c, l, u);if (da(d)) return !1;var f = t - r,p = e - o,g = ca(f, p, l, u) / d;if (0 > g || g > 1) return !1;var v = ca(f, p, h, c) / d;return 0 > v || v > 1 ? !1 : !0;}function ca(t, e, n, i) {return t * i - n * e;}function da(t) {return 1e-6 >= t && t >= -1e-6;}function fa(t, e, n) {this.parentModel = e, this.ecModel = n, this.option = t;}function pa(t, e, n) {for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++) {;}return null == t && n && (t = n.get(e)), t;
  }function ga(t, e) {var n = py(t).getParent;return n ? n.call(t, e) : t.parentModel;}function va(t) {return [t || "", gy++, Math.random().toFixed(5)].join("_");}function ma(t) {var e = {};return t.registerSubTypeDefaulter = function (t, n) {t = pr(t), e[t.main] = n;}, t.determineSubType = function (n, i) {var r = i.type;if (!r) {var o = pr(n).main;t.hasSubTypes(n) && e[o] && (r = e[o](i));}return r;}, t;}function ya(t, e) {function n(t) {var n = {},o = [];return f(t, function (a) {var s = i(n, a),l = s.originalDeps = e(a),h = r(l, t);s.entryCount = h.length, 0 === s.entryCount && o.push(a), f(h, function (t) {u(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);u(e.successor, t) < 0 && e.successor.push(a);});}), { graph: n, noEntryList: o };}function i(t, e) {return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];}function r(t, e) {var n = [];return f(t, function (t) {u(e, t) >= 0 && n.push(t);}), n;}t.topologicalTravel = function (t, e, i, r) {function o(t) {l[t].entryCount--, 0 === l[t].entryCount && u.push(t);}function a(t) {h[t] = !0, o(t);}if (t.length) {var s = n(e),l = s.graph,u = s.noEntryList,h = {};for (f(t, function (t) {h[t] = !0;}); u.length;) {var c = u.pop(),d = l[c],p = !!h[c];p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? a : o);}f(h, function () {throw new Error("Circle dependency may exists");});}};}function _a(t) {return t.replace(/^\s+|\s+$/g, "");}function xa(t, e, n, i) {var r = e[1] - e[0],o = n[1] - n[0];if (0 === r) return 0 === o ? n[0] : (n[0] + n[1]) / 2;if (i) {if (r > 0) {if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];} else {if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];}} else {if (t === e[0]) return n[0];if (t === e[1]) return n[1];}return (t - e[0]) / r * o + n[0];}function wa(t, e) {switch (t) {case "center":case "middle":t = "50%";break;case "left":case "top":t = "0%";break;case "right":case "bottom":t = "100%";}return "string" == typeof t ? _a(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t;}function ba(t, e, n) {return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;}function Sa(t) {return t.sort(function (t, e) {return t - e;}), t;}function Ma(t) {if (t = +t, isNaN(t)) return 0;for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {e *= 10, n++;}return n;}function Ia(t) {var e = t.toString(),n = e.indexOf("e");if (n > 0) {var i = +e.slice(n + 1);return 0 > i ? -i : 0;}var r = e.indexOf(".");return 0 > r ? 0 : e.length - 1 - r;}function Ca(t, e) {var n = Math.log,i = Math.LN10,r = Math.floor(n(t[1] - t[0]) / i),o = Math.round(n(Math.abs(e[1] - e[0])) / i),a = Math.min(Math.max(-r + o, 0), 20);return isFinite(a) ? a : 20;}function Ta(t, e, n) {if (!t[e]) return 0;var i = g(t, function (t, e) {return t + (isNaN(e) ? 0 : e);}, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), o = p(t, function (t) {return (isNaN(t) ? 0 : t) / i * r * 100;}), a = 100 * r, s = p(o, function (t) {return Math.floor(t);}), l = g(s, function (t, e) {return t + e;}, 0), u = p(o, function (t, e) {return t - s[e];}); a > l;) {for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) {u[d] > h && (h = u[d], c = d);}++s[c], u[c] = 0, ++l;}return s[e] / r;}function Da(t) {var e = 2 * Math.PI;return (t % e + e) % e;}function ka(t) {return t > -vy && vy > t;}function Aa(t) {if (t instanceof Date) return t;if ("string" == typeof t) {var e = yy.exec(t);if (!e) return new Date(0 / 0);if (e[8]) {var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));}return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);}return new Date(null == t ? 0 / 0 : Math.round(t));}function Pa(t) {return Math.pow(10, La(t));}function La(t) {if (0 === t) return 0;var e = Math.floor(Math.log(t) / Math.LN10);return t / Math.pow(10, e) >= 10 && e++, e;}function Oa(t, e) {var n,i = La(t),r = Math.pow(10, i),o = t / r;return n = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;}function Ea(t, e) {var n = (t.length - 1) * e + 1,i = Math.floor(n),r = +t[i - 1],o = n - i;return o ? r + o * (t[i] - r) : r;}function Ba(t) {function e(t, n, i) {return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1));}t.sort(function (t, n) {return e(t, n, 0) ? -1 : 1;});for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {for (var o = t[r].interval, a = t[r].close, s = 0; 2 > s; s++) {o[s] <= n && (o[s] = n, a[s] = s ? 1 : 1 - i), n = o[s], i = a[s];}o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(r, 1) : r++;}return t;}function za(t) {return t - parseFloat(t) >= 0;}function Ra(t) {return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));}function Na(t, e) {return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {return e.toUpperCase();}), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;}function Fa(t) {return null == t ? "" : (t + "").replace(wy, function (t, e) {return by[e];});}function Ha(t, e, n) {x(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {var a = Sy[o];t = t.replace(My(a), My(a, 0));}for (var s = 0; i > s; s++) {for (var l = 0; l < r.length; l++) {var u = e[s][r[l]];t = t.replace(My(Sy[l], s), n ? Fa(u) : u);}}return t;}function Va(t, e, n) {return f(e, function (e, i) {t = t.replace("{" + i + "}", n ? Fa(e) : e);}), t;}function Ga(t, e) {t = b(t) ? { color: t, extraCssText: e } : t || {};var n = t.color,i = t.type,e = t.extraCssText,r = t.renderMode || "html",o = t.markerId || "X";return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Fa(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Fa(n) + ";" + (e || "") + '"></span>' : { renderMode: r, content: "{marker" + o + "|}  ", style: { color: n } } : "";}function Wa(t, e) {return t += "", "0000".substr(0, e - t.length) + t;}function Xa(t, e, n) {("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");var i = Aa(e),r = n ? "UTC" : "",o = i["get" + r + "FullYear"](),a = i["get" + r + "Month"]() + 1,s = i["get" + r + "Date"](),l = i["get" + r + "Hours"](),u = i["get" + r + "Minutes"](),h = i["get" + r + "Seconds"](),c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", Wa(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100).replace("dd", Wa(s, 2)).replace("d", s).replace("hh", Wa(l, 2)).replace("h", l).replace("mm", Wa(u, 2)).replace("m", u).replace("ss", Wa(h, 2)).replace("s", h).replace("SSS", Wa(c, 3));}function Ya(t) {return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;}function Ua(t) {return Yn(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate);}function ja(t, e, n, i, r, o, a, s) {return Yn(t, e, n, i, r, s, o, a);}function qa(t, e) {if ("_blank" === e || "blank" === e) {var n = window.open();n.opener = null, n.location = t;} else window.open(t, e);}function Za(t, e, n, i, r) {var o = 0,a = 0;null == i && (i = 1 / 0), null == r && (r = 1 / 0);var s = 0;e.eachChild(function (l, u) {var h,c,d = l.position,f = l.getBoundingRect(),p = e.childAt(u + 1),g = p && p.getBoundingRect();if ("horizontal" === t) {var v = f.width + (g ? -g.x + f.x : 0);h = o + v, h > i || l.newline ? (o = 0, h = v, a += s + n, s = f.height) : s = Math.max(s, f.height);} else {var m = f.height + (g ? -g.y + f.y : 0);c = a + m, c > r || l.newline ? (o += s + n, a = 0, c = m, s = f.width) : s = Math.max(s, f.width);}l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = h + n : a = c + n);});}function Ka(t, e, n) {n = xy(n || 0);var i = e.width,r = e.height,o = wa(t.left, i),a = wa(t.top, r),s = wa(t.right, i),l = wa(t.bottom, r),u = wa(t.width, i),h = wa(t.height, r),c = n[2] + n[0],d = n[1] + n[3],f = t.aspect;switch (isNaN(u) && (u = i - s - d - o), isNaN(h) && (h = r - l - c - a), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - d), isNaN(a) && (a = r - l - h - c), t.left || t.right) {case "center":o = i / 2 - u / 2 - n[3];break;case "right":o = i - u - d;}switch (t.top || t.bottom) {case "middle":case "center":a = r / 2 - h / 2 - n[0];break;case "bottom":a = r - h - c;}o = o || 0, a = a || 0, isNaN(u) && (u = i - d - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));var p = new Cn(o + n[3], a + n[0], u, h);return p.margin = n, p;}function $a(t, e, n) {function i(n, i) {var a = {},l = 0,u = {},h = 0,c = 2;if (Ty(n, function (e) {u[e] = t[e];}), Ty(n, function (t) {r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++;}), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;if (h !== c && l) {if (l >= c) return a;for (var d = 0; d < n.length; d++) {var f = n[d];if (!r(a, f) && r(t, f)) {a[f] = t[f];break;}}return a;}return u;}function r(t, e) {return t.hasOwnProperty(e);}function o(t, e) {return null != t[e] && "auto" !== t[e];}function a(t, e, n) {Ty(t, function (t) {e[t] = n[t];});}!S(n) && (n = {});var s = n.ignoreSize;!x(s) && (s = [s, s]);var l = i(ky[0], 0),u = i(ky[1], 1);a(ky[0], t, l), a(ky[1], t, u);}function Qa(t) {return Ja({}, t);}function Ja(t, e) {return e && t && Ty(Dy, function (n) {e.hasOwnProperty(n) && (t[n] = e[n]);}), t;}function ts(t) {var e = [];return f(Oy.getClassesByMainType(t), function (t) {e = e.concat(t.prototype.dependencies || []);}), e = p(e, function (t) {return pr(t).main;}), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e;}function es(t, e) {for (var n = t.length, i = 0; n > i; i++) {if (t[i].length > e) return t[i];}return t[n - 1];}function ns(t) {this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Vy ? {} : []), this.sourceFormat = t.sourceFormat || Gy, this.seriesLayoutBy = t.seriesLayoutBy || Xy, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;}function is(t) {var e = t.option.source,n = Gy;if (I(e)) n = Wy;else if (x(e)) {0 === e.length && (n = Fy);for (var i = 0, r = e.length; r > i; i++) {var o = e[i];if (null != o) {if (x(o)) {n = Fy;break;}if (S(o)) {n = Hy;break;}}}} else if (S(e)) {for (var a in e) {if (e.hasOwnProperty(a) && d(e[a])) {n = Vy;break;}}} else if (null != e) throw new Error("Invalid data");jy(t).sourceFormat = n;}function rs(t) {return jy(t).source;}function os(t) {jy(t).datasetMap = N();}function as(t) {var e = t.option,n = e.data,i = I(n) ? Wy : Ny,r = !1,o = e.seriesLayoutBy,a = e.sourceHeader,s = e.dimensions,l = ds(t);if (l) {var u = l.option;n = u.source, i = jy(l).sourceFormat, r = !0, o = o || u.seriesLayoutBy, null == a && (a = u.sourceHeader), s = s || u.dimensions;}var h = ss(n, i, o, a, s);jy(t).source = new ns({ data: n, fromDataset: r, seriesLayoutBy: o, sourceFormat: i, dimensionsDefine: h.dimensionsDefine, startIndex: h.startIndex, dimensionsDetectCount: h.dimensionsDetectCount, encodeDefine: e.encode });}function ss(t, e, n, i, r) {if (!t) return { dimensionsDefine: ls(r) };var o, a;if (e === Fy) "auto" === i || null == i ? us(function (t) {null != t && "-" !== t && (b(t) ? null == a && (a = 1) : a = 0);}, n, t, 10) : a = i ? 1 : 0, r || 1 !== a || (r = [], us(function (t, e) {r[e] = null != t ? t : "";}, n, t)), o = r ? r.length : n === Yy ? t.length : t[0] ? t[0].length : null;else if (e === Hy) r || (r = hs(t));else if (e === Vy) r || (r = [], f(t, function (t, e) {r.push(e);}));else if (e === Ny) {var s = er(t[0]);o = x(s) && s.length || 1;} else e === Wy && Uf && O(!!r, "dimensions must be given if data is TypedArray.");return { startIndex: a, dimensionsDefine: ls(r), dimensionsDetectCount: o };}function ls(t) {if (t) {var e = N();return p(t, function (t) {if (t = a({}, S(t) ? t : { name: t }), null == t.name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var n = e.get(t.name);return n ? t.name += "-" + n.count++ : e.set(t.name, { count: 1 }), t;});}}function us(t, e, n, i) {if (null == i && (i = 1 / 0), e === Yy) for (var r = 0; r < n.length && i > r; r++) {t(n[r] ? n[r][0] : null, r);} else for (var o = n[0] || [], r = 0; r < o.length && i > r; r++) {t(o[r], r);}}function hs(t) {for (var e, n = 0; n < t.length && !(e = t[n++]);) {;}if (e) {var i = [];return f(e, function (t, e) {i.push(e);}), i;}}function cs(t, e, n) {function i(t, e, n) {for (var i = 0; n > i; i++) {t.push(e + i);}}function r(t) {var e = t.dimsDef;return e ? e.length : 1;}var o = {},a = ds(e);if (!a || !t) return o;var s,l,u = [],h = [],c = e.ecModel,d = jy(c).datasetMap,p = a.uid + "_" + n.seriesLayoutBy;t = t.slice(), f(t, function (e, n) {!S(e) && (t[n] = { name: e }), "ordinal" === e.type && null == s && (s = n, l = r(t[n])), o[e.name] = [];});var g = d.get(p) || d.set(p, { categoryWayDim: l, valueWayDim: 0 });return f(t, function (t, e) {var n = t.name,a = r(t);if (null == s) {var l = g.valueWayDim;i(o[n], l, a), i(h, l, a), g.valueWayDim += a;} else if (s === e) i(o[n], 0, a), i(u, 0, a);else {var l = g.categoryWayDim;i(o[n], l, a), i(h, l, a), g.categoryWayDim += a;}}), u.length && (o.itemName = u), h.length && (o.seriesName = h), o;}function ds(t) {var e = t.option,n = e.data;return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);}function fs(t, e) {return ps(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);}function ps(t, e, n, i, r, o) {function a(t) {var e = b(t);return null != t && isFinite(t) && "" !== t ? e ? Uy.Might : Uy.Not : e && "-" !== t ? Uy.Must : void 0;}var s,l = 5;if (I(t)) return Uy.Not;var u, h;if (i) {var c = i[o];S(c) ? (u = c.name, h = c.type) : b(c) && (u = c);}if (null != h) return "ordinal" === h ? Uy.Must : Uy.Not;if (e === Fy) {if (n === Yy) {for (var d = t[o], f = 0; f < (d || []).length && l > f; f++) {if (null != (s = a(d[r + f]))) return s;}} else for (var f = 0; f < t.length && l > f; f++) {var p = t[r + f];if (p && null != (s = a(p[o]))) return s;}} else if (e === Hy) {if (!u) return Uy.Not;for (var f = 0; f < t.length && l > f; f++) {var g = t[f];if (g && null != (s = a(g[u]))) return s;}} else if (e === Vy) {if (!u) return Uy.Not;var d = t[u];if (!d || I(d)) return Uy.Not;for (var f = 0; f < d.length && l > f; f++) {if (null != (s = a(d[f]))) return s;}} else if (e === Ny) for (var f = 0; f < t.length && l > f; f++) {var g = t[f],v = er(g);if (!x(v)) return Uy.Not;if (null != (s = a(v[o]))) return s;}return Uy.Not;}function gs(t, e) {if (e) {var n = e.seiresIndex,i = e.seriesId,r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;}}function vs(t, e) {var n = t.color && !t.colorLayer;f(e, function (e, o) {"colorLayer" === o && n || Oy.hasClass(o) || ("object" == typeof e ? t[o] = t[o] ? r(t[o], e, !1) : i(e) : null == t[o] && (t[o] = e));});}function ms(t) {t = t, this.option = {}, this.option[qy] = 1, this._componentsMap = N({ series: [] }), this._seriesIndices, this._seriesIndicesMap, vs(t, this._theme.option), r(t, By, !1), this.mergeOption(t);}function ys(t, e) {x(e) || (e = e ? [e] : []);var n = {};return f(e, function (e) {n[e] = (t.get(e) || []).slice();}), n;}function _s(t, e, n) {var i = e.type ? e.type : n ? n.subType : Oy.determineSubType(t, e);return i;}function xs(t, e) {t._seriesIndicesMap = N(t._seriesIndices = p(e, function (t) {return t.componentIndex;}) || []);}function ws(t, e) {return e.hasOwnProperty("subType") ? v(t, function (t) {return t.subType === e.subType;}) : t;}function bs(t) {if (Uf && !t._seriesIndices) throw new Error("Option should contains series.");}function Ss(t) {f(Ky, function (e) {this[e] = y(t[e], t);}, this);}function Ms() {this._coordinateSystems = [];}function Is(t) {this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;}function Cs(t, e, n) {var i,r,o = [],a = [],s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), t.media) {r = r || {};var l = t.media;Qy(l, function (t) {t && t.option && (t.query ? a.push(t) : i || (i = t));});}return r || (r = t), r.timeline || (r.timeline = s), Qy([r].concat(o).concat(p(a, function (t) {return t.option;})), function (t) {Qy(e, function (e) {e(t, n);});}), { baseOption: r, timelineOptions: o, mediaDefault: i, mediaList: a };}function Ts(t, e, n) {var i = { width: e, height: n, aspectratio: e / n },r = !0;return f(t, function (t, e) {var n = e.match(n_);if (n && n[1] && n[2]) {var o = n[1],a = n[2].toLowerCase();Ds(i[a], t, o) || (r = !1);}}), r;}function Ds(t, e, n) {return "min" === n ? t >= e : "max" === n ? e >= t : t === e;}function ks(t, e) {return t.join(",") === e.join(",");}function As(t, e) {e = e || {}, Qy(e, function (e, n) {if (null != e) {var i = t[n];if (Oy.hasClass(n)) {e = Ji(e), i = Ji(i);var r = ir(i, e);t[n] = t_(r, function (t) {return t.option && t.exist ? e_(t.exist, t.option, !0) : t.exist || t.option;});} else t[n] = e_(i, e, !0);}});}function Ps(t) {var e = t && t.itemStyle;if (e) for (var n = 0, i = o_.length; i > n; n++) {var o = o_[n],a = e.normal,s = e.emphasis;a && a[o] && (t[o] = t[o] || {}, t[o].normal ? r(t[o].normal, a[o]) : t[o].normal = a[o], a[o] = null), s && s[o] && (t[o] = t[o] || {}, t[o].emphasis ? r(t[o].emphasis, s[o]) : t[o].emphasis = s[o], s[o] = null);}}function Ls(t, e, n) {if (t && t[e] && (t[e].normal || t[e].emphasis)) {var i = t[e].normal,r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);}}function Os(t) {Ls(t, "itemStyle"), Ls(t, "lineStyle"), Ls(t, "areaStyle"), Ls(t, "label"), Ls(t, "labelLine"), Ls(t, "upperLabel"), Ls(t, "edgeLabel");}function Es(t, e) {var n = r_(t) && t[e],i = r_(n) && n.textStyle;if (i) for (var r = 0, o = fv.length; o > r; r++) {var e = fv[r];i.hasOwnProperty(e) && (n[e] = i[e]);}}function Bs(t) {t && (Os(t), Es(t, "label"), t.emphasis && Es(t.emphasis, "label"));}function zs(t) {if (r_(t)) {Ps(t), Os(t), Es(t, "label"), Es(t, "upperLabel"), Es(t, "edgeLabel"), t.emphasis && (Es(t.emphasis, "label"), Es(t.emphasis, "upperLabel"), Es(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (Ps(e), Bs(e));var n = t.markLine;n && (Ps(n), Bs(n));var i = t.markArea;i && Bs(i);var r = t.data;if ("graph" === t.type) {r = r || t.nodes;var o = t.links || t.edges;if (o && !I(o)) for (var a = 0; a < o.length; a++) {Bs(o[a]);}f(t.categories, function (t) {Os(t);});}if (r && !I(r)) for (var a = 0; a < r.length; a++) {Bs(r[a]);}var e = t.markPoint;if (e && e.data) for (var s = e.data, a = 0; a < s.length; a++) {Bs(s[a]);}var n = t.markLine;if (n && n.data) for (var l = n.data, a = 0; a < l.length; a++) {x(l[a]) ? (Bs(l[a][0]), Bs(l[a][1])) : Bs(l[a]);}"gauge" === t.type ? (Es(t, "axisLabel"), Es(t, "title"), Es(t, "detail")) : "treemap" === t.type ? (Ls(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {Os(t);})) : "tree" === t.type && Os(t.leaves);}}function Rs(t) {return x(t) ? t : t ? [t] : [];}function Ns(t) {return (x(t) ? t[0] : t) || {};}function Fs(t, e) {e = e.split(",");for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++) {;}return n;}function Hs(t, e, n, i) {e = e.split(",");for (var r, o = t, a = 0; a < e.length - 1; a++) {r = e[a], null == o[r] && (o[r] = {}), o = o[r];}(i || null == o[e[a]]) && (o[e[a]] = n);}function Vs(t) {f(s_, function (e) {e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);});}function Gs(t) {f(t, function (e, n) {var i = [],r = [0 / 0, 0 / 0],o = [e.stackResultDimension, e.stackedOverDimension],a = e.data,s = e.isStackedByIndex,l = a.map(o, function (o, l, u) {var h = a.get(e.stackedDimension, u);if (isNaN(h)) return r;var c, d;s ? d = a.getRawIndex(u) : c = a.get(e.stackedByDimension, u);for (var f = 0 / 0, p = n - 1; p >= 0; p--) {var g = t[p];if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {var v = g.data.getByRawIndex(g.stackResultDimension, d);if (h >= 0 && v > 0 || 0 >= h && 0 > v) {h += v, f = v;break;}}}return i[0] = h, i[1] = f, i;});a.hostModel.setData(l), e.data = l;});}function Ws(t, e) {ns.isInstance(t) || (t = ns.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,i = t.sourceFormat;if (i === Wy) {if (Uf && null == e) throw new Error("Typed array data must specify dimension size");this._offset = 0, this._dimSize = e, this._data = n;}var r = d_[i === Fy ? i + "_" + t.seriesLayoutBy : i];Uf && O(r, "Invalide sourceFormat: " + i), a(this, r);}function Xs() {return this._data.length;}function Ys(t) {return this._data[t];}function Us(t) {for (var e = 0; e < t.length; e++) {this._data.push(t[e]);}}function js(t, e, n) {return null != n ? t[n] : t;}function qs(t, e, n, i) {return Zs(t[i], this._dimensionInfos[e]);}function Zs(t, e) {var n = e && e.type;if ("ordinal" === n) {var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;}return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Aa(t)), null == t || "" === t ? 0 / 0 : +t;}function Ks(t, e, n) {if (t) {var i = t.getRawDataItem(e);if (null != i) {var r,o,a = t.getProvider().getSource().sourceFormat,s = t.getDimensionInfo(n);return s && (r = s.name, o = s.index), f_[a](i, e, o, r);}}}function $s(t) {return new Qs(t);}function Qs(t) {t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;}function Js(t, e, n, i, r, o) {y_.reset(n, i, r, o), t._callingProgress = e, t._callingProgress({ start: n, end: i, count: i - n, next: y_.next }, t.context);}function tl(t, e) {t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;var r = t._downstream;return r && r.dirty(), i;}function el(t) {var e = t.name;or(t) || (t.name = nl(t) || e);}function nl(t) {var e = t.getRawData(),n = e.mapDimension("seriesName", !0),i = [];return f(n, function (t) {var n = e.getDimensionInfo(t);n.displayName && i.push(n.displayName);}), i.join(" ");}function il(t) {return t.model.getRawData().count();}function rl(t) {var e = t.model;return e.setData(e.getRawData().cloneShallow()), ol;}function ol(t, e) {e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);}function al(t, e) {f(t.CHANGABLE_METHODS, function (n) {t.wrapMethod(n, _(sl, e));});}function sl(t) {var e = ll(t);e && e.setOutputEnd(this.count());}function ll(t) {var e = (t.ecModel || {}).scheduler,n = e && e.getPipeline(t.uid);if (n) {var i = n.currentTask;if (i) {var r = i.agentStubMap;r && (i = r.get(t.uid));}return i;}}function ul() {this.group = new hg(), this.uid = va("viewChart"), this.renderTask = $s({ plan: dl, reset: fl }), this.renderTask.context = { view: this };}function hl(t, e, n) {if (t && (t.trigger(e, n), t.isGroup && !Ho(t))) for (var i = 0, r = t.childCount(); r > i; i++) {hl(t.childAt(i), e, n);}}function cl(t, e, n) {var i = sr(t, e),r = e && null != e.highlightKey ? Vo(e.highlightKey) : null;null != i ? f(Ji(i), function (e) {hl(t.getItemGraphicEl(e), n, r);}) : t.eachItemGraphicEl(function (t) {hl(t, n, r);});}function dl(t) {return I_(t.model);}function fl(t) {var e = t.model,n = t.ecModel,i = t.api,r = t.payload,o = e.pipelineContext.progressiveRender,a = t.view,s = r && M_(r).updateMethod,l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";return "render" !== l && a[l](e, n, i, r), T_[l];}function pl(t, e, n) {function i() {h = new Date().getTime(), c = null, t.apply(a, s || []);}var r,o,a,s,l,u = 0,h = 0,c = null;e = e || 0;var d = function d() {r = new Date().getTime(), a = this, s = arguments;var t = l || e,d = l || n;l = null, o = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : o >= 0 ? i() : c = setTimeout(i, -o), u = r;};return d.clear = function () {c && (clearTimeout(c), c = null);}, d.debounceNextCall = function (t) {l = t;}, d;}function gl(t, e, n, i) {var r = t[e];if (r) {var o = r[D_] || r,a = r[A_],s = r[k_];if (s !== n || a !== i) {if (null == n || !i) return t[e] = o;r = t[e] = pl(o, n, "debounce" === i), r[D_] = o, r[A_] = i, r[k_] = n;}return r;}}function vl(t, e, n, i) {this.ecInstance = t, this.api = e, this.unfinished;var n = this._dataProcessorHandlers = n.slice(),i = this._visualHandlers = i.slice();this._allHandlers = n.concat(i), this._stageTaskMap = N();}function ml(t, e, n, i, r) {function o(t, e) {return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));}r = r || {};var a;f(e, function (e) {if (!r.visualType || r.visualType === e.visualType) {var s = t._stageTaskMap.get(e.uid),l = s.seriesTaskMap,u = s.overallTask;if (u) {var h,c = u.agentStubMap;c.each(function (t) {o(r, t) && (t.dirty(), h = !0);}), h && u.dirty(), R_(u, i);var d = t.getPerformArgs(u, r.block);c.each(function (t) {t.perform(d);}), a |= u.perform(d);} else l && l.each(function (s) {o(r, s) && s.dirty();var l = t.getPerformArgs(s, r.block);l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), R_(s, i), a |= s.perform(l);});}}), t.unfinished |= a;}function yl(t, e, n, i, r) {function o(n) {var o = n.uid,s = a.get(o) || a.set(o, $s({ plan: Ml, reset: Il, count: Tl }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, Dl(t, n, s);}var a = n.seriesTaskMap || (n.seriesTaskMap = N()),s = e.seriesType,l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(o) : s ? i.eachRawSeriesByType(s, o) : l && l(i, r).each(o);var u = t._pipelineMap;a.each(function (t, e) {u.get(e) || (t.dispose(), a.removeKey(e));});}function _l(t, e, n, i, r) {function o(e) {var n = e.uid,i = s.get(n);i || (i = s.set(n, $s({ reset: wl, onDirty: Sl })), a.dirty()), i.context = { model: e, overallProgress: h, modifyOutputEnd: c }, i.agent = a, i.__block = h, Dl(t, e, i);}var a = n.overallTask = n.overallTask || $s({ reset: xl });a.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = a.agentStubMap = a.agentStubMap || N(),l = e.seriesType,u = e.getTargetSeries,h = !0,c = e.modifyOutputEnd;l ? i.eachRawSeriesByType(l, o) : u ? u(i, r).each(o) : (h = !1, f(i.getSeries(), o));var d = t._pipelineMap;s.each(function (t, e) {d.get(e) || (t.dispose(), a.dirty(), s.removeKey(e));});}function xl(t) {t.overallReset(t.ecModel, t.api, t.payload);}function wl(t) {return t.overallProgress && bl;}function bl() {this.agent.dirty(), this.getDownstream().dirty();}function Sl() {this.agent && this.agent.dirty();}function Ml(t) {return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);}function Il(t) {t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = Ji(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length > 1 ? p(e, function (t, e) {return Cl(e);}) : N_;}function Cl(t) {return function (e, n) {var i = n.data,r = n.resetDefines[t];if (r && r.dataEach) for (var o = e.start; o < e.end; o++) {r.dataEach(i, o);} else r && r.progress && r.progress(e, i);};}function Tl(t) {return t.data.count();}function Dl(t, e, n) {var i = e.uid,r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;}function kl(t) {F_ = null;try {t(H_, V_);} catch (e) {}return F_;}function Al(t, e) {for (var n in e.prototype) {t[n] = H;}}function Pl(t) {if (b(t)) {var e = new DOMParser();t = e.parseFromString(t, "text/xml");}for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) {t = t.nextSibling;}return t;}function Ll() {this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;}function Ol(t, e) {for (var n = t.firstChild; n;) {if (1 === n.nodeType) {var i = n.getAttribute("offset");i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;var r = n.getAttribute("stop-color") || "#000000";e.addColorStop(i, r);}n = n.nextSibling;}}function El(t, e) {t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));}function Bl(t) {for (var e = E(t).split(Z_), n = [], i = 0; i < e.length; i += 2) {var r = parseFloat(e[i]),o = parseFloat(e[i + 1]);n.push([r, o]);}return n;}function zl(t, e, n, i) {var r = e.__inheritedStyle || {},o = "text" === e.type;if (1 === t.nodeType && (Nl(t, e), a(r, Fl(t)), !i)) for (var s in Q_) {if (Q_.hasOwnProperty(s)) {var l = t.getAttribute(s);null != l && (r[Q_[s]] = l);}}var u = o ? "textFill" : "fill",h = o ? "textStroke" : "stroke";e.style = e.style || new _g();var c = e.style;null != r.fill && c.set(u, Rl(r.fill, n)), null != r.stroke && c.set(h, Rl(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {var e = "lineWidth" === t && o ? "textStrokeWidth" : t;null != r[t] && c.set(e, parseFloat(r[t]));}), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {null != r[t] && c.set(t, r[t]);}), r.lineDash && (e.style.lineDash = E(r.lineDash).split(Z_)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r;}function Rl(t, e) {var n = e && t && t.match(J_);if (n) {var i = E(n[1]),r = e[i];return r;}return t;}function Nl(t, e) {var n = t.getAttribute("transform");if (n) {n = n.replace(/,/g, " ");var i = null,r = [];n.replace(tx, function (t, e, n) {r.push(e, n);});for (var o = r.length - 1; o > 0; o -= 2) {var a = r[o],s = r[o - 1];switch (i = i || Le(), s) {case "translate":a = E(a).split(Z_), ze(i, i, [parseFloat(a[0]), parseFloat(a[1] || 0)]);break;case "scale":a = E(a).split(Z_), Ne(i, i, [parseFloat(a[0]), parseFloat(a[1] || a[0])]);break;case "rotate":a = E(a).split(Z_), Re(i, i, parseFloat(a[0]));break;case "skew":a = E(a).split(Z_), console.warn("Skew transform is not supported yet");break;case "matrix":var a = E(a).split(Z_);i[0] = parseFloat(a[0]), i[1] = parseFloat(a[1]), i[2] = parseFloat(a[2]), i[3] = parseFloat(a[3]), i[4] = parseFloat(a[4]), i[5] = parseFloat(a[5]);}}e.setLocalTransform(i);}}function Fl(t) {var e = t.getAttribute("style"),n = {};if (!e) return n;var i = {};ex.lastIndex = 0;for (var r; null != (r = ex.exec(e));) {i[r[1]] = r[2];}for (var o in Q_) {Q_.hasOwnProperty(o) && null != i[o] && (n[Q_[o]] = i[o]);}return n;}function Hl(t, e, n) {var i = e / t.width,r = n / t.height,o = Math.min(i, r),a = [o, o],s = [-(t.x + t.width / 2) * o + e / 2, -(t.y + t.height / 2) * o + n / 2];return { scale: a, position: s };}function Vl(t, e) {return function (n, i, r) {return !e && this._disposed ? void ru(this.id) : (n = n && n.toLowerCase(), void yp.prototype[t].call(this, n, i, r));};}function Gl() {yp.call(this);}function Wl(t, e, n) {function r(t, e) {return t.__prio - e.__prio;}n = n || {}, "string" == typeof e && (e = Nx[e]), this.id, this.group, this._dom = t;var o = "canvas";Uf && (o = ("undefined" == typeof window ? global : window).__ECHARTS__DEFAULT__RENDERER__ || o);var a = this._zr = qi(t, { renderer: n.renderer || o, devicePixelRatio: n.devicePixelRatio, width: n.width, height: n.height });this._throttledZrFlush = pl(y(a.flush, a), 17);var e = i(e);e && u_(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ms();var s = this._api = lu(this);En(Rx, r), En(Ex, r), this._scheduler = new vl(this, s, Ex, Rx), yp.call(this, this._ecEventProcessor = new uu()), this._messageCenter = new Gl(), this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this), $l(a, this), B(this);}function Xl(t, e, n) {if (this._disposed) return void ru(this.id);var i,r = this._model,o = this._coordSysMgr.getCoordinateSystems();e = ur(r, e);for (var a = 0; a < o.length; a++) {var s = o[a];if (s[t] && null != (i = s[t](r, e, n))) return i;}Uf && console.warn("No coordinate system that supports " + t + " found by the given finder.");}function Yl(t) {var e = t._model,n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), Ql(t, "component", e, n), Ql(t, "chart", e, n), n.plan();}function Ul(t, e, n, i, r) {function o(i) {i && i.__alive && i[e] && i[e](i.__model, a, t._api, n);}var a = t._model;if (!i) return void ax(t._componentsViews.concat(t._chartsViews), o);var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r);var u = n.excludeSeriesId;null != u && (u = N(Ji(u))), a && a.eachComponent(l, function (e) {u && null != u.get(e.id) || o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);}, t);}function jl(t, e) {var n = t._chartsMap,i = t._scheduler;e.eachSeries(function (t) {i.updateStreamModes(t, n[t.__viewId]);});}function ql(t, e) {var n = t.type,i = t.escapeConnect,r = Lx[n],o = r.actionInfo,l = (o.update || "update").split(":"),u = l.pop();l = null != l[0] && ux(l[0]), this[Cx] = !0;var h = [t],c = !1;t.batch && (c = !0, h = p(t.batch, function (e) {return e = s(a({}, e), t), e.batch = null, e;}));var d,f = [],g = "highlight" === n || "downplay" === n;ax(h, function (t) {d = r.action(t, this._model, this._api), d = d || a({}, t), d.type = o.event || d.type, f.push(d), g ? Ul(this, u, t, "series") : l && Ul(this, u, t, l.main, l.sub);}, this), "none" === u || g || l || (this[Tx] ? (Yl(this), Ax.update.call(this, t), this[Tx] = !1) : Ax[u].call(this, t)), d = c ? { type: o.event || n, escapeConnect: i, batch: f } : f[0], this[Cx] = !1, !e && this._messageCenter.trigger(d.type, d);}function Zl(t) {for (var e = this._pendingActions; e.length;) {var n = e.shift();ql.call(this, n, t);}}function Kl(t) {!t && this.trigger("updated");}function $l(t, e) {t.on("rendered", function () {e.trigger("rendered"), !t.animation.isFinished() || e[Tx] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");});}function Ql(t, e, n, i) {function r(t) {var e = "_ec_" + t.id + "_" + t.type,r = s[e];if (!r) {var h = ux(t.type),c = o ? w_.getClass(h.main, h.sub) : ul.getClass(h.sub);Uf && ox(c, h.sub + " does not exist."), r = new c(), r.init(n, u), s[e] = r, a.push(r), l.add(r.group);}t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !o && i.prepareView(r, t, n, u);}for (var o = "component" === e, a = o ? t._componentsViews : t._chartsViews, s = o ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < a.length; h++) {a[h].__alive = !1;}o ? n.eachComponent(function (t, e) {"series" !== t && r(e);}) : n.eachSeries(r);for (var h = 0; h < a.length;) {var c = a[h];c.__alive ? h++ : (!o && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), a.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);}}function Jl(t) {t.clearColorPalette(), t.eachSeries(function (t) {t.clearColorPalette();});}function tu(t, e, n, i) {eu(t, e, n, i), ax(t._chartsViews, function (t) {t.__alive = !1;}), nu(t, e, n, i), ax(t._chartsViews, function (t) {t.__alive || t.remove(e, n);});}function eu(t, e, n, i, r) {ax(r || t._componentsViews, function (t) {var r = t.__model;t.render(r, e, n, i), su(r, t);});}function nu(t, e, n, i, r) {var o,a = t._scheduler;e.eachSeries(function (e) {var n = t._chartsMap[e.__viewId];n.__alive = !0;var s = n.renderTask;a.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), o |= s.perform(a.getPerformArgs(s)), n.group.silent = !!e.get("silent"), su(e, n), au(e, n);}), a.unfinished |= o, ou(t, e), O_(t._zr.dom, e);}function iu(t, e) {ax(zx, function (n) {n(t, e);});}function ru(t) {Uf && console.warn("Instance " + t + " has been disposed");}function ou(t, e) {var n = t._zr,i = n.storage,r = 0;i.traverse(function () {r++;}), r > e.get("hoverLayerThreshold") && !Kf.node && e.eachSeries(function (e) {if (!e.preventUsingHoverLayer) {var n = t._chartsMap[e.__viewId];n.__alive && n.group.traverse(function (t) {t.useHoverLayer = !0;});}});}function au(t, e) {var n = t.get("blendMode") || null;Uf && !Kf.canvasSupported && n && "source-over" !== n && console.warn("Only canvas support blendMode"), e.group.traverse(function (t) {t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {t.setStyle("blend", n);});});}function su(t, e) {var n = t.get("z"),i = t.get("zlevel");e.group.traverse(function (t) {"group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));});}function lu(t) {var e = t._coordSysMgr;return a(new Ss(t), { getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function getComponentByElement(e) {for (; e;) {var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;}} });}function uu() {this.eventInfo;}function hu(t) {function e(t, e) {for (var n = 0; n < t.length; n++) {var i = t[n];
        i[o] = e;}}var n = 0,i = 1,r = 2,o = "__connectUpdateStatus";ax(Ox, function (a, s) {t._messageCenter.on(s, function (a) {if (Vx[t.group] && t[o] !== n) {if (a && a.escapeConnect) return;var s = t.makeActionFromEvent(a),l = [];ax(Hx, function (e) {e !== t && e.group === t.group && l.push(e);}), e(l, n), ax(l, function (t) {t[o] !== i && t.dispatchAction(s);}), e(l, r);}});});}function cu(t, e, n) {if (Uf) {if (av.replace(".", "") - 0 < cx.zrender.replace(".", "") - 0) throw new Error("zrender/src " + av + " is too old for ECharts " + hx + ". Current version need ZRender " + cx.zrender + "+");if (!t) throw new Error("Initialize failed: invalid dom.");}var i = gu(t);if (i) return Uf && console.warn("There is a chart instance already initialized on the dom."), i;Uf && (!C(t) || "CANVAS" === t.nodeName.toUpperCase() || (t.clientWidth || n && null != n.width) && (t.clientHeight || n && null != n.height) || console.warn("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload."));var r = new Wl(t, e, n);return r.id = "ec_" + Gx++, Hx[r.id] = r, cr(t, Xx, r.id), hu(r), r;}function du(t) {if (x(t)) {var e = t;t = null, ax(e, function (e) {null != e.group && (t = e.group);}), t = t || "g_" + Wx++, ax(e, function (e) {e.group = t;});}return Vx[t] = !0, t;}function fu(t) {Vx[t] = !1;}function pu(t) {"string" == typeof t ? t = Hx[t] : t instanceof Wl || (t = gu(t)), t instanceof Wl && !t.isDisposed() && t.dispose();}function gu(t) {return Hx[dr(t, Xx)];}function vu(t) {return Hx[t];}function mu(t, e) {Nx[t] = e;}function yu(t) {Bx.push(t);}function _u(t, e) {Cu(Ex, t, e, fx);}function xu(t) {zx.push(t);}function wu(t, e, n) {"function" == typeof e && (n = e, e = "");var i = lx(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, ox(Dx.test(i) && Dx.test(e)), Lx[i] || (Lx[i] = { action: n, actionInfo: t }), Ox[e] = i;}function bu(t, e) {Ms.register(t, e);}function Su(t) {var e = Ms.get(t);return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;}function Mu(t, e) {Cu(Rx, t, e, mx, "layout");}function Iu(t, e) {Cu(Rx, t, e, xx, "visual");}function Cu(t, e, n, i, r) {if ((sx(e) || lx(e)) && (n = e, e = i), Uf) {if (isNaN(e) || null == e) throw new Error("Illegal priority");ax(t, function (t) {ox(t.__raw !== n);});}var o = vl.wrapStageHandler(n, r);return o.__prio = e, o.__raw = n, t.push(o), o;}function Tu(t, e) {Fx[t] = e;}function Du(t) {return Oy.extend(t);}function ku(t) {return w_.extend(t);}function Au(t) {return x_.extend(t);}function Pu(t) {return ul.extend(t);}function Lu(t) {n("createCanvas", t);}function Ou(t, e, n) {ix.registerMap(t, e, n);}function Eu(t) {var e = ix.retrieveMap(t);return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };}function Bu(t) {return t;}function zu(t, e, n, i, r) {this._old = t, this._new = e, this._oldKeyGetter = n || Bu, this._newKeyGetter = i || Bu, this.context = r;}function Ru(t, e, n, i, r) {for (var o = 0; o < t.length; o++) {var a = "_ec_" + r[i](t[o], o),s = e[a];null == s ? (n.push(a), e[a] = o) : (s.length || (e[a] = s = [s]), s.push(o));}}function Nu(t) {var e = {},n = e.encode = {},i = N(),r = [],o = [],a = e.userOutput = { dimensionNames: t.dimensions.slice(), encode: {} };f(t.dimensions, function (e) {var s = t.getDimensionInfo(e),l = s.coordDim;if (l) {Uf && O(null == jx.get(l));var u = s.coordDimIndex;Fu(n, l)[u] = e, s.isExtraCoord || (i.set(l, 1), Vu(s.type) && (r[0] = e), Fu(a.encode, l)[u] = s.index), s.defaultTooltip && o.push(e);}jx.each(function (t, e) {var i = Fu(n, e),r = s.otherDims[e];null != r && r !== !1 && (i[r] = s.name);});});var s = [],l = {};i.each(function (t, e) {var i = n[e];l[e] = i[0], s = s.concat(i);}), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;var u = n.label;u && u.length && (r = u.slice());var h = n.tooltip;return h && h.length ? o = h.slice() : o.length || (o = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = o, e;}function Fu(t, e) {return t.hasOwnProperty(e) || (t[e] = []), t[e];}function Hu(t) {return "category" === t ? "ordinal" : "time" === t ? "time" : "float";}function Vu(t) {return !("ordinal" === t || "time" === t);}function Gu(t) {null != t && a(this, t), this.otherDims = {};}function Wu(t) {return t._rawCount > 65535 ? Jx : ew;}function Xu(t) {var e = t.constructor;return e === Array ? t.slice() : new e(t);}function Yu(t, e) {f(nw.concat(e.__wrappedMethods || []), function (n) {e.hasOwnProperty(n) && (t[n] = e[n]);}), t.__wrappedMethods = e.__wrappedMethods, f(iw, function (n) {t[n] = i(e[n]);}), t._calculationInfo = a(e._calculationInfo);}function Uu(t, e, n, i, r) {var o = Qx[e.type],a = i - 1,s = e.name,l = t[s][a];if (l && l.length < n) {for (var u = new o(Math.min(r - a * n, n)), h = 0; h < l.length; h++) {u[h] = l[h];}t[s][a] = u;}for (var c = i * n; r > c; c += n) {t[s].push(new o(Math.min(r - c, n)));}}function ju(t) {var e = t._invertedIndicesMap;f(e, function (n, i) {var r = t._dimensionInfos[i],o = r.ordinalMeta;if (o) {n = e[i] = new tw(o.categories.length);for (var a = 0; a < n.length; a++) {n[a] = Kx;}for (var a = 0; a < t._count; a++) {n[t.get(i, a)] = a;}}});}function qu(t, e, n) {var i;if (null != e) {var r = t._chunkSize,o = Math.floor(n / r),a = n % r,s = t.dimensions[e],l = t._storage[s][o];if (l) {i = l[a];var u = t._dimensionInfos[s].ordinalMeta;u && u.categories.length && (i = u.categories[i]);}}return i;}function Zu(t) {return t;}function Ku(t) {return t < this._count && t >= 0 ? this._indices[t] : -1;}function $u(t, e) {var n = t._idList[e];return null == n && (n = qu(t, t._idDimIdx, e)), null == n && (n = $x + e), n;}function Qu(t) {return x(t) || (t = [t]), t;}function Ju(t, e) {for (var n = 0; n < e.length; n++) {t._dimensionInfos[e[n]] || console.error("Unkown dimension " + e[n]);}}function th(t, e) {var n = t.dimensions,i = new rw(p(n, t.getDimensionInfo, t), t.hostModel);Yu(i, t);for (var r = i._storage = {}, o = t._storage, a = 0; a < n.length; a++) {var s = n[a];o[s] && (u(e, s) >= 0 ? (r[s] = eh(o[s]), i._rawExtent[s] = nh(), i._extent[s] = null) : r[s] = o[s]);}return i;}function eh(t) {for (var e = new Array(t.length), n = 0; n < t.length; n++) {e[n] = Xu(t[n]);}return e;}function nh() {return [1 / 0, -1 / 0];}function ih(t, e, n) {function r(t, e, n) {null != jx.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0));}ns.isInstance(e) || (e = ns.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();for (var o = (n.dimsDef || []).slice(), l = N(), u = N(), h = [], c = rh(e, t, o, n.dimCount), d = 0; c > d; d++) {var p = o[d] = a({}, S(o[d]) ? o[d] : { name: o[d] }),g = p.name,v = h[d] = new Gu();null != g && null == l.get(g) && (v.name = v.displayName = g, l.set(g, d)), null != p.type && (v.type = p.type), null != p.displayName && (v.displayName = p.displayName);}var m = n.encodeDef;!m && n.encodeDefaulter && (m = n.encodeDefaulter(e, c)), m = N(m), m.each(function (t, e) {if (t = Ji(t).slice(), 1 === t.length && !b(t[0]) && t[0] < 0) return void m.set(e, !1);var n = m.set(e, []);f(t, function (t, i) {b(t) && (t = l.get(t)), null != t && c > t && (n[i] = t, r(h[t], e, i));});});var y = 0;f(t, function (t) {var e, t, n, o;if (b(t)) e = t, t = {};else {e = t.name;var a = t.ordinalMeta;t.ordinalMeta = null, t = i(t), t.ordinalMeta = a, n = t.dimsDef, o = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;}var l = m.get(e);if (l !== !1) {var l = Ji(l);if (!l.length) for (var u = 0; u < (n && n.length || 1); u++) {for (; y < h.length && null != h[y].coordDim;) {y++;}y < h.length && l.push(y++);}f(l, function (i, a) {var l = h[i];if (r(s(l, t), e, a), null == l.name && n) {var u = n[a];!S(u) && (u = { name: u }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip;}o && s(l.otherDims, o);});}});var _ = n.generateCoord,x = n.generateCoordCount,w = null != x;x = _ ? x || 1 : 0;for (var M = _ || "value", I = 0; c > I; I++) {var v = h[I] = h[I] || new Gu(),C = v.coordDim;null == C && (v.coordDim = oh(M, u, w), v.coordDimIndex = 0, (!_ || 0 >= x) && (v.isExtraCoord = !0), x--), null == v.name && (v.name = oh(v.coordDim, l)), null != v.type || fs(e, I, v.name) !== Uy.Must && (!v.isExtraCoord || null == v.otherDims.itemName && null == v.otherDims.seriesName) || (v.type = "ordinal");}return h;}function rh(t, e, n, i) {var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return f(e, function (t) {var e = t.dimsDef;e && (r = Math.max(r, e.length));}), r;}function oh(t, e, n) {if (n || null != e.get(t)) {for (var i = 0; null != e.get(t + i);) {i++;}t += i;}return e.set(t, !0), t;}function ah(t) {this.coordSysName = t, this.coordSysDims = [], this.axisMap = N(), this.categoryAxisMap = N(), this.firstCategoryDimIndex = null;}function sh(t) {var e = t.get("coordinateSystem"),n = new ah(e),i = lw[e];return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;}function lh(t) {return "category" === t.get("type");}function uh(t, e, n) {n = n || {};var i,r,o,a,s = n.byIndex,l = n.stackedCoordDimension,u = !(!t || !t.get("stack"));if (f(e, function (t, n) {b(t) && (e[n] = t = { name: t }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));}), !r || s || i || (s = !0), r) {o = "__\x00ecstackresult", a = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);var h = r.coordDim,c = r.type,d = 0;f(e, function (t) {t.coordDim === h && d++;}), e.push({ name: o, coordDim: h, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 }), d++, e.push({ name: a, coordDim: a, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 });}return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: a, stackResultDimension: o };}function hh(t, e) {return !!e && e === t.getCalculationInfo("stackedDimension");}function ch(t, e) {return hh(t, e) ? t.getCalculationInfo("stackResultDimension") : e;}function dh(t, e, n) {n = n || {}, ns.isInstance(t) || (t = ns.seriesDataToSource(t));var i,r = e.get("coordinateSystem"),o = Ms.get(r),a = sh(e);a && (i = p(a.coordSysDims, function (t) {var e = { name: t },n = a.axisMap.get(t);if (n) {var i = n.get("type");e.type = Hu(i);}return e;})), i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"]);var s,l,u = sw(t, { coordDimensions: i, generateCoord: n.generateCoord, encodeDefaulter: n.useEncodeDefaulter ? _(cs, i, e) : null });a && f(u, function (t, e) {var n = t.coordDim,i = a.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);}), l || null == s || (u[s].otherDims.itemName = 0);var h = uh(e, u),c = new rw(u, e);c.setCalculationInfo(h);var d = null != s && fh(t) ? function (t, e, n, i) {return i === s ? n : this.defaultDimValueGetter(t, e, n, i);} : null;return c.hasItemOption = !1, c.initData(t, null, d), c;}function fh(t) {if (t.sourceFormat === Ny) {var e = ph(t.data || []);return null != e && !x(er(e));}}function ph(t) {for (var e = 0; e < t.length && null == t[e];) {e++;}return t[e];}function gh(t) {this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);}function vh(t) {this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;}function mh(t) {return t._map || (t._map = N(t.categories));}function yh(t) {return S(t) && null != t.value ? t.value : t + "";}function _h(t, e, n, i) {var r = {},o = t[1] - t[0],a = r.interval = Oa(o / e, !0);null != n && n > a && (a = r.interval = n), null != i && a > i && (a = r.interval = i);var s = r.intervalPrecision = xh(a),l = r.niceTickExtent = [dw(Math.ceil(t[0] / a) * a, s), dw(Math.floor(t[1] / a) * a, s)];return bh(l, t), r;}function xh(t) {return Ia(t) + 2;}function wh(t, e, n) {t[e] = Math.max(Math.min(t[e], n[1]), n[0]);}function bh(t, e) {!isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), wh(t, 0, e), wh(t, 1, e), t[0] > t[1] && (t[0] = t[1]);}function Sh(t) {return t.get("stack") || gw + t.seriesIndex;}function Mh(t) {return t.dim + t.index;}function Ih(t, e) {var n = [];return e.eachSeriesByType(t, function (t) {Ph(t) && !Lh(t) && n.push(t);}), n;}function Ch(t) {var e = {};f(t, function (t) {var n = t.coordinateSystem,i = n.getBaseAxis();if ("time" === i.type || "value" === i.type) for (var r = t.getData(), o = i.dim + "_" + i.index, a = r.mapDimension(i.dim), s = 0, l = r.count(); l > s; ++s) {var u = r.get(a, s);e[o] ? e[o].push(u) : e[o] = [u];}});var n = [];for (var i in e) {if (e.hasOwnProperty(i)) {var r = e[i];if (r) {r.sort(function (t, e) {return t - e;});for (var o = null, a = 1; a < r.length; ++a) {var s = r[a] - r[a - 1];s > 0 && (o = null === o ? s : Math.min(o, s));}n[i] = o;}}}return n;}function Th(t) {var e = Ch(t),n = [];return f(t, function (t) {var i,r = t.coordinateSystem,o = r.getBaseAxis(),a = o.getExtent();if ("category" === o.type) i = o.getBandWidth();else if ("value" === o.type || "time" === o.type) {var s = o.dim + "_" + o.index,l = e[s],u = Math.abs(a[1] - a[0]),h = o.scale.getExtent(),c = Math.abs(h[1] - h[0]);i = l ? u / c * l : u;} else {var d = t.getData();i = Math.abs(a[1] - a[0]) / d.count();}var f = wa(t.get("barWidth"), i),p = wa(t.get("barMaxWidth"), i),g = wa(t.get("barMinWidth") || 1, i),v = t.get("barGap"),m = t.get("barCategoryGap");n.push({ bandWidth: i, barWidth: f, barMaxWidth: p, barMinWidth: g, barGap: v, barCategoryGap: m, axisKey: Mh(o), stackId: Sh(t) });}), Dh(n);}function Dh(t) {var e = {};f(t, function (t) {var n = t.axisKey,i = t.bandWidth,r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },o = r.stacks;e[n] = r;var a = t.stackId;o[a] || r.autoWidthCount++, o[a] = o[a] || { width: 0, maxWidth: 0 };var s = t.barWidth;s && !o[a].width && (o[a].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);var l = t.barMaxWidth;l && (o[a].maxWidth = l);var u = t.barMinWidth;u && (o[a].minWidth = u);var h = t.barGap;null != h && (r.gap = h);var c = t.barCategoryGap;null != c && (r.categoryGap = c);});var n = {};return f(e, function (t, e) {n[e] = {};var i = t.stacks,r = t.bandWidth,o = wa(t.categoryGap, r),a = wa(t.gap, 1),s = t.remainedWidth,l = t.autoWidthCount,u = (s - o) / (l + (l - 1) * a);u = Math.max(u, 0), f(i, function (t) {var e = t.maxWidth,n = t.minWidth;if (t.width) {var i = t.width;e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, s -= i + a * i, l--;} else {var i = u;e && i > e && (i = Math.min(e, s)), n && n > i && (i = n), i !== u && (t.width = i, s -= i + a * i, l--);}}), u = (s - o) / (l + (l - 1) * a), u = Math.max(u, 0);var h,c = 0;f(i, function (t) {t.width || (t.width = u), h = t, c += t.width * (1 + a);}), h && (c -= h.width * a);var d = -c / 2;f(i, function (t, i) {n[e][i] = n[e][i] || { bandWidth: r, offset: d, width: t.width }, d += t.width * (1 + a);});}), n;}function kh(t, e, n) {if (t && e) {var i = t[Mh(e)];return null != i && null != n && (i = i[Sh(n)]), i;}}function Ah(t, e) {var n = Ih(t, e),i = Th(n),r = {};f(n, function (t) {var e = t.getData(),n = t.coordinateSystem,o = n.getBaseAxis(),a = Sh(t),s = i[Mh(o)][a],l = s.offset,u = s.width,h = n.getOtherAxis(o),c = t.get("barMinHeight") || 0;r[a] = r[a] || [], e.setLayout({ bandWidth: s.bandWidth, offset: l, size: u });for (var d = e.mapDimension(h.dim), f = e.mapDimension(o.dim), p = hh(e, d), g = h.isHorizontal(), v = Oh(o, h, p), m = 0, y = e.count(); y > m; m++) {var _ = e.get(d, m),x = e.get(f, m),w = _ >= 0 ? "p" : "n",b = v;p && (r[a][x] || (r[a][x] = { p: v, n: v }), b = r[a][x][w]);var S, M, I, C;if (g) {var T = n.dataToPoint([_, x]);S = b, M = T[1] + l, I = T[0] - v, C = u, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), isNaN(I) || p && (r[a][x][w] += I);} else {var T = n.dataToPoint([x, _]);S = T[0] + l, M = b, I = u, C = T[1] - v, Math.abs(C) < c && (C = (0 >= C ? -1 : 1) * c), isNaN(C) || p && (r[a][x][w] += C);}e.setItemLayout(m, { x: S, y: M, width: I, height: C });}}, this);}function Ph(t) {return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;}function Lh(t) {return t.pipelineContext && t.pipelineContext.large;}function Oh(t, e) {return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0));}function Eh(t, e) {return Lw(t, Pw(e));}function Bh(t, e) {var n,i,r,o = t.type,a = e.getMin(),s = e.getMax(),l = t.getExtent();"ordinal" === o ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (Uf && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), i = [0, 0]), i[0] = wa(i[0], 1), i[1] = wa(i[1], 1), r = l[1] - l[0] || Math.abs(l[0])), "dataMin" === a ? a = l[0] : "function" == typeof a && (a = a({ min: l[0], max: l[1] })), "dataMax" === s ? s = l[1] : "function" == typeof s && (s = s({ min: l[0], max: l[1] }));var u = null != a,h = null != s;null == a && (a = "ordinal" === o ? n ? 0 : 0 / 0 : l[0] - i[0] * r), null == s && (s = "ordinal" === o ? n ? n - 1 : 0 / 0 : l[1] + i[1] * r), (null == a || !isFinite(a)) && (a = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(T(a) || T(s) || "ordinal" === o && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (a > 0 && s > 0 && !u && (a = 0), 0 > a && 0 > s && !h && (s = 0));var c = e.ecModel;if (c && "time" === o) {var d,p = Ih("bar", c);if (f(p, function (t) {d |= t.getBaseAxis() === e.axis;}), d) {var g = Th(p),v = zh(a, s, e, g);a = v.min, s = v.max;}}return { extent: [a, s], fixMin: u, fixMax: h };}function zh(t, e, n, i) {var r = n.axis.getExtent(),o = r[1] - r[0],a = kh(i, n.axis);if (void 0 === a) return { min: t, max: e };var s = 1 / 0;f(a, function (t) {s = Math.min(t.offset, s);});var l = -1 / 0;f(a, function (t) {l = Math.max(t.offset + t.width, l);}), s = Math.abs(s), l = Math.abs(l);var u = s + l,h = e - t,c = 1 - (s + l) / o,d = h / c - h;return e += d * (l / u), t -= d * (s / u), { min: t, max: e };}function Rh(t, e) {var n = Bh(t, e),i = n.extent,r = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var o = t.type;t.setExtent(i[0], i[1]), t.niceExtent({ splitNumber: r, fixMin: n.fixMin, fixMax: n.fixMax, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });var a = e.get("interval");null != a && t.setInterval && t.setInterval(a);}function Nh(t, e) {if (e = e || t.get("type")) switch (e) {case "category":return new cw(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);case "value":return new pw();default:return (gh.getClass(e) || pw).create(t);}}function Fh(t) {var e = t.scale.getExtent(),n = e[0],i = e[1];return !(n > 0 && i > 0 || 0 > n && 0 > i);}function Hh(t) {var e = t.getLabelModel().get("formatter"),n = "category" === t.type ? t.scale.getExtent()[0] : null;return "string" == typeof e ? e = function (e) {return function (n) {return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");};}(e) : "function" == typeof e ? function (i, r) {return null != n && (r = i - n), e(Vh(t, i), r);} : function (e) {return t.scale.getLabel(e);};}function Vh(t, e) {return "category" === t.type ? t.scale.getLabel(e) : e;}function Gh(t) {var e = t.model,n = t.scale;if (e.get("axisLabel.show") && !n.isBlank()) {var i,r,o = "category" === t.type,a = n.getExtent();o ? r = n.count() : (i = n.getTicks(), r = i.length);var s,l = t.getLabelModel(),u = Hh(t),h = 1;r > 40 && (h = Math.ceil(r / 40));for (var c = 0; r > c; c += h) {var d = i ? i[c] : a[0] + c,f = u(d),p = l.getTextRect(f),g = Wh(p, l.get("rotate") || 0);s ? s.union(g) : s = g;}return s;}}function Wh(t, e) {var n = e * Math.PI / 180,i = t.plain(),r = i.width,o = i.height,a = r * Math.abs(Math.cos(n)) + Math.abs(o * Math.sin(n)),s = r * Math.abs(Math.sin(n)) + Math.abs(o * Math.cos(n)),l = new Cn(i.x, i.y, a, s);return l;}function Xh(t) {var e = t.get("interval");return null == e ? "auto" : e;}function Yh(t) {return "category" === t.type && 0 === Xh(t.getLabelModel());}function Uh(t, e) {if ("image" !== this.type) {var n = this.style,i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);}}function jh(t, e, n, i, r, o, a) {var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? xo(t.slice(8), new Cn(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? _o(t.slice(7), {}, new Cn(e, n, i, r), a ? "center" : "cover") : new Uw({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = Uh, l.setColor(o), l;}function qh(t) {return dh(t.getSource(), t);}function Zh(t, e) {var n = e;fa.isInstance(e) || (n = new fa(e), c(n, Nw));var i = Nh(n);return i.setExtent(t[0], t[1]), Rh(i, n), i;}function Kh(t) {c(t, Nw);}function $h(t, e) {return Math.abs(t - e) < Zw;}function Qh(t, e, n) {var i = 0,r = t[0];if (!r) return !1;for (var o = 1; o < t.length; o++) {var a = t[o];i += Yr(r[0], r[1], a[0], a[1], e, n), r = a;}var s = t[0];return $h(r[0], s[0]) && $h(r[1], s[1]) || (i += Yr(r[0], r[1], s[0], s[1], e, n)), 0 !== i;}function Jh(t, e, n) {if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];else {var i = this.getBoundingRect();n = [i.x + i.width / 2, i.y + i.height / 2];}this.center = n;}function tc(t) {if (!t.UTF8Encoding) return t;var e = t.UTF8Scale;null == e && (e = 1024);for (var n = t.features, i = 0; i < n.length; i++) {for (var r = n[i], o = r.geometry, a = o.coordinates, s = o.encodeOffsets, l = 0; l < a.length; l++) {var u = a[l];if ("Polygon" === o.type) a[l] = ec(u, s[l], e);else if ("MultiPolygon" === o.type) for (var h = 0; h < u.length; h++) {var c = u[h];u[h] = ec(c, s[l][h], e);}}}return t.UTF8Encoding = !1, t;}function ec(t, e, n) {for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {var s = t.charCodeAt(a) - 64,l = t.charCodeAt(a + 1) - 64;s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += o, r = s, o = l, i.push([s / n, l / n]);}return i;}function nc(t) {return "category" === t.type ? rc(t) : sc(t);}function ic(t, e) {return "category" === t.type ? ac(t, e) : { ticks: t.scale.getTicks() };}function rc(t) {var e = t.getLabelModel(),n = oc(t, e);return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;}function oc(t, e) {var n = lc(t, "labels"),i = Xh(e),r = uc(n, i);if (r) return r;var o, a;return w(i) ? o = gc(t, i) : (a = "auto" === i ? cc(t) : i, o = pc(t, a)), hc(n, i, { labels: o, labelCategoryInterval: a });}function ac(t, e) {var n = lc(t, "ticks"),i = Xh(e),r = uc(n, i);if (r) return r;var o, a;if ((!e.get("show") || t.scale.isBlank()) && (o = []), w(i)) o = gc(t, i, !0);else if ("auto" === i) {var s = oc(t, t.getLabelModel());a = s.labelCategoryInterval, o = p(s.labels, function (t) {return t.tickValue;});} else a = i, o = pc(t, a, !0);return hc(n, i, { ticks: o, tickCategoryInterval: a });}function sc(t) {var e = t.scale.getTicks(),n = Hh(t);return { labels: p(e, function (e, i) {return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };}) };}function lc(t, e) {return $w(t)[e] || ($w(t)[e] = []);}function uc(t, e) {for (var n = 0; n < t.length; n++) {if (t[n].key === e) return t[n].value;}}function hc(t, e, n) {return t.push({ key: e, value: n }), n;}function cc(t) {var e = $w(t).autoInterval;return null != e ? e : $w(t).autoInterval = t.calculateCategoryInterval();}function dc(t) {var e = fc(t),n = Hh(t),i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,r = t.scale,o = r.getExtent(),a = r.count();if (o[1] - o[0] < 1) return 0;var s = 1;a > 40 && (s = Math.max(1, Math.floor(a / 40)));for (var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= o[1]; l += s) {var p = 0,g = 0,v = Yn(n(l), e.font, "center", "top");p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);}var m = d / h,y = f / c;isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);var _ = Math.max(0, Math.floor(Math.min(m, y))),x = $w(t.model),w = t.getExtent(),b = x.lastAutoInterval,S = x.lastTickCount;return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - a) <= 1 && b > _ && x.axisExtend0 === w[0] && x.axisExtend1 === w[1] ? _ = b : (x.lastTickCount = a, x.lastAutoInterval = _, x.axisExtend0 = w[0], x.axisExtend1 = w[1]), _;}function fc(t) {var e = t.getLabelModel();return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };}function pc(t, e, n) {function i(t) {l.push(n ? t : { formattedLabel: r(t), rawLabel: o.getLabel(t), tickValue: t });}var r = Hh(t),o = t.scale,a = o.getExtent(),s = t.getLabelModel(),l = [],u = Math.max((e || 0) + 1, 1),h = a[0],c = o.count();0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));var d = Yh(t),f = s.get("showMinLabel") || d,p = s.get("showMaxLabel") || d;f && h !== a[0] && i(a[0]);for (var g = h; g <= a[1]; g += u) {i(g);}return p && g - u !== a[1] && i(a[1]), l;}function gc(t, e, n) {var i = t.scale,r = Hh(t),o = [];return f(i.getTicks(), function (t) {var a = i.getLabel(t);e(t, a) && o.push(n ? t : { formattedLabel: r(t), rawLabel: a, tickValue: t });}), o;}function vc(t, e) {var n = t[1] - t[0],i = e,r = n / i / 2;t[0] += r, t[1] -= r;}function mc(t, e, n, i) {function r(t, e) {return t = ba(t), e = ba(e), d ? t > e : e > t;}var o = e.length;if (t.onBand && !n && o) {var a,s,l = t.getExtent();if (1 === o) e[0].coord = l[0], a = e[1] = { coord: l[0] };else {var u = e[o - 1].tickValue - e[0].tickValue,h = (e[o - 1].coord - e[0].coord) / u;f(e, function (t) {t.coord -= h / 2;});var c = t.scale.getExtent();s = 1 + c[1] - e[o - 1].tickValue, a = { coord: e[o - 1].coord + h * s }, e.push(a);}var d = l[0] > l[1];r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({ coord: l[0] }), r(l[1], a.coord) && (i ? a.coord = l[1] : e.pop()), i && r(a.coord, l[1]) && e.push({ coord: l[1] });}}function yc(t) {return this._axes[t];}function _c(t) {ib.call(this, t);}function xc(t, e) {return e.type || (e.data ? "category" : "value");}function wc(t, e) {return t.getCoordSysModel() === e;}function bc(t, e, n) {this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;}function Sc(t, e, n, i) {function r(t) {return t.dim + "_" + t.index;}n.getAxesOnZeroOf = function () {return o ? [o] : [];};var o,a = t[e],s = n.model,l = s.get("axisLine.onZero"),u = s.get("axisLine.onZeroAxisIndex");if (l) {if (null != u) Mc(a[u]) && (o = a[u]);else for (var h in a) {if (a.hasOwnProperty(h) && Mc(a[h]) && !i[r(a[h])]) {o = a[h];break;}}o && (i[r(o)] = !0);}}function Mc(t) {return t && "category" !== t.type && "time" !== t.type && Fh(t);}function Ic(t, e) {var n = t.getExtent(),i = n[0] + n[1];t.toGlobalCoord = "x" === t.dim ? function (t) {return t + e;} : function (t) {return i - t + e;}, t.toLocalCoord = "x" === t.dim ? function (t) {return t - e;} : function (t) {return i - t + e;};}function Cc(t) {return p(db, function (e) {var n = t.getReferringComponents(e)[0];if (Uf && !n) throw new Error(e + ' "' + D(t.get(e + "Index"), t.get(e + "Id"), 0) + '" not found');return n;});}function Tc(t) {return "cartesian2d" === t.get("coordinateSystem");}function Dc(t, e) {var n = t.mapDimension("defaultedLabel", !0),i = n.length;if (1 === i) return Ks(t, e, n[0]);if (i) {for (var r = [], o = 0; o < n.length; o++) {var a = Ks(t, e, n[o]);r.push(a);}return r.join(" ");}}function kc(t, e, n, i, r, o) {var a = n.getModel("label"),s = n.getModel("emphasis.label");Go(t, e, a, s, { labelFetcher: r, labelDataIndex: o, defaultText: Dc(r.getData(), o), isRectText: !0, autoColor: i }), Ac(t), Ac(e);}function Ac(t, e) {"outside" === t.textPosition && (t.textPosition = e);}function Pc(t, e, n) {var i = t.getArea(),r = t.getBaseAxis().isHorizontal(),o = i.x,a = i.y,s = i.width,l = i.height,u = n.get("lineStyle.width") || 2;o -= u / 2, a -= u / 2, s += u, l += u, o = Math.floor(o), s = Math.round(s);var h = new Rm({ shape: { x: o, y: a, width: s, height: l } });return e && (h.shape[r ? "width" : "height"] = 0, ea(h, { shape: { width: s, height: l } }, n)), h;}function Lc(t, e, n) {var i = t.getArea(),r = new km({ shape: { cx: ba(t.cx, 1), cy: ba(t.cy, 1), r0: ba(i.r0, 1), r: ba(i.r, 1), startAngle: i.startAngle, endAngle: i.endAngle, clockwise: i.clockwise } });return e && (r.shape.endAngle = i.startAngle, ea(r, { shape: { endAngle: i.endAngle } }, n)), r;}function Oc(t, e, n) {return t ? "polar" === t.type ? Lc(t, e, n) : "cartesian2d" === t.type ? Pc(t, e, n) : null : null;}function Ec(t, e) {var n = t.getArea && t.getArea();if ("cartesian2d" === t.type) {var i = t.getBaseAxis();if ("category" !== i.type || !i.onBand) {var r = e.getLayout("bandWidth");i.isHorizontal() ? (n.x -= r, n.width += 2 * r) : (n.y -= r, n.height += 2 * r);}}return n;}function Bc(t, e, n) {n.style.text = null, ta(n, { shape: { width: 0 } }, e, t, function () {n.parent && n.parent.remove(n);});}function zc(t, e, n) {n.style.text = null, ta(n, { shape: { r: n.shape.r0 } }, e, t, function () {n.parent && n.parent.remove(n);});}function Rc(t) {return null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle;}function Nc(t, e, n, i, r, o, a, l) {var u = e.getItemVisual(n, "color"),h = e.getItemVisual(n, "opacity"),c = e.getVisual("borderColor"),d = i.getModel("itemStyle"),f = i.getModel("emphasis.itemStyle").getBarItemStyle();l || t.setShape("r", d.get("barBorderRadius") || 0), t.useStyle(s({ stroke: Rc(r) ? "none" : c, fill: Rc(r) ? "none" : u, opacity: h }, d.getBarItemStyle()));var p = i.getShallow("cursor");p && t.attr("cursor", p);var g = a ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";l || kc(t.style, f, i, u, o, n, g), Rc(r) && (f.fill = f.stroke = "none"), No(t, f);}function Fc(t, e) {var n = t.get(mb) || 0,i = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width),r = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);return Math.min(n, i, r);}function Hc(t, e, n) {var i = t.getData(),r = [],o = i.getLayout("valueAxisHorizontal") ? 1 : 0;r[1 - o] = i.getLayout("valueAxisStart");var a = i.getLayout("largeDataIndices"),s = i.getLayout("barWidth"),l = t.getModel("backgroundStyle"),u = t.get("showBackground", !0);if (u) {var h = i.getLayout("largeBackgroundPoints"),c = [];c[1 - o] = i.getLayout("backgroundStart");var d = new Mb({ shape: { points: h }, incremental: !!n, __startPoint: c, __baseDimIdx: o, __largeDataIndices: a, __barWidth: s, silent: !0, z2: 0 });Wc(d, l, i), e.add(d);}var f = new Mb({ shape: { points: i.getLayout("largePoints") }, incremental: !!n, __startPoint: r, __baseDimIdx: o, __largeDataIndices: a, __barWidth: s });e.add(f), Gc(f, t, i), f.seriesIndex = t.seriesIndex, t.get("silent") || (f.on("mousedown", Ib), f.on("mousemove", Ib));}function Vc(t, e, n) {var i = t.__baseDimIdx,r = 1 - i,o = t.shape.points,a = t.__largeDataIndices,s = Math.abs(t.__barWidth / 2),l = t.__startPoint[r];yb[0] = e, yb[1] = n;for (var u = yb[i], h = yb[1 - i], c = u - s, d = u + s, f = 0, p = o.length / 2; p > f; f++) {var g = 2 * f,v = o[g + i],m = o[g + r];if (v >= c && d >= v && (m >= l ? h >= l && m >= h : h >= m && l >= h)) return a[f];}return -1;}function Gc(t, e, n) {var i = n.getVisual("borderColor") || n.getVisual("color"),r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth");}function Wc(t, e, n) {var i = e.get("borderColor") || e.get("color"),r = e.getItemStyle(["color", "borderColor"]);t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth");}function Xc(t, e, n) {var i,r = "polar" === n.type;return i = r ? n.getArea() : n.grid.getRect(), r ? { cx: i.cx, cy: i.cy, r0: t ? i.r0 : e.r0, r: t ? i.r : e.r, startAngle: t ? e.startAngle : 0, endAngle: t ? e.endAngle : 2 * Math.PI } : { x: t ? e.x : i.x, y: t ? i.y : e.y, width: t ? e.width : i.width, height: t ? i.height : e.height };}function Yc(t, e, n) {var i = "polar" === t.type ? km : Rm;return new i({ shape: Xc(e, n, t), silent: !0, z2: 0 });}function Uc(t, e, n, i) {var r,o,a = Da(n - t.rotation),s = i[0] > i[1],l = "start" === e && !s || "start" !== e && s;return ka(a - Cb / 2) ? (o = l ? "bottom" : "top", r = "center") : ka(a - 1.5 * Cb) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = 1.5 * Cb > a && a > Cb / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: a, textAlign: r, textVerticalAlign: o };}function jc(t, e, n) {if (!Yh(t.axis)) {var i = t.get("axisLabel.showMinLabel"),r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var o = e[0],a = e[1],s = e[e.length - 1],l = e[e.length - 2],u = n[0],h = n[1],c = n[n.length - 1],d = n[n.length - 2];i === !1 ? (qc(o), qc(u)) : Zc(o, a) && (i ? (qc(a), qc(h)) : (qc(o), qc(u))), r === !1 ? (qc(s), qc(c)) : Zc(l, s) && (r ? (qc(l), qc(d)) : (qc(s), qc(c)));}}function qc(t) {t && (t.ignore = !0);}function Zc(t, e) {var n = t && t.getBoundingRect().clone(),i = e && e.getBoundingRect().clone();if (n && i) {var r = Oe([]);return Re(r, r, -t.rotation), n.applyTransform(Be([], r, t.getLocalTransform())), i.applyTransform(Be([], r, e.getLocalTransform())), n.intersect(i);}}function Kc(t) {return "middle" === t || "center" === t;}function $c(t, e, n, i, r) {for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {var u = t[l].coord;a[0] = u, a[1] = 0, s[0] = u, s[1] = n, e && (oe(a, a, e), oe(s, s, e));var h = new Fm({ anid: r + "_" + t[l].tickValue, subPixelOptimize: !0, shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] }, style: i, z2: 2, silent: !0 });o.push(h);}return o;}function Qc(t, e, n) {var i = e.axis,r = e.getModel("axisTick");if (r.get("show") && !i.scale.isBlank()) {for (var o = r.getModel("lineStyle"), a = n.tickDirection * r.get("length"), l = i.getTicksCoords(), u = $c(l, t._transform, a, s(o.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), "ticks"), h = 0; h < u.length; h++) {t.group.add(u[h]);}return u;}}function Jc(t, e, n) {var i = e.axis,r = e.getModel("minorTick");if (r.get("show") && !i.scale.isBlank()) {var o = i.getMinorTicksCoords();if (o.length) for (var a = r.getModel("lineStyle"), l = n.tickDirection * r.get("length"), u = s(a.getLineStyle(), s(e.getModel("axisTick").getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") })), h = 0; h < o.length; h++) {for (var c = $c(o[h], t._transform, l, u, "minorticks_" + h), d = 0; d < c.length; d++) {t.group.add(c[d]);}}}}function td(t, e, n) {var i = e.axis,r = D(n.axisLabelShow, e.get("axisLabel.show"));if (r && !i.scale.isBlank()) {var o = e.getModel("axisLabel"),a = o.get("margin"),s = i.getViewLabels(),l = (D(n.labelRotate, o.get("rotate")) || 0) * Cb / 180,u = Ab(n.rotation, l, n.labelDirection),h = e.getCategories && e.getCategories(!0),c = [],d = Pb(e),p = e.get("triggerEvent");return f(s, function (r, s) {var l = r.tickValue,f = r.formattedLabel,g = r.rawLabel,v = o;h && h[l] && h[l].textStyle && (v = new fa(h[l].textStyle, o, e.ecModel));var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),y = i.dataToCoord(l),_ = [y, n.labelOffset + n.labelDirection * a],x = new Im({ anid: "label_" + l, position: _, rotation: u.rotation, silent: d, z2: 10 });Xo(x.style, v, { text: f, textAlign: v.getShallow("align", !0) || u.textAlign, textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign, textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m }), p && (x.eventData = kb(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform();}), c;}}function ed(t, e) {var n = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };return nd(n, t, e), n.seriesInvolved && rd(n, t), n;}function nd(t, e, n) {var i = e.getComponent("tooltip"),r = e.getComponent("axisPointer"),o = r.get("link", !0) || [],a = [];Lb(n.getCoordinateSystems(), function (n) {function s(i, s, l) {var h = l.model.getModel("axisPointer", r),d = h.get("show");if (d && ("auto" !== d || i || hd(h))) {null == s && (s = h.get("triggerTooltip")), h = i ? id(l, c, r, e, i, s) : h;var f = h.get("snap"),p = cd(l.model),g = s || f || "category" === l.type,v = t.axesInfo[p] = { key: p, axis: l, coordSys: n, axisPointerModel: h, triggerTooltip: s, involveSeries: g, snap: f, useHandle: hd(h), seriesModels: [] };u[p] = v, t.seriesInvolved |= g;var m = od(o, l);if (null != m) {var y = a[m] || (a[m] = { axesInfo: {} });y.axesInfo[p] = v, y.mapper = o[m].mapper, v.linkGroup = y;}}}if (n.axisPointerEnabled) {var l = cd(n.model),u = t.coordSysAxesInfo[l] = {};t.coordSysMap[l] = n;var h = n.model,c = h.getModel("tooltip", i);if (Lb(n.getAxes(), Ob(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {var d = "axis" === c.get("trigger"),f = "cross" === c.get("axisPointer.type"),p = n.getTooltipAxes(c.get("axisPointer.axis"));(d || f) && Lb(p.baseAxes, Ob(s, f ? "cross" : !0, d)), f && Lb(p.otherAxes, Ob(s, "cross", !1));}}});}function id(t, e, n, r, o, a) {var l = e.getModel("axisPointer"),u = {};Lb(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {u[t] = i(l.get(t));
    }), u.snap = "category" !== t.type && !!a, "cross" === l.get("type") && (u.type = "line");var h = u.label || (u.label = {});if (null == h.show && (h.show = !1), "cross" === o) {var c = l.get("label.show");if (h.show = null != c ? c : !0, !a) {var d = u.lineStyle = l.get("crossStyle");d && s(h, d.textStyle);}}return t.model.getModel("axisPointer", new fa(u, n, r));}function rd(t, e) {e.eachSeries(function (e) {var n = e.coordinateSystem,i = e.get("tooltip.trigger", !0),r = e.get("tooltip.show", !0);n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && Lb(t.coordSysAxesInfo[cd(n.model)], function (t) {var i = t.axis;n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());});}, this);}function od(t, e) {for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {var o = t[r] || {};if (ad(o[i + "AxisId"], n.id) || ad(o[i + "AxisIndex"], n.componentIndex) || ad(o[i + "AxisName"], n.name)) return r;}}function ad(t, e) {return "all" === t || x(t) && u(t, e) >= 0 || t === e;}function sd(t) {var e = ld(t);if (e) {var n = e.axisPointerModel,i = e.axis.scale,r = n.option,o = n.get("status"),a = n.get("value");null != a && (a = i.parse(a));var s = hd(n);null == o && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");}}function ld(t) {var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[cd(t)];}function ud(t) {var e = ld(t);return e && e.axisPointerModel;}function hd(t) {return !!t.get("handle.show");}function cd(t) {return t.type + "||" + t.id;}function dd(t, e, n, i, r, o) {var a = Eb.getAxisPointerClass(t.axisPointerClass);if (a) {var s = ud(e);s ? (t._axisPointer || (t._axisPointer = new a())).render(e, s, i, o) : fd(t, i);}}function fd(t, e, n) {var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;}function pd(t, e, n) {n = n || {};var i = t.coordinateSystem,r = e.axis,o = {},a = r.getAxesOnZeroOf()[0],s = r.position,l = a ? "onZero" : s,u = r.dim,h = i.getRect(),c = [h.x, h.x + h.width, h.y, h.y + h.height],d = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },f = e.get("offset") || 0,p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];if (a) {var g = a.toGlobalCoord(a.dataToCoord(0));p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);}o.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);var v = { top: -1, bottom: 1, left: -1, right: 1 };o.labelDirection = o.tickDirection = o.nameDirection = v[s], o.labelOffset = a ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), D(n.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);var m = e.get("axisLabel.rotate");return o.labelRotate = "top" === l ? -m : m, o.z2 = 1, o;}function gd(t, e, n, i) {var r = n.axis;if (!r.scale.isBlank()) {var o = n.getModel("splitArea"),a = o.getModel("areaStyle"),l = a.get("color"),u = i.coordinateSystem.getRect(),h = r.getTicksCoords({ tickModel: o, clamp: !0 });if (h.length) {var c = l.length,d = t.__splitAreaColors,f = N(),p = 0;if (d) for (var g = 0; g < h.length; g++) {var v = d.get(h[g].tickValue);if (null != v) {p = (v + (c - 1) * g) % c;break;}}var m = r.toGlobalCoord(h[0].coord),y = a.getAreaStyle();l = x(l) ? l : [l];for (var g = 1; g < h.length; g++) {var _,w,b,S,M = r.toGlobalCoord(h[g].coord);r.isHorizontal() ? (_ = m, w = u.y, b = M - _, S = u.height, m = _ + b) : (_ = u.x, w = m, b = u.width, S = M - w, m = w + S);var I = h[g - 1].tickValue;null != I && f.set(I, p), e.add(new Rm({ anid: null != I ? "area_" + I : null, shape: { x: _, y: w, width: b, height: S }, style: s({ fill: l[p] }, y), silent: !0 })), p = (p + 1) % c;}t.__splitAreaColors = f;}}}function vd(t) {t.__splitAreaColors = null;}function md(t, e, n) {hg.call(this), this.updateData(t, e, n);}function yd(t) {return [t[0] / 2, t[1] / 2];}function _d(t, e) {this.parent.drift(t, e);}function xd(t, e) {if (!this.incremental && !this.useHoverLayer) if ("emphasis" === e) {var n = this.__symbolOriginalScale,i = n[1] / n[0],r = { scale: [Math.max(1.1 * n[0], n[0] + 3), Math.max(1.1 * n[1], n[1] + 3 * i)] };this.animateTo(r, 400, "elasticOut");} else "normal" === e && this.animateTo({ scale: this.__symbolOriginalScale }, 400, "elasticOut");}function wd(t) {this.group = new hg(), this._symbolCtor = t || md;}function bd(t, e, n, i) {return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"));}function Sd(t) {return null == t || S(t) || (t = { isIgnore: t }), t || {};}function Md(t) {var e = t.hostModel;return { itemStyle: e.getModel("itemStyle").getItemStyle(["color"]), hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(), symbolRotate: e.get("symbolRotate"), symbolOffset: e.get("symbolOffset"), hoverAnimation: e.get("hoverAnimation"), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label"), cursorStyle: e.get("cursor") };}function Id(t, e, n) {var i,r = t.getBaseAxis(),o = t.getOtherAxis(r),a = Cd(o, n),s = r.dim,l = o.dim,u = e.mapDimension(l),h = e.mapDimension(s),c = "x" === l || "radius" === l ? 1 : 0,d = p(t.dimensions, function (t) {return e.mapDimension(t);}),f = e.getCalculationInfo("stackResultDimension");return (i |= hh(e, d[0])) && (d[0] = f), (i |= hh(e, d[1])) && (d[1] = f), { dataDimsForPoint: d, valueStart: a, valueAxisDim: l, baseAxisDim: s, stacked: !!i, valueDim: u, baseDim: h, baseDataOffset: c, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") };}function Cd(t, e) {var n = 0,i = t.scale.getExtent();return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n;}function Td(t, e, n, i) {var r = 0 / 0;t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);var o = t.baseDataOffset,a = [];return a[o] = n.get(t.baseDim, i), a[1 - o] = r, e.dataToPoint(a);}function Dd(t, e) {var n = [];return e.diff(t).add(function (t) {n.push({ cmd: "+", idx: t });}).update(function (t, e) {n.push({ cmd: "=", idx: e, idx1: t });}).remove(function (t) {n.push({ cmd: "-", idx: t });}).execute(), n;}function kd(t) {return isNaN(t[0]) || isNaN(t[1]);}function Ad(t, e, n, i, r, o, a, s, l, u) {return "none" !== u && u ? Pd.apply(this, arguments) : Ld.apply(this, arguments);}function Pd(t, e, n, i, r, o, a, s, l, u, h) {for (var c = 0, d = n, f = 0; i > f; f++) {var p = e[d];if (d >= r || 0 > d) break;if (kd(p)) {if (h) {d += o;continue;}break;}if (d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {var g = e[c],v = "y" === u ? 1 : 0,m = (p[v] - g[v]) * l;Kb(Qb, g), Qb[v] = g[v] + m, Kb(Jb, p), Jb[v] = p[v] - m, t.bezierCurveTo(Qb[0], Qb[1], Jb[0], Jb[1], p[0], p[1]);} else t.lineTo(p[0], p[1]);c = d, d += o;}return f;}function Ld(t, e, n, i, r, o, a, s, l, u, h) {for (var c = 0, d = n, f = 0; i > f; f++) {var p = e[d];if (d >= r || 0 > d) break;if (kd(p)) {if (h) {d += o;continue;}break;}if (d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]), Kb(Qb, p);else if (l > 0) {var g = d + o,v = e[g];if (h) for (; v && kd(e[g]);) {g += o, v = e[g];}var m = .5,y = e[c],v = e[g];if (!v || kd(v)) Kb(Jb, p);else {kd(v) && !h && (v = p), j($b, v, y);var _, x;if ("x" === u || "y" === u) {var w = "x" === u ? 0 : 1;_ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);} else _ = pp(p, y), x = pp(p, v);m = x / (x + _), Zb(Jb, p, $b, -l * (1 - m));}jb(Qb, Qb, s), qb(Qb, Qb, a), jb(Jb, Jb, s), qb(Jb, Jb, a), t.bezierCurveTo(Qb[0], Qb[1], Jb[0], Jb[1], p[0], p[1]), Zb(Qb, p, $b, l * m);} else t.lineTo(p[0], p[1]);c = d, d += o;}return f;}function Od(t, e) {var n = [1 / 0, 1 / 0],i = [-1 / 0, -1 / 0];if (e) for (var r = 0; r < t.length; r++) {var o = t[r];o[0] < n[0] && (n[0] = o[0]), o[1] < n[1] && (n[1] = o[1]), o[0] > i[0] && (i[0] = o[0]), o[1] > i[1] && (i[1] = o[1]);}return { min: e ? n : i, max: e ? i : n };}function Ed(t, e) {if (t.length === e.length) {for (var n = 0; n < t.length; n++) {var i = t[n],r = e[n];if (i[0] !== r[0] || i[1] !== r[1]) return;}return !0;}}function Bd(t, e) {var n = [],i = [],r = [],o = [];return Br(t, n, i), Br(e, r, o), Math.max(Math.abs(n[0] - r[0]), Math.abs(n[1] - r[1]), Math.abs(i[0] - o[0]), Math.abs(i[1] - o[1]));}function zd(t) {return "number" == typeof t ? t : t ? .5 : 0;}function Rd(t, e, n) {if (!n.valueDim) return [];for (var i = [], r = 0, o = e.count(); o > r; r++) {i.push(Td(n, t, e, r));}return i;}function Nd(t, e, n) {for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {var s = t[a + 1],l = t[a];o.push(l);var u = [];switch (n) {case "end":u[r] = s[r], u[1 - r] = l[1 - r], o.push(u);break;case "middle":var h = (l[r] + s[r]) / 2,c = [];u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], o.push(u), o.push(c);break;default:u[r] = l[r], u[1 - r] = s[1 - r], o.push(u);}}return t[a] && o.push(t[a]), o;}function Fd(t, e) {var n = t.getVisual("visualMeta");if (n && n.length && t.count()) {if ("cartesian2d" !== e.type) return void (Uf && console.warn("Visual map on line style is only supported on cartesian2d."));for (var i, r, o = n.length - 1; o >= 0; o--) {var a = n[o].dimension,s = t.dimensions[a],l = t.getDimensionInfo(s);if (i = l && l.coordDim, "x" === i || "y" === i) {r = n[o];break;}}if (!r) return void (Uf && console.warn("Visual map on line style only support x or y dimension."));var u = e.getAxis(i),h = p(r.stops, function (t) {return { coord: u.toGlobalCoord(u.dataToCoord(t.value)), color: t.color };}),c = h.length,d = r.outerColors.slice();c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());var g = 10,v = h[0].coord - g,m = h[c - 1].coord + g,y = m - v;if (.001 > y) return "transparent";f(h, function (t) {t.offset = (t.coord - v) / y;}), h.push({ offset: c ? h[c - 1].offset : .5, color: d[1] || "transparent" }), h.unshift({ offset: c ? h[0].offset : .5, color: d[0] || "transparent" });var _ = new Ym(0, 0, 0, 0, h, !0);return _[i] = v, _[i + "2"] = m, _;}}function Hd(t, e, n) {var i = t.get("showAllSymbol"),r = "auto" === i;if (!i || r) {var o = n.getAxesByScale("ordinal")[0];if (o && (!r || !Vd(o, e))) {var a = e.mapDimension(o.dim),s = {};return f(o.getViewLabels(), function (t) {s[t.tickValue] = 1;}), function (t) {return !s.hasOwnProperty(e.get(a, t));};}}}function Vd(t, e) {var n = t.getExtent(),i = Math.abs(n[1] - n[0]) / t.scale.count();isNaN(i) && (i = 0);for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; r > a; a += o) {if (1.5 * md.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i) return !1;}return !0;}function Gd(t, e, n) {if ("cartesian2d" === t.type) {var i = t.getBaseAxis().isHorizontal(),r = Pc(t, e, n);if (!n.get("clip", !0)) {var o = r.shape,a = Math.max(o.width, o.height);i ? (o.y -= a, o.height += 2 * a) : (o.x -= a, o.width += 2 * a);}return r;}return Lc(t, e, n);}function Wd(t, e) {var n = t.get("center"),i = e.getWidth(),r = e.getHeight(),o = Math.min(i, r),a = wa(n[0], e.getWidth()),s = wa(n[1], e.getHeight()),l = wa(t.get("radius"), o / 2);return { cx: a, cy: s, r: l };}function Xd(t, e) {return e && ("string" == typeof e ? t = e.replace("{value}", null != t ? t : "") : "function" == typeof e && (t = e(t))), t;}function Yd(t, e, n) {var i,r = {},o = "toggleSelected" === t;return n.eachComponent("legend", function (n) {o && null != i ? n[i ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? n[t]() : (n[t](e.name), i = n.isSelected(e.name));var a = n.getData();f(a, function (t) {var e = t.get("name");if ("\n" !== e && "" !== e) {var i = n.isSelected(e);r[e] = r.hasOwnProperty(e) ? r[e] && i : i;}});}), "allSelect" === t || "inverseSelect" === t ? { selected: r } : { name: e.name, selected: r };}function Ud(t, e) {var n = xy(e.get("padding")),i = e.getItemStyle(["color", "opacity"]);i.fill = e.get("backgroundColor");var t = new Rm({ shape: { x: t.x - n[3], y: t.y - n[0], width: t.width + n[1] + n[3], height: t.height + n[0] + n[2], r: e.get("borderRadius") }, style: i, silent: !0, z2: -1 });return t;}function jd(t, e, n, i, r, o) {var a;return "line" !== e && e.indexOf("empty") < 0 ? (a = n.getItemStyle(), t.style.stroke = i, o || (a.stroke = r)) : a = n.getItemStyle(["borderWidth", "borderColor"]), t.setStyle(a);}function qd(t, e, n, i) {Kd(t, e, n, i), n.dispatchAction({ type: "legendToggleSelect", name: null != t ? t : e }), Zd(t, e, n, i);}function Zd(t, e, n, i) {var r = n.getZr().storage.getDisplayList()[0];r && r.useHoverLayer || n.dispatchAction({ type: "highlight", seriesName: t, name: e, excludeSeriesId: i });}function Kd(t, e, n, i) {var r = n.getZr().storage.getDisplayList()[0];r && r.useHoverLayer || n.dispatchAction({ type: "downplay", seriesName: t, name: e, excludeSeriesId: i });}function $d(t, e, n) {var i = t.getOrient(),r = [1, 1];r[i.index] = 0, $a(e, n, { type: "box", ignoreSize: r });}function Qd(t, e, n, i, r) {var o = t.axis;if (!o.scale.isBlank() && o.containData(e)) {if (!t.involveSeries) return void n.showPointer(t, e);var s = Jd(e, t),l = s.payloadBatch,u = s.snapToValue;l[0] && null == r.seriesIndex && a(r, l[0]), !i && t.snap && o.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u);}}function Jd(t, e) {var n = e.axis,i = n.dim,r = t,o = [],a = Number.MAX_VALUE,s = -1;return MS(e.seriesModels, function (e) {var l,u,h = e.getData().mapDimension(i, !0);if (e.getAxisTooltipData) {var c = e.getAxisTooltipData(h, t, n);u = c.dataIndices, l = c.nestestValue;} else {if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;l = e.getData().get(h[0], u[0]);}if (null != l && isFinite(l)) {var d = t - l,f = Math.abs(d);a >= f && ((a > f || d >= 0 && 0 > s) && (a = f, s = d, r = l, o.length = 0), MS(u, function (t) {o.push({ seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t) });}));}}), { payloadBatch: o, snapToValue: r };}function tf(t, e, n, i) {t[e.key] = { value: n, payloadBatch: i };}function ef(t, e, n, i) {var r = n.payloadBatch,o = e.axis,a = o.model,s = e.axisPointerModel;if (e.triggerTooltip && r.length) {var l = e.coordSys.model,u = cd(l),h = t.map[u];h || (h = t.map[u] = { coordSysId: l.id, coordSysIndex: l.componentIndex, coordSysType: l.type, coordSysMainType: l.mainType, dataByAxis: [] }, t.list.push(h)), h.dataByAxis.push({ axisDim: o.dim, axisIndex: a.componentIndex, axisType: a.type, axisId: a.id, value: i, valueLabelOpt: { precision: s.get("label.precision"), formatter: s.get("label.formatter") }, seriesDataIndices: r.slice() });}}function nf(t, e, n) {var i = n.axesInfo = [];MS(e, function (e, n) {var r = e.axisPointerModel.option,o = t[n];o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value });});}function rf(t, e, n, i) {if (lf(e) || !t.list.length) return void i({ type: "hideTip" });var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};i({ type: "showTip", escapeConnect: !0, x: e[0], y: e[1], tooltipOption: n.tooltipOption, position: n.position, dataIndexInside: r.dataIndexInside, dataIndex: r.dataIndex, seriesIndex: r.seriesIndex, dataByCoordSys: t.list });}function of(t, e, n) {var i = n.getZr(),r = "axisPointerLastHighlights",o = CS(i)[r] || {},a = CS(i)[r] = {};MS(t, function (t) {var e = t.axisPointerModel.option;"show" === e.status && MS(e.seriesDataIndices, function (t) {var e = t.seriesIndex + " | " + t.dataIndex;a[e] = t;});});var s = [],l = [];f(o, function (t, e) {!a[e] && l.push(t);}), f(a, function (t, e) {!o[e] && s.push(t);}), l.length && n.dispatchAction({ type: "downplay", escapeConnect: !0, batch: l }), s.length && n.dispatchAction({ type: "highlight", escapeConnect: !0, batch: s });}function af(t, e) {for (var n = 0; n < (t || []).length; n++) {var i = t[n];if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;}}function sf(t) {var e = t.axis.model,n = {},i = n.axisDim = t.axis.dim;return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n;}function lf(t) {return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);}function uf(t, e, n) {if (!Kf.node) {var i = e.getZr();DS(i).records || (DS(i).records = {}), hf(i, e);var r = DS(i).records[t] || (DS(i).records[t] = {});r.handler = n;}}function hf(t, e) {function n(n, i) {t.on(n, function (n) {var r = pf(e);kS(DS(t).records, function (t) {t && i(t, n, r.dispatchAction);}), cf(r.pendings, e);});}DS(t).initialized || (DS(t).initialized = !0, n("click", _(ff, "click")), n("mousemove", _(ff, "mousemove")), n("globalout", df));}function cf(t, e) {var n,i = t.showTip.length,r = t.hideTip.length;i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n));}function df(t, e, n) {t.handler("leave", null, n);}function ff(t, e, n, i) {e.handler(t, n, i);}function pf(t) {var e = { showTip: [], hideTip: [] },n = function n(i) {var r = e[i.type];r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));};return { dispatchAction: n, pendings: e };}function gf(t, e) {if (!Kf.node) {var n = e.getZr(),i = (DS(n).records || {})[t];i && (DS(n).records[t] = null);}}function vf() {}function mf(t, e, n, i) {yf(PS(n).lastProp, i) || (PS(n).lastProp = i, e ? ta(n, i, t) : (n.stopAnimation(), n.attr(i)));}function yf(t, e) {if (S(t) && S(e)) {var n = !0;return f(e, function (e, i) {n = n && yf(t[i], e);}), !!n;}return t === e;}function _f(t, e) {t[e.get("label.show") ? "show" : "hide"]();}function xf(t) {return { position: t.position.slice(), rotation: t.rotation || 0 };}function wf(t, e, n) {var i = e.get("z"),r = e.get("zlevel");t && t.traverse(function (t) {"group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);});}function bf(t) {var e,n = t.get("type"),i = t.getModel(n + "Style");return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e;}function Sf(t, e, n, i, r) {var o = n.get("value"),a = If(o, e.axis, e.ecModel, n.get("seriesDataIndices"), { precision: n.get("label.precision"), formatter: n.get("label.formatter") }),s = n.getModel("label"),l = xy(s.get("padding") || 0),u = s.getFont(),h = Yn(a, u),c = r.position,d = h.width + l[1] + l[3],f = h.height + l[0] + l[2],p = r.align;"right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);var g = r.verticalAlign;"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Mf(c, d, f, i);var v = s.get("backgroundColor");v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = { shape: { x: 0, y: 0, width: d, height: f, r: s.get("borderRadius") }, position: c.slice(), style: { text: a, textFont: u, textFill: s.getTextColor(), textPosition: "inside", textPadding: l, fill: v, stroke: s.get("borderColor") || "transparent", lineWidth: s.get("borderWidth") || 0, shadowBlur: s.get("shadowBlur"), shadowColor: s.get("shadowColor"), shadowOffsetX: s.get("shadowOffsetX"), shadowOffsetY: s.get("shadowOffsetY") }, z2: 10 };}function Mf(t, e, n, i) {var r = i.getWidth(),o = i.getHeight();t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);}function If(t, e, n, i, r) {t = e.scale.parse(t);var o = e.scale.getLabel(t, { precision: r.precision }),a = r.formatter;if (a) {var s = { value: Vh(e, t), axisDimension: e.dim, axisIndex: e.index, seriesData: [] };f(i, function (t) {var e = n.getSeriesByIndex(t.seriesIndex),i = t.dataIndexInside,r = e && e.getDataParams(i);r && s.seriesData.push(r);}), b(a) ? o = a.replace("{value}", o) : w(a) && (o = a(s));}return o;}function Cf(t, e, n) {var i = Le();return Re(i, i, n.rotation), ze(i, i, n.position), ia([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i);}function Tf(t, e, n, i, r, o) {var a = Tb.innerTextLayout(n.rotation, 0, n.labelDirection);n.labelMargin = r.get("label.margin"), Sf(e, i, r, o, { position: Cf(i.axis, t, n), align: a.textAlign, verticalAlign: a.textVerticalAlign });}function Df(t, e, n) {return n = n || 0, { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };}function kf(t, e, n) {return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };}function Af(t, e) {var n = {};return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);}function Pf(t) {return "x" === t.dim ? 0 : 1;}function Lf(t) {var e = "cubic-bezier(0.23, 1, 0.32, 1)",n = "left " + t + "s " + e + ",top " + t + "s " + e;return p(NS, function (t) {return t + "transition:" + n;}).join(";");}function Of(t) {var e = [],n = t.get("fontSize"),i = t.getTextColor();i && e.push("color:" + i), e.push("font:" + t.getFont());var r = t.get("lineHeight");null == r && (r = Math.round(3 * n / 2)), n && e.push("line-height:" + r + "px");var o = t.get("textShadowColor"),a = t.get("textShadowBlur") || 0,s = t.get("textShadowOffsetX") || 0,l = t.get("textShadowOffsetY") || 0;return a && e.push("text-shadow:" + s + "px " + l + "px " + a + "px " + o), zS(["decoration", "align"], function (n) {var i = t.get(n);i && e.push("text-" + n + ":" + i);}), e.join(";");}function Ef(t) {var e = [],n = t.get("transitionDuration"),i = t.get("backgroundColor"),r = t.getModel("textStyle"),o = t.get("padding");return n && e.push(Lf(n)), i && (Kf.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + rn(i)), e.push("filter:alpha(opacity=70)"))), zS(["width", "color", "radius"], function (n) {var i = "border-" + n,r = RS(i),o = t.get(r);null != o && e.push(i + ":" + o + ("color" === n ? "" : "px"));}), e.push(Of(r)), null != o && e.push("padding:" + xy(o).join("px ") + "px"), e.join(";") + ";";}function Bf(t, e, n, i, r) {var o = e && e.painter;if (n) {var a = o && o.getViewportRoot();a && pe(t, a, document.body, i, r);} else {t[0] = i, t[1] = r;var s = o && o.getViewportRootOffset();s && (t[0] += s.offsetLeft, t[1] += s.offsetTop);}t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();}function zf(t, e, n) {if (Kf.wxa) return null;var i = document.createElement("div");i.domBelongToZr = !0, this.el = i;var r = this._zr = e.getZr(),o = this._appendToBody = n && n.appendToBody;this._styleCoord = [0, 0, 0, 0], Bf(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;var a = this;i.onmouseenter = function () {a._enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0;}, i.onmousemove = function (t) {if (t = t || window.event, !a._enterable) {var e = r.handler,n = r.painter.getViewportRoot();be(n, t, !0), e.dispatch("mousemove", t);}}, i.onmouseleave = function () {a._enterable && a._show && a.hideLater(a._hideDelay), a._inContent = !1;};}function Rf(t, e, n, i) {t[0] = n, t[1] = i, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();}function Nf(t) {var e = this._zr = t.getZr();this._styleCoord = [0, 0, 0, 0], Rf(this._styleCoord, e, t.getWidth() / 2, t.getHeight() / 2), this._show = !1, this._hideTimeout;}function Ff(t) {for (var e = t.pop(); t.length;) {var n = t.pop();n && (fa.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = { formatter: n }), e = new fa(n, e, e.ecModel));}return e;}function Hf(t, e) {return t.dispatchAction || y(e.dispatchAction, e);}function Vf(t, e, n, i, r, o, a) {var s = n.getOuterSize(),l = s.width,u = s.height;return null != o && (t + l + o > i ? t -= l + o : t += o), null != a && (e + u + a > r ? e -= u + a : e += a), [t, e];}function Gf(t, e, n, i, r) {var o = n.getOuterSize(),a = o.width,s = o.height;return t = Math.min(t + a, i) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];}function Wf(t, e, n) {var i = n[0],r = n[1],o = 5,a = 0,s = 0,l = e.width,u = e.height;switch (t) {case "inside":a = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;break;case "top":a = e.x + l / 2 - i / 2, s = e.y - r - o;break;case "bottom":a = e.x + l / 2 - i / 2, s = e.y + u + o;break;case "left":a = e.x - i - o, s = e.y + u / 2 - r / 2;break;case "right":a = e.x + l + o, s = e.y + u / 2 - r / 2;}return [a, s];}function Xf(t) {return "center" === t || "middle" === t;}var Yf;"undefined" != typeof window ? Yf = window.__DEV__ : "undefined" != typeof global && (Yf = global.__DEV__), "undefined" == typeof Yf && (Yf = !0);var Uf = Yf,jf = 2311,qf = function qf() {return jf++;},Zf = {};Zf = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? { browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0, domSupported: !1 } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1 } : e(navigator.userAgent);var Kf = Zf,$f = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },Qf = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },Jf = Object.prototype.toString,tp = Array.prototype,ep = tp.forEach,np = tp.filter,ip = tp.slice,rp = tp.map,op = tp.reduce,ap = {},sp = function sp() {return ap.createCanvas();};ap.createCanvas = function () {return document.createElement("canvas");};var lp,up = "__ec_primitive__";R.prototype = { constructor: R, get: function get(t) {return this.data.hasOwnProperty(t) ? this.data[t] : null;}, set: function set(t, e) {return this.data[t] = e;}, each: function each(t, e) {void 0 !== e && (t = y(t, e));for (var n in this.data) {this.data.hasOwnProperty(n) && t(this.data[n], n);}}, removeKey: function removeKey(t) {delete this.data[t];} };var hp = (Object.freeze || Object)({ $override: n, clone: i, merge: r, mergeAll: o, extend: a, defaults: s, createCanvas: sp, getContext: l, indexOf: u, inherits: h, mixin: c, isArrayLike: d, each: f, map: p, reduce: g, filter: v, find: m, bind: y, curry: _, isArray: x, isFunction: w, isString: b, isObject: S, isBuiltInObject: M, isTypedArray: I, isDom: C, eqNaN: T, retrieve: D, retrieve2: k, retrieve3: A, slice: P, normalizeCssArray: L, assert: O, trim: E, setAsPrimitive: B, isPrimitive: z, createHashMap: N, concatArray: F, noop: H }),cp = "undefined" == typeof Float32Array ? Array : Float32Array,dp = q,fp = Z,pp = ee,gp = ne,vp = (Object.freeze || Object)({ create: V, copy: G, clone: W, set: X, add: Y, scaleAndAdd: U, sub: j, len: q, length: dp, lenSquare: Z, lengthSquare: fp, mul: K, div: $, dot: Q, scale: J, normalize: te, distance: ee, dist: pp, distanceSquare: ne, distSquare: gp, negate: ie, lerp: re, applyTransform: oe, min: ae, max: se });le.prototype = { constructor: le, _dragStart: function _dragStart(t) {for (var e = t.target; e && !e.draggable;) {e = e.parent;}e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event));}, _drag: function _drag(t) {var e = this._draggingTarget;if (e) {var n = t.offsetX,i = t.offsetY,r = n - this._x,o = i - this._y;this._x = n, this._y = i, e.drift(r, o, t), this.dispatchToElement(ue(e, t), "drag", t.event);var a = this.findHover(n, i, e).target,s = this._dropTarget;this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), a && a !== s && this.dispatchToElement(ue(a, t), "dragenter", t.event));}}, _dragEnd: function _dragEnd(t) {var e = this._draggingTarget;e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;} };var mp = Array.prototype.slice,yp = function yp(t) {this._$handlers = {}, this._$eventProcessor = t;};yp.prototype = { constructor: yp, one: function one(t, e, n, i) {return ce(this, t, e, n, i, !0);}, on: function on(t, e, n, i) {return ce(this, t, e, n, i, !1);}, isSilent: function isSilent(t) {var e = this._$handlers;return !e[t] || !e[t].length;}, off: function off(t, e) {var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {if (n[t]) {for (var i = [], r = 0, o = n[t].length; o > r; r++) {n[t][r].h !== e && i.push(n[t][r]);}n[t] = i;}n[t] && 0 === n[t].length && delete n[t];} else delete n[t];return this;}, trigger: function trigger(t) {var e = this._$handlers[t],n = this._$eventProcessor;if (e) {var i = arguments,r = i.length;r > 3 && (i = mp.call(i, 1));for (var o = e.length, a = 0; o > a;) {var s = e[a];if (n && n.filter && null != s.query && !n.filter(t, s.query)) a++;else {switch (r) {case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx, i[1]);break;case 3:s.h.call(s.ctx, i[1], i[2]);break;default:s.h.apply(s.ctx, i);}s.one ? (e.splice(a, 1), o--) : a++;}}}return n && n.afterTrigger && n.afterTrigger(t), this;}, triggerWithContext: function triggerWithContext(t) {var e = this._$handlers[t],n = this._$eventProcessor;if (e) {var i = arguments,r = i.length;r > 4 && (i = mp.call(i, 1, i.length - 1));for (var o = i[i.length - 1], a = e.length, s = 0; a > s;) {var l = e[s];if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;else {switch (r) {case 1:l.h.call(o);break;case 2:l.h.call(o, i[1]);break;case 3:l.h.call(o, i[1], i[2]);break;default:l.h.apply(o, i);}l.one ? (e.splice(s, 1), a--) : s++;}}}return n && n.afterTrigger && n.afterTrigger(t), this;} };var _p = Math.log(2),xp = "___zrEVENTSAVED",wp = [],bp = "undefined" != typeof window && !!window.addEventListener,Sp = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,Mp = [],Ip = bp ? function (t) {t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;} : function (t) {t.returnValue = !1, t.cancelBubble = !0;},Cp = function Cp() {this._track = [];};Cp.prototype = { constructor: Cp, recognize: function recognize(t, e, n) {return this._doTrack(t, e, n), this._recognize(t);}, clear: function clear() {return this._track.length = 0, this;}, _doTrack: function _doTrack(t, e, n) {var i = t.touches;if (i) {for (var r = { points: [], touches: [], target: e, event: t }, o = 0, a = i.length; a > o; o++) {var s = i[o],l = _e(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);}this._track.push(r);}}, _recognize: function _recognize(t) {for (var e in Tp) {if (Tp.hasOwnProperty(e)) {var n = Tp[e](this._track, t);if (n) return n;}}} };var Tp = { pinch: function pinch(t, e) {var n = t.length;if (n) {var i = (t[n - 1] || {}).points,r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {var o = Ie(i) / Ie(r);!isFinite(o) && (o = 1), e.pinchScale = o;var a = Ce(i);return e.pinchX = a[0], e.pinchY = a[1], { type: "pinch", target: t[0].target, event: e };}}} },Dp = "silent";ke.prototype.dispose = function () {};var kp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],Ap = function Ap(t, e, n, i) {yp.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new ke(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, le.call(this), this.setHandlerProxy(n);};Ap.prototype = { constructor: Ap, setHandlerProxy: function setHandlerProxy(t) {this.proxy && this.proxy.dispose(), t && (f(kp, function (e) {t.on && t.on(e, this[e], this);}, this), t.handler = this), this.proxy = t;}, mousemove: function mousemove(t) {var e = t.zrX,n = t.zrY,i = Pe(this, e, n),r = this._hovered,o = r.target;o && !o.__zr && (r = this.findHover(r.x, r.y), o = r.target);var a = this._hovered = i ? { x: e, y: n } : this.findHover(e, n),s = a.target,l = this.proxy;l.setCursor && l.setCursor(s ? s.cursor : "default"), o && s !== o && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(a, "mousemove", t), s && s !== o && this.dispatchToElement(a, "mouseover", t);}, mouseout: function mouseout(t) {var e = t.zrEventControl,n = t.zrIsToLocalDOM;"only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !n && this.trigger("globalout", { type: "globalout", event: t });}, resize: function resize() {this._hovered = {};}, dispatch: function dispatch(t, e) {var n = this[t];n && n.call(this, e);}, dispose: function dispose() {this.proxy.dispose(), this.storage = this.proxy = this.painter = null;}, setCursorStyle: function setCursorStyle(t) {var e = this.proxy;e.setCursor && e.setCursor(t);}, dispatchToElement: function dispatchToElement(t, e, n) {t = t || {};var i = t.target;if (!i || !i.silent) {for (var r = "on" + e, o = Te(e, t, n); i && (i[r] && (o.cancelBubble = i[r].call(i, o)), i.trigger(e, o), i = i.parent, !o.cancelBubble);) {;}o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function (t) {"function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o);}));}}, findHover: function findHover(t, e, n) {for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, o = i.length - 1; o >= 0; o--) {var a;if (i[o] !== n && !i[o].ignore && (a = Ae(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), a !== Dp)) {r.target = i[o];break;}}return r;}, processGesture: function processGesture(t, e) {this._gestureMgr || (this._gestureMgr = new Cp());var n = this._gestureMgr;"start" === e && n.clear();var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);if ("end" === e && n.clear(), i) {var r = i.type;t.gestureEvent = r, this.dispatchToElement({ target: i.target }, r, i.event);}} }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {Ap.prototype[t] = function (e) {var n,i,r = e.zrX,o = e.zrY,a = Pe(this, r, o);if ("mouseup" === t && a || (n = this.findHover(r, o), i = n.target), "mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {if (this._downEl !== this._upEl || !this._downPoint || pp(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;}this.dispatchToElement(n, t, e);};}), c(Ap, yp), c(Ap, le);var Pp = "undefined" == typeof Float32Array ? Array : Float32Array,Lp = (Object.freeze || Object)({ create: Le, identity: Oe, copy: Ee, mul: Be, translate: ze, rotate: Re, scale: Ne, invert: Fe, clone: He }),Op = Oe,Ep = 5e-5,Bp = function Bp(t) {t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;},zp = Bp.prototype;zp.transform = null, zp.needLocalTransform = function () {return Ve(this.rotation) || Ve(this.position[0]) || Ve(this.position[1]) || Ve(this.scale[0] - 1) || Ve(this.scale[1] - 1);};var Rp = [];zp.updateTransform = function () {var t = this.parent,e = t && t.transform,n = this.needLocalTransform(),i = this.transform;if (!n && !e) return void (i && Op(i));i = i || Le(), n ? this.getLocalTransform(i) : Op(i), e && (n ? Be(i, t.transform, i) : Ee(i, t.transform)), this.transform = i;var r = this.globalScaleRatio;if (null != r && 1 !== r) {this.getGlobalScale(Rp);var o = Rp[0] < 0 ? -1 : 1,a = Rp[1] < 0 ? -1 : 1,s = ((Rp[0] - o) * r + o) / Rp[0] || 0,l = ((Rp[1] - a) * r + a) / Rp[1] || 0;i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;}this.invTransform = this.invTransform || Le(), Fe(this.invTransform, i);}, zp.getLocalTransform = function (t) {return Bp.getLocalTransform(this, t);}, zp.setTransform = function (t) {var e = this.transform,n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);}, zp.restoreTransform = function (t) {var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);};var Np = [],Fp = Le();zp.setLocalTransform = function (t) {if (t) {var e = t[0] * t[0] + t[1] * t[1],n = t[2] * t[2] + t[3] * t[3],i = this.position,r = this.scale;Ve(e - 1) && (e = Math.sqrt(e)), Ve(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);}}, zp.decomposeTransform = function () {if (this.transform) {var t = this.parent,e = this.transform;t && t.transform && (Be(Np, t.invTransform, e), e = Np);var n = this.origin;n && (n[0] || n[1]) && (Fp[4] = n[0], Fp[5] = n[1], Be(Np, e, Fp), Np[4] -= n[0], Np[5] -= n[1], e = Np), this.setLocalTransform(e);}}, zp.getGlobalScale = function (t) {var e = this.transform;return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);}, zp.transformCoordToLocal = function (t, e) {var n = [t, e],i = this.invTransform;return i && oe(n, n, i), n;}, zp.transformCoordToGlobal = function (t, e) {var n = [t, e],i = this.transform;return i && oe(n, n, i), n;}, Bp.getLocalTransform = function (t, e) {e = e || [], Op(e);var n = t.origin,i = t.scale || [1, 1],r = t.rotation || 0,o = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), Ne(e, e, i), r && Re(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += o[0], e[5] += o[1], e;
  };var Hp = { linear: function linear(t) {return t;}, quadraticIn: function quadraticIn(t) {return t * t;}, quadraticOut: function quadraticOut(t) {return t * (2 - t);}, quadraticInOut: function quadraticInOut(t) {return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);}, cubicIn: function cubicIn(t) {return t * t * t;}, cubicOut: function cubicOut(t) {return --t * t * t + 1;}, cubicInOut: function cubicInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);}, quarticIn: function quarticIn(t) {return t * t * t * t;}, quarticOut: function quarticOut(t) {return 1 - --t * t * t * t;}, quarticInOut: function quarticInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);}, quinticIn: function quinticIn(t) {return t * t * t * t * t;}, quinticOut: function quinticOut(t) {return --t * t * t * t * t + 1;}, quinticInOut: function quinticInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);}, sinusoidalIn: function sinusoidalIn(t) {return 1 - Math.cos(t * Math.PI / 2);}, sinusoidalOut: function sinusoidalOut(t) {return Math.sin(t * Math.PI / 2);}, sinusoidalInOut: function sinusoidalInOut(t) {return .5 * (1 - Math.cos(Math.PI * t));}, exponentialIn: function exponentialIn(t) {return 0 === t ? 0 : Math.pow(1024, t - 1);}, exponentialOut: function exponentialOut(t) {return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);}, exponentialInOut: function exponentialInOut(t) {return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);}, circularIn: function circularIn(t) {return 1 - Math.sqrt(1 - t * t);}, circularOut: function circularOut(t) {return Math.sqrt(1 - --t * t);}, circularInOut: function circularInOut(t) {return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);}, elasticIn: function elasticIn(t) {var e,n = .1,i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)));}, elasticOut: function elasticOut(t) {var e,n = .1,i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1);}, elasticInOut: function elasticInOut(t) {var e,n = .1,i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);}, backIn: function backIn(t) {var e = 1.70158;return t * t * ((e + 1) * t - e);}, backOut: function backOut(t) {var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;}, backInOut: function backInOut(t) {var e = 2.5949095;return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);}, bounceIn: function bounceIn(t) {return 1 - Hp.bounceOut(1 - t);}, bounceOut: function bounceOut(t) {return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;}, bounceInOut: function bounceInOut(t) {return .5 > t ? .5 * Hp.bounceIn(2 * t) : .5 * Hp.bounceOut(2 * t - 1) + .5;} };Ge.prototype = { constructor: Ge, step: function step(t, e) {if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);var n = (t - this._startTime - this._pausedTime) / this._life;if (!(0 > n)) {n = Math.min(n, 1);var i = this.easing,r = "string" == typeof i ? Hp[i] : i,o = "function" == typeof r ? r(n) : n;return this.fire("frame", o), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;}}, restart: function restart(t) {var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;}, fire: function fire(t, e) {t = "on" + t, this[t] && this[t](this._target, e);}, pause: function pause() {this._paused = !0;}, resume: function resume() {this._paused = !1;} };var Vp = function Vp() {this.head = null, this.tail = null, this._len = 0;},Gp = Vp.prototype;Gp.insert = function (t) {var e = new Wp(t);return this.insertEntry(e), e;}, Gp.insertEntry = function (t) {this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;}, Gp.remove = function (t) {var e = t.prev,n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;}, Gp.len = function () {return this._len;}, Gp.clear = function () {this.head = this.tail = null, this._len = 0;};var Wp = function Wp(t) {this.value = t, this.next, this.prev;},Xp = function Xp(t) {this._list = new Vp(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;},Yp = Xp.prototype;Yp.put = function (t, e) {var n = this._list,i = this._map,r = null;if (null == i[t]) {var o = n.len(),a = this._lastRemovedEntry;if (o >= this._maxSize && o > 0) {var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;}a ? a.value = e : a = new Wp(e), a.key = t, n.insertEntry(a), i[t] = a;}return r;}, Yp.get = function (t) {var e = this._map[t],n = this._list;return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;}, Yp.clear = function () {this._list.clear(), this._map = {};};var Up = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },jp = new Xp(20),qp = null,Zp = on,Kp = an,$p = (Object.freeze || Object)({ parse: Je, lift: nn, toHex: rn, fastLerp: on, fastMapToColor: Zp, lerp: an, mapToColor: Kp, modifyHSL: sn, modifyAlpha: ln, stringify: un }),Qp = Array.prototype.slice,Jp = function Jp(t, e, n, i) {this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || hn, this._setter = i || cn, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];};Jp.prototype = { when: function when(t, e) {var n = this._tracks;for (var i in e) {if (e.hasOwnProperty(i)) {if (!n[i]) {n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: _n(r) });}n[i].push({ time: t, value: e[i] });}}return this;}, during: function during(t) {return this._onframeList.push(t), this;}, pause: function pause() {for (var t = 0; t < this._clipList.length; t++) {this._clipList[t].pause();}this._paused = !0;}, resume: function resume() {for (var t = 0; t < this._clipList.length; t++) {this._clipList[t].resume();}this._paused = !1;}, isPaused: function isPaused() {return !!this._paused;}, _doneCallback: function _doneCallback() {this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; e > n; n++) {t[n].call(this);}}, start: function start(t, e) {var n,i = this,r = 0,o = function o() {r--, r || i._doneCallback();};for (var a in this._tracks) {if (this._tracks.hasOwnProperty(a)) {var s = bn(this, t, o, this._tracks[a], a, e);s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);}}if (n) {var l = n.onframe;n.onframe = function (t, e) {l(t, e);for (var n = 0; n < i._onframeList.length; n++) {i._onframeList[n](t, e);}};}return r || this._doneCallback(), this;}, stop: function stop(t) {for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);}e.length = 0;}, delay: function delay(t) {return this._delay = t, this;}, done: function done(t) {return t && this._doneList.push(t), this;}, getClips: function getClips() {return this._clipList;} };var tg = 1;"undefined" != typeof window && (tg = Math.max(window.devicePixelRatio || 1, 1));var eg = 0,ng = tg,ig = function ig() {};1 === eg && (ig = console.error);var rg = ig,og = function og() {this.animators = [];};og.prototype = { constructor: og, animate: function animate(t, e) {var n,i = !1,r = this,o = this.__zr;if (t) {var a = t.split("."),s = r;i = "shape" === a[0];for (var l = 0, h = a.length; h > l; l++) {s && (s = s[a[l]]);}s && (n = s);} else n = r;if (!n) return void rg('Property "' + t + '" is not existed in element ' + r.id);var c = r.animators,d = new Jp(n, e);return d.during(function () {r.dirty(i);}).done(function () {c.splice(u(c, d), 1);}), c.push(d), o && o.animation.addAnimator(d), d;}, stopAnimation: function stopAnimation(t) {for (var e = this.animators, n = e.length, i = 0; n > i; i++) {e[i].stop(t);}return e.length = 0, this;}, animateTo: function animateTo(t, e, n, i, r, o) {Sn(this, t, e, n, i, r, o);}, animateFrom: function animateFrom(t, e, n, i, r, o) {Sn(this, t, e, n, i, r, o, !0);} };var ag = function ag(t) {Bp.call(this, t), yp.call(this, t), og.call(this, t), this.id = t.id || qf();};ag.prototype = { type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function drift(t, e) {switch (this.draggable) {case "horizontal":e = 0;break;case "vertical":t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1);}, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {this.updateTransform();}, traverse: function traverse() {}, attrKV: function attrKV(t, e) {if ("position" === t || "scale" === t || "origin" === t) {if (e) {var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];}} else this[t] = e;}, hide: function hide() {this.ignore = !0, this.__zr && this.__zr.refresh();}, show: function show() {this.ignore = !1, this.__zr && this.__zr.refresh();}, attr: function attr(t, e) {if ("string" == typeof t) this.attrKV(t, e);else if (S(t)) for (var n in t) {t.hasOwnProperty(n) && this.attrKV(n, t[n]);}return this.dirty(!1), this;}, setClipPath: function setClipPath(t) {var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);}, removeClipPath: function removeClipPath() {var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));}, addSelfToZr: function addSelfToZr(t) {this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {t.animation.addAnimator(e[n]);}this.clipPath && this.clipPath.addSelfToZr(t);}, removeSelfFromZr: function removeSelfFromZr(t) {this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {t.animation.removeAnimator(e[n]);}this.clipPath && this.clipPath.removeSelfFromZr(t);} }, c(ag, og), c(ag, Bp), c(ag, yp);var sg = oe,lg = Math.min,ug = Math.max;Cn.prototype = { constructor: Cn, union: function union(t) {var e = lg(t.x, this.x),n = lg(t.y, this.y);this.width = ug(t.x + t.width, this.x + this.width) - e, this.height = ug(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;}, applyTransform: function () {var t = [],e = [],n = [],i = [];return function (r) {if (r) {t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, sg(t, t, r), sg(e, e, r), sg(n, n, r), sg(i, i, r), this.x = lg(t[0], e[0], n[0], i[0]), this.y = lg(t[1], e[1], n[1], i[1]);var o = ug(t[0], e[0], n[0], i[0]),a = ug(t[1], e[1], n[1], i[1]);this.width = o - this.x, this.height = a - this.y;}};}(), calculateTransform: function calculateTransform(t) {var e = this,n = t.width / e.width,i = t.height / e.height,r = Le();return ze(r, r, [-e.x, -e.y]), Ne(r, r, [n, i]), ze(r, r, [t.x, t.y]), r;}, intersect: function intersect(t) {if (!t) return !1;t instanceof Cn || (t = Cn.create(t));var e = this,n = e.x,i = e.x + e.width,r = e.y,o = e.y + e.height,a = t.x,s = t.x + t.width,l = t.y,u = t.y + t.height;return !(a > i || n > s || l > o || r > u);}, contain: function contain(t, e) {var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;}, clone: function clone() {return new Cn(this.x, this.y, this.width, this.height);}, copy: function copy(t) {this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;}, plain: function plain() {return { x: this.x, y: this.y, width: this.width, height: this.height };} }, Cn.create = function (t) {return new Cn(t.x, t.y, t.width, t.height);};var hg = function hg(t) {t = t || {}, ag.call(this, t);for (var e in t) {t.hasOwnProperty(e) && (this[e] = t[e]);}this._children = [], this.__storage = null, this.__dirty = !0;};hg.prototype = { constructor: hg, isGroup: !0, type: "group", silent: !1, children: function children() {return this._children.slice();}, childAt: function childAt(t) {return this._children[t];}, childOfName: function childOfName(t) {for (var e = this._children, n = 0; n < e.length; n++) {if (e[n].name === t) return e[n];}}, childCount: function childCount() {return this._children.length;}, add: function add(t) {return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;}, addBefore: function addBefore(t, e) {if (t && t !== this && t.parent !== this && e && e.parent === this) {var n = this._children,i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));}return this;}, _doAdd: function _doAdd(t) {t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof hg && t.addChildrenToStorage(e)), n && n.refresh();}, remove: function remove(t) {var e = this.__zr,n = this.__storage,i = this._children,r = u(i, t);return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof hg && t.delChildrenFromStorage(n)), e && e.refresh(), this);}, removeAll: function removeAll() {var t,e,n = this._children,i = this.__storage;for (e = 0; e < n.length; e++) {t = n[e], i && (i.delFromStorage(t), t instanceof hg && t.delChildrenFromStorage(i)), t.parent = null;}return n.length = 0, this;}, eachChild: function eachChild(t, e) {for (var n = this._children, i = 0; i < n.length; i++) {var r = n[i];t.call(e, r, i);}return this;}, traverse: function traverse(t, e) {for (var n = 0; n < this._children.length; n++) {var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);}return this;}, addChildrenToStorage: function addChildrenToStorage(t) {for (var e = 0; e < this._children.length; e++) {var n = this._children[e];t.addToStorage(n), n instanceof hg && n.addChildrenToStorage(t);}}, delChildrenFromStorage: function delChildrenFromStorage(t) {for (var e = 0; e < this._children.length; e++) {var n = this._children[e];t.delFromStorage(n), n instanceof hg && n.delChildrenFromStorage(t);}}, dirty: function dirty() {return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;}, getBoundingRect: function getBoundingRect(t) {for (var e = null, n = new Cn(0, 0, 0, 0), i = t || this._children, r = [], o = 0; o < i.length; o++) {var a = i[o];if (!a.ignore && !a.invisible) {var s = a.getBoundingRect(),l = a.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));}}return e || n;} }, h(hg, ag);var cg = 32,dg = 7,fg = function fg() {this._roots = [], this._displayList = [], this._displayListLen = 0;};fg.prototype = { constructor: fg, traverse: function traverse(t, e) {for (var n = 0; n < this._roots.length; n++) {this._roots[n].traverse(t, e);}}, getDisplayList: function getDisplayList(t, e) {return e = e || !1, t && this.updateDisplayList(e), this._displayList;}, updateDisplayList: function updateDisplayList(t) {this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) {this._updateAndAddDisplayable(e[i], null, t);}n.length = this._displayListLen, Kf.canvasSupported && En(n, Bn);}, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {if (!t.ignore || n) {t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {e = e ? e.slice() : [];for (var r = i, o = t; r;) {r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.clipPath;}}if (t.isGroup) {for (var a = t._children, s = 0; s < a.length; s++) {var l = a[s];t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);}t.__dirty = !1;} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;}}, addRoot: function addRoot(t) {t.__storage !== this && (t instanceof hg && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));}, delRoot: function delRoot(t) {if (null == t) {for (var e = 0; e < this._roots.length; e++) {var n = this._roots[e];n instanceof hg && n.delChildrenFromStorage(this);}return this._roots = [], this._displayList = [], void (this._displayListLen = 0);}if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) {this.delRoot(t[e]);} else {var r = u(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof hg && t.delChildrenFromStorage(this));}}, addToStorage: function addToStorage(t) {return t && (t.__storage = this, t.dirty(!1)), this;}, delFromStorage: function delFromStorage(t) {return t && (t.__storage = null), this;}, dispose: function dispose() {this._renderList = this._roots = null;}, displayableSortFunc: Bn };var pg = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },gg = function gg(t, e, n) {return pg.hasOwnProperty(e) ? n *= t.dpr : n;},vg = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 },mg = 9,yg = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],_g = function _g(t) {this.extendFrom(t, !1);};_g.prototype = { constructor: _g, fill: "#000", stroke: null, opacity: 1, fillOpacity: null, strokeOpacity: null, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: !1, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: !1, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function bind(t, e, n) {var i = this,r = n && n.style,o = !r || t.__attrCachedBy !== vg.STYLE_BIND;t.__attrCachedBy = vg.STYLE_BIND;for (var a = 0; a < yg.length; a++) {var s = yg[a],l = s[0];(o || i[l] !== r[l]) && (t[l] = gg(t, l, i[l] || s[1]));}if ((o || i.fill !== r.fill) && (t.fillStyle = i.fill), (o || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (o || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (o || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {var u = i.lineWidth;t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);}}, hasFill: function hasFill() {var t = this.fill;return null != t && "none" !== t;}, hasStroke: function hasStroke() {var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;}, extendFrom: function extendFrom(t, e) {if (t) for (var n in t) {!t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);}}, set: function set(t, e) {"string" == typeof t ? this[t] = e : this.extendFrom(t, !0);}, clone: function clone() {var t = new this.constructor();return t.extendFrom(this, !0), t;}, getGradient: function getGradient(t, e, n) {for (var i = "radial" === e.type ? Rn : zn, r = i(t, e, n), o = e.colorStops, a = 0; a < o.length; a++) {r.addColorStop(o[a].offset, o[a].color);}return r;} };for (var xg = _g.prototype, wg = 0; wg < yg.length; wg++) {var bg = yg[wg];bg[0] in xg || (xg[bg[0]] = bg[1]);}_g.getGradient = xg.getGradient;var Sg = function Sg(t, e) {this.image = t, this.repeat = e, this.type = "pattern";};Sg.prototype.getCanvasPattern = function (t) {return t.createPattern(this.image, this.repeat || "repeat");};var Mg = function Mg(t, e, n) {var i;n = n || ng, "string" == typeof t ? i = Fn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = Nn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n;};Mg.prototype = { constructor: Mg, __dirty: !0, __used: !1, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: !1, getElementCount: function getElementCount() {return this.__endIndex - this.__startIndex;}, initContext: function initContext() {this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;}, createBackBuffer: function createBackBuffer() {var t = this.dpr;this.domBack = Fn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t);}, resize: function resize(t, e) {var n = this.dpr,i = this.dom,r = i.style,o = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n));}, clear: function clear(t, e) {var n = this.dom,i = this.ctx,r = n.width,o = n.height,e = e || this.clearColor,a = this.motionBlur && !t,s = this.lastFrameAlpha,l = this.dpr;if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, o / l)), i.clearRect(0, 0, r, o), e && "transparent" !== e) {var u;e.colorStops ? (u = e.__canvasGradient || _g.getGradient(i, e, { x: 0, y: 0, width: r, height: o }), e.__canvasGradient = u) : e.image && (u = Sg.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, o), i.restore();}if (a) {var h = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, o), i.restore();}} };var Ig = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {setTimeout(t, 16);},Cg = new Xp(50),Tg = {},Dg = 0,kg = 5e3,Ag = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Pg = "12px sans-serif",Lg = {};Lg.measureText = function (t, e) {var n = l();return n.font = e || Pg, n.measureText(t);};var Og = Pg,Eg = { left: 1, right: 1, center: 1 },Bg = { top: 1, bottom: 1, middle: 1 },zg = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],Rg = {},Ng = {},Fg = new Cn(),Hg = function Hg() {};Hg.prototype = { constructor: Hg, drawRectText: function drawRectText(t, e) {var n = this.style;e = n.textRect || e, this.__dirty && li(n, !0);var i = n.text;if (null != i && (i += ""), Ii(i, n)) {t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (Fg.copy(e), Fg.applyTransform(r), e = Fg), hi(this, t, i, n, e, mg), t.restore();}} }, Ci.prototype = { constructor: Ci, type: "displayable", __dirty: !0, invisible: !1, z: 0, z2: 0, zlevel: 0, draggable: !1, dragging: !1, silent: !1, culling: !1, cursor: "pointer", rectHover: !1, progressive: !1, incremental: !1, globalScaleRatio: 1, beforeBrush: function beforeBrush() {}, afterBrush: function afterBrush() {}, brush: function brush() {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {return this.rectContain(t, e);}, traverse: function traverse(t, e) {t.call(e, this);}, rectContain: function rectContain(t, e) {var n = this.transformCoordToLocal(t, e),i = this.getBoundingRect();return i.contain(n[0], n[1]);}, dirty: function dirty() {this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();}, animateStyle: function animateStyle(t) {return this.animate("style", t);}, attrKV: function attrKV(t, e) {"style" !== t ? ag.prototype.attrKV.call(this, t, e) : this.style.set(e);}, setStyle: function setStyle(t, e) {return this.style.set(t, e), this.dirty(!1), this;}, useStyle: function useStyle(t) {return this.style = new _g(t, this), this.dirty(!1), this;}, calculateTextPosition: null }, h(Ci, ag), c(Ci, Hg), Ti.prototype = { constructor: Ti, type: "image", brush: function brush(t, e) {var n = this.style,i = n.image;n.bind(t, this, e);var r = this._image = Vn(i, this._image, this, this.onload);if (r && Wn(r)) {var o = n.x || 0,a = n.y || 0,s = n.width,l = n.height,u = r.width / r.height;if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {var h = n.sx || 0,c = n.sy || 0;t.drawImage(r, h, c, n.sWidth, n.sHeight, o, a, s, l);} else if (n.sx && n.sy) {var h = n.sx,c = n.sy,d = s - h,f = l - c;t.drawImage(r, h, c, d, f, o, a, s, l);} else t.drawImage(r, o, a, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));}}, getBoundingRect: function getBoundingRect() {var t = this.style;return this._rect || (this._rect = new Cn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;} }, h(Ti, Ci);var Vg = 1e5,Gg = 314159,Wg = .01,Xg = .001,Yg = new Cn(0, 0, 0, 0),Ug = new Cn(0, 0, 0, 0),jg = function jg(t, e, n) {this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = a({}, n || {}), this.dpr = n.devicePixelRatio || ng, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var o = this._zlevelList = [],s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {var l = t.width,u = t.height;null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;var h = new Mg(t, this, this.dpr);h.__builtin__ = !0, h.initContext(), s[Gg] = h, h.zlevel = Gg, o.push(Gg), this._domRoot = t;} else {this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = Oi(this._width, this._height);t.appendChild(c);}this._hoverlayer = null, this._hoverElements = [];};jg.prototype = { constructor: jg, getType: function getType() {return "canvas";}, isSingleCanvas: function isSingleCanvas() {return this._singleCanvas;}, getViewportRoot: function getViewportRoot() {return this._domRoot;}, getViewportRootOffset: function getViewportRootOffset() {var t = this.getViewportRoot();return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : void 0;}, refresh: function refresh(t) {var e = this.storage.getDisplayList(!0),n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {var r = n[i],o = this._layers[r];if (!o.__builtin__ && o.refresh) {var a = 0 === i ? this._backgroundColor : null;o.refresh(a);}}return this.refreshHover(), this;}, addHover: function addHover(t, e) {if (!t.__hoverMir) {var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n;}}, removeHover: function removeHover(t) {var e = t.__hoverMir,n = this._hoverElements,i = u(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;}, clearHover: function clearHover() {for (var t = this._hoverElements, e = 0; e < t.length; e++) {var n = t[e].__from;n && (n.__hoverMir = null);}t.length = 0;}, refreshHover: function refreshHover() {var t = this._hoverElements,e = t.length,n = this._hoverlayer;if (n && n.clear(), e) {En(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(Vg));var i = {};n.ctx.save();for (var r = 0; e > r;) {var o = t[r],a = o.__from;a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, o.__clipPaths = a.__clipPaths, this._doPaintEl(o, n, !0, i))) : (t.splice(r, 1), a.__hoverMir = null, e--);}n.ctx.restore();}}, getHoverLayer: function getHoverLayer() {return this.getLayer(Vg);}, _paintList: function _paintList(t, e, n) {if (this._redrawId === n) {e = e || !1, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {var r = this;Ig(function () {r._paintList(t, e, n);});}}}, _compositeManually: function _compositeManually() {var t = this.getLayer(Gg).ctx,e = this._domRoot.width,n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {i.virtual && t.drawImage(i.dom, 0, 0, e, n);});}, _doPaintList: function _doPaintList(t, e) {for (var n = [], i = 0; i < this._zlevelList.length; i++) {var r = this._zlevelList[i],o = this._layers[r];o.__builtin__ && o !== this._hoverlayer && (o.__dirty || e) && n.push(o);}for (var a = !0, s = 0; s < n.length; s++) {var o = n[s],l = o.ctx,u = {};l.save();var h = e ? o.__startIndex : o.__drawIndex,c = !e && o.incremental && Date.now,d = c && Date.now(),p = o.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (o.__startIndex === o.__endIndex) o.clear(!1, p);else if (h === o.__startIndex) {var g = t[h];g.incremental && g.notClear && !e || o.clear(!1, p);}-1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = o.__startIndex);for (var v = h; v < o.__endIndex; v++) {var m = t[v];if (this._doPaintEl(m, o, e, u), m.__dirty = m.__dirtyText = !1, c) {var y = Date.now() - d;if (y > 15) break;}}o.__drawIndex = v, o.__drawIndex < o.__endIndex && (a = !1), u.prevElClipPaths && l.restore(), l.restore();}return Kf.wxa && f(this._layers, function (t) {t && t.ctx && t.ctx.draw && t.ctx.draw();}), a;}, _doPaintEl: function _doPaintEl(t, e, n, i) {var r = e.ctx,o = t.transform;if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || o && !o[0] && !o[3] || t.culling && Ai(t, this._width, this._height))) {var a = t.__clipPaths,s = i.prevElClipPaths;(!s || Pi(a, s)) && (s && (r.restore(), i.prevElClipPaths = null, i.prevEl = null), a && (r.save(), Li(a, r), i.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);}}, getLayer: function getLayer(t, e) {this._singleCanvas && !this._needsManuallyCompositing && (t = Gg);var n = this._layers[t];return n || (n = new Mg("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? r(n, this._layerConfig[t], !0) : this._layerConfig[t - Wg] && r(n, this._layerConfig[t - Wg], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;}, insertLayer: function insertLayer(t, e) {var n = this._layers,i = this._zlevelList,r = i.length,o = null,a = -1,s = this._domRoot;if (n[t]) return void rg("ZLevel " + t + " has been used already");if (!ki(e)) return void rg("Layer of zlevel " + t + " is not valid");if (r > 0 && t > i[0]) {for (a = 0; r - 1 > a && !(i[a] < t && i[a + 1] > t); a++) {;}o = n[i[a]];}if (i.splice(a + 1, 0, t), n[t] = e, !e.virtual) if (o) {var l = o.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);}, eachLayer: function eachLayer(t, e) {var n,i,r = this._zlevelList;for (i = 0; i < r.length; i++) {n = r[i], t.call(e, this._layers[n], n);}}, eachBuiltinLayer: function eachBuiltinLayer(t, e) {var n,i,r,o = this._zlevelList;for (r = 0; r < o.length; r++) {i = o[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);}}, eachOtherLayer: function eachOtherLayer(t, e) {var n,i,r,o = this._zlevelList;for (r = 0; r < o.length; r++) {i = o[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);}}, getLayers: function getLayers() {return this._layers;}, _updateLayerStatus: function _updateLayerStatus(t) {function e(t) {o && (o.__endIndex !== t && (o.__dirty = !0), o.__endIndex = t);}if (this.eachBuiltinLayer(function (t) {t.__dirty = t.__used = !1;}), this._singleCanvas) for (var n = 1; n < t.length; n++) {var i = t[n];if (i.zlevel !== t[n - 1].zlevel || i.incremental) {this._needsManuallyCompositing = !0;break;}}for (var r, o = null, a = 0, n = 0; n < t.length; n++) {var s,i = t[n],l = i.zlevel;r !== l && (r = l, a = 0), i.incremental ? (s = this.getLayer(l + Xg, this._needsManuallyCompositing), s.incremental = !0, a = 1) : s = this.getLayer(l + (a > 0 ? Wg : 0), this._needsManuallyCompositing), s.__builtin__ || rg("ZLevel " + l + " has been used by unkown layer " + s.id), s !== o && (s.__used = !0, s.__startIndex !== n && (s.__dirty = !0), s.__startIndex = n, s.__drawIndex = s.incremental ? -1 : n, e(n), o = s), i.__dirty && (s.__dirty = !0, s.incremental && s.__drawIndex < 0 && (s.__drawIndex = n));}e(n), this.eachBuiltinLayer(function (t) {!t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);});}, clear: function clear() {return this.eachBuiltinLayer(this._clearLayer), this;}, _clearLayer: function _clearLayer(t) {t.clear();}, setBackgroundColor: function setBackgroundColor(t) {this._backgroundColor = t;}, configLayer: function configLayer(t, e) {if (e) {var n = this._layerConfig;n[t] ? r(n[t], e, !0) : n[t] = e;for (var i = 0; i < this._zlevelList.length; i++) {var o = this._zlevelList[i];if (o === t || o === t + Wg) {var a = this._layers[o];r(a, n[t], !0);}}}}, delLayer: function delLayer(t) {var e = this._layers,n = this._zlevelList,i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1));}, resize: function resize(t, e) {if (this._domRoot.style) {var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {n.style.width = t + "px", n.style.height = e + "px";
          for (var r in this._layers) {this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);}f(this._progressiveLayers, function (n) {n.resize(t, e);}), this.refresh(!0);}this._width = t, this._height = e;} else {if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(Gg).resize(t, e);}return this;}, clearLayer: function clearLayer(t) {var e = this._layers[t];e && e.clear();}, dispose: function dispose() {this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;}, getRenderedCanvas: function getRenderedCanvas(t) {if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Gg].dom;var e = new Mg("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {this.refresh();var n = e.dom.width,i = e.dom.height,r = e.ctx;this.eachLayer(function (t) {t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());});} else for (var o = {}, a = this.storage.getDisplayList(!0), s = 0; s < a.length; s++) {var l = a[s];this._doPaintEl(l, e, !0, o);}return e.dom;}, getWidth: function getWidth() {return this._width;}, getHeight: function getHeight() {return this._height;}, _getSize: function _getSize(t) {var e = this._opts,n = ["width", "height"][t],i = ["clientWidth", "clientHeight"][t],r = ["paddingLeft", "paddingTop"][t],o = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var a = this.root,s = document.defaultView.getComputedStyle(a);return (a[i] || Di(s[n]) || Di(a.style[n])) - (Di(s[r]) || 0) - (Di(s[o]) || 0) | 0;}, pathToImage: function pathToImage(t, e) {e = e || this.dpr;var n = document.createElement("canvas"),i = n.getContext("2d"),r = t.getBoundingRect(),o = t.style,a = o.shadowBlur * e,s = o.shadowOffsetX * e,l = o.shadowOffsetY * e,u = o.hasStroke() ? o.lineWidth : 0,h = Math.max(u / 2, -s + a),c = Math.max(u / 2, s + a),d = Math.max(u / 2, -l + a),f = Math.max(u / 2, l + a),p = r.width + h + c,g = r.height + d + f;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var v = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var m = Ti,y = new m({ style: { x: 0, y: 0, image: n } });return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;} };var qg = function qg(t) {t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, yp.call(this);};qg.prototype = { constructor: qg, addClip: function addClip(t) {this._clips.push(t);}, addAnimator: function addAnimator(t) {t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) {this.addClip(e[n]);}}, removeClip: function removeClip(t) {var e = u(this._clips, t);e >= 0 && this._clips.splice(e, 1);}, removeAnimator: function removeAnimator(t) {for (var e = t.getClips(), n = 0; n < e.length; n++) {this.removeClip(e[n]);}t.animation = null;}, _update: function _update() {for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], o = [], a = 0; i > a; a++) {var s = n[a],l = s.step(t, e);l && (r.push(l), o.push(s));}for (var a = 0; i > a;) {n[a]._needsRemove ? (n[a] = n[i - 1], n.pop(), i--) : a++;}i = r.length;for (var a = 0; i > a; a++) {o[a].fire(r[a]);}this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();}, _startLoop: function _startLoop() {function t() {e._running && (Ig(t), !e._paused && e._update());}var e = this;this._running = !0, Ig(t);}, start: function start() {this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();}, stop: function stop() {this._running = !1;}, pause: function pause() {this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);}, resume: function resume() {this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);}, clear: function clear() {this._clips = [];}, isFinished: function isFinished() {return !this._clips.length;}, animate: function animate(t, e) {e = e || {};var n = new Jp(t, e.loop, e.getter, e.setter);return this.addAnimator(n), n;} }, c(qg, yp);var Zg = 300,Kg = Kf.domSupported,$g = function () {var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],e = ["touchstart", "touchend", "touchmove"],n = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },i = p(t, function (t) {var e = t.replace("mouse", "pointer");return n.hasOwnProperty(e) ? e : t;});return { mouse: t, touch: e, pointer: i };}(),Qg = { mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"] },Jg = Hi.prototype;Jg.stopPropagation = Jg.stopImmediatePropagation = Jg.preventDefault = H;var tv = { mousedown: function mousedown(t) {t = be(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t);}, mousemove: function mousemove(t) {t = be(this.dom, t);var e = this._mayPointerCapture;!e || t.zrX === e[0] && t.zrY === e[1] || Yi(this, !0), this.trigger("mousemove", t);}, mouseup: function mouseup(t) {t = be(this.dom, t), Yi(this, !1), this.trigger("mouseup", t);}, mouseout: function mouseout(t) {t = be(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");var e = t.toElement || t.relatedTarget;t.zrIsToLocalDOM = Fi(this, e), this.trigger("mouseout", t);}, touchstart: function touchstart(t) {t = be(this.dom, t), Ri(t), this._lastTouchMoment = new Date(), this.handler.processGesture(t, "start"), tv.mousemove.call(this, t), tv.mousedown.call(this, t);}, touchmove: function touchmove(t) {t = be(this.dom, t), Ri(t), this.handler.processGesture(t, "change"), tv.mousemove.call(this, t);}, touchend: function touchend(t) {t = be(this.dom, t), Ri(t), this.handler.processGesture(t, "end"), tv.mouseup.call(this, t), +new Date() - this._lastTouchMoment < Zg && tv.click.call(this, t);}, pointerdown: function pointerdown(t) {tv.mousedown.call(this, t);}, pointermove: function pointermove(t) {Bi(t) || tv.mousemove.call(this, t);}, pointerup: function pointerup(t) {tv.mouseup.call(this, t);}, pointerout: function pointerout(t) {Bi(t) || tv.mouseout.call(this, t);} };f(["click", "mousewheel", "dblclick", "contextmenu"], function (t) {tv[t] = function (e) {e = be(this.dom, e), this.trigger(t, e);};});var ev = { pointermove: function pointermove(t) {Bi(t) || ev.mousemove.call(this, t);}, pointerup: function pointerup(t) {ev.mouseup.call(this, t);}, mousemove: function mousemove(t) {this.trigger("mousemove", t);}, mouseup: function mouseup(t) {var e = this._pointerCapturing;Yi(this, !1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));} },nv = ji.prototype;nv.dispose = function () {Xi(this._localHandlerScope), Kg && Xi(this._globalHandlerScope);}, nv.setCursor = function (t) {this.dom.style && (this.dom.style.cursor = t || "default");}, c(ji, yp);var iv = !Kf.canvasSupported,rv = { canvas: jg },ov = {},av = "4.3.2",sv = function sv(t, e, n) {n = n || {}, this.dom = e, this.id = t;var i = this,r = new fg(),o = n.renderer;if (iv) {if (!rv.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");o = "vml";} else o && rv[o] || (o = "canvas");var a = new rv[o](e, r, n, t);this.storage = r, this.painter = a;var s = Kf.node || Kf.worker ? null : new ji(a.getViewportRoot(), a.root);this.handler = new Ap(r, a, s, a.root), this.animation = new qg({ stage: { update: y(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,u = r.addToStorage;r.delFromStorage = function (t) {l.call(r, t), t && t.removeSelfFromZr(i);}, r.addToStorage = function (t) {u.call(r, t), t.addSelfToZr(i);};};sv.prototype = { constructor: sv, getId: function getId() {return this.id;}, add: function add(t) {this.storage.addRoot(t), this._needsRefresh = !0;}, remove: function remove(t) {this.storage.delRoot(t), this._needsRefresh = !0;}, configLayer: function configLayer(t, e) {this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;}, setBackgroundColor: function setBackgroundColor(t) {this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;}, refreshImmediately: function refreshImmediately() {this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1;}, refresh: function refresh() {this._needsRefresh = !0;}, flush: function flush() {var t;this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");}, addHover: function addHover(t, e) {if (this.painter.addHover) {var n = this.painter.addHover(t, e);return this.refreshHover(), n;}}, removeHover: function removeHover(t) {this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());}, clearHover: function clearHover() {this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());}, refreshHover: function refreshHover() {this._needsRefreshHover = !0;}, refreshHoverImmediately: function refreshHoverImmediately() {this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();}, resize: function resize(t) {t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();}, clearAnimation: function clearAnimation() {this.animation.clear();}, getWidth: function getWidth() {return this.painter.getWidth();}, getHeight: function getHeight() {return this.painter.getHeight();}, pathToImage: function pathToImage(t, e) {return this.painter.pathToImage(t, e);}, setCursorStyle: function setCursorStyle(t) {this.handler.setCursorStyle(t);}, findHover: function findHover(t, e) {return this.handler.findHover(t, e);}, on: function on(t, e, n) {this.handler.on(t, e, n);}, off: function off(t, e) {this.handler.off(t, e);}, trigger: function trigger(t, e) {this.handler.trigger(t, e);}, clear: function clear() {this.storage.delRoot(), this.painter.clear();}, dispose: function dispose() {this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Qi(this.id);} };var lv = (Object.freeze || Object)({ version: av, init: qi, dispose: Zi, getInstance: Ki, registerPainter: $i }),uv = f,hv = S,cv = x,dv = "series\x00",fv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],pv = 0,gv = ".",vv = "___EC__COMPONENT__CONTAINER___",mv = 0,yv = function yv(t) {for (var e = 0; e < t.length; e++) {t[e][1] || (t[e][1] = t[e][0]);}return function (e, n, i) {for (var r = {}, o = 0; o < t.length; o++) {var a = t[o][1];if (!(n && u(n, a) >= 0 || i && u(i, a) < 0)) {var s = e.getShallow(a);null != s && (r[t[o][0]] = s);}}return r;};},_v = yv([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),xv = { getLineStyle: function getLineStyle(t) {var e = _v(this, t);return e.lineDash = this.getLineDash(e.lineWidth), e;}, getLineDash: function getLineDash(t) {null == t && (t = 1);var e = this.get("type"),n = Math.max(t, 2),i = 4 * t;return "solid" === e || null == e ? !1 : "dashed" === e ? [i, i] : [n, n];} },wv = yv([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),bv = { getAreaStyle: function getAreaStyle(t, e) {return wv(this, t, e);} },Sv = Math.pow,Mv = Math.sqrt,Iv = 1e-8,Cv = 1e-4,Tv = Mv(3),Dv = 1 / 3,kv = V(),Av = V(),Pv = V(),Lv = Math.min,Ov = Math.max,Ev = Math.sin,Bv = Math.cos,zv = 2 * Math.PI,Rv = V(),Nv = V(),Fv = V(),Hv = [],Vv = [],Gv = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },Wv = [],Xv = [],Yv = [],Uv = [],jv = Math.min,qv = Math.max,Zv = Math.cos,Kv = Math.sin,$v = Math.sqrt,Qv = Math.abs,Jv = "undefined" != typeof Float32Array,tm = function tm(t) {this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;};tm.prototype = { constructor: tm, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e, n) {n = n || 0, this._ux = Qv(n / ng / t) || 0, this._uy = Qv(n / ng / e) || 0;}, getContext: function getContext() {return this._ctx;}, beginPath: function beginPath(t) {return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;}, moveTo: function moveTo(t, e) {return this.addData(Gv.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;}, lineTo: function lineTo(t, e) {var n = Qv(t - this._xi) > this._ux || Qv(e - this._yi) > this._uy || this._len < 5;return this.addData(Gv.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;}, bezierCurveTo: function bezierCurveTo(t, e, n, i, r, o) {return this.addData(Gv.C, t, e, n, i, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)), this._xi = r, this._yi = o, this;}, quadraticCurveTo: function quadraticCurveTo(t, e, n, i) {return this.addData(Gv.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;}, arc: function arc(t, e, n, i, r, o) {return this.addData(Gv.A, t, e, n, n, i, r - i, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), this._xi = Zv(r) * n + t, this._yi = Kv(r) * n + e, this;}, arcTo: function arcTo(t, e, n, i, r) {return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;}, rect: function rect(t, e, n, i) {return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Gv.R, t, e, n, i), this;}, closePath: function closePath() {this.addData(Gv.Z);var t = this._ctx,e = this._x0,n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;}, fill: function fill(t) {t && t.fill(), this.toStatic();}, stroke: function stroke(t) {t && t.stroke(), this.toStatic();}, setLineDash: function setLineDash(t) {if (t instanceof Array) {this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) {e += t[n];}this._dashSum = e;}return this;}, setLineDashOffset: function setLineDashOffset(t) {return this._dashOffset = t, this;}, len: function len() {return this._len;}, setData: function setData(t) {var e = t.length;this.data && this.data.length === e || !Jv || (this.data = new Float32Array(e));for (var n = 0; e > n; n++) {this.data[n] = t[n];}this._len = e;}, appendPath: function appendPath(t) {t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) {n += t[r].len();}Jv && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (var r = 0; e > r; r++) {for (var o = t[r].data, a = 0; a < o.length; a++) {this.data[i++] = o[a];}}this._len = i;}, addData: function addData(t) {if (this._saveData) {var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) {e[this._len++] = arguments[n];}this._prevCmd = t;}}, _expandData: function _expandData() {if (!(this.data instanceof Array)) {for (var t = [], e = 0; e < this._len; e++) {t[e] = this.data[e];}this.data = t;}}, _needsDash: function _needsDash() {return this._lineDash;}, _dashedLineTo: function _dashedLineTo(t, e) {var n,i,r = this._dashSum,o = this._dashOffset,a = this._lineDash,s = this._ctx,l = this._xi,u = this._yi,h = t - l,c = e - u,d = $v(h * h + c * c),f = l,p = u,g = a.length;for (h /= d, c /= d, 0 > o && (o = r + o), o %= r, f -= o * h, p -= o * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= p || 0 > c && p >= e);) {i = this._dashIdx, n = a[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? jv(f, t) : qv(f, t), c >= 0 ? jv(p, e) : qv(p, e));}h = f - t, c = p - e, this._dashOffset = -$v(h * h + c * c);}, _dashedBezierTo: function _dashedBezierTo(t, e, n, i, r, o) {var a,s,l,u,h,c = this._dashSum,d = this._dashOffset,f = this._lineDash,p = this._ctx,g = this._xi,v = this._yi,m = Sr,y = 0,_ = this._dashIdx,x = f.length,w = 0;for (0 > d && (d = c + d), d %= c, a = 0; 1 > a; a += .1) {s = m(g, t, n, r, a + .1) - m(g, t, n, r, a), l = m(v, e, i, o, a + .1) - m(v, e, i, o, a), y += $v(s * s + l * l);}for (; x > _ && (w += f[_], !(w > d)); _++) {;}for (a = (w - d) / y; 1 >= a;) {u = m(g, t, n, r, a), h = m(v, e, i, o, a), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), a += f[_] / y, _ = (_ + 1) % x;}_ % 2 !== 0 && p.lineTo(r, o), s = r - u, l = o - h, this._dashOffset = -$v(s * s + l * l);}, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, n, i) {var r = n,o = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, o);}, toStatic: function toStatic() {var t = this.data;t instanceof Array && (t.length = this._len, Jv && (this.data = new Float32Array(t)));}, getBoundingRect: function getBoundingRect() {Wv[0] = Wv[1] = Yv[0] = Yv[1] = Number.MAX_VALUE, Xv[0] = Xv[1] = Uv[0] = Uv[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, o = 0; o < t.length;) {var a = t[o++];switch (1 === o && (e = t[o], n = t[o + 1], i = e, r = n), a) {case Gv.M:i = t[o++], r = t[o++], e = i, n = r, Yv[0] = i, Yv[1] = r, Uv[0] = i, Uv[1] = r;break;case Gv.L:zr(e, n, t[o], t[o + 1], Yv, Uv), e = t[o++], n = t[o++];break;case Gv.C:Rr(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Yv, Uv), e = t[o++], n = t[o++];break;case Gv.Q:Nr(e, n, t[o++], t[o++], t[o], t[o + 1], Yv, Uv), e = t[o++], n = t[o++];break;case Gv.A:var s = t[o++],l = t[o++],u = t[o++],h = t[o++],c = t[o++],d = t[o++] + c;o += 1;var f = 1 - t[o++];1 === o && (i = Zv(c) * u + s, r = Kv(c) * h + l), Fr(s, l, u, h, c, d, f, Yv, Uv), e = Zv(d) * u + s, n = Kv(d) * h + l;break;case Gv.R:i = e = t[o++], r = n = t[o++];var p = t[o++],g = t[o++];zr(i, r, i + p, r + g, Yv, Uv);break;case Gv.Z:e = i, n = r;}ae(Wv, Wv, Yv), se(Xv, Xv, Uv);}return 0 === o && (Wv[0] = Wv[1] = Xv[0] = Xv[1] = 0), new Cn(Wv[0], Wv[1], Xv[0] - Wv[0], Xv[1] - Wv[1]);}, rebuildPath: function rebuildPath(t) {for (var e, n, i, r, o, a, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {var d = s[c++];switch (1 === c && (i = s[c], r = s[c + 1], e = i, n = r), d) {case Gv.M:e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case Gv.L:o = s[c++], a = s[c++], (Qv(o - i) > l || Qv(a - r) > u || c === h - 1) && (t.lineTo(o, a), i = o, r = a);break;case Gv.C:t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case Gv.Q:t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case Gv.A:var f = s[c++],p = s[c++],g = s[c++],v = s[c++],m = s[c++],y = s[c++],_ = s[c++],x = s[c++],w = g > v ? g : v,b = g > v ? 1 : g / v,S = g > v ? v / g : 1,M = Math.abs(g - v) > .001,I = m + y;M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - x), 1 === c && (e = Zv(m) * g + f, n = Kv(m) * v + p), i = Zv(I) * g + f, r = Kv(I) * v + p;break;case Gv.R:e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case Gv.Z:t.closePath(), i = e, r = n;}}} }, tm.CMD = Gv;var em = 2 * Math.PI,nm = 2 * Math.PI,im = tm.CMD,rm = 2 * Math.PI,om = 1e-4,am = [-1, -1, -1],sm = [-1, -1],lm = Sg.prototype.getCanvasPattern,um = Math.abs,hm = new tm(!0);to.prototype = { constructor: to, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, segmentIgnoreThreshold: 0, subPixelOptimize: !1, brush: function brush(t, e) {var n = this.style,i = this.path || hm,r = n.hasStroke(),o = n.hasFill(),a = n.fill,s = n.stroke,l = o && !!a.colorStops,u = r && !!s.colorStops,h = o && !!a.image,c = r && !!s.image;if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {var d;l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, a, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));}l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = lm.call(a, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = lm.call(s, t));var f = n.lineDash,p = n.lineDashOffset,g = !!t.setLineDash,v = this.getGlobalScale();if (i.setScale(v[0], v[1], this.segmentIgnoreThreshold), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o) if (null != n.fillOpacity) {var m = t.globalAlpha;t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m;} else i.fill(t);if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {var m = t.globalAlpha;t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m;} else i.stroke(t);f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));}, buildPath: function buildPath() {}, createPathProxy: function createPathProxy() {this.path = new tm();}, getBoundingRect: function getBoundingRect() {var t = this._rect,e = this.style,n = !t;if (n) {var i = this.path;i || (i = this.path = new tm()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect();}if (this._rect = t, e.hasStroke()) {var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {r.copy(t);var o = e.lineWidth,a = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), a > 1e-10 && (r.width += o / a, r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2);}return r;}return t;}, contain: function contain(t, e) {var n = this.transformCoordToLocal(t, e),i = this.getBoundingRect(),r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {var o = this.path.data;if (r.hasStroke()) {var a = r.lineWidth,s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), Jr(o, a / s, t, e))) return !0;}if (r.hasFill()) return Qr(o, t, e);}return !1;}, dirty: function dirty(t) {null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();}, animateShape: function animateShape(t) {return this.animate("shape", t);}, attrKV: function attrKV(t, e) {"shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Ci.prototype.attrKV.call(this, t, e);}, setShape: function setShape(t, e) {var n = this.shape;if (n) {if (S(t)) for (var i in t) {t.hasOwnProperty(i) && (n[i] = t[i]);} else n[t] = e;this.dirty(!0);}return this;}, getLineScale: function getLineScale() {var t = this.transform;return t && um(t[0] - 1) > 1e-10 && um(t[3] - 1) > 1e-10 ? Math.sqrt(um(t[0] * t[3] - t[2] * t[1])) : 1;} }, to.extend = function (t) {var e = function e(_e2) {to.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);var n = t.shape;if (n) {this.shape = this.shape || {};var i = this.shape;for (var r in n) {!i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);}}t.init && t.init.call(this, _e2);};h(e, to);for (var n in t) {"style" !== n && "shape" !== n && (e.prototype[n] = t[n]);}return e;}, h(to, Ci);var cm = tm.CMD,dm = [[], [], []],fm = Math.sqrt,pm = Math.atan2,gm = function gm(t, e) {var n,i,r,o,a,s,l = t.data,u = cm.M,h = cm.C,c = cm.L,d = cm.R,f = cm.A,p = cm.Q;for (r = 0, o = 0; r < l.length;) {switch (n = l[r++], o = r, i = 0, n) {case u:i = 1;break;case c:i = 1;break;case h:i = 3;break;case p:i = 2;break;case f:var g = e[4],v = e[5],m = fm(e[0] * e[0] + e[1] * e[1]),y = fm(e[2] * e[2] + e[3] * e[3]),_ = pm(-e[1] / y, e[0] / m);l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, o = r;break;case d:s[0] = l[r++], s[1] = l[r++], oe(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], s[1] += l[r++], oe(s, s, e), l[o++] = s[0], l[o++] = s[1];}for (a = 0; i > a; a++) {var s = dm[a];s[0] = l[r++], s[1] = l[r++], oe(s, s, e), l[o++] = s[0], l[o++] = s[1];}}},vm = Math.sqrt,mm = Math.sin,ym = Math.cos,_m = Math.PI,xm = function xm(t) {return Math.sqrt(t[0] * t[0] + t[1] * t[1]);},wm = function wm(t, e) {return (t[0] * e[0] + t[1] * e[1]) / (xm(t) * xm(e));},bm = function bm(t, e) {return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(wm(t, e));},Sm = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,Mm = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,Im = function Im(t) {Ci.call(this, t);};Im.prototype = { constructor: Im, type: "text", brush: function brush(t, e) {var n = this.style;this.__dirty && li(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;return null != i && (i += ""), Ii(i, n) ? (this.setTransform(t), hi(this, t, i, n, null, e), void this.restoreTransform(t)) : void (t.__attrCachedBy = vg.NONE);}, getBoundingRect: function getBoundingRect() {var t = this.style;if (this.__dirty && li(t, !0), !this._rect) {var e = t.text;null != e ? e += "" : e = "";var n = Yn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, wi(t.textStroke, t.textStrokeWidth)) {var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;}this._rect = n;}return this._rect;} }, h(Im, Ci);var Cm = to.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, n) {n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);} }),Tm = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],Dm = function Dm(t) {return Kf.browser.ie && Kf.browser.version >= 11 ? function () {var e,n = this.__clipPaths,i = this.style;if (n) for (var r = 0; r < n.length; r++) {var o = n[r],a = o && o.shape,s = o && o.type;if (a && ("sector" === s && a.startAngle === a.endAngle || "rect" === s && (!a.width || !a.height))) {for (var l = 0; l < Tm.length; l++) {Tm[l][2] = i[Tm[l][0]], i[Tm[l][0]] = Tm[l][1];}e = !0;break;}}if (t.apply(this, arguments), e) for (var l = 0; l < Tm.length; l++) {i[Tm[l][0]] = Tm[l][2];}} : t;},km = to.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, brush: Dm(to.prototype.brush), buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = Math.max(e.r0 || 0, 0),o = Math.max(e.r, 0),a = e.startAngle,s = e.endAngle,l = e.clockwise,u = Math.cos(a),h = Math.sin(a);t.moveTo(u * r + n, h * r + i), t.lineTo(u * o + n, h * o + i), t.arc(n, i, o, a, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, a, l), t.closePath();} }),Am = to.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);} }),Pm = function Pm(t, e) {for (var n = t.length, i = [], r = 0, o = 1; n > o; o++) {r += ee(t[o - 1], t[o]);}var a = r / 2;a = n > a ? n : a;for (var o = 0; a > o; o++) {var s,l,u,h = o / (a - 1) * (e ? n : n - 1),c = Math.floor(h),d = h - c,f = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);var p = d * d,g = d * p;i.push([so(s[0], f[0], l[0], u[0], d, p, g), so(s[1], f[1], l[1], u[1], d, p, g)]);}return i;},Lm = function Lm(t, e, n, i) {var r,o,a,s,l = [],u = [],h = [],c = [];if (i) {a = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];for (var d = 0, f = t.length; f > d; d++) {ae(a, a, t[d]), se(s, s, t[d]);}ae(a, a, i[0]), se(s, s, i[1]);}for (var d = 0, f = t.length; f > d; d++) {var p = t[d];if (n) r = t[d ? d - 1 : f - 1], o = t[(d + 1) % f];else {if (0 === d || d === f - 1) {l.push(W(t[d]));continue;}r = t[d - 1], o = t[d + 1];}j(u, o, r), J(u, u, e);var g = ee(p, r),v = ee(p, o),m = g + v;0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);var y = Y([], p, h),_ = Y([], p, c);i && (se(y, y, a), ae(y, y, s), se(_, _, a), ae(_, _, s)), l.push(y), l.push(_);}return n && l.push(l.shift()), l;},Om = to.extend({ type: "polygon", shape: { points: null, smooth: !1, smoothConstraint: null }, buildPath: function buildPath(t, e) {lo(t, e, !0);} }),Em = to.extend({ type: "polyline", shape: { points: null, smooth: !1, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {lo(t, e, !1);} }),Bm = Math.round,zm = {},Rm = to.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n, i, r, o;this.subPixelOptimize ? (ho(zm, e, this.style), n = zm.x, i = zm.y, r = zm.width, o = zm.height, zm.r = e.r, e = zm) : (n = e.x, i = e.y, r = e.width, o = e.height), e.r ? si(t, e) : t.rect(n, i, r, o), t.closePath();} }),Nm = {},Fm = to.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {var n, i, r, o;this.subPixelOptimize ? (uo(Nm, e, this.style), n = Nm.x1, i = Nm.y1, r = Nm.x2, o = Nm.y2) : (n = e.x1, i = e.y1, r = e.x2, o = e.y2);var a = e.percent;0 !== a && (t.moveTo(n, i), 1 > a && (r = n * (1 - a) + r * a, o = i * (1 - a) + o * a), t.lineTo(r, o));}, pointAt: function pointAt(t) {var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];} }),Hm = [],Vm = to.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {var n = e.x1,i = e.y1,r = e.x2,o = e.y2,a = e.cpx1,s = e.cpy1,l = e.cpx2,u = e.cpy2,h = e.percent;0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (Or(n, a, r, h, Hm), a = Hm[1], r = Hm[2], Or(i, s, o, h, Hm), s = Hm[1], o = Hm[2]), t.quadraticCurveTo(a, s, r, o)) : (1 > h && (Tr(n, a, l, r, h, Hm), a = Hm[1], l = Hm[2], r = Hm[3], Tr(i, s, u, o, h, Hm), s = Hm[1], u = Hm[2], o = Hm[3]), t.bezierCurveTo(a, s, l, u, r, o)));}, pointAt: function pointAt(t) {return fo(this.shape, t, !1);}, tangentAt: function tangentAt(t) {var e = fo(this.shape, t, !0);return te(e, e);} }),Gm = to.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = Math.max(e.r, 0),o = e.startAngle,a = e.endAngle,s = e.clockwise,l = Math.cos(o),u = Math.sin(o);t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s);} }),Wm = to.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) {t = t || e[n].__dirtyPath;}this.__dirtyPath = t, this.__dirty = this.__dirty || t;}, beforeBrush: function beforeBrush() {this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) {t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);}}, buildPath: function buildPath(t, e) {for (var n = e.paths || [], i = 0; i < n.length; i++) {n[i].buildPath(t, n[i].shape, !0);}}, afterBrush: function afterBrush() {for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {t[e].__dirtyPath = !1;}}, getBoundingRect: function getBoundingRect() {return this._updatePathDirty(), to.prototype.getBoundingRect.call(this);} }),Xm = function Xm(t) {this.colorStops = t || [];};Xm.prototype = { constructor: Xm, addColorStop: function addColorStop(t, e) {this.colorStops.push({ offset: t, color: e });} };var Ym = function Ym(t, e, n, i, r, o) {this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = o || !1, Xm.call(this, r);};Ym.prototype = { constructor: Ym }, h(Ym, Xm);var Um = function Um(t, e, n, i, r) {this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Xm.call(this, i);};Um.prototype = { constructor: Um }, h(Um, Xm), po.prototype.incremental = !0, po.prototype.clearDisplaybles = function () {this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;}, po.prototype.addDisplayable = function (t, e) {e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();}, po.prototype.addDisplayables = function (t, e) {e = e || !1;for (var n = 0; n < t.length; n++) {this.addDisplayable(t[n], e);}}, po.prototype.eachPendingDisplayable = function (t) {for (var e = this._cursor; e < this._displayables.length; e++) {t && t(this._displayables[e]);}for (var e = 0; e < this._temporaryDisplayables.length; e++) {t && t(this._temporaryDisplayables[e]);}}, po.prototype.update = function () {this.updateTransform();for (var t = this._cursor; t < this._displayables.length; t++) {var e = this._displayables[t];e.parent = this, e.update(), e.parent = null;}for (var t = 0; t < this._temporaryDisplayables.length; t++) {var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;}}, po.prototype.brush = function (t) {for (var e = this._cursor; e < this._displayables.length; e++) {var n = this._displayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);}this._cursor = e;for (var e = 0; e < this._temporaryDisplayables.length; e++) {var n = this._temporaryDisplayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);}this._temporaryDisplayables = [], this.notClear = !0;};var jm = [];po.prototype.getBoundingRect = function () {if (!this._rect) {for (var t = new Cn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {var n = this._displayables[e],i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(jm)), t.union(i);}this._rect = t;}return this._rect;}, po.prototype.contain = function (t, e) {var n = this.transformCoordToLocal(t, e),i = this.getBoundingRect();if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {var o = this._displayables[r];if (o.contain(t, e)) return !0;}return !1;}, h(po, Ci);var qm = Math.max,Zm = Math.min,Km = {},$m = 1,Qm = { color: "textFill", textBorderColor: "textStroke", textBorderWidth: "textStrokeWidth" },Jm = "emphasis",ty = "normal",ey = 1,ny = {},iy = {},ry = ao,oy = co,ay = N(),sy = 0;mo("circle", Cm), mo("sector", km), mo("ring", Am), mo("polygon", Om), mo("polyline", Em), mo("rect", Rm), mo("line", Fm), mo("bezierCurve", Vm), mo("arc", Gm);var ly = (Object.freeze || Object)({ Z2_EMPHASIS_LIFT: $m, CACHED_LABEL_STYLE_PROPERTIES: Qm, extendShape: go, extendPath: vo, registerShape: mo, getShapeClass: yo, makePath: _o, makeImage: xo, mergePath: ry, resizePath: bo, subPixelOptimizeLine: So, subPixelOptimizeRect: Mo, subPixelOptimize: oy, setElementHoverStyle: Lo, setHoverStyle: No, setAsHighDownDispatcher: Fo, isHighDownDispatcher: Ho, getHighlightDigit: Vo, setLabelStyle: Go, modifyLabelStyle: Wo, setTextStyle: Xo, setText: Yo, getFont: Qo, updateProps: ta, initProps: ea, getTransform: na, applyTransform: ia, transformDirection: ra, groupTransition: oa, clipPointsByRect: aa, clipRectByRect: sa, createIcon: la, linePolygonIntersect: ua, lineLineIntersect: ha, Group: hg, Image: Ti, Text: Im, Circle: Cm, Sector: km, Ring: Am, Polygon: Om, Polyline: Em, Rect: Rm, Line: Fm, BezierCurve: Vm, Arc: Gm, IncrementalDisplayable: po, CompoundPath: Wm, LinearGradient: Ym, RadialGradient: Um, BoundingRect: Cn }),uy = ["textStyle", "color"],hy = { getTextColor: function getTextColor(t) {var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(uy) : null);}, getFont: function getFont() {return Qo({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);}, getTextRect: function getTextRect(t) {return Yn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"));} },cy = yv([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),dy = { getItemStyle: function getItemStyle(t, e) {var n = cy(this, t, e),i = this.getBorderLineDash();return i && (n.lineDash = i), n;}, getBorderLineDash: function getBorderLineDash() {var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];} },fy = c,py = lr();fa.prototype = { constructor: fa, init: null, mergeOption: function mergeOption(t) {r(this.option, t, !0);}, get: function get(t, e) {return null == t ? this.option : pa(this.option, this.parsePath(t), !e && ga(this, t));}, getShallow: function getShallow(t, e) {var n = this.option,i = null == n ? n : n[t],r = !e && ga(this, t);return null == i && r && (i = r.getShallow(t)), i;}, getModel: function getModel(t, e) {var n,i = null == t ? this.option : pa(this.option, t = this.parsePath(t));return e = e || (n = ga(this, t)) && n.getModel(t), new fa(i, e, this.ecModel);}, isEmpty: function isEmpty() {return null == this.option;}, restoreData: function restoreData() {}, clone: function clone() {var t = this.constructor;return new t(i(this.option));}, setReadOnly: function setReadOnly() {}, parsePath: function parsePath(t) {return "string" == typeof t && (t = t.split(".")), t;}, customizeGetParent: function customizeGetParent(t) {py(this).getParent = t;}, isAnimationEnabled: function isAnimationEnabled() {if (!Kf.node) {if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled();}} }, vr(fa), mr(fa), fy(fa, xv), fy(fa, bv), fy(fa, hy), fy(fa, dy);var gy = 0,vy = 1e-4,my = 9007199254740991,yy = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,_y = (Object.freeze || Object)({ linearMap: xa, parsePercent: wa, round: ba, asc: Sa, getPrecision: Ma, getPrecisionSafe: Ia, getPixelPrecision: Ca, getPercentWithPrecision: Ta, MAX_SAFE_INTEGER: my, remRadian: Da, isRadianAroundZero: ka, parseDate: Aa, quantity: Pa, quantityExponent: La, nice: Oa, quantile: Ea, reformIntervals: Ba, isNumeric: za }),xy = L,wy = /([&<>"'])/g,by = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },Sy = ["a", "b", "c", "d", "e", "f", "g"],My = function My(t, e) {return "{" + t + (null == e ? "" : e) + "}";},Iy = $n,Cy = (Object.freeze || Object)({ addCommas: Ra, toCamelCase: Na, normalizeCssArray: xy, encodeHTML: Fa, formatTpl: Ha, formatTplSimple: Va, getTooltipMarker: Ga, formatTime: Xa, capitalFirst: Ya, truncateText: Iy, getTextBoundingRect: Ua, getTextRect: ja, windowOpen: qa }),Ty = f,Dy = ["left", "right", "top", "bottom", "width", "height"],ky = [["width", "left", "right"], ["height", "top", "bottom"]],Ay = Za,Py = (_(Za, "vertical"), _(Za, "horizontal"), { getBoxLayoutParams: function getBoxLayoutParams() {return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };} }),Ly = lr(),Oy = fa.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, n, i) {fa.call(this, t, e, n, i), this.uid = va("ec_cpt_model");}, init: function init(t, e, n) {this.mergeDefaultAndTheme(t, n);}, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {var n = this.layoutMode,i = n ? Qa(t) : {},o = e.getTheme();r(t, o.get(this.mainType)), r(t, this.getDefaultOption()), n && $a(t, i, n);}, mergeOption: function mergeOption(t) {r(this.option, t, !0);var e = this.layoutMode;e && $a(this.option, t, e);}, optionUpdated: function optionUpdated() {}, getDefaultOption: function getDefaultOption() {var t = Ly(this);if (!t.defaultOption) {for (var e = [], n = this.constructor; n;) {var i = n.prototype.defaultOption;i && e.push(i), n = n.superClass;}for (var o = {}, a = e.length - 1; a >= 0; a--) {o = r(o, e[a], !0);}t.defaultOption = o;}return t.defaultOption;}, getReferringComponents: function getReferringComponents(t) {return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", !0), id: this.get(t + "Id", !0) });} });xr(Oy, { registerWhenExtend: !0 }), ma(Oy), ya(Oy, ts), c(Oy, Py);var Ey = "";"undefined" != typeof navigator && (Ey = navigator.platform || "");var By = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: Ey.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: !1 },zy = lr(),Ry = { clearColorPalette: function clearColorPalette() {zy(this).colorIdx = 0, zy(this).colorNameMap = {};}, getColorFromPalette: function getColorFromPalette(t, e, n) {e = e || this;var i = zy(e),r = i.colorIdx || 0,o = i.colorNameMap = i.colorNameMap || {};if (o.hasOwnProperty(t)) return o[t];var a = Ji(this.get("color", !0)),s = this.get("colorLayer", !0),l = null != n && s ? es(s, n) : a;if (l = l || a, l && l.length) {var u = l[r];return t && (o[t] = u), i.colorIdx = (r + 1) % l.length, u;}} },Ny = "original",Fy = "arrayRows",Hy = "objectRows",Vy = "keyedColumns",Gy = "unknown",Wy = "typedArray",Xy = "column",Yy = "row";ns.seriesDataToSource = function (t) {return new ns({ data: t, sourceFormat: I(t) ? Wy : Ny, fromDataset: !1 });}, mr(ns);var Uy = { Must: 1, Might: 2, Not: 3 },jy = lr(),qy = "\x00_ec_inner",Zy = fa.extend({ init: function init(t, e, n, i) {n = n || {}, this.option = null, this._theme = new fa(n), this._optionManager = i;}, setOption: function setOption(t, e) {O(!(qy in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);}, resetOption: function resetOption(t) {var e = !1,n = this._optionManager;if (!t || "recreate" === t) {var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : ms.call(this, i), e = !0;}if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = !0);}if (!t || "recreate" === t || "media" === t) {var o = n.getMediaOption(this, this._api);o.length && f(o, function (t) {this.mergeOption(t, e = !0);}, this);}return e;}, mergeOption: function mergeOption(t) {function e(e, i) {var r = Ji(t[e]),s = ir(o.get(e), r);rr(s), f(s, function (t) {var n = t.option;S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = _s(e, n, t.exist));});var l = ys(o, i);n[e] = [], o.set(e, []), f(s, function (t, i) {var r = t.exist,s = t.option;if (O(S(s) || r, "Empty component definition"), s) {var u = Oy.getClass(e, t.keyInfo.subType, !0);if (r && r.constructor === u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {var h = a({ dependentModels: l, componentIndex: i }, t.keyInfo);r = new u(s, this, this, h), a(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0);}} else r.mergeOption({}, this), r.optionUpdated({}, !1);o.get(e)[i] = r, n[e][i] = r.option;}, this), "series" === e && xs(this, o.get("series"));}var n = this.option,o = this._componentsMap,s = [];os(this), f(t, function (t, e) {null != t && (Oy.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0));}), Oy.topologicalTravel(s, Oy.getAllClassMainTypes(), e, this), this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || []);}, getOption: function getOption() {var t = i(this.option);return f(t, function (e, n) {if (Oy.hasClass(n)) {for (var e = Ji(e), i = e.length - 1; i >= 0; i--) {ar(e[i]) && e.splice(i, 1);}t[n] = e;}}), delete t[qy], t;}, getTheme: function getTheme() {return this._theme;}, getComponent: function getComponent(t, e) {var n = this._componentsMap.get(t);return n ? n[e || 0] : void 0;}, queryComponents: function queryComponents(t) {var e = t.mainType;if (!e) return [];var n = t.index,i = t.id,r = t.name,o = this._componentsMap.get(e);if (!o || !o.length) return [];var a;if (null != n) x(n) || (n = [n]), a = v(p(n, function (t) {return o[t];}), function (t) {return !!t;});else if (null != i) {var s = x(i);a = v(o, function (t) {return s && u(i, t.id) >= 0 || !s && t.id === i;});} else if (null != r) {var l = x(r);a = v(o, function (t) {return l && u(r, t.name) >= 0 || !l && t.name === r;});} else a = o.slice();return ws(a, t);}, findComponents: function findComponents(t) {function e(t) {var e = r + "Index",n = r + "Id",i = r + "Name";return !t || null == t[e] && null == t[n] && null == t[i] ? null : { mainType: r, index: t[e], id: t[n], name: t[i] };}function n(e) {return t.filter ? v(e, t.filter) : e;}var i = t.query,r = t.mainType,o = e(i),a = o ? this.queryComponents(o) : this._componentsMap.get(r);return n(ws(a, t));}, eachComponent: function eachComponent(t, e, n) {var i = this._componentsMap;if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {f(t, function (t, r) {e.call(n, i, t, r);});});else if (b(t)) f(i.get(t), e, n);else if (S(t)) {var r = this.findComponents(t);f(r, e, n);}}, getSeriesByName: function getSeriesByName(t) {var e = this._componentsMap.get("series");return v(e, function (e) {return e.name === t;});}, getSeriesByIndex: function getSeriesByIndex(t) {return this._componentsMap.get("series")[t];}, getSeriesByType: function getSeriesByType(t) {var e = this._componentsMap.get("series");return v(e, function (e) {return e.subType === t;});}, getSeries: function getSeries() {return this._componentsMap.get("series").slice();}, getSeriesCount: function getSeriesCount() {return this._componentsMap.get("series").length;}, eachSeries: function eachSeries(t, e) {bs(this), f(this._seriesIndices, function (n) {var i = this._componentsMap.get("series")[n];t.call(e, i, n);}, this);}, eachRawSeries: function eachRawSeries(t, e) {f(this._componentsMap.get("series"), t, e);}, eachSeriesByType: function eachSeriesByType(t, e, n) {bs(this), f(this._seriesIndices, function (i) {var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);}, this);}, eachRawSeriesByType: function eachRawSeriesByType(t, e, n) {return f(this.getSeriesByType(t), e, n);}, isSeriesFiltered: function isSeriesFiltered(t) {return bs(this), null == this._seriesIndicesMap.get(t.componentIndex);}, getCurrentSeriesIndices: function getCurrentSeriesIndices() {return (this._seriesIndices || []).slice();}, filterSeries: function filterSeries(t, e) {bs(this);var n = v(this._componentsMap.get("series"), t, e);xs(this, n);}, restoreData: function restoreData(t) {var e = this._componentsMap;xs(this, e.get("series"));var n = [];e.each(function (t, e) {n.push(e);}), Oy.topologicalTravel(n, Oy.getAllClassMainTypes(), function (n) {f(e.get(n), function (e) {("series" !== n || !gs(e, t)) && e.restoreData();});});} });c(Zy, Ry);var Ky = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],$y = {};Ms.prototype = { constructor: Ms, create: function create(t, e) {var n = [];f($y, function (i) {var r = i.create(t, e);n = n.concat(r || []);}), this._coordinateSystems = n;}, update: function update(t, e) {f(this._coordinateSystems, function (n) {n.update && n.update(t, e);});}, getCoordinateSystems: function getCoordinateSystems() {return this._coordinateSystems.slice();} }, Ms.register = function (t, e) {$y[t] = e;}, Ms.get = function (t) {return $y[t];};var Qy = f,Jy = i,t_ = p,e_ = r,n_ = /^(min|max)?(.+)$/;Is.prototype = { constructor: Is, setOption: function setOption(t, e) {t && f(Ji(t.series), function (t) {t && t.data && I(t.data) && B(t.data);}), t = Jy(t);var n = this._optionBackup,i = Cs.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (As(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;}, mountOption: function mountOption(t) {var e = this._optionBackup;return this._timelineOptions = t_(e.timelineOptions, Jy), this._mediaList = t_(e.mediaList, Jy), this._mediaDefault = Jy(e.mediaDefault), this._currentMediaIndices = [], Jy(t ? e.baseOption : this._newBaseOption);}, getTimelineOption: function getTimelineOption(t) {var e,n = this._timelineOptions;if (n.length) {var i = t.getComponent("timeline");i && (e = Jy(n[i.getCurrentIndex()], !0));}return e;}, getMediaOption: function getMediaOption() {var t = this._api.getWidth(),e = this._api.getHeight(),n = this._mediaList,i = this._mediaDefault,r = [],o = [];if (!n.length && !i) return o;for (var a = 0, s = n.length; s > a; a++) {Ts(n[a].query, t, e) && r.push(a);}return !r.length && i && (r = [-1]), r.length && !ks(r, this._currentMediaIndices) && (o = t_(r, function (t) {return Jy(-1 === t ? i.option : n[t].option);})), this._currentMediaIndices = r, o;} };var i_ = f,r_ = S,o_ = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],a_ = function a_(t, e) {i_(Rs(t.series), function (t) {r_(t) && zs(t);});var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), i_(n, function (e) {i_(Rs(t[e]), function (t) {t && (Es(t, "axisLabel"), Es(t.axisPointer, "label"));});}), i_(Rs(t.parallel), function (t) {var e = t && t.parallelAxisDefault;Es(e, "axisLabel"), Es(e && e.axisPointer, "label");}), i_(Rs(t.calendar), function (t) {Ls(t, "itemStyle"), Es(t, "dayLabel"), Es(t, "monthLabel"), Es(t, "yearLabel");}), i_(Rs(t.radar), function (t) {Es(t, "name");}), i_(Rs(t.geo), function (t) {r_(t) && (Bs(t), i_(Rs(t.regions), function (t) {Bs(t);}));}), i_(Rs(t.timeline), function (t) {Bs(t), Ls(t, "label"), Ls(t, "itemStyle"), Ls(t, "controlStyle", !0);var e = t.data;x(e) && f(e, function (t) {S(t) && (Ls(t, "label"), Ls(t, "itemStyle"));});}), i_(Rs(t.toolbox), function (t) {Ls(t, "iconStyle"), i_(t.feature, function (t) {Ls(t, "iconStyle");});}), Es(Ns(t.axisPointer), "label"), Es(Ns(t.tooltip).axisPointer, "label");},s_ = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],l_ = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],u_ = function u_(t, e) {a_(t, e), t.series = Ji(t.series), f(t.series, function (t) {if (S(t)) {var e = t.type;if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);else if ("gauge" === e) {var n = Fs(t, "pointer.color");null != n && Hs(t, "itemStyle.color", n);}Vs(t);}}), t.dataRange && (t.visualMap = t.dataRange), f(l_, function (e) {var n = t[e];n && (x(n) || (n = [n]), f(n, function (t) {Vs(t);}));});},h_ = function h_(t) {var e = N();t.eachSeries(function (t) {var n = t.get("stack");if (n) {var i = e.get(n) || e.set(n, []),r = t.getData(),o = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o);}}), e.each(Gs);},c_ = Ws.prototype;c_.pure = !1, c_.persistent = !0, c_.getSource = function () {return this._source;};var d_ = { arrayRows_column: { pure: !0, count: function count() {return Math.max(0, this._data.length - this._source.startIndex);}, getItem: function getItem(t) {return this._data[t + this._source.startIndex];}, appendData: Us }, arrayRows_row: { pure: !0, count: function count() {var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;}, getItem: function getItem(t) {t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {var r = n[i];e.push(r ? r[t] : null);}return e;}, appendData: function appendData() {throw new Error('Do not support appendData when set seriesLayoutBy: "row".');} }, objectRows: { pure: !0, count: Xs, getItem: Ys, appendData: Us }, keyedColumns: { pure: !0, count: function count() {var t = this._source.dimensionsDefine[0].name,e = this._data[t];return e ? e.length : 0;}, getItem: function getItem(t) {for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {var r = this._data[n[i].name];e.push(r ? r[t] : null);}return e;}, appendData: function appendData(t) {var e = this._data;f(t, function (t, n) {for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) {i.push(t[r]);}});} }, original: { count: Xs, getItem: Ys, appendData: Us }, typedArray: { persistent: !1, pure: !0, count: function count() {return this._data ? this._data.length / this._dimSize : 0;}, getItem: function getItem(t, e) {t -= this._offset, e = e || [];for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) {e[i] = this._data[n + i];}return e;}, appendData: function appendData(t) {Uf && O(I(t), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = t;}, clean: function clean() {this._offset += this.count(), this._data = null;} } },f_ = { arrayRows: js, objectRows: function objectRows(t, e, n, i) {return null != n ? t[i] : t;}, keyedColumns: js, original: function original(t, e, n) {var i = er(t);return null != n && i instanceof Array ? i[n] : i;}, typedArray: js },p_ = { arrayRows: qs, objectRows: function objectRows(t, e) {return Zs(t[e], this._dimensionInfos[e]);}, keyedColumns: qs, original: function original(t, e, n, i) {var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && nr(t) && (this.hasItemOption = !0), Zs(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);}, typedArray: function typedArray(t, e, n, i) {return t[i];} },g_ = /\{@(.+?)\}/g,v_ = { getDataParams: function getDataParams(t, e) {var n = this.getData(e),i = this.getRawValue(t, e),r = n.getRawIndex(t),o = n.getName(t),a = n.getRawDataItem(t),s = n.getItemVisual(t, "color"),l = n.getItemVisual(t, "borderColor"),u = this.ecModel.getComponent("tooltip"),h = u && u.get("renderMode"),c = fr(h),d = this.mainType,f = "series" === d,p = n.userOutput;return { componentType: d, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: f ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: f ? this.id : null, seriesName: f ? this.name : null, name: o, dataIndex: r, data: a, dataType: e, value: i, color: s, borderColor: l, dimensionNames: p ? p.dimensionNames : null, encode: p ? p.encode : null, marker: Ga({ color: s, renderMode: c }), $vars: ["seriesName", "name", "value"] };}, getFormattedLabel: function getFormattedLabel(t, e, n, i, r) {e = e || "normal";var o = this.getData(n),a = o.getItemModel(t),s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = a.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);if ("function" == typeof l) return s.status = e, s.dimensionIndex = i, l(s);if ("string" == typeof l) {var u = Ha(l, s);return u.replace(g_, function (e, n) {var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Ks(o, t, n);});}}, getRawValue: function getRawValue(t, e) {return Ks(this.getData(e), t);}, formatTooltip: function formatTooltip() {} },m_ = Qs.prototype;m_.perform = function (t) {function e(t) {return !(t >= 1) && (t = 1), t;}var n = this._upstream,i = t && t.skip;if (this._dirty && n) {var r = this.context;r.data = r.outputData = n.context.outputData;}this.__pipeline && (this.__pipeline.currentTask = this);var o;this._plan && !i && (o = this._plan(this.context));var a = e(this._modBy),s = this._modDataCount || 0,l = e(t && t.modBy),u = t && t.modDataCount || 0;(a !== l || s !== u) && (o = "reset");var h;(this._dirty || "reset" === o) && (this._dirty = !1, h = tl(this, i)), this._modBy = l, this._modDataCount = u;var c = t && t.step;if (n ? (Uf && O(null != n._outputDueEnd), this._dueEnd = n._outputDueEnd) : (Uf && O(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {var d = this._dueIndex,f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);if (!i && (h || f > d)) {var p = this._progress;if (x(p)) for (var g = 0; g < p.length; g++) {Js(this, p[g], d, f, l, u);} else Js(this, p, d, f, l, u);}this._dueIndex = f;var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;Uf && O(v >= this._outputDueEnd), this._outputDueEnd = v;} else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();};var y_ = function () {function t() {return n > i ? i++ : null;}function e() {var t = i % a * r + Math.ceil(i / a),e = i >= n ? null : o > t ? t : i;return i++, e;}var n,i,r,o,a,s = { reset: function reset(l, u, h, c) {i = l, n = u, r = h, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t;} };return s;}();m_.dirty = function () {this._dirty = !0, this._onDirty && this._onDirty(this.context);}, m_.unfinished = function () {return this._progress && this._dueIndex < this._dueEnd;}, m_.pipe = function (t) {Uf && O(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());}, m_.dispose = function () {this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);}, m_.getUpstream = function () {return this._upstream;}, m_.getDownstream = function () {return this._downstream;}, m_.setOutputEnd = function (t) {this._outputDueEnd = this._settedOutputEnd = t;};var __ = lr(),x_ = Oy.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendVisualProvider: null, visualColorAccessPath: "itemStyle.color", visualBorderColorAccessPath: "itemStyle.borderColor", layoutMode: null, init: function init(t, e, n) {this.seriesIndex = this.componentIndex, this.dataTask = $s({ count: il, reset: rl }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), as(this);var i = this.getInitialData(t, n);al(i, this), this.dataTask.context.data = i, Uf && O(i, "getInitialData returned invalid data."), __(this).dataBeforeProcessed = i, el(this);}, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {var n = this.layoutMode,i = n ? Qa(t) : {},o = this.subType;Oy.hasClass(o) && (o += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), tr(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && $a(t, i, n);}, mergeOption: function mergeOption(t, e) {t = r(this.option, t, !0), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && $a(this.option, t, n), as(this);var i = this.getInitialData(t, e);al(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, __(this).dataBeforeProcessed = i, el(this);}, fillDataTextStyle: function fillDataTextStyle(t) {if (t && !I(t)) for (var e = ["show"], n = 0; n < t.length; n++) {t[n] && t[n].label && tr(t[n], "label", e);}}, getInitialData: function getInitialData() {}, appendData: function appendData(t) {var e = this.getRawData();e.appendData(t.data);}, getData: function getData(t) {var e = ll(this);if (e) {var n = e.context.data;return null == t ? n : n.getLinkedData(t);}return __(this).data;}, setData: function setData(t) {var e = ll(this);if (e) {var n = e.context;n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);}__(this).data = t;}, getSource: function getSource() {return rs(this);}, getRawData: function getRawData() {return __(this).dataBeforeProcessed;}, getBaseAxis: function getBaseAxis() {var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();}, formatTooltip: function formatTooltip(t, e, n, i) {function r(n) {function r(t, n) {var r = c.getDimensionInfo(n);if (r && r.otherDims.tooltip !== !1) {var d = r.type,f = "sub" + a.seriesIndex + "at" + h,p = Ga({ color: y, type: "subItem", renderMode: i, markerId: f }),g = "string" == typeof p ? p : p.content,v = (o ? g + Fa(r.displayName || "-") + ": " : "") + Fa("ordinal" === d ? t + "" : "time" === d ? e ? "" : Xa("yyyy/MM/dd hh:mm:ss", t) : Ra(t));v && s.push(v), l && (u[f] = y, ++h);}}var o = g(n, function (t, e, n) {var i = c.getDimensionInfo(n);return t |= i && i.tooltip !== !1 && null != i.displayName;}, 0),s = [];d.length ? f(d, function (e) {r(Ks(c, t, e), e);}) : f(n, r);var p = o ? l ? "\n" : "<br/>" : "",v = p + s.join(p || ", ");return { renderMode: i, content: v, style: u };}function o(t) {return { renderMode: i, content: Fa(Ra(t)), style: u };}var a = this;i = i || "html";var s = "html" === i ? "<br/>" : "\n",l = "richText" === i,u = {},h = 0,c = this.getData(),d = c.mapDimension("defaultedTooltip", !0),p = d.length,v = this.getRawValue(t),m = x(v),y = c.getItemVisual(t, "color");S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";var _ = p > 1 || m && !p ? r(v) : o(p ? Ks(c, t, d[0]) : m ? v[0] : v),w = _.content,b = a.seriesIndex + "at" + h,M = Ga({ color: y, type: "item", renderMode: i, markerId: b });u[b] = y, ++h;var I = c.getName(t),C = this.name;or(this) || (C = ""), C = C ? Fa(C) + (e ? ": " : s) : "";var T = "string" == typeof M ? M : M.content,D = e ? T + C + w : C + T + (I ? Fa(I) + ": " + w : w);return { html: D, markers: u };}, isAnimationEnabled: function isAnimationEnabled() {if (Kf.node) return !1;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;}, restoreData: function restoreData() {this.dataTask.dirty();}, getColorFromPalette: function getColorFromPalette(t, e, n) {var i = this.ecModel,r = Ry.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;}, coordDimToDataDim: function coordDimToDataDim(t) {return this.getRawData().mapDimension(t, !0);}, getProgressive: function getProgressive() {return this.get("progressive");}, getProgressiveThreshold: function getProgressiveThreshold() {return this.get("progressiveThreshold");}, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });c(x_, v_), c(x_, Ry);var w_ = function w_() {this.group = new hg(), this.uid = va("viewComponent");};w_.prototype = { constructor: w_, init: function init() {}, render: function render() {}, dispose: function dispose() {}, filterForExposedEvent: null };var b_ = w_.prototype;b_.updateView = b_.updateLayout = b_.updateVisual = function () {}, vr(w_), xr(w_, { registerWhenExtend: !0 });var S_ = function S_() {var t = lr();return function (e) {var n = t(e),i = e.pipelineContext,r = n.large,o = n.progressiveRender,a = n.large = i && i.large,s = n.progressiveRender = i && i.progressiveRender;return !!(r ^ a || o ^ s) && "reset";};},M_ = lr(),I_ = S_();ul.prototype = { type: "chart", init: function init() {}, render: function render() {}, highlight: function highlight(t, e, n, i) {cl(t.getData(), i, "emphasis");}, downplay: function downplay(t, e, n, i) {cl(t.getData(), i, "normal");}, remove: function remove() {this.group.removeAll();}, dispose: function dispose() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null };var C_ = ul.prototype;C_.updateView = C_.updateLayout = C_.updateVisual = function (t, e, n, i) {this.render(t, e, n, i);}, vr(ul, ["dispose"]), xr(ul, { registerWhenExtend: !0 }), ul.markUpdateMethod = function (t, e) {M_(t).updateMethod = e;};var T_ = { incrementalPrepareRender: { progress: function progress(t, e) {e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);} }, render: { forceFirstProgress: !0, progress: function progress(t, e) {e.view.render(e.model, e.ecModel, e.api, e.payload);} } },D_ = "\x00__throttleOriginMethod",k_ = "\x00__throttleRate",A_ = "\x00__throttleType",P_ = { createOnAllSeries: !0, performRawSeries: !0, reset: function reset(t, e) {var n = t.getData(),i = (t.visualColorAccessPath || "itemStyle.color").split("."),r = t.get(i),o = !w(r) || r instanceof Xm ? null : r;(!r || o) && (r = t.getColorFromPalette(t.name, null, e.getSeriesCount())), n.setVisual("color", r);var a = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),s = t.get(a);if (n.setVisual("borderColor", s), !e.isSeriesFiltered(t)) {o && n.each(function (e) {n.setItemVisual(e, "color", o(t.getDataParams(e)));});var l = function l(t, e) {var n = t.getItemModel(e),r = n.get(i, !0),o = n.get(a, !0);null != r && t.setItemVisual(e, "color", r), null != o && t.setItemVisual(e, "borderColor", o);};return { dataEach: n.hasItemOption ? l : null };}} },L_ = { legend: { selector: { all: "全选", inverse: "反选" } }, toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },O_ = function O_(t, e) {function n(t, e) {if ("string" != typeof t) return t;var n = t;return f(e, function (t, e) {n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);}), n;}function i(t) {var e = a.get(t);if (null == e) {for (var n = t.split("."), i = L_.aria, r = 0; r < n.length; ++r) {i = i[n[r]];}return i;}return e;}function r() {var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;}function o(t) {return L_.series.typeNames[t] || "自定义图";}var a = e.getModel("aria");if (a.get("show")) {if (a.get("description")) return void t.setAttribute("aria-label", a.get("description"));var s = 0;e.eachSeries(function () {++s;}, this);var l,u = a.get("data.maxCount") || 10,h = a.get("series.maxCount") || 10,c = Math.min(s, h);if (!(1 > s)) {var d = r();l = d ? n(i("general.withTitle"), { title: d }) : i("general.withoutTitle");var p = [],g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";l += n(i(g), { seriesCount: s }), e.eachSeries(function (t, e) {if (c > e) {var r,a = t.get("name"),l = "series." + (s > 1 ? "multiple" : "single") + ".";r = i(a ? l + "withName" : l + "withoutName"), r = n(r, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: o(t.subType) });var h = t.getData();window.data = h, r += h.count() > u ? n(i("data.partialData"), { displayCnt: u }) : i("data.allData");for (var d = [], f = 0; f < h.count(); f++) {if (u > f) {var g = h.getName(f),v = Ks(h, f);d.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));}}r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r);}}), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l);}}},E_ = Math.PI,B_ = function B_(t, e) {e = e || {}, s(e, { text: "loading", textColor: "#000", fontSize: "12px", maskColor: "rgba(255, 255, 255, 0.8)", showSpinner: !0, color: "#c23531", spinnerRadius: 10, lineWidth: 5, zlevel: 0 });var n = new hg(),i = new Rm({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 });n.add(i);var r = e.fontSize + " sans-serif",o = new Rm({ style: { fill: "none", text: e.text, font: r, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });if (n.add(o), e.showSpinner) {var a = new Gm({ shape: { startAngle: -E_ / 2, endAngle: -E_ / 2 + .1, r: e.spinnerRadius }, style: { stroke: e.color, lineCap: "round", lineWidth: e.lineWidth }, zlevel: e.zlevel, z: 10001 });a.animateShape(!0).when(1e3, { endAngle: 3 * E_ / 2 }).start("circularInOut"), a.animateShape(!0).when(1e3, { startAngle: 3 * E_ / 2 }).delay(300).start("circularInOut"), n.add(a);}return n.resize = function () {var n = Xn(e.text, r),s = e.showSpinner ? e.spinnerRadius : 0,l = (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 - (e.showSpinner ? 0 : n / 2),u = t.getHeight() / 2;e.showSpinner && a.setShape({ cx: l, cy: u }), o.setShape({ x: l - s, y: u - s, width: 2 * s, height: 2 * s }), i.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });}, n.resize(), n;},z_ = vl.prototype;z_.restoreData = function (t, e) {t.restoreData(e), this._stageTaskMap.each(function (t) {var e = t.overallTask;e && e.dirty();});}, z_.getPerformArgs = function (t, e) {if (t.__pipeline) {var n = this._pipelineMap.get(t.__pipeline.id),i = n.context,r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,o = r ? n.step : null,a = i && i.modDataCount,s = null != a ? Math.ceil(a / o) : null;return { step: o, modBy: s, modDataCount: a };}}, z_.getPipeline = function (t) {return this._pipelineMap.get(t);}, z_.updateStreamModes = function (t, e) {var n = this._pipelineMap.get(t.uid),i = t.getData(),r = i.count(),o = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,a = t.get("large") && r >= t.get("largeThreshold"),s = "mod" === t.get("progressiveChunkMode") ? r : null;t.pipelineContext = n.context = { progressiveRender: o, modDataCount: s, large: a };}, z_.restorePipelines = function (t) {var e = this,n = e._pipelineMap = N();t.eachSeries(function (t) {var i = t.getProgressive(),r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }), Dl(e, t, t.dataTask);});}, z_.prepareStageTasks = function () {var t = this._stageTaskMap,e = this.ecInstance.getModel(),n = this.api;f(this._allHandlers, function (i) {var r = t.get(i.uid) || t.set(i.uid, []);i.reset && yl(this, i, r, e, n), i.overallReset && _l(this, i, r, e, n);}, this);}, z_.prepareView = function (t, e, n, i) {var r = t.renderTask,o = r.context;o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, Dl(this, e, r);}, z_.performDataProcessorTasks = function (t, e) {ml(this, this._dataProcessorHandlers, t, e, { block: !0 });}, z_.performVisualTasks = function (t, e, n) {ml(this, this._visualHandlers, t, e, n);}, z_.performSeriesTasks = function (t) {var e;t.eachSeries(function (t) {e |= t.dataTask.perform();}), this.unfinished |= e;}, z_.plan = function () {this._pipelineMap.each(function (t) {var e = t.tail;do {if (e.__block) {t.blockIndex = e.__idxInPipeline;break;}e = e.getUpstream();} while (e);});};var R_ = z_.updatePayload = function (t, e) {"remain" !== e && (t.context.payload = e);},N_ = Cl(0);vl.wrapStageHandler = function (t, e) {return w(t) && (t = { overallReset: t, seriesType: kl(t) }), t.uid = va("stageHandler"), e && (t.visualType = e), t;};var F_,H_ = {},V_ = {};Al(H_, Zy), Al(V_, Ss), H_.eachSeriesByType = H_.eachRawSeriesByType = function (t) {F_ = t;}, H_.eachComponent = function (t) {"series" === t.mainType && t.subType && (F_ = t.subType);};var G_ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],W_ = { color: G_, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], G_] },X_ = "#eee",Y_ = function Y_() {return { axisLine: { lineStyle: { color: X_ } }, axisTick: { lineStyle: { color: X_ } }, axisLabel: { textStyle: { color: X_ } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: X_ } } };},U_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],j_ = { color: U_, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: X_ }, crossStyle: { color: X_ }, label: { color: "#000" } } }, legend: { textStyle: { color: X_ } }, textStyle: { color: X_ }, title: { textStyle: { color: X_ } }, toolbox: { iconStyle: { normal: { borderColor: X_ } } }, dataZoom: { textStyle: { color: X_ } }, visualMap: { textStyle: { color: X_ } }, timeline: { lineStyle: { color: X_ }, itemStyle: { normal: { color: U_[1] } }, label: { normal: { textStyle: { color: X_ } } }, controlStyle: { normal: { color: X_, borderColor: X_ } } }, timeAxis: Y_(), logAxis: Y_(), valueAxis: Y_(), categoryAxis: Y_(), line: { symbol: "circle" }, graph: { color: U_ }, gauge: { title: { textStyle: { color: X_ } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };j_.categoryAxis.splitLine.show = !1, Oy.extend({ type: "dataset", defaultOption: { seriesLayoutBy: Xy, sourceHeader: null, dimensions: null, source: null }, optionUpdated: function optionUpdated() {is(this);} }), w_.extend({ type: "dataset" });var q_ = to.extend({ type: "ellipse", shape: { cx: 0, cy: 0, rx: 0, ry: 0 }, buildPath: function buildPath(t, e) {var n = .5522848,i = e.cx,r = e.cy,o = e.rx,a = e.ry,s = o * n,l = a * n;t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), t.closePath();} }),Z_ = /[\s,]+/;Ll.prototype.parse = function (t, e) {e = e || {};var n = Pl(t);if (!n) throw new Error("Illegal svg");var i = new hg();this._root = i;var r = n.getAttribute("viewBox") || "",o = parseFloat(n.getAttribute("width") || e.width),a = parseFloat(n.getAttribute("height") || e.height);isNaN(o) && (o = null), isNaN(a) && (a = null), zl(n, i, null, !0);for (var s = n.firstChild; s;) {this._parseNode(s, i), s = s.nextSibling;}var l, u;if (r) {var h = E(r).split(Z_);h.length >= 4 && (l = { x: parseFloat(h[0] || 0), y: parseFloat(h[1] || 0), width: parseFloat(h[2]), height: parseFloat(h[3]) });
    }if (l && null != o && null != a && (u = Hl(l, o, a), !e.ignoreViewBox)) {var c = i;i = new hg(), i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice();}return e.ignoreRootClip || null == o || null == a || i.setClipPath(new Rm({ shape: { x: 0, y: 0, width: o, height: a } })), { root: i, width: o, height: a, viewBoxRect: l, viewBoxTransform: u };}, Ll.prototype._parseNode = function (t, e) {var n = t.nodeName.toLowerCase();"defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);var i;if (this._isDefine) {var r = $_[n];if (r) {var o = r.call(this, t),a = t.getAttribute("id");a && (this._defs[a] = o);}} else {var r = K_[n];r && (i = r.call(this, t, e), e.add(i));}for (var s = t.firstChild; s;) {1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;}"defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1);}, Ll.prototype._parseText = function (t, e) {if (1 === t.nodeType) {var n = t.getAttribute("dx") || 0,i = t.getAttribute("dy") || 0;this._textX += parseFloat(n), this._textY += parseFloat(i);}var r = new Im({ style: { text: t.textContent, transformText: !0 }, position: [this._textX || 0, this._textY || 0] });El(e, r), zl(t, r, this._defs);var o = r.style.fontSize;o && 9 > o && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= o / 9, r.scale[1] *= o / 9);var a = r.getBoundingRect();return this._textX += a.width, e.add(r), r;};var K_ = { g: function g(t, e) {var n = new hg();return El(e, n), zl(t, n, this._defs), n;}, rect: function rect(t, e) {var n = new Rm();return El(e, n), zl(t, n, this._defs), n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }), n;}, circle: function circle(t, e) {var n = new Cm();return El(e, n), zl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;}, line: function line(t, e) {var n = new Fm();return El(e, n), zl(t, n, this._defs), n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }), n;}, ellipse: function ellipse(t, e) {var n = new q_();return El(e, n), zl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }), n;}, polygon: function polygon(t, e) {var n = t.getAttribute("points");n && (n = Bl(n));var i = new Om({ shape: { points: n || [] } });return El(e, i), zl(t, i, this._defs), i;}, polyline: function polyline(t, e) {var n = new to();El(e, n), zl(t, n, this._defs);var i = t.getAttribute("points");i && (i = Bl(i));var r = new Em({ shape: { points: i || [] } });return r;}, image: function image(t, e) {var n = new Ti();return El(e, n), zl(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;}, text: function text(t, e) {var n = t.getAttribute("x") || 0,i = t.getAttribute("y") || 0,r = t.getAttribute("dx") || 0,o = t.getAttribute("dy") || 0;this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(o);var a = new hg();return El(e, a), zl(t, a, this._defs), a;}, tspan: function tspan(t, e) {var n = t.getAttribute("x"),i = t.getAttribute("y");null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));var r = t.getAttribute("dx") || 0,o = t.getAttribute("dy") || 0,a = new hg();return El(e, a), zl(t, a, this._defs), this._textX += r, this._textY += o, a;}, path: function path(t, e) {var n = t.getAttribute("d") || "",i = ro(n);return El(e, i), zl(t, i, this._defs), i;} },$_ = { lineargradient: function lineargradient(t) {var e = parseInt(t.getAttribute("x1") || 0, 10),n = parseInt(t.getAttribute("y1") || 0, 10),i = parseInt(t.getAttribute("x2") || 10, 10),r = parseInt(t.getAttribute("y2") || 0, 10),o = new Ym(e, n, i, r);return Ol(t, o), o;}, radialgradient: function radialgradient() {} },Q_ = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-align": "textAlign", "alignment-baseline": "textBaseline" },J_ = /url\(\s*#(.*?)\)/,tx = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,ex = /([^\s:;]+)\s*:\s*([^:;]+)/g,nx = N(),ix = { registerMap: function registerMap(t, e, n) {var i;return x(e) ? i = e : e.svg ? i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{ type: "geoJSON", source: e, specialAreas: n }]), f(i, function (t) {var e = t.type;"geoJson" === e && (e = t.type = "geoJSON");var n = rx[e];Uf && O(n, "Illegal map type: " + e), n(t);}), nx.set(t, i);}, retrieveMap: function retrieveMap(t) {return nx.get(t);} },rx = { geoJSON: function geoJSON(t) {var e = t.source;t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;}, svg: function svg(t) {t.svgXML = Pl(t.source);} },ox = O,ax = f,sx = w,lx = S,ux = Oy.parseClassType,hx = "4.9.0",cx = { zrender: "4.3.2" },dx = 1,fx = 1e3,px = 800,gx = 900,vx = 5e3,mx = 1e3,yx = 1100,_x = 2e3,xx = 3e3,bx = 3500,Sx = 4e3,Mx = 5e3,Ix = { PROCESSOR: { FILTER: fx, SERIES_FILTER: px, STATISTIC: vx }, VISUAL: { LAYOUT: mx, PROGRESSIVE_LAYOUT: yx, GLOBAL: _x, CHART: xx, POST_CHART_LAYOUT: bx, COMPONENT: Sx, BRUSH: Mx } },Cx = "__flagInMainProcess",Tx = "__optionUpdated",Dx = /^[a-zA-Z0-9_]+$/;Gl.prototype.on = Vl("on", !0), Gl.prototype.off = Vl("off", !0), Gl.prototype.one = Vl("one", !0), c(Gl, yp);var kx = Wl.prototype;kx._onframe = function () {if (!this._disposed) {var t = this._scheduler;if (this[Tx]) {var e = this[Tx].silent;this[Cx] = !0, Yl(this), Ax.update.call(this), this[Cx] = !1, this[Tx] = !1, Zl.call(this, e), Kl.call(this, e);} else if (t.unfinished) {var n = dx,i = this._model,r = this._api;t.unfinished = !1;do {var o = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), jl(this, i), t.performVisualTasks(i), nu(this, this._model, r, "remain"), n -= +new Date() - o;} while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();}}}, kx.getDom = function () {return this._dom;}, kx.getZr = function () {return this._zr;}, kx.setOption = function (t, e, n) {if (Uf && ox(!this[Cx], "`setOption` should not be called during main process."), this._disposed) return void ru(this.id);var i;if (lx(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Cx] = !0, !this._model || e) {var r = new Is(this._api),o = this._theme,a = this._model = new Zy();a.scheduler = this._scheduler, a.init(null, null, o, r);}this._model.setOption(t, Bx), n ? (this[Tx] = { silent: i }, this[Cx] = !1) : (Yl(this), Ax.update.call(this), this._zr.flush(), this[Tx] = !1, this[Cx] = !1, Zl.call(this, i), Kl.call(this, i));}, kx.setTheme = function () {console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");}, kx.getModel = function () {return this._model;}, kx.getOption = function () {return this._model && this._model.getOption();}, kx.getWidth = function () {return this._zr.getWidth();}, kx.getHeight = function () {return this._zr.getHeight();}, kx.getDevicePixelRatio = function () {return this._zr.painter.dpr || window.devicePixelRatio || 1;}, kx.getRenderedCanvas = function (t) {if (Kf.canvasSupported) {t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");var e = this._zr;return e.painter.getRenderedCanvas(t);}}, kx.getSvgDataURL = function () {if (Kf.svgSupported) {var t = this._zr,e = t.storage.getDisplayList();return f(e, function (t) {t.stopAnimation(!0);}), t.painter.toDataURL();}}, kx.getDataURL = function (t) {if (this._disposed) return void ru(this.id);t = t || {};var e = t.excludeComponents,n = this._model,i = [],r = this;ax(e, function (t) {n.eachComponent({ mainType: t }, function (t) {var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = !0);});});var o = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return ax(i, function (t) {t.group.ignore = !1;}), o;}, kx.getConnectedDataURL = function (t) {if (this._disposed) return void ru(this.id);if (Kf.canvasSupported) {var e = "svg" === t.type,n = this.group,r = Math.min,o = Math.max,a = 1 / 0;if (Vx[n]) {var s = a,l = a,u = -a,h = -a,c = [],d = t && t.pixelRatio || 1;f(Hx, function (a) {if (a.group === n) {var d = e ? a.getZr().painter.getSvgDom().innerHTML : a.getRenderedCanvas(i(t)),f = a.getDom().getBoundingClientRect();s = r(f.left, s), l = r(f.top, l), u = o(f.right, u), h = o(f.bottom, h), c.push({ dom: d, left: f.left, top: f.top });}}), s *= d, l *= d, u *= d, h *= d;var p = u - s,g = h - l,v = sp(),m = qi(v, { renderer: e ? "svg" : "canvas" });if (m.resize({ width: p, height: g }), e) {var y = "";return ax(c, function (t) {var e = t.left - s,n = t.top - l;y += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>";}), m.painter.getSvgRoot().innerHTML = y, t.connectedBackgroundColor && m.painter.setBackgroundColor(t.connectedBackgroundColor), m.refreshImmediately(), m.painter.toDataURL();}return t.connectedBackgroundColor && m.add(new Rm({ shape: { x: 0, y: 0, width: p, height: g }, style: { fill: t.connectedBackgroundColor } })), ax(c, function (t) {var e = new Ti({ style: { x: t.left * d - s, y: t.top * d - l, image: t.dom } });m.add(e);}), m.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"));}return this.getDataURL(t);}}, kx.convertToPixel = _(Xl, "convertToPixel"), kx.convertFromPixel = _(Xl, "convertFromPixel"), kx.containPixel = function (t, e) {if (this._disposed) return void ru(this.id);var n,i = this._model;return t = ur(i, t), f(t, function (t, i) {i.indexOf("Models") >= 0 && f(t, function (t) {var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {var o = this._chartsMap[t.__viewId];o && o.containPoint ? n |= o.containPoint(e, t) : Uf && console.warn(i + ": " + (o ? "The found component do not support containPoint." : "No view mapping to the found component."));} else Uf && console.warn(i + ": containPoint is not supported");}, this);}, this), !!n;}, kx.getVisual = function (t, e) {var n = this._model;t = ur(n, t, { defaultMainType: "series" });var i = t.seriesModel;Uf && (i || console.warn("There is no specified seires model"));var r = i.getData(),o = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;return null != o ? r.getItemVisual(o, e) : r.getVisual(e);}, kx.getViewOfComponentModel = function (t) {return this._componentsMap[t.__viewId];}, kx.getViewOfSeriesModel = function (t) {return this._chartsMap[t.__viewId];};var Ax = { prepareAndUpdate: function prepareAndUpdate(t) {Yl(this), Ax.update.call(this, t);}, update: function update(t) {var e = this._model,n = this._api,i = this._zr,r = this._coordSysMgr,o = this._scheduler;if (e) {o.restoreData(e, t), o.performSeriesTasks(e), r.create(e, n), o.performDataProcessorTasks(e, t), jl(this, e), r.update(e, n), Jl(e), o.performVisualTasks(e, t), tu(this, e, n, t);var a = e.get("backgroundColor") || "transparent";if (Kf.canvasSupported) i.setBackgroundColor(a);else {var s = Je(a);a = un(s, "rgb"), 0 === s[3] && (a = "transparent");}iu(e, n);}}, updateTransform: function updateTransform(t) {var e = this._model,n = this,i = this._api;if (e) {var r = [];e.eachComponent(function (o, a) {var s = n.getViewOfComponentModel(a);if (s && s.__alive) if (s.updateTransform) {var l = s.updateTransform(a, e, i, t);l && l.update && r.push(s);} else r.push(s);});var o = N();e.eachSeries(function (r) {var a = n._chartsMap[r.__viewId];if (a.updateTransform) {var s = a.updateTransform(r, e, i, t);s && s.update && o.set(r.uid, 1);} else o.set(r.uid, 1);}), Jl(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: o }), nu(n, e, i, t, o), iu(e, this._api);}}, updateView: function updateView(t) {var e = this._model;e && (ul.markUpdateMethod(t, "updateView"), Jl(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0 }), tu(this, this._model, this._api, t), iu(e, this._api));}, updateVisual: function updateVisual(t) {Ax.update.call(this, t);}, updateLayout: function updateLayout(t) {Ax.update.call(this, t);} };kx.resize = function (t) {if (Uf && ox(!this[Cx], "`resize` should not be called during main process."), this._disposed) return void ru(this.id);this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {var n = e.resetOption("media"),i = t && t.silent;this[Cx] = !0, n && Yl(this), Ax.update.call(this), this[Cx] = !1, Zl.call(this, i), Kl.call(this, i);}}, kx.showLoading = function (t, e) {if (this._disposed) return void ru(this.id);if (lx(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), !Fx[t]) return void (Uf && console.warn("Loading effects " + t + " not exists."));var n = Fx[t](this._api, e),i = this._zr;this._loadingFX = n, i.add(n);}, kx.hideLoading = function () {return this._disposed ? void ru(this.id) : (this._loadingFX && this._zr.remove(this._loadingFX), void (this._loadingFX = null));}, kx.makeActionFromEvent = function (t) {var e = a({}, t);return e.type = Ox[t.type], e;}, kx.dispatchAction = function (t, e) {if (this._disposed) return void ru(this.id);if (lx(e) || (e = { silent: !!e }), Lx[t.type] && this._model) {if (this[Cx]) return void this._pendingActions.push(t);ql.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Kf.browser.weChat && this._throttledZrFlush(), Zl.call(this, e.silent), Kl.call(this, e.silent);}}, kx.appendData = function (t) {if (this._disposed) return void ru(this.id);var e = t.seriesIndex,n = this.getModel(),i = n.getSeriesByIndex(e);Uf && ox(t.data && i), i.appendData(t), this._scheduler.unfinished = !0;}, kx.on = Vl("on", !1), kx.off = Vl("off", !1), kx.one = Vl("one", !1);var Px = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];kx._initEvents = function () {ax(Px, function (t) {var e = function e(_e3) {var n,i = this.getModel(),r = _e3.target,o = "globalout" === t;if (o) n = {};else if (r && null != r.dataIndex) {var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {};} else r && r.eventData && (n = a({}, r.eventData));if (n) {var l = n.componentType,u = n.componentIndex;("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);var h = l && null != u && i.getComponent(l, u),c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];Uf && (o || h && c || console.warn("model or view can not be found by params")), n.event = _e3, n.type = t, this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: h, view: c }, this.trigger(t, n);}};e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this);}, this), ax(Ox, function (t, e) {this._messageCenter.on(e, function (t) {this.trigger(e, t);}, this);}, this);}, kx.isDisposed = function () {return this._disposed;}, kx.clear = function () {return this._disposed ? void ru(this.id) : void this.setOption({ series: [] }, !0);}, kx.dispose = function () {if (this._disposed) return void ru(this.id);this._disposed = !0, cr(this.getDom(), Xx, "");var t = this._api,e = this._model;ax(this._componentsViews, function (n) {n.dispose(e, t);}), ax(this._chartsViews, function (n) {n.dispose(e, t);}), this._zr.dispose(), delete Hx[this.id];}, c(Wl, yp), uu.prototype = { constructor: uu, normalizeQuery: function normalizeQuery(t) {var e = {},n = {},i = {};if (b(t)) {var r = ux(t);e.mainType = r.main || null, e.subType = r.sub || null;} else {var o = ["Index", "Name", "Id"],a = { name: 1, dataIndex: 1, dataType: 1 };f(t, function (t, r) {for (var s = !1, l = 0; l < o.length; l++) {var u = o[l],h = r.lastIndexOf(u);if (h > 0 && h === r.length - u.length) {var c = r.slice(0, h);"data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0);}}a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t);});}return { cptQuery: e, dataQuery: n, otherQuery: i };}, filter: function filter(t, e) {function n(t, e, n, i) {return null == t[n] || e[i || n] === t[n];}var i = this.eventInfo;if (!i) return !0;var r = i.targetEl,o = i.packedEvent,a = i.model,s = i.view;if (!a || !s) return !0;var l = e.cptQuery,u = e.dataQuery;return n(l, a, "mainType") && n(l, a, "subType") && n(l, a, "index", "componentIndex") && n(l, a, "name") && n(l, a, "id") && n(u, o, "name") && n(u, o, "dataIndex") && n(u, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o));}, afterTrigger: function afterTrigger() {this.eventInfo = null;} };var Lx = {},Ox = {},Ex = [],Bx = [],zx = [],Rx = [],Nx = {},Fx = {},Hx = {},Vx = {},Gx = new Date() - 0,Wx = new Date() - 0,Xx = "_echarts_instance_",Yx = fu;Iu(_x, P_), yu(u_), _u(gx, h_), Tu("default", B_), wu({ type: "highlight", event: "highlight", update: "highlight" }, H), wu({ type: "downplay", event: "downplay", update: "downplay" }, H), mu("light", W_), mu("dark", j_);var Ux = {};zu.prototype = { constructor: zu, add: function add(t) {return this._add = t, this;}, update: function update(t) {return this._update = t, this;}, remove: function remove(t) {return this._remove = t, this;}, execute: function execute() {var t,e = this._old,n = this._new,i = {},r = {},o = [],a = [];for (Ru(e, i, o, "_oldKeyGetter", this), Ru(n, r, a, "_newKeyGetter", this), t = 0; t < e.length; t++) {var s = o[t],l = r[s];if (null != l) {var u = l.length;u ? (1 === u && (r[s] = null), l = l.shift()) : r[s] = null, this._update && this._update(l, t);} else this._remove && this._remove(t);}for (var t = 0; t < a.length; t++) {var s = a[t];if (r.hasOwnProperty(s)) {var l = r[s];if (null == l) continue;if (l.length) for (var h = 0, u = l.length; u > h; h++) {this._add && this._add(l[h]);} else this._add && this._add(l);}}} };var jx = N(["tooltip", "label", "itemName", "itemId", "seriesName"]),qx = S,Zx = "undefined",Kx = -1,$x = "e\x00\x00",Qx = { "float": typeof Float64Array === Zx ? Array : Float64Array, "int": typeof Int32Array === Zx ? Array : Int32Array, ordinal: Array, number: Array, time: Array },Jx = typeof Uint32Array === Zx ? Array : Uint32Array,tw = typeof Int32Array === Zx ? Array : Int32Array,ew = typeof Uint16Array === Zx ? Array : Uint16Array,nw = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],iw = ["_extent", "_approximateExtent", "_rawExtent"],rw = function rw(t, e) {t = t || ["x", "y"];for (var n = {}, i = [], r = {}, o = 0; o < t.length; o++) {var a = t[o];b(a) ? a = new Gu({ name: a }) : a instanceof Gu || (a = new Gu(a));var s = a.name;a.type = a.type || "float", a.coordDim || (a.coordDim = s, a.coordDimIndex = 0), a.otherDims = a.otherDims || {}, i.push(s), n[s] = a, a.index = o, a.createInvertedIndices && (r[s] = []);}this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Nu(this), this._invertedIndicesMap = r, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput;},ow = rw.prototype;ow.type = "list", ow.hasItemOption = !0, ow.getDimension = function (t) {return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), t;}, ow.getDimensionInfo = function (t) {return this._dimensionInfos[this.getDimension(t)];}, ow.getDimensionsOnCoord = function () {return this._dimensionsSummary.dataDimsOnCoord.slice();}, ow.mapDimension = function (t, e) {var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return e === !0 ? (i || []).slice() : i && i[e];}, ow.initData = function (t, e, n) {var i = ns.isInstance(t) || d(t);if (i && (t = new Ws(t, this.dimensions.length)), Uf && !i && ("function" != typeof t.getItem || "function" != typeof t.count)) throw new Error("Inavlid data provider.");this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = p_[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = p_.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);}, ow.getProvider = function () {return this._rawData;}, ow.appendData = function (t) {Uf && O(!this._indices, "appendData can only be called on raw data.");var e = this._rawData,n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);}, ow.appendValues = function (t, e) {for (var n = this._chunkSize, i = this._storage, r = this.dimensions, o = r.length, a = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, h = 0; o > h; h++) {var c = r[h];a[c] || (a[c] = nh()), i[c] || (i[c] = []), Uu(i, this._dimensionInfos[c], n, u, l), this._chunkCount = i[c].length;}for (var d = new Array(o), f = s; l > f; f++) {for (var p = f - s, g = Math.floor(f / n), v = f % n, m = 0; o > m; m++) {var c = r[m],y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);i[c][g][v] = y;var _ = a[c];y < _[0] && (_[0] = y), y > _[1] && (_[1] = y);}e && (this._nameList[f] = e[p]);}this._rawCount = this._count = l, this._extent = {}, ju(this);}, ow._initDataFromProvider = function (t, e) {if (!(t >= e)) {for (var n, i = this._chunkSize, r = this._rawData, o = this._storage, a = this.dimensions, s = a.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {var g = a[p];c[g] || (c[g] = nh());var v = l[g];0 === v.otherDims.itemName && (n = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), o[g] || (o[g] = []), Uu(o, v, i, f, e), this._chunkCount = o[g].length;}for (var m = new Array(s), y = t; e > y; y++) {m = r.getItem(y, m);for (var _ = Math.floor(y / i), x = y % i, w = 0; s > w; w++) {var g = a[w],b = o[g][_],S = this._dimValueGetter(m, g, y, w);b[x] = S;var M = c[g];S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);}if (!r.pure) {var I = u[y];if (m && null == I) if (null != m.name) u[y] = I = m.name;else if (null != n) {var C = a[n],T = o[C][_];if (T) {I = T[x];var D = l[C].ordinalMeta;D && D.categories.length && (I = D.categories[I]);}}var k = null == m ? null : m.id;null == k && null != I && (d[I] = d[I] || 0, k = I, d[I] > 0 && (k += "__ec__" + d[I]), d[I]++), null != k && (h[y] = k);}}!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, ju(this);}}, ow.count = function () {return this._count;}, ow.getIndices = function () {var t,e = this._indices;if (e) {var n = e.constructor,i = this._count;if (n === Array) {t = new n(i);for (var r = 0; i > r; r++) {t[r] = e[r];}} else t = new n(e.buffer, 0, i);} else for (var n = Wu(this), t = new n(this.count()), r = 0; r < t.length; r++) {t[r] = r;}return t;}, ow.get = function (t, e) {if (!(e >= 0 && e < this._count)) return 0 / 0;var n = this._storage;if (!n[t]) return 0 / 0;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),r = e % this._chunkSize,o = n[t][i],a = o[r];return a;}, ow.getByRawIndex = function (t, e) {if (!(e >= 0 && e < this._rawCount)) return 0 / 0;var n = this._storage[t];if (!n) return 0 / 0;var i = Math.floor(e / this._chunkSize),r = e % this._chunkSize,o = n[i];return o[r];}, ow._getFast = function (t, e) {var n = Math.floor(e / this._chunkSize),i = e % this._chunkSize,r = this._storage[t][n];return r[i];}, ow.getValues = function (t, e) {var n = [];x(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; r > i; i++) {n.push(this.get(t[i], e));}return n;}, ow.hasValue = function (t) {for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; i > n; n++) {if (isNaN(this.get(e[n], t))) return !1;}return !0;}, ow.getDataExtent = function (t) {t = this.getDimension(t);var e = this._storage[t],n = nh();if (!e) return n;var i,r = this.count(),o = !this._indices;if (o) return this._rawExtent[t].slice();if (i = this._extent[t]) return i.slice();i = n;for (var a = i[0], s = i[1], l = 0; r > l; l++) {var u = this._getFast(t, this.getRawIndex(l));a > u && (a = u), u > s && (s = u);}return i = [a, s], this._extent[t] = i, i;}, ow.getApproximateExtent = function (t) {return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);}, ow.setApproximateExtent = function (t, e) {e = this.getDimension(e), this._approximateExtent[e] = t.slice();}, ow.getCalculationInfo = function (t) {return this._calculationInfo[t];}, ow.setCalculationInfo = function (t, e) {qx(t) ? a(this._calculationInfo, t) : this._calculationInfo[t] = e;}, ow.getSum = function (t) {var e = this._storage[t],n = 0;if (e) for (var i = 0, r = this.count(); r > i; i++) {var o = this.get(t, i);isNaN(o) || (n += o);}return n;}, ow.getMedian = function (t) {var e = [];this.each(t, function (t) {isNaN(t) || e.push(t);});var n = [].concat(e).sort(function (t, e) {return t - e;}),i = this.count();return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;}, ow.rawIndexOf = function (t, e) {var n = t && this._invertedIndicesMap[t];if (Uf && !n) throw new Error("Do not supported yet");var i = n[e];return null == i || isNaN(i) ? Kx : i;}, ow.indexOfName = function (t) {for (var e = 0, n = this.count(); n > e; e++) {if (this.getName(e) === t) return e;}return -1;}, ow.indexOfRawIndex = function (t) {if (t >= this._rawCount || 0 > t) return -1;if (!this._indices) return t;var e = this._indices,n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; r >= i;) {var o = (i + r) / 2 | 0;if (e[o] < t) i = o + 1;else {if (!(e[o] > t)) return o;r = o - 1;}}return -1;}, ow.indicesOfNearest = function (t, e, n) {var i = this._storage,r = i[t],o = [];if (!r) return o;null == n && (n = 1 / 0);for (var a = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {var c = e - this.get(t, u),d = Math.abs(c);n >= d && ((a > d || d === a && c >= 0 && 0 > s) && (a = d, s = c, l = 0), c === s && (o[l++] = u));}return o.length = l, o;}, ow.getRawIndex = Zu, ow.getRawDataItem = function (t) {if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {var i = this.dimensions[n];e.push(this.get(i, t));}return e;}, ow.getName = function (t) {var e = this.getRawIndex(t);return this._nameList[e] || qu(this, this._nameDimIdx, e) || "";}, ow.getId = function (t) {return $u(this, this.getRawIndex(t));}, ow.each = function (t, e, n, i) {if (this._count) {"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Qu(t), this.getDimension, this), Uf && Ju(this, t);for (var r = t.length, o = 0; o < this.count(); o++) {switch (r) {case 0:e.call(n, o);break;case 1:e.call(n, this.get(t[0], o), o);break;case 2:e.call(n, this.get(t[0], o), this.get(t[1], o), o);break;default:for (var a = 0, s = []; r > a; a++) {s[a] = this.get(t[a], o);}s[a] = o, e.apply(n, s);}}}}, ow.filterSelf = function (t, e, n, i) {if (this._count) {"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Qu(t), this.getDimension, this), Uf && Ju(this, t);for (var r = this.count(), o = Wu(this), a = new o(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {var d,f = this.getRawIndex(c);if (0 === l) d = e.call(n, c);else if (1 === l) {var g = this._getFast(h, f);d = e.call(n, g, c);} else {for (var v = 0; l > v; v++) {s[v] = this._getFast(h, f);}s[v] = c, d = e.apply(n, s);}d && (a[u++] = f);}return r > u && (this._indices = a), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? Ku : Zu, this;}}, ow.selectRange = function (t) {if (this._count) {var e = [];for (var n in t) {t.hasOwnProperty(n) && e.push(n);}Uf && Ju(this, e);var i = e.length;if (i) {var r = this.count(),o = Wu(this),a = new o(r),s = 0,l = e[0],u = t[l][0],h = t[l][1],c = !1;if (!this._indices) {var d = 0;if (1 === i) {for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {var y = g[m];(y >= u && h >= y || isNaN(y)) && (a[s++] = d), d++;}}c = !0;} else if (2 === i) {for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {var y = g[m],S = b[m];(y >= u && h >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (a[s++] = d), d++;}}c = !0;}}if (!c) if (1 === i) for (var m = 0; r > m; m++) {var M = this.getRawIndex(m),y = this._getFast(l, M);(y >= u && h >= y || isNaN(y)) && (a[s++] = M);} else for (var m = 0; r > m; m++) {for (var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {var C = e[p],y = this._getFast(n, M);(y < t[C][0] || y > t[C][1]) && (I = !1);}I && (a[s++] = this.getRawIndex(m));}return r > s && (this._indices = a), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Ku : Zu, this;}}}, ow.mapArray = function (t, e, n, i) {"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {r.push(e && e.apply(this, arguments));}, n), r;}, ow.map = function (t, e, n, i) {n = n || i || this, t = p(Qu(t), this.getDimension, this), Uf && Ju(this, t);var r = th(this, t);r._indices = this._indices, r.getRawIndex = r._indices ? Ku : Zu;for (var o = r._storage, a = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {for (var f = 0; l > f; f++) {h[f] = this.get(t[f], d);}h[l] = d;var g = e && e.apply(n, h);if (null != g) {"object" != typeof g && (a[0] = g, g = a);for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {var x = t[_],w = g[_],b = c[x],S = o[x];S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);}}}return r;}, ow.downSample = function (t, e, n, i) {for (var r = th(this, [t]), o = r._storage, a = [], s = Math.floor(1 / e), l = o[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (Wu(this))(u), f = 0, p = 0; u > p; p += s) {s > u - p && (s = u - p, a.length = s);for (var g = 0; s > g; g++) {var v = this.getRawIndex(p + g),m = Math.floor(v / h),y = v % h;a[g] = l[m][y];}var _ = n(a),x = this.getRawIndex(Math.min(p + i(a, _) || 0, u - 1)),w = Math.floor(x / h),b = x % h;l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;}return r._count = f, r._indices = d, r.getRawIndex = Ku, r;}, ow.getItemModel = function (t) {var e = this.hostModel;return new fa(this.getRawDataItem(t), e, e && e.ecModel);}, ow.diff = function (t) {var e = this;return new zu(t ? t.getIndices() : [], this.getIndices(), function (e) {return $u(t, e);}, function (t) {return $u(e, t);});}, ow.getVisual = function (t) {var e = this._visual;return e && e[t];}, ow.setVisual = function (t, e) {if (qx(t)) for (var n in t) {t.hasOwnProperty(n) && this.setVisual(n, t[n]);} else this._visual = this._visual || {}, this._visual[t] = e;}, ow.setLayout = function (t, e) {if (qx(t)) for (var n in t) {t.hasOwnProperty(n) && this.setLayout(n, t[n]);} else this._layout[t] = e;}, ow.getLayout = function (t) {return this._layout[t];}, ow.getItemLayout = function (t) {return this._itemLayouts[t];}, ow.setItemLayout = function (t, e, n) {this._itemLayouts[t] = n ? a(this._itemLayouts[t] || {}, e) : e;}, ow.clearItemLayouts = function () {this._itemLayouts.length = 0;}, ow.getItemVisual = function (t, e, n) {var i = this._itemVisuals[t],r = i && i[e];return null != r || n ? r : this.getVisual(e);}, ow.setItemVisual = function (t, e, n) {var i = this._itemVisuals[t] || {},r = this.hasItemVisual;if (this._itemVisuals[t] = i, qx(e)) for (var o in e) {e.hasOwnProperty(o) && (i[o] = e[o], r[o] = !0);} else i[e] = n, r[e] = !0;}, ow.clearAllVisual = function () {this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};};var aw = function aw(t) {t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;};ow.setItemGraphicEl = function (t, e) {var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(aw, e)), this._graphicEls[t] = e;}, ow.getItemGraphicEl = function (t) {return this._graphicEls[t];}, ow.eachItemGraphicEl = function (t, e) {f(this._graphicEls, function (n, i) {n && t && t.call(e, n, i);});}, ow.cloneShallow = function (t) {if (!t) {var e = p(this.dimensions, this.getDimensionInfo, this);t = new rw(e, this.hostModel);}if (t._storage = this._storage, Yu(t, this), this._indices) {var n = this._indices.constructor;t._indices = new n(this._indices);} else t._indices = null;return t.getRawIndex = t._indices ? Ku : Zu, t;}, ow.wrapMethod = function (t, e) {var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {var t = n.apply(this, arguments);return e.apply(this, [t].concat(P(arguments)));});}, ow.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], ow.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var sw = function sw(t, e) {return e = e || {}, ih(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, encodeDefaulter: e.encodeDefaulter, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });},lw = { cartesian2d: function cartesian2d(t, e, n, i) {var r = t.getReferringComponents("xAxis")[0],o = t.getReferringComponents("yAxis")[0];if (Uf) {if (!r) throw new Error('xAxis "' + D(t.get("xAxisIndex"), t.get("xAxisId"), 0) + '" not found');if (!o) throw new Error('yAxis "' + D(t.get("xAxisIndex"), t.get("yAxisId"), 0) + '" not found');}e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", o), lh(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), lh(o) && (i.set("y", o), null == e.firstCategoryDimIndex & (e.firstCategoryDimIndex = 1));}, singleAxis: function singleAxis(t, e, n, i) {var r = t.getReferringComponents("singleAxis")[0];if (Uf && !r) throw new Error("singleAxis should be specified.");e.coordSysDims = ["single"], n.set("single", r), lh(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);}, polar: function polar(t, e, n, i) {var r = t.getReferringComponents("polar")[0],o = r.findAxisModel("radiusAxis"),a = r.findAxisModel("angleAxis");if (Uf) {if (!a) throw new Error("angleAxis option not found");if (!o) throw new Error("radiusAxis option not found");}e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", a), lh(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), lh(a) && (i.set("angle", a), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));}, geo: function geo(t, e) {e.coordSysDims = ["lng", "lat"];}, parallel: function parallel(t, e, n, i) {var r = t.ecModel,o = r.getComponent("parallel", t.get("parallelIndex")),a = e.coordSysDims = o.dimensions.slice();f(o.parallelAxisIndex, function (t, o) {var s = r.getComponent("parallelAxis", t),l = a[o];n.set(l, s), lh(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = o);});} };gh.prototype.parse = function (t) {return t;}, gh.prototype.getSetting = function (t) {return this._setting[t];}, gh.prototype.contain = function (t) {var e = this._extent;return t >= e[0] && t <= e[1];}, gh.prototype.normalize = function (t) {var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);}, gh.prototype.scale = function (t) {var e = this._extent;return t * (e[1] - e[0]) + e[0];}, gh.prototype.unionExtent = function (t) {var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);}, gh.prototype.unionExtentFromData = function (t, e) {this.unionExtent(t.getApproximateExtent(e));}, gh.prototype.getExtent = function () {return this._extent.slice();}, gh.prototype.setExtent = function (t, e) {var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);}, gh.prototype.isBlank = function () {return this._isBlank;
  }, gh.prototype.setBlank = function (t) {this._isBlank = t;}, gh.prototype.getLabel = null, vr(gh), xr(gh, { registerWhenExtend: !0 }), vh.createByAxisModel = function (t) {var e = t.option,n = e.data,i = n && p(n, yh);return new vh({ categories: i, needCollect: !i, deduplication: e.dedplication !== !1 });};var uw = vh.prototype;uw.getOrdinal = function (t) {return mh(this).get(t);}, uw.parseAndCollect = function (t) {var e,n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = mh(this);return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e;};var hw = gh.prototype,cw = gh.extend({ type: "ordinal", init: function init(t, e) {(!t || x(t)) && (t = new vh({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];}, parse: function parse(t) {return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);}, contain: function contain(t) {return t = this.parse(t), hw.contain.call(this, t) && null != this._ordinalMeta.categories[t];}, normalize: function normalize(t) {return hw.normalize.call(this, this.parse(t));}, scale: function scale(t) {return Math.round(hw.scale.call(this, t));}, getTicks: function getTicks() {for (var t = [], e = this._extent, n = e[0]; n <= e[1];) {t.push(n), n++;}return t;}, getLabel: function getLabel(t) {return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];}, count: function count() {return this._extent[1] - this._extent[0] + 1;}, unionExtentFromData: function unionExtentFromData(t, e) {this.unionExtent(t.getApproximateExtent(e));}, getOrdinalMeta: function getOrdinalMeta() {return this._ordinalMeta;}, niceTicks: H, niceExtent: H });cw.create = function () {return new cw();};var dw = ba,fw = ba,pw = gh.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function setExtent(t, e) {var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));}, unionExtent: function unionExtent(t) {var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), pw.prototype.setExtent.call(this, e[0], e[1]);}, getInterval: function getInterval() {return this._interval;}, setInterval: function setInterval(t) {this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = xh(t);}, getTicks: function getTicks(t) {var e = this._interval,n = this._extent,i = this._niceExtent,r = this._intervalPrecision,o = [];if (!e) return o;var a = 1e4;n[0] < i[0] && o.push(t ? fw(i[0] - e, r) : n[0]);for (var s = i[0]; s <= i[1] && (o.push(s), s = fw(s + e, r), s !== o[o.length - 1]);) {if (o.length > a) return [];}var l = o.length ? o[o.length - 1] : i[1];return n[1] > l && o.push(t ? fw(l + e, r) : n[1]), o;}, getMinorTicks: function getMinorTicks(t) {for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {for (var o = e[r], a = e[r - 1], s = 0, l = [], u = o - a, h = u / t; t - 1 > s;) {var c = ba(a + (s + 1) * h);c > i[0] && c < i[1] && l.push(c), s++;}n.push(l);}return n;}, getLabel: function getLabel(t, e) {if (null == t) return "";var n = e && e.precision;return null == n ? n = Ia(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = fw(t, n, !0), Ra(t);}, niceTicks: function niceTicks(t, e, n) {t = t || 5;var i = this._extent,r = i[1] - i[0];if (isFinite(r)) {0 > r && (r = -r, i.reverse());var o = _h(i, t, e, n);this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent;}}, niceExtent: function niceExtent(t) {var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);} else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = fw(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = fw(Math.ceil(e[1] / r) * r));} });pw.create = function () {return new pw();};var gw = "__ec_stack_",vw = .5,mw = "undefined" != typeof Float32Array ? Float32Array : Array,yw = { seriesType: "bar", plan: S_(), reset: function reset(t) {function e(t, e) {for (var n, d = t.count, f = new mw(2 * d), p = new mw(2 * d), g = new mw(d), v = [], m = [], y = 0, _ = 0; null != (n = t.next());) {m[h] = e.get(s, n), m[1 - h] = e.get(l, n), v = i.dataToPoint(m, null, v), p[y] = u ? r.x + r.width : v[0], f[y++] = v[0], p[y] = u ? v[1] : r.y + r.height, f[y++] = v[1], g[_++] = n;}e.setLayout({ largePoints: f, largeDataIndices: g, largeBackgroundPoints: p, barWidth: c, valueAxisStart: Oh(o, a, !1), backgroundStart: u ? r.x : r.y, valueAxisHorizontal: u });}if (Ph(t) && Lh(t)) {var n = t.getData(),i = t.coordinateSystem,r = i.grid.getRect(),o = i.getBaseAxis(),a = i.getOtherAxis(o),s = n.mapDimension(a.dim),l = n.mapDimension(o.dim),u = a.isHorizontal(),h = u ? 0 : 1,c = kh(Th([t]), o, t).width;return c > vw || (c = vw), { progress: e };}} },_w = pw.prototype,xw = Math.ceil,ww = Math.floor,bw = 1e3,Sw = 60 * bw,Mw = 60 * Sw,Iw = 24 * Mw,Cw = function Cw(t, e, n, i) {for (; i > n;) {var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;}return n;},Tw = pw.extend({ type: "time", getLabel: function getLabel(t) {var e = this._stepLvl,n = new Date(t);return Xa(e[0], n, this.getSetting("useUTC"));}, niceExtent: function niceExtent(t) {var e = this._extent;if (e[0] === e[1] && (e[0] -= Iw, e[1] += Iw), e[1] === -1 / 0 && 1 / 0 === e[0]) {var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Iw;}this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = ba(ww(e[0] / i) * i)), t.fixMax || (e[1] = ba(xw(e[1] / i) * i));}, niceTicks: function niceTicks(t, e, n) {t = t || 10;var i = this._extent,r = i[1] - i[0],o = r / t;null != e && e > o && (o = e), null != n && o > n && (o = n);var a = Dw.length,s = Cw(Dw, o, 0, a),l = Dw[Math.min(s, a - 1)],u = l[1];if ("year" === l[0]) {var h = r / u,c = Oa(h / t, !0);u *= c;}var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,f = [Math.round(xw((i[0] - d) / u) * u + d), Math.round(ww((i[1] - d) / u) * u + d)];bh(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f;}, parse: function parse(t) {return +Aa(t);} });f(["contain", "normalize"], function (t) {Tw.prototype[t] = function (e) {return _w[t].call(this, this.parse(e));};});var Dw = [["hh:mm:ss", bw], ["hh:mm:ss", 5 * bw], ["hh:mm:ss", 10 * bw], ["hh:mm:ss", 15 * bw], ["hh:mm:ss", 30 * bw], ["hh:mm\nMM-dd", Sw], ["hh:mm\nMM-dd", 5 * Sw], ["hh:mm\nMM-dd", 10 * Sw], ["hh:mm\nMM-dd", 15 * Sw], ["hh:mm\nMM-dd", 30 * Sw], ["hh:mm\nMM-dd", Mw], ["hh:mm\nMM-dd", 2 * Mw], ["hh:mm\nMM-dd", 6 * Mw], ["hh:mm\nMM-dd", 12 * Mw], ["MM-dd\nyyyy", Iw], ["MM-dd\nyyyy", 2 * Iw], ["MM-dd\nyyyy", 3 * Iw], ["MM-dd\nyyyy", 4 * Iw], ["MM-dd\nyyyy", 5 * Iw], ["MM-dd\nyyyy", 6 * Iw], ["week", 7 * Iw], ["MM-dd\nyyyy", 10 * Iw], ["week", 14 * Iw], ["week", 21 * Iw], ["month", 31 * Iw], ["week", 42 * Iw], ["month", 62 * Iw], ["week", 70 * Iw], ["quarter", 95 * Iw], ["month", 31 * Iw * 4], ["month", 31 * Iw * 5], ["half-year", 380 * Iw / 2], ["month", 31 * Iw * 8], ["month", 31 * Iw * 10], ["year", 380 * Iw]];Tw.create = function (t) {return new Tw({ useUTC: t.ecModel.get("useUTC") });};var kw = gh.prototype,Aw = pw.prototype,Pw = Ia,Lw = ba,Ow = Math.floor,Ew = Math.ceil,Bw = Math.pow,zw = Math.log,Rw = gh.extend({ type: "log", base: 10, $constructor: function $constructor() {gh.apply(this, arguments), this._originalScale = new pw();}, getTicks: function getTicks(t) {var e = this._originalScale,n = this._extent,i = e.getExtent();return p(Aw.getTicks.call(this, t), function (t) {var r = ba(Bw(this.base, t));return r = t === n[0] && e.__fixMin ? Eh(r, i[0]) : r, r = t === n[1] && e.__fixMax ? Eh(r, i[1]) : r;}, this);}, getMinorTicks: Aw.getMinorTicks, getLabel: Aw.getLabel, scale: function scale(t) {return t = kw.scale.call(this, t), Bw(this.base, t);}, setExtent: function setExtent(t, e) {var n = this.base;t = zw(t) / zw(n), e = zw(e) / zw(n), Aw.setExtent.call(this, t, e);}, getExtent: function getExtent() {var t = this.base,e = kw.getExtent.call(this);e[0] = Bw(t, e[0]), e[1] = Bw(t, e[1]);var n = this._originalScale,i = n.getExtent();return n.__fixMin && (e[0] = Eh(e[0], i[0])), n.__fixMax && (e[1] = Eh(e[1], i[1])), e;}, unionExtent: function unionExtent(t) {this._originalScale.unionExtent(t);var e = this.base;t[0] = zw(t[0]) / zw(e), t[1] = zw(t[1]) / zw(e), kw.unionExtent.call(this, t);}, unionExtentFromData: function unionExtentFromData(t, e) {this.unionExtent(t.getApproximateExtent(e));}, niceTicks: function niceTicks(t) {t = t || 10;var e = this._extent,n = e[1] - e[0];if (!(1 / 0 === n || 0 >= n)) {var i = Pa(n),r = t / n * i;for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) {i *= 10;}var o = [ba(Ew(e[0] / i) * i), ba(Ow(e[1] / i) * i)];this._interval = i, this._niceExtent = o;}}, niceExtent: function niceExtent(t) {Aw.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;} });f(["contain", "normalize"], function (t) {Rw.prototype[t] = function (e) {return e = zw(e) / zw(this.base), kw[t].call(this, e);};}), Rw.create = function () {return new Rw();};var Nw = { getMin: function getMin(t) {var e = this.option,n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;}, getMax: function getMax(t) {var e = this.option,n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;}, getNeedCrossZero: function getNeedCrossZero() {var t = this.option;return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;}, getCoordSysModel: H, setRange: function setRange(t, e) {this.option.rangeStart = t, this.option.rangeEnd = e;}, resetRange: function resetRange() {this.option.rangeStart = this.option.rangeEnd = null;} },Fw = go({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = e.width / 2,o = e.height / 2;t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath();} }),Hw = go({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = e.width / 2,o = e.height / 2;t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath();} }),Vw = go({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.x,i = e.y,r = e.width / 5 * 3,o = Math.max(r, e.height),a = r / 2,s = a * a / (o - a),l = i - o + a + s,u = Math.asin(s / a),h = Math.cos(u) * a,c = Math.sin(u),d = Math.cos(u),f = .6 * a,p = .7 * a;t.moveTo(n - h, l + s), t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath();} }),Gw = go({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.height,i = e.width,r = e.x,o = e.y,a = i / 3 * 2;t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), t.lineTo(r, o), t.closePath();} }),Ww = { line: Fm, rect: Rm, roundRect: Rm, square: Rm, circle: Cm, diamond: Hw, pin: Vw, arrow: Gw, triangle: Fw },Xw = { line: function line(t, e, n, i, r) {r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;}, rect: function rect(t, e, n, i, r) {r.x = t, r.y = e, r.width = n, r.height = i;}, roundRect: function roundRect(t, e, n, i, r) {r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;}, square: function square(t, e, n, i, r) {var o = Math.min(n, i);r.x = t, r.y = e, r.width = o, r.height = o;}, circle: function circle(t, e, n, i, r) {r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;}, diamond: function diamond(t, e, n, i, r) {r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;}, pin: function pin(t, e, n, i, r) {r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;}, arrow: function arrow(t, e, n, i, r) {r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;}, triangle: function triangle(t, e, n, i, r) {r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;} },Yw = {};f(Ww, function (t, e) {Yw[e] = new t();});var Uw = go({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, calculateTextPosition: function calculateTextPosition(t, e, n) {var i = Kn(t, e, n),r = this.shape;return r && "pin" === r.symbolType && "inside" === e.textPosition && (i.y = n.y + .4 * n.height), i;}, buildPath: function buildPath(t, e, n) {var i = e.symbolType;if ("none" !== i) {var r = Yw[i];r || (i = "rect", r = Yw[i]), Xw[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n);}} }),jw = { isDimensionStacked: hh, enableDataStack: uh, getStackedDimension: ch },qw = (Object.freeze || Object)({ createList: qh, getLayoutRect: Ka, dataStack: jw, createScale: Zh, mixinAxisModelCommonMethods: Kh, completeDimensions: ih, createDimensions: sw, createSymbol: jh }),Zw = 1e-8;Jh.prototype = { constructor: Jh, properties: null, getBoundingRect: function getBoundingRect() {var t = this._rect;if (t) return t;for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], o = [], a = this.geometries, s = 0; s < a.length; s++) {if ("polygon" === a[s].type) {var l = a[s].exterior;Br(l, r, o), ae(n, n, r), se(i, i, o);}}return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new Cn(n[0], n[1], i[0] - n[0], i[1] - n[1]);}, contain: function contain(t) {var e = this.getBoundingRect(),n = this.geometries;if (!e.contain(t[0], t[1])) return !1;t: for (var i = 0, r = n.length; r > i; i++) {if ("polygon" === n[i].type) {var o = n[i].exterior,a = n[i].interiors;if (Qh(o, t[0], t[1])) {for (var s = 0; s < (a ? a.length : 0); s++) {if (Qh(a[s])) continue t;}return !0;}}}return !1;}, transformTo: function transformTo(t, e, n, i) {var r = this.getBoundingRect(),o = r.width / r.height;n ? i || (i = n / o) : n = o * i;for (var a = new Cn(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) {if ("polygon" === l[u].type) {for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) {oe(h[d], h[d], s);}for (var f = 0; f < (c ? c.length : 0); f++) {for (var d = 0; d < c[f].length; d++) {oe(c[f][d], c[f][d], s);}}}}r = this._rect, r.copy(a), this.center = [r.x + r.width / 2, r.y + r.height / 2];}, cloneShallow: function cloneShallow(t) {null == t && (t = this.name);var e = new Jh(t, this.geometries, this.center);return e._rect = this._rect, e.transformTo = null, e;} };var Kw = function Kw(t, e) {return tc(t), p(v(t.features, function (t) {return t.geometry && t.properties && t.geometry.coordinates.length > 0;}), function (t) {var n = t.properties,i = t.geometry,r = i.coordinates,o = [];"Polygon" === i.type && o.push({ type: "polygon", exterior: r[0], interiors: r.slice(1) }), "MultiPolygon" === i.type && f(r, function (t) {t[0] && o.push({ type: "polygon", exterior: t[0], interiors: t.slice(1) });});var a = new Jh(n[e || "name"], o, n.cp);return a.properties = n, a;});},$w = lr(),Qw = [0, 1],Jw = function Jw(t, e, n) {this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1;};Jw.prototype = { constructor: Jw, contain: function contain(t) {var e = this._extent,n = Math.min(e[0], e[1]),i = Math.max(e[0], e[1]);return t >= n && i >= t;}, containData: function containData(t) {return this.scale.contain(t);}, getExtent: function getExtent() {return this._extent.slice();}, getPixelPrecision: function getPixelPrecision(t) {return Ca(t || this.scale.getExtent(), this._extent);}, setExtent: function setExtent(t, e) {var n = this._extent;n[0] = t, n[1] = e;}, dataToCoord: function dataToCoord(t, e) {var n = this._extent,i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), vc(n, i.count())), xa(t, Qw, n, e);}, coordToData: function coordToData(t, e) {var n = this._extent,i = this.scale;this.onBand && "ordinal" === i.type && (n = n.slice(), vc(n, i.count()));var r = xa(t, n, Qw, e);return this.scale.scale(r);}, pointToData: function pointToData() {}, getTicksCoords: function getTicksCoords(t) {t = t || {};var e = t.tickModel || this.getTickModel(),n = ic(this, e),i = n.ticks,r = p(i, function (t) {return { coord: this.dataToCoord(t), tickValue: t };}, this),o = e.get("alignWithLabel");return mc(this, r, o, t.clamp), r;}, getMinorTicksCoords: function getMinorTicksCoords() {if ("ordinal" === this.scale.type) return [];var t = this.model.getModel("minorTick"),e = t.get("splitNumber");e > 0 && 100 > e || (e = 5);var n = this.scale.getMinorTicks(e),i = p(n, function (t) {return p(t, function (t) {return { coord: this.dataToCoord(t), tickValue: t };}, this);}, this);return i;}, getViewLabels: function getViewLabels() {return nc(this).labels;}, getLabelModel: function getLabelModel() {return this.model.getModel("axisLabel");}, getTickModel: function getTickModel() {return this.model.getModel("axisTick");}, getBandWidth: function getBandWidth() {var t = this._extent,e = this.scale.getExtent(),n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;}, isHorizontal: null, getRotate: null, calculateCategoryInterval: function calculateCategoryInterval() {return dc(this);} };var tb = Kw,eb = {};f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {eb[t] = hp[t];});var nb = {};f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "registerShape", "getShapeClass", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {nb[t] = ly[t];});var ib = function ib(t) {this._axes = {}, this._dimList = [], this.name = t || "";};ib.prototype = { constructor: ib, type: "cartesian", getAxis: function getAxis(t) {return this._axes[t];}, getAxes: function getAxes() {return p(this._dimList, yc, this);}, getAxesByScale: function getAxesByScale(t) {return t = t.toLowerCase(), v(this.getAxes(), function (e) {return e.scale.type === t;});}, addAxis: function addAxis(t) {var e = t.dim;this._axes[e] = t, this._dimList.push(e);}, dataToCoord: function dataToCoord(t) {return this._dataCoordConvert(t, "dataToCoord");}, coordToData: function coordToData(t) {return this._dataCoordConvert(t, "coordToData");}, _dataCoordConvert: function _dataCoordConvert(t, e) {for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {var o = n[r],a = this._axes[o];i[o] = a[e](t[o]);}return i;} }, _c.prototype = { constructor: _c, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function getBaseAxis() {return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");}, containPoint: function containPoint(t) {var e = this.getAxis("x"),n = this.getAxis("y");return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));}, containData: function containData(t) {return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);}, dataToPoint: function dataToPoint(t, e, n) {var i = this.getAxis("x"),r = this.getAxis("y");return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;}, clampData: function clampData(t, e) {var n = this.getAxis("x").scale,i = this.getAxis("y").scale,r = n.getExtent(),o = i.getExtent(),a = n.parse(t[0]),s = i.parse(t[1]);return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e;}, pointToData: function pointToData(t, e) {var n = this.getAxis("x"),i = this.getAxis("y");return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;}, getOtherAxis: function getOtherAxis(t) {return this.getAxis("x" === t.dim ? "y" : "x");}, getArea: function getArea() {var t = this.getAxis("x").getGlobalExtent(),e = this.getAxis("y").getGlobalExtent(),n = Math.min(t[0], t[1]),i = Math.min(e[0], e[1]),r = Math.max(t[0], t[1]) - n,o = Math.max(e[0], e[1]) - i,a = new Cn(n, i, r, o);return a;} }, h(_c, ib);var rb = function rb(t, e, n, i, r) {Jw.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";};rb.prototype = { constructor: rb, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function isHorizontal() {var t = this.position;return "top" === t || "bottom" === t;}, getGlobalExtent: function getGlobalExtent(t) {var e = this.getExtent();return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;}, getOtherAxis: function getOtherAxis() {this.grid.getOtherAxis();}, pointToData: function pointToData(t, e) {return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);}, toLocalCoord: null, toGlobalCoord: null }, h(rb, Jw);var ob = { show: !0, zlevel: 0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisPointer: {}, axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },ab = {};ab.categoryAxis = r({ boundaryGap: !0, deduplication: null, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, ob), ab.valueAxis = r({ boundaryGap: [0, 0], splitNumber: 5, minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} }, minorSplitLine: { show: !1, lineStyle: { color: "#eee", width: 1 } } }, ob), ab.timeAxis = s({ scale: !0, min: "dataMin", max: "dataMax" }, ab.valueAxis), ab.logAxis = s({ scale: !0, logBase: 10 }, ab.valueAxis);var sb = ["value", "category", "time", "log"],lb = function lb(t, e, n, i) {f(sb, function (a) {e.extend({ type: t + "Axis." + a, mergeDefaultAndTheme: function mergeDefaultAndTheme(e, i) {var o = this.layoutMode,s = o ? Qa(e) : {},l = i.getTheme();r(e, l.get(a + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), o && $a(e, s, o);}, optionUpdated: function optionUpdated() {var t = this.option;"category" === t.type && (this.__ordinalMeta = vh.createByAxisModel(this));}, getCategories: function getCategories(t) {var e = this.option;return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;}, getOrdinalMeta: function getOrdinalMeta() {return this.__ordinalMeta;}, defaultOption: o([{}, ab[a + "Axis"], i], !0) });}), Oy.registerSubTypeDefaulter(t + "Axis", _(n, t));},ub = Oy.extend({ type: "cartesian2dAxis", axis: null, init: function init() {ub.superApply(this, "init", arguments), this.resetRange();}, mergeOption: function mergeOption() {ub.superApply(this, "mergeOption", arguments), this.resetRange();}, restoreData: function restoreData() {ub.superApply(this, "restoreData", arguments), this.resetRange();}, getCoordSysModel: function getCoordSysModel() {return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];} });r(ub.prototype, Nw);var hb = { offset: 0 };lb("x", ub, xc, hb), lb("y", ub, xc, hb), Oy.extend({ type: "grid", dependencies: ["xAxis", "yAxis"], layoutMode: "box", coordinateSystem: null, defaultOption: { show: !1, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: !1, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" } });var cb = bc.prototype;cb.type = "grid", cb.axisPointerEnabled = !0, cb.getRect = function () {return this._rect;}, cb.update = function (t, e) {var n = this._axesMap;this._updateScale(t, this.model), f(n.x, function (t) {Rh(t.scale, t.model);}), f(n.y, function (t) {Rh(t.scale, t.model);});var i = {};f(n.x, function (t) {Sc(n, "y", t, i);}), f(n.y, function (t) {Sc(n, "x", t, i);}), this.resize(this.model, e);}, cb.resize = function (t, e, n) {function i() {f(o, function (t) {var e = t.isHorizontal(),n = e ? [0, r.width] : [0, r.height],i = t.inverse ? 1 : 0;t.setExtent(n[i], n[1 - i]), Ic(t, e ? r.x : r.y);});}var r = Ka(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });this._rect = r;var o = this._axesList;i(), !n && t.get("containLabel") && (f(o, function (t) {if (!t.model.get("axisLabel.inside")) {var e = Gh(t);if (e) {var n = t.isHorizontal() ? "height" : "width",i = t.model.get("axisLabel.margin");r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);}}}), i());}, cb.getAxis = function (t, e) {var n = this._axesMap[t];if (null != n) {if (null == e) for (var i in n) {if (n.hasOwnProperty(i)) return n[i];}return n[e];}}, cb.getAxes = function () {return this._axesList.slice();}, cb.getCartesian = function (t, e) {if (null != t && null != e) {var n = "x" + t + "y" + e;return this._coordsMap[n];}S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);for (var i = 0, r = this._coordsList; i < r.length; i++) {if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];}}, cb.getCartesians = function () {return this._coordsList.slice();}, cb.convertToPixel = function (t, e, n) {var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;}, cb.convertFromPixel = function (t, e, n) {var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;}, cb._findConvertTarget = function (t, e) {var n,i,r = e.seriesModel,o = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],a = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],s = e.gridModel,l = this._coordsList;if (r) n = r.coordinateSystem, u(l, n) < 0 && (n = null);else if (o && a) n = this.getCartesian(o.componentIndex, a.componentIndex);else if (o) i = this.getAxis("x", o.componentIndex);else if (a) i = this.getAxis("y", a.componentIndex);else if (s) {var h = s.coordinateSystem;h === this && (n = this._coordsList[0]);}return { cartesian: n, axis: i };}, cb.containPoint = function (t) {var e = this._coordsList[0];return e ? e.containPoint(t) : void 0;}, cb._initCartesian = function (t, e) {function n(n) {return function (a, s) {if (wc(a, t, e)) {var l = a.get("position");"x" === n ? "top" !== l && "bottom" !== l && (l = i.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = i.left ? "right" : "left"), i[l] = !0;var u = new rb(n, Nh(a), [0, 0], a.get("type"), l),h = "category" === u.type;u.onBand = h && a.get("boundaryGap"), u.inverse = a.get("inverse"), a.axis = u, u.model = a, u.grid = this, u.index = s, this._axesList.push(u), r[n][s] = u, o[n]++;}};}var i = { left: !1, right: !1, top: !1, bottom: !1 },r = { x: {}, y: {} },o = { x: 0, y: 0 };return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), o.x && o.y ? (this._axesMap = r, void f(r.x, function (e, n) {f(r.y, function (i, r) {var o = "x" + n + "y" + r,a = new _c(o);a.grid = this, a.model = t, this._coordsMap[o] = a, this._coordsList.push(a), a.addAxis(e), a.addAxis(i);}, this);}, this)) : (this._axesMap = {}, void (this._axesList = []));}, cb._updateScale = function (t, e) {function n(t, e) {f(t.mapDimension(e.dim, !0), function (n) {e.scale.unionExtentFromData(t, ch(t, n));});}f(this._axesList, function (t) {t.scale.setExtent(1 / 0, -1 / 0);}), t.eachSeries(function (i) {if (Tc(i)) {var r = Cc(i, t),o = r[0],a = r[1];if (!wc(o, e, t) || !wc(a, e, t)) return;var s = this.getCartesian(o.componentIndex, a.componentIndex),l = i.getData(),u = s.getAxis("x"),h = s.getAxis("y");"list" === l.type && (n(l, u, i), n(l, h, i));}}, this);}, cb.getTooltipAxes = function (t) {var e = [],n = [];return f(this.getCartesians(), function (i) {var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),o = i.getOtherAxis(r);u(e, r) < 0 && e.push(r), u(n, o) < 0 && n.push(o);}), { baseAxes: e, otherAxes: n };};var db = ["xAxis", "yAxis"];bc.create = function (t, e) {var n = [];return t.eachComponent("grid", function (i, r) {var o = new bc(i, t, e);o.name = "grid_" + r, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o);}), t.eachSeries(function (e) {if (Tc(e)) {var n = Cc(e, t),i = n[0],r = n[1],o = i.getCoordSysModel();if (Uf) {if (!o) throw new Error('Grid "' + D(i.get("gridIndex"), i.get("gridId"), 0) + '" not found');if (i.getCoordSysModel() !== r.getCoordSysModel()) throw new Error("xAxis and yAxis must use the same grid");}var a = o.coordinateSystem;e.coordinateSystem = a.getCartesian(i.componentIndex, r.componentIndex);}}), n;}, bc.dimensions = bc.prototype.dimensions = _c.prototype.dimensions, Ms.register("cartesian2d", bc);var fb = x_.extend({ type: "series.__base_bar__", getInitialData: function getInitialData() {return dh(this.getSource(), this, { useEncodeDefaulter: !0 });}, getMarkerPosition: function getMarkerPosition(t) {var e = this.coordinateSystem;if (e) {var n = e.dataToPoint(e.clampData(t)),i = this.getData(),r = i.getLayout("offset"),o = i.getLayout("size"),a = e.getBaseAxis().isHorizontal() ? 0 : 1;return n[a] += r + o / 2, n;}return [0 / 0, 0 / 0];}, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, barMinHeight: 0, barMinAngle: 0, large: !1, largeThreshold: 400, progressive: 3e3, progressiveChunkMode: "mod", itemStyle: {}, emphasis: {} } });fb.extend({ type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function getProgressive() {return this.get("large") ? this.get("progressive") : !1;}, getProgressiveThreshold: function getProgressiveThreshold() {var t = this.get("progressiveThreshold"),e = this.get("largeThreshold");return e > t && (t = e), t;}, defaultOption: { clip: !0, roundCap: !1, showBackground: !1, backgroundStyle: { color: "rgba(180, 180, 180, 0.2)", borderColor: null, borderWidth: 0, borderType: "solid", borderRadius: 0, shadowBlur: 0, shadowColor: null, shadowOffsetX: 0, shadowOffsetY: 0, opacity: 1 } } });var pb = yv([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),gb = { getBarItemStyle: function getBarItemStyle(t) {var e = pb(this, t);if (this.getBorderLineDash) {var n = this.getBorderLineDash();n && (e.lineDash = n);}return e;} },vb = go({ type: "sausage", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = Math.max(e.r0 || 0, 0),o = Math.max(e.r, 0),a = .5 * (o - r),s = r + a,l = e.startAngle,u = e.endAngle,h = e.clockwise,c = Math.cos(l),d = Math.sin(l),f = Math.cos(u),p = Math.sin(u),g = h ? u - l < 2 * Math.PI : l - u < 2 * Math.PI;g && (t.moveTo(c * r + n, d * r + i), t.arc(c * s + n, d * s + i, a, -Math.PI + l, l, !h)), t.arc(n, i, o, l, u, !h), t.moveTo(f * o + n, p * o + i), t.arc(f * s + n, p * s + i, a, u - 2 * Math.PI, u - Math.PI, !h), 0 !== r && (t.arc(n, i, r, u, l, h), t.moveTo(c * r + n, p * r + i)), t.closePath();} }),mb = ["itemStyle", "barBorderWidth"],yb = [0, 0];a(fa.prototype, gb), Pu({ type: "bar", render: function render(t, e, n) {this._updateDrawMode(t);var i = t.get("coordinateSystem");return "cartesian2d" === i || "polar" === i ? this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n) : Uf && console.warn("Only cartesian2d and polar supported for bar."), this.group;}, incrementalPrepareRender: function incrementalPrepareRender(t) {this._clear(), this._updateDrawMode(t);}, incrementalRender: function incrementalRender(t, e) {this._incrementalRenderLarge(t, e);}, _updateDrawMode: function _updateDrawMode(t) {var e = t.pipelineContext.large;(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear());}, _renderNormal: function _renderNormal(t) {var e,n = this.group,i = t.getData(),r = this._data,o = t.coordinateSystem,a = o.getBaseAxis();"cartesian2d" === o.type ? e = a.isHorizontal() : "polar" === o.type && (e = "angle" === a.dim);var s = t.isAnimationEnabled() ? t : null,l = t.get("clip", !0),u = Ec(o, i);n.removeClipPath();var h = t.get("roundCap", !0),c = t.get("showBackground", !0),d = t.getModel("backgroundStyle"),f = d.get("barBorderRadius") || 0,p = [],g = this._backgroundEls || [],v = function v(t) {var n = Sb[o.type](i, t),r = Yc(o, e, n);return r.useStyle(d.getBarItemStyle()), "cartesian2d" === o.type && r.setShape("r", f), p[t] = r, r;};i.diff(r).add(function (r) {var a = i.getItemModel(r),d = Sb[o.type](i, r, a);if (c && v(r), i.hasValue(r)) {if (l) {var f = wb[o.type](u, d);if (f) return void n.remove(p);}var p = bb[o.type](r, d, e, s, !1, h);i.setItemGraphicEl(r, p), n.add(p), Nc(p, i, r, a, d, t, e, "polar" === o.type);}}).update(function (a, m) {var y = i.getItemModel(a),_ = Sb[o.type](i, a, y);if (c) {var x;0 === g.length ? x = v(m) : (x = g[m], x.useStyle(d.getBarItemStyle()), "cartesian2d" === o.type && x.setShape("r", f), p[a] = x);var w = Sb[o.type](i, a),b = Xc(e, w, o);ta(x, { shape: b }, s, a);}var S = r.getItemGraphicEl(m);if (!i.hasValue(a)) return void n.remove(S);if (l) {var M = wb[o.type](u, _);if (M) return void n.remove(S);}S ? ta(S, { shape: _ }, s, a) : S = bb[o.type](a, _, e, s, !0, h), i.setItemGraphicEl(a, S), n.add(S), Nc(S, i, a, y, _, t, e, "polar" === o.type);}).remove(function (t) {var e = r.getItemGraphicEl(t);"cartesian2d" === o.type ? e && Bc(t, s, e) : e && zc(t, s, e);}).execute();var m = this._backgroundGroup || (this._backgroundGroup = new hg());m.removeAll();for (var y = 0; y < p.length; ++y) {m.add(p[y]);}n.add(m), this._backgroundEls = p, this._data = i;}, _renderLarge: function _renderLarge(t) {this._clear(), Hc(t, this.group);var e = t.get("clip", !0) ? Oc(t.coordinateSystem, !1, t) : null;e ? this.group.setClipPath(e) : this.group.removeClipPath();}, _incrementalRenderLarge: function _incrementalRenderLarge(t, e) {this._removeBackground(), Hc(e, this.group, !0);}, dispose: H, remove: function remove(t) {this._clear(t);}, _clear: function _clear(t) {var e = this.group,n = this._data;t && t.get("animation") && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function (e) {"sector" === e.type ? zc(e.dataIndex, t, e) : Bc(e.dataIndex, t, e);})) : e.removeAll(), this._data = null;}, _removeBackground: function _removeBackground() {this.group.remove(this._backgroundGroup), this._backgroundGroup = null;} });var _b = Math.max,xb = Math.min,wb = { cartesian2d: function cartesian2d(t, e) {var n = e.width < 0 ? -1 : 1,i = e.height < 0 ? -1 : 1;0 > n && (e.x += e.width, e.width = -e.width), 0 > i && (e.y += e.height, e.height = -e.height);var r = _b(e.x, t.x),o = xb(e.x + e.width, t.x + t.width),a = _b(e.y, t.y),s = xb(e.y + e.height, t.y + t.height);e.x = r, e.y = a, e.width = o - r, e.height = s - a;var l = e.width < 0 || e.height < 0;return 0 > n && (e.x += e.width, e.width = -e.width), 0 > i && (e.y += e.height, e.height = -e.height), l;}, polar: function polar(t, e) {var n = e.r0 <= e.r ? 1 : -1;if (0 > n) {var i = e.r;e.r = e.r0, e.r0 = i;}var i = xb(e.r, t.r),r = _b(e.r0, t.r0);e.r = i, e.r0 = r;var o = 0 > i - r;if (0 > n) {var i = e.r;e.r = e.r0, e.r0 = i;}return o;} },bb = { cartesian2d: function cartesian2d(t, e, n, i, r) {var o = new Rm({ shape: a({}, e), z2: 1 });if (o.name = "item", i) {var s = o.shape,l = n ? "height" : "width",u = {};s[l] = 0, u[l] = e[l], ly[r ? "updateProps" : "initProps"](o, { shape: u }, i, t);}return o;}, polar: function polar(t, e, n, i, r, o) {var a = e.startAngle < e.endAngle,l = !n && o ? vb : km,u = new l({ shape: s({ clockwise: a }, e), z2: 1 });if (u.name = "item", i) {var h = u.shape,c = n ? "r" : "endAngle",d = {};h[c] = n ? 0 : e.startAngle, d[c] = e[c], ly[r ? "updateProps" : "initProps"](u, { shape: d }, i, t);}return u;} },Sb = { cartesian2d: function cartesian2d(t, e, n) {var i = t.getItemLayout(e),r = n ? Fc(n, i) : 0,o = i.width > 0 ? 1 : -1,a = i.height > 0 ? 1 : -1;return { x: i.x + o * r / 2, y: i.y + a * r / 2, width: i.width - o * r, height: i.height - a * r };}, polar: function polar(t, e) {var n = t.getItemLayout(e);return { cx: n.cx, cy: n.cy, r0: n.r0, r: n.r, startAngle: n.startAngle, endAngle: n.endAngle };} },Mb = to.extend({ type: "largeBar", shape: { points: [] }, buildPath: function buildPath(t, e) {for (var n = e.points, i = this.__startPoint, r = this.__baseDimIdx, o = 0; o < n.length; o += 2) {i[r] = n[o + r], t.moveTo(i[0], i[1]), t.lineTo(n[o], n[o + 1]);}} }),Ib = pl(function (t) {var e = this,n = Vc(e, t.offsetX, t.offsetY);e.dataIndex = n >= 0 ? n : null;}, 30, !1),Cb = Math.PI,Tb = function Tb(t, e) {this.opt = e, this.axisModel = t, s(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), this.group = new hg();var n = new hg({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;};Tb.prototype = { constructor: Tb, hasBuilder: function hasBuilder(t) {return !!Db[t];}, add: function add(t) {Db[t].call(this);}, getGroup: function getGroup() {return this.group;} };var Db = { axisLine: function axisLine() {var t = this.opt,e = this.axisModel;if (e.get("axisLine.show")) {var n = this.axisModel.axis.getExtent(),i = this._transform,r = [n[0], 0],o = [n[1], 0];i && (oe(r, r, i), oe(o, o, i));var s = a({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Fm({ anid: "line", subPixelOptimize: !0, shape: { x1: r[0], y1: r[1], x2: o[0], y2: o[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 }));var l = e.get("axisLine.symbol"),u = e.get("axisLine.symbolSize"),h = e.get("axisLine.symbolOffset") || 0;
        if ("number" == typeof h && (h = [h, h]), null != l) {"string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);var c = u[0],d = u[1];f([{ rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: h[1], r: Math.sqrt((r[0] - o[0]) * (r[0] - o[0]) + (r[1] - o[1]) * (r[1] - o[1])) }], function (e, n) {if ("none" !== l[n] && null != l[n]) {var i = jh(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),o = e.r + e.offset,a = [r[0] + o * Math.cos(t.rotation), r[1] - o * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: a, silent: !0, z2: 11 }), this.group.add(i);}}, this);}}}, axisTickLabel: function axisTickLabel() {var t = this.axisModel,e = this.opt,n = Qc(this, t, e),i = td(this, t, e);jc(t, i, n), Jc(this, t, e);}, axisName: function axisName() {var t = this.opt,e = this.axisModel,n = D(t.axisName, e.get("name"));if (n) {var i,r = e.get("nameLocation"),o = t.nameDirection,s = e.getModel("nameTextStyle"),l = e.get("nameGap") || 0,u = this.axisModel.axis.getExtent(),h = u[0] > u[1] ? -1 : 1,c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Kc(r) ? t.labelOffset + o * l : 0],d = e.get("nameRotate");null != d && (d = d * Cb / 180);var f;Kc(r) ? i = Ab(t.rotation, null != d ? d : t.rotation, o) : (i = Uc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));var p = s.getFont(),g = e.get("nameTruncate", !0) || {},v = g.ellipsis,m = D(t.nameTruncateMaxWidth, g.maxWidth, f),y = null != v && null != m ? Iy(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,_ = e.get("tooltip", !0),x = e.mainType,w = { componentType: x, name: n, $vars: ["name"] };w[x + "Index"] = e.componentIndex;var b = new Im({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: Pb(e), z2: 1, tooltip: _ && _.show ? a({ content: n, formatter: function formatter() {return n;}, formatterParams: w }, _) : null });Xo(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: s.get("align") || i.textAlign, textVerticalAlign: s.get("verticalAlign") || i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = kb(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();}} },kb = Tb.makeAxisEventDataBase = function (t) {var e = { componentType: t.mainType, componentIndex: t.componentIndex };return e[t.mainType + "Index"] = t.componentIndex, e;},Ab = Tb.innerTextLayout = function (t, e, n) {var i,r,o = Da(e - t);return ka(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : ka(o - Cb) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = o > 0 && Cb > o ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: o, textAlign: i, textVerticalAlign: r };},Pb = Tb.isLabelSilent = function (t) {var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);},Lb = f,Ob = _,Eb = ku({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function render(t, e, n, i) {this.axisPointerClass && sd(t), Eb.superApply(this, "render", arguments), dd(this, t, e, n, i, !0);}, updateAxisPointer: function updateAxisPointer(t, e, n, i) {dd(this, t, e, n, i, !1);}, remove: function remove(t, e) {var n = this._axisPointer;n && n.remove(e), Eb.superApply(this, "remove", arguments);}, dispose: function dispose(t, e) {fd(this, e), Eb.superApply(this, "dispose", arguments);} }),Bb = [];Eb.registerAxisPointerClass = function (t, e) {if (Uf && Bb[t]) throw new Error("axisPointer " + t + " exists");Bb[t] = e;}, Eb.getAxisPointerClass = function (t) {return t && Bb[t];};var zb = ["axisLine", "axisTickLabel", "axisName"],Rb = ["splitArea", "splitLine", "minorSplitLine"],Nb = Eb.extend({ type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function render(t, e, n, i) {this.group.removeAll();var r = this._axisGroup;if (this._axisGroup = new hg(), this.group.add(this._axisGroup), t.get("show")) {var o = t.getCoordSysModel(),a = pd(o, t),s = new Tb(t, a);f(zb, s.add, s), this._axisGroup.add(s.getGroup()), f(Rb, function (e) {t.get(e + ".show") && this["_" + e](t, o);}, this), oa(r, this._axisGroup, t), Nb.superCall(this, "render", t, e, n, i);}}, remove: function remove() {vd(this);}, _splitLine: function _splitLine(t, e) {var n = t.axis;if (!n.scale.isBlank()) {var i = t.getModel("splitLine"),r = i.getModel("lineStyle"),o = r.get("color");o = x(o) ? o : [o];for (var a = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({ tickModel: i }), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {var g = n.toGlobalCoord(h[p].coord);l ? (c[0] = g, c[1] = a.y, d[0] = g, d[1] = a.y + a.height) : (c[0] = a.x, c[1] = g, d[0] = a.x + a.width, d[1] = g);var v = u++ % o.length,m = h[p].tickValue;this._axisGroup.add(new Fm({ anid: null != m ? "line_" + h[p].tickValue : null, subPixelOptimize: !0, shape: { x1: c[0], y1: c[1], x2: d[0], y2: d[1] }, style: s({ stroke: o[v] }, f), silent: !0 }));}}}, _minorSplitLine: function _minorSplitLine(t, e) {var n = t.axis,i = t.getModel("minorSplitLine"),r = i.getModel("lineStyle"),o = e.coordinateSystem.getRect(),a = n.isHorizontal(),s = n.getMinorTicksCoords();if (s.length) for (var l = [], u = [], h = r.getLineStyle(), c = 0; c < s.length; c++) {for (var d = 0; d < s[c].length; d++) {var f = n.toGlobalCoord(s[c][d].coord);a ? (l[0] = f, l[1] = o.y, u[0] = f, u[1] = o.y + o.height) : (l[0] = o.x, l[1] = f, u[0] = o.x + o.width, u[1] = f), this._axisGroup.add(new Fm({ anid: "minor_line_" + s[c][d].tickValue, subPixelOptimize: !0, shape: { x1: l[0], y1: l[1], x2: u[0], y2: u[1] }, style: h, silent: !0 }));}}}, _splitArea: function _splitArea(t, e) {gd(this, this._axisGroup, t, e);} });Nb.extend({ type: "xAxis" }), Nb.extend({ type: "yAxis" }), ku({ type: "grid", render: function render(t) {this.group.removeAll(), t.get("show") && this.group.add(new Rm({ shape: t.coordinateSystem.getRect(), style: s({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: !0, z2: -1 }));} }), yu(function (t) {t.xAxis && t.yAxis && !t.grid && (t.grid = {});}), Mu(Ix.VISUAL.LAYOUT, _(Ah, "bar")), Mu(Ix.VISUAL.PROGRESSIVE_LAYOUT, yw), Iu({ seriesType: "bar", reset: function reset(t) {t.getData().setVisual("legendSymbol", "roundRect");} }), x_.extend({ type: "series.line", dependencies: ["grid", "polar"], getInitialData: function getInitialData(t) {if (Uf) {var e = t.coordinateSystem;if ("polar" !== e && "cartesian2d" !== e) throw new Error("Line not support coordinateSystem besides cartesian and polar");}return dh(this.getSource(), this, { useEncodeDefaulter: !0 });}, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, hoverAnimation: !0, clip: !0, label: { position: "top" }, lineStyle: { width: 2, type: "solid" }, step: !1, smooth: !1, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 4, symbolRotate: null, showSymbol: !0, showAllSymbol: "auto", connectNulls: !1, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: 1 / 0 } });var Fb = md.prototype,Hb = md.getSymbolSize = function (t, e) {var n = t.getItemVisual(e, "symbolSize");return n instanceof Array ? n.slice() : [+n, +n];};Fb._createSymbol = function (t, e, n, i, r) {this.removeAll();var o = e.getItemVisual(n, "color"),a = jh(t, -1, -1, 2, 2, o, r);a.attr({ z2: 100, culling: !0, scale: yd(i) }), a.drift = _d, this._symbolType = t, this.add(a);}, Fb.stopSymbolAnimation = function (t) {this.childAt(0).stopAnimation(t);}, Fb.getSymbolPath = function () {return this.childAt(0);}, Fb.getScale = function () {return this.childAt(0).scale;}, Fb.highlight = function () {this.childAt(0).trigger("emphasis");}, Fb.downplay = function () {this.childAt(0).trigger("normal");}, Fb.setZ = function (t, e) {var n = this.childAt(0);n.zlevel = t, n.z = e;}, Fb.setDraggable = function (t) {var e = this.childAt(0);e.draggable = t, e.cursor = t ? "move" : e.cursor;}, Fb.updateData = function (t, e, n) {this.silent = !1;var i = t.getItemVisual(e, "symbol") || "circle",r = t.hostModel,o = Hb(t, e),a = i !== this._symbolType;if (a) {var s = t.getItemVisual(e, "symbolKeepAspect");this._createSymbol(i, t, e, o, s);} else {var l = this.childAt(0);l.silent = !1, ta(l, { scale: yd(o) }, r, e);}if (this._updateCommon(t, e, o, n), a) {var l = this.childAt(0),u = n && n.fadeIn,h = { scale: l.scale.slice() };u && (h.style = { opacity: l.style.opacity }), l.scale = [0, 0], u && (l.style.opacity = 0), ea(l, h, r, e);}this._seriesModel = r;};var Vb = ["itemStyle"],Gb = ["emphasis", "itemStyle"],Wb = ["label"],Xb = ["emphasis", "label"];Fb._updateCommon = function (t, e, n, i) {function r(e) {return b ? t.getName(e) : Dc(t, e);}var o = this.childAt(0),s = t.hostModel,l = t.getItemVisual(e, "color");"image" !== o.type ? o.useStyle({ strokeNoScale: !0 }) : o.setStyle({ opacity: 1, shadowBlur: null, shadowOffsetX: null, shadowOffsetY: null, shadowColor: null });var u = i && i.itemStyle,h = i && i.hoverItemStyle,c = i && i.symbolOffset,d = i && i.labelModel,f = i && i.hoverLabelModel,p = i && i.hoverAnimation,g = i && i.cursorStyle;if (!i || t.hasItemOption) {var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);u = v.getModel(Vb).getItemStyle(["color"]), h = v.getModel(Gb).getItemStyle(), c = v.getShallow("symbolOffset"), d = v.getModel(Wb), f = v.getModel(Xb), p = v.getShallow("hoverAnimation"), g = v.getShallow("cursor");} else h = a({}, h);var m = o.style,y = t.getItemVisual(e, "symbolRotate");o.attr("rotation", (y || 0) * Math.PI / 180 || 0), c && o.attr("position", [wa(c[0], n[0]), wa(c[1], n[1])]), g && o.attr("cursor", g), o.setColor(l, i && i.symbolInnerColor), o.setStyle(u);var _ = t.getItemVisual(e, "opacity");null != _ && (m.opacity = _);var x = t.getItemVisual(e, "liftZ"),w = o.__z2Origin;null != x ? null == w && (o.__z2Origin = o.z2, o.z2 += x) : null != w && (o.z2 = w, o.__z2Origin = null);var b = i && i.useNameLabel;Go(m, h, d, f, { labelFetcher: s, labelDataIndex: e, defaultText: r, isRectText: !0, autoColor: l }), o.__symbolOriginalScale = yd(n), o.hoverStyle = h, o.highDownOnUpdate = p && s.isAnimationEnabled() ? xd : null, No(o);}, Fb.fadeOut = function (t, e) {var n = this.childAt(0);this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), ta(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);}, h(md, hg);var Yb = wd.prototype;Yb.updateData = function (t, e) {e = Sd(e);var n = this.group,i = t.hostModel,r = this._data,o = this._symbolCtor,a = Md(t);r || n.removeAll(), t.diff(r).add(function (i) {var r = t.getItemLayout(i);if (bd(t, r, i, e)) {var s = new o(t, i, a);s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);}}).update(function (s, l) {var u = r.getItemGraphicEl(l),h = t.getItemLayout(s);return bd(t, h, s, e) ? (u ? (u.updateData(t, s, a), ta(u, { position: h }, i)) : (u = new o(t, s), u.attr("position", h)), n.add(u), void t.setItemGraphicEl(s, u)) : void n.remove(u);}).remove(function (t) {var e = r.getItemGraphicEl(t);e && e.fadeOut(function () {n.remove(e);});}).execute(), this._data = t;}, Yb.isPersistent = function () {return !0;}, Yb.updateLayout = function () {var t = this._data;t && t.eachItemGraphicEl(function (e, n) {var i = t.getItemLayout(n);e.attr("position", i);});}, Yb.incrementalPrepareUpdate = function (t) {this._seriesScope = Md(t), this._data = null, this.group.removeAll();}, Yb.incrementalUpdate = function (t, e, n) {function i(t) {t.isGroup || (t.incremental = t.useHoverLayer = !0);}n = Sd(n);for (var r = t.start; r < t.end; r++) {var o = e.getItemLayout(r);if (bd(e, o, r, n)) {var a = new this._symbolCtor(e, r, this._seriesScope);a.traverse(i), a.attr("position", o), this.group.add(a), e.setItemGraphicEl(r, a);}}}, Yb.remove = function (t) {var e = this.group,n = this._data;n && t ? n.eachItemGraphicEl(function (t) {t.fadeOut(function () {e.remove(t);});}) : e.removeAll();};var Ub = function Ub(t, e, n, i, r, o, a, s) {for (var l = Dd(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = Id(r, e, a), m = Id(o, t, s), y = 0; y < l.length; y++) {var _ = l[y],x = !0;switch (_.cmd) {case "=":var w = t.getItemLayout(_.idx),b = e.getItemLayout(_.idx1);(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[_.idx]), d.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));break;case "+":var S = _.idx;u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push(Td(v, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));break;case "-":var S = _.idx,M = t.getRawIndex(S);M !== S ? (u.push(t.getItemLayout(S)), h.push(o.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(Td(m, o, t, S)), g.push(M)) : x = !1;}x && (f.push(_), p.push(p.length));}p.sort(function (t, e) {return g[t] - g[e];});for (var I = [], C = [], T = [], D = [], k = [], y = 0; y < p.length; y++) {var S = p[y];I[y] = u[S], C[y] = h[S], T[y] = c[S], D[y] = d[S], k[y] = f[S];}return { current: I, next: C, stackedOnCurrent: T, stackedOnNext: D, status: k };},jb = ae,qb = se,Zb = U,Kb = G,$b = [],Qb = [],Jb = [],tS = to.extend({ type: "ec-polyline", shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, style: { fill: null, stroke: "#000" }, brush: Dm(to.prototype.brush), buildPath: function buildPath(t, e) {var n = e.points,i = 0,r = n.length,o = Od(n, e.smoothConstraint);if (e.connectNulls) {for (; r > 0 && kd(n[r - 1]); r--) {;}for (; r > i && kd(n[i]); i++) {;}}for (; r > i;) {i += Ad(t, n, i, r, r, 1, o.min, o.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;}} }),eS = to.extend({ type: "ec-polygon", shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, brush: Dm(to.prototype.brush), buildPath: function buildPath(t, e) {var n = e.points,i = e.stackedOnPoints,r = 0,o = n.length,a = e.smoothMonotone,s = Od(n, e.smoothConstraint),l = Od(i, e.smoothConstraint);if (e.connectNulls) {for (; o > 0 && kd(n[o - 1]); o--) {;}for (; o > r && kd(n[r]); r++) {;}}for (; o > r;) {var u = Ad(t, n, r, o, o, 1, s.min, s.max, e.smooth, a, e.connectNulls);Ad(t, i, r + u - 1, u, o, -1, l.min, l.max, e.stackedOnSmooth, a, e.connectNulls), r += u + 1, t.closePath();}} });ul.extend({ type: "line", init: function init() {var t = new hg(),e = new wd();this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;}, render: function render(t, e, n) {var i = t.coordinateSystem,r = this.group,o = t.getData(),a = t.getModel("lineStyle"),l = t.getModel("areaStyle"),u = o.mapArray(o.getItemLayout),h = "polar" === i.type,c = this._coordSys,d = this._symbolDraw,f = this._polyline,p = this._polygon,g = this._lineGroup,v = t.get("animation"),m = !l.isEmpty(),y = l.get("origin"),_ = Id(i, o, y),x = Rd(i, o, _),w = t.get("showSymbol"),b = w && !h && Hd(t, o, i),S = this._data;S && S.eachItemGraphicEl(function (t, e) {t.__temp && (r.remove(t), S.setItemGraphicEl(e, null));}), w || d.remove(), r.add(g);var M,I = !h && t.get("step");i && i.getArea && t.get("clip", !0) && (M = i.getArea(), null != M.width ? (M.x -= .1, M.y -= .1, M.width += .2, M.height += .2) : M.r0 && (M.r0 -= .5, M.r1 += .5)), this._clipShapeForSymbol = M, f && c.type === i.type && I === this._step ? (m && !p ? p = this._newPolygon(u, x, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(Gd(i, !1, t)), w && d.updateData(o, { isIgnore: b, clipShape: M }), o.eachItemGraphicEl(function (t) {t.stopAnimation(!0);}), Ed(this._stackedOnPoints, x) && Ed(this._points, u) || (v ? this._updateAnimation(o, x, i, n, I, y) : (I && (u = Nd(u, i, I), x = Nd(x, i, I)), f.setShape({ points: u }), p && p.setShape({ points: u, stackedOnPoints: x })))) : (w && d.updateData(o, { isIgnore: b, clipShape: M }), I && (u = Nd(u, i, I), x = Nd(x, i, I)), f = this._newPolyline(u, i, v), m && (p = this._newPolygon(u, x, i, v)), g.setClipPath(Gd(i, !0, t)));var C = Fd(o, i) || o.getVisual("color");f.useStyle(s(a.getLineStyle(), { fill: "none", stroke: C, lineJoin: "bevel" }));var T = t.get("smooth");if (T = zd(t.get("smooth")), f.setShape({ smooth: T, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p) {var D = o.getCalculationInfo("stackedOnSeries"),k = 0;p.useStyle(s(l.getAreaStyle(), { fill: C, opacity: .7, lineJoin: "bevel" })), D && (k = zd(D.get("smooth"))), p.setShape({ smooth: T, stackedOnSmooth: k, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });}this._data = o, this._coordSys = i, this._stackedOnPoints = x, this._points = u, this._step = I, this._valueOrigin = y;}, dispose: function dispose() {}, highlight: function highlight(t, e, n, i) {var r = t.getData(),o = sr(r, i);if (!(o instanceof Array) && null != o && o >= 0) {var a = r.getItemGraphicEl(o);if (!a) {var s = r.getItemLayout(o);if (!s) return;if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(s[0], s[1])) return;a = new md(r, o), a.position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), a.__temp = !0, r.setItemGraphicEl(o, a), a.stopSymbolAnimation(!0), this.group.add(a);}a.highlight();} else ul.prototype.highlight.call(this, t, e, n, i);}, downplay: function downplay(t, e, n, i) {var r = t.getData(),o = sr(r, i);if (null != o && o >= 0) {var a = r.getItemGraphicEl(o);a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay());} else ul.prototype.downplay.call(this, t, e, n, i);}, _newPolyline: function _newPolyline(t) {var e = this._polyline;return e && this._lineGroup.remove(e), e = new tS({ shape: { points: t }, silent: !0, z2: 10 }), this._lineGroup.add(e), this._polyline = e, e;}, _newPolygon: function _newPolygon(t, e) {var n = this._polygon;return n && this._lineGroup.remove(n), n = new eS({ shape: { points: t, stackedOnPoints: e }, silent: !0 }), this._lineGroup.add(n), this._polygon = n, n;}, _updateAnimation: function _updateAnimation(t, e, n, i, r, o) {var a = this._polyline,s = this._polygon,l = t.hostModel,u = Ub(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, o),h = u.current,c = u.stackedOnCurrent,d = u.next,f = u.stackedOnNext;if (r && (h = Nd(u.current, n, r), c = Nd(u.stackedOnCurrent, n, r), d = Nd(u.next, n, r), f = Nd(u.stackedOnNext, n, r)), Bd(h, d) > 3e3 || s && Bd(c, f) > 3e3) return a.setShape({ points: d }), void (s && s.setShape({ points: d, stackedOnPoints: f }));a.shape.__points = u.current, a.shape.points = h, ta(a, { shape: { points: d } }, l), s && (s.setShape({ points: h, stackedOnPoints: c }), ta(s, { shape: { points: d, stackedOnPoints: f } }, l));for (var p = [], g = u.status, v = 0; v < g.length; v++) {var m = g[v].cmd;if ("=" === m) {var y = t.getItemGraphicEl(g[v].idx1);y && p.push({ el: y, ptIdx: v });}}a.animators && a.animators.length && a.animators[0].during(function () {for (var t = 0; t < p.length; t++) {var e = p[t].el;e.attr("position", a.shape.__points[p[t].ptIdx]);}});}, remove: function remove() {var t = this.group,e = this._data;this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (n, i) {n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;} });var nS = function nS(t, e, n) {return { seriesType: t, performRawSeries: !0, reset: function reset(t, i) {function r(e, n) {if (f) {var i = t.getRawValue(n),r = t.getDataParams(n);h && e.setItemVisual(n, "symbol", a(i, r)), c && e.setItemVisual(n, "symbolSize", s(i, r)), d && e.setItemVisual(n, "symbolRotate", u(i, r));}if (e.hasItemOption) {var o = e.getItemModel(n),l = o.getShallow("symbol", !0),p = o.getShallow("symbolSize", !0),g = o.getShallow("symbolRotate", !0),v = o.getShallow("symbolKeepAspect", !0);null != l && e.setItemVisual(n, "symbol", l), null != p && e.setItemVisual(n, "symbolSize", p), null != g && e.setItemVisual(n, "symbolRotate", g), null != v && e.setItemVisual(n, "symbolKeepAspect", v);}}var o = t.getData(),a = t.get("symbol"),s = t.get("symbolSize"),l = t.get("symbolKeepAspect"),u = t.get("symbolRotate"),h = w(a),c = w(s),d = w(u),f = h || c || d,p = !h && a ? a : e,g = c ? null : s;return o.setVisual({ legendSymbol: n || p, symbol: p, symbolSize: g, symbolKeepAspect: l, symbolRotate: u }), i.isSeriesFiltered(t) ? void 0 : { dataEach: o.hasItemOption || f ? r : null };} };},iS = function iS(t) {return { seriesType: t, plan: S_(), reset: function reset(t) {function e(t, e) {for (var n = t.end - t.start, r = o && new Float32Array(n * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {var d;if (1 === s) {var f = e.get(a[0], l);d = !isNaN(f) && i.dataToPoint(f, null, c);} else {var f = h[0] = e.get(a[0], l),p = h[1] = e.get(a[1], l);d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c);}o ? (r[u++] = d ? d[0] : 0 / 0, r[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0]);}o && e.setLayout("symbolPoints", r);}var n = t.getData(),i = t.coordinateSystem,r = t.pipelineContext,o = r.large;if (i) {var a = p(i.dimensions, function (t) {return n.mapDimension(t);}).slice(0, 2),s = a.length,l = n.getCalculationInfo("stackResultDimension");return hh(n, a[0]) && (a[0] = l), hh(n, a[1]) && (a[1] = l), s && { progress: e };}} };},rS = { average: function average(t) {for (var e = 0, n = 0, i = 0; i < t.length; i++) {isNaN(t[i]) || (e += t[i], n++);}return 0 === n ? 0 / 0 : e / n;}, sum: function sum(t) {for (var e = 0, n = 0; n < t.length; n++) {e += t[n] || 0;}return e;}, max: function max(t) {for (var e = -1 / 0, n = 0; n < t.length; n++) {t[n] > e && (e = t[n]);}return isFinite(e) ? e : 0 / 0;}, min: function min(t) {for (var e = 1 / 0, n = 0; n < t.length; n++) {t[n] < e && (e = t[n]);}return isFinite(e) ? e : 0 / 0;}, nearest: function nearest(t) {return t[0];} },oS = function oS(t) {return Math.round(t.length / 2);},aS = function aS(t) {return { seriesType: t, modifyOutputEnd: !0, reset: function reset(t) {var e = t.getData(),n = t.get("sampling"),i = t.coordinateSystem;if ("cartesian2d" === i.type && n) {var r = i.getBaseAxis(),o = i.getOtherAxis(r),a = r.getExtent(),s = Math.abs(a[1] - a[0]),l = Math.round(e.count() / s);if (l > 1) {var u;"string" == typeof n ? u = rS[n] : "function" == typeof n && (u = n), u && t.setData(e.downSample(e.mapDimension(o.dim), 1 / l, u, oS));}}} };};Iu(nS("line", "circle", "line")), Mu(iS("line")), _u(Ix.PROCESSOR.STATISTIC, aS("line"));{var sS = function sS(t, e, n) {e = x(e) && { coordDimensions: e } || a({}, e);var i = t.getSource(),r = sw(i, e),o = new rw(r, t);return o.initData(i, n), o;},lS = (x_.extend({ type: "series.gauge", getInitialData: function getInitialData() {return sS(this, ["value"]);}, defaultOption: { zlevel: 0, z: 2, center: ["50%", "50%"], legendHoverLink: !0, radius: "75%", startAngle: 225, endAngle: -45, clockwise: !0, min: 0, max: 100, splitNumber: 10, axisLine: { show: !0, lineStyle: { color: [[.2, "#91c7ae"], [.8, "#63869e"], [1, "#c23531"]], width: 30 } }, splitLine: { show: !0, length: 30, lineStyle: { color: "#eee", width: 2, type: "solid" } }, axisTick: { show: !0, splitNumber: 5, length: 8, lineStyle: { color: "#eee", width: 1, type: "solid" } }, axisLabel: { show: !0, distance: 5, color: "auto" }, pointer: { show: !0, length: "80%", width: 8 }, itemStyle: { color: "auto" }, title: { show: !0, offsetCenter: [0, "-40%"], color: "#333", fontSize: 15 }, detail: { show: !0, backgroundColor: "rgba(0,0,0,0)", borderWidth: 0, borderColor: "#ccc", width: 100, height: null, padding: [5, 10], offsetCenter: [0, "40%"], color: "auto", fontSize: 30 } } }), to.extend({ type: "echartsGaugePointer", shape: { angle: 0, width: 10, r: 10, x: 0, y: 0 }, buildPath: function buildPath(t, e) {var n = Math.cos,i = Math.sin,r = e.r,o = e.width,a = e.angle,s = e.x - n(a) * o * (o >= r / 3 ? 1 : 2),l = e.y - i(a) * o * (o >= r / 3 ? 1 : 2);a = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + n(a) * o, e.y + i(a) * o), t.lineTo(e.x + n(e.angle) * r, e.y + i(e.angle) * r), t.lineTo(e.x - n(a) * o, e.y - i(a) * o), t.lineTo(s, l);} })),uS = 2 * Math.PI;ul.extend({ type: "gauge", render: function render(t, e, n) {this.group.removeAll();var i = t.get("axisLine.lineStyle.color"),r = Wd(t, n);this._renderMain(t, e, n, i, r);}, dispose: function dispose() {}, _renderMain: function _renderMain(t, e, n, i, r) {for (var o = this.group, a = t.getModel("axisLine"), s = a.getModel("lineStyle"), l = t.get("clockwise"), u = -t.get("startAngle") / 180 * Math.PI, h = -t.get("endAngle") / 180 * Math.PI, c = (h - u) % uS, d = u, f = s.get("width"), p = a.get("show"), g = 0; p && g < i.length; g++) {var v = Math.min(Math.max(i[g][0], 0), 1),h = u + c * v,m = new km({ shape: { startAngle: d, endAngle: h, cx: r.cx, cy: r.cy, clockwise: l, r0: r.r - f, r: r.r }, silent: !0 });m.setStyle({ fill: i[g][1] }), m.setStyle(s.getLineStyle(["color", "borderWidth", "borderColor"])), o.add(m), d = h;}var y = function y(t) {if (0 >= t) return i[0][1];for (var e = 0; e < i.length; e++) {if (i[e][0] >= t && (0 === e ? 0 : i[e - 1][0]) < t) return i[e][1];}return i[e - 1][1];};if (!l) {var _ = u;u = h, h = _;}this._renderTicks(t, e, n, y, r, u, h, l), this._renderPointer(t, e, n, y, r, u, h, l), this._renderTitle(t, e, n, y, r), this._renderDetail(t, e, n, y, r);}, _renderTicks: function _renderTicks(t, e, n, i, r, o, a) {for (var s = this.group, l = r.cx, u = r.cy, h = r.r, c = +t.get("min"), d = +t.get("max"), f = t.getModel("splitLine"), p = t.getModel("axisTick"), g = t.getModel("axisLabel"), v = t.get("splitNumber"), m = p.get("splitNumber"), y = wa(f.get("length"), h), _ = wa(p.get("length"), h), x = o, w = (a - o) / v, b = w / m, S = f.getModel("lineStyle").getLineStyle(), M = p.getModel("lineStyle").getLineStyle(), I = 0; v >= I; I++) {var C = Math.cos(x),T = Math.sin(x);if (f.get("show")) {var D = new Fm({ shape: { x1: C * h + l, y1: T * h + u, x2: C * (h - y) + l, y2: T * (h - y) + u }, style: S, silent: !0 });"auto" === S.stroke && D.setStyle({ stroke: i(I / v) }), s.add(D);}if (g.get("show")) {var k = Xd(ba(I / v * (d - c) + c), g.get("formatter")),A = g.get("distance"),P = i(I / v);s.add(new Im({ style: Xo({}, g, { text: k, x: C * (h - y - A) + l, y: T * (h - y - A) + u, textVerticalAlign: -.4 > T ? "top" : T > .4 ? "bottom" : "middle", textAlign: -.4 > C ? "left" : C > .4 ? "right" : "center" }, { autoColor: P }), silent: !0 }));}if (p.get("show") && I !== v) {for (var L = 0; m >= L; L++) {var C = Math.cos(x),T = Math.sin(x),O = new Fm({ shape: { x1: C * h + l, y1: T * h + u, x2: C * (h - _) + l, y2: T * (h - _) + u }, silent: !0, style: M });"auto" === M.stroke && O.setStyle({ stroke: i((I + L / m) / v) }), s.add(O), x += b;}x -= b;} else x += w;}}, _renderPointer: function _renderPointer(t, e, n, i, r, o, a) {var s = this.group,l = this._data;if (!t.get("pointer.show")) return void (l && l.eachItemGraphicEl(function (t) {s.remove(t);}));var u = [+t.get("min"), +t.get("max")],h = [o, a],c = t.getData(),d = c.mapDimension("value");c.diff(l).add(function (e) {var n = new lS({ shape: { angle: o } });ea(n, { shape: { angle: xa(c.get(d, e), u, h, !0) } }, t), s.add(n), c.setItemGraphicEl(e, n);}).update(function (e, n) {var i = l.getItemGraphicEl(n);ta(i, { shape: { angle: xa(c.get(d, e), u, h, !0) } }, t), s.add(i), c.setItemGraphicEl(e, i);}).remove(function (t) {var e = l.getItemGraphicEl(t);s.remove(e);}).execute(), c.eachItemGraphicEl(function (t, e) {var n = c.getItemModel(e),o = n.getModel("pointer");t.setShape({ x: r.cx, y: r.cy, width: wa(o.get("width"), r.r), r: wa(o.get("length"), r.r) }), t.useStyle(n.getModel("itemStyle").getItemStyle()), "auto" === t.style.fill && t.setStyle("fill", i(xa(c.get(d, e), u, [0, 1], !0))), No(t, n.getModel("emphasis.itemStyle").getItemStyle());}), this._data = c;}, _renderTitle: function _renderTitle(t, e, n, i, r) {var o = t.getData(),a = o.mapDimension("value"),s = t.getModel("title");if (s.get("show")) {var l = s.get("offsetCenter"),u = r.cx + wa(l[0], r.r),h = r.cy + wa(l[1], r.r),c = +t.get("min"),d = +t.get("max"),f = t.getData().get(a, 0),p = i(xa(f, [c, d], [0, 1], !0));this.group.add(new Im({ silent: !0, style: Xo({}, s, { x: u, y: h, text: o.getName(0), textAlign: "center", textVerticalAlign: "middle" }, { autoColor: p, forceRich: !0 }) }));}}, _renderDetail: function _renderDetail(t, e, n, i, r) {var o = t.getModel("detail"),a = +t.get("min"),s = +t.get("max");if (o.get("show")) {var l = o.get("offsetCenter"),u = r.cx + wa(l[0], r.r),h = r.cy + wa(l[1], r.r),c = wa(o.get("width"), r.r),d = wa(o.get("height"), r.r),f = t.getData(),p = f.get(f.mapDimension("value"), 0),g = i(xa(p, [a, s], [0, 1], !0));this.group.add(new Im({ silent: !0, style: Xo({}, o, { x: u, y: h, text: Xd(p, o.get("formatter")), textWidth: isNaN(c) ? null : c, textHeight: isNaN(d) ? null : d, textAlign: "center", textVerticalAlign: "middle" }, { autoColor: g, forceRich: !0 }) }));}} });}Du({ type: "title", layoutMode: { type: "box", ignoreSize: !0 }, defaultOption: { zlevel: 0, z: 6, show: !0, text: "", target: "blank", subtext: "", subtarget: "blank", left: 0, top: 0, backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, textStyle: { fontSize: 18, fontWeight: "bolder", color: "#333" }, subtextStyle: { color: "#aaa" } } }), ku({ type: "title", render: function render(t, e, n) {if (this.group.removeAll(), t.get("show")) {var i = this.group,r = t.getModel("textStyle"),o = t.getModel("subtextStyle"),a = t.get("textAlign"),s = k(t.get("textBaseline"), t.get("textVerticalAlign")),l = new Im({ style: Xo({}, r, { text: t.get("text"), textFill: r.getTextColor() }, { disableBox: !0 }), z2: 10 }),u = l.getBoundingRect(),h = t.get("subtext"),c = new Im({ style: Xo({}, o, { text: h, textFill: o.getTextColor(), y: u.height + t.get("itemGap"), textVerticalAlign: "top" }, { disableBox: !0 }), z2: 10 }),d = t.get("link"),f = t.get("sublink"),p = t.get("triggerEvent", !0);l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {qa(d, "_" + t.get("target"));}), f && c.on("click", function () {qa(f, "_" + t.get("subtarget"));}), l.eventData = c.eventData = p ? { componentType: "title", componentIndex: t.componentIndex } : null, i.add(l), h && i.add(c);var g = i.getBoundingRect(),v = t.getBoxLayoutParams();v.width = g.width, v.height = g.height;var m = Ka(v, { width: n.getWidth(), height: n.getHeight() }, t.get("padding"));a || (a = t.get("left") || t.get("right"), "middle" === a && (a = "center"), "right" === a ? m.x += m.width : "center" === a && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), i.attr("position", [m.x, m.y]);var y = { textAlign: a, textVerticalAlign: s };l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();var _ = m.margin,x = t.getItemStyle(["color", "opacity"]);x.fill = t.get("backgroundColor");var w = new Rm({ shape: { x: g.x - _[3], y: g.y - _[0], width: g.width + _[1] + _[3], height: g.height + _[0] + _[2], r: t.get("borderRadius") }, style: x, subPixelOptimize: !0, silent: !0 });i.add(w);}} });var hS = L_.legend.selector,cS = { all: { type: "all", title: i(hS.all) }, inverse: { type: "inverse", title: i(hS.inverse) } },dS = Du({ type: "legend.plain", dependencies: ["series"], layoutMode: { type: "box", ignoreSize: !0 }, init: function init(t, e, n) {this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}, this._updateSelector(t);}, mergeOption: function mergeOption(t) {dS.superCall(this, "mergeOption", t), this._updateSelector(t);}, _updateSelector: function _updateSelector(t) {var e = t.selector;e === !0 && (e = t.selector = ["all", "inverse"]), x(e) && f(e, function (t, n) {b(t) && (t = { type: t }), e[n] = r(t, cS[t.type]);});}, optionUpdated: function optionUpdated() {this._updateData(this.ecModel);var t = this._data;if (t[0] && "single" === this.get("selectedMode")) {for (var e = !1, n = 0; n < t.length; n++) {var i = t[n].get("name");if (this.isSelected(i)) {this.select(i), e = !0;break;}}!e && this.select(t[0].get("name"));}}, _updateData: function _updateData(t) {var e = [],n = [];t.eachRawSeries(function (i) {var r = i.name;n.push(r);var o;if (i.legendVisualProvider) {var a = i.legendVisualProvider,s = a.getAllNames();t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0;} else o = !0;o && or(i) && e.push(i.name);}), this._availableNames = n;var i = this.get("data") || e,r = p(i, function (t) {return ("string" == typeof t || "number" == typeof t) && (t = { name: t }), new fa(t, this, this.ecModel);}, this);this._data = r;}, getData: function getData() {return this._data;}, select: function select(t) {var e = this.option.selected,n = this.get("selectedMode");if ("single" === n) {var i = this._data;f(i, function (t) {e[t.get("name")] = !1;});}e[t] = !0;}, unSelect: function unSelect(t) {"single" !== this.get("selectedMode") && (this.option.selected[t] = !1);}, toggleSelected: function toggleSelected(t) {var e = this.option.selected;e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);}, allSelect: function allSelect() {var t = this._data,e = this.option.selected;f(t, function (t) {e[t.get("name", !0)] = !0;});}, inverseSelect: function inverseSelect() {var t = this._data,e = this.option.selected;f(t, function (t) {var n = t.get("name", !0);e.hasOwnProperty(n) || (e[n] = !0), e[n] = !e[n];});}, isSelected: function isSelected(t) {var e = this.option.selected;return !(e.hasOwnProperty(t) && !e[t]) && u(this._availableNames, t) >= 0;}, getOrient: function getOrient() {return "vertical" === this.get("orient") ? { index: 1, name: "vertical" } : { index: 0, name: "horizontal" };}, defaultOption: { zlevel: 0, z: 4, show: !0, orient: "horizontal", left: "center", top: 0, align: "auto", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderRadius: 0, borderWidth: 0, padding: 5, itemGap: 10, itemWidth: 25, itemHeight: 14, inactiveColor: "#ccc", inactiveBorderColor: "#ccc", itemStyle: { borderWidth: 0 }, textStyle: { color: "#333" }, selectedMode: !0, selector: !1, selectorLabel: { show: !0, borderRadius: 10, padding: [3, 5, 3, 5], fontSize: 12, fontFamily: " sans-serif", color: "#666", borderWidth: 1, borderColor: "#666" }, emphasis: { selectorLabel: { show: !0, color: "#eee", backgroundColor: "#666" } }, selectorPosition: "auto", selectorItemGap: 7, selectorButtonGap: 10, tooltip: { show: !1 } } });wu("legendToggleSelect", "legendselectchanged", _(Yd, "toggleSelected")), wu("legendAllSelect", "legendselectall", _(Yd, "allSelect")), wu("legendInverseSelect", "legendinverseselect", _(Yd, "inverseSelect")), wu("legendSelect", "legendselected", _(Yd, "select")), wu("legendUnSelect", "legendunselected", _(Yd, "unSelect"));var fS = _,pS = f,gS = hg,vS = ku({ type: "legend.plain", newlineDisabled: !1, init: function init() {this.group.add(this._contentGroup = new gS()), this._backgroundEl, this.group.add(this._selectorGroup = new gS()), this._isFirstRender = !0;}, getContentGroup: function getContentGroup() {return this._contentGroup;}, getSelectorGroup: function getSelectorGroup() {return this._selectorGroup;}, render: function render(t, e, n) {var i = this._isFirstRender;if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {var r = t.get("align"),o = t.get("orient");r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === o ? "right" : "left");var a = t.get("selector", !0),l = t.get("selectorPosition", !0);!a || l && "auto" !== l || (l = "horizontal" === o ? "end" : "start"), this.renderInner(r, t, e, n, a, o, l);var u = t.getBoxLayoutParams(),h = { width: n.getWidth(), height: n.getHeight() },c = t.get("padding"),d = Ka(u, h, c),f = this.layoutInner(t, r, d, i, a, l),p = Ka(s({ width: f.width, height: f.height }, u), h, c);this.group.attr("position", [p.x - f.x, p.y - f.y]), this.group.add(this._backgroundEl = Ud(f, t));}}, resetInner: function resetInner() {this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();}, renderInner: function renderInner(t, e, n, i, r, o, a) {var s = this.getContentGroup(),l = N(),u = e.get("selectedMode"),h = [];n.eachRawSeries(function (t) {!t.get("legendHoverLink") && h.push(t.id);}), pS(e.getData(), function (r, o) {var a = r.get("name");if (!this.newlineDisabled && ("" === a || "\n" === a)) return void s.add(new gS({ newline: !0 }));var c = n.getSeriesByName(a)[0];if (!l.get(a)) {if (c) {var d = c.getData(),f = d.getVisual("color"),p = d.getVisual("borderColor");"function" == typeof f && (f = f(c.getDataParams(0))), "function" == typeof p && (p = p(c.getDataParams(0)));var g = d.getVisual("legendSymbol") || "roundRect",v = d.getVisual("symbol"),m = this._createItem(a, o, r, e, g, v, t, f, p, u);m.on("click", fS(qd, a, null, i, h)).on("mouseover", fS(Zd, c.name, null, i, h)).on("mouseout", fS(Kd, c.name, null, i, h)), l.set(a, !0);} else n.eachRawSeries(function (n) {if (!l.get(a) && n.legendVisualProvider) {var s = n.legendVisualProvider;if (!s.containName(a)) return;var c = s.indexOfName(a),d = s.getItemVisual(c, "color"),f = s.getItemVisual(c, "borderColor"),p = "roundRect",g = this._createItem(a, o, r, e, p, null, t, d, f, u);g.on("click", fS(qd, null, a, i, h)).on("mouseover", fS(Zd, null, a, i, h)).on("mouseout", fS(Kd, null, a, i, h)), l.set(a, !0);}}, this);Uf && (l.get(a) || console.warn(a + " series not exists. Legend data should be same with series name or data name."));}}, this), r && this._createSelector(r, e, i, o, a);}, _createSelector: function _createSelector(t, e, n) {function i(t) {var i = t.type,o = new Im({ style: { x: 0, y: 0, align: "center", verticalAlign: "middle" }, onclick: function onclick() {n.dispatchAction({ type: "all" === i ? "legendAllSelect" : "legendInverseSelect" });
          } });r.add(o);var a = e.getModel("selectorLabel"),s = e.getModel("emphasis.selectorLabel");Go(o.style, o.hoverStyle = {}, a, s, { defaultText: t.title, isRectText: !1 }), No(o);}var r = this.getSelectorGroup();pS(t, function (t) {i(t);});}, _createItem: function _createItem(t, e, n, i, r, o, s, l, u, h) {var c = i.get("itemWidth"),d = i.get("itemHeight"),f = i.get("inactiveColor"),p = i.get("inactiveBorderColor"),g = i.get("symbolKeepAspect"),v = i.getModel("itemStyle"),m = i.isSelected(t),y = new gS(),_ = n.getModel("textStyle"),x = n.get("icon"),w = n.getModel("tooltip"),b = w.parentModel;r = x || r;var S = jh(r, 0, 0, c, d, m ? l : f, null == g ? !0 : g);if (y.add(jd(S, r, v, u, p, m)), !x && o && (o !== r || "none" === o)) {var M = .8 * d;"none" === o && (o = "circle");var I = jh(o, (c - M) / 2, (d - M) / 2, M, M, m ? l : f, null == g ? !0 : g);y.add(jd(I, o, v, u, p, m));}var C = "left" === s ? c + 5 : -5,T = s,D = i.get("formatter"),k = t;"string" == typeof D && D ? k = D.replace("{name}", null != t ? t : "") : "function" == typeof D && (k = D(t)), y.add(new Im({ style: Xo({}, _, { text: k, x: C, y: d / 2, textFill: m ? _.getTextColor() : f, textAlign: T, textVerticalAlign: "middle" }) }));var A = new Rm({ shape: y.getBoundingRect(), invisible: !0, tooltip: w.get("show") ? a({ content: t, formatter: b.get("formatter", !0) || function () {return t;}, formatterParams: { componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"] } }, w.option) : null });return y.add(A), y.eachChild(function (t) {t.silent = !0;}), A.silent = !h, this.getContentGroup().add(y), No(y), y.__legendDataIndex = e, y;}, layoutInner: function layoutInner(t, e, n, i, r, o) {var a = this.getContentGroup(),s = this.getSelectorGroup();Ay(t.get("orient"), a, t.get("itemGap"), n.width, n.height);var l = a.getBoundingRect(),u = [-l.x, -l.y];if (r) {Ay("horizontal", s, t.get("selectorItemGap", !0));var h = s.getBoundingRect(),c = [-h.x, -h.y],d = t.get("selectorButtonGap", !0),f = t.getOrient().index,p = 0 === f ? "width" : "height",g = 0 === f ? "height" : "width",v = 0 === f ? "y" : "x";"end" === o ? c[f] += l[p] + d : u[f] += h[p] + d, c[1 - f] += l[g] / 2 - h[g] / 2, s.attr("position", c), a.attr("position", u);var m = { x: 0, y: 0 };return m[p] = l[p] + d + h[p], m[g] = Math.max(l[g], h[g]), m[v] = Math.min(0, h[v] + c[1 - f]), m;}return a.attr("position", u), this.group.getBoundingRect();}, remove: function remove() {this.getContentGroup().removeAll(), this._isFirstRender = !0;} }),mS = function mS(t) {var e = t.findComponents({ mainType: "legend" });e && e.length && t.filterSeries(function (t) {for (var n = 0; n < e.length; n++) {if (!e[n].isSelected(t.name)) return !1;}return !0;});};_u(Ix.PROCESSOR.SERIES_FILTER, mS), Oy.registerSubTypeDefaulter("legend", function () {return "plain";});var yS = dS.extend({ type: "legend.scroll", setScrollDataIndex: function setScrollDataIndex(t) {this.option.scrollDataIndex = t;}, defaultOption: { scrollDataIndex: 0, pageButtonItemGap: 5, pageButtonGap: null, pageButtonPosition: "end", pageFormatter: "{current}/{total}", pageIcons: { horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"], vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"] }, pageIconColor: "#2f4554", pageIconInactiveColor: "#aaa", pageIconSize: 15, pageTextStyle: { color: "#333" }, animationDurationUpdate: 800 }, init: function init(t, e, n, i) {var r = Qa(t);yS.superCall(this, "init", t, e, n, i), $d(this, t, r);}, mergeOption: function mergeOption(t, e) {yS.superCall(this, "mergeOption", t, e), $d(this, this.option, t);} }),_S = hg,xS = ["width", "height"],wS = ["x", "y"],bS = vS.extend({ type: "legend.scroll", newlineDisabled: !0, init: function init() {bS.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new _S()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new _S()), this._showController;}, resetInner: function resetInner() {bS.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;}, renderInner: function renderInner(t, e, n, i, r, o, a) {function s(t, n) {var r = t + "DataIndex",o = la(e.get("pageIcons", !0)[e.getOrient().name][n], { onclick: y(l._pageGo, l, r, e, i) }, { x: -h[0] / 2, y: -h[1] / 2, width: h[0], height: h[1] });o.name = t, u.add(o);}var l = this;bS.superCall(this, "renderInner", t, e, n, i, r, o, a);var u = this._controllerGroup,h = e.get("pageIconSize", !0);x(h) || (h = [h, h]), s("pagePrev", 0);var c = e.getModel("pageTextStyle");u.add(new Im({ name: "pageText", style: { textFill: c.getTextColor(), font: c.getFont(), textVerticalAlign: "middle", textAlign: "center" }, silent: !0 })), s("pageNext", 1);}, layoutInner: function layoutInner(t, e, n, r, o, a) {var s = this.getSelectorGroup(),l = t.getOrient().index,u = xS[l],h = wS[l],c = xS[1 - l],d = wS[1 - l];o && Ay("horizontal", s, t.get("selectorItemGap", !0));var f = t.get("selectorButtonGap", !0),p = s.getBoundingRect(),g = [-p.x, -p.y],v = i(n);o && (v[u] = n[u] - p[u] - f);var m = this._layoutContentAndController(t, r, v, l, u, c, d);if (o) {if ("end" === a) g[l] += m[u] + f;else {var y = p[u] + f;g[l] -= y, m[h] -= y;}m[u] += p[u] + f, g[1 - l] += m[d] + m[c] / 2 - p[c] / 2, m[c] = Math.max(m[c], p[c]), m[d] = Math.min(m[d], p[d] + g[1 - l]), s.attr("position", g);}return m;}, _layoutContentAndController: function _layoutContentAndController(t, e, n, i, r, o, a) {var s = this.getContentGroup(),l = this._containerGroup,u = this._controllerGroup;Ay(t.get("orient"), s, t.get("itemGap"), i ? n.width : null, i ? null : n.height), Ay("horizontal", u, t.get("pageButtonItemGap", !0));var h = s.getBoundingRect(),c = u.getBoundingRect(),d = this._showController = h[r] > n[r],f = [-h.x, -h.y];e || (f[i] = s.position[i]);var p = [0, 0],g = [-c.x, -c.y],v = k(t.get("pageButtonGap", !0), t.get("itemGap", !0));if (d) {var m = t.get("pageButtonPosition", !0);"end" === m ? g[i] += n[r] - c[r] : p[i] += c[r] + v;}g[1 - i] += h[o] / 2 - c[o] / 2, s.attr("position", f), l.attr("position", p), u.attr("position", g);var y = { x: 0, y: 0 };if (y[r] = d ? n[r] : h[r], y[o] = Math.max(h[o], c[o]), y[a] = Math.min(0, c[a] + g[1 - i]), l.__rectSize = n[r], d) {var _ = { x: 0, y: 0 };_[r] = Math.max(n[r] - c[r] - v, 0), _[o] = y[o], l.setClipPath(new Rm({ shape: _ })), l.__rectSize = _[r];} else u.eachChild(function (t) {t.attr({ invisible: !0, silent: !0 });});var x = this._getPageInfo(t);return null != x.pageIndex && ta(s, { position: x.contentPosition }, d ? t : !1), this._updatePageInfoView(t, x), y;}, _pageGo: function _pageGo(t, e, n) {var i = this._getPageInfo(e)[t];null != i && n.dispatchAction({ type: "legendScroll", scrollDataIndex: i, legendId: e.id });}, _updatePageInfoView: function _updatePageInfoView(t, e) {var n = this._controllerGroup;f(["pagePrev", "pageNext"], function (i) {var r = null != e[i + "DataIndex"],o = n.childOfName(i);o && (o.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), o.cursor = r ? "pointer" : "default");});var i = n.childOfName("pageText"),r = t.get("pageFormatter"),o = e.pageIndex,a = null != o ? o + 1 : 0,s = e.pageCount;i && r && i.setStyle("text", b(r) ? r.replace("{current}", a).replace("{total}", s) : r({ current: a, total: s }));}, _getPageInfo: function _getPageInfo(t) {function e(t) {if (t) {var e = t.getBoundingRect(),n = e[l] + t.position[a];return { s: n, e: n + e[s], i: t.__legendDataIndex };}}function n(t, e) {return t.e >= e && t.s <= e + o;}var i = t.get("scrollDataIndex", !0),r = this.getContentGroup(),o = this._containerGroup.__rectSize,a = t.getOrient().index,s = xS[a],l = wS[a],u = this._findTargetItemIndex(i),h = r.children(),c = h[u],d = h.length,f = d ? 1 : 0,p = { contentPosition: r.position.slice(), pageCount: f, pageIndex: f - 1, pagePrevDataIndex: null, pageNextDataIndex: null };if (!c) return p;var g = e(c);p.contentPosition[a] = -g.s;for (var v = u + 1, m = g, y = g, _ = null; d >= v; ++v) {_ = e(h[v]), (!_ && y.e > m.s + o || _ && !n(_, m.s)) && (m = y.i > m.i ? y : _, m && (null == p.pageNextDataIndex && (p.pageNextDataIndex = m.i), ++p.pageCount)), y = _;}for (var v = u - 1, m = g, y = g, _ = null; v >= -1; --v) {_ = e(h[v]), _ && n(y, _.s) || !(m.i < y.i) || (y = m, null == p.pagePrevDataIndex && (p.pagePrevDataIndex = m.i), ++p.pageCount, ++p.pageIndex), m = _;}return p;}, _findTargetItemIndex: function _findTargetItemIndex(t) {if (!this._showController) return 0;var e,n,i = this.getContentGroup();return i.eachChild(function (i, r) {var o = i.__legendDataIndex;null == n && null != o && (n = r), o === t && (e = r);}), null != e ? e : n;} });wu("legendScroll", "legendscroll", function (t, e) {var n = t.scrollDataIndex;null != n && e.eachComponent({ mainType: "legend", subType: "scroll", query: t }, function (t) {t.setScrollDataIndex(n);});});var SS = function SS(t, e) {var n,i = [],r = t.seriesIndex;if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] };var o = n.getData(),a = sr(o, t);if (null == a || 0 > a || x(a)) return { point: [] };var s = o.getItemGraphicEl(a),l = n.coordinateSystem;if (n.getTooltipPosition) i = n.getTooltipPosition(a) || [];else if (l && l.dataToPoint) i = l.dataToPoint(o.getValues(p(l.dimensions, function (t) {return o.mapDimension(t);}), a, !0)) || [];else if (s) {var u = s.getBoundingRect().clone();u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2];}return { point: i, el: s };},MS = f,IS = _,CS = lr(),TS = function TS(t, e, n) {var i = t.currTrigger,r = [t.x, t.y],o = t,a = t.dispatchAction || y(n.dispatchAction, n),s = e.getComponent("axisPointer").coordSysAxesInfo;if (s) {lf(r) && (r = SS({ seriesIndex: o.seriesIndex, dataIndex: o.dataIndex }, e).point);var l = lf(r),u = o.axesInfo,h = s.axesInfo,c = "leave" === i || lf(r),d = {},f = {},p = { list: [], map: {} },g = { showPointer: IS(tf, f), showTooltip: IS(ef, p) };MS(s.coordSysMap, function (t, e) {var n = l || t.containPoint(r);MS(s.coordSysAxesInfo[e], function (t) {var e = t.axis,i = af(u, t);if (!c && n && (!u || i)) {var o = i && i.value;null != o || l || (o = e.pointToData(r)), null != o && Qd(t, o, g, !1, d);}});});var v = {};return MS(h, function (t, e) {var n = t.linkGroup;n && !f[e] && MS(n.axesInfo, function (e, i) {var r = f[i];if (e !== t && r) {var o = r.value;n.mapper && (o = t.axis.scale.parse(n.mapper(o, sf(e), sf(t)))), v[t.key] = o;}});}), MS(v, function (t, e) {Qd(h[e], t, g, !0, d);}), nf(f, h, d), rf(p, r, t, a), of(h, a, n), d;}},DS = (Du({ type: "axisPointer", coordSysAxesInfo: null, defaultOption: { show: "auto", triggerOn: null, zlevel: 0, z: 50, type: "line", snap: !1, triggerTooltip: !0, value: null, status: null, link: [], animation: null, animationDurationUpdate: 200, lineStyle: { color: "#aaa", width: 1, type: "solid" }, shadowStyle: { color: "rgba(150,150,150,0.3)" }, label: { show: !0, formatter: null, precision: "auto", margin: 3, color: "#fff", padding: [5, 7, 5, 7], backgroundColor: "auto", borderColor: null, borderWidth: 0, shadowBlur: 3, shadowColor: "#aaa" }, handle: { show: !1, icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", size: 45, margin: 50, color: "#333", shadowBlur: 3, shadowColor: "#aaa", shadowOffsetX: 0, shadowOffsetY: 2, throttle: 40 } } }), lr()),kS = f,AS = ku({ type: "axisPointer", render: function render(t, e, n) {var i = e.getComponent("tooltip"),r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";uf("axisPointer", n, function (t, e, n) {"none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({ type: "updateAxisPointer", currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });});}, remove: function remove(t, e) {gf(e.getZr(), "axisPointer"), AS.superApply(this._model, "remove", arguments);}, dispose: function dispose(t, e) {gf("axisPointer", e), AS.superApply(this._model, "dispose", arguments);} }),PS = lr(),LS = i,OS = y;vf.prototype = { _group: null, _lastGraphicKey: null, _handle: null, _dragging: !1, _lastValue: null, _lastStatus: null, _payloadInfo: null, animationThreshold: 15, render: function render(t, e, n, i) {var r = e.get("value"),o = e.get("status");if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {this._lastValue = r, this._lastStatus = o;var a = this._group,s = this._handle;if (!o || "hide" === o) return a && a.hide(), void (s && s.hide());a && a.show(), s && s.show();var l = {};this.makeElOption(l, r, t, e, n);var u = l.graphicKey;u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;var h = this._moveAnimation = this.determineAnimation(t, e);if (a) {var c = _(mf, e, h);this.updatePointerEl(a, l, c, e), this.updateLabelEl(a, l, c, e);} else a = this._group = new hg(), this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), n.getZr().add(a);wf(a, e, !0), this._renderHandle(r);}}, remove: function remove(t) {this.clear(t);}, dispose: function dispose(t) {this.clear(t);}, determineAnimation: function determineAnimation(t, e) {var n = e.get("animation"),i = t.axis,r = "category" === i.type,o = e.get("snap");if (!o && !r) return !1;if ("auto" === n || null == n) {var a = this.animationThreshold;if (r && i.getBandWidth() > a) return !0;if (o) {var s = ld(t).seriesDataCount,l = i.getExtent();return Math.abs(l[0] - l[1]) / s > a;}return !1;}return n === !0;}, makeElOption: function makeElOption() {}, createPointerEl: function createPointerEl(t, e) {var n = e.pointer;if (n) {var i = PS(t).pointerEl = new ly[n.type](LS(e.pointer));t.add(i);}}, createLabelEl: function createLabelEl(t, e, n, i) {if (e.label) {var r = PS(t).labelEl = new Rm(LS(e.label));t.add(r), _f(r, i);}}, updatePointerEl: function updatePointerEl(t, e, n) {var i = PS(t).pointerEl;i && e.pointer && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));}, updateLabelEl: function updateLabelEl(t, e, n, i) {var r = PS(t).labelEl;r && (r.setStyle(e.label.style), n(r, { shape: e.label.shape, position: e.label.position }), _f(r, i));}, _renderHandle: function _renderHandle(t) {if (!this._dragging && this.updateHandleTransform) {var e = this._axisPointerModel,n = this._api.getZr(),i = this._handle,r = e.getModel("handle"),o = e.get("status");if (!r.get("show") || !o || "hide" === o) return i && n.remove(i), void (this._handle = null);var a;this._handle || (a = !0, i = this._handle = la(r.get("icon"), { cursor: "move", draggable: !0, onmousemove: function onmousemove(t) {Ip(t.event);}, onmousedown: OS(this._onHandleDragMove, this, 0, 0), drift: OS(this._onHandleDragMove, this), ondragend: OS(this._onHandleDragEnd, this) }), n.add(i)), wf(i, e, !1);var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];i.setStyle(r.getItemStyle(null, s));var l = r.get("size");x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), gl(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, a);}}, _moveHandleToValue: function _moveHandleToValue(t, e) {mf(this._axisPointerModel, !e && this._moveAnimation, this._handle, xf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));}, _onHandleDragMove: function _onHandleDragMove(t, e) {var n = this._handle;if (n) {this._dragging = !0;var i = this.updateHandleTransform(xf(n), [t, e], this._axisModel, this._axisPointerModel);this._payloadInfo = i, n.stopAnimation(), n.attr(xf(i)), PS(n).lastProp = null, this._doDispatchAxisPointer();}}, _doDispatchAxisPointer: function _doDispatchAxisPointer() {var t = this._handle;if (t) {var e = this._payloadInfo,n = this._axisModel;this._api.dispatchAction({ type: "updateAxisPointer", x: e.cursorPoint[0], y: e.cursorPoint[1], tooltipOption: e.tooltipOption, axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }] });}}, _onHandleDragEnd: function _onHandleDragEnd() {this._dragging = !1;var t = this._handle;if (t) {var e = this._axisPointerModel.get("value");this._moveHandleToValue(e), this._api.dispatchAction({ type: "hideTip" });}}, getHandleTransform: null, updateHandleTransform: null, clear: function clear(t) {this._lastValue = null, this._lastStatus = null;var e = t.getZr(),n = this._group,i = this._handle;e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null);}, doClear: function doClear() {}, buildLabel: function buildLabel(t, e, n) {return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };} }, vf.prototype.constructor = vf, vr(vf);var ES = vf.extend({ makeElOption: function makeElOption(t, e, n, i, r) {var o = n.axis,a = o.grid,s = i.get("type"),l = Af(a, o).getOtherAxis(o).getGlobalExtent(),u = o.toGlobalCoord(o.dataToCoord(e, !0));if (s && "none" !== s) {var h = bf(i),c = BS[s](o, u, l);c.style = h, t.graphicKey = c.type, t.pointer = c;}var d = pd(a.model, n);Tf(e, t, d, n, i, r);}, getHandleTransform: function getHandleTransform(t, e, n) {var i = pd(e.axis.grid.model, e, { labelInside: !1 });return i.labelMargin = n.get("handle.margin"), { position: Cf(e.axis, t, i), rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };}, updateHandleTransform: function updateHandleTransform(t, e, n) {var i = n.axis,r = i.grid,o = i.getGlobalExtent(!0),a = Af(r, i).getOtherAxis(i).getGlobalExtent(),s = "x" === i.dim ? 0 : 1,l = t.position;l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);var u = (a[1] + a[0]) / 2,h = [u, u];h[s] = l[s];var c = [{ verticalAlign: "middle" }, { align: "center" }];return { position: l, rotation: t.rotation, cursorPoint: h, tooltipOption: c[s] };} }),BS = { line: function line(t, e, n) {var i = Df([e, n[0]], [e, n[1]], Pf(t));return { type: "Line", subPixelOptimize: !0, shape: i };}, shadow: function shadow(t, e, n) {var i = Math.max(1, t.getBandWidth()),r = n[1] - n[0];return { type: "Rect", shape: kf([e - i / 2, n[0]], [i, r], Pf(t)) };} };Eb.registerAxisPointerClass("CartesianAxisPointer", ES), yu(function (t) {if (t) {(!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});var e = t.axisPointer.link;e && !x(e) && (t.axisPointer.link = [e]);}}), _u(Ix.PROCESSOR.STATISTIC, function (t, e) {t.getComponent("axisPointer").coordSysAxesInfo = ed(t, e);}), wu({ type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer" }, TS), Du({ type: "tooltip", dependencies: ["axisPointer"], defaultOption: { zlevel: 0, z: 60, show: !0, showContent: !0, trigger: "item", triggerOn: "mousemove|click", alwaysShowContent: !1, displayMode: "single", renderMode: "auto", confine: !1, showDelay: 0, hideDelay: 100, transitionDuration: .4, enterable: !1, backgroundColor: "rgba(50,50,50,0.7)", borderColor: "#333", borderRadius: 4, borderWidth: 0, padding: 5, extraCssText: "", axisPointer: { type: "line", axis: "auto", animation: "auto", animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} } }, textStyle: { color: "#fff", fontSize: 14 } } });var zS = f,RS = Na,NS = ["", "-webkit-", "-moz-", "-o-"],FS = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";zf.prototype = { constructor: zf, _enterable: !0, update: function update(t) {var e = this._container,n = e.currentStyle || document.defaultView.getComputedStyle(e),i = e.style;"absolute" !== i.position && "absolute" !== n.position && (i.position = "relative");var r = t.get("alwaysShowContent");r && this._moveTooltipIfResized();}, _moveTooltipIfResized: function _moveTooltipIfResized() {var t = this._styleCoord[2],e = this._styleCoord[3],n = t * this._zr.getWidth(),i = e * this._zr.getHeight();this.moveTo(n, i);}, show: function show(t) {clearTimeout(this._hideTimeout);var e = this.el,n = this._styleCoord;e.style.cssText = FS + Ef(t) + ";left:" + n[0] + "px;top:" + n[1] + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0;}, setContent: function setContent(t) {this.el.innerHTML = null == t ? "" : t;}, setEnterable: function setEnterable(t) {this._enterable = t;}, getSize: function getSize() {var t = this.el;return [t.clientWidth, t.clientHeight];}, moveTo: function moveTo(t, e) {var n = this._styleCoord;Bf(n, this._zr, this._appendToBody, t, e);var i = this.el.style;i.left = n[0] + "px", i.top = n[1] + "px";}, hide: function hide() {this.el.style.display = "none", this._show = !1;}, hideLater: function hideLater(t) {!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());}, isShow: function isShow() {return this._show;}, dispose: function dispose() {this.el.parentNode.removeChild(this.el);}, getOuterSize: function getOuterSize() {var t = this.el.clientWidth,e = this.el.clientHeight;if (document.defaultView && document.defaultView.getComputedStyle) {var n = document.defaultView.getComputedStyle(this.el);n && (t += parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10));}return { width: t, height: e };} }, Nf.prototype = { constructor: Nf, _enterable: !0, update: function update(t) {var e = t.get("alwaysShowContent");e && this._moveTooltipIfResized();}, _moveTooltipIfResized: function _moveTooltipIfResized() {var t = this._styleCoord[2],e = this._styleCoord[3],n = t * this._zr.getWidth(),i = e * this._zr.getHeight();this.moveTo(n, i);}, show: function show() {this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0;}, setContent: function setContent(t, e, n) {this.el && this._zr.remove(this.el);for (var i = {}, r = t, o = "{marker", a = "|}", s = r.indexOf(o); s >= 0;) {var l = r.indexOf(a),u = r.substr(s + o.length, l - s - o.length);i["marker" + u] = u.indexOf("sub") > -1 ? { textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[u], textOffset: [3, 0] } : { textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[u] }, r = r.substr(l + 1), s = r.indexOf("{marker");}var h = n.getModel("textStyle"),c = h.get("fontSize"),d = n.get("textLineHeight");null == d && (d = Math.round(3 * c / 2)), this.el = new Im({ style: Xo({}, h, { rich: i, text: t, textBackgroundColor: n.get("backgroundColor"), textBorderRadius: n.get("borderRadius"), textFill: n.get("textStyle.color"), textPadding: n.get("padding"), textLineHeight: d }), z: n.get("z") }), this._zr.add(this.el);var f = this;this.el.on("mouseover", function () {f._enterable && (clearTimeout(f._hideTimeout), f._show = !0), f._inContent = !0;}), this.el.on("mouseout", function () {f._enterable && f._show && f.hideLater(f._hideDelay), f._inContent = !1;});}, setEnterable: function setEnterable(t) {this._enterable = t;}, getSize: function getSize() {var t = this.el.getBoundingRect();return [t.width, t.height];}, moveTo: function moveTo(t, e) {if (this.el) {var n = this._styleCoord;Rf(n, this._zr, t, e), this.el.attr("position", [n[0], n[1]]);}}, hide: function hide() {this.el && this.el.hide(), this._show = !1;}, hideLater: function hideLater(t) {!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());}, isShow: function isShow() {return this._show;}, dispose: function dispose() {clearTimeout(this._hideTimeout), this.el && this._zr.remove(this.el);}, getOuterSize: function getOuterSize() {var t = this.getSize();return { width: t[0], height: t[1] };} };var HS = y,VS = f,GS = wa,WS = new Rm({ shape: { x: -1, y: -1, width: 2, height: 2 } });ku({ type: "tooltip", init: function init(t, e) {if (!Kf.node) {var n = t.getComponent("tooltip"),i = n.get("renderMode");this._renderMode = fr(i);var r;"html" === this._renderMode ? (r = new zf(e.getDom(), e, { appendToBody: n.get("appendToBody", !0) }), this._newLine = "<br/>") : (r = new Nf(e), this._newLine = "\n"), this._tooltipContent = r;}}, render: function render(t, e, n) {if (!Kf.node) {this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");var i = this._tooltipContent;i.update(t), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();}}, _initGlobalListener: function _initGlobalListener() {var t = this._tooltipModel,e = t.get("triggerOn");uf("itemTooltip", this._api, HS(function (t, n, i) {"none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i));}, this));}, _keepShow: function _keepShow() {var t = this._tooltipModel,e = this._ecModel,n = this._api;if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {var i = this;clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {!n.isDisposed() && i.manuallyShowTip(t, e, n, { x: i._lastX, y: i._lastY });});}}, manuallyShowTip: function manuallyShowTip(t, e, n, i) {if (i.from !== this.uid && !Kf.node) {var r = Hf(i, n);this._ticket = "";var o = i.dataByCoordSys;if (i.tooltip && null != i.x && null != i.y) {var a = WS;a.position = [i.x, i.y], a.update(), a.tooltip = i.tooltip, this._tryShow({ offsetX: i.x, offsetY: i.y, target: a }, r);} else if (o) this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, dataByCoordSys: i.dataByCoordSys, tooltipOption: i.tooltipOption }, r);else if (null != i.seriesIndex) {if (this._manuallyAxisShowTip(t, e, n, i)) return;var s = SS(i, e),l = s.point[0],u = s.point[1];null != l && null != u && this._tryShow({ offsetX: l, offsetY: u, position: i.position, target: s.el }, r);} else null != i.x && null != i.y && (n.dispatchAction({ type: "updateAxisPointer", x: i.x, y: i.y }), this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, target: n.getZr().findHover(i.x, i.y).target }, r));}}, manuallyHideTip: function manuallyHideTip(t, e, n, i) {var r = this._tooltipContent;!this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Hf(i, n));}, _manuallyAxisShowTip: function _manuallyAxisShowTip(t, e, n, i) {var r = i.seriesIndex,o = i.dataIndex,a = e.getComponent("axisPointer").coordSysAxesInfo;if (null != r && null != o && null != a) {var s = e.getSeriesByIndex(r);if (s) {var l = s.getData(),t = Ff([l.getItemModel(o), s, (s.coordinateSystem || {}).model, t]);if ("axis" === t.get("trigger")) return n.dispatchAction({ type: "updateAxisPointer", seriesIndex: r, dataIndex: o, position: i.position }), !0;}}}, _tryShow: function _tryShow(t, e) {var n = t.target,i = this._tooltipModel;if (i) {this._lastX = t.offsetX, this._lastY = t.offsetY;var r = t.dataByCoordSys;r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e));}}, _showOrMove: function _showOrMove(t, e) {var n = t.get("showDelay");e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e();}, _showAxisTooltip: function _showAxisTooltip(t, e) {var n = this._ecModel,i = this._tooltipModel,o = [e.offsetX, e.offsetY],a = [],s = [],l = Ff([e.tooltipOption, i]),u = this._renderMode,h = this._newLine,c = {};VS(t, function (t) {VS(t.dataByAxis, function (t) {var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),i = t.value,o = [];if (e && null != i) {var l = If(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);f(t.seriesDataIndices, function (a) {var h = n.getSeriesByIndex(a.seriesIndex),d = a.dataIndexInside,f = h && h.getDataParams(d);if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = Vh(e.axis, i), f.axisValueLabel = l, f) {s.push(f);var p,g = h.formatTooltip(d, !0, null, u);if (S(g)) {p = g.html;var v = g.markers;r(c, v);} else p = g;o.push(p);}});var d = l;a.push("html" !== u ? o.join(h) : (d ? Fa(d) + h : "") + o.join(h));}});}, this), a.reverse(), a = a.join(this._newLine + this._newLine);var d = e.position;this._showOrMove(l, function () {this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, o[0], o[1], this._tooltipContent, s) : this._showTooltipContent(l, a, s, Math.random(), o[0], o[1], d, void 0, c);});}, _showSeriesItemTooltip: function _showSeriesItemTooltip(t, e, n) {var i = this._ecModel,r = e.seriesIndex,o = i.getSeriesByIndex(r),a = e.dataModel || o,s = e.dataIndex,l = e.dataType,u = a.getData(l),h = Ff([u.getItemModel(s), a, o && (o.coordinateSystem || {}).model, this._tooltipModel]),c = h.get("trigger");if (null == c || "item" === c) {var d,f,p = a.getDataParams(s, l),g = a.formatTooltip(s, !1, l, this._renderMode);S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);var v = "item_" + a.name + "_" + s;this._showOrMove(h, function () {this._showTooltipContent(h, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);}), n({ type: "showTip", dataIndexInside: s, dataIndex: u.getRawIndex(s), seriesIndex: r, from: this.uid });}}, _showComponentItemTooltip: function _showComponentItemTooltip(t, e, n) {var i = e.tooltip;if ("string" == typeof i) {var r = i;i = { content: r, formatter: r };}var o = new fa(i, this._tooltipModel, this._ecModel),a = o.get("content"),s = Math.random();this._showOrMove(o, function () {this._showTooltipContent(o, a, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);}), n({ type: "showTip", from: this.uid });}, _showTooltipContent: function _showTooltipContent(t, e, n, i, r, o, a, s, l) {if (this._ticket = "", t.get("showContent") && t.get("show")) {var u = this._tooltipContent,h = t.get("formatter");a = a || t.get("position");var c = e;if (h && "string" == typeof h) c = Ha(h, n, !0);else if ("function" == typeof h) {var d = HS(function (e, i) {e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, a, r, o, u, n, s));}, this);this._ticket = i, c = h(n, i, d);}u.setContent(c, l, t), u.show(t), this._updatePosition(t, a, r, o, u, n, s);}}, _updatePosition: function _updatePosition(t, e, n, i, r, o, a) {var s = this._api.getWidth(),l = this._api.getHeight();e = e || t.get("position");var u = r.getSize(),h = t.get("align"),c = t.get("verticalAlign"),d = a && a.getBoundingRect().clone();if (a && d.applyTransform(a.transform), "function" == typeof e && (e = e([n, i], o, r.el, d, { viewSize: [s, l], contentSize: u.slice() })), x(e)) n = GS(e[0], s), i = GS(e[1], l);else if (S(e)) {e.width = u[0], e.height = u[1];var f = Ka(e, { width: s, height: l });n = f.x, i = f.y, h = null, c = null;} else if ("string" == typeof e && a) {var p = Wf(e, d, u);n = p[0], i = p[1];} else {var p = Vf(n, i, r, s, l, h ? null : 20, c ? null : 20);n = p[0], i = p[1];}if (h && (n -= Xf(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Xf(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {var p = Gf(n, i, r, s, l);n = p[0], i = p[1];}r.moveTo(n, i);}, _updateContentNotChangedOnAxis: function _updateContentNotChangedOnAxis(t) {var e = this._lastDataByCoordSys,n = !!e && e.length === t.length;return n && VS(e, function (e, i) {var r = e.dataByAxis || {},o = t[i] || {},a = o.dataByAxis || [];n &= r.length === a.length, n && VS(r, function (t, e) {var i = a[e] || {},r = t.seriesDataIndices || [],o = i.seriesDataIndices || [];n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === o.length, n && VS(r, function (t, e) {var i = o[e];n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;});});}), this._lastDataByCoordSys = t, !!n;}, _hide: function _hide(t) {this._lastDataByCoordSys = null, t({ type: "hideTip", from: this.uid });}, dispose: function dispose(t, e) {Kf.node || (this._tooltipContent.dispose(), gf("itemTooltip", e));} }), wu({ type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" }, function () {}), wu({ type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" }, function () {}), t.version = hx, t.dependencies = cx, t.PRIORITY = Ix, t.init = cu, t.connect = du, t.disConnect = fu, t.disconnect = Yx, t.dispose = pu, t.getInstanceByDom = gu, t.getInstanceById = vu, t.registerTheme = mu, t.registerPreprocessor = yu, t.registerProcessor = _u, t.registerPostUpdate = xu, t.registerAction = wu, t.registerCoordinateSystem = bu, t.getCoordinateSystemDimensions = Su, t.registerLayout = Mu, t.registerVisual = Iu, t.registerLoading = Tu, t.extendComponentModel = Du, t.extendComponentView = ku, t.extendSeriesModel = Au, t.extendChartView = Pu, t.setCanvasCreator = Lu, t.registerMap = Ou, t.getMap = Eu, t.dataTool = Ux, t.zrender = lv, t.number = _y, t.format = Cy, t.throttle = pl, t.helper = qw, t.matrix = Lp, t.vector = vp, t.color = $p, t.parseGeoJSON = Kw, t.parseGeoJson = tb, t.util = eb, t.graphic = nb, t.List = rw, t.Model = fa, t.Axis = Jw, t.env = Kf;});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 4:
/*!************************************************!*\
  !*** /Users/zzx/Project/little-web/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map