<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownMenuShortcut from "../dropdown-menu/dropdown-menu-shortcut.svelte";

type Props = ComponentProps<typeof DropdownMenuShortcut>;
let { ...rest }: Props = $props();
</script>

<DropdownMenuShortcut {...rest} data-part="shortcut" data-scope="context-menu" />
