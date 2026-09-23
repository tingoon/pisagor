<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks (max 10 chars)</Field.Label>
          <TagsInput class="w-full" :defaultValue="['React']" :maxLength="10" />
        </Field>
  
</template>
