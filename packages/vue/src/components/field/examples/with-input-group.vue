<script lang="ts" setup>
import { PhArrowRight } from "@phosphor-icons/vue";
import { InputGroup } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
  <Field>
    <Field.Label>Subscribe</Field.Label>
    <InputGroup>
      <InputGroup.Input placeholder="Your best email" type="email" />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button
          aria-label="Subscribe"
          size="icon-xs"
          variant="ghost"
        >
          <PhArrowRight aria-hidden="true" />
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
    <Field.Error>Please enter a valid email address.</Field.Error>
  </Field>
</template>
