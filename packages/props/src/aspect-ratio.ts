import type { AspectRatioRecipeFn } from "@pisagor/recipes";

/**
 * Shared AspectRatio root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface AspectRatioRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue aspectRatioRecipe
   */
  recipe?: AspectRatioRecipeFn;
}

/**
 * AspectRatio shorthand content contract. Compose with
 * `AspectRatioRootContract` / framework `AspectRatioRootProps` — do not extend
 * the root here so root fields are not applied twice.
 */
export interface AspectRatioContract {
  /**
   * Width divided by height, e.g. `16 / 9`. Overrides the `--ratio` CSS
   * variable.
   *
   * @defaultValue 1
   */
  ratio?: number | string;
}
