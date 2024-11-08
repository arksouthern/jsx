import { createComponent } from 'solid-js';

// src/vx.tsx
function VarSet(props) {
  return createComponent(props.children, props);
}

export { VarSet as default };
