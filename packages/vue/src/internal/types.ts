export type VariantClassNames<T extends string> = Partial<Record<Exclude<T, "base">, string>>;
