export type VariantClassNames<S extends string> = Partial<Record<Exclude<S, "base">, string>>;
