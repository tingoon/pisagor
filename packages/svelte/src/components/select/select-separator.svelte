<script lang="ts">
import { selectRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import Separator from "../separator.svelte";
import { useSelectRoot } from "./select.context";

let { class: className, ...rest }: ComponentProps<typeof Separator> = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="select"
/>
