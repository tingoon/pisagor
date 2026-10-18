import { ark } from "@ark-ui/react";
import type { ProseProps as BaseProseProps } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface ProseProps
  extends
    Omit<ComponentProps<typeof ark.div>, "dangerouslySetInnerHTML">,
    BaseProseProps {
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
    <ark.div
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
