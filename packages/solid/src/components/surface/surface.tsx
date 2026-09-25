import { ark } from "@ark-ui/solid/factory";
import { type SurfaceVariantProps, surfaceRecipe } from "@pisagor/recipes/surface";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { SurfaceContext, type SurfaceVariant, useSurface } from "./surface.context";

const AUTO_VARIANTS = [
  "default",
  "secondary",
  "tertiary",
  "tertiary",
] as const satisfies readonly SurfaceVariant[];

export interface SurfaceProps extends ComponentProps<typeof ark.div>, SurfaceVariantProps {
  recipe?: typeof surfaceRecipe;
}

export function Surface(props: SurfaceProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "bordered",
    "rounded",
    "variant",
    "children",
    "padding",
    "recipe",
    "class",
  ]);
  const parent = useSurface();

  const surface = createMemo(() => {
    const depth = parent ? parent.depth + 1 : 0;
    const variant =
      local.variant ?? AUTO_VARIANTS[Math.min(depth, AUTO_VARIANTS.length - 1)] ?? "default";

    return { depth, variant };
  });

  return (
    <SurfaceContext value={surface()}>
      <ark.div
        {...rest}
        class={(local.recipe ?? surfaceRecipe)({
          bordered: local.bordered ?? false,
          class: cn(local.class),
          padding: local.padding,
          rounded: local.rounded ?? true,
          variant: surface().variant,
        })}
        data-depth={surface().depth}
        data-part="root"
        data-scope="surface"
        data-variant={surface().variant}
      >
        {local.children}
      </ark.div>
    </SurfaceContext>
  );
}
