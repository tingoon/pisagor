<script lang="ts">
  import type { FieldRootContract } from "@pisagor/props";
  import { fieldRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { Context } from "./field.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
  } & FieldRootContract;

  let {
    recipe = fieldRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<div
  {...rest}
  class={slots.group({ class: cn(className) })}
  data-part="group"
  data-scope="field"
>
  {@render children?.()}
</div>
