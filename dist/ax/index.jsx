// src/ax.tsx
var A = new Proxy({}, {
  get: (_, title) => {
    const A2 = { [title]: (p) => <div a={title} {...p} /> };
    return A2[title];
  }
});
var ax_default = A;
export {
  ax_default as default
};
