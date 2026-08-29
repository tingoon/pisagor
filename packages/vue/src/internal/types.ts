export type VariantClassNames<S> = Partial<Record<Exclude<keyof S & string, "base">, string>>;
