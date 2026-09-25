<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { Steps } from "..";

const items = [
  { description: "Personal", title: "Info" },
  { description: "Company", title: "Docs" },
  { description: "Create", title: "Team" },
];
</script>

<template>
  <Steps class="h-64" orientation="vertical" :count="items.length">
    <Steps.List>
      <Steps.Item
        v-for="(item, index) in items"
        :key="item.title"
        :index="index"
      >
        <Steps.Trigger>
          <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
          <span class="flex flex-col items-start gap-1">
            <Steps.Title>{{ item.title }}</Steps.Title>
            <Steps.Description>{{ item.description }}</Steps.Description>
          </span>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>
    <div class="flex flex-1 flex-col gap-2">
      <Steps.Content
        class="flex h-full items-center justify-center rounded-md border"
        v-for="(item, index) in items"
        :key="item.title"
        :index="index"
      >
        <p class="text-muted-foreground">{{ item.description }}</p>
      </Steps.Content>
      <Steps.CompletedContent
        class="flex h-full items-center justify-center rounded-md border"
      >
        <p class="text-muted-foreground">Completed</p>
      </Steps.CompletedContent>
      <div class="flex flex-row-reverse gap-2">
        <Steps.NextTrigger as-child>
          <Button variant="outline">
            Next
            <PhCaretRight />
          </Button>
        </Steps.NextTrigger>
        <Steps.PrevTrigger as-child>
          <Button variant="outline">
            <PhCaretLeft />
            Back
          </Button>
        </Steps.PrevTrigger>
      </div>
    </div>
  </Steps>
</template>
