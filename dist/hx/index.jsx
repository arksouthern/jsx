// src/hx.tsx
import { createComponent } from "solid-js";
function HandleSet(props) {
  return <>{createComponent(props.children, props.handlers)}</>;
}
export {
  HandleSet as default
};
