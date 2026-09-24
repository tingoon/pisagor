<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownPart from "../dropdown-menu/dropdown-menu-item-group.svelte";

type Props = ComponentProps<typeof DropdownPart>;
let props: Props = $props();
</script>

<DropdownPart {...props} />
