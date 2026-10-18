<script setup lang="ts">
import { useAppForm } from "@pisagor/vue-form/tanstack";

const form = useAppForm({
  defaultValues: {
    email: "",
    password: "",
  },
  onSubmit: () => {},
});
</script>

<template>
  <component :is="form.Root" class="flex flex-col gap-4">
    <component :is="form.AppField" name="email" v-slot="field">
      <component
        :is="field.TextField"
        auto-complete="email"
        id="tanstack-quick-start-email"
        label="Email"
        type="email"
      />
    </component>

    <component :is="form.AppField" name="password" v-slot="field">
      <component
        :is="field.PasswordField"
        auto-complete="current-password"
        id="tanstack-quick-start-password"
        label="Password"
      />
    </component>

    <component :is="form.SubmitButton">Save</component>
  </component>
</template>
