import type { TabsRecipeFn, TabsVariantProps } from "@pisagor/recipes";

/** Tabs props. */
export interface TabsProps extends TabsVariantProps {
  /**
   * Style recipe override.
   * @defaultValue tabsRecipe
   */
  recipe?: TabsRecipeFn;
}
