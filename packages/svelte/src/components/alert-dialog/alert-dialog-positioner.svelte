<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<AlertDialogPrimitive.Positioner {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.Positioner>
