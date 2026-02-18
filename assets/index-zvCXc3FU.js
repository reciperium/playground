import { r as sm, g as ng, a as rl, j as N, E as om, H as ug, s as ig, R as cg, l as fg, b as sg, c as og } from "./codeMirror-CovFGHBt.js";
(async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const h of document.querySelectorAll('link[rel="modulepreload"]')) s(h);
    new MutationObserver((h) => {
      for (const _ of h) if (_.type === "childList") for (const E of _.addedNodes) E.tagName === "LINK" && E.rel === "modulepreload" && s(E);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(h) {
      const _ = {};
      return h.integrity && (_.integrity = h.integrity), h.referrerPolicy && (_.referrerPolicy = h.referrerPolicy), h.crossOrigin === "use-credentials" ? _.credentials = "include" : h.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _;
    }
    function s(h) {
      if (h.ep) return;
      h.ep = true;
      const _ = o(h);
      fetch(h.href, _);
    }
  })();
  var Of = {
    exports: {}
  }, Bn = {}, Nf = {
    exports: {}
  }, Df = {};
  var Zd;
  function rg() {
    return Zd || (Zd = 1, (function(c) {
      function r(x, D) {
        var O = x.length;
        x.push(D);
        l: for (; 0 < O; ) {
          var al = O - 1 >>> 1, nl = x[al];
          if (0 < h(nl, D)) x[al] = D, x[O] = nl, O = al;
          else break l;
        }
      }
      function o(x) {
        return x.length === 0 ? null : x[0];
      }
      function s(x) {
        if (x.length === 0) return null;
        var D = x[0], O = x.pop();
        if (O !== D) {
          x[0] = O;
          l: for (var al = 0, nl = x.length, Ul = nl >>> 1; al < Ul; ) {
            var sl = 2 * (al + 1) - 1, X = x[sl], F = sl + 1, Ll = x[F];
            if (0 > h(X, O)) F < nl && 0 > h(Ll, X) ? (x[al] = Ll, x[F] = O, al = F) : (x[al] = X, x[sl] = O, al = sl);
            else if (F < nl && 0 > h(Ll, O)) x[al] = Ll, x[F] = O, al = F;
            else break l;
          }
        }
        return D;
      }
      function h(x, D) {
        var O = x.sortIndex - D.sortIndex;
        return O !== 0 ? O : x.id - D.id;
      }
      if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var _ = performance;
        c.unstable_now = function() {
          return _.now();
        };
      } else {
        var E = Date, U = E.now();
        c.unstable_now = function() {
          return E.now() - U;
        };
      }
      var T = [], p = [], R = 1, C = null, Z = 3, pl = false, Sl = false, fl = false, hl = false, Jl = typeof setTimeout == "function" ? setTimeout : null, Ot = typeof clearTimeout == "function" ? clearTimeout : null, Nl = typeof setImmediate < "u" ? setImmediate : null;
      function Vl(x) {
        for (var D = o(p); D !== null; ) {
          if (D.callback === null) s(p);
          else if (D.startTime <= x) s(p), D.sortIndex = D.expirationTime, r(T, D);
          else break;
          D = o(p);
        }
      }
      function kl(x) {
        if (fl = false, Vl(x), !Sl) if (o(T) !== null) Sl = true, Dl || (Dl = true, Bl());
        else {
          var D = o(p);
          D !== null && Xl(kl, D.startTime - x);
        }
      }
      var Dl = false, Zl = -1, Y = 5, wl = -1;
      function De() {
        return hl ? true : !(c.unstable_now() - wl < Y);
      }
      function jt() {
        if (hl = false, Dl) {
          var x = c.unstable_now();
          wl = x;
          var D = true;
          try {
            l: {
              Sl = false, fl && (fl = false, Ot(Zl), Zl = -1), pl = true;
              var O = Z;
              try {
                t: {
                  for (Vl(x), C = o(T); C !== null && !(C.expirationTime > x && De()); ) {
                    var al = C.callback;
                    if (typeof al == "function") {
                      C.callback = null, Z = C.priorityLevel;
                      var nl = al(C.expirationTime <= x);
                      if (x = c.unstable_now(), typeof nl == "function") {
                        C.callback = nl, Vl(x), D = true;
                        break t;
                      }
                      C === o(T) && s(T), Vl(x);
                    } else s(T);
                    C = o(T);
                  }
                  if (C !== null) D = true;
                  else {
                    var Ul = o(p);
                    Ul !== null && Xl(kl, Ul.startTime - x), D = false;
                  }
                }
                break l;
              } finally {
                C = null, Z = O, pl = false;
              }
              D = void 0;
            }
          } finally {
            D ? Bl() : Dl = false;
          }
        }
      }
      var Bl;
      if (typeof Nl == "function") Bl = function() {
        Nl(jt);
      };
      else if (typeof MessageChannel < "u") {
        var Ue = new MessageChannel(), Bt = Ue.port2;
        Ue.port1.onmessage = jt, Bl = function() {
          Bt.postMessage(null);
        };
      } else Bl = function() {
        Jl(jt, 0);
      };
      function Xl(x, D) {
        Zl = Jl(function() {
          x(c.unstable_now());
        }, D);
      }
      c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(x) {
        x.callback = null;
      }, c.unstable_forceFrameRate = function(x) {
        0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < x ? Math.floor(1e3 / x) : 5;
      }, c.unstable_getCurrentPriorityLevel = function() {
        return Z;
      }, c.unstable_next = function(x) {
        switch (Z) {
          case 1:
          case 2:
          case 3:
            var D = 3;
            break;
          default:
            D = Z;
        }
        var O = Z;
        Z = D;
        try {
          return x();
        } finally {
          Z = O;
        }
      }, c.unstable_requestPaint = function() {
        hl = true;
      }, c.unstable_runWithPriority = function(x, D) {
        switch (x) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            x = 3;
        }
        var O = Z;
        Z = x;
        try {
          return D();
        } finally {
          Z = O;
        }
      }, c.unstable_scheduleCallback = function(x, D, O) {
        var al = c.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? al + O : al) : O = al, x) {
          case 1:
            var nl = -1;
            break;
          case 2:
            nl = 250;
            break;
          case 5:
            nl = 1073741823;
            break;
          case 4:
            nl = 1e4;
            break;
          default:
            nl = 5e3;
        }
        return nl = O + nl, x = {
          id: R++,
          callback: D,
          priorityLevel: x,
          startTime: O,
          expirationTime: nl,
          sortIndex: -1
        }, O > al ? (x.sortIndex = O, r(p, x), o(T) === null && x === o(p) && (fl ? (Ot(Zl), Zl = -1) : fl = true, Xl(kl, O - al))) : (x.sortIndex = nl, r(T, x), Sl || pl || (Sl = true, Dl || (Dl = true, Bl()))), x;
      }, c.unstable_shouldYield = De, c.unstable_wrapCallback = function(x) {
        var D = Z;
        return function() {
          var O = Z;
          Z = D;
          try {
            return x.apply(this, arguments);
          } finally {
            Z = O;
          }
        };
      };
    })(Df)), Df;
  }
  var Ld;
  function dg() {
    return Ld || (Ld = 1, Nf.exports = rg()), Nf.exports;
  }
  var Uf = {
    exports: {}
  }, Ql = {};
  var Kd;
  function mg() {
    if (Kd) return Ql;
    Kd = 1;
    var c = sm();
    function r(T) {
      var p = "https://react.dev/errors/" + T;
      if (1 < arguments.length) {
        p += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var R = 2; R < arguments.length; R++) p += "&args[]=" + encodeURIComponent(arguments[R]);
      }
      return "Minified React error #" + T + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function o() {
    }
    var s = {
      d: {
        f: o,
        r: function() {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o
      },
      p: 0,
      findDOMNode: null
    }, h = /* @__PURE__ */ Symbol.for("react.portal");
    function _(T, p, R) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: h,
        key: C == null ? null : "" + C,
        children: T,
        containerInfo: p,
        implementation: R
      };
    }
    var E = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function U(T, p) {
      if (T === "font") return "";
      if (typeof p == "string") return p === "use-credentials" ? p : "";
    }
    return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ql.createPortal = function(T, p) {
      var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(r(299));
      return _(T, p, null, R);
    }, Ql.flushSync = function(T) {
      var p = E.T, R = s.p;
      try {
        if (E.T = null, s.p = 2, T) return T();
      } finally {
        E.T = p, s.p = R, s.d.f();
      }
    }, Ql.preconnect = function(T, p) {
      typeof T == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(T, p));
    }, Ql.prefetchDNS = function(T) {
      typeof T == "string" && s.d.D(T);
    }, Ql.preinit = function(T, p) {
      if (typeof T == "string" && p && typeof p.as == "string") {
        var R = p.as, C = U(R, p.crossOrigin), Z = typeof p.integrity == "string" ? p.integrity : void 0, pl = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        R === "style" ? s.d.S(T, typeof p.precedence == "string" ? p.precedence : void 0, {
          crossOrigin: C,
          integrity: Z,
          fetchPriority: pl
        }) : R === "script" && s.d.X(T, {
          crossOrigin: C,
          integrity: Z,
          fetchPriority: pl,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    }, Ql.preinitModule = function(T, p) {
      if (typeof T == "string") if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var R = U(p.as, p.crossOrigin);
          s.d.M(T, {
            crossOrigin: R,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && s.d.M(T);
    }, Ql.preload = function(T, p) {
      if (typeof T == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var R = p.as, C = U(R, p.crossOrigin);
        s.d.L(T, R, {
          crossOrigin: C,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0
        });
      }
    }, Ql.preloadModule = function(T, p) {
      if (typeof T == "string") if (p) {
        var R = U(p.as, p.crossOrigin);
        s.d.m(T, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: R,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(T);
    }, Ql.requestFormReset = function(T) {
      s.d.r(T);
    }, Ql.unstable_batchedUpdates = function(T, p) {
      return T(p);
    }, Ql.useFormState = function(T, p, R) {
      return E.H.useFormState(T, p, R);
    }, Ql.useFormStatus = function() {
      return E.H.useHostTransitionStatus();
    }, Ql.version = "19.2.4", Ql;
  }
  var Jd;
  function hg() {
    if (Jd) return Uf.exports;
    Jd = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
    }
    return c(), Uf.exports = mg(), Uf.exports;
  }
  var kd;
  function gg() {
    if (kd) return Bn;
    kd = 1;
    var c = dg(), r = sm(), o = hg();
    function s(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function h(l) {
      return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
    }
    function _(l) {
      var t = l, e = l;
      if (l.alternate) for (; t.return; ) t = t.return;
      else {
        l = t;
        do
          t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
        while (l);
      }
      return t.tag === 3 ? e : null;
    }
    function E(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function U(l) {
      if (l.tag === 31) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function T(l) {
      if (_(l) !== l) throw Error(s(188));
    }
    function p(l) {
      var t = l.alternate;
      if (!t) {
        if (t = _(l), t === null) throw Error(s(188));
        return t !== l ? null : l;
      }
      for (var e = l, a = t; ; ) {
        var n = e.return;
        if (n === null) break;
        var u = n.alternate;
        if (u === null) {
          if (a = n.return, a !== null) {
            e = a;
            continue;
          }
          break;
        }
        if (n.child === u.child) {
          for (u = n.child; u; ) {
            if (u === e) return T(n), l;
            if (u === a) return T(n), t;
            u = u.sibling;
          }
          throw Error(s(188));
        }
        if (e.return !== a.return) e = n, a = u;
        else {
          for (var i = false, f = n.child; f; ) {
            if (f === e) {
              i = true, e = n, a = u;
              break;
            }
            if (f === a) {
              i = true, a = n, e = u;
              break;
            }
            f = f.sibling;
          }
          if (!i) {
            for (f = u.child; f; ) {
              if (f === e) {
                i = true, e = u, a = n;
                break;
              }
              if (f === a) {
                i = true, a = u, e = n;
                break;
              }
              f = f.sibling;
            }
            if (!i) throw Error(s(189));
          }
        }
        if (e.alternate !== a) throw Error(s(190));
      }
      if (e.tag !== 3) throw Error(s(188));
      return e.stateNode.current === e ? l : t;
    }
    function R(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (t = R(l), t !== null) return t;
        l = l.sibling;
      }
      return null;
    }
    var C = Object.assign, Z = /* @__PURE__ */ Symbol.for("react.element"), pl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Sl = /* @__PURE__ */ Symbol.for("react.portal"), fl = /* @__PURE__ */ Symbol.for("react.fragment"), hl = /* @__PURE__ */ Symbol.for("react.strict_mode"), Jl = /* @__PURE__ */ Symbol.for("react.profiler"), Ot = /* @__PURE__ */ Symbol.for("react.consumer"), Nl = /* @__PURE__ */ Symbol.for("react.context"), Vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), kl = /* @__PURE__ */ Symbol.for("react.suspense"), Dl = /* @__PURE__ */ Symbol.for("react.suspense_list"), Zl = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), wl = /* @__PURE__ */ Symbol.for("react.activity"), De = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), jt = Symbol.iterator;
    function Bl(l) {
      return l === null || typeof l != "object" ? null : (l = jt && l[jt] || l["@@iterator"], typeof l == "function" ? l : null);
    }
    var Ue = /* @__PURE__ */ Symbol.for("react.client.reference");
    function Bt(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === Ue ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case fl:
          return "Fragment";
        case Jl:
          return "Profiler";
        case hl:
          return "StrictMode";
        case kl:
          return "Suspense";
        case Dl:
          return "SuspenseList";
        case wl:
          return "Activity";
      }
      if (typeof l == "object") switch (l.$$typeof) {
        case Sl:
          return "Portal";
        case Nl:
          return l.displayName || "Context";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case Vl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Zl:
          return t = l.displayName || null, t !== null ? t : Bt(l.type) || "Memo";
        case Y:
          t = l._payload, l = l._init;
          try {
            return Bt(l(t));
          } catch {
          }
      }
      return null;
    }
    var Xl = Array.isArray, x = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, al = [], nl = -1;
    function Ul(l) {
      return {
        current: l
      };
    }
    function sl(l) {
      0 > nl || (l.current = al[nl], al[nl] = null, nl--);
    }
    function X(l, t) {
      nl++, al[nl] = l.current, l.current = t;
    }
    var F = Ul(null), Ll = Ul(null), xt = Ul(null), yl = Ul(null);
    function Ce(l, t) {
      switch (X(xt, t), X(Ll, l), X(F, null), t.nodeType) {
        case 9:
        case 11:
          l = (l = t.documentElement) && (l = l.namespaceURI) ? md(l) : 0;
          break;
        default:
          if (l = t.tagName, t = t.namespaceURI) t = md(t), l = hd(t, l);
          else switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
      }
      sl(F), X(F, l);
    }
    function At() {
      sl(F), sl(Ll), sl(xt);
    }
    function le(l) {
      l.memoizedState !== null && X(yl, l);
      var t = F.current, e = hd(t, l.type);
      t !== e && (X(Ll, l), X(F, e));
    }
    function te(l) {
      Ll.current === l && (sl(F), sl(Ll)), yl.current === l && (sl(yl), Dn._currentValue = O);
    }
    var ee, Qf;
    function je(l) {
      if (ee === void 0) try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ee = t && t[1] || "", Qf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ee + l + Qf;
    }
    var oi = false;
    function ri(l, t) {
      if (!l || oi) return "";
      oi = true;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (S) {
                    var b = S;
                  }
                  Reflect.construct(l, [], M);
                } else {
                  try {
                    M.call();
                  } catch (S) {
                    b = S;
                  }
                  l.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (S) {
                  b = S;
                }
                (M = l()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (S) {
              if (S && b && typeof S.stack == "string") return [
                S.stack,
                b.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var u = a.DetermineComponentFrameRoot(), i = u[0], f = u[1];
        if (i && f) {
          var d = i.split(`
`), v = f.split(`
`);
          for (n = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === d.length || n === v.length) for (a = d.length - 1, n = v.length - 1; 1 <= a && 0 <= n && d[a] !== v[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (d[a] !== v[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || d[a] !== v[n]) {
                var z = `
` + d[a].replace(" at new ", " at ");
                return l.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", l.displayName)), z;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        oi = false, Error.prepareStackTrace = e;
      }
      return (e = l ? l.displayName || l.name : "") ? je(e) : "";
    }
    function Hm(l, t) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return je(l.type);
        case 16:
          return je("Lazy");
        case 13:
          return l.child !== t && t !== null ? je("Suspense Fallback") : je("Suspense");
        case 19:
          return je("SuspenseList");
        case 0:
        case 15:
          return ri(l.type, false);
        case 11:
          return ri(l.type.render, false);
        case 1:
          return ri(l.type, true);
        case 31:
          return je("Activity");
        default:
          return "";
      }
    }
    function Vf(l) {
      try {
        var t = "", e = null;
        do
          t += Hm(l, e), e = l, l = l.return;
        while (l);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var di = Object.prototype.hasOwnProperty, mi = c.unstable_scheduleCallback, hi = c.unstable_cancelCallback, Rm = c.unstable_shouldYield, qm = c.unstable_requestPaint, et = c.unstable_now, Gm = c.unstable_getCurrentPriorityLevel, Zf = c.unstable_ImmediatePriority, Lf = c.unstable_UserBlockingPriority, qn = c.unstable_NormalPriority, Ym = c.unstable_LowPriority, Kf = c.unstable_IdlePriority, wm = c.log, Xm = c.unstable_setDisableYieldValue, Xa = null, at = null;
    function ae(l) {
      if (typeof wm == "function" && Xm(l), at && typeof at.setStrictMode == "function") try {
        at.setStrictMode(Xa, l);
      } catch {
      }
    }
    var nt = Math.clz32 ? Math.clz32 : Zm, Qm = Math.log, Vm = Math.LN2;
    function Zm(l) {
      return l >>>= 0, l === 0 ? 32 : 31 - (Qm(l) / Vm | 0) | 0;
    }
    var Gn = 256, Yn = 262144, wn = 4194304;
    function Be(l) {
      var t = l & 42;
      if (t !== 0) return t;
      switch (l & -l) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return l & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return l;
      }
    }
    function Xn(l, t, e) {
      var a = l.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
      l = l.warmLanes;
      var f = a & 134217727;
      return f !== 0 ? (a = f & ~u, a !== 0 ? n = Be(a) : (i &= f, i !== 0 ? n = Be(i) : e || (e = f & ~l, e !== 0 && (n = Be(e))))) : (f = a & ~u, f !== 0 ? n = Be(f) : i !== 0 ? n = Be(i) : e || (e = a & ~l, e !== 0 && (n = Be(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n;
    }
    function Qa(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function Lm(l, t) {
      switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Jf() {
      var l = wn;
      return wn <<= 1, (wn & 62914560) === 0 && (wn = 4194304), l;
    }
    function gi(l) {
      for (var t = [], e = 0; 31 > e; e++) t.push(l);
      return t;
    }
    function Va(l, t) {
      l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
    }
    function Km(l, t, e, a, n, u) {
      var i = l.pendingLanes;
      l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
      var f = l.entanglements, d = l.expirationTimes, v = l.hiddenUpdates;
      for (e = i & ~e; 0 < e; ) {
        var z = 31 - nt(e), M = 1 << z;
        f[z] = 0, d[z] = -1;
        var b = v[z];
        if (b !== null) for (v[z] = null, z = 0; z < b.length; z++) {
          var S = b[z];
          S !== null && (S.lane &= -536870913);
        }
        e &= ~M;
      }
      a !== 0 && kf(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
    }
    function kf(l, t, e) {
      l.pendingLanes |= t, l.suspendedLanes &= ~t;
      var a = 31 - nt(t);
      l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
    }
    function Wf(l, t) {
      var e = l.entangledLanes |= t;
      for (l = l.entanglements; e; ) {
        var a = 31 - nt(e), n = 1 << a;
        n & t | l[a] & t && (l[a] |= t), e &= ~n;
      }
    }
    function $f(l, t) {
      var e = t & -t;
      return e = (e & 42) !== 0 ? 1 : yi(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
    }
    function yi(l) {
      switch (l) {
        case 2:
          l = 1;
          break;
        case 8:
          l = 4;
          break;
        case 32:
          l = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          l = 128;
          break;
        case 268435456:
          l = 134217728;
          break;
        default:
          l = 0;
      }
      return l;
    }
    function vi(l) {
      return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Ff() {
      var l = D.p;
      return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : qd(l.type));
    }
    function If(l, t) {
      var e = D.p;
      try {
        return D.p = l, t();
      } finally {
        D.p = e;
      }
    }
    var ne = Math.random().toString(36).slice(2), Hl = "__reactFiber$" + ne, Wl = "__reactProps$" + ne, ta = "__reactContainer$" + ne, bi = "__reactEvents$" + ne, Jm = "__reactListeners$" + ne, km = "__reactHandles$" + ne, Pf = "__reactResources$" + ne, Za = "__reactMarker$" + ne;
    function pi(l) {
      delete l[Hl], delete l[Wl], delete l[bi], delete l[Jm], delete l[km];
    }
    function ea(l) {
      var t = l[Hl];
      if (t) return t;
      for (var e = l.parentNode; e; ) {
        if (t = e[ta] || e[Hl]) {
          if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = _d(l); l !== null; ) {
            if (e = l[Hl]) return e;
            l = _d(l);
          }
          return t;
        }
        l = e, e = l.parentNode;
      }
      return null;
    }
    function aa(l) {
      if (l = l[Hl] || l[ta]) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
      }
      return null;
    }
    function La(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
      throw Error(s(33));
    }
    function na(l) {
      var t = l[Pf];
      return t || (t = l[Pf] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Cl(l) {
      l[Za] = true;
    }
    var ls = /* @__PURE__ */ new Set(), ts = {};
    function He(l, t) {
      ua(l, t), ua(l + "Capture", t);
    }
    function ua(l, t) {
      for (ts[l] = t, l = 0; l < t.length; l++) ls.add(t[l]);
    }
    var Wm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), es = {}, as = {};
    function $m(l) {
      return di.call(as, l) ? true : di.call(es, l) ? false : Wm.test(l) ? as[l] = true : (es[l] = true, false);
    }
    function Qn(l, t, e) {
      if ($m(t)) if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
    }
    function Vn(l, t, e) {
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(t);
            return;
        }
        l.setAttribute(t, "" + e);
      }
    }
    function Ht(l, t, e, a) {
      if (a === null) l.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(e);
            return;
        }
        l.setAttributeNS(t, e, "" + a);
      }
    }
    function dt(l) {
      switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return l;
        case "object":
          return l;
        default:
          return "";
      }
    }
    function ns(l) {
      var t = l.type;
      return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fm(l, t, e) {
      var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
      if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n = a.get, u = a.set;
        return Object.defineProperty(l, t, {
          configurable: true,
          get: function() {
            return n.call(this);
          },
          set: function(i) {
            e = "" + i, u.call(this, i);
          }
        }), Object.defineProperty(l, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return e;
          },
          setValue: function(i) {
            e = "" + i;
          },
          stopTracking: function() {
            l._valueTracker = null, delete l[t];
          }
        };
      }
    }
    function Si(l) {
      if (!l._valueTracker) {
        var t = ns(l) ? "checked" : "value";
        l._valueTracker = Fm(l, t, "" + l[t]);
      }
    }
    function us(l) {
      if (!l) return false;
      var t = l._valueTracker;
      if (!t) return true;
      var e = t.getValue(), a = "";
      return l && (a = ns(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), true) : false;
    }
    function Zn(l) {
      if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var Im = /[\n"\\]/g;
    function mt(l) {
      return l.replace(Im, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function _i(l, t, e, a, n, u, i, f) {
      l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + dt(t)) : l.value !== "" + dt(t) && (l.value = "" + dt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? zi(l, i, dt(t)) : e != null ? zi(l, i, dt(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + dt(f) : l.removeAttribute("name");
    }
    function is(l, t, e, a, n, u, i, f) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
        if (!(u !== "submit" && u !== "reset" || t != null)) {
          Si(l);
          return;
        }
        e = e != null ? "" + dt(e) : "", t = t != null ? "" + dt(t) : e, f || t === l.value || (l.value = t), l.defaultValue = t;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = f ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Si(l);
    }
    function zi(l, t, e) {
      t === "number" && Zn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
    }
    function ia(l, t, e, a) {
      if (l = l.options, t) {
        t = {};
        for (var n = 0; n < e.length; n++) t["$" + e[n]] = true;
        for (e = 0; e < l.length; e++) n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = true);
      } else {
        for (e = "" + dt(e), t = null, n = 0; n < l.length; n++) {
          if (l[n].value === e) {
            l[n].selected = true, a && (l[n].defaultSelected = true);
            return;
          }
          t !== null || l[n].disabled || (t = l[n]);
        }
        t !== null && (t.selected = true);
      }
    }
    function cs(l, t, e) {
      if (t != null && (t = "" + dt(t), t !== l.value && (l.value = t), e == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = e != null ? "" + dt(e) : "";
    }
    function fs(l, t, e, a) {
      if (t == null) {
        if (a != null) {
          if (e != null) throw Error(s(92));
          if (Xl(a)) {
            if (1 < a.length) throw Error(s(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), t = e;
      }
      e = dt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), Si(l);
    }
    function ca(l, t) {
      if (t) {
        var e = l.firstChild;
        if (e && e === l.lastChild && e.nodeType === 3) {
          e.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var Pm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function ss(l, t, e) {
      var a = t.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Pm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
    }
    function os(l, t, e) {
      if (t != null && typeof t != "object") throw Error(s(62));
      if (l = l.style, e != null) {
        for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
        for (var n in t) a = t[n], t.hasOwnProperty(n) && e[n] !== a && ss(l, n, a);
      } else for (var u in t) t.hasOwnProperty(u) && ss(l, u, t[u]);
    }
    function xi(l) {
      if (l.indexOf("-") === -1) return false;
      switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var l0 = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), t0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ln(l) {
      return t0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    function Rt() {
    }
    var Ai = null;
    function Ti(l) {
      return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
    }
    var fa = null, sa = null;
    function rs(l) {
      var t = aa(l);
      if (t && (l = t.stateNode)) {
        var e = l[Wl] || null;
        l: switch (l = t.stateNode, t.type) {
          case "input":
            if (_i(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
              for (e = l; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                var a = e[t];
                if (a !== l && a.form === l.form) {
                  var n = a[Wl] || null;
                  if (!n) throw Error(s(90));
                  _i(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && us(a);
            }
            break l;
          case "textarea":
            cs(l, e.value, e.defaultValue);
            break l;
          case "select":
            t = e.value, t != null && ia(l, !!e.multiple, t, false);
        }
      }
    }
    var Ei = false;
    function ds(l, t, e) {
      if (Ei) return l(t, e);
      Ei = true;
      try {
        var a = l(t);
        return a;
      } finally {
        if (Ei = false, (fa !== null || sa !== null) && (Cu(), fa && (t = fa, l = sa, sa = fa = null, rs(t), l))) for (t = 0; t < l.length; t++) rs(l[t]);
      }
    }
    function Ka(l, t) {
      var e = l.stateNode;
      if (e === null) return null;
      var a = e[Wl] || null;
      if (a === null) return null;
      e = a[t];
      l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
          break l;
        default:
          l = false;
      }
      if (l) return null;
      if (e && typeof e != "function") throw Error(s(231, t, typeof e));
      return e;
    }
    var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = false;
    if (qt) try {
      var Ja = {};
      Object.defineProperty(Ja, "passive", {
        get: function() {
          Mi = true;
        }
      }), window.addEventListener("test", Ja, Ja), window.removeEventListener("test", Ja, Ja);
    } catch {
      Mi = false;
    }
    var ue = null, Oi = null, Kn = null;
    function ms() {
      if (Kn) return Kn;
      var l, t = Oi, e = t.length, a, n = "value" in ue ? ue.value : ue.textContent, u = n.length;
      for (l = 0; l < e && t[l] === n[l]; l++) ;
      var i = e - l;
      for (a = 1; a <= i && t[e - a] === n[u - a]; a++) ;
      return Kn = n.slice(l, 1 < a ? 1 - a : void 0);
    }
    function Jn(l) {
      var t = l.keyCode;
      return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
    }
    function kn() {
      return true;
    }
    function hs() {
      return false;
    }
    function $l(l) {
      function t(e, a, n, u, i) {
        this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var f in l) l.hasOwnProperty(f) && (e = l[f], this[f] = e ? e(u) : u[f]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? kn : hs, this.isPropagationStopped = hs, this;
      }
      return C(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var e = this.nativeEvent;
          e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = kn);
        },
        stopPropagation: function() {
          var e = this.nativeEvent;
          e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = kn);
        },
        persist: function() {
        },
        isPersistent: kn
      }), t;
    }
    var Re = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Wn = $l(Re), ka = C({}, Re, {
      view: 0,
      detail: 0
    }), e0 = $l(ka), Ni, Di, Wa, $n = C({}, ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== Wa && (Wa && l.type === "mousemove" ? (Ni = l.screenX - Wa.screenX, Di = l.screenY - Wa.screenY) : Di = Ni = 0, Wa = l), Ni);
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : Di;
      }
    }), gs = $l($n), a0 = C({}, $n, {
      dataTransfer: 0
    }), n0 = $l(a0), u0 = C({}, ka, {
      relatedTarget: 0
    }), Ui = $l(u0), i0 = C({}, Re, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), c0 = $l(i0), f0 = C({}, Re, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      }
    }), s0 = $l(f0), o0 = C({}, Re, {
      data: 0
    }), ys = $l(o0), r0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, d0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, m0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function h0(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = m0[l]) ? !!t[l] : false;
    }
    function Ci() {
      return h0;
    }
    var g0 = C({}, ka, {
      key: function(l) {
        if (l.key) {
          var t = r0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress" ? (l = Jn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? d0[l.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function(l) {
        return l.type === "keypress" ? Jn(l) : 0;
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function(l) {
        return l.type === "keypress" ? Jn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      }
    }), y0 = $l(g0), v0 = C({}, $n, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), vs = $l(v0), b0 = C({}, ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci
    }), p0 = $l(b0), S0 = C({}, Re, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _0 = $l(S0), z0 = C({}, $n, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), x0 = $l(z0), A0 = C({}, Re, {
      newState: 0,
      oldState: 0
    }), T0 = $l(A0), E0 = [
      9,
      13,
      27,
      32
    ], ji = qt && "CompositionEvent" in window, $a = null;
    qt && "documentMode" in document && ($a = document.documentMode);
    var M0 = qt && "TextEvent" in window && !$a, bs = qt && (!ji || $a && 8 < $a && 11 >= $a), ps = " ", Ss = false;
    function _s(l, t) {
      switch (l) {
        case "keyup":
          return E0.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function zs(l) {
      return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
    }
    var oa = false;
    function O0(l, t) {
      switch (l) {
        case "compositionend":
          return zs(t);
        case "keypress":
          return t.which !== 32 ? null : (Ss = true, ps);
        case "textInput":
          return l = t.data, l === ps && Ss ? null : l;
        default:
          return null;
      }
    }
    function N0(l, t) {
      if (oa) return l === "compositionend" || !ji && _s(l, t) ? (l = ms(), Kn = Oi = ue = null, oa = false, l) : null;
      switch (l) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bs && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var D0 = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function xs(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!D0[l.type] : t === "textarea";
    }
    function As(l, t, e, a) {
      fa ? sa ? sa.push(a) : sa = [
        a
      ] : fa = a, t = Yu(t, "onChange"), 0 < t.length && (e = new Wn("onChange", "change", null, e, a), l.push({
        event: e,
        listeners: t
      }));
    }
    var Fa = null, Ia = null;
    function U0(l) {
      cd(l, 0);
    }
    function Fn(l) {
      var t = La(l);
      if (us(t)) return l;
    }
    function Ts(l, t) {
      if (l === "change") return t;
    }
    var Es = false;
    if (qt) {
      var Bi;
      if (qt) {
        var Hi = "oninput" in document;
        if (!Hi) {
          var Ms = document.createElement("div");
          Ms.setAttribute("oninput", "return;"), Hi = typeof Ms.oninput == "function";
        }
        Bi = Hi;
      } else Bi = false;
      Es = Bi && (!document.documentMode || 9 < document.documentMode);
    }
    function Os() {
      Fa && (Fa.detachEvent("onpropertychange", Ns), Ia = Fa = null);
    }
    function Ns(l) {
      if (l.propertyName === "value" && Fn(Ia)) {
        var t = [];
        As(t, Ia, l, Ti(l)), ds(U0, t);
      }
    }
    function C0(l, t, e) {
      l === "focusin" ? (Os(), Fa = t, Ia = e, Fa.attachEvent("onpropertychange", Ns)) : l === "focusout" && Os();
    }
    function j0(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return Fn(Ia);
    }
    function B0(l, t) {
      if (l === "click") return Fn(t);
    }
    function H0(l, t) {
      if (l === "input" || l === "change") return Fn(t);
    }
    function R0(l, t) {
      return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
    }
    var ut = typeof Object.is == "function" ? Object.is : R0;
    function Pa(l, t) {
      if (ut(l, t)) return true;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
      var e = Object.keys(l), a = Object.keys(t);
      if (e.length !== a.length) return false;
      for (a = 0; a < e.length; a++) {
        var n = e[a];
        if (!di.call(t, n) || !ut(l[n], t[n])) return false;
      }
      return true;
    }
    function Ds(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function Us(l, t) {
      var e = Ds(l);
      l = 0;
      for (var a; e; ) {
        if (e.nodeType === 3) {
          if (a = l + e.textContent.length, l <= t && a >= t) return {
            node: e,
            offset: t - l
          };
          l = a;
        }
        l: {
          for (; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling;
              break l;
            }
            e = e.parentNode;
          }
          e = void 0;
        }
        e = Ds(e);
      }
    }
    function Cs(l, t) {
      return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? Cs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
    }
    function js(l) {
      l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
      for (var t = Zn(l.document); t instanceof l.HTMLIFrameElement; ) {
        try {
          var e = typeof t.contentWindow.location.href == "string";
        } catch {
          e = false;
        }
        if (e) l = t.contentWindow;
        else break;
        t = Zn(l.document);
      }
      return t;
    }
    function Ri(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
    }
    var q0 = qt && "documentMode" in document && 11 >= document.documentMode, ra = null, qi = null, ln = null, Gi = false;
    function Bs(l, t, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Gi || ra == null || ra !== Zn(a) || (a = ra, "selectionStart" in a && Ri(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), ln && Pa(ln, a) || (ln = a, a = Yu(qi, "onSelect"), 0 < a.length && (t = new Wn("onSelect", "select", null, t, e), l.push({
        event: t,
        listeners: a
      }), t.target = ra)));
    }
    function qe(l, t) {
      var e = {};
      return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
    }
    var da = {
      animationend: qe("Animation", "AnimationEnd"),
      animationiteration: qe("Animation", "AnimationIteration"),
      animationstart: qe("Animation", "AnimationStart"),
      transitionrun: qe("Transition", "TransitionRun"),
      transitionstart: qe("Transition", "TransitionStart"),
      transitioncancel: qe("Transition", "TransitionCancel"),
      transitionend: qe("Transition", "TransitionEnd")
    }, Yi = {}, Hs = {};
    qt && (Hs = document.createElement("div").style, "AnimationEvent" in window || (delete da.animationend.animation, delete da.animationiteration.animation, delete da.animationstart.animation), "TransitionEvent" in window || delete da.transitionend.transition);
    function Ge(l) {
      if (Yi[l]) return Yi[l];
      if (!da[l]) return l;
      var t = da[l], e;
      for (e in t) if (t.hasOwnProperty(e) && e in Hs) return Yi[l] = t[e];
      return l;
    }
    var Rs = Ge("animationend"), qs = Ge("animationiteration"), Gs = Ge("animationstart"), G0 = Ge("transitionrun"), Y0 = Ge("transitionstart"), w0 = Ge("transitioncancel"), Ys = Ge("transitionend"), ws = /* @__PURE__ */ new Map(), wi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    wi.push("scrollEnd");
    function Tt(l, t) {
      ws.set(l, t), He(t, [
        l
      ]);
    }
    var In = typeof reportError == "function" ? reportError : function(l) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
          error: l
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", l);
        return;
      }
      console.error(l);
    }, ht = [], ma = 0, Xi = 0;
    function Pn() {
      for (var l = ma, t = Xi = ma = 0; t < l; ) {
        var e = ht[t];
        ht[t++] = null;
        var a = ht[t];
        ht[t++] = null;
        var n = ht[t];
        ht[t++] = null;
        var u = ht[t];
        if (ht[t++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Xs(e, n, u);
      }
    }
    function lu(l, t, e, a) {
      ht[ma++] = l, ht[ma++] = t, ht[ma++] = e, ht[ma++] = a, Xi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
    }
    function Qi(l, t, e, a) {
      return lu(l, t, e, a), tu(l);
    }
    function Ye(l, t) {
      return lu(l, null, null, t), tu(l);
    }
    function Xs(l, t, e) {
      l.lanes |= e;
      var a = l.alternate;
      a !== null && (a.lanes |= e);
      for (var n = false, u = l.return; u !== null; ) u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = true)), l = u, u = u.return;
      return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - nt(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [
        t
      ] : a.push(t), t.lane = e | 536870912), u) : null;
    }
    function tu(l) {
      if (50 < xn) throw xn = 0, Fc = null, Error(s(185));
      for (var t = l.return; t !== null; ) l = t, t = l.return;
      return l.tag === 3 ? l.stateNode : null;
    }
    var ha = {};
    function X0(l, t, e, a) {
      this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function it(l, t, e, a) {
      return new X0(l, t, e, a);
    }
    function Vi(l) {
      return l = l.prototype, !(!l || !l.isReactComponent);
    }
    function Gt(l, t) {
      var e = l.alternate;
      return e === null ? (e = it(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
    }
    function Qs(l, t) {
      l.flags &= 65011714;
      var e = l.alternate;
      return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), l;
    }
    function eu(l, t, e, a, n, u) {
      var i = 0;
      if (a = l, typeof l == "function") Vi(l) && (i = 1);
      else if (typeof l == "string") i = Kh(l, e, F.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else l: switch (l) {
        case wl:
          return l = it(31, e, t, n), l.elementType = wl, l.lanes = u, l;
        case fl:
          return we(e.children, n, u, t);
        case hl:
          i = 8, n |= 24;
          break;
        case Jl:
          return l = it(12, e, t, n | 2), l.elementType = Jl, l.lanes = u, l;
        case kl:
          return l = it(13, e, t, n), l.elementType = kl, l.lanes = u, l;
        case Dl:
          return l = it(19, e, t, n), l.elementType = Dl, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null) switch (l.$$typeof) {
            case Nl:
              i = 10;
              break l;
            case Ot:
              i = 9;
              break l;
            case Vl:
              i = 11;
              break l;
            case Zl:
              i = 14;
              break l;
            case Y:
              i = 16, a = null;
              break l;
          }
          i = 29, e = Error(s(130, l === null ? "null" : typeof l, "")), a = null;
      }
      return t = it(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
    }
    function we(l, t, e, a) {
      return l = it(7, l, a, t), l.lanes = e, l;
    }
    function Zi(l, t, e) {
      return l = it(6, l, null, t), l.lanes = e, l;
    }
    function Vs(l) {
      var t = it(18, null, null, 0);
      return t.stateNode = l, t;
    }
    function Li(l, t, e) {
      return t = it(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation
      }, t;
    }
    var Zs = /* @__PURE__ */ new WeakMap();
    function gt(l, t) {
      if (typeof l == "object" && l !== null) {
        var e = Zs.get(l);
        return e !== void 0 ? e : (t = {
          value: l,
          source: t,
          stack: Vf(t)
        }, Zs.set(l, t), t);
      }
      return {
        value: l,
        source: t,
        stack: Vf(t)
      };
    }
    var ga = [], ya = 0, au = null, tn = 0, yt = [], vt = 0, ie = null, Nt = 1, Dt = "";
    function Yt(l, t) {
      ga[ya++] = tn, ga[ya++] = au, au = l, tn = t;
    }
    function Ls(l, t, e) {
      yt[vt++] = Nt, yt[vt++] = Dt, yt[vt++] = ie, ie = l;
      var a = Nt;
      l = Dt;
      var n = 32 - nt(a) - 1;
      a &= ~(1 << n), e += 1;
      var u = 32 - nt(t) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Nt = 1 << 32 - nt(t) + n | e << n | a, Dt = u + l;
      } else Nt = 1 << u | e << n | a, Dt = l;
    }
    function Ki(l) {
      l.return !== null && (Yt(l, 1), Ls(l, 1, 0));
    }
    function Ji(l) {
      for (; l === au; ) au = ga[--ya], ga[ya] = null, tn = ga[--ya], ga[ya] = null;
      for (; l === ie; ) ie = yt[--vt], yt[vt] = null, Dt = yt[--vt], yt[vt] = null, Nt = yt[--vt], yt[vt] = null;
    }
    function Ks(l, t) {
      yt[vt++] = Nt, yt[vt++] = Dt, yt[vt++] = ie, Nt = t.id, Dt = t.overflow, ie = l;
    }
    var Rl = null, dl = null, $ = false, ce = null, bt = false, ki = Error(s(519));
    function fe(l) {
      var t = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw en(gt(t, l)), ki;
    }
    function Js(l) {
      var t = l.stateNode, e = l.type, a = l.memoizedProps;
      switch (t[Hl] = l, t[Wl] = a, e) {
        case "dialog":
          J("cancel", t), J("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          J("load", t);
          break;
        case "video":
        case "audio":
          for (e = 0; e < Tn.length; e++) J(Tn[e], t);
          break;
        case "source":
          J("error", t);
          break;
        case "img":
        case "image":
        case "link":
          J("error", t), J("load", t);
          break;
        case "details":
          J("toggle", t);
          break;
        case "input":
          J("invalid", t), is(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          J("invalid", t);
          break;
        case "textarea":
          J("invalid", t), fs(t, a.value, a.defaultValue, a.children);
      }
      e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === true || rd(t.textContent, e) ? (a.popover != null && (J("beforetoggle", t), J("toggle", t)), a.onScroll != null && J("scroll", t), a.onScrollEnd != null && J("scrollend", t), a.onClick != null && (t.onclick = Rt), t = true) : t = false, t || fe(l, true);
    }
    function ks(l) {
      for (Rl = l.return; Rl; ) switch (Rl.tag) {
        case 5:
        case 31:
        case 13:
          bt = false;
          return;
        case 27:
        case 3:
          bt = true;
          return;
        default:
          Rl = Rl.return;
      }
    }
    function va(l) {
      if (l !== Rl) return false;
      if (!$) return ks(l), $ = true, false;
      var t = l.tag, e;
      if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || mf(l.type, l.memoizedProps)), e = !e), e && dl && fe(l), ks(l), t === 13) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
        dl = Sd(l);
      } else if (t === 31) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
        dl = Sd(l);
      } else t === 27 ? (t = dl, ze(l.type) ? (l = bf, bf = null, dl = l) : dl = t) : dl = Rl ? St(l.stateNode.nextSibling) : null;
      return true;
    }
    function Xe() {
      dl = Rl = null, $ = false;
    }
    function Wi() {
      var l = ce;
      return l !== null && (lt === null ? lt = l : lt.push.apply(lt, l), ce = null), l;
    }
    function en(l) {
      ce === null ? ce = [
        l
      ] : ce.push(l);
    }
    var $i = Ul(null), Qe = null, wt = null;
    function se(l, t, e) {
      X($i, t._currentValue), t._currentValue = e;
    }
    function Xt(l) {
      l._currentValue = $i.current, sl($i);
    }
    function Fi(l, t, e) {
      for (; l !== null; ) {
        var a = l.alternate;
        if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
        l = l.return;
      }
    }
    function Ii(l, t, e, a) {
      var n = l.child;
      for (n !== null && (n.return = l); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var i = n.child;
          u = u.firstContext;
          l: for (; u !== null; ) {
            var f = u;
            u = n;
            for (var d = 0; d < t.length; d++) if (f.context === t[d]) {
              u.lanes |= e, f = u.alternate, f !== null && (f.lanes |= e), Fi(u.return, e, l), a || (i = null);
              break l;
            }
            u = f.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(s(341));
          i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Fi(i, e, l), i = null;
        } else i = n.child;
        if (i !== null) i.return = n;
        else for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
        n = i;
      }
    }
    function ba(l, t, e, a) {
      l = null;
      for (var n = t, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(s(387));
          if (i = i.memoizedProps, i !== null) {
            var f = n.type;
            ut(n.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [
              f
            ]);
          }
        } else if (n === yl.current) {
          if (i = n.alternate, i === null) throw Error(s(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Dn) : l = [
            Dn
          ]);
        }
        n = n.return;
      }
      l !== null && Ii(t, l, e, a), t.flags |= 262144;
    }
    function nu(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!ut(l.context._currentValue, l.memoizedValue)) return true;
        l = l.next;
      }
      return false;
    }
    function Ve(l) {
      Qe = l, wt = null, l = l.dependencies, l !== null && (l.firstContext = null);
    }
    function ql(l) {
      return Ws(Qe, l);
    }
    function uu(l, t) {
      return Qe === null && Ve(l), Ws(l, t);
    }
    function Ws(l, t) {
      var e = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: e,
        next: null
      }, wt === null) {
        if (l === null) throw Error(s(308));
        wt = t, l.dependencies = {
          lanes: 0,
          firstContext: t
        }, l.flags |= 524288;
      } else wt = wt.next = t;
      return e;
    }
    var Q0 = typeof AbortController < "u" ? AbortController : function() {
      var l = [], t = this.signal = {
        aborted: false,
        addEventListener: function(e, a) {
          l.push(a);
        }
      };
      this.abort = function() {
        t.aborted = true, l.forEach(function(e) {
          return e();
        });
      };
    }, V0 = c.unstable_scheduleCallback, Z0 = c.unstable_NormalPriority, xl = {
      $$typeof: Nl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Pi() {
      return {
        controller: new Q0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function an(l) {
      l.refCount--, l.refCount === 0 && V0(Z0, function() {
        l.controller.abort();
      });
    }
    var nn = null, lc = 0, pa = 0, Sa = null;
    function L0(l, t) {
      if (nn === null) {
        var e = nn = [];
        lc = 0, pa = af(), Sa = {
          status: "pending",
          value: void 0,
          then: function(a) {
            e.push(a);
          }
        };
      }
      return lc++, t.then($s, $s), t;
    }
    function $s() {
      if (--lc === 0 && nn !== null) {
        Sa !== null && (Sa.status = "fulfilled");
        var l = nn;
        nn = null, pa = 0, Sa = null;
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function K0(l, t) {
      var e = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          e.push(n);
        }
      };
      return l.then(function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < e.length; n++) (0, e[n])(t);
      }, function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++) (0, e[n])(void 0);
      }), a;
    }
    var Fs = x.S;
    x.S = function(l, t) {
      Hr = et(), typeof t == "object" && t !== null && typeof t.then == "function" && L0(l, t), Fs !== null && Fs(l, t);
    };
    var Ze = Ul(null);
    function tc() {
      var l = Ze.current;
      return l !== null ? l : ol.pooledCache;
    }
    function iu(l, t) {
      t === null ? X(Ze, Ze.current) : X(Ze, t.pool);
    }
    function Is() {
      var l = tc();
      return l === null ? null : {
        parent: xl._currentValue,
        pool: l
      };
    }
    var _a = Error(s(460)), ec = Error(s(474)), cu = Error(s(542)), fu = {
      then: function() {
      }
    };
    function Ps(l) {
      return l = l.status, l === "fulfilled" || l === "rejected";
    }
    function lo(l, t, e) {
      switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Rt, Rt), t = e), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw l = t.reason, eo(l), l;
        default:
          if (typeof t.status == "string") t.then(Rt, Rt);
          else {
            if (l = ol, l !== null && 100 < l.shellSuspendCounter) throw Error(s(482));
            l = t, l.status = "pending", l.then(function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            }, function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw l = t.reason, eo(l), l;
          }
          throw Ke = t, _a;
      }
    }
    function Le(l) {
      try {
        var t = l._init;
        return t(l._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ke = e, _a) : e;
      }
    }
    var Ke = null;
    function to() {
      if (Ke === null) throw Error(s(459));
      var l = Ke;
      return Ke = null, l;
    }
    function eo(l) {
      if (l === _a || l === cu) throw Error(s(483));
    }
    var za = null, un = 0;
    function su(l) {
      var t = un;
      return un += 1, za === null && (za = []), lo(za, l, t);
    }
    function cn(l, t) {
      t = t.props.ref, l.ref = t !== void 0 ? t : null;
    }
    function ou(l, t) {
      throw t.$$typeof === Z ? Error(s(525)) : (l = Object.prototype.toString.call(t), Error(s(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function ao(l) {
      function t(g, m) {
        if (l) {
          var y = g.deletions;
          y === null ? (g.deletions = [
            m
          ], g.flags |= 16) : y.push(m);
        }
      }
      function e(g, m) {
        if (!l) return null;
        for (; m !== null; ) t(g, m), m = m.sibling;
        return null;
      }
      function a(g) {
        for (var m = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
        return m;
      }
      function n(g, m) {
        return g = Gt(g, m), g.index = 0, g.sibling = null, g;
      }
      function u(g, m, y) {
        return g.index = y, l ? (y = g.alternate, y !== null ? (y = y.index, y < m ? (g.flags |= 67108866, m) : y) : (g.flags |= 67108866, m)) : (g.flags |= 1048576, m);
      }
      function i(g) {
        return l && g.alternate === null && (g.flags |= 67108866), g;
      }
      function f(g, m, y, A) {
        return m === null || m.tag !== 6 ? (m = Zi(y, g.mode, A), m.return = g, m) : (m = n(m, y), m.return = g, m);
      }
      function d(g, m, y, A) {
        var G = y.type;
        return G === fl ? z(g, m, y.props.children, A, y.key) : m !== null && (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Y && Le(G) === m.type) ? (m = n(m, y.props), cn(m, y), m.return = g, m) : (m = eu(y.type, y.key, y.props, null, g.mode, A), cn(m, y), m.return = g, m);
      }
      function v(g, m, y, A) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Li(y, g.mode, A), m.return = g, m) : (m = n(m, y.children || []), m.return = g, m);
      }
      function z(g, m, y, A, G) {
        return m === null || m.tag !== 7 ? (m = we(y, g.mode, A, G), m.return = g, m) : (m = n(m, y), m.return = g, m);
      }
      function M(g, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = Zi("" + m, g.mode, y), m.return = g, m;
        if (typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
            case pl:
              return y = eu(m.type, m.key, m.props, null, g.mode, y), cn(y, m), y.return = g, y;
            case Sl:
              return m = Li(m, g.mode, y), m.return = g, m;
            case Y:
              return m = Le(m), M(g, m, y);
          }
          if (Xl(m) || Bl(m)) return m = we(m, g.mode, y, null), m.return = g, m;
          if (typeof m.then == "function") return M(g, su(m), y);
          if (m.$$typeof === Nl) return M(g, uu(g, m), y);
          ou(g, m);
        }
        return null;
      }
      function b(g, m, y, A) {
        var G = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return G !== null ? null : f(g, m, "" + y, A);
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case pl:
              return y.key === G ? d(g, m, y, A) : null;
            case Sl:
              return y.key === G ? v(g, m, y, A) : null;
            case Y:
              return y = Le(y), b(g, m, y, A);
          }
          if (Xl(y) || Bl(y)) return G !== null ? null : z(g, m, y, A, null);
          if (typeof y.then == "function") return b(g, m, su(y), A);
          if (y.$$typeof === Nl) return b(g, m, uu(g, y), A);
          ou(g, y);
        }
        return null;
      }
      function S(g, m, y, A, G) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return g = g.get(y) || null, f(m, g, "" + A, G);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case pl:
              return g = g.get(A.key === null ? y : A.key) || null, d(m, g, A, G);
            case Sl:
              return g = g.get(A.key === null ? y : A.key) || null, v(m, g, A, G);
            case Y:
              return A = Le(A), S(g, m, y, A, G);
          }
          if (Xl(A) || Bl(A)) return g = g.get(y) || null, z(m, g, A, G, null);
          if (typeof A.then == "function") return S(g, m, y, su(A), G);
          if (A.$$typeof === Nl) return S(g, m, y, uu(m, A), G);
          ou(m, A);
        }
        return null;
      }
      function j(g, m, y, A) {
        for (var G = null, I = null, q = m, V = m = 0, W = null; q !== null && V < y.length; V++) {
          q.index > V ? (W = q, q = null) : W = q.sibling;
          var P = b(g, q, y[V], A);
          if (P === null) {
            q === null && (q = W);
            break;
          }
          l && q && P.alternate === null && t(g, q), m = u(P, m, V), I === null ? G = P : I.sibling = P, I = P, q = W;
        }
        if (V === y.length) return e(g, q), $ && Yt(g, V), G;
        if (q === null) {
          for (; V < y.length; V++) q = M(g, y[V], A), q !== null && (m = u(q, m, V), I === null ? G = q : I.sibling = q, I = q);
          return $ && Yt(g, V), G;
        }
        for (q = a(q); V < y.length; V++) W = S(q, g, V, y[V], A), W !== null && (l && W.alternate !== null && q.delete(W.key === null ? V : W.key), m = u(W, m, V), I === null ? G = W : I.sibling = W, I = W);
        return l && q.forEach(function(Me) {
          return t(g, Me);
        }), $ && Yt(g, V), G;
      }
      function w(g, m, y, A) {
        if (y == null) throw Error(s(151));
        for (var G = null, I = null, q = m, V = m = 0, W = null, P = y.next(); q !== null && !P.done; V++, P = y.next()) {
          q.index > V ? (W = q, q = null) : W = q.sibling;
          var Me = b(g, q, P.value, A);
          if (Me === null) {
            q === null && (q = W);
            break;
          }
          l && q && Me.alternate === null && t(g, q), m = u(Me, m, V), I === null ? G = Me : I.sibling = Me, I = Me, q = W;
        }
        if (P.done) return e(g, q), $ && Yt(g, V), G;
        if (q === null) {
          for (; !P.done; V++, P = y.next()) P = M(g, P.value, A), P !== null && (m = u(P, m, V), I === null ? G = P : I.sibling = P, I = P);
          return $ && Yt(g, V), G;
        }
        for (q = a(q); !P.done; V++, P = y.next()) P = S(q, g, V, P.value, A), P !== null && (l && P.alternate !== null && q.delete(P.key === null ? V : P.key), m = u(P, m, V), I === null ? G = P : I.sibling = P, I = P);
        return l && q.forEach(function(ag) {
          return t(g, ag);
        }), $ && Yt(g, V), G;
      }
      function cl(g, m, y, A) {
        if (typeof y == "object" && y !== null && y.type === fl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case pl:
              l: {
                for (var G = y.key; m !== null; ) {
                  if (m.key === G) {
                    if (G = y.type, G === fl) {
                      if (m.tag === 7) {
                        e(g, m.sibling), A = n(m, y.props.children), A.return = g, g = A;
                        break l;
                      }
                    } else if (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Y && Le(G) === m.type) {
                      e(g, m.sibling), A = n(m, y.props), cn(A, y), A.return = g, g = A;
                      break l;
                    }
                    e(g, m);
                    break;
                  } else t(g, m);
                  m = m.sibling;
                }
                y.type === fl ? (A = we(y.props.children, g.mode, A, y.key), A.return = g, g = A) : (A = eu(y.type, y.key, y.props, null, g.mode, A), cn(A, y), A.return = g, g = A);
              }
              return i(g);
            case Sl:
              l: {
                for (G = y.key; m !== null; ) {
                  if (m.key === G) if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                    e(g, m.sibling), A = n(m, y.children || []), A.return = g, g = A;
                    break l;
                  } else {
                    e(g, m);
                    break;
                  }
                  else t(g, m);
                  m = m.sibling;
                }
                A = Li(y, g.mode, A), A.return = g, g = A;
              }
              return i(g);
            case Y:
              return y = Le(y), cl(g, m, y, A);
          }
          if (Xl(y)) return j(g, m, y, A);
          if (Bl(y)) {
            if (G = Bl(y), typeof G != "function") throw Error(s(150));
            return y = G.call(y), w(g, m, y, A);
          }
          if (typeof y.then == "function") return cl(g, m, su(y), A);
          if (y.$$typeof === Nl) return cl(g, m, uu(g, y), A);
          ou(g, y);
        }
        return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, m !== null && m.tag === 6 ? (e(g, m.sibling), A = n(m, y), A.return = g, g = A) : (e(g, m), A = Zi(y, g.mode, A), A.return = g, g = A), i(g)) : e(g, m);
      }
      return function(g, m, y, A) {
        try {
          un = 0;
          var G = cl(g, m, y, A);
          return za = null, G;
        } catch (q) {
          if (q === _a || q === cu) throw q;
          var I = it(29, q, null, g.mode);
          return I.lanes = A, I.return = g, I;
        }
      };
    }
    var Je = ao(true), no = ao(false), oe = false;
    function ac(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function nc(l, t) {
      l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
        baseState: l.baseState,
        firstBaseUpdate: l.firstBaseUpdate,
        lastBaseUpdate: l.lastBaseUpdate,
        shared: l.shared,
        callbacks: null
      });
    }
    function re(l) {
      return {
        lane: l,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function de(l, t, e) {
      var a = l.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (ll & 2) !== 0) {
        var n = a.pending;
        return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = tu(l), Xs(l, null, e), t;
      }
      return lu(l, a, t, e), tu(l);
    }
    function fn(l, t, e) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, Wf(l, e);
      }
    }
    function uc(l, t) {
      var e = l.updateQueue, a = l.alternate;
      if (a !== null && (a = a.updateQueue, e === a)) {
        var n = null, u = null;
        if (e = e.firstBaseUpdate, e !== null) {
          do {
            var i = {
              lane: e.lane,
              tag: e.tag,
              payload: e.payload,
              callback: null,
              next: null
            };
            u === null ? n = u = i : u = u.next = i, e = e.next;
          } while (e !== null);
          u === null ? n = u = t : u = u.next = t;
        } else n = u = t;
        e = {
          baseState: a.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: u,
          shared: a.shared,
          callbacks: a.callbacks
        }, l.updateQueue = e;
        return;
      }
      l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
    }
    var ic = false;
    function sn() {
      if (ic) {
        var l = Sa;
        if (l !== null) throw l;
      }
    }
    function on(l, t, e, a) {
      ic = false;
      var n = l.updateQueue;
      oe = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, f = n.shared.pending;
      if (f !== null) {
        n.shared.pending = null;
        var d = f, v = d.next;
        d.next = null, i === null ? u = v : i.next = v, i = d;
        var z = l.alternate;
        z !== null && (z = z.updateQueue, f = z.lastBaseUpdate, f !== i && (f === null ? z.firstBaseUpdate = v : f.next = v, z.lastBaseUpdate = d));
      }
      if (u !== null) {
        var M = n.baseState;
        i = 0, z = v = d = null, f = u;
        do {
          var b = f.lane & -536870913, S = b !== f.lane;
          if (S ? (k & b) === b : (a & b) === b) {
            b !== 0 && b === pa && (ic = true), z !== null && (z = z.next = {
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: null,
              next: null
            });
            l: {
              var j = l, w = f;
              b = t;
              var cl = e;
              switch (w.tag) {
                case 1:
                  if (j = w.payload, typeof j == "function") {
                    M = j.call(cl, M, b);
                    break l;
                  }
                  M = j;
                  break l;
                case 3:
                  j.flags = j.flags & -65537 | 128;
                case 0:
                  if (j = w.payload, b = typeof j == "function" ? j.call(cl, M, b) : j, b == null) break l;
                  M = C({}, M, b);
                  break l;
                case 2:
                  oe = true;
              }
            }
            b = f.callback, b !== null && (l.flags |= 64, S && (l.flags |= 8192), S = n.callbacks, S === null ? n.callbacks = [
              b
            ] : S.push(b));
          } else S = {
            lane: b,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, z === null ? (v = z = S, d = M) : z = z.next = S, i |= b;
          if (f = f.next, f === null) {
            if (f = n.shared.pending, f === null) break;
            S = f, f = S.next, S.next = null, n.lastBaseUpdate = S, n.shared.pending = null;
          }
        } while (true);
        z === null && (d = M), n.baseState = d, n.firstBaseUpdate = v, n.lastBaseUpdate = z, u === null && (n.shared.lanes = 0), ve |= i, l.lanes = i, l.memoizedState = M;
      }
    }
    function uo(l, t) {
      if (typeof l != "function") throw Error(s(191, l));
      l.call(t);
    }
    function io(l, t) {
      var e = l.callbacks;
      if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) uo(e[l], t);
    }
    var xa = Ul(null), ru = Ul(0);
    function co(l, t) {
      l = $t, X(ru, l), X(xa, t), $t = l | t.baseLanes;
    }
    function cc() {
      X(ru, $t), X(xa, xa.current);
    }
    function fc() {
      $t = ru.current, sl(xa), sl(ru);
    }
    var ct = Ul(null), pt = null;
    function me(l) {
      var t = l.alternate;
      X(_l, _l.current & 1), X(ct, l), pt === null && (t === null || xa.current !== null || t.memoizedState !== null) && (pt = l);
    }
    function sc(l) {
      X(_l, _l.current), X(ct, l), pt === null && (pt = l);
    }
    function fo(l) {
      l.tag === 22 ? (X(_l, _l.current), X(ct, l), pt === null && (pt = l)) : he();
    }
    function he() {
      X(_l, _l.current), X(ct, ct.current);
    }
    function ft(l) {
      sl(ct), pt === l && (pt = null), sl(_l);
    }
    var _l = Ul(0);
    function du(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var e = t.memoizedState;
          if (e !== null && (e = e.dehydrated, e === null || yf(e) || vf(e))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qt = 0, Q = null, ul = null, Al = null, mu = false, Aa = false, ke = false, hu = 0, rn = 0, Ta = null, J0 = 0;
    function vl() {
      throw Error(s(321));
    }
    function oc(l, t) {
      if (t === null) return false;
      for (var e = 0; e < t.length && e < l.length; e++) if (!ut(l[e], t[e])) return false;
      return true;
    }
    function rc(l, t, e, a, n, u) {
      return Qt = u, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = l === null || l.memoizedState === null ? Ko : Ec, ke = false, u = e(a, n), ke = false, Aa && (u = oo(t, e, a, n)), so(l), u;
    }
    function so(l) {
      x.H = hn;
      var t = ul !== null && ul.next !== null;
      if (Qt = 0, Al = ul = Q = null, mu = false, rn = 0, Ta = null, t) throw Error(s(300));
      l === null || Tl || (l = l.dependencies, l !== null && nu(l) && (Tl = true));
    }
    function oo(l, t, e, a) {
      Q = l;
      var n = 0;
      do {
        if (Aa && (Ta = null), rn = 0, Aa = false, 25 <= n) throw Error(s(301));
        if (n += 1, Al = ul = null, l.updateQueue != null) {
          var u = l.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        x.H = Jo, u = t(e, a);
      } while (Aa);
      return u;
    }
    function k0() {
      var l = x.H, t = l.useState()[0];
      return t = typeof t.then == "function" ? dn(t) : t, l = l.useState()[0], (ul !== null ? ul.memoizedState : null) !== l && (Q.flags |= 1024), t;
    }
    function dc() {
      var l = hu !== 0;
      return hu = 0, l;
    }
    function mc(l, t, e) {
      t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
    }
    function hc(l) {
      if (mu) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), l = l.next;
        }
        mu = false;
      }
      Qt = 0, Al = ul = Q = null, Aa = false, rn = hu = 0, Ta = null;
    }
    function Kl() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Al === null ? Q.memoizedState = Al = l : Al = Al.next = l, Al;
    }
    function zl() {
      if (ul === null) {
        var l = Q.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = ul.next;
      var t = Al === null ? Q.memoizedState : Al.next;
      if (t !== null) Al = t, ul = l;
      else {
        if (l === null) throw Q.alternate === null ? Error(s(467)) : Error(s(310));
        ul = l, l = {
          memoizedState: ul.memoizedState,
          baseState: ul.baseState,
          baseQueue: ul.baseQueue,
          queue: ul.queue,
          next: null
        }, Al === null ? Q.memoizedState = Al = l : Al = Al.next = l;
      }
      return Al;
    }
    function gu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function dn(l) {
      var t = rn;
      return rn += 1, Ta === null && (Ta = []), l = lo(Ta, l, t), t = Q, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? Ko : Ec), l;
    }
    function yu(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return dn(l);
        if (l.$$typeof === Nl) return ql(l);
      }
      throw Error(s(438, String(l)));
    }
    function gc(l) {
      var t = null, e = Q.updateQueue;
      if (e !== null && (t = e.memoCache), t == null) {
        var a = Q.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
          data: a.data.map(function(n) {
            return n.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), e === null && (e = gu(), Q.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = De;
      return t.index++, e;
    }
    function Vt(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function vu(l) {
      var t = zl();
      return yc(t, ul, l);
    }
    function yc(l, t, e) {
      var a = l.queue;
      if (a === null) throw Error(s(311));
      a.lastRenderedReducer = e;
      var n = l.baseQueue, u = a.pending;
      if (u !== null) {
        if (n !== null) {
          var i = n.next;
          n.next = u.next, u.next = i;
        }
        t.baseQueue = n = u, a.pending = null;
      }
      if (u = l.baseState, n === null) l.memoizedState = u;
      else {
        t = n.next;
        var f = i = null, d = null, v = t, z = false;
        do {
          var M = v.lane & -536870913;
          if (M !== v.lane ? (k & M) === M : (Qt & M) === M) {
            var b = v.revertLane;
            if (b === 0) d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), M === pa && (z = true);
            else if ((Qt & b) === b) {
              v = v.next, b === pa && (z = true);
              continue;
            } else M = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, d === null ? (f = d = M, i = u) : d = d.next = M, Q.lanes |= b, ve |= b;
            M = v.action, ke && e(u, M), u = v.hasEagerState ? v.eagerState : e(u, M);
          } else b = {
            lane: M,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, d === null ? (f = d = b, i = u) : d = d.next = b, Q.lanes |= M, ve |= M;
          v = v.next;
        } while (v !== null && v !== t);
        if (d === null ? i = u : d.next = f, !ut(u, l.memoizedState) && (Tl = true, z && (e = Sa, e !== null))) throw e;
        l.memoizedState = u, l.baseState = i, l.baseQueue = d, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        l.memoizedState,
        a.dispatch
      ];
    }
    function vc(l) {
      var t = zl(), e = t.queue;
      if (e === null) throw Error(s(311));
      e.lastRenderedReducer = l;
      var a = e.dispatch, n = e.pending, u = t.memoizedState;
      if (n !== null) {
        e.pending = null;
        var i = n = n.next;
        do
          u = l(u, i.action), i = i.next;
        while (i !== n);
        ut(u, t.memoizedState) || (Tl = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function ro(l, t, e) {
      var a = Q, n = zl(), u = $;
      if (u) {
        if (e === void 0) throw Error(s(407));
        e = e();
      } else e = t();
      var i = !ut((ul || n).memoizedState, e);
      if (i && (n.memoizedState = e, Tl = true), n = n.queue, Sc(go.bind(null, a, n, l), [
        l
      ]), n.getSnapshot !== t || i || Al !== null && Al.memoizedState.tag & 1) {
        if (a.flags |= 2048, Ea(9, {
          destroy: void 0
        }, ho.bind(null, a, n, e, t), null), ol === null) throw Error(s(349));
        u || (Qt & 127) !== 0 || mo(a, t, e);
      }
      return e;
    }
    function mo(l, t, e) {
      l.flags |= 16384, l = {
        getSnapshot: t,
        value: e
      }, t = Q.updateQueue, t === null ? (t = gu(), Q.updateQueue = t, t.stores = [
        l
      ]) : (e = t.stores, e === null ? t.stores = [
        l
      ] : e.push(l));
    }
    function ho(l, t, e, a) {
      t.value = e, t.getSnapshot = a, yo(t) && vo(l);
    }
    function go(l, t, e) {
      return e(function() {
        yo(t) && vo(l);
      });
    }
    function yo(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var e = t();
        return !ut(l, e);
      } catch {
        return true;
      }
    }
    function vo(l) {
      var t = Ye(l, 2);
      t !== null && tt(t, l, 2);
    }
    function bc(l) {
      var t = Kl();
      if (typeof l == "function") {
        var e = l;
        if (l = e(), ke) {
          ae(true);
          try {
            e();
          } finally {
            ae(false);
          }
        }
      }
      return t.memoizedState = t.baseState = l, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: l
      }, t;
    }
    function bo(l, t, e, a) {
      return l.baseState = e, yc(l, ul, typeof a == "function" ? a : Vt);
    }
    function W0(l, t, e, a, n) {
      if (Su(l)) throw Error(s(485));
      if (l = t.action, l !== null) {
        var u = {
          payload: n,
          action: l,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(i) {
            u.listeners.push(i);
          }
        };
        x.T !== null ? e(true) : u.isTransition = false, a(u), e = t.pending, e === null ? (u.next = t.pending = u, po(t, u)) : (u.next = e.next, t.pending = e.next = u);
      }
    }
    function po(l, t) {
      var e = t.action, a = t.payload, n = l.state;
      if (t.isTransition) {
        var u = x.T, i = {};
        x.T = i;
        try {
          var f = e(n, a), d = x.S;
          d !== null && d(i, f), So(l, t, f);
        } catch (v) {
          pc(l, t, v);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), x.T = u;
        }
      } else try {
        u = e(n, a), So(l, t, u);
      } catch (v) {
        pc(l, t, v);
      }
    }
    function So(l, t, e) {
      e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
        _o(l, t, a);
      }, function(a) {
        return pc(l, t, a);
      }) : _o(l, t, e);
    }
    function _o(l, t, e) {
      t.status = "fulfilled", t.value = e, zo(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, po(l, e)));
    }
    function pc(l, t, e) {
      var a = l.pending;
      if (l.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = e, zo(t), t = t.next;
        while (t !== a);
      }
      l.action = null;
    }
    function zo(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function xo(l, t) {
      return t;
    }
    function Ao(l, t) {
      if ($) {
        var e = ol.formState;
        if (e !== null) {
          l: {
            var a = Q;
            if ($) {
              if (dl) {
                t: {
                  for (var n = dl, u = bt; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break t;
                    }
                    if (n = St(n.nextSibling), n === null) {
                      n = null;
                      break t;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  dl = St(n.nextSibling), a = n.data === "F!";
                  break l;
                }
              }
              fe(a);
            }
            a = false;
          }
          a && (t = e[0]);
        }
      }
      return e = Kl(), e.memoizedState = e.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xo,
        lastRenderedState: t
      }, e.queue = a, e = Vo.bind(null, Q, a), a.dispatch = e, a = bc(false), u = Tc.bind(null, Q, false, a.queue), a = Kl(), n = {
        state: t,
        dispatch: null,
        action: l,
        pending: null
      }, a.queue = n, e = W0.bind(null, Q, n, u, e), n.dispatch = e, a.memoizedState = l, [
        t,
        e,
        false
      ];
    }
    function To(l) {
      var t = zl();
      return Eo(t, ul, l);
    }
    function Eo(l, t, e) {
      if (t = yc(l, t, xo)[0], l = vu(Vt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = dn(t);
      } catch (i) {
        throw i === _a ? cu : i;
      }
      else a = t;
      t = zl();
      var n = t.queue, u = n.dispatch;
      return e !== t.memoizedState && (Q.flags |= 2048, Ea(9, {
        destroy: void 0
      }, $0.bind(null, n, e), null)), [
        a,
        u,
        l
      ];
    }
    function $0(l, t) {
      l.action = t;
    }
    function Mo(l) {
      var t = zl(), e = ul;
      if (e !== null) return Eo(t, e, l);
      zl(), t = t.memoizedState, e = zl();
      var a = e.queue.dispatch;
      return e.memoizedState = l, [
        t,
        a,
        false
      ];
    }
    function Ea(l, t, e, a) {
      return l = {
        tag: l,
        create: e,
        deps: a,
        inst: t,
        next: null
      }, t = Q.updateQueue, t === null && (t = gu(), Q.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
    }
    function Oo() {
      return zl().memoizedState;
    }
    function bu(l, t, e, a) {
      var n = Kl();
      Q.flags |= l, n.memoizedState = Ea(1 | t, {
        destroy: void 0
      }, e, a === void 0 ? null : a);
    }
    function pu(l, t, e, a) {
      var n = zl();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      ul !== null && a !== null && oc(a, ul.memoizedState.deps) ? n.memoizedState = Ea(t, u, e, a) : (Q.flags |= l, n.memoizedState = Ea(1 | t, u, e, a));
    }
    function No(l, t) {
      bu(8390656, 8, l, t);
    }
    function Sc(l, t) {
      pu(2048, 8, l, t);
    }
    function F0(l) {
      Q.flags |= 4;
      var t = Q.updateQueue;
      if (t === null) t = gu(), Q.updateQueue = t, t.events = [
        l
      ];
      else {
        var e = t.events;
        e === null ? t.events = [
          l
        ] : e.push(l);
      }
    }
    function Do(l) {
      var t = zl().memoizedState;
      return F0({
        ref: t,
        nextImpl: l
      }), function() {
        if ((ll & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Uo(l, t) {
      return pu(4, 2, l, t);
    }
    function Co(l, t) {
      return pu(4, 4, l, t);
    }
    function jo(l, t) {
      if (typeof t == "function") {
        l = l();
        var e = t(l);
        return function() {
          typeof e == "function" ? e() : t(null);
        };
      }
      if (t != null) return l = l(), t.current = l, function() {
        t.current = null;
      };
    }
    function Bo(l, t, e) {
      e = e != null ? e.concat([
        l
      ]) : null, pu(4, 4, jo.bind(null, t, l), e);
    }
    function _c() {
    }
    function Ho(l, t) {
      var e = zl();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      return t !== null && oc(t, a[1]) ? a[0] : (e.memoizedState = [
        l,
        t
      ], l);
    }
    function Ro(l, t) {
      var e = zl();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      if (t !== null && oc(t, a[1])) return a[0];
      if (a = l(), ke) {
        ae(true);
        try {
          l();
        } finally {
          ae(false);
        }
      }
      return e.memoizedState = [
        a,
        t
      ], a;
    }
    function zc(l, t, e) {
      return e === void 0 || (Qt & 1073741824) !== 0 && (k & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = qr(), Q.lanes |= l, ve |= l, e);
    }
    function qo(l, t, e, a) {
      return ut(e, t) ? e : xa.current !== null ? (l = zc(l, e, a), ut(l, t) || (Tl = true), l) : (Qt & 42) === 0 || (Qt & 1073741824) !== 0 && (k & 261930) === 0 ? (Tl = true, l.memoizedState = e) : (l = qr(), Q.lanes |= l, ve |= l, t);
    }
    function Go(l, t, e, a, n) {
      var u = D.p;
      D.p = u !== 0 && 8 > u ? u : 8;
      var i = x.T, f = {};
      x.T = f, Tc(l, false, t, e);
      try {
        var d = n(), v = x.S;
        if (v !== null && v(f, d), d !== null && typeof d == "object" && typeof d.then == "function") {
          var z = K0(d, a);
          mn(l, t, z, rt(l));
        } else mn(l, t, a, rt(l));
      } catch (M) {
        mn(l, t, {
          then: function() {
          },
          status: "rejected",
          reason: M
        }, rt());
      } finally {
        D.p = u, i !== null && f.types !== null && (i.types = f.types), x.T = i;
      }
    }
    function I0() {
    }
    function xc(l, t, e, a) {
      if (l.tag !== 5) throw Error(s(476));
      var n = Yo(l).queue;
      Go(l, n, t, O, e === null ? I0 : function() {
        return wo(l), e(a);
      });
    }
    function Yo(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: O,
        baseState: O,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: O
        },
        next: null
      };
      var e = {};
      return t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: e
        },
        next: null
      }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
    }
    function wo(l) {
      var t = Yo(l);
      t.next === null && (t = l.alternate.memoizedState), mn(l, t.next.queue, {}, rt());
    }
    function Ac() {
      return ql(Dn);
    }
    function Xo() {
      return zl().memoizedState;
    }
    function Qo() {
      return zl().memoizedState;
    }
    function P0(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var e = rt();
            l = re(e);
            var a = de(t, l, e);
            a !== null && (tt(a, t, e), fn(a, t, e)), t = {
              cache: Pi()
            }, l.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function lh(l, t, e) {
      var a = rt();
      e = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Su(l) ? Zo(t, e) : (e = Qi(l, t, e, a), e !== null && (tt(e, l, a), Lo(e, t, a)));
    }
    function Vo(l, t, e) {
      var a = rt();
      mn(l, t, e, a);
    }
    function mn(l, t, e, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Su(l)) Zo(t, n);
      else {
        var u = l.alternate;
        if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
          var i = t.lastRenderedState, f = u(i, e);
          if (n.hasEagerState = true, n.eagerState = f, ut(f, i)) return lu(l, t, n, 0), ol === null && Pn(), false;
        } catch {
        }
        if (e = Qi(l, t, n, a), e !== null) return tt(e, l, a), Lo(e, t, a), true;
      }
      return false;
    }
    function Tc(l, t, e, a) {
      if (a = {
        lane: 2,
        revertLane: af(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Su(l)) {
        if (t) throw Error(s(479));
      } else t = Qi(l, e, a, 2), t !== null && tt(t, l, 2);
    }
    function Su(l) {
      var t = l.alternate;
      return l === Q || t !== null && t === Q;
    }
    function Zo(l, t) {
      Aa = mu = true;
      var e = l.pending;
      e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
    }
    function Lo(l, t, e) {
      if ((e & 4194048) !== 0) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, Wf(l, e);
      }
    }
    var hn = {
      readContext: ql,
      use: yu,
      useCallback: vl,
      useContext: vl,
      useEffect: vl,
      useImperativeHandle: vl,
      useLayoutEffect: vl,
      useInsertionEffect: vl,
      useMemo: vl,
      useReducer: vl,
      useRef: vl,
      useState: vl,
      useDebugValue: vl,
      useDeferredValue: vl,
      useTransition: vl,
      useSyncExternalStore: vl,
      useId: vl,
      useHostTransitionStatus: vl,
      useFormState: vl,
      useActionState: vl,
      useOptimistic: vl,
      useMemoCache: vl,
      useCacheRefresh: vl
    };
    hn.useEffectEvent = vl;
    var Ko = {
      readContext: ql,
      use: yu,
      useCallback: function(l, t) {
        return Kl().memoizedState = [
          l,
          t === void 0 ? null : t
        ], l;
      },
      useContext: ql,
      useEffect: No,
      useImperativeHandle: function(l, t, e) {
        e = e != null ? e.concat([
          l
        ]) : null, bu(4194308, 4, jo.bind(null, t, l), e);
      },
      useLayoutEffect: function(l, t) {
        return bu(4194308, 4, l, t);
      },
      useInsertionEffect: function(l, t) {
        bu(4, 2, l, t);
      },
      useMemo: function(l, t) {
        var e = Kl();
        t = t === void 0 ? null : t;
        var a = l();
        if (ke) {
          ae(true);
          try {
            l();
          } finally {
            ae(false);
          }
        }
        return e.memoizedState = [
          a,
          t
        ], a;
      },
      useReducer: function(l, t, e) {
        var a = Kl();
        if (e !== void 0) {
          var n = e(t);
          if (ke) {
            ae(true);
            try {
              e(t);
            } finally {
              ae(false);
            }
          }
        } else n = t;
        return a.memoizedState = a.baseState = n, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: n
        }, a.queue = l, l = l.dispatch = lh.bind(null, Q, l), [
          a.memoizedState,
          l
        ];
      },
      useRef: function(l) {
        var t = Kl();
        return l = {
          current: l
        }, t.memoizedState = l;
      },
      useState: function(l) {
        l = bc(l);
        var t = l.queue, e = Vo.bind(null, Q, t);
        return t.dispatch = e, [
          l.memoizedState,
          e
        ];
      },
      useDebugValue: _c,
      useDeferredValue: function(l, t) {
        var e = Kl();
        return zc(e, l, t);
      },
      useTransition: function() {
        var l = bc(false);
        return l = Go.bind(null, Q, l.queue, true, false), Kl().memoizedState = l, [
          false,
          l
        ];
      },
      useSyncExternalStore: function(l, t, e) {
        var a = Q, n = Kl();
        if ($) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (e = t(), ol === null) throw Error(s(349));
          (k & 127) !== 0 || mo(a, t, e);
        }
        n.memoizedState = e;
        var u = {
          value: e,
          getSnapshot: t
        };
        return n.queue = u, No(go.bind(null, a, u, l), [
          l
        ]), a.flags |= 2048, Ea(9, {
          destroy: void 0
        }, ho.bind(null, a, u, e, t), null), e;
      },
      useId: function() {
        var l = Kl(), t = ol.identifierPrefix;
        if ($) {
          var e = Dt, a = Nt;
          e = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = hu++, 0 < e && (t += "H" + e.toString(32)), t += "_";
        } else e = J0++, t = "_" + t + "r_" + e.toString(32) + "_";
        return l.memoizedState = t;
      },
      useHostTransitionStatus: Ac,
      useFormState: Ao,
      useActionState: Ao,
      useOptimistic: function(l) {
        var t = Kl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = e, t = Tc.bind(null, Q, true, e), e.dispatch = t, [
          l,
          t
        ];
      },
      useMemoCache: gc,
      useCacheRefresh: function() {
        return Kl().memoizedState = P0.bind(null, Q);
      },
      useEffectEvent: function(l) {
        var t = Kl(), e = {
          impl: l
        };
        return t.memoizedState = e, function() {
          if ((ll & 2) !== 0) throw Error(s(440));
          return e.impl.apply(void 0, arguments);
        };
      }
    }, Ec = {
      readContext: ql,
      use: yu,
      useCallback: Ho,
      useContext: ql,
      useEffect: Sc,
      useImperativeHandle: Bo,
      useInsertionEffect: Uo,
      useLayoutEffect: Co,
      useMemo: Ro,
      useReducer: vu,
      useRef: Oo,
      useState: function() {
        return vu(Vt);
      },
      useDebugValue: _c,
      useDeferredValue: function(l, t) {
        var e = zl();
        return qo(e, ul.memoizedState, l, t);
      },
      useTransition: function() {
        var l = vu(Vt)[0], t = zl().memoizedState;
        return [
          typeof l == "boolean" ? l : dn(l),
          t
        ];
      },
      useSyncExternalStore: ro,
      useId: Xo,
      useHostTransitionStatus: Ac,
      useFormState: To,
      useActionState: To,
      useOptimistic: function(l, t) {
        var e = zl();
        return bo(e, ul, l, t);
      },
      useMemoCache: gc,
      useCacheRefresh: Qo
    };
    Ec.useEffectEvent = Do;
    var Jo = {
      readContext: ql,
      use: yu,
      useCallback: Ho,
      useContext: ql,
      useEffect: Sc,
      useImperativeHandle: Bo,
      useInsertionEffect: Uo,
      useLayoutEffect: Co,
      useMemo: Ro,
      useReducer: vc,
      useRef: Oo,
      useState: function() {
        return vc(Vt);
      },
      useDebugValue: _c,
      useDeferredValue: function(l, t) {
        var e = zl();
        return ul === null ? zc(e, l, t) : qo(e, ul.memoizedState, l, t);
      },
      useTransition: function() {
        var l = vc(Vt)[0], t = zl().memoizedState;
        return [
          typeof l == "boolean" ? l : dn(l),
          t
        ];
      },
      useSyncExternalStore: ro,
      useId: Xo,
      useHostTransitionStatus: Ac,
      useFormState: Mo,
      useActionState: Mo,
      useOptimistic: function(l, t) {
        var e = zl();
        return ul !== null ? bo(e, ul, l, t) : (e.baseState = l, [
          l,
          e.queue.dispatch
        ]);
      },
      useMemoCache: gc,
      useCacheRefresh: Qo
    };
    Jo.useEffectEvent = Do;
    function Mc(l, t, e, a) {
      t = l.memoizedState, e = e(a, t), e = e == null ? t : C({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
    }
    var Oc = {
      enqueueSetState: function(l, t, e) {
        l = l._reactInternals;
        var a = rt(), n = re(a);
        n.payload = t, e != null && (n.callback = e), t = de(l, n, a), t !== null && (tt(t, l, a), fn(t, l, a));
      },
      enqueueReplaceState: function(l, t, e) {
        l = l._reactInternals;
        var a = rt(), n = re(a);
        n.tag = 1, n.payload = t, e != null && (n.callback = e), t = de(l, n, a), t !== null && (tt(t, l, a), fn(t, l, a));
      },
      enqueueForceUpdate: function(l, t) {
        l = l._reactInternals;
        var e = rt(), a = re(e);
        a.tag = 2, t != null && (a.callback = t), t = de(l, a, e), t !== null && (tt(t, l, e), fn(t, l, e));
      }
    };
    function ko(l, t, e, a, n, u, i) {
      return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Pa(e, a) || !Pa(n, u) : true;
    }
    function Wo(l, t, e, a) {
      l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Oc.enqueueReplaceState(t, t.state, null);
    }
    function We(l, t) {
      var e = t;
      if ("ref" in t) {
        e = {};
        for (var a in t) a !== "ref" && (e[a] = t[a]);
      }
      if (l = l.defaultProps) {
        e === t && (e = C({}, e));
        for (var n in l) e[n] === void 0 && (e[n] = l[n]);
      }
      return e;
    }
    function $o(l) {
      In(l);
    }
    function Fo(l) {
      console.error(l);
    }
    function Io(l) {
      In(l);
    }
    function _u(l, t) {
      try {
        var e = l.onUncaughtError;
        e(t.value, {
          componentStack: t.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Po(l, t, e) {
      try {
        var a = l.onCaughtError;
        a(e.value, {
          componentStack: e.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Nc(l, t, e) {
      return e = re(e), e.tag = 3, e.payload = {
        element: null
      }, e.callback = function() {
        _u(l, t);
      }, e;
    }
    function lr(l) {
      return l = re(l), l.tag = 3, l;
    }
    function tr(l, t, e, a) {
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        l.payload = function() {
          return n(u);
        }, l.callback = function() {
          Po(t, e, a);
        };
      }
      var i = e.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
        Po(t, e, a), typeof n != "function" && (be === null ? be = /* @__PURE__ */ new Set([
          this
        ]) : be.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : ""
        });
      });
    }
    function th(l, t, e, a, n) {
      if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = e.alternate, t !== null && ba(t, e, n, true), e = ct.current, e !== null) {
          switch (e.tag) {
            case 31:
            case 13:
              return pt === null ? ju() : e.alternate === null && bl === 0 && (bl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === fu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : t.add(a), lf(l, a, n)), false;
            case 22:
              return e.flags |= 65536, a === fu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a)), lf(l, a, n)), false;
          }
          throw Error(s(435, e.tag));
        }
        return lf(l, a, n), ju(), false;
      }
      if ($) return t = ct.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== ki && (l = Error(s(422), {
        cause: a
      }), en(gt(l, e)))) : (a !== ki && (t = Error(s(423), {
        cause: a
      }), en(gt(t, e))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = gt(a, e), n = Nc(l.stateNode, a, n), uc(l, n), bl !== 4 && (bl = 2)), false;
      var u = Error(s(520), {
        cause: a
      });
      if (u = gt(u, e), zn === null ? zn = [
        u
      ] : zn.push(u), bl !== 4 && (bl = 2), t === null) return true;
      a = gt(a, e), e = t;
      do {
        switch (e.tag) {
          case 3:
            return e.flags |= 65536, l = n & -n, e.lanes |= l, l = Nc(e.stateNode, a, l), uc(e, l), false;
          case 1:
            if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (be === null || !be.has(u)))) return e.flags |= 65536, n &= -n, e.lanes |= n, n = lr(n), tr(n, l, e, a), uc(e, n), false;
        }
        e = e.return;
      } while (e !== null);
      return false;
    }
    var Dc = Error(s(461)), Tl = false;
    function Gl(l, t, e, a) {
      t.child = l === null ? no(t, null, e, a) : Je(t, l.child, e, a);
    }
    function er(l, t, e, a, n) {
      e = e.render;
      var u = t.ref;
      if ("ref" in a) {
        var i = {};
        for (var f in a) f !== "ref" && (i[f] = a[f]);
      } else i = a;
      return Ve(t), a = rc(l, t, e, i, u, n), f = dc(), l !== null && !Tl ? (mc(l, t, n), Zt(l, t, n)) : ($ && f && Ki(t), t.flags |= 1, Gl(l, t, a, n), t.child);
    }
    function ar(l, t, e, a, n) {
      if (l === null) {
        var u = e.type;
        return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, nr(l, t, u, a, n)) : (l = eu(e.type, null, a, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l);
      }
      if (u = l.child, !Gc(l, n)) {
        var i = u.memoizedProps;
        if (e = e.compare, e = e !== null ? e : Pa, e(i, a) && l.ref === t.ref) return Zt(l, t, n);
      }
      return t.flags |= 1, l = Gt(u, a), l.ref = t.ref, l.return = t, t.child = l;
    }
    function nr(l, t, e, a, n) {
      if (l !== null) {
        var u = l.memoizedProps;
        if (Pa(u, a) && l.ref === t.ref) if (Tl = false, t.pendingProps = a = u, Gc(l, n)) (l.flags & 131072) !== 0 && (Tl = true);
        else return t.lanes = l.lanes, Zt(l, t, n);
      }
      return Uc(l, t, e, a, n);
    }
    function ur(l, t, e, a) {
      var n = a.children, u = l !== null ? l.memoizedState : null;
      if (l === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | e : e, l !== null) {
            for (a = t.child = l.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
            a = n & ~u;
          } else a = 0, t.child = null;
          return ir(l, t, u, e, a);
        }
        if ((e & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, l !== null && iu(t, u !== null ? u.cachePool : null), u !== null ? co(t, u) : cc(), fo(t);
        else return a = t.lanes = 536870912, ir(l, t, u !== null ? u.baseLanes | e : e, e, a);
      } else u !== null ? (iu(t, u.cachePool), co(t, u), he(), t.memoizedState = null) : (l !== null && iu(t, null), cc(), he());
      return Gl(l, t, n, e), t.child;
    }
    function gn(l, t) {
      return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function ir(l, t, e, a, n) {
      var u = tc();
      return u = u === null ? null : {
        parent: xl._currentValue,
        pool: u
      }, t.memoizedState = {
        baseLanes: e,
        cachePool: u
      }, l !== null && iu(t, null), cc(), fo(t), l !== null && ba(l, t, a, true), t.childLanes = n, null;
    }
    function zu(l, t) {
      return t = Au({
        mode: t.mode,
        children: t.children
      }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
    }
    function cr(l, t, e) {
      return Je(t, l.child, null, e), l = zu(t, t.pendingProps), l.flags |= 2, ft(t), t.memoizedState = null, l;
    }
    function eh(l, t, e) {
      var a = t.pendingProps, n = (t.flags & 128) !== 0;
      if (t.flags &= -129, l === null) {
        if ($) {
          if (a.mode === "hidden") return l = zu(t, a), t.lanes = 536870912, gn(null, l);
          if (sc(t), (l = dl) ? (l = pd(l, bt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: ie !== null ? {
              id: Nt,
              overflow: Dt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Vs(l), e.return = t, t.child = e, Rl = t, dl = null)) : l = null, l === null) throw fe(t);
          return t.lanes = 536870912, null;
        }
        return zu(t, a);
      }
      var u = l.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (sc(t), n) if (t.flags & 256) t.flags &= -257, t = cr(l, t, e);
        else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
        else throw Error(s(558));
        else if (Tl || ba(l, t, e, false), n = (e & l.childLanes) !== 0, Tl || n) {
          if (a = ol, a !== null && (i = $f(a, e), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Ye(l, i), tt(a, l, i), Dc;
          ju(), t = cr(l, t, e);
        } else l = u.treeContext, dl = St(i.nextSibling), Rl = t, $ = true, ce = null, bt = false, l !== null && Ks(t, l), t = zu(t, a), t.flags |= 4096;
        return t;
      }
      return l = Gt(l.child, {
        mode: a.mode,
        children: a.children
      }), l.ref = t.ref, t.child = l, l.return = t, l;
    }
    function xu(l, t) {
      var e = t.ref;
      if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(s(284));
        (l === null || l.ref !== e) && (t.flags |= 4194816);
      }
    }
    function Uc(l, t, e, a, n) {
      return Ve(t), e = rc(l, t, e, a, void 0, n), a = dc(), l !== null && !Tl ? (mc(l, t, n), Zt(l, t, n)) : ($ && a && Ki(t), t.flags |= 1, Gl(l, t, e, n), t.child);
    }
    function fr(l, t, e, a, n, u) {
      return Ve(t), t.updateQueue = null, e = oo(t, a, e, n), so(l), a = dc(), l !== null && !Tl ? (mc(l, t, u), Zt(l, t, u)) : ($ && a && Ki(t), t.flags |= 1, Gl(l, t, e, u), t.child);
    }
    function sr(l, t, e, a, n) {
      if (Ve(t), t.stateNode === null) {
        var u = ha, i = e.contextType;
        typeof i == "object" && i !== null && (u = ql(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Oc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, ac(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? ql(i) : ha, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Mc(t, e, i, a), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Oc.enqueueReplaceState(u, u.state, null), on(t, a, u, n), sn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (l === null) {
        u = t.stateNode;
        var f = t.memoizedProps, d = We(e, f);
        u.props = d;
        var v = u.context, z = e.contextType;
        i = ha, typeof z == "object" && z !== null && (i = ql(z));
        var M = e.getDerivedStateFromProps;
        z = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || v !== i) && Wo(t, u, a, i), oe = false;
        var b = t.memoizedState;
        u.state = b, on(t, a, u, n), sn(), v = t.memoizedState, f || b !== v || oe ? (typeof M == "function" && (Mc(t, e, M, a), v = t.memoizedState), (d = oe || ko(t, e, d, a, b, v, i)) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = v), u.props = a, u.state = v, u.context = i, a = d) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        u = t.stateNode, nc(l, t), i = t.memoizedProps, z = We(e, i), u.props = z, M = t.pendingProps, b = u.context, v = e.contextType, d = ha, typeof v == "object" && v !== null && (d = ql(v)), f = e.getDerivedStateFromProps, (v = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== M || b !== d) && Wo(t, u, a, d), oe = false, b = t.memoizedState, u.state = b, on(t, a, u, n), sn();
        var S = t.memoizedState;
        i !== M || b !== S || oe || l !== null && l.dependencies !== null && nu(l.dependencies) ? (typeof f == "function" && (Mc(t, e, f, a), S = t.memoizedState), (z = oe || ko(t, e, z, a, b, S, d) || l !== null && l.dependencies !== null && nu(l.dependencies)) ? (v || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, S, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, S, d)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), u.props = a, u.state = S, u.context = d, a = z) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), a = false);
      }
      return u = a, xu(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = Je(t, l.child, null, n), t.child = Je(t, null, e, n)) : Gl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Zt(l, t, n), l;
    }
    function or(l, t, e, a) {
      return Xe(), t.flags |= 256, Gl(l, t, e, a), t.child;
    }
    var Cc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function jc(l) {
      return {
        baseLanes: l,
        cachePool: Is()
      };
    }
    function Bc(l, t, e) {
      return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ot), l;
    }
    function rr(l, t, e) {
      var a = t.pendingProps, n = false, u = (t.flags & 128) !== 0, i;
      if ((i = u) || (i = l !== null && l.memoizedState === null ? false : (_l.current & 2) !== 0), i && (n = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
        if ($) {
          if (n ? me(t) : he(), (l = dl) ? (l = pd(l, bt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: ie !== null ? {
              id: Nt,
              overflow: Dt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Vs(l), e.return = t, t.child = e, Rl = t, dl = null)) : l = null, l === null) throw fe(t);
          return vf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var f = a.children;
        return a = a.fallback, n ? (he(), n = t.mode, f = Au({
          mode: "hidden",
          children: f
        }, n), a = we(a, n, e, null), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = jc(e), a.childLanes = Bc(l, i, e), t.memoizedState = Cc, gn(null, a)) : (me(t), Hc(t, f));
      }
      var d = l.memoizedState;
      if (d !== null && (f = d.dehydrated, f !== null)) {
        if (u) t.flags & 256 ? (me(t), t.flags &= -257, t = Rc(l, t, e)) : t.memoizedState !== null ? (he(), t.child = l.child, t.flags |= 128, t = null) : (he(), f = a.fallback, n = t.mode, a = Au({
          mode: "visible",
          children: a.children
        }, n), f = we(f, n, e, null), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Je(t, l.child, null, e), a = t.child, a.memoizedState = jc(e), a.childLanes = Bc(l, i, e), t.memoizedState = Cc, t = gn(null, a));
        else if (me(t), vf(f)) {
          if (i = f.nextSibling && f.nextSibling.dataset, i) var v = i.dgst;
          i = v, a = Error(s(419)), a.stack = "", a.digest = i, en({
            value: a,
            source: null,
            stack: null
          }), t = Rc(l, t, e);
        } else if (Tl || ba(l, t, e, false), i = (e & l.childLanes) !== 0, Tl || i) {
          if (i = ol, i !== null && (a = $f(i, e), a !== 0 && a !== d.retryLane)) throw d.retryLane = a, Ye(l, a), tt(i, l, a), Dc;
          yf(f) || ju(), t = Rc(l, t, e);
        } else yf(f) ? (t.flags |= 192, t.child = l.child, t = null) : (l = d.treeContext, dl = St(f.nextSibling), Rl = t, $ = true, ce = null, bt = false, l !== null && Ks(t, l), t = Hc(t, a.children), t.flags |= 4096);
        return t;
      }
      return n ? (he(), f = a.fallback, n = t.mode, d = l.child, v = d.sibling, a = Gt(d, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = d.subtreeFlags & 65011712, v !== null ? f = Gt(v, f) : (f = we(f, n, e, null), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, gn(null, a), a = t.child, f = l.child.memoizedState, f === null ? f = jc(e) : (n = f.cachePool, n !== null ? (d = xl._currentValue, n = n.parent !== d ? {
        parent: d,
        pool: d
      } : n) : n = Is(), f = {
        baseLanes: f.baseLanes | e,
        cachePool: n
      }), a.memoizedState = f, a.childLanes = Bc(l, i, e), t.memoizedState = Cc, gn(l.child, a)) : (me(t), e = l.child, l = e.sibling, e = Gt(e, {
        mode: "visible",
        children: a.children
      }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [
        l
      ], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
    }
    function Hc(l, t) {
      return t = Au({
        mode: "visible",
        children: t
      }, l.mode), t.return = l, l.child = t;
    }
    function Au(l, t) {
      return l = it(22, l, null, t), l.lanes = 0, l;
    }
    function Rc(l, t, e) {
      return Je(t, l.child, null, e), l = Hc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
    }
    function dr(l, t, e) {
      l.lanes |= t;
      var a = l.alternate;
      a !== null && (a.lanes |= t), Fi(l.return, t, e);
    }
    function qc(l, t, e, a, n, u) {
      var i = l.memoizedState;
      i === null ? l.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: e,
        tailMode: n,
        treeForkCount: u
      } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
    }
    function mr(l, t, e) {
      var a = t.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = _l.current, f = (i & 2) !== 0;
      if (f ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, X(_l, i), Gl(l, t, a, e), a = $ ? tn : 0, !f && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && dr(l, e, t);
        else if (l.tag === 19) dr(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      switch (n) {
        case "forwards":
          for (e = t.child, n = null; e !== null; ) l = e.alternate, l !== null && du(l) === null && (n = e), e = e.sibling;
          e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), qc(t, false, n, e, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (e = null, n = t.child, t.child = null; n !== null; ) {
            if (l = n.alternate, l !== null && du(l) === null) {
              t.child = n;
              break;
            }
            l = n.sibling, n.sibling = e, e = n, n = l;
          }
          qc(t, true, e, null, u, a);
          break;
        case "together":
          qc(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Zt(l, t, e) {
      if (l !== null && (t.dependencies = l.dependencies), ve |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
        if (ba(l, t, e, false), (e & t.childLanes) === 0) return null;
      } else return null;
      if (l !== null && t.child !== l.child) throw Error(s(153));
      if (t.child !== null) {
        for (l = t.child, e = Gt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) l = l.sibling, e = e.sibling = Gt(l, l.pendingProps), e.return = t;
        e.sibling = null;
      }
      return t.child;
    }
    function Gc(l, t) {
      return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && nu(l)));
    }
    function ah(l, t, e) {
      switch (t.tag) {
        case 3:
          Ce(t, t.stateNode.containerInfo), se(t, xl, l.memoizedState.cache), Xe();
          break;
        case 27:
        case 5:
          le(t);
          break;
        case 4:
          Ce(t, t.stateNode.containerInfo);
          break;
        case 10:
          se(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, sc(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (me(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? rr(l, t, e) : (me(t), l = Zt(l, t, e), l !== null ? l.sibling : null);
          me(t);
          break;
        case 19:
          var n = (l.flags & 128) !== 0;
          if (a = (e & t.childLanes) !== 0, a || (ba(l, t, e, false), a = (e & t.childLanes) !== 0), n) {
            if (a) return mr(l, t, e);
            t.flags |= 128;
          }
          if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X(_l, _l.current), a) break;
          return null;
        case 22:
          return t.lanes = 0, ur(l, t, e, t.pendingProps);
        case 24:
          se(t, xl, l.memoizedState.cache);
      }
      return Zt(l, t, e);
    }
    function hr(l, t, e) {
      if (l !== null) if (l.memoizedProps !== t.pendingProps) Tl = true;
      else {
        if (!Gc(l, e) && (t.flags & 128) === 0) return Tl = false, ah(l, t, e);
        Tl = (l.flags & 131072) !== 0;
      }
      else Tl = false, $ && (t.flags & 1048576) !== 0 && Ls(t, tn, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          l: {
            var a = t.pendingProps;
            if (l = Le(t.elementType), t.type = l, typeof l == "function") Vi(l) ? (a = We(l, a), t.tag = 1, t = sr(null, t, l, a, e)) : (t.tag = 0, t = Uc(null, t, l, a, e));
            else {
              if (l != null) {
                var n = l.$$typeof;
                if (n === Vl) {
                  t.tag = 11, t = er(null, t, l, a, e);
                  break l;
                } else if (n === Zl) {
                  t.tag = 14, t = ar(null, t, l, a, e);
                  break l;
                }
              }
              throw t = Bt(l) || l, Error(s(306, t, ""));
            }
          }
          return t;
        case 0:
          return Uc(l, t, t.type, t.pendingProps, e);
        case 1:
          return a = t.type, n = We(a, t.pendingProps), sr(l, t, a, n, e);
        case 3:
          l: {
            if (Ce(t, t.stateNode.containerInfo), l === null) throw Error(s(387));
            a = t.pendingProps;
            var u = t.memoizedState;
            n = u.element, nc(l, t), on(t, a, null, e);
            var i = t.memoizedState;
            if (a = i.cache, se(t, xl, a), a !== u.cache && Ii(t, [
              xl
            ], e, true), sn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = or(l, t, a, e);
              break l;
            } else if (a !== n) {
              n = gt(Error(s(424)), t), en(n), t = or(l, t, a, e);
              break l;
            } else for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, dl = St(l.firstChild), Rl = t, $ = true, ce = null, bt = true, e = no(t, null, a, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (Xe(), a === n) {
                t = Zt(l, t, e);
                break l;
              }
              Gl(l, t, a, e);
            }
            t = t.child;
          }
          return t;
        case 26:
          return xu(l, t), l === null ? (e = Td(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : $ || (e = t.type, l = t.pendingProps, a = wu(xt.current).createElement(e), a[Hl] = t, a[Wl] = l, Yl(a, e, l), Cl(a), t.stateNode = a) : t.memoizedState = Td(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
          return le(t), l === null && $ && (a = t.stateNode = zd(t.type, t.pendingProps, xt.current), Rl = t, bt = true, n = dl, ze(t.type) ? (bf = n, dl = St(a.firstChild)) : dl = n), Gl(l, t, t.pendingProps.children, e), xu(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
          return l === null && $ && ((n = a = dl) && (a = jh(a, t.type, t.pendingProps, bt), a !== null ? (t.stateNode = a, Rl = t, dl = St(a.firstChild), bt = false, n = true) : n = false), n || fe(t)), le(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, mf(n, u) ? a = null : i !== null && mf(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = rc(l, t, k0, null, null, e), Dn._currentValue = n), xu(l, t), Gl(l, t, a, e), t.child;
        case 6:
          return l === null && $ && ((l = e = dl) && (e = Bh(e, t.pendingProps, bt), e !== null ? (t.stateNode = e, Rl = t, dl = null, l = true) : l = false), l || fe(t)), null;
        case 13:
          return rr(l, t, e);
        case 4:
          return Ce(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Je(t, null, a, e) : Gl(l, t, a, e), t.child;
        case 11:
          return er(l, t, t.type, t.pendingProps, e);
        case 7:
          return Gl(l, t, t.pendingProps, e), t.child;
        case 8:
          return Gl(l, t, t.pendingProps.children, e), t.child;
        case 12:
          return Gl(l, t, t.pendingProps.children, e), t.child;
        case 10:
          return a = t.pendingProps, se(t, t.type, a.value), Gl(l, t, a.children, e), t.child;
        case 9:
          return n = t.type._context, a = t.pendingProps.children, Ve(t), n = ql(n), a = a(n), t.flags |= 1, Gl(l, t, a, e), t.child;
        case 14:
          return ar(l, t, t.type, t.pendingProps, e);
        case 15:
          return nr(l, t, t.type, t.pendingProps, e);
        case 19:
          return mr(l, t, e);
        case 31:
          return eh(l, t, e);
        case 22:
          return ur(l, t, e, t.pendingProps);
        case 24:
          return Ve(t), a = ql(xl), l === null ? (n = tc(), n === null && (n = ol, u = Pi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = {
            parent: a,
            cache: n
          }, ac(t), se(t, xl, n)) : ((l.lanes & e) !== 0 && (nc(l, t), on(t, null, null, e), sn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), se(t, xl, a)) : (a = u.cache, se(t, xl, a), a !== n.cache && Ii(t, [
            xl
          ], e, true))), Gl(l, t, t.pendingProps.children, e), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(s(156, t.tag));
    }
    function Lt(l) {
      l.flags |= 4;
    }
    function Yc(l, t, e, a, n) {
      if ((t = (l.mode & 32) !== 0) && (t = false), t) {
        if (l.flags |= 16777216, (n & 335544128) === n) if (l.stateNode.complete) l.flags |= 8192;
        else if (Xr()) l.flags |= 8192;
        else throw Ke = fu, ec;
      } else l.flags &= -16777217;
    }
    function gr(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (l.flags |= 16777216, !Dd(t)) if (Xr()) l.flags |= 8192;
      else throw Ke = fu, ec;
    }
    function Tu(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Jf() : 536870912, l.lanes |= t, Da |= t);
    }
    function yn(l, t) {
      if (!$) switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; ) t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
    }
    function ml(l) {
      var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
      if (t) for (var n = l.child; n !== null; ) e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
      else for (n = l.child; n !== null; ) e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
      return l.subtreeFlags |= a, l.childLanes = e, t;
    }
    function nh(l, t, e) {
      var a = t.pendingProps;
      switch (Ji(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ml(t), null;
        case 1:
          return ml(t), null;
        case 3:
          return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Xt(xl), At(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (va(t) ? Lt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wi())), ml(t), null;
        case 26:
          var n = t.type, u = t.memoizedState;
          return l === null ? (Lt(t), u !== null ? (ml(t), gr(t, u)) : (ml(t), Yc(t, n, null, a, e))) : u ? u !== l.memoizedState ? (Lt(t), ml(t), gr(t, u)) : (ml(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Lt(t), ml(t), Yc(t, n, l, a, e)), null;
        case 27:
          if (te(t), e = xt.current, n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Lt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(s(166));
              return ml(t), null;
            }
            l = F.current, va(t) ? Js(t) : (l = zd(n, a, e), t.stateNode = l, Lt(t));
          }
          return ml(t), null;
        case 5:
          if (te(t), n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Lt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(s(166));
              return ml(t), null;
            }
            if (u = F.current, va(t)) Js(t);
            else {
              var i = wu(xt.current);
              switch (u) {
                case 1:
                  u = i.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case 2:
                  u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                  break;
                default:
                  switch (n) {
                    case "svg":
                      u = i.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case "math":
                      u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                      break;
                    case "script":
                      u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                      break;
                    case "select":
                      u = typeof a.is == "string" ? i.createElement("select", {
                        is: a.is
                      }) : i.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                      break;
                    default:
                      u = typeof a.is == "string" ? i.createElement(n, {
                        is: a.is
                      }) : i.createElement(n);
                  }
              }
              u[Hl] = t, u[Wl] = a;
              l: for (i = t.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  i.child.return = i, i = i.child;
                  continue;
                }
                if (i === t) break l;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === t) break l;
                  i = i.return;
                }
                i.sibling.return = i.return, i = i.sibling;
              }
              t.stateNode = u;
              l: switch (Yl(u, n, a), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break l;
                case "img":
                  a = true;
                  break l;
                default:
                  a = false;
              }
              a && Lt(t);
            }
          }
          return ml(t), Yc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== a && Lt(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
            if (l = xt.current, va(t)) {
              if (l = t.stateNode, e = t.memoizedProps, a = null, n = Rl, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              l[Hl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === true || rd(l.nodeValue, e)), l || fe(t, true);
            } else l = wu(l).createTextNode(a), l[Hl] = t, t.stateNode = l;
          }
          return ml(t), null;
        case 31:
          if (e = t.memoizedState, l === null || l.memoizedState !== null) {
            if (a = va(t), e !== null) {
              if (l === null) {
                if (!a) throw Error(s(318));
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(557));
                l[Hl] = t;
              } else Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              ml(t), l = false;
            } else e = Wi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = true;
            if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
            if ((t.flags & 128) !== 0) throw Error(s(558));
          }
          return ml(t), null;
        case 13:
          if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
            if (n = va(t), a !== null && a.dehydrated !== null) {
              if (l === null) {
                if (!n) throw Error(s(318));
                if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
                n[Hl] = t;
              } else Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              ml(t), n = false;
            } else n = Wi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = true;
            if (!n) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          }
          return ft(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), Tu(t, t.updateQueue), ml(t), null);
        case 4:
          return At(), l === null && ff(t.stateNode.containerInfo), ml(t), null;
        case 10:
          return Xt(t.type), ml(t), null;
        case 19:
          if (sl(_l), a = t.memoizedState, a === null) return ml(t), null;
          if (n = (t.flags & 128) !== 0, u = a.rendering, u === null) if (n) yn(a, false);
          else {
            if (bl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
              if (u = du(l), u !== null) {
                for (t.flags |= 128, yn(a, false), l = u.updateQueue, t.updateQueue = l, Tu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) Qs(e, l), e = e.sibling;
                return X(_l, _l.current & 1 | 2), $ && Yt(t, a.treeForkCount), t.child;
              }
              l = l.sibling;
            }
            a.tail !== null && et() > Du && (t.flags |= 128, n = true, yn(a, false), t.lanes = 4194304);
          }
          else {
            if (!n) if (l = du(u), l !== null) {
              if (t.flags |= 128, n = true, l = l.updateQueue, t.updateQueue = l, Tu(t, l), yn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !$) return ml(t), null;
            } else 2 * et() - a.renderingStartTime > Du && e !== 536870912 && (t.flags |= 128, n = true, yn(a, false), t.lanes = 4194304);
            a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
          }
          return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = et(), l.sibling = null, e = _l.current, X(_l, n ? e & 1 | 2 : e & 1), $ && Yt(t, a.treeForkCount), l) : (ml(t), null);
        case 22:
        case 23:
          return ft(t), fc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), e = t.updateQueue, e !== null && Tu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && sl(Ze), null;
        case 24:
          return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Xt(xl), ml(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(s(156, t.tag));
    }
    function uh(l, t) {
      switch (Ji(t), t.tag) {
        case 1:
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
          return Xt(xl), At(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return te(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (ft(t), t.alternate === null) throw Error(s(340));
            Xe();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 13:
          if (ft(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
            if (t.alternate === null) throw Error(s(340));
            Xe();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
          return sl(_l), null;
        case 4:
          return At(), null;
        case 10:
          return Xt(t.type), null;
        case 22:
        case 23:
          return ft(t), fc(), l !== null && sl(Ze), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
          return Xt(xl), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function yr(l, t) {
      switch (Ji(t), t.tag) {
        case 3:
          Xt(xl), At();
          break;
        case 26:
        case 27:
        case 5:
          te(t);
          break;
        case 4:
          At();
          break;
        case 31:
          t.memoizedState !== null && ft(t);
          break;
        case 13:
          ft(t);
          break;
        case 19:
          sl(_l);
          break;
        case 10:
          Xt(t.type);
          break;
        case 22:
        case 23:
          ft(t), fc(), l !== null && sl(Ze);
          break;
        case 24:
          Xt(xl);
      }
    }
    function vn(l, t) {
      try {
        var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
        if (a !== null) {
          var n = a.next;
          e = n;
          do {
            if ((e.tag & l) === l) {
              a = void 0;
              var u = e.create, i = e.inst;
              a = u(), i.destroy = a;
            }
            e = e.next;
          } while (e !== n);
        }
      } catch (f) {
        el(t, t.return, f);
      }
    }
    function ge(l, t, e) {
      try {
        var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & l) === l) {
              var i = a.inst, f = i.destroy;
              if (f !== void 0) {
                i.destroy = void 0, n = t;
                var d = e, v = f;
                try {
                  v();
                } catch (z) {
                  el(n, d, z);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (z) {
        el(t, t.return, z);
      }
    }
    function vr(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var e = l.stateNode;
        try {
          io(t, e);
        } catch (a) {
          el(l, l.return, a);
        }
      }
    }
    function br(l, t, e) {
      e.props = We(l.type, l.memoizedProps), e.state = l.memoizedState;
      try {
        e.componentWillUnmount();
      } catch (a) {
        el(l, t, a);
      }
    }
    function bn(l, t) {
      try {
        var e = l.ref;
        if (e !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var a = l.stateNode;
              break;
            case 30:
              a = l.stateNode;
              break;
            default:
              a = l.stateNode;
          }
          typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
        }
      } catch (n) {
        el(l, t, n);
      }
    }
    function Ut(l, t) {
      var e = l.ref, a = l.refCleanup;
      if (e !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        el(l, t, n);
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
      }
      else if (typeof e == "function") try {
        e(null);
      } catch (n) {
        el(l, t, n);
      }
      else e.current = null;
    }
    function pr(l) {
      var t = l.type, e = l.memoizedProps, a = l.stateNode;
      try {
        l: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            e.autoFocus && a.focus();
            break l;
          case "img":
            e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
        }
      } catch (n) {
        el(l, l.return, n);
      }
    }
    function wc(l, t, e) {
      try {
        var a = l.stateNode;
        Mh(a, l.type, e, t), a[Wl] = t;
      } catch (n) {
        el(l, l.return, n);
      }
    }
    function Sr(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ze(l.type) || l.tag === 4;
    }
    function Xc(l) {
      l: for (; ; ) {
        for (; l.sibling === null; ) {
          if (l.return === null || Sr(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if (l.tag === 27 && ze(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          l.child.return = l, l = l.child;
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function Qc(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Rt));
      else if (a !== 4 && (a === 27 && ze(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (Qc(l, t, e), l = l.sibling; l !== null; ) Qc(l, t, e), l = l.sibling;
    }
    function Eu(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
      else if (a !== 4 && (a === 27 && ze(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (Eu(l, t, e), l = l.sibling; l !== null; ) Eu(l, t, e), l = l.sibling;
    }
    function _r(l) {
      var t = l.stateNode, e = l.memoizedProps;
      try {
        for (var a = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
        Yl(t, a, e), t[Hl] = l, t[Wl] = e;
      } catch (u) {
        el(l, l.return, u);
      }
    }
    var Kt = false, El = false, Vc = false, zr = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
    function ih(l, t) {
      if (l = l.containerInfo, rf = Ju, l = js(l), Ri(l)) {
        if ("selectionStart" in l) var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
        else l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, f = -1, d = -1, v = 0, z = 0, M = l, b = null;
            t: for (; ; ) {
              for (var S; M !== e || n !== 0 && M.nodeType !== 3 || (f = i + n), M !== u || a !== 0 && M.nodeType !== 3 || (d = i + a), M.nodeType === 3 && (i += M.nodeValue.length), (S = M.firstChild) !== null; ) b = M, M = S;
              for (; ; ) {
                if (M === l) break t;
                if (b === e && ++v === n && (f = i), b === u && ++z === a && (d = i), (S = M.nextSibling) !== null) break;
                M = b, b = M.parentNode;
              }
              M = S;
            }
            e = f === -1 || d === -1 ? null : {
              start: f,
              end: d
            };
          } else e = null;
        }
        e = e || {
          start: 0,
          end: 0
        };
      } else e = null;
      for (df = {
        focusedElem: l,
        selectionRange: e
      }, Ju = false, jl = t; jl !== null; ) if (t = jl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, jl = l;
      else for (; jl !== null; ) {
        switch (t = jl, u = t.alternate, l = t.flags, t.tag) {
          case 0:
            if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (e = 0; e < l.length; e++) n = l[e], n.ref.impl = n.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((l & 1024) !== 0 && u !== null) {
              l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
              try {
                var j = We(e.type, n);
                l = a.getSnapshotBeforeUpdate(j, u), a.__reactInternalSnapshotBeforeUpdate = l;
              } catch (w) {
                el(e, e.return, w);
              }
            }
            break;
          case 3:
            if ((l & 1024) !== 0) {
              if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) gf(l);
              else if (e === 1) switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  gf(l);
                  break;
                default:
                  l.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((l & 1024) !== 0) throw Error(s(163));
        }
        if (l = t.sibling, l !== null) {
          l.return = t.return, jl = l;
          break;
        }
        jl = t.return;
      }
    }
    function xr(l, t, e) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          kt(l, e), a & 4 && vn(5, e);
          break;
        case 1:
          if (kt(l, e), a & 4) if (l = e.stateNode, t === null) try {
            l.componentDidMount();
          } catch (i) {
            el(e, e.return, i);
          }
          else {
            var n = We(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              el(e, e.return, i);
            }
          }
          a & 64 && vr(e), a & 512 && bn(e, e.return);
          break;
        case 3:
          if (kt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
            if (t = null, e.child !== null) switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
            try {
              io(l, t);
            } catch (i) {
              el(e, e.return, i);
            }
          }
          break;
        case 27:
          t === null && a & 4 && _r(e);
        case 26:
        case 5:
          kt(l, e), t === null && a & 4 && pr(e), a & 512 && bn(e, e.return);
          break;
        case 12:
          kt(l, e);
          break;
        case 31:
          kt(l, e), a & 4 && Er(l, e);
          break;
        case 13:
          kt(l, e), a & 4 && Mr(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = gh.bind(null, e), Hh(l, e))));
          break;
        case 22:
          if (a = e.memoizedState !== null || Kt, !a) {
            t = t !== null && t.memoizedState !== null || El, n = Kt;
            var u = El;
            Kt = a, (El = t) && !u ? Wt(l, e, (e.subtreeFlags & 8772) !== 0) : kt(l, e), Kt = n, El = u;
          }
          break;
        case 30:
          break;
        default:
          kt(l, e);
      }
    }
    function Ar(l) {
      var t = l.alternate;
      t !== null && (l.alternate = null, Ar(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && pi(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
    }
    var gl = null, Fl = false;
    function Jt(l, t, e) {
      for (e = e.child; e !== null; ) Tr(l, t, e), e = e.sibling;
    }
    function Tr(l, t, e) {
      if (at && typeof at.onCommitFiberUnmount == "function") try {
        at.onCommitFiberUnmount(Xa, e);
      } catch {
      }
      switch (e.tag) {
        case 26:
          El || Ut(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          El || Ut(e, t);
          var a = gl, n = Fl;
          ze(e.type) && (gl = e.stateNode, Fl = false), Jt(l, t, e), Mn(e.stateNode), gl = a, Fl = n;
          break;
        case 5:
          El || Ut(e, t);
        case 6:
          if (a = gl, n = Fl, gl = null, Jt(l, t, e), gl = a, Fl = n, gl !== null) if (Fl) try {
            (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(e.stateNode);
          } catch (u) {
            el(e, t, u);
          }
          else try {
            gl.removeChild(e.stateNode);
          } catch (u) {
            el(e, t, u);
          }
          break;
        case 18:
          gl !== null && (Fl ? (l = gl, vd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Ga(l)) : vd(gl, e.stateNode));
          break;
        case 4:
          a = gl, n = Fl, gl = e.stateNode.containerInfo, Fl = true, Jt(l, t, e), gl = a, Fl = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ge(2, e, t), El || ge(4, e, t), Jt(l, t, e);
          break;
        case 1:
          El || (Ut(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && br(e, t, a)), Jt(l, t, e);
          break;
        case 21:
          Jt(l, t, e);
          break;
        case 22:
          El = (a = El) || e.memoizedState !== null, Jt(l, t, e), El = a;
          break;
        default:
          Jt(l, t, e);
      }
    }
    function Er(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
        l = l.dehydrated;
        try {
          Ga(l);
        } catch (e) {
          el(t, t.return, e);
        }
      }
    }
    function Mr(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
        Ga(l);
      } catch (e) {
        el(t, t.return, e);
      }
    }
    function ch(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new zr()), t;
        case 22:
          return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new zr()), t;
        default:
          throw Error(s(435, l.tag));
      }
    }
    function Mu(l, t) {
      var e = ch(l);
      t.forEach(function(a) {
        if (!e.has(a)) {
          e.add(a);
          var n = yh.bind(null, l, a);
          a.then(n, n);
        }
      });
    }
    function Il(l, t) {
      var e = t.deletions;
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var n = e[a], u = l, i = t, f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ze(f.type)) {
                gl = f.stateNode, Fl = false;
                break l;
              }
              break;
            case 5:
              gl = f.stateNode, Fl = false;
              break l;
            case 3:
            case 4:
              gl = f.stateNode.containerInfo, Fl = true;
              break l;
          }
          f = f.return;
        }
        if (gl === null) throw Error(s(160));
        Tr(u, i, n), gl = null, Fl = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Or(t, l), t = t.sibling;
    }
    var Et = null;
    function Or(l, t) {
      var e = l.alternate, a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Il(t, l), Pl(l), a & 4 && (ge(3, l, l.return), vn(3, l), ge(5, l, l.return));
          break;
        case 1:
          Il(t, l), Pl(l), a & 512 && (El || e === null || Ut(e, e.return)), a & 64 && Kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
          break;
        case 26:
          var n = Et;
          if (Il(t, l), Pl(l), a & 512 && (El || e === null || Ut(e, e.return)), a & 4) {
            var u = e !== null ? e.memoizedState : null;
            if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
              l: {
                a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                t: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Za] || u[Hl] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Yl(u, a, e), u[Hl] = l, Cl(u), a = u;
                    break l;
                  case "link":
                    var i = Od("link", "href", n).get(a + (e.href || ""));
                    if (i) {
                      for (var f = 0; f < i.length; f++) if (u = i[f], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                        i.splice(f, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), Yl(u, a, e), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Od("meta", "content", n).get(a + (e.content || ""))) {
                      for (f = 0; f < i.length; f++) if (u = i[f], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                        i.splice(f, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), Yl(u, a, e), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(s(468, a));
                }
                u[Hl] = l, Cl(u), a = u;
              }
              l.stateNode = a;
            } else Nd(n, l.type, l.stateNode);
            else l.stateNode = Md(n, a, l.memoizedProps);
            else u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? Nd(n, l.type, l.stateNode) : Md(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && wc(l, l.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          Il(t, l), Pl(l), a & 512 && (El || e === null || Ut(e, e.return)), e !== null && a & 4 && wc(l, l.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if (Il(t, l), Pl(l), a & 512 && (El || e === null || Ut(e, e.return)), l.flags & 32) {
            n = l.stateNode;
            try {
              ca(n, "");
            } catch (j) {
              el(l, l.return, j);
            }
          }
          a & 4 && l.stateNode != null && (n = l.memoizedProps, wc(l, n, e !== null ? e.memoizedProps : n)), a & 1024 && (Vc = true);
          break;
        case 6:
          if (Il(t, l), Pl(l), a & 4) {
            if (l.stateNode === null) throw Error(s(162));
            a = l.memoizedProps, e = l.stateNode;
            try {
              e.nodeValue = a;
            } catch (j) {
              el(l, l.return, j);
            }
          }
          break;
        case 3:
          if (Vu = null, n = Et, Et = Xu(t.containerInfo), Il(t, l), Et = n, Pl(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
            Ga(t.containerInfo);
          } catch (j) {
            el(l, l.return, j);
          }
          Vc && (Vc = false, Nr(l));
          break;
        case 4:
          a = Et, Et = Xu(l.stateNode.containerInfo), Il(t, l), Pl(l), Et = a;
          break;
        case 12:
          Il(t, l), Pl(l);
          break;
        case 31:
          Il(t, l), Pl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Mu(l, a)));
          break;
        case 13:
          Il(t, l), Pl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Nu = et()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Mu(l, a)));
          break;
        case 22:
          n = l.memoizedState !== null;
          var d = e !== null && e.memoizedState !== null, v = Kt, z = El;
          if (Kt = v || n, El = z || d, Il(t, l), El = z, Kt = v, Pl(l), a & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || d || Kt || El || $e(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                d = e = t;
                try {
                  if (u = d.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = d.stateNode;
                    var M = d.memoizedProps.style, b = M != null && M.hasOwnProperty("display") ? M.display : null;
                    f.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                  }
                } catch (j) {
                  el(d, d.return, j);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                d = t;
                try {
                  d.stateNode.nodeValue = n ? "" : d.memoizedProps;
                } catch (j) {
                  el(d, d.return, j);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                d = t;
                try {
                  var S = d.stateNode;
                  n ? bd(S, true) : bd(d.stateNode, false);
                } catch (j) {
                  el(d, d.return, j);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
          a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Mu(l, e))));
          break;
        case 19:
          Il(t, l), Pl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Mu(l, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Il(t, l), Pl(l);
      }
    }
    function Pl(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var e, a = l.return; a !== null; ) {
            if (Sr(a)) {
              e = a;
              break;
            }
            a = a.return;
          }
          if (e == null) throw Error(s(160));
          switch (e.tag) {
            case 27:
              var n = e.stateNode, u = Xc(l);
              Eu(l, u, n);
              break;
            case 5:
              var i = e.stateNode;
              e.flags & 32 && (ca(i, ""), e.flags &= -33);
              var f = Xc(l);
              Eu(l, f, i);
              break;
            case 3:
            case 4:
              var d = e.stateNode.containerInfo, v = Xc(l);
              Qc(l, v, d);
              break;
            default:
              throw Error(s(161));
          }
        } catch (z) {
          el(l, l.return, z);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function Nr(l) {
      if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
        var t = l;
        Nr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
    }
    function kt(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) xr(l, t.alternate, t), t = t.sibling;
    }
    function $e(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ge(4, t, t.return), $e(t);
            break;
          case 1:
            Ut(t, t.return);
            var e = t.stateNode;
            typeof e.componentWillUnmount == "function" && br(t, t.return, e), $e(t);
            break;
          case 27:
            Mn(t.stateNode);
          case 26:
          case 5:
            Ut(t, t.return), $e(t);
            break;
          case 22:
            t.memoizedState === null && $e(t);
            break;
          case 30:
            $e(t);
            break;
          default:
            $e(t);
        }
        l = l.sibling;
      }
    }
    function Wt(l, t, e) {
      for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate, n = l, u = t, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            Wt(n, u, e), vn(4, u);
            break;
          case 1:
            if (Wt(n, u, e), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (v) {
              el(a, a.return, v);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var f = a.stateNode;
              try {
                var d = n.shared.hiddenCallbacks;
                if (d !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++) uo(d[n], f);
              } catch (v) {
                el(a, a.return, v);
              }
            }
            e && i & 64 && vr(u), bn(u, u.return);
            break;
          case 27:
            _r(u);
          case 26:
          case 5:
            Wt(n, u, e), e && a === null && i & 4 && pr(u), bn(u, u.return);
            break;
          case 12:
            Wt(n, u, e);
            break;
          case 31:
            Wt(n, u, e), e && i & 4 && Er(n, u);
            break;
          case 13:
            Wt(n, u, e), e && i & 4 && Mr(n, u);
            break;
          case 22:
            u.memoizedState === null && Wt(n, u, e), bn(u, u.return);
            break;
          case 30:
            break;
          default:
            Wt(n, u, e);
        }
        t = t.sibling;
      }
    }
    function Zc(l, t) {
      var e = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && an(e));
    }
    function Lc(l, t) {
      l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && an(l));
    }
    function Mt(l, t, e, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Dr(l, t, e, a), t = t.sibling;
    }
    function Dr(l, t, e, a) {
      var n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Mt(l, t, e, a), n & 2048 && vn(9, t);
          break;
        case 1:
          Mt(l, t, e, a);
          break;
        case 3:
          Mt(l, t, e, a), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && an(l)));
          break;
        case 12:
          if (n & 2048) {
            Mt(l, t, e, a), l = t.stateNode;
            try {
              var u = t.memoizedProps, i = u.id, f = u.onPostCommit;
              typeof f == "function" && f(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (d) {
              el(t, t.return, d);
            }
          } else Mt(l, t, e, a);
          break;
        case 31:
          Mt(l, t, e, a);
          break;
        case 13:
          Mt(l, t, e, a);
          break;
        case 23:
          break;
        case 22:
          u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Mt(l, t, e, a) : pn(l, t) : u._visibility & 2 ? Mt(l, t, e, a) : (u._visibility |= 2, Ma(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Zc(i, t);
          break;
        case 24:
          Mt(l, t, e, a), n & 2048 && Lc(t.alternate, t);
          break;
        default:
          Mt(l, t, e, a);
      }
    }
    function Ma(l, t, e, a, n) {
      for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var u = l, i = t, f = e, d = a, v = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ma(u, i, f, d, n), vn(8, i);
            break;
          case 23:
            break;
          case 22:
            var z = i.stateNode;
            i.memoizedState !== null ? z._visibility & 2 ? Ma(u, i, f, d, n) : pn(u, i) : (z._visibility |= 2, Ma(u, i, f, d, n)), n && v & 2048 && Zc(i.alternate, i);
            break;
          case 24:
            Ma(u, i, f, d, n), n && v & 2048 && Lc(i.alternate, i);
            break;
          default:
            Ma(u, i, f, d, n);
        }
        t = t.sibling;
      }
    }
    function pn(l, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var e = l, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            pn(e, a), n & 2048 && Zc(a.alternate, a);
            break;
          case 24:
            pn(e, a), n & 2048 && Lc(a.alternate, a);
            break;
          default:
            pn(e, a);
        }
        t = t.sibling;
      }
    }
    var Sn = 8192;
    function Oa(l, t, e) {
      if (l.subtreeFlags & Sn) for (l = l.child; l !== null; ) Ur(l, t, e), l = l.sibling;
    }
    function Ur(l, t, e) {
      switch (l.tag) {
        case 26:
          Oa(l, t, e), l.flags & Sn && l.memoizedState !== null && Jh(e, Et, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          Oa(l, t, e);
          break;
        case 3:
        case 4:
          var a = Et;
          Et = Xu(l.stateNode.containerInfo), Oa(l, t, e), Et = a;
          break;
        case 22:
          l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = Sn, Sn = 16777216, Oa(l, t, e), Sn = a) : Oa(l, t, e));
          break;
        default:
          Oa(l, t, e);
      }
    }
    function Cr(l) {
      var t = l.alternate;
      if (t !== null && (l = t.child, l !== null)) {
        t.child = null;
        do
          t = l.sibling, l.sibling = null, l = t;
        while (l !== null);
      }
    }
    function _n(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var e = 0; e < t.length; e++) {
          var a = t[e];
          jl = a, Br(a, l);
        }
        Cr(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) jr(l), l = l.sibling;
    }
    function jr(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _n(l), l.flags & 2048 && ge(9, l, l.return);
          break;
        case 3:
          _n(l);
          break;
        case 12:
          _n(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Ou(l)) : _n(l);
          break;
        default:
          _n(l);
      }
    }
    function Ou(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var e = 0; e < t.length; e++) {
          var a = t[e];
          jl = a, Br(a, l);
        }
        Cr(l);
      }
      for (l = l.child; l !== null; ) {
        switch (t = l, t.tag) {
          case 0:
          case 11:
          case 15:
            ge(8, t, t.return), Ou(t);
            break;
          case 22:
            e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Ou(t));
            break;
          default:
            Ou(t);
        }
        l = l.sibling;
      }
    }
    function Br(l, t) {
      for (; jl !== null; ) {
        var e = jl;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            ge(8, e, t);
            break;
          case 23:
          case 22:
            if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
              var a = e.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            an(e.memoizedState.cache);
        }
        if (a = e.child, a !== null) a.return = e, jl = a;
        else l: for (e = l; jl !== null; ) {
          a = jl;
          var n = a.sibling, u = a.return;
          if (Ar(a), a === e) {
            jl = null;
            break l;
          }
          if (n !== null) {
            n.return = u, jl = n;
            break l;
          }
          jl = u;
        }
      }
    }
    var fh = {
      getCacheForType: function(l) {
        var t = ql(xl), e = t.data.get(l);
        return e === void 0 && (e = l(), t.data.set(l, e)), e;
      },
      cacheSignal: function() {
        return ql(xl).controller.signal;
      }
    }, sh = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, ol = null, K = null, k = 0, tl = 0, st = null, ye = false, Na = false, Kc = false, $t = 0, bl = 0, ve = 0, Fe = 0, Jc = 0, ot = 0, Da = 0, zn = null, lt = null, kc = false, Nu = 0, Hr = 0, Du = 1 / 0, Uu = null, be = null, Ml = 0, pe = null, Ua = null, Ft = 0, Wc = 0, $c = null, Rr = null, xn = 0, Fc = null;
    function rt() {
      return (ll & 2) !== 0 && k !== 0 ? k & -k : x.T !== null ? af() : Ff();
    }
    function qr() {
      if (ot === 0) if ((k & 536870912) === 0 || $) {
        var l = Yn;
        Yn <<= 1, (Yn & 3932160) === 0 && (Yn = 262144), ot = l;
      } else ot = 536870912;
      return l = ct.current, l !== null && (l.flags |= 32), ot;
    }
    function tt(l, t, e) {
      (l === ol && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (Ca(l, 0), Se(l, k, ot, false)), Va(l, e), ((ll & 2) === 0 || l !== ol) && (l === ol && ((ll & 2) === 0 && (Fe |= e), bl === 4 && Se(l, k, ot, false)), Ct(l));
    }
    function Gr(l, t, e) {
      if ((ll & 6) !== 0) throw Error(s(327));
      var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Qa(l, t), n = a ? dh(l, t) : Pc(l, t, true), u = a;
      do {
        if (n === 0) {
          Na && !a && Se(l, t, 0, false);
          break;
        } else {
          if (e = l.current.alternate, u && !oh(e)) {
            n = Pc(l, t, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = t, l.errorRecoveryDisabledLanes & u) var i = 0;
            else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              t = i;
              l: {
                var f = l;
                n = zn;
                var d = f.current.memoizedState.isDehydrated;
                if (d && (Ca(f, i).flags |= 256), i = Pc(f, i, false), i !== 2) {
                  if (Kc && !d) {
                    f.errorRecoveryDisabledLanes |= u, Fe |= u, n = 4;
                    break l;
                  }
                  u = lt, lt = n, u !== null && (lt === null ? lt = u : lt.push.apply(lt, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ca(l, 0), Se(l, t, 0, true);
            break;
          }
          l: {
            switch (a = l, u = n, u) {
              case 0:
              case 1:
                throw Error(s(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Se(a, t, ot, !ye);
                break l;
              case 2:
                lt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(s(329));
            }
            if ((t & 62914560) === t && (n = Nu + 300 - et(), 10 < n)) {
              if (Se(a, t, ot, !ye), Xn(a, 0, true) !== 0) break l;
              Ft = t, a.timeoutHandle = gd(Yr.bind(null, a, e, lt, Uu, kc, t, ot, Fe, Da, ye, u, "Throttled", -0, 0), n);
              break l;
            }
            Yr(a, e, lt, Uu, kc, t, ot, Fe, Da, ye, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ct(l);
    }
    function Yr(l, t, e, a, n, u, i, f, d, v, z, M, b, S) {
      if (l.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
        M = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Rt
        }, Ur(t, u, M);
        var j = (u & 62914560) === u ? Nu - et() : (u & 4194048) === u ? Hr - et() : 0;
        if (j = kh(M, j), j !== null) {
          Ft = u, l.cancelPendingCommit = j(Jr.bind(null, l, t, u, e, a, n, i, f, d, z, M, null, b, S)), Se(l, u, i, !v);
          return;
        }
      }
      Jr(l, t, u, e, a, n, i, f, d);
    }
    function oh(l) {
      for (var t = l; ; ) {
        var e = t.tag;
        if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ut(u(), n)) return false;
          } catch {
            return false;
          }
        }
        if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
        else {
          if (t === l) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Se(l, t, e, a) {
      t &= ~Jc, t &= ~Fe, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
      for (var n = t; 0 < n; ) {
        var u = 31 - nt(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      e !== 0 && kf(l, e, t);
    }
    function Cu() {
      return (ll & 6) === 0 ? (An(0), false) : true;
    }
    function Ic() {
      if (K !== null) {
        if (tl === 0) var l = K.return;
        else l = K, wt = Qe = null, hc(l), za = null, un = 0, l = K;
        for (; l !== null; ) yr(l.alternate, l), l = l.return;
        K = null;
      }
    }
    function Ca(l, t) {
      var e = l.timeoutHandle;
      e !== -1 && (l.timeoutHandle = -1, Dh(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Ft = 0, Ic(), ol = l, K = e = Gt(l.current, null), k = t, tl = 0, st = null, ye = false, Na = Qa(l, t), Kc = false, Da = ot = Jc = Fe = ve = bl = 0, lt = zn = null, kc = false, (t & 8) !== 0 && (t |= t & 32);
      var a = l.entangledLanes;
      if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - nt(a), u = 1 << n;
        t |= l[n], a &= ~u;
      }
      return $t = t, Pn(), e;
    }
    function wr(l, t) {
      Q = null, x.H = hn, t === _a || t === cu ? (t = to(), tl = 3) : t === ec ? (t = to(), tl = 4) : tl = t === Dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, st = t, K === null && (bl = 1, _u(l, gt(t, l.current)));
    }
    function Xr() {
      var l = ct.current;
      return l === null ? true : (k & 4194048) === k ? pt === null : (k & 62914560) === k || (k & 536870912) !== 0 ? l === pt : false;
    }
    function Qr() {
      var l = x.H;
      return x.H = hn, l === null ? hn : l;
    }
    function Vr() {
      var l = x.A;
      return x.A = fh, l;
    }
    function ju() {
      bl = 4, ye || (k & 4194048) !== k && ct.current !== null || (Na = true), (ve & 134217727) === 0 && (Fe & 134217727) === 0 || ol === null || Se(ol, k, ot, false);
    }
    function Pc(l, t, e) {
      var a = ll;
      ll |= 2;
      var n = Qr(), u = Vr();
      (ol !== l || k !== t) && (Uu = null, Ca(l, t)), t = false;
      var i = bl;
      l: do
        try {
          if (tl !== 0 && K !== null) {
            var f = K, d = st;
            switch (tl) {
              case 8:
                Ic(), i = 6;
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                ct.current === null && (t = true);
                var v = tl;
                if (tl = 0, st = null, ja(l, f, d, v), e && Na) {
                  i = 0;
                  break l;
                }
                break;
              default:
                v = tl, tl = 0, st = null, ja(l, f, d, v);
            }
          }
          rh(), i = bl;
          break;
        } catch (z) {
          wr(l, z);
        }
      while (true);
      return t && l.shellSuspendCounter++, wt = Qe = null, ll = a, x.H = n, x.A = u, K === null && (ol = null, k = 0, Pn()), i;
    }
    function rh() {
      for (; K !== null; ) Zr(K);
    }
    function dh(l, t) {
      var e = ll;
      ll |= 2;
      var a = Qr(), n = Vr();
      ol !== l || k !== t ? (Uu = null, Du = et() + 500, Ca(l, t)) : Na = Qa(l, t);
      l: do
        try {
          if (tl !== 0 && K !== null) {
            t = K;
            var u = st;
            t: switch (tl) {
              case 1:
                tl = 0, st = null, ja(l, t, u, 1);
                break;
              case 2:
              case 9:
                if (Ps(u)) {
                  tl = 0, st = null, Lr(t);
                  break;
                }
                t = function() {
                  tl !== 2 && tl !== 9 || ol !== l || (tl = 7), Ct(l);
                }, u.then(t, t);
                break l;
              case 3:
                tl = 7;
                break l;
              case 4:
                tl = 5;
                break l;
              case 7:
                Ps(u) ? (tl = 0, st = null, Lr(t)) : (tl = 0, st = null, ja(l, t, u, 7));
                break;
              case 5:
                var i = null;
                switch (K.tag) {
                  case 26:
                    i = K.memoizedState;
                  case 5:
                  case 27:
                    var f = K;
                    if (i ? Dd(i) : f.stateNode.complete) {
                      tl = 0, st = null;
                      var d = f.sibling;
                      if (d !== null) K = d;
                      else {
                        var v = f.return;
                        v !== null ? (K = v, Bu(v)) : K = null;
                      }
                      break t;
                    }
                }
                tl = 0, st = null, ja(l, t, u, 5);
                break;
              case 6:
                tl = 0, st = null, ja(l, t, u, 6);
                break;
              case 8:
                Ic(), bl = 6;
                break l;
              default:
                throw Error(s(462));
            }
          }
          mh();
          break;
        } catch (z) {
          wr(l, z);
        }
      while (true);
      return wt = Qe = null, x.H = a, x.A = n, ll = e, K !== null ? 0 : (ol = null, k = 0, Pn(), bl);
    }
    function mh() {
      for (; K !== null && !Rm(); ) Zr(K);
    }
    function Zr(l) {
      var t = hr(l.alternate, l, $t);
      l.memoizedProps = l.pendingProps, t === null ? Bu(l) : K = t;
    }
    function Lr(l) {
      var t = l, e = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = fr(e, t, t.pendingProps, t.type, void 0, k);
          break;
        case 11:
          t = fr(e, t, t.pendingProps, t.type.render, t.ref, k);
          break;
        case 5:
          hc(t);
        default:
          yr(e, t), t = K = Qs(t, $t), t = hr(e, t, $t);
      }
      l.memoizedProps = l.pendingProps, t === null ? Bu(l) : K = t;
    }
    function ja(l, t, e, a) {
      wt = Qe = null, hc(t), za = null, un = 0;
      var n = t.return;
      try {
        if (th(l, n, t, e, k)) {
          bl = 1, _u(l, gt(e, l.current)), K = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw K = n, u;
        bl = 1, _u(l, gt(e, l.current)), K = null;
        return;
      }
      t.flags & 32768 ? ($ || a === 1 ? l = true : Na || (k & 536870912) !== 0 ? l = false : (ye = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ct.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Kr(t, l)) : Bu(t);
    }
    function Bu(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          Kr(t, ye);
          return;
        }
        l = t.return;
        var e = nh(t.alternate, t, $t);
        if (e !== null) {
          K = e;
          return;
        }
        if (t = t.sibling, t !== null) {
          K = t;
          return;
        }
        K = t = l;
      } while (t !== null);
      bl === 0 && (bl = 5);
    }
    function Kr(l, t) {
      do {
        var e = uh(l.alternate, l);
        if (e !== null) {
          e.flags &= 32767, K = e;
          return;
        }
        if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
          K = l;
          return;
        }
        K = l = e;
      } while (l !== null);
      bl = 6, K = null;
    }
    function Jr(l, t, e, a, n, u, i, f, d) {
      l.cancelPendingCommit = null;
      do
        Hu();
      while (Ml !== 0);
      if ((ll & 6) !== 0) throw Error(s(327));
      if (t !== null) {
        if (t === l.current) throw Error(s(177));
        if (u = t.lanes | t.childLanes, u |= Xi, Km(l, e, u, i, f, d), l === ol && (K = ol = null, k = 0), Ua = t, pe = l, Ft = e, Wc = u, $c = n, Rr = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, vh(qn, function() {
          return Ir(), null;
        })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = x.T, x.T = null, n = D.p, D.p = 2, i = ll, ll |= 4;
          try {
            ih(l, t, e);
          } finally {
            ll = i, D.p = n, x.T = a;
          }
        }
        Ml = 1, kr(), Wr(), $r();
      }
    }
    function kr() {
      if (Ml === 1) {
        Ml = 0;
        var l = pe, t = Ua, e = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || e) {
          e = x.T, x.T = null;
          var a = D.p;
          D.p = 2;
          var n = ll;
          ll |= 4;
          try {
            Or(t, l);
            var u = df, i = js(l.containerInfo), f = u.focusedElem, d = u.selectionRange;
            if (i !== f && f && f.ownerDocument && Cs(f.ownerDocument.documentElement, f)) {
              if (d !== null && Ri(f)) {
                var v = d.start, z = d.end;
                if (z === void 0 && (z = v), "selectionStart" in f) f.selectionStart = v, f.selectionEnd = Math.min(z, f.value.length);
                else {
                  var M = f.ownerDocument || document, b = M && M.defaultView || window;
                  if (b.getSelection) {
                    var S = b.getSelection(), j = f.textContent.length, w = Math.min(d.start, j), cl = d.end === void 0 ? w : Math.min(d.end, j);
                    !S.extend && w > cl && (i = cl, cl = w, w = i);
                    var g = Us(f, w), m = Us(f, cl);
                    if (g && m && (S.rangeCount !== 1 || S.anchorNode !== g.node || S.anchorOffset !== g.offset || S.focusNode !== m.node || S.focusOffset !== m.offset)) {
                      var y = M.createRange();
                      y.setStart(g.node, g.offset), S.removeAllRanges(), w > cl ? (S.addRange(y), S.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset), S.addRange(y));
                    }
                  }
                }
              }
              for (M = [], S = f; S = S.parentNode; ) S.nodeType === 1 && M.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
              for (typeof f.focus == "function" && f.focus(), f = 0; f < M.length; f++) {
                var A = M[f];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            Ju = !!rf, df = rf = null;
          } finally {
            ll = n, D.p = a, x.T = e;
          }
        }
        l.current = t, Ml = 2;
      }
    }
    function Wr() {
      if (Ml === 2) {
        Ml = 0;
        var l = pe, t = Ua, e = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || e) {
          e = x.T, x.T = null;
          var a = D.p;
          D.p = 2;
          var n = ll;
          ll |= 4;
          try {
            xr(l, t.alternate, t);
          } finally {
            ll = n, D.p = a, x.T = e;
          }
        }
        Ml = 3;
      }
    }
    function $r() {
      if (Ml === 4 || Ml === 3) {
        Ml = 0, qm();
        var l = pe, t = Ua, e = Ft, a = Rr;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ml = 5 : (Ml = 0, Ua = pe = null, Fr(l, l.pendingLanes));
        var n = l.pendingLanes;
        if (n === 0 && (be = null), vi(e), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
          at.onCommitFiberRoot(Xa, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          t = x.T, n = D.p, D.p = 2, x.T = null;
          try {
            for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
              var f = a[i];
              u(f.value, {
                componentStack: f.stack
              });
            }
          } finally {
            x.T = t, D.p = n;
          }
        }
        (Ft & 3) !== 0 && Hu(), Ct(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === Fc ? xn++ : (xn = 0, Fc = l) : xn = 0, An(0);
      }
    }
    function Fr(l, t) {
      (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, an(t)));
    }
    function Hu() {
      return kr(), Wr(), $r(), Ir();
    }
    function Ir() {
      if (Ml !== 5) return false;
      var l = pe, t = Wc;
      Wc = 0;
      var e = vi(Ft), a = x.T, n = D.p;
      try {
        D.p = 32 > e ? 32 : e, x.T = null, e = $c, $c = null;
        var u = pe, i = Ft;
        if (Ml = 0, Ua = pe = null, Ft = 0, (ll & 6) !== 0) throw Error(s(331));
        var f = ll;
        if (ll |= 4, jr(u.current), Dr(u, u.current, i, e), ll = f, An(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(Xa, u);
        } catch {
        }
        return true;
      } finally {
        D.p = n, x.T = a, Fr(l, t);
      }
    }
    function Pr(l, t, e) {
      t = gt(e, t), t = Nc(l.stateNode, t, 2), l = de(l, t, 2), l !== null && (Va(l, 2), Ct(l));
    }
    function el(l, t, e) {
      if (l.tag === 3) Pr(l, l, e);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Pr(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (be === null || !be.has(a))) {
            l = gt(e, l), e = lr(2), a = de(t, e, 2), a !== null && (tr(e, a, t, l), Va(a, 2), Ct(a));
            break;
          }
        }
        t = t.return;
      }
    }
    function lf(l, t, e) {
      var a = l.pingCache;
      if (a === null) {
        a = l.pingCache = new sh();
        var n = /* @__PURE__ */ new Set();
        a.set(t, n);
      } else n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
      n.has(e) || (Kc = true, n.add(e), l = hh.bind(null, l, t, e), t.then(l, l));
    }
    function hh(l, t, e) {
      var a = l.pingCache;
      a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, ol === l && (k & e) === e && (bl === 4 || bl === 3 && (k & 62914560) === k && 300 > et() - Nu ? (ll & 2) === 0 && Ca(l, 0) : Jc |= e, Da === k && (Da = 0)), Ct(l);
    }
    function ld(l, t) {
      t === 0 && (t = Jf()), l = Ye(l, t), l !== null && (Va(l, t), Ct(l));
    }
    function gh(l) {
      var t = l.memoizedState, e = 0;
      t !== null && (e = t.retryLane), ld(l, e);
    }
    function yh(l, t) {
      var e = 0;
      switch (l.tag) {
        case 31:
        case 13:
          var a = l.stateNode, n = l.memoizedState;
          n !== null && (e = n.retryLane);
          break;
        case 19:
          a = l.stateNode;
          break;
        case 22:
          a = l.stateNode._retryCache;
          break;
        default:
          throw Error(s(314));
      }
      a !== null && a.delete(t), ld(l, e);
    }
    function vh(l, t) {
      return mi(l, t);
    }
    var Ru = null, Ba = null, tf = false, qu = false, ef = false, _e = 0;
    function Ct(l) {
      l !== Ba && l.next === null && (Ba === null ? Ru = Ba = l : Ba = Ba.next = l), qu = true, tf || (tf = true, ph());
    }
    function An(l, t) {
      if (!ef && qu) {
        ef = true;
        do
          for (var e = false, a = Ru; a !== null; ) {
            if (l !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, f = a.pingedLanes;
                u = (1 << 31 - nt(42 | l) + 1) - 1, u &= n & ~(i & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (e = true, nd(a, u));
            } else u = k, u = Xn(a, a === ol ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Qa(a, u) || (e = true, nd(a, u));
            a = a.next;
          }
        while (e);
        ef = false;
      }
    }
    function bh() {
      td();
    }
    function td() {
      qu = tf = false;
      var l = 0;
      _e !== 0 && Nh() && (l = _e);
      for (var t = et(), e = null, a = Ru; a !== null; ) {
        var n = a.next, u = ed(a, t);
        u === 0 ? (a.next = null, e === null ? Ru = n : e.next = n, n === null && (Ba = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (qu = true)), a = n;
      }
      Ml !== 0 && Ml !== 5 || An(l), _e !== 0 && (_e = 0);
    }
    function ed(l, t) {
      for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - nt(u), f = 1 << i, d = n[i];
        d === -1 ? ((f & e) === 0 || (f & a) !== 0) && (n[i] = Lm(f, t)) : d <= t && (l.expiredLanes |= f), u &= ~f;
      }
      if (t = ol, e = k, e = Xn(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && hi(a), l.callbackNode = null, l.callbackPriority = 0;
      if ((e & 3) === 0 || Qa(l, e)) {
        if (t = e & -e, t === l.callbackPriority) return t;
        switch (a !== null && hi(a), vi(e)) {
          case 2:
          case 8:
            e = Lf;
            break;
          case 32:
            e = qn;
            break;
          case 268435456:
            e = Kf;
            break;
          default:
            e = qn;
        }
        return a = ad.bind(null, l), e = mi(e, a), l.callbackPriority = t, l.callbackNode = e, t;
      }
      return a !== null && a !== null && hi(a), l.callbackPriority = 2, l.callbackNode = null, 2;
    }
    function ad(l, t) {
      if (Ml !== 0 && Ml !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
      var e = l.callbackNode;
      if (Hu() && l.callbackNode !== e) return null;
      var a = k;
      return a = Xn(l, l === ol ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (Gr(l, a, t), ed(l, et()), l.callbackNode != null && l.callbackNode === e ? ad.bind(null, l) : null);
    }
    function nd(l, t) {
      if (Hu()) return null;
      Gr(l, t, true);
    }
    function ph() {
      Uh(function() {
        (ll & 6) !== 0 ? mi(Zf, bh) : td();
      });
    }
    function af() {
      if (_e === 0) {
        var l = pa;
        l === 0 && (l = Gn, Gn <<= 1, (Gn & 261888) === 0 && (Gn = 256)), _e = l;
      }
      return _e;
    }
    function ud(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ln("" + l);
    }
    function id(l, t) {
      var e = t.ownerDocument.createElement("input");
      return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
    }
    function Sh(l, t, e, a, n) {
      if (t === "submit" && e && e.stateNode === n) {
        var u = ud((n[Wl] || null).action), i = a.submitter;
        i && (t = (t = i[Wl] || null) ? ud(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
        var f = new Wn("action", "action", null, a, n);
        l.push({
          event: f,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (_e !== 0) {
                    var d = i ? id(n, i) : new FormData(n);
                    xc(e, {
                      pending: true,
                      data: d,
                      method: n.method,
                      action: u
                    }, null, d);
                  }
                } else typeof u == "function" && (f.preventDefault(), d = i ? id(n, i) : new FormData(n), xc(e, {
                  pending: true,
                  data: d,
                  method: n.method,
                  action: u
                }, u, d));
              },
              currentTarget: n
            }
          ]
        });
      }
    }
    for (var nf = 0; nf < wi.length; nf++) {
      var uf = wi[nf], _h = uf.toLowerCase(), zh = uf[0].toUpperCase() + uf.slice(1);
      Tt(_h, "on" + zh);
    }
    Tt(Rs, "onAnimationEnd"), Tt(qs, "onAnimationIteration"), Tt(Gs, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(G0, "onTransitionRun"), Tt(Y0, "onTransitionStart"), Tt(w0, "onTransitionCancel"), Tt(Ys, "onTransitionEnd"), ua("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), ua("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), ua("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), ua("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), He("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), He("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), He("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), He("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), He("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), He("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Tn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));
    function cd(l, t) {
      t = (t & 4) !== 0;
      for (var e = 0; e < l.length; e++) {
        var a = l[e], n = a.event;
        a = a.listeners;
        l: {
          var u = void 0;
          if (t) for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i], d = f.instance, v = f.currentTarget;
            if (f = f.listener, d !== u && n.isPropagationStopped()) break l;
            u = f, n.currentTarget = v;
            try {
              u(n);
            } catch (z) {
              In(z);
            }
            n.currentTarget = null, u = d;
          }
          else for (i = 0; i < a.length; i++) {
            if (f = a[i], d = f.instance, v = f.currentTarget, f = f.listener, d !== u && n.isPropagationStopped()) break l;
            u = f, n.currentTarget = v;
            try {
              u(n);
            } catch (z) {
              In(z);
            }
            n.currentTarget = null, u = d;
          }
        }
      }
    }
    function J(l, t) {
      var e = t[bi];
      e === void 0 && (e = t[bi] = /* @__PURE__ */ new Set());
      var a = l + "__bubble";
      e.has(a) || (fd(t, l, 2, false), e.add(a));
    }
    function cf(l, t, e) {
      var a = 0;
      t && (a |= 4), fd(e, l, a, t);
    }
    var Gu = "_reactListening" + Math.random().toString(36).slice(2);
    function ff(l) {
      if (!l[Gu]) {
        l[Gu] = true, ls.forEach(function(e) {
          e !== "selectionchange" && (xh.has(e) || cf(e, false, l), cf(e, true, l));
        });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[Gu] || (t[Gu] = true, cf("selectionchange", false, t));
      }
    }
    function fd(l, t, e, a) {
      switch (qd(t)) {
        case 2:
          var n = Fh;
          break;
        case 8:
          n = Ih;
          break;
        default:
          n = xf;
      }
      e = n.bind(null, t, e, l), n = void 0, !Mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), a ? n !== void 0 ? l.addEventListener(t, e, {
        capture: true,
        passive: n
      }) : l.addEventListener(t, e, true) : n !== void 0 ? l.addEventListener(t, e, {
        passive: n
      }) : l.addEventListener(t, e, false);
    }
    function sf(l, t, e, a, n) {
      var u = a;
      if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4) for (i = a.return; i !== null; ) {
            var d = i.tag;
            if ((d === 3 || d === 4) && i.stateNode.containerInfo === n) return;
            i = i.return;
          }
          for (; f !== null; ) {
            if (i = ea(f), i === null) return;
            if (d = i.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = u = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
      ds(function() {
        var v = u, z = Ti(e), M = [];
        l: {
          var b = ws.get(l);
          if (b !== void 0) {
            var S = Wn, j = l;
            switch (l) {
              case "keypress":
                if (Jn(e) === 0) break l;
              case "keydown":
              case "keyup":
                S = y0;
                break;
              case "focusin":
                j = "focus", S = Ui;
                break;
              case "focusout":
                j = "blur", S = Ui;
                break;
              case "beforeblur":
              case "afterblur":
                S = Ui;
                break;
              case "click":
                if (e.button === 2) break l;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                S = gs;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                S = n0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                S = p0;
                break;
              case Rs:
              case qs:
              case Gs:
                S = c0;
                break;
              case Ys:
                S = _0;
                break;
              case "scroll":
              case "scrollend":
                S = e0;
                break;
              case "wheel":
                S = x0;
                break;
              case "copy":
              case "cut":
              case "paste":
                S = s0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                S = vs;
                break;
              case "toggle":
              case "beforetoggle":
                S = T0;
            }
            var w = (t & 4) !== 0, cl = !w && (l === "scroll" || l === "scrollend"), g = w ? b !== null ? b + "Capture" : null : b;
            w = [];
            for (var m = v, y; m !== null; ) {
              var A = m;
              if (y = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || y === null || g === null || (A = Ka(m, g), A != null && w.push(En(m, A, y))), cl) break;
              m = m.return;
            }
            0 < w.length && (b = new S(b, j, null, e, z), M.push({
              event: b,
              listeners: w
            }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (b = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", b && e !== Ai && (j = e.relatedTarget || e.fromElement) && (ea(j) || j[ta])) break l;
            if ((S || b) && (b = z.window === z ? z : (b = z.ownerDocument) ? b.defaultView || b.parentWindow : window, S ? (j = e.relatedTarget || e.toElement, S = v, j = j ? ea(j) : null, j !== null && (cl = _(j), w = j.tag, j !== cl || w !== 5 && w !== 27 && w !== 6) && (j = null)) : (S = null, j = v), S !== j)) {
              if (w = gs, A = "onMouseLeave", g = "onMouseEnter", m = "mouse", (l === "pointerout" || l === "pointerover") && (w = vs, A = "onPointerLeave", g = "onPointerEnter", m = "pointer"), cl = S == null ? b : La(S), y = j == null ? b : La(j), b = new w(A, m + "leave", S, e, z), b.target = cl, b.relatedTarget = y, A = null, ea(z) === v && (w = new w(g, m + "enter", j, e, z), w.target = y, w.relatedTarget = cl, A = w), cl = A, S && j) t: {
                for (w = Ah, g = S, m = j, y = 0, A = g; A; A = w(A)) y++;
                A = 0;
                for (var G = m; G; G = w(G)) A++;
                for (; 0 < y - A; ) g = w(g), y--;
                for (; 0 < A - y; ) m = w(m), A--;
                for (; y--; ) {
                  if (g === m || m !== null && g === m.alternate) {
                    w = g;
                    break t;
                  }
                  g = w(g), m = w(m);
                }
                w = null;
              }
              else w = null;
              S !== null && sd(M, b, S, w, false), j !== null && cl !== null && sd(M, cl, j, w, true);
            }
          }
          l: {
            if (b = v ? La(v) : window, S = b.nodeName && b.nodeName.toLowerCase(), S === "select" || S === "input" && b.type === "file") var I = Ts;
            else if (xs(b)) if (Es) I = H0;
            else {
              I = j0;
              var q = C0;
            }
            else S = b.nodeName, !S || S.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? v && xi(v.elementType) && (I = Ts) : I = B0;
            if (I && (I = I(l, v))) {
              As(M, I, e, z);
              break l;
            }
            q && q(l, b, v), l === "focusout" && v && b.type === "number" && v.memoizedProps.value != null && zi(b, "number", b.value);
          }
          switch (q = v ? La(v) : window, l) {
            case "focusin":
              (xs(q) || q.contentEditable === "true") && (ra = q, qi = v, ln = null);
              break;
            case "focusout":
              ln = qi = ra = null;
              break;
            case "mousedown":
              Gi = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Gi = false, Bs(M, e, z);
              break;
            case "selectionchange":
              if (q0) break;
            case "keydown":
            case "keyup":
              Bs(M, e, z);
          }
          var V;
          if (ji) l: {
            switch (l) {
              case "compositionstart":
                var W = "onCompositionStart";
                break l;
              case "compositionend":
                W = "onCompositionEnd";
                break l;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break l;
            }
            W = void 0;
          }
          else oa ? _s(l, e) && (W = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (W = "onCompositionStart");
          W && (bs && e.locale !== "ko" && (oa || W !== "onCompositionStart" ? W === "onCompositionEnd" && oa && (V = ms()) : (ue = z, Oi = "value" in ue ? ue.value : ue.textContent, oa = true)), q = Yu(v, W), 0 < q.length && (W = new ys(W, l, null, e, z), M.push({
            event: W,
            listeners: q
          }), V ? W.data = V : (V = zs(e), V !== null && (W.data = V)))), (V = M0 ? O0(l, e) : N0(l, e)) && (W = Yu(v, "onBeforeInput"), 0 < W.length && (q = new ys("onBeforeInput", "beforeinput", null, e, z), M.push({
            event: q,
            listeners: W
          }), q.data = V)), Sh(M, l, v, e, z);
        }
        cd(M, t);
      });
    }
    function En(l, t, e) {
      return {
        instance: l,
        listener: t,
        currentTarget: e
      };
    }
    function Yu(l, t) {
      for (var e = t + "Capture", a = []; l !== null; ) {
        var n = l, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ka(l, e), n != null && a.unshift(En(l, n, u)), n = Ka(l, t), n != null && a.push(En(l, n, u))), l.tag === 3) return a;
        l = l.return;
      }
      return [];
    }
    function Ah(l) {
      if (l === null) return null;
      do
        l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function sd(l, t, e, a, n) {
      for (var u = t._reactName, i = []; e !== null && e !== a; ) {
        var f = e, d = f.alternate, v = f.stateNode;
        if (f = f.tag, d !== null && d === a) break;
        f !== 5 && f !== 26 && f !== 27 || v === null || (d = v, n ? (v = Ka(e, u), v != null && i.unshift(En(e, v, d))) : n || (v = Ka(e, u), v != null && i.push(En(e, v, d)))), e = e.return;
      }
      i.length !== 0 && l.push({
        event: t,
        listeners: i
      });
    }
    var Th = /\r\n?/g, Eh = /\u0000|\uFFFD/g;
    function od(l) {
      return (typeof l == "string" ? l : "" + l).replace(Th, `
`).replace(Eh, "");
    }
    function rd(l, t) {
      return t = od(t), od(l) === t;
    }
    function il(l, t, e, a, n, u) {
      switch (e) {
        case "children":
          typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ca(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ca(l, "" + a);
          break;
        case "className":
          Vn(l, "class", a);
          break;
        case "tabIndex":
          Vn(l, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Vn(l, e, a);
          break;
        case "style":
          os(l, a, u);
          break;
        case "data":
          if (t !== "object") {
            Vn(l, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || e !== "href")) {
            l.removeAttribute(e);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          a = Ln("" + a), l.setAttribute(e, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (e === "formAction" ? (t !== "input" && il(l, t, "name", n.name, n, null), il(l, t, "formEncType", n.formEncType, n, null), il(l, t, "formMethod", n.formMethod, n, null), il(l, t, "formTarget", n.formTarget, n, null)) : (il(l, t, "encType", n.encType, n, null), il(l, t, "method", n.method, n, null), il(l, t, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          a = Ln("" + a), l.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (l.onclick = Rt);
          break;
        case "onScroll":
          a != null && J("scroll", l);
          break;
        case "onScrollEnd":
          a != null && J("scrollend", l);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
            if (e = a.__html, e != null) {
              if (n.children != null) throw Error(s(60));
              l.innerHTML = e;
            }
          }
          break;
        case "multiple":
          l.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          l.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            l.removeAttribute("xlink:href");
            break;
          }
          e = Ln("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
          break;
        case "capture":
        case "download":
          a === true ? l.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
          break;
        case "popover":
          J("beforetoggle", l), J("toggle", l), Qn(l, "popover", a);
          break;
        case "xlinkActuate":
          Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Qn(l, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = l0.get(e) || e, Qn(l, e, a));
      }
    }
    function of(l, t, e, a, n, u) {
      switch (e) {
        case "style":
          os(l, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
            if (e = a.__html, e != null) {
              if (n.children != null) throw Error(s(60));
              l.innerHTML = e;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ca(l, a) : (typeof a == "number" || typeof a == "bigint") && ca(l, "" + a);
          break;
        case "onScroll":
          a != null && J("scroll", l);
          break;
        case "onScrollEnd":
          a != null && J("scrollend", l);
          break;
        case "onClick":
          a != null && (l.onclick = Rt);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!ts.hasOwnProperty(e)) l: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[Wl] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
              break l;
            }
            e in l ? l[e] = a : a === true ? l.setAttribute(e, "") : Qn(l, e, a);
          }
      }
    }
    function Yl(l, t, e) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          J("error", l), J("load", l);
          var a = false, n = false, u;
          for (u in e) if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null) switch (u) {
              case "src":
                a = true;
                break;
              case "srcSet":
                n = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                il(l, t, u, i, e, null);
            }
          }
          n && il(l, t, "srcSet", e.srcSet, e, null), a && il(l, t, "src", e.src, e, null);
          return;
        case "input":
          J("invalid", l);
          var f = u = i = n = null, d = null, v = null;
          for (a in e) if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null) switch (a) {
              case "name":
                n = z;
                break;
              case "type":
                i = z;
                break;
              case "checked":
                d = z;
                break;
              case "defaultChecked":
                v = z;
                break;
              case "value":
                u = z;
                break;
              case "defaultValue":
                f = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, t));
                break;
              default:
                il(l, t, a, z, e, null);
            }
          }
          is(l, u, f, d, v, i, n, false);
          return;
        case "select":
          J("invalid", l), a = i = u = null;
          for (n in e) if (e.hasOwnProperty(n) && (f = e[n], f != null)) switch (n) {
            case "value":
              u = f;
              break;
            case "defaultValue":
              i = f;
              break;
            case "multiple":
              a = f;
            default:
              il(l, t, n, f, e, null);
          }
          t = u, e = i, l.multiple = !!a, t != null ? ia(l, !!a, t, false) : e != null && ia(l, !!a, e, true);
          return;
        case "textarea":
          J("invalid", l), u = n = a = null;
          for (i in e) if (e.hasOwnProperty(i) && (f = e[i], f != null)) switch (i) {
            case "value":
              a = f;
              break;
            case "defaultValue":
              n = f;
              break;
            case "children":
              u = f;
              break;
            case "dangerouslySetInnerHTML":
              if (f != null) throw Error(s(91));
              break;
            default:
              il(l, t, i, f, e, null);
          }
          fs(l, a, n, u);
          return;
        case "option":
          for (d in e) e.hasOwnProperty(d) && (a = e[d], a != null) && (d === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : il(l, t, d, a, e, null));
          return;
        case "dialog":
          J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
          break;
        case "iframe":
        case "object":
          J("load", l);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Tn.length; a++) J(Tn[a], l);
          break;
        case "image":
          J("error", l), J("load", l);
          break;
        case "details":
          J("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          J("error", l), J("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (v in e) if (e.hasOwnProperty(v) && (a = e[v], a != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, t));
            default:
              il(l, t, v, a, e, null);
          }
          return;
        default:
          if (xi(t)) {
            for (z in e) e.hasOwnProperty(z) && (a = e[z], a !== void 0 && of(l, t, z, a, e, void 0));
            return;
          }
      }
      for (f in e) e.hasOwnProperty(f) && (a = e[f], a != null && il(l, t, f, a, e, null));
    }
    function Mh(l, t, e, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var n = null, u = null, i = null, f = null, d = null, v = null, z = null;
          for (S in e) {
            var M = e[S];
            if (e.hasOwnProperty(S) && M != null) switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = M;
              default:
                a.hasOwnProperty(S) || il(l, t, S, null, a, M);
            }
          }
          for (var b in a) {
            var S = a[b];
            if (M = e[b], a.hasOwnProperty(b) && (S != null || M != null)) switch (b) {
              case "type":
                u = S;
                break;
              case "name":
                n = S;
                break;
              case "checked":
                v = S;
                break;
              case "defaultChecked":
                z = S;
                break;
              case "value":
                i = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(s(137, t));
                break;
              default:
                S !== M && il(l, t, b, S, a, M);
            }
          }
          _i(l, i, f, d, v, z, u, n);
          return;
        case "select":
          S = i = f = b = null;
          for (u in e) if (d = e[u], e.hasOwnProperty(u) && d != null) switch (u) {
            case "value":
              break;
            case "multiple":
              S = d;
            default:
              a.hasOwnProperty(u) || il(l, t, u, null, a, d);
          }
          for (n in a) if (u = a[n], d = e[n], a.hasOwnProperty(n) && (u != null || d != null)) switch (n) {
            case "value":
              b = u;
              break;
            case "defaultValue":
              f = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== d && il(l, t, n, u, a, d);
          }
          t = f, e = i, a = S, b != null ? ia(l, !!e, b, false) : !!a != !!e && (t != null ? ia(l, !!e, t, true) : ia(l, !!e, e ? [] : "", false));
          return;
        case "textarea":
          S = b = null;
          for (f in e) if (n = e[f], e.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f)) switch (f) {
            case "value":
              break;
            case "children":
              break;
            default:
              il(l, t, f, null, a, n);
          }
          for (i in a) if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              b = n;
              break;
            case "defaultValue":
              S = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(s(91));
              break;
            default:
              n !== u && il(l, t, i, n, a, u);
          }
          cs(l, b, S);
          return;
        case "option":
          for (var j in e) b = e[j], e.hasOwnProperty(j) && b != null && !a.hasOwnProperty(j) && (j === "selected" ? l.selected = false : il(l, t, j, null, a, b));
          for (d in a) b = a[d], S = e[d], a.hasOwnProperty(d) && b !== S && (b != null || S != null) && (d === "selected" ? l.selected = b && typeof b != "function" && typeof b != "symbol" : il(l, t, d, b, a, S));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var w in e) b = e[w], e.hasOwnProperty(w) && b != null && !a.hasOwnProperty(w) && il(l, t, w, null, a, b);
          for (v in a) if (b = a[v], S = e[v], a.hasOwnProperty(v) && b !== S && (b != null || S != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(s(137, t));
              break;
            default:
              il(l, t, v, b, a, S);
          }
          return;
        default:
          if (xi(t)) {
            for (var cl in e) b = e[cl], e.hasOwnProperty(cl) && b !== void 0 && !a.hasOwnProperty(cl) && of(l, t, cl, void 0, a, b);
            for (z in a) b = a[z], S = e[z], !a.hasOwnProperty(z) || b === S || b === void 0 && S === void 0 || of(l, t, z, b, a, S);
            return;
          }
      }
      for (var g in e) b = e[g], e.hasOwnProperty(g) && b != null && !a.hasOwnProperty(g) && il(l, t, g, null, a, b);
      for (M in a) b = a[M], S = e[M], !a.hasOwnProperty(M) || b === S || b == null && S == null || il(l, t, M, b, a, S);
    }
    function dd(l) {
      switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function Oh() {
      if (typeof performance.getEntriesByType == "function") {
        for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
          var n = e[a], u = n.transferSize, i = n.initiatorType, f = n.duration;
          if (u && f && dd(i)) {
            for (i = 0, f = n.responseEnd, a += 1; a < e.length; a++) {
              var d = e[a], v = d.startTime;
              if (v > f) break;
              var z = d.transferSize, M = d.initiatorType;
              z && dd(M) && (d = d.responseEnd, i += z * (d < f ? 1 : (f - v) / (d - v)));
            }
            if (--a, t += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
          }
        }
        if (0 < l) return t / l / 1e6;
      }
      return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
    }
    var rf = null, df = null;
    function wu(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function md(l) {
      switch (l) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function hd(l, t) {
      if (l === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return l === 1 && t === "foreignObject" ? 0 : l;
    }
    function mf(l, t) {
      return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var hf = null;
    function Nh() {
      var l = window.event;
      return l && l.type === "popstate" ? l === hf ? false : (hf = l, true) : (hf = null, false);
    }
    var gd = typeof setTimeout == "function" ? setTimeout : void 0, Dh = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, Uh = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(l) {
      return yd.resolve(null).then(l).catch(Ch);
    } : gd;
    function Ch(l) {
      setTimeout(function() {
        throw l;
      });
    }
    function ze(l) {
      return l === "head";
    }
    function vd(l, t) {
      var e = t, a = 0;
      do {
        var n = e.nextSibling;
        if (l.removeChild(e), n && n.nodeType === 8) if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(n), Ga(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
        else if (e === "html") Mn(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, Mn(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, f = u.nodeName;
            u[Za] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else e === "body" && Mn(l.ownerDocument.body);
        e = n;
      } while (e);
      Ga(t);
    }
    function bd(l, t) {
      var e = l;
      l = 0;
      do {
        var a = e.nextSibling;
        if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
        e = a;
      } while (e);
    }
    function gf(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var e = t;
        switch (t = t.nextSibling, e.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            gf(e), pi(e);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (e.rel.toLowerCase() === "stylesheet") continue;
        }
        l.removeChild(e);
      }
    }
    function jh(l, t, e, a) {
      for (; l.nodeType === 1; ) {
        var n = e;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
        } else if (a) {
          if (!l[Za]) switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence")) break;
              if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title)) break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
              return l;
            default:
              return l;
          }
        } else if (t === "input" && l.type === "hidden") {
          var u = n.name == null ? null : "" + n.name;
          if (n.type === "hidden" && l.getAttribute("name") === u) return l;
        } else return l;
        if (l = St(l.nextSibling), l === null) break;
      }
      return null;
    }
    function Bh(l, t, e) {
      if (t === "") return null;
      for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = St(l.nextSibling), l === null)) return null;
      return l;
    }
    function pd(l, t) {
      for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = St(l.nextSibling), l === null)) return null;
      return l;
    }
    function yf(l) {
      return l.data === "$?" || l.data === "$~";
    }
    function vf(l) {
      return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
    }
    function Hh(l, t) {
      var e = l.ownerDocument;
      if (l.data === "$~") l._reactRetry = t;
      else if (l.data !== "$?" || e.readyState !== "loading") t();
      else {
        var a = function() {
          t(), e.removeEventListener("DOMContentLoaded", a);
        };
        e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
      }
    }
    function St(l) {
      for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return l;
    }
    var bf = null;
    function Sd(l) {
      l = l.nextSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "/$" || e === "/&") {
            if (t === 0) return St(l.nextSibling);
            t--;
          } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
        }
        l = l.nextSibling;
      }
      return null;
    }
    function _d(l) {
      l = l.previousSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
            if (t === 0) return l;
            t--;
          } else e !== "/$" && e !== "/&" || t++;
        }
        l = l.previousSibling;
      }
      return null;
    }
    function zd(l, t, e) {
      switch (t = wu(e), l) {
        case "html":
          if (l = t.documentElement, !l) throw Error(s(452));
          return l;
        case "head":
          if (l = t.head, !l) throw Error(s(453));
          return l;
        case "body":
          if (l = t.body, !l) throw Error(s(454));
          return l;
        default:
          throw Error(s(451));
      }
    }
    function Mn(l) {
      for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
      pi(l);
    }
    var _t = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Set();
    function Xu(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var It = D.d;
    D.d = {
      f: Rh,
      r: qh,
      D: Gh,
      C: Yh,
      L: wh,
      m: Xh,
      X: Vh,
      S: Qh,
      M: Zh
    };
    function Rh() {
      var l = It.f(), t = Cu();
      return l || t;
    }
    function qh(l) {
      var t = aa(l);
      t !== null && t.tag === 5 && t.type === "form" ? wo(t) : It.r(l);
    }
    var Ha = typeof document > "u" ? null : document;
    function Ad(l, t, e) {
      var a = Ha;
      if (a && typeof t == "string" && t) {
        var n = mt(t);
        n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), xd.has(n) || (xd.add(n), l = {
          rel: l,
          crossOrigin: e,
          href: t
        }, a.querySelector(n) === null && (t = a.createElement("link"), Yl(t, "link", l), Cl(t), a.head.appendChild(t)));
      }
    }
    function Gh(l) {
      It.D(l), Ad("dns-prefetch", l, null);
    }
    function Yh(l, t) {
      It.C(l, t), Ad("preconnect", l, t);
    }
    function wh(l, t, e) {
      It.L(l, t, e);
      var a = Ha;
      if (a && l && t) {
        var n = 'link[rel="preload"][as="' + mt(t) + '"]';
        t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + mt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + mt(e.imageSizes) + '"]')) : n += '[href="' + mt(l) + '"]';
        var u = n;
        switch (t) {
          case "style":
            u = Ra(l);
            break;
          case "script":
            u = qa(l);
        }
        _t.has(u) || (l = C({
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        }, e), _t.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(On(u)) || t === "script" && a.querySelector(Nn(u)) || (t = a.createElement("link"), Yl(t, "link", l), Cl(t), a.head.appendChild(t)));
      }
    }
    function Xh(l, t) {
      It.m(l, t);
      var e = Ha;
      if (e && l) {
        var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + mt(a) + '"][href="' + mt(l) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = qa(l);
        }
        if (!_t.has(u) && (l = C({
          rel: "modulepreload",
          href: l
        }, t), _t.set(u, l), e.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(Nn(u))) return;
          }
          a = e.createElement("link"), Yl(a, "link", l), Cl(a), e.head.appendChild(a);
        }
      }
    }
    function Qh(l, t, e) {
      It.S(l, t, e);
      var a = Ha;
      if (a && l) {
        var n = na(a).hoistableStyles, u = Ra(l);
        t = t || "default";
        var i = n.get(u);
        if (!i) {
          var f = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(On(u))) f.loading = 5;
          else {
            l = C({
              rel: "stylesheet",
              href: l,
              "data-precedence": t
            }, e), (e = _t.get(u)) && pf(l, e);
            var d = i = a.createElement("link");
            Cl(d), Yl(d, "link", l), d._p = new Promise(function(v, z) {
              d.onload = v, d.onerror = z;
            }), d.addEventListener("load", function() {
              f.loading |= 1;
            }), d.addEventListener("error", function() {
              f.loading |= 2;
            }), f.loading |= 4, Qu(i, t, a);
          }
          i = {
            type: "stylesheet",
            instance: i,
            count: 1,
            state: f
          }, n.set(u, i);
        }
      }
    }
    function Vh(l, t) {
      It.X(l, t);
      var e = Ha;
      if (e && l) {
        var a = na(e).hoistableScripts, n = qa(l), u = a.get(n);
        u || (u = e.querySelector(Nn(n)), u || (l = C({
          src: l,
          async: true
        }, t), (t = _t.get(n)) && Sf(l, t), u = e.createElement("script"), Cl(u), Yl(u, "link", l), e.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Zh(l, t) {
      It.M(l, t);
      var e = Ha;
      if (e && l) {
        var a = na(e).hoistableScripts, n = qa(l), u = a.get(n);
        u || (u = e.querySelector(Nn(n)), u || (l = C({
          src: l,
          async: true,
          type: "module"
        }, t), (t = _t.get(n)) && Sf(l, t), u = e.createElement("script"), Cl(u), Yl(u, "link", l), e.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Td(l, t, e, a) {
      var n = (n = xt.current) ? Xu(n) : null;
      if (!n) throw Error(s(446));
      switch (l) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ra(e.href), e = na(n).hoistableStyles, a = e.get(t), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(t, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
            l = Ra(e.href);
            var u = na(n).hoistableStyles, i = u.get(l);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(l, i), (u = n.querySelector(On(l))) && !u._p && (i.instance = u, i.state.loading = 5), _t.has(l) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, _t.set(l, e), u || Lh(n, l, e, i.state))), t && a === null) throw Error(s(528, ""));
            return i;
          }
          if (t && a !== null) throw Error(s(529, ""));
          return null;
        case "script":
          return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = qa(e), e = na(n).hoistableScripts, a = e.get(t), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(t, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(s(444, l));
      }
    }
    function Ra(l) {
      return 'href="' + mt(l) + '"';
    }
    function On(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function Ed(l) {
      return C({}, l, {
        "data-precedence": l.precedence,
        precedence: null
      });
    }
    function Lh(l, t, e, a) {
      l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), Yl(t, "link", e), Cl(t), l.head.appendChild(t));
    }
    function qa(l) {
      return '[src="' + mt(l) + '"]';
    }
    function Nn(l) {
      return "script[async]" + l;
    }
    function Md(l, t, e) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + mt(e.href) + '"]');
          if (a) return t.instance = a, Cl(a), a;
          var n = C({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement("style"), Cl(a), Yl(a, "style", n), Qu(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          n = Ra(e.href);
          var u = l.querySelector(On(n));
          if (u) return t.state.loading |= 4, t.instance = u, Cl(u), u;
          a = Ed(e), (n = _t.get(n)) && pf(a, n), u = (l.ownerDocument || l).createElement("link"), Cl(u);
          var i = u;
          return i._p = new Promise(function(f, d) {
            i.onload = f, i.onerror = d;
          }), Yl(u, "link", a), t.state.loading |= 4, Qu(u, e.precedence, l), t.instance = u;
        case "script":
          return u = qa(e.src), (n = l.querySelector(Nn(u))) ? (t.instance = n, Cl(n), n) : (a = e, (n = _t.get(u)) && (a = C({}, e), Sf(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Cl(n), Yl(n, "link", a), l.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Qu(a, e.precedence, l));
      return t.instance;
    }
    function Qu(l, t, e) {
      for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var f = a[i];
        if (f.dataset.precedence === t) u = f;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
    }
    function pf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
    }
    function Sf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
    }
    var Vu = null;
    function Od(l, t, e) {
      if (Vu === null) {
        var a = /* @__PURE__ */ new Map(), n = Vu = /* @__PURE__ */ new Map();
        n.set(e, a);
      } else n = Vu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
      if (a.has(l)) return a;
      for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
        var u = e[n];
        if (!(u[Za] || u[Hl] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = u.getAttribute(t) || "";
          i = l + i;
          var f = a.get(i);
          f ? f.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function Nd(l, t, e) {
      l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
    }
    function Kh(l, t, e) {
      if (e === 1 || t.itemProp != null) return false;
      switch (l) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : true;
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function Dd(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    function Jh(l, t, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var n = Ra(a.href), u = t.querySelector(On(n));
          if (u) {
            t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Zu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Cl(u);
            return;
          }
          u = t.ownerDocument || t, a = Ed(a), (n = _t.get(n)) && pf(a, n), u = u.createElement("link"), Cl(u);
          var i = u;
          i._p = new Promise(function(f, d) {
            i.onload = f, i.onerror = d;
          }), Yl(u, "link", a), e.instance = u;
        }
        l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Zu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
      }
    }
    var _f = 0;
    function kh(l, t) {
      return l.stylesheets && l.count === 0 && Ku(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
        var a = setTimeout(function() {
          if (l.stylesheets && Ku(l, l.stylesheets), l.unsuspend) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        }, 6e4 + t);
        0 < l.imgBytes && _f === 0 && (_f = 62500 * Oh());
        var n = setTimeout(function() {
          if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Ku(l, l.stylesheets), l.unsuspend)) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        }, (l.imgBytes > _f ? 50 : 800) + t);
        return l.unsuspend = e, function() {
          l.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function Zu() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Ku(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          this.unsuspend = null, l();
        }
      }
    }
    var Lu = null;
    function Ku(l, t) {
      l.stylesheets = null, l.unsuspend !== null && (l.count++, Lu = /* @__PURE__ */ new Map(), t.forEach(Wh, l), Lu = null, Zu.call(l));
    }
    function Wh(l, t) {
      if (!(t.state.loading & 4)) {
        var e = Lu.get(l);
        if (e) var a = e.get(null);
        else {
          e = /* @__PURE__ */ new Map(), Lu.set(l, e);
          for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
          }
          a && e.set(null, a);
        }
        n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Zu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
      }
    }
    var Dn = {
      $$typeof: Nl,
      Provider: null,
      Consumer: null,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0
    };
    function $h(l, t, e, a, n, u, i, f, d) {
      this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gi(0), this.hiddenUpdates = gi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Ud(l, t, e, a, n, u, i, f, d, v, z, M) {
      return l = new $h(l, t, e, i, d, v, z, M, f), t = 1, u === true && (t |= 24), u = it(3, null, null, t), l.current = u, u.stateNode = l, t = Pi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: e,
        cache: t
      }, ac(u), l;
    }
    function Cd(l) {
      return l ? (l = ha, l) : ha;
    }
    function jd(l, t, e, a, n, u) {
      n = Cd(n), a.context === null ? a.context = n : a.pendingContext = n, a = re(t), a.payload = {
        element: e
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = de(l, a, t), e !== null && (tt(e, l, t), fn(e, l, t));
    }
    function Bd(l, t) {
      if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
        var e = l.retryLane;
        l.retryLane = e !== 0 && e < t ? e : t;
      }
    }
    function zf(l, t) {
      Bd(l, t), (l = l.alternate) && Bd(l, t);
    }
    function Hd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = Ye(l, 67108864);
        t !== null && tt(t, l, 67108864), zf(l, 67108864);
      }
    }
    function Rd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = rt();
        t = yi(t);
        var e = Ye(l, t);
        e !== null && tt(e, l, t), zf(l, t);
      }
    }
    var Ju = true;
    function Fh(l, t, e, a) {
      var n = x.T;
      x.T = null;
      var u = D.p;
      try {
        D.p = 2, xf(l, t, e, a);
      } finally {
        D.p = u, x.T = n;
      }
    }
    function Ih(l, t, e, a) {
      var n = x.T;
      x.T = null;
      var u = D.p;
      try {
        D.p = 8, xf(l, t, e, a);
      } finally {
        D.p = u, x.T = n;
      }
    }
    function xf(l, t, e, a) {
      if (Ju) {
        var n = Af(a);
        if (n === null) sf(l, t, a, ku, e), Gd(l, a);
        else if (lg(n, l, t, e, a)) a.stopPropagation();
        else if (Gd(l, a), t & 4 && -1 < Ph.indexOf(l)) {
          for (; n !== null; ) {
            var u = aa(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Be(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var d = 1 << 31 - nt(i);
                      f.entanglements[1] |= d, i &= ~d;
                    }
                    Ct(u), (ll & 6) === 0 && (Du = et() + 500, An(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Ye(u, 2), f !== null && tt(f, u, 2), Cu(), zf(u, 2);
            }
            if (u = Af(a), u === null && sf(l, t, a, ku, e), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else sf(l, t, a, null, e);
      }
    }
    function Af(l) {
      return l = Ti(l), Tf(l);
    }
    var ku = null;
    function Tf(l) {
      if (ku = null, l = ea(l), l !== null) {
        var t = _(l);
        if (t === null) l = null;
        else {
          var e = t.tag;
          if (e === 13) {
            if (l = E(t), l !== null) return l;
            l = null;
          } else if (e === 31) {
            if (l = U(t), l !== null) return l;
            l = null;
          } else if (e === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return ku = l, null;
    }
    function qd(l) {
      switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (Gm()) {
            case Zf:
              return 2;
            case Lf:
              return 8;
            case qn:
            case Ym:
              return 32;
            case Kf:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Ef = false, xe = null, Ae = null, Te = null, Un = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Ee = [], Ph = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Gd(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          xe = null;
          break;
        case "dragenter":
        case "dragleave":
          Ae = null;
          break;
        case "mouseover":
        case "mouseout":
          Te = null;
          break;
        case "pointerover":
        case "pointerout":
          Un.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Cn.delete(t.pointerId);
      }
    }
    function jn(l, t, e, a, n, u) {
      return l === null || l.nativeEvent !== u ? (l = {
        blockedOn: t,
        domEventName: e,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, t !== null && (t = aa(t), t !== null && Hd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
    }
    function lg(l, t, e, a, n) {
      switch (t) {
        case "focusin":
          return xe = jn(xe, l, t, e, a, n), true;
        case "dragenter":
          return Ae = jn(Ae, l, t, e, a, n), true;
        case "mouseover":
          return Te = jn(Te, l, t, e, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Un.set(u, jn(Un.get(u) || null, l, t, e, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Cn.set(u, jn(Cn.get(u) || null, l, t, e, a, n)), true;
      }
      return false;
    }
    function Yd(l) {
      var t = ea(l.target);
      if (t !== null) {
        var e = _(t);
        if (e !== null) {
          if (t = e.tag, t === 13) {
            if (t = E(e), t !== null) {
              l.blockedOn = t, If(l.priority, function() {
                Rd(e);
              });
              return;
            }
          } else if (t === 31) {
            if (t = U(e), t !== null) {
              l.blockedOn = t, If(l.priority, function() {
                Rd(e);
              });
              return;
            }
          } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
            l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
            return;
          }
        }
      }
      l.blockedOn = null;
    }
    function Wu(l) {
      if (l.blockedOn !== null) return false;
      for (var t = l.targetContainers; 0 < t.length; ) {
        var e = Af(l.nativeEvent);
        if (e === null) {
          e = l.nativeEvent;
          var a = new e.constructor(e.type, e);
          Ai = a, e.target.dispatchEvent(a), Ai = null;
        } else return t = aa(e), t !== null && Hd(t), l.blockedOn = e, false;
        t.shift();
      }
      return true;
    }
    function wd(l, t, e) {
      Wu(l) && e.delete(t);
    }
    function tg() {
      Ef = false, xe !== null && Wu(xe) && (xe = null), Ae !== null && Wu(Ae) && (Ae = null), Te !== null && Wu(Te) && (Te = null), Un.forEach(wd), Cn.forEach(wd);
    }
    function $u(l, t) {
      l.blockedOn === t && (l.blockedOn = null, Ef || (Ef = true, c.unstable_scheduleCallback(c.unstable_NormalPriority, tg)));
    }
    var Fu = null;
    function Xd(l) {
      Fu !== l && (Fu = l, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
        Fu === l && (Fu = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], n = l[t + 2];
          if (typeof a != "function") {
            if (Tf(a || e) === null) continue;
            break;
          }
          var u = aa(e);
          u !== null && (l.splice(t, 3), t -= 3, xc(u, {
            pending: true,
            data: n,
            method: e.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Ga(l) {
      function t(d) {
        return $u(d, l);
      }
      xe !== null && $u(xe, l), Ae !== null && $u(Ae, l), Te !== null && $u(Te, l), Un.forEach(t), Cn.forEach(t);
      for (var e = 0; e < Ee.length; e++) {
        var a = Ee[e];
        a.blockedOn === l && (a.blockedOn = null);
      }
      for (; 0 < Ee.length && (e = Ee[0], e.blockedOn === null); ) Yd(e), e.blockedOn === null && Ee.shift();
      if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[Wl] || null;
        if (typeof u == "function") i || Xd(e);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Wl] || null) f = i.formAction;
            else if (Tf(n) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), Xd(e);
        }
      }
    }
    function Qd() {
      function l(u) {
        u.canIntercept && u.info === "react-transition" && u.intercept({
          handler: function() {
            return new Promise(function(i) {
              return n = i;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        n !== null && (n(), n = null), a || setTimeout(e, 20);
      }
      function e() {
        if (!a && !navigation.transition) {
          var u = navigation.currentEntry;
          u && u.url != null && navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var a = false, n = null;
        return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
          a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
        };
      }
    }
    function Mf(l) {
      this._internalRoot = l;
    }
    Iu.prototype.render = Mf.prototype.render = function(l) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var e = t.current, a = rt();
      jd(e, a, l, t, null, null);
    }, Iu.prototype.unmount = Mf.prototype.unmount = function() {
      var l = this._internalRoot;
      if (l !== null) {
        this._internalRoot = null;
        var t = l.containerInfo;
        jd(l.current, 2, null, l, null, null), Cu(), t[ta] = null;
      }
    };
    function Iu(l) {
      this._internalRoot = l;
    }
    Iu.prototype.unstable_scheduleHydration = function(l) {
      if (l) {
        var t = Ff();
        l = {
          blockedOn: null,
          target: l,
          priority: t
        };
        for (var e = 0; e < Ee.length && t !== 0 && t < Ee[e].priority; e++) ;
        Ee.splice(e, 0, l), e === 0 && Yd(l);
      }
    };
    var Vd = r.version;
    if (Vd !== "19.2.4") throw Error(s(527, Vd, "19.2.4"));
    D.findDOMNode = function(l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(s(188)) : (l = Object.keys(l).join(","), Error(s(268, l)));
      return l = p(t), l = l !== null ? R(l) : null, l = l === null ? null : l.stateNode, l;
    };
    var eg = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: x,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Pu.isDisabled && Pu.supportsFiber) try {
        Xa = Pu.inject(eg), at = Pu;
      } catch {
      }
    }
    return Bn.createRoot = function(l, t) {
      if (!h(l)) throw Error(s(299));
      var e = false, a = "", n = $o, u = Fo, i = Io;
      return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ud(l, 1, false, null, null, e, a, null, n, u, i, Qd), l[ta] = t.current, ff(l), new Mf(t);
    }, Bn.hydrateRoot = function(l, t, e) {
      if (!h(l)) throw Error(s(299));
      var a = false, n = "", u = $o, i = Fo, f = Io, d = null;
      return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.formState !== void 0 && (d = e.formState)), t = Ud(l, 1, true, t, e ?? null, a, n, d, u, i, f, Qd), t.context = Cd(null), e = t.current, a = rt(), a = yi(a), n = re(a), n.callback = null, de(e, n, a), e = a, t.current.lanes = e, Va(t, e), Ct(t), l[ta] = t.current, ff(l), new Iu(t);
    }, Bn.version = "19.2.4", Bn;
  }
  var Wd;
  function yg() {
    if (Wd) return Of.exports;
    Wd = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
    }
    return c(), Of.exports = gg(), Of.exports;
  }
  var vg = yg();
  const bg = ng(vg), pg = "/assets/recipe-parser_bg-lFpNQ4-Q.wasm", Sg = async (c = {}, r) => {
    let o;
    if (r.startsWith("data:")) {
      const s = r.replace(/^data:.*?base64,/, "");
      let h;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") h = Buffer.from(s, "base64");
      else if (typeof atob == "function") {
        const _ = atob(s);
        h = new Uint8Array(_.length);
        for (let E = 0; E < _.length; E++) h[E] = _.charCodeAt(E);
      } else throw new Error("Cannot decode base64-encoded data URL");
      o = await WebAssembly.instantiate(h, c);
    } else {
      const s = await fetch(r), h = s.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && h.startsWith("application/wasm")) o = await WebAssembly.instantiateStreaming(s, c);
      else {
        const _ = await s.arrayBuffer();
        o = await WebAssembly.instantiate(_, c);
      }
    }
    return o.instance.exports;
  };
  function _g(c) {
    const r = rm(c, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = ui, s = zt.parse(r, o);
    if (s[2]) throw Fd(s[1]);
    return Fd(s[0]);
  }
  function zg(c, r) {
    return Error(Rf(c, r));
  }
  function xg(c, r) {
    const o = Bf(r), s = rm(o, zt.__wbindgen_malloc, zt.__wbindgen_realloc), h = ui;
    $d().setInt32(c + 4, h, true), $d().setInt32(c + 0, s, true);
  }
  function Ag(c) {
    return typeof c == "string";
  }
  function Tg(c, r) {
    throw new Error(Rf(c, r));
  }
  function Eg() {
    return new Object();
  }
  function Mg() {
    return new Array();
  }
  function Og() {
    return /* @__PURE__ */ new Map();
  }
  function Ng(c, r, o) {
    return c.set(r, o);
  }
  function Dg(c, r, o) {
    c[r] = o;
  }
  function Ug(c, r, o) {
    c[r >>> 0] = o;
  }
  function Cg(c) {
    return c;
  }
  function jg(c, r) {
    return Rf(c, r);
  }
  function Bg(c) {
    return BigInt.asUintN(64, c);
  }
  function Hg() {
    const c = zt.__wbindgen_externrefs, r = c.grow(4);
    c.set(0, void 0), c.set(r + 0, void 0), c.set(r + 1, null), c.set(r + 2, true), c.set(r + 3, false);
  }
  function Bf(c) {
    const r = typeof c;
    if (r == "number" || r == "boolean" || c == null) return `${c}`;
    if (r == "string") return `"${c}"`;
    if (r == "symbol") {
      const h = c.description;
      return h == null ? "Symbol" : `Symbol(${h})`;
    }
    if (r == "function") {
      const h = c.name;
      return typeof h == "string" && h.length > 0 ? `Function(${h})` : "Function";
    }
    if (Array.isArray(c)) {
      const h = c.length;
      let _ = "[";
      h > 0 && (_ += Bf(c[0]));
      for (let E = 1; E < h; E++) _ += ", " + Bf(c[E]);
      return _ += "]", _;
    }
    const o = /\[object ([^\]]+)\]/.exec(toString.call(c));
    let s;
    if (o && o.length > 1) s = o[1];
    else return toString.call(c);
    if (s == "Object") try {
      return "Object(" + JSON.stringify(c) + ")";
    } catch {
      return "Object";
    }
    return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : s;
  }
  let Ya = null;
  function $d() {
    return (Ya === null || Ya.buffer.detached === true || Ya.buffer.detached === void 0 && Ya.buffer !== zt.memory.buffer) && (Ya = new DataView(zt.memory.buffer)), Ya;
  }
  function Rf(c, r) {
    return c = c >>> 0, qg(c, r);
  }
  let li = null;
  function ai() {
    return (li === null || li.byteLength === 0) && (li = new Uint8Array(zt.memory.buffer)), li;
  }
  function rm(c, r, o) {
    if (o === void 0) {
      const U = Rn.encode(c), T = r(U.length, 1) >>> 0;
      return ai().subarray(T, T + U.length).set(U), ui = U.length, T;
    }
    let s = c.length, h = r(s, 1) >>> 0;
    const _ = ai();
    let E = 0;
    for (; E < s; E++) {
      const U = c.charCodeAt(E);
      if (U > 127) break;
      _[h + E] = U;
    }
    if (E !== s) {
      E !== 0 && (c = c.slice(E)), h = o(h, s, s = E + c.length * 3, 1) >>> 0;
      const U = ai().subarray(h + E, h + s), T = Rn.encodeInto(c, U);
      E += T.written, h = o(h, s, E, 1) >>> 0;
    }
    return ui = E, h;
  }
  function Fd(c) {
    const r = zt.__wbindgen_externrefs.get(c);
    return zt.__externref_table_dealloc(c), r;
  }
  let ni = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ni.decode();
  const Rg = 2146435072;
  let Cf = 0;
  function qg(c, r) {
    return Cf += r, Cf >= Rg && (ni = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ni.decode(), Cf = r), ni.decode(ai().subarray(c, c + r));
  }
  const Rn = new TextEncoder();
  "encodeInto" in Rn || (Rn.encodeInto = function(c, r) {
    const o = Rn.encode(c);
    return r.set(o), {
      read: c.length,
      written: o.length
    };
  });
  let ui = 0, zt;
  function Gg(c) {
    zt = c;
  }
  URL = globalThis.URL;
  const Pe = await Sg({
    "./recipe-parser_bg.js": {
      __wbg_set_3f1d0b984ed272ed: Dg,
      __wbg_new_dca287b076112a51: Og,
      __wbg_new_3eb36ae241fe6f44: Mg,
      __wbg_new_361308b2356cecd0: Eg,
      __wbg_set_1eb0999cf5d27fc8: Ng,
      __wbg_set_f43e577aea94465b: Ug,
      __wbg___wbindgen_throw_be289d5034ed271b: Tg,
      __wbg_Error_8c4e43fe74559d73: zg,
      __wbg___wbindgen_is_string_cd444516edc5b180: Ag,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: xg,
      __wbindgen_init_externref_table: Hg,
      __wbindgen_cast_0000000000000001: Cg,
      __wbindgen_cast_0000000000000002: jg,
      __wbindgen_cast_0000000000000003: Bg
    }
  }, pg), Yg = Pe.memory, wg = Pe.parse, Xg = Pe.__wbindgen_malloc, Qg = Pe.__wbindgen_realloc, Vg = Pe.__wbindgen_externrefs, Zg = Pe.__externref_table_dealloc, dm = Pe.__wbindgen_start, Lg = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: Zg,
    __wbindgen_externrefs: Vg,
    __wbindgen_malloc: Xg,
    __wbindgen_realloc: Qg,
    __wbindgen_start: dm,
    memory: Yg,
    parse: wg
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Gg(Lg);
  dm();
  const mm = (...c) => c.filter((r, o, s) => !!r && r.trim() !== "" && s.indexOf(r) === o).join(" ").trim();
  const Kg = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const Jg = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, o, s) => s ? s.toUpperCase() : o.toLowerCase());
  const Id = (c) => {
    const r = Jg(c);
    return r.charAt(0).toUpperCase() + r.slice(1);
  };
  var kg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const Wg = (c) => {
    for (const r in c) if (r.startsWith("aria-") || r === "role" || r === "title") return true;
    return false;
  };
  const $g = rl.forwardRef(({ color: c = "currentColor", size: r = 24, strokeWidth: o = 2, absoluteStrokeWidth: s, className: h = "", children: _, iconNode: E, ...U }, T) => rl.createElement("svg", {
    ref: T,
    ...kg,
    width: r,
    height: r,
    stroke: c,
    strokeWidth: s ? Number(o) * 24 / Number(r) : o,
    className: mm("lucide", h),
    ...!_ && !Wg(U) && {
      "aria-hidden": "true"
    },
    ...U
  }, [
    ...E.map(([p, R]) => rl.createElement(p, R)),
    ...Array.isArray(_) ? _ : [
      _
    ]
  ]));
  const fi = (c, r) => {
    const o = rl.forwardRef(({ className: s, ...h }, _) => rl.createElement($g, {
      ref: _,
      iconNode: r,
      className: mm(`lucide-${Kg(Id(c))}`, `lucide-${c}`, s),
      ...h
    }));
    return o.displayName = Id(c), o;
  };
  const Fg = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
      }
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
      }
    ]
  ], Ig = fi("copy", Fg);
  const Pg = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
      }
    ],
    [
      "path",
      {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
      }
    ]
  ], ly = fi("github", Pg);
  const ty = [
    [
      "circle",
      {
        cx: "18",
        cy: "5",
        r: "3",
        key: "gq8acd"
      }
    ],
    [
      "circle",
      {
        cx: "6",
        cy: "12",
        r: "3",
        key: "w7nqdw"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "19",
        r: "3",
        key: "1xt0gg"
      }
    ],
    [
      "line",
      {
        x1: "8.59",
        x2: "15.42",
        y1: "13.51",
        y2: "17.49",
        key: "47mynk"
      }
    ],
    [
      "line",
      {
        x1: "15.41",
        x2: "8.59",
        y1: "6.51",
        y2: "10.49",
        key: "1n3mei"
      }
    ]
  ], ey = fi("share-2", ty);
  const ay = [
    [
      "path",
      {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
        key: "miytrc"
      }
    ],
    [
      "path",
      {
        d: "M3 6h18",
        key: "d0wm0j"
      }
    ],
    [
      "path",
      {
        d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
        key: "e791ji"
      }
    ]
  ], ny = fi("trash", ay);
  function hm(c) {
    var r, o, s = "";
    if (typeof c == "string" || typeof c == "number") s += c;
    else if (typeof c == "object") if (Array.isArray(c)) {
      var h = c.length;
      for (r = 0; r < h; r++) c[r] && (o = hm(c[r])) && (s && (s += " "), s += o);
    } else for (o in c) c[o] && (s && (s += " "), s += o);
    return s;
  }
  function qf() {
    for (var c, r, o = 0, s = "", h = arguments.length; o < h; o++) (c = arguments[o]) && (r = hm(c)) && (s && (s += " "), s += r);
    return s;
  }
  const uy = (c, r) => {
    const o = new Array(c.length + r.length);
    for (let s = 0; s < c.length; s++) o[s] = c[s];
    for (let s = 0; s < r.length; s++) o[c.length + s] = r[s];
    return o;
  }, iy = (c, r) => ({
    classGroupId: c,
    validator: r
  }), gm = (c = /* @__PURE__ */ new Map(), r = null, o) => ({
    nextPart: c,
    validators: r,
    classGroupId: o
  }), ii = "-", Pd = [], cy = "arbitrary..", fy = (c) => {
    const r = oy(c), { conflictingClassGroups: o, conflictingClassGroupModifiers: s } = c;
    return {
      getClassGroupId: (E) => {
        if (E.startsWith("[") && E.endsWith("]")) return sy(E);
        const U = E.split(ii), T = U[0] === "" && U.length > 1 ? 1 : 0;
        return ym(U, T, r);
      },
      getConflictingClassGroupIds: (E, U) => {
        if (U) {
          const T = s[E], p = o[E];
          return T ? p ? uy(p, T) : T : p || Pd;
        }
        return o[E] || Pd;
      }
    };
  }, ym = (c, r, o) => {
    if (c.length - r === 0) return o.classGroupId;
    const h = c[r], _ = o.nextPart.get(h);
    if (_) {
      const p = ym(c, r + 1, _);
      if (p) return p;
    }
    const E = o.validators;
    if (E === null) return;
    const U = r === 0 ? c.join(ii) : c.slice(r).join(ii), T = E.length;
    for (let p = 0; p < T; p++) {
      const R = E[p];
      if (R.validator(U)) return R.classGroupId;
    }
  }, sy = (c) => c.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const r = c.slice(1, -1), o = r.indexOf(":"), s = r.slice(0, o);
    return s ? cy + s : void 0;
  })(), oy = (c) => {
    const { theme: r, classGroups: o } = c;
    return ry(o, r);
  }, ry = (c, r) => {
    const o = gm();
    for (const s in c) {
      const h = c[s];
      Gf(h, o, s, r);
    }
    return o;
  }, Gf = (c, r, o, s) => {
    const h = c.length;
    for (let _ = 0; _ < h; _++) {
      const E = c[_];
      dy(E, r, o, s);
    }
  }, dy = (c, r, o, s) => {
    if (typeof c == "string") {
      my(c, r, o);
      return;
    }
    if (typeof c == "function") {
      hy(c, r, o, s);
      return;
    }
    gy(c, r, o, s);
  }, my = (c, r, o) => {
    const s = c === "" ? r : vm(r, c);
    s.classGroupId = o;
  }, hy = (c, r, o, s) => {
    if (yy(c)) {
      Gf(c(s), r, o, s);
      return;
    }
    r.validators === null && (r.validators = []), r.validators.push(iy(o, c));
  }, gy = (c, r, o, s) => {
    const h = Object.entries(c), _ = h.length;
    for (let E = 0; E < _; E++) {
      const [U, T] = h[E];
      Gf(T, vm(r, U), o, s);
    }
  }, vm = (c, r) => {
    let o = c;
    const s = r.split(ii), h = s.length;
    for (let _ = 0; _ < h; _++) {
      const E = s[_];
      let U = o.nextPart.get(E);
      U || (U = gm(), o.nextPart.set(E, U)), o = U;
    }
    return o;
  }, yy = (c) => "isThemeGetter" in c && c.isThemeGetter === true, vy = (c) => {
    if (c < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let r = 0, o = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
    const h = (_, E) => {
      o[_] = E, r++, r > c && (r = 0, s = o, o = /* @__PURE__ */ Object.create(null));
    };
    return {
      get(_) {
        let E = o[_];
        if (E !== void 0) return E;
        if ((E = s[_]) !== void 0) return h(_, E), E;
      },
      set(_, E) {
        _ in o ? o[_] = E : h(_, E);
      }
    };
  }, Hf = "!", lm = ":", by = [], tm = (c, r, o, s, h) => ({
    modifiers: c,
    hasImportantModifier: r,
    baseClassName: o,
    maybePostfixModifierPosition: s,
    isExternal: h
  }), py = (c) => {
    const { prefix: r, experimentalParseClassName: o } = c;
    let s = (h) => {
      const _ = [];
      let E = 0, U = 0, T = 0, p;
      const R = h.length;
      for (let fl = 0; fl < R; fl++) {
        const hl = h[fl];
        if (E === 0 && U === 0) {
          if (hl === lm) {
            _.push(h.slice(T, fl)), T = fl + 1;
            continue;
          }
          if (hl === "/") {
            p = fl;
            continue;
          }
        }
        hl === "[" ? E++ : hl === "]" ? E-- : hl === "(" ? U++ : hl === ")" && U--;
      }
      const C = _.length === 0 ? h : h.slice(T);
      let Z = C, pl = false;
      C.endsWith(Hf) ? (Z = C.slice(0, -1), pl = true) : C.startsWith(Hf) && (Z = C.slice(1), pl = true);
      const Sl = p && p > T ? p - T : void 0;
      return tm(_, pl, Z, Sl);
    };
    if (r) {
      const h = r + lm, _ = s;
      s = (E) => E.startsWith(h) ? _(E.slice(h.length)) : tm(by, false, E, void 0, true);
    }
    if (o) {
      const h = s;
      s = (_) => o({
        className: _,
        parseClassName: h
      });
    }
    return s;
  }, Sy = (c) => {
    const r = /* @__PURE__ */ new Map();
    return c.orderSensitiveModifiers.forEach((o, s) => {
      r.set(o, 1e6 + s);
    }), (o) => {
      const s = [];
      let h = [];
      for (let _ = 0; _ < o.length; _++) {
        const E = o[_], U = E[0] === "[", T = r.has(E);
        U || T ? (h.length > 0 && (h.sort(), s.push(...h), h = []), s.push(E)) : h.push(E);
      }
      return h.length > 0 && (h.sort(), s.push(...h)), s;
    };
  }, _y = (c) => ({
    cache: vy(c.cacheSize),
    parseClassName: py(c),
    sortModifiers: Sy(c),
    ...fy(c)
  }), zy = /\s+/, xy = (c, r) => {
    const { parseClassName: o, getClassGroupId: s, getConflictingClassGroupIds: h, sortModifiers: _ } = r, E = [], U = c.trim().split(zy);
    let T = "";
    for (let p = U.length - 1; p >= 0; p -= 1) {
      const R = U[p], { isExternal: C, modifiers: Z, hasImportantModifier: pl, baseClassName: Sl, maybePostfixModifierPosition: fl } = o(R);
      if (C) {
        T = R + (T.length > 0 ? " " + T : T);
        continue;
      }
      let hl = !!fl, Jl = s(hl ? Sl.substring(0, fl) : Sl);
      if (!Jl) {
        if (!hl) {
          T = R + (T.length > 0 ? " " + T : T);
          continue;
        }
        if (Jl = s(Sl), !Jl) {
          T = R + (T.length > 0 ? " " + T : T);
          continue;
        }
        hl = false;
      }
      const Ot = Z.length === 0 ? "" : Z.length === 1 ? Z[0] : _(Z).join(":"), Nl = pl ? Ot + Hf : Ot, Vl = Nl + Jl;
      if (E.indexOf(Vl) > -1) continue;
      E.push(Vl);
      const kl = h(Jl, hl);
      for (let Dl = 0; Dl < kl.length; ++Dl) {
        const Zl = kl[Dl];
        E.push(Nl + Zl);
      }
      T = R + (T.length > 0 ? " " + T : T);
    }
    return T;
  }, Ay = (...c) => {
    let r = 0, o, s, h = "";
    for (; r < c.length; ) (o = c[r++]) && (s = bm(o)) && (h && (h += " "), h += s);
    return h;
  }, bm = (c) => {
    if (typeof c == "string") return c;
    let r, o = "";
    for (let s = 0; s < c.length; s++) c[s] && (r = bm(c[s])) && (o && (o += " "), o += r);
    return o;
  }, Ty = (c, ...r) => {
    let o, s, h, _;
    const E = (T) => {
      const p = r.reduce((R, C) => C(R), c());
      return o = _y(p), s = o.cache.get, h = o.cache.set, _ = U, U(T);
    }, U = (T) => {
      const p = s(T);
      if (p) return p;
      const R = xy(T, o);
      return h(T, R), R;
    };
    return _ = E, (...T) => _(Ay(...T));
  }, Ey = [], Ol = (c) => {
    const r = (o) => o[c] || Ey;
    return r.isThemeGetter = true, r;
  }, pm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, My = /^\d+\/\d+$/, Oy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ny = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Uy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wa = (c) => My.test(c), L = (c) => !!c && !Number.isNaN(Number(c)), Oe = (c) => !!c && Number.isInteger(Number(c)), jf = (c) => c.endsWith("%") && L(c.slice(0, -1)), Pt = (c) => Oy.test(c), _m = () => true, jy = (c) => Ny.test(c) && !Dy.test(c), Yf = () => false, By = (c) => Uy.test(c), Hy = (c) => Cy.test(c), Ry = (c) => !B(c) && !H(c), qy = (c) => Ne(c, Am, Yf), B = (c) => pm.test(c), Ie = (c) => Ne(c, Tm, jy), em = (c) => Ne(c, Ly, L), Gy = (c) => Ne(c, Mm, _m), Yy = (c) => Ne(c, Em, Yf), am = (c) => Ne(c, zm, Yf), wy = (c) => Ne(c, xm, Hy), ti = (c) => Ne(c, Om, By), H = (c) => Sm.test(c), Hn = (c) => la(c, Tm), Xy = (c) => la(c, Em), nm = (c) => la(c, zm), Qy = (c) => la(c, Am), Vy = (c) => la(c, xm), ei = (c) => la(c, Om, true), Zy = (c) => la(c, Mm, true), Ne = (c, r, o) => {
    const s = pm.exec(c);
    return s ? s[1] ? r(s[1]) : o(s[2]) : false;
  }, la = (c, r, o = false) => {
    const s = Sm.exec(c);
    return s ? s[1] ? r(s[1]) : o : false;
  }, zm = (c) => c === "position" || c === "percentage", xm = (c) => c === "image" || c === "url", Am = (c) => c === "length" || c === "size" || c === "bg-size", Tm = (c) => c === "length", Ly = (c) => c === "number", Em = (c) => c === "family-name", Mm = (c) => c === "number" || c === "weight", Om = (c) => c === "shadow", Ky = () => {
    const c = Ol("color"), r = Ol("font"), o = Ol("text"), s = Ol("font-weight"), h = Ol("tracking"), _ = Ol("leading"), E = Ol("breakpoint"), U = Ol("container"), T = Ol("spacing"), p = Ol("radius"), R = Ol("shadow"), C = Ol("inset-shadow"), Z = Ol("text-shadow"), pl = Ol("drop-shadow"), Sl = Ol("blur"), fl = Ol("perspective"), hl = Ol("aspect"), Jl = Ol("ease"), Ot = Ol("animate"), Nl = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], Vl = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "left-top",
      "top-right",
      "right-top",
      "bottom-right",
      "right-bottom",
      "bottom-left",
      "left-bottom"
    ], kl = () => [
      ...Vl(),
      H,
      B
    ], Dl = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], Zl = () => [
      "auto",
      "contain",
      "none"
    ], Y = () => [
      H,
      B,
      T
    ], wl = () => [
      wa,
      "full",
      "auto",
      ...Y()
    ], De = () => [
      Oe,
      "none",
      "subgrid",
      H,
      B
    ], jt = () => [
      "auto",
      {
        span: [
          "full",
          Oe,
          H,
          B
        ]
      },
      Oe,
      H,
      B
    ], Bl = () => [
      Oe,
      "auto",
      H,
      B
    ], Ue = () => [
      "auto",
      "min",
      "max",
      "fr",
      H,
      B
    ], Bt = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
      "baseline",
      "center-safe",
      "end-safe"
    ], Xl = () => [
      "start",
      "end",
      "center",
      "stretch",
      "center-safe",
      "end-safe"
    ], x = () => [
      "auto",
      ...Y()
    ], D = () => [
      wa,
      "auto",
      "full",
      "dvw",
      "dvh",
      "lvw",
      "lvh",
      "svw",
      "svh",
      "min",
      "max",
      "fit",
      ...Y()
    ], O = () => [
      c,
      H,
      B
    ], al = () => [
      ...Vl(),
      nm,
      am,
      {
        position: [
          H,
          B
        ]
      }
    ], nl = () => [
      "no-repeat",
      {
        repeat: [
          "",
          "x",
          "y",
          "space",
          "round"
        ]
      }
    ], Ul = () => [
      "auto",
      "cover",
      "contain",
      Qy,
      qy,
      {
        size: [
          H,
          B
        ]
      }
    ], sl = () => [
      jf,
      Hn,
      Ie
    ], X = () => [
      "",
      "none",
      "full",
      p,
      H,
      B
    ], F = () => [
      "",
      L,
      Hn,
      Ie
    ], Ll = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ], xt = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], yl = () => [
      L,
      jf,
      nm,
      am
    ], Ce = () => [
      "",
      "none",
      Sl,
      H,
      B
    ], At = () => [
      "none",
      L,
      H,
      B
    ], le = () => [
      "none",
      L,
      H,
      B
    ], te = () => [
      L,
      H,
      B
    ], ee = () => [
      wa,
      "full",
      ...Y()
    ];
    return {
      cacheSize: 500,
      theme: {
        animate: [
          "spin",
          "ping",
          "pulse",
          "bounce"
        ],
        aspect: [
          "video"
        ],
        blur: [
          Pt
        ],
        breakpoint: [
          Pt
        ],
        color: [
          _m
        ],
        container: [
          Pt
        ],
        "drop-shadow": [
          Pt
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          Ry
        ],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [
          Pt
        ],
        leading: [
          "none",
          "tight",
          "snug",
          "normal",
          "relaxed",
          "loose"
        ],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [
          Pt
        ],
        shadow: [
          Pt
        ],
        spacing: [
          "px",
          L
        ],
        text: [
          Pt
        ],
        "text-shadow": [
          Pt
        ],
        tracking: [
          "tighter",
          "tight",
          "normal",
          "wide",
          "wider",
          "widest"
        ]
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              wa,
              B,
              H,
              hl
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              L,
              B,
              H,
              U
            ]
          }
        ],
        "break-after": [
          {
            "break-after": Nl()
          }
        ],
        "break-before": [
          {
            "break-before": Nl()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: kl()
          }
        ],
        overflow: [
          {
            overflow: Dl()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": Dl()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": Dl()
          }
        ],
        overscroll: [
          {
            overscroll: Zl()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": Zl()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": Zl()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: wl()
          }
        ],
        "inset-x": [
          {
            "inset-x": wl()
          }
        ],
        "inset-y": [
          {
            "inset-y": wl()
          }
        ],
        start: [
          {
            start: wl()
          }
        ],
        end: [
          {
            end: wl()
          }
        ],
        top: [
          {
            top: wl()
          }
        ],
        right: [
          {
            right: wl()
          }
        ],
        bottom: [
          {
            bottom: wl()
          }
        ],
        left: [
          {
            left: wl()
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              Oe,
              "auto",
              H,
              B
            ]
          }
        ],
        basis: [
          {
            basis: [
              wa,
              "full",
              "auto",
              U,
              ...Y()
            ]
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          }
        ],
        flex: [
          {
            flex: [
              L,
              wa,
              "auto",
              "initial",
              "none",
              B
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              L,
              H,
              B
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              L,
              H,
              B
            ]
          }
        ],
        order: [
          {
            order: [
              Oe,
              "first",
              "last",
              "none",
              H,
              B
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": De()
          }
        ],
        "col-start-end": [
          {
            col: jt()
          }
        ],
        "col-start": [
          {
            "col-start": Bl()
          }
        ],
        "col-end": [
          {
            "col-end": Bl()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": De()
          }
        ],
        "row-start-end": [
          {
            row: jt()
          }
        ],
        "row-start": [
          {
            "row-start": Bl()
          }
        ],
        "row-end": [
          {
            "row-end": Bl()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": Ue()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": Ue()
          }
        ],
        gap: [
          {
            gap: Y()
          }
        ],
        "gap-x": [
          {
            "gap-x": Y()
          }
        ],
        "gap-y": [
          {
            "gap-y": Y()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...Bt(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...Xl(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...Xl()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...Bt()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...Xl(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...Xl(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "place-content": [
          {
            "place-content": Bt()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...Xl(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...Xl()
            ]
          }
        ],
        p: [
          {
            p: Y()
          }
        ],
        px: [
          {
            px: Y()
          }
        ],
        py: [
          {
            py: Y()
          }
        ],
        ps: [
          {
            ps: Y()
          }
        ],
        pe: [
          {
            pe: Y()
          }
        ],
        pt: [
          {
            pt: Y()
          }
        ],
        pr: [
          {
            pr: Y()
          }
        ],
        pb: [
          {
            pb: Y()
          }
        ],
        pl: [
          {
            pl: Y()
          }
        ],
        m: [
          {
            m: x()
          }
        ],
        mx: [
          {
            mx: x()
          }
        ],
        my: [
          {
            my: x()
          }
        ],
        ms: [
          {
            ms: x()
          }
        ],
        me: [
          {
            me: x()
          }
        ],
        mt: [
          {
            mt: x()
          }
        ],
        mr: [
          {
            mr: x()
          }
        ],
        mb: [
          {
            mb: x()
          }
        ],
        ml: [
          {
            ml: x()
          }
        ],
        "space-x": [
          {
            "space-x": Y()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": Y()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: D()
          }
        ],
        w: [
          {
            w: [
              U,
              "screen",
              ...D()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              U,
              "screen",
              "none",
              ...D()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              U,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  E
                ]
              },
              ...D()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              "lh",
              ...D()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "lh",
              "none",
              ...D()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              "lh",
              ...D()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              o,
              Hn,
              Ie
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              s,
              Zy,
              Gy
            ]
          }
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              jf,
              B
            ]
          }
        ],
        "font-family": [
          {
            font: [
              Xy,
              Yy,
              r
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              h,
              H,
              B
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              L,
              "none",
              H,
              em
            ]
          }
        ],
        leading: [
          {
            leading: [
              _,
              ...Y()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              H,
              B
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              H,
              B
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: O()
          }
        ],
        "text-color": [
          {
            text: O()
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...Ll(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              L,
              "from-font",
              "auto",
              H,
              Ie
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: O()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              L,
              "auto",
              H,
              B
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: Y()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              H,
              B
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        wrap: [
          {
            wrap: [
              "break-word",
              "anywhere",
              "normal"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              H,
              B
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: al()
          }
        ],
        "bg-repeat": [
          {
            bg: nl()
          }
        ],
        "bg-size": [
          {
            bg: Ul()
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: [
                      "t",
                      "tr",
                      "r",
                      "br",
                      "b",
                      "bl",
                      "l",
                      "tl"
                    ]
                  },
                  Oe,
                  H,
                  B
                ],
                radial: [
                  "",
                  H,
                  B
                ],
                conic: [
                  Oe,
                  H,
                  B
                ]
              },
              Vy,
              wy
            ]
          }
        ],
        "bg-color": [
          {
            bg: O()
          }
        ],
        "gradient-from-pos": [
          {
            from: sl()
          }
        ],
        "gradient-via-pos": [
          {
            via: sl()
          }
        ],
        "gradient-to-pos": [
          {
            to: sl()
          }
        ],
        "gradient-from": [
          {
            from: O()
          }
        ],
        "gradient-via": [
          {
            via: O()
          }
        ],
        "gradient-to": [
          {
            to: O()
          }
        ],
        rounded: [
          {
            rounded: X()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": X()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": X()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": X()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": X()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": X()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": X()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": X()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": X()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": X()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": X()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": X()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": X()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": X()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": X()
          }
        ],
        "border-w": [
          {
            border: F()
          }
        ],
        "border-w-x": [
          {
            "border-x": F()
          }
        ],
        "border-w-y": [
          {
            "border-y": F()
          }
        ],
        "border-w-s": [
          {
            "border-s": F()
          }
        ],
        "border-w-e": [
          {
            "border-e": F()
          }
        ],
        "border-w-t": [
          {
            "border-t": F()
          }
        ],
        "border-w-r": [
          {
            "border-r": F()
          }
        ],
        "border-w-b": [
          {
            "border-b": F()
          }
        ],
        "border-w-l": [
          {
            "border-l": F()
          }
        ],
        "divide-x": [
          {
            "divide-x": F()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": F()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...Ll(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...Ll(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: O()
          }
        ],
        "border-color-x": [
          {
            "border-x": O()
          }
        ],
        "border-color-y": [
          {
            "border-y": O()
          }
        ],
        "border-color-s": [
          {
            "border-s": O()
          }
        ],
        "border-color-e": [
          {
            "border-e": O()
          }
        ],
        "border-color-t": [
          {
            "border-t": O()
          }
        ],
        "border-color-r": [
          {
            "border-r": O()
          }
        ],
        "border-color-b": [
          {
            "border-b": O()
          }
        ],
        "border-color-l": [
          {
            "border-l": O()
          }
        ],
        "divide-color": [
          {
            divide: O()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...Ll(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              L,
              H,
              B
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              L,
              Hn,
              Ie
            ]
          }
        ],
        "outline-color": [
          {
            outline: O()
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              R,
              ei,
              ti
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: O()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              C,
              ei,
              ti
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": O()
          }
        ],
        "ring-w": [
          {
            ring: F()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: O()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              L,
              Ie
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": O()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": F()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": O()
          }
        ],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              Z,
              ei,
              ti
            ]
          }
        ],
        "text-shadow-color": [
          {
            "text-shadow": O()
          }
        ],
        opacity: [
          {
            opacity: [
              L,
              H,
              B
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...xt(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": xt()
          }
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          {
            mask: [
              "add",
              "subtract",
              "intersect",
              "exclude"
            ]
          }
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [
              L
            ]
          }
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": yl()
          }
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": yl()
          }
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": O()
          }
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": O()
          }
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": yl()
          }
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": yl()
          }
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": O()
          }
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": O()
          }
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": yl()
          }
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": yl()
          }
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": O()
          }
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": O()
          }
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": yl()
          }
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": yl()
          }
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": O()
          }
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": O()
          }
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": yl()
          }
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": yl()
          }
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": O()
          }
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": O()
          }
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": yl()
          }
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": yl()
          }
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": O()
          }
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": O()
          }
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": yl()
          }
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": yl()
          }
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": O()
          }
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": O()
          }
        ],
        "mask-image-radial": [
          {
            "mask-radial": [
              H,
              B
            ]
          }
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": yl()
          }
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": yl()
          }
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": O()
          }
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": O()
          }
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": [
              "circle",
              "ellipse"
            ]
          }
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: [
                  "side",
                  "corner"
                ],
                farthest: [
                  "side",
                  "corner"
                ]
              }
            ]
          }
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": Vl()
          }
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [
              L
            ]
          }
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": yl()
          }
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": yl()
          }
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": O()
          }
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": O()
          }
        ],
        "mask-mode": [
          {
            mask: [
              "alpha",
              "luminance",
              "match"
            ]
          }
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [
          {
            mask: al()
          }
        ],
        "mask-repeat": [
          {
            mask: nl()
          }
        ],
        "mask-size": [
          {
            mask: Ul()
          }
        ],
        "mask-type": [
          {
            "mask-type": [
              "alpha",
              "luminance"
            ]
          }
        ],
        "mask-image": [
          {
            mask: [
              "none",
              H,
              B
            ]
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              H,
              B
            ]
          }
        ],
        blur: [
          {
            blur: Ce()
          }
        ],
        brightness: [
          {
            brightness: [
              L,
              H,
              B
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              L,
              H,
              B
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              pl,
              ei,
              ti
            ]
          }
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": O()
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              L,
              H,
              B
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              L,
              H,
              B
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              L,
              H,
              B
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              L,
              H,
              B
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              H,
              B
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": Ce()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              L,
              H,
              B
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              L,
              H,
              B
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": Y()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": Y()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": Y()
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              H,
              B
            ]
          }
        ],
        "transition-behavior": [
          {
            transition: [
              "normal",
              "discrete"
            ]
          }
        ],
        duration: [
          {
            duration: [
              L,
              "initial",
              H,
              B
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              Jl,
              H,
              B
            ]
          }
        ],
        delay: [
          {
            delay: [
              L,
              H,
              B
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              Ot,
              H,
              B
            ]
          }
        ],
        backface: [
          {
            backface: [
              "hidden",
              "visible"
            ]
          }
        ],
        perspective: [
          {
            perspective: [
              fl,
              H,
              B
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": kl()
          }
        ],
        rotate: [
          {
            rotate: At()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": At()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": At()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": At()
          }
        ],
        scale: [
          {
            scale: le()
          }
        ],
        "scale-x": [
          {
            "scale-x": le()
          }
        ],
        "scale-y": [
          {
            "scale-y": le()
          }
        ],
        "scale-z": [
          {
            "scale-z": le()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: te()
          }
        ],
        "skew-x": [
          {
            "skew-x": te()
          }
        ],
        "skew-y": [
          {
            "skew-y": te()
          }
        ],
        transform: [
          {
            transform: [
              H,
              B,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: kl()
          }
        ],
        "transform-style": [
          {
            transform: [
              "3d",
              "flat"
            ]
          }
        ],
        translate: [
          {
            translate: ee()
          }
        ],
        "translate-x": [
          {
            "translate-x": ee()
          }
        ],
        "translate-y": [
          {
            "translate-y": ee()
          }
        ],
        "translate-z": [
          {
            "translate-z": ee()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: O()
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        "caret-color": [
          {
            caret: O()
          }
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              H,
              B
            ]
          }
        ],
        "field-sizing": [
          {
            "field-sizing": [
              "fixed",
              "content"
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "auto",
              "none"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "",
              "y",
              "x"
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": Y()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": Y()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": Y()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": Y()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": Y()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": Y()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": Y()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": Y()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": Y()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": Y()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": Y()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": Y()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": Y()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": Y()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": Y()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": Y()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": Y()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": Y()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              H,
              B
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...O()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              L,
              Hn,
              Ie,
              em
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...O()
            ]
          }
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        translate: [
          "translate-x",
          "translate-y",
          "translate-none"
        ],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  }, Nm = Ty(Ky), Dm = (c, r) => c && r ? `${c} ${r}` : c || r || "at will";
  function si(...c) {
    return Nm(qf(c));
  }
  function Um(c) {
    return c.map((r) => r.split(`
`).map((o) => o.trim()).join(`
`)).join("");
  }
  function Jy({ quantity: c, unit: r, children: o, className: s }) {
    return N.jsx("span", {
      tabIndex: 0,
      title: Dm(c, r),
      className: si("recp--ingredient bg-fuchsia-100 dark:bg-fuchsia-800 mb-1", s),
      children: o
    });
  }
  function ky({ children: c }) {
    return N.jsx("span", {
      className: "mb-1",
      children: c
    });
  }
  function Cm({ quantity: c, unit: r, children: o, className: s, baseUrl: h, path: _, tag: E = "a" }) {
    let U = new URL(_, h);
    return N.jsx(E, {
      tabIndex: 0,
      href: U.toString(),
      title: Dm(c, r),
      className: si("recp--reciperef text-link hover:text-link/90", s),
      target: "_blank noopener noreferrer",
      children: o
    });
  }
  function Wy({ children: c, className: r }) {
    return N.jsx("span", {
      className: si("recp--material bg-yellow-100 dark:bg-yellow-800 mb-1", r),
      children: c
    });
  }
  function $y({ children: c, className: r }) {
    return N.jsx("span", {
      className: si("recp--timer bg-orange-100 dark:bg-orange-800 mb-1", r),
      children: c
    });
  }
  const Fy = ({ children: c }) => N.jsx(N.Fragment, {
    children: c
  });
  function Iy({ tokens: c, RecipeRefResolver: r = Fy, baseUrl: o }) {
    const s = (c == null ? void 0 : c.findIndex((h) => h.token !== "Metadata" && h.token !== "Space")) || 0;
    return N.jsx("div", {
      className: "recipe-content whitespace-pre text-wrap",
      children: c.slice(s).map((h, _) => {
        switch (h.token) {
          case "Space":
            return h.content;
          case "Word":
            return N.jsx(ky, {
              children: h.content
            }, _);
          case "Ingredient":
            return N.jsx(Jy, {
              quantity: h.content.quantity,
              unit: h.content.unit,
              children: h.content.name
            }, _);
          case "RecipeRef":
            return N.jsx(Cm, {
              quantity: h.content.quantity,
              unit: h.content.unit,
              path: h.content.name,
              baseUrl: o,
              children: N.jsx(r, {
                children: h.content.name
              })
            }, _);
          case "Material":
            return N.jsx(Wy, {
              children: h.content
            }, _);
          case "Timer":
            return N.jsx($y, {
              children: h.content
            }, _);
        }
      })
    });
  }
  const um = (c) => typeof c == "boolean" ? `${c}` : c === 0 ? "0" : c, im = qf, jm = (c, r) => (o) => {
    var s;
    if ((r == null ? void 0 : r.variants) == null) return im(c, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
    const { variants: h, defaultVariants: _ } = r, E = Object.keys(h).map((p) => {
      const R = o == null ? void 0 : o[p], C = _ == null ? void 0 : _[p];
      if (R === null) return null;
      const Z = um(R) || um(C);
      return h[p][Z];
    }), U = o && Object.entries(o).reduce((p, R) => {
      let [C, Z] = R;
      return Z === void 0 || (p[C] = Z), p;
    }, {}), T = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((p, R) => {
      let { class: C, className: Z, ...pl } = R;
      return Object.entries(pl).every((Sl) => {
        let [fl, hl] = Sl;
        return Array.isArray(hl) ? hl.includes({
          ..._,
          ...U
        }[fl]) : {
          ..._,
          ...U
        }[fl] === hl;
      }) ? [
        ...p,
        C,
        Z
      ] : p;
    }, []);
    return im(c, E, T, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  };
  function wf(...c) {
    return Nm(qf(c));
  }
  const Py = jm("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });
  function lv({ className: c, variant: r, ...o }) {
    return N.jsx("div", {
      className: wf(Py({
        variant: r
      }), c),
      ...o
    });
  }
  const tv = ({ recipe: c }) => {
    const r = (o) => {
      const h = {
        share: btoa(c)
      }, _ = new URLSearchParams(h);
      window.location.search = _.toString();
    };
    return N.jsx("button", {
      type: "button",
      onClick: r,
      className: "rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-300 p-1",
      title: "Share the recipe",
      children: N.jsx(ey, {
        size: 16
      })
    });
  }, cm = "https://reciperium.com";
  function ev({ parsedRecipe: c, rawRecipe: r }) {
    var _a, _b, _c, _d, _e, _f, _g2;
    const o = ((_b = (_a = c.metadata) == null ? void 0 : _a.get("tags")) == null ? void 0 : _b.split(",").filter((s) => !!s)) || [];
    return N.jsxs("div", {
      className: "relative rounded-md border bg-muted p-6 border-slate-400 dark:border-slate-500 shadow-lg hover:shadow-xl transition duration-400",
      children: [
        N.jsx("div", {
          className: "absolute top-0 right-0 pt-3 pr-3",
          children: N.jsx(tv, {
            recipe: r
          })
        }),
        N.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 md:gap-4",
          children: [
            ((_c = c.ingredients) == null ? void 0 : _c.length) > 0 || ((_d = c.recipes_refs) == null ? void 0 : _d.length) > 0 ? N.jsxs("div", {
              className: "pb-4",
              children: [
                N.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Ingredients"
                }),
                N.jsxs("ul", {
                  className: "mt-2 mb-6 list-disc list-inside",
                  children: [
                    c.ingredients.map((s) => N.jsxs("li", {
                      className: "mb-2 text-left antialiased",
                      children: [
                        N.jsxs("span", {
                          children: [
                            s.quantity,
                            " ",
                            s.unit
                          ]
                        }),
                        " ",
                        s.name,
                        " "
                      ]
                    }, s.name)),
                    c.recipes_refs.map((s) => N.jsxs("li", {
                      className: "mb-2 text-left antialiased",
                      children: [
                        N.jsxs("span", {
                          children: [
                            s.quantity,
                            " ",
                            s.unit
                          ]
                        }),
                        " ",
                        N.jsx(Cm, {
                          baseUrl: cm,
                          path: s.name,
                          children: s.name
                        })
                      ]
                    }, s.name))
                  ]
                })
              ]
            }) : null,
            ((_e = c.materials) == null ? void 0 : _e.length) > 0 ? N.jsxs("div", {
              children: [
                N.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Materials"
                }),
                N.jsx("ul", {
                  className: "mt-2 mb-6 list-disc list-inside",
                  children: (_f = c.materials) == null ? void 0 : _f.map((s) => N.jsx("li", {
                    className: "mb-2 text-left antialiased",
                    children: s.name
                  }, s.name))
                })
              ]
            }) : null
          ]
        }),
        ((_g2 = c.tokens) == null ? void 0 : _g2.length) > 0 && N.jsxs("div", {
          className: "recipe-content whitespace-pre text-wrap",
          children: [
            N.jsx("h2", {
              className: "text-lg font-semibold mb-2 ",
              children: "Instructions"
            }),
            N.jsx(Iy, {
              tokens: c.tokens,
              baseUrl: cm
            })
          ]
        }),
        N.jsx("div", {
          className: "flex flex-wrap gap-2 pt-12",
          children: o.map((s) => N.jsx(lv, {
            children: N.jsx("a", {
              href: `https://www.reciperium.com/recipes?search=${s}`,
              target: "_blank",
              className: "after:content-['_\u2197']",
              children: s
            })
          }, s))
        })
      ]
    });
  }
  var av = (c) => {
    var { theme: r, settings: o = {}, styles: s = [] } = c, h = {
      ".cm-gutters": {}
    }, _ = {};
    o.background && (_.backgroundColor = o.background), o.backgroundImage && (_.backgroundImage = o.backgroundImage), o.foreground && (_.color = o.foreground), o.fontSize && (_.fontSize = o.fontSize), (o.background || o.foreground) && (h["&"] = _), o.fontFamily && (h["&.cm-editor .cm-scroller"] = {
      fontFamily: o.fontFamily
    }), o.gutterBackground && (h[".cm-gutters"].backgroundColor = o.gutterBackground), o.gutterForeground && (h[".cm-gutters"].color = o.gutterForeground), o.gutterBorder && (h[".cm-gutters"].borderRightColor = o.gutterBorder), o.caret && (h[".cm-content"] = {
      caretColor: o.caret
    }, h[".cm-cursor, .cm-dropCursor"] = {
      borderLeftColor: o.caret
    });
    var E = {};
    o.gutterActiveForeground && (E.color = o.gutterActiveForeground), o.lineHighlight && (h[".cm-activeLine"] = {
      backgroundColor: o.lineHighlight
    }, E.backgroundColor = o.lineHighlight), h[".cm-activeLineGutter"] = E, o.selection && (h["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"] = {
      background: o.selection + " !important"
    }), o.selectionMatch && (h["& .cm-selectionMatch"] = {
      backgroundColor: o.selectionMatch
    });
    var U = om.theme(h, {
      dark: r === "dark"
    }), T = ug.define(s), p = [
      U,
      ig(T)
    ];
    return p;
  };
  const nv = av({
    theme: "light",
    settings: {
      fontSize: "11pt"
    },
    styles: []
  });
  function uv({ error: c, value: r, onChange: o, className: s, ...h }) {
    return N.jsx(cg, {
      value: r,
      onChange: o,
      theme: nv,
      height: "100%",
      autoFocus: true,
      indentWithTab: false,
      basicSetup: {
        allowMultipleSelections: true,
        highlightSelectionMatches: true,
        lineNumbers: false,
        foldGutter: false,
        searchKeymap: true,
        lintKeymap: false
      },
      extensions: [
        om.lineWrapping,
        fg((_) => {
          let E = [];
          return (c == null ? void 0 : c.offset) && E.push({
            from: (c == null ? void 0 : c.offset) - 2,
            to: (c == null ? void 0 : c.offset) + 0,
            severity: "error",
            message: c == null ? void 0 : c.message
          }), E;
        })
      ],
      className: wf(s, "dark:bg-slate-950 dark:selection:text-slate-900 caret-pink-500 text text-sm", (c == null ? void 0 : c.message) && "err"),
      ...h
    });
  }
  function fm(c, r) {
    if (typeof c == "function") return c(r);
    c != null && (c.current = r);
  }
  function iv(...c) {
    return (r) => {
      let o = false;
      const s = c.map((h) => {
        const _ = fm(h, r);
        return !o && typeof _ == "function" && (o = true), _;
      });
      if (o) return () => {
        for (let h = 0; h < s.length; h++) {
          const _ = s[h];
          typeof _ == "function" ? _() : fm(c[h], null);
        }
      };
    };
  }
  var cv = /* @__PURE__ */ Symbol.for("react.lazy"), ci = sg[" use ".trim().toString()];
  function fv(c) {
    return typeof c == "object" && c !== null && "then" in c;
  }
  function Bm(c) {
    return c != null && typeof c == "object" && "$$typeof" in c && c.$$typeof === cv && "_payload" in c && fv(c._payload);
  }
  function sv(c) {
    const r = rv(c), o = rl.forwardRef((s, h) => {
      let { children: _, ...E } = s;
      Bm(_) && typeof ci == "function" && (_ = ci(_._payload));
      const U = rl.Children.toArray(_), T = U.find(mv);
      if (T) {
        const p = T.props.children, R = U.map((C) => C === T ? rl.Children.count(p) > 1 ? rl.Children.only(null) : rl.isValidElement(p) ? p.props.children : null : C);
        return N.jsx(r, {
          ...E,
          ref: h,
          children: rl.isValidElement(p) ? rl.cloneElement(p, void 0, R) : null
        });
      }
      return N.jsx(r, {
        ...E,
        ref: h,
        children: _
      });
    });
    return o.displayName = `${c}.Slot`, o;
  }
  var ov = sv("Slot");
  function rv(c) {
    const r = rl.forwardRef((o, s) => {
      let { children: h, ..._ } = o;
      if (Bm(h) && typeof ci == "function" && (h = ci(h._payload)), rl.isValidElement(h)) {
        const E = gv(h), U = hv(_, h.props);
        return h.type !== rl.Fragment && (U.ref = s ? iv(s, E) : E), rl.cloneElement(h, U);
      }
      return rl.Children.count(h) > 1 ? rl.Children.only(null) : null;
    });
    return r.displayName = `${c}.SlotClone`, r;
  }
  var dv = /* @__PURE__ */ Symbol("radix.slottable");
  function mv(c) {
    return rl.isValidElement(c) && typeof c.type == "function" && "__radixId" in c.type && c.type.__radixId === dv;
  }
  function hv(c, r) {
    const o = {
      ...r
    };
    for (const s in r) {
      const h = c[s], _ = r[s];
      /^on[A-Z]/.test(s) ? h && _ ? o[s] = (...U) => {
        const T = _(...U);
        return h(...U), T;
      } : h && (o[s] = h) : s === "style" ? o[s] = {
        ...h,
        ..._
      } : s === "className" && (o[s] = [
        h,
        _
      ].filter(Boolean).join(" "));
    }
    return {
      ...c,
      ...o
    };
  }
  function gv(c) {
    var _a, _b;
    let r = (_a = Object.getOwnPropertyDescriptor(c.props, "ref")) == null ? void 0 : _a.get, o = r && "isReactWarning" in r && r.isReactWarning;
    return o ? c.ref : (r = (_b = Object.getOwnPropertyDescriptor(c, "ref")) == null ? void 0 : _b.get, o = r && "isReactWarning" in r && r.isReactWarning, o ? c.props.ref : c.props.ref || c.ref);
  }
  const yv = jm("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }), Xf = rl.forwardRef(({ className: c, variant: r, size: o, asChild: s = false, ...h }, _) => {
    const E = s ? ov : "button";
    return N.jsx(E, {
      className: wf(yv({
        variant: r,
        size: o,
        className: c
      })),
      ref: _,
      ...h
    });
  });
  Xf.displayName = "Button";
  function vv({ onClick: c }) {
    return N.jsxs(Xf, {
      variant: "outline",
      onClick: c,
      title: "Clear recipe",
      className: "flex gap-2 hover:shadow-lg transition duration-200",
      children: [
        N.jsx(ny, {
          size: 16
        }),
        " Clear"
      ]
    });
  }
  function bv({ value: c }) {
    return N.jsxs(Xf, {
      variant: "outline",
      onClick: () => navigator.clipboard.writeText(c),
      title: "Copy recipe text",
      className: "flex gap-2 hover:shadow-lg transition duration-200",
      children: [
        N.jsx(Ig, {
          size: 16
        }),
        " Copy"
      ]
    });
  }
  const pv = Um`>> tags: vegan, high-protein, high-fiber
>> lang: en

Add {boiled chickpeas}(400 gr) to the &{blender} with {garlic}(1),
{tahini}(2 tsp), {lemon}(1/2), {olive oil}(2 tsp), {salt} and {pepper}.

Blend for t{3 minutes}.

Serve or store.
`;
  function Sv(c, r) {
    try {
      return atob(c);
    } catch {
      return r;
    }
  }
  function _v() {
    const r = new URL(window.location.href).searchParams.get("share"), o = r ? Sv(r, Um`Failed to decode the recipe`) : pv, [s, h] = rl.useState(o), [_, E] = rl.useState({}), [U, T] = rl.useState({}), p = rl.useCallback((R) => {
      h(R);
    }, []);
    return rl.useEffect(() => {
      try {
        const R = _g(s);
        E(R), T(null);
      } catch (R) {
        const C = R;
        console.error(C), T(C);
      }
    }, [
      s
    ]), N.jsxs("div", {
      className: "grid grid-rows-layout h-screen w-screen antialiased",
      children: [
        N.jsx("div", {
          className: "w-full border-b",
          children: N.jsxs("div", {
            className: "container w-full flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 ",
            children: [
              N.jsx("div", {
                className: "flex shrink-0 gap-2 content-end items-stretch",
                children: N.jsx("h2", {
                  className: "text-lg font-semibold self-end",
                  children: "Recipe Lang"
                })
              }),
              N.jsx("div", {
                className: "ml-auto flex w-full space-x-2 sm:justify-end",
                children: "Playground"
              })
            ]
          })
        }),
        N.jsx("div", {
          className: "container py-6 ",
          children: N.jsx("div", {
            className: "flex flex-col space-y-4 ",
            children: N.jsxs("div", {
              className: "flex flex-col lg:flex-row justify-center gap-6 ",
              children: [
                N.jsxs("div", {
                  className: "flex flex-col rounded-md lg:w-1/2 text-wrap md:h-[300px]",
                  children: [
                    N.jsx(rl.Suspense, {
                      fallback: N.jsx("div", {
                        className: "h-[300px] animate-pulse bg-slate-100 rounded-md"
                      }),
                      children: N.jsx(uv, {
                        error: U,
                        className: "w-full h-full font-sans bg-background",
                        value: s,
                        onChange: p
                      })
                    }),
                    N.jsx("div", {
                      className: "mt-4",
                      children: N.jsx("p", {
                        className: "text-red-400 whitespace-pre font-mono text-sm",
                        children: U == null ? void 0 : U.message
                      })
                    }),
                    N.jsxs("div", {
                      className: "flex gap-4 justify-end",
                      children: [
                        N.jsx(vv, {
                          onClick: () => h("")
                        }),
                        N.jsx(bv, {
                          value: s
                        })
                      ]
                    })
                  ]
                }),
                N.jsxs("div", {
                  className: "lg:w-1/2",
                  children: [
                    N.jsx(ev, {
                      parsedRecipe: _,
                      rawRecipe: s
                    }),
                    _.backstory && N.jsx("div", {
                      className: "relative rounded-md border bg-muted p-6 border-slate-400 dark:border-slate-500 shadow-lg mt-6 hover:shadow-xl transition duration-400",
                      children: _.backstory
                    })
                  ]
                })
              ]
            })
          })
        }),
        N.jsx("div", {
          className: "flex flex-col w-full gap-4 items-center justify-center p-6 md:py-12 bg-gray-100 dark:bg-gray-800 inset-x-0 relative ",
          children: N.jsxs("div", {
            className: "container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 text-sm justify-between w-full",
            children: [
              N.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [
                  N.jsx("h2", {
                    className: "text-xl",
                    children: "Reciperium Playground"
                  }),
                  N.jsxs("p", {
                    className: "text-gray-600 dark:text-gray-400",
                    children: [
                      "Play with the recipe language used at",
                      " ",
                      N.jsx("a", {
                        href: "https://www.reciperium.com",
                        className: "text-blue-500 hover:text-blue-600 after:content-['_\u2197']",
                        target: "_blank",
                        children: "Reciperium"
                      })
                    ]
                  }),
                  N.jsxs("p", {
                    className: "text-gray-600 dark:text-gray-400",
                    children: [
                      "Built with \u2764\uFE0F by",
                      " ",
                      N.jsx("a", {
                        href: "https://woile.dev",
                        target: "_blank",
                        className: "text-blue-500 hover:text-blue-600",
                        children: "woile"
                      })
                    ]
                  })
                ]
              }),
              N.jsxs("div", {
                className: "flex w-full justify-between",
                children: [
                  N.jsxs("div", {
                    className: "flex flex-col gap-4 text-left",
                    children: [
                      N.jsx("h3", {
                        className: "text-lg",
                        children: "Resources"
                      }),
                      N.jsx("a", {
                        href: "https://www.reciperium.com",
                        className: "text-blue-500 hover:text-blue-600 after:content-['_\u2197']",
                        target: "_blank",
                        children: "Reciperium"
                      }),
                      N.jsx("a", {
                        href: "https://learn.reciperium.com",
                        className: "text-blue-500 hover:text-blue-600 after:content-['_\u2197']",
                        target: "_blank",
                        children: "Learn to write recipes"
                      }),
                      N.jsx("a", {
                        href: "https://github.com/reciperium/recipe-lang/blob/main/spec.md",
                        className: "text-blue-500 hover:text-blue-600 after:content-['_\u2197']",
                        target: "_blank",
                        children: "Recipe Lang Specification"
                      })
                    ]
                  }),
                  N.jsx("div", {
                    className: "flex flex-col justify-center justify-self-center self-end",
                    children: N.jsx("div", {
                      className: "flex",
                      children: N.jsx("a", {
                        href: "https://github.com/reciperium/playground",
                        className: "flex flex-wrap items-end self-end  after:content-['_\u2197'] hover:text-gray-400 dark:hover:text-gray-200",
                        target: "_blank",
                        children: N.jsx(ly, {
                          size: 24
                        })
                      })
                    })
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  bg.createRoot(document.getElementById("root")).render(N.jsx(og.StrictMode, {
    children: N.jsx(_v, {})
  }));
})();
