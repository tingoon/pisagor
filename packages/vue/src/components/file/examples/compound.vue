<script lang="ts" setup>
import { PhDownloadSimple } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { File } from "..";
</script>

<template>
  <File.Root>
    <File.Media variant="image">
      <img alt="" height="40" src="https://picsum.photos/seed/file/80/80" width="40">
    </File.Media>
    <File.Content>
      <File.Name>cover.jpg</File.Name>
      <File.Meta>JPEG image</File.Meta>
      <File.Size :value="409600" />
    </File.Content>
    <File.Actions>
      <Button aria-label="Download" size="icon-xs" variant="ghost">
        <PhDownloadSimple />
      </Button>
    </File.Actions>
  </File.Root>
</template>
