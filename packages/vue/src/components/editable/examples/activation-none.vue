<script lang="ts" setup >
import { PhCheck, PhPencilSimple, PhX } from "@phosphor-icons/vue";
import { Button, Card, Field, Input } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Card>
          <Card.Header description="Use the edit button to start editing (no automatic activation)" title="Edit with manual trigger" />
          <Card.Content>
            <Field.Group>
              <Field>
                <Field.Label>Name</Field.Label>
                <Editable activation-mode="none" default-value="Jane Doe">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                  <Editable.Control>
                    <Editable.EditTrigger as-child>
                      <Button aria-label="Edit" size="icon-md" variant="outline">
                        <PhPencilSimple />
                      </Button>
                    </Editable.EditTrigger>
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
                <Editable activation-mode="none" default-value="@jane.doe">
                  <Editable.Area>
                    <Editable.Input as-child>
                      <Input />
                    </Editable.Input>
                    <Editable.Preview />
                  </Editable.Area>
                  <Editable.Control>
                    <Editable.EditTrigger as-child>
                      <Button aria-label="Edit" size="icon-md" variant="outline">
                        <PhPencilSimple />
                      </Button>
                    </Editable.EditTrigger>
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
