<script lang="ts">
import { Steps } from "@pisagor/svelte";

const items = [
  { description: "Personal", title: "Info" },
  { description: "Company", title: "Docs" },
  { description: "Create", title: "Team" },
];
</script>

<Steps count={items.length}>
  <Steps.List>
    {#each items as item}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>{index + 1}</Steps.Indicator>
          <div class="flex flex-col items-start gap-1">
            <Steps.Title>{item.title}</Steps.Title>
            <Steps.Description>{item.description}</Steps.Description>
          </div>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>
</Steps>
