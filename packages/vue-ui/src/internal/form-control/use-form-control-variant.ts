import { useSurface } from "../../components/surface/surface";
import { useFormControlVariantContext } from "./form-control-variant-context";
import type { FormControlSurfaceVariant, FormControlVariant } from "./form-control-variants";

export interface ResolvedFormControlVariant {
  surfaceVariant: FormControlSurfaceVariant;
  variant: FormControlVariant;
}

function resolveFormControlVariant(
  surface: ReturnType<typeof useSurface>,
  explicit?: FormControlVariant,
  contextVariant?: FormControlVariant,
): ResolvedFormControlVariant {
  const resolvedExplicit = explicit ?? contextVariant;

  if (resolvedExplicit) {
    return {
      surfaceVariant: surface?.variant,
      variant: resolvedExplicit,
    };
  }

  if (!surface || surface.variant === "transparent") {
    return { surfaceVariant: undefined, variant: "primary" };
  }

  return { surfaceVariant: surface.variant, variant: "secondary" };
}

export function useFormControlVariant(explicit?: FormControlVariant): ResolvedFormControlVariant {
  const contextVariant = useFormControlVariantContext();
  const surface = useSurface();

  return resolveFormControlVariant(surface, explicit, contextVariant);
}
