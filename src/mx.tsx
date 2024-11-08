import { createComponent } from "solid-js"

type Falsy = false | null | undefined

export default function MatchAs<U extends {as: string} | Falsy, K extends Exclude<U, Falsy>['as'], F extends {[K1 in K]: U extends {as: K1} ? (u: U) => unknown : never}>(props: {over: U, match: F}): any {
  const as = () => {
    if (!props.over) throw new Error("Assert Mx: Assert over is not checked at this point")
    if (!props.over.as) {
      console.log("Mx", props.over)
      throw new Error(`Mx: props.over is not a matchable because over.as is "${props.over.as}"`)
    }
    return props.over.as
  }
  const compSelected = () => {
    if (!props.over) {
      return () => null
    }
    const funcs = props.match // ((x) => x)
    const a = as()
    if (!(a in funcs)) {
      console.log("Mx", funcs)
      throw new Error(`Mx: props.over is an unhandle matchable case ${a} not expected by props.match`)
    }
    // @ts-ignore
    return funcs[a]
  }
  //@ts-ignore
  return <>{createComponent(compSelected(), props.over)}</>
  // DO NOT USE, SPREADING PROPS CAN BREAK MUTABLES
  // return <Dynamic component={compSelected()} {...props.over} />
}
