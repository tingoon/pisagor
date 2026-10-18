import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { SurfaceProps as BaseSurfaceProps } from "@pisagor/props";
import { surfaceRecipe } from "@pisagor/recipes";

import { useMemo } from "react";
import {
  SurfaceContext,
  type SurfaceVariant,
  useSurface,
} from "./surface.context";

// #region Types
const AUTO_VARIANTS = [
  "default",
  "secondary",
  "tertiary",
] as const satisfies readonly SurfaceVariant[];

export interface SurfaceProps extends HTMLArkProps<"div">, BaseSurfaceProps {}
// #endregion

// #region Component
export function Surface({
  bordered = false,
  rounded = true,
  variant: variantProp,
  children,
  padding,
  recipe = surfaceRecipe,
  className,
  ...rest
}: SurfaceProps) {
  const parent = useSurface();

  const surface = useMemo(() => {
    const depth = parent ? parent.depth + 1 : 0;
    const variant =
      variantProp ??
      AUTO_VARIANTS[Math.min(depth, AUTO_VARIANTS.length - 1)] ??
      "default";

    return { depth, variant };
  }, [parent, variantProp]);

  return (
    <SurfaceContext value={surface}>
      <ark.div
        {...rest}
        className={recipe({
          bordered,
          className,
          padding,
          rounded,
          variant: surface.variant,
        })}
        data-depth={surface.depth}
        data-part="root"
        data-scope="surface"
        data-variant={surface.variant}
      >
        {children}
      </ark.div>
    </SurfaceContext>
  );
}
// #endregion
