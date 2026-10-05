<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownPart from "../dropdown-menu/dropdown-menu-trigger-item.svelte";

let props: ComponentProps<typeof DropdownPart> = $props();
</script>

<DropdownPart {...props} />
