<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput allowOverflow class="w-full" :defaultValue="['React', 'Solid', 'Vue']" :max="3" />
        </Field>
  
</template>
