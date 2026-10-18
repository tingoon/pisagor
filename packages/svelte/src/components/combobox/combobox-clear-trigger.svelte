<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxClearTriggerProps,
  } from "@ark-ui/svelte";
  import { useMessageResolver } from "../provider/context";

  const t = useMessageResolver();

  let {
    "aria-label": ariaLabel = t("select.clear"),
    children,
    ...rest
  }: ComboboxClearTriggerProps = $props();
</script>

<ComboboxPrimitive.ClearTrigger {...rest} aria-label={ariaLabel}>
  {@render children?.()}
</ComboboxPrimitive.ClearTrigger>
