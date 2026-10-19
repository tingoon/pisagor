import type { PolymorphicProps } from "@ark-ui/react";
import type { ComponentProps, JSX } from "react";

/** Visual style shared by all form controls (`variant` prop). */
export type FormControlVariant = "primary" | "secondary";

/**
 * Native host props + Ark `PolymorphicProps` (`asChild`) for `ark.*` wrappers.
 * Prefer Ark’s `HTMLArkProps<"tag">` when polymorphism is not needed.
 */
export type ArkComponentProps<T extends keyof JSX.IntrinsicElements> =
  ComponentProps<T> & PolymorphicProps;
