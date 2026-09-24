<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogTitle from "../dialog/dialog-title.svelte";

type Props = ComponentProps<typeof DialogTitle>;
let props: Props = $props();
</script>

<DialogTitle {...props} />
