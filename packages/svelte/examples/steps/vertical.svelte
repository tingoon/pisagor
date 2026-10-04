<script lang="ts">
import { Button, Steps } from "@pisagor/svelte";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";

const items = [
  { description: "Personal", title: "Info" },
  { description: "Company", title: "Docs" },
  { description: "Create", title: "Team" },
];
</script>

<Steps class="h-64" count={items.length} orientation="vertical">
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>{index + 1}</Steps.Indicator>
          <span class="flex flex-col items-start gap-1">
            <Steps.Title>{item.title}</Steps.Title>
            <Steps.Description>{item.description}</Steps.Description>
          </span>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>
  <div class="flex flex-1 flex-col gap-2">
    {#each items as item, index}
      <Steps.Content
        class="flex h-full items-center justify-center rounded-md border"
        {index}
      >
        <p class="text-muted-foreground">{item.description}</p>
      </Steps.Content>
    {/each}
    <Steps.CompletedContent
      class="flex h-full items-center justify-center rounded-md border"
    >
      <p class="text-muted-foreground">Completed</p>
    </Steps.CompletedContent>
    <div class="flex flex-row-reverse gap-2">
      <Steps.NextTrigger>
        {#snippet asChild(
          props,
        )}
          <Button {...props()} variant="outline">
            Next
            <CaretRightIcon />
          </Button>
        {/snippet}
      </Steps.NextTrigger>
      <Steps.PrevTrigger>
        {#snippet asChild(
          props,
        )}
          <Button {...props()} variant="outline">
            <CaretLeftIcon />
            Back
          </Button>
        {/snippet}
      </Steps.PrevTrigger>
    </div>
  </div>
</Steps>
