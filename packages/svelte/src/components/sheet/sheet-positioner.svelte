<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./sheet.context";

  let { children, ...rest }: DialogPositionerProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "dialog" },
    name: "Positioner",
  });
</script>

<DialogPrimitive.Positioner {...part.props}>
  {@render children?.()}
</DialogPrimitive.Positioner>
