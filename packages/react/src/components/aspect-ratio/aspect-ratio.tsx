import { ark } from "@ark-ui/react/factory";
import { aspectRatioRecipe } from "@pisagor/recipes/aspect-ratio";
import type { ComponentProps } from "react";

// #region Types
export type AspectRatioProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Component
export function AspectRatio({ className, ...rest }: AspectRatioProps) {
  return (
    <ark.div
      {...rest}
      className={aspectRatioRecipe({ className })}
      data-part="root"
      data-scope="aspect-ratio"
    />
  );
}
// #endregion
