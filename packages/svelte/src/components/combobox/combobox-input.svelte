<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxInputProps = $props();
  const part = withContext(() => rest, { name: "Input" });
</script>

<ComboboxPrimitive.Input {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Input>
