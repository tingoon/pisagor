<script lang="ts" setup>
import { RadioGroup } from "@pisagor/vue";
</script>

<template>
  <RadioGroup.Root default-value="a">
    <RadioGroup.Label>Notification channel</RadioGroup.Label>
    <RadioGroup.Item value="a">
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>Email</RadioGroup.ItemText>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
    <RadioGroup.Item value="b">
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>SMS</RadioGroup.ItemText>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
    <RadioGroup.Item value="c">
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>Push</RadioGroup.ItemText>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
  </RadioGroup.Root>
</template>
