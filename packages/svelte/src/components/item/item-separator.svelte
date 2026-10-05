<script lang="ts">
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ClassValue } from "svelte/elements";
import Separator from "../separator/separator.svelte";

type Props = { class?: ClassValue } & BaseItemProps;

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
