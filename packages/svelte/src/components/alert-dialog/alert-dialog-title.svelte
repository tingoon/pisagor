<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogTitle from "../dialog/dialog-title.svelte";

let props: ComponentProps<typeof DialogTitle> = $props();
</script>

<DialogTitle {...props} />
