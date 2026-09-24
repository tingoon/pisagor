<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogBackdrop from "../dialog/dialog-backdrop.svelte";

type Props = ComponentProps<typeof DialogBackdrop>;
let props: Props = $props();
</script>

<DialogBackdrop {...props} />
