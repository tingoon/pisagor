<script setup lang="ts">
import { Spinner } from "@pisagor/vue";
import { Badge } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <Badge variant="destructive">
            <Spinner />
            Deleting
          </Badge>
          <Badge variant="outline">
            Generating
            <Spinner />
          </Badge>
        </div>
  
</template>
