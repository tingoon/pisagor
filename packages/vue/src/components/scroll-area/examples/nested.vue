<script lang="ts" setup>
import { ScrollArea } from "..";
</script>

<template>
  <ScrollArea class="h-64 w-64 rounded-md border text-sm">
    <div class="space-y-4 p-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ScrollArea class="h-32 rounded-md border">
        <div class="p-4">
          This is a nested scroll area. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </ScrollArea>
    </div>
  </ScrollArea>
</template>
