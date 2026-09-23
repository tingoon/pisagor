<script lang="ts" setup >
import { PhCircleNotch } from "@phosphor-icons/vue";
import { Steps } from "..";

const items = [
  { id: "step-1", loading: true },
  { id: "step-2", loading: false },
  { id: "step-3", loading: false },
];
</script>

<template>
        <Steps :count="items.length">
          <Steps.List>
            <Steps.Item v-for="(item, index) in items" :key="item.id" :index="index">
              <Steps.Trigger disabled>
                <Steps.Indicator>
                  <PhCircleNotch class="animate-spin" v-if="item.loading" />
                  <template v-else>{{ index + 1 }}</template>
                </Steps.Indicator>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          </Steps.List>
        </Steps>
  
</template>
