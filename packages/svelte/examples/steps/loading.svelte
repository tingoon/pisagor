<script lang="ts">
import { Steps } from "@pisagor/svelte/steps";
import CircleNotchIcon from "phosphor-svelte/lib/CircleNotchIcon";

const items = [
  { id: "step-1", loading: true },
  { id: "step-2", loading: false },
  { id: "step-3", loading: false },
];
</script>

<Steps count={items.length}>
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger disabled>
          <Steps.Indicator>
            {#if item.loading}
              <CircleNotchIcon class="animate-spin" />
            {:else}
              {index + 1}
            {/if}
          </Steps.Indicator>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>
</Steps>
