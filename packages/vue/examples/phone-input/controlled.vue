<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { PhoneInput } from "@pisagor/vue/phone-input";
import { ref } from "vue";

const phone = ref("+31612345678");
const onChange = (next: string) => {
  phone.value = next;
};
</script>

<template>
  <Field>
    <Field.Label>Phone</Field.Label>
    <PhoneInput
      default-country="NL"
      placeholder="Enter phone number"
      :on-change="onChange"
      :value="phone"
    />
    <Field.Description class="text-right">
      E.164 value: {{ phone || "—" }}
    </Field.Description>
  </Field>
</template>
