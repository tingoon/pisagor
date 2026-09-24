<script lang="ts" setup>
import { RadioGroup } from "..";
</script>

<template>
  <RadioGroup.Root default-value="a">
    <RadioGroup.Label>Notification channel</RadioGroup.Label>
    <RadioGroup.Item value="a">Email</RadioGroup.Item>
    <RadioGroup.Item value="b">SMS</RadioGroup.Item>
    <RadioGroup.Item value="c">Push</RadioGroup.Item>
  </RadioGroup.Root>
</template>
