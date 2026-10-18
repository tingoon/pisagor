import type { ProseRootContract } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface ProseProps
  extends
    Omit<ComponentPropsWithRef<"div">, "dangerouslySetInnerHTML">,
    ProseRootContract {
  /**
   * Trusted HTML content rendered via `dangerouslySetInnerHTML`.
   *
   * @remarks
   *   When set, `children` is ignored. Only pass sanitized / trusted markup
   *   (for example CMS content from your own database).
   */
  html?: string;
  /**
   * Sanitizer applied to `html` before rendering, for example `(html) =>
   * DOMPurify.sanitize(html)`. Recommended for user-generated content.
   */
  sanitize?: (html: string) => string;
}
// #endregion

// #region Component
export function Prose({
  children,
  html,
  sanitize,
  recipe = proseRecipe,
  className,
  ...rest
}: ProseProps) {
  return (
    <div
      {...rest}
      {...(html
        ? {
            dangerouslySetInnerHTML: {
              __html: sanitize ? sanitize(html) : html,
            },
          }
        : { children })}
      className={recipe({ className })}
      data-part="root"
      data-scope="prose"
    />
  );
}
// #endregion
