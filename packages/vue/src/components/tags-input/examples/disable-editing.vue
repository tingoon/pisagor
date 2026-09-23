<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput class="w-full" :defaultValue="['React', 'Solid']" :editable="false" />
        </Field>
  
</template>
