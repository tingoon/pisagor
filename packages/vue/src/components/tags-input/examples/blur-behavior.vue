<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput blurBehavior="add" class="w-full" :defaultValue="['React']" />
        </Field>
  
</template>
