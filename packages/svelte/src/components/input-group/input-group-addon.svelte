<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import {
  type InputGroupAddonVariantProps,
  inputGroupAddonRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  InputGroupAddonVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof inputGroupAddonRecipe;
  };

let {
  align = "inline-start",
  recipe = inputGroupAddonRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

function handleClick(event: MouseEvent & { currentTarget: HTMLDivElement }) {
  if ((event.target as HTMLElement).closest("button")) {
    return;
  }
  event.currentTarget.parentElement?.querySelector("input")?.focus();
}
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ align, class: cn(className) })}
  data-align={align}
  data-part="addon"
  data-scope="input-group"
  onclick={handleClick}
  role="group"
>
  {@render children?.()}
</Ark>
