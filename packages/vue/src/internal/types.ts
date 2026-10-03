import type { h } from "vue";

/** Compatible first argument for Vue `h()` with Ark compound parts. */
export type ArkPart = Parameters<typeof h>[0];

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
