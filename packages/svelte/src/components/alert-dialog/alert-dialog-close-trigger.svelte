<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogCloseTrigger from "../dialog/dialog-close-trigger.svelte";

let props: ComponentProps<typeof DialogCloseTrigger> = $props();
</script>

<DialogCloseTrigger {...props} />
