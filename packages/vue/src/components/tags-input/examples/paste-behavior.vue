<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput addOnPaste class="w-full" :defaultValue="[]" delimiter="," />
        </Field>
  
</template>
