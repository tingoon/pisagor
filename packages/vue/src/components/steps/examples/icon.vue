<script setup lang="ts">
import { Steps } from "..";

const items = [
  { icon: UserIcon, id: "user" },
  { icon: HardDriveIcon, id: "drive" },
  { icon: CreditCardIcon, id: "card" },
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
