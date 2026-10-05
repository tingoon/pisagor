<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogRoot from "../dialog/dialog-root.svelte";

let { children, ...rest }: ComponentProps<typeof DialogRoot> = $props();
</script>

<DialogRoot {...rest} role="alertdialog"> {@render children?.()} </DialogRoot>
