<script lang="ts">
import type { ToolbarProps as BaseToolbarProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./toolbar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & BaseToolbarProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>
  {@render children?.()}
</div>
