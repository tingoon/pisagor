<script lang="ts">
import { Steps } from "@pisagor/svelte";

const items = ["Info", "Docs", "Team"];
</script>

<Steps count={items.length}>
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>{index + 1}</Steps.Indicator>
          <Steps.Title>{item}</Steps.Title>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>
</Steps>
