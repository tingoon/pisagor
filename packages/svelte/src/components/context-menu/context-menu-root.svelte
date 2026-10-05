<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownMenuRoot from "../dropdown-menu/dropdown-menu-root.svelte";

let props: ComponentProps<typeof DropdownMenuRoot> = $props();
</script>

<DropdownMenuRoot {...props} />
