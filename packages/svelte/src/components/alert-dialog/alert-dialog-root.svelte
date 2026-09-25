<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogRoot from "../dialog/dialog-root.svelte";

type Props = ComponentProps<typeof DialogRoot>;

let { children, ...rest }: Props = $props();
</script>

<DialogRoot {...rest} role="alertdialog"> {@render children?.()} </DialogRoot>
