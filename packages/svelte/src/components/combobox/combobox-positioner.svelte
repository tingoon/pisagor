<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxPositionerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: ComboboxPositionerProps = $props();
</script>

<ComboboxPrimitive.Positioner {...rest}>
  {@render children?.()}
</ComboboxPrimitive.Positioner>
