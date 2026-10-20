<script lang="ts" setup>
import { Card, Editable, Field, Input } from "@pisagor/vue";
</script>

<template>
  <Card>
    <Card.Header>
      <Card.Title>Edit without controls</Card.Title>
      <Card.Description>
        Click the field to edit, press Enter to save, Escape to cancel
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Editable.Root default-value="Jane Doe">
            <Editable.Area>
              <Editable.Input as-child>
                <Input />
              </Editable.Input>
              <Editable.Preview />
            </Editable.Area>
          </Editable.Root>
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Editable.Root default-value="jane.doe@example.com">
            <Editable.Area>
              <Editable.Input as-child>
                <Input />
              </Editable.Input>
              <Editable.Preview />
            </Editable.Area>
          </Editable.Root>
        </Field>
      </Field.Group>
    </Card.Content>
  </Card>
</template>
