<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxItemGroupLabel from "../combobox/combobox-item-group-label.svelte";

let props: ComponentProps<typeof ComboboxItemGroupLabel> = $props();
</script>

<ComboboxItemGroupLabel {...props} />
