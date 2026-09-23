import type { SheetRecipeFn, SheetVariantProps } from "@pisagor/recipes/sheet";

/** Sheet props. */
export interface SheetProps extends SheetVariantProps {
  /**
   * Style recipe override.
   * @defaultValue sheetRecipe
   */
  recipe?: SheetRecipeFn;
}
