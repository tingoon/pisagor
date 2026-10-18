<script lang="ts" setup>
import { PhCreditCard, PhHardDrive, PhUser } from "@phosphor-icons/vue";
import { Steps } from "@pisagor/vue";

const items = [
  { icon: PhUser, id: "user" },
  { icon: PhHardDrive, id: "drive" },
  { icon: PhCreditCard, id: "card" },
];
</script>

<template>
  <Steps :count="items.length">
    <Steps.List>
      <Steps.Item v-for="(item, index) in items" :key="item.id" :index="index">
        <Steps.Trigger>
          <Steps.Indicator>
            <component :is="item.icon" />
          </Steps.Indicator>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>
  </Steps>
</template>
