<script lang="ts">
import type { SelectClearTriggerProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import { useSelectRoot } from "./select.context";

type Props = Omit<SelectClearTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
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
