import { insert as i, effect as v, className as h, setAttribute as u, template as c, spread as $, mergeProps as p, memo as b } from "solid-js/web";
import { splitProps as f, createUniqueId as B } from "solid-js";
var I = /* @__PURE__ */ c("<div>");
function F(a) {
  return (() => {
    var r = I();
    return i(r, () => a.children), v((e) => {
      var t = `plz-theme ${a.class ?? ""}`, s = a.accent ?? "green", d = a.shape ?? "square";
      return t !== e.e && h(r, e.e = t), s !== e.t && u(r, "data-plz-accent", e.t = s), d !== e.a && u(r, "data-plz-shape", e.a = d), e;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), r;
  })();
}
var x = /* @__PURE__ */ c("<button>");
function L(a) {
  const [r, e] = f(a, ["variant", "accent", "size", "class", "children"]);
  return (() => {
    var t = x();
    return $(t, p(e, {
      get class() {
        return `plz-button plz-button--${r.variant ?? "solid"} plz-button--${r.size ?? "md"} ${r.class ?? ""}`;
      },
      get "data-plz-accent"() {
        return r.accent;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
var q = /* @__PURE__ */ c("<a>");
function N(a) {
  const [r, e] = f(a, ["variant", "accent", "size", "class", "children"]);
  return (() => {
    var t = q();
    return $(t, p(e, {
      get class() {
        return `plz-button plz-button--${r.variant ?? "solid"} plz-button--${r.size ?? "md"} ${r.class ?? ""}`;
      },
      get "data-plz-accent"() {
        return r.accent;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
var C = /* @__PURE__ */ c("<div><label class=plz-field__label></label><input>"), P = /* @__PURE__ */ c("<p class=plz-field__hint>"), T = /* @__PURE__ */ c("<p class=plz-field__error>");
function S(a) {
  const r = B(), [e, t] = f(a, ["label", "hint", "error", "id", "class", "aria-describedby", "aria-invalid"]), s = () => e.id ?? r, d = () => `${s()}-hint`, m = () => `${s()}-error`, g = () => [e["aria-describedby"], e.hint ? d() : "", e.error ? m() : ""].filter(Boolean).join(" ") || void 0;
  return (() => {
    var o = C(), z = o.firstChild, y = z.nextSibling;
    return i(z, () => e.label), $(y, p(t, {
      get id() {
        return s();
      },
      class: "plz-field__input",
      get "aria-describedby"() {
        return g();
      },
      get "aria-invalid"() {
        return b(() => !!e.error)() ? !0 : e["aria-invalid"];
      }
    }), !1, !1), i(o, (() => {
      var n = b(() => !!e.hint);
      return () => n() && (() => {
        var l = P();
        return i(l, () => e.hint), v(() => u(l, "id", d())), l;
      })();
    })(), null), i(o, (() => {
      var n = b(() => !!e.error);
      return () => n() && (() => {
        var l = T();
        return i(l, () => e.error), v(() => u(l, "id", m())), l;
      })();
    })(), null), v((n) => {
      var l = `plz-field ${e.class ?? ""}`, _ = s();
      return l !== n.e && h(o, n.e = l), _ !== n.t && u(z, "for", n.t = _), n;
    }, {
      e: void 0,
      t: void 0
    }), o;
  })();
}
var j = /* @__PURE__ */ c("<section>");
function U(a) {
  const [r, e] = f(a, ["surface", "padding", "class", "children"]);
  return (() => {
    var t = j();
    return $(t, p(e, {
      get class() {
        return `plz-card plz-card--${r.surface ?? "base"} plz-card--${r.padding ?? "md"} ${r.class ?? ""}`;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
export {
  L as Button,
  U as Card,
  N as LinkButton,
  S as TextField,
  F as Theme
};
