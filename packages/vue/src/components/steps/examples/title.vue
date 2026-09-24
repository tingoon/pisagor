<script lang="ts" setup>
import { Steps } from "..";

const items = ["Info", "Docs", "Team"];
</script>

<template>
  <Steps :count="items.length">
    <Steps.List>
      <Steps.Item v-for="(item, index) in items" :key="item" :index="index">
        <Steps.Trigger>
          <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
          <Steps.Title>{{ item }}</Steps.Title>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>
  </Steps>
</template>
