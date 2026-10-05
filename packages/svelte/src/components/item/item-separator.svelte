<script lang="ts">
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import Separator from "../separator/separator.svelte";

type Props = {
  class?: string | undefined;
} & BaseItemProps;

let { recipe = itemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());
</script>

<Separator
  {...rest}
  class={slots.separator({ class: className })}
  data-part="separator"
  data-scope="item"
  orientation="horizontal"
/>
