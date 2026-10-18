<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogTitleProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogTitleProps = $props();
  const part = withContext(() => rest, { name: "Title" });
</script>

<DialogPrimitive.Title {...part.props}>
  {@render children?.()}
</DialogPrimitive.Title>
