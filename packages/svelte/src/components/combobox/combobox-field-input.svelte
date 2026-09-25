<script lang="ts">
import type { ComboboxInputProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";

type Props = ComboboxInputProps;
let props: Props = $props();
</script>

<ComboboxPrimitive.Input {...props} />
