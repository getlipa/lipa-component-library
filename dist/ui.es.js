import Re, { useState as Ce, useEffect as ke } from "react";
var N = { exports: {} }, R = {};
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
function Ne() {
  if (fe) return R;
  fe = 1;
  var u = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function d(m, c, v) {
    var s = null;
    if (v !== void 0 && (s = "" + v), c.key !== void 0 && (s = "" + c.key), "key" in c) {
      v = {};
      for (var g in c)
        g !== "key" && (v[g] = c[g]);
    } else v = c;
    return c = v.ref, {
      $$typeof: u,
      type: m,
      key: s,
      ref: c !== void 0 ? c : null,
      props: v
    };
  }
  return R.Fragment = f, R.jsx = d, R.jsxs = d, R;
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
function Se() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === we ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case pe:
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
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function d(e) {
      try {
        f(e);
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
        ), f(e);
      }
    }
    function m() {
    }
    function c() {
      if (j === 0) {
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
      j++;
    }
    function v() {
      if (j--, j === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: p({}, e, { value: D }),
          info: p({}, e, { value: ee }),
          warn: p({}, e, { value: re }),
          error: p({}, e, { value: te }),
          group: p({}, e, { value: oe }),
          groupCollapsed: p({}, e, { value: ne }),
          groupEnd: p({}, e, { value: ae })
        });
      }
      0 > j && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(e) {
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
      n = h.H, h.H = null, c();
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
        var o = l.DetermineComponentFrameRoot(), E = o[0], w = o[1];
        if (E && w) {
          var i = E.split(`
`), T = w.split(`
`);
          for (o = a = 0; a < i.length && !i[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < T.length && !T[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === i.length || o === T.length)
            for (a = i.length - 1, o = T.length - 1; 1 <= a && 0 <= o && i[a] !== T[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (i[a] !== T[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || i[a] !== T[o]) {
                    var y = `
` + i[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, y), y;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        z = !1, h.H = n, v(), Error.prepareStackTrace = t;
      }
      return i = (i = e ? e.displayName || e.name : "") ? s(i) : "", typeof e == "function" && G.set(e, i), i;
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
      if (typeof e == "string") return s(e);
      switch (e) {
        case $:
          return s("Suspense");
        case W:
          return s("SuspenseList");
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
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function be(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function me(e, r) {
      function t() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function ge() {
      var e = u(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function xe(e, r, t, n, l, a) {
      return t = a.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: ge
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
      if (typeof e == "string" || typeof e == "function" || e === Y || e === I || e === F || e === $ || e === W || e === Te || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === M || e.$$typeof === je || e.getModuleId !== void 0)) {
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
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === P ? (n = "<" + (u(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (K.call(r, "key")) {
        o = u(e);
        var E = Object.keys(r).filter(function(i) {
          return i !== "key";
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
      if (o = null, t !== void 0 && (d(t), o = "" + t), be(r) && (d(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return o && me(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), xe(e, o, a, l, A(), t);
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
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = _e(r), !ce[r])) {
        ce[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== A() && (t = null, typeof e._owner.tag == "number" ? t = u(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = h.getCurrentStack;
        h.getCurrentStack = function() {
          var l = S(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), h.getCurrentStack = n;
      }
    }
    function _e(e) {
      var r = "", t = A();
      return t && (t = u(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = u(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var he = Re, P = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), Q = Symbol.iterator, we = Symbol.for("react.client.reference"), h = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, p = Object.assign, je = Symbol.for("react.client.reference"), J = Array.isArray, j = 0, D, ee, re, te, oe, ne, ae;
    m.__reactDisabledLog = !0;
    var V, ue, z = !1, G = new (typeof WeakMap == "function" ? WeakMap : Map)(), ye = Symbol.for("react.client.reference"), se, le = {}, ie = {}, ce = {};
    C.Fragment = Y, C.jsx = function(e, r, t, n, l) {
      return H(e, r, t, !1, n, l);
    }, C.jsxs = function(e, r, t, n, l) {
      return H(e, r, t, !0, n, l);
    };
  }()), C;
}
var ve;
function Ae() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? N.exports = Ne() : N.exports = Se()), N.exports;
}
var _ = Ae();
const Ee = /* @__PURE__ */ new Set(), Oe = (u, f) => {
  Ee.has(u) || (Ee.add(u), console.warn(
    `%c${u} is deprecated. Use ${f} instead.`,
    "font-weight: bold"
  ));
}, Ye = ({
  initialCount: u = 0,
  maxCount: f = 100
}) => {
  const [d, m] = Ce(u);
  ke(() => {
    Oe("CustomComponent", "NewComponent");
  }, []);
  const c = () => {
    m((s) => Math.min(s + 1, f));
  }, v = () => {
    m((s) => Math.max(s - 1, 0));
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "bg-blue-500 p-5 rounded-2xl", id: "wait-for-me", children: [
    /* @__PURE__ */ _.jsx("div", { children: d }),
    /* @__PURE__ */ _.jsxs("div", { children: [
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: v,
          disabled: d <= 0,
          className: "bg-red-700",
          children: "Decrease"
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: c,
          disabled: d >= f,
          className: "hover:bg-green-500",
          id: "test-hover",
          children: "Increase"
        }
      )
    ] }),
    /* @__PURE__ */ _.jsxs("div", { children: [
      /* @__PURE__ */ _.jsx("input", { type: "number", min: 1, max: f - d, defaultValue: 1 }),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: () => {
            const s = document.querySelector("input");
            s && d + Number(s.value) <= f && m((g) => g + Number(s.value));
          },
          children: "Add Custom Amount"
        }
      )
    ] })
  ] });
};
export {
  Ye as CustomComponent
};
