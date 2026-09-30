import type { ComponentProps, Snippet } from "svelte";
import type FieldShell from "./field-shell.svelte";

export type FieldPresentationProps = {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof FieldShell>["labelProps"];
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
};
