/** @jsxImportSource solid-js */

import { signInFormBlock } from "@pisagor/recipes/blocks/sign-in-form";
import { Field, Surface } from "@pisagor/solid";
import { useAppForm } from "@pisagor/solid-form/tanstack";
import { z } from "zod";

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

export function SignInForm() {
  const form = useAppForm(() => ({
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
  }));

  return (
    <Surface bordered class={styles.root()} padding="lg" rounded>
      <form.Root class={styles.form()}>
        <div class={styles.intro()}>
          <h1 class={styles.title()}>Sign in</h1>
          <p class={styles.description()}>
            Enter your email and password to continue.
          </p>
        </div>
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              autocomplete="email"
              id="form-email"
              label="Email"
              placeholder="you@example.com"
              type="email"
            />
          )}
        </form.AppField>
        <form.AppField name="password">
          {(field) => (
            <field.PasswordField
              autocomplete="current-password"
              id="form-password"
              label="Password"
              labelAccessory={
                <a
                  class={styles.forgotLink()}
                  href="https://example.com/forgot-password"
                >
                  Forgot password?
                </a>
              }
              labelProps={{
                class: styles.full(),
              }}
              placeholder="Enter your password"
            />
          )}
        </form.AppField>
        <form.SubmitButton class={styles.full()} size="lg">
          Sign in
        </form.SubmitButton>
        <Field.Separator>Or continue with</Field.Separator>
        <form.AppField name="rememberMe">
          {(field) => (
            <field.CheckboxField
              id="form-remember"
              label="Remember me on this device"
            />
          )}
        </form.AppField>
      </form.Root>
    </Surface>
  );
}
