<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { LinkBoxRootContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./link-box.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & LinkBoxRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<Ark as="div" {...root.props}>
  {@render children?.()}
</Ark>
