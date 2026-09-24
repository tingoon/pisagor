<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogTrigger from "../dialog/dialog-trigger.svelte";

type Props = ComponentProps<typeof DialogTrigger>;
let props: Props = $props();
</script>

<DialogTrigger {...props} />
