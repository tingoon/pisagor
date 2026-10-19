<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<ComboboxPrimitive.Trigger {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Trigger>
