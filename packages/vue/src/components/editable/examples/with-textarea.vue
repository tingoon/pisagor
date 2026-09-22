<script setup lang="ts">
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { Button, Card, Field, Textarea } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Card>
          <Card.Header description="Double-click the text to start editing" title="Edit description" />
          <Card.Content>
            <Field.Group>
              <Field>
                <Field.Label>Description</Field.Label>
                <Editable
                  default-value="This is a longer description that can be edited. Click to edit and make changes."
                  orientation="vertical"
                >
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Textarea class="min-h-24" />
                    </Editable.Input>
                    <Editable.Preview class="min-h-24" />
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
