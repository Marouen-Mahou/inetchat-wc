/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "01d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

  var hasCORS = __webpack_require__("c9eb");

  module.exports = function (opts) {
    var xdomain = opts.xdomain;
  
    // scheme must be same when usign XDomainRequest
    // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
    var xscheme = opts.xscheme;
  
    // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
    // https://github.com/Automattic/engine.io-client/pull/217
    var enablesXDR = opts.enablesXDR;
  
    // XMLHttpRequest can be disabled on IE
    try {
      if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) { }
  
    // Use XDomainRequest for IE8 if enablesXDR is true
    // because loading bar keeps flashing when using jsonp-polling
    // https://github.com/yujiosaka/socke.io-ie8-loading-example
    try {
      if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
        return new XDomainRequest();
      }
    } catch (e) { }
  
    if (!xdomain) {
      try {
        return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
      } catch (e) { }
    }
  };
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "0299":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
    , length = 64
    , map = {}
    , seed = 0
    , i = 0
    , prev;
  
  /**
   * Return a string representing the specified number.
   *
   * @param {Number} num The number to convert.
   * @returns {String} The string representation of the number.
   * @api public
   */
  function encode(num) {
    var encoded = '';
  
    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);
  
    return encoded;
  }
  
  /**
   * Return the integer value specified by the given string.
   *
   * @param {String} str The string to convert.
   * @returns {Number} The integer value represented by the string.
   * @api public
   */
  function decode(str) {
    var decoded = 0;
  
    for (i = 0; i < str.length; i++) {
      decoded = decoded * length + map[str.charAt(i)];
    }
  
    return decoded;
  }
  
  /**
   * Yeast: A tiny growing id generator.
   *
   * @returns {String} A unique id.
   * @api public
   */
  function yeast() {
    var now = encode(+new Date());
  
    if (now !== prev) return seed = 0, prev = now;
    return now +'.'+ encode(seed++);
  }
  
  //
  // Map each character to its index.
  //
  for (; i < length; i++) map[alphabet[i]] = i;
  
  //
  // Expose the `yeast`, `encode` and `decode` functions.
  //
  yeast.encode = encode;
  yeast.decode = decode;
  module.exports = yeast;
  
  
  /***/ }),
  
  /***/ "03d9":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/wtf8 v1.0.0 by @mathias */
  ;(function(root) {
  
    // Detect free variables `exports`
    var freeExports =  true && exports;
  
    // Detect free variable `module`
    var freeModule =  true && module &&
      module.exports == freeExports && module;
  
    // Detect free variable `global`, from Node.js or Browserified code,
    // and use it as `root`
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
      root = freeGlobal;
    }
  
    /*--------------------------------------------------------------------------*/
  
    var stringFromCharCode = String.fromCharCode;
  
    // Taken from https://mths.be/punycode
    function ucs2decode(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      var value;
      var extra;
      while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
          // high surrogate, and there is a next character
          extra = string.charCodeAt(counter++);
          if ((extra & 0xFC00) == 0xDC00) { // low surrogate
            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
          } else {
            // unmatched surrogate; only append this code unit, in case the next
            // code unit is the high surrogate of a surrogate pair
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
  
    // Taken from https://mths.be/punycode
    function ucs2encode(array) {
      var length = array.length;
      var index = -1;
      var value;
      var output = '';
      while (++index < length) {
        value = array[index];
        if (value > 0xFFFF) {
          value -= 0x10000;
          output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
          value = 0xDC00 | value & 0x3FF;
        }
        output += stringFromCharCode(value);
      }
      return output;
    }
  
    /*--------------------------------------------------------------------------*/
  
    function createByte(codePoint, shift) {
      return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
    }
  
    function encodeCodePoint(codePoint) {
      if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
        return stringFromCharCode(codePoint);
      }
      var symbol = '';
      if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
        symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
      }
      else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
        symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
        symbol += createByte(codePoint, 6);
      }
      else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
        symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
        symbol += createByte(codePoint, 12);
        symbol += createByte(codePoint, 6);
      }
      symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
      return symbol;
    }
  
    function wtf8encode(string) {
      var codePoints = ucs2decode(string);
      var length = codePoints.length;
      var index = -1;
      var codePoint;
      var byteString = '';
      while (++index < length) {
        codePoint = codePoints[index];
        byteString += encodeCodePoint(codePoint);
      }
      return byteString;
    }
  
    /*--------------------------------------------------------------------------*/
  
    function readContinuationByte() {
      if (byteIndex >= byteCount) {
        throw Error('Invalid byte index');
      }
  
      var continuationByte = byteArray[byteIndex] & 0xFF;
      byteIndex++;
  
      if ((continuationByte & 0xC0) == 0x80) {
        return continuationByte & 0x3F;
      }
  
      // If we end up here, it’s not a continuation byte.
      throw Error('Invalid continuation byte');
    }
  
    function decodeSymbol() {
      var byte1;
      var byte2;
      var byte3;
      var byte4;
      var codePoint;
  
      if (byteIndex > byteCount) {
        throw Error('Invalid byte index');
      }
  
      if (byteIndex == byteCount) {
        return false;
      }
  
      // Read the first byte.
      byte1 = byteArray[byteIndex] & 0xFF;
      byteIndex++;
  
      // 1-byte sequence (no continuation bytes)
      if ((byte1 & 0x80) == 0) {
        return byte1;
      }
  
      // 2-byte sequence
      if ((byte1 & 0xE0) == 0xC0) {
        var byte2 = readContinuationByte();
        codePoint = ((byte1 & 0x1F) << 6) | byte2;
        if (codePoint >= 0x80) {
          return codePoint;
        } else {
          throw Error('Invalid continuation byte');
        }
      }
  
      // 3-byte sequence (may include unpaired surrogates)
      if ((byte1 & 0xF0) == 0xE0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
        if (codePoint >= 0x0800) {
          return codePoint;
        } else {
          throw Error('Invalid continuation byte');
        }
      }
  
      // 4-byte sequence
      if ((byte1 & 0xF8) == 0xF0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        byte4 = readContinuationByte();
        codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
          (byte3 << 0x06) | byte4;
        if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
          return codePoint;
        }
      }
  
      throw Error('Invalid WTF-8 detected');
    }
  
    var byteArray;
    var byteCount;
    var byteIndex;
    function wtf8decode(byteString) {
      byteArray = ucs2decode(byteString);
      byteCount = byteArray.length;
      byteIndex = 0;
      var codePoints = [];
      var tmp;
      while ((tmp = decodeSymbol()) !== false) {
        codePoints.push(tmp);
      }
      return ucs2encode(codePoints);
    }
  
    /*--------------------------------------------------------------------------*/
  
    var wtf8 = {
      'version': '1.0.0',
      'encode': wtf8encode,
      'decode': wtf8decode
    };
  
    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (
      true
    ) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return wtf8;
      }).call(exports, __webpack_require__, exports, module),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }	else { var key, hasOwnProperty, object; }
  
  }(this));
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module), __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "0882":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * Module dependencies.
   */
  
  var Transport = __webpack_require__("19b7");
  var parser = __webpack_require__("fa7b");
  var parseqs = __webpack_require__("4f2a");
  var inherit = __webpack_require__("62fa");
  var yeast = __webpack_require__("0299");
  var debug = __webpack_require__("b9f7")('engine.io-client:websocket');
  var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
  var NodeWebSocket;
  if (typeof window === 'undefined') {
    try {
      NodeWebSocket = __webpack_require__(0);
    } catch (e) { }
  }
  
  /**
   * Get either the `WebSocket` or `MozWebSocket` globals
   * in the browser or try to resolve WebSocket-compatible
   * interface exposed by `ws` for Node-like environment.
   */
  
  var WebSocket = BrowserWebSocket;
  if (!WebSocket && typeof window === 'undefined') {
    WebSocket = NodeWebSocket;
  }
  
  /**
   * Module exports.
   */
  
  module.exports = WS;
  
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  
  function WS (opts) {
    var forceBase64 = (opts && opts.forceBase64);
    if (forceBase64) {
      this.supportsBinary = false;
    }
    this.perMessageDeflate = opts.perMessageDeflate;
    this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
    if (!this.usingBrowserWebSocket) {
      WebSocket = NodeWebSocket;
    }
    Transport.call(this, opts);
  }
  
  /**
   * Inherits from Transport.
   */
  
  inherit(WS, Transport);
  
  /**
   * Transport name.
   *
   * @api public
   */
  
  WS.prototype.name = 'websocket';
  
  /*
   * WebSockets support binary
   */
  
  WS.prototype.supportsBinary = true;
  
  /**
   * Opens socket.
   *
   * @api private
   */
  
  WS.prototype.doOpen = function () {
    if (!this.check()) {
      // let probe timeout
      return;
    }
  
    var uri = this.uri();
    var protocols = void (0);
    var opts = {
      agent: this.agent,
      perMessageDeflate: this.perMessageDeflate
    };
  
    // SSL options for Node.js client
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
    if (this.extraHeaders) {
      opts.headers = this.extraHeaders;
    }
    if (this.localAddress) {
      opts.localAddress = this.localAddress;
    }
  
    try {
      this.ws = this.usingBrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emit('error', err);
    }
  
    if (this.ws.binaryType === undefined) {
      this.supportsBinary = false;
    }
  
    if (this.ws.supports && this.ws.supports.binary) {
      this.supportsBinary = true;
      this.ws.binaryType = 'nodebuffer';
    } else {
      this.ws.binaryType = 'arraybuffer';
    }
  
    this.addEventListeners();
  };
  
  /**
   * Adds event listeners to the socket
   *
   * @api private
   */
  
  WS.prototype.addEventListeners = function () {
    var self = this;
  
    this.ws.onopen = function () {
      self.onOpen();
    };
    this.ws.onclose = function () {
      self.onClose();
    };
    this.ws.onmessage = function (ev) {
      self.onData(ev.data);
    };
    this.ws.onerror = function (e) {
      self.onError('websocket error', e);
    };
  };
  
  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */
  
  WS.prototype.write = function (packets) {
    var self = this;
    this.writable = false;
  
    // encodePacket efficient as it uses WS framing
    // no need for encodePayload
    var total = packets.length;
    for (var i = 0, l = total; i < l; i++) {
      (function (packet) {
        parser.encodePacket(packet, self.supportsBinary, function (data) {
          if (!self.usingBrowserWebSocket) {
            // always create a new object (GH-437)
            var opts = {};
            if (packet.options) {
              opts.compress = packet.options.compress;
            }
  
            if (self.perMessageDeflate) {
              var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
              if (len < self.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          }
  
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            if (self.usingBrowserWebSocket) {
              // TypeError is thrown when passing the second argument on Safari
              self.ws.send(data);
            } else {
              self.ws.send(data, opts);
            }
          } catch (e) {
            debug('websocket closed before onclose event');
          }
  
          --total || done();
        });
      })(packets[i]);
    }
  
    function done () {
      self.emit('flush');
  
      // fake drain
      // defer to next tick to allow Socket to clear writeBuffer
      setTimeout(function () {
        self.writable = true;
        self.emit('drain');
      }, 0);
    }
  };
  
  /**
   * Called upon close
   *
   * @api private
   */
  
  WS.prototype.onClose = function () {
    Transport.prototype.onClose.call(this);
  };
  
  /**
   * Closes socket.
   *
   * @api private
   */
  
  WS.prototype.doClose = function () {
    if (typeof this.ws !== 'undefined') {
      this.ws.close();
    }
  };
  
  /**
   * Generates uri for connection.
   *
   * @api private
   */
  
  WS.prototype.uri = function () {
    var query = this.query || {};
    var schema = this.secure ? 'wss' : 'ws';
    var port = '';
  
    // avoid port if default for schema
    if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
      ('ws' === schema && Number(this.port) !== 80))) {
      port = ':' + this.port;
    }
  
    // append timestamp to URI
    if (this.timestampRequests) {
      query[this.timestampParam] = yeast();
    }
  
    // communicate binary support capabilities
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
  
    query = parseqs.encode(query);
  
    // prepend ? to query
    if (query.length) {
      query = '?' + query;
    }
  
    var ipv6 = this.hostname.indexOf(':') !== -1;
    return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
  };
  
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */
  
  WS.prototype.check = function () {
    return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
  };
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "0949":
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Module dependencies.
   */
  
  var Transport = __webpack_require__("19b7");
  var parseqs = __webpack_require__("4f2a");
  var parser = __webpack_require__("fa7b");
  var inherit = __webpack_require__("62fa");
  var yeast = __webpack_require__("0299");
  var debug = __webpack_require__("b9f7")('engine.io-client:polling');
  
  /**
   * Module exports.
   */
  
  module.exports = Polling;
  
  /**
   * Is XHR2 supported?
   */
  
  var hasXHR2 = (function () {
    var XMLHttpRequest = __webpack_require__("01d3");
    var xhr = new XMLHttpRequest({ xdomain: false });
    return null != xhr.responseType;
  })();
  
  /**
   * Polling interface.
   *
   * @param {Object} opts
   * @api private
   */
  
  function Polling (opts) {
    var forceBase64 = (opts && opts.forceBase64);
    if (!hasXHR2 || forceBase64) {
      this.supportsBinary = false;
    }
    Transport.call(this, opts);
  }
  
  /**
   * Inherits from Transport.
   */
  
  inherit(Polling, Transport);
  
  /**
   * Transport name.
   */
  
  Polling.prototype.name = 'polling';
  
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */
  
  Polling.prototype.doOpen = function () {
    this.poll();
  };
  
  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */
  
  Polling.prototype.pause = function (onPause) {
    var self = this;
  
    this.readyState = 'pausing';
  
    function pause () {
      debug('paused');
      self.readyState = 'paused';
      onPause();
    }
  
    if (this.polling || !this.writable) {
      var total = 0;
  
      if (this.polling) {
        debug('we are currently polling - waiting to pause');
        total++;
        this.once('pollComplete', function () {
          debug('pre-pause polling complete');
          --total || pause();
        });
      }
  
      if (!this.writable) {
        debug('we are currently writing - waiting to pause');
        total++;
        this.once('drain', function () {
          debug('pre-pause writing complete');
          --total || pause();
        });
      }
    } else {
      pause();
    }
  };
  
  /**
   * Starts polling cycle.
   *
   * @api public
   */
  
  Polling.prototype.poll = function () {
    debug('polling');
    this.polling = true;
    this.doPoll();
    this.emit('poll');
  };
  
  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */
  
  Polling.prototype.onData = function (data) {
    var self = this;
    debug('polling got data %s', data);
    var callback = function (packet, index, total) {
      // if its the first message we consider the transport open
      if ('opening' === self.readyState) {
        self.onOpen();
      }
  
      // if its a close packet, we close the ongoing requests
      if ('close' === packet.type) {
        self.onClose();
        return false;
      }
  
      // otherwise bypass onData and handle the message
      self.onPacket(packet);
    };
  
    // decode payload
    parser.decodePayload(data, this.socket.binaryType, callback);
  
    // if an event did not trigger closing
    if ('closed' !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emit('pollComplete');
  
      if ('open' === this.readyState) {
        this.poll();
      } else {
        debug('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  };
  
  /**
   * For polling, send a close packet.
   *
   * @api private
   */
  
  Polling.prototype.doClose = function () {
    var self = this;
  
    function close () {
      debug('writing close packet');
      self.write([{ type: 'close' }]);
    }
  
    if ('open' === this.readyState) {
      debug('transport open - closing');
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      debug('transport not open - deferring close');
      this.once('open', close);
    }
  };
  
  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */
  
  Polling.prototype.write = function (packets) {
    var self = this;
    this.writable = false;
    var callbackfn = function () {
      self.writable = true;
      self.emit('drain');
    };
  
    parser.encodePayload(packets, this.supportsBinary, function (data) {
      self.doWrite(data, callbackfn);
    });
  };
  
  /**
   * Generates uri for connection.
   *
   * @api private
   */
  
  Polling.prototype.uri = function () {
    var query = this.query || {};
    var schema = this.secure ? 'https' : 'http';
    var port = '';
  
    // cache busting is forced
    if (false !== this.timestampRequests) {
      query[this.timestampParam] = yeast();
    }
  
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
  
    query = parseqs.encode(query);
  
    // avoid port if default for schema
    if (this.port && (('https' === schema && Number(this.port) !== 443) ||
       ('http' === schema && Number(this.port) !== 80))) {
      port = ':' + this.port;
    }
  
    // prepend ? to query
    if (query.length) {
      query = '?' + query;
    }
  
    var ipv6 = this.hostname.indexOf(':') !== -1;
    return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
  };
  
  
  /***/ }),
  
  /***/ "0a06":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  var buildURL = __webpack_require__("30b5");
  var InterceptorManager = __webpack_require__("f6b4");
  var dispatchRequest = __webpack_require__("5270");
  var mergeConfig = __webpack_require__("4a7b");
  
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }
  
    config = mergeConfig(this.defaults, config);
  
    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }
  
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
  
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
  
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
  
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
  
    return promise;
  };
  
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };
  
  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  
  module.exports = Axios;
  
  
  /***/ }),
  
  /***/ "0a5e":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {
  /**
   * Module requirements.
   */
  
  var Polling = __webpack_require__("0949");
  var inherit = __webpack_require__("62fa");
  
  /**
   * Module exports.
   */
  
  module.exports = JSONPPolling;
  
  /**
   * Cached regular expressions.
   */
  
  var rNewline = /\n/g;
  var rEscapedNewline = /\\n/g;
  
  /**
   * Global JSONP callbacks.
   */
  
  var callbacks;
  
  /**
   * Noop.
   */
  
  function empty () { }
  
  /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */
  
  function JSONPPolling (opts) {
    Polling.call(this, opts);
  
    this.query = this.query || {};
  
    // define global callbacks array if not present
    // we do this here (lazily) to avoid unneeded global pollution
    if (!callbacks) {
      // we need to consider multiple engines in the same page
      if (!global.___eio) global.___eio = [];
      callbacks = global.___eio;
    }
  
    // callback identifier
    this.index = callbacks.length;
  
    // add callback to jsonp global
    var self = this;
    callbacks.push(function (msg) {
      self.onData(msg);
    });
  
    // append to query string
    this.query.j = this.index;
  
    // prevent spurious errors from being emitted when the window is unloaded
    if (global.document && global.addEventListener) {
      global.addEventListener('beforeunload', function () {
        if (self.script) self.script.onerror = empty;
      }, false);
    }
  }
  
  /**
   * Inherits from Polling.
   */
  
  inherit(JSONPPolling, Polling);
  
  /*
   * JSONP only supports binary as base64 encoded strings
   */
  
  JSONPPolling.prototype.supportsBinary = false;
  
  /**
   * Closes the socket.
   *
   * @api private
   */
  
  JSONPPolling.prototype.doClose = function () {
    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }
  
    if (this.form) {
      this.form.parentNode.removeChild(this.form);
      this.form = null;
      this.iframe = null;
    }
  
    Polling.prototype.doClose.call(this);
  };
  
  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  
  JSONPPolling.prototype.doPoll = function () {
    var self = this;
    var script = document.createElement('script');
  
    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }
  
    script.async = true;
    script.src = this.uri();
    script.onerror = function (e) {
      self.onError('jsonp poll error', e);
    };
  
    var insertAt = document.getElementsByTagName('script')[0];
    if (insertAt) {
      insertAt.parentNode.insertBefore(script, insertAt);
    } else {
      (document.head || document.body).appendChild(script);
    }
    this.script = script;
  
    var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
  
    if (isUAgecko) {
      setTimeout(function () {
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  };
  
  /**
   * Writes with a hidden iframe.
   *
   * @param {String} data to send
   * @param {Function} called upon flush.
   * @api private
   */
  
  JSONPPolling.prototype.doWrite = function (data, fn) {
    var self = this;
  
    if (!this.form) {
      var form = document.createElement('form');
      var area = document.createElement('textarea');
      var id = this.iframeId = 'eio_iframe_' + this.index;
      var iframe;
  
      form.className = 'socketio';
      form.style.position = 'absolute';
      form.style.top = '-1000px';
      form.style.left = '-1000px';
      form.target = id;
      form.method = 'POST';
      form.setAttribute('accept-charset', 'utf-8');
      area.name = 'd';
      form.appendChild(area);
      document.body.appendChild(form);
  
      this.form = form;
      this.area = area;
    }
  
    this.form.action = this.uri();
  
    function complete () {
      initIframe();
      fn();
    }
  
    function initIframe () {
      if (self.iframe) {
        try {
          self.form.removeChild(self.iframe);
        } catch (e) {
          self.onError('jsonp polling iframe removal error', e);
        }
      }
  
      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
        iframe = document.createElement(html);
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = self.iframeId;
        iframe.src = 'javascript:0';
      }
  
      iframe.id = self.iframeId;
  
      self.form.appendChild(iframe);
      self.iframe = iframe;
    }
  
    initIframe();
  
    // escape \n to prevent it from being converted into \r\n by some UAs
    // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
    data = data.replace(rEscapedNewline, '\\\n');
    this.area.value = data.replace(rNewline, '\\n');
  
    try {
      this.form.submit();
    } catch (e) {}
  
    if (this.iframe.attachEvent) {
      this.iframe.onreadystatechange = function () {
        if (self.iframe.readyState === 'complete') {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }
  };
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "0b64":
  /***/ (function(module, exports) {
  
  
  /**
   * Expose `Backoff`.
   */
  
  module.exports = Backoff;
  
  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */
  
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  
  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */
  
  Backoff.prototype.duration = function(){
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand =  Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  
  /**
   * Reset the number of attempts.
   *
   * @api public
   */
  
  Backoff.prototype.reset = function(){
    this.attempts = 0;
  };
  
  /**
   * Set the minimum duration
   *
   * @api public
   */
  
  Backoff.prototype.setMin = function(min){
    this.ms = min;
  };
  
  /**
   * Set the maximum duration
   *
   * @api public
   */
  
  Backoff.prototype.setMax = function(max){
    this.max = max;
  };
  
  /**
   * Set the jitter
   *
   * @api public
   */
  
  Backoff.prototype.setJitter = function(jitter){
    this.jitter = jitter;
  };
  
  
  
  /***/ }),
  
  /***/ "0df6":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  
  
  /***/ }),
  
  /***/ "19b7":
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Module dependencies.
   */
  
  var parser = __webpack_require__("fa7b");
  var Emitter = __webpack_require__("d4c9");
  
  /**
   * Module exports.
   */
  
  module.exports = Transport;
  
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  
  function Transport (opts) {
    this.path = opts.path;
    this.hostname = opts.hostname;
    this.port = opts.port;
    this.secure = opts.secure;
    this.query = opts.query;
    this.timestampParam = opts.timestampParam;
    this.timestampRequests = opts.timestampRequests;
    this.readyState = '';
    this.agent = opts.agent || false;
    this.socket = opts.socket;
    this.enablesXDR = opts.enablesXDR;
  
    // SSL options for Node.js client
    this.pfx = opts.pfx;
    this.key = opts.key;
    this.passphrase = opts.passphrase;
    this.cert = opts.cert;
    this.ca = opts.ca;
    this.ciphers = opts.ciphers;
    this.rejectUnauthorized = opts.rejectUnauthorized;
    this.forceNode = opts.forceNode;
  
    // other options for Node.js client
    this.extraHeaders = opts.extraHeaders;
    this.localAddress = opts.localAddress;
  }
  
  /**
   * Mix in `Emitter`.
   */
  
  Emitter(Transport.prototype);
  
  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */
  
  Transport.prototype.onError = function (msg, desc) {
    var err = new Error(msg);
    err.type = 'TransportError';
    err.description = desc;
    this.emit('error', err);
    return this;
  };
  
  /**
   * Opens the transport.
   *
   * @api public
   */
  
  Transport.prototype.open = function () {
    if ('closed' === this.readyState || '' === this.readyState) {
      this.readyState = 'opening';
      this.doOpen();
    }
  
    return this;
  };
  
  /**
   * Closes the transport.
   *
   * @api private
   */
  
  Transport.prototype.close = function () {
    if ('opening' === this.readyState || 'open' === this.readyState) {
      this.doClose();
      this.onClose();
    }
  
    return this;
  };
  
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */
  
  Transport.prototype.send = function (packets) {
    if ('open' === this.readyState) {
      this.write(packets);
    } else {
      throw new Error('Transport not open');
    }
  };
  
  /**
   * Called upon open
   *
   * @api private
   */
  
  Transport.prototype.onOpen = function () {
    this.readyState = 'open';
    this.writable = true;
    this.emit('open');
  };
  
  /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */
  
  Transport.prototype.onData = function (data) {
    var packet = parser.decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  };
  
  /**
   * Called with a decoded packet.
   */
  
  Transport.prototype.onPacket = function (packet) {
    this.emit('packet', packet);
  };
  
  /**
   * Called upon close.
   *
   * @api private
   */
  
  Transport.prototype.onClose = function () {
    this.readyState = 'closed';
    this.emit('close');
  };
  
  
  /***/ }),
  
  /***/ "1d2b":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  
  
  /***/ }),
  
  /***/ "2392":
  /***/ (function(module, exports) {
  
  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };
  
  
  /***/ }),
  
  /***/ "2444":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {
  
  var utils = __webpack_require__("c532");
  var normalizeHeaderName = __webpack_require__("c8af");
  
  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }
  
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = __webpack_require__("b50d");
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = __webpack_require__("b50d");
    }
    return adapter;
  }
  
  var defaults = {
    adapter: getDefaultAdapter(),
  
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data)
      ) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],
  
    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],
  
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
  
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
  
    maxContentLength: -1,
    maxBodyLength: -1,
  
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  
  module.exports = defaults;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))
  
  /***/ }),
  
  /***/ "24fb":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  // eslint-disable-next-line func-names
  module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
  
    list.toString = function toString() {
      return this.map(function (item) {
        var content = cssWithMappingToString(item, useSourceMap);
  
        if (item[2]) {
          return "@media ".concat(item[2], " {").concat(content, "}");
        }
  
        return content;
      }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
  
  
    list.i = function (modules, mediaQuery, dedupe) {
      if (typeof modules === 'string') {
        // eslint-disable-next-line no-param-reassign
        modules = [[null, modules, '']];
      }
  
      var alreadyImportedModules = {};
  
      if (dedupe) {
        for (var i = 0; i < this.length; i++) {
          // eslint-disable-next-line prefer-destructuring
          var id = this[i][0];
  
          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }
      }
  
      for (var _i = 0; _i < modules.length; _i++) {
        var item = [].concat(modules[_i]);
  
        if (dedupe && alreadyImportedModules[item[0]]) {
          // eslint-disable-next-line no-continue
          continue;
        }
  
        if (mediaQuery) {
          if (!item[2]) {
            item[2] = mediaQuery;
          } else {
            item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
          }
        }
  
        list.push(item);
      }
    };
  
    return list;
  };
  
  function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
  
    var cssMapping = item[3];
  
    if (!cssMapping) {
      return content;
    }
  
    if (useSourceMap && typeof btoa === 'function') {
      var sourceMapping = toComment(cssMapping);
      var sourceURLs = cssMapping.sources.map(function (source) {
        return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
      });
      return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
  
    return [content].join('\n');
  } // Adapted from convert-source-map (MIT)
  
  
  function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
  }
  
  /***/ }),
  
  /***/ "26c0":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * JSON parse.
   *
   * @see Based on jQuery#parseJSON (MIT) and JSON2
   * @api private
   */
  
  var rvalidchars = /^[\],:{}\s]*$/;
  var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
  var rtrimLeft = /^\s+/;
  var rtrimRight = /\s+$/;
  
  module.exports = function parsejson(data) {
    if ('string' != typeof data || !data) {
      return null;
    }
  
    data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
  
    // Attempt to parse using the native JSON parser first
    if (global.JSON && JSON.parse) {
      return JSON.parse(data);
    }
  
    if (rvalidchars.test(data.replace(rvalidescape, '@')
        .replace(rvalidtokens, ']')
        .replace(rvalidbraces, ''))) {
      return (new Function('return ' + data))();
    }
  };
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "2851":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Module dependencies.
   */
  
  var parser = __webpack_require__("530b");
  var Emitter = __webpack_require__("db1a");
  var toArray = __webpack_require__("9121");
  var on = __webpack_require__("d838");
  var bind = __webpack_require__("40de");
  var debug = __webpack_require__("49f7")('socket.io-client:socket');
  var hasBin = __webpack_require__("fa98");
  
  /**
   * Module exports.
   */
  
  module.exports = exports = Socket;
  
  /**
   * Internal events (blacklisted).
   * These events can't be emitted by the user.
   *
   * @api private
   */
  
  var events = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    connecting: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1,
    ping: 1,
    pong: 1
  };
  
  /**
   * Shortcut to `Emitter#emit`.
   */
  
  var emit = Emitter.prototype.emit;
  
  /**
   * `Socket` constructor.
   *
   * @api public
   */
  
  function Socket (io, nsp, opts) {
    this.io = io;
    this.nsp = nsp;
    this.json = this; // compat
    this.ids = 0;
    this.acks = {};
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.connected = false;
    this.disconnected = true;
    if (opts && opts.query) {
      this.query = opts.query;
    }
    if (this.io.autoConnect) this.open();
  }
  
  /**
   * Mix in `Emitter`.
   */
  
  Emitter(Socket.prototype);
  
  /**
   * Subscribe to open, close and packet events
   *
   * @api private
   */
  
  Socket.prototype.subEvents = function () {
    if (this.subs) return;
  
    var io = this.io;
    this.subs = [
      on(io, 'open', bind(this, 'onopen')),
      on(io, 'packet', bind(this, 'onpacket')),
      on(io, 'close', bind(this, 'onclose'))
    ];
  };
  
  /**
   * "Opens" the socket.
   *
   * @api public
   */
  
  Socket.prototype.open =
  Socket.prototype.connect = function () {
    if (this.connected) return this;
  
    this.subEvents();
    this.io.open(); // ensure open
    if ('open' === this.io.readyState) this.onopen();
    this.emit('connecting');
    return this;
  };
  
  /**
   * Sends a `message` event.
   *
   * @return {Socket} self
   * @api public
   */
  
  Socket.prototype.send = function () {
    var args = toArray(arguments);
    args.unshift('message');
    this.emit.apply(this, args);
    return this;
  };
  
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @param {String} event name
   * @return {Socket} self
   * @api public
   */
  
  Socket.prototype.emit = function (ev) {
    if (events.hasOwnProperty(ev)) {
      emit.apply(this, arguments);
      return this;
    }
  
    var args = toArray(arguments);
    var parserType = parser.EVENT; // default
    if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
    var packet = { type: parserType, data: args };
  
    packet.options = {};
    packet.options.compress = !this.flags || false !== this.flags.compress;
  
    // event ack callback
    if ('function' === typeof args[args.length - 1]) {
      debug('emitting packet with ack id %d', this.ids);
      this.acks[this.ids] = args.pop();
      packet.id = this.ids++;
    }
  
    if (this.connected) {
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
  
    delete this.flags;
  
    return this;
  };
  
  /**
   * Sends a packet.
   *
   * @param {Object} packet
   * @api private
   */
  
  Socket.prototype.packet = function (packet) {
    packet.nsp = this.nsp;
    this.io.packet(packet);
  };
  
  /**
   * Called upon engine `open`.
   *
   * @api private
   */
  
  Socket.prototype.onopen = function () {
    debug('transport is open - connecting');
  
    // write connect packet if necessary
    if ('/' !== this.nsp) {
      if (this.query) {
        this.packet({type: parser.CONNECT, query: this.query});
      } else {
        this.packet({type: parser.CONNECT});
      }
    }
  };
  
  /**
   * Called upon engine `close`.
   *
   * @param {String} reason
   * @api private
   */
  
  Socket.prototype.onclose = function (reason) {
    debug('close (%s)', reason);
    this.connected = false;
    this.disconnected = true;
    delete this.id;
    this.emit('disconnect', reason);
  };
  
  /**
   * Called with socket packet.
   *
   * @param {Object} packet
   * @api private
   */
  
  Socket.prototype.onpacket = function (packet) {
    if (packet.nsp !== this.nsp) return;
  
    switch (packet.type) {
      case parser.CONNECT:
        this.onconnect();
        break;
  
      case parser.EVENT:
        this.onevent(packet);
        break;
  
      case parser.BINARY_EVENT:
        this.onevent(packet);
        break;
  
      case parser.ACK:
        this.onack(packet);
        break;
  
      case parser.BINARY_ACK:
        this.onack(packet);
        break;
  
      case parser.DISCONNECT:
        this.ondisconnect();
        break;
  
      case parser.ERROR:
        this.emit('error', packet.data);
        break;
    }
  };
  
  /**
   * Called upon a server event.
   *
   * @param {Object} packet
   * @api private
   */
  
  Socket.prototype.onevent = function (packet) {
    var args = packet.data || [];
    debug('emitting event %j', args);
  
    if (null != packet.id) {
      debug('attaching ack callback to event');
      args.push(this.ack(packet.id));
    }
  
    if (this.connected) {
      emit.apply(this, args);
    } else {
      this.receiveBuffer.push(args);
    }
  };
  
  /**
   * Produces an ack callback to emit with an event.
   *
   * @api private
   */
  
  Socket.prototype.ack = function (id) {
    var self = this;
    var sent = false;
    return function () {
      // prevent double callbacks
      if (sent) return;
      sent = true;
      var args = toArray(arguments);
      debug('sending ack %j', args);
  
      var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
      self.packet({
        type: type,
        id: id,
        data: args
      });
    };
  };
  
  /**
   * Called upon a server acknowlegement.
   *
   * @param {Object} packet
   * @api private
   */
  
  Socket.prototype.onack = function (packet) {
    var ack = this.acks[packet.id];
    if ('function' === typeof ack) {
      debug('calling ack %s with %j', packet.id, packet.data);
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {
      debug('bad ack %s', packet.id);
    }
  };
  
  /**
   * Called upon server connect.
   *
   * @api private
   */
  
  Socket.prototype.onconnect = function () {
    this.connected = true;
    this.disconnected = false;
    this.emit('connect');
    this.emitBuffered();
  };
  
  /**
   * Emit buffered events (received and emitted).
   *
   * @api private
   */
  
  Socket.prototype.emitBuffered = function () {
    var i;
    for (i = 0; i < this.receiveBuffer.length; i++) {
      emit.apply(this, this.receiveBuffer[i]);
    }
    this.receiveBuffer = [];
  
    for (i = 0; i < this.sendBuffer.length; i++) {
      this.packet(this.sendBuffer[i]);
    }
    this.sendBuffer = [];
  };
  
  /**
   * Called upon server disconnect.
   *
   * @api private
   */
  
  Socket.prototype.ondisconnect = function () {
    debug('server disconnect (%s)', this.nsp);
    this.destroy();
    this.onclose('io server disconnect');
  };
  
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @api private.
   */
  
  Socket.prototype.destroy = function () {
    if (this.subs) {
      // clean subscriptions to avoid reconnections
      for (var i = 0; i < this.subs.length; i++) {
        this.subs[i].destroy();
      }
      this.subs = null;
    }
  
    this.io.destroy(this);
  };
  
  /**
   * Disconnects the socket manually.
   *
   * @return {Socket} self
   * @api public
   */
  
  Socket.prototype.close =
  Socket.prototype.disconnect = function () {
    if (this.connected) {
      debug('performing disconnect (%s)', this.nsp);
      this.packet({ type: parser.DISCONNECT });
    }
  
    // remove socket from pool
    this.destroy();
  
    if (this.connected) {
      // fire events
      this.onclose('io client disconnect');
    }
    return this;
  };
  
  /**
   * Sets the compress flag.
   *
   * @param {Boolean} if `true`, compresses the sending data
   * @return {Socket} self
   * @api public
   */
  
  Socket.prototype.compress = function (compress) {
    this.flags = this.flags || {};
    this.flags.compress = compress;
    return this;
  };
  
  
  /***/ }),
  
  /***/ "2d83":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var enhanceError = __webpack_require__("387f");
  
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
  
  
  /***/ }),
  
  /***/ "2e67":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };
  
  
  /***/ }),
  
  /***/ "30b5":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  function encode(val) {
    return encodeURIComponent(val).
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }
  
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
  
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
  
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
  
        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }
  
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
  
      serializedParams = parts.join('&');
    }
  
    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
  
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  
    return url;
  };
  
  
  /***/ }),
  
  /***/ "35d6":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);
  
  // EXPORTS
  __webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });
  
  // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
  /**
   * Translates the list format produced by css-loader into something
   * easier to manipulate.
   */
  function listToStyles (parentId, list) {
    var styles = []
    var newStyles = {}
    for (var i = 0; i < list.length; i++) {
      var item = list[i]
      var id = item[0]
      var css = item[1]
      var media = item[2]
      var sourceMap = item[3]
      var part = {
        id: parentId + ':' + i,
        css: css,
        media: media,
        sourceMap: sourceMap
      }
      if (!newStyles[id]) {
        styles.push(newStyles[id] = { id: id, parts: [part] })
      } else {
        newStyles[id].parts.push(part)
      }
    }
    return styles
  }
  
  // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
  
  
  function addStylesToShadowDOM (parentId, list, shadowRoot) {
    var styles = listToStyles(parentId, list)
    addStyles(styles, shadowRoot)
  }
  
  /*
  type StyleObject = {
    id: number;
    parts: Array<StyleObjectPart>
  }
  
  type StyleObjectPart = {
    css: string;
    media: string;
    sourceMap: ?string
  }
  */
  
  function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
    const injectedStyles =
      shadowRoot._injectedStyles ||
      (shadowRoot._injectedStyles = {})
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var style = injectedStyles[item.id]
      if (!style) {
        for (var j = 0; j < item.parts.length; j++) {
          addStyle(item.parts[j], shadowRoot)
        }
        injectedStyles[item.id] = true
      }
    }
  }
  
  function createStyleElement (shadowRoot) {
    var styleElement = document.createElement('style')
    styleElement.type = 'text/css'
    shadowRoot.appendChild(styleElement)
    return styleElement
  }
  
  function addStyle (obj /* StyleObjectPart */, shadowRoot) {
    var styleElement = createStyleElement(shadowRoot)
    var css = obj.css
    var media = obj.media
    var sourceMap = obj.sourceMap
  
    if (media) {
      styleElement.setAttribute('media', media)
    }
  
    if (sourceMap) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
      // http://stackoverflow.com/a/26603875
      css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
    }
  
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css
    } else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild)
      }
      styleElement.appendChild(document.createTextNode(css))
    }
  }
  
  
  /***/ }),
  
  /***/ "363a":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/
  
  /**
   * Module requirements
   */
  
  var isArray = __webpack_require__("96e4");
  var isBuf = __webpack_require__("a869");
  
  /**
   * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
   * Anything with blobs or files should be fed through removeBlobs before coming
   * here.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @api public
   */
  
  exports.deconstructPacket = function(packet){
    var buffers = [];
    var packetData = packet.data;
  
    function _deconstructPacket(data) {
      if (!data) return data;
  
      if (isBuf(data)) {
        var placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
      } else if (isArray(data)) {
        var newData = new Array(data.length);
        for (var i = 0; i < data.length; i++) {
          newData[i] = _deconstructPacket(data[i]);
        }
        return newData;
      } else if ('object' == typeof data && !(data instanceof Date)) {
        var newData = {};
        for (var key in data) {
          newData[key] = _deconstructPacket(data[key]);
        }
        return newData;
      }
      return data;
    }
  
    var pack = packet;
    pack.data = _deconstructPacket(packetData);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {packet: pack, buffers: buffers};
  };
  
  /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @api public
   */
  
  exports.reconstructPacket = function(packet, buffers) {
    var curPlaceHolder = 0;
  
    function _reconstructPacket(data) {
      if (data && data._placeholder) {
        var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
        return buf;
      } else if (isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          data[i] = _reconstructPacket(data[i]);
        }
        return data;
      } else if (data && 'object' == typeof data) {
        for (var key in data) {
          data[key] = _reconstructPacket(data[key]);
        }
        return data;
      }
      return data;
    }
  
    packet.data = _reconstructPacket(packet.data);
    packet.attachments = undefined; // no longer useful
    return packet;
  };
  
  /**
   * Asynchronously removes Blobs or Files from data via
   * FileReader's readAsArrayBuffer method. Used before encoding
   * data as msgpack. Calls callback with the blobless data.
   *
   * @param {Object} data
   * @param {Function} callback
   * @api private
   */
  
  exports.removeBlobs = function(data, callback) {
    function _removeBlobs(obj, curKey, containingObject) {
      if (!obj) return obj;
  
      // convert any blob
      if ((global.Blob && obj instanceof Blob) ||
          (global.File && obj instanceof File)) {
        pendingBlobs++;
  
        // async filereader
        var fileReader = new FileReader();
        fileReader.onload = function() { // this.result == arraybuffer
          if (containingObject) {
            containingObject[curKey] = this.result;
          }
          else {
            bloblessData = this.result;
          }
  
          // if nothing pending its callback time
          if(! --pendingBlobs) {
            callback(bloblessData);
          }
        };
  
        fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
      } else if (isArray(obj)) { // handle array
        for (var i = 0; i < obj.length; i++) {
          _removeBlobs(obj[i], i, obj);
        }
      } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
        for (var key in obj) {
          _removeBlobs(obj[key], key, obj);
        }
      }
    }
  
    var pendingBlobs = 0;
    var bloblessData = data;
    _removeBlobs(bloblessData);
    if (!pendingBlobs) {
      callback(bloblessData);
    }
  };
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "387f":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
  
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
  
    error.toJSON = function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };
    return error;
  };
  
  
  /***/ }),
  
  /***/ "3934":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
  
        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
          var href = url;
  
          if (msie) {
          // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }
  
          urlParsingNode.setAttribute('href', href);
  
          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
          };
        }
  
        originURL = resolveURL(window.location.href);
  
        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
          var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :
  
    // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
  );
  
  
  /***/ }),
  
  /***/ "3c09":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  
  exports = module.exports = debug.debug = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = __webpack_require__("5a21");
  
  /**
   * The currently active debug mode names, and names to skip.
   */
  
  exports.names = [];
  exports.skips = [];
  
  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lowercased letter, i.e. "n".
   */
  
  exports.formatters = {};
  
  /**
   * Previously assigned color.
   */
  
  var prevColor = 0;
  
  /**
   * Previous log timestamp.
   */
  
  var prevTime;
  
  /**
   * Select a color.
   *
   * @return {Number}
   * @api private
   */
  
  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }
  
  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */
  
  function debug(namespace) {
  
    // define the `disabled` version
    function disabled() {
    }
    disabled.enabled = false;
  
    // define the `enabled` version
    function enabled() {
  
      var self = enabled;
  
      // set `diff` timestamp
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
  
      // add the `color` if not set
      if (null == self.useColors) self.useColors = exports.useColors();
      if (null == self.color && self.useColors) self.color = selectColor();
  
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
  
      args[0] = exports.coerce(args[0]);
  
      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %o
        args = ['%o'].concat(args);
      }
  
      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
  
          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });
  
      // apply env-specific formatting
      args = exports.formatArgs.apply(self, args);
  
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;
  
    var fn = exports.enabled(namespace) ? enabled : disabled;
  
    fn.namespace = namespace;
  
    return fn;
  }
  
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */
  
  function enable(namespaces) {
    exports.save(namespaces);
  
    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;
  
    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  
  /**
   * Disable debug output.
   *
   * @api public
   */
  
  function disable() {
    exports.enable('');
  }
  
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */
  
  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */
  
  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
  
  
  /***/ }),
  
  /***/ "3c35":
  /***/ (function(module, exports) {
  
  /* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
  module.exports = __webpack_amd_options__;
  
  /* WEBPACK VAR INJECTION */}.call(this, {}))
  
  /***/ }),
  
  /***/ "4088":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  
  exports = module.exports = __webpack_require__("ec72");
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome
                 && 'undefined' != typeof chrome.storage
                    ? chrome.storage.local
                    : localstorage();
  
  /**
   * Colors.
   */
  
  exports.colors = [
    'lightseagreen',
    'forestgreen',
    'goldenrod',
    'dodgerblue',
    'darkorchid',
    'crimson'
  ];
  
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  
  function useColors() {
    // is webkit? http://stackoverflow.com/a/16459606/376773
    return ('WebkitAppearance' in document.documentElement.style) ||
      // is firebug? http://stackoverflow.com/a/398120/376773
      (window.console && (console.firebug || (console.exception && console.table))) ||
      // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }
  
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */
  
  exports.formatters.j = function(v) {
    return JSON.stringify(v);
  };
  
  
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */
  
  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;
  
    args[0] = (useColors ? '%c' : '')
      + this.namespace
      + (useColors ? ' %c' : ' ')
      + args[0]
      + (useColors ? '%c ' : ' ')
      + '+' + exports.humanize(this.diff);
  
    if (!useColors) return args;
  
    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
  
    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
  
    args.splice(lastC, 0, c);
    return args;
  }
  
  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */
  
  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
  
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */
  
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch(e) {}
  }
  
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */
  
  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch(e) {}
    return r;
  }
  
  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */
  
  exports.enable(load());
  
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */
  
  function localstorage(){
    try {
      return window.localStorage;
    } catch (e) {}
  }
  
  
  /***/ }),
  
  /***/ "40de":
  /***/ (function(module, exports) {
  
  /**
   * Slice reference.
   */
  
  var slice = [].slice;
  
  /**
   * Bind `obj` to `fn`.
   *
   * @param {Object} obj
   * @param {Function|String} fn or string
   * @return {Function}
   * @api public
   */
  
  module.exports = function(obj, fn){
    if ('string' == typeof fn) fn = obj[fn];
    if ('function' != typeof fn) throw new Error('bind() requires a function');
    var args = slice.call(arguments, 2);
    return function(){
      return fn.apply(obj, args.concat(slice.call(arguments)));
    }
  };
  
  
  /***/ }),
  
  /***/ "4297":
  /***/ (function(module, exports, __webpack_require__) {
  
  // Imports
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
  exports = ___CSS_LOADER_API_IMPORT___(false);
  // Module
  exports.push([module.i, ".modal-backdrop{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:flex;justify-content:center;align-items:center;z-index:9}.modal{z-index:10}#swatch,.modal{background:#fff;display:flex;flex-direction:column}#swatch{box-shadow:1em 1em 1em rgba(0,0,0,.1)}#swatch .info{padding:.2em}#swatch h1{margin:0;text-transform:uppercase}#swatch h2{font-weight:400;margin:0}input[type=color]{appearance:none;-moz-appearance:none;-webkit-appearance:none;background:none;border:0;cursor:pointer;height:2em;padding:0;width:2em;border:2px solid #c5c5c5;border-radius:4px}:focus{border-radius:0;outline:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-color-swatch{border:0;border-radius:0}::-moz-color-swatch,::-moz-focus-inner{border:0}::-moz-focus-inner{padding:0}.btn{width:100%;height:100%}.btn:hover{background-color:hsla(0,0%,48.6%,.2);border-radius:50%}input[type=file]{position:absolute;opacity:0;z-index:-1}.helper{height:100%;display:inline-block;vertical-align:middle;width:0}.hidden{display:none!important;text-align:center}.hidden.image{display:inline-block!important}.display-inline{display:flex;align-items:center;justify-content:center}.drop{background-color:#f2f2f2;border:4px dashed #ccc;background-color:#f6f6f6;border-radius:2px;height:80px;width:80px;border-radius:50%}", ""]);
  // Exports
  module.exports = exports;
  
  
  /***/ }),
  
  /***/ "4362":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports.nextTick = function nextTick(fn) {
      var args = Array.prototype.slice.call(arguments);
      args.shift();
      setTimeout(function () {
          fn.apply(null, args);
      }, 0);
  };
  
  exports.platform = exports.arch = 
  exports.execPath = exports.title = 'browser';
  exports.pid = 1;
  exports.browser = true;
  exports.env = {};
  exports.argv = [];
  
  exports.binding = function (name) {
    throw new Error('No such module. (Possibly not yet loaded)')
  };
  
  (function () {
      var cwd = '/';
      var path;
      exports.cwd = function () { return cwd };
      exports.chdir = function (dir) {
          if (!path) path = __webpack_require__("df7c");
          cwd = path.resolve(dir, cwd);
      };
  })();
  
  exports.exit = exports.kill = 
  exports.umask = exports.dlopen = 
  exports.uptime = exports.memoryUsage = 
  exports.uvCounters = function() {};
  exports.features = {};
  
  
  /***/ }),
  
  /***/ "467f":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var createError = __webpack_require__("2d83");
  
  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };
  
  
  /***/ }),
  
  /***/ "49f7":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(process) {
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  
  exports = module.exports = __webpack_require__("f552");
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome
                 && 'undefined' != typeof chrome.storage
                    ? chrome.storage.local
                    : localstorage();
  
  /**
   * Colors.
   */
  
  exports.colors = [
    'lightseagreen',
    'forestgreen',
    'goldenrod',
    'dodgerblue',
    'darkorchid',
    'crimson'
  ];
  
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  
  function useColors() {
    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return (typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style) ||
      // is firebug? http://stackoverflow.com/a/398120/376773
      (window.console && (console.firebug || (console.exception && console.table))) ||
      // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }
  
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */
  
  exports.formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };
  
  
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */
  
  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;
  
    args[0] = (useColors ? '%c' : '')
      + this.namespace
      + (useColors ? ' %c' : ' ')
      + args[0]
      + (useColors ? '%c ' : ' ')
      + '+' + exports.humanize(this.diff);
  
    if (!useColors) return args;
  
    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
  
    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
  
    args.splice(lastC, 0, c);
    return args;
  }
  
  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */
  
  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
  
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */
  
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch(e) {}
  }
  
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */
  
  function load() {
    var r;
    try {
      return exports.storage.debug;
    } catch(e) {}
  
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (typeof process !== 'undefined' && 'env' in process) {
      return Object({"NODE_ENV":"production","BASE_URL":"/"}).DEBUG;
    }
  }
  
  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */
  
  exports.enable(load());
  
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */
  
  function localstorage(){
    try {
      return window.localStorage;
    } catch (e) {}
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))
  
  /***/ }),
  
  /***/ "4a7b":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
  
    var valueFromConfig2Keys = ['url', 'method', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
    var defaultToConfig2Keys = [
      'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
      'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
      'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
      'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
      'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
    ];
    var directMergeKeys = ['validateStatus'];
  
    function getMergedValue(target, source) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge(target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }
  
    function mergeDeepProperties(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    }
  
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      }
    });
  
    utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });
  
    utils.forEach(directMergeKeys, function merge(prop) {
      if (prop in config2) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });
  
    var axiosKeys = valueFromConfig2Keys
      .concat(mergeDeepPropertiesKeys)
      .concat(defaultToConfig2Keys)
      .concat(directMergeKeys);
  
    var otherKeys = Object
      .keys(config1)
      .concat(Object.keys(config2))
      .filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
  
    utils.forEach(otherKeys, mergeDeepProperties);
  
    return config;
  };
  
  
  /***/ }),
  
  /***/ "4e7a":
  /***/ (function(module, exports) {
  
  
  /**
   * Gets the keys for an object.
   *
   * @return {Array} keys
   * @api private
   */
  
  module.exports = Object.keys || function keys (obj){
    var arr = [];
    var has = Object.prototype.hasOwnProperty;
  
    for (var i in obj) {
      if (has.call(obj, i)) {
        arr.push(i);
      }
    }
    return arr;
  };
  
  
  /***/ }),
  
  /***/ "4f2a":
  /***/ (function(module, exports) {
  
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  
  exports.encode = function (obj) {
    var str = '';
  
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }
  
    return str;
  };
  
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */
  
  exports.decode = function(qs){
    var qry = {};
    var pairs = qs.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  };
  
  
  /***/ }),
  
  /***/ "5270":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  var transformData = __webpack_require__("c401");
  var isCancel = __webpack_require__("2e67");
  var defaults = __webpack_require__("2444");
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
  
    // Ensure headers exist
    config.headers = config.headers || {};
  
    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );
  
    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );
  
    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
  
    var adapter = config.adapter || defaults.adapter;
  
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
  
      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );
  
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
  
        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
  
      return Promise.reject(reason);
    });
  };
  
  
  /***/ }),
  
  /***/ "530b":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Module dependencies.
   */
  
  var debug = __webpack_require__("4088")('socket.io-parser');
  var json = __webpack_require__("7c29");
  var Emitter = __webpack_require__("da56");
  var binary = __webpack_require__("363a");
  var isBuf = __webpack_require__("a869");
  
  /**
   * Protocol version.
   *
   * @api public
   */
  
  exports.protocol = 4;
  
  /**
   * Packet types.
   *
   * @api public
   */
  
  exports.types = [
    'CONNECT',
    'DISCONNECT',
    'EVENT',
    'ACK',
    'ERROR',
    'BINARY_EVENT',
    'BINARY_ACK'
  ];
  
  /**
   * Packet type `connect`.
   *
   * @api public
   */
  
  exports.CONNECT = 0;
  
  /**
   * Packet type `disconnect`.
   *
   * @api public
   */
  
  exports.DISCONNECT = 1;
  
  /**
   * Packet type `event`.
   *
   * @api public
   */
  
  exports.EVENT = 2;
  
  /**
   * Packet type `ack`.
   *
   * @api public
   */
  
  exports.ACK = 3;
  
  /**
   * Packet type `error`.
   *
   * @api public
   */
  
  exports.ERROR = 4;
  
  /**
   * Packet type 'binary event'
   *
   * @api public
   */
  
  exports.BINARY_EVENT = 5;
  
  /**
   * Packet type `binary ack`. For acks with binary arguments.
   *
   * @api public
   */
  
  exports.BINARY_ACK = 6;
  
  /**
   * Encoder constructor.
   *
   * @api public
   */
  
  exports.Encoder = Encoder;
  
  /**
   * Decoder constructor.
   *
   * @api public
   */
  
  exports.Decoder = Decoder;
  
  /**
   * A socket.io Encoder instance
   *
   * @api public
   */
  
  function Encoder() {}
  
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   * @param {Function} callback - function to handle encodings (likely engine.write)
   * @return Calls callback with Array of encodings
   * @api public
   */
  
  Encoder.prototype.encode = function(obj, callback){
    debug('encoding packet %j', obj);
  
    if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
      encodeAsBinary(obj, callback);
    }
    else {
      var encoding = encodeAsString(obj);
      callback([encoding]);
    }
  };
  
  /**
   * Encode packet as string.
   *
   * @param {Object} packet
   * @return {String} encoded
   * @api private
   */
  
  function encodeAsString(obj) {
    var str = '';
    var nsp = false;
  
    // first is type
    str += obj.type;
  
    // attachments if we have them
    if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
      str += obj.attachments;
      str += '-';
    }
  
    // if we have a namespace other than `/`
    // we append it followed by a comma `,`
    if (obj.nsp && '/' != obj.nsp) {
      nsp = true;
      str += obj.nsp;
    }
  
    // immediately followed by the id
    if (null != obj.id) {
      if (nsp) {
        str += ',';
        nsp = false;
      }
      str += obj.id;
    }
  
    // json data
    if (null != obj.data) {
      if (nsp) str += ',';
      str += json.stringify(obj.data);
    }
  
    debug('encoded %j as %s', obj, str);
    return str;
  }
  
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   *
   * @param {Object} packet
   * @return {Buffer} encoded
   * @api private
   */
  
  function encodeAsBinary(obj, callback) {
  
    function writeEncoding(bloblessData) {
      var deconstruction = binary.deconstructPacket(bloblessData);
      var pack = encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
  
      buffers.unshift(pack); // add packet info to beginning of data list
      callback(buffers); // write all the buffers
    }
  
    binary.removeBlobs(obj, writeEncoding);
  }
  
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   * @api public
   */
  
  function Decoder() {
    this.reconstructor = null;
  }
  
  /**
   * Mix in `Emitter` with Decoder.
   */
  
  Emitter(Decoder.prototype);
  
  /**
   * Decodes an ecoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   * @return {Object} packet
   * @api public
   */
  
  Decoder.prototype.add = function(obj) {
    var packet;
    if ('string' == typeof obj) {
      packet = decodeString(obj);
      if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
        this.reconstructor = new BinaryReconstructor(packet);
  
        // no attachments, labeled binary but no binary data to follow
        if (this.reconstructor.reconPack.attachments === 0) {
          this.emit('decoded', packet);
        }
      } else { // non-binary full packet
        this.emit('decoded', packet);
      }
    }
    else if (isBuf(obj) || obj.base64) { // raw binary data
      if (!this.reconstructor) {
        throw new Error('got binary data when not reconstructing a packet');
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) { // received final buffer
          this.reconstructor = null;
          this.emit('decoded', packet);
        }
      }
    }
    else {
      throw new Error('Unknown type: ' + obj);
    }
  };
  
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   * @api private
   */
  
  function decodeString(str) {
    var p = {};
    var i = 0;
  
    // look up type
    p.type = Number(str.charAt(0));
    if (null == exports.types[p.type]) return error();
  
    // look up attachments if type binary
    if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
      var buf = '';
      while (str.charAt(++i) != '-') {
        buf += str.charAt(i);
        if (i == str.length) break;
      }
      if (buf != Number(buf) || str.charAt(i) != '-') {
        throw new Error('Illegal attachments');
      }
      p.attachments = Number(buf);
    }
  
    // look up namespace (if any)
    if ('/' == str.charAt(i + 1)) {
      p.nsp = '';
      while (++i) {
        var c = str.charAt(i);
        if (',' == c) break;
        p.nsp += c;
        if (i == str.length) break;
      }
    } else {
      p.nsp = '/';
    }
  
    // look up id
    var next = str.charAt(i + 1);
    if ('' !== next && Number(next) == next) {
      p.id = '';
      while (++i) {
        var c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        p.id += str.charAt(i);
        if (i == str.length) break;
      }
      p.id = Number(p.id);
    }
  
    // look up json data
    if (str.charAt(++i)) {
      p = tryParse(p, str.substr(i));
    }
  
    debug('decoded %s as %j', str, p);
    return p;
  }
  
  function tryParse(p, str) {
    try {
      p.data = json.parse(str);
    } catch(e){
      return error();
    }
    return p; 
  };
  
  /**
   * Deallocates a parser's resources
   *
   * @api public
   */
  
  Decoder.prototype.destroy = function() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  };
  
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   * @api private
   */
  
  function BinaryReconstructor(packet) {
    this.reconPack = packet;
    this.buffers = [];
  }
  
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   * @api private
   */
  
  BinaryReconstructor.prototype.takeBinaryData = function(binData) {
    this.buffers.push(binData);
    if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
      var packet = binary.reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  };
  
  /**
   * Cleans up binary packet reconstruction variables.
   *
   * @api private
   */
  
  BinaryReconstructor.prototype.finishedReconstruction = function() {
    this.reconPack = null;
    this.buffers = [];
  };
  
  function error(data){
    return {
      type: exports.ERROR,
      data: 'parser error'
    };
  }
  
  
  /***/ }),
  
  /***/ "5317":
  /***/ (function(module, exports) {
  
  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  
  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  
  var parts = [
      'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
  ];
  
  module.exports = function parseuri(str) {
      var src = str,
          b = str.indexOf('['),
          e = str.indexOf(']');
  
      if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
      }
  
      var m = re.exec(str || ''),
          uri = {},
          i = 14;
  
      while (i--) {
          uri[parts[i]] = m[i] || '';
      }
  
      if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
      }
  
      return uri;
  };
  
  
  /***/ }),
  
  /***/ "547d":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb51");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
  
  
  /***/ }),
  
  /***/ "5a0c":
  /***/ (function(module, exports, __webpack_require__) {
  
  !function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
  
  /***/ }),
  
  /***/ "5a21":
  /***/ (function(module, exports) {
  
  /**
   * Helpers.
   */
  
  var s = 1000
  var m = s * 60
  var h = m * 60
  var d = h * 24
  var y = d * 365.25
  
  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} options
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */
  
  module.exports = function (val, options) {
    options = options || {}
    var type = typeof val
    if (type === 'string' && val.length > 0) {
      return parse(val)
    } else if (type === 'number' && isNaN(val) === false) {
      return options.long ?
        fmtLong(val) :
        fmtShort(val)
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
  }
  
  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */
  
  function parse(str) {
    str = String(str)
    if (str.length > 10000) {
      return
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
    if (!match) {
      return
    }
    var n = parseFloat(match[1])
    var type = (match[2] || 'ms').toLowerCase()
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y
      case 'days':
      case 'day':
      case 'd':
        return n * d
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n
      default:
        return undefined
    }
  }
  
  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */
  
  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + 'd'
    }
    if (ms >= h) {
      return Math.round(ms / h) + 'h'
    }
    if (ms >= m) {
      return Math.round(ms / m) + 'm'
    }
    if (ms >= s) {
      return Math.round(ms / s) + 's'
    }
    return ms + 'ms'
  }
  
  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */
  
  function fmtLong(ms) {
    return plural(ms, d, 'day') ||
      plural(ms, h, 'hour') ||
      plural(ms, m, 'minute') ||
      plural(ms, s, 'second') ||
      ms + ' ms'
  }
  
  /**
   * Pluralization helper.
   */
  
  function plural(ms, n, name) {
    if (ms < n) {
      return
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + ' ' + name
    }
    return Math.ceil(ms / n) + ' ' + name + 's'
  }
  
  
  /***/ }),
  
  /***/ "5a74":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);
  
  // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
  // This file is imported into lib/wc client bundles.
  
  if (typeof window !== 'undefined') {
    var currentScript = window.document.currentScript
    if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
      var getCurrentScript = __webpack_require__("8875")
      currentScript = getCurrentScript()
  
      // for backward compatibility, because previously we directly included the polyfill
      if (!('currentScript' in document)) {
        Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
      }
    }
  
    var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
    if (src) {
      __webpack_require__.p = src[1] // eslint-disable-line
    }
  }
  
  // Indicate to webpack that this file can be concatenated
  /* harmony default export */ var setPublicPath = (null);
  
  // EXTERNAL MODULE: external "Vue"
  var external_Vue_ = __webpack_require__("8bbf");
  var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);
  
  // CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
  const camelizeRE = /-(\w)/g;
  const camelize = str => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
  };
  
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = str => {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  };
  
  function getInitialProps (propsList) {
    const res = {};
    propsList.forEach(key => {
      res[key] = undefined;
    });
    return res
  }
  
  function injectHook (options, key, hook) {
    options[key] = [].concat(options[key] || []);
    options[key].unshift(hook);
  }
  
  function callHooks (vm, hook) {
    if (vm) {
      const hooks = vm.$options[hook] || [];
      hooks.forEach(hook => {
        hook.call(vm);
      });
    }
  }
  
  function createCustomEvent (name, args) {
    return new CustomEvent(name, {
      bubbles: false,
      cancelable: false,
      detail: args
    })
  }
  
  const isBoolean = val => /function Boolean/.test(String(val));
  const isNumber = val => /function Number/.test(String(val));
  
  function convertAttributeValue (value, name, { type } = {}) {
    if (isBoolean(type)) {
      if (value === 'true' || value === 'false') {
        return value === 'true'
      }
      if (value === '' || value === name || value != null) {
        return true
      }
      return value
    } else if (isNumber(type)) {
      const parsed = parseFloat(value, 10);
      return isNaN(parsed) ? value : parsed
    } else {
      return value
    }
  }
  
  function toVNodes (h, children) {
    const res = [];
    for (let i = 0, l = children.length; i < l; i++) {
      res.push(toVNode(h, children[i]));
    }
    return res
  }
  
  function toVNode (h, node) {
    if (node.nodeType === 3) {
      return node.data.trim() ? node.data : null
    } else if (node.nodeType === 1) {
      const data = {
        attrs: getAttributes(node),
        domProps: {
          innerHTML: node.innerHTML
        }
      };
      if (data.attrs.slot) {
        data.slot = data.attrs.slot;
        delete data.attrs.slot;
      }
      return h(node.tagName, data)
    } else {
      return null
    }
  }
  
  function getAttributes (node) {
    const res = {};
    for (let i = 0, l = node.attributes.length; i < l; i++) {
      const attr = node.attributes[i];
      res[attr.nodeName] = attr.nodeValue;
    }
    return res
  }
  
  function wrap (Vue, Component) {
    const isAsync = typeof Component === 'function' && !Component.cid;
    let isInitialized = false;
    let hyphenatedPropsList;
    let camelizedPropsList;
    let camelizedPropsMap;
  
    function initialize (Component) {
      if (isInitialized) return
  
      const options = typeof Component === 'function'
        ? Component.options
        : Component;
  
      // extract props info
      const propsList = Array.isArray(options.props)
        ? options.props
        : Object.keys(options.props || {});
      hyphenatedPropsList = propsList.map(hyphenate);
      camelizedPropsList = propsList.map(camelize);
      const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
      camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
        map[key] = originalPropsAsObject[propsList[i]];
        return map
      }, {});
  
      // proxy $emit to native DOM events
      injectHook(options, 'beforeCreate', function () {
        const emit = this.$emit;
        this.$emit = (name, ...args) => {
          this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
          return emit.call(this, name, ...args)
        };
      });
  
      injectHook(options, 'created', function () {
        // sync default props values to wrapper on created
        camelizedPropsList.forEach(key => {
          this.$root.props[key] = this[key];
        });
      });
  
      // proxy props as Element properties
      camelizedPropsList.forEach(key => {
        Object.defineProperty(CustomElement.prototype, key, {
          get () {
            return this._wrapper.props[key]
          },
          set (newVal) {
            this._wrapper.props[key] = newVal;
          },
          enumerable: false,
          configurable: true
        });
      });
  
      isInitialized = true;
    }
  
    function syncAttribute (el, key) {
      const camelized = camelize(key);
      const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
      el._wrapper.props[camelized] = convertAttributeValue(
        value,
        key,
        camelizedPropsMap[camelized]
      );
    }
  
    class CustomElement extends HTMLElement {
      constructor () {
        const self = super();
        self.attachShadow({ mode: 'open' });
  
        const wrapper = self._wrapper = new Vue({
          name: 'shadow-root',
          customElement: self,
          shadowRoot: self.shadowRoot,
          data () {
            return {
              props: {},
              slotChildren: []
            }
          },
          render (h) {
            return h(Component, {
              ref: 'inner',
              props: this.props
            }, this.slotChildren)
          }
        });
  
        // Use MutationObserver to react to future attribute & slot content change
        const observer = new MutationObserver(mutations => {
          let hasChildrenChange = false;
          for (let i = 0; i < mutations.length; i++) {
            const m = mutations[i];
            if (isInitialized && m.type === 'attributes' && m.target === self) {
              syncAttribute(self, m.attributeName);
            } else {
              hasChildrenChange = true;
            }
          }
          if (hasChildrenChange) {
            wrapper.slotChildren = Object.freeze(toVNodes(
              wrapper.$createElement,
              self.childNodes
            ));
          }
        });
        observer.observe(self, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        });
      }
  
      get vueComponent () {
        return this._wrapper.$refs.inner
      }
  
      connectedCallback () {
        const wrapper = this._wrapper;
        if (!wrapper._isMounted) {
          // initialize attributes
          const syncInitialAttributes = () => {
            wrapper.props = getInitialProps(camelizedPropsList);
            hyphenatedPropsList.forEach(key => {
              syncAttribute(this, key);
            });
          };
  
          if (isInitialized) {
            syncInitialAttributes();
          } else {
            // async & unresolved
            Component().then(resolved => {
              if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
                resolved = resolved.default;
              }
              initialize(resolved);
              syncInitialAttributes();
            });
          }
          // initialize children
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
          wrapper.$mount();
          this.shadowRoot.appendChild(wrapper.$el);
        } else {
          callHooks(this.vueComponent, 'activated');
        }
      }
  
      disconnectedCallback () {
        callHooks(this.vueComponent, 'deactivated');
      }
    }
  
    if (!isAsync) {
      initialize(Component);
    }
  
    return CustomElement
  }
  
  /* harmony default export */ var vue_wc_wrapper = (wrap);
  
  // EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
  var api = __webpack_require__("24fb");
  
  // EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
  var addStylesShadow = __webpack_require__("35d6");
  
  // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
    shadowMode /* vue-cli only */
  ) {
    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function'
      ? scriptExports.options
      : scriptExports
  
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
        ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
        : injectStyles
    }
  
    if (hook) {
      if (options.functional) {
        // for template-only hot-reload because in that case the render fn doesn't
        // go through the normalizer
        options._injectStyles = hook
        // register for functional component in vue file
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
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=597c062c&shadow
  var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('link',{attrs:{"rel":"stylesheet","href":"https://use.fontawesome.com/releases/v5.2.0/css/all.css","integrity":"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ","crossorigin":"anonymous"}}),(_vm.config && _vm.config.active)?_c('inetchat',{attrs:{"config":_vm.config},on:{"configChange":_vm.getConfig}}):_vm._e()],1)}
  var staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=597c062c&shadow
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inetchat.vue?vue&type=template&id=3e244860&
  var Inetchatvue_type_template_id_3e244860_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic ic-flex"},[_c('div',[_c('inetchat-users',{attrs:{"config":_vm.config},on:{"userSelected":_vm.select,"configChange":function($event){return _vm.$emit('configChange')}}})],1),_c('div',[_c('inetchat-card',{attrs:{"config":_vm.config,"user":_vm.selectedUser}})],1)])}
  var Inetchatvue_type_template_id_3e244860_staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/components/Inetchat.vue?vue&type=template&id=3e244860&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatCard.vue?vue&type=template&id=dee8f802&
  var InetchatCardvue_type_template_id_dee8f802_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"ic-card"},[_c('div',{staticClass:"ic-card-title",class:{'ic-bg-error': _vm.user && _vm.config.pack.banning && _vm.user.banned}},[_c('div',{staticClass:"ic-w20"},[_c('img',{staticClass:"ic-avatar",attrs:{"src":'http://localhost:3001/' + _vm.config.avatar,"alt":"Avatar"}})]),_c('div',{staticClass:"ic-w60"},[(_vm.user && _vm.user.banned && _vm.config.pack.banning)?_c('span',{staticClass:"ic-f14"},[_c('i',{staticClass:"fas fa-ban"})]):_vm._e(),_vm._v(" "+_vm._s(_vm.user ? _vm.user.name : _vm.config.name)+" "),(_vm.user)?_c('div',{staticClass:"ic-f14"},[_vm._v(" "+_vm._s(_vm.user.email)+" ")]):_vm._e()]),_vm._m(0)]),_c('div',{staticClass:"ic-card-text ic-p2 scroll scroll-chat"},[(_vm.image)?_c('div',{staticClass:"ic-show-image",class:{ image: true }},[_c('img',{staticClass:"ic-img ic-m1",attrs:{"src":_vm.image,"alt":""}})]):_vm._e(),(_vm.isTyping)?_c('div',{staticClass:"ic-message-r"},[_c('div',{staticClass:"ic-message-r-title"},[_c('i',{staticClass:"fas fa-square ic-message-r-title-icon"}),_vm._v(" "+_vm._s(_vm.messages[0].user.name)+" ")]),_vm._m(1)]):_vm._e(),(_vm.loading)?_c('div',{staticClass:"lds-ring "},[_c('div'),_c('div'),_c('div'),_c('div')]):_vm._l((_vm.messages),function(message){return _c('inetchat-message',{key:message._id,attrs:{"message":message}})})],2),_c('div',{staticClass:"ic-card-actions"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],staticClass:"input ic-w80 ic-m1 scroll",staticStyle:{"resize":"none"},attrs:{"id":"textarea"},domProps:{"value":(_vm.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}}),(_vm.config.pack.messaging != 'NF')?_c('div',{staticClass:"ic-w10 ic-flex ic-align-center ic-justify-center"},[(!_vm.image)?_c('label',{staticClass:"btn display-inline"},[_c('i',{staticClass:"ic-file fa fa-paperclip ic-f20"}),_c('input',{attrs:{"type":"file","name":"image"},on:{"change":_vm.onChange}})]):_c('div',{on:{"click":_vm.removeFile}},[_c('i',{staticClass:"fa fa-times ic-file ic-f20"})])]):_vm._e(),_c('button',{staticClass:"ic-button ic-w20 ic-m1",attrs:{"disabled":!_vm.message || !_vm.user},on:{"click":_vm.sendMessage}},[_c('i',{staticClass:"fa fa-paper-plane"})])])])])}
  var InetchatCardvue_type_template_id_dee8f802_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-w20"},[_c('img',{attrs:{"height":"40","src":__webpack_require__("b01b")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-message-r-text"},[_c('div',{staticClass:"lds-ellipsis"},[_c('div'),_c('div'),_c('div'),_c('div')])])}]
  
  
  // CONCATENATED MODULE: ./src/components/InetchatCard.vue?vue&type=template&id=dee8f802&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatMessage.vue?vue&type=template&id=0a9beda2&
  var InetchatMessagevue_type_template_id_0a9beda2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.message.type == 's')?_c('div',{staticClass:"ic-message-r"},[_c('div',{staticClass:"ic-message-r-title"},[_c('i',{staticClass:"fas fa-square ic-message-r-title-icon"}),_vm._v(" "+_vm._s(_vm.message.user.name)+" ")]),_c('div',{staticClass:"ic-message-r-text"},[(_vm.message.file)?_c('div',{class:{ image: true }},[_c('a',{attrs:{"href":'http://localhost:3000/' + _vm.message.file,"target":"_blank"}},[_c('img',{staticClass:"ic-img",attrs:{"src":'http://localhost:3000/' + _vm.message.file,"alt":""}})])]):_vm._e(),_vm._v(" "+_vm._s(_vm.message.message)+" ")]),_c('div',{staticClass:"ic-message-r-date"},[_vm._v(" "+_vm._s(_vm.dayjs(_vm.message.createdAt).format('DD/MM/YYYY HH:mm'))+" ")])]):_vm._e(),(_vm.message.type == 'r')?_c('div',{staticClass:"ic-message-l"},[_vm._m(0),_c('div',{staticClass:"ic-message-l-text"},[(_vm.message.file)?_c('div',{class:{ image: true }},[_c('a',{attrs:{"href":'http://localhost:3000/' + _vm.message.file,"target":"_blank"}},[_c('img',{staticClass:"ic-img",attrs:{"src":'http://localhost:3000/' + _vm.message.file,"alt":""}})])]):_vm._e(),_vm._v(" "+_vm._s(_vm.message.message)+" ")]),_c('div',{staticClass:"ic-message-l-date"},[_vm._v(" "+_vm._s(_vm.dayjs(_vm.message.createdAt).format('DD/MM/YYYY HH:mm'))+" ")])]):_vm._e()])}
  var InetchatMessagevue_type_template_id_0a9beda2_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-message-l-title"},[_c('i',{staticClass:"fas fa-square ic-message-l-title-icon"}),_vm._v(" Inetum ")])}]
  
  
  // CONCATENATED MODULE: ./src/components/InetchatMessage.vue?vue&type=template&id=0a9beda2&
  
  // EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
  var dayjs_min = __webpack_require__("5a0c");
  var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatMessage.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  /* harmony default export */ var InetchatMessagevue_type_script_lang_js_ = ({
    name: 'message',
    props: ['message'],
    methods: {
      dayjs: dayjs_min_default.a
    }
  });
  // CONCATENATED MODULE: ./src/components/InetchatMessage.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_InetchatMessagevue_type_script_lang_js_ = (InetchatMessagevue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/InetchatMessage.vue
  
  
  
  
  
  /* normalize component */
  
  var component = normalizeComponent(
    components_InetchatMessagevue_type_script_lang_js_,
    InetchatMessagevue_type_template_id_0a9beda2_render,
    InetchatMessagevue_type_template_id_0a9beda2_staticRenderFns,
    false,
    null,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var InetchatMessage = (component.exports);
  // EXTERNAL MODULE: ./node_modules/socket.io-client/lib/index.js
  var lib = __webpack_require__("8055");
  
  // EXTERNAL MODULE: ./node_modules/axios/index.js
  var axios = __webpack_require__("bc3a");
  var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatCard.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  
  /* harmony default export */ var InetchatCardvue_type_script_lang_js_ = ({
    name: 'card',
    props: ['config', 'user'],
    components: {
      InetchatMessage: InetchatMessage
    },
    data: () => ({
      messages: [],
      message: '',
      socket: lib('http://localhost:3000'),
      loading: false,
      isTyping: false,
      image: '',
      file: ''
    }),
    methods: {
      getMessages() {
        this.loading = true;
        axios_default.a.get('http://localhost:3000/message/' + this.user._id, {
          headers: {
            db: this.config.db
          }
        }).then(res => {
          this.messages = res.data.messages.reverse();
        }).catch(e => console.log(e)).finally(() => {
          this.loading = false;
        });
      },
  
      sendMessage() {
        // Prepare data
        let formData = new FormData();
        if (this.file) formData.append('file', this.file);
        formData.append('type', 'r');
        formData.append('message', this.message);
        formData.append('user', this.user._id); // Sending data
  
        axios_default()({
          method: 'post',
          url: 'http://localhost:3000/message/' + this.user._id,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            db: this.config.db
          }
        }).then(res => {
          this.message = '';
          this.image = '';
          this.file = ''; //Notify other user
  
          this.socket.emit('message', {
            message: res.data,
            _id: this.user._id
          }); //add Message
  
          this.messages.unshift(res.data);
        }).catch(e => console.log(e));
      },
  
      // File section
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
  
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
  
        this.file = file;
        new Image();
        var reader = new FileReader();
        var vm = this;
  
        reader.onload = function (e) {
          vm.image = e.target.result;
        };
  
        reader.readAsDataURL(file);
      },
  
      removeFile() {
        this.image = '';
      }
  
    },
    watch: {
      user() {
        this.getMessages();
      },
  
      message(val) {
        if (val && !this.typing) this.socket.emit('typing', {
          _id: this.user._id,
          typing: true
        });else this.socket.emit('typing', {
          _id: this.user._id,
          typing: false
        });
      }
  
    },
  
    mounted() {
      //Set listeners
      this.socket.on('message', user => {
        if (user._id == this.user._id) this.messages.unshift(user.message);
      });
      this.socket.on('typing', data => {
        if (data._id == this.user._id) this.isTyping = data.typing;
      });
    }
  
  });
  // CONCATENATED MODULE: ./src/components/InetchatCard.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_InetchatCardvue_type_script_lang_js_ = (InetchatCardvue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/InetchatCard.vue
  
  
  
  function injectStyles (context) {
    
    var style0 = __webpack_require__("ad7f")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var InetchatCard_component = normalizeComponent(
    components_InetchatCardvue_type_script_lang_js_,
    InetchatCardvue_type_template_id_dee8f802_render,
    InetchatCardvue_type_template_id_dee8f802_staticRenderFns,
    false,
    injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var InetchatCard = (InetchatCard_component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatUsers.vue?vue&type=template&id=4fe2801a&
  var InetchatUsersvue_type_template_id_4fe2801a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-users"},[_c('div',{staticClass:"ic-users-title"},[_c('div',{staticClass:"ic-w80 ic-f22"},[_c('i',{staticClass:"fas fa-users ic-mr2 "}),_vm._v(" Users "),_c('span',{staticClass:"ic-f14 ",class:{'ic-text-error': _vm.remainingUsers < 10}},[_vm._v(_vm._s(_vm.userCount + '/' + _vm.config.pack.users))])]),_c('div',{staticClass:"ic-w20 ic-flex ic-justify-end",on:{"click":_vm.showModal}},[_c('i',{staticClass:"fas fa-cog ic-cog"})]),_c('inetchat-config-modal',{directives:[{name:"show",rawName:"v-show",value:(_vm.showConfig),expression:"showConfig"}],attrs:{"config":_vm.config},on:{"close":_vm.closeModal,"configChange":function($event){return _vm.$emit('configChange')}}})],1),_c('div',{staticClass:"ic-users-filter"},[_c('div',{staticClass:"ic-w100 ic-flex ic-justify-center ic-align-center"},[_c('i',{staticClass:"ic-users-filter-icon fas fa-search ic-w10 ic-m1 ic-f28 ic-white"}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.filter),expression:"filter"}],staticClass:"input ic-w80 ic-h20 ic-m1 ",attrs:{"type":"text","placeholder":"Filter ..."},domProps:{"value":(_vm.filter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.filter=$event.target.value}}})])]),_c('div',{staticClass:"ic-users-body scroll"},_vm._l((_vm.filtredUsers),function(user){return _c('inetchat-user',{key:user.user._id,class:{'ic-user-active': _vm.selectedUser == user.user._id, 'ic-user-active-banned': _vm.selectedUser == user.user._id && _vm.config.pack.banning && user.user.banned},attrs:{"user":user,"config":_vm.config},on:{"select":function($event){return _vm.select(user.user._id)}}})}),1)])}
  var InetchatUsersvue_type_template_id_4fe2801a_staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/components/InetchatUsers.vue?vue&type=template&id=4fe2801a&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatUser.vue?vue&type=template&id=bb7533f0&
  var InetchatUservue_type_template_id_bb7533f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-user ic-p2",class:{'ic-user-banned':_vm.config.pack.banning && _vm.user.user.banned},on:{"click":_vm.select}},[_c('div',{staticClass:"ic-user-title ic-flex ic-justify-between"},[_c('div',[_c('i',{staticClass:"fas fa-square ic-user-title-icon"}),_vm._v(" "+_vm._s(_vm.user.user.name)+" ")]),(_vm.config.pack.banning && !_vm.user.user.banned)?_c('div',{on:{"click":function($event){$event.stopPropagation();return _vm.banUser(true)}}},[_c('i',{staticClass:"fas fa-ban ic-ban ic-text-error"})]):_vm._e(),(_vm.config.pack.banning && _vm.user.user.banned)?_c('div',{on:{"click":function($event){$event.stopPropagation();return _vm.banUser(false)}}},[_c('i',{staticClass:"fas fa-check ic-ban ic-text-success"})]):_vm._e()]),_c('div',{staticClass:"ic-user-message"},[_c('span',{staticClass:"ic-bold ic-f14 ic-op"},[_vm._v(_vm._s(_vm.user.type == 's' ? 'Him : ' : 'You : '))]),_vm._v(_vm._s(_vm.user.message)+" ")]),_c('div',{staticClass:"ic-user-date ic-flex ic-justify-end ic-align-end"},[_c('div',[_vm._v(" "+_vm._s(_vm.dayjs(_vm.user.createdAt).format('DD/MM/YYYY HH:mm'))+" ")])])])}
  var InetchatUservue_type_template_id_bb7533f0_staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/components/InetchatUser.vue?vue&type=template&id=bb7533f0&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatUser.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  
  /* harmony default export */ var InetchatUservue_type_script_lang_js_ = ({
    name: "user",
    props: ['user', 'config'],
    data: () => ({
      socket: lib('http://localhost:3000')
    }),
    methods: {
      dayjs: dayjs_min_default.a,
  
      select() {
        this.$emit('select');
      },
  
      banUser(value) {
        if (!this.config.pack.banning) return;
        axios_default.a.post('http://localhost:3000/user/' + this.user.user._id + '/ban', {
          banned: value
        }, {
          headers: {
            db: this.config.db
          }
        }).then(res => {
          this.user.user = res.data;
          this.socket.emit('banned', {
            _id: this.user.user._id,
            banned: res.data.banned
          });
        });
      }
  
    }
  });
  // CONCATENATED MODULE: ./src/components/InetchatUser.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_InetchatUservue_type_script_lang_js_ = (InetchatUservue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/InetchatUser.vue
  
  
  
  
  
  /* normalize component */
  
  var InetchatUser_component = normalizeComponent(
    components_InetchatUservue_type_script_lang_js_,
    InetchatUservue_type_template_id_bb7533f0_render,
    InetchatUservue_type_template_id_bb7533f0_staticRenderFns,
    false,
    null,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var InetchatUser = (InetchatUser_component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"667f35ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatConfigModal.vue?vue&type=template&id=8f4c9ede&
  var InetchatConfigModalvue_type_template_id_8f4c9ede_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-backdrop"},[_c('div',{staticClass:"modal"},[_c('div',{staticClass:"ic-card"},[_vm._m(0),_c('div',{staticClass:"ic-card-text ic-p2 "},[(_vm.config.pack.config.includes('I'))?_c('div',[_c('div',[_vm._v(" Avatar : ")]),_c('div',{staticClass:"ic-flex ic-justify-center"},[_c('div',{staticClass:"helper"}),_c('div',{staticClass:"drop display-inline align-center",on:{"dragover":function($event){$event.preventDefault();},"drop":_vm.onDrop}},[_c('div',{staticClass:"helper"}),(!_vm.image)?_c('label',{staticClass:"btn display-inline"},[_c('i',{staticClass:"fas fa-image "}),_c('input',{attrs:{"type":"file","name":"image"},on:{"change":_vm.onChange}})]):_c('div',{staticClass:"hidden display-inline align-center",class:{ image: true }},[_c('img',{staticClass:"img",attrs:{"src":_vm.image,"alt":""}})])])])]):_vm._e(),_c('div',{staticClass:"ic-flex ic-align-center ic-justify-center"},[(_vm.image)?_c('button',{staticClass:"ic-button ic-bg-error ic-f14",on:{"click":_vm.removeFile}},[_c('i',{staticClass:"fas fa-times"})]):_vm._e()]),(_vm.config.pack.config.includes('N'))?_c('div',[_c('div',{staticClass:"ic-mt2 ic-mb1"},[_vm._v(" Name : ")]),_c('div',{staticClass:"ic-flex ic-justify-center"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],staticClass:"input ic-w100 ",attrs:{"type":"text","placerholder":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})])]):_vm._e(),(_vm.config.pack.config.includes('C'))?_c('div',{staticClass:"ic-w100"},[_c('div',{staticClass:"ic-w40"},[_c('div',{staticClass:"ic-mt2 ic-mb1"},[_vm._v(" Primary color : ")]),_c('div',{staticClass:"ic-flex ic-align-center"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.primary),expression:"primary"}],staticClass:"ic-mr2",attrs:{"type":"color","name":"color"},domProps:{"value":(_vm.primary)},on:{"input":function($event){if($event.target.composing){ return; }_vm.primary=$event.target.value}}}),_vm._v(" "+_vm._s(_vm.primary)+" ")])]),_c('div',{staticClass:"ic-w40"},[_c('div',{staticClass:"ic-mt2 ic-mb1"},[_vm._v(" Secondary color : ")]),_c('div',{staticClass:"ic-flex ic-align-center"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.secondary),expression:"secondary"}],staticClass:"ic-mr2",attrs:{"type":"color","name":"color"},domProps:{"value":(_vm.secondary)},on:{"input":function($event){if($event.target.composing){ return; }_vm.secondary=$event.target.value}}}),_vm._v(" "+_vm._s(_vm.secondary)+" ")])])]):_vm._e()]),_c('div',{staticClass:"ic-card-actions ic-flex ic-justify-end"},[_c('button',{staticClass:"ic-button ic-bg-error ic-w10 ic-m1",on:{"click":_vm.close}},[_c('i',{staticClass:"fa fa-times"})]),_c('button',{staticClass:"ic-button ic-bg-success ic-w10 ic-m1",on:{"click":_vm.save}},[_c('i',{staticClass:"fa fa-check"})])])])])])}
  var InetchatConfigModalvue_type_template_id_8f4c9ede_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-card-title"},[_c('i',{staticClass:"fas fa-cog ic-mr2"}),_vm._v("Configuration ")])}]
  
  
  // CONCATENATED MODULE: ./src/components/InetchatConfigModal.vue?vue&type=template&id=8f4c9ede&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatConfigModal.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  /* harmony default export */ var InetchatConfigModalvue_type_script_lang_js_ = ({
    name: 'Modal',
    props: ['config'],
    data: () => ({
      primary: '',
      secondary: '',
      name: '',
      image: '',
      file: ''
    }),
    methods: {
      close() {
        this.primary = this.config.primary, this.secondary = this.config.secondary, this.$emit('close');
      },
  
      onDrop: function (e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
  
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
  
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
  
        this.file = file;
        new Image();
        var reader = new FileReader();
        var vm = this;
  
        reader.onload = function (e) {
          vm.image = e.target.result;
        };
  
        reader.readAsDataURL(file);
      },
  
      removeFile() {
        this.image = '';
      },
  
      save() {
        // Preparing data
        let formData = new FormData();
        if (this.name) formData.append('name', this.name);
        if (this.file) formData.append('avatar', this.file);
        if (this.primary) formData.append('primary', this.primary);
        if (this.secondary) formData.append('secondary', this.secondary); // Sending data
  
        axios_default()({
          method: 'put',
          url: 'http://localhost:3001/config/' + this.config.license,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(() => {
          this.$emit('configChange');
          this.close();
        }).catch(e => {
          console.log(e);
        });
      }
  
    },
    watch: {
      primary(val) {
        document.documentElement.style.setProperty('--primary', val);
      },
  
      secondary(val) {
        document.documentElement.style.setProperty('--secondary', val);
      }
  
    },
  
    mounted() {
      //initiate colors
      this.primary = this.config.primary;
      this.secondary = this.config.secondary;
      this.name = this.config.name;
    }
  
  });
  // CONCATENATED MODULE: ./src/components/InetchatConfigModal.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_InetchatConfigModalvue_type_script_lang_js_ = (InetchatConfigModalvue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/InetchatConfigModal.vue
  
  
  
  function InetchatConfigModal_injectStyles (context) {
    
    var style0 = __webpack_require__("e8c9")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var InetchatConfigModal_component = normalizeComponent(
    components_InetchatConfigModalvue_type_script_lang_js_,
    InetchatConfigModalvue_type_template_id_8f4c9ede_render,
    InetchatConfigModalvue_type_template_id_8f4c9ede_staticRenderFns,
    false,
    InetchatConfigModal_injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var InetchatConfigModal = (InetchatConfigModal_component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InetchatUsers.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  
  
  /* harmony default export */ var InetchatUsersvue_type_script_lang_js_ = ({
    name: 'Users',
    props: ['config'],
    components: {
      InetchatUser: InetchatUser,
      InetchatConfigModal: InetchatConfigModal
    },
    data: () => ({
      users: [],
      userCount: 0,
      selectedUser: null,
      showConfig: false,
      filter: '',
      socket: lib('http://localhost:3000')
    }),
    methods: {
      showModal() {
        this.showConfig = true;
      },
  
      closeModal() {
        this.showConfig = false;
      },
  
      getUsers() {
        axios_default.a.get('http://localhost:3000/messages', {
          headers: {
            db: this.config.db
          }
        }).then(res => {
          this.users = res.data.messages;
          this.userCount = res.data.userCount;
        }).catch(e => console.log(e));
      },
  
      select(id) {
        this.selectedUser = id, this.$emit("userSelected", id);
      }
  
    },
    computed: {
      filtredUsers() {
        if (this.filter) return this.users.filter(message => message.user.name.includes(this.filter) || message.user.email.includes(this.filter));else return this.users;
      },
  
      remainingUsers() {
        return this.config.pack.users - this.userCount;
      }
  
    },
  
    created() {
      this.getUsers();
    },
  
    mounted() {
      //Set listeners
      this.socket.on('message', user => {
        // Check if it is a new user 
        if (this.users.filter(u => u._id == user._id).length == 0) this.getUsers();
      });
    }
  
  });
  // CONCATENATED MODULE: ./src/components/InetchatUsers.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_InetchatUsersvue_type_script_lang_js_ = (InetchatUsersvue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/InetchatUsers.vue
  
  
  
  
  
  /* normalize component */
  
  var InetchatUsers_component = normalizeComponent(
    components_InetchatUsersvue_type_script_lang_js_,
    InetchatUsersvue_type_template_id_4fe2801a_render,
    InetchatUsersvue_type_template_id_4fe2801a_staticRenderFns,
    false,
    null,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var InetchatUsers = (InetchatUsers_component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inetchat.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  
  
  /* harmony default export */ var Inetchatvue_type_script_lang_js_ = ({
    name: 'App',
    props: ['config'],
    components: {
      InetchatCard: InetchatCard,
      InetchatUsers: InetchatUsers
    },
    data: () => ({
      selectedUser: null,
      socket: lib('http://localhost:3000')
    }),
    methods: {
      select(id) {
        this.getUser(id);
      },
  
      getUser(id) {
        axios_default.a.get('http://localhost:3000/user/' + id, {
          headers: {
            db: this.config.db
          }
        }).then(res => {
          this.selectedUser = res.data;
        }).catch(e => console.log(e));
      }
  
    },
  
    mounted() {
      // set listeners
      this.socket.on('banned', data => {
        if (data._id == this.selectedUser._id) this.getUser(this.selectedUser._id);
      });
    }
  
  });
  // CONCATENATED MODULE: ./src/components/Inetchat.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_Inetchatvue_type_script_lang_js_ = (Inetchatvue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/Inetchat.vue
  
  
  
  
  
  /* normalize component */
  
  var Inetchat_component = normalizeComponent(
    components_Inetchatvue_type_script_lang_js_,
    Inetchatvue_type_template_id_3e244860_render,
    Inetchatvue_type_template_id_3e244860_staticRenderFns,
    false,
    null,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var Inetchat = (Inetchat_component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&shadow
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  
  /* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
    name: 'App',
    props: {
      license: {
        type: String,
        default: null
      }
    },
    components: {
      Inetchat: Inetchat
    },
    data: () => ({
      socket: lib('http://localhost:3000'),
      config: null
    }),
    methods: {
      getConfig() {
        axios_default.a.post('http://localhost:3000/config/', {
          license: this.license
        }).then(res => {
          this.config = res.data.config;
          this.config.license = this.license;
          if (!this.config.active) return alert('inetchat: invalid license!');
          document.documentElement.style.setProperty("--primary", this.config.primary);
          document.documentElement.style.setProperty("--secondary", this.config.secondary);
        }).catch(e => console.log(e));
      }
  
    },
  
    created() {
      this.getConfig();
    },
  
    mounted() {
      //Set listeners
      this.socket.on('activation', data => {
        if (this.license == data.license) this.getConfig();
      });
    }
  
  });
  // CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&shadow
   /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
  // CONCATENATED MODULE: ./src/App.vue?shadow
  
  
  
  function Appshadow_injectStyles (context) {
    
    var style0 = __webpack_require__("547d")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var Appshadow_component = normalizeComponent(
    src_Appvue_type_script_lang_js_shadow,
    render,
    staticRenderFns,
    false,
    Appshadow_injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var Appshadow = (Appshadow_component.exports);
  // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js
  
  
  
  
  // runtime shared by every component chunk
  
  
  
  
  
  window.customElements.define('v-inetchat-ad', vue_wc_wrapper(external_Vue_default.a, Appshadow))
  
  /***/ }),
  
  /***/ "5ee2":
  /***/ (function(module, exports) {
  
  /**
   * Helpers.
   */
  
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  
  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} options
   * @return {String|Number}
   * @api public
   */
  
  module.exports = function(val, options){
    options = options || {};
    if ('string' == typeof val) return parse(val);
    return options.long
      ? long(val)
      : short(val);
  };
  
  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */
  
  function parse(str) {
    str = '' + str;
    if (str.length > 10000) return;
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
    }
  }
  
  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */
  
  function short(ms) {
    if (ms >= d) return Math.round(ms / d) + 'd';
    if (ms >= h) return Math.round(ms / h) + 'h';
    if (ms >= m) return Math.round(ms / m) + 'm';
    if (ms >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
  }
  
  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */
  
  function long(ms) {
    return plural(ms, d, 'day')
      || plural(ms, h, 'hour')
      || plural(ms, m, 'minute')
      || plural(ms, s, 'second')
      || ms + ' ms';
  }
  
  /**
   * Pluralization helper.
   */
  
  function plural(ms, n, name) {
    if (ms < n) return;
    if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
    return Math.ceil(ms / n) + ' ' + name + 's';
  }
  
  
  /***/ }),
  
  /***/ "5f02":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  module.exports = function isAxiosError(payload) {
    return (typeof payload === 'object') && (payload.isAxiosError === true);
  };
  
  
  /***/ }),
  
  /***/ "6130":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("b0aa");
  if(content.__esModule) content = content.default;
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("9caa90c4", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "619a":
  /***/ (function(module, exports, __webpack_require__) {
  
  // Imports
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
  exports = ___CSS_LOADER_API_IMPORT___(false);
  // Module
  exports.push([module.i, ":root{--primary:#00aa9b;--secondary:#232d4b;--accent:#82b1ff}.ic-w10{width:10%}.ic-w20{width:20%}.ic-w40{width:40%}.ic-w60{width:60%}.ic-w70{width:70%}.ic-w80{width:80%}.ic-w100{width:100%}.ic-h20{height:20%}.ic-h40{height:40%}.ic-h60{height:60%}.ic-h80{height:80%}.ic-h100{height:100%}.ic-h120{height:120%!important}.ic-mr1{margin-right:2%}.ic-mr2{margin-right:4%}.ic-mr3{margin-right:6%}.ic-ml1{margin-left:2%}.ic-ml2{margin-left:4%}.ic-ml3{margin-left:6%}.ic-mt1{margin-top:2%}.ic-mt2{margin-top:4%}.ic-mt3{margin-top:6%}.ic-mb1{margin-bottom:2%}.ic-mb2{margin-bottom:4%}.ic-mb3{margin-bottom:6%}.ic-m1{margin:2%}.ic-m2{margin:4%}.ic-m3{margin:6%}.ic-p1{padding:2%}.ic-p2{padding:4%}.ic-p3{padding:6%}.ic-flex{display:flex}.ic-justify-center{justify-content:center}.ic-justify-between{justify-content:space-between}.ic-justify-around{justify-content:space-around}.ic-justify-end{justify-content:flex-end}.ic-justify-start{justify-content:flex-start}.ic-align-center{align-items:center}.ic-align-end{align-items:flex-end}.ic-align-start{align-items:flex-start}.ic-rtl{direction:rtl}.ic-primary{color:var(--primary)}.ic-secondary{color:var(--secondary)}.ic-white{color:#fff}.ic-bg-primary{background-color:var(--primary)}.ic-bg-secondary{background-color:var(--secondary)}.ic-f14{font-size:14px!important}.ic-f16{font-size:16px!important}.ic-f18{font-size:18px!important}.ic-f20{font-size:20px!important}.ic-f22{font-size:22px!important}.ic-f24,.ic-f26,.ic-f28{font-size:24px!important}.ic-bold{font-weight:700}.ic-op{opacity:.7}.ic-bg-primary{background-color:var(--primary)!important}.ic-bg-secondary{background-color:var(--secondary)!important}.ic-bg-accent{background-color:var(--accent)!important}.ic-bg-error{background-color:#ff5252!important}.ic-bg-info{background-color:#2196f3!important}.ic-bg-success{background-color:#4caf50!important}.ic-bg-warning{background-color:#ffc107!important}.ic-text-primary{color:var(--primary)!important}.ic-text-secondary{color:var(--secondary)!important}.ic-text-accent{color:var(--accent)!important}.ic-text-error{color:#ff5252!important}.ic-text-info{color:#2196f3!important}.ic-text-success{color:#4caf50!important}.ic-text-warning{color:#ffc107!important}.ic-card{height:480px;width:450px}.ic-card-title{padding:10px;height:50px;font-size:24px;text-align:left;background-color:var(--primary);color:#fff}.ic-card-login,.ic-card-title{display:flex;justify-content:center;align-items:center}.ic-card-login{height:450px;background-color:var(--secondary)}.ic-card-text{height:360px;color:#000;background-color:#fff;overflow-y:auto;box-shadow:inset -4px 0 4px -4px rgba(0,0,0,.4)}.ic-card-actions{display:flex;align-content:center;background-color:var(--secondary);height:60px}.ic-avatar{vertical-align:middle;width:50px;height:50px;border-radius:50%}.ic-button{color:#fff;text-transform:uppercase;text-decoration:none;background:var(--primary);border-radius:5px;font-size:25px;display:inline-block;border:none;align-content:right;transition:all .2s ease 0s}.ic-button:hover{opacity:.85;transition:all .2s ease 0s;cursor:pointer}.ic-file{opacity:.5}.ic-file:hover{opacity:.9;color:var(--primary);cursor:pointer}.ic-cog,.ic-cog:hover{transition:.3s}.ic-cog:hover{transform:rotate(20deg) scale(1.1);color:var(--primary);cursor:pointer}.ic-ban{opacity:.5}.ic-ban:hover{opacity:1}.ic-message-l-title{font-weight:700;color:var(--secondary)}.ic-message-l-title-icon{color:var(--primary);font-size:10px}.ic-message-l-text{background-color:var(--primary);padding:3%;color:#fff;border-radius:0 12px 12px 12px}.ic-message-l-date{font-size:11px;color:var(--secondary);font-weight:700;opacity:.8}.ic-message-r-title{direction:rtl;font-weight:700;color:var(--primary)}.ic-message-r-title-icon{color:var(--secondary);font-size:10px}.ic-message-r-text{background-color:var(--secondary);padding:3%;color:#fff;border-radius:12px 0 12px 12px}.ic-message-r-date{font-size:11px;opacity:.8;color:var(--secondary);font-weight:700;text-align:right}.ic-users{height:522px;width:250px;background-color:#eee;border:2px solid var(--secondary)}.ic-users-filter{height:50px;background-color:var(--secondary)}.ic-users-filter-icon{font-size:18px}.ic-users-title{display:flex;justify-content:flex-start;align-items:center;padding:10px;height:48px;font-size:18px;text-align:left;background-color:var(--secondary);color:#fff}.ic-users-body{height:404px;overflow-y:auto}.ic-user{height:70px;background-color:#fff;box-shadow:inset 0 0 3px var(--secondary)}.ic-user:hover{background-color:#ddd;cursor:pointer}.ic-user-banned{background-color:rgba(207,8,8,.44313725490196076)}.ic-user-banned:hover{background-color:rgba(255,32,32,.611764705882353)}.ic-user-active{background-color:rgba(99,99,99,.23137254901960785)}.ic-user-active-banned{background-color:rgba(255,32,32,.611764705882353)}.ic-user-title{height:20px;font-weight:700;color:var(--secondary)}.ic-user-title-icon{color:var(--primary);font-size:10px}.ic-user-text{height:25px;font-size:14px}.ic-user-date{font-size:11px;color:var(--secondary);font-weight:700;opacity:.8}.ic-user-message{white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;color:#000}.ic-show-image{z-index:10;width:100%;display:flex;align-content:center;background-color:#969696;border-radius:10px}.ic-img{background-color:#eee;display:inline-block;max-height:100%;max-width:100%;height:70px;width:70px;-o-object-fit:scale-down;object-fit:scale-down;border-radius:0!important}*{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}button:disabled,button[disabled]{border:1px solid #999;background-color:#ccc;color:#666;cursor:default!important}.input{font-size:16px;font-size:Max(16px,1em);font-family:inherit;padding:.25em .5em;background-color:#fff;border:2px solid #9c8d9c;border-radius:4px;transition:box-shadow .18s ease-in-out}.input:focus{border-color:var(--primary);outline:2px solid transparent}.input:not(textarea){line-height:1;height:1.8rem}input[type=file]{font-size:.9em;padding-top:.35rem}textarea.input{resize:vertical}.input[readonly]{border-style:dotted;cursor:not-allowed;color:#777}.input[disabled]{background-color:#eee;cursor:not-allowed}label{font-size:1.125rem;font-weight:500;line-height:1}.input+label{margin-top:2rem}.scroller{overflow:auto}.scroll-chat{display:flex;flex-direction:column-reverse}.scroll::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.scroll::-webkit-scrollbar{width:6px;background-color:#f5f5f5}.scroll::-webkit-scrollbar-thumb{background-color:var(--primary)}.slide-fade-enter-active{transition:all .4s ease}.slide-fade-leave-active{transition:all .3s cubic-bezier(1,.5,.8,1)}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(15px);opacity:0}", ""]);
  // Exports
  module.exports = exports;
  
  
  /***/ }),
  
  /***/ "62e4":
  /***/ (function(module, exports) {
  
  module.exports = function(module) {
    if (!module.webpackPolyfill) {
      module.deprecate = function() {};
      module.paths = [];
      // module.parent = undefined by default
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function() {
          return module.i;
        }
      });
      module.webpackPolyfill = 1;
    }
    return module;
  };
  
  
  /***/ }),
  
  /***/ "62fa":
  /***/ (function(module, exports) {
  
  
  module.exports = function(a, b){
    var fn = function(){};
    fn.prototype = b.prototype;
    a.prototype = new fn;
    a.prototype.constructor = a;
  };
  
  /***/ }),
  
  /***/ "6a44":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * Module dependencies
   */
  
  var XMLHttpRequest = __webpack_require__("01d3");
  var XHR = __webpack_require__("d33e");
  var JSONP = __webpack_require__("0a5e");
  var websocket = __webpack_require__("0882");
  
  /**
   * Export transports.
   */
  
  exports.polling = polling;
  exports.websocket = websocket;
  
  /**
   * Polling transport polymorphic constructor.
   * Decides on xhr vs jsonp based on feature detection.
   *
   * @api private
   */
  
  function polling (opts) {
    var xhr;
    var xd = false;
    var xs = false;
    var jsonp = false !== opts.jsonp;
  
    if (global.location) {
      var isSSL = 'https:' === location.protocol;
      var port = location.port;
  
      // some user agents have empty `location.port`
      if (!port) {
        port = isSSL ? 443 : 80;
      }
  
      xd = opts.hostname !== location.hostname || port !== opts.port;
      xs = opts.secure !== isSSL;
    }
  
    opts.xdomain = xd;
    opts.xscheme = xs;
    xhr = new XMLHttpRequest(opts);
  
    if ('open' in xhr && !opts.forceJSONP) {
      return new XHR(opts);
    } else {
      if (!jsonp) throw new Error('JSONP disabled');
      return new JSONP(opts);
    }
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "74ea":
  /***/ (function(module, exports) {
  
  /*
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */
  (function(){
    "use strict";
  
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  
    // Use a lookup table to find the index.
    var lookup = new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }
  
    exports.encode = function(arraybuffer) {
      var bytes = new Uint8Array(arraybuffer),
      i, len = bytes.length, base64 = "";
  
      for (i = 0; i < len; i+=3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
      }
  
      if ((len % 3) === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }
  
      return base64;
    };
  
    exports.decode =  function(base64) {
      var bufferLength = base64.length * 0.75,
      len = base64.length, i, p = 0,
      encoded1, encoded2, encoded3, encoded4;
  
      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }
  
      var arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer);
  
      for (i = 0; i < len; i+=4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i+1)];
        encoded3 = lookup[base64.charCodeAt(i+2)];
        encoded4 = lookup[base64.charCodeAt(i+3)];
  
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
      }
  
      return arraybuffer;
    };
  })();
  
  
  /***/ }),
  
  /***/ "78eb":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Module dependencies.
   */
  
  var eio = __webpack_require__("7c0d");
  var Socket = __webpack_require__("2851");
  var Emitter = __webpack_require__("db1a");
  var parser = __webpack_require__("530b");
  var on = __webpack_require__("d838");
  var bind = __webpack_require__("40de");
  var debug = __webpack_require__("49f7")('socket.io-client:manager');
  var indexOf = __webpack_require__("ee34");
  var Backoff = __webpack_require__("0b64");
  
  /**
   * IE6+ hasOwnProperty
   */
  
  var has = Object.prototype.hasOwnProperty;
  
  /**
   * Module exports
   */
  
  module.exports = Manager;
  
  /**
   * `Manager` constructor.
   *
   * @param {String} engine instance or engine uri/opts
   * @param {Object} options
   * @api public
   */
  
  function Manager (uri, opts) {
    if (!(this instanceof Manager)) return new Manager(uri, opts);
    if (uri && ('object' === typeof uri)) {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
  
    opts.path = opts.path || '/socket.io';
    this.nsps = {};
    this.subs = [];
    this.opts = opts;
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor(opts.randomizationFactor || 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    this.readyState = 'closed';
    this.uri = uri;
    this.connecting = [];
    this.lastPing = null;
    this.encoding = false;
    this.packetBuffer = [];
    this.encoder = new parser.Encoder();
    this.decoder = new parser.Decoder();
    this.autoConnect = opts.autoConnect !== false;
    if (this.autoConnect) this.open();
  }
  
  /**
   * Propagate given event to sockets and emit on `this`
   *
   * @api private
   */
  
  Manager.prototype.emitAll = function () {
    this.emit.apply(this, arguments);
    for (var nsp in this.nsps) {
      if (has.call(this.nsps, nsp)) {
        this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
      }
    }
  };
  
  /**
   * Update `socket.id` of all sockets
   *
   * @api private
   */
  
  Manager.prototype.updateSocketIds = function () {
    for (var nsp in this.nsps) {
      if (has.call(this.nsps, nsp)) {
        this.nsps[nsp].id = this.engine.id;
      }
    }
  };
  
  /**
   * Mix in `Emitter`.
   */
  
  Emitter(Manager.prototype);
  
  /**
   * Sets the `reconnection` config.
   *
   * @param {Boolean} true/false if it should automatically reconnect
   * @return {Manager} self or value
   * @api public
   */
  
  Manager.prototype.reconnection = function (v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  };
  
  /**
   * Sets the reconnection attempts config.
   *
   * @param {Number} max reconnection attempts before giving up
   * @return {Manager} self or value
   * @api public
   */
  
  Manager.prototype.reconnectionAttempts = function (v) {
    if (!arguments.length) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  };
  
  /**
   * Sets the delay between reconnections.
   *
   * @param {Number} delay
   * @return {Manager} self or value
   * @api public
   */
  
  Manager.prototype.reconnectionDelay = function (v) {
    if (!arguments.length) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    this.backoff && this.backoff.setMin(v);
    return this;
  };
  
  Manager.prototype.randomizationFactor = function (v) {
    if (!arguments.length) return this._randomizationFactor;
    this._randomizationFactor = v;
    this.backoff && this.backoff.setJitter(v);
    return this;
  };
  
  /**
   * Sets the maximum delay between reconnections.
   *
   * @param {Number} delay
   * @return {Manager} self or value
   * @api public
   */
  
  Manager.prototype.reconnectionDelayMax = function (v) {
    if (!arguments.length) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    this.backoff && this.backoff.setMax(v);
    return this;
  };
  
  /**
   * Sets the connection timeout. `false` to disable
   *
   * @return {Manager} self or value
   * @api public
   */
  
  Manager.prototype.timeout = function (v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  };
  
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @api private
   */
  
  Manager.prototype.maybeReconnectOnOpen = function () {
    // Only try to reconnect if it's the first time we're connecting
    if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
      // keeps reconnection from firing twice for the same reconnection loop
      this.reconnect();
    }
  };
  
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} optional, callback
   * @return {Manager} self
   * @api public
   */
  
  Manager.prototype.open =
  Manager.prototype.connect = function (fn, opts) {
    debug('readyState %s', this.readyState);
    if (~this.readyState.indexOf('open')) return this;
  
    debug('opening %s', this.uri);
    this.engine = eio(this.uri, this.opts);
    var socket = this.engine;
    var self = this;
    this.readyState = 'opening';
    this.skipReconnect = false;
  
    // emit `open`
    var openSub = on(socket, 'open', function () {
      self.onopen();
      fn && fn();
    });
  
    // emit `connect_error`
    var errorSub = on(socket, 'error', function (data) {
      debug('connect_error');
      self.cleanup();
      self.readyState = 'closed';
      self.emitAll('connect_error', data);
      if (fn) {
        var err = new Error('Connection error');
        err.data = data;
        fn(err);
      } else {
        // Only do this if there is no fn to handle the error
        self.maybeReconnectOnOpen();
      }
    });
  
    // emit `connect_timeout`
    if (false !== this._timeout) {
      var timeout = this._timeout;
      debug('connect attempt will timeout after %d', timeout);
  
      // set timer
      var timer = setTimeout(function () {
        debug('connect attempt timed out after %d', timeout);
        openSub.destroy();
        socket.close();
        socket.emit('error', 'timeout');
        self.emitAll('connect_timeout', timeout);
      }, timeout);
  
      this.subs.push({
        destroy: function () {
          clearTimeout(timer);
        }
      });
    }
  
    this.subs.push(openSub);
    this.subs.push(errorSub);
  
    return this;
  };
  
  /**
   * Called upon transport open.
   *
   * @api private
   */
  
  Manager.prototype.onopen = function () {
    debug('open');
  
    // clear old subs
    this.cleanup();
  
    // mark as open
    this.readyState = 'open';
    this.emit('open');
  
    // add new subs
    var socket = this.engine;
    this.subs.push(on(socket, 'data', bind(this, 'ondata')));
    this.subs.push(on(socket, 'ping', bind(this, 'onping')));
    this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
    this.subs.push(on(socket, 'error', bind(this, 'onerror')));
    this.subs.push(on(socket, 'close', bind(this, 'onclose')));
    this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
  };
  
  /**
   * Called upon a ping.
   *
   * @api private
   */
  
  Manager.prototype.onping = function () {
    this.lastPing = new Date();
    this.emitAll('ping');
  };
  
  /**
   * Called upon a packet.
   *
   * @api private
   */
  
  Manager.prototype.onpong = function () {
    this.emitAll('pong', new Date() - this.lastPing);
  };
  
  /**
   * Called with data.
   *
   * @api private
   */
  
  Manager.prototype.ondata = function (data) {
    this.decoder.add(data);
  };
  
  /**
   * Called when parser fully decodes a packet.
   *
   * @api private
   */
  
  Manager.prototype.ondecoded = function (packet) {
    this.emit('packet', packet);
  };
  
  /**
   * Called upon socket error.
   *
   * @api private
   */
  
  Manager.prototype.onerror = function (err) {
    debug('error', err);
    this.emitAll('error', err);
  };
  
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @api public
   */
  
  Manager.prototype.socket = function (nsp, opts) {
    var socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
      var self = this;
      socket.on('connecting', onConnecting);
      socket.on('connect', function () {
        socket.id = self.engine.id;
      });
  
      if (this.autoConnect) {
        // manually call here since connecting evnet is fired before listening
        onConnecting();
      }
    }
  
    function onConnecting () {
      if (!~indexOf(self.connecting, socket)) {
        self.connecting.push(socket);
      }
    }
  
    return socket;
  };
  
  /**
   * Called upon a socket close.
   *
   * @param {Socket} socket
   */
  
  Manager.prototype.destroy = function (socket) {
    var index = indexOf(this.connecting, socket);
    if (~index) this.connecting.splice(index, 1);
    if (this.connecting.length) return;
  
    this.close();
  };
  
  /**
   * Writes a packet.
   *
   * @param {Object} packet
   * @api private
   */
  
  Manager.prototype.packet = function (packet) {
    debug('writing packet %j', packet);
    var self = this;
    if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
  
    if (!self.encoding) {
      // encode, then write to engine with result
      self.encoding = true;
      this.encoder.encode(packet, function (encodedPackets) {
        for (var i = 0; i < encodedPackets.length; i++) {
          self.engine.write(encodedPackets[i], packet.options);
        }
        self.encoding = false;
        self.processPacketQueue();
      });
    } else { // add packet to the queue
      self.packetBuffer.push(packet);
    }
  };
  
  /**
   * If packet buffer is non-empty, begins encoding the
   * next packet in line.
   *
   * @api private
   */
  
  Manager.prototype.processPacketQueue = function () {
    if (this.packetBuffer.length > 0 && !this.encoding) {
      var pack = this.packetBuffer.shift();
      this.packet(pack);
    }
  };
  
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @api private
   */
  
  Manager.prototype.cleanup = function () {
    debug('cleanup');
  
    var subsLength = this.subs.length;
    for (var i = 0; i < subsLength; i++) {
      var sub = this.subs.shift();
      sub.destroy();
    }
  
    this.packetBuffer = [];
    this.encoding = false;
    this.lastPing = null;
  
    this.decoder.destroy();
  };
  
  /**
   * Close the current socket.
   *
   * @api private
   */
  
  Manager.prototype.close =
  Manager.prototype.disconnect = function () {
    debug('disconnect');
    this.skipReconnect = true;
    this.reconnecting = false;
    if ('opening' === this.readyState) {
      // `onclose` will not fire because
      // an open event never happened
      this.cleanup();
    }
    this.backoff.reset();
    this.readyState = 'closed';
    if (this.engine) this.engine.close();
  };
  
  /**
   * Called upon engine close.
   *
   * @api private
   */
  
  Manager.prototype.onclose = function (reason) {
    debug('onclose');
  
    this.cleanup();
    this.backoff.reset();
    this.readyState = 'closed';
    this.emit('close', reason);
  
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  };
  
  /**
   * Attempt a reconnection.
   *
   * @api private
   */
  
  Manager.prototype.reconnect = function () {
    if (this.reconnecting || this.skipReconnect) return this;
  
    var self = this;
  
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      debug('reconnect failed');
      this.backoff.reset();
      this.emitAll('reconnect_failed');
      this.reconnecting = false;
    } else {
      var delay = this.backoff.duration();
      debug('will wait %dms before reconnect attempt', delay);
  
      this.reconnecting = true;
      var timer = setTimeout(function () {
        if (self.skipReconnect) return;
  
        debug('attempting reconnect');
        self.emitAll('reconnect_attempt', self.backoff.attempts);
        self.emitAll('reconnecting', self.backoff.attempts);
  
        // check again for the case socket closed in above events
        if (self.skipReconnect) return;
  
        self.open(function (err) {
          if (err) {
            debug('reconnect attempt error');
            self.reconnecting = false;
            self.reconnect();
            self.emitAll('reconnect_error', err.data);
          } else {
            debug('reconnect success');
            self.onreconnect();
          }
        });
      }, delay);
  
      this.subs.push({
        destroy: function () {
          clearTimeout(timer);
        }
      });
    }
  };
  
  /**
   * Called upon successful reconnect.
   *
   * @api private
   */
  
  Manager.prototype.onreconnect = function () {
    var attempt = this.backoff.attempts;
    this.reconnecting = false;
    this.backoff.reset();
    this.updateSocketIds();
    this.emitAll('reconnect', attempt);
  };
  
  
  /***/ }),
  
  /***/ "7a77":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel(message) {
    this.message = message;
  }
  
  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  
  Cancel.prototype.__CANCEL__ = true;
  
  module.exports = Cancel;
  
  
  /***/ }),
  
  /***/ "7aac":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
  
            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }
  
            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }
  
            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }
  
            if (secure === true) {
              cookie.push('secure');
            }
  
            document.cookie = cookie.join('; ');
          },
  
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },
  
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :
  
    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
  );
  
  
  /***/ }),
  
  /***/ "7c0d":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  module.exports = __webpack_require__("94ac");
  
  
  /***/ }),
  
  /***/ "7c29":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
  ;(function () {
    // Detect the `define` function exposed by asynchronous module loaders. The
    // strict `define` check is necessary for compatibility with `r.js`.
    var isLoader =  true && __webpack_require__("3c35");
  
    // A set of types used to distinguish objects from primitives.
    var objectTypes = {
      "function": true,
      "object": true
    };
  
    // Detect the `exports` object exposed by CommonJS implementations.
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  
    // Use the `global` object exposed by Node (including Browserify via
    // `insert-module-globals`), Narwhal, and Ringo as the default context,
    // and the `window` object in browsers. Rhino exports a `global` function
    // instead.
    var root = objectTypes[typeof window] && window || this,
        freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
  
    if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
      root = freeGlobal;
    }
  
    // Public: Initializes JSON 3 using the given `context` object, attaching the
    // `stringify` and `parse` functions to the specified `exports` object.
    function runInContext(context, exports) {
      context || (context = root["Object"]());
      exports || (exports = root["Object"]());
  
      // Native constructor aliases.
      var Number = context["Number"] || root["Number"],
          String = context["String"] || root["String"],
          Object = context["Object"] || root["Object"],
          Date = context["Date"] || root["Date"],
          SyntaxError = context["SyntaxError"] || root["SyntaxError"],
          TypeError = context["TypeError"] || root["TypeError"],
          Math = context["Math"] || root["Math"],
          nativeJSON = context["JSON"] || root["JSON"];
  
      // Delegate to the native `stringify` and `parse` implementations.
      if (typeof nativeJSON == "object" && nativeJSON) {
        exports.stringify = nativeJSON.stringify;
        exports.parse = nativeJSON.parse;
      }
  
      // Convenience aliases.
      var objectProto = Object.prototype,
          getClass = objectProto.toString,
          isProperty, forEach, undef;
  
      // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
      var isExtended = new Date(-3509827334573292);
      try {
        // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
        // results for certain dates in Opera >= 10.53.
        isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
          // Safari < 2.0.2 stores the internal millisecond time value correctly,
          // but clips the values returned by the date methods to the range of
          // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
          isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
      } catch (exception) {}
  
      // Internal: Determines whether the native `JSON.stringify` and `parse`
      // implementations are spec-compliant. Based on work by Ken Snyder.
      function has(name) {
        if (has[name] !== undef) {
          // Return cached feature test result.
          return has[name];
        }
        var isSupported;
        if (name == "bug-string-char-index") {
          // IE <= 7 doesn't support accessing string characters using square
          // bracket notation. IE 8 only supports this for primitives.
          isSupported = "a"[0] != "a";
        } else if (name == "json") {
          // Indicates whether both `JSON.stringify` and `JSON.parse` are
          // supported.
          isSupported = has("json-stringify") && has("json-parse");
        } else {
          var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          // Test `JSON.stringify`.
          if (name == "json-stringify") {
            var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
            if (stringifySupported) {
              // A test function object with a custom `toJSON` method.
              (value = function () {
                return 1;
              }).toJSON = value;
              try {
                stringifySupported =
                  // Firefox 3.1b1 and b2 serialize string, number, and boolean
                  // primitives as object literals.
                  stringify(0) === "0" &&
                  // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                  // literals.
                  stringify(new Number()) === "0" &&
                  stringify(new String()) == '""' &&
                  // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                  // does not define a canonical JSON representation (this applies to
                  // objects with `toJSON` properties as well, *unless* they are nested
                  // within an object or array).
                  stringify(getClass) === undef &&
                  // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                  // FF 3.1b3 pass this test.
                  stringify(undef) === undef &&
                  // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                  // respectively, if the value is omitted entirely.
                  stringify() === undef &&
                  // FF 3.1b1, 2 throw an error if the given value is not a number,
                  // string, array, object, Boolean, or `null` literal. This applies to
                  // objects with custom `toJSON` methods as well, unless they are nested
                  // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                  // methods entirely.
                  stringify(value) === "1" &&
                  stringify([value]) == "[1]" &&
                  // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                  // `"[null]"`.
                  stringify([undef]) == "[null]" &&
                  // YUI 3.0.0b1 fails to serialize `null` literals.
                  stringify(null) == "null" &&
                  // FF 3.1b1, 2 halts serialization if an array contains a function:
                  // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                  // elides non-JSON values from objects and arrays, unless they
                  // define custom `toJSON` methods.
                  stringify([undef, getClass, null]) == "[null,null,null]" &&
                  // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                  // where character escape codes are expected (e.g., `\b` => `\u0008`).
                  stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                  // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                  stringify(null, value) === "1" &&
                  stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                  // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                  // serialize extended years.
                  stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                  // The milliseconds are optional in ES 5, but required in 5.1.
                  stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                  // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                  // four-digit years instead of six-digit years. Credits: @Yaffle.
                  stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                  // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                  // values less than 1000. Credits: @Yaffle.
                  stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
              } catch (exception) {
                stringifySupported = false;
              }
            }
            isSupported = stringifySupported;
          }
          // Test `JSON.parse`.
          if (name == "json-parse") {
            var parse = exports.parse;
            if (typeof parse == "function") {
              try {
                // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                // Conforming implementations should also coerce the initial argument to
                // a string prior to parsing.
                if (parse("0") === 0 && !parse(false)) {
                  // Simple parsing test.
                  value = parse(serialized);
                  var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                  if (parseSupported) {
                    try {
                      // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                      parseSupported = !parse('"\t"');
                    } catch (exception) {}
                    if (parseSupported) {
                      try {
                        // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                        // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                        // certain octal literals.
                        parseSupported = parse("01") !== 1;
                      } catch (exception) {}
                    }
                    if (parseSupported) {
                      try {
                        // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                        // points. These environments, along with FF 3.1b1 and 2,
                        // also allow trailing commas in JSON objects and arrays.
                        parseSupported = parse("1.") !== 1;
                      } catch (exception) {}
                    }
                  }
                }
              } catch (exception) {
                parseSupported = false;
              }
            }
            isSupported = parseSupported;
          }
        }
        return has[name] = !!isSupported;
      }
  
      if (!has("json")) {
        // Common `[[Class]]` name aliases.
        var functionClass = "[object Function]",
            dateClass = "[object Date]",
            numberClass = "[object Number]",
            stringClass = "[object String]",
            arrayClass = "[object Array]",
            booleanClass = "[object Boolean]";
  
        // Detect incomplete support for accessing string characters by index.
        var charIndexBuggy = has("bug-string-char-index");
  
        // Define additional utility methods if the `Date` methods are buggy.
        if (!isExtended) {
          var floor = Math.floor;
          // A mapping between the months of the year and the number of days between
          // January 1st and the first of the respective month.
          var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          // Internal: Calculates the number of days between the Unix epoch and the
          // first day of the given month.
          var getDay = function (year, month) {
            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
          };
        }
  
        // Internal: Determines if a property is a direct property of the given
        // object. Delegates to the native `Object#hasOwnProperty` method.
        if (!(isProperty = objectProto.hasOwnProperty)) {
          isProperty = function (property) {
            var members = {}, constructor;
            if ((members.__proto__ = null, members.__proto__ = {
              // The *proto* property cannot be set multiple times in recent
              // versions of Firefox and SeaMonkey.
              "toString": 1
            }, members).toString != getClass) {
              // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
              // supports the mutable *proto* property.
              isProperty = function (property) {
                // Capture and break the object's prototype chain (see section 8.6.2
                // of the ES 5.1 spec). The parenthesized expression prevents an
                // unsafe transformation by the Closure Compiler.
                var original = this.__proto__, result = property in (this.__proto__ = null, this);
                // Restore the original prototype chain.
                this.__proto__ = original;
                return result;
              };
            } else {
              // Capture a reference to the top-level `Object` constructor.
              constructor = members.constructor;
              // Use the `constructor` property to simulate `Object#hasOwnProperty` in
              // other environments.
              isProperty = function (property) {
                var parent = (this.constructor || constructor).prototype;
                return property in this && !(property in parent && this[property] === parent[property]);
              };
            }
            members = null;
            return isProperty.call(this, property);
          };
        }
  
        // Internal: Normalizes the `for...in` iteration algorithm across
        // environments. Each enumerated key is yielded to a `callback` function.
        forEach = function (object, callback) {
          var size = 0, Properties, members, property;
  
          // Tests for bugs in the current environment's `for...in` algorithm. The
          // `valueOf` property inherits the non-enumerable flag from
          // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
          (Properties = function () {
            this.valueOf = 0;
          }).prototype.valueOf = 0;
  
          // Iterate over a new instance of the `Properties` class.
          members = new Properties();
          for (property in members) {
            // Ignore all properties inherited from `Object.prototype`.
            if (isProperty.call(members, property)) {
              size++;
            }
          }
          Properties = members = null;
  
          // Normalize the iteration algorithm.
          if (!size) {
            // A list of non-enumerable properties inherited from `Object.prototype`.
            members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
            // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
            // properties.
            forEach = function (object, callback) {
              var isFunction = getClass.call(object) == functionClass, property, length;
              var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
              for (property in object) {
                // Gecko <= 1.0 enumerates the `prototype` property of functions under
                // certain conditions; IE does not.
                if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                  callback(property);
                }
              }
              // Manually invoke the callback for each non-enumerable property.
              for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
            };
          } else if (size == 2) {
            // Safari <= 2.0.4 enumerates shadowed properties twice.
            forEach = function (object, callback) {
              // Create a set of iterated properties.
              var members = {}, isFunction = getClass.call(object) == functionClass, property;
              for (property in object) {
                // Store each property name to prevent double enumeration. The
                // `prototype` property of functions is not enumerated due to cross-
                // environment inconsistencies.
                if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                  callback(property);
                }
              }
            };
          } else {
            // No bugs detected; use the standard `for...in` algorithm.
            forEach = function (object, callback) {
              var isFunction = getClass.call(object) == functionClass, property, isConstructor;
              for (property in object) {
                if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                  callback(property);
                }
              }
              // Manually invoke the callback for the `constructor` property due to
              // cross-environment inconsistencies.
              if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                callback(property);
              }
            };
          }
          return forEach(object, callback);
        };
  
        // Public: Serializes a JavaScript `value` as a JSON string. The optional
        // `filter` argument may specify either a function that alters how object and
        // array members are serialized, or an array of strings and numbers that
        // indicates which properties should be serialized. The optional `width`
        // argument may be either a string or number that specifies the indentation
        // level of the output.
        if (!has("json-stringify")) {
          // Internal: A map of control characters and their escaped equivalents.
          var Escapes = {
            92: "\\\\",
            34: '\\"',
            8: "\\b",
            12: "\\f",
            10: "\\n",
            13: "\\r",
            9: "\\t"
          };
  
          // Internal: Converts `value` into a zero-padded string such that its
          // length is at least equal to `width`. The `width` must be <= 6.
          var leadingZeroes = "000000";
          var toPaddedString = function (width, value) {
            // The `|| 0` expression is necessary to work around a bug in
            // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
            return (leadingZeroes + (value || 0)).slice(-width);
          };
  
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var quote = function (value) {
            var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
            var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
            for (; index < length; index++) {
              var charCode = value.charCodeAt(index);
              // If the character is a control character, append its Unicode or
              // shorthand escape sequence; otherwise, append the character as-is.
              switch (charCode) {
                case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                  result += Escapes[charCode];
                  break;
                default:
                  if (charCode < 32) {
                    result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                    break;
                  }
                  result += useCharIndex ? symbols[index] : value.charAt(index);
              }
            }
            return result + '"';
          };
  
          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
            try {
              // Necessary for host object support.
              value = object[property];
            } catch (exception) {}
            if (typeof value == "object" && value) {
              className = getClass.call(value);
              if (className == dateClass && !isProperty.call(value, "toJSON")) {
                if (value > -1 / 0 && value < 1 / 0) {
                  // Dates are serialized according to the `Date#toJSON` method
                  // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                  // for the ISO 8601 date time string format.
                  if (getDay) {
                    // Manually compute the year, month, date, hours, minutes,
                    // seconds, and milliseconds if the `getUTC*` methods are
                    // buggy. Adapted from @Yaffle's `date-shim` project.
                    date = floor(value / 864e5);
                    for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                    date = 1 + date - getDay(year, month);
                    // The `time` value specifies the time within the day (see ES
                    // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                    // to compute `A modulo B`, as the `%` operator does not
                    // correspond to the `modulo` operation for negative numbers.
                    time = (value % 864e5 + 864e5) % 864e5;
                    // The hours, minutes, seconds, and milliseconds are obtained by
                    // decomposing the time within the day. See section 15.9.1.10.
                    hours = floor(time / 36e5) % 24;
                    minutes = floor(time / 6e4) % 60;
                    seconds = floor(time / 1e3) % 60;
                    milliseconds = time % 1e3;
                  } else {
                    year = value.getUTCFullYear();
                    month = value.getUTCMonth();
                    date = value.getUTCDate();
                    hours = value.getUTCHours();
                    minutes = value.getUTCMinutes();
                    seconds = value.getUTCSeconds();
                    milliseconds = value.getUTCMilliseconds();
                  }
                  // Serialize extended years correctly.
                  value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                    "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                    // Months, dates, hours, minutes, and seconds should have two
                    // digits; milliseconds should have three.
                    "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                    // Milliseconds are optional in ES 5.0, but required in 5.1.
                    "." + toPaddedString(3, milliseconds) + "Z";
                } else {
                  value = null;
                }
              } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
                // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                // ignores all `toJSON` methods on these objects unless they are
                // defined directly on an instance.
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            if (value === null) {
              return "null";
            }
            className = getClass.call(value);
            if (className == booleanClass) {
              // Booleans are represented literally.
              return "" + value;
            } else if (className == numberClass) {
              // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
              // `"null"`.
              return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
            } else if (className == stringClass) {
              // Strings are double-quoted and escaped.
              return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undef ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forEach(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undef) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };
  
          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              if ((className = getClass.call(filter)) == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
              }
            }
            if (width) {
              if ((className = getClass.call(width)) == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
  
        // Public: Parses a JSON source string.
        if (!has("json-parse")) {
          var fromCharCode = String.fromCharCode;
  
          // Internal: A map of escaped control characters and their unescaped
          // equivalents.
          var Unescapes = {
            92: "\\",
            34: '"',
            47: "/",
            98: "\b",
            116: "\t",
            110: "\n",
            102: "\f",
            114: "\r"
          };
  
          // Internal: Stores the parser state.
          var Index, Source;
  
          // Internal: Resets the parser state and throws a `SyntaxError`.
          var abort = function () {
            Index = Source = null;
            throw SyntaxError();
          };
  
          // Internal: Returns the next token, or `"$"` if the parser has reached
          // the end of the source string. A token may be a string, number, `null`
          // literal, or Boolean literal.
          var lex = function () {
            var source = Source, length = source.length, value, begin, position, isSigned, charCode;
            while (Index < length) {
              charCode = source.charCodeAt(Index);
              switch (charCode) {
                case 9: case 10: case 13: case 32:
                  // Skip whitespace tokens, including tabs, carriage returns, line
                  // feeds, and space characters.
                  Index++;
                  break;
                case 123: case 125: case 91: case 93: case 58: case 44:
                  // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                  // the current position.
                  value = charIndexBuggy ? source.charAt(Index) : source[Index];
                  Index++;
                  return value;
                case 34:
                  // `"` delimits a JSON string; advance to the next character and
                  // begin parsing the string. String tokens are prefixed with the
                  // sentinel `@` character to distinguish them from punctuators and
                  // end-of-string tokens.
                  for (value = "@", Index++; Index < length;) {
                    charCode = source.charCodeAt(Index);
                    if (charCode < 32) {
                      // Unescaped ASCII control characters (those with a code unit
                      // less than the space character) are not permitted.
                      abort();
                    } else if (charCode == 92) {
                      // A reverse solidus (`\`) marks the beginning of an escaped
                      // control character (including `"`, `\`, and `/`) or Unicode
                      // escape sequence.
                      charCode = source.charCodeAt(++Index);
                      switch (charCode) {
                        case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                          // Revive escaped control characters.
                          value += Unescapes[charCode];
                          Index++;
                          break;
                        case 117:
                          // `\u` marks the beginning of a Unicode escape sequence.
                          // Advance to the first character and validate the
                          // four-digit code point.
                          begin = ++Index;
                          for (position = Index + 4; Index < position; Index++) {
                            charCode = source.charCodeAt(Index);
                            // A valid sequence comprises four hexdigits (case-
                            // insensitive) that form a single hexadecimal value.
                            if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                              // Invalid Unicode escape sequence.
                              abort();
                            }
                          }
                          // Revive the escaped character.
                          value += fromCharCode("0x" + source.slice(begin, Index));
                          break;
                        default:
                          // Invalid escape sequence.
                          abort();
                      }
                    } else {
                      if (charCode == 34) {
                        // An unescaped double-quote character marks the end of the
                        // string.
                        break;
                      }
                      charCode = source.charCodeAt(Index);
                      begin = Index;
                      // Optimize for the common case where a string is valid.
                      while (charCode >= 32 && charCode != 92 && charCode != 34) {
                        charCode = source.charCodeAt(++Index);
                      }
                      // Append the string as-is.
                      value += source.slice(begin, Index);
                    }
                  }
                  if (source.charCodeAt(Index) == 34) {
                    // Advance to the next character and return the revived string.
                    Index++;
                    return value;
                  }
                  // Unterminated string.
                  abort();
                default:
                  // Parse numbers and literals.
                  begin = Index;
                  // Advance past the negative sign, if one is specified.
                  if (charCode == 45) {
                    isSigned = true;
                    charCode = source.charCodeAt(++Index);
                  }
                  // Parse an integer or floating-point value.
                  if (charCode >= 48 && charCode <= 57) {
                    // Leading zeroes are interpreted as octal literals.
                    if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                      // Illegal octal literal.
                      abort();
                    }
                    isSigned = false;
                    // Parse the integer component.
                    for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                    // Floats cannot contain a leading decimal point; however, this
                    // case is already accounted for by the parser.
                    if (source.charCodeAt(Index) == 46) {
                      position = ++Index;
                      // Parse the decimal component.
                      for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                      if (position == Index) {
                        // Illegal trailing decimal.
                        abort();
                      }
                      Index = position;
                    }
                    // Parse exponents. The `e` denoting the exponent is
                    // case-insensitive.
                    charCode = source.charCodeAt(Index);
                    if (charCode == 101 || charCode == 69) {
                      charCode = source.charCodeAt(++Index);
                      // Skip past the sign following the exponent, if one is
                      // specified.
                      if (charCode == 43 || charCode == 45) {
                        Index++;
                      }
                      // Parse the exponential component.
                      for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                      if (position == Index) {
                        // Illegal empty exponent.
                        abort();
                      }
                      Index = position;
                    }
                    // Coerce the parsed value to a JavaScript number.
                    return +source.slice(begin, Index);
                  }
                  // A negative sign may only precede numbers.
                  if (isSigned) {
                    abort();
                  }
                  // `true`, `false`, and `null` literals.
                  if (source.slice(Index, Index + 4) == "true") {
                    Index += 4;
                    return true;
                  } else if (source.slice(Index, Index + 5) == "false") {
                    Index += 5;
                    return false;
                  } else if (source.slice(Index, Index + 4) == "null") {
                    Index += 4;
                    return null;
                  }
                  // Unrecognized token.
                  abort();
              }
            }
            // Return the sentinel `$` character if the parser has reached the end
            // of the source string.
            return "$";
          };
  
          // Internal: Parses a JSON `value` token.
          var get = function (value) {
            var results, hasMembers;
            if (value == "$") {
              // Unexpected end of input.
              abort();
            }
            if (typeof value == "string") {
              if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                // Remove the sentinel `@` character.
                return value.slice(1);
              }
              // Parse object and array literals.
              if (value == "[") {
                // Parses a JSON array, returning a new JavaScript array.
                results = [];
                for (;; hasMembers || (hasMembers = true)) {
                  value = lex();
                  // A closing square bracket marks the end of the array literal.
                  if (value == "]") {
                    break;
                  }
                  // If the array literal contains elements, the current token
                  // should be a comma separating the previous element from the
                  // next.
                  if (hasMembers) {
                    if (value == ",") {
                      value = lex();
                      if (value == "]") {
                        // Unexpected trailing `,` in array literal.
                        abort();
                      }
                    } else {
                      // A `,` must separate each array element.
                      abort();
                    }
                  }
                  // Elisions and leading commas are not permitted.
                  if (value == ",") {
                    abort();
                  }
                  results.push(get(value));
                }
                return results;
              } else if (value == "{") {
                // Parses a JSON object, returning a new JavaScript object.
                results = {};
                for (;; hasMembers || (hasMembers = true)) {
                  value = lex();
                  // A closing curly brace marks the end of the object literal.
                  if (value == "}") {
                    break;
                  }
                  // If the object literal contains members, the current token
                  // should be a comma separator.
                  if (hasMembers) {
                    if (value == ",") {
                      value = lex();
                      if (value == "}") {
                        // Unexpected trailing `,` in object literal.
                        abort();
                      }
                    } else {
                      // A `,` must separate each object member.
                      abort();
                    }
                  }
                  // Leading commas are not permitted, object property names must be
                  // double-quoted strings, and a `:` must separate each property
                  // name and value.
                  if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                    abort();
                  }
                  results[value.slice(1)] = get(lex());
                }
                return results;
              }
              // Unexpected token encountered.
              abort();
            }
            return value;
          };
  
          // Internal: Updates a traversed object member.
          var update = function (source, property, callback) {
            var element = walk(source, property, callback);
            if (element === undef) {
              delete source[property];
            } else {
              source[property] = element;
            }
          };
  
          // Internal: Recursively traverses a parsed JSON object, invoking the
          // `callback` function for each value. This is an implementation of the
          // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
          var walk = function (source, property, callback) {
            var value = source[property], length;
            if (typeof value == "object" && value) {
              // `forEach` can't be used to traverse an array in Opera <= 8.54
              // because its `Object#hasOwnProperty` implementation returns `false`
              // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
              if (getClass.call(value) == arrayClass) {
                for (length = value.length; length--;) {
                  update(value, length, callback);
                }
              } else {
                forEach(value, function (property) {
                  update(value, property, callback);
                });
              }
            }
            return callback.call(source, property, value);
          };
  
          // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
          exports.parse = function (source, callback) {
            var result, value;
            Index = 0;
            Source = "" + source;
            result = get(lex());
            // If a JSON string contains multiple tokens, it is invalid.
            if (lex() != "$") {
              abort();
            }
            // Reset the parser state.
            Index = Source = null;
            return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
          };
        }
      }
  
      exports["runInContext"] = runInContext;
      return exports;
    }
  
    if (freeExports && !isLoader) {
      // Export for CommonJS environments.
      runInContext(root, freeExports);
    } else {
      // Export for web browsers and JavaScript engines.
      var nativeJSON = root.JSON,
          previousJSON = root["JSON3"],
          isRestored = false;
  
      var JSON3 = runInContext(root, (root["JSON3"] = {
        // Public: Restores the original value of the global `JSON` object and
        // returns a reference to the `JSON3` object.
        "noConflict": function () {
          if (!isRestored) {
            isRestored = true;
            root.JSON = nativeJSON;
            root["JSON3"] = previousJSON;
            nativeJSON = previousJSON = null;
          }
          return JSON3;
        }
      }));
  
      root.JSON = {
        "parse": JSON3.parse,
        "stringify": JSON3.stringify
      };
    }
  
    // Export for asynchronous module loaders.
    if (isLoader) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return JSON3;
      }).call(exports, __webpack_require__, exports, module),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }).call(this);
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module), __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "8055":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Module dependencies.
   */
  
  var url = __webpack_require__("cc9e");
  var parser = __webpack_require__("530b");
  var Manager = __webpack_require__("78eb");
  var debug = __webpack_require__("49f7")('socket.io-client');
  
  /**
   * Module exports.
   */
  
  module.exports = exports = lookup;
  
  /**
   * Managers cache.
   */
  
  var cache = exports.managers = {};
  
  /**
   * Looks up an existing `Manager` for multiplexing.
   * If the user summons:
   *
   *   `io('http://localhost/a');`
   *   `io('http://localhost/b');`
   *
   * We reuse the existing instance based on same scheme/port/host,
   * and we initialize sockets for each namespace.
   *
   * @api public
   */
  
  function lookup (uri, opts) {
    if (typeof uri === 'object') {
      opts = uri;
      uri = undefined;
    }
  
    opts = opts || {};
  
    var parsed = url(uri);
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id].nsps;
    var newConnection = opts.forceNew || opts['force new connection'] ||
                        false === opts.multiplex || sameNamespace;
  
    var io;
  
    if (newConnection) {
      debug('ignoring socket cache for %s', source);
      io = Manager(source, opts);
    } else {
      if (!cache[id]) {
        debug('new io instance for %s', source);
        cache[id] = Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.query;
    } else if (opts && 'object' === typeof opts.query) {
      opts.query = encodeQueryString(opts.query);
    }
    return io.socket(parsed.path, opts);
  }
  /**
   *  Helper method to parse query objects to string.
   * @param {object} query
   * @returns {string}
   */
  function encodeQueryString (obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }
  /**
   * Protocol version.
   *
   * @api public
   */
  
  exports.protocol = parser.protocol;
  
  /**
   * `connect`.
   *
   * @param {String} uri
   * @api public
   */
  
  exports.connect = lookup;
  
  /**
   * Expose constructors for standalone build.
   *
   * @api public
   */
  
  exports.Manager = __webpack_require__("78eb");
  exports.Socket = __webpack_require__("2851");
  
  
  /***/ }),
  
  /***/ "83b9":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var isAbsoluteURL = __webpack_require__("d925");
  var combineURLs = __webpack_require__("e683");
  
  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  
  
  /***/ }),
  
  /***/ "8875":
  /***/ (function(module, exports, __webpack_require__) {
  
  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
  // MIT license
  // source: https://github.com/amiller-gh/currentScript-polyfill
  
  // added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505
  
  (function (root, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
          __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
          (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  }(typeof self !== 'undefined' ? self : this, function () {
    function getCurrentScript () {
      var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
      // for chrome
      if (!descriptor && 'currentScript' in document && document.currentScript) {
        return document.currentScript
      }
  
      // for other browsers with native support for currentScript
      if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
        return document.currentScript
      }
    
      // IE 8-10 support script readyState
      // IE 11+ & Firefox support stack trace
      try {
        throw new Error();
      }
      catch (err) {
        // Find the second match for the "at" string to get file src url from stack.
        var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
          ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
          stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
          scriptLocation = (stackDetails && stackDetails[1]) || false,
          line = (stackDetails && stackDetails[2]) || false,
          currentLocation = document.location.href.replace(document.location.hash, ''),
          pageSource,
          inlineScriptSourceRegExp,
          inlineScriptSource,
          scripts = document.getElementsByTagName('script'); // Live NodeList collection
    
        if (scriptLocation === currentLocation) {
          pageSource = document.documentElement.outerHTML;
          inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
          inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
        }
    
        for (var i = 0; i < scripts.length; i++) {
          // If ready state is interactive, return the script tag
          if (scripts[i].readyState === 'interactive') {
            return scripts[i];
          }
    
          // If src matches, return the script tag
          if (scripts[i].src === scriptLocation) {
            return scripts[i];
          }
    
          // If inline source matches, return the script tag
          if (
            scriptLocation === currentLocation &&
            scripts[i].innerHTML &&
            scripts[i].innerHTML.trim() === inlineScriptSource
          ) {
            return scripts[i];
          }
        }
    
        // If no match, return null
        return null;
      }
    };
  
    return getCurrentScript
  }));
  
  
  /***/ }),
  
  /***/ "8bbf":
  /***/ (function(module, exports) {
  
  module.exports = Vue;
  
  /***/ }),
  
  /***/ "8df4":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var Cancel = __webpack_require__("7a77");
  
  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
  
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
  
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
  
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };
  
  module.exports = CancelToken;
  
  
  /***/ }),
  
  /***/ "9121":
  /***/ (function(module, exports) {
  
  module.exports = toArray
  
  function toArray(list, index) {
      var array = []
  
      index = index || 0
  
      for (var i = index || 0; i < list.length; i++) {
          array[i - index] = list[i]
      }
  
      return array
  }
  
  
  /***/ }),
  
  /***/ "94ac":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  module.exports = __webpack_require__("da92");
  
  /**
   * Exports parser
   *
   * @api public
   *
   */
  module.exports.parser = __webpack_require__("fa7b");
  
  
  /***/ }),
  
  /***/ "96e4":
  /***/ (function(module, exports) {
  
  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };
  
  
  /***/ }),
  
  /***/ "a869":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {
  module.exports = isBuf;
  
  /**
   * Returns true if obj is a buffer or an arraybuffer.
   *
   * @api private
   */
  
  function isBuf(obj) {
    return (global.Buffer && global.Buffer.isBuffer(obj)) ||
           (global.ArrayBuffer && obj instanceof ArrayBuffer);
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "ad7f":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6130");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
  
  
  /***/ }),
  
  /***/ "b01b":
  /***/ (function(module, exports) {
  
  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABACAYAAACeELDCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGoWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTAxVDE3OjAxOjEwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA3LTAxVDIyOjIyOjMwKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wMVQyMjoyMjozMCswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZWI3OTQyOS0yODgyLTQ5NGYtYTc5YS01ZWY3YTYyMjkzNjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkMDY4NmY1MS05YWMxLTI0NDAtOTdiNy0xMjU3NjAwYWIxMmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1M2VmMDQyZS04NDBiLTcxNGMtOTkxZS1lOTFlZTUyZWRkZGYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1M2VmMDQyZS04NDBiLTcxNGMtOTkxZS1lOTFlZTUyZWRkZGYiIHN0RXZ0OndoZW49IjIwMjEtMDctMDFUMTc6MDE6MTArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWMzOTFjYTktODRhYi1mYTRhLTlmZjAtNDBlYzQ3NDU3NTQ4IiBzdEV2dDp3aGVuPSIyMDIxLTA3LTAxVDE3OjAxOjEwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlYjc5NDI5LTI4ODItNDk0Zi1hNzlhLTVlZjdhNjIyOTM2NyIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wMVQyMjoyMjozMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg2A+ZoAAAUUSURBVHja7Zx7aFZlHMdfKV3aTFPLvFDmNrcyIgpNpIvpbLmRFVlQahlWXipaGQnpoOxihGOVt6x1G12MLSG6gCDkJTAqWEWyWjmsQbWiIspMrD79cb6H/XZ49767vOfdec/7PPCD83tu5zmf85zn9nuekwASTsITB8EBdoATwPHAOqAxz2Q7UJkNwBcDh8hPtx0YEibgQcA35LdbHibgE3CuLuwm4hpgEbAwxnIdcAdwIAngx8IEPB2YBIyLuUwAhuqZNwcAPxoG4OOAN/OwOajW8x8IG3BlHre5CeDOsAEvy2PAY9TnhAr4ljwGPApYGjbgJQ6wA+wAO8AOcKQB7wc2AU8CG3NAaoFXgT9zAfCaHF7HPQNoizLgj2KwWD4vyoDrYgB4nAOcx4A/jAHgiqh3cvfnMNyJwNe5MEzbB2wAntAQKOqyHngZ+MNNNNxEwwF2gB1gBzhs1wH8kkXpAI7lA+CngClAITAyi3IinoX8gTgDborIWHh9XAFfERHAZ8YV8CURAXxaXAHPjwjgkoEGXB0S4N0RAfzCQAM+z5iD6tJIrUwyW4HvewD5ba1mlQJTgXOyJKXApUB9FEYRfZWdbqKRWjbJJPRBL+QT4G6l3xtDwI9nEvCXfSzUKzEGXJdJwLv7WKinYwR4eKCTL3eAM+sm4m3f3QUsJsOnjBxgmNNTXg5w39z0MAF/248VsgTQnuNw38c7eBka4JvwTnXWBGSthm/duS1Kf3M36aMu64Dbessr05OIR1IAfo7c3ysx4IfBt6QA/KwD7ADHBnARcBEwLEsPWgrMBs4P+J+scoyJG+AG+Z2bofvO1QrYqID/bOCzQDlagcvouv/sxn7cexveEdusAN6WAvDzJt4z8puaofuuVX6jjd+V5t41ms7eF1hPKNP15f24N8DHvQE8VvaoImCykSKgmM7zusmkIQXg1008/6zvFOn1gl6llbfP8U5S2ryLgR3AQa0XT5b/auBX5deuYWQCz/z+L95udZtPmfIeClyodIvxDnQfwvv/g01zthbf21S26+U/HPhC6f8CWvA2bacF3AgcUcL/jPhubgrAZao55QGZD5yVBHCxdP9/E18Be4Cj0q8KmG9+10v8IbAm0CJ9p6BNk/5wmto3R/GO4G1U3GOaET/Ob3hnNurNJOtqvLPaL0r/UU3gtJ4AfifNTGZeBj5pH3CJ9GbgMDBC+niF10pvxdsUYvNop3Mfsn/qdLD0GulVacoxK8mLaJLfCGNdtmmOqiLYJqKxN01EI/B3CsBzQwDcBnxnwocpfI15iIPAG6oAjXTuwEkAK3RdJH2h9FVpylGueLOM3wb5FUqfr6ajBXhIX09zAPC7UQfcKludH36Kwlebh+iQTa8ReE3w/F+5rFKck6SPlv5zkj5jpL7CAmCm4l1rwreaF+eHb5St7na92H0BwE25Ctg3xeySPtbEucBcP6jwCgN0pYG8AG9LVCXwk/xPNW17d4CX63q8Cf8H+DQAeL9GJQU9AfxWmja4IgOAmwLDNPu5200fDdKHmGXOwxodHFMNSwAzTPleMvncajpMTMe9iK5HtZaYNDvkV4C3V61Z+l7ljTo7WyF9V90TwO9loZObKZuW/0kvAG6g64+WliZZd61QbV2ZZFIxA7hLowjrP1gjm2pNKApN2ATdZ1KSstnauEztb4lGNrbGD9KLXGH6gJSAqzROvEeWYF+qgXuB0/NxTSEqU2UnDrADHCv5H7lRC53vqJf9AAAAAElFTkSuQmCC"
  
  /***/ }),
  
  /***/ "b0aa":
  /***/ (function(module, exports, __webpack_require__) {
  
  // Imports
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
  exports = ___CSS_LOADER_API_IMPORT___(false);
  // Module
  exports.push([module.i, ".lds-ring{display:flex;justify-content:center;align-items:center;position:relative;width:100%;height:100%}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #999797;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#999797 transparent transparent transparent}.lds-ring div:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.lds-ellipsis{display:inline-block;position:relative;width:10px;height:10px}.lds-ellipsis div{position:absolute;width:8px;height:8px;border-radius:50%;background:#fafafa;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:first-child{left:5px;-webkit-animation:lds-ellipsis1 .6s infinite;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:5px}.lds-ellipsis div:nth-child(2),.lds-ellipsis div:nth-child(3){-webkit-animation:lds-ellipsis2 .6s infinite;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:29px}.lds-ellipsis div:nth-child(4){left:53px;-webkit-animation:lds-ellipsis3 .6s infinite;animation:lds-ellipsis3 .6s infinite}@-webkit-keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}input[type=file]{position:absolute;opacity:0;z-index:-1}", ""]);
  // Exports
  module.exports = exports;
  
  
  /***/ }),
  
  /***/ "b50d":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  var settle = __webpack_require__("467f");
  var cookies = __webpack_require__("7aac");
  var buildURL = __webpack_require__("30b5");
  var buildFullPath = __webpack_require__("83b9");
  var parseHeaders = __webpack_require__("c345");
  var isURLSameOrigin = __webpack_require__("3934");
  var createError = __webpack_require__("2d83");
  
  module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
  
      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }
  
      var request = new XMLHttpRequest();
  
      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
  
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
  
      // Set the request timeout in MS
      request.timeout = config.timeout;
  
      // Listen for ready state
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
  
        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
  
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
  
        settle(resolve, reject, response);
  
        // Clean up request
        request = null;
      };
  
      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
  
        reject(createError('Request aborted', config, 'ECONNABORTED', request));
  
        // Clean up request
        request = null;
      };
  
      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));
  
        // Clean up request
        request = null;
      };
  
      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
          request));
  
        // Clean up request
        request = null;
      };
  
      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;
  
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
  
      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }
  
      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
  
      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }
  
      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }
  
      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }
  
      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
  
          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }
  
      if (!requestData) {
        requestData = null;
      }
  
      // Send the request
      request.send(requestData);
    });
  };
  
  
  /***/ }),
  
  /***/ "b9f7":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(process) {
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  
  exports = module.exports = __webpack_require__("3c09");
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome
                 && 'undefined' != typeof chrome.storage
                    ? chrome.storage.local
                    : localstorage();
  
  /**
   * Colors.
   */
  
  exports.colors = [
    'lightseagreen',
    'forestgreen',
    'goldenrod',
    'dodgerblue',
    'darkorchid',
    'crimson'
  ];
  
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  
  function useColors() {
    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return (typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style) ||
      // is firebug? http://stackoverflow.com/a/398120/376773
      (window.console && (console.firebug || (console.exception && console.table))) ||
      // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }
  
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */
  
  exports.formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };
  
  
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */
  
  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;
  
    args[0] = (useColors ? '%c' : '')
      + this.namespace
      + (useColors ? ' %c' : ' ')
      + args[0]
      + (useColors ? '%c ' : ' ')
      + '+' + exports.humanize(this.diff);
  
    if (!useColors) return args;
  
    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
  
    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
  
    args.splice(lastC, 0, c);
    return args;
  }
  
  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */
  
  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
  
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */
  
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch(e) {}
  }
  
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */
  
  function load() {
    var r;
    try {
      return exports.storage.debug;
    } catch(e) {}
  
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (typeof process !== 'undefined' && 'env' in process) {
      return Object({"NODE_ENV":"production","BASE_URL":"/"}).DEBUG;
    }
  }
  
  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */
  
  exports.enable(load());
  
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */
  
  function localstorage(){
    try {
      return window.localStorage;
    } catch (e) {}
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))
  
  /***/ }),
  
  /***/ "bc3a":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("cee4");
  
  /***/ }),
  
  /***/ "c345":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
  ];
  
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
  
    if (!headers) { return parsed; }
  
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
  
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });
  
    return parsed;
  };
  
  
  /***/ }),
  
  /***/ "c401":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  module.exports = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
  
    return data;
  };
  
  
  /***/ }),
  
  /***/ "c532":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var bind = __webpack_require__("1d2b");
  
  /*global toString:true*/
  
  // utils is a library of generic helper functions non-specific to axios
  
  var toString = Object.prototype.toString;
  
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  
  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }
  
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }
  
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }
  
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }
  
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }
  
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }
  
  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
  function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') {
      return false;
    }
  
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }
  
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
  
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  
  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  }
  
  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
  };
  
  
  /***/ }),
  
  /***/ "c8af":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  
  
  /***/ }),
  
  /***/ "c8ba":
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
  
  /***/ "c9eb":
  /***/ (function(module, exports) {
  
  
  /**
   * Module exports.
   *
   * Logic borrowed from Modernizr:
   *
   *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
   */
  
  try {
    module.exports = typeof XMLHttpRequest !== 'undefined' &&
      'withCredentials' in new XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
  }
  
  
  /***/ }),
  
  /***/ "ca99":
  /***/ (function(module, exports) {
  
  /**
   * An abstraction for slicing an arraybuffer even when
   * ArrayBuffer.prototype.slice is not supported
   *
   * @api public
   */
  
  module.exports = function(arraybuffer, start, end) {
    var bytes = arraybuffer.byteLength;
    start = start || 0;
    end = end || bytes;
  
    if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
  
    if (start < 0) { start += bytes; }
    if (end < 0) { end += bytes; }
    if (end > bytes) { end = bytes; }
  
    if (start >= bytes || start >= end || bytes === 0) {
      return new ArrayBuffer(0);
    }
  
    var abv = new Uint8Array(arraybuffer);
    var result = new Uint8Array(end - start);
    for (var i = start, ii = 0; i < end; i++, ii++) {
      result[ii] = abv[i];
    }
    return result.buffer;
  };
  
  
  /***/ }),
  
  /***/ "cc9e":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {
  /**
   * Module dependencies.
   */
  
  var parseuri = __webpack_require__("5317");
  var debug = __webpack_require__("49f7")('socket.io-client:url');
  
  /**
   * Module exports.
   */
  
  module.exports = url;
  
  /**
   * URL parser.
   *
   * @param {String} url
   * @param {Object} An object meant to mimic window.location.
   *                 Defaults to window.location.
   * @api public
   */
  
  function url (uri, loc) {
    var obj = uri;
  
    // default to window.location
    loc = loc || global.location;
    if (null == uri) uri = loc.protocol + '//' + loc.host;
  
    // relative path support
    if ('string' === typeof uri) {
      if ('/' === uri.charAt(0)) {
        if ('/' === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
  
      if (!/^(https?|wss?):\/\//.test(uri)) {
        debug('protocol-less url %s', uri);
        if ('undefined' !== typeof loc) {
          uri = loc.protocol + '//' + uri;
        } else {
          uri = 'https://' + uri;
        }
      }
  
      // parse
      debug('parse %s', uri);
      obj = parseuri(uri);
    }
  
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = '80';
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = '443';
      }
    }
  
    obj.path = obj.path || '/';
  
    var ipv6 = obj.host.indexOf(':') !== -1;
    var host = ipv6 ? '[' + obj.host + ']' : obj.host;
  
    // define unique id
    obj.id = obj.protocol + '://' + host + ':' + obj.port;
    // define href
    obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));
  
    return obj;
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "ccc1":
  /***/ (function(module, exports) {
  
  module.exports = after
  
  function after(count, callback, err_cb) {
      var bail = false
      err_cb = err_cb || noop
      proxy.count = count
  
      return (count === 0) ? callback() : proxy
  
      function proxy(err, result) {
          if (proxy.count <= 0) {
              throw new Error('after called too many times')
          }
          --proxy.count
  
          // after first error, rest are passed to err_cb
          if (err) {
              bail = true
              callback(err)
              // future error callbacks will go to error handler
              callback = err_cb
          } else if (proxy.count === 0 && !bail) {
              callback(null, result)
          }
      }
  }
  
  function noop() {}
  
  
  /***/ }),
  
  /***/ "cee4":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  var bind = __webpack_require__("1d2b");
  var Axios = __webpack_require__("0a06");
  var mergeConfig = __webpack_require__("4a7b");
  var defaults = __webpack_require__("2444");
  
  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
  
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
  
    // Copy context to instance
    utils.extend(instance, context);
  
    return instance;
  }
  
  // Create the default instance to be exported
  var axios = createInstance(defaults);
  
  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;
  
  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  };
  
  // Expose Cancel & CancelToken
  axios.Cancel = __webpack_require__("7a77");
  axios.CancelToken = __webpack_require__("8df4");
  axios.isCancel = __webpack_require__("2e67");
  
  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = __webpack_require__("0df6");
  
  // Expose isAxiosError
  axios.isAxiosError = __webpack_require__("5f02");
  
  module.exports = axios;
  
  // Allow use of default import syntax in TypeScript
  module.exports.default = axios;
  
  
  /***/ }),
  
  /***/ "d33e":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * Module requirements.
   */
  
  var XMLHttpRequest = __webpack_require__("01d3");
  var Polling = __webpack_require__("0949");
  var Emitter = __webpack_require__("d4c9");
  var inherit = __webpack_require__("62fa");
  var debug = __webpack_require__("b9f7")('engine.io-client:polling-xhr');
  
  /**
   * Module exports.
   */
  
  module.exports = XHR;
  module.exports.Request = Request;
  
  /**
   * Empty function
   */
  
  function empty () {}
  
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  
  function XHR (opts) {
    Polling.call(this, opts);
    this.requestTimeout = opts.requestTimeout;
  
    if (global.location) {
      var isSSL = 'https:' === location.protocol;
      var port = location.port;
  
      // some user agents have empty `location.port`
      if (!port) {
        port = isSSL ? 443 : 80;
      }
  
      this.xd = opts.hostname !== global.location.hostname ||
        port !== opts.port;
      this.xs = opts.secure !== isSSL;
    } else {
      this.extraHeaders = opts.extraHeaders;
    }
  }
  
  /**
   * Inherits from Polling.
   */
  
  inherit(XHR, Polling);
  
  /**
   * XHR supports binary
   */
  
  XHR.prototype.supportsBinary = true;
  
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */
  
  XHR.prototype.request = function (opts) {
    opts = opts || {};
    opts.uri = this.uri();
    opts.xd = this.xd;
    opts.xs = this.xs;
    opts.agent = this.agent || false;
    opts.supportsBinary = this.supportsBinary;
    opts.enablesXDR = this.enablesXDR;
  
    // SSL options for Node.js client
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
    opts.requestTimeout = this.requestTimeout;
  
    // other options for Node.js client
    opts.extraHeaders = this.extraHeaders;
  
    return new Request(opts);
  };
  
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */
  
  XHR.prototype.doWrite = function (data, fn) {
    var isBinary = typeof data !== 'string' && data !== undefined;
    var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
    var self = this;
    req.on('success', fn);
    req.on('error', function (err) {
      self.onError('xhr post error', err);
    });
    this.sendXhr = req;
  };
  
  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  
  XHR.prototype.doPoll = function () {
    debug('xhr poll');
    var req = this.request();
    var self = this;
    req.on('data', function (data) {
      self.onData(data);
    });
    req.on('error', function (err) {
      self.onError('xhr poll error', err);
    });
    this.pollXhr = req;
  };
  
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  
  function Request (opts) {
    this.method = opts.method || 'GET';
    this.uri = opts.uri;
    this.xd = !!opts.xd;
    this.xs = !!opts.xs;
    this.async = false !== opts.async;
    this.data = undefined !== opts.data ? opts.data : null;
    this.agent = opts.agent;
    this.isBinary = opts.isBinary;
    this.supportsBinary = opts.supportsBinary;
    this.enablesXDR = opts.enablesXDR;
    this.requestTimeout = opts.requestTimeout;
  
    // SSL options for Node.js client
    this.pfx = opts.pfx;
    this.key = opts.key;
    this.passphrase = opts.passphrase;
    this.cert = opts.cert;
    this.ca = opts.ca;
    this.ciphers = opts.ciphers;
    this.rejectUnauthorized = opts.rejectUnauthorized;
  
    // other options for Node.js client
    this.extraHeaders = opts.extraHeaders;
  
    this.create();
  }
  
  /**
   * Mix in `Emitter`.
   */
  
  Emitter(Request.prototype);
  
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */
  
  Request.prototype.create = function () {
    var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
  
    // SSL options for Node.js client
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
  
    var xhr = this.xhr = new XMLHttpRequest(opts);
    var self = this;
  
    try {
      debug('xhr open %s: %s', this.method, this.uri);
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.extraHeaders) {
          xhr.setDisableHeaderCheck(true);
          for (var i in this.extraHeaders) {
            if (this.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}
      if (this.supportsBinary) {
        // This has to be done after open because Firefox is stupid
        // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
        xhr.responseType = 'arraybuffer';
      }
  
      if ('POST' === this.method) {
        try {
          if (this.isBinary) {
            xhr.setRequestHeader('Content-type', 'application/octet-stream');
          } else {
            xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
          }
        } catch (e) {}
      }
  
      try {
        xhr.setRequestHeader('Accept', '*/*');
      } catch (e) {}
  
      // ie6 check
      if ('withCredentials' in xhr) {
        xhr.withCredentials = true;
      }
  
      if (this.requestTimeout) {
        xhr.timeout = this.requestTimeout;
      }
  
      if (this.hasXDR()) {
        xhr.onload = function () {
          self.onLoad();
        };
        xhr.onerror = function () {
          self.onError(xhr.responseText);
        };
      } else {
        xhr.onreadystatechange = function () {
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            self.onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            setTimeout(function () {
              self.onError(xhr.status);
            }, 0);
          }
        };
      }
  
      debug('xhr data %s', this.data);
      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly fhrom the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      setTimeout(function () {
        self.onError(e);
      }, 0);
      return;
    }
  
    if (global.document) {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  };
  
  /**
   * Called upon successful response.
   *
   * @api private
   */
  
  Request.prototype.onSuccess = function () {
    this.emit('success');
    this.cleanup();
  };
  
  /**
   * Called if we have data.
   *
   * @api private
   */
  
  Request.prototype.onData = function (data) {
    this.emit('data', data);
    this.onSuccess();
  };
  
  /**
   * Called upon error.
   *
   * @api private
   */
  
  Request.prototype.onError = function (err) {
    this.emit('error', err);
    this.cleanup(true);
  };
  
  /**
   * Cleans up house.
   *
   * @api private
   */
  
  Request.prototype.cleanup = function (fromError) {
    if ('undefined' === typeof this.xhr || null === this.xhr) {
      return;
    }
    // xmlhttprequest
    if (this.hasXDR()) {
      this.xhr.onload = this.xhr.onerror = empty;
    } else {
      this.xhr.onreadystatechange = empty;
    }
  
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
  
    if (global.document) {
      delete Request.requests[this.index];
    }
  
    this.xhr = null;
  };
  
  /**
   * Called upon load.
   *
   * @api private
   */
  
  Request.prototype.onLoad = function () {
    var data;
    try {
      var contentType;
      try {
        contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
      } catch (e) {}
      if (contentType === 'application/octet-stream') {
        data = this.xhr.response || this.xhr.responseText;
      } else {
        if (!this.supportsBinary) {
          data = this.xhr.responseText;
        } else {
          try {
            data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
          } catch (e) {
            var ui8Arr = new Uint8Array(this.xhr.response);
            var dataArray = [];
            for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
              dataArray.push(ui8Arr[idx]);
            }
  
            data = String.fromCharCode.apply(null, dataArray);
          }
        }
      }
    } catch (e) {
      this.onError(e);
    }
    if (null != data) {
      this.onData(data);
    }
  };
  
  /**
   * Check if it has XDomainRequest.
   *
   * @api private
   */
  
  Request.prototype.hasXDR = function () {
    return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
  };
  
  /**
   * Aborts the request.
   *
   * @api public
   */
  
  Request.prototype.abort = function () {
    this.cleanup();
  };
  
  /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */
  
  Request.requestsCount = 0;
  Request.requests = {};
  
  if (global.document) {
    if (global.attachEvent) {
      global.attachEvent('onunload', unloadHandler);
    } else if (global.addEventListener) {
      global.addEventListener('beforeunload', unloadHandler, false);
    }
  }
  
  function unloadHandler () {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "d4c9":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Expose `Emitter`.
   */
  
  if (true) {
    module.exports = Emitter;
  }
  
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */
  
  function Emitter(obj) {
    if (obj) return mixin(obj);
  };
  
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.on =
  Emitter.prototype.addEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
      .push(fn);
    return this;
  };
  
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.once = function(event, fn){
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
  
    on.fn = fn;
    this.on(event, on);
    return this;
  };
  
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.off =
  Emitter.prototype.removeListener =
  Emitter.prototype.removeAllListeners =
  Emitter.prototype.removeEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
  
    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
  
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
  
    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }
  
    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };
  
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */
  
  Emitter.prototype.emit = function(event){
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1)
      , callbacks = this._callbacks['$' + event];
  
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
  
    return this;
  };
  
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */
  
  Emitter.prototype.listeners = function(event){
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */
  
  Emitter.prototype.hasListeners = function(event){
    return !! this.listeners(event).length;
  };
  
  
  /***/ }),
  
  /***/ "d780":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * Create a blob builder even when vendor prefixes exist
   */
  
  var BlobBuilder = global.BlobBuilder
    || global.WebKitBlobBuilder
    || global.MSBlobBuilder
    || global.MozBlobBuilder;
  
  /**
   * Check if Blob constructor is supported
   */
  
  var blobSupported = (function() {
    try {
      var a = new Blob(['hi']);
      return a.size === 2;
    } catch(e) {
      return false;
    }
  })();
  
  /**
   * Check if Blob constructor supports ArrayBufferViews
   * Fails in Safari 6, so we need to map to ArrayBuffers there.
   */
  
  var blobSupportsArrayBufferView = blobSupported && (function() {
    try {
      var b = new Blob([new Uint8Array([1,2])]);
      return b.size === 2;
    } catch(e) {
      return false;
    }
  })();
  
  /**
   * Check if BlobBuilder is supported
   */
  
  var blobBuilderSupported = BlobBuilder
    && BlobBuilder.prototype.append
    && BlobBuilder.prototype.getBlob;
  
  /**
   * Helper function that maps ArrayBufferViews to ArrayBuffers
   * Used by BlobBuilder constructor and old browsers that didn't
   * support it in the Blob constructor.
   */
  
  function mapArrayBufferViews(ary) {
    for (var i = 0; i < ary.length; i++) {
      var chunk = ary[i];
      if (chunk.buffer instanceof ArrayBuffer) {
        var buf = chunk.buffer;
  
        // if this is a subarray, make a copy so we only
        // include the subarray region from the underlying buffer
        if (chunk.byteLength !== buf.byteLength) {
          var copy = new Uint8Array(chunk.byteLength);
          copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
          buf = copy.buffer;
        }
  
        ary[i] = buf;
      }
    }
  }
  
  function BlobBuilderConstructor(ary, options) {
    options = options || {};
  
    var bb = new BlobBuilder();
    mapArrayBufferViews(ary);
  
    for (var i = 0; i < ary.length; i++) {
      bb.append(ary[i]);
    }
  
    return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
  };
  
  function BlobConstructor(ary, options) {
    mapArrayBufferViews(ary);
    return new Blob(ary, options || {});
  };
  
  module.exports = (function() {
    if (blobSupported) {
      return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
    } else if (blobBuilderSupported) {
      return BlobBuilderConstructor;
    } else {
      return undefined;
    }
  })();
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "d838":
  /***/ (function(module, exports) {
  
  
  /**
   * Module exports.
   */
  
  module.exports = on;
  
  /**
   * Helper for subscriptions.
   *
   * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
   * @param {String} event name
   * @param {Function} callback
   * @api public
   */
  
  function on (obj, ev, fn) {
    obj.on(ev, fn);
    return {
      destroy: function () {
        obj.removeListener(ev, fn);
      }
    };
  }
  
  
  /***/ }),
  
  /***/ "d86e":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("4297");
  if(content.__esModule) content = content.default;
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("27e651c4", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "d925":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  
  
  /***/ }),
  
  /***/ "da56":
  /***/ (function(module, exports) {
  
  
  /**
   * Expose `Emitter`.
   */
  
  module.exports = Emitter;
  
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */
  
  function Emitter(obj) {
    if (obj) return mixin(obj);
  };
  
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.on =
  Emitter.prototype.addEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || [])
      .push(fn);
    return this;
  };
  
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.once = function(event, fn){
    var self = this;
    this._callbacks = this._callbacks || {};
  
    function on() {
      self.off(event, on);
      fn.apply(this, arguments);
    }
  
    on.fn = fn;
    this.on(event, on);
    return this;
  };
  
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.off =
  Emitter.prototype.removeListener =
  Emitter.prototype.removeAllListeners =
  Emitter.prototype.removeEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
  
    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
  
    // specific event
    var callbacks = this._callbacks[event];
    if (!callbacks) return this;
  
    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks[event];
      return this;
    }
  
    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };
  
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */
  
  Emitter.prototype.emit = function(event){
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1)
      , callbacks = this._callbacks[event];
  
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
  
    return this;
  };
  
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */
  
  Emitter.prototype.listeners = function(event){
    this._callbacks = this._callbacks || {};
    return this._callbacks[event] || [];
  };
  
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */
  
  Emitter.prototype.hasListeners = function(event){
    return !! this.listeners(event).length;
  };
  
  
  /***/ }),
  
  /***/ "da92":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * Module dependencies.
   */
  
  var transports = __webpack_require__("6a44");
  var Emitter = __webpack_require__("d4c9");
  var debug = __webpack_require__("b9f7")('engine.io-client:socket');
  var index = __webpack_require__("ee34");
  var parser = __webpack_require__("fa7b");
  var parseuri = __webpack_require__("5317");
  var parsejson = __webpack_require__("26c0");
  var parseqs = __webpack_require__("4f2a");
  
  /**
   * Module exports.
   */
  
  module.exports = Socket;
  
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  
  function Socket (uri, opts) {
    if (!(this instanceof Socket)) return new Socket(uri, opts);
  
    opts = opts || {};
  
    if (uri && 'object' === typeof uri) {
      opts = uri;
      uri = null;
    }
  
    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }
  
    this.secure = null != opts.secure ? opts.secure
      : (global.location && 'https:' === location.protocol);
  
    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? '443' : '80';
    }
  
    this.agent = opts.agent || false;
    this.hostname = opts.hostname ||
      (global.location ? location.hostname : 'localhost');
    this.port = opts.port || (global.location && location.port
        ? location.port
        : (this.secure ? 443 : 80));
    this.query = opts.query || {};
    if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
    this.upgrade = false !== opts.upgrade;
    this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
    this.forceJSONP = !!opts.forceJSONP;
    this.jsonp = false !== opts.jsonp;
    this.forceBase64 = !!opts.forceBase64;
    this.enablesXDR = !!opts.enablesXDR;
    this.timestampParam = opts.timestampParam || 't';
    this.timestampRequests = opts.timestampRequests;
    this.transports = opts.transports || ['polling', 'websocket'];
    this.readyState = '';
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.policyPort = opts.policyPort || 843;
    this.rememberUpgrade = opts.rememberUpgrade || false;
    this.binaryType = null;
    this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
    this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
  
    if (true === this.perMessageDeflate) this.perMessageDeflate = {};
    if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
      this.perMessageDeflate.threshold = 1024;
    }
  
    // SSL options for Node.js client
    this.pfx = opts.pfx || null;
    this.key = opts.key || null;
    this.passphrase = opts.passphrase || null;
    this.cert = opts.cert || null;
    this.ca = opts.ca || null;
    this.ciphers = opts.ciphers || null;
    this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
    this.forceNode = !!opts.forceNode;
  
    // other options for Node.js client
    var freeGlobal = typeof global === 'object' && global;
    if (freeGlobal.global === freeGlobal) {
      if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
        this.extraHeaders = opts.extraHeaders;
      }
  
      if (opts.localAddress) {
        this.localAddress = opts.localAddress;
      }
    }
  
    // set on handshake
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
  
    // set on heartbeat
    this.pingIntervalTimer = null;
    this.pingTimeoutTimer = null;
  
    this.open();
  }
  
  Socket.priorWebsocketSuccess = false;
  
  /**
   * Mix in `Emitter`.
   */
  
  Emitter(Socket.prototype);
  
  /**
   * Protocol version.
   *
   * @api public
   */
  
  Socket.protocol = parser.protocol; // this is an int
  
  /**
   * Expose deps for legacy compatibility
   * and standalone browser access.
   */
  
  Socket.Socket = Socket;
  Socket.Transport = __webpack_require__("19b7");
  Socket.transports = __webpack_require__("6a44");
  Socket.parser = __webpack_require__("fa7b");
  
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */
  
  Socket.prototype.createTransport = function (name) {
    debug('creating transport "%s"', name);
    var query = clone(this.query);
  
    // append engine.io protocol identifier
    query.EIO = parser.protocol;
  
    // transport name
    query.transport = name;
  
    // session id if we already have one
    if (this.id) query.sid = this.id;
  
    var transport = new transports[name]({
      agent: this.agent,
      hostname: this.hostname,
      port: this.port,
      secure: this.secure,
      path: this.path,
      query: query,
      forceJSONP: this.forceJSONP,
      jsonp: this.jsonp,
      forceBase64: this.forceBase64,
      enablesXDR: this.enablesXDR,
      timestampRequests: this.timestampRequests,
      timestampParam: this.timestampParam,
      policyPort: this.policyPort,
      socket: this,
      pfx: this.pfx,
      key: this.key,
      passphrase: this.passphrase,
      cert: this.cert,
      ca: this.ca,
      ciphers: this.ciphers,
      rejectUnauthorized: this.rejectUnauthorized,
      perMessageDeflate: this.perMessageDeflate,
      extraHeaders: this.extraHeaders,
      forceNode: this.forceNode,
      localAddress: this.localAddress
    });
  
    return transport;
  };
  
  function clone (obj) {
    var o = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = obj[i];
      }
    }
    return o;
  }
  
  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */
  Socket.prototype.open = function () {
    var transport;
    if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
      transport = 'websocket';
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      var self = this;
      setTimeout(function () {
        self.emit('error', 'No transports available');
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = 'opening';
  
    // Retry with the next transport if the transport is disabled (jsonp: false)
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
  
    transport.open();
    this.setTransport(transport);
  };
  
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */
  
  Socket.prototype.setTransport = function (transport) {
    debug('setting transport %s', transport.name);
    var self = this;
  
    if (this.transport) {
      debug('clearing existing transport %s', this.transport.name);
      this.transport.removeAllListeners();
    }
  
    // set up transport
    this.transport = transport;
  
    // set up transport listeners
    transport
    .on('drain', function () {
      self.onDrain();
    })
    .on('packet', function (packet) {
      self.onPacket(packet);
    })
    .on('error', function (e) {
      self.onError(e);
    })
    .on('close', function () {
      self.onClose('transport close');
    });
  };
  
  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */
  
  Socket.prototype.probe = function (name) {
    debug('probing transport "%s"', name);
    var transport = this.createTransport(name, { probe: 1 });
    var failed = false;
    var self = this;
  
    Socket.priorWebsocketSuccess = false;
  
    function onTransportOpen () {
      if (self.onlyBinaryUpgrades) {
        var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
        failed = failed || upgradeLosesBinary;
      }
      if (failed) return;
  
      debug('probe transport "%s" opened', name);
      transport.send([{ type: 'ping', data: 'probe' }]);
      transport.once('packet', function (msg) {
        if (failed) return;
        if ('pong' === msg.type && 'probe' === msg.data) {
          debug('probe transport "%s" pong', name);
          self.upgrading = true;
          self.emit('upgrading', transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = 'websocket' === transport.name;
  
          debug('pausing current transport "%s"', self.transport.name);
          self.transport.pause(function () {
            if (failed) return;
            if ('closed' === self.readyState) return;
            debug('changing transport and sending upgrade packet');
  
            cleanup();
  
            self.setTransport(transport);
            transport.send([{ type: 'upgrade' }]);
            self.emit('upgrade', transport);
            transport = null;
            self.upgrading = false;
            self.flush();
          });
        } else {
          debug('probe transport "%s" failed', name);
          var err = new Error('probe error');
          err.transport = transport.name;
          self.emit('upgradeError', err);
        }
      });
    }
  
    function freezeTransport () {
      if (failed) return;
  
      // Any callback called by transport should be ignored since now
      failed = true;
  
      cleanup();
  
      transport.close();
      transport = null;
    }
  
    // Handle any error that happens while probing
    function onerror (err) {
      var error = new Error('probe error: ' + err);
      error.transport = transport.name;
  
      freezeTransport();
  
      debug('probe transport "%s" failed because of error: %s', name, err);
  
      self.emit('upgradeError', error);
    }
  
    function onTransportClose () {
      onerror('transport closed');
    }
  
    // When the socket is closed while we're probing
    function onclose () {
      onerror('socket closed');
    }
  
    // When the socket is upgraded while we're probing
    function onupgrade (to) {
      if (transport && to.name !== transport.name) {
        debug('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    }
  
    // Remove all listeners on the transport and on self
    function cleanup () {
      transport.removeListener('open', onTransportOpen);
      transport.removeListener('error', onerror);
      transport.removeListener('close', onTransportClose);
      self.removeListener('close', onclose);
      self.removeListener('upgrading', onupgrade);
    }
  
    transport.once('open', onTransportOpen);
    transport.once('error', onerror);
    transport.once('close', onTransportClose);
  
    this.once('close', onclose);
    this.once('upgrading', onupgrade);
  
    transport.open();
  };
  
  /**
   * Called when connection is deemed open.
   *
   * @api public
   */
  
  Socket.prototype.onOpen = function () {
    debug('socket open');
    this.readyState = 'open';
    Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
    this.emit('open');
    this.flush();
  
    // we check for `readyState` in case an `open`
    // listener already closed the socket
    if ('open' === this.readyState && this.upgrade && this.transport.pause) {
      debug('starting upgrade probes');
      for (var i = 0, l = this.upgrades.length; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  };
  
  /**
   * Handles a packet.
   *
   * @api private
   */
  
  Socket.prototype.onPacket = function (packet) {
    if ('opening' === this.readyState || 'open' === this.readyState ||
        'closing' === this.readyState) {
      debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
  
      this.emit('packet', packet);
  
      // Socket is live - any packet counts
      this.emit('heartbeat');
  
      switch (packet.type) {
        case 'open':
          this.onHandshake(parsejson(packet.data));
          break;
  
        case 'pong':
          this.setPing();
          this.emit('pong');
          break;
  
        case 'error':
          var err = new Error('server error');
          err.code = packet.data;
          this.onError(err);
          break;
  
        case 'message':
          this.emit('data', packet.data);
          this.emit('message', packet.data);
          break;
      }
    } else {
      debug('packet received with socket readyState "%s"', this.readyState);
    }
  };
  
  /**
   * Called upon handshake completion.
   *
   * @param {Object} handshake obj
   * @api private
   */
  
  Socket.prototype.onHandshake = function (data) {
    this.emit('handshake', data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen();
    // In case open handler closes socket
    if ('closed' === this.readyState) return;
    this.setPing();
  
    // Prolong liveness of socket on heartbeat
    this.removeListener('heartbeat', this.onHeartbeat);
    this.on('heartbeat', this.onHeartbeat);
  };
  
  /**
   * Resets ping timeout.
   *
   * @api private
   */
  
  Socket.prototype.onHeartbeat = function (timeout) {
    clearTimeout(this.pingTimeoutTimer);
    var self = this;
    self.pingTimeoutTimer = setTimeout(function () {
      if ('closed' === self.readyState) return;
      self.onClose('ping timeout');
    }, timeout || (self.pingInterval + self.pingTimeout));
  };
  
  /**
   * Pings server every `this.pingInterval` and expects response
   * within `this.pingTimeout` or closes connection.
   *
   * @api private
   */
  
  Socket.prototype.setPing = function () {
    var self = this;
    clearTimeout(self.pingIntervalTimer);
    self.pingIntervalTimer = setTimeout(function () {
      debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
      self.ping();
      self.onHeartbeat(self.pingTimeout);
    }, self.pingInterval);
  };
  
  /**
  * Sends a ping packet.
  *
  * @api private
  */
  
  Socket.prototype.ping = function () {
    var self = this;
    this.sendPacket('ping', function () {
      self.emit('ping');
    });
  };
  
  /**
   * Called on `drain` event
   *
   * @api private
   */
  
  Socket.prototype.onDrain = function () {
    this.writeBuffer.splice(0, this.prevBufferLen);
  
    // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`
    this.prevBufferLen = 0;
  
    if (0 === this.writeBuffer.length) {
      this.emit('drain');
    } else {
      this.flush();
    }
  };
  
  /**
   * Flush write buffers.
   *
   * @api private
   */
  
  Socket.prototype.flush = function () {
    if ('closed' !== this.readyState && this.transport.writable &&
      !this.upgrading && this.writeBuffer.length) {
      debug('flushing %d packets in socket', this.writeBuffer.length);
      this.transport.send(this.writeBuffer);
      // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`
      this.prevBufferLen = this.writeBuffer.length;
      this.emit('flush');
    }
  };
  
  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */
  
  Socket.prototype.write =
  Socket.prototype.send = function (msg, options, fn) {
    this.sendPacket('message', msg, options, fn);
    return this;
  };
  
  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */
  
  Socket.prototype.sendPacket = function (type, data, options, fn) {
    if ('function' === typeof data) {
      fn = data;
      data = undefined;
    }
  
    if ('function' === typeof options) {
      fn = options;
      options = null;
    }
  
    if ('closing' === this.readyState || 'closed' === this.readyState) {
      return;
    }
  
    options = options || {};
    options.compress = false !== options.compress;
  
    var packet = {
      type: type,
      data: data,
      options: options
    };
    this.emit('packetCreate', packet);
    this.writeBuffer.push(packet);
    if (fn) this.once('flush', fn);
    this.flush();
  };
  
  /**
   * Closes the connection.
   *
   * @api private
   */
  
  Socket.prototype.close = function () {
    if ('opening' === this.readyState || 'open' === this.readyState) {
      this.readyState = 'closing';
  
      var self = this;
  
      if (this.writeBuffer.length) {
        this.once('drain', function () {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
  
    function close () {
      self.onClose('forced close');
      debug('socket closing - telling transport to close');
      self.transport.close();
    }
  
    function cleanupAndClose () {
      self.removeListener('upgrade', cleanupAndClose);
      self.removeListener('upgradeError', cleanupAndClose);
      close();
    }
  
    function waitForUpgrade () {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      self.once('upgrade', cleanupAndClose);
      self.once('upgradeError', cleanupAndClose);
    }
  
    return this;
  };
  
  /**
   * Called upon transport error
   *
   * @api private
   */
  
  Socket.prototype.onError = function (err) {
    debug('socket error %j', err);
    Socket.priorWebsocketSuccess = false;
    this.emit('error', err);
    this.onClose('transport error', err);
  };
  
  /**
   * Called upon transport close.
   *
   * @api private
   */
  
  Socket.prototype.onClose = function (reason, desc) {
    if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
      debug('socket close with reason: "%s"', reason);
      var self = this;
  
      // clear timers
      clearTimeout(this.pingIntervalTimer);
      clearTimeout(this.pingTimeoutTimer);
  
      // stop event from firing again for transport
      this.transport.removeAllListeners('close');
  
      // ensure transport won't stay open
      this.transport.close();
  
      // ignore further transport communication
      this.transport.removeAllListeners();
  
      // set ready state
      this.readyState = 'closed';
  
      // clear session id
      this.id = null;
  
      // emit close event
      this.emit('close', reason, desc);
  
      // clean buffers after, so users can still
      // grab the buffers on `close` event
      self.writeBuffer = [];
      self.prevBufferLen = 0;
    }
  };
  
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */
  
  Socket.prototype.filterUpgrades = function (upgrades) {
    var filteredUpgrades = [];
    for (var i = 0, j = upgrades.length; i < j; i++) {
      if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  };
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "db1a":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Expose `Emitter`.
   */
  
  if (true) {
    module.exports = Emitter;
  }
  
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */
  
  function Emitter(obj) {
    if (obj) return mixin(obj);
  };
  
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.on =
  Emitter.prototype.addEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
      .push(fn);
    return this;
  };
  
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.once = function(event, fn){
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
  
    on.fn = fn;
    this.on(event, on);
    return this;
  };
  
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.off =
  Emitter.prototype.removeListener =
  Emitter.prototype.removeAllListeners =
  Emitter.prototype.removeEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
  
    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
  
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
  
    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }
  
    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };
  
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */
  
  Emitter.prototype.emit = function(event){
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1)
      , callbacks = this._callbacks['$' + event];
  
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
  
    return this;
  };
  
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */
  
  Emitter.prototype.listeners = function(event){
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */
  
  Emitter.prototype.hasListeners = function(event){
    return !! this.listeners(event).length;
  };
  
  
  /***/ }),
  
  /***/ "df7c":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
  // backported and transplited with Babel, with backwards-compat fixes
  
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  // resolves . and .. elements in a path array with directory names there
  // must be no slashes, empty elements, or device names (c:\) in the array
  // (so also no leading and trailing slashes - it does not distinguish
  // relative and absolute paths)
  function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
  
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
      for (; up--; up) {
        parts.unshift('..');
      }
    }
  
    return parts;
  }
  
  // path.resolve([from ...], to)
  // posix version
  exports.resolve = function() {
    var resolvedPath = '',
        resolvedAbsolute = false;
  
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = (i >= 0) ? arguments[i] : process.cwd();
  
      // Skip empty and invalid entries
      if (typeof path !== 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        continue;
      }
  
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    }
  
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
  
    // Normalize the path
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
      return !!p;
    }), !resolvedAbsolute).join('/');
  
    return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
  };
  
  // path.normalize(path)
  // posix version
  exports.normalize = function(path) {
    var isAbsolute = exports.isAbsolute(path),
        trailingSlash = substr(path, -1) === '/';
  
    // Normalize the path
    path = normalizeArray(filter(path.split('/'), function(p) {
      return !!p;
    }), !isAbsolute).join('/');
  
    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
  
    return (isAbsolute ? '/' : '') + path;
  };
  
  // posix version
  exports.isAbsolute = function(path) {
    return path.charAt(0) === '/';
  };
  
  // posix version
  exports.join = function() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(filter(paths, function(p, index) {
      if (typeof p !== 'string') {
        throw new TypeError('Arguments to path.join must be strings');
      }
      return p;
    }).join('/'));
  };
  
  
  // path.relative(from, to)
  // posix version
  exports.relative = function(from, to) {
    from = exports.resolve(from).substr(1);
    to = exports.resolve(to).substr(1);
  
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }
  
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }
  
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
  
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
  
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
  
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }
  
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
  
    return outputParts.join('/');
  };
  
  exports.sep = '/';
  exports.delimiter = ':';
  
  exports.dirname = function (path) {
    if (typeof path !== 'string') path = path + '';
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }
  
    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) {
      // return '//';
      // Backwards-compat fix:
      return '/';
    }
    return path.slice(0, end);
  };
  
  function basename(path) {
    if (typeof path !== 'string') path = path + '';
  
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
  
    for (i = path.length - 1; i >= 0; --i) {
      if (path.charCodeAt(i) === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // path component
        matchedSlash = false;
        end = i + 1;
      }
    }
  
    if (end === -1) return '';
    return path.slice(start, end);
  }
  
  // Uses a mixed approach for backwards-compatibility, as ext behavior changed
  // in new Node.js versions, so only basename() above is backported here
  exports.basename = function (path, ext) {
    var f = basename(path);
    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length);
    }
    return f;
  };
  
  exports.extname = function (path) {
    if (typeof path !== 'string') path = path + '';
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }
  
    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  };
  
  function filter (xs, f) {
      if (xs.filter) return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
          if (f(xs[i], i, xs)) res.push(xs[i]);
      }
      return res;
  }
  
  // String.prototype.substr - negative index don't work in IE8
  var substr = 'ab'.substr(-1) === 'b'
      ? function (str, start, len) { return str.substr(start, len) }
      : function (str, start, len) {
          if (start < 0) start = str.length + start;
          return str.substr(start, len);
      }
  ;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))
  
  /***/ }),
  
  /***/ "e4b1":
  /***/ (function(module, exports) {
  
  /**
   * Helpers.
   */
  
  var s = 1000
  var m = s * 60
  var h = m * 60
  var d = h * 24
  var y = d * 365.25
  
  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} options
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */
  
  module.exports = function (val, options) {
    options = options || {}
    var type = typeof val
    if (type === 'string' && val.length > 0) {
      return parse(val)
    } else if (type === 'number' && isNaN(val) === false) {
      return options.long ?
        fmtLong(val) :
        fmtShort(val)
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
  }
  
  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */
  
  function parse(str) {
    str = String(str)
    if (str.length > 10000) {
      return
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
    if (!match) {
      return
    }
    var n = parseFloat(match[1])
    var type = (match[2] || 'ms').toLowerCase()
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y
      case 'days':
      case 'day':
      case 'd':
        return n * d
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n
      default:
        return undefined
    }
  }
  
  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */
  
  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + 'd'
    }
    if (ms >= h) {
      return Math.round(ms / h) + 'h'
    }
    if (ms >= m) {
      return Math.round(ms / m) + 'm'
    }
    if (ms >= s) {
      return Math.round(ms / s) + 's'
    }
    return ms + 'ms'
  }
  
  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */
  
  function fmtLong(ms) {
    return plural(ms, d, 'day') ||
      plural(ms, h, 'hour') ||
      plural(ms, m, 'minute') ||
      plural(ms, s, 'second') ||
      ms + ' ms'
  }
  
  /**
   * Pluralization helper.
   */
  
  function plural(ms, n, name) {
    if (ms < n) {
      return
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + ' ' + name
    }
    return Math.ceil(ms / n) + ' ' + name + 's'
  }
  
  
  /***/ }),
  
  /***/ "e683":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };
  
  
  /***/ }),
  
  /***/ "e8c9":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatConfigModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d86e");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatConfigModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatConfigModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatConfigModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InetchatConfigModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
  
  
  /***/ }),
  
  /***/ "eb51":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("619a");
  if(content.__esModule) content = content.default;
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("06cf7f50", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "ec72":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  
  exports = module.exports = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = __webpack_require__("5ee2");
  
  /**
   * The currently active debug mode names, and names to skip.
   */
  
  exports.names = [];
  exports.skips = [];
  
  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lowercased letter, i.e. "n".
   */
  
  exports.formatters = {};
  
  /**
   * Previously assigned color.
   */
  
  var prevColor = 0;
  
  /**
   * Previous log timestamp.
   */
  
  var prevTime;
  
  /**
   * Select a color.
   *
   * @return {Number}
   * @api private
   */
  
  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }
  
  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */
  
  function debug(namespace) {
  
    // define the `disabled` version
    function disabled() {
    }
    disabled.enabled = false;
  
    // define the `enabled` version
    function enabled() {
  
      var self = enabled;
  
      // set `diff` timestamp
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
  
      // add the `color` if not set
      if (null == self.useColors) self.useColors = exports.useColors();
      if (null == self.color && self.useColors) self.color = selectColor();
  
      var args = Array.prototype.slice.call(arguments);
  
      args[0] = exports.coerce(args[0]);
  
      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %o
        args = ['%o'].concat(args);
      }
  
      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
  
          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });
  
      if ('function' === typeof exports.formatArgs) {
        args = exports.formatArgs.apply(self, args);
      }
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;
  
    var fn = exports.enabled(namespace) ? enabled : disabled;
  
    fn.namespace = namespace;
  
    return fn;
  }
  
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */
  
  function enable(namespaces) {
    exports.save(namespaces);
  
    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;
  
    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  
  /**
   * Disable debug output.
   *
   * @api public
   */
  
  function disable() {
    exports.enable('');
  }
  
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */
  
  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */
  
  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
  
  
  /***/ }),
  
  /***/ "ee34":
  /***/ (function(module, exports) {
  
  
  var indexOf = [].indexOf;
  
  module.exports = function(arr, obj){
    if (indexOf) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };
  
  /***/ }),
  
  /***/ "f552":
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  
  exports = module.exports = debug.debug = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = __webpack_require__("e4b1");
  
  /**
   * The currently active debug mode names, and names to skip.
   */
  
  exports.names = [];
  exports.skips = [];
  
  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lowercased letter, i.e. "n".
   */
  
  exports.formatters = {};
  
  /**
   * Previously assigned color.
   */
  
  var prevColor = 0;
  
  /**
   * Previous log timestamp.
   */
  
  var prevTime;
  
  /**
   * Select a color.
   *
   * @return {Number}
   * @api private
   */
  
  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }
  
  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */
  
  function debug(namespace) {
  
    // define the `disabled` version
    function disabled() {
    }
    disabled.enabled = false;
  
    // define the `enabled` version
    function enabled() {
  
      var self = enabled;
  
      // set `diff` timestamp
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
  
      // add the `color` if not set
      if (null == self.useColors) self.useColors = exports.useColors();
      if (null == self.color && self.useColors) self.color = selectColor();
  
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
  
      args[0] = exports.coerce(args[0]);
  
      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %o
        args = ['%o'].concat(args);
      }
  
      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
  
          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });
  
      // apply env-specific formatting
      args = exports.formatArgs.apply(self, args);
  
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;
  
    var fn = exports.enabled(namespace) ? enabled : disabled;
  
    fn.namespace = namespace;
  
    return fn;
  }
  
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */
  
  function enable(namespaces) {
    exports.save(namespaces);
  
    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;
  
    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  
  /**
   * Disable debug output.
   *
   * @api public
   */
  
  function disable() {
    exports.enable('');
  }
  
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */
  
  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */
  
  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
  
  
  /***/ }),
  
  /***/ "f6b4":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__("c532");
  
  function InterceptorManager() {
    this.handlers = [];
  }
  
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  
  module.exports = InterceptorManager;
  
  
  /***/ }),
  
  /***/ "fa7b":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/**
   * Module dependencies.
   */
  
  var keys = __webpack_require__("4e7a");
  var hasBinary = __webpack_require__("fa98");
  var sliceBuffer = __webpack_require__("ca99");
  var after = __webpack_require__("ccc1");
  var utf8 = __webpack_require__("03d9");
  
  var base64encoder;
  if (global && global.ArrayBuffer) {
    base64encoder = __webpack_require__("74ea");
  }
  
  /**
   * Check if we are running an android browser. That requires us to use
   * ArrayBuffer with polling transports...
   *
   * http://ghinda.net/jpeg-blob-ajax-android/
   */
  
  var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
  
  /**
   * Check if we are running in PhantomJS.
   * Uploading a Blob with PhantomJS does not work correctly, as reported here:
   * https://github.com/ariya/phantomjs/issues/11395
   * @type boolean
   */
  var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
  
  /**
   * When true, avoids using Blobs to encode payloads.
   * @type boolean
   */
  var dontSendBlobs = isAndroid || isPhantomJS;
  
  /**
   * Current protocol version.
   */
  
  exports.protocol = 3;
  
  /**
   * Packet types.
   */
  
  var packets = exports.packets = {
      open:     0    // non-ws
    , close:    1    // non-ws
    , ping:     2
    , pong:     3
    , message:  4
    , upgrade:  5
    , noop:     6
  };
  
  var packetslist = keys(packets);
  
  /**
   * Premade error packet.
   */
  
  var err = { type: 'error', data: 'parser error' };
  
  /**
   * Create a blob api even for blob builder when vendor prefixes exist
   */
  
  var Blob = __webpack_require__("d780");
  
  /**
   * Encodes a packet.
   *
   *     <packet type id> [ <data> ]
   *
   * Example:
   *
   *     5hello world
   *     3
   *     4
   *
   * Binary is encoded in an identical principle
   *
   * @api private
   */
  
  exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
    if ('function' == typeof supportsBinary) {
      callback = supportsBinary;
      supportsBinary = false;
    }
  
    if ('function' == typeof utf8encode) {
      callback = utf8encode;
      utf8encode = null;
    }
  
    var data = (packet.data === undefined)
      ? undefined
      : packet.data.buffer || packet.data;
  
    if (global.ArrayBuffer && data instanceof ArrayBuffer) {
      return encodeArrayBuffer(packet, supportsBinary, callback);
    } else if (Blob && data instanceof global.Blob) {
      return encodeBlob(packet, supportsBinary, callback);
    }
  
    // might be an object with { base64: true, data: dataAsBase64String }
    if (data && data.base64) {
      return encodeBase64Object(packet, callback);
    }
  
    // Sending data as a utf-8 string
    var encoded = packets[packet.type];
  
    // data fragment is optional
    if (undefined !== packet.data) {
      encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
    }
  
    return callback('' + encoded);
  
  };
  
  function encodeBase64Object(packet, callback) {
    // packet data is an object { base64: true, data: dataAsBase64String }
    var message = 'b' + exports.packets[packet.type] + packet.data.data;
    return callback(message);
  }
  
  /**
   * Encode packet helpers for binary types
   */
  
  function encodeArrayBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }
  
    var data = packet.data;
    var contentArray = new Uint8Array(data);
    var resultBuffer = new Uint8Array(1 + data.byteLength);
  
    resultBuffer[0] = packets[packet.type];
    for (var i = 0; i < contentArray.length; i++) {
      resultBuffer[i+1] = contentArray[i];
    }
  
    return callback(resultBuffer.buffer);
  }
  
  function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }
  
    var fr = new FileReader();
    fr.onload = function() {
      packet.data = fr.result;
      exports.encodePacket(packet, supportsBinary, true, callback);
    };
    return fr.readAsArrayBuffer(packet.data);
  }
  
  function encodeBlob(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }
  
    if (dontSendBlobs) {
      return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
    }
  
    var length = new Uint8Array(1);
    length[0] = packets[packet.type];
    var blob = new Blob([length.buffer, packet.data]);
  
    return callback(blob);
  }
  
  /**
   * Encodes a packet with binary data in a base64 string
   *
   * @param {Object} packet, has `type` and `data`
   * @return {String} base64 encoded message
   */
  
  exports.encodeBase64Packet = function(packet, callback) {
    var message = 'b' + exports.packets[packet.type];
    if (Blob && packet.data instanceof global.Blob) {
      var fr = new FileReader();
      fr.onload = function() {
        var b64 = fr.result.split(',')[1];
        callback(message + b64);
      };
      return fr.readAsDataURL(packet.data);
    }
  
    var b64data;
    try {
      b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
    } catch (e) {
      // iPhone Safari doesn't let you apply with typed arrays
      var typed = new Uint8Array(packet.data);
      var basic = new Array(typed.length);
      for (var i = 0; i < typed.length; i++) {
        basic[i] = typed[i];
      }
      b64data = String.fromCharCode.apply(null, basic);
    }
    message += global.btoa(b64data);
    return callback(message);
  };
  
  /**
   * Decodes a packet. Changes format to Blob if requested.
   *
   * @return {Object} with `type` and `data` (if any)
   * @api private
   */
  
  exports.decodePacket = function (data, binaryType, utf8decode) {
    if (data === undefined) {
      return err;
    }
    // String data
    if (typeof data == 'string') {
      if (data.charAt(0) == 'b') {
        return exports.decodeBase64Packet(data.substr(1), binaryType);
      }
  
      if (utf8decode) {
        data = tryDecode(data);
        if (data === false) {
          return err;
        }
      }
      var type = data.charAt(0);
  
      if (Number(type) != type || !packetslist[type]) {
        return err;
      }
  
      if (data.length > 1) {
        return { type: packetslist[type], data: data.substring(1) };
      } else {
        return { type: packetslist[type] };
      }
    }
  
    var asArray = new Uint8Array(data);
    var type = asArray[0];
    var rest = sliceBuffer(data, 1);
    if (Blob && binaryType === 'blob') {
      rest = new Blob([rest]);
    }
    return { type: packetslist[type], data: rest };
  };
  
  function tryDecode(data) {
    try {
      data = utf8.decode(data);
    } catch (e) {
      return false;
    }
    return data;
  }
  
  /**
   * Decodes a packet encoded in a base64 string
   *
   * @param {String} base64 encoded message
   * @return {Object} with `type` and `data` (if any)
   */
  
  exports.decodeBase64Packet = function(msg, binaryType) {
    var type = packetslist[msg.charAt(0)];
    if (!base64encoder) {
      return { type: type, data: { base64: true, data: msg.substr(1) } };
    }
  
    var data = base64encoder.decode(msg.substr(1));
  
    if (binaryType === 'blob' && Blob) {
      data = new Blob([data]);
    }
  
    return { type: type, data: data };
  };
  
  /**
   * Encodes multiple messages (payload).
   *
   *     <length>:data
   *
   * Example:
   *
   *     11:hello world2:hi
   *
   * If any contents are binary, they will be encoded as base64 strings. Base64
   * encoded strings are marked with a b before the length specifier
   *
   * @param {Array} packets
   * @api private
   */
  
  exports.encodePayload = function (packets, supportsBinary, callback) {
    if (typeof supportsBinary == 'function') {
      callback = supportsBinary;
      supportsBinary = null;
    }
  
    var isBinary = hasBinary(packets);
  
    if (supportsBinary && isBinary) {
      if (Blob && !dontSendBlobs) {
        return exports.encodePayloadAsBlob(packets, callback);
      }
  
      return exports.encodePayloadAsArrayBuffer(packets, callback);
    }
  
    if (!packets.length) {
      return callback('0:');
    }
  
    function setLengthHeader(message) {
      return message.length + ':' + message;
    }
  
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
        doneCallback(null, setLengthHeader(message));
      });
    }
  
    map(packets, encodeOne, function(err, results) {
      return callback(results.join(''));
    });
  };
  
  /**
   * Async array map using after
   */
  
  function map(ary, each, done) {
    var result = new Array(ary.length);
    var next = after(ary.length, done);
  
    var eachWithIndex = function(i, el, cb) {
      each(el, function(error, msg) {
        result[i] = msg;
        cb(error, result);
      });
    };
  
    for (var i = 0; i < ary.length; i++) {
      eachWithIndex(i, ary[i], next);
    }
  }
  
  /*
   * Decodes data when a payload is maybe expected. Possible binary contents are
   * decoded from their base64 representation
   *
   * @param {String} data, callback method
   * @api public
   */
  
  exports.decodePayload = function (data, binaryType, callback) {
    if (typeof data != 'string') {
      return exports.decodePayloadAsBinary(data, binaryType, callback);
    }
  
    if (typeof binaryType === 'function') {
      callback = binaryType;
      binaryType = null;
    }
  
    var packet;
    if (data == '') {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }
  
    var length = ''
      , n, msg;
  
    for (var i = 0, l = data.length; i < l; i++) {
      var chr = data.charAt(i);
  
      if (':' != chr) {
        length += chr;
      } else {
        if ('' == length || (length != (n = Number(length)))) {
          // parser error - ignoring payload
          return callback(err, 0, 1);
        }
  
        msg = data.substr(i + 1, n);
  
        if (length != msg.length) {
          // parser error - ignoring payload
          return callback(err, 0, 1);
        }
  
        if (msg.length) {
          packet = exports.decodePacket(msg, binaryType, true);
  
          if (err.type == packet.type && err.data == packet.data) {
            // parser error in individual packet - ignoring payload
            return callback(err, 0, 1);
          }
  
          var ret = callback(packet, i + n, l);
          if (false === ret) return;
        }
  
        // advance cursor
        i += n;
        length = '';
      }
    }
  
    if (length != '') {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }
  
  };
  
  /**
   * Encodes multiple messages (payload) as binary.
   *
   * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
   * 255><data>
   *
   * Example:
   * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
   *
   * @param {Array} packets
   * @return {ArrayBuffer} encoded payload
   * @api private
   */
  
  exports.encodePayloadAsArrayBuffer = function(packets, callback) {
    if (!packets.length) {
      return callback(new ArrayBuffer(0));
    }
  
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, true, true, function(data) {
        return doneCallback(null, data);
      });
    }
  
    map(packets, encodeOne, function(err, encodedPackets) {
      var totalLength = encodedPackets.reduce(function(acc, p) {
        var len;
        if (typeof p === 'string'){
          len = p.length;
        } else {
          len = p.byteLength;
        }
        return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
      }, 0);
  
      var resultArray = new Uint8Array(totalLength);
  
      var bufferIndex = 0;
      encodedPackets.forEach(function(p) {
        var isString = typeof p === 'string';
        var ab = p;
        if (isString) {
          var view = new Uint8Array(p.length);
          for (var i = 0; i < p.length; i++) {
            view[i] = p.charCodeAt(i);
          }
          ab = view.buffer;
        }
  
        if (isString) { // not true binary
          resultArray[bufferIndex++] = 0;
        } else { // true binary
          resultArray[bufferIndex++] = 1;
        }
  
        var lenStr = ab.byteLength.toString();
        for (var i = 0; i < lenStr.length; i++) {
          resultArray[bufferIndex++] = parseInt(lenStr[i]);
        }
        resultArray[bufferIndex++] = 255;
  
        var view = new Uint8Array(ab);
        for (var i = 0; i < view.length; i++) {
          resultArray[bufferIndex++] = view[i];
        }
      });
  
      return callback(resultArray.buffer);
    });
  };
  
  /**
   * Encode as Blob
   */
  
  exports.encodePayloadAsBlob = function(packets, callback) {
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, true, true, function(encoded) {
        var binaryIdentifier = new Uint8Array(1);
        binaryIdentifier[0] = 1;
        if (typeof encoded === 'string') {
          var view = new Uint8Array(encoded.length);
          for (var i = 0; i < encoded.length; i++) {
            view[i] = encoded.charCodeAt(i);
          }
          encoded = view.buffer;
          binaryIdentifier[0] = 0;
        }
  
        var len = (encoded instanceof ArrayBuffer)
          ? encoded.byteLength
          : encoded.size;
  
        var lenStr = len.toString();
        var lengthAry = new Uint8Array(lenStr.length + 1);
        for (var i = 0; i < lenStr.length; i++) {
          lengthAry[i] = parseInt(lenStr[i]);
        }
        lengthAry[lenStr.length] = 255;
  
        if (Blob) {
          var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
          doneCallback(null, blob);
        }
      });
    }
  
    map(packets, encodeOne, function(err, results) {
      return callback(new Blob(results));
    });
  };
  
  /*
   * Decodes data when a payload is maybe expected. Strings are decoded by
   * interpreting each byte as a key code for entries marked to start with 0. See
   * description of encodePayloadAsBinary
   *
   * @param {ArrayBuffer} data, callback method
   * @api public
   */
  
  exports.decodePayloadAsBinary = function (data, binaryType, callback) {
    if (typeof binaryType === 'function') {
      callback = binaryType;
      binaryType = null;
    }
  
    var bufferTail = data;
    var buffers = [];
  
    var numberTooLong = false;
    while (bufferTail.byteLength > 0) {
      var tailArray = new Uint8Array(bufferTail);
      var isString = tailArray[0] === 0;
      var msgLength = '';
  
      for (var i = 1; ; i++) {
        if (tailArray[i] == 255) break;
  
        if (msgLength.length > 310) {
          numberTooLong = true;
          break;
        }
  
        msgLength += tailArray[i];
      }
  
      if(numberTooLong) return callback(err, 0, 1);
  
      bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
      msgLength = parseInt(msgLength);
  
      var msg = sliceBuffer(bufferTail, 0, msgLength);
      if (isString) {
        try {
          msg = String.fromCharCode.apply(null, new Uint8Array(msg));
        } catch (e) {
          // iPhone Safari doesn't let you apply to typed arrays
          var typed = new Uint8Array(msg);
          msg = '';
          for (var i = 0; i < typed.length; i++) {
            msg += String.fromCharCode(typed[i]);
          }
        }
      }
  
      buffers.push(msg);
      bufferTail = sliceBuffer(bufferTail, msgLength);
    }
  
    var total = buffers.length;
    buffers.forEach(function(buffer, i) {
      callback(exports.decodePacket(buffer, binaryType, true), i, total);
    });
  };
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ }),
  
  /***/ "fa98":
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {
  /*
   * Module requirements.
   */
  
  var isArray = __webpack_require__("2392");
  
  /**
   * Module exports.
   */
  
  module.exports = hasBinary;
  
  /**
   * Checks for binary data.
   *
   * Right now only Buffer and ArrayBuffer are supported..
   *
   * @param {Object} anything
   * @api public
   */
  
  function hasBinary(data) {
  
    function _hasBinary(obj) {
      if (!obj) return false;
  
      if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
           (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
           (global.Blob && obj instanceof Blob) ||
           (global.File && obj instanceof File)
          ) {
        return true;
      }
  
      if (isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            if (_hasBinary(obj[i])) {
                return true;
            }
        }
      } else if (obj && 'object' == typeof obj) {
        // see: https://github.com/Automattic/has-binary/pull/4
        if (obj.toJSON && 'function' == typeof obj.toJSON) {
          obj = obj.toJSON();
        }
  
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
            return true;
          }
        }
      }
  
      return false;
    }
  
    return _hasBinary(data);
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=v-inetchat-ad.js.map