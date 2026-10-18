<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogDescriptionProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogDescriptionProps = $props();
  const part = withContext(() => rest, { name: "Description" });
</script>

<DialogPrimitive.Description {...part.props}>
  {@render children?.()}
</DialogPrimitive.Description>
