<script lang="ts" setup >
import { createListCollection } from "@ark-ui/vue/collection";
import { computed } from "vue";
import { Select } from "..";

const collection = createListCollection({
  groupBy: (item) => item.category,
  items: [
    { category: "Frontend", label: "Next.js", value: "next" },
    { category: "Frontend", label: "Vite", value: "vite" },
    { category: "Frontend", label: "Astro", value: "astro" },
    { category: "Backend", label: "Express", value: "express" },
    { category: "Backend", label: "Fastify", value: "fastify" },
    { category: "Backend", label: "NestJS", value: "nestjs" },
  ],
});

const groups = computed(() => collection.group().map(([category, items]) => ({ category, items })));
</script>

<template>
        <Select.Root :collection="collection">
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.Content>
            <Select.ItemGroup v-for="group in groups" :key="group.category" :heading="group.category">
              <Select.Item v-for="item in group.items" :key="item.value" :item="item">
                {{ item.label }}
              </Select.Item>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Root>
  
</template>
