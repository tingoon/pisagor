<script lang="ts" setup >
import { Kbd } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <Kbd variant="default">K</Kbd>
          <Kbd.Group>
            <Kbd variant="outline">K</Kbd>
            <Kbd variant="outline">⌘</Kbd>
            <Kbd variant="outline">⌃</Kbd>
          </Kbd.Group>
        </div>
  
</template>
