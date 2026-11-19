import { className as e, effect as t, insert as n, memo as r, setAttribute as i, spread as a, template as o } from "@solidjs/web";
import { createUniqueId as s, omit as c } from "solid-js";
// src/theme.tsx
var l = /* @__PURE__ */ o("<div>");
function u(r) {
	var a = l();
	return n(a, () => r.children), t(() => ({
		e: `plz-theme ${r.class ?? ""}`,
		t: r.accent ?? "green",
		a: r.shape ?? "square"
	}), ({ e: t, t: n, a: r }, o) => {
		e(a, t, o?.e), n !== o?.t && i(a, "data-plz-accent", n), r !== o?.a && i(a, "data-plz-shape", r);
	}), a;
}
// src/components/Button.tsx
var d = /* @__PURE__ */ o("<button>");
function f(e) {
	let t = e, r = c(e, "variant", "accent", "size", "class", "children");
	var i = d();
	return a(i, [r, {
		get class() {
			return `plz-button plz-button--${t.variant ?? "solid"} plz-button--${t.size ?? "md"} ${t.class ?? ""}`;
		},
		get "data-plz-accent"() {
			return t.accent;
		}
	}], !0), n(i, () => t.children), i;
}
// src/components/LinkButton.tsx
var p = /* @__PURE__ */ o("<a>");
function m(e) {
	let t = e, r = c(e, "variant", "accent", "size", "class", "children");
	var i = p();
	return a(i, [r, {
		get class() {
			return `plz-button plz-button--${t.variant ?? "solid"} plz-button--${t.size ?? "md"} ${t.class ?? ""}`;
		},
		get "data-plz-accent"() {
			return t.accent;
		}
	}], !0), n(i, () => t.children), i;
}
// src/components/TextField.tsx
var h = /* @__PURE__ */ o("<div><label class=plz-field__label></label><input><!><!>"), g = /* @__PURE__ */ o("<p class=plz-field__hint>"), _ = /* @__PURE__ */ o("<p class=plz-field__error>");
function v(o) {
	let l = s(), u = o, d = c(o, "label", "hint", "error", "id", "class", "aria-describedby", "aria-invalid"), f = () => typeof u.id == "string" ? u.id : l, p = () => `${f()}-hint`, m = () => `${f()}-error`, v = () => [
		u["aria-describedby"],
		u.hint ? p() : "",
		u.error ? m() : ""
	].filter(Boolean).join(" ") || void 0;
	var y = h(), b = y.firstChild, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling;
	return n(b, () => u.label), a(x, [d, {
		get id() {
			return f();
		},
		class: "plz-field__input",
		get "aria-describedby"() {
			return v();
		},
		get "aria-invalid"() {
			return u.error ? "true" : u["aria-invalid"];
		}
	}], !1), n(y, (() => {
		var e = r(() => !!u.hint);
		return () => e() ? (() => {
			var e = g();
			return n(e, () => u.hint), t(() => p(), (t) => {
				i(e, "id", t);
			}), e;
		})() : u.hint;
	})(), S), n(y, (() => {
		var e = r(() => !!u.error);
		return () => e() ? (() => {
			var e = _();
			return n(e, () => u.error), t(() => m(), (t) => {
				i(e, "id", t);
			}), e;
		})() : u.error;
	})(), C), t(() => ({
		e: `plz-field ${u.class ?? ""}`,
		t: f()
	}), ({ e: t, t: n }, r) => {
		e(y, t, r?.e), n !== r?.t && i(b, "for", n);
	}), y;
}
// src/components/Card.tsx
var y = /* @__PURE__ */ o("<section>");
function b(e) {
	let t = e, r = c(e, "surface", "padding", "class", "children");
	var i = y();
	return a(i, [r, { get class() {
		return `plz-card plz-card--${t.surface ?? "base"} plz-card--${t.padding ?? "md"} ${t.class ?? ""}`;
	} }], !0), n(i, () => t.children), i;
}
export { f as Button, b as Card, m as LinkButton, v as TextField, u as Theme };
