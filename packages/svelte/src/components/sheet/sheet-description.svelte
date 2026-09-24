<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogDescription from "../dialog/dialog-description.svelte";

type Props = ComponentProps<typeof DialogDescription>;
let props: Props = $props();
</script>

<DialogDescription {...props} />
