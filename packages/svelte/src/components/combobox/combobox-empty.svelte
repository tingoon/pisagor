<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxEmptyProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxEmptyProps = $props();
  const part = withContext(() => rest, { name: "Empty" });
</script>

<ComboboxPrimitive.Empty {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Empty>
