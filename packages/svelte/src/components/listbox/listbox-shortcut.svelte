<script lang="ts">
  import { dropdownMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLSpanElement> & {
    children?: Snippet;
  };

  let { class: className, children, ...rest }: Props = $props();
  const slots = dropdownMenuRecipe();
</script>

<span
  {...rest}
  class={slots.shortcut({ class: cn(className) })}
  data-part="shortcut"
  data-scope="listbox"
>
  {@render children?.()}
</span>
