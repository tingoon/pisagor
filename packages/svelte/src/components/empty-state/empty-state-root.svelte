<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { EmptyStateRootContract } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";

  import { withProvider } from "./empty-state.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & EmptyStateRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<Ark as="div" {...root.props}>
  {@render children?.()}
</Ark>
