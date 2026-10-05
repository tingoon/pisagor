<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogDescription from "../dialog/dialog-description.svelte";

let props: ComponentProps<typeof DialogDescription> = $props();
</script>

<DialogDescription {...props} />
