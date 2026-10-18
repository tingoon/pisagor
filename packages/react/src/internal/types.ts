import type { PolymorphicProps } from "@ark-ui/react";
import type { ComponentPropsWithRef, JSX } from "react";

export type VariantClassNames<S extends string> = Partial<
  Record<Exclude<S, "base">, string>
>;

/** Visual style shared by all form controls (`variant` prop). */
export type FormControlVariant = "primary" | "secondary";

/**
 * `ark.*` host props when the wrapper forwards `ref` (React 19 prop). Prefer
 * Ark’s `HTMLArkProps<"tag">` when `ref` is not part of the public API.
 */
export type HTMLArkPropsWithRef<T extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithRef<T> & PolymorphicProps;
