import { ark } from "@ark-ui/react/factory";
import { type SurfaceVariantProps, surfaceVariants } from "@pisagor/styles/ui/surface";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

// #region Variants

// #endregion

// #region Types

export type SurfaceVariant = NonNullable<SurfaceVariantProps["variant"]>;

export interface SurfaceContextValue {
  depth: number;
  variant: SurfaceVariant;
}

const AUTO_VARIANTS = [
  "default",
  "secondary",
  "tertiary",
  "tertiary",
] as const satisfies readonly SurfaceVariant[];

const [SurfaceContext, useSurface] = createContext<SurfaceContextValue>({
  name: "Surface",
  strict: false,
});

export { useSurface };

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

// #region Component
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
        className={cn(
          surfaceVariants({ bordered, padding, rounded, variant: surface.variant }),
          className,
        )}
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
