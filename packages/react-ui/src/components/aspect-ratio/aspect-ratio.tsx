import { ark } from "@ark-ui/react/factory";
import { aspectRatioVariants } from "@pisagor/recipes/aspect-ratio";
import type { ComponentProps } from "react";

// #region Types
type AspectRatioRootProps = ComponentProps<typeof ark.div>;

export type AspectRatioProps = AspectRatioRootProps;
// #endregion

// #region Part
export function AspectRatio({ className, ...rest }: AspectRatioProps) {
  return (
    <ark.div
      {...rest}
      className={aspectRatioVariants({ className })}
      data-part="root"
      data-scope="aspect-ratio"
    />
  );
}
// #endregion

// #region Display Names
AspectRatio.displayName = "AspectRatio";
// #endregion
