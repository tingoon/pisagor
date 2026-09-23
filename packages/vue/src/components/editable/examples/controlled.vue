<script lang="ts" setup >
import { PhCheck, PhPencilSimple } from "@phosphor-icons/vue";
import { Button, Card, Field, Input } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Card>
          <Card.Header description="Click the edit button to start editing" title="Edit user">
            <Card.Action>
              <Button :variant="isEditing ? 'outline' : 'ghost'" @click="isEditing = !isEditing" >
                <template v-if="isEditing">
                  <PhCheck /> Save
                </template>
                <template v-else>
                  <PhPencilSimple /> Edit
                </template>
              </Button>
            </Card.Action>
          </Card.Header>
          <Card.Content>
            <Field.Group>
              <Field>
                <Field.Label>Name</Field.Label>
                <Editable activation-mode="none" default-value="Jane Doe" :edit="isEditing">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                </Editable>
              </Field>
              <Field>
                <Field.Label>Username</Field.Label>
                <Editable activation-mode="none" default-value="@jane.doe" :edit="isEditing">
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
