function pf(n, e) {
  for (var t = 0; t < e.length; t++) {
    const i = e[t];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i) if (s !== "default" && !(s in n)) {
        const r = Object.getOwnPropertyDescriptor(i, s);
        r && Object.defineProperty(n, s, r.get ? r : { enumerable: true, get: () => i[s] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function mf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var xs = { exports: {} }, ui = {};
var Oo;
function gf() {
  if (Oo) return ui;
  Oo = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(i, s, r) {
    var o = null;
    if (r !== void 0 && (o = "" + r), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      r = {};
      for (var l in s) l !== "key" && (r[l] = s[l]);
    } else r = s;
    return s = r.ref, { $$typeof: n, type: i, key: o, ref: s !== void 0 ? s : null, props: r };
  }
  return ui.Fragment = e, ui.jsx = t, ui.jsxs = t, ui;
}
var Eo;
function yf() {
  return Eo || (Eo = 1, xs.exports = gf()), xs.exports;
}
var bf = yf(), ws = { exports: {} }, V = {};
var Bo;
function xf() {
  if (Bo) return V;
  Bo = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.portal"), t = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), r = /* @__PURE__ */ Symbol.for("react.consumer"), o = /* @__PURE__ */ Symbol.for("react.context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), a = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), c = /* @__PURE__ */ Symbol.for("react.lazy"), f = /* @__PURE__ */ Symbol.for("react.activity"), u = Symbol.iterator;
  function d(g) {
    return g === null || typeof g != "object" ? null : (g = u && g[u] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var p = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, m = Object.assign, y = {};
  function b(g, S, I) {
    this.props = g, this.context = S, this.refs = y, this.updater = I || p;
  }
  b.prototype.isReactComponent = {}, b.prototype.setState = function(g, S) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, S, "setState");
  }, b.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function C() {
  }
  C.prototype = b.prototype;
  function k(g, S, I) {
    this.props = g, this.context = S, this.refs = y, this.updater = I || p;
  }
  var T = k.prototype = new C();
  T.constructor = k, m(T, b.prototype), T.isPureReactComponent = true;
  var A = Array.isArray;
  function M() {
  }
  var v = { H: null, A: null, T: null, S: null }, W = Object.prototype.hasOwnProperty;
  function R(g, S, I) {
    var N = I.ref;
    return { $$typeof: n, type: g, key: S, ref: N !== void 0 ? N : null, props: I };
  }
  function _(g, S) {
    return R(g.type, S, g.props);
  }
  function H(g) {
    return typeof g == "object" && g !== null && g.$$typeof === n;
  }
  function L(g) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(I) {
      return S[I];
    });
  }
  var F = /\/+/g;
  function z(g, S) {
    return typeof g == "object" && g !== null && g.key != null ? L("" + g.key) : S.toString(36);
  }
  function Y(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(M, M) : (g.status = "pending", g.then(function(S) {
          g.status === "pending" && (g.status = "fulfilled", g.value = S);
        }, function(S) {
          g.status === "pending" && (g.status = "rejected", g.reason = S);
        })), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function ie(g, S, I, N, $) {
    var G = typeof g;
    (G === "undefined" || G === "boolean") && (g = null);
    var Q = false;
    if (g === null) Q = true;
    else switch (G) {
      case "bigint":
      case "string":
      case "number":
        Q = true;
        break;
      case "object":
        switch (g.$$typeof) {
          case n:
          case e:
            Q = true;
            break;
          case c:
            return Q = g._init, ie(Q(g._payload), S, I, N, $);
        }
    }
    if (Q) return $ = $(g), Q = N === "" ? "." + z(g, 0) : N, A($) ? (I = "", Q != null && (I = Q.replace(F, "$&/") + "/"), ie($, S, I, "", function(df) {
      return df;
    })) : $ != null && (H($) && ($ = _($, I + ($.key == null || g && g.key === $.key ? "" : ("" + $.key).replace(F, "$&/") + "/") + Q)), S.push($)), 1;
    Q = 0;
    var Je = N === "" ? "." : N + ":";
    if (A(g)) for (var Oe = 0; Oe < g.length; Oe++) N = g[Oe], G = Je + z(N, Oe), Q += ie(N, S, I, G, $);
    else if (Oe = d(g), typeof Oe == "function") for (g = Oe.call(g), Oe = 0; !(N = g.next()).done; ) N = N.value, G = Je + z(N, Oe++), Q += ie(N, S, I, G, $);
    else if (G === "object") {
      if (typeof g.then == "function") return ie(Y(g), S, I, N, $);
      throw S = String(g), Error("Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Q;
  }
  function re(g, S, I) {
    if (g == null) return g;
    var N = [], $ = 0;
    return ie(g, N, "", "", function(G) {
      return S.call(I, G, $++);
    }), N;
  }
  function de(g) {
    if (g._status === -1) {
      var S = g._result;
      S = S(), S.then(function(I) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = I);
      }, function(I) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = I);
      }), g._status === -1 && (g._status = 0, g._result = S);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var X = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var S = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g), error: g });
      if (!window.dispatchEvent(S)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  }, oe = { map: re, forEach: function(g, S, I) {
    re(g, function() {
      S.apply(this, arguments);
    }, I);
  }, count: function(g) {
    var S = 0;
    return re(g, function() {
      S++;
    }), S;
  }, toArray: function(g) {
    return re(g, function(S) {
      return S;
    }) || [];
  }, only: function(g) {
    if (!H(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } };
  return V.Activity = f, V.Children = oe, V.Component = b, V.Fragment = t, V.Profiler = s, V.PureComponent = k, V.StrictMode = i, V.Suspense = a, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, V.__COMPILER_RUNTIME = { __proto__: null, c: function(g) {
    return v.H.useMemoCache(g);
  } }, V.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, V.cacheSignal = function() {
    return null;
  }, V.cloneElement = function(g, S, I) {
    if (g == null) throw Error("The argument must be a React element, but you passed " + g + ".");
    var N = m({}, g.props), $ = g.key;
    if (S != null) for (G in S.key !== void 0 && ($ = "" + S.key), S) !W.call(S, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && S.ref === void 0 || (N[G] = S[G]);
    var G = arguments.length - 2;
    if (G === 1) N.children = I;
    else if (1 < G) {
      for (var Q = Array(G), Je = 0; Je < G; Je++) Q[Je] = arguments[Je + 2];
      N.children = Q;
    }
    return R(g.type, $, N);
  }, V.createContext = function(g) {
    return g = { $$typeof: o, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null }, g.Provider = g, g.Consumer = { $$typeof: r, _context: g }, g;
  }, V.createElement = function(g, S, I) {
    var N, $ = {}, G = null;
    if (S != null) for (N in S.key !== void 0 && (G = "" + S.key), S) W.call(S, N) && N !== "key" && N !== "__self" && N !== "__source" && ($[N] = S[N]);
    var Q = arguments.length - 2;
    if (Q === 1) $.children = I;
    else if (1 < Q) {
      for (var Je = Array(Q), Oe = 0; Oe < Q; Oe++) Je[Oe] = arguments[Oe + 2];
      $.children = Je;
    }
    if (g && g.defaultProps) for (N in Q = g.defaultProps, Q) $[N] === void 0 && ($[N] = Q[N]);
    return R(g, G, $);
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(g) {
    return { $$typeof: l, render: g };
  }, V.isValidElement = H, V.lazy = function(g) {
    return { $$typeof: c, _payload: { _status: -1, _result: g }, _init: de };
  }, V.memo = function(g, S) {
    return { $$typeof: h, type: g, compare: S === void 0 ? null : S };
  }, V.startTransition = function(g) {
    var S = v.T, I = {};
    v.T = I;
    try {
      var N = g(), $ = v.S;
      $ !== null && $(I, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(M, X);
    } catch (G) {
      X(G);
    } finally {
      S !== null && I.types !== null && (S.types = I.types), v.T = S;
    }
  }, V.unstable_useCacheRefresh = function() {
    return v.H.useCacheRefresh();
  }, V.use = function(g) {
    return v.H.use(g);
  }, V.useActionState = function(g, S, I) {
    return v.H.useActionState(g, S, I);
  }, V.useCallback = function(g, S) {
    return v.H.useCallback(g, S);
  }, V.useContext = function(g) {
    return v.H.useContext(g);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(g, S) {
    return v.H.useDeferredValue(g, S);
  }, V.useEffect = function(g, S) {
    return v.H.useEffect(g, S);
  }, V.useEffectEvent = function(g) {
    return v.H.useEffectEvent(g);
  }, V.useId = function() {
    return v.H.useId();
  }, V.useImperativeHandle = function(g, S, I) {
    return v.H.useImperativeHandle(g, S, I);
  }, V.useInsertionEffect = function(g, S) {
    return v.H.useInsertionEffect(g, S);
  }, V.useLayoutEffect = function(g, S) {
    return v.H.useLayoutEffect(g, S);
  }, V.useMemo = function(g, S) {
    return v.H.useMemo(g, S);
  }, V.useOptimistic = function(g, S) {
    return v.H.useOptimistic(g, S);
  }, V.useReducer = function(g, S, I) {
    return v.H.useReducer(g, S, I);
  }, V.useRef = function(g) {
    return v.H.useRef(g);
  }, V.useState = function(g) {
    return v.H.useState(g);
  }, V.useSyncExternalStore = function(g, S, I) {
    return v.H.useSyncExternalStore(g, S, I);
  }, V.useTransition = function() {
    return v.H.useTransition();
  }, V.version = "19.2.4", V;
}
var Ro;
function wf() {
  return Ro || (Ro = 1, ws.exports = xf()), ws.exports;
}
var ge = wf();
const vf = mf(ge), eb = pf({ __proto__: null, default: vf }, [ge]);
let Qs = [], va = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++) (e % 2 ? va : Qs).push(t = t + n[e]);
})();
function kf(n) {
  if (n < 768) return false;
  for (let e = 0, t = Qs.length; ; ) {
    let i = e + t >> 1;
    if (n < Qs[i]) t = i;
    else if (n >= va[i]) e = i + 1;
    else return true;
    if (e == t) return false;
  }
}
function Lo(n) {
  return n >= 127462 && n <= 127487;
}
const Po = 8205;
function Sf(n, e, t = true, i = true) {
  return (t ? ka : Cf)(n, e, i);
}
function ka(n, e, t) {
  if (e == n.length) return e;
  e && Sa(n.charCodeAt(e)) && Ca(n.charCodeAt(e - 1)) && e--;
  let i = vs(n, e);
  for (e += Io(i); e < n.length; ) {
    let s = vs(n, e);
    if (i == Po || s == Po || t && kf(s)) e += Io(s), i = s;
    else if (Lo(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && Lo(vs(n, o)); ) r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function Cf(n, e, t) {
  for (; e > 0; ) {
    let i = ka(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function vs(n, e) {
  let t = n.charCodeAt(e);
  if (!Ca(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Sa(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Sa(n) {
  return n >= 56320 && n < 57344;
}
function Ca(n) {
  return n >= 55296 && n < 56320;
}
function Io(n) {
  return n < 65536 ? 1 : 2;
}
class J {
  lineAt(e) {
    if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, false, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, true, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = ni(this, e, t);
    let s = [];
    return this.decompose(0, e, s, 2), i.length && i.decompose(0, i.length, s, 3), this.decompose(t, this.length, s, 1), tt.from(s, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = ni(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), tt.from(i, t - e);
  }
  eq(e) {
    if (e == this) return true;
    if (e.length != this.length || e.lines != this.lines) return false;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new Si(this), r = new Si(e);
    for (let o = t, l = t; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value) return false;
      if (l += s.value.length, s.done || l >= i) return true;
    }
  }
  iter(e = 1) {
    return new Si(this, e);
  }
  iterRange(e, t = this.length) {
    return new Aa(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null) i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Ma(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {
  }
  static of(e) {
    if (e.length == 0) throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? J.empty : e.length <= 32 ? new ae(e) : tt.from(ae.split(e, []));
  }
}
class ae extends J {
  constructor(e, t = Af(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((t ? i : l) >= e) return new Mf(s, l, i, o);
      s = l + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new ae(No(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(), l = An(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32) i.push(new ae(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new ae(l.slice(0, a)), new ae(l.slice(a)));
      }
    } else i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof ae)) return super.replace(e, t, i);
    [e, t] = ni(this, e, t);
    let s = An(this.text, An(i.text, No(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return s.length <= 32 ? new ae(s, r) : tt.from(ae.split(s, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = ni(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (s += i), e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], s = -1;
    for (let r of e) i.push(r), s += r.length + 1, i.length == 32 && (t.push(new ae(i, s)), i = [], s = -1);
    return s > -1 && t.push(new ae(i, s)), t;
  }
}
class tt extends J {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e) this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e) return o.lineInner(e, t, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = ni(this, e, t), i.lines < this.lines) for (let s = 0, r = 0; s < this.children.length; s++) {
      let o = this.children[s], l = r + o.length;
      if (e >= r && t <= l) {
        let a = o.replace(e - r, t - r, i), h = this.lines - o.lines + a.lines;
        if (a.lines < h >> 4 && a.lines > h >> 6) {
          let c = this.children.slice();
          return c[s] = a, new tt(c, this.length - (t - e) + i.length);
        }
        return super.replace(r, l, a);
      }
      r = l + 1;
    }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = ni(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (s += i), e < a && t > o && (s += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof tt)) return 0;
    let i = 0, [s, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l) return i;
      let a = this.children[s], h = e.children[r];
      if (a != h) return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e) i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e) p.flatten(d);
      return new ae(d, t);
    }
    let s = Math.max(32, i >> 5), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof tt) for (let m of d.children) f(m);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof ae && a && (p = c[c.length - 1]) instanceof ae && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new ae(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : tt.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e) f(d);
    return u(), l.length == 1 ? l[0] : new tt(l, t);
  }
}
J.empty = new ae([""], 0);
function Af(n) {
  let e = -1;
  for (let t of n) e += t.length + 1;
  return e;
}
function An(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = true; r < n.length && s <= i; r++) {
    let l = n[r], a = s + l.length;
    a >= t && (a > i && (l = l.slice(0, i - s)), s < t && (l = l.slice(t - s)), o ? (e[e.length - 1] += l, o = false) : e.push(l)), s = a + 1;
  }
  return e;
}
function No(n, e, t) {
  return An(n, [""], e, t);
}
class Si {
  constructor(e, t = 1) {
    this.dir = t, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof ae ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = false; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof ae ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) return this.done = true, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0) return this.lineBreak = true, this.value = `
`, this;
        e--;
      } else if (s instanceof ae) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e)) return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof ae ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Aa {
  constructor(e, t, i) {
    this.value = "", this.done = false, this.cursor = new Si(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = true, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Ma {
  constructor(e) {
    this.inner = e, this.afterBreak = true, this.value = "", this.done = false;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = false) : t ? (this.done = true, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = s, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
typeof Symbol < "u" && (J.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Si.prototype[Symbol.iterator] = Aa.prototype[Symbol.iterator] = Ma.prototype[Symbol.iterator] = function() {
  return this;
});
class Mf {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.number = i, this.text = s;
  }
  get length() {
    return this.to - this.from;
  }
}
function ni(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function me(n, e, t = true, i = true) {
  return Sf(n, e, t, i);
}
function Tf(n) {
  return n >= 56320 && n < 57344;
}
function Df(n) {
  return n >= 55296 && n < 56320;
}
function Ee(n, e) {
  let t = n.charCodeAt(e);
  if (!Df(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Tf(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function jr(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function it(n) {
  return n < 65536 ? 1 : 2;
}
const Zs = /\r\n?|\n/;
var Me = (function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
})(Me || (Me = {}));
class ht {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, s, r), s += r) : s += o, i += r;
    }
  }
  iterChangedRanges(e, t = false) {
    er(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new ht(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Ta(this, e);
  }
  mapDesc(e, t = false) {
    return e.empty ? this : tr(this, e, t);
  }
  mapPos(e, t = -1, i = Me.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = s + l;
      if (a < 0) {
        if (h > e) return r + (e - s);
        r += l;
      } else {
        if (i != Me.Simple && h >= e && (i == Me.TrackDel && s < e && h > e || i == Me.TrackBefore && s < e || i == Me.TrackAfter && h > e)) return null;
        if (h > e || h == e && t < 0 && !l) return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (e > s) throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], l = s + r;
      if (o >= 0 && s <= t && l >= e) return s < e && l > t ? "cover" : true;
      s = l;
    }
    return false;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ht(e);
  }
  static create(e) {
    return new ht(e);
  }
}
class fe extends ht {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length) throw new RangeError("Applying change set to a document with the wrong length");
    return er(this, (t, i, s, r, o) => e = e.replace(s, s + (i - t), o), false), e;
  }
  mapDesc(e, t = false) {
    return tr(this, e, t, true);
  }
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s], l = t[s + 1];
      if (l >= 0) {
        t[s] = l, t[s + 1] = o;
        let a = s >> 1;
        for (; i.length < a; ) i.push(J.empty);
        i.push(o ? e.slice(r, r + o) : J.empty);
      }
      r += o;
    }
    return new fe(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : Ta(this, e, true);
  }
  map(e, t = false) {
    return e.empty ? this : tr(this, e, t, true);
  }
  iterChanges(e, t = false) {
    er(this, e, t);
  }
  get desc() {
    return ht.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], s = [], r = new Bi(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done) break e;
        let c = Math.min(r.len, a - l);
        ke(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        ke(t, c, f), f > 0 && wt(i, t, r.text), r.forward(c), l += c;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done) break e;
        let c = Math.min(r.len, h - l);
        ke(t, c, -1), ke(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
      }
    }
    return { changes: new fe(t, i), filtered: ht.create(s) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let s = [], r = [], o = 0, l = null;
    function a(c = false) {
      if (!c && !s.length) return;
      o < t && ke(s, t - o, -1);
      let f = new fe(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c)) for (let f of c) h(f);
      else if (c instanceof fe) {
        if (c.length != t) throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t) throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? J.of(d.split(i || Zs)) : d : J.empty, m = p.length;
        if (f == u && m == 0) return;
        f < o && a(), f > o && ke(s, f - o, -1), ke(s, u - f, m), wt(r, s, p), o = u;
      }
    }
    return h(e), a(!l), l;
  }
  static empty(e) {
    return new fe(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number") t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1) t.push(r[0], 0);
        else {
          for (; i.length < s; ) i.push(J.empty);
          i[s] = J.of(r.slice(1)), t.push(r[0], i[s].length);
        }
      }
    }
    return new fe(t, i);
  }
  static createSet(e, t) {
    return new fe(e, t);
  }
}
function ke(n, e, t, i = false) {
  if (e == 0 && t <= 0) return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1] ? n[s] += e : s >= 0 && e == 0 && n[s] == 0 ? n[s + 1] += t : i ? (n[s] += e, n[s + 1] += t) : n.push(e, t);
}
function wt(n, e, t) {
  if (t.length == 0) return;
  let i = e.length - 2 >> 1;
  if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; ) n.push(J.empty);
    n.push(t);
  }
}
function er(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++], a = n.sections[o++];
    if (a < 0) s += l, r += l;
    else {
      let h = s, c = r, f = J.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == n.sections.length || n.sections[o + 1] < 0); ) l = n.sections[o++], a = n.sections[o++];
      e(s, h, r, c, f), s = h, r = c;
    }
  }
}
function tr(n, e, t, i = false) {
  let s = [], r = i ? [] : null, o = new Bi(n), l = new Bi(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len) throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ke(s, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ke(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (ke(s, 0, o.ins), r && wt(r, s, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; ) if (l.ins == -1) {
        let f = Math.min(c, l.len);
        h += f, c -= f, l.forward(f);
      } else if (l.ins == 0 && l.len < c) c -= l.len, l.next();
      else break;
      ke(s, h, a < o.i ? o.ins : 0), r && a < o.i && wt(r, s, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done) return r ? fe.createSet(s, r) : ht.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Ta(n, e, t = false) {
  let i = [], s = t ? [] : null, r = new Bi(n), o = new Bi(e);
  for (let l = false; ; ) {
    if (r.done && o.done) return s ? fe.createSet(i, s) : ht.create(i);
    if (r.ins == 0) ke(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done) ke(i, 0, o.ins, l), s && wt(s, i, o.text), o.next();
    else {
      if (r.done || o.done) throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ke(i, a, c, l), s && c && wt(s, i, o.text);
        } else o.ins == -1 ? (ke(i, r.off ? 0 : r.len, a, l), s && wt(s, i, r.textBit(a))) : (ke(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && wt(s, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Bi {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? J.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? J.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Nt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Nt(i, s, this.flags);
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return w.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return w.range(this.anchor, i);
  }
  eq(e, t = false) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
    return w.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new Nt(e, t, i);
  }
}
class w {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  map(e, t = -1) {
    return e.empty ? this : w.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  eq(e, t = false) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return false;
    for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(e.ranges[i], t)) return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new w([this.main], 0);
  }
  addRange(e, t = true) {
    return w.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, w.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
    return new w(e.ranges.map((t) => Nt.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new w([w.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0) throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i) return w.normalized(e.slice(), t);
      i = r.to;
    }
    return new w(e, t);
  }
  static cursor(e, t = 0, i, s) {
    return Nt.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  static range(e, t, i, s) {
    let r = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return t < e ? Nt.create(t, e, 48 | r) : Nt.create(e, t, (t > e ? 8 : 0) | r);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? w.range(a, l) : w.range(l, a));
      }
    }
    return new w(e, t);
  }
}
function Da(n, e) {
  for (let t of n.ranges) if (t.to > e) throw new RangeError("Selection points outside of document");
}
let Ur = 0;
class B {
  constructor(e, t, i, s, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Ur++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new B(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Gr), !!e.static, e.enables);
  }
  of(e) {
    return new Mn([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new Mn(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new Mn(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Gr(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class Mn {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Ur++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = false, h = false, c = [];
    for (let f of this.dependencies) f == "doc" ? a = true : f == "selection" ? h = true : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[f.id]);
    return { create(f) {
      return f.values[o] = i(f), 1;
    }, update(f, u) {
      if (a && u.docChanged || h && (u.docChanged || u.selection) || ir(f, c)) {
        let d = i(f);
        if (l ? !Wo(d, f.values[o], s) : !s(d, f.values[o])) return f.values[o] = d, 1;
      }
      return 0;
    }, reconfigure: (f, u) => {
      let d, p = u.config.address[r];
      if (p != null) {
        let m = Pn(u, p);
        if (this.dependencies.every((y) => y instanceof B ? u.facet(y) === f.facet(y) : y instanceof ve ? u.field(y, false) == f.field(y, false) : true) || (l ? Wo(d = i(f), m, s) : s(d = i(f), m))) return f.values[o] = m, 0;
      } else d = i(f);
      return f.values[o] = d, 1;
    } };
  }
}
function Wo(n, e, t) {
  if (n.length != e.length) return false;
  for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return false;
  return true;
}
function ir(n, e) {
  let t = false;
  for (let i of e) Ci(n, i) & 1 && (t = true);
  return t;
}
function Of(n, e, t) {
  let i = t.map((a) => n[a.id]), s = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Pn(a, i[c]);
      if (s[c] == 2) for (let u of f) h.push(u);
      else h.push(f);
    }
    return e.combine(h);
  }
  return { create(a) {
    for (let h of i) Ci(a, h);
    return a.values[o] = l(a), 1;
  }, update(a, h) {
    if (!ir(a, r)) return 0;
    let c = l(a);
    return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
  }, reconfigure(a, h) {
    let c = ir(a, i), f = h.config.facets[e.id], u = h.facet(e);
    if (f && !c && Gr(t, f)) return a.values[o] = u, 0;
    let d = l(a);
    return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
  } };
}
const tn = B.define({ static: true });
class ve {
  constructor(e, t, i, s, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  static define(e) {
    let t = new ve(Ur++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(tn).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return { create: (i) => (i.values[t] = this.create(i), 1), update: (i, s) => {
      let r = i.values[t], o = this.updateF(r, s);
      return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
    }, reconfigure: (i, s) => {
      let r = i.facet(tn), o = s.facet(tn), l;
      return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : s.config.address[this.id] != null ? (i.values[t] = s.field(this), 0) : (i.values[t] = this.create(i), 1);
    } };
  }
  init(e) {
    return [this, tn.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Pt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function di(n) {
  return (e) => new Oa(e, n);
}
const Kt = { highest: di(Pt.highest), high: di(Pt.high), default: di(Pt.default), low: di(Pt.low), lowest: di(Pt.lowest) };
class Oa {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class ns {
  of(e) {
    return new nr(this, e);
  }
  reconfigure(e) {
    return ns.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class nr {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Ln {
  constructor(e, t, i, s, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; ) this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of Ef(e, t, o)) u instanceof ve ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s) l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, m = c && c[u] || [];
      if (d.every((y) => y.type == 0)) if (l[p.id] = a.length << 1 | 1, Gr(m, d)) a.push(i.facet(p));
      else {
        let y = p.combine(d.map((b) => b.value));
        a.push(i && p.compare(y, i.facet(p)) ? i.facet(p) : y);
      }
      else {
        for (let y of d) y.type == 0 ? (l[y.id] = a.length << 1 | 1, a.push(y.value)) : (l[y.id] = h.length << 1, h.push((b) => y.dynamicSlot(b)));
        l[p.id] = h.length << 1, h.push((y) => Of(y, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Ln(e, o, f, l, a, r);
  }
}
function Ef(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l) return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof nr && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o)) for (let h of o) r(h, l);
    else if (o instanceof nr) {
      if (t.has(o.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof Oa) r(o.inner, o.prec);
    else if (o instanceof ve) i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Mn) i[l].push(o), o.facet.extensions && r(o.facet.extensions, Pt.default);
    else {
      let h = o.extension;
      if (!h) throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(n, Pt.default), i.reduce((o, l) => o.concat(l));
}
function Ci(n, e) {
  if (e & 1) return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2) return i;
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | s;
}
function Pn(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Ea = B.define(), sr = B.define({ combine: (n) => n.some((e) => e), static: true }), Ba = B.define({ combine: (n) => n.length ? n[0] : void 0, static: true }), Ra = B.define(), La = B.define(), Pa = B.define(), Ia = B.define({ combine: (n) => n.length ? n[0] : false });
class ct {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new Bf();
  }
}
class Bf {
  of(e) {
    return new ct(this, e);
  }
}
class Rf {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new q(this, e);
  }
}
class q {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new q(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new Rf(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let i = [];
    for (let s of e) {
      let r = s.map(t);
      r && i.push(r);
    }
    return i;
  }
}
q.reconfigure = q.define();
q.appendConfig = q.define();
class ue {
  constructor(e, t, i, s, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Da(i, t.newLength), r.some((l) => l.type == ue.time) || (this.annotations = r.concat(ue.time.of(Date.now())));
  }
  static create(e, t, i, s, r, o) {
    return new ue(e, t, i, s, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(ue.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
ue.time = ct.define();
ue.userEvent = ct.define();
ue.addToHistory = ct.define();
ue.remote = ct.define();
function Lf(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < n.length && (s == e.length || e[s] >= n[i])) r = n[i++], o = n[i++];
    else if (s < e.length) r = e[s++], o = e[s++];
    else return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Na(n, e, t) {
  var i;
  let s, r, o;
  return t ? (s = e.changes, r = fe.empty(e.changes.length), o = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), r = n.changes.mapDesc(e.changes, true), o = n.changes.compose(s)), { changes: o, selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s), effects: q.mapEffects(n.effects, s).concat(q.mapEffects(e.effects, r)), annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations, scrollIntoView: n.scrollIntoView || e.scrollIntoView };
}
function rr(n, e, t) {
  let i = e.selection, s = Xt(e.annotations);
  return e.userEvent && (s = s.concat(ue.userEvent.of(e.userEvent))), { changes: e.changes instanceof fe ? e.changes : fe.of(e.changes || [], t, n.facet(Ba)), selection: i && (i instanceof w ? i : w.single(i.anchor, i.head)), effects: Xt(e.effects), annotations: s, scrollIntoView: !!e.scrollIntoView };
}
function Wa(n, e, t) {
  let i = rr(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === false && (t = false);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === false && (t = false);
    let o = !!e[r].sequential;
    i = Na(i, rr(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = ue.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return If(t ? Pf(s) : s);
}
function Pf(n) {
  let e = n.startState, t = true;
  for (let s of e.facet(Ra)) {
    let r = s(n);
    if (r === false) {
      t = false;
      break;
    }
    Array.isArray(r) && (t = t === true ? r : Lf(t, r));
  }
  if (t !== true) {
    let s, r;
    if (t === false) r = n.changes.invertedDesc, s = fe.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = ue.create(e, s, n.selection && n.selection.map(r), q.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(La);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof ue ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof ue ? n = r[0] : n = Wa(e, Xt(r), false);
  }
  return n;
}
function If(n) {
  let e = n.startState, t = e.facet(Pa), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = Na(i, rr(e, r, n.changes.newLength), true));
  }
  return i == n ? n : ue.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Nf = [];
function Xt(n) {
  return n == null ? Nf : Array.isArray(n) ? n : [n];
}
var se = (function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
})(se || (se = {}));
const Wf = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let or;
try {
  or = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Hf(n) {
  if (or) return or.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || Wf.test(t))) return true;
  }
  return false;
}
function Ff(n) {
  return (e) => {
    if (!/\S/.test(e)) return se.Space;
    if (Hf(e)) return se.Word;
    for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return se.Word;
    return se.Other;
  };
}
class j {
  constructor(e, t, i, s, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) Ci(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = true) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t) throw new RangeError("Field is not present in this state");
      return;
    }
    return Ci(this, i), Pn(this, i);
  }
  update(...e) {
    return Wa(this, e, true);
  }
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let l of e.effects) l.is(ns.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => s.set(h, a)), t = null), s.set(l.value.compartment, l.value.extension)) : l.is(q.reconfigure) ? (t = null, i = l.value) : l.is(q.appendConfig) && (t = null, i = Xt(i).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Ln.resolve(i, s, this), r = new j(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(sr) ? e.newSelection : e.newSelection.asSingle();
    new j(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({ changes: { from: t.from, to: t.to, insert: e }, range: w.cursor(t.from + e.length) }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), s = this.changes(i.changes), r = [i.range], o = Xt(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(s);
      for (let u = 0; u < l; u++) r[u] = r[u].map(c);
      let f = s.mapDesc(h, true);
      r.push(a.range.map(f)), s = s.compose(c), o = q.mapEffects(o, c).concat(q.mapEffects(Xt(a.effects), f));
    }
    return { changes: s, selection: w.create(r, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof fe ? e : fe.of(e, this.doc.length, this.facet(j.lineSeparator));
  }
  toText(e) {
    return J.of(e.split(this.facet(j.lineSeparator) || Zs));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Ci(this, t), Pn(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e) for (let i in e) {
      let s = e[i];
      s instanceof ve && this.config.address[s.id] != null && (t[i] = s.spec.toJSON(this.field(e[i]), this));
    }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let r in i) if (Object.prototype.hasOwnProperty.call(e, r)) {
        let o = i[r], l = e[r];
        s.push(o.init((a) => o.spec.fromJSON(l, a)));
      }
    }
    return j.create({ doc: e.doc, selection: w.fromJSON(e.selection), extensions: t.extensions ? s.concat([t.extensions]) : s });
  }
  static create(e = {}) {
    let t = Ln.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof J ? e.doc : J.of((e.doc || "").split(t.staticFacet(j.lineSeparator) || Zs)), s = e.selection ? e.selection instanceof w ? e.selection : w.single(e.selection.anchor, e.selection.head) : w.single(0);
    return Da(s, i.length), t.staticFacet(sr) || (s = s.asSingle()), new j(t, i, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  get tabSize() {
    return this.facet(j.tabSize);
  }
  get lineBreak() {
    return this.facet(j.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Ia);
  }
  phrase(e, ...t) {
    for (let i of this.facet(j.phrases)) if (Object.prototype.hasOwnProperty.call(i, e)) {
      e = i[e];
      break;
    }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$") return "$";
      let r = +(s || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let r of this.facet(Ea)) for (let o of r(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return Ff(t.length ? t[0] : "");
  }
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = me(t, o, false);
      if (r(t.slice(a, o)) != se.Word) break;
      o = a;
    }
    for (; l < s; ) {
      let a = me(t, l);
      if (r(t.slice(l, a)) != se.Word) break;
      l = a;
    }
    return o == l ? null : w.range(o + i, l + i);
  }
}
j.allowMultipleSelections = sr;
j.tabSize = B.define({ combine: (n) => n.length ? n[0] : 4 });
j.lineSeparator = Ba;
j.readOnly = Ia;
j.phrases = B.define({ compare(n, e) {
  let t = Object.keys(n), i = Object.keys(e);
  return t.length == i.length && t.every((s) => n[s] == e[s]);
} });
j.languageData = Ea;
j.changeFilter = Ra;
j.transactionFilter = La;
j.transactionExtender = Pa;
ns.reconfigure = q.define();
function ft(n, e, t = {}) {
  let i = {};
  for (let s of n) for (let r of Object.keys(s)) {
    let o = s[r], l = i[r];
    if (l === void 0) i[r] = o;
    else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, r)) i[r] = t[r](l, o);
    else throw new Error("Config merge conflict for field " + r);
  }
  for (let s in e) i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class Ct {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return lr.create(e, t, this);
  }
}
Ct.prototype.startSide = Ct.prototype.endSide = 0;
Ct.prototype.point = false;
Ct.prototype.mapMode = Me.TrackDel;
function Yr(n, e) {
  return n == e || n.constructor == e.constructor && n.eq(e);
}
let lr = class Ha {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new Ha(e, t, i);
  }
};
function ar(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Jr {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l) return o;
      let a = o + l >> 1, h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, true), o = this.findIndex(i, 1e9, false, r); r < o; r++) if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === false) return false;
  }
  map(e, t) {
    let i = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, f = this.to[a] + e, u, d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u))) continue;
      } else if (u = t.mapPos(c, h.startSide), d = t.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0) continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), s.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new Jr(s, r, i, l) : null, pos: o };
  }
}
class K {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  static create(e, t, i, s) {
    return new K(e, t, i, s);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = false, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o) return this;
    if (i && (t = t.slice().sort(ar)), this.isEmpty) return t.length ? K.of(t) : this;
    let l = new Fa(this, null, -1).goto(0), a = 0, h = [], c = new pt();
    for (; l.value || a < t.length; ) if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
      let f = t[a++];
      c.addInner(f.from, f.to, f.value) || h.push(f);
    } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(lr.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? K.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }));
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [], i = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === false) s = Math.max(s, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === true) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && (s = Math.max(s, c.maxPoint), t.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new K(i, t, r || K.empty, s);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === false) return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return Ri.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Ri.from(e).goto(t);
  }
  static compare(e, t, i, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = Ho(o, l, i), h = new pi(o, a, r), c = new pi(l, a, r);
    i.iterGaps((f, u, d) => Fo(h, f, c, u, d, s)), i.empty && i.length == 0 && Fo(h, 0, c, 0, 0, s);
  }
  static eq(e, t, i = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length) return false;
    if (!r.length) return true;
    let l = Ho(r, o), a = new pi(r, l, 0).goto(i), h = new pi(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !hr(a.active, h.active) || a.point && (!h.point || !Yr(a.point, h.point))) return false;
      if (a.to > s) return true;
      a.next(), h.next();
    }
  }
  static spans(e, t, i, s, r = -1) {
    let o = new pi(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (s.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i) return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(e, t = false) {
    let i = new pt();
    for (let s of e instanceof lr ? [e] : t ? Vf(e) : e) i.add(s.from, s.to, s.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length) return K.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--) for (let s = e[i]; s != K.empty; s = s.nextLayer) t = new K(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
K.empty = new K([], [], null, -1);
function Vf(n) {
  if (n.length > 1) for (let e = n[0], t = 1; t < n.length; t++) {
    let i = n[t];
    if (ar(e, i) > 0) return n.slice().sort(ar);
    e = i;
  }
  return n;
}
K.empty.nextLayer = K.empty;
class pt {
  finishChunk(e) {
    this.chunks.push(new Jr(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new pt())).add(e, t, i);
  }
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), true);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, true;
  }
  finish() {
    return this.finishInner(K.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return e;
    let t = K.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function Ho(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of n) for (let o = 0; o < r.chunk.length; o++) r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e) for (let o = 0; o < r.chunk.length; o++) {
    let l = i.get(r.chunk[o]);
    l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !(t == null ? void 0 : t.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
  }
  return s;
}
class Fa {
  constructor(e, t, i, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, false), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint)) break;
      this.chunkIndex++, i = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, true);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, true);
  }
  next() {
    for (; ; ) if (this.chunkIndex == this.layer.chunk.length) {
      this.from = this.to = 1e9, this.value = null;
      break;
    } else {
      let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
      if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
    }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Ri {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++) for (let o = e[r]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && s.push(new Fa(o, t, i, r));
    return s.length == 1 ? s[0] : new Ri(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap) i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) ks(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap) i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) ks(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ks(this.heap, 0);
    }
  }
}
function ks(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length) break;
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), t.compare(s) < 0) break;
    n[i] = t, n[e] = s, e = i;
  }
}
class pi {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ri.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; ) this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    nn(this.active, e), nn(this.activeTo, e), nn(this.activeRank, e), this.minActive = Vo(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; ) t++;
    sn(this.active, t, i), sn(this.activeTo, t, s), sn(this.activeRank, t, r), e && sn(e, t, this.cursor.from), this.minActive = Vo(this.active, this.activeTo);
  }
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && nn(i, s);
      } else if (this.cursor.value) if (this.cursor.from > e) {
        this.to = this.cursor.from, this.endSide = this.cursor.startSide;
        break;
      } else {
        let r = this.cursor.value;
        if (!r.point) this.addActive(i), this.cursor.next();
        else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
        else {
          this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
          break;
        }
      }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--) (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++;
    return t;
  }
}
function Fo(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let o = i + s, l = i, a = i - e, h = !!r.boundChange;
  for (let c = false; ; ) {
    let f = n.to + a - t.to, u = f || n.endSide - t.endSide, d = u < 0 ? n.to + a : t.to, p = Math.min(d, o);
    if (n.point || t.point ? (n.point && t.point && Yr(n.point, t.point) && hr(n.activeForPoint(n.to), t.activeForPoint(t.to)) || r.comparePoint(l, p, n.point, t.point), c = false) : (c && r.boundChange(l), p > l && !hr(n.active, t.active) && r.compareRange(l, p, n.active, t.active), h && p < o && (f || n.openEnd(d) != t.openEnd(d)) && (c = true)), d > o) break;
    l = d, u <= 0 && n.next(), u >= 0 && t.next();
  }
}
function hr(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !Yr(n[t], e[t])) return false;
  return true;
}
function nn(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
  n.pop();
}
function sn(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
  n[e] = t;
}
function Vo(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++) (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function hi(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t && s < n.length; ) n.charCodeAt(s) == 9 ? (i += e - i % e, s++) : (i++, s = me(n, s));
  return i;
}
function cr(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e) return s;
    if (s == n.length) break;
    r += n.charCodeAt(s) == 9 ? t - r % t : 1, s = me(n, s);
  }
  return i === true ? -1 : n.length;
}
const fr = "\u037C", zo = typeof Symbol > "u" ? "__" + fr : Symbol.for(fr), ur = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class At {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d)) r(d.split(/,\s*/).map((m) => o.map((y) => m.replace(/&/, y))).reduce((m, y) => m.concat(y)), p, a);
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, c, u);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = qo[zo] || 1;
    return qo[zo] = e + 1, fr + e.toString(36);
  }
  static mount(e, t, i) {
    let s = e[ur], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new zf(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let _o = /* @__PURE__ */ new Map();
class zf {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = _o.get(i);
      if (r) return e[ur] = r;
      this.sheet = new s.CSSStyleSheet(), _o.set(i, this);
    } else this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[ur] = this;
  }
  mount(e, t) {
    let i = this.sheet, s = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i) for (let h = 0; h < l.rules.length; h++) i.insertRule(l.rules[h], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        s += l.rules.length, r++;
      }
    }
    if (i) t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++) o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Mt = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, Li = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, qf = typeof navigator < "u" && /Mac/.test(navigator.platform), _f = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var be = 0; be < 10; be++) Mt[48 + be] = Mt[96 + be] = String(be);
