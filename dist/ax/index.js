import { setAttribute, spread, template } from 'solid-js/web';

// src/ax.tsx
var _tmpl$ = /* @__PURE__ */ template(`<div>`);
var A = new Proxy({}, {
  get: (_, title) => {
    const A2 = {
      [title]: (p) => (() => {
        var _el$ = _tmpl$();
        setAttribute(_el$, "a", title);
        spread(_el$, p, false, false);
        return _el$;
      })()
    };
    return A2[title];
  }
});
var ax_default = A;

export { ax_default as default };
