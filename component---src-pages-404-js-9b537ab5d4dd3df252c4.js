;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    140: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        i = n.n(a),
        l = (n(143), n(8)),
        s = n.n(l),
        o = n(52),
        u = n.n(o),
        r = n(4),
        c = n.n(r),
        d = n(150),
        h = n(144),
        m = n(145),
        p = n(147),
        g = (n(148),
        (function(e) {
          function t(t) {
            var n
            return (
              ((n = e.call(this, t) || this).state = {
                isMenuVisible: !1,
                loading: 'is-loading',
              }),
              (n.handleToggleMenu = n.handleToggleMenu.bind(u()(u()(n)))),
              n
            )
          }
          s()(t, e)
          var n = t.prototype
          return (
            (n.componentDidMount = function() {
              var e = this
              this.timeoutId = setTimeout(function() {
                e.setState({ loading: !1 })
              }, 100)
            }),
            (n.componentWillUnmount = function() {
              this.timeoutId && clearTimeout(this.timeoutId)
            }),
            (n.handleToggleMenu = function() {
              this.setState({ isMenuVisible: !this.state.isMenuVisible })
            }),
            (n.render = function() {
              var e = this.props.children
              return i.a.createElement(
                'div',
                {
                  className:
                    'body ' +
                    this.state.loading +
                    ' ' +
                    (this.state.isMenuVisible ? 'is-menu-visible' : ''),
                },
                i.a.createElement(
                  'div',
                  { id: 'wrapper' },
                  i.a.createElement(m.a, {
                    onToggleMenu: this.handleToggleMenu,
                  }),
                  e,
                  i.a.createElement(d.a, null),
                  i.a.createElement(h.a, null),
                ),
                i.a.createElement(p.a, { onToggleMenu: this.handleToggleMenu }),
              )
            }),
            t
          )
        })(i.a.Component))
      ;(g.propTypes = { children: c.a.node }),
        (g.defaultProps = { children: null })
      var E = g
      t.default = function() {
        return i.a.createElement(
          E,
          null,
          i.a.createElement(
            'div',
            { id: 'main', className: 'alt' },
            i.a.createElement(
              'section',
              { id: 'one' },
              i.a.createElement(
                'div',
                { className: 'inner' },
                i.a.createElement('h1', null, 'NOT FOUND'),
                i.a.createElement(
                  'p',
                  null,
                  "You just hit a route that doesn't exist... the sadness.",
                ),
              ),
            ),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-9b537ab5d4dd3df252c4.js.map
