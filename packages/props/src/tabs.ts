import type { TabsRecipeFn, TabsVariantProps } from "@pisagor/recipes/tabs";

/** Tabs props. */
export interface TabsProps extends TabsVariantProps {
  /**
   * Style recipe override.
   * @defaultValue tabsRecipe
   */
  recipe?: TabsRecipeFn;
}
