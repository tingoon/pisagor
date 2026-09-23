<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Clipboard } from "..";

const value = ref("https://example.com/docs");
</script>

<template>
        <div class="flex flex-col gap-2">
          <Clipboard :value="value" />
          <Button variant="secondary" @click="value = 'https://example.com/docs/alternate'">
            Change URL
          </Button>
        </div>
  
</template>
