<script lang="ts">
import {
  Select as SelectPrimitive,
  type SelectValueTextProps,
} from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useSelectRoot } from "./select.context";

let { class: className, ...rest }: SelectValueTextProps = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ValueText
  {...rest}
  class={slots.valueText({ class: cn(className) })}
/>
