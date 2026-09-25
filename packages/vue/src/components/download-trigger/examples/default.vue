<script lang="ts" setup>
import { PhDownload, PhFileText } from "@phosphor-icons/vue";

import { Button, Item } from "@pisagor/vue";
import { DownloadTrigger } from "..";
import { sampleText } from "./helpers";

const text = sampleText();
</script>

<template>
  <div class="flex flex-col gap-2">
    <Item.Group variant="outline">
      <Item>
        <PhFileText />
        <Item.Title>{{ text }}</Item.Title>
      </Item>
    </Item.Group>
    <DownloadTrigger
      as-child
      file-name="hello.txt"
      mime-type="text/plain"
      :data="text"
    >
      <Button size="lg" variant="outline">
        <PhDownload />
        Download
      </Button>
    </DownloadTrigger>
  </div>
</template>
