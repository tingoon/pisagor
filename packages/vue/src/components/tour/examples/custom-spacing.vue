<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { Tour } from "..";

const steps = [
  {
    actions: [{ action: "next", label: "Next" }],
    description:
      "`Tour.Content` uses `[--space:--spacing(2)]` here for tighter padding than the default.",
    id: "step-1",
    title: "Custom spacing",
    type: "dialog",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description:
      "You can pair `[--space]` with responsive variants, for example `md:[--space:--spacing(6)]`.",
    id: "step-2",
    title: "Breakpoint utilities",
    type: "dialog",
  },
];
</script>

<template>
  <Tour :steps="steps">
    <Tour.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Tour.Trigger>
    <Tour.Content class="[--space:--spacing(2)]">
      <Tour.Header>
        <Tour.ProgressText />
        <Tour.Title />
        <Tour.Description />
      </Tour.Header>
      <Tour.Footer>
        <Tour.PreviousStep />
        <Tour.NextStep />
      </Tour.Footer>
    </Tour.Content>
  </Tour>
</template>
