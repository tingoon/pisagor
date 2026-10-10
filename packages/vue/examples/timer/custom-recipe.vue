<script lang="ts" setup>
import { timerRecipe } from "@pisagor/recipes";
import { Timer } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandTimerRecipe = tv({
  extend: timerRecipe,
  slots: {
    area: "text-emerald-900 dark:text-emerald-100",
    separator: "text-emerald-500",
  },
  variants: {},
});
</script>

<template>
  <Timer auto-start :recipe="brandTimerRecipe">
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
