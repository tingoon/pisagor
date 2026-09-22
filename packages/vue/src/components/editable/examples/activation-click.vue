<script setup lang="ts">
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { Button, Card, Field, Input } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Card>
          <Card.Header description="Click the text to start editing" title="Edit with click" />
          <Card.Content>
            <Field.Group>
              <Field>
                <Field.Label>Name</Field.Label>
                <Editable activation-mode="click" default-value="Jane Doe">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                  <Editable.Control>
                    <Editable.CancelTrigger as-child>
                      <Button aria-label="Cancel" size="icon-md" variant="outline">
                        <PhX />
                      </Button>
                    </Editable.CancelTrigger>
                    <Editable.SubmitTrigger as-child>
                      <Button aria-label="Save" size="icon-md" variant="outline">
                        <PhCheck />
                      </Button>
                    </Editable.SubmitTrigger>
                  </Editable.Control>
                </Editable>
              </Field>
              <Field>
                <Field.Label>Username</Field.Label>
                <Editable activation-mode="click" default-value="@jane.doe">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                  <Editable.Control>
                    <Editable.CancelTrigger as-child>
                      <Button aria-label="Cancel" size="icon-md" variant="outline">
                        <PhX />
                      </Button>
                    </Editable.CancelTrigger>
                    <Editable.SubmitTrigger as-child>
                      <Button aria-label="Save" size="icon-md" variant="outline">
                        <PhCheck />
                      </Button>
                    </Editable.SubmitTrigger>
                  </Editable.Control>
                </Editable>
              </Field>
            </Field.Group>
          </Card.Content>
        </Card>
  
</template>
