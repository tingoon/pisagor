import { ark } from "@ark-ui/react/factory";
import { type SurfaceVariantProps, surfaceVariants } from "@pisagor/styles/ui/surface";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { SurfaceContext, type SurfaceVariant, useSurface } from "./surface.context";

// #region Types
const AUTO_VARIANTS = [
  "default",
  "secondary",
  "tertiary",
  "tertiary",
] as const satisfies readonly SurfaceVariant[];

export interface SurfaceProps
  extends ComponentProps<typeof ark.div>,
    Omit<SurfaceVariantProps, "variant">,
    WithTestId {
  /**
   * Surface elevation level.
   *
   * @remarks
   * When omitted, nested surfaces auto-increment (`default` → `secondary` → `tertiary`).
   */
  variant?: SurfaceVariant;
}
// #endregion

// #region Part
export function Surface({
  variant: variantProp,
  padding,
  rounded = true,
  bordered = false,
  className,
  children,
  testId,
  ...rest
}: SurfaceProps) {
  const parent = useSurface();

  const surface = useMemo(() => {
    const depth = parent ? parent.depth + 1 : 0;
    const variant =
      variantProp ?? AUTO_VARIANTS[Math.min(depth, AUTO_VARIANTS.length - 1)] ?? "default";

    return { depth, variant };
  }, [parent, variantProp]);

  return (
    <SurfaceContext value={surface}>
      <ark.div
        {...rest}
        className={surfaceVariants({
          bordered,
          className,
          padding,
          rounded,
          variant: surface.variant,
        })}
        data-depth={surface.depth}
        data-part="root"
        data-scope="surface"
        data-testid={testId}
        data-variant={surface.variant}
      >
        {children}
      </ark.div>
    </SurfaceContext>
  );
}
Surface.displayName = "Surface";
// #endregion
