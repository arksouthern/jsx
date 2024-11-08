type Falsy = false | null | undefined;
declare function MatchAs<U extends {
    as: string;
} | Falsy, K extends Exclude<U, Falsy>['as'], F extends {
    [K1 in K]: U extends {
        as: K1;
    } ? (u: U) => unknown : never;
}>(props: {
    over: U;
    match: F;
}): any;

export { MatchAs as default };
