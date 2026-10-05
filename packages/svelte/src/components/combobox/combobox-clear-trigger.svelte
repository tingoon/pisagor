<script lang="ts">
import {
  type ComboboxClearTriggerProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";

let {
  "aria-label": ariaLabel = "Clear selected value(s)",
  children,
  ...rest
}: ComboboxClearTriggerProps = $props();
</script>

<ComboboxPrimitive.ClearTrigger {...rest} aria-label={ariaLabel}>
  {@render children?.()}
</ComboboxPrimitive.ClearTrigger>
