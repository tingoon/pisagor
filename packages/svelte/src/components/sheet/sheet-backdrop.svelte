<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogBackdrop from "../dialog/dialog-backdrop.svelte";

let props: ComponentProps<typeof DialogBackdrop> = $props();
</script>

<DialogBackdrop {...props} />
