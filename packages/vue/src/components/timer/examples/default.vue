<script lang="ts" setup>
import { Timer } from "..";
</script>

<template>
  <Timer auto-start>
    <Timer.Area>
      <Timer.ItemGroup>
        <Timer.Item type="days" />
        <Timer.ItemLabel>Days</Timer.ItemLabel>
      </Timer.ItemGroup>
      <Timer.Separator />
      <Timer.ItemGroup>
        <Timer.Item type="hours" />
        <Timer.ItemLabel>Hours</Timer.ItemLabel>
      </Timer.ItemGroup>
      <Timer.Separator />
      <Timer.ItemGroup>
        <Timer.Item type="minutes" />
        <Timer.ItemLabel>Minutes</Timer.ItemLabel>
      </Timer.ItemGroup>
      <Timer.Separator />
      <Timer.ItemGroup>
        <Timer.Item type="seconds" />
        <Timer.ItemLabel>Seconds</Timer.ItemLabel>
      </Timer.ItemGroup>
    </Timer.Area>
  </Timer>
</template>
