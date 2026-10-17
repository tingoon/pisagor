<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhStar } from "@phosphor-icons/vue";
import { Rating } from "@pisagor/vue";
</script>

<template>
  <Rating.Root :count="5" :default-value="3">
    <Rating.Control>
      <Rating.Context v-slot="{ items }">
        <Rating.Item v-for="item in items" :key="item" :index="item">
          <Rating.ItemContext v-slot="{ highlighted }">
            <Rating.Indicator :highlighted="highlighted">
              <PhStar data-bg="" />
              <PhStar data-fg="" weight="fill" />
            </Rating.Indicator>
          </Rating.ItemContext>
        </Rating.Item>
      </Rating.Context>
      <Rating.HiddenInput />
    </Rating.Control>
  </Rating.Root>
</template>
