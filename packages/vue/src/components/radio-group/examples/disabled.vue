<script lang="ts" setup >
import { RadioGroup } from "..";

const allDisabledItems = [
  { disabled: true, label: "React", value: "react" },
  { disabled: true, label: "Solid", value: "solid" },
  { disabled: true, label: "Vue", value: "vue" },
];
const partiallyDisabledItems = [
  { label: "React", value: "react" },
  { disabled: true, label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
];
</script>

<template>
        <div class="flex flex-wrap gap-8">
          <RadioGroup default-value="1" :items="partiallyDisabledItems" />
          <RadioGroup disabled :items="allDisabledItems" />
        </div>
  
</template>
