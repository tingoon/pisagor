import { ark } from "@ark-ui/react/factory";
import { proseRecipe } from "@pisagor/recipes/prose";
import type { ComponentProps } from "react";

// #region Types
export interface ProseProps
  extends Omit<ComponentProps<typeof ark.div>, "dangerouslySetInnerHTML"> {
  /**
   * Trusted HTML content rendered via `dangerouslySetInnerHTML`.
   *
   * @remarks
   * When set, `children` is ignored. Only pass sanitized / trusted markup
   * (for example CMS content from your own database).
   */
  html?: string;
  /**
   * Style recipe. Defaults to `proseRecipe` from `@pisagor/recipes/prose`.
   *
   * @defaultValue proseRecipe
   */
  recipe?: typeof proseRecipe;
}
// #endregion

// #region Component
export function Prose({ children, html, recipe = proseRecipe, className, ...rest }: ProseProps) {
  return (
    <ark.div
      {...rest}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : { children })}
      className={recipe({ className })}
      data-part="root"
      data-scope="prose"
    />
  );
}
// #endregion
