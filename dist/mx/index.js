import { memo } from 'solid-js/web';
import { createComponent } from 'solid-js';

// src/mx.tsx
function MatchAs(props) {
  const as = () => {
    if (!props.over) throw new Error("Assert Mx: Assert over is not checked at this point");
    if (!props.over.as) {
      throw new Error(`Mx: props.over is not a matchable because over.as is "${props.over.as}"`);
    }
    return props.over.as;
  };
  const compSelected = () => {
    if (!props.over) {
      return () => null;
    }
    const funcs = props.match;
    const a = as();
    if (!(a in funcs)) {
      throw new Error(`Mx: props.over is an unhandle matchable case ${a} not expected by props.match`);
    }
    return funcs[a];
  };
  return memo(() => createComponent(compSelected(), props.over));
}

export { MatchAs as default };
