<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { SignaturePad } from "..";

const imageUrl = ref(null);
function handleDrawEnd(..._args: unknown[]) {
  /* demo */
}
</script>

<template>
        <Field class="flex flex-col gap-2">
          <SignaturePad @draw-end="handleDrawEnd" />
          <Field.Description>Image preview</Field.Description>
          <div class="relative h-40 w-full rounded-lg border bg-muted">
            <img
              alt="Your signature as captured from the pad above"
              class="size-full dark:invert"
              style="height: 100%; inset: 0; object-fit: cover; position: absolute; width: 100%"
              v-if="imageUrl"
              :src="imageUrl"
            />
          </div>
        </Field>
  
</template>
