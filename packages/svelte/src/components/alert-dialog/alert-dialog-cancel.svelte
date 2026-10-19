<script lang="ts">
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";
  import AlertDialogCloseTrigger from "./alert-dialog-close-trigger.svelte";

  /** Dismissing action: a close trigger rendered as an outline `Button`. */
  type Props = Omit<ComponentProps<typeof Button>, "variant">;

  let { children, ...rest }: Props = $props();
</script>

<AlertDialogCloseTrigger>
  {#snippet asChild(props)}
    <Button {...props()} {...rest} variant="outline">
      {@render children?.()}
    </Button>
  {/snippet}
</AlertDialogCloseTrigger>
