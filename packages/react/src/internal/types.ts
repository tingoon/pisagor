export type VariantClassNames<S extends string> = Partial<
  Record<Exclude<S, "base">, string>
>;

/** Visual style shared by all form controls (`variant` prop). */
export type FormControlVariant = "primary" | "secondary";
