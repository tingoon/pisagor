<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogBackdropProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogBackdropProps = $props();
  const part = withContext(() => rest, { name: "Backdrop" });
</script>

<AlertDialogPrimitive.Backdrop {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.Backdrop>
