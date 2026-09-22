<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Steps } from "..";

const step = ref(0);
const items = [
  {
    content: "Please provide your name and email address.",
    title: "Your details",
  },
  { content: "A few details about your company.", title: "Company details" },
  { content: "Start collaborating with your team.", title: "Invite your team" },
];

function onStepChange(details: { step: number }) {
  step.value = details.step;
}
function next() {
  step.value = Math.min(items.length, step.value + 1);
}
function back() {
  step.value = Math.max(0, step.value - 1);
}
function reset() {
  step.value = 0;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Steps class="w-full" :count="items.length" :step="step" @step-change="onStepChange">
      <Steps.List>
        <Steps.Item v-for="(item, index) in items" :key="item.title" :index="index">
          <Steps.Trigger>
            <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
            <Steps.Title>{{ item.title }}</Steps.Title>
          </Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
      </Steps.List>

      <Steps.Content v-for="(item, index) in items" :key="item.title" :index="index">
        <p class="text-muted-foreground">{{ item.content }}</p>
      </Steps.Content>

      <Steps.CompletedContent>
        <p class="text-muted-foreground">All steps completed.</p>
      </Steps.CompletedContent>
    </Steps>
    <div class="flex gap-2">
      <Button variant="outline" @click="back">Back</Button>
      <Button @click="next">Next</Button>
      <Button variant="ghost" @click="reset">Reset</Button>
    </div>
  </div>
</template>
