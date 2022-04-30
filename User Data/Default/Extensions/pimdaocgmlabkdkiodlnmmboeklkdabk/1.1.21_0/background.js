! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 307)
}({
    10: function(e, t) {
        var r, n, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                r = i
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var c, l = [],
            u = !1,
            f = -1;

        function d() {
            u && c && (u = !1, c.length ? l = c.concat(l) : f = -1, l.length && p())
        }

        function p() {
            if (!u) {
                var e = s(d);
                u = !0;
                for (var t = l.length; t;) {
                    for (c = l, l = []; ++f < t;) c && c[f].run();
                    f = -1, t = l.length
                }
                c = null, u = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            l.push(new h(e, t)), 1 !== l.length || u || s(p)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    },
    11: function(e, t, r) {
        "use strict";
        r(3);
        window.log = new class {
            constructor() {
                this.env = "production"
            }
            debug() {
                "production" !== this.env && console.info(...arguments)
            }
            info() {
                console.info(...arguments)
            }
            warn() {
                console.warn(...arguments)
            }
            error() {
                console.error(...arguments)
            }
        }
    },
    12: function(e, t, r) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                return e.apply(t, r)
            }
        }
    },
    13: function(e, t, r) {
        "use strict";
        var n = r(6);

        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, r) {
            if (!t) return e;
            var i;
            if (r) i = r(t);
            else if (n.isURLSearchParams(t)) i = t.toString();
            else {
                var a = [];
                n.forEach(t, (function(e, t) {
                    null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, (function(e) {
                        n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                    })))
                })), i = a.join("&")
            }
            if (i) {
                var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    },
    14: function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    },
    15: function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(6),
                o = r(29),
                i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function a(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var s, c = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (s = r(16)), s),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"), o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            c.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, n.forEach(["delete", "get", "head"], (function(e) {
                c.headers[e] = {}
            })), n.forEach(["post", "put", "patch"], (function(e) {
                c.headers[e] = n.merge(i)
            })), e.exports = c
        }).call(this, r(10))
    },
    16: function(e, t, r) {
        "use strict";
        var n = r(6),
            o = r(30),
            i = r(13),
            a = r(32),
            s = r(35),
            c = r(36),
            l = r(17);
        e.exports = function(e) {
            return new Promise((function(t, u) {
                var f = e.data,
                    d = e.headers;
                n.isFormData(f) && delete d["Content-Type"];
                var p = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || "",
                        m = e.auth.password || "";
                    d.Authorization = "Basic " + btoa(h + ":" + m)
                }
                var g = a(e.baseURL, e.url);
                if (p.open(e.method.toUpperCase(), i(g, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                        if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var r = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                                n = {
                                    data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                    status: p.status,
                                    statusText: p.statusText,
                                    headers: r,
                                    config: e,
                                    request: p
                                };
                            o(t, u, n), p = null
                        }
                    }, p.onabort = function() {
                        p && (u(l("Request aborted", e, "ECONNABORTED", p)), p = null)
                    }, p.onerror = function() {
                        u(l("Network Error", e, null, p)), p = null
                    }, p.ontimeout = function() {
                        var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), u(l(t, e, "ECONNABORTED", p)), p = null
                    }, n.isStandardBrowserEnv()) {
                    var y = r(37),
                        b = (e.withCredentials || c(g)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                    b && (d[e.xsrfHeaderName] = b)
                }
                if ("setRequestHeader" in p && n.forEach(d, (function(e, t) {
                        void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                    })), n.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
                    p.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                    p && (p.abort(), u(e), p = null)
                })), void 0 === f && (f = null), p.send(f)
            }))
        }
    },
    17: function(e, t, r) {
        "use strict";
        var n = r(31);
        e.exports = function(e, t, r, o, i) {
            var a = new Error(e);
            return n(a, t, r, o, i)
        }
    },
    18: function(e, t, r) {
        "use strict";
        var n = r(6);
        e.exports = function(e, t) {
            t = t || {};
            var r = {},
                o = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            n.forEach(o, (function(e) {
                void 0 !== t[e] && (r[e] = t[e])
            })), n.forEach(i, (function(o) {
                n.isObject(t[o]) ? r[o] = n.deepMerge(e[o], t[o]) : void 0 !== t[o] ? r[o] = t[o] : n.isObject(e[o]) ? r[o] = n.deepMerge(e[o]) : void 0 !== e[o] && (r[o] = e[o])
            })), n.forEach(a, (function(n) {
                void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n])
            }));
            var s = o.concat(i).concat(a),
                c = Object.keys(t).filter((function(e) {
                    return -1 === s.indexOf(e)
                }));
            return n.forEach(c, (function(n) {
                void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n])
            })), r
        }
    },
    19: function(e, t, r) {
        "use strict";

        function n(e) {
            this.message = e
        }
        n.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, e.exports = n
    },
    23: function(e, t) {
        String.prototype.format = function() {
            const e = arguments;
            return this.replace(/{(\d+)}/g, (function(t, r) {
                return void 0 !== e[r] ? e[r] : t
            }))
        }, Array.prototype.avg = function() {
            if (!this.length) return 0;
            const e = this.filter(e => !isNaN(e) && null !== e),
                t = e.length;
            return 0 == t ? 0 : e.reduce((e, t) => e + t) / t
        }, Array.prototype.sum = function() {
            return this.filter(e => !isNaN(e) && null !== e).reduce((e, t) => e + t, 0)
        }, Array.prototype.min = function() {
            return this.length ? this.filter(e => !isNaN(e) && null !== e).reduce((e, t) => Math.min(e, t)) : void 0
        }, Array.prototype.max = function() {
            return this.length ? this.filter(e => !isNaN(e) && null !== e).reduce((e, t) => Math.max(e, t)) : void 0
        }
    },
    24: function(e, t, r) {
        "use strict";
        var n = r(6),
            o = r(12),
            i = r(25),
            a = r(18);

        function s(e) {
            var t = new i(e),
                r = o(i.prototype.request, t);
            return n.extend(r, i.prototype, t), n.extend(r, t), r
        }
        var c = s(r(15));
        c.Axios = i, c.create = function(e) {
            return s(a(c.defaults, e))
        }, c.Cancel = r(19), c.CancelToken = r(38), c.isCancel = r(14), c.all = function(e) {
            return Promise.all(e)
        }, c.spread = r(39), e.exports = c, e.exports.default = c
    },
    25: function(e, t, r) {
        "use strict";
        var n = r(6),
            o = r(13),
            i = r(26),
            a = r(27),
            s = r(18);

        function c(e) {
            this.defaults = e, this.interceptors = {
                request: new i,
                response: new i
            }
        }
        c.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [a, void 0],
                r = Promise.resolve(e);
            for (this.interceptors.request.forEach((function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                })), this.interceptors.response.forEach((function(e) {
                    t.push(e.fulfilled, e.rejected)
                })); t.length;) r = r.then(t.shift(), t.shift());
            return r
        }, c.prototype.getUri = function(e) {
            return e = s(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, n.forEach(["delete", "get", "head", "options"], (function(e) {
            c.prototype[e] = function(t, r) {
                return this.request(n.merge(r || {}, {
                    method: e,
                    url: t
                }))
            }
        })), n.forEach(["post", "put", "patch"], (function(e) {
            c.prototype[e] = function(t, r, o) {
                return this.request(n.merge(o || {}, {
                    method: e,
                    url: t,
                    data: r
                }))
            }
        })), e.exports = c
    },
    26: function(e, t, r) {
        "use strict";
        var n = r(6);

        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, o.prototype.forEach = function(e) {
            n.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }))
        }, e.exports = o
    },
    27: function(e, t, r) {
        "use strict";
        var n = r(6),
            o = r(28),
            i = r(14),
            a = r(15);

        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return s(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                delete e.headers[t]
            })), (e.adapter || a.adapter)(e).then((function(t) {
                return s(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }), (function(t) {
                return i(t) || (s(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            }))
        }
    },
    28: function(e, t, r) {
        "use strict";
        var n = r(6);
        e.exports = function(e, t, r) {
            return n.forEach(r, (function(r) {
                e = r(e, t)
            })), e
        }
    },
    29: function(e, t, r) {
        "use strict";
        var n = r(6);
        e.exports = function(e, t) {
            n.forEach(e, (function(r, n) {
                n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n])
            }))
        }
    },
    3: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return n
        })), r.d(t, "c", (function() {
            return o
        })), r.d(t, "a", (function() {
            return i
        }));
        const n = {
                isNumber: e => e && /^[\d\,\.]+$/i.test(e.trim()),
                isAmazonPage: e => e && /^https:\/\/(www\.)*amazon\.(com|ca|co.uk|com.au|in|ae)\//i.test(e.trim()),
                getAmazonDomain(e) {
                    if (e && this.isAmazonPage(e)) {
                        const t = e.trim().toLowerCase().match(/^https:\/\/www.amazon\.(com|ca|co.uk|com.au|in|ae)\//i),
                            r = 2 === t.length ? t[1] : null;
                        return r ? r.replace(".", "_") : null
                    }
                },
                isAmazonSearchPage(e) {
                    return this.isAmazonPage(e) && /\/s(\/)*/i.test(e.trim())
                },
                isAmazonCategoryPage(e) {
                    return this.isAmazonPage(e) && /((\/gp\/browse)+|(\/b[\/\?]))[\S]*(node=[\d]+)+/i.test(e.trim())
                },
                isProductPage: e => /\/dp\/[a-zA-Z0-9]{10,12}(\/)*/i.test(e.trim()),
                isRedirectPage: e => /\/gp\/slredirect\//i.test(e.trim())
            },
            o = {
                async queue(e, t, r = 2) {
                    const n = new Array(e.length);
                    let o = 0;
                    async function i(r, a) {
                        await t(r).then(t => {
                            if (n[a] = t, o < e.length) return i(e[o], o++)
                        })
                    }
                    const a = [];
                    for (o = 0; o < r && o < e.length; o++) a.push(i(e[o], o));
                    return await Promise.all(a), n
                },
                wait(e, t = 100) {
                    const r = () => new Promise(n => {
                        const o = e();
                        o ? n(o) : setTimeout(() => {
                            r().then(e => n(e))
                        }, t)
                    });
                    return r()
                },
                sleep: e => new Promise(t => setTimeout(t, e)),
                randomInteger(e, t) {
                    const r = e && !t ? 0 : e < t ? e : t,
                        n = e && !t ? e : e < t ? t : e,
                        o = r + Math.random() * (n + 1 - r);
                    return Math.floor(o)
                },
                randomElement(e) {
                    return e[this.randomInteger(e.length - 1)]
                },
                randomString(e, t = "") {
                    for (var r = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + t, o = n.length, i = 0; i < e; i++) r += n.charAt(Math.floor(Math.random() * o));
                    return r
                },
                nvl() {
                    for (let e = 0; e < arguments.length; e++) {
                        const t = arguments[e];
                        if (null != t) return t
                    }
                },
                toInteger(e, t = 0) {
                    try {
                        const r = e.replace(/[\s#$£,\.]/gi, "").trim();
                        return isNaN(r) ? t : parseInt(r)
                    } catch (e) {
                        return t
                    }
                },
                toFloat(e, t = 0) {
                    try {
                        const r = e.replace(/[\s#$£,]/gi, "").trim();
                        return isNaN(r) ? t : parseFloat(r)
                    } catch (e) {
                        return t
                    }
                },
                clone: e => JSON.parse(JSON.stringify(e)),
                copyObjectValues(e, t) {
                    Object.entries(t).forEach(([t, r]) => {
                        null == r ? e[t] = r : Array.isArray(r) || ("string" == typeof r ? e[t] = r : "object" == typeof r ? (null == e[t] && (e[t] = {}), this.copyObjectValues(e[t], r)) : e[t] = r)
                    })
                },
                sumArray: e => e.reduce((e, t) => e + t, 0),
                multArray: e => e.filter(e => e > 0).reduce((e, t) => e * t, 1),
                getCookie(e) {
                    var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
                    return t ? t[2] : null
                }
            },
            i = {
                getInnerText: e => [].reduce.call(e.childNodes, (function(e, t) {
                    return e + (3 === t.nodeType ? t.textContent : "")
                }), "").trim(),
                getPrice(e) {
                    let t, r;
                    if (e) {
                        let n = this.getInnerText(e);
                        if (n && n.length > 0) {
                            let e = n.split("-");
                            if (2 === e.length && (n = e[0].trim()), e = n.split(/\s|&nbsp;/i), 2 === e.length) t = o.toFloat(e[1]), r = e[0];
                            else {
                                const e = n.match(/[\d\.\,]+/i);
                                1 === e.length && (t = o.toFloat(e[0]), r = n.replace(e[0], "").trim())
                            }
                        }
                    }
                    return {
                        price: t,
                        currency: r
                    }
                },
                getPriceWhole(e) {
                    if (!e || 0 === e.length) return;
                    const t = e.querySelector(".a-price-symbol");
                    let r = e.querySelector(".a-price-whole"),
                        n = e.querySelector(".a-price-fraction");
                    if (t && r) {
                        r = this.getInnerText(r), n = n ? this.getInnerText(n) : null;
                        let e = n ? r + "." + n : r;
                        return e = o.toFloat(e), {
                            price: e,
                            currency: this.getInnerText(t)
                        }
                    }
                },
                getRating(e) {
                    if (e) {
                        const t = e.innerText.match(/^[\d\,\.]+/)[0];
                        return o.toFloat(t, t)
                    }
                }
            }
    },
    30: function(e, t, r) {
        "use strict";
        var n = r(17);
        e.exports = function(e, t, r) {
            var o = r.config.validateStatus;
            !o || o(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r))
        }
    },
    307: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "bgMessageHandler", (function() {
            return n
        })), r.d(t, "lifecycleHandler", (function() {
            return a
        })), r.d(t, "analyticsService", (function() {
            return i
        })), r.d(t, "parserService", (function() {
            return A
        }));
        r(11), r(23);
        const n = new class {
            constructor() {
                this.listeners = {}, chrome.runtime.onMessage.addListener((e, t, r) => {
                    const n = t.url,
                        o = t.origin;
                    if (e.service && e.method) return this.do(e, {
                        referer: n,
                        origin: o
                    }).then(e => {
                        r({
                            completed: !0,
                            result: e
                        })
                    }).catch(e => {
                        log.error(e), r({
                            completed: !1,
                            error: e
                        })
                    }), !0;
                    r({
                        completed: !1,
                        error: "Service and method not specified."
                    })
                })
            }
            do(e, t) {
                return new Promise((r, n) => {
                    const o = this.listeners[e.service];
                    o ? o[e.method](...e.params, t).then(e => r(e)).catch(e => n(e)) : n(`Service "${e.service}" was not found.`)
                })
            }
            addListener(e, t) {
                this.listeners[e] = t
            }
        };
        class o {
            constructor(e) {
                n.addListener(e, this)
            }
        }
        const i = new class extends o {
            constructor() {
                super("AnalyticsService"), this.init()
            }
            init() {
                const e = document.createElement("iframe");
                e.style.display = "none", e.onerror = e.onabort = () => {
                    e.src = "", this.gtag = void 0
                }, e.src = "https://smartscout.top/sp/gtag.html", document.body.append(e), this.gtag = e.contentWindow
            }
            async track(e) {
                log.debug("trackEvent", e), this.gtag && this.gtag.postMessage(JSON.stringify(e), "*")
            }
        };
        const a = new class {
            constructor() {
                chrome.runtime.onInstalled.addListener((function(e) {
                    if ("install" === e.reason) log.debug("This is a first install!"), chrome.tabs.create({
                        url: "https://www.amazon.com/s?k=body+massager"
                    }), i.track({
                        category: "SSVF|lifecycle",
                        action: "install"
                    });
                    else if ("update" === e.reason) {
                        var t = chrome.runtime.getManifest().version;
                        log.debug(`Updated from ${e.previousVersion} to ${t}!`)
                    }
                }));
                chrome.runtime.setUninstallURL("https://smartscout.top/sp/uninstall.html?extension=SSVF"), chrome.tabs.onUpdated.addListener((e, t, r) => {
                    t.url && chrome.tabs.sendMessage(e, {
                        message: "URL_CHANGED",
                        url: t.url
                    })
                })
            }
        };
        var s = r(9),
            c = r.n(s),
            l = r(3);
        class u {
            constructor() {
                this.cookies = {}
            }
            get(e) {
                return this.cookies[e]
            }
            set(e, t) {
                return this.cookies[e] = t, this
            }
            remove(e) {
                return delete this.cookies[e], this
            }
            build() {
                let e = "";
                for (let [t, r] of Object.entries(this.cookies)) e += `${t}=${r}; `;
                return e
            }
        }
        const f = {},
            d = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1} Edge/{6}.{5}", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (Macintosh; Intel Mac OS X {6}_{3}_{7}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (X11; CrOS x86_64 {4}.{5}.{7}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Safari/{0}.{1}", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:{2}.{3}) Gecko/20100101 Firefox/{2}.{3}", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:{2}.{3}) Gecko/20100101 Firefox/{2}.{3}", "Mozilla/5.0 (X11; Linux i686; rv:{2}.{3}) Gecko/20100101 Firefox/{2}.{3}", "Mozilla/5.0 (Linux x86_64; rv:{2}.{3}) Gecko/20100101 Firefox/{2}.{3}", "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:{2}.{3}) Gecko/20100101 Firefox/{2}.{3}", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:{2}.{3}) Gecko/20100101 Firefox/{2}.{3}.{1}", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} YaBrowser/{8}.{7}.{3}.{5} (beta) Yowser/2.5 Safari/{0}.{1}", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} YaBrowser/{8}.{7}.{3}.{5} (beta) Yowser/2.5 Safari/{0}.{1}"],
            p = ["Mozilla/5.0 (iPhone; CPU iPhone OS {6}_{3}_{7} like Mac OS X) AppleWebKit/{0}.{1} (KHTML, like Gecko) CriOS/{2}.{3}.{4}.{5} Mobile/{7}A{0} Safari/{0}.{1}", "Mozilla/5.0 (iPad; CPU OS {6}_{3}_{7} like Mac OS X) AppleWebKit/{0}.{1} (KHTML, like Gecko) CriOS/{2}.{3}.{4}.{5} Mobile/{7}A{0} Safari/{0}.{1}", "Mozilla/5.0 (iPod; CPU iPhone OS {6}_{3}_{7} like Mac OS X) AppleWebKit/{0}.{1} (KHTML, like Gecko) CriOS/{2}.{3}.{4}.{5} Mobile/{7}A{0} Safari/{0}.{1}", "Mozilla/5.0 (Linux; Android {9}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Mobile Safari/{0}.{1}", "Mozilla/5.0 (Linux; Android {9}; SM-{10}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Mobile Safari/{0}.{1}", "Mozilla/5.0 (Linux; Android {9}; LM-{10}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Mobile Safari/{0}.{1}", "Mozilla/5.0 (Linux; Android {9}; Nexus 6P Build/{10}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Mobile Safari/{0}.{1}", "Mozilla/5.0 (Linux; Android {9}; HTC One X10 Build/{10}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Mobile Safari/{0}.{1}", "Mozilla/5.0 (Linux; Android {9}; Lenovo Build/{10}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} Mobile Safari/{0}.{1}", "Mozilla/5.0 (iPhone; CPU iPhone OS 10_15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/24.0 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Android {9}; Mobile; rv:{2}.{3}) Gecko/{2}.{3} Firefox/{2}.{3}", "Mozilla/5.0 (Android {9}; Mobile; LG-{10}; rv:{2}.{3}) Gecko/{2}.{3} Firefox/{2}.{3}", "Mozilla/5.0 (iPhone; CPU iPhone OS {6}_{3}_{7} like Mac OS X) AppleWebKit/{0}.{1} (KHTML, like Gecko) Version/{6}.{3} YaBrowser/{8}.{7}.{3}.{5} Mobile/{7}A{0} Safari/{0}.{1}", "Mozilla/5.0 (Linux; arm_64; Android {9}; SM-{10}) AppleWebKit/{0}.{1} (KHTML, like Gecko) Chrome/{2}.{3}.{4}.{5} YaBrowser/{8}.{7}.{3}.{5} Mobile Safari/{0}.{1}"];
        class h {
            constructor(e) {
                this.headers = {}, e && e.forEach(e => {
                    const t = e.name.toLowerCase();
                    "set-cookie" === t ? (this.headers["set-cookie"] || (this.headers["set-cookie"] = []), this.headers["set-cookie"].push(e.value)) : this.headers[t] = e.value
                })
            }
            get(e) {
                return this.headers[e]
            }
            set(e, t) {
                return this.headers[e] = t, this
            }
            remove(e) {
                return delete this.headers[e], this
            }
            build() {
                const e = [];
                return Object.entries(this.headers).forEach(([t, r]) => {
                    e.push({
                        name: t,
                        value: r
                    })
                }), e
            }
        }
        const m = {
                urls: ["<all_urls>"],
                types: ["xmlhttprequest"]
            },
            g = {};
        chrome.webRequest.onBeforeSendHeaders.addListener(e => {
            const t = new h(e.requestHeaders).get("ss-amazon-client-key");
            if (t) {
                let r = f[t];
                if (r) {
                    g[e.requestId] = t;
                    const n = r.headers.mobile ? r.headers.mobileUserAgent : r.headers.userAgent,
                        o = (new h).set("Origin", r.headers.origin).set("Referer", r.headers.referer).set("User-Agent", n).set("X-Forwarded-For", r.ip).set("X-Real-IP", r.ip).set("True-Client-IP", r.ip).set("Accept", r.headers.accept).set("Accept-Encoding", "gzip, deflate, br").set("Accept-Language", "en-US,en;q=0.9").set("Cache-Control", "max-age=0").set("Upgrade-Insecure-Requests", "1").set("Sec-Fetch-Dest", "document").set("Sec-Fetch-Mode", "navigate").set("Sec-Fetch-Site", "same-origin").set("downlink", "10").set("ect", "4g").set("rtt", "100");
                    return r.headers.noCookies || o.set("Cookie", r.cookies.build()), r.headers.contentType && o.set("Content-Type", r.headers.contentType), r.headers.scrf && o.set("anti-csrftoken-a2z", r.headers.scrf), {
                        requestHeaders: o.build()
                    }
                }
            }
            return {
                requestHeaders: e.requestHeaders
            }
        }, m, ["blocking", "requestHeaders", "extraHeaders"]), chrome.webRequest.onHeadersReceived.addListener(e => {
            const t = g[e.requestId];
            if (t) {
                let r = f[t];
                if (r) {
                    const t = new h(e.responseHeaders).get("set-cookie");
                    t && t.map(e => {
                        const t = e.match(/(^[\w\d-_%]+)=([\S]+);/i);
                        return 3 === t.length ? [t[1], t[2]] : null
                    }).filter(e => e).forEach(([e, t]) => {
                        r.cookies.set(e, t)
                    })
                }
                delete g[e.requestId]
            }
            return {
                responseHeaders: e.responseHeaders
            }
        }, m, ["blocking", "responseHeaders", "extraHeaders"]);
        const y = new class {
                constructor() {
                    this.contextChanges = {}, setInterval(this._clearContext, 12e4)
                }
                getDefaultHeaders(e, t, r = {}) {
                    e = e || l.c.randomString(64);
                    const n = new u;
                    return n.set("i18n-prefs", "USD").set("lc-main", "en_US").set("skin", "noskin"), Object.entries(t.cookies).forEach(([e, t]) => n.set(e, t)), {
                        key: e,
                        origin: r.origin || t.origin,
                        referer: r.referer || t.origin,
                        mobile: r.mobile || null != t.mobile && t.mobile,
                        cookies: n,
                        locationType: t.location ? t.location.type : "",
                        locationValue: t.location ? t.location.value : "",
                        accept: r.accept || "*/*",
                        contentType: r.contentType || ""
                    }
                }
                async getPage(e, t) {
                    await this._getContext(t);
                    const r = {};
                    return r["ss-amazon-client-key"] = t.key, await c.a.get(e, {
                        headers: r
                    }).then(e => {
                        if (e && e.data) return e.data
                    })
                }
                async _getContext(e) {
                    let t = f[e.key];
                    if (log.debug("context: ", e.key, t), t) this.contextChanges[e.key] && (await l.c.wait(() => !this.contextChanges[e.key]), t = f[e.key]);
                    else {
                        this.contextChanges[e.key] = !0, e.userAgent = this._randomUserAgent(!1), e.mobileUserAgent = this._randomUserAgent(!0);
                        const r = this._randomIP();
                        t = {
                            headers: e,
                            cookies: e.cookies,
                            ip: r,
                            addedDate: Date.now()
                        }, f[e.key] = t, await this._setLocation(e), delete this.contextChanges[e.key]
                    }
                    return t && l.c.copyObjectValues(t.headers, e), t
                }
                async _clearContext() {
                    Object.entries(f).filter(([e, t]) => t.addedDate + 12e4 <= Date.now()).forEach(([e, t]) => {
                        delete f[e]
                    })
                }
                async _setLocation(e) {
                    if (!e.locationType || !e.locationValue) return;
                    const t = {};
                    t["ss-amazon-client-key"] = e.key;
                    const r = e.mobile;
                    e.mobile = !1, e.noCookies = !0;
                    const n = (await c.a.get(e.origin + "/gp/glow/get-address-selections.html?deviceType=desktop&pageType=Search&storeContext=NoStoreName", {
                        headers: t
                    }).then(e => {
                        if (e && e.data) return e.data
                    })).match(/CSRF_TOKEN[\s]*:[\s]*"[\S]+",/i);
                    if (n && n.length > 0) {
                        const t = n[0].match(/"[\S]+"/i)[0].replace('"', "");
                        log.debug("scrf > ", t), e.scrf = t
                    }
                    const o = {
                        storeContext: "generic",
                        deviceType: "web",
                        pageType: "Search",
                        actionSource: "glow"
                    };
                    switch (e.locationType) {
                        case "POSTAL_CODE":
                            o.locationType = "LOCATION_INPUT", o.zipCode = e.locationValue;
                            break;
                        case "COUNTRY_CODE":
                            o.locationType = "COUNTRY", o.district = e.locationValue, o.countryCode = e.locationValue
                    }
                    const i = Object.entries(o).map(([e, t]) => e + "=" + t).join("&"),
                        a = e.accept,
                        s = e.contentType;
                    e.accept = "*/*", e.contentType = "application/x-www-form-urlencoded;charset=UTF-8", e.noCookies = !1;
                    const l = e.origin + "/gp/delivery/ajax/address-change.html";
                    return await c.a.post(l, i, {
                        headers: t
                    }).then(e => e).catch(e => (log.error("Cannot change address.", e), null)).finally(() => {
                        e.accept = a, e.contentType = s, e.mobile = r, delete e.scrf
                    })
                }
                _randomUserAgent(e = !1) {
                    let t = l.c.randomElement(e ? p : d);
                    const r = [l.c.randomInteger(501, 605), l.c.randomInteger(1, 37), l.c.randomInteger(60, 80), l.c.randomInteger(0, 4), l.c.randomInteger(1e3, 7e3), l.c.randomInteger(0, 200), l.c.randomInteger(10, 13), l.c.randomInteger(1, 15), l.c.randomInteger(15, 20), l.c.randomInteger(7, 10), l.c.randomString(6).toUpperCase()];
                    return t.format(...r)
                }
                _randomIP() {
                    return [l.c.randomInteger(1, 255), l.c.randomInteger(1, 255), l.c.randomInteger(1, 255), l.c.randomInteger(1, 255)].join(".")
                }
            },
            b = ["#productDetails_techSpec_sections table", "#product-details-grid_feature_div table", "#productDetails_feature_div table", "#detail-bullets_feature_div table", "#prodDetails table"],
            S = ["ul#productDetails_detailBullets_sections", "#detail-bullets_feature_div table ul", "#detailBullets_feature_div ul", "#detail_bullets_id table ul", "#detail-bullets ul", "#detailBullets ul", "#SalesRank"];
        const x = new class {
            constructor() {}
            async parse(e, t) {
                if (b.map(t => e.querySelectorAll(t)).filter(e => e && e.length > 0).forEach(e => {
                        e.forEach(e => this._detailsInTable(t, e))
                    }), S.map(t => e.querySelectorAll(t)).filter(e => e && e.length > 0).forEach(e => {
                        e.forEach(e => this._detailsInList(t, e))
                    }), !t.itemWeight && t.dimensions) {
                    const e = t.dimensions.split(";");
                    2 === e.length && (t.dimensions = e[0], t.itemWeight = e[1])
                }
                return t
            }
            _detailsInTable(e, t) {
                t.querySelectorAll("tr").forEach(t => {
                    const r = t.querySelectorAll("th, td");
                    if (!r || 2 !== r.length) return;
                    const n = r[0],
                        o = r[1];
                    if (n && o) {
                        const t = n.innerText,
                            r = o.innerText;
                        this._setValue(e, t, r, o)
                    }
                })
            }
            _detailsInList(e, t) {
                if ("UL" === t.tagName) {
                    const r = t.querySelectorAll("li");
                    log.debug("rows:", r.length), r.forEach(t => this._parseLi(e, t))
                } else "LI" === t.tagName && this._parseLi(e, t)
            }
            _parseLi(e, t) {
                let r, n, o;
                const i = t.querySelectorAll(".a-list-item>span");
                if (i && 2 === i.length) r = i[0].innerText, n = this._getNodeText(i[1]), o = i[1];
                else if (t.querySelectorAll(".a-list-item>span, .a-list-item>a, .a-list-item>ul").length >= 3) r = i[0].innerText, n = this._getNodeText(t.querySelector(".a-list-item")), o = t.querySelector(".a-list-item");
                else {
                    const e = t.querySelectorAll(".a-list-item"),
                        i = t.querySelector(".a-list-item>span");
                    if (e && 1 === e.length && i) {
                        r = this._getNodeText(e[0]);
                        const t = i.querySelectorAll("span");
                        t && t.length > 0 && (n = this._getNodeText(t[0])), o = i
                    } else {
                        const e = t.querySelector("b");
                        e && (r = e.innerText, n = this._getNodeText(t), o = t)
                    }
                }
                this._setValue(e, r, n, o)
            }
            _setValue(e, t, r, n) {
                if (t && r) switch (t = t.toLowerCase().replace(/[:‏‎]/g, "").trim(), t = /^date first/i.test(t) ? "date first available" : t, r = r.trim(), t) {
                    case "product dimensions":
                    case "package dimensions":
                    case "parcel dimensions":
                        e.dimensions = r;
                        break;
                    case "item weight":
                    case "weight":
                        e.itemWeight = r;
                        break;
                    case "shipping weight":
                    case "boxed-product weight":
                        e.shippingWeight = r.replace(/\([\s\S]*\)/i, "").trim();
                        break;
                    case "best sellers rank":
                    case "best-sellers rank":
                    case "bestsellers rank":
                    case "amazon best sellers rank":
                    case "amazon bestsellers rank":
                        let t = r.trim().split(" ")[0];
                        if (t && (e.rank = l.c.toInteger(t)), n) {
                            let t = n.innerHTML.trim();
                            t && (t = t.replace(/<b>[\s\S]+<\/b>/gim, ""), t = t.replace(/<style[\s\S]+<\/style>/gim, ""), t = t.replace(/(\r\n|\n|\r)/gm, ""), e.rank != t.trim() && (e.ranks = t.trim()))
                        }
                        break;
                    case "customer reviews":
                        const o = n.querySelector(".a-icon-star>span, .a-icon-star-small>span");
                        e.rating = l.a.getRating(o);
                        n.querySelectorAll("a").forEach(t => {
                            const r = l.a.getInnerText(t);
                            if (r && /customer rating/i.test(r)) {
                                const t = r.match(/^[\d]+/)[0];
                                e.reviewsCount = t ? l.c.toInteger(t) : null
                            }
                        });
                        break;
                    case "date first available":
                    case "release date":
                        try {
                            e.dateFirstListed = Date.parse(r)
                        } catch (e) {
                            log.error("Cannot parse DFL:", e)
                        }
                        break;
                    case "upc":
                        e.upc = r
                }
            }
            _getNodeText(e) {
                return [].reduce.call(e.childNodes, (function(e, t) {
                    return e + (3 === t.nodeType ? t.textContent : "")
                }), "")
            }
        };
        const w = new class {
            constructor() {}
            async parse(e, t) {
                return this._title(e, t), this._price(e, t), this._bullets(e, t), this._images(e, t), this._brand(e, t), this._breadcrumbs(e, t), this._variants(e, t), this._seller(e, t), x.parse(e, t), log.debug("Parsed: ", t), t
            }
            _title(e, t) {
                if (t.title) return;
                const r = e.querySelector("#title_feature_div h1>span");
                r && (t.title = r.innerText.trim())
            }
            _price(e, t) {
                if (t.price && t.currency) return;
                const r = e.querySelector("#price_inside_buybox, #priceblock_ourprice, #unqualifiedBuyBox .a-color-price");
                if (r) {
                    const e = l.a.getPrice(r);
                    t.price = e.price, t.currency = e.currency
                }
            }
            _bullets(e, t) {
                if (t.bullets) return;
                const r = e.querySelector("#featurebullets_feature_div #feature-bullets, #feature-bullets");
                r && (t.bullets = r.innerHTML.trim())
            }
            _images(e, t) {
                const r = e.querySelector("#imageBlock_feature_div ol, #imageBlock_feature_div ul, #image-block ol, #main-image-container ul");
                if (r) {
                    const e = r.querySelectorAll("li [data-a-hires], li [data-zoom-hires], li [data-old-hires]");
                    e.length > 0 && (t.images = []), e.forEach(e => {
                        t.images.push(e.getAttribute("data-a-hires") || e.getAttribute("data-zoom-hires") || e.getAttribute("data-old-hires"))
                    })
                }
            }
            _brand(e, t) {
                if (t.brand) return;
                const r = e.querySelector("#bylineInfo_feature_div a#bylineInfo");
                r && (t.brand = {
                    title: r.innerText.trim(),
                    link: r.getAttribute("href")
                })
            }
            _breadcrumbs(e, t) {
                if (t.categories && t.rootCategory) return;
                const r = e.querySelector("#wayfinding-breadcrumbs_feature_div ul");
                if (r) {
                    const e = [].slice.call(r.querySelectorAll("li a"));
                    t.categories = e.map(e => ({
                        title: e.innerText.trim(),
                        link: e.getAttribute("href")
                    })), t.categories.length > 0 && (t.rootCategory = t.categories[0])
                }
            }
            _variants(e, t) {
                const r = {
                    style: 0,
                    color: 0,
                    size: 0
                };
                Object.keys(r).forEach(t => {
                    r[t] = this._variantsByType(e, t)
                }), t.variants = r, t.variantsCount = l.c.multArray(Object.values(r))
            }
            _variantsByType(e, t) {
                const r = e.querySelector(`#variation_${t}_name ul, #variation_${t}_name select`);
                return r ? r.querySelectorAll('li[data-dp-url], option[value]:not([value="-1"])').length : 0
            }
            _seller(e, t) {
                const r = e.querySelector("#merchant-info");
                if (log.debug("_seller", r), r) {
                    let e = "MCH";
                    if (r.querySelectorAll("a").forEach(t => {
                            const r = t.innerText.trim().toLowerCase();
                            log.debug("sellerName 1", r), "fulfilled by amazon" === r && (e = "FBA")
                        }), "MCH" === e) {
                        const t = l.a.getInnerText(r).trim().toLowerCase();
                        log.debug("sellerName 2", t), /fulfilled by amazon/i.test(t) || /delivered by amazon/i.test(t) ? e = "FBA" : /amazon./i.test(t) && (e = "AMZ")
                    }
                    t.sellerBuyBox = e
                } else {
                    const r = e.querySelector('#buybox-tabular #buyboxTabularTruncate-0 span.a-truncate-full, #tabular-buybox-truncate-0  span.a-truncate-full, .tabular-buybox-text[tabular-attribute-name="Ships from"] span, .tabular-buybox-text[tabular-attribute-name="Dispatches from"] span, .tabular-buybox-text[tabular-attribute-name="Fulfilled by"] span'),
                        n = e.querySelector('#buybox-tabular #buyboxTabularTruncate-1 span.a-truncate-full, #tabular-buybox-truncate-1  span.a-truncate-full, .tabular-buybox-text[tabular-attribute-name="Sold by"] span');
                    if (log.debug("tabulars", r, n), r && n) {
                        const e = n.innerText.trim().toLowerCase(),
                            o = r.innerText.trim().toLowerCase();
                        if (log.debug("seller", e, o), e && o) {
                            let r = "MCH";
                            /amazon warehouse/i.test(e) ? r = "AMW" : /amazon/i.test(e) ? (r = "AMZ", /amazon warehouse/i.test(o) && (r = "AMW")) : /amazon/i.test(o) && (r = "FBA"), t.sellerBuyBox = r
                        }
                    }
                }
                return r ? r.querySelectorAll('li[data-dp-url], option[value]:not([value="-1"])').length : 0
            }
        };
        const v = new class {
            constructor() {}
            async parse(e, t) {
                const r = [],
                    n = e.querySelectorAll(".olpMobileOffer .olpOffer");
                if (n.length > 0) this._parseMobilePage(r, n);
                else {
                    const t = e.querySelectorAll(".olpOffer");
                    t.length > 0 && this._parseDesktopPage(r, t)
                }
                const o = {
                    AMZ: 0,
                    AMW: 0,
                    FBA: 0,
                    MCH: 0
                };
                r.forEach((function(e) {
                    o[e] = (o[e] || 0) + 1
                })), t.sellers = o;
                const i = e.querySelector(".a-pagination .a-last a");
                if (t.sellersCount = i ? 11 : r.length, !t.price) {
                    const r = e.querySelector(".olpOfferPrice");
                    if (r) {
                        const e = l.a.getPrice(r);
                        t.price = e.price, t.currency = e.currency
                    }
                }
                return log.debug("Parsed: ", t), t
            }
            _parseMobilePage(e, t) {
                t.forEach(t => {
                    const r = t.querySelector(".olpSellerName span");
                    if (r) {
                        let n = "MCH";
                        const o = r.innerHTML.trim().toLowerCase();
                        if ("amazon warehouse" === o) n = "AMW";
                        else if (/amazon./i.test(o)) n = "AMZ";
                        else {
                            t.querySelector('.olpShippingInfo [aria-label="Amazon Prime TM"]') && (n = "FBA")
                        }
                        e.push(n)
                    }
                })
            }
            _parseDesktopPage(e, t) {
                t.forEach(t => {
                    let r = "MCH";
                    const n = t.querySelector(".olpSellerName img");
                    if (n) {
                        const e = n.getAttribute("alt").toLowerCase();
                        /amazon./i.test(e) ? r = "AMZ" : "amazon warehouse" === e && (r = "AMW")
                    } else {
                        t.querySelector(".olpFbaPopoverTrigger") && (r = "FBA")
                    }
                    e.push(r)
                })
            }
        };
        const k = new class {
            constructor() {}
            async parse(e, t) {
                if (t.sellers = this.parseSellersType(e), t.sellersCount = this.parseSellersCount(e), !t.price) {
                    const r = this.parsePrice(e);
                    r && (t.price = r.price, t.currency = r.currency)
                }
                return log.debug("Parsed: ", t), t
            }
            parseSellersType(e) {
                const t = [];
                e.querySelectorAll(".aod-pinned-offer-block, .aod-information-block").forEach(e => {
                    const r = e.querySelectorAll("#aod-offer-soldBy span, #aod-offer-soldBy a");
                    let n;
                    r.length > 0 && r.forEach(e => {
                        /sold/i.test(e.innerText.trim().toLowerCase()) || (n = e.innerText.trim().toLowerCase())
                    });
                    const o = e.querySelectorAll("#aod-offer-shipsFrom span");
                    let i;
                    if (o.length > 0 && o.forEach(e => {
                            /ships/i.test(e.innerText.trim().toLowerCase()) || (i = e.innerText.trim().toLowerCase())
                        }), log.debug("seller", n, i), n && i) {
                        let e = "MCH";
                        /amazon warehouse/i.test(n) ? e = "AMW" : /amazon/i.test(n) ? (e = "AMZ", /amazon warehouse/i.test(i) && (e = "AMW")) : /amazon/i.test(i) && (e = "FBA"), t.push(e)
                    }
                });
                const r = {
                    AMZ: 0,
                    AMW: 0,
                    FBA: 0,
                    MCH: 0
                };
                return t.forEach((function(e) {
                    r[e] = (r[e] || 0) + 1
                })), r
            }
            parseSellersCount(e) {
                let t = e.querySelector("#aod-pinned-offer") ? 1 : 0;
                const r = e.querySelector("#aod-filter-offer-count-string");
                if (r) {
                    let e = r.innerText.trim().split(" ")[0];
                    e && (t += l.c.toInteger(e))
                }
                return t
            }
            parsePrice(e) {
                const t = e.querySelector('#aod-pinned-offer .a-price span[aria-hidden="true"], #aod-offer .a-price span[aria-hidden="true"]');
                let r = l.a.getPriceWhole(t);
                if (r) return r; {
                    const t = e.querySelector("#aod-pinned-offer .a-price .a-offscreen, #aod-offer .a-price .a-offscreen");
                    if (t) return l.a.getPrice(t)
                }
            }
        };
        const A = new class extends o {
            constructor() {
                super("ParserService"), this.DOM_PARSER = new DOMParser, this.keys = {}
            }
            _getRequestKey(e, t) {
                const r = e.domain + (t ? "_" + t.value : e.asin);
                let n = this.keys[r] ? this.keys[r] : 0;
                n > 1e5 && (n = 0), this.keys[r] = ++n;
                const o = parseInt(n / 20);
                return log.debug("_getRequestKey", n, r + "_" + o), r + "_" + o
            }
            _getProductLink(e, t) {
                return e.link ? e.link.startsWith("http") ? e.link : t.origin + e.link : `${t.origin}/dp/${e.asin}/`
            }
            async parseProduct(e, t, r) {
                if (log.debug("Parse Product", e, t, r), !(e && e.asin && e.domain && t && r)) return;
                t.origin = r.origin, t.referer = r.referer;
                const n = await this.loadProductPage(e, t);
                if (n.querySelector("#captchacharacters")) throw {
                    message: "Request returned a captcha page"
                };
                return await w.parse(n, e), e
            }
            async loadProductPage(e, t) {
                const r = this._getRequestKey(e, t.location),
                    n = y.getDefaultHeaders(r, t, {
                        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
                    }),
                    o = this._getProductLink(e, t),
                    i = await y.getPage(o + "?psc=2", n);
                return this.DOM_PARSER.parseFromString(i, "text/html")
            }
            async parseSellers(e, t, r) {
                if (log.debug("Parse Sellers", e, t, r), e && e.asin && e.domain && t && r) {
                    t.origin = r.origin, t.referer = r.referer;
                    try {
                        const r = await this.loadSellersAodPage(e, t);
                        await k.parse(r, e)
                    } catch (r) {
                        if (!r || !r.response || 404 !== r.response.status) throw r; {
                            log.debug("loadSellersPage");
                            const r = await this.loadSellersPage(e, t);
                            await v.parse(r, e)
                        }
                    }
                    return e
                }
            }
            async loadSellersPage(e, t) {
                const r = this._getRequestKey(e, t.location),
                    n = this._getProductLink(e, t),
                    o = y.getDefaultHeaders(r, t, {
                        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                        referer: n
                    }),
                    i = `${t.origin}/gp/offer-listing/${e.asin}/`,
                    a = await y.getPage(i + "ref=dp_olp_afts?ie=UTF8&condition=all", o);
                return this.DOM_PARSER.parseFromString(a, "text/html")
            }
            async loadSellersAodPage(e, t) {
                const r = this._getRequestKey(e, t.location),
                    n = this._getProductLink(e, t),
                    o = y.getDefaultHeaders(r, t, {
                        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                        referer: n
                    }),
                    i = `${t.origin}/gp/aod/ajax/ref=dp_olp_all_mbc?asin=${e.asin}`,
                    a = await y.getPage(i, o);
                return this.DOM_PARSER.parseFromString(a, "text/html")
            }
        }
    },
    31: function(e, t, r) {
        "use strict";
        e.exports = function(e, t, r, n, o) {
            return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    },
    32: function(e, t, r) {
        "use strict";
        var n = r(33),
            o = r(34);
        e.exports = function(e, t) {
            return e && !n(t) ? o(e, t) : t
        }
    },
    33: function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    },
    34: function(e, t, r) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    },
    35: function(e, t, r) {
        "use strict";
        var n = r(6),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, r, i, a = {};
            return e ? (n.forEach(e.split("\n"), (function(e) {
                if (i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), r = n.trim(e.substr(i + 1)), t) {
                    if (a[t] && o.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r
                }
            })), a) : a
        }
    },
    36: function(e, t, r) {
        "use strict";
        var n = r(6);
        e.exports = n.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");

            function o(e) {
                var n = e;
                return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                }
            }
            return e = o(window.location.href),
                function(t) {
                    var r = n.isString(t) ? o(t) : t;
                    return r.protocol === e.protocol && r.host === e.host
                }
        }() : function() {
            return !0
        }
    },
    37: function(e, t, r) {
        "use strict";
        var n = r(6);
        e.exports = n.isStandardBrowserEnv() ? {
            write: function(e, t, r, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(o) && s.push("path=" + o), n.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    },
    38: function(e, t, r) {
        "use strict";
        var n = r(19);

        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                t = e
            }));
            var r = this;
            e((function(e) {
                r.reason || (r.reason = new n(e), t(r.reason))
            }))
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, o.source = function() {
            var e;
            return {
                token: new o((function(t) {
                    e = t
                })),
                cancel: e
            }
        }, e.exports = o
    },
    39: function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    },
    6: function(e, t, r) {
        "use strict";
        var n = r(12),
            o = Object.prototype.toString;

        function i(e) {
            return "[object Array]" === o.call(e)
        }

        function a(e) {
            return void 0 === e
        }

        function s(e) {
            return null !== e && "object" == typeof e
        }

        function c(e) {
            return "[object Function]" === o.call(e)
        }

        function l(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), i(e))
                    for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function(e) {
                return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: s,
            isUndefined: a,
            isDate: function(e) {
                return "[object Date]" === o.call(e)
            },
            isFile: function(e) {
                return "[object File]" === o.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === o.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return s(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: l,
            merge: function e() {
                var t = {};

                function r(r, n) {
                    "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = r
                }
                for (var n = 0, o = arguments.length; n < o; n++) l(arguments[n], r);
                return t
            },
            deepMerge: function e() {
                var t = {};

                function r(r, n) {
                    "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = "object" == typeof r ? e({}, r) : r
                }
                for (var n = 0, o = arguments.length; n < o; n++) l(arguments[n], r);
                return t
            },
            extend: function(e, t, r) {
                return l(t, (function(t, o) {
                    e[o] = r && "function" == typeof t ? n(t, r) : t
                })), e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    },
    9: function(e, t, r) {
        e.exports = r(24)
    }
});