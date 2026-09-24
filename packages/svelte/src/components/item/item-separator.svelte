<script lang="ts">
import { itemRecipe } from "@pisagor/recipes/item";
import { cn } from "@pisagor/utils";
import Separator from "../separator/separator.svelte";

type Props = {
  class?: string | undefined;
  recipe?: typeof itemRecipe;
};

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
