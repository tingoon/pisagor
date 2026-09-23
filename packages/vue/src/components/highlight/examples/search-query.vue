<script lang="ts" setup >
import { Input } from "@pisagor/vue";
import { ref } from "vue";
import { Highlight } from "..";

const searchResults = ["Spotlight bulb", "Spot cleaner", "Spot ceiling"];
const query = ref("spot");

function onValueChange(details: { value: string }) {
  query.value = details.value;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Input aria-label="Search" placeholder="Search..." :value="query" @value-change="onValueChange" />
    <div class="space-y-2">
      <p class="text-muted-foreground text-sm">Search result for: {{ query || "(empty)" }}</p>
      <ul class="space-y-1">
        <li class="text-base text-foreground" v-for="item in searchResults" :key="item" >
          <Highlight ignore-case v-if="query" :query="query" :text="item" />
          <template v-else>{{ item }}</template>
        </li>
      </ul>
    </div>
  </div>
</template>
