<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownMenuShortcut from "../dropdown-menu/dropdown-menu-shortcut.svelte";

let { ...rest }: ComponentProps<typeof DropdownMenuShortcut> = $props();
</script>

<DropdownMenuShortcut
  {...rest}
  data-part="shortcut"
  data-scope="context-menu"
/>
