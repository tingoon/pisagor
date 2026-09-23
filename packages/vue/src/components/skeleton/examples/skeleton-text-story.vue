<script lang="ts" setup >
import { Skeleton } from "..";
</script>

<template>
        <div class="flex flex-col gap-5">
          <Skeleton class="h-6 w-3/4" />
          <Skeleton.Text :lines="5" />
          <Skeleton.Text :lines="3" />
          <Skeleton.Text :lines="2" />
        </div>
  
</template>
