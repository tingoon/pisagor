export type VariantClassNames<S extends string> = Partial<
  Record<Exclude<S, "base">, string>
>;

/**
 * Accepted values for component `class` props.
 * Matches recipe/`tailwind-merge` `ClassNameValue` (not clsx’s wider `ClassValue`).
 */
export type ClassValue =
  | string
  | null
  | undefined
  | 0
  | false
  | readonly ClassValue[];
