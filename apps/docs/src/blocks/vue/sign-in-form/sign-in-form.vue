<script lang="ts" setup>
import { Field, Surface } from "@pisagor/vue";
import { useAppForm } from "@pisagor/vue-form/tanstack";
import { h } from "vue";
import { z } from "zod";
import { signInFormBlock } from "#/styles/recipes/sign-in-form";

const styles = signInFormBlock();

const signInFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email("Please enter a valid email address.")),
  password: z.string().min(8, "Password must be at least 8 characters."),
  rememberMe: z.boolean(),
});

const form = useAppForm({
  defaultValues: {
    email: "",
    password: "",
    rememberMe: false,
  },
  onSubmit: () => {},
  validators: {
    onChange: signInFormSchema,
    onSubmit: signInFormSchema,
  },
});

const { AppField, Root: FormRoot, SubmitButton } = form;

// `labelAccessory` renders next to the label, so it's passed as a VNode.
const forgotPassword = h(
  "a",
  {
    class: styles.forgotLink(),
    href: "https://example.com/forgot-password",
  },
  "Forgot password?",
);
</script>

<template>
  <div :class="styles.root()">
    <Surface bordered padding="lg" rounded>
      <FormRoot :class="styles.form()">
        <div :class="styles.intro()">
          <h1 :class="styles.title()">Sign in</h1>
          <p :class="styles.description()">
            Enter your email and password to continue.
          </p>
        </div>
        <AppField name="email" v-slot="field">
          <component
            auto-complete="email"
            id="form-email"
            label="Email"
            placeholder="you@example.com"
            type="email"
            :is="field.TextField"
          />
        </AppField>
        <AppField name="password" v-slot="field">
          <component
            auto-complete="current-password"
            id="form-password"
            label="Password"
            placeholder="Enter your password"
            :is="field.PasswordField"
            :label-accessory="forgotPassword"
            :label-props="{ class: styles.full() }"
          />
        </AppField>
        <SubmitButton size="lg" :class="styles.full()">Sign in</SubmitButton>
        <Field.Separator>Or continue with</Field.Separator>
        <AppField name="rememberMe" v-slot="field">
          <component
            id="form-remember"
            label="Remember me on this device"
            :is="field.CheckboxField"
          />
        </AppField>
      </FormRoot>
    </Surface>
  </div>
</template>
