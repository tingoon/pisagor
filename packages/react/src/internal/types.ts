export type VariantClassNames<S extends string> = Partial<
  Record<Exclude<S, "base">, string>
>;

/** Visual style shared by all form controls (`variant` prop). */
export type FormControlVariant = "primary" | "secondary";

/** Shared size scale prop (`sm` | `md` | `lg`); `md` is the default look. */
export interface SizeScaleProps {
  /**
   * Size scale.
   *
   * @defaultValue "md"
   */
  size?: "sm" | "md" | "lg";
}
