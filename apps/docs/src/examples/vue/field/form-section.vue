<script lang="ts">
import source from "./form-section.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button, Field, Input, Surface } from "@pisagor/vue";
import { formSectionBlock } from "#/recipes/blocks/field";

const styles = formSectionBlock();
</script>

<template>
  <Surface bordered padding="lg" rounded :class="styles.root()">
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Input placeholder="First name" />
      </Field>
      <Field>
        <Field.Label>Email</Field.Label>
        <Input placeholder="you@example.com" type="email" />
        <Field.Description
          >We'll use this email to contact you</Field.Description
        >
      </Field>
      <Field orientation="horizontal" reverse>
        <Button type="button">Submit</Button>
        <Button type="button" variant="outline">Reset</Button>
      </Field>
    </Field.Group>
  </Surface>
</template>
