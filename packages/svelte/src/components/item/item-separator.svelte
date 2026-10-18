<script lang="ts">
  import type { ItemRootContract } from "@pisagor/props";
  import { itemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { ClassValue } from "svelte/elements";
  import Separator from "../separator.svelte";

  type Props = { class?: ClassValue } & ItemRootContract;

  let { recipe = itemRecipe, class: className, ...rest }: Props = $props();

  const slots = $derived(recipe());
</script>

<Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="item"
  orientation="horizontal"
/>
