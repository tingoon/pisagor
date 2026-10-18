<script lang="ts">
  import type { ComponentProps, Snippet } from "svelte";
  import AnnouncementRoot from "./announcement-root.svelte";
  import AnnouncementTitle from "./announcement-title.svelte";

  type Props = Omit<
    ComponentProps<typeof AnnouncementRoot>,
    "title" | "children"
  > & {
    badge?: Snippet;
    title?: string | Snippet;
  };

  let {
    badge,
    title,
    class: className,
    recipe,
    role,
    ...rest
  }: Props = $props();
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
