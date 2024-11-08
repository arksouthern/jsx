declare function VarSet<T extends Record<string, any>>(props: T & {
    children: (p: Omit<T, "children">) => any;
}): any;

export { VarSet as default };
