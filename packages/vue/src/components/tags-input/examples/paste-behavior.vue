<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput addOnPaste class="w-full" delimiter="," :defaultValue="[]" />
        </Field>
  
</template>
