<script lang="ts" setup >
import { Card, Field, Input } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Card>
          <Card.Header description="Click the field to edit, press Enter to save, Escape to cancel" title="Edit without controls" />
          <Card.Content>
            <Field.Group>
              <Field>
                <Field.Label>Name</Field.Label>
                <Editable default-value="Jane Doe">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                </Editable>
              </Field>
              <Field>
                <Field.Label>Email</Field.Label>
                <Editable default-value="jane.doe@example.com">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                </Editable>
              </Field>
            </Field.Group>
          </Card.Content>
        </Card>
  
</template>
