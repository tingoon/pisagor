<script lang="ts">
import {
  type ComboboxInputProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";

let props: ComboboxInputProps = $props();
</script>

<ComboboxPrimitive.Input {...props} />
