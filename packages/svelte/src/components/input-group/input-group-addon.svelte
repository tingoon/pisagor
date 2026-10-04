<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { InputGroupAddonProps as BaseInputGroupAddonProps } from "@pisagor/props";
import { inputGroupAddonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  {
    children?: import("svelte").Snippet;
    class?: string | undefined;
  } & BaseInputGroupAddonProps;

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
>
  {@render children?.()}
</Ark>