for (var be = 1; be <= 24; be++) Mt[be + 111] = "F" + be;
for (var be = 65; be <= 90; be++) Mt[be] = String.fromCharCode(be + 32), Li[be] = String.fromCharCode(be);
for (var Ss in Mt) Li.hasOwnProperty(Ss) || (Li[Ss] = Mt[Ss]);
function $f(n) {
  var e = qf && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || _f && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Li : Mt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function Z() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
      var s = t[i];
      typeof s == "string" ? n.setAttribute(i, s) : s != null && (n[i] = s);
    }
    e++;
  }
  for (; e < arguments.length; e++) Va(n, arguments[e]);
  return n;
}
function Va(n, e) {
  if (typeof e == "string") n.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null) n.appendChild(e);
  else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Va(n, e[t]);
  else throw new RangeError("Unsupported child node: " + e);
}
let Ae = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, dr = typeof document < "u" ? document : { documentElement: { style: {} } };
const pr = /Edge\/(\d+)/.exec(Ae.userAgent), za = /MSIE \d/.test(Ae.userAgent), mr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ae.userAgent), ss = !!(za || mr || pr), $o = !ss && /gecko\/(\d+)/i.test(Ae.userAgent), Cs = !ss && /Chrome\/(\d+)/.exec(Ae.userAgent), Kf = "webkitFontSmoothing" in dr.documentElement.style, gr = !ss && /Apple Computer/.test(Ae.vendor), Ko = gr && (/Mobile\/\w+/.test(Ae.userAgent) || Ae.maxTouchPoints > 2);
var E = { mac: Ko || /Mac/.test(Ae.platform), windows: /Win/.test(Ae.platform), linux: /Linux|X11/.test(Ae.platform), ie: ss, ie_version: za ? dr.documentMode || 6 : mr ? +mr[1] : pr ? +pr[1] : 0, gecko: $o, gecko_version: $o ? +(/Firefox\/(\d+)/.exec(Ae.userAgent) || [0, 0])[1] : 0, chrome: !!Cs, chrome_version: Cs ? +Cs[1] : 0, ios: Ko, android: /Android\b/.test(Ae.userAgent), webkit_version: Kf ? +(/\bAppleWebKit\/(\d+)/.exec(Ae.userAgent) || [0, 0])[1] : 0, safari: gr, safari_version: gr ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Ae.userAgent) || [0, 0])[1] : 0, tabSize: dr.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
function Xr(n, e) {
  for (let t in n) t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const In = /* @__PURE__ */ Object.create(null);
function Qr(n, e, t) {
  if (n == e) return true;
  n || (n = In), e || (e = In);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - 0 != s.length - 0) return false;
  for (let r of i) if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r])) return false;
  return true;
}
function jf(n, e) {
  for (let t = n.attributes.length - 1; t >= 0; t--) {
    let i = n.attributes[t].name;
    e[i] == null && n.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? n.style.cssText = i : n.getAttribute(t) != i && n.setAttribute(t, i);
  }
}
function jo(n, e, t) {
  let i = false;
  if (e) for (let s in e) t && s in t || (i = true, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t) for (let s in t) e && e[s] == t[s] || (i = true, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function Uf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class ut {
  eq(e) {
    return false;
  }
  updateDOM(e, t) {
    return false;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return true;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(e) {
  }
}
var we = (function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
})(we || (we = {}));
class P extends Ct {
  constructor(e, t, i, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = s;
  }
  get heightRelevant() {
    return false;
  }
  static mark(e) {
    return new Ui(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new zt(e, t, t, i, e.widget || null, false);
  }
  static replace(e) {
    let t = !!e.block, i, s;
    if (e.isBlockGap) i = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = qa(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new zt(e, i, s, t, e.widget || null, true);
  }
  static line(e) {
    return new Gi(e);
  }
  static set(e, t = false) {
    return K.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
P.none = K.empty;
class Ui extends P {
  constructor(e) {
    let { start: t, end: i } = qa(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Xr(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || In;
  }
  eq(e) {
    return this == e || e instanceof Ui && this.tagName == e.tagName && Qr(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
Ui.prototype.point = false;
class Gi extends P {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Gi && this.spec.class == e.spec.class && Qr(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e) throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Gi.prototype.mapMode = Me.TrackBefore;
Gi.prototype.point = true;
class zt extends P {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? Me.TrackBefore : Me.TrackAfter : Me.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? we.WidgetRange : this.startSide <= 0 ? we.WidgetBefore : we.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof zt && Gf(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e) throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
zt.prototype.point = true;
function qa(n, e = false) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Gf(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function Qt(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class Pi extends Ct {
  constructor(e, t) {
    super(), this.tagName = e, this.attributes = t;
  }
  eq(e) {
    return e == this || e instanceof Pi && this.tagName == e.tagName && Qr(this.attributes, e.attributes);
  }
  static create(e) {
    return new Pi(e.tagName, e.attributes || In);
  }
  static set(e, t = false) {
    return K.of(e, t);
  }
}
Pi.prototype.startSide = Pi.prototype.endSide = -1;
function Ii(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function yr(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : false;
}
function Ai(n, e) {
  if (!e.anchorNode) return false;
  try {
    return yr(n, e.anchorNode);
  } catch {
    return false;
  }
}
function Mi(n) {
  return n.nodeType == 3 ? Wi(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Ti(n, e, t, i) {
  return t ? Uo(n, e, t, i, -1) || Uo(n, e, t, i, 1) : false;
}
function Tt(n) {
  for (var e = 0; ; e++) if (n = n.previousSibling, !n) return e;
}
function Nn(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function Uo(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i) return true;
    if (e == (s < 0 ? 0 : mt(n))) {
      if (n.nodeName == "DIV") return false;
      let r = n.parentNode;
      if (!r || r.nodeType != 1) return false;
      e = Tt(n) + (s < 0 ? 0 : 1), n = r;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false") return false;
      e = s < 0 ? mt(n) : 0;
    } else return false;
  }
}
function mt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Ni(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Yf(n) {
  let e = n.visualViewport;
  return e ? { left: 0, right: e.width, top: 0, bottom: e.height } : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function _a(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function Jf(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = false; c && !f; ) if (c.nodeType == 1) {
    let u, d = c == a.body, p = 1, m = 1;
    if (d) u = Yf(h);
    else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = true), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
        c = c.assignedSlot || c.parentNode;
        continue;
      }
      let C = c.getBoundingClientRect();
      ({ scaleX: p, scaleY: m } = _a(c, C)), u = { left: C.left, right: C.left + c.clientWidth * p, top: C.top, bottom: C.top + c.clientHeight * m };
    }
    let y = 0, b = 0;
    if (s == "nearest") e.top < u.top ? (b = e.top - (u.top + o), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + o)) : e.bottom > u.bottom && (b = e.bottom - u.bottom + o, t < 0 && e.top - b < u.top && (b = e.top - (u.top + o)));
    else {
      let C = e.bottom - e.top, k = u.bottom - u.top;
      b = (s == "center" && C <= k ? e.top + C / 2 - k / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - k + o) - u.top;
    }
    if (i == "nearest" ? e.left < u.left ? (y = e.left - (u.left + r), t > 0 && e.right > u.right + y && (y = e.right - u.right + r)) : e.right > u.right && (y = e.right - u.right + r, t < 0 && e.left < u.left + y && (y = e.left - (u.left + r))) : y = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, y || b) if (d) h.scrollBy(y, b);
    else {
      let C = 0, k = 0;
      if (b) {
        let T = c.scrollTop;
        c.scrollTop += b / m, k = (c.scrollTop - T) * m;
      }
      if (y) {
        let T = c.scrollLeft;
        c.scrollLeft += y / p, C = (c.scrollLeft - T) * p;
      }
      e = { left: e.left - C, top: e.top - k, right: e.right - C, bottom: e.bottom - k }, C && Math.abs(C - y) < 1 && (i = "nearest"), k && Math.abs(k - b) < 1 && (s = "nearest");
    }
    if (d) break;
    (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = { left: Math.max(e.left, u.left), right: Math.min(e.right, u.right), top: Math.max(e.top, u.top), bottom: Math.min(e.bottom, u.bottom) }), c = c.assignedSlot || c.parentNode;
  } else if (c.nodeType == 11) c = c.host;
  else break;
}
function Xf(n) {
  let e = n.ownerDocument, t, i;
  for (let s = n.parentNode; s && !(s == e.body || t && i); ) if (s.nodeType == 1) !i && s.scrollHeight > s.clientHeight && (i = s), !t && s.scrollWidth > s.clientWidth && (t = s), s = s.assignedSlot || s.parentNode;
  else if (s.nodeType == 11) s = s.host;
  else break;
  return { x: t, y: i };
}
class Qf {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? mt(t) : 0), i, Math.min(e.focusOffset, i ? mt(i) : 0));
  }
  set(e, t, i, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = s;
  }
}
let Lt = null;
E.safari && E.safari_version >= 26 && (Lt = false);
function $a(n) {
  if (n.setActive) return n.setActive();
  if (Lt) return n.focus(Lt);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode) ;
  if (n.focus(Lt == null ? { get preventScroll() {
    return Lt = { preventScroll: true }, true;
  } } : void 0), !Lt) {
    Lt = false;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Go;
function Wi(n, e, t = e) {
  let i = Go || (Go = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Zt(n, e, t, i) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: true };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = true, n.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = true, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function Zf(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host)) return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function eu(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i) return false;
  for (i = Math.min(i, mt(t)); ; ) if (i) {
    if (t.nodeType != 1) return false;
    let s = t.childNodes[i - 1];
    s.contentEditable == "false" ? i-- : (t = s, i = mt(t));
  } else {
    if (t == n) return true;
    i = Tt(t), t = t.parentNode;
  }
}
function Ka(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function ja(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0) return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false") return null;
      t = t.childNodes[i - 1], i = mt(t);
    } else if (t.parentNode && !Nn(t)) i = Tt(t), t = t.parentNode;
    else return null;
  }
}
function Ua(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false") return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !Nn(t)) i = Tt(t) + 1, t = t.parentNode;
    else return null;
  }
}
class je {
  constructor(e, t, i = true) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new je(e.parentNode, Tt(e), t);
  }
  static after(e, t) {
    return new je(e.parentNode, Tt(e) + 1, t);
  }
}
var te = (function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
})(te || (te = {}));
const qt = te.LTR, Zr = te.RTL;
function Ga(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
  return e;
}
const tu = Ga("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), iu = Ga("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), br = /* @__PURE__ */ Object.create(null), Xe = [];
for (let n of ["()", "[]", "{}"]) {
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  br[e] = t, br[t] = -e;
}
function Ya(n) {
  return n <= 247 ? tu[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? iu[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const nu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class st {
  get dir() {
    return this.level % 2 ? Zr : qt;
  }
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i) return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0) throw new RangeError("Index out of range");
    return r;
  }
}
function Ja(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Ja(i.inner, s.inner)) return false;
  }
  return true;
}
const ee = [];
function su(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = Ya(n.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), ee[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = ee[h];
      if (u == 128) h < l - 1 && c == ee[h + 1] && c & 24 ? u = ee[h] = c : ee[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && ee[d] == 64; ) d++;
        let p = h && c == 8 || d < t && ee[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++) ee[m] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (ee[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function ru(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, p; f < c; f++) if (d = br[u = n.charCodeAt(f)]) if (d < 0) {
      for (let m = l - 3; m >= 0; m -= 3) if (Xe[m + 1] == -d) {
        let y = Xe[m + 2], b = y & 2 ? s : y & 4 ? y & 1 ? r : s : 0;
        b && (ee[f] = ee[Xe[m]] = b), l = m;
        break;
      }
    } else {
      if (Xe.length == 189) break;
      Xe[l++] = f, Xe[l++] = u, Xe[l++] = a;
    }
    else if ((p = ee[f]) == 2 || p == 1) {
      let m = p == s;
      a = m ? 0 : 1;
      for (let y = l - 3; y >= 0; y -= 3) {
        let b = Xe[y + 2];
        if (b & 2) break;
        if (m) Xe[y + 2] |= 2;
        else {
          if (b & 4) break;
          Xe[y + 2] |= 4;
        }
      }
    }
  }
}
function ou(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let o = s ? t[s - 1].to : n, l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let h = ee[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; ) if (c == l) {
          if (s == t.length) break;
          c = t[s++].to, l = s < t.length ? t[s].from : e;
        } else if (ee[c] == 256) c++;
        else break;
        let f = r == 1, u = (c < e ? ee[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, m = s, y = m ? t[m - 1].to : n; p > a; ) p == y && (p = t[--m].from, y = m ? t[m - 1].to : n), ee[--p] = d;
        a = c;
      } else r = h, a++;
    }
  }
}
function xr(n, e, t, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2) for (let a = e, h = 0; a < t; ) {
    let c = true, f = false;
    if (h == r.length || a < r[h].from) {
      let m = ee[a];
      m != l && (c = false, f = m == 16);
    }
    let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
    e: for (; ; ) if (h < r.length && p == r[h].from) {
      if (f) break e;
      let m = r[h];
      if (!c) for (let y = m.to, b = h + 1; ; ) {
        if (y == t) break e;
        if (b < r.length && r[b].from == y) y = r[b++].to;
        else {
          if (ee[y] == l) break e;
          break;
        }
      }
      if (h++, u) u.push(m);
      else {
        m.from > a && o.push(new st(a, m.from, d));
        let y = m.direction == qt != !(d % 2);
        wr(n, y ? i + 1 : i, s, m.inner, m.from, m.to, o), a = m.to;
      }
      p = m.to;
    } else {
      if (p == t || (c ? ee[p] != l : ee[p] == l)) break;
      p++;
    }
    u ? xr(n, a, p, i + 1, s, u, o) : a < p && o.push(new st(a, p, d)), a = p;
  }
  else for (let a = t, h = r.length; a > e; ) {
    let c = true, f = false;
    if (!h || a > r[h - 1].to) {
      let m = ee[a - 1];
      m != l && (c = false, f = m == 16);
    }
    let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
    e: for (; ; ) if (h && p == r[h - 1].to) {
      if (f) break e;
      let m = r[--h];
      if (!c) for (let y = m.from, b = h; ; ) {
        if (y == e) break e;
        if (b && r[b - 1].to == y) y = r[--b].from;
        else {
          if (ee[y - 1] == l) break e;
          break;
        }
      }
      if (u) u.push(m);
      else {
        m.to < a && o.push(new st(m.to, a, d));
        let y = m.direction == qt != !(d % 2);
        wr(n, y ? i + 1 : i, s, m.inner, m.from, m.to, o), a = m.from;
      }
      p = m.from;
    } else {
      if (p == e || (c ? ee[p - 1] != l : ee[p - 1] == l)) break;
      p--;
    }
    u ? xr(n, p, a, i + 1, s, u, o) : p < a && o.push(new st(p, a, d)), a = p;
  }
}
function wr(n, e, t, i, s, r, o) {
  let l = e % 2 ? 2 : 1;
  su(n, s, r, i, l), ru(n, s, r, i, l), ou(s, r, i, l), xr(n, s, r, e, t, i, o);
}
function lu(n, e, t) {
  if (!n) return [new st(0, 0, e == Zr ? 1 : 0)];
  if (e == qt && !t.length && !nu.test(n)) return Xa(n.length);
  if (t.length) for (; n.length > ee.length; ) ee[ee.length] = 256;
  let i = [], s = e == qt ? 0 : 1;
  return wr(n, s, s, t, 0, n.length, i), i;
}
function Xa(n) {
  return [new st(0, n, 0)];
}
let Qa = "";
function au(n, e, t, i, s) {
  var r;
  let o = i.head - n.from, l = st.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = e[l], h = a.side(s, t);
  if (o == h) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= e.length) return null;
    a = e[l = u], o = a.side(!s, t), h = a.side(s, t);
  }
  let c = me(n.text, o, a.forward(s, t));
  (c < a.from || c > a.to) && (c = h), Qa = n.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level ? w.cursor(f.side(!s, t) + n.from, f.forward(s, t) ? 1 : -1, f.level) : w.cursor(c + n.from, a.forward(s, t) ? -1 : 1, a.level);
}
function hu(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = Ya(n.charCodeAt(i));
    if (s == 1) return qt;
    if (s == 2 || s == 4) return Zr;
  }
  return qt;
}
const Za = B.define(), eh = B.define(), th = B.define(), ih = B.define(), vr = B.define(), nh = B.define(), sh = B.define(), eo = B.define(), to = B.define(), rh = B.define({ combine: (n) => n.some((e) => e) }), oh = B.define({ combine: (n) => n.some((e) => e) }), lh = B.define();
class ei {
  constructor(e, t = "nearest", i = "nearest", s = 5, r = 5, o = false) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new ei(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new ei(w.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const rn = q.define({ map: (n, e) => n.map(e) }), ah = q.define();
function Te(n, e, t) {
  let i = n.facet(ih);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const dt = B.define({ combine: (n) => n.length ? n[0] : true });
let cu = 0;
const Gt = B.define({ combine(n) {
  return n.filter((e, t) => {
    for (let i = 0; i < t; i++) if (n[i].plugin == e.plugin) return false;
    return true;
  });
} });
class le {
  constructor(e, t, i, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Gt.of({ plugin: this, arg: void 0 }));
  }
  of(e) {
    return this.baseExtensions.concat(Gt.of({ plugin: this, arg: e }));
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = t || {};
    return new le(cu++, e, i, s, (l) => {
      let a = [];
      return o && a.push(rs.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : P.none;
      })), r && a.push(r(l)), a;
    });
  }
  static fromClass(e, t) {
    return le.define((i, s) => new e(i, s), t);
  }
}
class As {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(t);
        } catch (i) {
          if (Te(t.state, i, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.plugin.create(e, this.spec.arg);
    } catch (t) {
      Te(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy) try {
      this.value.destroy();
    } catch (i) {
      Te(e.state, i, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const hh = B.define(), io = B.define(), rs = B.define(), ch = B.define(), no = B.define(), Yi = B.define(), fh = B.define();
function Yo(n, e) {
  let t = n.state.facet(fh);
  if (!t.length) return t;
  let i = t.map((r) => r instanceof Function ? r(n) : r), s = [];
  return K.spans(i, e.from, e.to, { point() {
  }, span(r, o, l, a) {
    let h = r - e.from, c = o - e.from, f = s;
    for (let u = l.length - 1; u >= 0; u--, a--) {
      let d = l[u].spec.bidiIsolate, p;
      if (d == null && (d = hu(e.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d) p.to = c, f = p.inner;
      else {
        let m = { from: h, to: c, direction: d, inner: [] };
        f.push(m), f = m.inner;
      }
    }
  } }), s;
}
const uh = B.define();
function so(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let r of n.state.facet(uh)) {
    let o = r(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const bi = B.define();
class He {
  constructor(e, t, i, s) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new He(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA) break;
        i = i.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let i = [];
    for (let s = 0, r = 0, o = 0; ; ) {
      let l = s < e.length ? e[s].fromB : 1e9, a = r < t.length ? t[r] : 1e9, h = Math.min(l, a);
      if (h == 1e9) break;
      let c = h + o, f = h, u = c;
      for (; ; ) if (r < t.length && t[r] <= f) {
        let d = t[r + 1];
        r += 2, f = Math.max(f, d);
        for (let p = s; p < e.length && e[p].fromB <= f; p++) o = e[p].toA - e[p].toB;
        u = Math.max(u, d + o);
      } else if (s < e.length && e[s].fromB <= f) {
        let d = e[s++];
        f = Math.max(f, d.toB), u = Math.max(u, d.toA), o = d.toA - d.toB;
      } else break;
      i.push(new He(c, u, h, f));
    }
    return i;
  }
}
class Wn {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = fe.empty(this.startState.doc.length);
    for (let r of i) this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new He(r, o, l, a))), this.changedRanges = s;
  }
  static create(e, t, i) {
    return new Wn(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const fu = [];
class ce {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return fu;
  }
  isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  isComposite() {
    return false;
  }
  isLine() {
    return false;
  }
  isText() {
    return false;
  }
  isBlock() {
    return false;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && jf(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let s of this.children) {
      if (s == e) return i;
      i += s.length + s.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return true;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let i = Tt(this.dom), s = this.length ? e > 0 : t > 0;
    return new je(this.parent.dom, i + (s ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(false);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent) if (e instanceof ls) return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class os extends ce {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return true;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2) return;
    super.sync(e);
    let t = this.dom, i = null, s, r = (e == null ? void 0 : e.node) == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, s = i ? i.nextSibling : t.firstChild, r && s != l.dom && (r.written = true), l.dom.parentNode == t) for (; s && s != l.dom; ) s = Jo(s);
      else t.insertBefore(l.dom, s);
      i = l.dom;
    }
    for (s = i ? i.nextSibling : t.firstChild, r && s && (r.written = true); s; ) s = Jo(s);
    this.length = o;
  }
}
function Jo(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class ls extends os {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent) if (e == this) return true;
    return false;
  }
  isBlock() {
    return true;
  }
  nearest(e) {
    for (; ; ) {
      if (!e) return null;
      let t = ce.get(e);
      if (t && this.owns(t)) return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, s = 0, r = 0; ; ) if (s == i.children.length) {
      if (!t.length) return;
      i = i.parent, i.breakAfter && r++, s = t.pop();
    } else {
      let o = i.children[s++];
      if (o instanceof kt) t.push(s), i = o, s = 0;
      else {
        let l = r + o.length, a = e(o, r);
        if (a !== void 0) return a;
        r = l + o.breakAfter;
      }
    }
  }
  resolveBlock(e, t) {
    let i, s = -1, r, o = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (e >= a && e <= h) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32) return true;
          l.flags & 16 && (i = void 0);
        }
        (a < e || e == h && (t < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget()) && (i = l, s = e - a), (h > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!r || !l.isWidget() && r.isWidget()) && (r = l, o = e - a);
      }
    }), !i && !r) throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: s } : { tile: r, offset: o };
  }
}
class kt extends os {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return true;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : false;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new kt(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class si extends os {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return true;
  }
  static start(e, t, i) {
    let s = new si(t || document.createElement("div"), e);
    return (!t || !i) && (s.flags |= 4), s;
  }
  get domAttrs() {
    return this.attrs;
  }
  resolveInline(e, t, i) {
    let s = null, r = -1, o = null, l = -1;
    function a(c, f) {
      for (let u = 0, d = 0; u < c.children.length && d <= f; u++) {
        let p = c.children[u], m = d + p.length;
        m >= f && (p.isComposite() ? a(p, f - d) : (!o || o.isHidden && (t > 0 || i && du(o, p))) && (m > f || p.flags & 32) ? (o = p, l = f - d) : (d < f || p.flags & 16 && !p.isHidden) && (s = p, r = f - d)), d = m;
      }
    }
    a(this, e);
    let h = (t < 0 ? s : o) || s || o;
    return h ? { tile: h, offset: h == s ? r : l } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, true);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : uu(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: s, offset: r } = i;
      if (this.dom.contains(s.dom)) return s.isText() ? new je(s.dom, Math.min(s.dom.nodeValue.length, r)) : s.domPosFor(r, s.flags & 16 ? 1 : s.flags & 32 ? -1 : t);
      let o = i.tile.parent, l = false;
      for (let a of o.children) {
        if (l) return new je(a.dom, 0);
        a == i.tile && (l = true);
      }
    }
    return new je(this.dom, 0);
  }
}
function uu(n) {
  let e = n.dom.lastChild;
  if (!e) return n.dom.getBoundingClientRect();
  let t = Mi(e);
  return t[t.length - 1] || null;
}
function du(n, e) {
  let t = n.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class Re extends os {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new Re(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Wt extends ce {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = true), this.dom.nodeValue = this.text));
  }
  isText() {
    return true;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let i = this.dom.nodeValue.length;
    e > i && (e = i);
    let s = e, r = e, o = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? E.chrome || E.gecko || (e ? (s--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? s-- : r < i && r++;
    let l = Wi(this.dom, s, r).getClientRects();
    if (!l.length) return null;
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    return E.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? Ni(a, o < 0) : a || null;
  }
  static of(e, t) {
    let i = new Wt(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class _t extends ce {
  constructor(e, t, i, s) {
    super(e, t, s), this.widget = i;
  }
  isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? false : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, false);
  }
  coordsInWidget(e, t, i) {
    let s = this.widget.coordsAt(this.dom, e, t);
    if (s) return s;
    if (i) return Ni(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length) return null;
      let l = this.flags & 16 ? true : this.flags & 32 ? false : e > 0;
      for (let a = l ? r.length - 1 : 0; o = r[a], !(e > 0 ? a == 0 : a == r.length - 1 || o.top < o.bottom); a += l ? -1 : 1) ;
      return Ni(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length) return J.empty;
    let { root: e } = this;
    if (!e) return J.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, s, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new _t(r, i, e, s);
  }
}
class Hn extends ce {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return true;
  }
  get overrideDOMText() {
    return J.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class pu {
  constructor(e) {
    this.index = 0, this.beforeBreak = false, this.parents = [], this.tile = e;
  }
  advance(e, t, i) {
    let { tile: s, index: r, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; ) if (s.isComposite()) if (o) {
      if (!e) break;
      i && i.break(), e--, o = false;
    } else if (r == s.children.length) {
      if (!e && !l.length) break;
      i && i.leave(s), o = !!s.breakAfter, { tile: s, index: r } = l.pop(), r++;
    } else {
      let a = s.children[r], h = a.breakAfter;
      (t > 0 ? a.length <= e : a.length < e) && (!i || i.skip(a, 0, a.length) !== false || !a.isComposite) ? (o = !!h, r++, e -= a.length) : (l.push({ tile: s, index: r }), s = a, r = 0, i && a.isComposite() && i.enter(a));
    }
    else if (r == s.length) o = !!s.breakAfter, { tile: s, index: r } = l.pop(), r++;
    else if (e) {
      let a = Math.min(e, s.length - r);
      i && i.skip(s, r, r + a), e -= a, r += a;
    } else break;
    return this.tile = s, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class mu {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = s;
  }
}
class gu {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, s) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(t, i), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + e.length < 512) {
      this.cache.reused.set(l, 2);
      let a = o.children[o.children.length - 1] = new Wt(l.dom, l.text + e);
      a.parent = o;
    } else o.append(s || Wt.of(e, (r = this.cache.find(Wt)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? Ms(t.line.dom) : t.line.dom), this.cache.reused.set(t.line, 2));
    let s = i;
    for (let l = t.marks.length - 1; l >= 0; l--) {
      let a = t.marks[l], h = s.lastChild;
      if (h instanceof Re && h.mark.eq(a.mark)) h.dom != a.dom && h.setDOM(Ms(a.dom)), s = h;
      else {
        if (this.cache.reused.get(a)) {
          let f = ce.get(a.dom);
          f && f.setDOM(Ms(a.dom));
        }
        let c = Re.of(a.mark, a.dom);
        s.append(c), s = c;
      }
      this.cache.reused.set(a, 2);
    }
    let r = ce.get(e.text);
    r && this.cache.reused.set(r, 2);
    let o = new Wt(e.text, e.text.nodeValue);
    o.flags |= 8, s.append(o);
  }
  addInlineWidget(e, t, i) {
    let s = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    s || this.flushBuffer();
    let r = this.ensureMarks(t, i);
    !s && !(e.flags & 16) && r.append(this.getBuffer(1)), r.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer(), this.ensureMarks(t, i).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var i;
    e || (e = dh);
    let s = si.start(e, t || ((i = this.cache.find(si)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = s);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var i;
    let s = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r], l;
      if (t > 0 && (l = s.lastChild) && l instanceof Re && l.mark.eq(o)) s = l, t--;
      else {
        let a = Re.of(o, (i = this.cache.find(Re, (h) => h.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        s.append(a), s = a, t = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !Xo(this.curLine, false) || e.dom.nodeName != "BR" && e.isWidget() && !(E.ios && Xo(this.curLine, true))) && this.curLine.append(this.cache.findWidget(Ts, 0, 32) || new _t(Ts.toDOM(), 0, Ts, 32)), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--) this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next()) if (e.to >= this.pos) {
      let t = new mu(e.from, e.to, e.value, e.rank), i = this.wrappers.length;
      for (; i > 0 && (this.wrappers[i - 1].rank - t.rank || this.wrappers[i - 1].to - t.to) < 0; ) i--;
      this.wrappers.splice(i, 0, t);
    }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let s = t.lastChild;
      if (i.from < this.pos && s instanceof kt && s.wrapper.eq(i.wrapper)) t = s;
      else {
        let r = kt.of(i.wrapper, (e = this.cache.find(kt, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(r), t = r;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), i = this.cache.find(Hn, void 0, 1);
    return i && (i.flags = t), i || new Hn(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class yu {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: r, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o) throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let l = this.textOff = Math.min(e, s.length);
      return r ? null : s.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const Fn = [_t, si, Wt, Re, Hn, kt, ls];
for (let n = 0; n < Fn.length; n++) Fn[n].bucket = n;
class bu {
  constructor(e) {
    this.view = e, this.buckets = Fn.map(() => []), this.index = Fn.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  add(e) {
    let t = e.constructor.bucket, i = this.buckets[t];
    i.length < 6 ? i.push(e) : i[this.index[t] = (this.index[t] + 1) % 6] = e;
  }
  find(e, t, i = 2) {
    let s = e.bucket, r = this.buckets[s], o = this.index[s];
    for (let l = r.length - 1; l >= 0; l--) {
      let a = (l + o) % r.length, h = r[a];
      if ((!t || t(h)) && !this.reused.has(h)) return r.splice(a, 1), a < o && this.index[s]--, this.reused.set(h, i), h;
    }
    return null;
  }
  findWidget(e, t, i) {
    let s = this.buckets[0];
    if (s.length) for (let r = 0, o = 0; ; r++) {
      if (r == s.length) {
        if (o) return null;
        o = 1, r = 0;
      }
      let l = s[r];
      if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view))) return s.splice(r, 1), r < this.index[0] && this.index[0]--, l.widget == e && l.length == t && (l.flags & 497) == i ? (this.reused.set(l, 1), l) : (this.reused.set(l, 2), new _t(l.dom, t, e, l.flags & -498 | i));
    }
  }
  reuse(e) {
    return this.reused.set(e, 1), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e)) return this.reused.set(e, t), e.dom;
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++) this.buckets[e].length = this.index[e] = 0;
  }
}
class xu {
  constructor(e, t, i, s, r) {
    this.view = e, this.decorations = s, this.disallowBlockEffectsFor = r, this.openWidget = false, this.openMarks = 0, this.cache = new bu(e), this.text = new yu(e.state.doc), this.builder = new gu(this.cache, new ls(e, e.contentDOM), K.iter(i)), this.cache.reused.set(t, 2), this.old = new pu(t), this.reuseWalker = { skip: (o, l, a) => {
      if (this.cache.add(o), o.isComposite()) return false;
    }, enter: (o) => this.cache.add(o), leave: () => {
    }, break: () => {
    } };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let s = 0, r = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > s) {
        let h = a - s;
        this.preserve(h, !o, !l), s = a, r += h;
      }
      if (!l) break;
      t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.forward(l.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, l.toA), this.emit(t.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(r, l.toB)), r = l.toB, s = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let s = ku(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, { skip: (o, l, a) => {
      if (o.isWidget()) if (this.openWidget) this.builder.continueWidget(a - l);
      else {
        let h = a > 0 || l < o.length ? _t.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
        h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, s, r), r = s.length);
      }
      else if (o.isText()) this.builder.ensureLine(null), !l && a == o.length ? this.builder.addText(o.text, s, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), s, r)), r = s.length;
      else if (o.isLine()) o.flags &= -2, this.cache.reused.set(o, 1), this.builder.addLine(o);
      else if (o instanceof Hn) this.cache.add(o);
      else if (o instanceof Re) this.builder.ensureLine(null), this.builder.addMark(o, s, r), this.cache.reused.set(o, 1), r = s.length;
      else return false;
      this.openWidget = false;
    }, enter: (o) => {
      o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof Re && s.unshift(o.mark)), this.openWidget = false;
    }, leave: (o) => {
      o.isLine() ? s.length && (s.length = r = 0) : o instanceof Re && (s.shift(), r = Math.min(r, s.length));
    }, break: () => {
      this.builder.addBreak(), this.openWidget = false;
    } }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, s = this.builder, r = 0, o = K.spans(this.decorations, e, t, { point: (l, a, h, c, f, u) => {
      if (h instanceof zt) {
        if (this.disallowBlockEffectsFor[u]) {
          if (h.block) throw new RangeError("Block decorations may not be specified via plugins");
          if (a > this.view.state.doc.lineAt(l).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
        }
        if (r = c.length, f > c.length) s.continueWidget(a - l);
        else {
          let d = h.widget || (h.block ? ri.block : ri.inline), p = wu(h), m = this.cache.findWidget(d, a - l, p) || _t.of(d, this.view, a - l, p);
          h.block ? (h.startSide > 0 && s.addLineStartIfNotCovered(i), s.addBlockWidget(m)) : (s.ensureLine(i), s.addInlineWidget(m, c, f));
        }
        i = null;
      } else i = vu(i, h);
      a > l && this.text.skip(a - l);
    }, span: (l, a, h, c) => {
      for (let f = l; f < a; ) {
        let u = this.text.next(Math.min(512, a - f));
        u == null ? (s.addLineStartIfNotCovered(i), s.addBreak(), f++) : (s.ensureLine(i), s.addText(u, h, f == l ? c : h.length), f += u.length), i = null;
      }
    } });
    s.addLineStartIfNotCovered(i), this.openWidget = o > r, this.openMarks = o;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let s = e.parentNode; ; s = s.parentNode) {
      let r = ce.get(s);
      if (s == this.view.contentDOM) break;
      r instanceof Re ? t.push(r) : (r == null ? void 0 : r.isLine()) ? i = r : s.nodeName == "DIV" && !i && s != this.view.contentDOM ? i = new si(s, dh) : t.push(Re.of(new Ui({ tagName: s.nodeName.toLowerCase(), attributes: Uf(s) }), s));
    }
    return { line: i, marks: t };
  }
}
function Xo(n, e) {
  let t = (i) => {
    for (let s of i.children) if ((e ? s.isText() : s.length) || t(s)) return true;
    return false;
  };
  return t(n);
}
function wu(n) {
  let e = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16;
  return n.block && (e |= 256), e;
}
const dh = { class: "cm-line" };
function vu(n, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (n || (n = { class: "cm-line" }), t && Xr(t, n), i && (n.class += " " + i)), n;
}
function ku(n) {
  let e = [];
  for (let t = n.parents.length; t > 1; t--) {
    let i = t == n.parents.length ? n.tile : n.parents[t].tile;
    i instanceof Re && e.push(i.mark);
  }
  return e;
}
function Ms(n) {
  let e = ce.get(n);
  return e && e.setDOM(n.cloneNode()), n;
}
class ri extends ut {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
ri.inline = new ri("span");
ri.block = new ri("div");
const Ts = new class extends ut {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return true;
  }
  get editable() {
    return true;
  }
}();
class Qo {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = P.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ls(e, e.contentDOM), this.updateInner([new He(0, 0, 0, e.state.doc.length)], null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: f }) => f < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !Bu(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? Cu(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: f } = this.hasComposition;
      i = new He(c, f, e.changes.mapPos(c, -1), e.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (E.ie || E.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = true);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = Tu(o, this.decorations, e.changes);
    a.length && (i = He.extendWithRanges(i, a));
    let h = Ou(l, this.blockWrappers, e.changes);
    return h.length && (i = He.extendWithRanges(i, h)), r && !i.some((c) => c.fromA <= r.range.fromA && c.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? false : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = true;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new xu(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        this.tile = l.run(e, t), kr(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = E.chrome || E.ios ? { node: i.selectionRange.focusNode, written: false } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = true), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let r of this.tile.children) r.isWidget() && r.widget instanceof Ds && s.push(r.dom);
    i.updateGaps(s);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions) for (let i of t.effects) i.is(ah) && (this.editContextFormatting = i.value);
  }
  updateSelection(e = false, t = false) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, s = this.view.root.activeElement, r = s == i, o = !r && !(this.view.state.facet(dt) || i.tabIndex > -1) && Ai(i, this.view.observer.selectionRange) && !(s && i.contains(s));
    if (!(r || t || o)) return;
    let l = this.forceSelection;
    this.forceSelection = false;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), E.gecko && a.empty && !this.hasComposition && Su(h)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(u, h.node.childNodes[h.offset] || null)), h = c = new je(u, 0), l = true;
    }
    let f = this.view.observer.selectionRange;
    (l || !f.focusNode || (!Ti(h.node, h.offset, f.anchorNode, f.anchorOffset) || !Ti(c.node, c.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) && (this.view.observer.ignore(() => {
      E.android && E.chrome && i.contains(f.focusNode) && Eu(f.focusNode, i) && (i.blur(), i.focus({ preventScroll: true }));
      let u = Ii(this.view.root);
      if (u) if (a.empty) {
        if (E.gecko) {
          let d = Au(h.node, h.offset);
          if (d && d != 3) {
            let p = (d == 1 ? ja : Ua)(h.node, h.offset);
            p && (h = new je(p.node, p.offset));
          }
        }
        u.collapse(h.node, h.offset), a.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = a.bidiLevel);
      } else if (u.extend) {
        u.collapse(h.node, h.offset);
        try {
          u.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let d = document.createRange();
        a.anchor > a.head && ([h, c] = [c, h]), d.setEnd(c.node, c.offset), d.setStart(h.node, h.offset), u.removeAllRanges(), u.addRange(d);
      }
      o && this.view.root.activeElement == i && (i.blur(), s && s.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new je(f.anchorNode, f.anchorOffset), this.impreciseHead = c.precise ? null : new je(f.focusNode, f.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Ti(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this, t = e.state.selection.main, i = Ii(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify) return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top) return;
    let c = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(s, r);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i) return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let s = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (e == i.dom) r = i.dom.childNodes[t];
      else {
        let o = mt(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == i.dom) break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? r = e : r = e.nextSibling;
      }
      if (r == i.dom.firstChild) return s;
      for (; r && !ce.get(r); ) r = r.nextSibling;
      if (!r) return s + i.length;
      for (let o = 0, l = s; ; o++) {
        let a = i.children[o];
        if (a.dom == r) return l;
        l += a.length + a.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? s + t : s + (t ? i.length : 0) : s;
  }
  domAtPos(e, t) {
    let { tile: i, offset: s } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(s, t);
  }
  inlineDOMNearPos(e, t) {
    let i, s = -1, r = false, o, l = -1, a = false;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e) return true;
        h.flags & 16 && (r = true);
      } else {
        let f = c + h.length;
        if (c <= e && (i = h, s = e - c, r = f < e), f >= e && !o && (o = h, l = e - c, a = c > e), c > e && o) return true;
      }
    }), !i && !o ? this.domAtPos(e, t) : (r && o ? i = null : a && i && (o = null), i && t < 0 || !o ? i.domIn(s, t) : o.domIn(l, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: s } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof Ds ? null : i.coordsInWidget(s, t, true) : i.coordsIn(s, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine()) return null;
    function s(r, o) {
      if (r.isComposite()) for (let l of r.children) {
        if (l.length >= o) {
          let a = s(l, o);
          if (a) return a;
        }
        if (o -= l.length, o < 0) break;
      }
      else if (r.isText() && o < r.length) {
        let l = me(r.text, o);
        if (l == o) return null;
        let a = Wi(r.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right) return c;
        }
      }
      return null;
    }
    return s(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == te.LTR, h = 0, c = (f, u, d) => {
      for (let p = 0; p < f.children.length && !(u > s); p++) {
        let m = f.children[p], y = u + m.length, b = m.dom.getBoundingClientRect(), { height: C } = b;
        if (d && !p && (h += b.top - d.top), m instanceof kt) y > i && c(m, u, b);
        else if (u >= i && (h > 0 && t.push(-h), t.push(C + h), h = 0, o)) {
          let k = m.dom.lastChild, T = k ? Mi(k) : [];
          if (T.length) {
            let A = T[T.length - 1], M = a ? A.right - b.left : b.right - A.left;
            M > l && (l = M, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = y);
          }
        }
        d && p == f.children.length - 1 && (h += d.bottom - b.bottom), u = y + m.breakAfter;
      }
    };
    return c(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? te.RTL : te.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text)) return;
          let c = Mi(h.dom);
          if (c.length != 1) return;
          l += c[0].width, a = c[0].height;
        }
        if (l) return { lineHeight: o.dom.getBoundingClientRect().height, charWidth: l / o.length, textHeight: a };
      }
    });
    if (e) return e;
    let t = document.createElement("div"), i, s, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Mi(t.firstChild)[0];
      i = t.getBoundingClientRect().height, s = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : i, t.remove();
    }), { lineHeight: i, charWidth: s, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(P.replace({ widget: new Ds(l), block: true, inclusive: true, isBlockGap: true }).range(i, o));
      }
      if (!r) break;
      i = r.to + 1;
    }
    return P.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(rs).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = false, s = this.view.state.facet(no).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = true), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = i, t.push(K.join(s))), this.decorations = [this.editContextFormatting, ...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length; ) this.dynamicDecorationMap[e++] = false;
    this.blockWrappers = this.view.state.facet(ch).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(lh)) try {
      if (h(this.view, e.range, e)) return true;
    } catch (c) {
      Te(this.view.state, c, "scroll handler");
    }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), s;
    if (!i) return;
    !t.empty && (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = { left: Math.min(i.left, s.left), top: Math.min(i.top, s.top), right: Math.max(i.right, s.right), bottom: Math.max(i.bottom, s.bottom) });
    let r = so(this.view), o = { left: i.left - r.left, top: i.top - r.top, right: i.right + r.right, bottom: i.bottom + r.bottom }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Jf(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == te.LTR);
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    kr(this.tile);
  }
}
function kr(n, e) {
  let t = e == null ? void 0 : e.get(n);
  if (t != 1) {
    t == null && n.destroy();
    for (let i of n.children) kr(i, e);
  }
}
function Su(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function ph(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode) return null;
  let i = ja(t.focusNode, t.focusOffset), s = Ua(t.focusNode, t.focusOffset), r = i || s;
  if (s && i && s.node != i.node) {
    let l = ce.get(s.node);
    if (!l || l.isText() && l.text != s.node.nodeValue) r = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = ce.get(i.node);
      !a || a.isText() && a.text != i.node.nodeValue || (r = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = r != i, !r) return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Cu(n, e, t) {
  let i = ph(n, t);
  if (!i) return null;
  let { node: s, from: r, to: o } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
  let a = e.invertedDesc;
  return { range: new He(a.mapPos(r), a.mapPos(o), r, o), text: s };
}
function Au(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let Mu = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Qt(e, t, this.changes);
  }
  comparePoint(e, t) {
    Qt(e, t, this.changes);
  }
  boundChange(e) {
    Qt(e, e, this.changes);
  }
};
function Tu(n, e, t) {
  let i = new Mu();
  return K.compare(n, e, t, i), i.changes;
}
class Du {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Qt(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    Qt(e, e, this.changes);
  }
}
function Ou(n, e, t) {
  let i = new Du();
  return K.compare(n, e, t, i), i.changes;
}
function Eu(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode) if (t.nodeType == 1 && t.contentEditable == "false") return true;
  return false;
}
function Bu(n, e) {
  let t = false;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = true);
  }), t;
}
class Ds extends ut {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
function Ru(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), r = e - s.from;
  if (s.length == 0) return w.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = me(s.text, r, false) : l = me(s.text, r);
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = me(s.text, o, false);
    if (i(s.text.slice(h, o)) != a) break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = me(s.text, l);
    if (i(s.text.slice(l, h)) != a) break;
    l = h;
  }
  return w.range(o + s.from, l + s.from);
}
function Lu(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + cr(o, r, n.state.tabSize);
}
function Sr(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let s;
    for (let r of i.type) {
      if (r.from > e) break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e) return r;
        (!s || r.type == we.Text && (s.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (s = r);
      }
    }
    return s || i;
  }
  return i;
}
function Pu(n, e, t, i) {
  let s = Sr(n, e.head, e.assoc || -1), r = !i || s.type != we.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({ x: t == (l == te.LTR) ? o.right - 1 : o.left + 1, y: (r.top + r.bottom) / 2 });
    if (a != null) return w.cursor(a, t ? -1 : 1);
  }
  return w.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function Zo(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = au(s, r, o, l, t), c = Qa;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1)) return l;
      c = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), r = n.bidiSpans(s), h = n.visualLineSide(s, !t);
    }
    if (a) {
      if (!a(c)) return l;
    } else {
      if (!i) return h;
      a = i(c);
    }
    l = h;
  }
}
function Iu(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (r) => {
    let o = i(r);
    return s == se.Space && (s = o), s == o;
  };
}
function Nu(n, e, t, i) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0)) return w.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, (e.empty ? e.assoc : 0) || (t ? 1 : -1)), c = n.documentTop;
  if (h) o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let p = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - p.from))), l = (r < 0 ? p.top : p.bottom) + c;
  }
  let f = a.left + o, u = i ?? n.viewState.heightOracle.textHeight >> 1, d = Cr(n, { x: f, y: l + u * r }, false, r);
  return w.cursor(d.pos, d.assoc, void 0, o);
}
function Di(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let s of n) s.between(e - 1, e + 1, (r, o, l) => {
      if (e > r && e < o) {
        let a = i || t || (e - r < o - e ? -1 : 1);
        e = a < 0 ? r : o, i = a;
      }
    });
    if (!i) return e;
  }
}
function mh(n, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let s = e.ranges[i], r = null;
    if (s.empty) {
      let o = Di(n, s.from, 0);
      o != s.from && (r = w.cursor(o, -1));
    } else {
      let o = Di(n, s.from, -1), l = Di(n, s.to, 1);
      (o != s.from || l != s.to) && (r = w.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? w.create(t, e.mainIndex) : e;
}
function Os(n, e, t) {
  let i = Di(n.state.facet(Yi).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : w.cursor(i, i < t.from ? 1 : -1);
}
class nt {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function Cr(n, e, t, i) {
  let s = n.contentDOM.getBoundingClientRect(), r = s.top + n.viewState.paddingTop, { x: o, y: l } = e, a = l - r, h;
  for (; ; ) {
    if (a < 0) return new nt(0, 1);
    if (a > n.viewState.docHeight) return new nt(n.state.doc.length, -1);
    if (h = n.elementAtHeight(a), i == null) break;
    if (h.type == we.Text) {
      if (i < 0 ? h.to < n.viewport.from : h.from > n.viewport.to) break;
      let u = n.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= a + r : u.bottom >= a + r)) break;
    }
    let f = n.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? h.bottom + f : h.top - f;
  }
  if (n.viewport.from >= h.to || n.viewport.to <= h.from) {
    if (t) return null;
    if (h.type == we.Text) {
      let f = Lu(n, s, h, o, l);
      return new nt(f, f == h.from ? 1 : -1);
    }
  }
  if (h.type != we.Text) return a < (h.top + h.bottom) / 2 ? new nt(h.from, 1) : new nt(h.to, -1);
  let c = n.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = n.docView.lineAt(h.from, -2)), new Wu(n, o, l, n.textDirectionAt(h.from)).scanTile(c, h.from);
}
class Wu {
  constructor(e, t, i, s) {
    this.view = e, this.x = t, this.y = i, this.baseDir = s, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: s } = this.bidiSpansAt(e);
    return s[st.find(s, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: s } = this.bidiSpansAt(e);
    return s[st.find(s, e - i.from, -1, t)].dir;
  }
  bidiIn(e, t) {
    let { spans: i, line: s } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + s.from < t);
  }
  scan(e, t) {
    let i = 0, s = e.length - 1, r = /* @__PURE__ */ new Set(), o = this.bidiIn(e[0], e[s]), l, a, h = -1, c = 1e9, f;
    e: for (; i < s; ) {
      let d = s - i, p = i + s >> 1;
      t: if (r.has(p)) {
        let y = i + Math.floor(Math.random() * d);
        for (let b = 0; b < d; b++) {
          if (!r.has(y)) {
            p = y;
            break t;
          }
          y++, y == s && (y = i);
        }
        break e;
      }
      r.add(p);
      let m = t(p);
      if (m) for (let y = 0; y < m.length; y++) {
        let b = m[y], C = 0;
        if (b.bottom < this.y) (!l || l.bottom < b.bottom) && (l = b), C = 1;
        else if (b.top > this.y) (!a || a.top > b.top) && (a = b), C = -1;
        else {
          let k = b.left > this.x ? this.x - b.left : b.right < this.x ? this.x - b.right : 0, T = Math.abs(k);
          T < c && (h = p, c = T, f = b), k && (C = k < 0 == (this.baseDir == te.LTR) ? -1 : 1);
        }
        C == -1 && (!o || this.baseDirAt(e[p], 1)) ? s = p : C == 1 && (!o || this.baseDirAt(e[p + 1], -1)) && (i = p + 1);
      }
    }
    if (!f) {
      let d = l && (!a || this.y - l.bottom < a.top - this.y) ? l : a;
      return this.y = (d.top + d.bottom) / 2, this.scan(e, t);
    }
    let u = (o ? this.dirAt(e[h], 1) : this.baseDir) == te.LTR;
    return { i: h, after: this.x > (f.left + f.right) / 2 == u };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = me(e.text, r)) i.push(t + r);
    i.push(t + e.length);
    let s = this.scan(i, (r) => {
      let o = i[r] - t, l = i[r + 1] - t;
      return Wi(e.dom, o, l).getClientRects();
    });
    return s.after ? new nt(i[s.i + 1], -1) : new nt(i[s.i], 1);
  }
  scanTile(e, t) {
    if (!e.length) return new nt(t, 1);
    if (e.children.length == 1) {
      let l = e.children[0];
      if (l.isText()) return this.scanText(l, t);
      if (l.isComposite()) return this.scanTile(l, t);
    }
    let i = [t];
    for (let l = 0, a = t; l < e.children.length; l++) i.push(a += e.children[l].length);
    let s = this.scan(i, (l) => {
      let a = e.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : Wi(a.dom, 0, a.length)).getClientRects();
    }), r = e.children[s.i], o = i[s.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : s.after ? new nt(i[s.i + 1], -1) : new nt(o, 1);
  }
}
const xi = "\uFFFF";
class Hu {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(j.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += xi;
  }
  readRange(e, t) {
    if (!e) return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = ce.get(s), l = s.nextSibling;
      if (l == t) {
        (o == null ? void 0 : o.breakAfter) && !l && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = ce.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : Nn(s)) || Nn(l) && (s.nodeName != "BR" || (o == null ? void 0 : o.isWidget())) && this.text.length > r) && !Vu(l, t) && this.lineBreak(), s = l;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points) i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = s.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0) break;
      if (this.lineBreak(), o > 1) for (let a of this.points) a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    let t = ce.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; ) s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points) i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points) (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Fu(e, i.node, i.offset) ? t : 0));
  }
}
function Fu(n, e, t) {
  for (; ; ) {
    if (!e || t < mt(e)) return false;
    if (e == n) return true;
    t = Tt(e) + 1, e = e.parentNode;
  }
}
function Vu(n, e) {
  let t;
  for (; !(n == e || !n); n = n.nextSibling) {
    let i = ce.get(n);
    if (!(i == null ? void 0 : i.isWidget())) return false;
    i && (t || (t = [])).push(i);
  }
  if (t) for (let i of t) {
    let s = i.overrideDOMText;
    if (s == null ? void 0 : s.length) return false;
  }
  return true;
}
class el {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class zu {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = gh(e.docView.tile, t, i, 0))) {
      let l = r || o ? [] : _u(e), a = new Hu(l, e);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = $u(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !yr(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !yr(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = e.viewport;
      if ((E.ios || E.chrome) && e.state.selection.main.empty && a != h && (c.from > 0 || c.to < e.state.doc.length)) {
        let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
        (d == 0 || d == 1 || f == 0) && (p == 0 || p == -1 || u == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      e.inputState.composing > -1 && e.state.selection.ranges.length > 1 ? this.newSel = e.state.selection.replaceRange(w.range(h, a)) : this.newSel = w.single(h, a);
    }
  }
}
function gh(n, e, t, i) {
  if (n.isComposite()) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < n.children.length; a++) {
      let f = n.children[a], u = h + f.length;
      if (h < e && u > t) return gh(f, e, t, h);
      if (u >= e && s == -1 && (s = a, r = h), h > t && f.dom.parentNode == n.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return { from: r, to: l < 0 ? i + n.length : l, startDOM: (s ? n.children[s - 1].dom.nextSibling : null) || n.dom.firstChild, endDOM: o < n.children.length && o >= 0 ? n.children[o].dom : null };
  } else return n.isText() ? { from: i, to: i + n.length, startDOM: n.dom, endDOM: n.dom.nextSibling } : null;
}
function yh(n, e) {
  let t, { newSel: i } = e, s = n.state.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, h = null;
    (r === 8 || E.android && e.text.length < l - o) && (a = s.to, h = "end");
    let c = bh(n.state.doc.sliceString(o, l, xi), e.text, a - o, h);
    c && (E.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == xi + xi && c.toB--, t = { from: o + c.from, to: o + c.toA, insert: J.of(e.text.slice(c.from, c.toB).split(xi)) });
  } else i && (!n.hasFocus && n.state.facet(dt) || Vn(i, s)) && (i = null);
  if (!t && !i) return false;
  if (!t && e.typeOver && !s.empty && i && i.main.empty ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) } : (E.mac || E.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = w.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: J.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, s.to)) } : n.state.doc.lineAt(s.from).to < s.to && n.docView.lineHasWidget(s.to) && n.inputState.insertingTextAt > Date.now() - 50 ? t = { from: s.from, to: s.to, insert: n.state.toText(n.inputState.insertingText) } : E.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = w.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: J.of([" "]) }), t) return ro(n, t, i, r);
  if (i && !Vn(i, s)) {
    let o = false, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = true), l = n.inputState.lastSelectionOrigin, l == "select.pointer" && (i = mh(n.state.facet(Yi).map((a) => a(n)), i))), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), true;
  } else return false;
}
function ro(n, e, t, i = -1) {
  if (E.ios && n.inputState.flushIOSKey(e)) return true;
  let s = n.state.selection.main;
  if (E.android && (e.to == s.to && (e.from == s.from || e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Zt(n.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && Zt(n.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && Zt(n.contentDOM, "Delete", 46))) return true;
  let r = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o, l = () => o || (o = qu(n, e, t));
  return n.state.facet(nh).some((a) => a(n, e.from, e.to, r, l)) || n.dispatch(l()), true;
}
function qu(n, e, t) {
  let i, s = n.state, r = s.selection.main, o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let a = e.from < r.from ? -1 : 1, h = a < 0 ? r.from : r.to, c = Di(s.facet(Yi).map((f) => f(n)), h, a);
    e.from == c && (o = c);
  }
  if (o > -1) i = { changes: e, selection: w.cursor(e.from + e.insert.length, -1) };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let a = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", h = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(a + e.insert.sliceString(0, void 0, n.state.lineBreak) + h));
  } else {
    let a = s.changes(e), h = t && t.main.to <= a.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && (n.inputState.composing >= 0 || n.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let c = n.state.sliceDoc(e.from, e.to), f, u = t && ph(n, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        f = { from: u.from, to: u.to - p };
      } else f = n.state.doc.lineAt(r.head);
      let d = r.to - e.to;
      i = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to) return { changes: a, range: h || p.map(a) };
        let m = p.to - d, y = m - c.length;
        if (n.state.sliceDoc(y, m) != c || m >= f.from && y <= f.to) return { range: p };
        let b = s.changes({ from: y, to: m, insert: e.insert }), C = p.to - r.to;
        return { changes: b, range: h ? w.range(Math.max(0, h.anchor + C), Math.max(0, h.head + C)) : p.map(b) };
      });
    } else i = { changes: a, selection: h && s.selection.replaceRange(h) };
  }
  let l = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = false, l += ".compose", n.inputState.compositionFirstChange && (l += ".start", n.inputState.compositionFirstChange = false)), s.update(i, { userEvent: l, scrollIntoView: true });
}
function bh(n, e, t, i) {
  let s = Math.min(n.length, e.length), r = 0;
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); ) r++;
  if (r == s && n.length == e.length) return null;
  let o = n.length, l = e.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); ) o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && n.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function _u(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM) return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new el(t, i)), (s != t || r != i) && e.push(new el(s, r))), e;
}
function $u(n, e) {
  if (n.length == 0) return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? w.single(t + e, i + e) : null;
}
function Vn(n, e) {
  return e.head == n.main.head && e.anchor == n.main.anchor;
}
class Ku {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, E.safari && e.contentDOM.addEventListener("input", () => null), E.gecko && od(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Zu(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers) s(this.view, t);
      for (let s of i.handlers) {
        if (t.defaultPrevented) break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = ju(e), i = this.handlers, s = this.view.contentDOM;
    for (let r in t) if (r != "scroll") {
      let o = !t[r].handlers.length, l = i[r];
      l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
    }
    for (let r in i) r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && wh.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), E.android && E.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return this.view.observer.delayAndroidKey(e.key, e.keyCode), true;
    let t;
    return E.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = xh.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Uu.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), true) : (e.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? false : (this.pendingIOSKey = void 0, Zt(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? false : this.composing > 0 ? true : E.safari && !E.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function tl(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      Te(t.state, s);
    }
  };
}
function ju(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec, r = s && s.plugin.domEventHandlers, o = s && s.plugin.domEventObservers;
    if (r) for (let l in r) {
      let a = r[l];
      a && t(l).handlers.push(tl(i.value, a));
    }
    if (o) for (let l in o) {
      let a = o[l];
      a && t(l).observers.push(tl(i.value, a));
    }
  }
  for (let i in Ue) t(i).handlers.push(Ue[i]);
  for (let i in qe) t(i).observers.push(qe[i]);
  return e;
}
const xh = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], Uu = "dthko", wh = [16, 17, 18, 20, 91, 92, 224, 225], on = 6;
function ln(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Gu(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Yu {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Xf(e.contentDOM), this.atoms = e.state.facet(Yi).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(j.allowMultipleSelections) && Ju(e, t), this.dragging = Qu(e, t) && Sh(t) == 1 ? null : false;
  }
  start(e) {
    this.dragging === false && this.select(e);
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && Gu(this.startEvent, e) < 10) return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = so(this.view);
    e.clientX - a.left <= s + on ? t = -ln(s - e.clientX) : e.clientX + a.right >= o - on && (t = ln(e.clientX - o)), e.clientY - a.top <= r + on ? i = -ln(r - e.clientY) : e.clientY + a.bottom >= l - on && (i = ln(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === false && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = mh(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === false)) && this.view.dispatch({ selection: i, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Ju(n, e) {
  let t = n.state.facet(Za);
  return t.length ? t[0](e) : E.mac ? e.metaKey : e.ctrlKey;
}
function Xu(n, e) {
  let t = n.state.facet(eh);
  return t.length ? t[0](e) : E.mac ? !e.altKey : !e.ctrlKey;
}
function Qu(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty) return false;
  let i = Ii(n.root);
  if (!i || i.rangeCount == 0) return true;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY) return true;
  }
  return false;
}
function Zu(n, e) {
  if (!e.bubbles) return true;
  if (e.defaultPrevented) return false;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode) if (!t || t.nodeType == 11 || (i = ce.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e)) return false;
  return true;
}
const Ue = /* @__PURE__ */ Object.create(null), qe = /* @__PURE__ */ Object.create(null), vh = E.ie && E.ie_version < 15 || E.ios && E.webkit_version < 604;
function ed(n) {
  let e = n.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), kh(n, t.value);
  }, 50);
}
function as(n, e, t) {
  for (let i of n.facet(e)) t = i(t, n);
  return t;
}
function kh(n, e) {
  e = as(n.state, eo, e);
  let { state: t } = n, i, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (Ar != null && t.selection.ranges.every((a) => a.empty) && Ar == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a) return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return { changes: { from: c.from, insert: f }, range: w.cursor(h.from + f.length) };
    });
  } else o ? i = t.changeByRange((a) => {
    let h = r.line(s++);
    return { changes: { from: a.from, to: a.to, insert: h.text }, range: w.cursor(a.from + h.length) };
  }) : i = t.replaceSelection(r);
  n.dispatch(i, { userEvent: "input.paste", scrollIntoView: true });
}
qe.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
Ue.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), false);
qe.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
qe.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
Ue.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let t = null;
  for (let i of n.state.facet(th)) if (t = i(n, e), t) break;
  if (!t && e.button == 0 && (t = id(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Yu(n, e, t, i)), i && n.observer.ignore(() => {
      $a(n.contentDOM);
      let r = n.root.activeElement;
      r && !r.contains(n.contentDOM) && r.blur();
    });
    let s = n.inputState.mouseSelection;
    if (s) return s.start(e), s.dragging === false;
  } else n.inputState.setSelectionOrigin("select.pointer");
  return false;
};
function il(n, e, t, i) {
  if (i == 1) return w.cursor(e, t);
  if (i == 2) return Ru(n.state, e, t);
  {
    let s = n.docView.lineAt(e, t), r = n.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < n.state.doc.length && l == r.to && l++, w.range(o, l);
  }
}
const td = E.ie && E.ie_version <= 11;
let nl = null, sl = 0, rl = 0;
function Sh(n) {
  if (!td) return n.detail;
  let e = nl, t = rl;
  return nl = n, rl = Date.now(), sl = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (sl + 1) % 3 : 1;
}
function id(n, e) {
  let t = n.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, false), i = Sh(e), s = n.state.selection;
  return { update(r) {
    r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
  }, get(r, o, l) {
    let a = n.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, false), h, c = il(n, a.pos, a.assoc, i);
    if (t.pos != a.pos && !o) {
      let f = il(n, t.pos, t.assoc, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
      c = u < c.from ? w.range(u, d) : w.range(d, u);
    }
    return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = nd(s, a.pos)) ? h : l ? s.addRange(c) : w.create([c]);
  } };
}
function nd(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e) return w.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
Ue.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let s = n.docView.tile.nearest(e.target);
    if (s && s.isWidget()) {
      let r = s.posAtStart, o = r + s.length;
      (r >= t.to || o <= t.from) && (t = w.range(r, o));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = true), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", as(n.state, to, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), false;
};
Ue.dragend = (n) => (n.inputState.draggedContent = null, false);
function ol(n, e, t, i) {
  if (t = as(n.state, eo, t), !t) return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), { draggedContent: r } = n.inputState, o = i && r && Xu(n, e) ? { from: r.from, to: r.to } : null, l = { from: s, insert: t }, a = n.state.changes(o ? [o, l] : l);
  n.focus(), n.dispatch({ changes: a, selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) }, userEvent: o ? "move.drop" : "input.drop" }), n.inputState.draggedContent = null;
}
Ue.drop = (n, e) => {
  if (!e.dataTransfer) return false;
  if (n.state.readOnly) return true;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), s = 0, r = () => {
      ++s == t.length && ol(n, e, i.filter((o) => o != null).join(n.state.lineBreak), false);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return true;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i) return ol(n, e, i, true), true;
  }
  return false;
};
Ue.paste = (n, e) => {
  if (n.state.readOnly) return true;
  n.observer.flush();
  let t = vh ? null : e.clipboardData;
  return t ? (kh(n, t.getData("text/plain") || t.getData("text/uri-list")), true) : (ed(n), false);
};
function sd(n, e) {
  let t = n.dom.parentNode;
  if (!t) return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function rd(n) {
  let e = [], t = [], i = false;
  for (let s of n.selection.ranges) s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      o.number > s && (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), s = o.number;
    }
    i = true;
  }
  return { text: as(n, to, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let Ar = null;
Ue.copy = Ue.cut = (n, e) => {
  if (!Ai(n.contentDOM, n.observer.selectionRange)) return false;
  let { text: t, ranges: i, linewise: s } = rd(n.state);
  if (!t && !s) return false;
  Ar = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({ changes: i, scrollIntoView: true, userEvent: "delete.cut" });
  let r = vh ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), true) : (sd(n, t), false);
};
const Ch = ct.define();
function Ah(n, e) {
  let t = [];
  for (let i of n.facet(sh)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t.length ? n.update({ effects: t, annotations: Ch.of(true) }) : null;
}
function Mh(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Ah(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
qe.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Mh(n);
};
qe.blur = (n) => {
  n.observer.clearSelectionRange(), Mh(n);
};
qe.compositionstart = qe.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = true), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
qe.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = true, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, E.chrome && E.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
qe.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
Ue.beforeinput = (n, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (n.inputState.insertingText = e.data, n.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && n.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = n.posAtDOM(l.startContainer, l.startOffset), h = n.posAtDOM(l.endContainer, l.endOffset);
      return ro(n, { from: a, to: h, insert: n.state.toText(r) }, null), true;
    }
  }
  let s;
  if (E.chrome && E.android && (s = xh.find((r) => r.inputType == e.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return E.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), E.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => qe.compositionend(n, e), 20), false;
};
const ll = /* @__PURE__ */ new Set();
function od(n) {
  ll.has(n) || (ll.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const al = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let oi = false;
function hl() {
  oi = false;
}
class ld {
  constructor(e) {
    this.lineWrapping = e, this.doc = J.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return al.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = false;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (t = true, this.heightSamples[Math.floor(s * 10)] = true);
    }
    return t;
  }
  refresh(e, t, i, s, r, o) {
    let l = al.indexOf(e) > -1, a = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != l || Math.abs(i - this.charWidth) > 0.1;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = true;
      }
    }
    return a;
  }
}
class ad {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ke {
  constructor(e, t, i, s, r) {
    this.from = e, this.length = t, this.top = i, this.height = s, this._content = r;
  }
  get type() {
    return typeof this._content == "number" ? we.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof zt ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Ke(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var ne = (function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
})(ne || (ne = {}));
const Tn = 1e-3;
class De {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Tn && (oi = true), this.height = e);
  }
  replace(e, t, i) {
    return De.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let r = this, o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, ne.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, ne.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; ) a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, ne.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = oo.build(i.setDoc(o), e, c, f);
      r = zn(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Ie(0, 0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0, i = e.length, s = 0, r = 0;
    for (; ; ) if (t == i) if (s > r * 2) {
      let l = e[t - 1];
      l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
    } else if (r > s * 2) {
      let l = e[i];
      l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
    } else break;
    else if (s < r) {
      let l = e[t++];
      l && (s += l.size);
    } else {
      let l = e[--i];
      l && (r += l.size);
    }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new cd(De.of(e.slice(0, t)), o, De.of(e.slice(i)));
  }
}
function zn(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (oi = true), e);
}
De.prototype.size = 1;
const hd = P.replace({});
class Th extends De {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Ke(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, s) {
    return this.spaceAbove && e < i + this.spaceAbove ? new Ke(s, 0, i, this.spaceAbove, hd) : this.mainBlock(i, s);
  }
  lineAt(e, t, i, s, r) {
    let o = this.mainBlock(s, r);
    return this.spaceAbove ? this.blockAt(0, i, s, r).join(o) : o;
  }
  forEachLine(e, t, i, s, r, o) {
    e <= r + this.length && t >= r && o(this.lineAt(0, ne.ByPos, i, s, r));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = false, s) {
    return s && s.from <= t && s.more && this.setMeasuredHeight(s), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Ie extends Th {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new Ke(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof Ie || s instanceof ye && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof ye ? s = new Ie(s.length, this.height, this.spaceAbove) : s.height = this.height, this.outdated || (s.outdated = false), s) : De.of(i);
  }
  updateHeight(e, t = 0, i = false, s) {
    return s && s.from <= t && s.more ? this.setMeasuredHeight(s) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ye extends De {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new Ke(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Ke(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == ne.ByHeight) return this.blockAt(e, i, s, r);
    if (t == ne.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Ke(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
    return new Ke(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = s; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Ke(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof ye ? i[i.length - 1] = new ye(r.length + s) : i.push(null, new ye(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof ye ? i[0] = new ye(e + r.length) : i.unshift(new ye(e - 1), null);
    }
    return De.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ye(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ye(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = false, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && o.push(new ye(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++], u = 0;
        f < 0 && (u = -f, f = s.heights[s.index++]), a == -1 ? a = f : Math.abs(f - a) >= Tn && (a = -2);
        let d = new Ie(c, f, u);
        d.outdated = false, o.push(d), l += c + 1;
      }
      l <= r && o.push(null, new ye(r - l).updateHeight(e, l));
      let h = De.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Tn || Math.abs(a - this.heightMetrics(e, t).perLine) >= Tn) && (oi = true), zn(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class cd extends De {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, s) : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == ne.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l)) return h;
    let c = t == ne.ByPosNoHeight ? ne.ByPosNoHeight : ne.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break) e < a && this.left.forEachLine(e, t, i, s, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, ne.ByPos, i, s, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, s, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s) return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i) r.push(l);
    if (e > 0 && cl(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), cl(r, l);
    }
    return De.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i) return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, s = i + this.break;
    if (e >= s) return this.right.decomposeRight(e - s, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? De.of(this.break ? [e, null, t] : [e, t]) : (this.left = zn(this.left, e), this.right = zn(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = false, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, i, s) : r.updateHeight(e, t, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, i, s) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function cl(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof ye && (i = n[e + 1]) instanceof ye && n.splice(e - 1, 3, new ye(t.length + 1 + i.length));
}
const fd = 5;
class oo {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof Ie ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Ie(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Th(o, s, i)) : (o || r || s >= fd) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Ie(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ye(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Ie) return e;
    let t = new Ie(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Ie) && !this.isCovered ? this.nodes.push(new Ie(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes) s instanceof Ie && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  static build(e, t, i, s) {
    let r = new oo(i, e);
    return K.spans(t, i, s, r, 0), r.finish(i);
  }
}
function ud(n, e, t) {
  let i = new dd();
  return K.compare(n, e, t, i, 0), i.changes;
}
class dd {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && Qt(e, t, this.changes, 5);
  }
}
function pd(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(s.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(s.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; ) if (h.nodeType == 1) {
    let c = h, f = window.getComputedStyle(c);
    if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
      let u = c.getBoundingClientRect();
      r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == n.parentNode ? s.innerHeight : a, u.bottom);
    }
    h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
  } else if (h.nodeType == 11) h = h.host;
  else break;
  return { left: r - t.left, right: Math.max(r, o) - t.left, top: l - (t.top + e), bottom: Math.max(l, a) - (t.top + e) };
}
function md(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function gd(n, e) {
  let t = n.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class Es {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.size = i, this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length) return false;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], r = t[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size) return false;
    }
    return true;
  }
  draw(e, t) {
    return P.replace({ widget: new yd(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
  }
}
class yd extends ut {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class fl {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ul, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = te.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let t = e.facet(io).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new ld(t), this.stateDeco = dl(e), this.heightMap = De.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle.setDoc(e.doc), [new He(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = P.set(this.lineGaps.map((i) => i.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new an(r, o));
      }
    }
    return this.viewports = e.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? ul : new lo(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(wi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = dl(this.state);
    let s = e.changedRanges, r = He.extendWithRanges(s, ud(i, this.stateDeco, e ? e.changes : fe.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    hl(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || oi) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(oh) && (this.mustEnforceCursorAssoc = true);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? te.RTL : te.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent, l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = false;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: T, scaleY: A } = _a(t, l);
      (T > 5e-3 && Math.abs(this.scaleX - T) > 5e-3 || A > 5e-3 && Math.abs(this.scaleY - A) > 5e-3) && (this.scaleX = T, this.scaleY = A, h |= 16, o = a = true);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = true), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Ka(e.scrollDOM);
    let p = (this.printing ? gd : pd)(t, this.paddingTop), m = p.top - this.pixelViewport.top, y = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let b = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b != this.inView && (this.inView = b, b && (a = true)), !this.inView && !this.scrollTarget && !md(e.dom)) return 0;
    let C = l.width;
    if ((this.contentDOMWidth != C || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let T = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(T) && (o = true), o || s.lineWrapping && Math.abs(C - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: A, charWidth: M, textHeight: v } = e.docView.measureTextSize();
        o = A > 0 && s.refresh(r, A, M, v, Math.max(5, C / M), T), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && y > 0 ? c = Math.max(m, y) : m < 0 && y < 0 && (c = Math.min(m, y)), hl();
      for (let A of this.viewports) {
        let M = A.from == this.viewport.from ? T : e.docView.measureVisibleLineHeights(A);
        this.heightMap = (o ? De.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle, [new He(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new ad(A.from, M));
      }
      oi && (h |= 2);
    }
    let k = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return k && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || k) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new an(s.lineAt(o - i * 1e3, ne.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, ne.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, ne.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new an(s.lineAt(u - 1e3 / 2, ne.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, ne.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new an(this.heightMap.lineAt(i, ne.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, ne.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView) return true;
    let { top: s } = this.heightMap.lineAt(e, ne.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, ne.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let i = [];
    for (let s of e) t.touchesRange(s.from, s.to) || i.push(new Es(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != te.LTR && !i) return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r) return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let b of m) if (b > c && b < f) {
        a(c, b - 10, u, d), a(b + 10, f, u, d);
        return;
      }
      let y = xd(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - c) < r && Math.abs(b.to - f) < r && !m.some((C) => b.from < C && b.to > C));
      if (!y) {
        if (f < u.to && t && i && t.visibleRanges.some((k) => k.from <= f && k.to >= f)) {
          let k = t.moveToLineBoundary(w.cursor(f), false, true).head;
          k > c && (f = k);
        }
        let b = this.gapSize(u, c, f, d), C = i || b < 2e6 ? b : 2e6;
        y = new Es(c, f, b, C);
      }
      l.push(y);
    }, h = (c) => {
      if (c.length < o || c.type != we.Text) return;
      let f = bd(c.from, c.to, this.stateDeco);
      if (f.total < o) return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let m = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, y, b;
        if (u != null) {
          let C = cn(f, u), k = ((this.visibleBottom - this.visibleTop) / 2 + m) / c.height;
          y = C - k, b = C + k;
        } else y = (this.visibleTop - c.top - m) / c.height, b = (this.visibleBottom - c.top + m) / c.height;
        d = hn(f, y), p = hn(f, b);
      } else {
        let m = f.total * this.heightOracle.charWidth, y = s * this.heightOracle.charWidth, b = 0;
        if (m > 2e6) for (let M of e) M.from >= c.from && M.from < c.to && M.size != M.displaySize && M.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = M.size - M.displaySize);
        let C = this.pixelViewport.left + b, k = this.pixelViewport.right + b, T, A;
        if (u != null) {
          let M = cn(f, u), v = ((k - C) / 2 + y) / m;
          T = M - v, A = M + v;
        } else T = (C - y) / m, A = (k + y) / m;
        d = hn(f, T), p = hn(f, A);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines) Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, i, s) {
    let r = cn(s, i) - cn(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Es.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = P.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    K.spans(t, this.viewport.from, this.viewport.to, { span(r, o) {
      i.push({ from: r, to: o });
    }, point() {
    } }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length) s = 12;
    else for (let r = 0; r < i.length && !(s & 8); r++) {
      let o = this.visibleRanges[r], l = i[r];
      (o.from != l.from || o.to != l.to) && (s |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (s |= 8));
    }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || wi(this.heightMap.lineAt(e, ne.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || wi(this.heightMap.lineAt(this.scaler.fromDOM(e), ne.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return wi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class an {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function bd(n, e, t) {
  let i = [], s = n, r = 0;
  return K.spans(t, n, e, { span() {
  }, point(o, l) {
    o > s && (i.push({ from: s, to: o }), r += o - s), s = l;
  } }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function hn({ total: n, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], l = o - r;
    if (i <= l) return r + i;
    i -= l;
  }
}
function cn(n, e) {
  let t = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function xd(n, e) {
  for (let t of n) if (e(t)) return t;
}
const ul = { toDOM(n) {
  return n;
}, fromDOM(n) {
  return n;
}, scale: 1, eq(n) {
  return n == this;
} };
function dl(n) {
  let e = n.facet(rs).filter((i) => typeof i != "function"), t = n.facet(no).filter((i) => typeof i != "function");
  return t.length && e.push(K.join(t)), e;
}
class lo {
  constructor(e, t, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, ne.ByPos, e, 0, 0).top, c = t.lineAt(a, ne.ByPos, e, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let l of this.viewports) l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top) return s + (e - i) * this.scale;
      if (e <= r.bottom) return r.domTop + (e - r.top);
      i = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop) return i + (e - s) / this.scale;
      if (e <= r.domBottom) return r.top + (e - r.domTop);
      i = r.bottom, s = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof lo ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : false;
  }
}
function wi(n, e) {
  if (e.scale == 1) return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new Ke(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => wi(s, e)) : n._content);
}
const fn = B.define({ combine: (n) => n.join(" ") }), Mr = B.define({ combine: (n) => n.indexOf(true) > -1 }), Tr = At.newName(), Dh = At.newName(), Oh = At.newName(), Eh = { "&light": "." + Dh, "&dark": "." + Oh };
function Dr(n, e, t) {
  return new At(e, { finish(i) {
    return /&/.test(i) ? i.replace(/&\w*/, (s) => {
      if (s == "&") return n;
      if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`);
      return t[s];
    }) : n + " " + i;
  } });
}
const wd = Dr("." + Tr, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", zIndex: 200 }, ".cm-gutters-before": { insetInlineStart: 0 }, ".cm-gutters-after": { insetInlineEnd: 0 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", border: "0px solid #ddd", "&.cm-gutters-before": { borderRightWidth: "1px" }, "&.cm-gutters-after": { borderLeftWidth: "1px" } }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-dialog": { padding: "2px 19px 4px 6px", position: "relative", "& label": { fontSize: "80%" } }, ".cm-dialog-close": { position: "absolute", top: "3px", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", fontSize: "14px", padding: "0" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top", userSelect: "none" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, Eh), vd = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, Bs = E.ie && E.ie_version <= 11;
class kd {
  constructor(e) {
    this.view = e, this.active = false, this.editContext = null, this.selectionRange = new Qf(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t) this.queue.push(i);
      (E.ie && E.ie_version <= 11 || E.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && E.android && e.constructor.EDIT_CONTEXT !== false && !(E.chrome && E.chrome_version < 126) && (this.editContext = new Cd(e), e.state.facet(dt) && (e.contentDOM.editContext = this.editContext.editContext)), Bs && (this.onCharData = (t) => {
      this.queue.push({ target: t.target, type: "characterData", oldValue: t.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(dt) ? i.root.activeElement != this.dom : !Ai(this.dom, s)) return;
    let r = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = false);
      return;
    }
    (E.ie && E.ie_version <= 11 || E.android && E.chrome) && !i.state.selection.main.empty && s.focusNode && Ti(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: e } = this, t = Ii(e.root);
    if (!t) return false;
    let i = E.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Sd(this.view, t) || t;
    if (!i || this.selectionRange.eq(i)) return false;
    let s = Ai(this.dom, i);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && eu(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), false) : (this.selectionRange.setRange(i), s && (this.selectionChanged = true), true);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; ) if (i.nodeType == 1) !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
    else if (i.nodeType == 11) i = i.host;
    else break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets) i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t) i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, vd), Bs && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), Bs && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Zt(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = { key: e, keyCode: t, force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, s = false;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = true), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && Ai(this.dom, this.selectionRange);
    if (e < 0 && !s) return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let r = new zu(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  flush(e = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), false;
    let i = this.view.state, s = yh(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !Vn(this.view.state.selection, t.newSel.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget()) return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = pl(t, e.previousSibling || e.target.previousSibling, -1), s = pl(t, e.nextSibling || e.target.nextSibling, 1);
      return { from: i ? t.posAfter(i) : t.posAtStart, to: s ? t.posBefore(s) : t.posAtEnd, typeOver: false };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(dt) != e.state.facet(dt) && (e.view.contentDOM.editContext = e.state.facet(dt) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets) s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function pl(n, e, t) {
  for (; e; ) {
    let i = ce.get(e);
    if (i && i.parent == n) return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function ml(n, e) {
  let t = e.startContainer, i = e.startOffset, s = e.endContainer, r = e.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor, 1);
  return Ti(o.node, o.offset, s, r) && ([t, i, s, r] = [s, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r };
}
function Sd(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s) return ml(n, s);
  }
  let t = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, true), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, true), t ? ml(n, t) : null;
}
class Cd {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({ text: e.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))), selectionEnd: this.toContextPos(e.state.selection.main.head) });
    this.handlers.textupdate = (i) => {
      let s = e.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: false });
      let h = a - l > i.text.length;
      l == this.from && r < this.from ? l = r : a == this.to && r > this.to && (a = r);
      let c = bh(e.state.sliceDoc(l, a), i.text, (h ? s.from : s.to) - l, h ? "end" : null);
      if (!c) {
        let u = w.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Vn(u, s) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let f = { from: c.from + l, to: c.toA + l, insert: J.of(i.text.slice(c.from, c.toB).split(`
`)) };
      if ((E.mac || E.android) && f.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (f = { from: l, to: a, insert: J.of([i.text.replace(".", " ")]) }), this.pendingContextChange = f, !e.state.readOnly) {
        let u = this.to - this.from + (f.to - f.from + f.insert.length);
        ro(e, f, w.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), f.from < f.to && !f.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), s.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            s.push(P.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: ah.of(P.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers) t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = Ii(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = false, s = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, h) => {
      if (i) return;
      let c = h.length - (o - r);
      if (s && o >= s.to) if (s.from == r && s.to == o && s.insert.eq(h)) {
        s = this.pendingContextChange = null, t += c, this.to += c;
        return;
      } else s = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from) this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      t += c;
    }), s && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), s = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class O {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((s) => s.forEach((r) => i(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Zf(e.parent) || document, this.viewState = new fl(e.state || j.create(e)), e.scrollTo && e.scrollTo.is(rn) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Gt).map((s) => new As(s));
    for (let s of this.plugins) s.update(this);
    this.observer = new kd(this), this.inputState = new Ku(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Qo(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = true, this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof ue ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = false, i = false, s, r = this.state;
    for (let u of e) {
      if (u.startState != r) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(Ch)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Ah(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(j.phrases) != this.state.facet(j.phrases)) return this.setState(r);
    s = Wn.create(this, r, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new ei(d.empty ? d : w.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects) d.is(rn) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = qn.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(bi) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(fn) != s.state.facet(fn) && (this.viewState.mustMeasureContent = true), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty) for (let u of this.state.facet(vr)) try {
      u(s);
    } catch (d) {
      Te(this.state, d, "update listener");
    }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !yh(this, c) && h.force && Zt(this.contentDOM, h.key, h.keyCode);
    });
  }
  setState(e) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins) i.destroy(this);
      this.viewState = new fl(e), this.plugins = e.facet(Gt).map((i) => new As(i)), this.pluginMap.clear();
      for (let i of this.plugins) i.update(this);
      this.docView.destroy(), this.docView = new Qo(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Gt), i = e.state.facet(Gt);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0) s.push(new As(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let r of this.plugins) r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else for (let s of this.plugins) s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate) try {
        t.docViewUpdate(this);
      } catch (i) {
        Te(this.state, i, "doc view update listener");
      }
    }
  }
  measure(e = true) {
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, s = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0) if (Ka(i)) r = -1, o = this.viewState.heightMap.height;
        else {
          let d = this.viewState.scrollAnchorAt(s);
          r = d.from, o = d.top;
        }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Te(this.state, p), gl;
          }
        }), f = Wn.create(this, this.state, []), u = false;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++) if (c[d] != gl) try {
          let p = h[d];
          p.write && p.write(c[d], this);
        } catch (p) {
          Te(this.state, p);
        }
        if (u && this.docView.updateSelection(true), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
            continue;
          } else {
            let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
            if (p > 1 || p < -1) {
              s = s + p, i.scrollTop = s / this.scaleY, o = -1;
              continue;
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty) for (let l of this.state.facet(vr)) l(t);
  }
  get themeClasses() {
    return Tr + " " + (this.state.facet(Mr) ? Oh : Dh) + " " + this.state.facet(fn);
  }
  updateAttrs() {
    let e = yl(this, hh, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(dt) ? "true" : "false", class: "cm-content", style: `${E.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (t["aria-readonly"] = "true"), yl(this, io, t);
    let i = this.observer.ignore(() => {
      let s = jo(this.contentDOM, this.contentAttrs, t), r = jo(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = true;
    for (let i of e) for (let s of i.effects) if (s.is(O.announce)) {
      t && (this.announceDOM.textContent = ""), t = false;
      let r = this.announceDOM.appendChild(document.createElement("div"));
      r.textContent = s.value;
    }
  }
  mountStyles() {
    this.styleModules = this.state.facet(bi);
    let e = this.state.facet(O.cspNonce);
    At.mount(this.root, this.styleModules.concat(wd).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1) return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++) if (this.measureRequests[t].key === e.key) {
          this.measureRequests[t] = e;
          return;
        }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return Os(this, e, Zo(this, e, t, i));
  }
  moveByGroup(e, t) {
    return Os(this, e, Zo(this, e, t, (i) => Iu(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), s = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return w.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = true) {
    return Pu(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return Os(this, e, Nu(this, e, t, i));
  }
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = true) {
    this.readMeasured();
    let i = Cr(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = true) {
    return this.readMeasured(), Cr(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right) return i;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[st.find(r, e - s.from, -1, t)];
    return Ni(i, o.dir == te.LTR == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(rh) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Ad) return Xa(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache) if (r.from == e.from && r.dir == t && (r.fresh || Ja(r.isolates, i = Yo(this, e)))) return r.order;
    i || (i = Yo(this, e));
    let s = lu(e.text, t, i);
    return this.bidiCache.push(new qn(e.from, e.to, t, i, true, s)), s;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || E.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      $a(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins) e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(e, t = {}) {
    return rn.of(new ei(typeof e == "number" ? w.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return rn.of(new ei(w.cursor(i.from), "start", "start", i.top - e, t, true));
  }
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return le.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return le.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = At.newName(), s = [fn.of(i), bi.of(Dr(`.${i}`, e))];
    return t && t.dark && s.push(Mr.of(true)), s;
  }
  static baseTheme(e) {
    return Kt.lowest(bi.of(Dr("." + Tr, e, Eh)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && ce.get(i) || ce.get(e);
    return ((t = s == null ? void 0 : s.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
O.styleModule = bi;
O.inputHandler = nh;
O.clipboardInputFilter = eo;
O.clipboardOutputFilter = to;
O.scrollHandler = lh;
O.focusChangeEffect = sh;
O.perLineTextDirection = rh;
O.exceptionSink = ih;
O.updateListener = vr;
O.editable = dt;
O.mouseSelectionStyle = th;
O.dragMovesSelection = eh;
O.clickAddsSelectionRange = Za;
O.decorations = rs;
O.blockWrappers = ch;
O.outerDecorations = no;
O.atomicRanges = Yi;
O.bidiIsolatedRanges = fh;
O.scrollMargins = uh;
O.darkTheme = Mr;
O.cspNonce = B.define({ combine: (n) => n.length ? n[0] : "" });
O.contentAttributes = io;
O.editorAttributes = hh;
O.lineWrapping = O.contentAttributes.of({ class: "cm-lineWrapping" });
O.announce = q.define();
const Ad = 4096, gl = {};
class qn {
  constructor(e, t, i, s, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh)) return e;
    let i = [], s = e.length ? e[e.length - 1].dir : te.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && i.push(new qn(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, false, o.order));
    }
    return i;
  }
}
function yl(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(n) : r;
    o && Xr(o, t);
  }
  return t;
}
const Md = E.mac ? "mac" : E.windows ? "win" : E.linux ? "linux" : "key";
function Td(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h)) l = true;
    else if (/^a(lt)?$/i.test(h)) s = true;
    else if (/^(c|ctrl|control)$/i.test(h)) r = true;
    else if (/^s(hift)?$/i.test(h)) o = true;
    else if (/^mod$/i.test(h)) e == "mac" ? l = true : r = true;
    else throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function un(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== false && e.shiftKey && (n = "Shift-" + n), n;
}
const Dd = Kt.default(O.domEventHandlers({ keydown(n, e) {
  return Rh(Bh(e.state), n, e, "editor");
} })), hs = B.define({ enables: Dd }), bl = /* @__PURE__ */ new WeakMap();
function Bh(n) {
  let e = n.facet(hs), t = bl.get(e);
  return t || bl.set(e, t = Bd(e.reduce((i, s) => i.concat(s), []))), t;
}
function Od(n, e, t) {
  return Rh(Bh(n.state), e, n, t);
}
let xt = null;
const Ed = 4e3;
function Bd(n, e = Md) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = i[o];
    if (a == null) i[o] = l;
    else if (a != l) throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => Td(b, e));
    for (let b = 1; b < p.length; b++) {
      let C = p.slice(0, b).join(" ");
      s(C, true), d[C] || (d[C] = { preventDefault: true, stopPropagation: false, run: [(k) => {
        let T = xt = { view: k, prefix: C, scope: o };
        return setTimeout(() => {
          xt == T && (xt = null);
        }, Ed), true;
      }] });
    }
    let m = p.join(" ");
    s(m, false);
    let y = d[m] || (d[m] = { preventDefault: false, stopPropagation: false, run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || [] });
    a && y.run.push(a), h && (y.preventDefault = true), c && (y.stopPropagation = true);
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any) for (let h of l) {
      let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
      c._any || (c._any = { preventDefault: false, stopPropagation: false, run: [] });
      let { any: f } = o;
      for (let u in c) c[u].run.push((d) => f(d, Or));
    }
    let a = o[e] || o.key;
    if (a) for (let h of l) r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Or = null;
function Rh(n, e, t, i) {
  Or = e;
  let s = $f(e), r = Ee(s, 0), o = it(r) == s.length && s != " ", l = "", a = false, h = false, c = false;
  xt && xt.view == t && xt.scope == i && (l = xt.prefix + " ", wh.indexOf(e.keyCode) < 0 && (h = true, xt = null));
  let f = /* @__PURE__ */ new Set(), u = (y) => {
    if (y) {
      for (let b of y.run) if (!f.has(b) && (f.add(b), b(t))) return y.stopPropagation && (c = true), true;
      y.preventDefault && (y.stopPropagation && (c = true), h = true);
    }
    return false;
  }, d = n[i], p, m;
  return d && (u(d[l + un(s, e, !o)]) ? a = true : o && (e.altKey || e.metaKey || e.ctrlKey) && !(E.windows && e.ctrlKey && e.altKey) && !(E.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = Mt[e.keyCode]) && p != s ? (u(d[l + un(p, e, true)]) || e.shiftKey && (m = Li[e.keyCode]) != s && m != p && u(d[l + un(m, e, false)])) && (a = true) : o && e.shiftKey && u(d[l + un(s, e, true)]) && (a = true), !a && u(d._any) && (a = true)), h && (a = true), a && c && e.stopPropagation(), Or = null, a;
}
class Ji {
  constructor(e, t, i, s, r) {
    this.className = e, this.left = t, this.top = i, this.width = s, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? false : (this.adjust(e), true);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s) return [];
      let r = Lh(e);
      return [new Ji(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else return Rd(e, t, i);
  }
}
function Lh(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == te.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function xl(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s) return i;
  let r = n.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = n.posAtCoords({ x: r.left + 1, y: o }), a = n.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function Rd(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), r = n.textDirection == te.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = Lh(n), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = Sr(n, i, 1), p = Sr(n, s, -1), m = d.type == we.Text ? d : null, y = p.type == we.Text ? p : null;
  if (m && (n.lineWrapping || d.widgetLineBreaks) && (m = xl(n, i, 1, m)), y && (n.lineWrapping || p.widgetLineBreaks) && (y = xl(n, s, -1, y)), m && y && m.from == y.from && m.to == y.to) return C(k(t.from, t.to, m));
  {
    let A = m ? k(t.from, null, m) : T(d, false), M = y ? k(null, t.to, y) : T(p, true), v = [];
    return (m || d).to < (y || p).from - (m && y ? 1 : 0) || d.widgetLineBreaks > 1 && A.bottom + n.defaultLineHeight / 2 < M.top ? v.push(b(f, A.bottom, u, M.top)) : A.bottom < M.top && n.elementAtHeight((A.bottom + M.top) / 2).type == we.Text && (A.bottom = M.top = (A.bottom + M.top) / 2), C(A).concat(v).concat(C(M));
  }
  function b(A, M, v, W) {
    return new Ji(e, A - a.left, M - a.top, Math.max(0, v - A), W - M);
  }
  function C({ top: A, bottom: M, horizontal: v }) {
    let W = [];
    for (let R = 0; R < v.length; R += 2) W.push(b(v[R], A, v[R + 1], M));
    return W;
  }
  function k(A, M, v) {
    let W = 1e9, R = -1e9, _ = [];
    function H(z, Y, ie, re, de) {
      let X = n.coordsAtPos(z, z == v.to ? -2 : 2), oe = n.coordsAtPos(ie, ie == v.from ? 2 : -2);
      !X || !oe || (W = Math.min(X.top, oe.top, W), R = Math.max(X.bottom, oe.bottom, R), de == te.LTR ? _.push(r && Y ? f : X.left, r && re ? u : oe.right) : _.push(!r && re ? f : oe.left, !r && Y ? u : X.right));
    }
    let L = A ?? v.from, F = M ?? v.to;
    for (let z of n.visibleRanges) if (z.to > L && z.from < F) for (let Y = Math.max(z.from, L), ie = Math.min(z.to, F); ; ) {
      let re = n.state.doc.lineAt(Y);
      for (let de of n.bidiSpans(re)) {
        let X = de.from + re.from, oe = de.to + re.from;
        if (X >= ie) break;
        oe > Y && H(Math.max(X, Y), A == null && X <= L, Math.min(oe, ie), M == null && oe >= F, de.dir);
      }
      if (Y = re.to + 1, Y >= ie) break;
    }
    return _.length == 0 && H(L, A == null, F, M == null, n.textDirection), { top: W, bottom: R, horizontal: _ };
  }
  function T(A, M) {
    let v = l.top + (M ? A.top : A.bottom);
    return { top: v, bottom: v, horizontal: [] };
  }
}
function Ld(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class Pd {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Dn) != e.state.facet(Dn) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== false && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Dn);
    for (; t < i.length && i[t] != this.layer; ) t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !Ld(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let s of e) s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e, E.safari && E.safari_version >= 26 && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Dn = B.define();
function Ph(n) {
  return [le.define((e) => new Pd(e, n)), Dn.of(n)];
}
const Hi = B.define({ combine(n) {
  return ft(n, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t });
} });
function Id(n = {}) {
  return [Hi.of(n), Nd, Wd, Hd, oh.of(true)];
}
function Ih(n) {
  return n.startState.facet(Hi) != n.state.facet(Hi);
}
const Nd = Ph({ above: true, markers(n) {
  let { state: e } = n, t = e.facet(Hi), i = [];
  for (let s of e.selection.ranges) {
    let r = s == e.selection.main;
    if (s.empty || t.drawRangeCursor) {
      let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : w.cursor(s.head, s.head > s.anchor ? -1 : 1);
      for (let a of Ji.forRange(n, o, l)) i.push(a);
    }
  }
  return i;
}, update(n, e) {
  n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let t = Ih(n);
  return t && wl(n.state, e), n.docChanged || n.selectionSet || t;
}, mount(n, e) {
  wl(e.state, n);
}, class: "cm-cursorLayer" });
function wl(n, e) {
  e.style.animationDuration = n.facet(Hi).cursorBlinkRate + "ms";
}
const Wd = Ph({ above: false, markers(n) {
  return n.state.selection.ranges.map((e) => e.empty ? [] : Ji.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
}, update(n, e) {
  return n.docChanged || n.selectionSet || n.viewportChanged || Ih(n);
}, class: "cm-selectionLayer" }), Hd = Kt.highest(O.theme({ ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-content": { caretColor: "transparent !important", "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } })), Nh = q.define({ map(n, e) {
  return n == null ? null : e.mapPos(n);
} }), vi = ve.define({ create() {
  return null;
}, update(n, e) {
  return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(Nh) ? i.value : t, n);
} }), Fd = le.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(vi);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(vi) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(vi), t = e != null && n.coordsAtPos(e);
    if (!t) return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return { left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX, top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY, height: t.bottom - t.top };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      n ? (this.cursor.style.left = n.left / e + "px", this.cursor.style.top = n.top / t + "px", this.cursor.style.height = n.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(vi) != n && this.view.dispatch({ effects: Nh.of(n) });
  }
}, { eventObservers: { dragover(n) {
  this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
}, dragleave(n) {
  (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function Vd() {
  return [vi, Fd];
}
function vl(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length) if (!r.lineBreak) for (; l = e.exec(r.value); ) s(o + l.index, l);
}
function zd(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t;
  let i = [];
  for (let { from: s, to: r } of t) s = Math.max(n.state.doc.lineAt(s).from, s - e), r = Math.min(n.state.doc.lineAt(r).to, r + e), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({ from: s, to: r });
  return i;
}
class qd {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: s, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, s) this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == "function") this.addMatch = (l, a, h, c) => {
      let f = i(l, a, h);
      f && c(h, h + l[0].length, f);
    };
    else if (i) this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  createDeco(e) {
    let t = new pt(), i = t.add.bind(t);
    for (let { from: s, to: r } of zd(e, this.maxLength)) vl(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9, s = -1;
    return e.docChanged && e.changes.iterChanges((r, o, l, a) => {
      a >= e.view.viewport.from && l <= e.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s));
    }), e.viewportMoved || s - i > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), i, s) : t;
  }
  updateRange(e, t, i, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, s);
      if (l >= o) {
        let a = e.state.doc.lineAt(o), h = a.to < l ? e.state.doc.lineAt(l) : a, c = Math.max(r.from, a.from), f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--) if (this.boundary.test(a.text[o - 1 - a.from])) {
            c = o;
            break;
          }
          for (; l < h.to; l++) if (this.boundary.test(h.text[l - h.from])) {
            f = l;
            break;
          }
        }
        let u = [], d, p = (m, y, b) => u.push(b.range(m, y));
        if (a == h) for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; ) this.addMatch(d, e, d.index + a.from, p);
        else vl(e.state.doc, this.regexp, c, f, (m, y) => this.addMatch(y, e, m, p));
        t = t.update({ filterFrom: c, filterTo: f, filter: (m, y) => m < c || y > f, add: u });
      }
    }
    return t;
  }
}
const Er = /x/.unicode != null ? "gu" : "g", _d = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, Er), $d = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let Rs = null;
function Kd() {
  var n;
  if (Rs == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Rs = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return Rs || false;
}
const On = B.define({ combine(n) {
  let e = ft(n, { render: null, specialChars: _d, addSpecialChars: null });
  return (e.replaceTabs = !Kd()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Er)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Er)), e;
} });
function jd(n = {}) {
  return [On.of(n), Ud()];
}
let kl = null;
function Ud() {
  return kl || (kl = le.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = P.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(On)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new qd({ regexp: n.specialChars, decoration: (e, t, i) => {
        let { doc: s } = t.state, r = Ee(e[0], 0);
        if (r == 9) {
          let o = s.lineAt(i), l = t.state.tabSize, a = hi(o.text, l, i - o.from);
          return P.replace({ widget: new Xd((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[r] || (this.decorationCache[r] = P.replace({ widget: new Jd(n, r) }));
      }, boundary: n.replaceTabs ? void 0 : /[^]/ });
    }
    update(n) {
      let e = n.state.facet(On);
      n.startState.facet(On) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, { decorations: (n) => n.decorations }));
}
const Gd = "\u2022";
function Yd(n) {
  return n >= 32 ? Gd : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
class Jd extends ut {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Yd(this.code), i = e.state.phrase("Control character") + " " + ($d[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, t);
    if (s) return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return false;
  }
}
class Xd extends ut {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return false;
  }
}
function Qd() {
  return ep;
}
const Zd = P.line({ class: "cm-activeLine" }), ep = le.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      s.from > e && (t.push(Zd.range(s.from)), e = s.from);
    }
    return P.set(t);
  }
}, { decorations: (n) => n.decorations });
class tp extends ut {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(true)), t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? Mi(e.firstChild) : [];
    if (!t.length) return null;
    let i = window.getComputedStyle(e.parentNode), s = Ni(t[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
    return s.bottom - s.top > r * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + r } : s;
  }
  ignoreEvent() {
    return false;
  }
}
function ip(n) {
  let e = le.fromClass(class {
    constructor(t) {
      this.view = t, this.placeholder = n ? P.set([P.widget({ widget: new tp(n), side: 1 }).range(0)]) : P.none;
    }
    get decorations() {
      return this.view.state.doc.length ? P.none : this.placeholder;
    }
  }, { decorations: (t) => t.decorations });
  return typeof n == "string" ? [e, O.contentAttributes.of({ "aria-placeholder": n })] : e;
}
const Br = 2e3;
function np(n, e, t) {
  let i = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > Br || t.off > Br || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && r.push(w.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = cr(h.text, o, n.tabSize, true);
      if (c < 0) r.push(w.cursor(h.to));
      else {
        let f = cr(h.text, l, n.tabSize);
        r.push(w.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function sp(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function Sl(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), i = n.state.doc.lineAt(t), s = t - i.from, r = s > Br ? -1 : s == i.length ? sp(n, e.clientX) : hi(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: r, off: s };
}
function rp(n, e) {
  let t = Sl(n, e), i = n.state.selection;
  return t ? { update(s) {
    if (s.docChanged) {
      let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
      t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(s.changes);
    }
  }, get(s, r, o) {
    let l = Sl(n, s);
    if (!l) return i;
    let a = np(n.state, t, l);
    return a.length ? o ? w.create(a.concat(i.ranges)) : w.create(a) : i;
  } } : null;
}
function op(n) {
  let e = ((t) => t.altKey && t.button == 0);
  return O.mouseSelectionStyle.of((t, i) => e(i) ? rp(t, i) : null);
}
const lp = { Alt: [18, (n) => !!n.altKey], Control: [17, (n) => !!n.ctrlKey], Shift: [16, (n) => !!n.shiftKey], Meta: [91, (n) => !!n.metaKey] }, ap = { style: "cursor: crosshair" };
function hp(n = {}) {
  let [e, t] = lp[n.key || "Alt"], i = le.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = false;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, { eventObservers: { keydown(s) {
    this.set(s.keyCode == e || t(s));
  }, keyup(s) {
    (s.keyCode == e || !t(s)) && this.set(false);
  }, mousemove(s) {
    this.set(t(s));
  } } });
  return [i, O.contentAttributes.of((s) => {
    var r;
    return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? ap : null;
  })];
}
const dn = "-10000px";
class Wh {
  constructor(e, t, i, s) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = s, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(e, t) {
    var i;
    let s = e.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews) a.update && a.update(e);
      return false;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0) o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews) o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, true;
  }
}
function cp(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const Ls = B.define({ combine: (n) => {
  var e, t, i;
  return { position: E.ios ? "absolute" : ((e = n.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed", parent: ((t = n.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null, tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || cp };
} }), Cl = /* @__PURE__ */ new WeakMap(), ao = le.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(Ls);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Wh(n, ho, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n, this.above);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(Ls);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews) s.dom.style.position = this.position;
      t = true;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews) this.container.appendChild(s.dom);
      t = true;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n, e) {
    let t = n.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", t.dom.appendChild(s);
    }
    return t.dom.style.position = this.position, t.dom.style.top = dn, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var n, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews) i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, e = 1, t = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (E.safari) {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else t = !!r.offsetParent && r.offsetParent != this.container.ownerDocument.body;
    }
    if (t || this.position == "absolute") if (this.parent) {
      let r = this.parent.getBoundingClientRect();
      r.width && r.height && (n = r.width / this.parent.offsetWidth, e = r.height / this.parent.offsetHeight);
    } else ({ scaleX: n, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = so(this.view);
    return { visible: { left: i.left + s.left, top: i.top + s.top, right: i.right - s.right, bottom: i.bottom - s.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((r, o) => {
      let l = this.manager.tooltipViews[o];
      return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
    }), size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()), space: this.view.state.facet(Ls).tooltipSpace(this.view), scaleX: n, scaleY: e, makeAbsolute: t };
  }
  writeMeasure(n) {
    var e;
    if (n.makeAbsolute) {
      this.madeAbsolute = true, this.position = "absolute";
      for (let l of this.manager.tooltipViews) l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: s, scaleY: r } = n, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = n.pos[l], u = n.size[l];
      if (!f || a.clip !== false && (f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1)) {
        c.style.top = dn;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, m = u.right - u.left, y = (e = Cl.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, b = h.offset || up, C = this.view.textDirection == te.LTR, k = u.width > i.right - i.left ? C ? i.left : i.right - u.width : C ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + b.x, i.right - m)) : Math.min(Math.max(i.left, f.left - m + (d ? 14 : 0) - b.x), i.right - m), T = this.above[l];
      !a.strictSide && (T ? f.top - y - p - b.y < i.top : f.bottom + y + p + b.y > i.bottom) && T == i.bottom - f.bottom > f.top - i.top && (T = this.above[l] = !T);
      let A = (T ? f.top - i.top : i.bottom - f.bottom) - p;
      if (A < y && h.resize !== false) {
        if (A < this.view.defaultLineHeight) {
          c.style.top = dn;
          continue;
        }
        Cl.set(h, y), c.style.height = (y = A) / r + "px";
      } else c.style.height && (c.style.height = "");
      let M = T ? f.top - y - p - b.y : f.bottom + p + b.y, v = k + m;
      if (h.overlap !== true) for (let W of o) W.left < v && W.right > k && W.top < M + y && W.bottom > M && (M = T ? W.top - y - 2 - p : W.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (M - n.parent.top) / r + "px", Al(c, (k - n.parent.left) / s)) : (c.style.top = M / r + "px", Al(c, k / s)), d) {
        let W = f.left + (C ? b.x : -b.x) - (k + 14 - 7);
        d.style.left = W / s + "px";
      }
      h.overlap !== true && o.push({ left: k, top: M, right: v, bottom: M + y }), c.classList.toggle("cm-tooltip-above", T), c.classList.toggle("cm-tooltip-below", !T), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let n of this.manager.tooltipViews) n.dom.style.top = dn;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function Al(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + "px");
}
const fp = O.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), up = { x: 0, y: 0 }, ho = B.define({ enables: [ao, fp] }), _n = B.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class cs {
  static create(e) {
    return new cs(e);
  }
  constructor(e) {
    this.view = e, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Wh(e, _n, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
    this.mounted = true;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews) (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let s = i[e];
      if (s !== void 0) {
        if (t === void 0) t = s;
        else if (t !== s) return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const dp = ho.compute([_n], (n) => {
  let e = n.facet(_n);
  return e.length === 0 ? null : { pos: Math.min(...e.map((t) => t.pos)), end: Math.max(...e.map((t) => {
    var i;
    return (i = t.end) !== null && i !== void 0 ? i : t.pos;
  })), create: cs.create, above: e[0].above, arrow: e.some((t) => t.arrow) };
});
class pp {
  constructor(e, t, i, s, r) {
    this.view = e, this.source = t, this.field = i, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.tile.nearest(t.target);
    if (!i) return;
    let s, r = 1;
    if (i.isWidget()) s = i.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null) return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth) return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == te.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o == null ? void 0 : o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Te(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(ao), t = e ? e.manager.tooltips.findIndex((i) => i.create == cs.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && r && !mp(r.dom, e) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (i = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !gp(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const pn = 4;
function mp(n, e) {
  let { left: t, right: i, top: s, bottom: r } = n.getBoundingClientRect(), o;
  if (o = n.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - pn && e.clientX <= i + pn && e.clientY >= s - pn && e.clientY <= r + pn;
}
function gp(n, e, t, i, s, r) {
  let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s) return false;
  let a = n.posAtCoords({ x: i, y: s }, false);
  return a >= e && a <= t;
}
function yp(n, e = {}) {
  let t = q.define(), i = ve.define({ create() {
    return [];
  }, update(s, r) {
    if (s.length && (e.hideOnChange && (r.docChanged || r.selection) ? s = [] : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))), r.docChanged)) {
      let o = [];
      for (let l of s) {
        let a = r.changes.mapPos(l.pos, -1, Me.TrackDel);
        if (a != null) {
          let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
          h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
        }
      }
      s = o;
    }
    for (let o of r.effects) o.is(t) && (s = o.value), o.is(bp) && (s = []);
    return s;
  }, provide: (s) => _n.from(s) });
  return { active: i, extension: [i, le.define((s) => new pp(s, n, i, t, e.hoverTime || 300)), dp] };
}
function Hh(n, e) {
  let t = n.plugin(ao);
  if (!t) return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const bp = q.define(), Ml = B.define({ combine(n) {
  let e, t;
  for (let i of n) e = e || i.topContainer, t = t || i.bottomContainer;
  return { topContainer: e, bottomContainer: t };
} });
function co(n, e) {
  let t = n.plugin(Fh), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const Fh = le.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Fi), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(Ml);
    this.top = new mn(n, true, e.topContainer), this.bottom = new mn(n, false, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels) t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(Ml);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new mn(n.view, true, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new mn(n.view, false, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(Fi);
    if (t != this.input) {
      let i = t.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), l.push(c)) : (c = this.panels[h], c.update && c.update(n)), s.push(c), (c.top ? r : o).push(c);
      }
      this.specs = i, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l) a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else for (let i of this.panels) i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (n) => O.scrollMargins.of((e) => {
  let t = e.plugin(n);
  return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
}) });
class mn {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels) if (t.dom.parentNode == this.dom) {
      for (; e != t.dom; ) e = Tl(e);
      e = e.nextSibling;
    } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = Tl(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" ")) e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" ")) e && this.container.classList.add(e);
    }
  }
}
function Tl(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Fi = B.define({ enables: Fh });
function xp(n, e) {
  let t, i = new Promise((o) => t = o), s = (o) => wp(o, e, t);
  n.state.field(Ps, false) ? n.dispatch({ effects: Vh.of(s) }) : n.dispatch({ effects: q.appendConfig.of(Ps.init(() => [s])) });
  let r = zh.of(s);
  return { close: r, result: i.then((o) => ((n.win.queueMicrotask || ((a) => n.win.setTimeout(a, 10)))(() => {
    n.state.field(Ps).indexOf(s) > -1 && n.dispatch({ effects: r });
  }), o)) };
}
const Ps = ve.define({ create() {
  return [];
}, update(n, e) {
  for (let t of e.effects) t.is(Vh) ? n = [t.value].concat(n) : t.is(zh) && (n = n.filter((i) => i != t.value));
  return n;
}, provide: (n) => Fi.computeN([n], (e) => e.field(n)) }), Vh = q.define(), zh = q.define();
function wp(n, e, t) {
  let i = e.content ? e.content(n, () => o(null)) : null;
  if (!i) {
    if (i = Z("form"), e.input) {
      let l = Z("input", e.input);
      /^(text|password|number|email|tel|url)$/.test(l.type) && l.classList.add("cm-textfield"), l.name || (l.name = "input"), i.appendChild(Z("label", (e.label || "") + ": ", l));
    } else i.appendChild(document.createTextNode(e.label || ""));
    i.appendChild(document.createTextNode(" ")), i.appendChild(Z("button", { class: "cm-button", type: "submit" }, e.submitLabel || "OK"));
  }
  let s = i.nodeName == "FORM" ? [i] : i.querySelectorAll("form");
  for (let l = 0; l < s.length; l++) {
    let a = s[l];
    a.addEventListener("keydown", (h) => {
      h.keyCode == 27 ? (h.preventDefault(), o(null)) : h.keyCode == 13 && (h.preventDefault(), o(a));
    }), a.addEventListener("submit", (h) => {
      h.preventDefault(), o(a);
    });
  }
  let r = Z("div", i, Z("button", { onclick: () => o(null), "aria-label": n.state.phrase("close"), class: "cm-dialog-close", type: "button" }, ["\xD7"]));
  e.class && (r.className = e.class), r.classList.add("cm-dialog");
  function o(l) {
    r.contains(r.ownerDocument.activeElement) && n.focus(), t(l);
  }
  return { dom: r, top: e.top, mount: () => {
    if (e.focus) {
      let l;
      typeof e.focus == "string" ? l = i.querySelector(e.focus) : l = i.querySelector("input") || i.querySelector("button"), l && "select" in l ? l.select() : l && "focus" in l && l.focus();
    }
  } };
}
class gt extends Ct {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return false;
  }
  destroy(e) {
  }
}
gt.prototype.elementClass = "";
gt.prototype.toDOM = void 0;
gt.prototype.mapMode = Me.TrackBefore;
gt.prototype.startSide = gt.prototype.endSide = -1;
gt.prototype.point = true;
const En = B.define(), vp = B.define(), kp = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => K.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {}, side: "before" }, Oi = B.define();
function Sp(n) {
  return [qh(), Oi.of({ ...kp, ...n })];
}
const Dl = B.define({ combine: (n) => n.some((e) => e) });
function qh(n) {
  return [Cp];
}
const Cp = le.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Oi).map((e) => new El(n, e)), this.fixed = !n.state.facet(Dl);
    for (let e of this.gutters) e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (n.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(Dl) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = K.iter(this.view.state.facet(En), this.view.viewport.from), i = [], s = this.gutters.map((r) => new Ap(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks) if (i.length && (i = []), Array.isArray(r.type)) {
      let o = true;
      for (let l of r.type) if (l.type == we.Text && o) {
        Rr(t, i, l.from);
        for (let a of s) a.line(this.view, l, i);
        o = false;
      } else if (l.widget) for (let a of s) a.widget(this.view, l);
    } else if (r.type == we.Text) {
      Rr(t, i, r.from);
      for (let o of s) o.line(this.view, r, i);
    } else if (r.widget) for (let o of s) o.widget(this.view, r);
    for (let r of s) r.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let e = n.startState.facet(Oi), t = n.state.facet(Oi), i = n.docChanged || n.heightChanged || n.viewportChanged || !K.eq(n.startState.facet(En), n.state.facet(En), n.view.viewport.from, n.view.viewport.to);
    if (e == t) for (let s of this.gutters) s.update(n) && (i = true);
    else {
      i = true;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new El(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
      }
      for (let r of this.gutters) r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s) r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters) n.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, { provide: (n) => O.scrollMargins.of((e) => {
  let t = e.plugin(n);
  if (!t || t.gutters.length == 0 || !t.fixed) return null;
  let i = t.dom.offsetWidth * e.scaleX, s = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
  return e.textDirection == te.LTR ? { left: i, right: s } : { right: i, left: s };
}) });
function Ol(n) {
  return Array.isArray(n) ? n : [n];
}
function Rr(n, e, t) {
  for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class Ap {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = K.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new _h(e, o, r, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else s.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    Rr(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), s = i ? [i] : null;
    for (let r of e.state.facet(vp)) {
      let o = r(e, t.widget, t);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class El {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers) this.dom.addEventListener(i, (s) => {
      let r = s.target, o;
      if (r != this.dom && this.dom.contains(r)) {
        for (; r.parentNode != this.dom; ) r = r.parentNode;
        let a = r.getBoundingClientRect();
        o = (a.top + a.bottom) / 2;
      } else o = s.clientY;
      let l = e.lineBlockAtHeight(o - e.documentTop);
      t.domEventHandlers[i](e, l, s) && s.preventDefault();
    });
    this.markers = Ol(t.markers(e)), t.initialSpacer && (this.spacer = new _h(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Ol(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !K.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : false);
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class _h {
  constructor(e, t, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Mp(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, h = false;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = o; f < this.markers.length; f++) if (this.markers[f].compare(a)) {
          l = f, h = true;
          break;
        }
      } else l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a) break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), h && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Mp(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return false;
  return true;
}
const Tp = B.define(), Dp = B.define(), Yt = B.define({ combine(n) {
  return ft(n, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(e, t) {
    let i = Object.assign({}, e);
    for (let s in t) {
      let r = i[s], o = t[s];
      i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
    }
    return i;
  } });
} });
class Is extends gt {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Ns(n, e) {
  return n.state.facet(Yt).formatNumber(e, n.state);
}
const Op = Oi.compute([Yt], (n) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers(e) {
  return e.state.facet(Tp);
}, lineMarker(e, t, i) {
  return i.some((s) => s.toDOM) ? null : new Is(Ns(e, e.state.doc.lineAt(t.from).number));
}, widgetMarker: (e, t, i) => {
  for (let s of e.state.facet(Dp)) {
    let r = s(e, t, i);
    if (r) return r;
  }
  return null;
}, lineMarkerChange: (e) => e.startState.facet(Yt) != e.state.facet(Yt), initialSpacer(e) {
  return new Is(Ns(e, Bl(e.state.doc.lines)));
}, updateSpacer(e, t) {
  let i = Ns(t.view, Bl(t.view.state.doc.lines));
  return i == e.number ? e : new Is(i);
}, domEventHandlers: n.facet(Yt).domEventHandlers, side: "before" }));
function Ep(n = {}) {
  return [Yt.of(n), qh(), Op];
}
function Bl(n) {
  let e = 9;
  for (; e < n; ) e = e * 10 + 9;
  return e;
}
const Bp = new class extends gt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Rp = En.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > t && (t = s, e.push(Bp.range(s)));
  }
  return K.of(e);
});
function Lp() {
  return Rp;
}
const Pp = 1024;
let Ip = 0;
class Ws {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class U {
  constructor(e = {}) {
    this.id = Ip++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  add(e) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = _e.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
U.closedBy = new U({ deserialize: (n) => n.split(" ") });
U.openedBy = new U({ deserialize: (n) => n.split(" ") });
U.group = new U({ deserialize: (n) => n.split(" ") });
U.isolate = new U({ deserialize: (n) => {
  if (n && n != "rtl" && n != "ltr" && n != "auto") throw new RangeError("Invalid value for isolate: " + n);
  return n || "auto";
} });
U.contextHash = new U({ perNode: true });
U.lookAhead = new U({ perNode: true });
U.mounted = new U({ perNode: true });
class Ei {
  constructor(e, t, i, s = false) {
    this.tree = e, this.overlay = t, this.parser = i, this.bracketed = s;
  }
  static get(e) {
    return e && e.props && e.props[U.mounted.id];
  }
}
const Np = /* @__PURE__ */ Object.create(null);
class _e {
  constructor(e, t, i, s = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = s;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Np, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new _e(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props) if (Array.isArray(r) || (r = r(s)), r) {
        if (r[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
        t[r[0].id] = r[1];
      }
    }
    return s;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e) return true;
      let t = this.prop(U.group);
      return t ? t.indexOf(e) > -1 : false;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e) for (let s of i.split(" ")) t[s] = e[i];
    return (i) => {
      for (let s = i.prop(U.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? i.name : s[r]];
        if (o) return o;
      }
    };
  }
}
_e.none = new _e("", /* @__PURE__ */ Object.create(null), 0, 8);
const gn = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap();
var he;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays", n[n.EnterBracketed = 16] = "EnterBracketed";
})(he || (he = {}));
class xe {
  constructor(e, t, i, s, r) {
    if (this.type = e, this.children = t, this.positions = i, this.length = s, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r) this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = Ei.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let s = i.toString();
      s && (t && (t += ","), t += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new Pr(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let s = gn.get(this) || this.topNode, r = new Pr(s);
    return r.moveTo(e, t), gn.set(this, r._tree), r;
  }
  get topNode() {
    return new ze(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = Vi(gn.get(this) || this.topNode, e, t, false);
    return gn.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = Vi(Rl.get(this) || this.topNode, e, t, true);
    return Rl.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return Fp(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & he.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | he.IncludeAnonymous); ; ) {
      let h = false;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || t(a) !== false)) {
        if (a.firstChild()) continue;
        h = true;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent()) return;
        h = true;
      }
    }
  }
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : po(_e.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, s) => new xe(this.type, t, i, s, this.propValues), e.makeTree || ((t, i, s) => new xe(_e.none, t, i, s)));
  }
  static build(e) {
    return Vp(e);
  }
}
xe.empty = new xe(_e.none, [], [], 0);
class fo {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new fo(this.buffer, this.index);
  }
}
class Dt {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return _e.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; ) e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], s = this.set.types[t], r = s.name;
    if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), e += 4, i == e) return r;
    let o = [];
    for (; e < i; ) o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  findChild(e, t, i, s, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !($h(r, s, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3]) ;
    return l;
  }
  slice(e, t, i) {
    let s = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = s[l++], r[a++] = s[l++] - i;
      let h = r[a++] = s[l++] - i;
      r[a++] = s[l++] - e, o = Math.max(o, h);
    }
    return new Dt(r, o, this.set);
  }
}
function $h(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return true;
  }
}
function Vi(n, e, t, i) {
  for (var s; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let o = !i && n instanceof ze && n.index < 0 ? null : n.parent;
    if (!o) return n;
    n = o;
  }
  let r = i ? 0 : he.IgnoreOverlays;
  if (i) for (let o = n, l = o.parent; l; o = l, l = o.parent) o instanceof ze && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (n = l);
  for (; ; ) {
    let o = n.enter(e, t, r);
    if (!o) return n;
    n = o;
  }
}
class Kh {
  cursor(e = 0) {
    return new Pr(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = Ll(this, e, t, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Ll(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Vi(this, e, t, false);
  }
  resolveInner(e, t = 0) {
    return Vi(this, e, t, true);
  }
  matchContext(e) {
    return Lr(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to) break;
      s.type.isError && s.from == s.to ? (i = t, t = s.prevSibling) : t = s;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class ze extends Kh {
  constructor(e, t, i, s) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], f = a[e] + o.from, u;
        if (!(!(r & he.EnterBracketed && c instanceof xe && (u = Ei.get(c)) && !u.overlay && u.bracketed && i >= f && i <= f + c.length) && !$h(s, i, f, f + c.length))) {
          if (c instanceof Dt) {
            if (r & he.ExcludeBuffers) continue;
            let d = c.findChild(0, c.buffer.length, t, i - f, s);
            if (d > -1) return new vt(new Wp(o, c, e, f), null, d);
          } else if (r & he.IncludeAnonymous || !c.type.isAnonymous || uo(c)) {
            let d;
            if (!(r & he.IgnoreMounts) && (d = Ei.get(c)) && !d.overlay) return new ze(d.tree, f, e, o);
            let p = new ze(c, f, e, o);
            return r & he.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s, r);
          }
        }
      }
      if (r & he.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o)) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, i = 0) {
    let s;
    if (!(i & he.IgnoreOverlays) && (s = Ei.get(this._tree)) && s.overlay) {
      let r = e - this.from, o = i & he.EnterBracketed && s.bracketed;
      for (let { from: l, to: a } of s.overlay) if ((t > 0 || o ? l <= r : l < r) && (t < 0 || o ? a >= r : a > r)) return new ze(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; ) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Ll(n, e, t, i) {
  let s = n.cursor(), r = [];
  if (!s.firstChild()) return r;
  if (t != null) {
    for (let o = false; !o; ) if (o = s.type.is(t), !s.nextSibling()) return r;
  }
  for (; ; ) {
    if (i != null && s.type.is(i)) return r;
    if (s.type.is(e) && r.push(s.node), !s.nextSibling()) return i == null ? r : [];
  }
}
function Lr(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i) return false;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name) return false;
      t--;
    }
  }
  return true;
}
class Wp {
  constructor(e, t, i, s) {
    this.parent = e, this.buffer = t, this.index = i, this.start = s;
  }
}
class vt extends Kh {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new vt(this.context, this, r);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, i = 0) {
    if (i & he.ExcludeBuffers) return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new vt(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new vt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new vt(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, s = this.index + 4, r = i.buffer[this.index + 3];
    if (r > s) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(s, r, o)), t.push(0);
    }
    return new xe(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function jh(n) {
  if (!n.length) return null;
  let e = 0, t = n[0];
  for (let r = 1; r < n.length; r++) {
    let o = n[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof ze && t.index < 0 ? null : t.parent, s = n.slice();
  return i ? s[e] = i : s.splice(e, 1), new Hp(s, t);
}
class Hp {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return jh(this.heads);
  }
}
function Fp(n, e, t) {
  let i = n.resolveInner(e, t), s = null;
  for (let r = i instanceof ze ? i : i.context.parent; r; r = r.parent) if (r.index < 0) {
    let o = r.parent;
    (s || (s = [i])).push(o.resolve(e, t)), r = o;
  } else {
    let o = Ei.get(r.tree);
    if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
      let l = new ze(o.tree, o.overlay[0].from + r.from, -1, r);
      (s || (s = [i])).push(Vi(l, e, t, false));
    }
  }
  return s ? jh(s) : i;
}
class Pr {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~he.EnterBracketed, e instanceof ze) this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, true) : false;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: s } = this.buffer;
    return this.type = t || s.set.types[s.buffer[e]], this.from = i + s.buffer[e + 1], this.to = i + s.buffer[e + 2], true;
  }
  yield(e) {
    return e ? e instanceof ze ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : false;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, i);
    return r < 0 ? false : (this.stack.push(this.index), this.yieldBuf(r));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer ? i & he.ExcludeBuffers ? false : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & he.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e = this.mode & he.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : false;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s) return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) return this.yieldBuf(s);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : false;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length) return false;
      } else for (let r = 0; r < this.index; r++) if (s.buffer.buffer[r + 3] < this.index) return false;
      ({ index: t, parent: i } = s);
    } else ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i) if (t > -1) for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
      let l = i._tree.children[r];
      if (this.mode & he.IncludeAnonymous || l instanceof Dt || !l.type.isAnonymous || uo(l)) return false;
    }
    return true;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) return true;
    for (; ; ) {
      if (this.sibling(e)) return true;
      if (this.atLastNode(e) || !this.parent()) return false;
    }
  }
  next(e = true) {
    return this.move(1, e);
  }
  prev(e = true) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); ) ;
    for (; this.enterChild(1, e, t); ) ;
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer) e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
      for (let o = e; o; o = o._parent) if (o.index == s) {
        if (s == this.index) return o;
        t = o, i = r + 1;
        break e;
      }
      s = this.stack[--r];
    }
    for (let s = i; s < this.stack.length; s++) t = new vt(this.buffer, t, this.stack[s]);
    return this.bufferNode = new vt(this.buffer, t, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let s = false;
      if (this.type.isAnonymous || e(this) !== false) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = true);
      }
      for (; ; ) {
        if (s && t && t(this), s = this.type.isAnonymous, !i) return;
        if (this.nextSibling()) break;
        this.parent(), i--, s = true;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) return Lr(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0) return Lr(this._tree, e, s);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name) return false;
        s--;
      }
    }
    return true;
  }
}
function uo(n) {
  return n.children.some((e) => e instanceof Dt || !e.type.isAnonymous || uo(e));
}
function Vp(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: s = Pp, reused: r = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(t) ? new fo(t, t.length) : t, a = i.types, h = 0, c = 0;
  function f(A, M, v, W, R, _) {
    let { id: H, start: L, end: F, size: z } = l, Y = c, ie = h;
    if (z < 0) if (l.next(), z == -1) {
      let g = r[H];
      v.push(g), W.push(L - A);
      return;
    } else if (z == -3) {
      h = H;
      return;
    } else if (z == -4) {
      c = H;
      return;
    } else throw new RangeError(`Unrecognized record size: ${z}`);
    let re = a[H], de, X, oe = L - A;
    if (F - L <= s && (X = y(l.pos - M, R))) {
      let g = new Uint16Array(X.size - X.skip), S = l.pos - X.size, I = g.length;
      for (; l.pos > S; ) I = b(X.start, g, I);
      de = new Dt(g, F - X.start, i), oe = X.start - A;
    } else {
      let g = l.pos - z;
      l.next();
      let S = [], I = [], N = H >= o ? H : -1, $ = 0, G = F;
      for (; l.pos > g; ) N >= 0 && l.id == N && l.size >= 0 ? (l.end <= G - s && (p(S, I, L, $, l.end, G, N, Y, ie), $ = S.length, G = l.end), l.next()) : _ > 2500 ? u(L, g, S, I) : f(L, g, S, I, N, _ + 1);
      if (N >= 0 && $ > 0 && $ < S.length && p(S, I, L, $, L, G, N, Y, ie), S.reverse(), I.reverse(), N > -1 && $ > 0) {
        let Q = d(re, ie);
        de = po(re, S, I, 0, S.length, 0, F - L, Q, Q);
      } else de = m(re, S, I, F - L, Y - F, ie);
    }
    v.push(de), W.push(oe);
  }
  function u(A, M, v, W) {
    let R = [], _ = 0, H = -1;
    for (; l.pos > M; ) {
      let { id: L, start: F, end: z, size: Y } = l;
      if (Y > 4) l.next();
      else {
        if (H > -1 && F < H) break;
        H < 0 && (H = z - s), R.push(L, F, z), _++, l.next();
      }
    }
    if (_) {
      let L = new Uint16Array(_ * 4), F = R[R.length - 2];
      for (let z = R.length - 3, Y = 0; z >= 0; z -= 3) L[Y++] = R[z], L[Y++] = R[z + 1] - F, L[Y++] = R[z + 2] - F, L[Y++] = Y;
      v.push(new Dt(L, R[2] - F, i)), W.push(F - A);
    }
  }
  function d(A, M) {
    return (v, W, R) => {
      let _ = 0, H = v.length - 1, L, F;
      if (H >= 0 && (L = v[H]) instanceof xe) {
        if (!H && L.type == A && L.length == R) return L;
        (F = L.prop(U.lookAhead)) && (_ = W[H] + L.length + F);
      }
      return m(A, v, W, R, _, M);
    };
  }
  function p(A, M, v, W, R, _, H, L, F) {
    let z = [], Y = [];
    for (; A.length > W; ) z.push(A.pop()), Y.push(M.pop() + v - R);
    A.push(m(i.types[H], z, Y, _ - R, L - _, F)), M.push(R - v);
  }
  function m(A, M, v, W, R, _, H) {
    if (_) {
      let L = [U.contextHash, _];
      H = H ? [L].concat(H) : [L];
    }
    if (R > 25) {
      let L = [U.lookAhead, R];
      H = H ? [L].concat(H) : [L];
    }
    return new xe(A, M, v, W, H);
  }
  function y(A, M) {
    let v = l.fork(), W = 0, R = 0, _ = 0, H = v.end - s, L = { size: 0, start: 0, skip: 0 };
    e: for (let F = v.pos - A; v.pos > F; ) {
      let z = v.size;
      if (v.id == M && z >= 0) {
        L.size = W, L.start = R, L.skip = _, _ += 4, W += 4, v.next();
        continue;
      }
      let Y = v.pos - z;
      if (z < 0 || Y < F || v.start < H) break;
      let ie = v.id >= o ? 4 : 0, re = v.start;
      for (v.next(); v.pos > Y; ) {
        if (v.size < 0) if (v.size == -3 || v.size == -4) ie += 4;
        else break e;
        else v.id >= o && (ie += 4);
        v.next();
      }
      R = re, W += z, _ += ie;
    }
    return (M < 0 || W == A) && (L.size = W, L.start = R, L.skip = _), L.size > 4 ? L : void 0;
  }
  function b(A, M, v) {
    let { id: W, start: R, end: _, size: H } = l;
    if (l.next(), H >= 0 && W < o) {
      let L = v;
      if (H > 4) {
        let F = l.pos - (H - 4);
        for (; l.pos > F; ) v = b(A, M, v);
      }
      M[--v] = L, M[--v] = _ - A, M[--v] = R - A, M[--v] = W;
    } else H == -3 ? h = W : H == -4 && (c = W);
    return v;
  }
  let C = [], k = [];
  for (; l.pos > 0; ) f(n.start || 0, n.bufferStart || 0, C, k, -1, 0);
  let T = (e = n.length) !== null && e !== void 0 ? e : C.length ? k[0] + C[0].length : 0;
  return new xe(a[n.topID], C.reverse(), k.reverse(), T);
}
const Pl = /* @__PURE__ */ new WeakMap();
function Bn(n, e) {
  if (!n.isAnonymous || e instanceof Dt || e.type != n) return 1;
  let t = Pl.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof xe)) {
        t = 1;
        break;
      }
      t += Bn(n, i);
    }
    Pl.set(e, t);
  }
  return t;
}
function po(n, e, t, i, s, r, o, l, a) {
  let h = 0;
  for (let p = i; p < s; p++) h += Bn(n, e[p]);
  let c = Math.ceil(h * 1.5 / 8), f = [], u = [];
  function d(p, m, y, b, C) {
    for (let k = y; k < b; ) {
      let T = k, A = m[k], M = Bn(n, p[k]);
      for (k++; k < b; k++) {
        let v = Bn(n, p[k]);
        if (M + v >= c) break;
        M += v;
      }
      if (k == T + 1) {
        if (M > c) {
          let v = p[T];
          d(v.children, v.positions, 0, v.children.length, m[T] + C);
          continue;
        }
        f.push(p[T]);
      } else {
        let v = m[k - 1] + p[k - 1].length - A;
        f.push(po(n, p, m, T, k, A, v, null, a));
      }
      u.push(A + C - r);
    }
  }
  return d(e, t, i, s, 0), (l || a)(f, u, o);
}
class Ft {
  constructor(e, t, i, s, r = false, o = false) {
    this.from = e, this.to = t, this.tree = i, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = false) {
    let s = [new Ft(0, e.length, e, 0, false, i)];
    for (let r of t) r.to > e.length && s.push(r);
    return s;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length) return e;
    let s = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i) for (; o && o.from < f; ) {
        let u = o;
        if (a >= u.from || f <= u.to || h) {
          let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
          u = d >= p ? null : new Ft(d, p, u.tree, u.offset + h, l > 0, !!c);
        }
        if (u && s.push(u), o.to > f) break;
        o = r < e.length ? e[r++] : null;
      }
      if (!c) break;
      a = c.toA, h = c.toA - c.toB;
    }
    return s;
  }
}
class zp {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new qp(e)), i = i ? i.length ? i.map((s) => new Ws(s.from, s.to)) : [new Ws(0, 0)] : [new Ws(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let s = this.startParse(e, t, i);
    for (; ; ) {
      let r = s.advance();
      if (r) return r;
    }
  }
}
class qp {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return false;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new U({ perNode: true });
let _p = 0;
class We {
  constructor(e, t, i, s) {
    this.name = e, this.set = t, this.base = i, this.modified = s, this.id = _p++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified) t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof We && (t = e), t == null ? void 0 : t.base) throw new Error("Can not derive from a modified tag");
    let s = new We(i, [], null, []);
    if (s.set.push(s), t) for (let r of t.set) s.set.push(r);
    return s;
  }
  static defineModifier(e) {
    let t = new $n(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : $n.get(i.base || i, i.modified.concat(t).sort((s, r) => s.id - r.id));
  }
}
let $p = 0;
class $n {
  constructor(e) {
    this.name = e, this.instances = [], this.id = $p++;
  }
  static get(e, t) {
    if (!t.length) return e;
    let i = t[0].instances.find((l) => l.base == e && Kp(t, l.modified));
    if (i) return i;
    let s = [], r = new We(e.name, s, e, t);
    for (let l of t) l.instances.push(r);
    let o = jp(t);
    for (let l of e.set) if (!l.modified.length) for (let a of o) s.push($n.get(l, a));
    return r;
  }
}
function Kp(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function jp(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++) for (let i = 0, s = e.length; i < s; i++) e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function Up(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let s of t.split(" ")) if (s) {
      let r = [], o = 2, l = s;
      for (let f = 0; ; ) {
        if (l == "..." && f > 0 && f + 3 == s.length) {
          o = 1;
          break;
        }
        let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
        if (!u) throw new RangeError("Invalid path: " + s);
        if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length) break;
        let d = s[f++];
        if (f == s.length && d == "!") {
          o = 0;
          break;
        }
        if (d != "/") throw new RangeError("Invalid path: " + s);
        l = s.slice(f);
      }
      let a = r.length - 1, h = r[a];
      if (!h) throw new RangeError("Invalid path: " + s);
      let c = new zi(i, o, a > 0 ? r.slice(0, a) : null);
      e[h] = c.sort(e[h]);
    }
  }
  return Uh.add(e);
}
const Uh = new U({ combine(n, e) {
  let t, i, s;
  for (; n || e; ) {
    if (!n || e && n.depth >= e.depth ? (s = e, e = e.next) : (s = n, n = n.next), t && t.mode == s.mode && !s.context && !t.context) continue;
    let r = new zi(s.tags, s.mode, s.context);
    t ? t.next = r : i = r, t = r;
  }
  return i;
} });
class zi {
  constructor(e, t, i, s) {
    this.tags = e, this.mode = t, this.context = i, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
zi.empty = new zi([], 2, null);
function Gh(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of n) if (!Array.isArray(r.tag)) t[r.tag.id] = r.class;
  else for (let o of r.tag) t[o.id] = r.class;
  let { scope: i, all: s = null } = e || {};
  return { style: (r) => {
    let o = s;
    for (let l of r) for (let a of l.set) {
      let h = t[a.id];
      if (h) {
        o = o ? o + " " + h : h;
        break;
      }
    }
    return o;
  }, scope: i };
}
function Gp(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function Yp(n, e, t, i = 0, s = n.length) {
  let r = new Jp(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(n.cursor(), i, s, "", r.highlighters), r.flush(s);
}
class Jp {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t) return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = s, c = Xp(e) || zi.empty, f = Gp(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(t, l), h), c.opaque) return;
    let u = e.tree && e.tree.prop(U.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((y) => !y.scope || y.scope(u.tree.type)), m = e.firstChild();
      for (let y = 0, b = l; ; y++) {
        let C = y < u.overlay.length ? u.overlay[y] : null, k = C ? C.from + l : a, T = Math.max(t, b), A = Math.min(i, k);
        if (T < A && m) for (; e.from < A && (this.highlightRange(e, T, A, s, r), this.startSpan(Math.min(A, e.to), h), !(e.to >= k || !e.nextSibling())); ) ;
        if (!C || k > i) break;
        b = C.to + l, b > t && (this.highlightRange(d.cursor(), Math.max(t, C.from + l), Math.min(i, b), "", p), this.startSpan(Math.min(i, b), h));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      u && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i) break;
          this.highlightRange(e, t, i, s, r), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Xp(n) {
  let e = n.type.prop(Uh);
  for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
  return e || null;
}
const D = We.define, yn = D(), yt = D(), Il = D(yt), Nl = D(yt), bt = D(), bn = D(bt), Hs = D(bt), et = D(), Rt = D(et), Qe = D(), Ze = D(), Ir = D(), mi = D(Ir), xn = D(), x = { comment: yn, lineComment: D(yn), blockComment: D(yn), docComment: D(yn), name: yt, variableName: D(yt), typeName: Il, tagName: D(Il), propertyName: Nl, attributeName: D(Nl), className: D(yt), labelName: D(yt), namespace: D(yt), macroName: D(yt), literal: bt, string: bn, docString: D(bn), character: D(bn), attributeValue: D(bn), number: Hs, integer: D(Hs), float: D(Hs), bool: D(bt), regexp: D(bt), escape: D(bt), color: D(bt), url: D(bt), keyword: Qe, self: D(Qe), null: D(Qe), atom: D(Qe), unit: D(Qe), modifier: D(Qe), operatorKeyword: D(Qe), controlKeyword: D(Qe), definitionKeyword: D(Qe), moduleKeyword: D(Qe), operator: Ze, derefOperator: D(Ze), arithmeticOperator: D(Ze), logicOperator: D(Ze), bitwiseOperator: D(Ze), compareOperator: D(Ze), updateOperator: D(Ze), definitionOperator: D(Ze), typeOperator: D(Ze), controlOperator: D(Ze), punctuation: Ir, separator: D(Ir), bracket: mi, angleBracket: D(mi), squareBracket: D(mi), paren: D(mi), brace: D(mi), content: et, heading: Rt, heading1: D(Rt), heading2: D(Rt), heading3: D(Rt), heading4: D(Rt), heading5: D(Rt), heading6: D(Rt), contentSeparator: D(et), list: D(et), quote: D(et), emphasis: D(et), strong: D(et), link: D(et), monospace: D(et), strikethrough: D(et), inserted: D(), deleted: D(), changed: D(), invalid: D(), meta: xn, documentMeta: D(xn), annotation: D(xn), processingInstruction: D(xn), definition: We.defineModifier("definition"), constant: We.defineModifier("constant"), function: We.defineModifier("function"), standard: We.defineModifier("standard"), local: We.defineModifier("local"), special: We.defineModifier("special") };
for (let n in x) {
  let e = x[n];
  e instanceof We && (e.name = n);
}
Gh([{ tag: x.link, class: "tok-link" }, { tag: x.heading, class: "tok-heading" }, { tag: x.emphasis, class: "tok-emphasis" }, { tag: x.strong, class: "tok-strong" }, { tag: x.keyword, class: "tok-keyword" }, { tag: x.atom, class: "tok-atom" }, { tag: x.bool, class: "tok-bool" }, { tag: x.url, class: "tok-url" }, { tag: x.labelName, class: "tok-labelName" }, { tag: x.inserted, class: "tok-inserted" }, { tag: x.deleted, class: "tok-deleted" }, { tag: x.literal, class: "tok-literal" }, { tag: x.string, class: "tok-string" }, { tag: x.number, class: "tok-number" }, { tag: [x.regexp, x.escape, x.special(x.string)], class: "tok-string2" }, { tag: x.variableName, class: "tok-variableName" }, { tag: x.local(x.variableName), class: "tok-variableName tok-local" }, { tag: x.definition(x.variableName), class: "tok-variableName tok-definition" }, { tag: x.special(x.variableName), class: "tok-variableName2" }, { tag: x.definition(x.propertyName), class: "tok-propertyName tok-definition" }, { tag: x.typeName, class: "tok-typeName" }, { tag: x.namespace, class: "tok-namespace" }, { tag: x.className, class: "tok-className" }, { tag: x.macroName, class: "tok-macroName" }, { tag: x.propertyName, class: "tok-propertyName" }, { tag: x.operator, class: "tok-operator" }, { tag: x.comment, class: "tok-comment" }, { tag: x.meta, class: "tok-meta" }, { tag: x.invalid, class: "tok-invalid" }, { tag: x.punctuation, class: "tok-punctuation" }]);
var Fs;
const ki = new U(), Qp = new U();
class rt {
  constructor(e, t, i = [], s = "") {
    this.data = e, this.name = s, j.prototype.hasOwnProperty("tree") || Object.defineProperty(j.prototype, "tree", { get() {
      return Se(this);
    } }), this.parser = t, this.extension = [Ot.of(this), j.languageData.of((r, o, l) => {
      let a = Wl(r, o, l), h = a.type.prop(ki);
      if (!h) return [];
      let c = r.facet(h), f = a.type.prop(Qp);
      if (f) {
        let u = a.resolve(o - a.from, l);
        for (let d of f) if (d.test(u, r)) {
          let p = r.facet(d.facet);
          return d.type == "replace" ? p : p.concat(c);
        }
      }
      return c;
    })].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return Wl(e, t, i).type.prop(ki) == this.data;
  }
  findRegions(e) {
    let t = e.facet(Ot);
    if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let i = [], s = (r, o) => {
      if (r.prop(ki) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(U.mounted);
      if (l) {
        if (l.tree.prop(ki) == this.data) {
          if (l.overlay) for (let a of l.overlay) i.push({ from: a.from + o, to: a.to + o });
          else i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (s(l.tree, l.overlay[0].from + o), i.length > a) return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof xe && s(h, r.positions[a] + o);
      }
    };
    return s(Se(e), 0), i;
  }
  get allowsNesting() {
    return true;
  }
}
rt.setState = q.define();
function Wl(n, e, t) {
  let i = n.facet(Ot), s = Se(n).topNode;
  if (!i || i.allowsNesting) for (let r = s; r; r = r.enter(e, t, he.ExcludeBuffers | he.EnterBracketed)) r.type.isTop && (s = r);
  return s;
}
function Se(n) {
  let e = n.field(rt.state, false);
  return e ? e.tree : xe.empty;
}
class Zp {
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let gi = null;
class Kn {
  constructor(e, t, i = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new Kn(e, t, [], xe.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Zp(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != xe.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s) if (this.fragments = this.withoutTempSkipped(Ft.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length)) this.parse = this.startParse();
        else return true;
        if (e()) return false;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); ) ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Ft.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(e) {
    let t = gi;
    gi = this;
    try {
      return e();
    } finally {
      gi = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); ) e = Hl(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = Ft.applyChanges(i, a), s = xe.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new Kn(this.parser, t, i, s, r, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return false;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: r } = this.skipped[i];
      s < e.to && r > e.from && (this.fragments = Hl(this.fragments, s, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new class extends zp {
      createParse(t, i, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return { parsedPos: r, advance() {
          let a = gi;
          if (a) {
            for (let h of s) a.tempSkipped.push(h);
            e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
          }
          return this.parsedPos = o, new xe(_e.none, [], [], o - r);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return gi;
  }
}
function Hl(n, e, t) {
  return Ft.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class li {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new li(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = Kn.create(e.facet(Ot).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new li(i);
  }
}
rt.state = ve.define({ create: li.init, update(n, e) {
  for (let t of e.effects) if (t.is(rt.setState)) return t.value;
  return e.startState.facet(Ot) != e.state.facet(Ot) ? li.init(e.state) : n.apply(e);
} });
let Yh = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Yh = (n) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(n, { timeout: 400 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const Vs = typeof navigator < "u" && (!((Fs = navigator.scheduling) === null || Fs === void 0) && Fs.isInputPending) ? () => navigator.scheduling.isInputPending() : null, em = le.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(rt.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: e } = this.view, t = e.field(rt.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Yh(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: i, viewport: { to: s } } = this.view, r = i.field(rt.state);
    if (r.tree == r.context.tree && r.context.isDone(s + 1e5)) return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Vs ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && i.doc.length > s + 1e3, a = r.context.work(() => Vs && Vs() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: rt.setState.of(new li(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Te(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), Ot = B.define({ combine(n) {
  return n.length ? n[0] : null;
}, enables: (n) => [rt.state, em, O.contentAttributes.compute([n], (e) => {
  let t = e.facet(n);
  return t && t.name ? { "data-language": t.name } : {};
})] }), tm = B.define(), fs = B.define({ combine: (n) => {
  if (!n.length) return "  ";
  let e = n[0];
  if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
  return e;
} });
function jn(n) {
  let e = n.facet(fs);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function qi(n, e) {
  let t = "", i = n.tabSize, s = n.facet(fs)[0];
  if (s == "	") {
    for (; e >= i; ) t += "	", e -= i;
    s = " ";
  }
  for (let r = 0; r < e; r++) t += s;
  return t;
}
function mo(n, e) {
  n instanceof j && (n = new us(n));
  for (let i of n.state.facet(tm)) {
    let s = i(n, e);
    if (s !== void 0) return s;
  }
  let t = Se(n.state);
  return t.length >= e ? nm(n, t, e) : null;
}
class us {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = jn(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= i.from && s <= i.to ? r && s == e ? { text: "", from: e } : (t < 0 ? s < e : s <= e) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
    let { text: i, from: s } = this.lineAt(e, t);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  column(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), r = this.countColumn(i, e - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  countColumn(e, t = e.length) {
    return hi(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1) return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const im = new U();
function nm(n, e, t) {
  let i = e.resolveStack(t), s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let r = [];
    for (let o = s; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent) r.push(o);
    for (let o = r.length - 1; o >= 0; o--) i = { node: r[o], next: i };
  }
  return Jh(i, n, t);
}
function Jh(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = rm(i.node);
    if (s) return s(go.create(e, t, i));
  }
  return 0;
}
function sm(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function rm(n) {
  let e = n.type.prop(im);
  if (e) return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(U.closedBy))) {
    let s = n.lastChild, r = s && i.indexOf(s.name) > -1;
    return (o) => hm(o, true, 1, void 0, r && !sm(o) ? s.from : void 0);
  }
  return n.parent == null ? om : null;
}
function om() {
  return 0;
}
class go extends us {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new go(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; ) i = i.parent;
      if (lm(i, e)) break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return Jh(this.context.next, this.base, this.pos);
  }
}
function lm(n, e) {
  for (let t = e; t; t = t.parent) if (n == t) return true;
  return false;
}
function am(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t) return null;
  let s = n.options.simulateBreak, r = n.state.doc.lineAt(t.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i) return null;
    if (!a.type.isSkipped) {
      if (a.from >= o) return null;
      let h = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function hm(n, e, t, i, s) {
  let r = n.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || s == n.pos + o, a = am(n);
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const cm = 200;
function fm() {
  return j.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete")) return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length) return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, s = t.lineAt(i);
    if (i > s.from + cm) return n;
    let r = t.sliceString(s.from, i);
    if (!e.some((h) => h.test(r))) return n;
    let { state: o } = n, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l) continue;
      l = c.from;
      let f = mo(o, c.from);
      if (f == null) continue;
      let u = /^\s*/.exec(c.text)[0], d = qi(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: true }] : n;
  });
}
const um = B.define(), dm = new U();
function pm(n, e, t) {
  let i = Se(n);
  if (i.length < t) return null;
  let s = i.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) continue;
    if (r && l.from < e) break;
    let a = l.type.prop(dm);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !mm(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (r = h);
    }
  }
  return r;
}
function mm(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Un(n, e, t) {
  for (let i of n.facet(um)) {
    let s = i(n, e, t);
    if (s) return s;
  }
  return pm(n, e, t);
}
function Xh(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const ds = q.define({ map: Xh }), Xi = q.define({ map: Xh });
function Qh(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges) e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const $t = ve.define({ create() {
  return P.none;
}, update(n, e) {
  e.isUserEvent("delete") && e.changes.iterChangedRanges((t, i) => n = Fl(n, t, i)), n = n.map(e.changes);
  for (let t of e.effects) if (t.is(ds) && !gm(n, t.value.from, t.value.to)) {
    let { preparePlaceholder: i } = e.state.facet(tc), s = i ? P.replace({ widget: new Sm(i(e.state, t.value)) }) : Vl;
    n = n.update({ add: [s.range(t.value.from, t.value.to)] });
  } else t.is(Xi) && (n = n.update({ filter: (i, s) => t.value.from != i || t.value.to != s, filterFrom: t.value.from, filterTo: t.value.to }));
  return e.selection && (n = Fl(n, e.selection.main.head)), n;
}, provide: (n) => O.decorations.from(n), toJSON(n, e) {
  let t = [];
  return n.between(0, e.doc.length, (i, s) => {
    t.push(i, s);
  }), t;
}, fromJSON(n) {
  if (!Array.isArray(n) || n.length % 2) throw new RangeError("Invalid JSON for fold state");
  let e = [];
  for (let t = 0; t < n.length; ) {
    let i = n[t++], s = n[t++];
    if (typeof i != "number" || typeof s != "number") throw new RangeError("Invalid JSON for fold state");
    e.push(Vl.range(i, s));
  }
  return P.set(e, true);
} });
function Fl(n, e, t = e) {
  let i = false;
  return n.between(e, t, (s, r) => {
    s < t && r > e && (i = true);
  }), i ? n.update({ filterFrom: e, filterTo: t, filter: (s, r) => s >= t || r <= e }) : n;
}
function Gn(n, e, t) {
  var i;
  let s = null;
  return (i = n.field($t, false)) === null || i === void 0 || i.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function gm(n, e, t) {
  let i = false;
  return n.between(e, e, (s, r) => {
    s == e && r == t && (i = true);
  }), i;
}
function Zh(n, e) {
  return n.field($t, false) ? e : e.concat(q.appendConfig.of(ic()));
}
const ym = (n) => {
  for (let e of Qh(n)) {
    let t = Un(n.state, e.from, e.to);
    if (t) return n.dispatch({ effects: Zh(n.state, [ds.of(t), ec(n, t)]) }), true;
  }
  return false;
}, bm = (n) => {
  if (!n.state.field($t, false)) return false;
  let e = [];
  for (let t of Qh(n)) {
    let i = Gn(n.state, t.from, t.to);
    i && e.push(Xi.of(i), ec(n, i, false));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function ec(n, e, t = true) {
  let i = n.state.doc.lineAt(e.from).number, s = n.state.doc.lineAt(e.to).number;
  return O.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const xm = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let s = n.lineBlockAt(i), r = Un(e, s.from, s.to);
    r && t.push(ds.of(r)), i = (r ? n.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && n.dispatch({ effects: Zh(n.state, t) }), !!t.length;
}, wm = (n) => {
  let e = n.state.field($t, false);
  if (!e || !e.size) return false;
  let t = [];
  return e.between(0, n.state.doc.length, (i, s) => {
    t.push(Xi.of({ from: i, to: s }));
  }), n.dispatch({ effects: t }), true;
}, vm = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: ym }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: bm }, { key: "Ctrl-Alt-[", run: xm }, { key: "Ctrl-Alt-]", run: wm }], km = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "\u2026" }, tc = B.define({ combine(n) {
  return ft(n, km);
} });
function ic(n) {
  return [$t, Mm];
}
function nc(n, e) {
  let { state: t } = n, i = t.facet(tc), s = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = Gn(n.state, l.from, l.to);
    a && n.dispatch({ effects: Xi.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM) return i.placeholderDOM(n, s, e);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const Vl = P.replace({ widget: new class extends ut {
  toDOM(n) {
    return nc(n, null);
  }
}() });
class Sm extends ut {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return nc(e, this.value);
  }
}
const Cm = { openText: "\u2304", closedText: "\u203A", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class zs extends gt {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function Am(n = {}) {
  let e = { ...Cm, ...n }, t = new zs(e, true), i = new zs(e, false), s = le.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(Ot) != o.state.facet(Ot) || o.startState.field($t, false) != o.state.field($t, false) || Se(o.startState) != Se(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new pt();
      for (let a of o.viewportLineBlocks) {
        let h = Gn(o.state, a.from, a.to) ? i : Un(o.state, a.from, a.to) ? t : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [s, Sp({ class: "cm-foldGutter", markers(o) {
    var l;
    return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || K.empty;
  }, initialSpacer() {
    return new zs(e, false);
  }, domEventHandlers: { ...r, click: (o, l, a) => {
    if (r.click && r.click(o, l, a)) return true;
    let h = Gn(o.state, l.from, l.to);
    if (h) return o.dispatch({ effects: Xi.of(h) }), true;
    let c = Un(o.state, l.from, l.to);
    return c ? (o.dispatch({ effects: ds.of(c) }), true) : false;
  } } }), ic()];
}
const Mm = O.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class Qi {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = At.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof rt ? (l) => l.prop(ki) == o.data : o ? (l) => l == o : void 0, this.style = Gh(e.map((l) => ({ tag: l.tag, class: l.class || s(Object.assign({}, l, { tag: null })) })), { all: r }).style, this.module = i ? new At(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new Qi(e, t || {});
  }
}
const Nr = B.define(), sc = B.define({ combine(n) {
  return n.length ? [n[0]] : null;
} });
function qs(n) {
  let e = n.facet(Nr);
  return e.length ? e : n.facet(sc);
}
function rc(n, e) {
  let t = [Dm], i;
  return n instanceof Qi && (n.module && t.push(O.styleModule.of(n.module)), i = n.themeType), (e == null ? void 0 : e.fallback) ? t.push(sc.of(n)) : i ? t.push(Nr.computeN([O.darkTheme], (s) => s.facet(O.darkTheme) == (i == "dark") ? [n] : [])) : t.push(Nr.of(n)), t;
}
class Tm {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Se(e.state), this.decorations = this.buildDeco(e, qs(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = Se(e.state), i = qs(e.state), s = i != qs(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return P.none;
    let i = new pt();
    for (let { from: s, to: r } of e.visibleRanges) Yp(this.tree, t, (o, l, a) => {
      i.add(o, l, this.markCache[a] || (this.markCache[a] = P.mark({ class: a })));
    }, s, r);
    return i.finish();
  }
}
const Dm = Kt.high(le.fromClass(Tm, { decorations: (n) => n.decorations })), Om = Qi.define([{ tag: x.meta, color: "#404740" }, { tag: x.link, textDecoration: "underline" }, { tag: x.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: x.emphasis, fontStyle: "italic" }, { tag: x.strong, fontWeight: "bold" }, { tag: x.strikethrough, textDecoration: "line-through" }, { tag: x.keyword, color: "#708" }, { tag: [x.atom, x.bool, x.url, x.contentSeparator, x.labelName], color: "#219" }, { tag: [x.literal, x.inserted], color: "#164" }, { tag: [x.string, x.deleted], color: "#a11" }, { tag: [x.regexp, x.escape, x.special(x.string)], color: "#e40" }, { tag: x.definition(x.variableName), color: "#00f" }, { tag: x.local(x.variableName), color: "#30a" }, { tag: [x.typeName, x.namespace], color: "#085" }, { tag: x.className, color: "#167" }, { tag: [x.special(x.variableName), x.macroName], color: "#256" }, { tag: x.definition(x.propertyName), color: "#00c" }, { tag: x.comment, color: "#940" }, { tag: x.invalid, color: "#f00" }]), Em = O.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), oc = 1e4, lc = "()[]{}", ac = B.define({ combine(n) {
  return ft(n, { afterCursor: true, brackets: lc, maxScanDistance: oc, renderMatch: Lm });
} }), Bm = P.mark({ class: "cm-matchingBracket" }), Rm = P.mark({ class: "cm-nonmatchingBracket" });
function Lm(n) {
  let e = [], t = n.matched ? Bm : Rm;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const Pm = ve.define({ create() {
  return P.none;
}, update(n, e) {
  if (!e.docChanged && !e.selection) return n;
  let t = [], i = e.state.facet(ac);
  for (let s of e.state.selection.ranges) {
    if (!s.empty) continue;
    let r = ot(e.state, s.head, -1, i) || s.head > 0 && ot(e.state, s.head - 1, 1, i) || i.afterCursor && (ot(e.state, s.head, 1, i) || s.head < e.state.doc.length && ot(e.state, s.head + 1, -1, i));
    r && (t = t.concat(i.renderMatch(r, e.state)));
  }
  return P.set(t, true);
}, provide: (n) => O.decorations.from(n) }), Im = [Pm, Em];
function Nm(n = {}) {
  return [ac.of(n), Im];
}
const Wm = new U();
function Wr(n, e, t) {
  let i = n.prop(e < 0 ? U.openedBy : U.closedBy);
  if (i) return i;
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) return [t[s + e]];
  }
  return null;
}
function Hr(n) {
  let e = n.type.prop(Wm);
  return e ? e(n.node) : n;
}
function ot(n, e, t, i = {}) {
  let s = i.maxScanDistance || oc, r = i.brackets || lc, o = Se(n), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Wr(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Hr(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to)) return Hm(n, e, t, a, c, h, r);
    }
  }
  return Fm(n, e, t, o, l.type, s, r);
}
function Hm(n, e, t, i, s, r, o) {
  let l = i.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to))) do
    if (t < 0 ? c.to <= i.from : c.from >= i.to) {
      if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
        let f = Hr(c);
        return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: true };
      } else if (Wr(c.type, t, o)) h++;
      else if (Wr(c.type, -t, o)) {
        if (h == 0) {
          let f = Hr(c);
          return { start: a, end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0, matched: false };
        }
        h--;
      }
    }
  while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: false };
}
function Fm(n, e, t, i, s, r, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0) return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let m = t > 0 ? 0 : d.length - 1, y = t > 0 ? d.length : -1; m != y; m += t) {
      let b = o.indexOf(d[m]);
      if (!(b < 0 || i.resolveInner(p + m, 1).type != s)) if (b % 2 == 0 == t > 0) f++;
      else {
        if (f == 1) return { start: h, end: { from: p + m, to: p + m + 1 }, matched: b >> 1 == a >> 1 };
        f--;
      }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: false } : null;
}
const Vm = /* @__PURE__ */ Object.create(null), zl = [_e.none], ql = [], _l = /* @__PURE__ */ Object.create(null), zm = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) zm[n] = qm(Vm, e);
function _s(n, e) {
  ql.indexOf(n) > -1 || (ql.push(n), console.warn(e));
}
function qm(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = n[h] || x[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : _s(h, `Modifier ${h} used at start of tag`) : a.length ? _s(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : _s(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a) t.push(h);
  }
  if (!t.length) return 0;
  let i = e.replace(/ /g, "_"), s = i + " " + t.map((l) => l.id), r = _l[s];
  if (r) return r.id;
  let o = _l[s] = _e.define({ id: zl.length, name: i, props: [Up({ [i]: t })] });
  return zl.push(o), o.id;
}
te.RTL, te.LTR;
const _m = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = bo(n.state, t.from);
  return i.line ? $m(n) : i.block ? jm(n) : false;
};
function yo(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly) return false;
    let s = n(e, t);
    return s ? (i(t.update(s)), true) : false;
  };
}
const $m = yo(Ym, 0), Km = yo(hc, 0), jm = yo((n, e) => hc(n, e, Gm(e)), 0);
function bo(n, e) {
  let t = n.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const yi = 50;
function Um(n, { open: e, close: t }, i, s) {
  let r = n.sliceDoc(i - yi, i), o = n.sliceDoc(s, s + yi), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t) return { open: { pos: i - l, margin: l && 1 }, close: { pos: s + a, margin: a && 1 } };
  let c, f;
  s - i <= 2 * yi ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + yi), f = n.sliceDoc(s - yi, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t ? { open: { pos: i + u + e.length, margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0 }, close: { pos: s - d - t.length, margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0 } } : null;
}
function Gm(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), s = t.to <= i.to ? i : n.doc.lineAt(t.to);
    s.from > i.from && s.from == t.to && (s = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > i.from ? e[r].to = s.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function hc(n, e, t = e.selection.ranges) {
  let i = t.map((r) => bo(e, r.from).block);
  if (!i.every((r) => r)) return null;
  let s = t.map((r, o) => Um(e, i[o], r.from, r.to));
  if (n != 2 && !s.every((r) => r)) return { changes: e.changes(t.map((r, o) => s[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (n != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++) if (l = s[o]) {
      let a = i[o], { open: h, close: c } = l;
      r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
    }
    return { changes: r };
  }
  return null;
}
function Ym(n, e, t = e.selection.ranges) {
  let i = [], s = -1;
  e: for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, h;
    for (let c = r; c <= o; ) {
      let f = e.doc.lineAt(c);
      if (h == null && (h = bo(e, f.from).line, !h)) continue e;
      if (f.from > s && (r == o || o > f.from)) {
        s = f.from;
        let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
        u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: false });
      }
      c = f.to + 1;
    }
    if (a < 1e9) for (let c = l; c < i.length; c++) i[c].indent < i[c].line.text.length && (i[c].indent = a);
    i.length == l + 1 && (i[l].single = true);
  }
  if (n != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i) (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (n != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i) if (l >= 0) {
      let h = o.from + l, c = h + a.length;
      o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
    }
    return { changes: r };
  }
  return null;
}
const Fr = ct.define(), Jm = ct.define(), Xm = B.define(), cc = B.define({ combine(n) {
  return ft(n, { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (i, s) => e(i, s) || t(i, s) });
} }), fc = ve.define({ create() {
  return lt.empty;
}, update(n, e) {
  let t = e.state.facet(cc), i = e.annotation(Fr);
  if (i) {
    let a = Le.fromTransaction(e, i.selection), h = i.side, c = h == 0 ? n.undone : n.done;
    return a ? c = Yn(c, c.length, t.minDepth, a) : c = pc(c, e.startState.selection), new lt(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
  }
  let s = e.annotation(Jm);
  if ((s == "full" || s == "before") && (n = n.isolate()), e.annotation(ue.addToHistory) === false) return e.changes.empty ? n : n.addMapping(e.changes.desc);
  let r = Le.fromTransaction(e), o = e.annotation(ue.time), l = e.annotation(ue.userEvent);
  return r ? n = n.addChanges(r, o, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
}, toJSON(n) {
  return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
}, fromJSON(n) {
  return new lt(n.done.map(Le.fromJSON), n.undone.map(Le.fromJSON));
} });
function Qm(n = {}) {
  return [fc, cc.of(n), O.domEventHandlers({ beforeinput(e, t) {
    let i = e.inputType == "historyUndo" ? uc : e.inputType == "historyRedo" ? Vr : null;
    return i ? (e.preventDefault(), i(t)) : false;
  } })];
}
function ps(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly) return false;
    let s = t.field(fc, false);
    if (!s) return false;
    let r = s.pop(n, t, e);
    return r ? (i(r), true) : false;
  };
}
const uc = ps(0, false), Vr = ps(1, false), Zm = ps(0, true), eg = ps(1, true);
class Le {
  constructor(e, t, i, s, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new Le(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return { changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(), mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(), startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(), selectionsAfter: this.selectionsAfter.map((s) => s.toJSON()) };
  }
  static fromJSON(e) {
    return new Le(e.changes && fe.fromJSON(e.changes), [], e.mapped && ht.fromJSON(e.mapped), e.startSelection && w.fromJSON(e.startSelection), e.selectionsAfter.map(w.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = Fe;
    for (let s of e.startState.facet(Xm)) {
      let r = s(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new Le(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Fe);
  }
  static selection(e) {
    return new Le(void 0, Fe, void 0, void 0, e);
  }
}
function Yn(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = n.slice(s, e);
  return r.push(i), r;
}
function tg(n, e) {
  let t = [], i = false;
  return n.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (i = true);
    }
  }), i;
}
function ig(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function dc(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const Fe = [], ng = 200;
function pc(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - ng));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), Yn(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else return [Le.selection([e])];
}
function sg(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function $s(n, e) {
  if (!n.length) return n;
  let t = n.length, i = Fe;
  for (; t; ) {
    let s = rg(n[t - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = n.slice(0, t);
      return r[t - 1] = s, r;
    } else e = s.mapped, t--, i = s.selectionsAfter;
  }
  return i.length ? [Le.selection(i)] : Fe;
}
function rg(n, e, t) {
  let i = dc(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Fe, t);
  if (!n.changes) return Le.selection(i);
  let s = n.changes.map(e), r = e.mapDesc(n.changes, true), o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new Le(s, q.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const og = /^(input\.type|delete)($|\.)/;
class lt {
  constructor(e, t, i = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new lt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || og.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, tg(l.changes, e.changes)) || i == "input.type.compose") ? o = Yn(o, o.length - 1, s.minDepth, new Le(e.changes.compose(l.changes), dc(q.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, Fe)) : o = Yn(o, o.length, s.minDepth, e), new lt(o, Fe, t, i);
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Fe;
    return r.length > 0 && t - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && ig(r[r.length - 1], e) ? this : new lt(pc(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new lt($s(this.done, e), $s(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0) return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || (r.startSelection ? r.startSelection.map(r.changes.invertedDesc, 1) : t.selection);
    if (i && r.selectionsAfter.length) return t.update({ selection: r.selectionsAfter[r.selectionsAfter.length - 1], annotations: Fr.of({ side: e, rest: sg(s), selection: o }), userEvent: e == 0 ? "select.undo" : "select.redo", scrollIntoView: true });
    if (r.changes) {
      let l = s.length == 1 ? Fe : s.slice(0, s.length - 1);
      return r.mapped && (l = $s(l, r.mapped)), t.update({ changes: r.changes, selection: r.startSelection, effects: r.effects, annotations: Fr.of({ side: e, rest: l, selection: o }), filter: false, userEvent: e == 0 ? "undo" : "redo", scrollIntoView: true });
    } else return null;
  }
}
lt.empty = new lt(Fe, Fe);
const lg = [{ key: "Mod-z", run: uc, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: Vr, preventDefault: true }, { linux: "Ctrl-Shift-z", run: Vr, preventDefault: true }, { key: "Mod-u", run: Zm, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: eg, preventDefault: true }];
function ci(n, e) {
  return w.create(n.ranges.map(e), n.mainIndex);
}
function Ge(n, e) {
  return n.update({ selection: e, scrollIntoView: true, userEvent: "select" });
}
function Ye({ state: n, dispatch: e }, t) {
  let i = ci(n.selection, t);
  return i.eq(n.selection, true) ? false : (e(Ge(n, i)), true);
}
function ms(n, e) {
  return w.cursor(e ? n.to : n.from);
}
function mc(n, e) {
  return Ye(n, (t) => t.empty ? n.moveByChar(t, e) : ms(t, e));
}
function Ce(n) {
  return n.textDirectionAt(n.state.selection.main.head) == te.LTR;
}
const gc = (n) => mc(n, !Ce(n)), yc = (n) => mc(n, Ce(n));
function bc(n, e) {
  return Ye(n, (t) => t.empty ? n.moveByGroup(t, e) : ms(t, e));
}
const ag = (n) => bc(n, !Ce(n)), hg = (n) => bc(n, Ce(n));
function cg(n, e, t) {
  if (e.type.prop(t)) return true;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function gs(n, e, t) {
  let i = Se(n).resolveInner(e.head), s = t ? U.closedBy : U.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h) break;
    cg(n, h, s) ? i = h : a = t ? h.to : h.from;
  }
  let r = i.type.prop(s), o, l;
  return r && (o = t ? ot(n, i.from, 1) : ot(n, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, w.cursor(l, t ? -1 : 1);
}
const fg = (n) => Ye(n, (e) => gs(n.state, e, !Ce(n))), ug = (n) => Ye(n, (e) => gs(n.state, e, Ce(n)));
function xc(n, e) {
  return Ye(n, (t) => {
    if (!t.empty) return ms(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const wc = (n) => xc(n, false), vc = (n) => xc(n, true);
function kc(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, s;
  if (e) {
    for (let r of n.state.facet(O.scrollMargins)) {
      let o = r(n);
      (o == null ? void 0 : o.top) && (t = Math.max(o == null ? void 0 : o.top, t)), (o == null ? void 0 : o.bottom) && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    s = n.scrollDOM.clientHeight - t - i;
  } else s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: t, marginBottom: i, selfScroll: e, height: Math.max(n.defaultLineHeight, s - 5) };
}
function Sc(n, e) {
  let t = kc(n), { state: i } = n, s = ci(i.selection, (o) => o.empty ? n.moveVertically(o, e, t.height) : ms(o, e));
  if (s.eq(i.selection)) return false;
  let r;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (r = O.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(Ge(i, s), { effects: r }), true;
}
const $l = (n) => Sc(n, false), zr = (n) => Sc(n, true);
function Bt(n, e, t) {
  let i = n.lineBlockAt(e.head), s = n.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, false)), !t && s.head == i.from && i.length) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (s = w.cursor(i.from + r));
  }
  return s;
}
const dg = (n) => Ye(n, (e) => Bt(n, e, true)), pg = (n) => Ye(n, (e) => Bt(n, e, false)), mg = (n) => Ye(n, (e) => Bt(n, e, !Ce(n))), gg = (n) => Ye(n, (e) => Bt(n, e, Ce(n))), yg = (n) => Ye(n, (e) => w.cursor(n.lineBlockAt(e.head).from, 1)), bg = (n) => Ye(n, (e) => w.cursor(n.lineBlockAt(e.head).to, -1));
function xg(n, e, t) {
  let i = false, s = ci(n.selection, (r) => {
    let o = ot(n, r.head, -1) || ot(n, r.head, 1) || r.head > 0 && ot(n, r.head - 1, 1) || r.head < n.doc.length && ot(n, r.head + 1, -1);
    if (!o || !o.end) return r;
    i = true;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return w.cursor(l);
  });
  return i ? (e(Ge(n, s)), true) : false;
}
const wg = ({ state: n, dispatch: e }) => xg(n, e);
function $e(n, e) {
  let t = ci(n.state.selection, (i) => {
    let s = e(i);
    return w.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? false : (n.dispatch(Ge(n.state, t)), true);
}
function Cc(n, e) {
  return $e(n, (t) => n.moveByChar(t, e));
}
const Ac = (n) => Cc(n, !Ce(n)), Mc = (n) => Cc(n, Ce(n));
function Tc(n, e) {
  return $e(n, (t) => n.moveByGroup(t, e));
}
const vg = (n) => Tc(n, !Ce(n)), kg = (n) => Tc(n, Ce(n)), Sg = (n) => $e(n, (e) => gs(n.state, e, !Ce(n))), Cg = (n) => $e(n, (e) => gs(n.state, e, Ce(n)));
function Dc(n, e) {
  return $e(n, (t) => n.moveVertically(t, e));
}
const Oc = (n) => Dc(n, false), Ec = (n) => Dc(n, true);
function Bc(n, e) {
  return $e(n, (t) => n.moveVertically(t, e, kc(n).height));
}
const Kl = (n) => Bc(n, false), jl = (n) => Bc(n, true), Ag = (n) => $e(n, (e) => Bt(n, e, true)), Mg = (n) => $e(n, (e) => Bt(n, e, false)), Tg = (n) => $e(n, (e) => Bt(n, e, !Ce(n))), Dg = (n) => $e(n, (e) => Bt(n, e, Ce(n))), Og = (n) => $e(n, (e) => w.cursor(n.lineBlockAt(e.head).from)), Eg = (n) => $e(n, (e) => w.cursor(n.lineBlockAt(e.head).to)), Ul = ({ state: n, dispatch: e }) => (e(Ge(n, { anchor: 0 })), true), Gl = ({ state: n, dispatch: e }) => (e(Ge(n, { anchor: n.doc.length })), true), Yl = ({ state: n, dispatch: e }) => (e(Ge(n, { anchor: n.selection.main.anchor, head: 0 })), true), Jl = ({ state: n, dispatch: e }) => (e(Ge(n, { anchor: n.selection.main.anchor, head: n.doc.length })), true), Bg = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), true), Rg = ({ state: n, dispatch: e }) => {
  let t = ys(n).map(({ from: i, to: s }) => w.range(i, Math.min(s + 1, n.doc.length)));
  return e(n.update({ selection: w.create(t), userEvent: "select" })), true;
}, Lg = ({ state: n, dispatch: e }) => {
  let t = ci(n.selection, (i) => {
    let s = Se(n), r = s.resolveStack(i.from, 1);
    if (i.empty) {
      let o = s.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next) return w.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(n.selection) ? false : (e(Ge(n, t)), true);
};
function Rc(n, e) {
  let { state: t } = n, i = t.selection, s = t.selection.ranges.slice();
  for (let r of t.selection.ranges) {
    let o = t.doc.lineAt(r.head);
    if (e ? o.to < n.state.doc.length : o.from > 0) for (let l = r; ; ) {
      let a = n.moveVertically(l, e);
      if (a.head < o.from || a.head > o.to) {
        s.some((h) => h.head == a.head) || s.push(a);
        break;
      } else {
        if (a.head == l.head) break;
        l = a;
      }
    }
  }
  return s.length == i.ranges.length ? false : (n.dispatch(Ge(t, w.create(s, s.length - 1))), true);
}
const Pg = (n) => Rc(n, false), Ig = (n) => Rc(n, true), Ng = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = w.create([t.main]) : t.main.empty || (i = w.create([w.cursor(t.main.head)])), i ? (e(Ge(n, i)), true) : false;
};
function Zi(n, e) {
  if (n.state.readOnly) return false;
  let t = "delete.selection", { state: i } = n, s = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = wn(n, a, false)) : a > o && (t = "delete.forward", a = wn(n, a, true)), o = Math.min(o, a), l = Math.max(l, a);
    } else o = wn(n, o, false), l = wn(n, l, true);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: w.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? false : (n.dispatch(i.update(s, { scrollIntoView: true, userEvent: t, effects: t == "delete.selection" ? O.announce.of(i.phrase("Selection deleted")) : void 0 })), true);
}
function wn(n, e, t) {
  if (n instanceof O) for (let i of n.state.facet(O.atomicRanges).map((s) => s(n))) i.between(e, e, (s, r) => {
    s < e && r > e && (e = t ? r : s);
  });
  return e;
}
const Lc = (n, e, t) => Zi(n, (i) => {
  let s = i.from, { state: r } = n, o = r.doc.lineAt(s), l, a;
  if (t && !e && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	") return s - 1;
    let h = hi(l, r.tabSize), c = h % jn(r) || jn(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++) s--;
    a = s;
  } else a = me(o.text, s - o.from, e, e) + o.from, a == s && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = me(o.text, a - o.from, false, false) + o.from);
  return a;
}), qr = (n) => Lc(n, false, true), Pc = (n) => Lc(n, true, false), Ic = (n, e) => Zi(n, (t) => {
  let i = t.head, { state: s } = n, r = s.doc.lineAt(i), o = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = me(r.text, i - r.from, e) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l) break;
    (h != " " || i != t.head) && (l = c), i = a;
  }
  return i;
}), Nc = (n) => Ic(n, false), Wg = (n) => Ic(n, true), Hg = (n) => Zi(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), Fg = (n) => Zi(n, (e) => {
  let t = n.moveToLineBoundary(e, false).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), Vg = (n) => Zi(n, (e) => {
  let t = n.moveToLineBoundary(e, true).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), zg = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = n.changeByRange((i) => ({ changes: { from: i.from, to: i.to, insert: J.of(["", ""]) }, range: w.cursor(i.from) }));
  return e(n.update(t, { scrollIntoView: true, userEvent: "input" })), true;
}, qg = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i };
    let s = i.from, r = n.doc.lineAt(s), o = s == r.from ? s - 1 : me(r.text, s - r.from, false) + r.from, l = s == r.to ? s + 1 : me(r.text, s - r.from, true) + r.from;
    return { changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) }, range: w.cursor(l) };
  });
  return t.changes.empty ? false : (e(n.update(t, { scrollIntoView: true, userEvent: "move.character" })), true);
};
function ys(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from), r = n.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), t >= s.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else e.push({ from: s.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function Wc(n, e, t) {
  if (n.readOnly) return false;
  let i = [], s = [];
  for (let r of ys(n)) {
    if (t ? r.to == n.doc.length : r.from == 0) continue;
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak });
      for (let a of r.ranges) s.push(w.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text });
      for (let a of r.ranges) s.push(w.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({ changes: i, scrollIntoView: true, selection: w.create(s, n.selection.mainIndex), userEvent: "move.line" })), true) : false;
}
const _g = ({ state: n, dispatch: e }) => Wc(n, e, false), $g = ({ state: n, dispatch: e }) => Wc(n, e, true);
function Hc(n, e, t) {
  if (n.readOnly) return false;
  let i = [];
  for (let r of ys(n)) t ? i.push({ from: r.from, insert: n.doc.slice(r.from, r.to) + n.lineBreak }) : i.push({ from: r.to, insert: n.lineBreak + n.doc.slice(r.from, r.to) });
  let s = n.changes(i);
  return e(n.update({ changes: s, selection: n.selection.map(s, t ? 1 : -1), scrollIntoView: true, userEvent: "input.copyline" })), true;
}
const Kg = ({ state: n, dispatch: e }) => Hc(n, e, false), jg = ({ state: n, dispatch: e }) => Hc(n, e, true), Ug = (n) => {
  if (n.state.readOnly) return false;
  let { state: e } = n, t = e.changes(ys(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), i = ci(e.selection, (s) => {
    let r;
    if (n.lineWrapping) {
      let o = n.lineBlockAt(s.head), l = n.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(s, true, r);
  }).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: true, userEvent: "delete.line" }), true;
};
function Gg(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e };
  let t = Se(n).resolveInner(e), i = t.childBefore(e), s = t.childAfter(e), r;
  return i && s && i.to <= e && s.from >= e && (r = i.type.prop(U.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const Xl = Fc(false), Yg = Fc(true);
function Fc(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return false;
    let i = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !n && r == o && Gg(e, r);
      n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new us(e, { simulateBreak: r, simulateDoubleBreak: !!a }), c = mo(h, r);
      for (c == null && (c = hi(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); ) o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", qi(e, c)];
      return a && f.push(qi(e, h.lineIndent(l.from, -1))), { changes: { from: r, to: o, insert: J.of(f) }, range: w.cursor(r + 1 + f[1].length) };
    });
    return t(e.update(i, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function xo(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let s = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, s, i), t = l.number), o = l.to + 1;
    }
    let r = n.changes(s);
    return { changes: s, range: w.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1)) };
  });
}
const Jg = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = /* @__PURE__ */ Object.create(null), i = new us(n, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = xo(n, (r, o, l) => {
    let a = mo(i, r.from);
    if (a == null) return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = qi(n, a);
    (h != c || l.from < r.from + h.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return s.changes.empty || e(n.update(s, { userEvent: "indent" })), true;
}, Vc = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(xo(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(fs) });
}), { userEvent: "input.indent" })), true), zc = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(xo(n, (t, i) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s) return;
  let r = hi(s, n.tabSize), o = 0, l = qi(n, Math.max(0, r - jn(n)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); ) o++;
  i.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), true), Xg = (n) => (n.setTabFocusMode(), true), Qg = [{ key: "Ctrl-b", run: gc, shift: Ac, preventDefault: true }, { key: "Ctrl-f", run: yc, shift: Mc }, { key: "Ctrl-p", run: wc, shift: Oc }, { key: "Ctrl-n", run: vc, shift: Ec }, { key: "Ctrl-a", run: yg, shift: Og }, { key: "Ctrl-e", run: bg, shift: Eg }, { key: "Ctrl-d", run: Pc }, { key: "Ctrl-h", run: qr }, { key: "Ctrl-k", run: Hg }, { key: "Ctrl-Alt-h", run: Nc }, { key: "Ctrl-o", run: zg }, { key: "Ctrl-t", run: qg }, { key: "Ctrl-v", run: zr }], Zg = [{ key: "ArrowLeft", run: gc, shift: Ac, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: ag, shift: vg, preventDefault: true }, { mac: "Cmd-ArrowLeft", run: mg, shift: Tg, preventDefault: true }, { key: "ArrowRight", run: yc, shift: Mc, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: hg, shift: kg, preventDefault: true }, { mac: "Cmd-ArrowRight", run: gg, shift: Dg, preventDefault: true }, { key: "ArrowUp", run: wc, shift: Oc, preventDefault: true }, { mac: "Cmd-ArrowUp", run: Ul, shift: Yl }, { mac: "Ctrl-ArrowUp", run: $l, shift: Kl }, { key: "ArrowDown", run: vc, shift: Ec, preventDefault: true }, { mac: "Cmd-ArrowDown", run: Gl, shift: Jl }, { mac: "Ctrl-ArrowDown", run: zr, shift: jl }, { key: "PageUp", run: $l, shift: Kl }, { key: "PageDown", run: zr, shift: jl }, { key: "Home", run: pg, shift: Mg, preventDefault: true }, { key: "Mod-Home", run: Ul, shift: Yl }, { key: "End", run: dg, shift: Ag, preventDefault: true }, { key: "Mod-End", run: Gl, shift: Jl }, { key: "Enter", run: Xl, shift: Xl }, { key: "Mod-a", run: Bg }, { key: "Backspace", run: qr, shift: qr, preventDefault: true }, { key: "Delete", run: Pc, preventDefault: true }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: Nc, preventDefault: true }, { key: "Mod-Delete", mac: "Alt-Delete", run: Wg, preventDefault: true }, { mac: "Mod-Backspace", run: Fg, preventDefault: true }, { mac: "Mod-Delete", run: Vg, preventDefault: true }].concat(Qg.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), e0 = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: fg, shift: Sg }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: ug, shift: Cg }, { key: "Alt-ArrowUp", run: _g }, { key: "Shift-Alt-ArrowUp", run: Kg }, { key: "Alt-ArrowDown", run: $g }, { key: "Shift-Alt-ArrowDown", run: jg }, { key: "Mod-Alt-ArrowUp", run: Pg }, { key: "Mod-Alt-ArrowDown", run: Ig }, { key: "Escape", run: Ng }, { key: "Mod-Enter", run: Yg }, { key: "Alt-l", mac: "Ctrl-l", run: Rg }, { key: "Mod-i", run: Lg, preventDefault: true }, { key: "Mod-[", run: zc }, { key: "Mod-]", run: Vc }, { key: "Mod-Alt-\\", run: Jg }, { key: "Shift-Mod-k", run: Ug }, { key: "Shift-Mod-\\", run: wg }, { key: "Mod-/", run: _m }, { key: "Alt-A", run: Km }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: Xg }].concat(Zg), t0 = { key: "Tab", run: Vc, shift: zc }, Ql = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class ai {
  constructor(e, t, i = 0, s = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, s), this.bufferStart = i, this.normalize = r ? (l) => r(Ql(l)) : Ql, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Ee(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0) return this.done = true, this;
      let t = jr(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += it(e);
      let s = this.normalize(t);
      if (s.length) for (let r = 0, o = i; ; r++) {
        let l = s.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
        if (r == s.length - 1) {
          if (a) return this.value = a, this;
          break;
        }
        o == i && r < t.length && t.charCodeAt(r) == l && o++;
      }
    }
  }
  match(e, t, i) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = false;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? s = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = true)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? s = { from: t, to: i } : this.matches.push(1, t)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (ai.prototype[Symbol.iterator] = function() {
  return this;
});
const qc = { from: -1, to: -1, match: /.*/.exec("") }, wo = "gm" + (/x/.unicode == null ? "" : "u");
class _c {
  constructor(e, t, i, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = false, this.value = qc, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new $c(e, t, i, s, r);
    this.re = new RegExp(t, wo + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = Jn(e, s), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, s = i + t[0].length;
        if (this.matchPos = Jn(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, t))) return this.value = { from: i, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
      else return this.done = true, this;
    }
  }
}
const Ks = /* @__PURE__ */ new WeakMap();
class ti {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Ks.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new ti(t, e.sliceString(t, i));
      return Ks.set(e, l), l;
    }
    if (s.from == t && s.to == i) return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < i && (r += e.sliceString(s.to, i)), Ks.set(e, new ti(o, r)), new ti(t, r.slice(t - o, i - o));
  }
}
class $c {
  constructor(e, t, i, s, r) {
    this.text = e, this.to = r, this.done = false, this.value = qc, this.matchPos = Jn(e, s), this.re = new RegExp(t, wo + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = ti.get(e, s, this.chunkEnd(s + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, s = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, t))) return this.value = { from: i, to: s, match: t }, this.matchPos = Jn(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to) return this.done = true, this;
      this.flat = ti.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (_c.prototype[Symbol.iterator] = $c.prototype[Symbol.iterator] = function() {
  return this;
});
function i0(n) {
  try {
    return new RegExp(n, wo), true;
  } catch {
    return false;
  }
}
function Jn(n, e) {
  if (e >= n.length) return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++;
  return e;
}
const n0 = (n) => {
  let { state: e } = n, t = String(e.doc.lineAt(n.state.selection.main.head).number), { close: i, result: s } = xp(n, { label: e.phrase("Go to line"), input: { type: "text", name: "line", value: t }, focus: true, submitLabel: e.phrase("go") });
  return s.then((r) => {
    let o = r && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(r.elements.line.value);
    if (!o) {
      n.dispatch({ effects: i });
      return;
    }
    let l = e.doc.lineAt(e.selection.main.head), [, a, h, c, f] = o, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let y = d / 100;
      a && (y = y * (a == "-" ? -1 : 1) + l.number / e.doc.lines), d = Math.round(e.doc.lines * y);
    } else h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = e.doc.line(Math.max(1, Math.min(e.doc.lines, d))), m = w.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    n.dispatch({ effects: [i, O.scrollIntoView(m.from, { y: "center" })], selection: m });
  }), true;
}, s0 = { highlightWordAroundCursor: false, minSelectionLength: 1, maxMatches: 100, wholeWords: false }, r0 = B.define({ combine(n) {
  return ft(n, s0, { highlightWordAroundCursor: (e, t) => e || t, minSelectionLength: Math.min, maxMatches: Math.min });
} });
function o0(n) {
  return [f0, c0];
}
const l0 = P.mark({ class: "cm-selectionMatch" }), a0 = P.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Zl(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != se.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != se.Word);
}
function h0(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == se.Word && n(e.sliceDoc(i - 1, i)) == se.Word;
}
const c0 = le.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(r0), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1) return P.none;
    let s = i.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor) return P.none;
      let a = t.wordAt(s.head);
      if (!a) return P.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200) return P.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(Zl(o, t, s.from, s.to) && h0(o, t, s.from, s.to))) return P.none;
      } else if (r = t.sliceDoc(s.from, s.to), !r) return P.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new ai(t.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Zl(o, t, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(a0.range(c, f)) : (c >= s.to || f <= s.from) && l.push(l0.range(c, f)), l.length > e.maxMatches)) return P.none;
      }
    }
    return P.set(l);
  }
}, { decorations: (n) => n.decorations }), f0 = O.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), u0 = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = w.create(t.ranges.map((s) => n.wordAt(s.head) || w.cursor(s.head)), t.mainIndex);
  return i.eq(t) ? false : (e(n.update({ selection: i })), true);
};
function d0(n, e) {
  let { main: t, ranges: i } = n.selection, s = n.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = false, l = new ai(n.doc, e, i[i.length - 1].to); ; ) if (l.next(), l.done) {
    if (o) return null;
    l = new ai(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), o = true;
  } else {
    if (o && i.some((a) => a.from == l.value.from)) continue;
    if (r) {
      let a = n.wordAt(l.value.from);
      if (!a || a.from != l.value.from || a.to != l.value.to) continue;
    }
    return l.value;
  }
}
const p0 = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((r) => r.from === r.to)) return u0({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i)) return false;
  let s = d0(n, i);
  return s ? (e(n.update({ selection: n.selection.addRange(w.range(s.from, s.to), false), effects: O.scrollIntoView(s.to) })), true) : false;
}, fi = B.define({ combine(n) {
  return ft(n, { top: false, caseSensitive: false, literal: false, regexp: false, wholeWord: false, createPanel: (e) => new D0(e), scrollToMatch: (e) => O.scrollIntoView(e) });
} });
class Kc {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || i0(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
  }
  create() {
    return this.regexp ? new w0(this) : new y0(this);
  }
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : j.create({ doc: e });
    return i == null && (i = s.doc.length), this.regexp ? Ut(this, s, t, i) : jt(this, s, t, i);
  }
}
class jc {
  constructor(e) {
    this.spec = e;
  }
}
function m0(n, e, t) {
  return (i, s, r, o) => {
    if (t && !t(i, s, r, o)) return false;
    let l = i >= o && s <= o + r.length ? r.slice(i - o, s - o) : e.doc.sliceString(i, s);
    return n(l, e, i, s);
  };
}
function jt(n, e, t, i) {
  let s;
  return n.wholeWord && (s = g0(e.doc, e.charCategorizer(e.selection.main.head))), n.test && (s = m0(n.test, e, s)), new ai(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (r) => r.toLowerCase(), s);
}
function g0(n, e) {
  return (t, i, s, r) => ((r > t || r + s.length < i) && (r = Math.max(0, t - 2), s = n.sliceString(r, Math.min(n.length, i + 2))), (e(Xn(s, t - r)) != se.Word || e(Qn(s, t - r)) != se.Word) && (e(Qn(s, i - r)) != se.Word || e(Xn(s, i - r)) != se.Word));
}
class y0 extends jc {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = jt(this.spec, e, i, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = jt(this.spec, e, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == t && s.value.to == i ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = jt(this.spec, e, r, s), l = null;
      for (; !o.nextOverlapping().done; ) l = o.value;
      if (l) return l;
      if (r == t) return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let s = this.prevMatchInRange(e, 0, t);
    return s || (s = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)), s && (s.from != t || s.to != i) ? s : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = jt(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t) return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = jt(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; ) s(r.value.from, r.value.to);
  }
}
function b0(n, e, t) {
  return (i, s, r) => (!t || t(i, s, r)) && n(r[0], e, i, s);
}
function Ut(n, e, t, i) {
  let s;
  return n.wholeWord && (s = x0(e.charCategorizer(e.selection.main.head))), n.test && (s = b0(n.test, e, s)), new _c(e.doc, n.search, { ignoreCase: !n.caseSensitive, test: s }, t, i);
}
function Xn(n, e) {
  return n.slice(me(n, e, false), e);
}
function Qn(n, e) {
  return n.slice(e, me(n, e));
}
function x0(n) {
  return (e, t, i) => !i[0].length || (n(Xn(i.input, i.index)) != se.Word || n(Qn(i.input, i.index)) != se.Word) && (n(Qn(i.input, i.index + i[0].length)) != se.Word || n(Xn(i.input, i.index + i[0].length)) != se.Word);
}
class w0 extends jc {
  nextMatch(e, t, i) {
    let s = Ut(this.spec, e, i, e.doc.length).next();
    return s.done && (s = Ut(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(t, i - s * 1e4), o = Ut(this.spec, e, r, i), l = null;
      for (; !o.next().done; ) l = o.value;
      if (l && (r == t || l.from > r + 10)) return l;
      if (r == t) return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == "&") return e.match[0];
      if (i == "$") return "$";
      for (let s = i.length; s > 0; s--) {
        let r = +i.slice(0, s);
        if (r > 0 && r < e.match.length) return e.match[r] + i.slice(s);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = Ut(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t) return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = Ut(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !r.next().done; ) s(r.value.from, r.value.to);
  }
}
const _i = q.define(), vo = q.define(), St = ve.define({ create(n) {
  return new js(_r(n).create(), null);
}, update(n, e) {
  for (let t of e.effects) t.is(_i) ? n = new js(t.value.create(), n.panel) : t.is(vo) && (n = new js(n.query, t.value ? ko : null));
  return n;
}, provide: (n) => Fi.from(n, (e) => e.panel) });
class js {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const v0 = P.mark({ class: "cm-searchMatch" }), k0 = P.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), S0 = le.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(St));
  }
  update(n) {
    let e = n.state.field(St);
    (e != n.startState.field(St) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid) return P.none;
    let { view: t } = this, i = new pt();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 500; ) a = r[++s].to;
      n.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? k0 : v0);
      });
    }
    return i.finish();
  }
}, { decorations: (n) => n.decorations });
function en(n) {
  return (e) => {
    let t = e.state.field(St, false);
    return t && t.query.spec.valid ? n(e, t) : Yc(e);
  };
}
const Zn = en((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i) return false;
  let s = w.single(i.from, i.to), r = n.state.facet(fi);
  return n.dispatch({ selection: s, effects: [So(n, i), r.scrollToMatch(s.main, n)], userEvent: "select.search" }), Gc(n), true;
}), es = en((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, s = e.prevMatch(t, i, i);
  if (!s) return false;
  let r = w.single(s.from, s.to), o = n.state.facet(fi);
  return n.dispatch({ selection: r, effects: [So(n, s), o.scrollToMatch(r.main, n)], userEvent: "select.search" }), Gc(n), true;
}), C0 = en((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? false : (n.dispatch({ selection: w.create(t.map((i) => w.range(i.from, i.to))), userEvent: "select.search.matches" }), true);
}), A0 = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty) return false;
  let { from: i, to: s } = t.main, r = [], o = 0;
  for (let l = new ai(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
    if (r.length > 1e3) return false;
    l.value.from == i && (o = r.length), r.push(w.range(l.value.from, l.value.to));
  }
  return e(n.update({ selection: w.create(r, o), userEvent: "select.search.matches" })), true;
}, ea = en((n, { query: e }) => {
  let { state: t } = n, { from: i, to: s } = t.selection.main;
  if (t.readOnly) return false;
  let r = e.nextMatch(t, i, i);
  if (!r) return false;
  let o = r, l = [], a, h, c = [];
  o.from == i && o.to == s && (h = t.toText(e.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: h }), o = e.nextMatch(t, o.from, o.to), c.push(O.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + ".")));
  let f = n.state.changes(l);
  return o && (a = w.single(o.from, o.to).map(f), c.push(So(n, o)), c.push(t.facet(fi).scrollToMatch(a.main, n))), n.dispatch({ changes: f, selection: a, effects: c, userEvent: "input.replace" }), true;
}), M0 = en((n, { query: e }) => {
  if (n.state.readOnly) return false;
  let t = e.matchAll(n.state, 1e9).map((s) => {
    let { from: r, to: o } = s;
    return { from: r, to: o, insert: e.getReplacement(s) };
  });
  if (!t.length) return false;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({ changes: t, effects: O.announce.of(i), userEvent: "input.replace.all" }), true;
});
function ko(n) {
  return n.state.facet(fi).createPanel(n);
}
function _r(n, e) {
  var t, i, s, r, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a) return e;
  let h = n.facet(fi);
  return new Kc({ search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"), caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive, literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : h.literal, regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : h.regexp, wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord });
}
function Uc(n) {
  let e = co(n, ko);
  return e && e.dom.querySelector("[main-field]");
}
function Gc(n) {
  let e = Uc(n);
  e && e == n.root.activeElement && e.select();
}
const Yc = (n) => {
  let e = n.state.field(St, false);
  if (e && e.panel) {
    let t = Uc(n);
    if (t && t != n.root.activeElement) {
      let i = _r(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: _i.of(i) }), t.focus(), t.select();
    }
  } else n.dispatch({ effects: [vo.of(true), e ? _i.of(_r(n.state, e.query.spec)) : q.appendConfig.of(E0)] });
  return true;
}, Jc = (n) => {
  let e = n.state.field(St, false);
  if (!e || !e.panel) return false;
  let t = co(n, ko);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: vo.of(false) }), true;
}, T0 = [{ key: "Mod-f", run: Yc, scope: "editor search-panel" }, { key: "F3", run: Zn, shift: es, scope: "editor search-panel", preventDefault: true }, { key: "Mod-g", run: Zn, shift: es, scope: "editor search-panel", preventDefault: true }, { key: "Escape", run: Jc, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: A0 }, { key: "Mod-Alt-g", run: n0 }, { key: "Mod-d", run: p0, preventDefault: true }];
class D0 {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(St).query.spec;
    this.commit = this.commit.bind(this), this.searchField = Z("input", { value: t.search, placeholder: Pe(e, "Find"), "aria-label": Pe(e, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = Z("input", { value: t.replace, placeholder: Pe(e, "Replace"), "aria-label": Pe(e, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = Z("input", { type: "checkbox", name: "case", form: "", checked: t.caseSensitive, onchange: this.commit }), this.reField = Z("input", { type: "checkbox", name: "re", form: "", checked: t.regexp, onchange: this.commit }), this.wordField = Z("input", { type: "checkbox", name: "word", form: "", checked: t.wholeWord, onchange: this.commit });
    function i(s, r, o) {
      return Z("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = Z("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [this.searchField, i("next", () => Zn(e), [Pe(e, "next")]), i("prev", () => es(e), [Pe(e, "previous")]), i("select", () => C0(e), [Pe(e, "all")]), Z("label", null, [this.caseField, Pe(e, "match case")]), Z("label", null, [this.reField, Pe(e, "regexp")]), Z("label", null, [this.wordField, Pe(e, "by word")]), ...e.state.readOnly ? [] : [Z("br"), this.replaceField, i("replace", () => ea(e), [Pe(e, "replace")]), i("replaceAll", () => M0(e), [Pe(e, "replace all")])], Z("button", { name: "close", onclick: () => Jc(e), "aria-label": Pe(e, "close"), type: "button" }, ["\xD7"])]);
  }
  commit() {
    let e = new Kc({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: _i.of(e) }));
  }
  keydown(e) {
    Od(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? es : Zn)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), ea(this.view));
  }
  update(e) {
    for (let t of e.transactions) for (let i of t.effects) i.is(_i) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(fi).top;
  }
}
function Pe(n, e) {
  return n.state.phrase(e);
}
const vn = 30, kn = /[\s\.,:;?!]/;
function So(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), s = n.state.doc.lineAt(t).to, r = Math.max(i.from, e - vn), o = Math.min(s, t + vn), l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < vn; a++) if (!kn.test(l[a + 1]) && kn.test(l[a])) {
      l = l.slice(a);
      break;
    }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - vn; a--) if (!kn.test(l[a - 1]) && kn.test(l[a])) {
      l = l.slice(0, a);
      break;
    }
  }
  return O.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const O0 = O.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), E0 = [St, Kt.low(S0), O0];
