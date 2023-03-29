/*! For license information please see components-bundle.js.LICENSE.txt */
(() => {
	"use strict";
	var t = function (e, i) {
			return (
				(t =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function (t, e) {
							t.__proto__ = e;
						}) ||
					function (t, e) {
						for (var i in e)
							Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					}),
				t(e, i)
			);
		},
		e = function () {
			return (
				(e =
					Object.assign ||
					function (t) {
						for (var e, i = 1, r = arguments.length; i < r; i++)
							for (var o in (e = arguments[i]))
								Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t;
					}),
				e.apply(this, arguments)
			);
		};
	function i(t, e, i, r) {
		var o,
			a = arguments.length,
			n =
				a < 3
					? e
					: null === r
					? (r = Object.getOwnPropertyDescriptor(e, i))
					: r;
		if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
			n = Reflect.decorate(t, e, i, r);
		else
			for (var s = t.length - 1; s >= 0; s--)
				(o = t[s]) && (n = (a < 3 ? o(n) : a > 3 ? o(e, i, n) : o(e, i)) || n);
		return a > 3 && n && Object.defineProperty(e, i, n), n;
	}
	function r(t) {
		var e = "function" == typeof Symbol && Symbol.iterator,
			i = e && t[e],
			r = 0;
		if (i) return i.call(t);
		if (t && "number" == typeof t.length)
			return {
				next: function () {
					return (
						t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
					);
				},
			};
		throw new TypeError(
			e ? "Object is not iterable." : "Symbol.iterator is not defined."
		);
	}
	Object.create, Object.create;
	const o = (t) => (e) =>
			"function" == typeof e
				? ((t, e) => (customElements.define(t, e), e))(t, e)
				: ((t, e) => {
						const { kind: i, elements: r } = e;
						return {
							kind: i,
							elements: r,
							finisher(e) {
								customElements.define(t, e);
							},
						};
				  })(t, e),
		a = (t, e) =>
			"method" === e.kind && e.descriptor && !("value" in e.descriptor)
				? {
						...e,
						finisher(i) {
							i.createProperty(e.key, t);
						},
				  }
				: {
						kind: "field",
						key: Symbol(),
						placement: "own",
						descriptor: {},
						originalKey: e.key,
						initializer() {
							"function" == typeof e.initializer &&
								(this[e.key] = e.initializer.call(this));
						},
						finisher(i) {
							i.createProperty(e.key, t);
						},
				  };
	function n(t) {
		return (e, i) =>
			void 0 !== i
				? ((t, e, i) => {
						e.constructor.createProperty(i, t);
				  })(t, e, i)
				: a(t, e);
	}
	function s(t) {
		return n({ ...t, state: !0 });
	}
	const p =
		({ finisher: t, descriptor: e }) =>
		(i, r) => {
			var o;
			if (void 0 === r) {
				const r = null !== (o = i.originalKey) && void 0 !== o ? o : i.key,
					a =
						null != e
							? {
									kind: "method",
									placement: "prototype",
									key: r,
									descriptor: e(i.key),
							  }
							: { ...i, key: r };
				return (
					null != t &&
						(a.finisher = function (e) {
							t(e, r);
						}),
					a
				);
			}
			{
				const o = i.constructor;
				void 0 !== e && Object.defineProperty(i, r, e(r)), null == t || t(o, r);
			}
		};
	function d(t, e) {
		return p({
			descriptor: (i) => {
				const r = {
					get() {
						var e, i;
						return null !==
							(i =
								null === (e = this.renderRoot) || void 0 === e
									? void 0
									: e.querySelector(t)) && void 0 !== i
							? i
							: null;
					},
					enumerable: !0,
					configurable: !0,
				};
				if (e) {
					const e = "symbol" == typeof i ? Symbol() : "__" + i;
					r.get = function () {
						var i, r;
						return (
							void 0 === this[e] &&
								(this[e] =
									null !==
										(r =
											null === (i = this.renderRoot) || void 0 === i
												? void 0
												: i.querySelector(t)) && void 0 !== r
										? r
										: null),
							this[e]
						);
					};
				}
				return r;
			},
		});
	}
	var c;
	null === (c = window.HTMLSlotElement) ||
		void 0 === c ||
		c.prototype.assignedElements;
	const l = window,
		u =
			l.ShadowRoot &&
			(void 0 === l.ShadyCSS || l.ShadyCSS.nativeShadow) &&
			"adoptedStyleSheets" in Document.prototype &&
			"replace" in CSSStyleSheet.prototype,
		h = Symbol(),
		m = new WeakMap();
	class f {
		constructor(t, e, i) {
			if (((this._$cssResult$ = !0), i !== h))
				throw Error(
					"CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
				);
			(this.cssText = t), (this.t = e);
		}
		get styleSheet() {
			let t = this.o;
			const e = this.t;
			if (u && void 0 === t) {
				const i = void 0 !== e && 1 === e.length;
				i && (t = m.get(e)),
					void 0 === t &&
						((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
						i && m.set(e, t));
			}
			return t;
		}
		toString() {
			return this.cssText;
		}
	}
	const v = (t, ...e) => {
			const i =
				1 === t.length
					? t[0]
					: e.reduce(
							(e, i, r) =>
								e +
								((t) => {
									if (!0 === t._$cssResult$) return t.cssText;
									if ("number" == typeof t) return t;
									throw Error(
										"Value passed to 'css' function must be a 'css' function result: " +
											t +
											". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
									);
								})(i) +
								t[r + 1],
							t[0]
					  );
			return new f(i, t, h);
		},
		b = u
			? (t) => t
			: (t) =>
					t instanceof CSSStyleSheet
						? ((t) => {
								let e = "";
								for (const i of t.cssRules) e += i.cssText;
								return ((t) =>
									new f("string" == typeof t ? t : t + "", void 0, h))(e);
						  })(t)
						: t;
	var g;
	const y = window,
		_ = y.trustedTypes,
		x = _ ? _.emptyScript : "",
		A = y.reactiveElementPolyfillSupport,
		$ = {
			toAttribute(t, e) {
				switch (e) {
					case Boolean:
						t = t ? x : null;
						break;
					case Object:
					case Array:
						t = null == t ? t : JSON.stringify(t);
				}
				return t;
			},
			fromAttribute(t, e) {
				let i = t;
				switch (e) {
					case Boolean:
						i = null !== t;
						break;
					case Number:
						i = null === t ? null : Number(t);
						break;
					case Object:
					case Array:
						try {
							i = JSON.parse(t);
						} catch (t) {
							i = null;
						}
				}
				return i;
			},
		},
		w = (t, e) => e !== t && (e == e || t == t),
		S = {
			attribute: !0,
			type: String,
			converter: $,
			reflect: !1,
			hasChanged: w,
		};
	class E extends HTMLElement {
		constructor() {
			super(),
				(this._$Ei = new Map()),
				(this.isUpdatePending = !1),
				(this.hasUpdated = !1),
				(this._$El = null),
				this.u();
		}
		static addInitializer(t) {
			var e;
			this.finalize(),
				(null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
		}
		static get observedAttributes() {
			this.finalize();
			const t = [];
			return (
				this.elementProperties.forEach((e, i) => {
					const r = this._$Ep(i, e);
					void 0 !== r && (this._$Ev.set(r, i), t.push(r));
				}),
				t
			);
		}
		static createProperty(t, e = S) {
			if (
				(e.state && (e.attribute = !1),
				this.finalize(),
				this.elementProperties.set(t, e),
				!e.noAccessor && !this.prototype.hasOwnProperty(t))
			) {
				const i = "symbol" == typeof t ? Symbol() : "__" + t,
					r = this.getPropertyDescriptor(t, i, e);
				void 0 !== r && Object.defineProperty(this.prototype, t, r);
			}
		}
		static getPropertyDescriptor(t, e, i) {
			return {
				get() {
					return this[e];
				},
				set(r) {
					const o = this[t];
					(this[e] = r), this.requestUpdate(t, o, i);
				},
				configurable: !0,
				enumerable: !0,
			};
		}
		static getPropertyOptions(t) {
			return this.elementProperties.get(t) || S;
		}
		static finalize() {
			if (this.hasOwnProperty("finalized")) return !1;
			this.finalized = !0;
			const t = Object.getPrototypeOf(this);
			if (
				(t.finalize(),
				void 0 !== t.h && (this.h = [...t.h]),
				(this.elementProperties = new Map(t.elementProperties)),
				(this._$Ev = new Map()),
				this.hasOwnProperty("properties"))
			) {
				const t = this.properties,
					e = [
						...Object.getOwnPropertyNames(t),
						...Object.getOwnPropertySymbols(t),
					];
				for (const i of e) this.createProperty(i, t[i]);
			}
			return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
		}
		static finalizeStyles(t) {
			const e = [];
			if (Array.isArray(t)) {
				const i = new Set(t.flat(1 / 0).reverse());
				for (const t of i) e.unshift(b(t));
			} else void 0 !== t && e.push(b(t));
			return e;
		}
		static _$Ep(t, e) {
			const i = e.attribute;
			return !1 === i
				? void 0
				: "string" == typeof i
				? i
				: "string" == typeof t
				? t.toLowerCase()
				: void 0;
		}
		u() {
			var t;
			(this._$E_ = new Promise((t) => (this.enableUpdating = t))),
				(this._$AL = new Map()),
				this._$Eg(),
				this.requestUpdate(),
				null === (t = this.constructor.h) ||
					void 0 === t ||
					t.forEach((t) => t(this));
		}
		addController(t) {
			var e, i;
			(null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
				void 0 !== this.renderRoot &&
					this.isConnected &&
					(null === (i = t.hostConnected) || void 0 === i || i.call(t));
		}
		removeController(t) {
			var e;
			null === (e = this._$ES) ||
				void 0 === e ||
				e.splice(this._$ES.indexOf(t) >>> 0, 1);
		}
		_$Eg() {
			this.constructor.elementProperties.forEach((t, e) => {
				this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
			});
		}
		createRenderRoot() {
			var t;
			const e =
				null !== (t = this.shadowRoot) && void 0 !== t
					? t
					: this.attachShadow(this.constructor.shadowRootOptions);
			return (
				((t, e) => {
					u
						? (t.adoptedStyleSheets = e.map((t) =>
								t instanceof CSSStyleSheet ? t : t.styleSheet
						  ))
						: e.forEach((e) => {
								const i = document.createElement("style"),
									r = l.litNonce;
								void 0 !== r && i.setAttribute("nonce", r),
									(i.textContent = e.cssText),
									t.appendChild(i);
						  });
				})(e, this.constructor.elementStyles),
				e
			);
		}
		connectedCallback() {
			var t;
			void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
				this.enableUpdating(!0),
				null === (t = this._$ES) ||
					void 0 === t ||
					t.forEach((t) => {
						var e;
						return null === (e = t.hostConnected) || void 0 === e
							? void 0
							: e.call(t);
					});
		}
		enableUpdating(t) {}
		disconnectedCallback() {
			var t;
			null === (t = this._$ES) ||
				void 0 === t ||
				t.forEach((t) => {
					var e;
					return null === (e = t.hostDisconnected) || void 0 === e
						? void 0
						: e.call(t);
				});
		}
		attributeChangedCallback(t, e, i) {
			this._$AK(t, i);
		}
		_$EO(t, e, i = S) {
			var r;
			const o = this.constructor._$Ep(t, i);
			if (void 0 !== o && !0 === i.reflect) {
				const a = (
					void 0 !==
					(null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute)
						? i.converter
						: $
				).toAttribute(e, i.type);
				(this._$El = t),
					null == a ? this.removeAttribute(o) : this.setAttribute(o, a),
					(this._$El = null);
			}
		}
		_$AK(t, e) {
			var i;
			const r = this.constructor,
				o = r._$Ev.get(t);
			if (void 0 !== o && this._$El !== o) {
				const t = r.getPropertyOptions(o),
					a =
						"function" == typeof t.converter
							? { fromAttribute: t.converter }
							: void 0 !==
							  (null === (i = t.converter) || void 0 === i
									? void 0
									: i.fromAttribute)
							? t.converter
							: $;
				(this._$El = o),
					(this[o] = a.fromAttribute(e, t.type)),
					(this._$El = null);
			}
		}
		requestUpdate(t, e, i) {
			let r = !0;
			void 0 !== t &&
				(((i = i || this.constructor.getPropertyOptions(t)).hasChanged || w)(
					this[t],
					e
				)
					? (this._$AL.has(t) || this._$AL.set(t, e),
					  !0 === i.reflect &&
							this._$El !== t &&
							(void 0 === this._$EC && (this._$EC = new Map()),
							this._$EC.set(t, i)))
					: (r = !1)),
				!this.isUpdatePending && r && (this._$E_ = this._$Ej());
		}
		async _$Ej() {
			this.isUpdatePending = !0;
			try {
				await this._$E_;
			} catch (t) {
				Promise.reject(t);
			}
			const t = this.scheduleUpdate();
			return null != t && (await t), !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			var t;
			if (!this.isUpdatePending) return;
			this.hasUpdated,
				this._$Ei &&
					(this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
			let e = !1;
			const i = this._$AL;
			try {
				(e = this.shouldUpdate(i)),
					e
						? (this.willUpdate(i),
						  null === (t = this._$ES) ||
								void 0 === t ||
								t.forEach((t) => {
									var e;
									return null === (e = t.hostUpdate) || void 0 === e
										? void 0
										: e.call(t);
								}),
						  this.update(i))
						: this._$Ek();
			} catch (t) {
				throw ((e = !1), this._$Ek(), t);
			}
			e && this._$AE(i);
		}
		willUpdate(t) {}
		_$AE(t) {
			var e;
			null === (e = this._$ES) ||
				void 0 === e ||
				e.forEach((t) => {
					var e;
					return null === (e = t.hostUpdated) || void 0 === e
						? void 0
						: e.call(t);
				}),
				this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
				this.updated(t);
		}
		_$Ek() {
			(this._$AL = new Map()), (this.isUpdatePending = !1);
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$E_;
		}
		shouldUpdate(t) {
			return !0;
		}
		update(t) {
			void 0 !== this._$EC &&
				(this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
				(this._$EC = void 0)),
				this._$Ek();
		}
		updated(t) {}
		firstUpdated(t) {}
	}
	var C;
	(E.finalized = !0),
		(E.elementProperties = new Map()),
		(E.elementStyles = []),
		(E.shadowRootOptions = { mode: "open" }),
		null == A || A({ ReactiveElement: E }),
		(null !== (g = y.reactiveElementVersions) && void 0 !== g
			? g
			: (y.reactiveElementVersions = [])
		).push("1.6.1");
	const T = window,
		R = T.trustedTypes,
		O = R ? R.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
		k = `lit$${(Math.random() + "").slice(9)}$`,
		P = "?" + k,
		H = `<${P}>`,
		I = document,
		z = (t = "") => I.createComment(t),
		U = (t) => null === t || ("object" != typeof t && "function" != typeof t),
		D = Array.isArray,
		N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
		L = /-->/g,
		M = />/g,
		B = RegExp(
			">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
			"g"
		),
		F = /'/g,
		j = /"/g,
		V = /^(?:script|style|textarea|title)$/i,
		G =
			(t) =>
			(e, ...i) => ({ _$litType$: t, strings: e, values: i }),
		q = G(1),
		W = (G(2), Symbol.for("lit-noChange")),
		X = Symbol.for("lit-nothing"),
		Y = new WeakMap(),
		Z = I.createTreeWalker(I, 129, null, !1),
		K = (t, e) => {
			const i = t.length - 1,
				r = [];
			let o,
				a = 2 === e ? "<svg>" : "",
				n = N;
			for (let e = 0; e < i; e++) {
				const i = t[e];
				let s,
					p,
					d = -1,
					c = 0;
				for (
					;
					c < i.length && ((n.lastIndex = c), (p = n.exec(i)), null !== p);

				)
					(c = n.lastIndex),
						n === N
							? "!--" === p[1]
								? (n = L)
								: void 0 !== p[1]
								? (n = M)
								: void 0 !== p[2]
								? (V.test(p[2]) && (o = RegExp("</" + p[2], "g")), (n = B))
								: void 0 !== p[3] && (n = B)
							: n === B
							? ">" === p[0]
								? ((n = null != o ? o : N), (d = -1))
								: void 0 === p[1]
								? (d = -2)
								: ((d = n.lastIndex - p[2].length),
								  (s = p[1]),
								  (n = void 0 === p[3] ? B : '"' === p[3] ? j : F))
							: n === j || n === F
							? (n = B)
							: n === L || n === M
							? (n = N)
							: ((n = B), (o = void 0));
				const l = n === B && t[e + 1].startsWith("/>") ? " " : "";
				a +=
					n === N
						? i + H
						: d >= 0
						? (r.push(s), i.slice(0, d) + "$lit$" + i.slice(d) + k + l)
						: i + k + (-2 === d ? (r.push(void 0), e) : l);
			}
			const s = a + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
			if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
				throw Error("invalid template strings array");
			return [void 0 !== O ? O.createHTML(s) : s, r];
		};
	class J {
		constructor({ strings: t, _$litType$: e }, i) {
			let r;
			this.parts = [];
			let o = 0,
				a = 0;
			const n = t.length - 1,
				s = this.parts,
				[p, d] = K(t, e);
			if (
				((this.el = J.createElement(p, i)),
				(Z.currentNode = this.el.content),
				2 === e)
			) {
				const t = this.el.content,
					e = t.firstChild;
				e.remove(), t.append(...e.childNodes);
			}
			for (; null !== (r = Z.nextNode()) && s.length < n; ) {
				if (1 === r.nodeType) {
					if (r.hasAttributes()) {
						const t = [];
						for (const e of r.getAttributeNames())
							if (e.endsWith("$lit$") || e.startsWith(k)) {
								const i = d[a++];
								if ((t.push(e), void 0 !== i)) {
									const t = r.getAttribute(i.toLowerCase() + "$lit$").split(k),
										e = /([.?@])?(.*)/.exec(i);
									s.push({
										type: 1,
										index: o,
										name: e[2],
										strings: t,
										ctor:
											"." === e[1]
												? rt
												: "?" === e[1]
												? at
												: "@" === e[1]
												? nt
												: it,
									});
								} else s.push({ type: 6, index: o });
							}
						for (const e of t) r.removeAttribute(e);
					}
					if (V.test(r.tagName)) {
						const t = r.textContent.split(k),
							e = t.length - 1;
						if (e > 0) {
							r.textContent = R ? R.emptyScript : "";
							for (let i = 0; i < e; i++)
								r.append(t[i], z()),
									Z.nextNode(),
									s.push({ type: 2, index: ++o });
							r.append(t[e], z());
						}
					}
				} else if (8 === r.nodeType)
					if (r.data === P) s.push({ type: 2, index: o });
					else {
						let t = -1;
						for (; -1 !== (t = r.data.indexOf(k, t + 1)); )
							s.push({ type: 7, index: o }), (t += k.length - 1);
					}
				o++;
			}
		}
		static createElement(t, e) {
			const i = I.createElement("template");
			return (i.innerHTML = t), i;
		}
	}
	function Q(t, e, i = t, r) {
		var o, a, n, s;
		if (e === W) return e;
		let p =
			void 0 !== r
				? null === (o = i._$Co) || void 0 === o
					? void 0
					: o[r]
				: i._$Cl;
		const d = U(e) ? void 0 : e._$litDirective$;
		return (
			(null == p ? void 0 : p.constructor) !== d &&
				(null === (a = null == p ? void 0 : p._$AO) ||
					void 0 === a ||
					a.call(p, !1),
				void 0 === d ? (p = void 0) : ((p = new d(t)), p._$AT(t, i, r)),
				void 0 !== r
					? ((null !== (n = (s = i)._$Co) && void 0 !== n ? n : (s._$Co = []))[
							r
					  ] = p)
					: (i._$Cl = p)),
			void 0 !== p && (e = Q(t, p._$AS(t, e.values), p, r)),
			e
		);
	}
	class tt {
		constructor(t, e) {
			(this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		v(t) {
			var e;
			const {
					el: { content: i },
					parts: r,
				} = this._$AD,
				o = (
					null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
						? e
						: I
				).importNode(i, !0);
			Z.currentNode = o;
			let a = Z.nextNode(),
				n = 0,
				s = 0,
				p = r[0];
			for (; void 0 !== p; ) {
				if (n === p.index) {
					let e;
					2 === p.type
						? (e = new et(a, a.nextSibling, this, t))
						: 1 === p.type
						? (e = new p.ctor(a, p.name, p.strings, this, t))
						: 6 === p.type && (e = new st(a, this, t)),
						this.u.push(e),
						(p = r[++s]);
				}
				n !== (null == p ? void 0 : p.index) && ((a = Z.nextNode()), n++);
			}
			return o;
		}
		p(t) {
			let e = 0;
			for (const i of this.u)
				void 0 !== i &&
					(void 0 !== i.strings
						? (i._$AI(t, i, e), (e += i.strings.length - 2))
						: i._$AI(t[e])),
					e++;
		}
	}
	class et {
		constructor(t, e, i, r) {
			var o;
			(this.type = 2),
				(this._$AH = X),
				(this._$AN = void 0),
				(this._$AA = t),
				(this._$AB = e),
				(this._$AM = i),
				(this.options = r),
				(this._$Cm =
					null === (o = null == r ? void 0 : r.isConnected) ||
					void 0 === o ||
					o);
		}
		get _$AU() {
			var t, e;
			return null !==
				(e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
				void 0 !== e
				? e
				: this._$Cm;
		}
		get parentNode() {
			let t = this._$AA.parentNode;
			const e = this._$AM;
			return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(t, e = this) {
			(t = Q(this, t, e)),
				U(t)
					? t === X || null == t || "" === t
						? (this._$AH !== X && this._$AR(), (this._$AH = X))
						: t !== this._$AH && t !== W && this.g(t)
					: void 0 !== t._$litType$
					? this.$(t)
					: void 0 !== t.nodeType
					? this.T(t)
					: ((t) =>
							D(t) ||
							"function" == typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
					? this.k(t)
					: this.g(t);
		}
		O(t, e = this._$AB) {
			return this._$AA.parentNode.insertBefore(t, e);
		}
		T(t) {
			this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
		}
		g(t) {
			this._$AH !== X && U(this._$AH)
				? (this._$AA.nextSibling.data = t)
				: this.T(I.createTextNode(t)),
				(this._$AH = t);
		}
		$(t) {
			var e;
			const { values: i, _$litType$: r } = t,
				o =
					"number" == typeof r
						? this._$AC(t)
						: (void 0 === r.el && (r.el = J.createElement(r.h, this.options)),
						  r);
			if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o)
				this._$AH.p(i);
			else {
				const t = new tt(o, this),
					e = t.v(this.options);
				t.p(i), this.T(e), (this._$AH = t);
			}
		}
		_$AC(t) {
			let e = Y.get(t.strings);
			return void 0 === e && Y.set(t.strings, (e = new J(t))), e;
		}
		k(t) {
			D(this._$AH) || ((this._$AH = []), this._$AR());
			const e = this._$AH;
			let i,
				r = 0;
			for (const o of t)
				r === e.length
					? e.push((i = new et(this.O(z()), this.O(z()), this, this.options)))
					: (i = e[r]),
					i._$AI(o),
					r++;
			r < e.length && (this._$AR(i && i._$AB.nextSibling, r), (e.length = r));
		}
		_$AR(t = this._$AA.nextSibling, e) {
			var i;
			for (
				null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
				t && t !== this._$AB;

			) {
				const e = t.nextSibling;
				t.remove(), (t = e);
			}
		}
		setConnected(t) {
			var e;
			void 0 === this._$AM &&
				((this._$Cm = t),
				null === (e = this._$AP) || void 0 === e || e.call(this, t));
		}
	}
	class it {
		constructor(t, e, i, r, o) {
			(this.type = 1),
				(this._$AH = X),
				(this._$AN = void 0),
				(this.element = t),
				(this.name = e),
				(this._$AM = r),
				(this.options = o),
				i.length > 2 || "" !== i[0] || "" !== i[1]
					? ((this._$AH = Array(i.length - 1).fill(new String())),
					  (this.strings = i))
					: (this._$AH = X);
		}
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t, e = this, i, r) {
			const o = this.strings;
			let a = !1;
			if (void 0 === o)
				(t = Q(this, t, e, 0)),
					(a = !U(t) || (t !== this._$AH && t !== W)),
					a && (this._$AH = t);
			else {
				const r = t;
				let n, s;
				for (t = o[0], n = 0; n < o.length - 1; n++)
					(s = Q(this, r[i + n], e, n)),
						s === W && (s = this._$AH[n]),
						a || (a = !U(s) || s !== this._$AH[n]),
						s === X
							? (t = X)
							: t !== X && (t += (null != s ? s : "") + o[n + 1]),
						(this._$AH[n] = s);
			}
			a && !r && this.j(t);
		}
		j(t) {
			t === X
				? this.element.removeAttribute(this.name)
				: this.element.setAttribute(this.name, null != t ? t : "");
		}
	}
	class rt extends it {
		constructor() {
			super(...arguments), (this.type = 3);
		}
		j(t) {
			this.element[this.name] = t === X ? void 0 : t;
		}
	}
	const ot = R ? R.emptyScript : "";
	class at extends it {
		constructor() {
			super(...arguments), (this.type = 4);
		}
		j(t) {
			t && t !== X
				? this.element.setAttribute(this.name, ot)
				: this.element.removeAttribute(this.name);
		}
	}
	class nt extends it {
		constructor(t, e, i, r, o) {
			super(t, e, i, r, o), (this.type = 5);
		}
		_$AI(t, e = this) {
			var i;
			if ((t = null !== (i = Q(this, t, e, 0)) && void 0 !== i ? i : X) === W)
				return;
			const r = this._$AH,
				o =
					(t === X && r !== X) ||
					t.capture !== r.capture ||
					t.once !== r.once ||
					t.passive !== r.passive,
				a = t !== X && (r === X || o);
			o && this.element.removeEventListener(this.name, this, r),
				a && this.element.addEventListener(this.name, this, t),
				(this._$AH = t);
		}
		handleEvent(t) {
			var e, i;
			"function" == typeof this._$AH
				? this._$AH.call(
						null !==
							(i =
								null === (e = this.options) || void 0 === e
									? void 0
									: e.host) && void 0 !== i
							? i
							: this.element,
						t
				  )
				: this._$AH.handleEvent(t);
		}
	}
	class st {
		constructor(t, e, i) {
			(this.element = t),
				(this.type = 6),
				(this._$AN = void 0),
				(this._$AM = e),
				(this.options = i);
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t) {
			Q(this, t);
		}
	}
	const pt = T.litHtmlPolyfillSupport;
	var dt, ct;
	null == pt || pt(J, et),
		(null !== (C = T.litHtmlVersions) && void 0 !== C
			? C
			: (T.litHtmlVersions = [])
		).push("2.6.1");
	class lt extends E {
		constructor() {
			super(...arguments),
				(this.renderOptions = { host: this }),
				(this._$Do = void 0);
		}
		createRenderRoot() {
			var t, e;
			const i = super.createRenderRoot();
			return (
				(null !== (t = (e = this.renderOptions).renderBefore) &&
					void 0 !== t) ||
					(e.renderBefore = i.firstChild),
				i
			);
		}
		update(t) {
			const e = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
				super.update(t),
				(this._$Do = ((t, e, i) => {
					var r, o;
					const a =
						null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r
							? r
							: e;
					let n = a._$litPart$;
					if (void 0 === n) {
						const t =
							null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
								? o
								: null;
						a._$litPart$ = n = new et(
							e.insertBefore(z(), t),
							t,
							void 0,
							null != i ? i : {}
						);
					}
					return n._$AI(t), n;
				})(e, this.renderRoot, this.renderOptions));
		}
		connectedCallback() {
			var t;
			super.connectedCallback(),
				null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
		}
		disconnectedCallback() {
			var t;
			super.disconnectedCallback(),
				null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
		}
		render() {
			return W;
		}
	}
	(lt.finalized = !0),
		(lt._$litElement$ = !0),
		null === (dt = globalThis.litElementHydrateSupport) ||
			void 0 === dt ||
			dt.call(globalThis, { LitElement: lt });
	const ut = globalThis.litElementPolyfillSupport;
	null == ut || ut({ LitElement: lt }),
		(null !== (ct = globalThis.litElementVersions) && void 0 !== ct
			? ct
			: (globalThis.litElementVersions = [])
		).push("3.2.2");
	const ht = v`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
	let mt = class extends lt {
		render() {
			return q`<span><slot></slot></span>`;
		}
	};
	(mt.styles = [ht]), (mt = i([o("mwc-icon")], mt));
	let ft = !1;
	const vt = () => {},
		bt = {
			get passive() {
				return (ft = !0), !1;
			},
		};
	document.addEventListener("x", vt, bt), document.removeEventListener("x", vt);
	class gt extends lt {
		click() {
			if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
			super.click();
		}
		createFoundation() {
			void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
				this.mdcFoundationClass &&
					((this.mdcFoundation = new this.mdcFoundationClass(
						this.createAdapter()
					)),
					this.mdcFoundation.init());
		}
		firstUpdated() {
			this.createFoundation();
		}
	}
	var yt = (function () {
			function t(t) {
				void 0 === t && (t = {}), (this.adapter = t);
			}
			return (
				Object.defineProperty(t, "cssClasses", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t, "strings", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t, "numbers", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t, "defaultAdapter", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.init = function () {}),
				(t.prototype.destroy = function () {}),
				t
			);
		})(),
		_t = {
			BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
			FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
			FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
			ROOT: "mdc-ripple-upgraded",
			UNBOUNDED: "mdc-ripple-upgraded--unbounded",
		},
		xt = {
			VAR_FG_SCALE: "--mdc-ripple-fg-scale",
			VAR_FG_SIZE: "--mdc-ripple-fg-size",
			VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
			VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
			VAR_LEFT: "--mdc-ripple-left",
			VAR_TOP: "--mdc-ripple-top",
		},
		At = {
			DEACTIVATION_TIMEOUT_MS: 225,
			FG_DEACTIVATION_MS: 150,
			INITIAL_ORIGIN_SCALE: 0.6,
			PADDING: 10,
			TAP_DELAY_MS: 300,
		},
		$t = ["touchstart", "pointerdown", "mousedown", "keydown"],
		wt = ["touchend", "pointerup", "mouseup", "contextmenu"],
		St = [],
		Et = (function (i) {
			function o(t) {
				var r = i.call(this, e(e({}, o.defaultAdapter), t)) || this;
				return (
					(r.activationAnimationHasEnded = !1),
					(r.activationTimer = 0),
					(r.fgDeactivationRemovalTimer = 0),
					(r.fgScale = "0"),
					(r.frame = { width: 0, height: 0 }),
					(r.initialSize = 0),
					(r.layoutFrame = 0),
					(r.maxRadius = 0),
					(r.unboundedCoords = { left: 0, top: 0 }),
					(r.activationState = r.defaultActivationState()),
					(r.activationTimerCallback = function () {
						(r.activationAnimationHasEnded = !0),
							r.runDeactivationUXLogicIfReady();
					}),
					(r.activateHandler = function (t) {
						r.activateImpl(t);
					}),
					(r.deactivateHandler = function () {
						r.deactivateImpl();
					}),
					(r.focusHandler = function () {
						r.handleFocus();
					}),
					(r.blurHandler = function () {
						r.handleBlur();
					}),
					(r.resizeHandler = function () {
						r.layout();
					}),
					r
				);
			}
			return (
				(function (e, i) {
					if ("function" != typeof i && null !== i)
						throw new TypeError(
							"Class extends value " +
								String(i) +
								" is not a constructor or null"
						);
					function r() {
						this.constructor = e;
					}
					t(e, i),
						(e.prototype =
							null === i
								? Object.create(i)
								: ((r.prototype = i.prototype), new r()));
				})(o, i),
				Object.defineProperty(o, "cssClasses", {
					get: function () {
						return _t;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(o, "strings", {
					get: function () {
						return xt;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(o, "numbers", {
					get: function () {
						return At;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(o, "defaultAdapter", {
					get: function () {
						return {
							addClass: function () {},
							browserSupportsCssVars: function () {
								return !0;
							},
							computeBoundingRect: function () {
								return {
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
									width: 0,
									height: 0,
								};
							},
							containsEventTarget: function () {
								return !0;
							},
							deregisterDocumentInteractionHandler: function () {},
							deregisterInteractionHandler: function () {},
							deregisterResizeHandler: function () {},
							getWindowPageOffset: function () {
								return { x: 0, y: 0 };
							},
							isSurfaceActive: function () {
								return !0;
							},
							isSurfaceDisabled: function () {
								return !0;
							},
							isUnbounded: function () {
								return !0;
							},
							registerDocumentInteractionHandler: function () {},
							registerInteractionHandler: function () {},
							registerResizeHandler: function () {},
							removeClass: function () {},
							updateCssVariable: function () {},
						};
					},
					enumerable: !1,
					configurable: !0,
				}),
				(o.prototype.init = function () {
					var t = this,
						e = this.supportsPressRipple();
					if ((this.registerRootHandlers(e), e)) {
						var i = o.cssClasses,
							r = i.ROOT,
							a = i.UNBOUNDED;
						requestAnimationFrame(function () {
							t.adapter.addClass(r),
								t.adapter.isUnbounded() &&
									(t.adapter.addClass(a), t.layoutInternal());
						});
					}
				}),
				(o.prototype.destroy = function () {
					var t = this;
					if (this.supportsPressRipple()) {
						this.activationTimer &&
							(clearTimeout(this.activationTimer),
							(this.activationTimer = 0),
							this.adapter.removeClass(o.cssClasses.FG_ACTIVATION)),
							this.fgDeactivationRemovalTimer &&
								(clearTimeout(this.fgDeactivationRemovalTimer),
								(this.fgDeactivationRemovalTimer = 0),
								this.adapter.removeClass(o.cssClasses.FG_DEACTIVATION));
						var e = o.cssClasses,
							i = e.ROOT,
							r = e.UNBOUNDED;
						requestAnimationFrame(function () {
							t.adapter.removeClass(i),
								t.adapter.removeClass(r),
								t.removeCssVars();
						});
					}
					this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
				}),
				(o.prototype.activate = function (t) {
					this.activateImpl(t);
				}),
				(o.prototype.deactivate = function () {
					this.deactivateImpl();
				}),
				(o.prototype.layout = function () {
					var t = this;
					this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
						(this.layoutFrame = requestAnimationFrame(function () {
							t.layoutInternal(), (t.layoutFrame = 0);
						}));
				}),
				(o.prototype.setUnbounded = function (t) {
					var e = o.cssClasses.UNBOUNDED;
					t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
				}),
				(o.prototype.handleFocus = function () {
					var t = this;
					requestAnimationFrame(function () {
						return t.adapter.addClass(o.cssClasses.BG_FOCUSED);
					});
				}),
				(o.prototype.handleBlur = function () {
					var t = this;
					requestAnimationFrame(function () {
						return t.adapter.removeClass(o.cssClasses.BG_FOCUSED);
					});
				}),
				(o.prototype.supportsPressRipple = function () {
					return this.adapter.browserSupportsCssVars();
				}),
				(o.prototype.defaultActivationState = function () {
					return {
						activationEvent: void 0,
						hasDeactivationUXRun: !1,
						isActivated: !1,
						isProgrammatic: !1,
						wasActivatedByPointer: !1,
						wasElementMadeActive: !1,
					};
				}),
				(o.prototype.registerRootHandlers = function (t) {
					var e, i;
					if (t) {
						try {
							for (var o = r($t), a = o.next(); !a.done; a = o.next()) {
								var n = a.value;
								this.adapter.registerInteractionHandler(
									n,
									this.activateHandler
								);
							}
						} catch (t) {
							e = { error: t };
						} finally {
							try {
								a && !a.done && (i = o.return) && i.call(o);
							} finally {
								if (e) throw e.error;
							}
						}
						this.adapter.isUnbounded() &&
							this.adapter.registerResizeHandler(this.resizeHandler);
					}
					this.adapter.registerInteractionHandler("focus", this.focusHandler),
						this.adapter.registerInteractionHandler("blur", this.blurHandler);
				}),
				(o.prototype.registerDeactivationHandlers = function (t) {
					var e, i;
					if ("keydown" === t.type)
						this.adapter.registerInteractionHandler(
							"keyup",
							this.deactivateHandler
						);
					else
						try {
							for (var o = r(wt), a = o.next(); !a.done; a = o.next()) {
								var n = a.value;
								this.adapter.registerDocumentInteractionHandler(
									n,
									this.deactivateHandler
								);
							}
						} catch (t) {
							e = { error: t };
						} finally {
							try {
								a && !a.done && (i = o.return) && i.call(o);
							} finally {
								if (e) throw e.error;
							}
						}
				}),
				(o.prototype.deregisterRootHandlers = function () {
					var t, e;
					try {
						for (var i = r($t), o = i.next(); !o.done; o = i.next()) {
							var a = o.value;
							this.adapter.deregisterInteractionHandler(
								a,
								this.activateHandler
							);
						}
					} catch (e) {
						t = { error: e };
					} finally {
						try {
							o && !o.done && (e = i.return) && e.call(i);
						} finally {
							if (t) throw t.error;
						}
					}
					this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
						this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
						this.adapter.isUnbounded() &&
							this.adapter.deregisterResizeHandler(this.resizeHandler);
				}),
				(o.prototype.deregisterDeactivationHandlers = function () {
					var t, e;
					this.adapter.deregisterInteractionHandler(
						"keyup",
						this.deactivateHandler
					);
					try {
						for (var i = r(wt), o = i.next(); !o.done; o = i.next()) {
							var a = o.value;
							this.adapter.deregisterDocumentInteractionHandler(
								a,
								this.deactivateHandler
							);
						}
					} catch (e) {
						t = { error: e };
					} finally {
						try {
							o && !o.done && (e = i.return) && e.call(i);
						} finally {
							if (t) throw t.error;
						}
					}
				}),
				(o.prototype.removeCssVars = function () {
					var t = this,
						e = o.strings;
					Object.keys(e).forEach(function (i) {
						0 === i.indexOf("VAR_") && t.adapter.updateCssVariable(e[i], null);
					});
				}),
				(o.prototype.activateImpl = function (t) {
					var e = this;
					if (!this.adapter.isSurfaceDisabled()) {
						var i = this.activationState;
						if (!i.isActivated) {
							var r = this.previousActivationEvent;
							(r && void 0 !== t && r.type !== t.type) ||
								((i.isActivated = !0),
								(i.isProgrammatic = void 0 === t),
								(i.activationEvent = t),
								(i.wasActivatedByPointer =
									!i.isProgrammatic &&
									void 0 !== t &&
									("mousedown" === t.type ||
										"touchstart" === t.type ||
										"pointerdown" === t.type)),
								void 0 !== t &&
								St.length > 0 &&
								St.some(function (t) {
									return e.adapter.containsEventTarget(t);
								})
									? this.resetActivationState()
									: (void 0 !== t &&
											(St.push(t.target), this.registerDeactivationHandlers(t)),
									  (i.wasElementMadeActive = this.checkElementMadeActive(t)),
									  i.wasElementMadeActive && this.animateActivation(),
									  requestAnimationFrame(function () {
											(St = []),
												i.wasElementMadeActive ||
													void 0 === t ||
													(" " !== t.key && 32 !== t.keyCode) ||
													((i.wasElementMadeActive =
														e.checkElementMadeActive(t)),
													i.wasElementMadeActive && e.animateActivation()),
												i.wasElementMadeActive ||
													(e.activationState = e.defaultActivationState());
									  })));
						}
					}
				}),
				(o.prototype.checkElementMadeActive = function (t) {
					return (
						void 0 === t ||
						"keydown" !== t.type ||
						this.adapter.isSurfaceActive()
					);
				}),
				(o.prototype.animateActivation = function () {
					var t = this,
						e = o.strings,
						i = e.VAR_FG_TRANSLATE_START,
						r = e.VAR_FG_TRANSLATE_END,
						a = o.cssClasses,
						n = a.FG_DEACTIVATION,
						s = a.FG_ACTIVATION,
						p = o.numbers.DEACTIVATION_TIMEOUT_MS;
					this.layoutInternal();
					var d = "",
						c = "";
					if (!this.adapter.isUnbounded()) {
						var l = this.getFgTranslationCoordinates(),
							u = l.startPoint,
							h = l.endPoint;
						(d = u.x + "px, " + u.y + "px"), (c = h.x + "px, " + h.y + "px");
					}
					this.adapter.updateCssVariable(i, d),
						this.adapter.updateCssVariable(r, c),
						clearTimeout(this.activationTimer),
						clearTimeout(this.fgDeactivationRemovalTimer),
						this.rmBoundedActivationClasses(),
						this.adapter.removeClass(n),
						this.adapter.computeBoundingRect(),
						this.adapter.addClass(s),
						(this.activationTimer = setTimeout(function () {
							t.activationTimerCallback();
						}, p));
				}),
				(o.prototype.getFgTranslationCoordinates = function () {
					var t,
						e = this.activationState,
						i = e.activationEvent;
					return (
						(t = e.wasActivatedByPointer
							? (function (t, e, i) {
									if (!t) return { x: 0, y: 0 };
									var r,
										o,
										a = e.x,
										n = e.y,
										s = a + i.left,
										p = n + i.top;
									if ("touchstart" === t.type) {
										var d = t;
										(r = d.changedTouches[0].pageX - s),
											(o = d.changedTouches[0].pageY - p);
									} else {
										var c = t;
										(r = c.pageX - s), (o = c.pageY - p);
									}
									return { x: r, y: o };
							  })(
									i,
									this.adapter.getWindowPageOffset(),
									this.adapter.computeBoundingRect()
							  )
							: { x: this.frame.width / 2, y: this.frame.height / 2 }),
						{
							startPoint: (t = {
								x: t.x - this.initialSize / 2,
								y: t.y - this.initialSize / 2,
							}),
							endPoint: {
								x: this.frame.width / 2 - this.initialSize / 2,
								y: this.frame.height / 2 - this.initialSize / 2,
							},
						}
					);
				}),
				(o.prototype.runDeactivationUXLogicIfReady = function () {
					var t = this,
						e = o.cssClasses.FG_DEACTIVATION,
						i = this.activationState,
						r = i.hasDeactivationUXRun,
						a = i.isActivated;
					(r || !a) &&
						this.activationAnimationHasEnded &&
						(this.rmBoundedActivationClasses(),
						this.adapter.addClass(e),
						(this.fgDeactivationRemovalTimer = setTimeout(function () {
							t.adapter.removeClass(e);
						}, At.FG_DEACTIVATION_MS)));
				}),
				(o.prototype.rmBoundedActivationClasses = function () {
					var t = o.cssClasses.FG_ACTIVATION;
					this.adapter.removeClass(t),
						(this.activationAnimationHasEnded = !1),
						this.adapter.computeBoundingRect();
				}),
				(o.prototype.resetActivationState = function () {
					var t = this;
					(this.previousActivationEvent = this.activationState.activationEvent),
						(this.activationState = this.defaultActivationState()),
						setTimeout(function () {
							return (t.previousActivationEvent = void 0);
						}, o.numbers.TAP_DELAY_MS);
				}),
				(o.prototype.deactivateImpl = function () {
					var t = this,
						i = this.activationState;
					if (i.isActivated) {
						var r = e({}, i);
						i.isProgrammatic
							? (requestAnimationFrame(function () {
									t.animateDeactivation(r);
							  }),
							  this.resetActivationState())
							: (this.deregisterDeactivationHandlers(),
							  requestAnimationFrame(function () {
									(t.activationState.hasDeactivationUXRun = !0),
										t.animateDeactivation(r),
										t.resetActivationState();
							  }));
					}
				}),
				(o.prototype.animateDeactivation = function (t) {
					var e = t.wasActivatedByPointer,
						i = t.wasElementMadeActive;
					(e || i) && this.runDeactivationUXLogicIfReady();
				}),
				(o.prototype.layoutInternal = function () {
					this.frame = this.adapter.computeBoundingRect();
					var t = Math.max(this.frame.height, this.frame.width);
					this.maxRadius = this.adapter.isUnbounded()
						? t
						: Math.sqrt(
								Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)
						  ) + o.numbers.PADDING;
					var e = Math.floor(t * o.numbers.INITIAL_ORIGIN_SCALE);
					this.adapter.isUnbounded() && e % 2 != 0
						? (this.initialSize = e - 1)
						: (this.initialSize = e),
						(this.fgScale = "" + this.maxRadius / this.initialSize),
						this.updateLayoutCssVars();
				}),
				(o.prototype.updateLayoutCssVars = function () {
					var t = o.strings,
						e = t.VAR_FG_SIZE,
						i = t.VAR_LEFT,
						r = t.VAR_TOP,
						a = t.VAR_FG_SCALE;
					this.adapter.updateCssVariable(e, this.initialSize + "px"),
						this.adapter.updateCssVariable(a, this.fgScale),
						this.adapter.isUnbounded() &&
							((this.unboundedCoords = {
								left: Math.round(this.frame.width / 2 - this.initialSize / 2),
								top: Math.round(this.frame.height / 2 - this.initialSize / 2),
							}),
							this.adapter.updateCssVariable(
								i,
								this.unboundedCoords.left + "px"
							),
							this.adapter.updateCssVariable(
								r,
								this.unboundedCoords.top + "px"
							));
				}),
				o
			);
		})(yt);
	const Ct = Et,
		Tt =
			(t) =>
			(...e) => ({ _$litDirective$: t, values: e });
	class Rt {
		constructor(t) {}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AT(t, e, i) {
			(this._$Ct = t), (this._$AM = e), (this._$Ci = i);
		}
		_$AS(t, e) {
			return this.update(t, e);
		}
		update(t, e) {
			return this.render(...e);
		}
	}
	const Ot = Tt(
			class extends Rt {
				constructor(t) {
					var e;
					if (
						(super(t),
						1 !== t.type ||
							"class" !== t.name ||
							(null === (e = t.strings) || void 0 === e ? void 0 : e.length) >
								2)
					)
						throw Error(
							"`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
						);
				}
				render(t) {
					return (
						" " +
						Object.keys(t)
							.filter((e) => t[e])
							.join(" ") +
						" "
					);
				}
				update(t, [e]) {
					var i, r;
					if (void 0 === this.nt) {
						(this.nt = new Set()),
							void 0 !== t.strings &&
								(this.st = new Set(
									t.strings
										.join(" ")
										.split(/\s/)
										.filter((t) => "" !== t)
								));
						for (const t in e)
							e[t] &&
								!(null === (i = this.st) || void 0 === i ? void 0 : i.has(t)) &&
								this.nt.add(t);
						return this.render(e);
					}
					const o = t.element.classList;
					this.nt.forEach((t) => {
						t in e || (o.remove(t), this.nt.delete(t));
					});
					for (const t in e) {
						const i = !!e[t];
						i === this.nt.has(t) ||
							(null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) ||
							(i
								? (o.add(t), this.nt.add(t))
								: (o.remove(t), this.nt.delete(t)));
					}
					return W;
				}
			}
		),
		kt = Tt(
			class extends Rt {
				constructor(t) {
					var e;
					if (
						(super(t),
						1 !== t.type ||
							"style" !== t.name ||
							(null === (e = t.strings) || void 0 === e ? void 0 : e.length) >
								2)
					)
						throw Error(
							"The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
						);
				}
				render(t) {
					return Object.keys(t).reduce((e, i) => {
						const r = t[i];
						return null == r
							? e
							: e +
									`${(i = i
										.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
										.toLowerCase())}:${r};`;
					}, "");
				}
				update(t, [e]) {
					const { style: i } = t.element;
					if (void 0 === this.vt) {
						this.vt = new Set();
						for (const t in e) this.vt.add(t);
						return this.render(e);
					}
					this.vt.forEach((t) => {
						null == e[t] &&
							(this.vt.delete(t),
							t.includes("-") ? i.removeProperty(t) : (i[t] = ""));
					});
					for (const t in e) {
						const r = e[t];
						null != r &&
							(this.vt.add(t),
							t.includes("-") ? i.setProperty(t, r) : (i[t] = r));
					}
					return W;
				}
			}
		);
	class Pt extends gt {
		constructor() {
			super(...arguments),
				(this.primary = !1),
				(this.accent = !1),
				(this.unbounded = !1),
				(this.disabled = !1),
				(this.activated = !1),
				(this.selected = !1),
				(this.internalUseStateLayerCustomProperties = !1),
				(this.hovering = !1),
				(this.bgFocused = !1),
				(this.fgActivation = !1),
				(this.fgDeactivation = !1),
				(this.fgScale = ""),
				(this.fgSize = ""),
				(this.translateStart = ""),
				(this.translateEnd = ""),
				(this.leftPos = ""),
				(this.topPos = ""),
				(this.mdcFoundationClass = Ct);
		}
		get isActive() {
			return (
				(t = this.parentElement || this),
				(e = ":active"),
				(t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
			);
			var t, e;
		}
		createAdapter() {
			return {
				browserSupportsCssVars: () => !0,
				isUnbounded: () => this.unbounded,
				isSurfaceActive: () => this.isActive,
				isSurfaceDisabled: () => this.disabled,
				addClass: (t) => {
					switch (t) {
						case "mdc-ripple-upgraded--background-focused":
							this.bgFocused = !0;
							break;
						case "mdc-ripple-upgraded--foreground-activation":
							this.fgActivation = !0;
							break;
						case "mdc-ripple-upgraded--foreground-deactivation":
							this.fgDeactivation = !0;
					}
				},
				removeClass: (t) => {
					switch (t) {
						case "mdc-ripple-upgraded--background-focused":
							this.bgFocused = !1;
							break;
						case "mdc-ripple-upgraded--foreground-activation":
							this.fgActivation = !1;
							break;
						case "mdc-ripple-upgraded--foreground-deactivation":
							this.fgDeactivation = !1;
					}
				},
				containsEventTarget: () => !0,
				registerInteractionHandler: () => {},
				deregisterInteractionHandler: () => {},
				registerDocumentInteractionHandler: () => {},
				deregisterDocumentInteractionHandler: () => {},
				registerResizeHandler: () => {},
				deregisterResizeHandler: () => {},
				updateCssVariable: (t, e) => {
					switch (t) {
						case "--mdc-ripple-fg-scale":
							this.fgScale = e;
							break;
						case "--mdc-ripple-fg-size":
							this.fgSize = e;
							break;
						case "--mdc-ripple-fg-translate-end":
							this.translateEnd = e;
							break;
						case "--mdc-ripple-fg-translate-start":
							this.translateStart = e;
							break;
						case "--mdc-ripple-left":
							this.leftPos = e;
							break;
						case "--mdc-ripple-top":
							this.topPos = e;
					}
				},
				computeBoundingRect: () =>
					(this.parentElement || this).getBoundingClientRect(),
				getWindowPageOffset: () => ({
					x: window.pageXOffset,
					y: window.pageYOffset,
				}),
			};
		}
		startPress(t) {
			this.waitForFoundation(() => {
				this.mdcFoundation.activate(t);
			});
		}
		endPress() {
			this.waitForFoundation(() => {
				this.mdcFoundation.deactivate();
			});
		}
		startFocus() {
			this.waitForFoundation(() => {
				this.mdcFoundation.handleFocus();
			});
		}
		endFocus() {
			this.waitForFoundation(() => {
				this.mdcFoundation.handleBlur();
			});
		}
		startHover() {
			this.hovering = !0;
		}
		endHover() {
			this.hovering = !1;
		}
		waitForFoundation(t) {
			this.mdcFoundation ? t() : this.updateComplete.then(t);
		}
		update(t) {
			t.has("disabled") && this.disabled && this.endHover(), super.update(t);
		}
		render() {
			const t = this.activated && (this.primary || !this.accent),
				e = this.selected && (this.primary || !this.accent),
				i = {
					"mdc-ripple-surface--accent": this.accent,
					"mdc-ripple-surface--primary--activated": t,
					"mdc-ripple-surface--accent--activated":
						this.accent && this.activated,
					"mdc-ripple-surface--primary--selected": e,
					"mdc-ripple-surface--accent--selected": this.accent && this.selected,
					"mdc-ripple-surface--disabled": this.disabled,
					"mdc-ripple-surface--hover": this.hovering,
					"mdc-ripple-surface--primary": this.primary,
					"mdc-ripple-surface--selected": this.selected,
					"mdc-ripple-upgraded--background-focused": this.bgFocused,
					"mdc-ripple-upgraded--foreground-activation": this.fgActivation,
					"mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
					"mdc-ripple-upgraded--unbounded": this.unbounded,
					"mdc-ripple-surface--internal-use-state-layer-custom-properties":
						this.internalUseStateLayerCustomProperties,
				};
			return q`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ot(i)}"
          style="${kt({
						"--mdc-ripple-fg-scale": this.fgScale,
						"--mdc-ripple-fg-size": this.fgSize,
						"--mdc-ripple-fg-translate-end": this.translateEnd,
						"--mdc-ripple-fg-translate-start": this.translateStart,
						"--mdc-ripple-left": this.leftPos,
						"--mdc-ripple-top": this.topPos,
					})}"></div>`;
		}
	}
	i([d(".mdc-ripple-surface")], Pt.prototype, "mdcRoot", void 0),
		i([n({ type: Boolean })], Pt.prototype, "primary", void 0),
		i([n({ type: Boolean })], Pt.prototype, "accent", void 0),
		i([n({ type: Boolean })], Pt.prototype, "unbounded", void 0),
		i([n({ type: Boolean })], Pt.prototype, "disabled", void 0),
		i([n({ type: Boolean })], Pt.prototype, "activated", void 0),
		i([n({ type: Boolean })], Pt.prototype, "selected", void 0),
		i(
			[n({ type: Boolean })],
			Pt.prototype,
			"internalUseStateLayerCustomProperties",
			void 0
		),
		i([s()], Pt.prototype, "hovering", void 0),
		i([s()], Pt.prototype, "bgFocused", void 0),
		i([s()], Pt.prototype, "fgActivation", void 0),
		i([s()], Pt.prototype, "fgDeactivation", void 0),
		i([s()], Pt.prototype, "fgScale", void 0),
		i([s()], Pt.prototype, "fgSize", void 0),
		i([s()], Pt.prototype, "translateStart", void 0),
		i([s()], Pt.prototype, "translateEnd", void 0),
		i([s()], Pt.prototype, "leftPos", void 0),
		i([s()], Pt.prototype, "topPos", void 0);
	const Ht = v`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
	let It = class extends Pt {};
	(It.styles = [Ht]), (It = i([o("mwc-ripple")], It));
	class zt {
		constructor(t) {
			(this.startPress = (e) => {
				t().then((t) => {
					t && t.startPress(e);
				});
			}),
				(this.endPress = () => {
					t().then((t) => {
						t && t.endPress();
					});
				}),
				(this.startFocus = () => {
					t().then((t) => {
						t && t.startFocus();
					});
				}),
				(this.endFocus = () => {
					t().then((t) => {
						t && t.endFocus();
					});
				}),
				(this.startHover = () => {
					t().then((t) => {
						t && t.startHover();
					});
				}),
				(this.endHover = () => {
					t().then((t) => {
						t && t.endHover();
					});
				});
		}
	}
	class Ut extends lt {
		constructor() {
			super(...arguments),
				(this.raised = !1),
				(this.unelevated = !1),
				(this.outlined = !1),
				(this.dense = !1),
				(this.disabled = !1),
				(this.trailingIcon = !1),
				(this.fullwidth = !1),
				(this.icon = ""),
				(this.label = ""),
				(this.expandContent = !1),
				(this.shouldRenderRipple = !1),
				(this.rippleHandlers = new zt(
					() => ((this.shouldRenderRipple = !0), this.ripple)
				));
		}
		renderOverlay() {
			return q``;
		}
		renderRipple() {
			const t = this.raised || this.unelevated;
			return this.shouldRenderRipple
				? q`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${
						this.disabled
				  }"></mwc-ripple>`
				: "";
		}
		focus() {
			const t = this.buttonElement;
			t && (this.rippleHandlers.startFocus(), t.focus());
		}
		blur() {
			const t = this.buttonElement;
			t && (this.rippleHandlers.endFocus(), t.blur());
		}
		getRenderClasses() {
			return {
				"mdc-button--raised": this.raised,
				"mdc-button--unelevated": this.unelevated,
				"mdc-button--outlined": this.outlined,
				"mdc-button--dense": this.dense,
			};
		}
		render() {
			return q`
      <button
          id="button"
          class="mdc-button ${Ot(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${((t = this.ariaHasPopup), null != t ? t : X)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${Ot({ flex: this.expandContent })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
			var t;
		}
		renderIcon() {
			return q`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
		}
		handleRippleActivate(t) {
			const e = () => {
				window.removeEventListener("mouseup", e), this.handleRippleDeactivate();
			};
			window.addEventListener("mouseup", e), this.rippleHandlers.startPress(t);
		}
		handleRippleDeactivate() {
			this.rippleHandlers.endPress();
		}
		handleRippleMouseEnter() {
			this.rippleHandlers.startHover();
		}
		handleRippleMouseLeave() {
			this.rippleHandlers.endHover();
		}
		handleRippleFocus() {
			this.rippleHandlers.startFocus();
		}
		handleRippleBlur() {
			this.rippleHandlers.endFocus();
		}
	}
	var Dt;
	(Ut.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
		i(
			[
				function (t, e, i) {
					if (void 0 !== e)
						return (function (t, e, i) {
							const r = t.constructor;
							if (!i) {
								const t = `__${e}`;
								if (!(i = r.getPropertyDescriptor(e, t)))
									throw new Error(
										"@ariaProperty must be used after a @property decorator"
									);
							}
							const o = i;
							let a = "";
							if (!o.set)
								throw new Error(`@ariaProperty requires a setter for ${e}`);
							if (t.dispatchWizEvent) return i;
							const n = {
								configurable: !0,
								enumerable: !0,
								set(t) {
									if ("" === a) {
										const t = r.getPropertyOptions(e);
										a = "string" == typeof t.attribute ? t.attribute : e;
									}
									this.hasAttribute(a) && this.removeAttribute(a),
										o.set.call(this, t);
								},
							};
							return (
								o.get &&
									(n.get = function () {
										return o.get.call(this);
									}),
								n
							);
						})(t, e, i);
					throw new Error("@ariaProperty only supports TypeScript Decorators");
				},
				n({ type: String, attribute: "aria-haspopup" }),
			],
			Ut.prototype,
			"ariaHasPopup",
			void 0
		),
		i([n({ type: Boolean, reflect: !0 })], Ut.prototype, "raised", void 0),
		i([n({ type: Boolean, reflect: !0 })], Ut.prototype, "unelevated", void 0),
		i([n({ type: Boolean, reflect: !0 })], Ut.prototype, "outlined", void 0),
		i([n({ type: Boolean })], Ut.prototype, "dense", void 0),
		i([n({ type: Boolean, reflect: !0 })], Ut.prototype, "disabled", void 0),
		i(
			[n({ type: Boolean, attribute: "trailingicon" })],
			Ut.prototype,
			"trailingIcon",
			void 0
		),
		i([n({ type: Boolean, reflect: !0 })], Ut.prototype, "fullwidth", void 0),
		i([n({ type: String })], Ut.prototype, "icon", void 0),
		i([n({ type: String })], Ut.prototype, "label", void 0),
		i([n({ type: Boolean })], Ut.prototype, "expandContent", void 0),
		i([d("#button")], Ut.prototype, "buttonElement", void 0),
		i(
			[
				p({
					descriptor: (t) => ({
						async get() {
							var t;
							return (
								await this.updateComplete,
								null === (t = this.renderRoot) || void 0 === t
									? void 0
									: t.querySelector("mwc-ripple")
							);
						},
						enumerable: !0,
						configurable: !0,
					}),
				}),
			],
			Ut.prototype,
			"ripple",
			void 0
		),
		i([s()], Ut.prototype, "shouldRenderRipple", void 0),
		i(
			[
				((Dt = { passive: !0 }),
				p({
					finisher: (t, e) => {
						Object.assign(t.prototype[e], Dt);
					},
				})),
			],
			Ut.prototype,
			"handleRippleActivate",
			null
		);
	const Nt = v`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
	let Lt = class extends Ut {};
	(Lt.styles = [Nt]), (Lt = i([o("mwc-button")], Lt));
	var Mt = function (t, e) {
		return (
			(Mt =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (t, e) {
						t.__proto__ = e;
					}) ||
				function (t, e) {
					for (var i in e)
						Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
				}),
			Mt(t, e)
		);
	};
	function Bt(t, e) {
		if ("function" != typeof e && null !== e)
			throw new TypeError(
				"Class extends value " + String(e) + " is not a constructor or null"
			);
		function i() {
			this.constructor = t;
		}
		Mt(t, e),
			(t.prototype =
				null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
	}
	var Ft = function () {
		return (
			(Ft =
				Object.assign ||
				function (t) {
					for (var e, i = 1, r = arguments.length; i < r; i++)
						for (var o in (e = arguments[i]))
							Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t;
				}),
			Ft.apply(this, arguments)
		);
	};
	function jt(t, e, i, r) {
		var o,
			a = arguments.length,
			n =
				a < 3
					? e
					: null === r
					? (r = Object.getOwnPropertyDescriptor(e, i))
					: r;
		if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
			n = Reflect.decorate(t, e, i, r);
		else
			for (var s = t.length - 1; s >= 0; s--)
				(o = t[s]) && (n = (a < 3 ? o(n) : a > 3 ? o(e, i, n) : o(e, i)) || n);
		return a > 3 && n && Object.defineProperty(e, i, n), n;
	}
	Object.create, Object.create;
	const Vt = (t, e) =>
		"method" === e.kind && e.descriptor && !("value" in e.descriptor)
			? {
					...e,
					finisher(i) {
						i.createProperty(e.key, t);
					},
			  }
			: {
					kind: "field",
					key: Symbol(),
					placement: "own",
					descriptor: {},
					originalKey: e.key,
					initializer() {
						"function" == typeof e.initializer &&
							(this[e.key] = e.initializer.call(this));
					},
					finisher(i) {
						i.createProperty(e.key, t);
					},
			  };
	function Gt(t) {
		return (e, i) =>
			void 0 !== i
				? ((t, e, i) => {
						e.constructor.createProperty(i, t);
				  })(t, e, i)
				: Vt(t, e);
	}
	const qt =
		({ finisher: t, descriptor: e }) =>
		(i, r) => {
			var o;
			if (void 0 === r) {
				const r = null !== (o = i.originalKey) && void 0 !== o ? o : i.key,
					a =
						null != e
							? {
									kind: "method",
									placement: "prototype",
									key: r,
									descriptor: e(i.key),
							  }
							: { ...i, key: r };
				return (
					null != t &&
						(a.finisher = function (e) {
							t(e, r);
						}),
					a
				);
			}
			{
				const o = i.constructor;
				void 0 !== e && Object.defineProperty(i, r, e(r)), null == t || t(o, r);
			}
		};
	function Wt(t, e) {
		return qt({
			descriptor: (i) => {
				const r = {
					get() {
						var e, i;
						return null !==
							(i =
								null === (e = this.renderRoot) || void 0 === e
									? void 0
									: e.querySelector(t)) && void 0 !== i
							? i
							: null;
					},
					enumerable: !0,
					configurable: !0,
				};
				if (e) {
					const e = "symbol" == typeof i ? Symbol() : "__" + i;
					r.get = function () {
						var i, r;
						return (
							void 0 === this[e] &&
								(this[e] =
									null !==
										(r =
											null === (i = this.renderRoot) || void 0 === i
												? void 0
												: i.querySelector(t)) && void 0 !== r
										? r
										: null),
							this[e]
						);
					};
				}
				return r;
			},
		});
	}
	var Xt;
	null === (Xt = window.HTMLSlotElement) ||
		void 0 === Xt ||
		Xt.prototype.assignedElements;
	const Yt = window,
		Zt =
			Yt.ShadowRoot &&
			(void 0 === Yt.ShadyCSS || Yt.ShadyCSS.nativeShadow) &&
			"adoptedStyleSheets" in Document.prototype &&
			"replace" in CSSStyleSheet.prototype,
		Kt = Symbol(),
		Jt = new WeakMap();
	class Qt {
		constructor(t, e, i) {
			if (((this._$cssResult$ = !0), i !== Kt))
				throw Error(
					"CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
				);
			(this.cssText = t), (this.t = e);
		}
		get styleSheet() {
			let t = this.o;
			const e = this.t;
			if (Zt && void 0 === t) {
				const i = void 0 !== e && 1 === e.length;
				i && (t = Jt.get(e)),
					void 0 === t &&
						((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
						i && Jt.set(e, t));
			}
			return t;
		}
		toString() {
			return this.cssText;
		}
	}
	const te = Zt
		? (t) => t
		: (t) =>
				t instanceof CSSStyleSheet
					? ((t) => {
							let e = "";
							for (const i of t.cssRules) e += i.cssText;
							return ((t) =>
								new Qt("string" == typeof t ? t : t + "", void 0, Kt))(e);
					  })(t)
					: t;
	var ee;
	const ie = window,
		re = ie.trustedTypes,
		oe = re ? re.emptyScript : "",
		ae = ie.reactiveElementPolyfillSupport,
		ne = {
			toAttribute(t, e) {
				switch (e) {
					case Boolean:
						t = t ? oe : null;
						break;
					case Object:
					case Array:
						t = null == t ? t : JSON.stringify(t);
				}
				return t;
			},
			fromAttribute(t, e) {
				let i = t;
				switch (e) {
					case Boolean:
						i = null !== t;
						break;
					case Number:
						i = null === t ? null : Number(t);
						break;
					case Object:
					case Array:
						try {
							i = JSON.parse(t);
						} catch (t) {
							i = null;
						}
				}
				return i;
			},
		},
		se = (t, e) => e !== t && (e == e || t == t),
		pe = {
			attribute: !0,
			type: String,
			converter: ne,
			reflect: !1,
			hasChanged: se,
		};
	class de extends HTMLElement {
		constructor() {
			super(),
				(this._$Ei = new Map()),
				(this.isUpdatePending = !1),
				(this.hasUpdated = !1),
				(this._$El = null),
				this.u();
		}
		static addInitializer(t) {
			var e;
			this.finalize(),
				(null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
		}
		static get observedAttributes() {
			this.finalize();
			const t = [];
			return (
				this.elementProperties.forEach((e, i) => {
					const r = this._$Ep(i, e);
					void 0 !== r && (this._$Ev.set(r, i), t.push(r));
				}),
				t
			);
		}
		static createProperty(t, e = pe) {
			if (
				(e.state && (e.attribute = !1),
				this.finalize(),
				this.elementProperties.set(t, e),
				!e.noAccessor && !this.prototype.hasOwnProperty(t))
			) {
				const i = "symbol" == typeof t ? Symbol() : "__" + t,
					r = this.getPropertyDescriptor(t, i, e);
				void 0 !== r && Object.defineProperty(this.prototype, t, r);
			}
		}
		static getPropertyDescriptor(t, e, i) {
			return {
				get() {
					return this[e];
				},
				set(r) {
					const o = this[t];
					(this[e] = r), this.requestUpdate(t, o, i);
				},
				configurable: !0,
				enumerable: !0,
			};
		}
		static getPropertyOptions(t) {
			return this.elementProperties.get(t) || pe;
		}
		static finalize() {
			if (this.hasOwnProperty("finalized")) return !1;
			this.finalized = !0;
			const t = Object.getPrototypeOf(this);
			if (
				(t.finalize(),
				void 0 !== t.h && (this.h = [...t.h]),
				(this.elementProperties = new Map(t.elementProperties)),
				(this._$Ev = new Map()),
				this.hasOwnProperty("properties"))
			) {
				const t = this.properties,
					e = [
						...Object.getOwnPropertyNames(t),
						...Object.getOwnPropertySymbols(t),
					];
				for (const i of e) this.createProperty(i, t[i]);
			}
			return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
		}
		static finalizeStyles(t) {
			const e = [];
			if (Array.isArray(t)) {
				const i = new Set(t.flat(1 / 0).reverse());
				for (const t of i) e.unshift(te(t));
			} else void 0 !== t && e.push(te(t));
			return e;
		}
		static _$Ep(t, e) {
			const i = e.attribute;
			return !1 === i
				? void 0
				: "string" == typeof i
				? i
				: "string" == typeof t
				? t.toLowerCase()
				: void 0;
		}
		u() {
			var t;
			(this._$E_ = new Promise((t) => (this.enableUpdating = t))),
				(this._$AL = new Map()),
				this._$Eg(),
				this.requestUpdate(),
				null === (t = this.constructor.h) ||
					void 0 === t ||
					t.forEach((t) => t(this));
		}
		addController(t) {
			var e, i;
			(null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
				void 0 !== this.renderRoot &&
					this.isConnected &&
					(null === (i = t.hostConnected) || void 0 === i || i.call(t));
		}
		removeController(t) {
			var e;
			null === (e = this._$ES) ||
				void 0 === e ||
				e.splice(this._$ES.indexOf(t) >>> 0, 1);
		}
		_$Eg() {
			this.constructor.elementProperties.forEach((t, e) => {
				this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
			});
		}
		createRenderRoot() {
			var t;
			const e =
				null !== (t = this.shadowRoot) && void 0 !== t
					? t
					: this.attachShadow(this.constructor.shadowRootOptions);
			return (
				((t, e) => {
					Zt
						? (t.adoptedStyleSheets = e.map((t) =>
								t instanceof CSSStyleSheet ? t : t.styleSheet
						  ))
						: e.forEach((e) => {
								const i = document.createElement("style"),
									r = Yt.litNonce;
								void 0 !== r && i.setAttribute("nonce", r),
									(i.textContent = e.cssText),
									t.appendChild(i);
						  });
				})(e, this.constructor.elementStyles),
				e
			);
		}
		connectedCallback() {
			var t;
			void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
				this.enableUpdating(!0),
				null === (t = this._$ES) ||
					void 0 === t ||
					t.forEach((t) => {
						var e;
						return null === (e = t.hostConnected) || void 0 === e
							? void 0
							: e.call(t);
					});
		}
		enableUpdating(t) {}
		disconnectedCallback() {
			var t;
			null === (t = this._$ES) ||
				void 0 === t ||
				t.forEach((t) => {
					var e;
					return null === (e = t.hostDisconnected) || void 0 === e
						? void 0
						: e.call(t);
				});
		}
		attributeChangedCallback(t, e, i) {
			this._$AK(t, i);
		}
		_$EO(t, e, i = pe) {
			var r;
			const o = this.constructor._$Ep(t, i);
			if (void 0 !== o && !0 === i.reflect) {
				const a = (
					void 0 !==
					(null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute)
						? i.converter
						: ne
				).toAttribute(e, i.type);
				(this._$El = t),
					null == a ? this.removeAttribute(o) : this.setAttribute(o, a),
					(this._$El = null);
			}
		}
		_$AK(t, e) {
			var i;
			const r = this.constructor,
				o = r._$Ev.get(t);
			if (void 0 !== o && this._$El !== o) {
				const t = r.getPropertyOptions(o),
					a =
						"function" == typeof t.converter
							? { fromAttribute: t.converter }
							: void 0 !==
							  (null === (i = t.converter) || void 0 === i
									? void 0
									: i.fromAttribute)
							? t.converter
							: ne;
				(this._$El = o),
					(this[o] = a.fromAttribute(e, t.type)),
					(this._$El = null);
			}
		}
		requestUpdate(t, e, i) {
			let r = !0;
			void 0 !== t &&
				(((i = i || this.constructor.getPropertyOptions(t)).hasChanged || se)(
					this[t],
					e
				)
					? (this._$AL.has(t) || this._$AL.set(t, e),
					  !0 === i.reflect &&
							this._$El !== t &&
							(void 0 === this._$EC && (this._$EC = new Map()),
							this._$EC.set(t, i)))
					: (r = !1)),
				!this.isUpdatePending && r && (this._$E_ = this._$Ej());
		}
		async _$Ej() {
			this.isUpdatePending = !0;
			try {
				await this._$E_;
			} catch (t) {
				Promise.reject(t);
			}
			const t = this.scheduleUpdate();
			return null != t && (await t), !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			var t;
			if (!this.isUpdatePending) return;
			this.hasUpdated,
				this._$Ei &&
					(this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
			let e = !1;
			const i = this._$AL;
			try {
				(e = this.shouldUpdate(i)),
					e
						? (this.willUpdate(i),
						  null === (t = this._$ES) ||
								void 0 === t ||
								t.forEach((t) => {
									var e;
									return null === (e = t.hostUpdate) || void 0 === e
										? void 0
										: e.call(t);
								}),
						  this.update(i))
						: this._$Ek();
			} catch (t) {
				throw ((e = !1), this._$Ek(), t);
			}
			e && this._$AE(i);
		}
		willUpdate(t) {}
		_$AE(t) {
			var e;
			null === (e = this._$ES) ||
				void 0 === e ||
				e.forEach((t) => {
					var e;
					return null === (e = t.hostUpdated) || void 0 === e
						? void 0
						: e.call(t);
				}),
				this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
				this.updated(t);
		}
		_$Ek() {
			(this._$AL = new Map()), (this.isUpdatePending = !1);
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$E_;
		}
		shouldUpdate(t) {
			return !0;
		}
		update(t) {
			void 0 !== this._$EC &&
				(this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
				(this._$EC = void 0)),
				this._$Ek();
		}
		updated(t) {}
		firstUpdated(t) {}
	}
	var ce;
	(de.finalized = !0),
		(de.elementProperties = new Map()),
		(de.elementStyles = []),
		(de.shadowRootOptions = { mode: "open" }),
		null == ae || ae({ ReactiveElement: de }),
		(null !== (ee = ie.reactiveElementVersions) && void 0 !== ee
			? ee
			: (ie.reactiveElementVersions = [])
		).push("1.6.1");
	const le = window,
		ue = le.trustedTypes,
		he = ue ? ue.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
		me = `lit$${(Math.random() + "").slice(9)}$`,
		fe = "?" + me,
		ve = `<${fe}>`,
		be = document,
		ge = (t = "") => be.createComment(t),
		ye = (t) => null === t || ("object" != typeof t && "function" != typeof t),
		_e = Array.isArray,
		xe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
		Ae = /-->/g,
		$e = />/g,
		we = RegExp(
			">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
			"g"
		),
		Se = /'/g,
		Ee = /"/g,
		Ce = /^(?:script|style|textarea|title)$/i,
		Te =
			(t) =>
			(e, ...i) => ({ _$litType$: t, strings: e, values: i }),
		Re = Te(1),
		Oe = (Te(2), Symbol.for("lit-noChange")),
		ke = Symbol.for("lit-nothing"),
		Pe = new WeakMap(),
		He = be.createTreeWalker(be, 129, null, !1);
	class Ie {
		constructor({ strings: t, _$litType$: e }, i) {
			let r;
			this.parts = [];
			let o = 0,
				a = 0;
			const n = t.length - 1,
				s = this.parts,
				[p, d] = ((t, e) => {
					const i = t.length - 1,
						r = [];
					let o,
						a = 2 === e ? "<svg>" : "",
						n = xe;
					for (let e = 0; e < i; e++) {
						const i = t[e];
						let s,
							p,
							d = -1,
							c = 0;
						for (
							;
							c < i.length && ((n.lastIndex = c), (p = n.exec(i)), null !== p);

						)
							(c = n.lastIndex),
								n === xe
									? "!--" === p[1]
										? (n = Ae)
										: void 0 !== p[1]
										? (n = $e)
										: void 0 !== p[2]
										? (Ce.test(p[2]) && (o = RegExp("</" + p[2], "g")),
										  (n = we))
										: void 0 !== p[3] && (n = we)
									: n === we
									? ">" === p[0]
										? ((n = null != o ? o : xe), (d = -1))
										: void 0 === p[1]
										? (d = -2)
										: ((d = n.lastIndex - p[2].length),
										  (s = p[1]),
										  (n = void 0 === p[3] ? we : '"' === p[3] ? Ee : Se))
									: n === Ee || n === Se
									? (n = we)
									: n === Ae || n === $e
									? (n = xe)
									: ((n = we), (o = void 0));
						const l = n === we && t[e + 1].startsWith("/>") ? " " : "";
						a +=
							n === xe
								? i + ve
								: d >= 0
								? (r.push(s), i.slice(0, d) + "$lit$" + i.slice(d) + me + l)
								: i + me + (-2 === d ? (r.push(void 0), e) : l);
					}
					const s = a + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
					if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
						throw Error("invalid template strings array");
					return [void 0 !== he ? he.createHTML(s) : s, r];
				})(t, e);
			if (
				((this.el = Ie.createElement(p, i)),
				(He.currentNode = this.el.content),
				2 === e)
			) {
				const t = this.el.content,
					e = t.firstChild;
				e.remove(), t.append(...e.childNodes);
			}
			for (; null !== (r = He.nextNode()) && s.length < n; ) {
				if (1 === r.nodeType) {
					if (r.hasAttributes()) {
						const t = [];
						for (const e of r.getAttributeNames())
							if (e.endsWith("$lit$") || e.startsWith(me)) {
								const i = d[a++];
								if ((t.push(e), void 0 !== i)) {
									const t = r.getAttribute(i.toLowerCase() + "$lit$").split(me),
										e = /([.?@])?(.*)/.exec(i);
									s.push({
										type: 1,
										index: o,
										name: e[2],
										strings: t,
										ctor:
											"." === e[1]
												? Le
												: "?" === e[1]
												? Be
												: "@" === e[1]
												? Fe
												: Ne,
									});
								} else s.push({ type: 6, index: o });
							}
						for (const e of t) r.removeAttribute(e);
					}
					if (Ce.test(r.tagName)) {
						const t = r.textContent.split(me),
							e = t.length - 1;
						if (e > 0) {
							r.textContent = ue ? ue.emptyScript : "";
							for (let i = 0; i < e; i++)
								r.append(t[i], ge()),
									He.nextNode(),
									s.push({ type: 2, index: ++o });
							r.append(t[e], ge());
						}
					}
				} else if (8 === r.nodeType)
					if (r.data === fe) s.push({ type: 2, index: o });
					else {
						let t = -1;
						for (; -1 !== (t = r.data.indexOf(me, t + 1)); )
							s.push({ type: 7, index: o }), (t += me.length - 1);
					}
				o++;
			}
		}
		static createElement(t, e) {
			const i = be.createElement("template");
			return (i.innerHTML = t), i;
		}
	}
	function ze(t, e, i = t, r) {
		var o, a, n, s;
		if (e === Oe) return e;
		let p =
			void 0 !== r
				? null === (o = i._$Co) || void 0 === o
					? void 0
					: o[r]
				: i._$Cl;
		const d = ye(e) ? void 0 : e._$litDirective$;
		return (
			(null == p ? void 0 : p.constructor) !== d &&
				(null === (a = null == p ? void 0 : p._$AO) ||
					void 0 === a ||
					a.call(p, !1),
				void 0 === d ? (p = void 0) : ((p = new d(t)), p._$AT(t, i, r)),
				void 0 !== r
					? ((null !== (n = (s = i)._$Co) && void 0 !== n ? n : (s._$Co = []))[
							r
					  ] = p)
					: (i._$Cl = p)),
			void 0 !== p && (e = ze(t, p._$AS(t, e.values), p, r)),
			e
		);
	}
	class Ue {
		constructor(t, e) {
			(this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		v(t) {
			var e;
			const {
					el: { content: i },
					parts: r,
				} = this._$AD,
				o = (
					null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
						? e
						: be
				).importNode(i, !0);
			He.currentNode = o;
			let a = He.nextNode(),
				n = 0,
				s = 0,
				p = r[0];
			for (; void 0 !== p; ) {
				if (n === p.index) {
					let e;
					2 === p.type
						? (e = new De(a, a.nextSibling, this, t))
						: 1 === p.type
						? (e = new p.ctor(a, p.name, p.strings, this, t))
						: 6 === p.type && (e = new je(a, this, t)),
						this.u.push(e),
						(p = r[++s]);
				}
				n !== (null == p ? void 0 : p.index) && ((a = He.nextNode()), n++);
			}
			return o;
		}
		p(t) {
			let e = 0;
			for (const i of this.u)
				void 0 !== i &&
					(void 0 !== i.strings
						? (i._$AI(t, i, e), (e += i.strings.length - 2))
						: i._$AI(t[e])),
					e++;
		}
	}
	class De {
		constructor(t, e, i, r) {
			var o;
			(this.type = 2),
				(this._$AH = ke),
				(this._$AN = void 0),
				(this._$AA = t),
				(this._$AB = e),
				(this._$AM = i),
				(this.options = r),
				(this._$Cm =
					null === (o = null == r ? void 0 : r.isConnected) ||
					void 0 === o ||
					o);
		}
		get _$AU() {
			var t, e;
			return null !==
				(e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
				void 0 !== e
				? e
				: this._$Cm;
		}
		get parentNode() {
			let t = this._$AA.parentNode;
			const e = this._$AM;
			return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(t, e = this) {
			(t = ze(this, t, e)),
				ye(t)
					? t === ke || null == t || "" === t
						? (this._$AH !== ke && this._$AR(), (this._$AH = ke))
						: t !== this._$AH && t !== Oe && this.g(t)
					: void 0 !== t._$litType$
					? this.$(t)
					: void 0 !== t.nodeType
					? this.T(t)
					: ((t) =>
							_e(t) ||
							"function" == typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
					? this.k(t)
					: this.g(t);
		}
		O(t, e = this._$AB) {
			return this._$AA.parentNode.insertBefore(t, e);
		}
		T(t) {
			this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
		}
		g(t) {
			this._$AH !== ke && ye(this._$AH)
				? (this._$AA.nextSibling.data = t)
				: this.T(be.createTextNode(t)),
				(this._$AH = t);
		}
		$(t) {
			var e;
			const { values: i, _$litType$: r } = t,
				o =
					"number" == typeof r
						? this._$AC(t)
						: (void 0 === r.el && (r.el = Ie.createElement(r.h, this.options)),
						  r);
			if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o)
				this._$AH.p(i);
			else {
				const t = new Ue(o, this),
					e = t.v(this.options);
				t.p(i), this.T(e), (this._$AH = t);
			}
		}
		_$AC(t) {
			let e = Pe.get(t.strings);
			return void 0 === e && Pe.set(t.strings, (e = new Ie(t))), e;
		}
		k(t) {
			_e(this._$AH) || ((this._$AH = []), this._$AR());
			const e = this._$AH;
			let i,
				r = 0;
			for (const o of t)
				r === e.length
					? e.push((i = new De(this.O(ge()), this.O(ge()), this, this.options)))
					: (i = e[r]),
					i._$AI(o),
					r++;
			r < e.length && (this._$AR(i && i._$AB.nextSibling, r), (e.length = r));
		}
		_$AR(t = this._$AA.nextSibling, e) {
			var i;
			for (
				null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
				t && t !== this._$AB;

			) {
				const e = t.nextSibling;
				t.remove(), (t = e);
			}
		}
		setConnected(t) {
			var e;
			void 0 === this._$AM &&
				((this._$Cm = t),
				null === (e = this._$AP) || void 0 === e || e.call(this, t));
		}
	}
	class Ne {
		constructor(t, e, i, r, o) {
			(this.type = 1),
				(this._$AH = ke),
				(this._$AN = void 0),
				(this.element = t),
				(this.name = e),
				(this._$AM = r),
				(this.options = o),
				i.length > 2 || "" !== i[0] || "" !== i[1]
					? ((this._$AH = Array(i.length - 1).fill(new String())),
					  (this.strings = i))
					: (this._$AH = ke);
		}
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t, e = this, i, r) {
			const o = this.strings;
			let a = !1;
			if (void 0 === o)
				(t = ze(this, t, e, 0)),
					(a = !ye(t) || (t !== this._$AH && t !== Oe)),
					a && (this._$AH = t);
			else {
				const r = t;
				let n, s;
				for (t = o[0], n = 0; n < o.length - 1; n++)
					(s = ze(this, r[i + n], e, n)),
						s === Oe && (s = this._$AH[n]),
						a || (a = !ye(s) || s !== this._$AH[n]),
						s === ke
							? (t = ke)
							: t !== ke && (t += (null != s ? s : "") + o[n + 1]),
						(this._$AH[n] = s);
			}
			a && !r && this.j(t);
		}
		j(t) {
			t === ke
				? this.element.removeAttribute(this.name)
				: this.element.setAttribute(this.name, null != t ? t : "");
		}
	}
	class Le extends Ne {
		constructor() {
			super(...arguments), (this.type = 3);
		}
		j(t) {
			this.element[this.name] = t === ke ? void 0 : t;
		}
	}
	const Me = ue ? ue.emptyScript : "";
	class Be extends Ne {
		constructor() {
			super(...arguments), (this.type = 4);
		}
		j(t) {
			t && t !== ke
				? this.element.setAttribute(this.name, Me)
				: this.element.removeAttribute(this.name);
		}
	}
	class Fe extends Ne {
		constructor(t, e, i, r, o) {
			super(t, e, i, r, o), (this.type = 5);
		}
		_$AI(t, e = this) {
			var i;
			if (
				(t = null !== (i = ze(this, t, e, 0)) && void 0 !== i ? i : ke) === Oe
			)
				return;
			const r = this._$AH,
				o =
					(t === ke && r !== ke) ||
					t.capture !== r.capture ||
					t.once !== r.once ||
					t.passive !== r.passive,
				a = t !== ke && (r === ke || o);
			o && this.element.removeEventListener(this.name, this, r),
				a && this.element.addEventListener(this.name, this, t),
				(this._$AH = t);
		}
		handleEvent(t) {
			var e, i;
			"function" == typeof this._$AH
				? this._$AH.call(
						null !==
							(i =
								null === (e = this.options) || void 0 === e
									? void 0
									: e.host) && void 0 !== i
							? i
							: this.element,
						t
				  )
				: this._$AH.handleEvent(t);
		}
	}
	class je {
		constructor(t, e, i) {
			(this.element = t),
				(this.type = 6),
				(this._$AN = void 0),
				(this._$AM = e),
				(this.options = i);
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t) {
			ze(this, t);
		}
	}
	const Ve = le.litHtmlPolyfillSupport;
	var Ge, qe;
	null == Ve || Ve(Ie, De),
		(null !== (ce = le.litHtmlVersions) && void 0 !== ce
			? ce
			: (le.litHtmlVersions = [])
		).push("2.6.1");
	class We extends de {
		constructor() {
			super(...arguments),
				(this.renderOptions = { host: this }),
				(this._$Do = void 0);
		}
		createRenderRoot() {
			var t, e;
			const i = super.createRenderRoot();
			return (
				(null !== (t = (e = this.renderOptions).renderBefore) &&
					void 0 !== t) ||
					(e.renderBefore = i.firstChild),
				i
			);
		}
		update(t) {
			const e = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
				super.update(t),
				(this._$Do = ((t, e, i) => {
					var r, o;
					const a =
						null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r
							? r
							: e;
					let n = a._$litPart$;
					if (void 0 === n) {
						const t =
							null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
								? o
								: null;
						a._$litPart$ = n = new De(
							e.insertBefore(ge(), t),
							t,
							void 0,
							null != i ? i : {}
						);
					}
					return n._$AI(t), n;
				})(e, this.renderRoot, this.renderOptions));
		}
		connectedCallback() {
			var t;
			super.connectedCallback(),
				null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
		}
		disconnectedCallback() {
			var t;
			super.disconnectedCallback(),
				null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
		}
		render() {
			return Oe;
		}
	}
	(We.finalized = !0),
		(We._$litElement$ = !0),
		null === (Ge = globalThis.litElementHydrateSupport) ||
			void 0 === Ge ||
			Ge.call(globalThis, { LitElement: We });
	const Xe = globalThis.litElementPolyfillSupport;
	null == Xe || Xe({ LitElement: We }),
		(null !== (qe = globalThis.litElementVersions) && void 0 !== qe
			? qe
			: (globalThis.litElementVersions = [])
		).push("3.2.2");
	const Ye = ((t, ...e) => {
		const i =
			1 === t.length
				? t[0]
				: e.reduce(
						(e, i, r) =>
							e +
							((t) => {
								if (!0 === t._$cssResult$) return t.cssText;
								if ("number" == typeof t) return t;
								throw Error(
									"Value passed to 'css' function must be a 'css' function result: " +
										t +
										". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
								);
							})(i) +
							t[r + 1],
						t[0]
				  );
		return new Qt(i, t, Kt);
	})`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;
	var Ze = {
			FIXED_CLASS: "mdc-top-app-bar--fixed",
			FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
			SHORT_CLASS: "mdc-top-app-bar--short",
			SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
			SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item",
		},
		Ke = { DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100, MAX_TOP_APP_BAR_HEIGHT: 128 },
		Je = {
			ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
			NAVIGATION_EVENT: "MDCTopAppBar:nav",
			NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
			ROOT_SELECTOR: ".mdc-top-app-bar",
			TITLE_SELECTOR: ".mdc-top-app-bar__title",
		},
		Qe = (function () {
			function t(t) {
				void 0 === t && (t = {}), (this.adapter = t);
			}
			return (
				Object.defineProperty(t, "cssClasses", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t, "strings", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t, "numbers", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t, "defaultAdapter", {
					get: function () {
						return {};
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.init = function () {}),
				(t.prototype.destroy = function () {}),
				t
			);
		})(),
		ti = (function (t) {
			function e(i) {
				return t.call(this, Ft(Ft({}, e.defaultAdapter), i)) || this;
			}
			return (
				Bt(e, t),
				Object.defineProperty(e, "strings", {
					get: function () {
						return Je;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e, "cssClasses", {
					get: function () {
						return Ze;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e, "numbers", {
					get: function () {
						return Ke;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e, "defaultAdapter", {
					get: function () {
						return {
							addClass: function () {},
							removeClass: function () {},
							hasClass: function () {
								return !1;
							},
							setStyle: function () {},
							getTopAppBarHeight: function () {
								return 0;
							},
							notifyNavigationIconClicked: function () {},
							getViewportScrollY: function () {
								return 0;
							},
							getTotalActionItems: function () {
								return 0;
							},
						};
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.handleTargetScroll = function () {}),
				(e.prototype.handleWindowResize = function () {}),
				(e.prototype.handleNavigationClick = function () {
					this.adapter.notifyNavigationIconClicked();
				}),
				e
			);
		})(Qe),
		ei = 0,
		ii = (function (t) {
			function e(e) {
				var i = t.call(this, e) || this;
				return (
					(i.wasDocked = !0),
					(i.isDockedShowing = !0),
					(i.currentAppBarOffsetTop = 0),
					(i.isCurrentlyBeingResized = !1),
					(i.resizeThrottleId = ei),
					(i.resizeDebounceId = ei),
					(i.lastScrollPosition = i.adapter.getViewportScrollY()),
					(i.topAppBarHeight = i.adapter.getTopAppBarHeight()),
					i
				);
			}
			return (
				Bt(e, t),
				(e.prototype.destroy = function () {
					t.prototype.destroy.call(this), this.adapter.setStyle("top", "");
				}),
				(e.prototype.handleTargetScroll = function () {
					var t = Math.max(this.adapter.getViewportScrollY(), 0),
						e = t - this.lastScrollPosition;
					(this.lastScrollPosition = t),
						this.isCurrentlyBeingResized ||
							((this.currentAppBarOffsetTop -= e),
							this.currentAppBarOffsetTop > 0
								? (this.currentAppBarOffsetTop = 0)
								: Math.abs(this.currentAppBarOffsetTop) >
										this.topAppBarHeight &&
								  (this.currentAppBarOffsetTop = -this.topAppBarHeight),
							this.moveTopAppBar());
				}),
				(e.prototype.handleWindowResize = function () {
					var t = this;
					this.resizeThrottleId ||
						(this.resizeThrottleId = setTimeout(function () {
							(t.resizeThrottleId = ei), t.throttledResizeHandler();
						}, Ke.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),
						(this.isCurrentlyBeingResized = !0),
						this.resizeDebounceId && clearTimeout(this.resizeDebounceId),
						(this.resizeDebounceId = setTimeout(function () {
							t.handleTargetScroll(),
								(t.isCurrentlyBeingResized = !1),
								(t.resizeDebounceId = ei);
						}, Ke.DEBOUNCE_THROTTLE_RESIZE_TIME_MS));
				}),
				(e.prototype.checkForUpdate = function () {
					var t = -this.topAppBarHeight,
						e = this.currentAppBarOffsetTop < 0,
						i = this.currentAppBarOffsetTop > t,
						r = e && i;
					if (r) this.wasDocked = !1;
					else {
						if (!this.wasDocked) return (this.wasDocked = !0), !0;
						if (this.isDockedShowing !== i)
							return (this.isDockedShowing = i), !0;
					}
					return r;
				}),
				(e.prototype.moveTopAppBar = function () {
					if (this.checkForUpdate()) {
						var t = this.currentAppBarOffsetTop;
						Math.abs(t) >= this.topAppBarHeight &&
							(t = -Ke.MAX_TOP_APP_BAR_HEIGHT),
							this.adapter.setStyle("top", t + "px");
					}
				}),
				(e.prototype.throttledResizeHandler = function () {
					var t = this.adapter.getTopAppBarHeight();
					this.topAppBarHeight !== t &&
						((this.wasDocked = !1),
						(this.currentAppBarOffsetTop -= this.topAppBarHeight - t),
						(this.topAppBarHeight = t)),
						this.handleTargetScroll();
				}),
				e
			);
		})(ti);
	const ri = ii;
	let oi = !1;
	const ai = () => {},
		ni = {
			get passive() {
				return (oi = !0), !1;
			},
		};
	document.addEventListener("x", ai, ni), document.removeEventListener("x", ai);
	const si = oi;
	class pi extends We {
		click() {
			if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
			super.click();
		}
		createFoundation() {
			void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
				this.mdcFoundationClass &&
					((this.mdcFoundation = new this.mdcFoundationClass(
						this.createAdapter()
					)),
					this.mdcFoundation.init());
		}
		firstUpdated() {
			this.createFoundation();
		}
	}
	class di {
		constructor(t) {}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AT(t, e, i) {
			(this._$Ct = t), (this._$AM = e), (this._$Ci = i);
		}
		_$AS(t, e) {
			return this.update(t, e);
		}
		update(t, e) {
			return this.render(...e);
		}
	}
	const ci =
			((ui = class extends di {
				constructor(t) {
					var e;
					if (
						(super(t),
						1 !== t.type ||
							"class" !== t.name ||
							(null === (e = t.strings) || void 0 === e ? void 0 : e.length) >
								2)
					)
						throw Error(
							"`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
						);
				}
				render(t) {
					return (
						" " +
						Object.keys(t)
							.filter((e) => t[e])
							.join(" ") +
						" "
					);
				}
				update(t, [e]) {
					var i, r;
					if (void 0 === this.nt) {
						(this.nt = new Set()),
							void 0 !== t.strings &&
								(this.st = new Set(
									t.strings
										.join(" ")
										.split(/\s/)
										.filter((t) => "" !== t)
								));
						for (const t in e)
							e[t] &&
								!(null === (i = this.st) || void 0 === i ? void 0 : i.has(t)) &&
								this.nt.add(t);
						return this.render(e);
					}
					const o = t.element.classList;
					this.nt.forEach((t) => {
						t in e || (o.remove(t), this.nt.delete(t));
					});
					for (const t in e) {
						const i = !!e[t];
						i === this.nt.has(t) ||
							(null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) ||
							(i
								? (o.add(t), this.nt.add(t))
								: (o.remove(t), this.nt.delete(t)));
					}
					return Oe;
				}
			}),
			(...t) => ({ _$litDirective$: ui, values: t })),
		li = si ? { passive: !0 } : void 0;
	var ui;
	class hi extends pi {
		constructor() {
			super(...arguments),
				(this.centerTitle = !1),
				(this.handleTargetScroll = () => {
					this.mdcFoundation.handleTargetScroll();
				}),
				(this.handleNavigationClick = () => {
					this.mdcFoundation.handleNavigationClick();
				});
		}
		get scrollTarget() {
			return this._scrollTarget || window;
		}
		set scrollTarget(t) {
			this.unregisterScrollListener();
			const e = this.scrollTarget;
			(this._scrollTarget = t),
				this.updateRootPosition(),
				this.requestUpdate("scrollTarget", e),
				this.registerScrollListener();
		}
		updateRootPosition() {
			if (this.mdcRoot) {
				const t = this.scrollTarget === window;
				this.mdcRoot.style.position = t ? "" : "absolute";
			}
		}
		render() {
			let t = Re`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;
			return (
				this.centerTitle &&
					(t = Re`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${t}</section>`),
				Re`
      <header class="mdc-top-app-bar ${ci(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle ? null : t}
        </section>
        ${this.centerTitle ? t : null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${ci(this.contentClasses())}">
      <slot></slot>
    </div>
    `
			);
		}
		createAdapter() {
			return Object.assign(
				Object.assign(
					{},
					((t = this.mdcRoot),
					{
						addClass: (e) => {
							t.classList.add(e);
						},
						removeClass: (e) => {
							t.classList.remove(e);
						},
						hasClass: (e) => t.classList.contains(e),
					})
				),
				{
					setStyle: (t, e) => this.mdcRoot.style.setProperty(t, e),
					getTopAppBarHeight: () => this.mdcRoot.clientHeight,
					notifyNavigationIconClicked: () => {
						this.dispatchEvent(
							new Event(Je.NAVIGATION_EVENT, { bubbles: !0, cancelable: !0 })
						);
					},
					getViewportScrollY: () =>
						this.scrollTarget instanceof Window
							? this.scrollTarget.pageYOffset
							: this.scrollTarget.scrollTop,
					getTotalActionItems: () =>
						this._actionItemsSlot.assignedNodes({ flatten: !0 }).length,
				}
			);
			var t;
		}
		registerListeners() {
			this.registerScrollListener();
		}
		unregisterListeners() {
			this.unregisterScrollListener();
		}
		registerScrollListener() {
			this.scrollTarget.addEventListener("scroll", this.handleTargetScroll, li);
		}
		unregisterScrollListener() {
			this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
		}
		firstUpdated() {
			super.firstUpdated(), this.updateRootPosition(), this.registerListeners();
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this.unregisterListeners();
		}
	}
	jt([Wt(".mdc-top-app-bar")], hi.prototype, "mdcRoot", void 0),
		jt(
			[Wt('slot[name="actionItems"]')],
			hi.prototype,
			"_actionItemsSlot",
			void 0
		),
		jt([Gt({ type: Boolean })], hi.prototype, "centerTitle", void 0),
		jt([Gt({ type: Object })], hi.prototype, "scrollTarget", null);
	class mi extends hi {
		constructor() {
			super(...arguments),
				(this.mdcFoundationClass = ri),
				(this.prominent = !1),
				(this.dense = !1),
				(this.handleResize = () => {
					this.mdcFoundation.handleWindowResize();
				});
		}
		barClasses() {
			return {
				"mdc-top-app-bar--dense": this.dense,
				"mdc-top-app-bar--prominent": this.prominent,
				"center-title": this.centerTitle,
			};
		}
		contentClasses() {
			return {
				"mdc-top-app-bar--fixed-adjust": !this.dense && !this.prominent,
				"mdc-top-app-bar--dense-fixed-adjust": this.dense && !this.prominent,
				"mdc-top-app-bar--prominent-fixed-adjust":
					!this.dense && this.prominent,
				"mdc-top-app-bar--dense-prominent-fixed-adjust":
					this.dense && this.prominent,
			};
		}
		registerListeners() {
			super.registerListeners(),
				window.addEventListener("resize", this.handleResize, li);
		}
		unregisterListeners() {
			super.unregisterListeners(),
				window.removeEventListener("resize", this.handleResize);
		}
	}
	jt([Gt({ type: Boolean, reflect: !0 })], mi.prototype, "prominent", void 0),
		jt([Gt({ type: Boolean, reflect: !0 })], mi.prototype, "dense", void 0);
	const fi = (function (t) {
		function e() {
			var e = (null !== t && t.apply(this, arguments)) || this;
			return (e.wasScrolled = !1), e;
		}
		return (
			Bt(e, t),
			(e.prototype.handleTargetScroll = function () {
				this.adapter.getViewportScrollY() <= 0
					? this.wasScrolled &&
					  (this.adapter.removeClass(Ze.FIXED_SCROLLED_CLASS),
					  (this.wasScrolled = !1))
					: this.wasScrolled ||
					  (this.adapter.addClass(Ze.FIXED_SCROLLED_CLASS),
					  (this.wasScrolled = !0));
			}),
			e
		);
	})(ii);
	class vi extends mi {
		constructor() {
			super(...arguments), (this.mdcFoundationClass = fi);
		}
		barClasses() {
			return Object.assign(Object.assign({}, super.barClasses()), {
				"mdc-top-app-bar--fixed": !0,
			});
		}
		registerListeners() {
			this.scrollTarget.addEventListener("scroll", this.handleTargetScroll, li);
		}
		unregisterListeners() {
			this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
		}
	}
	let bi = class extends vi {};
	(bi.styles = [Ye]),
		(bi = jt(
			[
				(
					(t) => (e) =>
						"function" == typeof e
							? ((t, e) => (customElements.define(t, e), e))(t, e)
							: ((t, e) => {
									const { kind: i, elements: r } = e;
									return {
										kind: i,
										elements: r,
										finisher(e) {
											customElements.define(t, e);
										},
									};
							  })(t, e)
				)("mwc-top-app-bar-fixed"),
			],
			bi
		));
})();
