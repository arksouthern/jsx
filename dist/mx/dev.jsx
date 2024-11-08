// src/mx.tsx
import { createComponent } from "solid-js";
function MatchAs(props) {
  const as = () => {
    if (!props.over) throw new Error("Assert Mx: Assert over is not checked at this point");
    if (!props.over.as) {
      console.log("Mx", props.over);
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
      console.log("Mx", funcs);
      throw new Error(`Mx: props.over is an unhandle matchable case ${a} not expected by props.match`);
    }
    return funcs[a];
  };
  return <>{createComponent(compSelected(), props.over)}</>;
}
export {
  MatchAs as default
};