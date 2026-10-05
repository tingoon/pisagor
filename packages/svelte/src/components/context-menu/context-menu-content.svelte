<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownPart from "../dropdown-menu/dropdown-menu-content.svelte";

let props: ComponentProps<typeof DropdownPart> = $props();
</script>

<DropdownPart {...props} />
