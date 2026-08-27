import type { SurfaceVariant } from "../../components/surface/surface";

export {
  formControlGroupShellVariants,
  formControlRadioToggleVariants,
  formControlSeparatorVariants,
  formControlShellVariants,
  formControlToggleVariants,
  formControlZoneVariants,
} from "@pisagor/recipes/form-control";

export type FormControlVariant = "primary" | "secondary";

export type FormControlSurfaceVariant = SurfaceVariant | undefined;

export function formControlShellProps(resolved: {
  variant: FormControlVariant;
  surfaceVariant?: FormControlSurfaceVariant;
}) {
  return {
    "data-variant": resolved.variant,
  } as const;
}

export function shellVariantArgs(resolved: {
  variant: FormControlVariant;
  surfaceVariant?: FormControlSurfaceVariant;
}) {
  return {
    surfaceVariant: resolved.variant === "secondary" ? resolved.surfaceVariant : undefined,
    variant: resolved.variant,
  };
}
