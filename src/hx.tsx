import { createComponent } from "solid-js"

export default function HandleSet<T extends Record<string, (a: any) => any>>(props: {handlers: T, children: (p: T) => any}): any {
    return <>{createComponent(props.children, props.handlers)}</>
}