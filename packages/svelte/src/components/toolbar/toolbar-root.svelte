<script lang="ts">
  import type { ToolbarRootContract } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./toolbar.context";

  type Props = HTMLAttributes<HTMLDivElement> & ToolbarRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>
  {@render children?.()}
</div>
