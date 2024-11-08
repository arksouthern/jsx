import { createComponent } from "solid-js";

export default function VarSet<T extends Record<string, any>>(props: T & {children: (p: Omit<T, "children">) => any}): any {
    return createComponent(props.children, props)
}