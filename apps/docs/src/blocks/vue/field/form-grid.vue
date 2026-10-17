<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
import { formGridBlock } from "#/styles/recipes/field";

const styles = formGridBlock();
</script>

<template>
  <Field>
    <Field.Group :class="styles.group()">
      <Field>
        <Field.Label>First name</Field.Label>
        <Input placeholder="John" />
      </Field>
      <Field>
        <Field.Label>Last name</Field.Label>
        <Input placeholder="Doe" />
      </Field>
      <Field :class="styles.span()">
        <Field.Label>Address</Field.Label>
        <Input placeholder="123 Main St" />
      </Field>
    </Field.Group>
  </Field>
</template>
