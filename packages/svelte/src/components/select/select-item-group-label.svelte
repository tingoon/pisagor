<script lang="ts">
import type { SelectItemGroupLabelProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import { useSelectRoot } from "./select.context";

type Props = Omit<SelectItemGroupLabelProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ItemGroupLabel {...rest} class={slots.itemGroupLabel({ class: cn(className) })}>
  {@render children?.()}
</SelectPrimitive.ItemGroupLabel>
