<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogHeader from "../dialog/dialog-header.svelte";

type Props = ComponentProps<typeof DialogHeader>;
let props: Props = $props();
</script>

<DialogHeader {...props} data-part="header" data-scope="sheet" />
