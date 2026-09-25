<script lang="ts">
import type { ComponentProps, Snippet } from "svelte";
import TimelineContent from "./timeline-content.svelte";
import TimelineDescription from "./timeline-description.svelte";
import TimelineIndicator from "./timeline-indicator.svelte";
import TimelineItem from "./timeline-item.svelte";
import TimelineRoot from "./timeline-root.svelte";
import TimelineSeparator from "./timeline-separator.svelte";
import TimelineTitle from "./timeline-title.svelte";

type PresetItem = {
  description?: string | Snippet;
  id?: string;
  indicator?: Snippet;
  title: string | Snippet;
};

type Props = Omit<ComponentProps<typeof TimelineRoot>, "children"> & {
  items?: PresetItem[];
};

let { items = [], ...rest }: Props = $props();
</script>

<TimelineRoot {...rest}>
  {#each items as item, index (item.id ?? (typeof item.title === "string" ? item.title : index))}
    <TimelineItem>
      <TimelineSeparator />
      <TimelineIndicator>
        {#if item.indicator}
          {@render item.indicator()}
        {/if}
      </TimelineIndicator>
      <TimelineContent>
        <TimelineTitle>
          {#if typeof item.title === "string"}
            {item.title}
          {:else}
            {@render item.title()}
          {/if}
        </TimelineTitle>
        {#if item.description}
          <TimelineDescription>
            {#if typeof item.description === "string"}
              {item.description}
            {:else}
              {@render item.description()}
            {/if}
          </TimelineDescription>
        {/if}
      </TimelineContent>
    </TimelineItem>
  {/each}
</TimelineRoot>
