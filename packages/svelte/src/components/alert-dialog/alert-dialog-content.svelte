<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<AlertDialogPrimitive.Content {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.Content>
