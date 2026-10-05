<script lang="ts">
import {
  type SelectClearTriggerProps,
  Select as SelectPrimitive,
} from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useSelectRoot } from "./select.context";

let { class: className, children, ...rest }: SelectClearTriggerProps = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ClearTrigger
  {...rest}
  aria-label="Clear selected value(s)"
  class={slots.clearTrigger({ class: cn(className) })}
>
  {@render children?.()}
</SelectPrimitive.ClearTrigger>
