<script lang="ts">
import type { AnnouncementProps as BaseAnnouncementProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./announcement.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title" | "role"> & {
  children?: import("svelte").Snippet;
  role?: "status" | "alert";
} & BaseAnnouncementProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, {
  defaultProps: { role: "status" },
  name: "Root",
  slot: "base",
});
</script>

<div {...root.props}>
  {@render children?.()}
</div>
