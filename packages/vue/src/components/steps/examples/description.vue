<script setup lang="ts">
import { Steps } from "..";

const items = [
  { description: "Personal", title: "Info" },
  { description: "Company", title: "Docs" },
  { description: "Create", title: "Team" },
];
</script>

<template>
        <Steps :count="items.length">
          <Steps.List>
            <Steps.Item v-for="(item, index) in items" :key="item.title" :index="index">
              <Steps.Trigger>
                <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
                <div class="flex flex-col items-start gap-1">
                  <Steps.Title>{{ item.title }}</Steps.Title>
                  <Steps.Description>{{ item.description }}</Steps.Description>
                </div>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          </Steps.List>
        </Steps>
  
</template>
