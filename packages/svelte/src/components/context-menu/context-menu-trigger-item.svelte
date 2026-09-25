<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownPart from "../dropdown-menu/dropdown-menu-trigger-item.svelte";

type Props = ComponentProps<typeof DropdownPart>;
let props: Props = $props();
</script>

<DropdownPart {...props} />
