<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import AnnouncementRoot from "./announcement-root.svelte";
import AnnouncementTitle from "./announcement-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title" | "children" | "role"> & {
  badge?: Snippet;
  class?: string | undefined;
  recipe?: typeof import("@pisagor/recipes/announcement").announcementRecipe;
  role?: "status" | "alert";
  title?: string | Snippet;
};

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
