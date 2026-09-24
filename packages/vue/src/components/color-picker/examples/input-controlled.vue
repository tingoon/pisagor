<script lang="ts" setup>
import { Input } from "@pisagor/vue";
import { ref } from "vue";
import { ColorPicker } from "..";

const value = ref("#eb5e41");
const onValueChange = setValue;
</script>

<template>
  <div class="flex flex-col gap-2">
    <ColorPicker :value="value" @value-change="onValueChange">
      <ColorPicker.Control>
        <ColorPicker.Input as-child>
          <Input />
        </ColorPicker.Input>
      </ColorPicker.Control>
    </ColorPicker>
    <p class="text-center text-muted-foreground text-sm">{{ hexValue }}</p>
  </div>
</template>
