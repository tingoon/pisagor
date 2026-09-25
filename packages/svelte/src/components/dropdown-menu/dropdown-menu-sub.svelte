<script lang="ts">
import type { ComponentProps } from "svelte";
import DropdownMenuRoot from "./dropdown-menu-root.svelte";

type Props = ComponentProps<typeof DropdownMenuRoot>;
let props: Props = $props();
</script>

<DropdownMenuRoot {...props} />
