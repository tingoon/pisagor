<script lang="ts" setup>
import { Item } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createGridCollection({
  columnCount: 5,
  items: [
    { label: "😀", value: "grinning" },
    { label: "😍", value: "heart-eyes" },
    { label: "🥳", value: "partying" },
    { label: "😎", value: "sunglasses" },
    { label: "🤩", value: "star-struck" },
    { label: "😂", value: "joy" },
    { label: "🥰", value: "smiling-hearts" },
    { label: "😊", value: "blush" },
    { label: "🤗", value: "hugging" },
    { label: "😇", value: "innocent" },
    { label: "🔥", value: "fire" },
    { label: "✨", value: "sparkles" },
    { label: "💯", value: "hundred" },
    { label: "🎉", value: "tada" },
    { label: "❤️", value: "heart" },
    { label: "👍", value: "thumbs-up" },
    { label: "👏", value: "clap" },
    { label: "🚀", value: "rocket" },
    { label: "⭐", value: "star" },
    { label: "🌈", value: "rainbow" },
  ],
});
</script>

<template>
  <Item.Group variant="outline">
    <Item class="p-1">
      <Listbox.Root :collection="collection">
        <Listbox.Content
          class="grid grid-cols-[repeat(var(--column-count),1fr)] gap-1"
          :style="{ '--column-count': collection.columnCount }"
        >
          <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
            <Listbox.ItemText class="text-center text-xl">{{ item.label }}</Listbox.ItemText>
          </Listbox.Item>
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
</template>
