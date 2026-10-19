<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogRootProps,
  } from "@ark-ui/svelte";
  import type { AlertDialogRootContract } from "@pisagor/contracts";
  import { withProvider } from "./alert-dialog.context";

  type Props = DialogRootProps & AlertDialogRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, {
    defaultProps: { role: "alertdialog" },
    name: "Root",
  });
</script>

<AlertDialogPrimitive.Root {...root.props}>
  {@render children?.()}
</AlertDialogPrimitive.Root>
