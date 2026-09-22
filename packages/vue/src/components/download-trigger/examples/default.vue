<script setup lang="ts">
import { PhDownload, PhFileText } from "@phosphor-icons/vue";

import { Button, Item } from "@pisagor/vue";
import { DownloadTrigger } from "..";
import { sampleText } from "./helpers";

const items = sampleText();

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
          <DownloadTrigger as-child :data="text" file-name="hello.txt" mime-type="text/plain">
            <Button size="lg" variant="outline">
              <PhDownload />
              Download
            </Button>
          </DownloadTrigger>
        </div>
  
</template>
