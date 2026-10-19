<script lang="ts">
  import type { FileRootContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./file.context";

  type Props = HTMLAttributes<HTMLDivElement> & FileRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>{@render children?.()}</div>
