<script setup lang="ts">
import { ref } from "vue";

import { Accordion } from "..";
import { shortFaqItems } from "./helpers";

const value = ref(["item-1"]);
const items = shortFaqItems();
const onValueChange = ({ value }) => setValue(value);
</script>

<template>
        <div>
          <Accordion :items="items" @value-change="onValueChange" :value="value" />
          <div class="text-center text-muted-foreground text-sm">{{ value }}</div>
        </div>
  
</template>
