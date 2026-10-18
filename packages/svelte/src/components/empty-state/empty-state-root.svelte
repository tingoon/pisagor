<script lang="ts">
  import type { EmptyStateProps as BaseEmptyStateProps } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import type { SizeScaleProps } from "../../internal";
  import { withProvider } from "./empty-state.context";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    children?: import("svelte").Snippet;
  } & BaseEmptyStateProps &
    SizeScaleProps;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>
  {@render children?.()}
</div>
