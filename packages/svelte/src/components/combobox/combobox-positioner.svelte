<script lang="ts">
import {
  type ComboboxPositionerProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";

let { children, ...rest }: ComboboxPositionerProps = $props();
</script>

<ComboboxPrimitive.Positioner {...rest}>
  {@render children?.()}
</ComboboxPrimitive.Positioner>
