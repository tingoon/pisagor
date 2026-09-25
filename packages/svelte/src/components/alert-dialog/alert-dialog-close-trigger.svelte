<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogCloseTrigger from "../dialog/dialog-close-trigger.svelte";

type Props = ComponentProps<typeof DialogCloseTrigger>;
let props: Props = $props();
</script>

<DialogCloseTrigger {...props} />
