<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<DialogPrimitive.Positioner {...part.props}>
  {@render children?.()}
</DialogPrimitive.Positioner>
