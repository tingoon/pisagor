import { Field, Surface } from "@pisagor/react";
import { useAppForm } from "@pisagor/react-form/tanstack";
import { z } from "zod";
import { signInFormBlock } from "#/recipes/blocks/sign-in-form";

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

  return (
    <Surface bordered className={styles.root()} padding="lg" rounded>
      <form.Root className={styles.form()}>
        <div className={styles.intro()}>
          <h1 className={styles.title()}>Sign in</h1>
          <p className={styles.description()}>
            Enter your email and password to continue.
          </p>
        </div>
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              autoComplete="email"
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
              autoComplete="current-password"
              id="form-password"
              label="Password"
              labelAccessory={
                <a
                  className={styles.forgotLink()}
                  href="https://example.com/forgot-password"
                >
                  Forgot password?
                </a>
              }
              labelProps={{
                className: styles.full(),
              }}
              placeholder="Enter your password"
            />
          )}
        </form.AppField>
        <form.SubmitButton className={styles.full()} size="lg">
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
