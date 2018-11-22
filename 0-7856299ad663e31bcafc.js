;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    141: function(e, t, n) {
      'use strict'
      var r = n(39)
      ;(t.__esModule = !0),
        (t.withPrefix = d),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0)
      var o = r(n(155)),
        i = r(n(156)),
        a = r(n(8)),
        s = r(n(52)),
        u = r(n(54)),
        l = r(n(4)),
        c = r(n(0)),
        f = n(16),
        p = n(142)
      function d(e) {
        return (function(e) {
          return e.replace(/\/+/g, '/')
        })('/originlabs.org/' + e)
      }
      var h = {
          activeClassName: l.default.string,
          activeStyle: l.default.object,
        },
        g = (function(e) {
          function t(t) {
            var n
            ;(n = e.call(this) || this),
              (0, u.default)(
                (0, s.default)((0, s.default)(n)),
                'defaultGetProps',
                function(e) {
                  return e.isCurrent
                    ? {
                        className: [n.props.className, n.props.activeClassName]
                          .filter(Boolean)
                          .join(' '),
                        style: (0, i.default)(
                          {},
                          n.props.style,
                          n.props.activeStyle,
                        ),
                      }
                    : null
                },
              )
            var r = !1
            'undefined' != typeof window &&
              window.IntersectionObserver &&
              (r = !0)
            var o = t.location
            return (
              (n.state = { IOSupported: r, location: o }),
              (n.handleRef = n.handleRef.bind(
                (0, s.default)((0, s.default)(n)),
              )),
              n
            )
          }
          ;(0, a.default)(t, e)
          var n = t.prototype
          return (
            (n.componentDidUpdate = function(e, t) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue((0, p.parsePath)(this.props.to).pathname)
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue((0, p.parsePath)(this.props.to).pathname)
            }),
            (n.handleRef = function(e) {
              var t,
                n,
                r,
                o = this
              this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  ((t = e),
                  (n = function() {
                    ___loader.enqueue((0, p.parsePath)(o.props.to).pathname)
                  }),
                  (r = new window.IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                      t === e.target &&
                        (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(t), r.disconnect(), n())
                    })
                  })).observe(t))
            }),
            (n.render = function() {
              var e = this,
                t = this.props,
                n = t.to,
                r = t.getProps,
                a = void 0 === r ? this.defaultGetProps : r,
                s = t.onClick,
                u = t.onMouseEnter,
                l = t.location,
                h = (t.activeClassName,
                t.activeStyle,
                t.ref,
                t.innerRef,
                t.state),
                g = t.replace,
                v = (0, o.default)(t, [
                  'to',
                  'getProps',
                  'onClick',
                  'onMouseEnter',
                  'location',
                  'activeClassName',
                  'activeStyle',
                  'ref',
                  'innerRef',
                  'state',
                  'replace',
                ]),
                y = d(n)
              return c.default.createElement(
                f.Link,
                (0, i.default)(
                  {
                    to: y,
                    state: h,
                    getProps: a,
                    innerRef: this.handleRef,
                    onMouseEnter: function(e) {
                      u && u(e),
                        ___loader.hovering((0, p.parsePath)(n).pathname)
                    },
                    onClick: function(t) {
                      if (
                        (s && s(t),
                        !(
                          0 !== t.button ||
                          e.props.target ||
                          t.defaultPrevented ||
                          t.metaKey ||
                          t.altKey ||
                          t.ctrlKey ||
                          t.shiftKey
                        ))
                      ) {
                        t.preventDefault()
                        var n = (0, p.parsePath)(y),
                          r = n.pathname,
                          o = n.hash
                        if (r === l.pathname || !r) {
                          var i = o
                            ? document.getElementById(o.substr(1))
                            : null
                          null !== i
                            ? i.scrollIntoView()
                            : window.scrollTo(0, 0)
                        }
                        m(y, { state: h, replace: g })
                      }
                      return !0
                    },
                  },
                  v,
                ),
              )
            }),
            t
          )
        })(c.default.Component)
      g.propTypes = (0, i.default)({}, h, {
        innerRef: l.default.func,
        onClick: l.default.func,
        to: l.default.string.isRequired,
        replace: l.default.bool,
      })
      var v,
        y = ((v = g),
        function(e) {
          return c.default.createElement(f.Location, null, function(t) {
            var n = t.location
            return c.default.createElement(
              v,
              (0, i.default)({ location: n }, e),
            )
          })
        })
      t.default = y
      var m = function(e, t) {
        window.___navigate(e, t)
      }
      t.navigate = m
      var b = function(e) {
        console.warn(
          'The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.',
        ),
          window.___push(e)
      }
      t.push = b
      t.replace = function(e) {
        console.warn(
          'The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.',
        ),
          window.___replace(e)
      }
      t.navigateTo = function(e) {
        return (
          console.warn(
            'The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.',
          ),
          b(e)
        )
      }
    },
    143: function(e, t, n) {
      var r = n(6)
      r(r.P, 'Function', { bind: n(151) })
    },
    151: function(e, t, n) {
      'use strict'
      var r = n(18),
        o = n(11),
        i = n(78),
        a = [].slice,
        s = {}
      e.exports =
        Function.bind ||
        function(e) {
          var t = r(this),
            n = a.call(arguments, 1),
            u = function() {
              var r = n.concat(a.call(arguments))
              return this instanceof u
                ? (function(e, t, n) {
                    if (!(t in s)) {
                      for (var r = [], o = 0; o < t; o++) r[o] = 'a[' + o + ']'
                      s[t] = Function(
                        'F,a',
                        'return new F(' + r.join(',') + ')',
                      )
                    }
                    return s[t](e, n)
                  })(t, r.length, r)
                : i(t, r, e)
            }
          return o(t.prototype) && (u.prototype = t.prototype), u
        }
    },
    152: function(e, t, n) {
      var r = n(27).f,
        o = Function.prototype,
        i = /^\s*function ([^ (]*)/
      'name' in o ||
        (n(17) &&
          r(o, 'name', {
            configurable: !0,
            get: function() {
              try {
                return ('' + this).match(i)[1]
              } catch (e) {
                return ''
              }
            },
          }))
    },
    153: function(e, t, n) {
      var r
      e.exports = ((r = n(0)),
      (function(e) {
        function t(r) {
          if (n[r]) return n[r].exports
          var o = (n[r] = { exports: {}, id: r, loaded: !1 })
          return (
            e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
          )
        }
        var n = {}
        return (t.m = e), (t.c = n), (t.p = ''), t(0)
      })([
        function(e, t, n) {
          'use strict'
          function r(e) {
            return e && e.__esModule ? e : { default: e }
          }
          Object.defineProperty(t, '__esModule', { value: !0 })
          var o = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n]
                  ;(r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
              }
            })(),
            i = n(6),
            a = r(i),
            s = n(4),
            u = r(s),
            l = {
              className: u.default.string,
              onloadCallbackName: u.default.string,
              elementID: u.default.string,
              onloadCallback: u.default.func,
              verifyCallback: u.default.func,
              expiredCallback: u.default.func,
              render: u.default.oneOf(['onload', 'explicit']),
              sitekey: u.default.string,
              theme: u.default.oneOf(['light', 'dark']),
              type: u.default.string,
              verifyCallbackName: u.default.string,
              expiredCallbackName: u.default.string,
              size: u.default.oneOf(['invisible', 'compact', 'normal']),
              tabindex: u.default.string,
              hl: u.default.string,
              badge: u.default.oneOf(['bottomright', 'bottomleft', 'inline']),
            },
            c = function() {
              return (
                'undefined' != typeof window &&
                void 0 !== window.grecaptcha &&
                'function' == typeof window.grecaptcha.render
              )
            },
            f = void 0,
            p = (function(e) {
              function t(e) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function')
                })(this, t)
                var n = (function(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return !t || ('object' != typeof t && 'function' != typeof t)
                    ? e
                    : t
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e),
                )
                return (
                  (n._renderGrecaptcha = n._renderGrecaptcha.bind(n)),
                  (n.reset = n.reset.bind(n)),
                  (n.state = { ready: c(), widget: null }),
                  n.state.ready ||
                    'undefined' == typeof window ||
                    (f = setInterval(n._updateReadyState.bind(n), 1e3)),
                  n
                )
              }
              return (
                (function(e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof t,
                    )
                  ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t))
                })(t, e),
                o(t, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      this.state.ready && this._renderGrecaptcha()
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function(e, t) {
                      var n = this.props,
                        r = n.render,
                        o = n.onloadCallback
                      'explicit' === r &&
                        o &&
                        this.state.ready &&
                        !t.ready &&
                        this._renderGrecaptcha()
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function() {
                      clearInterval(f)
                    },
                  },
                  {
                    key: 'reset',
                    value: function() {
                      var e = this.state,
                        t = e.ready,
                        n = e.widget
                      t && null !== n && grecaptcha.reset(n)
                    },
                  },
                  {
                    key: 'execute',
                    value: function() {
                      var e = this.state,
                        t = e.ready,
                        n = e.widget
                      t && null !== n && grecaptcha.execute(n)
                    },
                  },
                  {
                    key: '_updateReadyState',
                    value: function() {
                      c() && (this.setState({ ready: !0 }), clearInterval(f))
                    },
                  },
                  {
                    key: '_renderGrecaptcha',
                    value: function() {
                      ;(this.state.widget = grecaptcha.render(
                        this.props.elementID,
                        {
                          sitekey: this.props.sitekey,
                          callback: this.props.verifyCallback
                            ? this.props.verifyCallback
                            : void 0,
                          theme: this.props.theme,
                          type: this.props.type,
                          size: this.props.size,
                          tabindex: this.props.tabindex,
                          hl: this.props.hl,
                          badge: this.props.badge,
                          'expired-callback': this.props.expiredCallback
                            ? this.props.expiredCallback
                            : void 0,
                        },
                      )),
                        this.props.onloadCallback && this.props.onloadCallback()
                    },
                  },
                  {
                    key: 'render',
                    value: function() {
                      return 'explicit' === this.props.render &&
                        this.props.onloadCallback
                        ? a.default.createElement('div', {
                            id: this.props.elementID,
                            'data-onloadcallbackname': this.props
                              .onloadCallbackName,
                            'data-verifycallbackname': this.props
                              .verifyCallbackName,
                          })
                        : a.default.createElement('div', {
                            id: this.props.elementID,
                            className: this.props.className,
                            'data-sitekey': this.props.sitekey,
                            'data-theme': this.props.theme,
                            'data-type': this.props.type,
                            'data-size': this.props.size,
                            'data-badge': this.props.badge,
                            'data-tabindex': this.props.tabindex,
                          })
                    },
                  },
                ]),
                t
              )
            })(i.Component)
          ;(t.default = p),
            (p.propTypes = l),
            (p.defaultProps = {
              elementID: 'g-recaptcha',
              className: 'g-recaptcha',
              onloadCallback: void 0,
              onloadCallbackName: 'onloadCallback',
              verifyCallback: void 0,
              verifyCallbackName: 'verifyCallback',
              expiredCallback: void 0,
              expiredCallbackName: 'expiredCallback',
              render: 'onload',
              theme: 'light',
              type: 'image',
              size: 'normal',
              tabindex: '0',
              hl: 'en',
              badge: 'bottomright',
            }),
            (e.exports = t.default)
        },
        function(e, t) {
          'use strict'
          function n(e) {
            return function() {
              return e
            }
          }
          var r = function() {}
          ;(r.thatReturns = n),
            (r.thatReturnsFalse = n(!1)),
            (r.thatReturnsTrue = n(!0)),
            (r.thatReturnsNull = n(null)),
            (r.thatReturnsThis = function() {
              return this
            }),
            (r.thatReturnsArgument = function(e) {
              return e
            }),
            (e.exports = r)
        },
        function(e, t, n) {
          'use strict'
          var r = function(e) {}
          e.exports = function(e, t, n, o, i, a, s, u) {
            if ((r(t), !e)) {
              var l
              if (void 0 === t)
                l = new Error(
                  'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
                )
              else {
                var c = [n, o, i, a, s, u],
                  f = 0
                ;(l = new Error(
                  t.replace(/%s/g, function() {
                    return c[f++]
                  }),
                )).name = 'Invariant Violation'
              }
              throw ((l.framesToPop = 1), l)
            }
          }
        },
        function(e, t, n) {
          'use strict'
          var r = n(1),
            o = n(2),
            i = n(5)
          e.exports = function() {
            function e(e, t, n, r, a, s) {
              s !== i &&
                o(
                  !1,
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                )
            }
            function t() {
              return e
            }
            e.isRequired = e
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
            }
            return (n.checkPropTypes = r), (n.PropTypes = n), n
          }
        },
        function(e, t, n) {
          e.exports = n(3)()
        },
        function(e, t) {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
        function(e, t) {
          e.exports = r
        },
      ]))
    },
    154: function(e, t, n) {
      var r
      /*!
       * jQuery JavaScript Library v3.3.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2018-01-20T17:24Z
       */
      /*!
       * jQuery JavaScript Library v3.3.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2018-01-20T17:24Z
       */
      !(function(t, n) {
        'use strict'
        'object' == typeof e && 'object' == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function(e) {
                  if (!e.document)
                    throw new Error('jQuery requires a window with a document')
                  return n(e)
                })
          : n(t)
      })('undefined' != typeof window ? window : this, function(n, o) {
        'use strict'
        var i = [],
          a = n.document,
          s = Object.getPrototypeOf,
          u = i.slice,
          l = i.concat,
          c = i.push,
          f = i.indexOf,
          p = {},
          d = p.toString,
          h = p.hasOwnProperty,
          g = h.toString,
          v = g.call(Object),
          y = {},
          m = function(e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType
          },
          b = function(e) {
            return null != e && e === e.window
          },
          x = { type: !0, src: !0, noModule: !0 }
        function w(e, t, n) {
          var r,
            o = (t = t || a).createElement('script')
          if (((o.text = e), n)) for (r in x) n[r] && (o[r] = n[r])
          t.head.appendChild(o).parentNode.removeChild(o)
        }
        function T(e) {
          return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
            ? p[d.call(e)] || 'object'
            : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e, t)
          },
          k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        function E(e) {
          var t = !!e && 'length' in e && e.length,
            n = T(e)
          return (
            !m(e) &&
            !b(e) &&
            ('array' === n ||
              0 === t ||
              ('number' == typeof t && t > 0 && t - 1 in e))
          )
        }
        ;(C.fn = C.prototype = {
          jquery: '3.3.1',
          constructor: C,
          length: 0,
          toArray: function() {
            return u.call(this)
          },
          get: function(e) {
            return null == e
              ? u.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e]
          },
          pushStack: function(e) {
            var t = C.merge(this.constructor(), e)
            return (t.prevObject = this), t
          },
          each: function(e) {
            return C.each(this, e)
          },
          map: function(e) {
            return this.pushStack(
              C.map(this, function(t, n) {
                return e.call(t, n, t)
              }),
            )
          },
          slice: function() {
            return this.pushStack(u.apply(this, arguments))
          },
          first: function() {
            return this.eq(0)
          },
          last: function() {
            return this.eq(-1)
          },
          eq: function(e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0)
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
          },
          end: function() {
            return this.prevObject || this.constructor()
          },
          push: c,
          sort: i.sort,
          splice: i.splice,
        }),
          (C.extend = C.fn.extend = function() {
            var e,
              t,
              n,
              r,
              o,
              i,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1
            for (
              'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                'object' == typeof a || m(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (n = a[t]),
                    a !== (r = e[t]) &&
                      (l && r && (C.isPlainObject(r) || (o = Array.isArray(r)))
                        ? (o
                            ? ((o = !1), (i = n && Array.isArray(n) ? n : []))
                            : (i = n && C.isPlainObject(n) ? n : {}),
                          (a[t] = C.extend(l, i, r)))
                        : void 0 !== r && (a[t] = r))
            return a
          }),
          C.extend({
            expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(e) {
              throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
              var t, n
              return (
                !(!e || '[object Object]' !== d.call(e)) &&
                (!(t = s(e)) ||
                  ('function' ==
                    typeof (n = h.call(t, 'constructor') && t.constructor) &&
                    g.call(n) === v))
              )
            },
            isEmptyObject: function(e) {
              var t
              for (t in e) return !1
              return !0
            },
            globalEval: function(e) {
              w(e)
            },
            each: function(e, t) {
              var n,
                r = 0
              if (E(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
              return e
            },
            trim: function(e) {
              return null == e ? '' : (e + '').replace(k, '')
            },
            makeArray: function(e, t) {
              var n = t || []
              return (
                null != e &&
                  (E(Object(e))
                    ? C.merge(n, 'string' == typeof e ? [e] : e)
                    : c.call(n, e)),
                n
              )
            },
            inArray: function(e, t, n) {
              return null == t ? -1 : f.call(t, e, n)
            },
            merge: function(e, t) {
              for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r]
              return (e.length = o), e
            },
            grep: function(e, t, n) {
              for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) !== a && r.push(e[o])
              return r
            },
            map: function(e, t, n) {
              var r,
                o,
                i = 0,
                a = []
              if (E(e))
                for (r = e.length; i < r; i++)
                  null != (o = t(e[i], i, n)) && a.push(o)
              else for (i in e) null != (o = t(e[i], i, n)) && a.push(o)
              return l.apply([], a)
            },
            guid: 1,
            support: y,
          }),
          'function' == typeof Symbol &&
            (C.fn[Symbol.iterator] = i[Symbol.iterator]),
          C.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
              ' ',
            ),
            function(e, t) {
              p['[object ' + t + ']'] = t.toLowerCase()
            },
          )
        var S =
          /*!
           * Sizzle CSS Selector Engine v2.3.3
           * https://sizzlejs.com/
           *
           * Copyright jQuery Foundation and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           *
           * Date: 2016-08-08
           */
          (function(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              y,
              m,
              b,
              x = 'sizzle' + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              k = ae(),
              E = ae(),
              S = ae(),
              N = function(e, t) {
                return e === t && (f = !0), 0
              },
              D = {}.hasOwnProperty,
              j = [],
              A = j.pop,
              q = j.push,
              O = j.push,
              L = j.slice,
              P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n
                return -1
              },
              H =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
              R = '[\\x20\\t\\r\\n\\f]',
              _ = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
              I =
                '\\[' +
                R +
                '*(' +
                _ +
                ')(?:' +
                R +
                '*([*^$|!~]?=)' +
                R +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                _ +
                '))|)' +
                R +
                '*\\]',
              M =
                ':(' +
                _ +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                I +
                ')*)|.*)\\)|)',
              F = new RegExp(R + '+', 'g'),
              W = new RegExp(
                '^' + R + '+|((?:^|[^\\\\])(?:\\\\.)*)' + R + '+$',
                'g',
              ),
              B = new RegExp('^' + R + '*,' + R + '*'),
              $ = new RegExp('^' + R + '*([>+~]|' + R + ')' + R + '*'),
              z = new RegExp('=' + R + '*([^\\]\'"]*?)' + R + '*\\]', 'g'),
              U = new RegExp(M),
              X = new RegExp('^' + _ + '$'),
              G = {
                ID: new RegExp('^#(' + _ + ')'),
                CLASS: new RegExp('^\\.(' + _ + ')'),
                TAG: new RegExp('^(' + _ + '|[*])'),
                ATTR: new RegExp('^' + I),
                PSEUDO: new RegExp('^' + M),
                CHILD: new RegExp(
                  '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                    R +
                    '*(even|odd|(([+-]|)(\\d*)n|)' +
                    R +
                    '*(?:([+-]|)' +
                    R +
                    '*(\\d+)|))' +
                    R +
                    '*\\)|)',
                  'i',
                ),
                bool: new RegExp('^(?:' + H + ')$', 'i'),
                needsContext: new RegExp(
                  '^' +
                    R +
                    '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                    R +
                    '*((?:-\\d)?\\d*)' +
                    R +
                    '*\\)|)(?=[^-]|$)',
                  'i',
                ),
              },
              V = /^(?:input|select|textarea|button)$/i,
              Y = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              Q = /[+~]/,
              Z = new RegExp(
                '\\\\([\\da-f]{1,6}' + R + '?|(' + R + ')|.)',
                'ig',
              ),
              ee = function(e, t, n) {
                var r = '0x' + t - 65536
                return r != r || n
                  ? t
                  : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
              },
              te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ne = function(e, t) {
                return t
                  ? '\0' === e
                    ? '�'
                    : e.slice(0, -1) +
                      '\\' +
                      e.charCodeAt(e.length - 1).toString(16) +
                      ' '
                  : '\\' + e
              },
              re = function() {
                p()
              },
              oe = me(
                function(e) {
                  return !0 === e.disabled && ('form' in e || 'label' in e)
                },
                { dir: 'parentNode', next: 'legend' },
              )
            try {
              O.apply((j = L.call(w.childNodes)), w.childNodes),
                j[w.childNodes.length].nodeType
            } catch (e) {
              O = {
                apply: j.length
                  ? function(e, t) {
                      q.apply(e, L.call(t))
                    }
                  : function(e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1
                    },
              }
            }
            function ie(e, t, r, o) {
              var i,
                s,
                l,
                c,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9
              if (
                ((r = r || []),
                'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
              )
                return r
              if (
                !o &&
                ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
              ) {
                if (11 !== T && (f = K.exec(e)))
                  if ((i = f[1])) {
                    if (9 === T) {
                      if (!(l = t.getElementById(i))) return r
                      if (l.id === i) return r.push(l), r
                    } else if (
                      m &&
                      (l = m.getElementById(i)) &&
                      b(t, l) &&
                      l.id === i
                    )
                      return r.push(l), r
                  } else {
                    if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return O.apply(r, t.getElementsByClassName(i)), r
                  }
                if (n.qsa && !S[e + ' '] && (!v || !v.test(e))) {
                  if (1 !== T) (m = t), (y = e)
                  else if ('object' !== t.nodeName.toLowerCase()) {
                    for (
                      (c = t.getAttribute('id'))
                        ? (c = c.replace(te, ne))
                        : t.setAttribute('id', (c = x)),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = '#' + c + ' ' + ye(h[s])
                    ;(y = h.join(',')),
                      (m = (Q.test(e) && ge(t.parentNode)) || t)
                  }
                  if (y)
                    try {
                      return O.apply(r, m.querySelectorAll(y)), r
                    } catch (e) {
                    } finally {
                      c === x && t.removeAttribute('id')
                    }
                }
              }
              return u(e.replace(W, '$1'), t, r, o)
            }
            function ae() {
              var e = []
              return function t(n, o) {
                return (
                  e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
                  (t[n + ' '] = o)
                )
              }
            }
            function se(e) {
              return (e[x] = !0), e
            }
            function ue(e) {
              var t = d.createElement('fieldset')
              try {
                return !!e(t)
              } catch (e) {
                return !1
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null)
              }
            }
            function le(e, t) {
              for (var n = e.split('|'), o = n.length; o--; )
                r.attrHandle[n[o]] = t
            }
            function ce(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex
              if (r) return r
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
              return e ? 1 : -1
            }
            function fe(e) {
              return function(t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e
              }
            }
            function pe(e) {
              return function(t) {
                var n = t.nodeName.toLowerCase()
                return ('input' === n || 'button' === n) && t.type === e
              }
            }
            function de(e) {
              return function(t) {
                return 'form' in t
                  ? t.parentNode && !1 === t.disabled
                    ? 'label' in t
                      ? 'label' in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : 'label' in t && t.disabled === e
              }
            }
            function he(e) {
              return se(function(t) {
                return (
                  (t = +t),
                  se(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]))
                  })
                )
              })
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in ((n = ie.support = {}),
            (i = ie.isXML = function(e) {
              var t = e && (e.ownerDocument || e).documentElement
              return !!t && 'HTML' !== t.nodeName
            }),
            (p = ie.setDocument = function(e) {
              var t,
                o,
                a = e ? e.ownerDocument || e : w
              return a !== d && 9 === a.nodeType && a.documentElement
                ? ((h = (d = a).documentElement),
                  (g = !i(d)),
                  w !== d &&
                    (o = d.defaultView) &&
                    o.top !== o &&
                    (o.addEventListener
                      ? o.addEventListener('unload', re, !1)
                      : o.attachEvent && o.attachEvent('onunload', re)),
                  (n.attributes = ue(function(e) {
                    return (e.className = 'i'), !e.getAttribute('className')
                  })),
                  (n.getElementsByTagName = ue(function(e) {
                    return (
                      e.appendChild(d.createComment('')),
                      !e.getElementsByTagName('*').length
                    )
                  })),
                  (n.getElementsByClassName = J.test(d.getElementsByClassName)),
                  (n.getById = ue(function(e) {
                    return (
                      (h.appendChild(e).id = x),
                      !d.getElementsByName || !d.getElementsByName(x).length
                    )
                  })),
                  n.getById
                    ? ((r.filter.ID = function(e) {
                        var t = e.replace(Z, ee)
                        return function(e) {
                          return e.getAttribute('id') === t
                        }
                      }),
                      (r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e)
                          return n ? [n] : []
                        }
                      }))
                    : ((r.filter.ID = function(e) {
                        var t = e.replace(Z, ee)
                        return function(e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode('id')
                          return n && n.value === t
                        }
                      }),
                      (r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e)
                          if (i) {
                            if ((n = i.getAttributeNode('id')) && n.value === e)
                              return [i]
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (n = i.getAttributeNode('id')) &&
                                n.value === e
                              )
                                return [i]
                          }
                          return []
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function(e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0
                      }
                    : function(e, t) {
                        var n,
                          r = [],
                          o = 0,
                          i = t.getElementsByTagName(e)
                        if ('*' === e) {
                          for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n)
                          return r
                        }
                        return i
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function(e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e)
                    }),
                  (y = []),
                  (v = []),
                  (n.qsa = J.test(d.querySelectorAll)) &&
                    (ue(function(e) {
                      ;(h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push('[*^$]=' + R + '*(?:\'\'|"")'),
                        e.querySelectorAll('[selected]').length ||
                          v.push('\\[' + R + '*(?:value|' + H + ')'),
                        e.querySelectorAll('[id~=' + x + '-]').length ||
                          v.push('~='),
                        e.querySelectorAll(':checked').length ||
                          v.push(':checked'),
                        e.querySelectorAll('a#' + x + '+*').length ||
                          v.push('.#.+[+~]')
                    }),
                    ue(function(e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                      var t = d.createElement('input')
                      t.setAttribute('type', 'hidden'),
                        e.appendChild(t).setAttribute('name', 'D'),
                        e.querySelectorAll('[name=d]').length &&
                          v.push('name' + R + '*[*^$|!~]?='),
                        2 !== e.querySelectorAll(':enabled').length &&
                          v.push(':enabled', ':disabled'),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length &&
                          v.push(':enabled', ':disabled'),
                        e.querySelectorAll('*,:x'),
                        v.push(',.*:')
                    })),
                  (n.matchesSelector = J.test(
                    (m =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector),
                  )) &&
                    ue(function(e) {
                      ;(n.disconnectedMatch = m.call(e, '*')),
                        m.call(e, "[s!='']:x"),
                        y.push('!=', M)
                    }),
                  (v = v.length && new RegExp(v.join('|'))),
                  (y = y.length && new RegExp(y.join('|'))),
                  (t = J.test(h.compareDocumentPosition)),
                  (b =
                    t || J.test(h.contains)
                      ? function(e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          )
                        }
                      : function(e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0
                          return !1
                        }),
                  (N = t
                    ? function(e, t) {
                        if (e === t) return (f = !0), 0
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === d || (e.ownerDocument === w && b(w, e))
                              ? -1
                              : t === d || (t.ownerDocument === w && b(w, t))
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        )
                      }
                    : function(e, t) {
                        if (e === t) return (f = !0), 0
                        var n,
                          r = 0,
                          o = e.parentNode,
                          i = t.parentNode,
                          a = [e],
                          s = [t]
                        if (!o || !i)
                          return e === d
                            ? -1
                            : t === d
                            ? 1
                            : o
                            ? -1
                            : i
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0
                        if (o === i) return ce(e, t)
                        for (n = e; (n = n.parentNode); ) a.unshift(n)
                        for (n = t; (n = n.parentNode); ) s.unshift(n)
                        for (; a[r] === s[r]; ) r++
                        return r
                          ? ce(a[r], s[r])
                          : a[r] === w
                          ? -1
                          : s[r] === w
                          ? 1
                          : 0
                      }),
                  d)
                : d
            }),
            (ie.matches = function(e, t) {
              return ie(e, null, null, t)
            }),
            (ie.matchesSelector = function(e, t) {
              if (
                ((e.ownerDocument || e) !== d && p(e),
                (t = t.replace(z, "='$1']")),
                n.matchesSelector &&
                  g &&
                  !S[t + ' '] &&
                  (!y || !y.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var r = m.call(e, t)
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r
                } catch (e) {}
              return ie(t, d, null, [e]).length > 0
            }),
            (ie.contains = function(e, t) {
              return (e.ownerDocument || e) !== d && p(e), b(e, t)
            }),
            (ie.attr = function(e, t) {
              ;(e.ownerDocument || e) !== d && p(e)
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && D.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !g)
                    : void 0
              return void 0 !== i
                ? i
                : n.attributes || !g
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null
            }),
            (ie.escape = function(e) {
              return (e + '').replace(te, ne)
            }),
            (ie.error = function(e) {
              throw new Error('Syntax error, unrecognized expression: ' + e)
            }),
            (ie.uniqueSort = function(e) {
              var t,
                r = [],
                o = 0,
                i = 0
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i))
                for (; o--; ) e.splice(r[o], 1)
              }
              return (c = null), e
            }),
            (o = ie.getText = function(e) {
              var t,
                n = '',
                r = 0,
                i = e.nodeType
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ('string' == typeof e.textContent) return e.textContent
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
              } else for (; (t = e[r++]); ) n += o(t)
              return n
            }),
            ((r = ie.selectors = {
              cacheLength: 50,
              createPseudo: se,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function(e) {
                  return (
                    (e[1] = e[1].replace(Z, ee)),
                    (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                  )
                },
                CHILD: function(e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    'nth' === e[1].slice(0, 3)
                      ? (e[3] || ie.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && ie.error(e[0]),
                    e
                  )
                },
                PSEUDO: function(e) {
                  var t,
                    n = !e[6] && e[2]
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || '')
                        : n &&
                          U.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(')', n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3))
                },
              },
              filter: {
                TAG: function(e) {
                  var t = e.replace(Z, ee).toLowerCase()
                  return '*' === e
                    ? function() {
                        return !0
                      }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                      }
                },
                CLASS: function(e) {
                  var t = k[e + ' ']
                  return (
                    t ||
                    ((t = new RegExp('(^|' + R + ')' + e + '(' + R + '|$)')) &&
                      k(e, function(e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute('class')) ||
                            '',
                        )
                      }))
                  )
                },
                ATTR: function(e, t, n) {
                  return function(r) {
                    var o = ie.attr(r, e)
                    return null == o
                      ? '!=' === t
                      : !t ||
                          ((o += ''),
                          '=' === t
                            ? o === n
                            : '!=' === t
                            ? o !== n
                            : '^=' === t
                            ? n && 0 === o.indexOf(n)
                            : '*=' === t
                            ? n && o.indexOf(n) > -1
                            : '$=' === t
                            ? n && o.slice(-n.length) === n
                            : '~=' === t
                            ? (' ' + o.replace(F, ' ') + ' ').indexOf(n) > -1
                            : '|=' === t &&
                              (o === n || o.slice(0, n.length + 1) === n + '-'))
                  }
                },
                CHILD: function(e, t, n, r, o) {
                  var i = 'nth' !== e.slice(0, 3),
                    a = 'last' !== e.slice(-4),
                    s = 'of-type' === t
                  return 1 === r && 0 === o
                    ? function(e) {
                        return !!e.parentNode
                      }
                    : function(t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = i !== a ? 'nextSibling' : 'previousSibling',
                          v = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          m = !u && !s,
                          b = !1
                        if (v) {
                          if (i) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === y
                                    : 1 === p.nodeType
                                )
                                  return !1
                              h = g = 'only' === e && !h && 'nextSibling'
                            }
                            return !0
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && m)
                          ) {
                            for (
                              b =
                                (d =
                                  (l =
                                    (c =
                                      (f = (p = v)[x] || (p[x] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (b = d = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++b && p === t) {
                                c[e] = [T, d, b]
                                break
                              }
                          } else if (
                            (m &&
                              (b = d =
                                (l =
                                  (c =
                                    (f = (p = t)[x] || (p[x] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (b = d = 0) || h.pop()) &&
                              ((s
                                ? p.nodeName.toLowerCase() !== y
                                : 1 !== p.nodeType) ||
                                !++b ||
                                (m &&
                                  ((c =
                                    (f = p[x] || (p[x] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, b]),
                                p !== t));

                            );
                          return (b -= o) === r || (b % r == 0 && b / r >= 0)
                        }
                      }
                },
                PSEUDO: function(e, t) {
                  var n,
                    o =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ie.error('unsupported pseudo: ' + e)
                  return o[x]
                    ? o(t)
                    : o.length > 1
                    ? ((n = [e, e, '', t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? se(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--; )
                              e[(r = P(e, i[a]))] = !(n[r] = i[a])
                          })
                        : function(e) {
                            return o(e, 0, n)
                          })
                    : o
                },
              },
              pseudos: {
                not: se(function(e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(W, '$1'))
                  return r[x]
                    ? se(function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; )
                          (i = a[s]) && (e[s] = !(t[s] = i))
                      })
                    : function(e, o, i) {
                        return (
                          (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                        )
                      }
                }),
                has: se(function(e) {
                  return function(t) {
                    return ie(e, t).length > 0
                  }
                }),
                contains: se(function(e) {
                  return (
                    (e = e.replace(Z, ee)),
                    function(t) {
                      return (
                        (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                      )
                    }
                  )
                }),
                lang: se(function(e) {
                  return (
                    X.test(e || '') || ie.error('unsupported lang: ' + e),
                    (e = e.replace(Z, ee).toLowerCase()),
                    function(t) {
                      var n
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute('xml:lang') ||
                              t.getAttribute('lang'))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + '-')
                          )
                      } while ((t = t.parentNode) && 1 === t.nodeType)
                      return !1
                    }
                  )
                }),
                target: function(t) {
                  var n = e.location && e.location.hash
                  return n && n.slice(1) === t.id
                },
                root: function(e) {
                  return e === h
                },
                focus: function(e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  )
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                  var t = e.nodeName.toLowerCase()
                  return (
                    ('input' === t && !!e.checked) ||
                    ('option' === t && !!e.selected)
                  )
                },
                selected: function(e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  )
                },
                empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1
                  return !0
                },
                parent: function(e) {
                  return !r.pseudos.empty(e)
                },
                header: function(e) {
                  return Y.test(e.nodeName)
                },
                input: function(e) {
                  return V.test(e.nodeName)
                },
                button: function(e) {
                  var t = e.nodeName.toLowerCase()
                  return (
                    ('input' === t && 'button' === e.type) || 'button' === t
                  )
                },
                text: function(e) {
                  var t
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'text' === e.type &&
                    (null == (t = e.getAttribute('type')) ||
                      'text' === t.toLowerCase())
                  )
                },
                first: he(function() {
                  return [0]
                }),
                last: he(function(e, t) {
                  return [t - 1]
                }),
                eq: he(function(e, t, n) {
                  return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n)
                  return e
                }),
                odd: he(function(e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n)
                  return e
                }),
                lt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r)
                  return e
                }),
                gt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
                  return e
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = fe(t)
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t)
            function ve() {}
            function ye(e) {
              for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
              return r
            }
            function me(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && 'parentNode' === i,
                s = C++
              return t.first
                ? function(t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o)
                    return !1
                  }
                : function(t, n, u) {
                    var l,
                      c,
                      f,
                      p = [T, s]
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t
                          else {
                            if ((l = c[i]) && l[0] === T && l[1] === s)
                              return (p[2] = l[2])
                            if (((c[i] = p), (p[2] = e(t, n, u)))) return !0
                          }
                    return !1
                  }
            }
            function be(e) {
              return e.length > 1
                ? function(t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1
                    return !0
                  }
                : e[0]
            }
            function xe(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)))
              return a
            }
            function we(e, t, n, r, o, i) {
              return (
                r && !r[x] && (r = we(r)),
                o && !o[x] && (o = we(o, i)),
                se(function(i, a, s, u) {
                  var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g =
                      i ||
                      (function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n)
                        return n
                      })(t || '*', s.nodeType ? [s] : s, []),
                    v = !e || (!i && t) ? g : xe(g, p, e, s, u),
                    y = n ? (o || (i ? e : h || r) ? [] : a) : v
                  if ((n && n(v, y, s, u), r))
                    for (l = xe(y, d), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (y[d[c]] = !(v[d[c]] = f))
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (l = [], c = y.length; c--; )
                          (f = y[c]) && l.push((v[c] = f))
                        o(null, (y = []), l, u)
                      }
                      for (c = y.length; c--; )
                        (f = y[c]) &&
                          (l = o ? P(i, f) : p[c]) > -1 &&
                          (i[l] = !(a[l] = f))
                    }
                  } else (y = xe(y === a ? y.splice(h, y.length) : y)), o ? o(null, a, y, u) : O.apply(a, y)
                })
              )
            }
            function Te(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[' '],
                  u = a ? 1 : 0,
                  c = me(
                    function(e) {
                      return e === t
                    },
                    s,
                    !0,
                  ),
                  f = me(
                    function(e) {
                      return P(t, e) > -1
                    },
                    s,
                    !0,
                  ),
                  p = [
                    function(e, n, r) {
                      var o =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r))
                      return (t = null), o
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [me(be(p), n)]
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return we(
                      u > 1 && be(p),
                      u > 1 &&
                        ye(
                          e
                            .slice(0, u - 1)
                            .concat({
                              value: ' ' === e[u - 2].type ? '*' : '',
                            }),
                        ).replace(W, '$1'),
                      n,
                      u < o && Te(e.slice(u, o)),
                      o < i && Te((e = e.slice(o))),
                      o < i && ye(e),
                    )
                  }
                  p.push(n)
                }
              return be(p)
            }
            return (
              (ve.prototype = r.filters = r.pseudos),
              (r.setFilters = new ve()),
              (a = ie.tokenize = function(e, t) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c = E[e + ' ']
                if (c) return t ? 0 : c.slice(0)
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(o = B.exec(s))) ||
                    (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                  (n = !1),
                  (o = $.exec(s)) &&
                    ((n = o.shift()),
                    i.push({ value: n, type: o[0].replace(W, ' ') }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(o = G[a].exec(s)) ||
                      (l[a] && !(o = l[a](o))) ||
                      ((n = o.shift()),
                      i.push({ value: n, type: a, matches: o }),
                      (s = s.slice(n.length)))
                  if (!n) break
                }
                return t ? s.length : s ? ie.error(e) : E(e, u).slice(0)
              }),
              (s = ie.compile = function(e, t) {
                var n,
                  o = [],
                  i = [],
                  s = S[e + ' ']
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Te(t[n]))[x] ? o.push(s) : i.push(s)
                  ;(s = S(
                    e,
                    (function(e, t) {
                      var n = t.length > 0,
                        o = e.length > 0,
                        i = function(i, a, s, u, c) {
                          var f,
                            h,
                            v,
                            y = 0,
                            m = '0',
                            b = i && [],
                            x = [],
                            w = l,
                            C = i || (o && r.find.TAG('*', c)),
                            k = (T += null == w ? 1 : Math.random() || 0.1),
                            E = C.length
                          for (
                            c && (l = a === d || a || c);
                            m !== E && null != (f = C[m]);
                            m++
                          ) {
                            if (o && f) {
                              for (
                                h = 0,
                                  a ||
                                    f.ownerDocument === d ||
                                    (p(f), (s = !g));
                                (v = e[h++]);

                              )
                                if (v(f, a || d, s)) {
                                  u.push(f)
                                  break
                                }
                              c && (T = k)
                            }
                            n && ((f = !v && f) && y--, i && b.push(f))
                          }
                          if (((y += m), n && m !== y)) {
                            for (h = 0; (v = t[h++]); ) v(b, x, a, s)
                            if (i) {
                              if (y > 0)
                                for (; m--; ) b[m] || x[m] || (x[m] = A.call(u))
                              x = xe(x)
                            }
                            O.apply(u, x),
                              c &&
                                !i &&
                                x.length > 0 &&
                                y + t.length > 1 &&
                                ie.uniqueSort(u)
                          }
                          return c && ((T = k), (l = w)), b
                        }
                      return n ? se(i) : i
                    })(i, o),
                  )).selector = e
                }
                return s
              }),
              (u = ie.select = function(e, t, n, o) {
                var i,
                  u,
                  l,
                  c,
                  f,
                  p = 'function' == typeof e && e,
                  d = !o && a((e = p.selector || e))
                if (((n = n || []), 1 === d.length)) {
                  if (
                    (u = d[0] = d[0].slice(0)).length > 2 &&
                    'ID' === (l = u[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(Z, ee), t) ||
                        [])[0])
                    )
                      return n
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length))
                  }
                  for (
                    i = G.needsContext.test(e) ? 0 : u.length;
                    i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (o = f(
                        l.matches[0].replace(Z, ee),
                        (Q.test(u[0].type) && ge(t.parentNode)) || t,
                      ))
                    ) {
                      if ((u.splice(i, 1), !(e = o.length && ye(u))))
                        return O.apply(n, o), n
                      break
                    }
                }
                return (
                  (p || s(e, d))(
                    o,
                    t,
                    !g,
                    n,
                    !t || (Q.test(e) && ge(t.parentNode)) || t,
                  ),
                  n
                )
              }),
              (n.sortStable =
                x
                  .split('')
                  .sort(N)
                  .join('') === x),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = ue(function(e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement('fieldset'))
                )
              })),
              ue(function(e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  '#' === e.firstChild.getAttribute('href')
                )
              }) ||
                le('type|href|height|width', function(e, t, n) {
                  if (!n)
                    return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
                }),
              (n.attributes &&
                ue(function(e) {
                  return (
                    (e.innerHTML = '<input/>'),
                    e.firstChild.setAttribute('value', ''),
                    '' === e.firstChild.getAttribute('value')
                  )
                })) ||
                le('value', function(e, t, n) {
                  if (!n && 'input' === e.nodeName.toLowerCase())
                    return e.defaultValue
                }),
              ue(function(e) {
                return null == e.getAttribute('disabled')
              }) ||
                le(H, function(e, t, n) {
                  var r
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null
                }),
              ie
            )
          })(n)
        ;(C.find = S),
          (C.expr = S.selectors),
          (C.expr[':'] = C.expr.pseudos),
          (C.uniqueSort = C.unique = S.uniqueSort),
          (C.text = S.getText),
          (C.isXMLDoc = S.isXML),
          (C.contains = S.contains),
          (C.escapeSelector = S.escape)
        var N = function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && C(e).is(n)) break
                r.push(e)
              }
            return r
          },
          D = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e)
            return n
          },
          j = C.expr.match.needsContext
        function A(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        function O(e, t, n) {
          return m(t)
            ? C.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
              })
            : t.nodeType
            ? C.grep(e, function(e) {
                return (e === t) !== n
              })
            : 'string' != typeof t
            ? C.grep(e, function(e) {
                return f.call(t, e) > -1 !== n
              })
            : C.filter(t, e, n)
        }
        ;(C.filter = function(e, t, n) {
          var r = t[0]
          return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
              ? C.find.matchesSelector(r, e)
                ? [r]
                : []
              : C.find.matches(
                  e,
                  C.grep(t, function(e) {
                    return 1 === e.nodeType
                  }),
                )
          )
        }),
          C.fn.extend({
            find: function(e) {
              var t,
                n,
                r = this.length,
                o = this
              if ('string' != typeof e)
                return this.pushStack(
                  C(e).filter(function() {
                    for (t = 0; t < r; t++)
                      if (C.contains(o[t], this)) return !0
                  }),
                )
              for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n)
              return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
              return this.pushStack(O(this, e || [], !1))
            },
            not: function(e) {
              return this.pushStack(O(this, e || [], !0))
            },
            is: function(e) {
              return !!O(
                this,
                'string' == typeof e && j.test(e) ? C(e) : e || [],
                !1,
              ).length
            },
          })
        var L,
          P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
        ;((C.fn.init = function(e, t, n) {
          var r, o
          if (!e) return this
          if (((n = n || L), 'string' == typeof e)) {
            if (
              !(r =
                '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : P.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e)
            if (r[1]) {
              if (
                ((t = t instanceof C ? t[0] : t),
                C.merge(
                  this,
                  C.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : a,
                    !0,
                  ),
                ),
                q.test(r[1]) && C.isPlainObject(t))
              )
                for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
              return this
            }
            return (
              (o = a.getElementById(r[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            )
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(C)
            : C.makeArray(e, this)
        }).prototype = C.fn),
          (L = C(a))
        var H = /^(?:parents|prev(?:Until|All))/,
          R = { children: !0, contents: !0, next: !0, prev: !0 }
        function _(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e
        }
        C.fn.extend({
          has: function(e) {
            var t = C(e, this),
              n = t.length
            return this.filter(function() {
              for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
            })
          },
          closest: function(e, t) {
            var n,
              r = 0,
              o = this.length,
              i = [],
              a = 'string' != typeof e && C(e)
            if (!j.test(e))
              for (; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && C.find.matchesSelector(n, e))
                  ) {
                    i.push(n)
                    break
                  }
            return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
          },
          index: function(e) {
            return e
              ? 'string' == typeof e
                ? f.call(C(e), this[0])
                : f.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1
          },
          add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
          },
          addBack: function(e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e),
            )
          },
        }),
          C.each(
            {
              parent: function(e) {
                var t = e.parentNode
                return t && 11 !== t.nodeType ? t : null
              },
              parents: function(e) {
                return N(e, 'parentNode')
              },
              parentsUntil: function(e, t, n) {
                return N(e, 'parentNode', n)
              },
              next: function(e) {
                return _(e, 'nextSibling')
              },
              prev: function(e) {
                return _(e, 'previousSibling')
              },
              nextAll: function(e) {
                return N(e, 'nextSibling')
              },
              prevAll: function(e) {
                return N(e, 'previousSibling')
              },
              nextUntil: function(e, t, n) {
                return N(e, 'nextSibling', n)
              },
              prevUntil: function(e, t, n) {
                return N(e, 'previousSibling', n)
              },
              siblings: function(e) {
                return D((e.parentNode || {}).firstChild, e)
              },
              children: function(e) {
                return D(e.firstChild)
              },
              contents: function(e) {
                return A(e, 'iframe')
                  ? e.contentDocument
                  : (A(e, 'template') && (e = e.content || e),
                    C.merge([], e.childNodes))
              },
            },
            function(e, t) {
              C.fn[e] = function(n, r) {
                var o = C.map(this, t, n)
                return (
                  'Until' !== e.slice(-5) && (r = n),
                  r && 'string' == typeof r && (o = C.filter(r, o)),
                  this.length > 1 &&
                    (R[e] || C.uniqueSort(o), H.test(e) && o.reverse()),
                  this.pushStack(o)
                )
              }
            },
          )
        var I = /[^\x20\t\r\n\f]+/g
        function M(e) {
          return e
        }
        function F(e) {
          throw e
        }
        function W(e, t, n, r) {
          var o
          try {
            e && m((o = e.promise))
              ? o
                  .call(e)
                  .done(t)
                  .fail(n)
              : e && m((o = e.then))
              ? o.call(e, t, n)
              : t.apply(void 0, [e].slice(r))
          } catch (e) {
            n.apply(void 0, [e])
          }
        }
        ;(C.Callbacks = function(e) {
          e =
            'string' == typeof e
              ? (function(e) {
                  var t = {}
                  return (
                    C.each(e.match(I) || [], function(e, n) {
                      t[n] = !0
                    }),
                    t
                  )
                })(e)
              : C.extend({}, e)
          var t,
            n,
            r,
            o,
            i = [],
            a = [],
            s = -1,
            u = function() {
              for (o = o || e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < i.length; )
                  !1 === i[s].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((s = i.length), (n = !1))
              e.memory || (n = !1), (t = !1), o && (i = n ? [] : '')
            },
            l = {
              add: function() {
                return (
                  i &&
                    (n && !t && ((s = i.length - 1), a.push(n)),
                    (function t(n) {
                      C.each(n, function(n, r) {
                        m(r)
                          ? (e.unique && l.has(r)) || i.push(r)
                          : r && r.length && 'string' !== T(r) && t(r)
                      })
                    })(arguments),
                    n && !t && u()),
                  this
                )
              },
              remove: function() {
                return (
                  C.each(arguments, function(e, t) {
                    for (var n; (n = C.inArray(t, i, n)) > -1; )
                      i.splice(n, 1), n <= s && s--
                  }),
                  this
                )
              },
              has: function(e) {
                return e ? C.inArray(e, i) > -1 : i.length > 0
              },
              empty: function() {
                return i && (i = []), this
              },
              disable: function() {
                return (o = a = []), (i = n = ''), this
              },
              disabled: function() {
                return !i
              },
              lock: function() {
                return (o = a = []), n || t || (i = n = ''), this
              },
              locked: function() {
                return !!o
              },
              fireWith: function(e, n) {
                return (
                  o ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    t || u()),
                  this
                )
              },
              fire: function() {
                return l.fireWith(this, arguments), this
              },
              fired: function() {
                return !!r
              },
            }
          return l
        }),
          C.extend({
            Deferred: function(e) {
              var t = [
                  [
                    'notify',
                    'progress',
                    C.Callbacks('memory'),
                    C.Callbacks('memory'),
                    2,
                  ],
                  [
                    'resolve',
                    'done',
                    C.Callbacks('once memory'),
                    C.Callbacks('once memory'),
                    0,
                    'resolved',
                  ],
                  [
                    'reject',
                    'fail',
                    C.Callbacks('once memory'),
                    C.Callbacks('once memory'),
                    1,
                    'rejected',
                  ],
                ],
                r = 'pending',
                o = {
                  state: function() {
                    return r
                  },
                  always: function() {
                    return i.done(arguments).fail(arguments), this
                  },
                  catch: function(e) {
                    return o.then(null, e)
                  },
                  pipe: function() {
                    var e = arguments
                    return C.Deferred(function(n) {
                      C.each(t, function(t, r) {
                        var o = m(e[r[4]]) && e[r[4]]
                        i[r[1]](function() {
                          var e = o && o.apply(this, arguments)
                          e && m(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + 'With'](this, o ? [e] : arguments)
                        })
                      }),
                        (e = null)
                    }).promise()
                  },
                  then: function(e, r, o) {
                    var i = 0
                    function a(e, t, r, o) {
                      return function() {
                        var s = this,
                          u = arguments,
                          l = function() {
                            var n, l
                            if (!(e < i)) {
                              if ((n = r.apply(s, u)) === t.promise())
                                throw new TypeError('Thenable self-resolution')
                              ;(l =
                                n &&
                                ('object' == typeof n ||
                                  'function' == typeof n) &&
                                n.then),
                                m(l)
                                  ? o
                                    ? l.call(n, a(i, t, M, o), a(i, t, F, o))
                                    : (i++,
                                      l.call(
                                        n,
                                        a(i, t, M, o),
                                        a(i, t, F, o),
                                        a(i, t, M, t.notifyWith),
                                      ))
                                  : (r !== M && ((s = void 0), (u = [n])),
                                    (o || t.resolveWith)(s, u))
                            }
                          },
                          c = o
                            ? l
                            : function() {
                                try {
                                  l()
                                } catch (n) {
                                  C.Deferred.exceptionHook &&
                                    C.Deferred.exceptionHook(n, c.stackTrace),
                                    e + 1 >= i &&
                                      (r !== F && ((s = void 0), (u = [n])),
                                      t.rejectWith(s, u))
                                }
                              }
                        e
                          ? c()
                          : (C.Deferred.getStackHook &&
                              (c.stackTrace = C.Deferred.getStackHook()),
                            n.setTimeout(c))
                      }
                    }
                    return C.Deferred(function(n) {
                      t[0][3].add(a(0, n, m(o) ? o : M, n.notifyWith)),
                        t[1][3].add(a(0, n, m(e) ? e : M)),
                        t[2][3].add(a(0, n, m(r) ? r : F))
                    }).promise()
                  },
                  promise: function(e) {
                    return null != e ? C.extend(e, o) : o
                  },
                },
                i = {}
              return (
                C.each(t, function(e, n) {
                  var a = n[2],
                    s = n[5]
                  ;(o[n[1]] = a.add),
                    s &&
                      a.add(
                        function() {
                          r = s
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock,
                      ),
                    a.add(n[3].fire),
                    (i[n[0]] = function() {
                      return (
                        i[n[0] + 'With'](this === i ? void 0 : this, arguments),
                        this
                      )
                    }),
                    (i[n[0] + 'With'] = a.fireWith)
                }),
                o.promise(i),
                e && e.call(i, i),
                i
              )
            },
            when: function(e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                o = u.call(arguments),
                i = C.Deferred(),
                a = function(e) {
                  return function(n) {
                    ;(r[e] = this),
                      (o[e] = arguments.length > 1 ? u.call(arguments) : n),
                      --t || i.resolveWith(r, o)
                  }
                }
              if (
                t <= 1 &&
                (W(e, i.done(a(n)).resolve, i.reject, !t),
                'pending' === i.state() || m(o[n] && o[n].then))
              )
                return i.then()
              for (; n--; ) W(o[n], a(n), i.reject)
              return i.promise()
            },
          })
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
        ;(C.Deferred.exceptionHook = function(e, t) {
          n.console &&
            n.console.warn &&
            e &&
            B.test(e.name) &&
            n.console.warn(
              'jQuery.Deferred exception: ' + e.message,
              e.stack,
              t,
            )
        }),
          (C.readyException = function(e) {
            n.setTimeout(function() {
              throw e
            })
          })
        var $ = C.Deferred()
        function z() {
          a.removeEventListener('DOMContentLoaded', z),
            n.removeEventListener('load', z),
            C.ready()
        }
        ;(C.fn.ready = function(e) {
          return (
            $.then(e).catch(function(e) {
              C.readyException(e)
            }),
            this
          )
        }),
          C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
              ;(!0 === e ? --C.readyWait : C.isReady) ||
                ((C.isReady = !0),
                (!0 !== e && --C.readyWait > 0) || $.resolveWith(a, [C]))
            },
          }),
          (C.ready.then = $.then),
          'complete' === a.readyState ||
          ('loading' !== a.readyState && !a.documentElement.doScroll)
            ? n.setTimeout(C.ready)
            : (a.addEventListener('DOMContentLoaded', z),
              n.addEventListener('load', z))
        var U = function(e, t, n, r, o, i, a) {
            var s = 0,
              u = e.length,
              l = null == n
            if ('object' === T(n))
              for (s in ((o = !0), n)) U(e, t, s, n[s], !0, i, a)
            else if (
              void 0 !== r &&
              ((o = !0),
              m(r) || (a = !0),
              l &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function(e, t, n) {
                      return l.call(C(e), n)
                    }))),
              t)
            )
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
          },
          X = /^-ms-/,
          G = /-([a-z])/g
        function V(e, t) {
          return t.toUpperCase()
        }
        function Y(e) {
          return e.replace(X, 'ms-').replace(G, V)
        }
        var J = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }
        function K() {
          this.expando = C.expando + K.uid++
        }
        ;(K.uid = 1),
          (K.prototype = {
            cache: function(e) {
              var t = e[this.expando]
              return (
                t ||
                  ((t = {}),
                  J(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              )
            },
            set: function(e, t, n) {
              var r,
                o = this.cache(e)
              if ('string' == typeof t) o[Y(t)] = n
              else for (r in t) o[Y(r)] = t[r]
              return o
            },
            get: function(e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][Y(t)]
            },
            access: function(e, t, n) {
              return void 0 === t || (t && 'string' == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
              var n,
                r = e[this.expando]
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(Y)
                    : (t = Y(t)) in r
                    ? [t]
                    : t.match(I) || []).length
                  for (; n--; ) delete r[t[n]]
                }
                ;(void 0 === t || C.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando])
              }
            },
            hasData: function(e) {
              var t = e[this.expando]
              return void 0 !== t && !C.isEmptyObject(t)
            },
          })
        var Q = new K(),
          Z = new K(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g
        function ne(e, t, n) {
          var r
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
              'string' == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function(e) {
                  return (
                    'true' === e ||
                    ('false' !== e &&
                      ('null' === e
                        ? null
                        : e === +e + ''
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  )
                })(n)
              } catch (e) {}
              Z.set(e, t, n)
            } else n = void 0
          return n
        }
        C.extend({
          hasData: function(e) {
            return Z.hasData(e) || Q.hasData(e)
          },
          data: function(e, t, n) {
            return Z.access(e, t, n)
          },
          removeData: function(e, t) {
            Z.remove(e, t)
          },
          _data: function(e, t, n) {
            return Q.access(e, t, n)
          },
          _removeData: function(e, t) {
            Q.remove(e, t)
          },
        }),
          C.fn.extend({
            data: function(e, t) {
              var n,
                r,
                o,
                i = this[0],
                a = i && i.attributes
              if (void 0 === e) {
                if (
                  this.length &&
                  ((o = Z.get(i)),
                  1 === i.nodeType && !Q.get(i, 'hasDataAttrs'))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      0 === (r = a[n].name).indexOf('data-') &&
                      ((r = Y(r.slice(5))), ne(i, r, o[r]))
                  Q.set(i, 'hasDataAttrs', !0)
                }
                return o
              }
              return 'object' == typeof e
                ? this.each(function() {
                    Z.set(this, e)
                  })
                : U(
                    this,
                    function(t) {
                      var n
                      if (i && void 0 === t)
                        return void 0 !== (n = Z.get(i, e))
                          ? n
                          : void 0 !== (n = ne(i, e))
                          ? n
                          : void 0
                      this.each(function() {
                        Z.set(this, e, t)
                      })
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0,
                  )
            },
            removeData: function(e) {
              return this.each(function() {
                Z.remove(this, e)
              })
            },
          }),
          C.extend({
            queue: function(e, t, n) {
              var r
              if (e)
                return (
                  (t = (t || 'fx') + 'queue'),
                  (r = Q.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = Q.access(e, t, C.makeArray(n)))
                      : r.push(n)),
                  r || []
                )
            },
            dequeue: function(e, t) {
              t = t || 'fx'
              var n = C.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = C._queueHooks(e, t)
              'inprogress' === o && ((o = n.shift()), r--),
                o &&
                  ('fx' === t && n.unshift('inprogress'),
                  delete i.stop,
                  o.call(
                    e,
                    function() {
                      C.dequeue(e, t)
                    },
                    i,
                  )),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
              var n = t + 'queueHooks'
              return (
                Q.get(e, n) ||
                Q.access(e, n, {
                  empty: C.Callbacks('once memory').add(function() {
                    Q.remove(e, [t + 'queue', n])
                  }),
                })
              )
            },
          }),
          C.fn.extend({
            queue: function(e, t) {
              var n = 2
              return (
                'string' != typeof e && ((t = e), (e = 'fx'), n--),
                arguments.length < n
                  ? C.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = C.queue(this, e, t)
                      C._queueHooks(this, e),
                        'fx' === e &&
                          'inprogress' !== n[0] &&
                          C.dequeue(this, e)
                    })
              )
            },
            dequeue: function(e) {
              return this.each(function() {
                C.dequeue(this, e)
              })
            },
            clearQueue: function(e) {
              return this.queue(e || 'fx', [])
            },
            promise: function(e, t) {
              var n,
                r = 1,
                o = C.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                  --r || o.resolveWith(i, [i])
                }
              for (
                'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
                a--;

              )
                (n = Q.get(i[a], e + 'queueHooks')) &&
                  n.empty &&
                  (r++, n.empty.add(s))
              return s(), o.promise(t)
            },
          })
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
          ie = ['Top', 'Right', 'Bottom', 'Left'],
          ae = function(e, t) {
            return (
              'none' === (e = t || e).style.display ||
              ('' === e.style.display &&
                C.contains(e.ownerDocument, e) &&
                'none' === C.css(e, 'display'))
            )
          },
          se = function(e, t, n, r) {
            var o,
              i,
              a = {}
            for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i])
            for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = a[i]
            return o
          }
        function ue(e, t, n, r) {
          var o,
            i,
            a = 20,
            s = r
              ? function() {
                  return r.cur()
                }
              : function() {
                  return C.css(e, t, '')
                },
            u = s(),
            l = (n && n[3]) || (C.cssNumber[t] ? '' : 'px'),
            c = (C.cssNumber[t] || ('px' !== l && +u)) && oe.exec(C.css(e, t))
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; )
              C.style(e, t, c + l),
                (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                (c /= i)
            ;(c *= 2), C.style(e, t, c + l), (n = n || [])
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = o))),
            o
          )
        }
        var le = {}
        function ce(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = le[r]
          return (
            o ||
            ((t = n.body.appendChild(n.createElement(r))),
            (o = C.css(t, 'display')),
            t.parentNode.removeChild(t),
            'none' === o && (o = 'block'),
            (le[r] = o),
            o)
          )
        }
        function fe(e, t) {
          for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style &&
              ((n = r.style.display),
              t
                ? ('none' === n &&
                    ((o[i] = Q.get(r, 'display') || null),
                    o[i] || (r.style.display = '')),
                  '' === r.style.display && ae(r) && (o[i] = ce(r)))
                : 'none' !== n && ((o[i] = 'none'), Q.set(r, 'display', n)))
          for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i])
          return e
        }
        C.fn.extend({
          show: function() {
            return fe(this, !0)
          },
          hide: function() {
            return fe(this)
          },
          toggle: function(e) {
            return 'boolean' == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function() {
                  ae(this) ? C(this).show() : C(this).hide()
                })
          },
        })
        var pe = /^(?:checkbox|radio)$/i,
          de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          he = /^$|^module$|\/(?:java|ecma)script/i,
          ge = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          }
        function ve(e, t) {
          var n
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || '*')
                : []),
            void 0 === t || (t && A(e, t)) ? C.merge([e], n) : n
          )
        }
        function ye(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], 'globalEval', !t || Q.get(t[n], 'globalEval'))
        }
        ;(ge.optgroup = ge.option),
          (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
          (ge.th = ge.td)
        var me,
          be,
          xe = /<|&#?\w+;/
        function we(e, t, n, r, o) {
          for (
            var i,
              a,
              s,
              u,
              l,
              c,
              f = t.createDocumentFragment(),
              p = [],
              d = 0,
              h = e.length;
            d < h;
            d++
          )
            if ((i = e[d]) || 0 === i)
              if ('object' === T(i)) C.merge(p, i.nodeType ? [i] : i)
              else if (xe.test(i)) {
                for (
                  a = a || f.appendChild(t.createElement('div')),
                    s = (de.exec(i) || ['', ''])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2],
                    c = u[0];
                  c--;

                )
                  a = a.lastChild
                C.merge(p, a.childNodes), ((a = f.firstChild).textContent = '')
              } else p.push(t.createTextNode(i))
          for (f.textContent = '', d = 0; (i = p[d++]); )
            if (r && C.inArray(i, r) > -1) o && o.push(i)
            else if (
              ((l = C.contains(i.ownerDocument, i)),
              (a = ve(f.appendChild(i), 'script')),
              l && ye(a),
              n)
            )
              for (c = 0; (i = a[c++]); ) he.test(i.type || '') && n.push(i)
          return f
        }
        ;(me = a.createDocumentFragment().appendChild(a.createElement('div'))),
          (be = a.createElement('input')).setAttribute('type', 'radio'),
          be.setAttribute('checked', 'checked'),
          be.setAttribute('name', 't'),
          me.appendChild(be),
          (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (me.innerHTML = '<textarea>x</textarea>'),
          (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue)
        var Te = a.documentElement,
          Ce = /^key/,
          ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ee = /^([^.]*)(?:\.(.+)|)/
        function Se() {
          return !0
        }
        function Ne() {
          return !1
        }
        function De() {
          try {
            return a.activeElement
          } catch (e) {}
        }
        function je(e, t, n, r, o, i) {
          var a, s
          if ('object' == typeof t) {
            for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
              je(e, s, n, r, t[s], i)
            return e
          }
          if (
            (null == r && null == o
              ? ((o = n), (r = n = void 0))
              : null == o &&
                ('string' == typeof n
                  ? ((o = r), (r = void 0))
                  : ((o = r), (r = n), (n = void 0))),
            !1 === o)
          )
            o = Ne
          else if (!o) return e
          return (
            1 === i &&
              ((a = o),
              ((o = function(e) {
                return C().off(e), a.apply(this, arguments)
              }).guid = a.guid || (a.guid = C.guid++))),
            e.each(function() {
              C.event.add(this, t, o, r, n)
            })
          )
        }
        ;(C.event = {
          global: {},
          add: function(e, t, n, r, o) {
            var i,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Q.get(e)
            if (v)
              for (
                n.handler && ((n = (i = n).handler), (o = i.selector)),
                  o && C.find.matchesSelector(Te, o),
                  n.guid || (n.guid = C.guid++),
                  (u = v.events) || (u = v.events = {}),
                  (a = v.handle) ||
                    (a = v.handle = function(t) {
                      return void 0 !== C && C.event.triggered !== t.type
                        ? C.event.dispatch.apply(e, arguments)
                        : void 0
                    }),
                  l = (t = (t || '').match(I) || ['']).length;
                l--;

              )
                (d = g = (s = Ee.exec(t[l]) || [])[1]),
                  (h = (s[2] || '').split('.').sort()),
                  d &&
                    ((f = C.event.special[d] || {}),
                    (d = (o ? f.delegateType : f.bindType) || d),
                    (f = C.event.special[d] || {}),
                    (c = C.extend(
                      {
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join('.'),
                      },
                      i,
                    )),
                    (p = u[d]) ||
                      (((p = u[d] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                        (e.addEventListener && e.addEventListener(d, a))),
                    f.add &&
                      (f.add.call(e, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (C.event.global[d] = !0))
          },
          remove: function(e, t, n, r, o) {
            var i,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Q.hasData(e) && Q.get(e)
            if (v && (u = v.events)) {
              for (l = (t = (t || '').match(I) || ['']).length; l--; )
                if (
                  ((d = g = (s = Ee.exec(t[l]) || [])[1]),
                  (h = (s[2] || '').split('.').sort()),
                  d)
                ) {
                  for (
                    f = C.event.special[d] || {},
                      p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                      s =
                        s[2] &&
                        new RegExp(
                          '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)',
                        ),
                      a = i = p.length;
                    i--;

                  )
                    (c = p[i]),
                      (!o && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r &&
                          r !== c.selector &&
                          ('**' !== r || !c.selector)) ||
                        (p.splice(i, 1),
                        c.selector && p.delegateCount--,
                        f.remove && f.remove.call(e, c))
                  a &&
                    !p.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                      C.removeEvent(e, d, v.handle),
                    delete u[d])
                } else for (d in u) C.event.remove(e, d + t[l], n, r, !0)
              C.isEmptyObject(u) && Q.remove(e, 'handle events')
            }
          },
          dispatch: function(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s = C.event.fix(e),
              u = new Array(arguments.length),
              l = (Q.get(this, 'events') || {})[s.type] || [],
              c = C.event.special[s.type] || {}
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t]
            if (
              ((s.delegateTarget = this),
              !c.preDispatch || !1 !== c.preDispatch.call(this, s))
            ) {
              for (
                a = C.event.handlers.call(this, s, l), t = 0;
                (o = a[t++]) && !s.isPropagationStopped();

              )
                for (
                  s.currentTarget = o.elem, n = 0;
                  (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();

                )
                  (s.rnamespace && !s.rnamespace.test(i.namespace)) ||
                    ((s.handleObj = i),
                    (s.data = i.data),
                    void 0 !==
                      (r = (
                        (C.event.special[i.origType] || {}).handle || i.handler
                      ).apply(o.elem, u)) &&
                      !1 === (s.result = r) &&
                      (s.preventDefault(), s.stopPropagation()))
              return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
          },
          handlers: function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target
            if (u && l.nodeType && !('click' === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ('click' !== e.type || !0 !== l.disabled)
                ) {
                  for (i = [], a = {}, n = 0; n < u; n++)
                    void 0 === a[(o = (r = t[n]).selector + ' ')] &&
                      (a[o] = r.needsContext
                        ? C(o, this).index(l) > -1
                        : C.find(o, this, null, [l]).length),
                      a[o] && i.push(r)
                  i.length && s.push({ elem: l, handlers: i })
                }
            return (
              (l = this),
              u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
              s
            )
          },
          addProp: function(e, t) {
            Object.defineProperty(C.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: m(t)
                ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                  }
                : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                  },
              set: function(t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              },
            })
          },
          fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function() {
                if (this !== De() && this.focus) return this.focus(), !1
              },
              delegateType: 'focusin',
            },
            blur: {
              trigger: function() {
                if (this === De() && this.blur) return this.blur(), !1
              },
              delegateType: 'focusout',
            },
            click: {
              trigger: function() {
                if ('checkbox' === this.type && this.click && A(this, 'input'))
                  return this.click(), !1
              },
              _default: function(e) {
                return A(e.target, 'a')
              },
            },
            beforeunload: {
              postDispatch: function(e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result)
              },
            },
          },
        }),
          (C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
          }),
          (C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t)
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Se
                    : Ne),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && C.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[C.expando] = !0)
          }),
          (C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function() {
              var e = this.originalEvent
              ;(this.isDefaultPrevented = Se),
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
              var e = this.originalEvent
              ;(this.isPropagationStopped = Se),
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
              var e = this.originalEvent
              ;(this.isImmediatePropagationStopped = Se),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            },
          }),
          C.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function(e) {
                var t = e.button
                return null == e.which && Ce.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && ke.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which
              },
            },
            C.event.addProp,
          ),
          C.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout',
            },
            function(e, t) {
              C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                  var n,
                    r = e.relatedTarget,
                    o = e.handleObj
                  return (
                    (r && (r === this || C.contains(this, r))) ||
                      ((e.type = o.origType),
                      (n = o.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  )
                },
              }
            },
          ),
          C.fn.extend({
            on: function(e, t, n, r) {
              return je(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
              return je(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
              var r, o
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  C(e.delegateTarget).off(
                    r.namespace ? r.origType + '.' + r.namespace : r.origType,
                    r.selector,
                    r.handler,
                  ),
                  this
                )
              if ('object' == typeof e) {
                for (o in e) this.off(o, t, e[o])
                return this
              }
              return (
                (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Ne),
                this.each(function() {
                  C.event.remove(this, e, n, t)
                })
              )
            },
          })
        var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          qe = /<script|<style|<link/i,
          Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        function Pe(e, t) {
          return (
            (A(e, 'table') &&
              A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
              C(e).children('tbody')[0]) ||
            e
          )
        }
        function He(e) {
          return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
        }
        function Re(e) {
          return (
            'true/' === (e.type || '').slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute('type'),
            e
          )
        }
        function _e(e, t) {
          var n, r, o, i, a, s, u, l
          if (1 === t.nodeType) {
            if (
              Q.hasData(e) &&
              ((i = Q.access(e)), (a = Q.set(t, i)), (l = i.events))
            )
              for (o in (delete a.handle, (a.events = {}), l))
                for (n = 0, r = l[o].length; n < r; n++)
                  C.event.add(t, o, l[o][n])
            Z.hasData(e) &&
              ((s = Z.access(e)), (u = C.extend({}, s)), Z.set(t, u))
          }
        }
        function Ie(e, t, n, r) {
          t = l.apply([], t)
          var o,
            i,
            a,
            s,
            u,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = m(h)
          if (
            g ||
            (p > 1 && 'string' == typeof h && !y.checkClone && Oe.test(h))
          )
            return e.each(function(o) {
              var i = e.eq(o)
              g && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r)
            })
          if (
            p &&
            ((i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === o.childNodes.length && (o = i),
            i || r)
          ) {
            for (s = (a = C.map(ve(o, 'script'), He)).length; f < p; f++)
              (u = o),
                f !== d &&
                  ((u = C.clone(u, !0, !0)), s && C.merge(a, ve(u, 'script'))),
                n.call(e[f], u, f)
            if (s)
              for (
                c = a[a.length - 1].ownerDocument, C.map(a, Re), f = 0;
                f < s;
                f++
              )
                (u = a[f]),
                  he.test(u.type || '') &&
                    !Q.access(u, 'globalEval') &&
                    C.contains(c, u) &&
                    (u.src && 'module' !== (u.type || '').toLowerCase()
                      ? C._evalUrl && C._evalUrl(u.src)
                      : w(u.textContent.replace(Le, ''), c, u))
          }
          return e
        }
        function Me(e, t, n) {
          for (
            var r, o = t ? C.filter(t, e) : e, i = 0;
            null != (r = o[i]);
            i++
          )
            n || 1 !== r.nodeType || C.cleanData(ve(r)),
              r.parentNode &&
                (n && C.contains(r.ownerDocument, r) && ye(ve(r, 'script')),
                r.parentNode.removeChild(r))
          return e
        }
        C.extend({
          htmlPrefilter: function(e) {
            return e.replace(Ae, '<$1></$2>')
          },
          clone: function(e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              l,
              c = e.cloneNode(!0),
              f = C.contains(e.ownerDocument, e)
            if (
              !(
                y.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                C.isXMLDoc(e)
              )
            )
              for (a = ve(c), r = 0, o = (i = ve(e)).length; r < o; r++)
                (s = i[r]),
                  (u = a[r]),
                  void 0,
                  'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                    ? (u.checked = s.checked)
                    : ('input' !== l && 'textarea' !== l) ||
                      (u.defaultValue = s.defaultValue)
            if (t)
              if (n)
                for (
                  i = i || ve(e), a = a || ve(c), r = 0, o = i.length;
                  r < o;
                  r++
                )
                  _e(i[r], a[r])
              else _e(e, c)
            return (
              (a = ve(c, 'script')).length > 0 && ye(a, !f && ve(e, 'script')),
              c
            )
          },
          cleanData: function(e) {
            for (
              var t, n, r, o = C.event.special, i = 0;
              void 0 !== (n = e[i]);
              i++
            )
              if (J(n)) {
                if ((t = n[Q.expando])) {
                  if (t.events)
                    for (r in t.events)
                      o[r]
                        ? C.event.remove(n, r)
                        : C.removeEvent(n, r, t.handle)
                  n[Q.expando] = void 0
                }
                n[Z.expando] && (n[Z.expando] = void 0)
              }
          },
        }),
          C.fn.extend({
            detach: function(e) {
              return Me(this, e, !0)
            },
            remove: function(e) {
              return Me(this, e)
            },
            text: function(e) {
              return U(
                this,
                function(e) {
                  return void 0 === e
                    ? C.text(this)
                    : this.empty().each(function() {
                        ;(1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e)
                      })
                },
                null,
                e,
                arguments.length,
              )
            },
            append: function() {
              return Ie(this, arguments, function(e) {
                ;(1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Pe(this, e).appendChild(e)
              })
            },
            prepend: function() {
              return Ie(this, arguments, function(e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Pe(this, e)
                  t.insertBefore(e, t.firstChild)
                }
              })
            },
            before: function() {
              return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
              })
            },
            after: function() {
              return Ie(this, arguments, function(e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling)
              })
            },
            empty: function() {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (C.cleanData(ve(e, !1)), (e.textContent = ''))
              return this
            },
            clone: function(e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function() {
                  return C.clone(this, e, t)
                })
              )
            },
            html: function(e) {
              return U(
                this,
                function(e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML
                  if (
                    'string' == typeof e &&
                    !qe.test(e) &&
                    !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
                  ) {
                    e = C.htmlPrefilter(e)
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (C.cleanData(ve(t, !1)), (t.innerHTML = e))
                      t = 0
                    } catch (e) {}
                  }
                  t && this.empty().append(e)
                },
                null,
                e,
                arguments.length,
              )
            },
            replaceWith: function() {
              var e = []
              return Ie(
                this,
                arguments,
                function(t) {
                  var n = this.parentNode
                  C.inArray(this, e) < 0 &&
                    (C.cleanData(ve(this)), n && n.replaceChild(t, this))
                },
                e,
              )
            },
          }),
          C.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith',
            },
            function(e, t) {
              C.fn[e] = function(e) {
                for (
                  var n, r = [], o = C(e), i = o.length - 1, a = 0;
                  a <= i;
                  a++
                )
                  (n = a === i ? this : this.clone(!0)),
                    C(o[a])[t](n),
                    c.apply(r, n.get())
                return this.pushStack(r)
              }
            },
          )
        var Fe = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
          We = function(e) {
            var t = e.ownerDocument.defaultView
            return (t && t.opener) || (t = n), t.getComputedStyle(e)
          },
          Be = new RegExp(ie.join('|'), 'i')
        function $e(e, t, n) {
          var r,
            o,
            i,
            a,
            s = e.style
          return (
            (n = n || We(e)) &&
              ('' !== (a = n.getPropertyValue(t) || n[t]) ||
                C.contains(e.ownerDocument, e) ||
                (a = C.style(e, t)),
              !y.pixelBoxStyles() &&
                Fe.test(a) &&
                Be.test(t) &&
                ((r = s.width),
                (o = s.minWidth),
                (i = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = o),
                (s.maxWidth = i))),
            void 0 !== a ? a + '' : a
          )
        }
        function ze(e, t) {
          return {
            get: function() {
              if (!e()) return (this.get = t).apply(this, arguments)
              delete this.get
            },
          }
        }
        !(function() {
          function e() {
            if (c) {
              ;(l.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                (c.style.cssText =
                  'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                Te.appendChild(l).appendChild(c)
              var e = n.getComputedStyle(c)
              ;(r = '1%' !== e.top),
                (u = 12 === t(e.marginLeft)),
                (c.style.right = '60%'),
                (s = 36 === t(e.right)),
                (o = 36 === t(e.width)),
                (c.style.position = 'absolute'),
                (i = 36 === c.offsetWidth || 'absolute'),
                Te.removeChild(l),
                (c = null)
            }
          }
          function t(e) {
            return Math.round(parseFloat(e))
          }
          var r,
            o,
            i,
            s,
            u,
            l = a.createElement('div'),
            c = a.createElement('div')
          c.style &&
            ((c.style.backgroundClip = 'content-box'),
            (c.cloneNode(!0).style.backgroundClip = ''),
            (y.clearCloneStyle = 'content-box' === c.style.backgroundClip),
            C.extend(y, {
              boxSizingReliable: function() {
                return e(), o
              },
              pixelBoxStyles: function() {
                return e(), s
              },
              pixelPosition: function() {
                return e(), r
              },
              reliableMarginLeft: function() {
                return e(), u
              },
              scrollboxSize: function() {
                return e(), i
              },
            }))
        })()
        var Ue = /^(none|table(?!-c[ea]).+)/,
          Xe = /^--/,
          Ge = { position: 'absolute', visibility: 'hidden', display: 'block' },
          Ve = { letterSpacing: '0', fontWeight: '400' },
          Ye = ['Webkit', 'Moz', 'ms'],
          Je = a.createElement('div').style
        function Ke(e) {
          var t = C.cssProps[e]
          return (
            t ||
              (t = C.cssProps[e] =
                (function(e) {
                  if (e in Je) return e
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                    n--;

                  )
                    if ((e = Ye[n] + t) in Je) return e
                })(e) || e),
            t
          )
        }
        function Qe(e, t, n) {
          var r = oe.exec(t)
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
        }
        function Ze(e, t, n, r, o, i) {
          var a = 'width' === t ? 1 : 0,
            s = 0,
            u = 0
          if (n === (r ? 'border' : 'content')) return 0
          for (; a < 4; a += 2)
            'margin' === n && (u += C.css(e, n + ie[a], !0, o)),
              r
                ? ('content' === n && (u -= C.css(e, 'padding' + ie[a], !0, o)),
                  'margin' !== n &&
                    (u -= C.css(e, 'border' + ie[a] + 'Width', !0, o)))
                : ((u += C.css(e, 'padding' + ie[a], !0, o)),
                  'padding' !== n
                    ? (u += C.css(e, 'border' + ie[a] + 'Width', !0, o))
                    : (s += C.css(e, 'border' + ie[a] + 'Width', !0, o)))
          return (
            !r &&
              i >= 0 &&
              (u += Math.max(
                0,
                Math.ceil(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] -
                    i -
                    u -
                    s -
                    0.5,
                ),
              )),
            u
          )
        }
        function et(e, t, n) {
          var r = We(e),
            o = $e(e, t, r),
            i = 'border-box' === C.css(e, 'boxSizing', !1, r),
            a = i
          if (Fe.test(o)) {
            if (!n) return o
            o = 'auto'
          }
          return (
            (a = a && (y.boxSizingReliable() || o === e.style[t])),
            ('auto' === o ||
              (!parseFloat(o) && 'inline' === C.css(e, 'display', !1, r))) &&
              ((o = e['offset' + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (o = parseFloat(o) || 0) +
              Ze(e, t, n || (i ? 'border' : 'content'), a, r, o) +
              'px'
          )
        }
        function tt(e, t, n, r, o) {
          return new tt.prototype.init(e, t, n, r, o)
        }
        C.extend({
          cssHooks: {
            opacity: {
              get: function(e, t) {
                if (t) {
                  var n = $e(e, 'opacity')
                  return '' === n ? '1' : n
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                i,
                a,
                s = Y(t),
                u = Xe.test(t),
                l = e.style
              if (
                (u || (t = Ke(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]),
                void 0 === n)
              )
                return a && 'get' in a && void 0 !== (o = a.get(e, !1, r))
                  ? o
                  : l[t]
              'string' === (i = typeof n) &&
                (o = oe.exec(n)) &&
                o[1] &&
                ((n = ue(e, t, o)), (i = 'number')),
                null != n &&
                  n == n &&
                  ('number' === i &&
                    (n += (o && o[3]) || (C.cssNumber[s] ? '' : 'px')),
                  y.clearCloneStyle ||
                    '' !== n ||
                    0 !== t.indexOf('background') ||
                    (l[t] = 'inherit'),
                  (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)))
            }
          },
          css: function(e, t, n, r) {
            var o,
              i,
              a,
              s = Y(t)
            return (
              Xe.test(t) || (t = Ke(s)),
              (a = C.cssHooks[t] || C.cssHooks[s]) &&
                'get' in a &&
                (o = a.get(e, !0, n)),
              void 0 === o && (o = $e(e, t, r)),
              'normal' === o && t in Ve && (o = Ve[t]),
              '' === n || n
                ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                : o
            )
          },
        }),
          C.each(['height', 'width'], function(e, t) {
            C.cssHooks[t] = {
              get: function(e, n, r) {
                if (n)
                  return !Ue.test(C.css(e, 'display')) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? et(e, t, r)
                    : se(e, Ge, function() {
                        return et(e, t, r)
                      })
              },
              set: function(e, n, r) {
                var o,
                  i = We(e),
                  a = 'border-box' === C.css(e, 'boxSizing', !1, i),
                  s = r && Ze(e, t, r, a, i)
                return (
                  a &&
                    y.scrollboxSize() === i.position &&
                    (s -= Math.ceil(
                      e['offset' + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(i[t]) -
                        Ze(e, t, 'border', !1, i) -
                        0.5,
                    )),
                  s &&
                    (o = oe.exec(n)) &&
                    'px' !== (o[3] || 'px') &&
                    ((e.style[t] = n), (n = C.css(e, t))),
                  Qe(0, n, s)
                )
              },
            }
          }),
          (C.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
            if (t)
              return (
                (parseFloat($e(e, 'marginLeft')) ||
                  e.getBoundingClientRect().left -
                    se(e, { marginLeft: 0 }, function() {
                      return e.getBoundingClientRect().left
                    })) + 'px'
              )
          })),
          C.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
            ;(C.cssHooks[e + t] = {
              expand: function(n) {
                for (
                  var r = 0,
                    o = {},
                    i = 'string' == typeof n ? n.split(' ') : [n];
                  r < 4;
                  r++
                )
                  o[e + ie[r] + t] = i[r] || i[r - 2] || i[0]
                return o
              },
            }),
              'margin' !== e && (C.cssHooks[e + t].set = Qe)
          }),
          C.fn.extend({
            css: function(e, t) {
              return U(
                this,
                function(e, t, n) {
                  var r,
                    o,
                    i = {},
                    a = 0
                  if (Array.isArray(t)) {
                    for (r = We(e), o = t.length; a < o; a++)
                      i[t[a]] = C.css(e, t[a], !1, r)
                    return i
                  }
                  return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                },
                e,
                t,
                arguments.length > 1,
              )
            },
          }),
          (C.Tween = tt),
          (tt.prototype = {
            constructor: tt,
            init: function(e, t, n, r, o, i) {
              ;(this.elem = e),
                (this.prop = n),
                (this.easing = o || C.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = i || (C.cssNumber[n] ? '' : 'px'))
            },
            cur: function() {
              var e = tt.propHooks[this.prop]
              return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function(e) {
              var t,
                n = tt.propHooks[this.prop]
              return (
                this.options.duration
                  ? (this.pos = t = C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration,
                    ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                this
              )
            },
          }),
          (tt.prototype.init.prototype = tt.prototype),
          (tt.propHooks = {
            _default: {
              get: function(e) {
                var t
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = C.css(e.elem, e.prop, '')) && 'auto' !== t
                  ? t
                  : 0
              },
              set: function(e) {
                C.fx.step[e.prop]
                  ? C.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (null == e.elem.style[C.cssProps[e.prop]] &&
                      !C.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : C.style(e.elem, e.prop, e.now + e.unit)
              },
            },
          }),
          (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            },
          }),
          (C.easing = {
            linear: function(e) {
              return e
            },
            swing: function(e) {
              return 0.5 - Math.cos(e * Math.PI) / 2
            },
            _default: 'swing',
          }),
          (C.fx = tt.prototype.init),
          (C.fx.step = {})
        var nt,
          rt,
          ot = /^(?:toggle|show|hide)$/,
          it = /queueHooks$/
        function at() {
          rt &&
            (!1 === a.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(at)
              : n.setTimeout(at, C.fx.interval),
            C.fx.tick())
        }
        function st() {
          return (
            n.setTimeout(function() {
              nt = void 0
            }),
            (nt = Date.now())
          )
        }
        function ut(e, t) {
          var n,
            r = 0,
            o = { height: e }
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o['margin' + (n = ie[r])] = o['padding' + n] = e
          return t && (o.opacity = o.width = e), o
        }
        function lt(e, t, n) {
          for (
            var r,
              o = (ct.tweeners[t] || []).concat(ct.tweeners['*']),
              i = 0,
              a = o.length;
            i < a;
            i++
          )
            if ((r = o[i].call(n, t, e))) return r
        }
        function ct(e, t, n) {
          var r,
            o,
            i = 0,
            a = ct.prefilters.length,
            s = C.Deferred().always(function() {
              delete u.elem
            }),
            u = function() {
              if (o) return !1
              for (
                var t = nt || st(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = 1 - (n / l.duration || 0),
                  i = 0,
                  a = l.tweens.length;
                i < a;
                i++
              )
                l.tweens[i].run(r)
              return (
                s.notifyWith(e, [l, r, n]),
                r < 1 && a
                  ? n
                  : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
              )
            },
            l = s.promise({
              elem: e,
              props: C.extend({}, t),
              opts: C.extend(
                !0,
                { specialEasing: {}, easing: C.easing._default },
                n,
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: nt || st(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                var r = C.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing,
                )
                return l.tweens.push(r), r
              },
              stop: function(t) {
                var n = 0,
                  r = t ? l.tweens.length : 0
                if (o) return this
                for (o = !0; n < r; n++) l.tweens[n].run(1)
                return (
                  t
                    ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                    : s.rejectWith(e, [l, t]),
                  this
                )
              },
            }),
            c = l.props
          for (
            !(function(e, t) {
              var n, r, o, i, a
              for (n in e)
                if (
                  ((o = t[(r = Y(n))]),
                  (i = e[n]),
                  Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                  n !== r && ((e[r] = i), delete e[n]),
                  (a = C.cssHooks[r]) && ('expand' in a))
                )
                  for (n in ((i = a.expand(i)), delete e[r], i))
                    (n in e) || ((e[n] = i[n]), (t[n] = o))
                else t[r] = o
            })(c, l.opts.specialEasing);
            i < a;
            i++
          )
            if ((r = ct.prefilters[i].call(l, e, c, l.opts)))
              return (
                m(r.stop) &&
                  (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r
              )
          return (
            C.map(c, lt, l),
            m(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            C.fx.timer(C.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
          )
        }
        ;(C.Animation = C.extend(ct, {
          tweeners: {
            '*': [
              function(e, t) {
                var n = this.createTween(e, t)
                return ue(n.elem, e, oe.exec(t), n), n
              },
            ],
          },
          tweener: function(e, t) {
            m(e) ? ((t = e), (e = ['*'])) : (e = e.match(I))
            for (var n, r = 0, o = e.length; r < o; r++)
              (n = e[r]),
                (ct.tweeners[n] = ct.tweeners[n] || []),
                ct.tweeners[n].unshift(t)
          },
          prefilters: [
            function(e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                u,
                l,
                c,
                f = 'width' in t || 'height' in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Q.get(e, 'fxshow')
              for (r in (n.queue ||
                (null == (a = C._queueHooks(e, 'fx')).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function() {
                    a.unqueued || s()
                  })),
                a.unqueued++,
                p.always(function() {
                  p.always(function() {
                    a.unqueued--, C.queue(e, 'fx').length || a.empty.fire()
                  })
                })),
              t))
                if (((o = t[r]), ot.test(o))) {
                  if (
                    (delete t[r],
                    (i = i || 'toggle' === o),
                    o === (g ? 'hide' : 'show'))
                  ) {
                    if ('show' !== o || !v || void 0 === v[r]) continue
                    g = !0
                  }
                  d[r] = (v && v[r]) || C.style(e, r)
                }
              if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (l = v && v.display) && (l = Q.get(e, 'display')),
                  'none' === (c = C.css(e, 'display')) &&
                    (l
                      ? (c = l)
                      : (fe([e], !0),
                        (l = e.style.display || l),
                        (c = C.css(e, 'display')),
                        fe([e]))),
                  ('inline' === c || ('inline-block' === c && null != l)) &&
                    'none' === C.css(e, 'float') &&
                    (u ||
                      (p.done(function() {
                        h.display = l
                      }),
                      null == l &&
                        ((c = h.display), (l = 'none' === c ? '' : c))),
                    (h.display = 'inline-block'))),
                n.overflow &&
                  ((h.overflow = 'hidden'),
                  p.always(function() {
                    ;(h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2])
                  })),
                (u = !1),
                d))
                  u ||
                    (v
                      ? 'hidden' in v && (g = v.hidden)
                      : (v = Q.access(e, 'fxshow', { display: l })),
                    i && (v.hidden = !g),
                    g && fe([e], !0),
                    p.done(function() {
                      for (r in (g || fe([e]), Q.remove(e, 'fxshow'), d))
                        C.style(e, r, d[r])
                    })),
                    (u = lt(g ? v[r] : 0, r, p)),
                    r in v ||
                      ((v[r] = u.start),
                      g && ((u.end = u.start), (u.start = 0)))
            },
          ],
          prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
          },
        })),
          (C.speed = function(e, t, n) {
            var r =
              e && 'object' == typeof e
                ? C.extend({}, e)
                : {
                    complete: n || (!n && t) || (m(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !m(t) && t),
                  }
            return (
              C.fx.off
                ? (r.duration = 0)
                : 'number' != typeof r.duration &&
                  (r.duration in C.fx.speeds
                    ? (r.duration = C.fx.speeds[r.duration])
                    : (r.duration = C.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function() {
                m(r.old) && r.old.call(this),
                  r.queue && C.dequeue(this, r.queue)
              }),
              r
            )
          }),
          C.fn.extend({
            fadeTo: function(e, t, n, r) {
              return this.filter(ae)
                .css('opacity', 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r)
            },
            animate: function(e, t, n, r) {
              var o = C.isEmptyObject(e),
                i = C.speed(t, n, r),
                a = function() {
                  var t = ct(this, C.extend({}, e), i)
                  ;(o || Q.get(this, 'finish')) && t.stop(!0)
                }
              return (
                (a.finish = a),
                o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
              )
            },
            stop: function(e, t, n) {
              var r = function(e) {
                var t = e.stop
                delete e.stop, t(n)
              }
              return (
                'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || 'fx', []),
                this.each(function() {
                  var t = !0,
                    o = null != e && e + 'queueHooks',
                    i = C.timers,
                    a = Q.get(this)
                  if (o) a[o] && a[o].stop && r(a[o])
                  else for (o in a) a[o] && a[o].stop && it.test(o) && r(a[o])
                  for (o = i.length; o--; )
                    i[o].elem !== this ||
                      (null != e && i[o].queue !== e) ||
                      (i[o].anim.stop(n), (t = !1), i.splice(o, 1))
                  ;(!t && n) || C.dequeue(this, e)
                })
              )
            },
            finish: function(e) {
              return (
                !1 !== e && (e = e || 'fx'),
                this.each(function() {
                  var t,
                    n = Q.get(this),
                    r = n[e + 'queue'],
                    o = n[e + 'queueHooks'],
                    i = C.timers,
                    a = r ? r.length : 0
                  for (
                    n.finish = !0,
                      C.queue(this, e, []),
                      o && o.stop && o.stop.call(this, !0),
                      t = i.length;
                    t--;

                  )
                    i[t].elem === this &&
                      i[t].queue === e &&
                      (i[t].anim.stop(!0), i.splice(t, 1))
                  for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this)
                  delete n.finish
                })
              )
            },
          }),
          C.each(['toggle', 'show', 'hide'], function(e, t) {
            var n = C.fn[t]
            C.fn[t] = function(e, r, o) {
              return null == e || 'boolean' == typeof e
                ? n.apply(this, arguments)
                : this.animate(ut(t, !0), e, r, o)
            }
          }),
          C.each(
            {
              slideDown: ut('show'),
              slideUp: ut('hide'),
              slideToggle: ut('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' },
            },
            function(e, t) {
              C.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
              }
            },
          ),
          (C.timers = []),
          (C.fx.tick = function() {
            var e,
              t = 0,
              n = C.timers
            for (nt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1)
            n.length || C.fx.stop(), (nt = void 0)
          }),
          (C.fx.timer = function(e) {
            C.timers.push(e), C.fx.start()
          }),
          (C.fx.interval = 13),
          (C.fx.start = function() {
            rt || ((rt = !0), at())
          }),
          (C.fx.stop = function() {
            rt = null
          }),
          (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (C.fn.delay = function(e, t) {
            return (
              (e = (C.fx && C.fx.speeds[e]) || e),
              (t = t || 'fx'),
              this.queue(t, function(t, r) {
                var o = n.setTimeout(t, e)
                r.stop = function() {
                  n.clearTimeout(o)
                }
              })
            )
          }),
          (function() {
            var e = a.createElement('input'),
              t = a
                .createElement('select')
                .appendChild(a.createElement('option'))
            ;(e.type = 'checkbox'),
              (y.checkOn = '' !== e.value),
              (y.optSelected = t.selected),
              ((e = a.createElement('input')).value = 't'),
              (e.type = 'radio'),
              (y.radioValue = 't' === e.value)
          })()
        var ft,
          pt = C.expr.attrHandle
        C.fn.extend({
          attr: function(e, t) {
            return U(this, C.attr, e, t, arguments.length > 1)
          },
          removeAttr: function(e) {
            return this.each(function() {
              C.removeAttr(this, e)
            })
          },
        }),
          C.extend({
            attr: function(e, t, n) {
              var r,
                o,
                i = e.nodeType
              if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute
                  ? C.prop(e, t, n)
                  : ((1 === i && C.isXMLDoc(e)) ||
                      (o =
                        C.attrHooks[t.toLowerCase()] ||
                        (C.expr.match.bool.test(t) ? ft : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void C.removeAttr(e, t)
                        : o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ''), n)
                      : o && 'get' in o && null !== (r = o.get(e, t))
                      ? r
                      : null == (r = C.find.attr(e, t))
                      ? void 0
                      : r)
            },
            attrHooks: {
              type: {
                set: function(e, t) {
                  if (!y.radioValue && 'radio' === t && A(e, 'input')) {
                    var n = e.value
                    return e.setAttribute('type', t), n && (e.value = n), t
                  }
                },
              },
            },
            removeAttr: function(e, t) {
              var n,
                r = 0,
                o = t && t.match(I)
              if (o && 1 === e.nodeType)
                for (; (n = o[r++]); ) e.removeAttribute(n)
            },
          }),
          (ft = {
            set: function(e, t, n) {
              return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            },
          }),
          C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = pt[t] || C.find.attr
            pt[t] = function(e, t, r) {
              var o,
                i,
                a = t.toLowerCase()
              return (
                r ||
                  ((i = pt[a]),
                  (pt[a] = o),
                  (o = null != n(e, t, r) ? a : null),
                  (pt[a] = i)),
                o
              )
            }
          })
        var dt = /^(?:input|select|textarea|button)$/i,
          ht = /^(?:a|area)$/i
        function gt(e) {
          return (e.match(I) || []).join(' ')
        }
        function vt(e) {
          return (e.getAttribute && e.getAttribute('class')) || ''
        }
        function yt(e) {
          return Array.isArray(e)
            ? e
            : ('string' == typeof e && e.match(I)) || []
        }
        C.fn.extend({
          prop: function(e, t) {
            return U(this, C.prop, e, t, arguments.length > 1)
          },
          removeProp: function(e) {
            return this.each(function() {
              delete this[C.propFix[e] || e]
            })
          },
        }),
          C.extend({
            prop: function(e, t, n) {
              var r,
                o,
                i = e.nodeType
              if (3 !== i && 8 !== i && 2 !== i)
                return (
                  (1 === i && C.isXMLDoc(e)) ||
                    ((t = C.propFix[t] || t), (o = C.propHooks[t])),
                  void 0 !== n
                    ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : o && 'get' in o && null !== (r = o.get(e, t))
                    ? r
                    : e[t]
                )
            },
            propHooks: {
              tabIndex: {
                get: function(e) {
                  var t = C.find.attr(e, 'tabindex')
                  return t
                    ? parseInt(t, 10)
                    : dt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
                    ? 0
                    : -1
                },
              },
            },
            propFix: { for: 'htmlFor', class: 'className' },
          }),
          y.optSelected ||
            (C.propHooks.selected = {
              get: function(e) {
                var t = e.parentNode
                return t && t.parentNode && t.parentNode.selectedIndex, null
              },
              set: function(e) {
                var t = e.parentNode
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
              },
            }),
          C.each(
            [
              'tabIndex',
              'readOnly',
              'maxLength',
              'cellSpacing',
              'cellPadding',
              'rowSpan',
              'colSpan',
              'useMap',
              'frameBorder',
              'contentEditable',
            ],
            function() {
              C.propFix[this.toLowerCase()] = this
            },
          ),
          C.fn.extend({
            addClass: function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s,
                u = 0
              if (m(e))
                return this.each(function(t) {
                  C(this).addClass(e.call(this, t, vt(this)))
                })
              if ((t = yt(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((o = vt(n)), (r = 1 === n.nodeType && ' ' + gt(o) + ' '))
                  ) {
                    for (a = 0; (i = t[a++]); )
                      r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
                    o !== (s = gt(r)) && n.setAttribute('class', s)
                  }
              return this
            },
            removeClass: function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s,
                u = 0
              if (m(e))
                return this.each(function(t) {
                  C(this).removeClass(e.call(this, t, vt(this)))
                })
              if (!arguments.length) return this.attr('class', '')
              if ((t = yt(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((o = vt(n)), (r = 1 === n.nodeType && ' ' + gt(o) + ' '))
                  ) {
                    for (a = 0; (i = t[a++]); )
                      for (; r.indexOf(' ' + i + ' ') > -1; )
                        r = r.replace(' ' + i + ' ', ' ')
                    o !== (s = gt(r)) && n.setAttribute('class', s)
                  }
              return this
            },
            toggleClass: function(e, t) {
              var n = typeof e,
                r = 'string' === n || Array.isArray(e)
              return 'boolean' == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : m(e)
                ? this.each(function(n) {
                    C(this).toggleClass(e.call(this, n, vt(this), t), t)
                  })
                : this.each(function() {
                    var t, o, i, a
                    if (r)
                      for (o = 0, i = C(this), a = yt(e); (t = a[o++]); )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                    else
                      (void 0 !== e && 'boolean' !== n) ||
                        ((t = vt(this)) && Q.set(this, '__className__', t),
                        this.setAttribute &&
                          this.setAttribute(
                            'class',
                            t || !1 === e
                              ? ''
                              : Q.get(this, '__className__') || '',
                          ))
                  })
            },
            hasClass: function(e) {
              var t,
                n,
                r = 0
              for (t = ' ' + e + ' '; (n = this[r++]); )
                if (1 === n.nodeType && (' ' + gt(vt(n)) + ' ').indexOf(t) > -1)
                  return !0
              return !1
            },
          })
        var mt = /\r/g
        C.fn.extend({
          val: function(e) {
            var t,
              n,
              r,
              o = this[0]
            return arguments.length
              ? ((r = m(e)),
                this.each(function(n) {
                  var o
                  1 === this.nodeType &&
                    (null == (o = r ? e.call(this, n, C(this).val()) : e)
                      ? (o = '')
                      : 'number' == typeof o
                      ? (o += '')
                      : Array.isArray(o) &&
                        (o = C.map(o, function(e) {
                          return null == e ? '' : e + ''
                        })),
                    ((t =
                      C.valHooks[this.type] ||
                      C.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in t &&
                      void 0 !== t.set(this, o, 'value')) ||
                      (this.value = o))
                }))
              : o
              ? (t =
                  C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) &&
                'get' in t &&
                void 0 !== (n = t.get(o, 'value'))
                ? n
                : 'string' == typeof (n = o.value)
                ? n.replace(mt, '')
                : null == n
                ? ''
                : n
              : void 0
          },
        }),
          C.extend({
            valHooks: {
              option: {
                get: function(e) {
                  var t = C.find.attr(e, 'value')
                  return null != t ? t : gt(C.text(e))
                },
              },
              select: {
                get: function(e) {
                  var t,
                    n,
                    r,
                    o = e.options,
                    i = e.selectedIndex,
                    a = 'select-one' === e.type,
                    s = a ? null : [],
                    u = a ? i + 1 : o.length
                  for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                    if (
                      ((n = o[r]).selected || r === i) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
                    ) {
                      if (((t = C(n).val()), a)) return t
                      s.push(t)
                    }
                  return s
                },
                set: function(e, t) {
                  for (
                    var n, r, o = e.options, i = C.makeArray(t), a = o.length;
                    a--;

                  )
                    ((r = o[a]).selected =
                      C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0)
                  return n || (e.selectedIndex = -1), i
                },
              },
            },
          }),
          C.each(['radio', 'checkbox'], function() {
            ;(C.valHooks[this] = {
              set: function(e, t) {
                if (Array.isArray(t))
                  return (e.checked = C.inArray(C(e).val(), t) > -1)
              },
            }),
              y.checkOn ||
                (C.valHooks[this].get = function(e) {
                  return null === e.getAttribute('value') ? 'on' : e.value
                })
          }),
          (y.focusin = 'onfocusin' in n)
        var bt = /^(?:focusinfocus|focusoutblur)$/,
          xt = function(e) {
            e.stopPropagation()
          }
        C.extend(C.event, {
          trigger: function(e, t, r, o) {
            var i,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              g = [r || a],
              v = h.call(e, 'type') ? e.type : e,
              y = h.call(e, 'namespace') ? e.namespace.split('.') : []
            if (
              ((s = d = u = r = r || a),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !bt.test(v + C.event.triggered) &&
                (v.indexOf('.') > -1 &&
                  ((y = v.split('.')), (v = y.shift()), y.sort()),
                (c = v.indexOf(':') < 0 && 'on' + v),
                ((e = e[C.expando]
                  ? e
                  : new C.Event(v, 'object' == typeof e && e)).isTrigger = o
                  ? 2
                  : 3),
                (e.namespace = y.join('.')),
                (e.rnamespace = e.namespace
                  ? new RegExp('(^|\\.)' + y.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (e.result = void 0),
                e.target || (e.target = r),
                (t = null == t ? [e] : C.makeArray(t, [e])),
                (p = C.event.special[v] || {}),
                o || !p.trigger || !1 !== p.trigger.apply(r, t)))
            ) {
              if (!o && !p.noBubble && !b(r)) {
                for (
                  l = p.delegateType || v, bt.test(l + v) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  g.push(s), (u = s)
                u === (r.ownerDocument || a) &&
                  g.push(u.defaultView || u.parentWindow || n)
              }
              for (i = 0; (s = g[i++]) && !e.isPropagationStopped(); )
                (d = s),
                  (e.type = i > 1 ? l : p.bindType || v),
                  (f =
                    (Q.get(s, 'events') || {})[e.type] && Q.get(s, 'handle')) &&
                    f.apply(s, t),
                  (f = c && s[c]) &&
                    f.apply &&
                    J(s) &&
                    ((e.result = f.apply(s, t)),
                    !1 === e.result && e.preventDefault())
              return (
                (e.type = v),
                o ||
                  e.isDefaultPrevented() ||
                  (p._default && !1 !== p._default.apply(g.pop(), t)) ||
                  !J(r) ||
                  (c &&
                    m(r[v]) &&
                    !b(r) &&
                    ((u = r[c]) && (r[c] = null),
                    (C.event.triggered = v),
                    e.isPropagationStopped() && d.addEventListener(v, xt),
                    r[v](),
                    e.isPropagationStopped() && d.removeEventListener(v, xt),
                    (C.event.triggered = void 0),
                    u && (r[c] = u))),
                e.result
              )
            }
          },
          simulate: function(e, t, n) {
            var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 })
            C.event.trigger(r, null, t)
          },
        }),
          C.fn.extend({
            trigger: function(e, t) {
              return this.each(function() {
                C.event.trigger(e, t, this)
              })
            },
            triggerHandler: function(e, t) {
              var n = this[0]
              if (n) return C.event.trigger(e, t, n, !0)
            },
          }),
          y.focusin ||
            C.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
              var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
              }
              C.event.special[t] = {
                setup: function() {
                  var r = this.ownerDocument || this,
                    o = Q.access(r, t)
                  o || r.addEventListener(e, n, !0),
                    Q.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                  var r = this.ownerDocument || this,
                    o = Q.access(r, t) - 1
                  o
                    ? Q.access(r, t, o)
                    : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                },
              }
            })
        var wt = n.location,
          Tt = Date.now(),
          Ct = /\?/
        C.parseXML = function(e) {
          var t
          if (!e || 'string' != typeof e) return null
          try {
            t = new n.DOMParser().parseFromString(e, 'text/xml')
          } catch (e) {
            t = void 0
          }
          return (
            (t && !t.getElementsByTagName('parsererror').length) ||
              C.error('Invalid XML: ' + e),
            t
          )
        }
        var kt = /\[\]$/,
          Et = /\r?\n/g,
          St = /^(?:submit|button|image|reset|file)$/i,
          Nt = /^(?:input|select|textarea|keygen)/i
        function Dt(e, t, n, r) {
          var o
          if (Array.isArray(t))
            C.each(t, function(t, o) {
              n || kt.test(e)
                ? r(e, o)
                : Dt(
                    e +
                      '[' +
                      ('object' == typeof o && null != o ? t : '') +
                      ']',
                    o,
                    n,
                    r,
                  )
            })
          else if (n || 'object' !== T(t)) r(e, t)
          else for (o in t) Dt(e + '[' + o + ']', t[o], n, r)
        }
        ;(C.param = function(e, t) {
          var n,
            r = [],
            o = function(e, t) {
              var n = m(t) ? t() : t
              r[r.length] =
                encodeURIComponent(e) +
                '=' +
                encodeURIComponent(null == n ? '' : n)
            }
          if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
            C.each(e, function() {
              o(this.name, this.value)
            })
          else for (n in e) Dt(n, e[n], t, o)
          return r.join('&')
        }),
          C.fn.extend({
            serialize: function() {
              return C.param(this.serializeArray())
            },
            serializeArray: function() {
              return this.map(function() {
                var e = C.prop(this, 'elements')
                return e ? C.makeArray(e) : this
              })
                .filter(function() {
                  var e = this.type
                  return (
                    this.name &&
                    !C(this).is(':disabled') &&
                    Nt.test(this.nodeName) &&
                    !St.test(e) &&
                    (this.checked || !pe.test(e))
                  )
                })
                .map(function(e, t) {
                  var n = C(this).val()
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? C.map(n, function(e) {
                        return { name: t.name, value: e.replace(Et, '\r\n') }
                      })
                    : { name: t.name, value: n.replace(Et, '\r\n') }
                })
                .get()
            },
          })
        var jt = /%20/g,
          At = /#.*$/,
          qt = /([?&])_=[^&]*/,
          Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Lt = /^(?:GET|HEAD)$/,
          Pt = /^\/\//,
          Ht = {},
          Rt = {},
          _t = '*/'.concat('*'),
          It = a.createElement('a')
        function Mt(e) {
          return function(t, n) {
            'string' != typeof t && ((n = t), (t = '*'))
            var r,
              o = 0,
              i = t.toLowerCase().match(I) || []
            if (m(n))
              for (; (r = i[o++]); )
                '+' === r[0]
                  ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n)
          }
        }
        function Ft(e, t, n, r) {
          var o = {},
            i = e === Rt
          function a(s) {
            var u
            return (
              (o[s] = !0),
              C.each(e[s] || [], function(e, s) {
                var l = s(t, n, r)
                return 'string' != typeof l || i || o[l]
                  ? i
                    ? !(u = l)
                    : void 0
                  : (t.dataTypes.unshift(l), a(l), !1)
              }),
              u
            )
          }
          return a(t.dataTypes[0]) || (!o['*'] && a('*'))
        }
        function Wt(e, t) {
          var n,
            r,
            o = C.ajaxSettings.flatOptions || {}
          for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n])
          return r && C.extend(!0, e, r), e
        }
        ;(It.href = wt.href),
          C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: wt.href,
              type: 'GET',
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                wt.protocol,
              ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': _t,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript',
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON',
              },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': C.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(e, t) {
              return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Mt(Ht),
            ajaxTransport: Mt(Rt),
            ajax: function(e, t) {
              'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
              var r,
                o,
                i,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = C.ajaxSetup({}, t),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                y = C.Deferred(),
                m = C.Callbacks('once memory'),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = 'canceled',
                k = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                    var t
                    if (c) {
                      if (!s)
                        for (s = {}; (t = Ot.exec(i)); )
                          s[t[1].toLowerCase()] = t[2]
                      t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                    return c ? i : null
                  },
                  setRequestHeader: function(e, t) {
                    return (
                      null == c &&
                        ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                        (x[e] = t)),
                      this
                    )
                  },
                  overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this
                  },
                  statusCode: function(e) {
                    var t
                    if (e)
                      if (c) k.always(e[k.status])
                      else for (t in e) b[t] = [b[t], e[t]]
                    return this
                  },
                  abort: function(e) {
                    var t = e || T
                    return r && r.abort(t), E(0, t), this
                  },
                }
              if (
                (y.promise(k),
                (h.url = ((e || h.url || wt.href) + '').replace(
                  Pt,
                  wt.protocol + '//',
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || '*').toLowerCase().match(I) || [
                  '',
                ]),
                null == h.crossDomain)
              ) {
                l = a.createElement('a')
                try {
                  ;(l.href = h.url),
                    (l.href = l.href),
                    (h.crossDomain =
                      It.protocol + '//' + It.host !=
                      l.protocol + '//' + l.host)
                } catch (e) {
                  h.crossDomain = !0
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  'string' != typeof h.data &&
                  (h.data = C.param(h.data, h.traditional)),
                Ft(Ht, h, t, k),
                c)
              )
                return k
              for (p in ((f = C.event && h.global) &&
                0 == C.active++ &&
                C.event.trigger('ajaxStart'),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Lt.test(h.type)),
              (o = h.url.replace(At, '')),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || '').indexOf(
                      'application/x-www-form-urlencoded',
                    ) &&
                  (h.data = h.data.replace(jt, '+'))
                : ((d = h.url.slice(o.length)),
                  h.data &&
                    (h.processData || 'string' == typeof h.data) &&
                    ((o += (Ct.test(o) ? '&' : '?') + h.data), delete h.data),
                  !1 === h.cache &&
                    ((o = o.replace(qt, '$1')),
                    (d = (Ct.test(o) ? '&' : '?') + '_=' + Tt++ + d)),
                  (h.url = o + d)),
              h.ifModified &&
                (C.lastModified[o] &&
                  k.setRequestHeader('If-Modified-Since', C.lastModified[o]),
                C.etag[o] && k.setRequestHeader('If-None-Match', C.etag[o])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                t.contentType) &&
                k.setRequestHeader('Content-Type', h.contentType),
              k.setRequestHeader(
                'Accept',
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ('*' !== h.dataTypes[0] ? ', ' + _t + '; q=0.01' : '')
                  : h.accepts['*'],
              ),
              h.headers))
                k.setRequestHeader(p, h.headers[p])
              if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c))
                return k.abort()
              if (
                ((T = 'abort'),
                m.add(h.complete),
                k.done(h.success),
                k.fail(h.error),
                (r = Ft(Rt, h, t, k)))
              ) {
                if (((k.readyState = 1), f && v.trigger('ajaxSend', [k, h]), c))
                  return k
                h.async &&
                  h.timeout > 0 &&
                  (u = n.setTimeout(function() {
                    k.abort('timeout')
                  }, h.timeout))
                try {
                  ;(c = !1), r.send(x, E)
                } catch (e) {
                  if (c) throw e
                  E(-1, e)
                }
              } else E(-1, 'No Transport')
              function E(e, t, a, s) {
                var l,
                  p,
                  d,
                  x,
                  w,
                  T = t
                c ||
                  ((c = !0),
                  u && n.clearTimeout(u),
                  (r = void 0),
                  (i = s || ''),
                  (k.readyState = e > 0 ? 4 : 0),
                  (l = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (x = (function(e, t, n) {
                      for (
                        var r, o, i, a, s = e.contents, u = e.dataTypes;
                        '*' === u[0];

                      )
                        u.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType || t.getResponseHeader('Content-Type'))
                      if (r)
                        for (o in s)
                          if (s[o] && s[o].test(r)) {
                            u.unshift(o)
                            break
                          }
                      if (u[0] in n) i = u[0]
                      else {
                        for (o in n) {
                          if (!u[0] || e.converters[o + ' ' + u[0]]) {
                            i = o
                            break
                          }
                          a || (a = o)
                        }
                        i = i || a
                      }
                      if (i) return i !== u[0] && u.unshift(i), n[i]
                    })(h, k, a)),
                  (x = (function(e, t, n, r) {
                    var o,
                      i,
                      a,
                      s,
                      u,
                      l = {},
                      c = e.dataTypes.slice()
                    if (c[1])
                      for (a in e.converters)
                        l[a.toLowerCase()] = e.converters[a]
                    for (i = c.shift(); i; )
                      if (
                        (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !u &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (u = i),
                        (i = c.shift()))
                      )
                        if ('*' === i) i = u
                        else if ('*' !== u && u !== i) {
                          if (!(a = l[u + ' ' + i] || l['* ' + i]))
                            for (o in l)
                              if (
                                (s = o.split(' '))[1] === i &&
                                (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                              ) {
                                !0 === a
                                  ? (a = l[o])
                                  : !0 !== l[o] && ((i = s[0]), c.unshift(s[1]))
                                break
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t)
                            else
                              try {
                                t = a(t)
                              } catch (e) {
                                return {
                                  state: 'parsererror',
                                  error: a
                                    ? e
                                    : 'No conversion from ' + u + ' to ' + i,
                                }
                              }
                        }
                    return { state: 'success', data: t }
                  })(h, x, k, l)),
                  l
                    ? (h.ifModified &&
                        ((w = k.getResponseHeader('Last-Modified')) &&
                          (C.lastModified[o] = w),
                        (w = k.getResponseHeader('etag')) && (C.etag[o] = w)),
                      204 === e || 'HEAD' === h.type
                        ? (T = 'nocontent')
                        : 304 === e
                        ? (T = 'notmodified')
                        : ((T = x.state), (p = x.data), (l = !(d = x.error))))
                    : ((d = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                  (k.status = e),
                  (k.statusText = (t || T) + ''),
                  l ? y.resolveWith(g, [p, T, k]) : y.rejectWith(g, [k, T, d]),
                  k.statusCode(b),
                  (b = void 0),
                  f &&
                    v.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
                      k,
                      h,
                      l ? p : d,
                    ]),
                  m.fireWith(g, [k, T]),
                  f &&
                    (v.trigger('ajaxComplete', [k, h]),
                    --C.active || C.event.trigger('ajaxStop')))
              }
              return k
            },
            getJSON: function(e, t, n) {
              return C.get(e, t, n, 'json')
            },
            getScript: function(e, t) {
              return C.get(e, void 0, t, 'script')
            },
          }),
          C.each(['get', 'post'], function(e, t) {
            C[t] = function(e, n, r, o) {
              return (
                m(n) && ((o = o || r), (r = n), (n = void 0)),
                C.ajax(
                  C.extend(
                    { url: e, type: t, dataType: o, data: n, success: r },
                    C.isPlainObject(e) && e,
                  ),
                )
              )
            }
          }),
          (C._evalUrl = function(e) {
            return C.ajax({
              url: e,
              type: 'GET',
              dataType: 'script',
              cache: !0,
              async: !1,
              global: !1,
              throws: !0,
            })
          }),
          C.fn.extend({
            wrapAll: function(e) {
              var t
              return (
                this[0] &&
                  (m(e) && (e = e.call(this[0])),
                  (t = C(e, this[0].ownerDocument)
                    .eq(0)
                    .clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function() {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild
                      return e
                    })
                    .append(this)),
                this
              )
            },
            wrapInner: function(e) {
              return m(e)
                ? this.each(function(t) {
                    C(this).wrapInner(e.call(this, t))
                  })
                : this.each(function() {
                    var t = C(this),
                      n = t.contents()
                    n.length ? n.wrapAll(e) : t.append(e)
                  })
            },
            wrap: function(e) {
              var t = m(e)
              return this.each(function(n) {
                C(this).wrapAll(t ? e.call(this, n) : e)
              })
            },
            unwrap: function(e) {
              return (
                this.parent(e)
                  .not('body')
                  .each(function() {
                    C(this).replaceWith(this.childNodes)
                  }),
                this
              )
            },
          }),
          (C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
          }),
          (C.expr.pseudos.visible = function(e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            )
          }),
          (C.ajaxSettings.xhr = function() {
            try {
              return new n.XMLHttpRequest()
            } catch (e) {}
          })
        var Bt = { 0: 200, 1223: 204 },
          $t = C.ajaxSettings.xhr()
        ;(y.cors = !!$t && 'withCredentials' in $t),
          (y.ajax = $t = !!$t),
          C.ajaxTransport(function(e) {
            var t, r
            if (y.cors || ($t && !e.crossDomain))
              return {
                send: function(o, i) {
                  var a,
                    s = e.xhr()
                  if (
                    (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (a in e.xhrFields) s[a] = e.xhrFields[a]
                  for (a in (e.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    o['X-Requested-With'] ||
                    (o['X-Requested-With'] = 'XMLHttpRequest'),
                  o))
                    s.setRequestHeader(a, o[a])
                  ;(t = function(e) {
                    return function() {
                      t &&
                        ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                        'abort' === e
                          ? s.abort()
                          : 'error' === e
                          ? 'number' != typeof s.status
                            ? i(0, 'error')
                            : i(s.status, s.statusText)
                          : i(
                              Bt[s.status] || s.status,
                              s.statusText,
                              'text' !== (s.responseType || 'text') ||
                                'string' != typeof s.responseText
                                ? { binary: s.response }
                                : { text: s.responseText },
                              s.getAllResponseHeaders(),
                            ))
                    }
                  }),
                    (s.onload = t()),
                    (r = s.onerror = s.ontimeout = t('error')),
                    void 0 !== s.onabort
                      ? (s.onabort = r)
                      : (s.onreadystatechange = function() {
                          4 === s.readyState &&
                            n.setTimeout(function() {
                              t && r()
                            })
                        }),
                    (t = t('abort'))
                  try {
                    s.send((e.hasContent && e.data) || null)
                  } catch (e) {
                    if (t) throw e
                  }
                },
                abort: function() {
                  t && t()
                },
              }
          }),
          C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
          }),
          C.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              'text script': function(e) {
                return C.globalEval(e), e
              },
            },
          }),
          C.ajaxPrefilter('script', function(e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = 'GET')
          }),
          C.ajaxTransport('script', function(e) {
            var t, n
            if (e.crossDomain)
              return {
                send: function(r, o) {
                  ;(t = C('<script>')
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      'load error',
                      (n = function(e) {
                        t.remove(),
                          (n = null),
                          e && o('error' === e.type ? 404 : 200, e.type)
                      }),
                    )),
                    a.head.appendChild(t[0])
                },
                abort: function() {
                  n && n()
                },
              }
          })
        var zt,
          Ut = [],
          Xt = /(=)\?(?=&|$)|\?\?/
        C.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function() {
            var e = Ut.pop() || C.expando + '_' + Tt++
            return (this[e] = !0), e
          },
        }),
          C.ajaxPrefilter('json jsonp', function(e, t, r) {
            var o,
              i,
              a,
              s =
                !1 !== e.jsonp &&
                (Xt.test(e.url)
                  ? 'url'
                  : 'string' == typeof e.data &&
                    0 ===
                      (e.contentType || '').indexOf(
                        'application/x-www-form-urlencoded',
                      ) &&
                    Xt.test(e.data) &&
                    'data')
            if (s || 'jsonp' === e.dataTypes[0])
              return (
                (o = e.jsonpCallback = m(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(Xt, '$1' + o))
                  : !1 !== e.jsonp &&
                    (e.url += (Ct.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
                (e.converters['script json'] = function() {
                  return a || C.error(o + ' was not called'), a[0]
                }),
                (e.dataTypes[0] = 'json'),
                (i = n[o]),
                (n[o] = function() {
                  a = arguments
                }),
                r.always(function() {
                  void 0 === i ? C(n).removeProp(o) : (n[o] = i),
                    e[o] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(o)),
                    a && m(i) && i(a[0]),
                    (a = i = void 0)
                }),
                'script'
              )
          }),
          (y.createHTMLDocument = (((zt = a.implementation.createHTMLDocument(
            '',
          ).body).innerHTML = '<form></form><form></form>'),
          2 === zt.childNodes.length)),
          (C.parseHTML = function(e, t, n) {
            return 'string' != typeof e
              ? []
              : ('boolean' == typeof t && ((n = t), (t = !1)),
                t ||
                  (y.createHTMLDocument
                    ? (((r = (t = a.implementation.createHTMLDocument(
                        '',
                      )).createElement('base')).href = a.location.href),
                      t.head.appendChild(r))
                    : (t = a)),
                (i = !n && []),
                (o = q.exec(e))
                  ? [t.createElement(o[1])]
                  : ((o = we([e], t, i)),
                    i && i.length && C(i).remove(),
                    C.merge([], o.childNodes)))
            var r, o, i
          }),
          (C.fn.load = function(e, t, n) {
            var r,
              o,
              i,
              a = this,
              s = e.indexOf(' ')
            return (
              s > -1 && ((r = gt(e.slice(s))), (e = e.slice(0, s))),
              m(t)
                ? ((n = t), (t = void 0))
                : t && 'object' == typeof t && (o = 'POST'),
              a.length > 0 &&
                C.ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
                  .done(function(e) {
                    ;(i = arguments),
                      a.html(
                        r
                          ? C('<div>')
                              .append(C.parseHTML(e))
                              .find(r)
                          : e,
                      )
                  })
                  .always(
                    n &&
                      function(e, t) {
                        a.each(function() {
                          n.apply(this, i || [e.responseText, t, e])
                        })
                      },
                  ),
              this
            )
          }),
          C.each(
            [
              'ajaxStart',
              'ajaxStop',
              'ajaxComplete',
              'ajaxError',
              'ajaxSuccess',
              'ajaxSend',
            ],
            function(e, t) {
              C.fn[t] = function(e) {
                return this.on(t, e)
              }
            },
          ),
          (C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, function(t) {
              return e === t.elem
            }).length
          }),
          (C.offset = {
            setOffset: function(e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                u,
                l = C.css(e, 'position'),
                c = C(e),
                f = {}
              'static' === l && (e.style.position = 'relative'),
                (s = c.offset()),
                (i = C.css(e, 'top')),
                (u = C.css(e, 'left')),
                ('absolute' === l || 'fixed' === l) &&
                (i + u).indexOf('auto') > -1
                  ? ((a = (r = c.position()).top), (o = r.left))
                  : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                m(t) && (t = t.call(e, n, C.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + o),
                'using' in t ? t.using.call(e, f) : c.css(f)
            },
          }),
          C.fn.extend({
            offset: function(e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function(t) {
                      C.offset.setOffset(this, e, t)
                    })
              var t,
                n,
                r = this[0]
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0
            },
            position: function() {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  o = { top: 0, left: 0 }
                if ('fixed' === C.css(r, 'position'))
                  t = r.getBoundingClientRect()
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    'static' === C.css(e, 'position');

                  )
                    e = e.parentNode
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((o = C(e).offset()).top += C.css(
                      e,
                      'borderTopWidth',
                      !0,
                    )),
                    (o.left += C.css(e, 'borderLeftWidth', !0)))
                }
                return {
                  top: t.top - o.top - C.css(r, 'marginTop', !0),
                  left: t.left - o.left - C.css(r, 'marginLeft', !0),
                }
              }
            },
            offsetParent: function() {
              return this.map(function() {
                for (
                  var e = this.offsetParent;
                  e && 'static' === C.css(e, 'position');

                )
                  e = e.offsetParent
                return e || Te
              })
            },
          }),
          C.each(
            { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
            function(e, t) {
              var n = 'pageYOffset' === t
              C.fn[e] = function(r) {
                return U(
                  this,
                  function(e, r, o) {
                    var i
                    if (
                      (b(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                      void 0 === o)
                    )
                      return i ? i[t] : e[r]
                    i
                      ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                      : (e[r] = o)
                  },
                  e,
                  r,
                  arguments.length,
                )
              }
            },
          ),
          C.each(['top', 'left'], function(e, t) {
            C.cssHooks[t] = ze(y.pixelPosition, function(e, n) {
              if (n)
                return (
                  (n = $e(e, t)), Fe.test(n) ? C(e).position()[t] + 'px' : n
                )
            })
          }),
          C.each({ Height: 'height', Width: 'width' }, function(e, t) {
            C.each(
              { padding: 'inner' + e, content: t, '': 'outer' + e },
              function(n, r) {
                C.fn[r] = function(o, i) {
                  var a = arguments.length && (n || 'boolean' != typeof o),
                    s = n || (!0 === o || !0 === i ? 'margin' : 'border')
                  return U(
                    this,
                    function(t, n, o) {
                      var i
                      return b(t)
                        ? 0 === r.indexOf('outer')
                          ? t['inner' + e]
                          : t.document.documentElement['client' + e]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement),
                          Math.max(
                            t.body['scroll' + e],
                            i['scroll' + e],
                            t.body['offset' + e],
                            i['offset' + e],
                            i['client' + e],
                          ))
                        : void 0 === o
                        ? C.css(t, n, s)
                        : C.style(t, n, o, s)
                    },
                    t,
                    a ? o : void 0,
                    a,
                  )
                }
              },
            )
          }),
          C.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
              ' ',
            ),
            function(e, t) {
              C.fn[t] = function(e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t)
              }
            },
          ),
          C.fn.extend({
            hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e)
            },
          }),
          C.fn.extend({
            bind: function(e, t, n) {
              return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
              return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
              return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
              return 1 === arguments.length
                ? this.off(e, '**')
                : this.off(t, e || '**', n)
            },
          }),
          (C.proxy = function(e, t) {
            var n, r, o
            if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = u.call(arguments, 2)),
                ((o = function() {
                  return e.apply(t || this, r.concat(u.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++),
                o
              )
          }),
          (C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
          }),
          (C.isArray = Array.isArray),
          (C.parseJSON = JSON.parse),
          (C.nodeName = A),
          (C.isFunction = m),
          (C.isWindow = b),
          (C.camelCase = Y),
          (C.type = T),
          (C.now = Date.now),
          (C.isNumeric = function(e) {
            var t = C.type(e)
            return (
              ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
            )
          }),
          void 0 ===
            (r = function() {
              return C
            }.apply(t, [])) || (e.exports = r)
        var Gt = n.jQuery,
          Vt = n.$
        return (
          (C.noConflict = function(e) {
            return (
              n.$ === C && (n.$ = Vt), e && n.jQuery === C && (n.jQuery = Gt), C
            )
          }),
          o || (n.jQuery = n.$ = C),
          C
        )
      })
    },
    155: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = {},
          i = Object.keys(e)
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
        return o
      }
    },
    156: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          n.apply(this, arguments)
        )
      }
      e.exports = n
    },
  },
])
//# sourceMappingURL=0-7856299ad663e31bcafc.js.map
