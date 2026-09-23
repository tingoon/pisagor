<script lang="ts" setup >
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { Button, Input } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Editable default-value="Editable content" invalid>
          <Editable.Area>
            <Editable.Input as-child>
              <Input />
            </Editable.Input>
            <Editable.Preview />
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
  
</template>
