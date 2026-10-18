import type { ProseRootContract } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";

export interface ProseProps
  extends Omit<ComponentProps<"div">, "innerHTML">, ProseRootContract {
  html?: string;
  /**
   * Sanitizer applied to `html` before injection, e.g. `(html) =>
   * DOMPurify.sanitize(html)`. Recommended for user-generated content.
   */
  sanitize?: (html: string) => string;
}

export function Prose(props: ProseProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "recipe",
    "html",
    "sanitize",
    "children",
  ]);
  const recipe = () => local.recipe ?? proseRecipe;

  return (
    <Show
      fallback={
        <div
          {...rest}
          class={recipe()({ class: local.class })}
          data-part="root"
          data-scope="prose"
        >
          {local.children}
        </div>
      }
      when={local.html}
    >
      {(html) => (
        <div
          {...rest}
          class={recipe()({ class: local.class })}
          data-part="root"
          data-scope="prose"
          innerHTML={local.sanitize ? local.sanitize(html()) : html()}
        />
      )}
    </Show>
  );
}
