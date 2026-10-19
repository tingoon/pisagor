<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<ComboboxPrimitive.Positioner {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Positioner>
