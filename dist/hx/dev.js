import { memo } from 'solid-js/web';
import { createComponent } from 'solid-js';

// src/hx.tsx
function HandleSet(props) {
  return memo(() => createComponent(props.children, props.handlers));
}

export { HandleSet as default };
