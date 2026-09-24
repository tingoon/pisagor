import type { FormControlShellVariantProps } from "@pisagor/recipes/form-control";
import { useSurface } from "./surface.context";

export type FormControlSurfaceVariant = FormControlShellVariantProps["surfaceVariant"];

/**
 * Resolves the nearest Surface variant for form-control shell fills.
 * Does not change primary/secondary shell variant — only surface contrast.
 */
export function useFormControlSurface(): FormControlSurfaceVariant | undefined {
  return useSurface()?.variant;
}
