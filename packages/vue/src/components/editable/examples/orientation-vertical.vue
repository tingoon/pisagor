<script lang="ts" setup>
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { Button, Textarea } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
  <Editable default-value="Editable content" orientation="vertical">
    <Editable.Area>
      <Editable.Input as-child>
        <Textarea class="min-h-24" />
      </Editable.Input>
      <Editable.Preview class="min-h-24" />
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
