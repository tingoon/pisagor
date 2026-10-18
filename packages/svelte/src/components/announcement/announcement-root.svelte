<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { AnnouncementProps as BaseAnnouncementProps } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./announcement.context";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "role"> & {
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

<Ark as="div" {...root.props}>
  {@render children?.()}
</Ark>
