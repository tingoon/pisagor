<script lang="ts">
import type { AnnouncementProps as BaseAnnouncementProps } from "@pisagor/props";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import AnnouncementRoot from "./announcement-root.svelte";
import AnnouncementTitle from "./announcement-title.svelte";

type Props = Omit<
  HTMLAttributes<HTMLDivElement>,
  "class" | "title" | "children" | "role"
> & {
  badge?: Snippet;
  class?: string | undefined;
  role?: "status" | "alert";
  title?: string | Snippet;
} & BaseAnnouncementProps;

let { badge, title, class: className, recipe, role, ...rest }: Props = $props();
</script>

<AnnouncementRoot {...rest} class={className} {recipe} {role}>
  {#if badge}
    {@render badge()}
  {/if}
  {#if title !== undefined}
    <AnnouncementTitle>
      {#if typeof title === "string"}
        {title}
      {:else}
        {@render title()}
      {/if}
    </AnnouncementTitle>
  {/if}
</AnnouncementRoot>
