import { ark } from "@ark-ui/react/factory";
import { type KbdVariantProps, kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes/kbd";
import type { ComponentProps } from "react";

// #region Types
export interface KbdProps extends ComponentProps<typeof ark.kbd>, KbdVariantProps {
  /**
   * Style recipe. Defaults to `kbdRecipe` from `@pisagor/recipes/kbd`.
   *
   * @defaultValue kbdRecipe
   */
  recipe?: typeof kbdRecipe;
}

export interface KbdGroupProps extends ComponentProps<typeof ark.div> {
  /**
   * Style recipe. Defaults to `kbdGroupRecipe` from `@pisagor/recipes/kbd`.
   *
   * @defaultValue kbdGroupRecipe
   */
  recipe?: typeof kbdGroupRecipe;
}
// #endregion

// #region Parts
export function KbdRoot({ variant = "default", recipe = kbdRecipe, className, ...rest }: KbdProps) {
  return (
    <ark.kbd
      {...rest}
      className={recipe({ className, variant })}
      data-part="root"
      data-scope="kbd"
    />
  );
}

export function KbdGroup({ recipe = kbdGroupRecipe, className, ...rest }: KbdGroupProps) {
  return <ark.div {...rest} className={recipe({ className })} data-part="group" data-scope="kbd" />;
}
// #endregion

// #region Display Names
KbdRoot.displayName = "Kbd";
KbdGroup.displayName = "Kbd.Group";
// #endregion
