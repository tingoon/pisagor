<script lang="ts">
import type { AlertProps as BaseAlertProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./alert.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  children?: import("svelte").Snippet;
} & BaseAlertProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>
  {@render children?.()}
</div>
