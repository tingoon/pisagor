<script lang="ts">
  import type { InputGroupTextRootContract } from "@pisagor/contracts";
  import { inputGroupTextRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLSpanElement> & {
    children?: import("svelte").Snippet;
  } & InputGroupTextRootContract;

  let {
    recipe = inputGroupTextRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<span
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="text"
  data-scope="input-group"
>
  {@render children?.()}
</span>
