<script lang="ts">
import {
  type ComboboxClearTriggerProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";
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
