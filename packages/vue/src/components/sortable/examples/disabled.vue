<script setup lang="ts">
import { Sortable } from "..";

const _labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

import { ref } from "vue";

const items = ref(["a", "b", "c"]);
const onValueChange = setItems;
</script>

<template>
        <Sortable disabled :items="items" @value-change="onValueChange">
          <Sortable.Item v-for="id in items" :key="id" :value="id">
            <Sortable.ItemContent>
              <Sortable.Handle />
              <span class="font-medium text-sm">{{ labels[id] }}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        </Sortable>
  
</template>
