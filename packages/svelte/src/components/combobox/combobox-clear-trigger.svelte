<script lang="ts">
import type { ComboboxClearTriggerProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";

type Props = ComboboxClearTriggerProps;

let { "aria-label": ariaLabel = "Clear selected value(s)", children, ...rest }: Props = $props();
</script>

<ComboboxPrimitive.ClearTrigger {...rest} aria-label={ariaLabel}>
  {@render children?.()}
</ComboboxPrimitive.ClearTrigger>
