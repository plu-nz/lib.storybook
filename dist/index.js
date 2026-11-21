import { insert as i, effect as $, className as _, setAttribute as d, template as c, spread as m, mergeProps as p, memo as b } from "solid-js/web";
import { splitProps as f, createUniqueId as k } from "solid-js";
var B = /* @__PURE__ */ c("<div>");
const A = ["rosewater", "flamingo", "pink", "mauve", "red", "maroon", "orange", "yellow", "green", "teal", "sky", "sapphire", "blue", "lavender"];
function F(a) {
  return (() => {
    var r = B();
    return i(r, () => a.children), $((e) => {
      var t = `plz-theme ${a.class ?? ""}`, s = a.accent ?? "green", o = a.mode ?? "dark", u = a.shape ?? "square";
      return t !== e.e && _(r, e.e = t), s !== e.t && d(r, "data-plz-accent", e.t = s), o !== e.a && d(r, "data-plz-mode", e.a = o), u !== e.o && d(r, "data-plz-shape", e.o = u), e;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), r;
  })();
}
var I = /* @__PURE__ */ c("<button>");
function L(a) {
  const [r, e] = f(a, ["variant", "accent", "size", "class", "children"]);
  return (() => {
    var t = I();
    return m(t, p(e, {
      get class() {
        return `plz-button plz-button--${r.variant ?? "solid"} plz-button--${r.size ?? "md"} ${r.class ?? ""}`;
      },
      get "data-plz-accent"() {
        return r.accent;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
var x = /* @__PURE__ */ c("<a>");
function N(a) {
  const [r, e] = f(a, ["variant", "accent", "size", "class", "children"]);
  return (() => {
    var t = x();
    return m(t, p(e, {
      get class() {
        return `plz-button plz-button--${r.variant ?? "solid"} plz-button--${r.size ?? "md"} ${r.class ?? ""}`;
      },
      get "data-plz-accent"() {
        return r.accent;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
var q = /* @__PURE__ */ c("<div><label class=plz-field__label></label><input>"), w = /* @__PURE__ */ c("<p class=plz-field__hint>"), C = /* @__PURE__ */ c("<p class=plz-field__error>");
function S(a) {
  const r = k(), [e, t] = f(a, ["label", "hint", "error", "id", "class", "aria-describedby", "aria-invalid"]), s = () => e.id ?? r, o = () => `${s()}-hint`, u = () => `${s()}-error`, g = () => [e["aria-describedby"], e.hint ? o() : "", e.error ? u() : ""].filter(Boolean).join(" ") || void 0;
  return (() => {
    var v = q(), z = v.firstChild, y = z.nextSibling;
    return i(z, () => e.label), m(y, p(t, {
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
    }), !1, !1), i(v, (() => {
      var n = b(() => !!e.hint);
      return () => n() && (() => {
        var l = w();
        return i(l, () => e.hint), $(() => d(l, "id", o())), l;
      })();
    })(), null), i(v, (() => {
      var n = b(() => !!e.error);
      return () => n() && (() => {
        var l = C();
        return i(l, () => e.error), $(() => d(l, "id", u())), l;
      })();
    })(), null), $((n) => {
      var l = `plz-field ${e.class ?? ""}`, h = s();
      return l !== n.e && _(v, n.e = l), h !== n.t && d(z, "for", n.t = h), n;
    }, {
      e: void 0,
      t: void 0
    }), v;
  })();
}
var P = /* @__PURE__ */ c("<section>");
function U(a) {
  const [r, e] = f(a, ["surface", "padding", "class", "children"]);
  return (() => {
    var t = P();
    return m(t, p(e, {
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
  F as Theme,
  A as accents
};
