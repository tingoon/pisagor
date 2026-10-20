<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<DialogPrimitive.Content {...part.props}>
  {@render children?.()}
</DialogPrimitive.Content>
