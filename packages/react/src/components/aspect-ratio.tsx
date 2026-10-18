import { ark, type PolymorphicProps } from "@ark-ui/react";
import type { AspectRatioProps as BaseAspectRatioProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, CSSProperties } from "react";

// #region Types
export interface AspectRatioProps
  extends ComponentPropsWithRef<"div">, PolymorphicProps, BaseAspectRatioProps {
  /**
   * Width divided by height, e.g. `16 / 9`. Overrides the `--ratio` CSS
   * variable.
   *
   * @defaultValue 1
   */
  ratio?: number;
}
// #endregion

// #region Component
export function AspectRatio({
  ratio,
  recipe = aspectRatioRecipe,
  className,
  style,
  ...rest
}: AspectRatioProps) {
  return (
    <ark.div
      {...rest}
      className={recipe({ className })}
      data-part="root"
      data-scope="aspect-ratio"
      style={
        ratio === undefined
          ? style
          : ({ "--ratio": ratio, ...style } as CSSProperties)
      }
    />
  );
}
// #endregion
