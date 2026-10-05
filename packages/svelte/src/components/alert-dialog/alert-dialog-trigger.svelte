<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogTrigger from "../dialog/dialog-trigger.svelte";

let props: ComponentProps<typeof DialogTrigger> = $props();
</script>

<DialogTrigger {...props} />
