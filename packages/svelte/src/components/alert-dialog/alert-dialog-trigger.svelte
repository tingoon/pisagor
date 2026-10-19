<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogTriggerProps = $props();
  // Zag looks triggers up by `[data-scope="dialog"]`, so keep the Ark scope.
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "dialog" },
    name: "Trigger",
  });
</script>

<AlertDialogPrimitive.Trigger {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.Trigger>
