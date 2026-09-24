<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxItemGroupLabel from "../combobox/combobox-item-group-label.svelte";

type Props = ComponentProps<typeof ComboboxItemGroupLabel>;
let props: Props = $props();
</script>

<ComboboxItemGroupLabel {...props} />
