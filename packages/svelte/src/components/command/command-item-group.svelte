<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxItemGroup from "../combobox/combobox-item-group.svelte";

let props: ComponentProps<typeof ComboboxItemGroup> = $props();
</script>

<ComboboxItemGroup {...props} />
