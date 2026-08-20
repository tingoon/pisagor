import { ark } from "@ark-ui/react/factory";
import { proseVariants } from "@pisagor/styles/ui/prose";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface ProseProps
  extends Omit<ComponentProps<typeof ark.div>, "dangerouslySetInnerHTML">,
    WithTestId {
  /**
   * Trusted HTML content rendered via `dangerouslySetInnerHTML`.
   *
   * @remarks
   * When set, `children` is ignored. Only pass sanitized / trusted markup
   * (for example CMS content from your own database).
   */
  html?: string;
}
// #endregion

// #region Part
export function Prose({ className, html, children, testId, ...rest }: ProseProps) {
  return (
    <ark.div
      {...rest}
      className={proseVariants({ className })}
      data-part="root"
      data-scope="prose"
      data-testid={testId}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : { children })}
    />
  );
}
// #endregion
