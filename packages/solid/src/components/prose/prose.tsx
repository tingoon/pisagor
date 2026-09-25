import { ark } from "@ark-ui/solid/factory";
import { proseRecipe } from "@pisagor/recipes/prose";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";

export interface ProseProps extends Omit<ComponentProps<typeof ark.div>, "innerHTML"> {
  html?: string;
  recipe?: typeof proseRecipe;
}

export function Prose(props: ProseProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe", "html", "children"]);
  const recipe = () => local.recipe ?? proseRecipe;

  return (
    <Show
      fallback={
        <ark.div
          {...rest}
          class={recipe()({ class: cn(local.class) })}
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
          class={recipe()({ class: cn(local.class) })}
          data-part="root"
          data-scope="prose"
          innerHTML={html()}
        />
      )}
    </Show>
  );
}
