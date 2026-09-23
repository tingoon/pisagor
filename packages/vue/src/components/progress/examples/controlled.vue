<script lang="ts" setup >
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Progress } from "..";

const value = ref(50);
</script>

<template>
        <div class="flex w-full flex-col gap-2">
          <div class="flex items-center gap-2 font-medium text-sm">
            Controlled progress
            <div class="ml-auto flex gap-2">
              <Button size="icon-sm" variant="outline" @click="value = Math.max(0, value - 10)">
                <PhMinus />
              </Button>
              <Button size="icon-sm" variant="outline" @click="value = Math.min(100, value + 10)">
                <PhPlus />
              </Button>
            </div>
          </div>
          <Progress :value="value" />
        </div>
  
</template>
