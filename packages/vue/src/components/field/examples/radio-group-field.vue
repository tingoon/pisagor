<script lang="ts" setup>
import { RadioGroup } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
  <Field.Set>
    <Field.Legend variant="label">Choose Plan</Field.Legend>
    <RadioGroup.Root default-value="free">
      <Field>
        <RadioGroup.Item value="free">Free</RadioGroup.Item>
      </Field>
      <Field>
        <RadioGroup.Item value="pro">Pro</RadioGroup.Item>
      </Field>
      <Field>
        <RadioGroup.Item value="enterprise">Enterprise</RadioGroup.Item>
      </Field>
    </RadioGroup.Root>
    <Field.Description>Select the plan that fits your needs.</Field.Description>
  </Field.Set>
</template>
