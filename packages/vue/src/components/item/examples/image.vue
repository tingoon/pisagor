<script setup lang="ts">
import { Item } from "..";

const images = [
  {
    alt: "Midnight City Lights",
    description: "Electric Nights · Neon Dreams · 3:45",
    src: "https://picsum.photos/seed/1/500/300",
  },
  {
    alt: "Coffee Shop Conversations",
    description: "Urban Stories · The Morning Brew · 4:05",
    src: "https://picsum.photos/seed/2/500/300",
  },
  {
    alt: "Digital Rain",
    description: "Binary Beats · Cyber Symphony · 3:30",
    src: "https://picsum.photos/seed/3/500/300",
  },
];
</script>

<template>
        <Item.Group class="gap-2" variant="outline">
          <Item v-for="image in images" :key="image.src">
            <Item.Media variant="image">
              <img
                :alt="image.alt"
                :src="image.src"
                class="aspect-square w-full object-cover grayscale"
                height="80"
                width="80"
              />
            </Item.Media>
            <Item.Content>
              <Item.Title>{{ image.alt }}</Item.Title>
              <Item.Description>{{ image.description }}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
  
</template>
