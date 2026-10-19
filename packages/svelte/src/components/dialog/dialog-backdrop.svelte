<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogBackdropProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogBackdropProps = $props();
  const part = withContext(() => rest, { name: "Backdrop" });
</script>

<DialogPrimitive.Backdrop {...part.props}>
  {@render children?.()}
</DialogPrimitive.Backdrop>
