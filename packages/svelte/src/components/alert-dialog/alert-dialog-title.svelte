<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogTitleProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogTitleProps = $props();
  const part = withContext(() => rest, { name: "Title" });
</script>

<AlertDialogPrimitive.Title {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.Title>
