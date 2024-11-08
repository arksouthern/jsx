import { JSX } from "solid-js"

const A = new Proxy({}, {
    get: (_, title) => {
      const A = { [title]: (p: any) => <div a={title} {...p} /> }
      // @ts-ignore
      return A[title]
    }
  }) as Record<string, (props: JSX.HTMLElementTags['div']) => any>

export default A