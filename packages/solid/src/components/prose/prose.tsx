import { ark } from "@ark-ui/solid/factory";
import type { ProseProps as BaseProseProps } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";

export interface ProseProps
  extends Omit<ComponentProps<typeof ark.div>, "innerHTML">,
    BaseProseProps {
  html?: string;
}

export function Prose(props: ProseProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "recipe",
    "html",
    "children",
  ]);
  const recipe = () => local.recipe ?? proseRecipe;

  return (
    <Show
      fallback={
        <ark.div
          {...rest}
          class={recipe()({ class: local.class })}
          data-part="root"
          data-scope="prose"
        >
          {local.children}
        </ark.div>
      }
      when={local.html}
    >
      {(html) => (
        <ark.div
          {...rest}
          class={recipe()({ class: local.class })}
          data-part="root"
          data-scope="prose"
          innerHTML={html()}
        />
      )}
    </Show>
  );
}
