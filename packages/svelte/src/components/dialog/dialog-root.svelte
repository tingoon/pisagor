<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogRootProps,
  } from "@ark-ui/svelte";
  import type { DialogRootContract } from "@pisagor/contracts";
  import { withProvider } from "./dialog.context";

  type Props = DialogRootProps & DialogRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<DialogPrimitive.Root {...root.props}>
  {@render children?.()}
</DialogPrimitive.Root>
