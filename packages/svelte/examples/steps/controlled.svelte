<script lang="ts">
import { Button, Steps } from "@pisagor/svelte";

const items = [
  {
    content: "Please provide your name and email address.",
    title: "Your details",
  },
  { content: "A few details about your company.", title: "Company details" },
  {
    content: "Start collaborating with your team.",
    title: "Invite your team",
  },
];

let step = $state(0);
</script>

<div class="flex flex-col gap-2">
  <Steps
    class="w-full"
    count={items.length}
    onStepChange={(details) => (step = details.step)}
    {step}
  >
    <Steps.List>
      {#each items as item, index}
        <Steps.Item {index}>
          <Steps.Trigger>
            <Steps.Indicator>{index + 1}</Steps.Indicator>
            <Steps.Title>{item.title}</Steps.Title>
          </Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
      {/each}
    </Steps.List>

    {#each items as item, index}
      <Steps.Content {index}>
        <p class="text-muted-foreground">{item.content}</p>
      </Steps.Content>
    {/each}

    <Steps.CompletedContent>
      <p class="text-muted-foreground">All steps completed.</p>
    </Steps.CompletedContent>
  </Steps>
  <div class="flex gap-2">
    <Button onclick={() => (step = Math.max(0, step - 1))} variant="outline">
      Back
    </Button>
    <Button onclick={() => (step = Math.min(items.length, step + 1))}>
      Next
    </Button>
    <Button onclick={() => (step = 0)} variant="ghost">Reset</Button>
  </div>
</div>
