<script lang="ts" setup >
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { Button, Input } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <Editable default-value="Editable content">
            <Editable.Area>
              <Editable.Input as-child>
                <Input size="sm" />
              </Editable.Input>
              <Editable.Preview size="sm" />
            </Editable.Area>
            <Editable.Control>
              <Editable.CancelTrigger as-child>
                <Button size="icon-sm" variant="outline">
                  <PhX />
                </Button>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger as-child>
                <Button size="icon-sm" variant="outline">
                  <PhCheck />
                </Button>
              </Editable.SubmitTrigger>
            </Editable.Control>
          </Editable>
          <Editable default-value="Editable content">
            <Editable.Area>
              <Editable.Input as-child>
                <Input size="md" />
              </Editable.Input>
              <Editable.Preview size="md" />
            </Editable.Area>
            <Editable.Control>
              <Editable.CancelTrigger as-child>
                <Button size="icon-md" variant="outline">
                  <PhX />
                </Button>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger as-child>
                <Button size="icon-md" variant="outline">
                  <PhCheck />
                </Button>
              </Editable.SubmitTrigger>
            </Editable.Control>
          </Editable>
          <Editable default-value="Editable content">
            <Editable.Area>
              <Editable.Input as-child>
                <Input size="lg" />
              </Editable.Input>
              <Editable.Preview size="lg" />
            </Editable.Area>
            <Editable.Control>
              <Editable.CancelTrigger as-child>
                <Button size="icon-lg" variant="outline">
                  <PhX />
                </Button>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger as-child>
                <Button size="icon-lg" variant="outline">
                  <PhCheck />
                </Button>
              </Editable.SubmitTrigger>
            </Editable.Control>
          </Editable>
        </div>
  
</template>
