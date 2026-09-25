import type {
  SurfaceRecipeFn,
  SurfaceVariantProps,
} from "@pisagor/recipes/surface";

/** Surface props. */
export interface SurfaceProps extends SurfaceVariantProps {
  /**
   * Style recipe override.
   * @defaultValue surfaceRecipe
   */
  recipe?: SurfaceRecipeFn;
}
