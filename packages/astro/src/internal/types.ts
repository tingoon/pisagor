export type VariantClassNames<S extends string> = Partial<
  Record<Exclude<S, "base">, string>
>;

export interface SizeScaleProps {
  /**
   * The size of the component.
   *
   * @defaultValue "md"
   */
  size?: "sm" | "md" | "lg";
}
