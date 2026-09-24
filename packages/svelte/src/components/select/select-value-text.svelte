<script lang="ts">
import type { SelectValueTextProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import { useSelectRoot } from "./select.context";

type Props = Omit<SelectValueTextProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ValueText {...rest} class={slots.valueText({ class: cn(className) })} />
