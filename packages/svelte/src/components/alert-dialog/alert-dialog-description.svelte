<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogDescriptionProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogDescriptionProps = $props();
  const part = withContext(() => rest, { name: "Description" });
</script>

<AlertDialogPrimitive.Description {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.Description>
