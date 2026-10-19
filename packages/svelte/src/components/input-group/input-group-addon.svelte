<script lang="ts">
  import type { InputGroupAddonRootContract } from "@pisagor/contracts";
  import { inputGroupAddonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & InputGroupAddonRootContract;

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

<!-- biome-ignore lint/a11y/noStaticElementInteractions: click focuses sibling input; mirrors React InputGroup.Addon -->
<!-- biome-ignore lint/a11y/useKeyWithClickEvents: focus helper only; not a keyboard-operated control -->
<div
  {...rest}
  class={recipe({ align, class: cn(className) })}
  data-align={align}
  data-part="addon"
  data-scope="input-group"
  onclick={handleClick}
>
  {@render children?.()}
</div>
