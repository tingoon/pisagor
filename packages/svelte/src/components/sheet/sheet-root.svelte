<script lang="ts">
  import type { SheetRootContract } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import DialogRoot from "../dialog/dialog-root.svelte";
  import { withProvider } from "./sheet.context";

  // Sheet is a Dialog with edge placement: the root also opens Dialog's styles
  // context, so shared parts (header, title, …) are Dialog's own and the
  // sheet-specific slots layer on top of them.
  type Props = Omit<ComponentProps<typeof DialogRoot>, "recipe"> &
    SheetRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<DialogRoot {...root.props}>{@render children?.()}</DialogRoot>
