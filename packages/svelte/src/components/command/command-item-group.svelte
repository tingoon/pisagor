<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxItemGroup from "../combobox/combobox-item-group.svelte";

type Props = ComponentProps<typeof ComboboxItemGroup>;
let props: Props = $props();
</script>

<ComboboxItemGroup {...props} />
