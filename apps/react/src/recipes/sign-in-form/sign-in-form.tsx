import { Field, Surface } from "@pisagor/react";
import { useAppForm } from "@pisagor/react-form/tanstack";
import { z } from "zod";

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
    <Surface bordered className="mx-auto w-full max-w-md" padding="lg" rounded>
      <form.Root className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-semibold text-xl leading-tight tracking-tight">Sign in</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
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
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                  href="https://example.com/forgot-password"
                >
                  Forgot password?
                </a>
              }
              labelProps={{
                className: "w-full",
              }}
              placeholder="Enter your password"
            />
          )}
        </form.AppField>
        <form.SubmitButton className="w-full" size="lg">
          Sign in
        </form.SubmitButton>
        <Field.Separator>Or continue with</Field.Separator>
        <form.AppField name="rememberMe">
          {(field) => <field.CheckboxField id="form-remember" label="Remember me on this device" />}
        </form.AppField>
      </form.Root>
    </Surface>
  );
}
