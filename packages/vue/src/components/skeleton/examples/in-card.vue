<script lang="ts" setup>
import { Card } from "@pisagor/vue";
import { Skeleton } from "..";
</script>

<template>
  <Card>
    <Card.Header class="flex flex-row items-center gap-2">
      <Skeleton.Circle class="size-12" />
      <Skeleton.Text :lines="2" />
    </Card.Header>
    <Card.Content>
      <Skeleton.Text :lines="3" />
    </Card.Content>
    <Card.Footer class="flex items-center gap-2">
      <Skeleton.Circle class="size-12" />
      <Skeleton.Text :lines="2" />
    </Card.Footer>
  </Card>
</template>
