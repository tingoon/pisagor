<script lang="ts">
import { Steps } from "../index";
</script>

<Steps count={3}>
  <Steps.List>
    {#each [0, 1, 2] as index (index)}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>{index + 1}</Steps.Indicator>
          <Steps.Title>Step {index + 1}</Steps.Title>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>
  {#each [0, 1, 2] as index (index)}
    <Steps.Content {index}>Content for step {index + 1}</Steps.Content>
  {/each}
  <Steps.CompletedContent>All done</Steps.CompletedContent>
  <div class="flex gap-2">
    <Steps.PrevTrigger>Back</Steps.PrevTrigger>
    <Steps.NextTrigger>Next</Steps.NextTrigger>
  </div>
</Steps>
