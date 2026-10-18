<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxClearTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";

  const { m } = useLocale();

  let {
    "aria-label": ariaLabel = m("select.clear"),
    children,
    ...rest
  }: ComboboxClearTriggerProps = $props();
</script>

<ComboboxPrimitive.ClearTrigger {...rest} aria-label={ariaLabel}>
  {@render children?.()}
</ComboboxPrimitive.ClearTrigger>
