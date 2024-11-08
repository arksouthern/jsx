declare function HandleSet<T extends Record<string, (a: any) => any>>(props: {
    handlers: T;
    children: (p: T) => any;
}): any;

export { HandleSet as default };
