<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogHeader from "../dialog/dialog-header.svelte";

let props: ComponentProps<typeof DialogHeader> = $props();
</script>

<DialogHeader {...props} data-part="header" data-scope="sheet" />
