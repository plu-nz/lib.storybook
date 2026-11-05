import { insert as i, effect as v, className as z, setAttribute as u, template as c, spread as p, mergeProps as b, memo as f } from "solid-js/web";
import { splitProps as m, createUniqueId as I } from "solid-js";
var x = /* @__PURE__ */ c("<div>");
function F(a) {
  return (() => {
    var r = x();
    return i(r, () => a.children), v((e) => {
      var t = `plz-theme ${a.class ?? ""}`, s = a.accent ?? "green", d = a.shape ?? "square";
      return t !== e.e && z(r, e.e = t), s !== e.t && u(r, "data-plz-accent", e.t = s), d !== e.a && u(r, "data-plz-shape", e.a = d), e;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), r;
  })();
}
var B = /* @__PURE__ */ c("<button>");
function N(a) {
  const [r, e] = m(a, ["variant", "accent", "size", "class", "children"]);
  return (() => {
    var t = B();
    return p(t, b(e, {
      get class() {
        return `plz-button plz-button--${r.variant ?? "solid"} plz-button--${r.size ?? "md"} ${r.class ?? ""}`;
      },
      get "data-plz-accent"() {
        return r.accent;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
var q = /* @__PURE__ */ c("<div><label class=plz-field__label></label><input>"), C = /* @__PURE__ */ c("<p class=plz-field__hint>"), P = /* @__PURE__ */ c("<p class=plz-field__error>");
function S(a) {
  const r = I(), [e, t] = m(a, ["label", "hint", "error", "id", "class", "aria-describedby", "aria-invalid"]), s = () => e.id ?? r, d = () => `${s()}-hint`, _ = () => `${s()}-error`, g = () => [e["aria-describedby"], e.hint ? d() : "", e.error ? _() : ""].filter(Boolean).join(" ") || void 0;
  return (() => {
    var o = q(), $ = o.firstChild, y = $.nextSibling;
    return i($, () => e.label), p(y, b(t, {
      get id() {
        return s();
      },
      class: "plz-field__input",
      get "aria-describedby"() {
        return g();
      },
      get "aria-invalid"() {
        return f(() => !!e.error)() ? !0 : e["aria-invalid"];
      }
    }), !1, !1), i(o, (() => {
      var n = f(() => !!e.hint);
      return () => n() && (() => {
        var l = C();
        return i(l, () => e.hint), v(() => u(l, "id", d())), l;
      })();
    })(), null), i(o, (() => {
      var n = f(() => !!e.error);
      return () => n() && (() => {
        var l = P();
        return i(l, () => e.error), v(() => u(l, "id", _())), l;
      })();
    })(), null), v((n) => {
      var l = `plz-field ${e.class ?? ""}`, h = s();
      return l !== n.e && z(o, n.e = l), h !== n.t && u($, "for", n.t = h), n;
    }, {
      e: void 0,
      t: void 0
    }), o;
  })();
}
var T = /* @__PURE__ */ c("<section>");
function U(a) {
  const [r, e] = m(a, ["surface", "padding", "class", "children"]);
  return (() => {
    var t = T();
    return p(t, b(e, {
      get class() {
        return `plz-card plz-card--${r.surface ?? "base"} plz-card--${r.padding ?? "md"} ${r.class ?? ""}`;
      }
    }), !1, !0), i(t, () => r.children), t;
  })();
}
export {
  N as Button,
  U as Card,
  S as TextField,
  F as Theme
};
