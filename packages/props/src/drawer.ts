import type { DrawerRecipeFn, DrawerVariantProps } from "@pisagor/recipes";

/** Drawer props. */
export interface DrawerProps extends DrawerVariantProps {
  /**
   * Style recipe override.
   * @defaultValue drawerRecipe
   */
  recipe?: DrawerRecipeFn;
}
