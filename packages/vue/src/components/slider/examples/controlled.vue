<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { Slider } from "..";

const value = ref([40]);
const onValueChange = setValue;
</script>

<template>
        <div class="flex flex-col gap-2">
          <p class="text-center text-sm">Greater than 80</p>
          <Field>
            <Slider label="Temperature" show-value :on-value-change="onValueChange" :value="value" />
          </Field>
          <p class="text-center">{{ isGreaterThan80 ? "✅" : "❌" }}</p>
        </div>
  
</template>
