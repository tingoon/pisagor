<script lang="ts">
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";
  import AlertDialogCloseTrigger from "./alert-dialog-close-trigger.svelte";

  /** Confirming action: a close trigger rendered as a `Button`. */
  type Props = ComponentProps<typeof Button>;

  let { variant = "default", children, ...rest }: Props = $props();
</script>

<AlertDialogCloseTrigger>
  {#snippet asChild(props)}
    <Button {...props()} {...rest} {variant}>{@render children?.()}</Button>
  {/snippet}
</AlertDialogCloseTrigger>
