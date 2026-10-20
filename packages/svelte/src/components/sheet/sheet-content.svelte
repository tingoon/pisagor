<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./sheet.context";

  let { children, ...rest }: DialogContentProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "dialog" },
    name: "Content",
  });
</script>

<DialogPrimitive.Content {...part.props}>
  {@render children?.()}
</DialogPrimitive.Content>