class Xc {
  constructor(e, t, i, s) {
    this.state = e, this.pos = t, this.explicit = i, this.view = s, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(e) {
    let t = Se(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
    return t ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), r = s.search(Qc(e, false));
    return r < 0 ? null : { from: i + r, to: this.pos, text: s.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = true));
  }
}
function ta(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function B0(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of n) {
    e[s[0]] = true;
    for (let r = 1; r < s.length; r++) t[s[r]] = true;
  }
  let i = ta(e) + ta(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function R0(n) {
  let e = n.map((s) => typeof s == "string" ? { label: s } : s), [t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : B0(e);
  return (s) => {
    let r = s.matchBefore(i);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
class ia {
  constructor(e, t, i, s) {
    this.completion = e, this.source = t, this.match = i, this.score = s;
  }
}
function Vt(n) {
  return n.selection.main.from;
}
function Qc(n, e) {
  var t;
  let { source: i } = n, s = e && i[0] != "^", r = i[i.length - 1] != "$";
  return !s && !r ? n : new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const Zc = ct.define();
function L0(n, e, t, i) {
  let { main: s } = n.selection, r = t - s.from, o = i - s.from;
  return { ...n.changeByRange((l) => {
    if (l != s && t != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(t, i)) return { range: l };
    let a = n.toText(e);
    return { changes: { from: l.from + r, to: i == s.from ? l.to : l.from + o, insert: a }, range: w.cursor(l.from + r + a.length) };
  }), scrollIntoView: true, userEvent: "input.complete" };
}
const na = /* @__PURE__ */ new WeakMap();
function P0(n) {
  if (!Array.isArray(n)) return n;
  let e = na.get(n);
  return e || na.set(n, e = R0(n)), e;
}
const ts = q.define(), $i = q.define();
class I0 {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = Ee(e, t), s = it(i);
      this.chars.push(i);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(Ee(o == r ? r.toLowerCase() : o, 0)), t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  match(e) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (e.length < this.pattern.length) return null;
    let { chars: t, folded: i, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let C = Ee(e, 0), k = it(C), T = k == e.length ? 0 : -100;
      if (C != t[0]) if (C == i[0]) T += -200;
      else return null;
      return this.ret(T, [0, k]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let C = 0, k = Math.min(e.length, 200); C < k && h < a; ) {
        let T = Ee(e, C);
        (T == t[h] || T == i[h]) && (s[h++] = C), C += it(T);
      }
      if (h < a) return null;
    }
    let c = 0, f = 0, u = false, d = 0, p = -1, m = -1, y = /[a-z]/.test(e), b = true;
    for (let C = 0, k = Math.min(e.length, 200), T = 0; C < k && f < a; ) {
      let A = Ee(e, C);
      l < 0 && (c < a && A == t[c] && (r[c++] = C), d < a && (A == t[d] || A == i[d] ? (d == 0 && (p = C), m = C + 1, d++) : d = 0));
      let M, v = A < 255 ? A >= 48 && A <= 57 || A >= 97 && A <= 122 ? 2 : A >= 65 && A <= 90 ? 1 : 0 : (M = jr(A)) != M.toLowerCase() ? 1 : M != M.toUpperCase() ? 2 : 0;
      (!C || v == 1 && y || T == 0 && v != 0) && (t[f] == A || i[f] == A && (u = true) ? o[f++] = C : o.length && (b = false)), T = v, C += it(A);
    }
    return f == a && o[0] == 0 && b ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, m]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, i) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? it(Ee(i, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - i.length, s);
  }
}
class N0 {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const pe = B.define({ combine(n) {
  return ft(n, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: W0, filterStrict: false, compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (e, t) => e && t, closeOnBlur: (e, t) => e && t, icons: (e, t) => e && t, tooltipClass: (e, t) => (i) => sa(e(i), t(i)), optionClass: (e, t) => (i) => sa(e(i), t(i)), addToOptions: (e, t) => e.concat(t), filterStrict: (e, t) => e || t });
} });
function sa(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function W0(n, e, t, i, s, r) {
  let o = n.textDirection == te.RTL, l = o, a = false, h = "top", c, f, u = e.left - s.left, d = s.right - e.right, p = i.right - i.left, m = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = false : !l && d < Math.min(p, u) && (l = true), p <= (l ? u : d)) c = Math.max(s.top, Math.min(t.top, s.bottom - m)) - e.top, f = Math.min(400, l ? u : d);
  else {
    a = true, f = Math.min(400, (o ? e.right : s.right - e.left) - 30);
    let C = s.bottom - e.bottom;
    C >= m || C > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let y = (e.bottom - e.top) / r.offsetHeight, b = (e.right - e.left) / r.offsetWidth;
  return { style: `${h}: ${c / y}px; max-width: ${f / b}px`, class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right") };
}
function H0(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({ render(t) {
    let i = document.createElement("div");
    return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
  }, position: 20 }), e.push({ render(t, i, s, r) {
    let o = document.createElement("span");
    o.className = "cm-completionLabel";
    let l = t.displayLabel || t.label, a = 0;
    for (let h = 0; h < r.length; ) {
      let c = r[h++], f = r[h++];
      c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
      let u = o.appendChild(document.createElement("span"));
      u.appendChild(document.createTextNode(l.slice(c, f))), u.className = "cm-completionMatchedText", a = f;
    }
    return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
  }, position: 50 }, { render(t) {
    if (!t.detail) return null;
    let i = document.createElement("span");
    return i.className = "cm-completionDetail", i.textContent = t.detail, i;
  }, position: 80 }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function Us(n, e, t) {
  if (n <= t) return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class F0 {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (a) => this.placeInfo(a), key: this }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(pe);
    this.optionContent = H0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Us(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode) if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
        this.applyCompletion(e, h[+f[1]]), a.preventDefault();
        return;
      }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, false);
      h && h.tooltip && e.state.facet(pe).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: $i.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != s) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!s.open || s.open.options != r) && (this.range = Us(r.length, o, e.state.facet(pe).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" ")) i && this.dom.classList.remove(i);
      for (let i of t.split(" ")) i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Us(t.options.length, t.selected, this.view.state.facet(pe).maxRenderedOptions), this.showOptions(t.options, e.id));
    let i = this.updateSelectedOption(t.selected);
    if (i) {
      this.destroyInfo();
      let { completion: s } = t.options[t.selected], { info: r } = s;
      if (!r) return;
      let o = typeof r == "string" ? document.createTextNode(r) : r(s);
      if (!o) return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, false) == e && this.addInfoPane(l, s);
      }).catch((l) => Te(this.view.state, l, "completion info")) : (this.addInfoPane(o, s), i.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", i.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null) i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = e;
      i.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++) i.nodeName != "LI" || !i.id ? s-- : s == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && (i.removeAttribute("aria-selected"), i.removeAttribute("aria-describedby"));
    return t && z0(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(pe).positionInfo(this.view, t, s, i, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const s = document.createElement("ul");
    s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (o) => {
      o.target == s && o.preventDefault();
    });
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0)) if (r = u, typeof h != "string" && h.header) s.appendChild(h.header(h));
        else {
          let d = s.appendChild(document.createElement("completion-section"));
          d.textContent = u;
        }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function V0(n, e) {
  return (t) => new F0(t, n, e);
}
function z0(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), s = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / s : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / s);
}
function ra(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function q0(n, e) {
  let t = [], i = null, s = null, r = (c) => {
    t.push(c);
    let { section: f } = c.completion;
    if (f) {
      i || (i = []);
      let u = typeof f == "string" ? f : f.name;
      i.some((d) => d.name == u) || i.push(typeof f == "string" ? { name: u } : f);
    }
  }, o = e.facet(pe);
  for (let c of n) if (c.hasResult()) {
    let f = c.result.getMatch;
    if (c.result.filter === false) for (let u of c.result.options) r(new ia(u, c.source, f ? f(u) : [], 1e9 - t.length));
    else {
      let u = e.sliceDoc(c.from, c.to), d, p = o.filterStrict ? new N0(u) : new I0(u);
      for (let m of c.result.options) if (d = p.match(m.label)) {
        let y = m.displayLabel ? f ? f(m, d.matched) : [] : d.matched, b = d.score + (m.boost || 0);
        if (r(new ia(m, c.source, y, b)), typeof m.section == "object" && m.section.rank === "dynamic") {
          let { name: C } = m.section;
          s || (s = /* @__PURE__ */ Object.create(null)), s[C] = Math.max(b, s[C] || -1e9);
        }
      }
    }
  }
  if (i) {
    let c = /* @__PURE__ */ Object.create(null), f = 0, u = (d, p) => (d.rank === "dynamic" && p.rank === "dynamic" ? s[p.name] - s[d.name] : 0) || (typeof d.rank == "number" ? d.rank : 1e9) - (typeof p.rank == "number" ? p.rank : 1e9) || (d.name < p.name ? -1 : 1);
    for (let d of i.sort(u)) f -= 1e5, c[d.name] = f;
    for (let d of t) {
      let { section: p } = d.completion;
      p && (d.score += c[typeof p == "string" ? p : p.name]);
    }
  }
  let l = [], a = null, h = o.compareCompletions;
  for (let c of t.sort((f, u) => u.score - f.score || h(f.completion, u.completion))) {
    let f = c.completion;
    !a || a.label != f.label || a.detail != f.detail || a.type != null && f.type != null && a.type != f.type || a.apply != f.apply || a.boost != f.boost ? l.push(c) : ra(c.completion) > ra(a) && (l[l.length - 1] = c), a = c.completion;
  }
  return l;
}
class Jt {
  constructor(e, t, i, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Jt(this.options, oa(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, s, r, o) {
    if (s && !o && e.some((h) => h.isPending)) return s.setDisabled();
    let l = q0(e, t);
    if (!l.length) return s && e.some((h) => h.isPending) ? s.setDisabled() : null;
    let a = t.facet(pe).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++) if (l[c].completion == h) {
        a = c;
        break;
      }
    }
    return new Jt(l, oa(i, a), { pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8), create: G0, above: r.aboveCursor }, s ? s.timestamp : Date.now(), a, false);
  }
  map(e) {
    return new Jt(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Jt(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class is {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new is(j0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(pe), r = (i.override || t.languageDataAt("autocomplete", Vt(t)).map(P0)).map((a) => (this.active.find((c) => c.source == a) || new Ve(a, this.active.some((c) => c.state != 0) ? 1 : 0)).update(e, i));
    r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(Co));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !_0(r, this.active) || l ? o = Jt.build(r, t, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new Ve(a.source, 0) : a));
    for (let a of e.effects) a.is(tf) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new is(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? $0 : K0;
  }
}
function _0(n, e) {
  if (n == e) return true;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); ) t++;
    for (; i < e.length && !e[i].hasResult(); ) i++;
    let s = t == n.length, r = i == e.length;
    if (s || r) return s == r;
    if (n[t++].result != e[i++].result) return false;
  }
}
const $0 = { "aria-autocomplete": "list" }, K0 = {};
function oa(n, e) {
  let t = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": n };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const j0 = [];
function ef(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(Zc);
    if (i && e.activateOnCompletion(i)) return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class Ve {
  constructor(e, t, i = false) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = ef(e, t), s = this;
    (i & 8 || i & 16 && this.touches(e)) && (s = new Ve(s.source, 0)), i & 4 && s.state == 0 && (s = new Ve(this.source, 1)), s = s.updateFor(e, i);
    for (let r of e.effects) if (r.is(ts)) s = new Ve(s.source, 1, r.value);
    else if (r.is($i)) s = new Ve(s.source, 0);
    else if (r.is(Co)) for (let o of r.value) o.source == s.source && (s = o);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(Vt(e.state));
  }
}
class ii extends Ve {
  constructor(e, t, i, s, r, o) {
    super(e, 3, t), this.limit = i, this.result = s, this.from = r, this.to = o;
  }
  hasResult() {
    return true;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3)) return this.map(e.changes);
    let s = this.result;
    s.map && !e.changes.empty && (s = s.map(s, e.changes));
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Vt(e.state);
    if (l > o || !s || t & 2 && (Vt(e.startState) == this.from || l < this.limit)) return new Ve(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return U0(s.validFor, e.state, r, o) ? new ii(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new Xc(e.state, l, false))) ? new ii(this.source, this.explicit, a, s, s.from, (i = s.to) !== null && i !== void 0 ? i : Vt(e.state)) : new Ve(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new ii(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Ve(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function U0(n, e, t, i) {
  if (!n) return false;
  let s = e.sliceDoc(t, i);
  return typeof n == "function" ? n(s, t, i, e) : Qc(n, true).test(s);
}
const Co = q.define({ map(n, e) {
  return n.map((t) => t.map(e));
} }), tf = q.define(), Be = ve.define({ create() {
  return is.start();
}, update(n, e) {
  return n.update(e);
}, provide: (n) => [ho.from(n, (e) => e.tooltip), O.contentAttributes.from(n, (e) => e.attrs)] });
function Ao(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Be).active.find((s) => s.source == e.source);
  return i instanceof ii ? (typeof t == "string" ? n.dispatch({ ...L0(n.state, t, i.from, i.to), annotations: Zc.of(e.completion) }) : t(n, e.completion, i.from, i.to), true) : false;
}
const G0 = V0(Be, Ao);
function Sn(n, e = "option") {
  return (t) => {
    let i = t.state.field(Be, false);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(pe).interactionDelay) return false;
    let s = 1, r;
    e == "page" && (r = Hh(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: tf.of(l) }), true;
  };
}
const Y0 = (n) => {
  let e = n.state.field(Be, false);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(pe).interactionDelay ? false : Ao(n, e.open.options[e.open.selected]);
}, Gs = (n) => n.state.field(Be, false) ? (n.dispatch({ effects: ts.of(true) }), true) : false, J0 = (n) => {
  let e = n.state.field(Be, false);
  return !e || !e.active.some((t) => t.state != 0) ? false : (n.dispatch({ effects: $i.of(null) }), true);
};
class X0 {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Q0 = 50, Z0 = 1e3, ey = le.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let e of n.state.field(Be).active) e.isPending && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(Be), t = n.state.facet(pe);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Be) == e) return;
    let i = n.transactions.some((r) => {
      let o = ef(r, t);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > Q0 && Date.now() - o.time > Z0) {
        for (let l of o.context.abortListeners) try {
          l();
        } catch (a) {
          Te(this.view.state, a);
        }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else o.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((r) => r.effects.some((o) => o.is(ts))) && (this.pendingStart = true);
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0) for (let r of n.transactions) r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: n } = this.view, e = n.field(Be);
    for (let t of e.active) t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(pe).updateSyncTime));
  }
  startQuery(n) {
    let { state: e } = this.view, t = Vt(e), i = new Xc(e, t, n.explicit, this.view), s = new X0(n, i);
    this.running.push(s), Promise.resolve(n.source(i)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: $i.of(null) }), Te(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(pe).updateSyncTime));
  }
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(pe), i = this.view.state.field(Be);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0) continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = Vt(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), h = new ii(r.active.source, r.active.explicit, a, r.done, r.done.from, (n = r.done.to) !== null && n !== void 0 ? n : l);
        for (let c of r.updates) h = h.update(c, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == r.active.source);
      if (o && o.isPending) if (r.done == null) {
        let l = new Ve(r.active.source, 0);
        for (let a of r.updates) l = l.update(a, t);
        l.isPending || e.push(l);
      } else this.startQuery(o);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: Co.of(e) });
  }
}, { eventHandlers: { blur(n) {
  let e = this.view.state.field(Be, false);
  if (e && e.tooltip && this.view.state.facet(pe).closeOnBlur) {
    let t = e.open && Hh(this.view, e.open.tooltip);
    (!t || !t.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: $i.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: ts.of(false) }), 20), this.composing = 0;
} } }), ty = typeof navigator == "object" && /Win/.test(navigator.platform), iy = Kt.highest(O.domEventHandlers({ keydown(n, e) {
  let t = e.state.field(Be, false);
  if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(ty && n.altKey) || n.metaKey) return false;
  let i = t.open.options[t.open.selected], s = t.active.find((o) => o.source == i.source), r = i.completion.commitCharacters || s.result.commitCharacters;
  return r && r.indexOf(n.key) > -1 && Ao(e, i), false;
} })), ny = O.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"\xB7\xB7\xB7"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box", whiteSpace: "pre-line" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'\u0192'" } }, ".cm-completionIcon-class": { "&:after": { content: "'\u25CB'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'\u25CC'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'\u{1D465}'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'\u{1D436}'" } }, ".cm-completionIcon-type": { "&:after": { content: "'\u{1D461}'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'\u222A'" } }, ".cm-completionIcon-property": { "&:after": { content: "'\u25A1'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'\u{1F511}\uFE0E'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'\u25A2'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } }), Ki = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, Ht = q.define({ map(n, e) {
  let t = e.mapPos(n, -1, Me.TrackAfter);
  return t ?? void 0;
} }), Mo = new class extends Ct {
}();
Mo.startSide = 1;
Mo.endSide = -1;
const nf = ve.define({ create() {
  return K.empty;
}, update(n, e) {
  if (n = n.map(e.changes), e.selection) {
    let t = e.state.doc.lineAt(e.selection.main.head);
    n = n.update({ filter: (i) => i >= t.from && i <= t.to });
  }
  for (let t of e.effects) t.is(Ht) && (n = n.update({ add: [Mo.range(t.value, t.value + 1)] }));
  return n;
} });
function sy() {
  return [oy, nf];
}
const Ys = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
function sf(n) {
  for (let e = 0; e < Ys.length; e += 2) if (Ys.charCodeAt(e) == n) return Ys.charAt(e + 1);
  return jr(n < 128 ? n : n + 1);
}
function rf(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || Ki;
}
const ry = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), oy = O.inputHandler.of((n, e, t, i) => {
  if ((ry ? n.composing : n.compositionStarted) || n.state.readOnly) return false;
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && it(Ee(i, 0)) == 1 || e != s.from || t != s.to) return false;
  let r = hy(n.state, i);
  return r ? (n.dispatch(r), true) : false;
}), ly = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let i = rf(n, n.selection.main.head).brackets || Ki.brackets, s = null, r = n.changeByRange((o) => {
    if (o.empty) {
      let l = cy(n.doc, o.head);
      for (let a of i) if (a == l && bs(n.doc, o.head) == sf(Ee(a, 0))) return { changes: { from: o.head - a.length, to: o.head + a.length }, range: w.cursor(o.head - a.length) };
    }
    return { range: s = o };
  });
  return s || e(n.update(r, { scrollIntoView: true, userEvent: "delete.backward" })), !s;
}, ay = [{ key: "Backspace", run: ly }];
function hy(n, e) {
  let t = rf(n, n.selection.main.head), i = t.brackets || Ki.brackets;
  for (let s of i) {
    let r = sf(Ee(s, 0));
    if (e == s) return r == s ? dy(n, s, i.indexOf(s + s + s) > -1, t) : fy(n, s, r, t.before || Ki.before);
    if (e == r && of(n, n.selection.main.from)) return uy(n, s, r);
  }
  return null;
}
function of(n, e) {
  let t = false;
  return n.field(nf).between(0, n.doc.length, (i) => {
    i == e && (t = true);
  }), t;
}
function bs(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, it(Ee(t, 0)));
}
function cy(n, e) {
  let t = n.sliceString(e - 2, e);
  return it(Ee(t, 0)) == t.length ? t : t.slice(1);
}
function fy(n, e, t, i) {
  let s = null, r = n.changeByRange((o) => {
    if (!o.empty) return { changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }], effects: Ht.of(o.to + e.length), range: w.range(o.anchor + e.length, o.head + e.length) };
    let l = bs(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? { changes: { insert: e + t, from: o.head }, effects: Ht.of(o.head + e.length), range: w.cursor(o.head + e.length) } : { range: s = o };
  });
  return s ? null : n.update(r, { scrollIntoView: true, userEvent: "input.type" });
}
function uy(n, e, t) {
  let i = null, s = n.changeByRange((r) => r.empty && bs(n.doc, r.head) == t ? { changes: { from: r.head, to: r.head + t.length, insert: t }, range: w.cursor(r.head + t.length) } : i = { range: r });
  return i ? null : n.update(s, { scrollIntoView: true, userEvent: "input.type" });
}
function dy(n, e, t, i) {
  let s = i.stringPrefixes || Ki.stringPrefixes, r = null, o = n.changeByRange((l) => {
    if (!l.empty) return { changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }], effects: Ht.of(l.to + e.length), range: w.range(l.anchor + e.length, l.head + e.length) };
    let a = l.head, h = bs(n.doc, a), c;
    if (h == e) {
      if (la(n, a)) return { changes: { insert: e + e, from: a }, effects: Ht.of(a + e.length), range: w.cursor(a + e.length) };
      if (of(n, a)) {
        let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return { changes: { from: a, to: a + u.length, insert: u }, range: w.cursor(a + u.length) };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (c = aa(n, a - 2 * e.length, s)) > -1 && la(n, c)) return { changes: { insert: e + e + e + e, from: a }, effects: Ht.of(a + e.length), range: w.cursor(a + e.length) };
      if (n.charCategorizer(a)(h) != se.Word && aa(n, a, s) > -1 && !py(n, a, e, s)) return { changes: { insert: e + e, from: a }, effects: Ht.of(a + e.length), range: w.cursor(a + e.length) };
    }
    return { range: r = l };
  });
  return r ? null : n.update(o, { scrollIntoView: true, userEvent: "input.type" });
}
function la(n, e) {
  let t = Se(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function py(n, e, t, i) {
  let s = Se(n).resolveInner(e, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t) return false;
        c = c.firstChild;
      }
      return true;
    }
    let h = s.to == e && s.parent;
    if (!h) break;
    s = h;
  }
  return false;
}
function aa(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != se.Word) return e;
  for (let s of t) {
    let r = e - s.length;
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != se.Word) return r;
  }
  return -1;
}
function my(n = {}) {
  return [iy, Be, pe.of(n), ey, gy, ny];
}
const lf = [{ key: "Ctrl-Space", run: Gs }, { mac: "Alt-`", run: Gs }, { mac: "Alt-i", run: Gs }, { key: "Escape", run: J0 }, { key: "ArrowDown", run: Sn(true) }, { key: "ArrowUp", run: Sn(false) }, { key: "PageDown", run: Sn(true, "page") }, { key: "PageUp", run: Sn(false, "page") }, { key: "Enter", run: Y0 }], gy = Kt.highest(hs.computeN([pe], (n) => n.facet(pe).defaultKeymap ? [lf] : []));
class ha {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class It {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let s = i.facet(at).markerFilter;
    s && (e = s(e, i));
    let r = e.slice().sort((d, p) => d.from - p.from || d.to - p.to), o = new pt(), l = [], a = 0, h = i.doc.iter(), c = 0, f = i.doc.length;
    for (let d = 0; ; ) {
      let p = d == r.length ? null : r[d];
      if (!p && !l.length) break;
      let m, y;
      if (l.length) m = a, y = l.reduce((k, T) => Math.min(k, T.to), p && p.from > m ? p.from : 1e8);
      else {
        if (m = p.from, m > f) break;
        y = p.to, l.push(p), d++;
      }
      for (; d < r.length; ) {
        let k = r[d];
        if (k.from == m && (k.to > k.from || k.to == m)) l.push(k), d++, y = Math.min(k.to, y);
        else {
          y = Math.min(k.from, y);
          break;
        }
      }
      y = Math.min(y, f);
      let b = false;
      if (l.some((k) => k.from == m && (k.to == y || y == f)) && (b = m == y, !b && y - m < 10)) {
        let k = m - (c + h.value.length);
        k > 0 && (h.next(k), c = m);
        for (let T = m; ; ) {
          if (T >= y) {
            b = true;
            break;
          }
          if (!h.lineBreak && c + h.value.length > T) break;
          T = c + h.value.length, c += h.value.length, h.next();
        }
      }
      let C = By(l);
      if (b) o.add(m, m, P.widget({ widget: new Ty(C), diagnostics: l.slice() }));
      else {
        let k = l.reduce((T, A) => A.markClass ? T + " " + A.markClass : T, "");
        o.add(m, y, P.mark({ class: "cm-lintRange cm-lintRange-" + C + k, diagnostics: l.slice(), inclusiveEnd: l.some((T) => T.to > y) }));
      }
      if (a = y, a == f) break;
      for (let k = 0; k < l.length; k++) l[k].to <= a && l.splice(k--, 1);
    }
    let u = o.finish();
    return new It(u, t, Et(u));
  }
}
function Et(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0)) if (!i) i = new ha(s, r, e || o.diagnostics[0]);
    else {
      if (o.diagnostics.indexOf(i.diagnostic) < 0) return false;
      i = new ha(i.from, r, i.diagnostic);
    }
  }), i;
}
function yy(n, e) {
  let t = e.pos, i = e.end || t, s = n.state.facet(at).hideOn(n, t, i);
  if (s != null) return s;
  let r = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((o) => o.is(To)) || n.changes.touchesRange(r.from, Math.max(r.to, i)));
}
function af(n, e) {
  return n.field(Ne, false) ? e : e.concat(q.appendConfig.of(uf));
}
function by(n, e) {
  return { effects: af(n, [To.of(e)]) };
}
const To = q.define(), Do = q.define(), hf = q.define(), Ne = ve.define({ create() {
  return new It(P.none, null, null);
}, update(n, e) {
  if (e.docChanged && n.diagnostics.size) {
    let t = n.diagnostics.map(e.changes), i = null, s = n.panel;
    if (n.selected) {
      let r = e.changes.mapPos(n.selected.from, 1);
      i = Et(t, n.selected.diagnostic, r) || Et(t, null, r);
    }
    !t.size && s && e.state.facet(at).autoPanel && (s = null), n = new It(t, s, i);
  }
  for (let t of e.effects) if (t.is(To)) {
    let i = e.state.facet(at).autoPanel ? t.value.length ? ji.open : null : n.panel;
    n = It.init(t.value, i, e.state);
  } else t.is(Do) ? n = new It(n.diagnostics, t.value ? ji.open : null, n.selected) : t.is(hf) && (n = new It(n.diagnostics, n.panel, t.value));
  return n;
}, provide: (n) => [Fi.from(n, (e) => e.panel), O.decorations.from(n, (e) => e.diagnostics)] }), xy = P.mark({ class: "cm-lintRange cm-lintRange-active" });
function wy(n, e, t) {
  let { diagnostics: i } = n.state.field(Ne), s, r = -1, o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0))) return s = c.diagnostics, r = a, o = h, false;
  });
  let l = n.state.facet(at).tooltipFilter;
  return s && l && (s = l(s, n.state)), s ? { pos: r, end: o, above: n.state.doc.lineAt(r).to < o, create() {
    return { dom: vy(n, s) };
  } } : null;
}
function vy(n, e) {
  return Z("ul", { class: "cm-tooltip-lint" }, e.map((t) => ff(n, t, false)));
}
const ky = (n) => {
  let e = n.state.field(Ne, false);
  (!e || !e.panel) && n.dispatch({ effects: af(n.state, [Do.of(true)]) });
  let t = co(n, ji.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, ca = (n) => {
  let e = n.state.field(Ne, false);
  return !e || !e.panel ? false : (n.dispatch({ effects: Do.of(false) }), true);
}, Sy = (n) => {
  let e = n.state.field(Ne, false);
  if (!e) return false;
  let t = n.state.selection.main, i = Et(e.diagnostics, null, t.to + 1);
  return !i && (i = Et(e.diagnostics, null, 0), !i || i.from == t.from && i.to == t.to) ? false : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true }), true);
}, Cy = [{ key: "Mod-Shift-m", run: ky, preventDefault: true }, { key: "F8", run: Sy }], Ay = le.fromClass(class {
  constructor(n) {
    this.view = n, this.timeout = -1, this.set = true;
    let { delay: e } = n.state.facet(at);
    this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
  }
  run() {
    clearTimeout(this.timeout);
    let n = Date.now();
    if (n < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - n);
    else {
      this.set = false;
      let { state: e } = this.view, { sources: t } = e.facet(at);
      t.length && My(t.map((i) => Promise.resolve(i(this.view))), (i) => {
        this.view.state.doc == e.doc && this.view.dispatch(by(this.view.state, i.reduce((s, r) => s.concat(r))));
      }, (i) => {
        Te(this.view.state, i);
      });
    }
  }
  update(n) {
    let e = n.state.facet(at);
    (n.docChanged || e != n.startState.facet(at) || e.needsRefresh && e.needsRefresh(n)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = true, this.timeout = setTimeout(this.run, e.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function My(n, e, t) {
  let i = [], s = -1;
  for (let r of n) r.then((o) => {
    i.push(o), clearTimeout(s), i.length == n.length ? e(i) : s = setTimeout(() => e(i), 200);
  }, t);
}
const at = B.define({ combine(n) {
  return { sources: n.map((e) => e.source).filter((e) => e != null), ...ft(n.map((e) => e.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { delay: Math.max, markerFilter: fa, tooltipFilter: fa, needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t, hideOn: (e, t) => e ? t ? (i, s, r) => e(i, s, r) || t(i, s, r) : e : t, autoPanel: (e, t) => e || t }) };
} });
function fa(n, e) {
  return n ? e ? (t, i) => e(n(t, i), i) : n : e;
}
function nb(n, e = {}) {
  return [at.of({ source: n, config: e }), Ay, uf];
}
function cf(n) {
  let e = [];
  if (n) e: for (let { name: t } of n) {
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      if (/[a-zA-Z]/.test(s) && !e.some((r) => r.toLowerCase() == s.toLowerCase())) {
        e.push(s);
        continue e;
      }
    }
    e.push("");
  }
  return e;
}
function ff(n, e, t) {
  var i;
  let s = t ? cf(e.actions) : [];
  return Z("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, Z("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = false, a = (d) => {
      if (d.preventDefault(), l) return;
      l = true;
      let p = Et(n.state.field(Ne).diagnostics, e);
      p && r.apply(n, p.from, p.to);
    }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [h.slice(0, c), Z("u", h.slice(c, c + 1)), h.slice(c + 1)], u = r.markClass ? " " + r.markClass : "";
    return Z("button", { type: "button", class: "cm-diagnosticAction" + u, onclick: a, onmousedown: a, "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.` }, f);
  }), e.source && Z("div", { class: "cm-diagnosticSource" }, e.source));
}
class Ty extends ut {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return Z("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class ua {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = ff(e, t, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ji {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (!(s.ctrlKey || s.altKey || s.metaKey)) {
        if (s.keyCode == 27) ca(this.view), this.view.focus();
        else if (s.keyCode == 38 || s.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (s.keyCode == 40 || s.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (s.keyCode == 36) this.moveSelection(0);
        else if (s.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (s.keyCode == 13) this.view.focus();
        else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: r } = this.items[this.selectedIndex], o = cf(r.actions);
          for (let l = 0; l < o.length; l++) if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = Et(this.view.state.field(Ne).diagnostics, r);
            a && r.actions[l].apply(e, a.from, a.to);
          }
        } else return;
        s.preventDefault();
      }
    }, i = (s) => {
      for (let r = 0; r < this.items.length; r++) this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = Z("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: t, onclick: i }), this.dom = Z("div", { class: "cm-panel-lint" }, this.list, Z("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => ca(this.view) }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Ne).selected;
    if (!e) return -1;
    for (let t = 0; t < this.items.length; t++) if (this.items[t].diagnostic == e.diagnostic) return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Ne), i = 0, s = false, r = null, o = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (o.has(c)) continue;
        o.add(c);
        let f = -1, u;
        for (let d = i; d < this.items.length; d++) if (this.items[d].diagnostic == c) {
          f = d;
          break;
        }
        f < 0 ? (u = new ua(this.view, c), this.items.splice(i, 0, u), s = true) : (u = this.items[f], f > i && (this.items.splice(i, f - i), s = true)), t && u.diagnostic == t.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); ) s = true, this.items.pop();
    this.items.length == 0 && (this.items.push(new ua(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), s = true), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({ key: this, read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: l, panel: a }) => {
      let h = a.height / this.list.offsetHeight;
      l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items) if (i.dom.parentNode == this.list) {
      for (; e != i.dom; ) t();
      e = i.dom.nextSibling;
    } else this.list.insertBefore(i.dom, e);
    for (; e; ) t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return;
    let t = this.view.state.field(Ne), i = Et(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true, effects: hf.of(i) });
  }
  static open(e) {
    return new ji(e);
  }
}
function Dy(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function Cn(n) {
  return Dy(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Oy = O.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: Cn("#d11") }, ".cm-lintRange-warning": { backgroundImage: Cn("orange") }, ".cm-lintRange-info": { backgroundImage: Cn("#999") }, ".cm-lintRange-hint": { backgroundImage: Cn("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function Ey(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function By(n) {
  let e = "hint", t = 1;
  for (let i of n) {
    let s = Ey(i.severity);
    s > t && (t = s, e = i.severity);
  }
  return e;
}
const uf = [Ne, O.decorations.compute([Ne], (n) => {
  let { selected: e, panel: t } = n.field(Ne);
  return !e || !t || e.from == e.to ? P.none : P.set([xy.range(e.from, e.to)]);
}), yp(wy, { hideOn: yy }), Oy];
function $r() {
  return $r = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t) ({}).hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, $r.apply(null, arguments);
}
function Ry(n, e) {
  if (n == null) return {};
  var t = {};
  for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
    if (e.indexOf(i) !== -1) continue;
    t[i] = n[i];
  }
  return t;
}
var da = function(e) {
  e === void 0 && (e = {});
  var { crosshairCursor: t = false } = e, i = [];
  e.closeBracketsKeymap !== false && (i = i.concat(ay)), e.defaultKeymap !== false && (i = i.concat(e0)), e.searchKeymap !== false && (i = i.concat(T0)), e.historyKeymap !== false && (i = i.concat(lg)), e.foldKeymap !== false && (i = i.concat(vm)), e.completionKeymap !== false && (i = i.concat(lf)), e.lintKeymap !== false && (i = i.concat(Cy));
  var s = [];
  return e.lineNumbers !== false && s.push(Ep()), e.highlightActiveLineGutter !== false && s.push(Lp()), e.highlightSpecialChars !== false && s.push(jd()), e.history !== false && s.push(Qm()), e.foldGutter !== false && s.push(Am()), e.drawSelection !== false && s.push(Id()), e.dropCursor !== false && s.push(Vd()), e.allowMultipleSelections !== false && s.push(j.allowMultipleSelections.of(true)), e.indentOnInput !== false && s.push(fm()), e.syntaxHighlighting !== false && s.push(rc(Om, { fallback: true })), e.bracketMatching !== false && s.push(Nm()), e.closeBrackets !== false && s.push(sy()), e.autocompletion !== false && s.push(my()), e.rectangularSelection !== false && s.push(op()), t !== false && s.push(hp()), e.highlightActiveLine !== false && s.push(Qd()), e.highlightSelectionMatches !== false && s.push(o0()), e.tabSize && typeof e.tabSize == "number" && s.push(fs.of(" ".repeat(e.tabSize))), s.concat([hs.of(i.flat())]).filter(Boolean);
};
const Ly = "#e5c07b", pa = "#e06c75", Py = "#56b6c2", Iy = "#ffffff", Rn = "#abb2bf", Kr = "#7d8799", Ny = "#61afef", Wy = "#98c379", ma = "#d19a66", Hy = "#c678dd", Fy = "#21252b", ga = "#2c313a", ya = "#282c34", Js = "#353a42", Vy = "#3E4451", ba = "#528bff", zy = O.theme({ "&": { color: Rn, backgroundColor: ya }, ".cm-content": { caretColor: ba }, ".cm-cursor, .cm-dropCursor": { borderLeftColor: ba }, "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: Vy }, ".cm-panels": { backgroundColor: Fy, color: Rn }, ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" }, ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" }, ".cm-searchMatch": { backgroundColor: "#72a1ff59", outline: "1px solid #457dff" }, ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#6199ff2f" }, ".cm-activeLine": { backgroundColor: "#6699ff0b" }, ".cm-selectionMatch": { backgroundColor: "#aafe661a" }, "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bad0f847" }, ".cm-gutters": { backgroundColor: ya, color: Kr, border: "none" }, ".cm-activeLineGutter": { backgroundColor: ga }, ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: "#ddd" }, ".cm-tooltip": { border: "none", backgroundColor: Js }, ".cm-tooltip .cm-tooltip-arrow:before": { borderTopColor: "transparent", borderBottomColor: "transparent" }, ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: Js, borderBottomColor: Js }, ".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": { backgroundColor: ga, color: Rn } } }, { dark: true }), qy = Qi.define([{ tag: x.keyword, color: Hy }, { tag: [x.name, x.deleted, x.character, x.propertyName, x.macroName], color: pa }, { tag: [x.function(x.variableName), x.labelName], color: Ny }, { tag: [x.color, x.constant(x.name), x.standard(x.name)], color: ma }, { tag: [x.definition(x.name), x.separator], color: Rn }, { tag: [x.typeName, x.className, x.number, x.changed, x.annotation, x.modifier, x.self, x.namespace], color: Ly }, { tag: [x.operator, x.operatorKeyword, x.url, x.escape, x.regexp, x.link, x.special(x.string)], color: Py }, { tag: [x.meta, x.comment], color: Kr }, { tag: x.strong, fontWeight: "bold" }, { tag: x.emphasis, fontStyle: "italic" }, { tag: x.strikethrough, textDecoration: "line-through" }, { tag: x.link, color: Kr, textDecoration: "underline" }, { tag: x.heading, fontWeight: "bold", color: pa }, { tag: [x.atom, x.bool, x.special(x.variableName)], color: ma }, { tag: [x.processingInstruction, x.string, x.inserted], color: Wy }, { tag: x.invalid, color: Iy }]), _y = [zy, rc(qy)];
var $y = O.theme({ "&": { backgroundColor: "#fff" } }, { dark: false }), Ky = function(e) {
  e === void 0 && (e = {});
  var { indentWithTab: t = true, editable: i = true, readOnly: s = false, theme: r = "light", placeholder: o = "", basicSetup: l = true } = e, a = [];
  switch (t && a.unshift(hs.of([t0])), l && (typeof l == "boolean" ? a.unshift(da()) : a.unshift(da(l))), o && a.unshift(ip(o)), r) {
    case "light":
      a.push($y);
      break;
    case "dark":
      a.push(_y);
      break;
    case "none":
      break;
    default:
      a.push(r);
      break;
  }
  return i === false && a.push(O.editable.of(false)), s && a.push(j.readOnly.of(true)), [...a];
}, jy = (n) => ({ line: n.state.doc.lineAt(n.state.selection.main.from), lineCount: n.state.doc.lines, lineBreak: n.state.lineBreak, length: n.state.doc.length, readOnly: n.state.readOnly, tabSize: n.state.tabSize, selection: n.state.selection, selectionAsSingle: n.state.selection.asSingle().main, ranges: n.state.selection.ranges, selectionCode: n.state.sliceDoc(n.state.selection.main.from, n.state.selection.main.to), selections: n.state.selection.ranges.map((e) => n.state.sliceDoc(e.from, e.to)), selectedText: n.state.selection.ranges.some((e) => !e.empty) });
class Uy {
  constructor(e, t) {
    this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = false, this.isTimeExhausted = false, this.callbacks = [], this.timeLeftMS = t, this.timeoutMS = t, this.callbacks.push(e);
  }
  tick() {
    if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
      this.isTimeExhausted = true;
      var e = this.callbacks.slice();
      this.callbacks.length = 0, e.forEach((t) => {
        try {
          t();
        } catch (i) {
          console.error("TimeoutLatch callback error:", i);
        }
      });
    }
  }
  cancel() {
    this.isCancelled = true, this.callbacks.length = 0;
  }
  reset() {
    this.timeLeftMS = this.timeoutMS, this.isCancelled = false, this.isTimeExhausted = false;
  }
  get isDone() {
    return this.isCancelled || this.isTimeExhausted;
  }
}
class xa {
  constructor() {
    this.interval = null, this.latches = /* @__PURE__ */ new Set();
  }
  add(e) {
    this.latches.add(e), this.start();
  }
  remove(e) {
    this.latches.delete(e), this.latches.size === 0 && this.stop();
  }
  start() {
    this.interval === null && (this.interval = setInterval(() => {
      this.latches.forEach((e) => {
        e.tick(), e.isDone && this.remove(e);
      });
    }, 1));
  }
  stop() {
    this.interval !== null && (clearInterval(this.interval), this.interval = null);
  }
}
var Xs = null, Gy = () => typeof window > "u" ? new xa() : (Xs || (Xs = new xa()), Xs), wa = ct.define(), Yy = 200, Jy = [];
function Xy(n) {
  var { value: e, selection: t, onChange: i, onStatistics: s, onCreateEditor: r, onUpdate: o, extensions: l = Jy, autoFocus: a, theme: h = "light", height: c = null, minHeight: f = null, maxHeight: u = null, width: d = null, minWidth: p = null, maxWidth: m = null, placeholder: y = "", editable: b = true, readOnly: C = false, indentWithTab: k = true, basicSetup: T = true, root: A, initialState: M } = n, [v, W] = ge.useState(), [R, _] = ge.useState(), [H, L] = ge.useState(), F = ge.useState(() => ({ current: null }))[0], z = ge.useState(() => ({ current: null }))[0], Y = O.theme({ "&": { height: c, minHeight: f, maxHeight: u, width: d, minWidth: p, maxWidth: m }, "& .cm-scroller": { height: "100% !important" } }), ie = O.updateListener.of((X) => {
    if (X.docChanged && typeof i == "function" && !X.transactions.some((S) => S.annotation(wa))) {
      F.current ? F.current.reset() : (F.current = new Uy(() => {
        if (z.current) {
          var S = z.current;
          z.current = null, S();
        }
        F.current = null;
      }, Yy), Gy().add(F.current));
      var oe = X.state.doc, g = oe.toString();
      i(g, X);
    }
    s && s(jy(X));
  }), re = Ky({ theme: h, editable: b, readOnly: C, placeholder: y, indentWithTab: k, basicSetup: T }), de = [ie, Y, ...re];
  return o && typeof o == "function" && de.push(O.updateListener.of(o)), de = de.concat(l), ge.useLayoutEffect(() => {
    if (v && !H) {
      var X = { doc: e, selection: t, extensions: de }, oe = M ? j.fromJSON(M.json, X, M.fields) : j.create(X);
      if (L(oe), !R) {
        var g = new O({ state: oe, parent: v, root: A });
        _(g), r && r(g, oe);
      }
    }
    return () => {
      R && (L(void 0), _(void 0));
    };
  }, [v, H]), ge.useEffect(() => {
    n.container && W(n.container);
  }, [n.container]), ge.useEffect(() => () => {
    R && (R.destroy(), _(void 0)), F.current && (F.current.cancel(), F.current = null);
  }, [R]), ge.useEffect(() => {
    a && R && R.focus();
  }, [a, R]), ge.useEffect(() => {
    R && R.dispatch({ effects: q.reconfigure.of(de) });
  }, [h, l, c, f, u, d, p, m, y, b, C, k, T, i, o]), ge.useEffect(() => {
    if (e !== void 0) {
      var X = R ? R.state.doc.toString() : "";
      if (R && e !== X) {
        var oe = F.current && !F.current.isDone, g = () => {
          R && e !== R.state.doc.toString() && R.dispatch({ changes: { from: 0, to: R.state.doc.toString().length, insert: e || "" }, annotations: [wa.of(true)] });
        };
        oe ? z.current = g : g();
      }
    }
  }, [e, R]), { state: H, setState: L, view: R, setView: _, container: v, setContainer: W };
}
var Qy = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"], Zy = ge.forwardRef((n, e) => {
  var { className: t, value: i = "", selection: s, extensions: r = [], onChange: o, onStatistics: l, onCreateEditor: a, onUpdate: h, autoFocus: c, theme: f = "light", height: u, minHeight: d, maxHeight: p, width: m, minWidth: y, maxWidth: b, basicSetup: C, placeholder: k, indentWithTab: T, editable: A, readOnly: M, root: v, initialState: W } = n, R = Ry(n, Qy), _ = ge.useRef(null), { state: H, view: L, container: F, setContainer: z } = Xy({ root: v, value: i, autoFocus: c, theme: f, height: u, minHeight: d, maxHeight: p, width: m, minWidth: y, maxWidth: b, basicSetup: C, placeholder: k, indentWithTab: T, editable: A, readOnly: M, selection: s, onChange: o, onStatistics: l, onCreateEditor: a, onUpdate: h, extensions: r, initialState: W });
  ge.useImperativeHandle(e, () => ({ editor: _.current, state: H, view: L }), [_, F, H, L]);
  var Y = ge.useCallback((re) => {
    _.current = re, z(re);
  }, [z]);
  if (typeof i != "string") throw new Error("value must be typeof string but got " + typeof i);
  var ie = typeof f == "string" ? "cm-theme-" + f : "cm-theme";
  return bf.jsx("div", $r({ ref: Y, className: "" + ie + (t ? " " + t : "") }, R));
});
Zy.displayName = "CodeMirror";
export {
  O as E,
  Qi as H,
  Zy as R,
  ge as a,
  eb as b,
  vf as c,
  mf as g,
  bf as j,
  nb as l,
  wf as r,
  rc as s
};
