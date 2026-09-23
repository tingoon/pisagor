<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { TagsInput } from "..";

const value = ref(initialValue);
const onValueChange = setValue;
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput class="w-full" :value="value" @value-change="onValueChange" />
        </Field>
  
</template>
