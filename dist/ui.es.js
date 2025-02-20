import Re, { useState as we } from "react";
var N = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Ce() {
  if (fe) return w;
  fe = 1;
  var c = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function f(m, i, d) {
    var u = null;
    if (d !== void 0 && (u = "" + d), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      d = {};
      for (var g in i)
        g !== "key" && (d[g] = i[g]);
    } else d = i;
    return i = d.ref, {
      $$typeof: c,
      type: m,
      key: u,
      ref: i !== void 0 ? i : null,
      props: d
    };
  }
  return w.Fragment = v, w.jsx = f, w.jsxs = f, w;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function ke() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === je ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case Te:
          return "Portal";
        case I:
          return "Profiler";
        case F:
          return "StrictMode";
        case $:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function v(e) {
      return "" + e;
    }
    function f(e) {
      try {
        v(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), v(e);
      }
    }
    function m() {
    }
    function i() {
      if (y === 0) {
        D = console.log, ee = console.info, re = console.warn, te = console.error, oe = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: m,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      y++;
    }
    function d() {
      if (y--, y === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: h({}, e, { value: D }),
          info: h({}, e, { value: ee }),
          warn: h({}, e, { value: re }),
          error: h({}, e, { value: te }),
          group: h({}, e, { value: oe }),
          groupCollapsed: h({}, e, { value: ne }),
          groupEnd: h({}, e, { value: ae })
        });
      }
      0 > y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function u(e) {
      if (V === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          V = r && r[1] || "", ue = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + V + e + ue;
    }
    function g(e, r) {
      if (!e || z) return "";
      var t = G.get(e);
      if (t !== void 0) return t;
      z = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = T.H, T.H = null, i();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var x = function() {
                  throw Error();
                };
                if (Object.defineProperty(x.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(x, []);
                  } catch (b) {
                    var k = b;
                  }
                  Reflect.construct(e, [], x);
                } else {
                  try {
                    x.call();
                  } catch (b) {
                    k = b;
                  }
                  e.call(x.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (b) {
                  k = b;
                }
                (x = e()) && typeof x.catch == "function" && x.catch(function() {
                });
              }
            } catch (b) {
              if (b && k && typeof b.stack == "string")
                return [b.stack, k.stack];
            }
            return [null, null];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          l.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = l.DetermineComponentFrameRoot(), E = o[0], p = o[1];
        if (E && p) {
          var s = E.split(`
`), j = p.split(`
`);
          for (o = a = 0; a < s.length && !s[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < j.length && !j[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === s.length || o === j.length)
            for (a = s.length - 1, o = j.length - 1; 1 <= a && 0 <= o && s[a] !== j[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (s[a] !== j[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || s[a] !== j[o]) {
                    var R = `
` + s[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, R), R;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        z = !1, T.H = n, d(), Error.prepareStackTrace = t;
      }
      return s = (s = e ? e.displayName || e.name : "") ? u(s) : "", typeof e == "function" && G.set(e, s), s;
    }
    function S(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return g(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return u(e);
      switch (e) {
        case $:
          return u("Suspense");
        case W:
          return u("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return e = g(e.render, !1), e;
          case U:
            return S(e.type);
          case q:
            r = e._payload, e = e._init;
            try {
              return S(e(r));
            } catch {
            }
        }
      return "";
    }
    function A() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function Ee(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function be(e, r) {
      function t() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function me() {
      var e = c(this.type);
      return se[e] || (se[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, t, n, l, a) {
      return t = a.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: me
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function H(e, r, t, n, l, a) {
      if (typeof e == "string" || typeof e == "function" || e === Y || e === I || e === F || e === $ || e === W || e === he || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === M || e.$$typeof === pe || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                X(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === P ? (n = "<" + (c(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (K.call(r, "key")) {
        o = c(e);
        var E = Object.keys(r).filter(function(s) {
          return s !== "key";
        });
        n = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", ie[o + n] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          E,
          o
        ), ie[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), Ee(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var p in r)
          p !== "key" && (t[p] = r[p]);
      } else t = r;
      return o && be(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, o, a, l, A(), t);
    }
    function X(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== ye) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            O(n) && B(n, r);
          }
        else if (O(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = Q && e[Q] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            O(e.value) && B(e.value, r);
      }
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function B(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = xe(r), !ce[r])) {
        ce[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== A() && (t = null, typeof e._owner.tag == "number" ? t = c(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = T.getCurrentStack;
        T.getCurrentStack = function() {
          var l = S(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), T.getCurrentStack = n;
      }
    }
    function xe(e) {
      var r = "", t = A();
      return t && (t = c(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = c(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var _e = Re, P = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), Q = Symbol.iterator, je = Symbol.for("react.client.reference"), T = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, h = Object.assign, pe = Symbol.for("react.client.reference"), J = Array.isArray, y = 0, D, ee, re, te, oe, ne, ae;
    m.__reactDisabledLog = !0;
    var V, ue, z = !1, G = new (typeof WeakMap == "function" ? WeakMap : Map)(), ye = Symbol.for("react.client.reference"), le, se = {}, ie = {}, ce = {};
    C.Fragment = Y, C.jsx = function(e, r, t, n, l) {
      return H(e, r, t, !1, n, l);
    }, C.jsxs = function(e, r, t, n, l) {
      return H(e, r, t, !0, n, l);
    };
  }()), C;
}
var ve;
function Ne() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? N.exports = Ce() : N.exports = ke()), N.exports;
}
var _ = Ne();
const Ae = ({ initialCount: c = 0, maxCount: v = 100 }) => {
  const [f, m] = we(c), i = () => {
    m((u) => Math.min(u + 1, v));
  }, d = () => {
    m((u) => Math.max(u - 1, 0));
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "bg-blue-500 p-5 rounded-2xl", children: [
    /* @__PURE__ */ _.jsx("div", { children: f }),
    /* @__PURE__ */ _.jsxs("div", { children: [
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: d,
          disabled: f <= 0,
          className: "bg-red-700",
          children: "Decrease"
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: i,
          disabled: f >= v,
          className: "hover:bg-green-500",
          id: "test-hover",
          children: "Increase"
        }
      )
    ] }),
    /* @__PURE__ */ _.jsxs("div", { children: [
      /* @__PURE__ */ _.jsx(
        "input",
        {
          type: "number",
          min: 1,
          max: v - f,
          defaultValue: 1
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: () => {
            const u = document.querySelector("input");
            u && f + Number(u.value) <= v && m((g) => g + Number(u.value));
          },
          children: "Add Custom Amount"
        }
      )
    ] })
  ] });
};
export {
  Ae as CustomComponent
};
