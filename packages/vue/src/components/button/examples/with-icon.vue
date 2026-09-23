<script lang="ts" setup >
import { PhArrowSquareOut, PhDownload, PhGear, PhHeart, PhPlus } from "@phosphor-icons/vue";
import { Button } from "..";
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="default">
      <PhPlus />
      Add
    </Button>
    <Button variant="outline">
      <PhGear />
      Settings
    </Button>
    <Button variant="secondary">
      <PhHeart />
      Favorite
    </Button>
    <Button variant="ghost">
      <PhDownload />
      Download
    </Button>
    <Button variant="link">
      Visit website
      <PhArrowSquareOut />
    </Button>
  </div>
</template>
