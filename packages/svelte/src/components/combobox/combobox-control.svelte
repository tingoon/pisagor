<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<ComboboxPrimitive.Control {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Control>
