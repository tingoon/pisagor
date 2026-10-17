<script lang="ts" setup>
import { cn } from "@pisagor/utils";
import { Button, Card, Field, Input } from "@pisagor/vue";
import { ref } from "vue";
import { editableUserCardBlock } from "#/styles/recipes/editors";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = editableUserCardBlock();

// Vue repo does not include the editable control used by the React recipe.
// This keeps the layout intent with a simple read-only view.
const name = ref("Jane Doe");
const username = ref("@jane.doe");
</script>

<template>
  <Card :class="cn(styles.narrow(), props.class)">
    <Card.Header
      description="Click in the field or edit button to start editing"
      title="Edit user"
    />
    <Card.Content>
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input read-only :class="styles.root()" :value="name" />
        </Field>
        <Field>
          <Field.Label>Username</Field.Label>
          <Input read-only :value="username" />
        </Field>
      </Field.Group>
    </Card.Content>
    <!-- Kept as visual affordance (no editing logic in Vue). -->
    <Card.Footer>
      <Button type="button" variant="outline">Edit</Button>
    </Card.Footer>
  </Card>
</template>
