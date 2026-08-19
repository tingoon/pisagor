import { Field } from "@pisagor/react/field";
import { useAppForm } from "@pisagor/react-form/tanstack";
import { z } from "zod";

const signInFormSchema = z.object({
  acceptedTerms: z.boolean(),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email("Please enter a valid email address.")),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export function SignInForm() {
  const form = useAppForm({
    defaultValues: {
      acceptedTerms: false,
      email: "",
      password: "",
    },
    onSubmit: () => {},
    validators: {
      onChange: signInFormSchema,
      onSubmit: signInFormSchema,
    },
  });

  return (
    <form.Root className="flex flex-col gap-6">
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
      <form.SubmitButton className="w-full">Sign in</form.SubmitButton>
      <Field.Separator>Or continue with</Field.Separator>
      <form.AppField name="acceptedTerms">
        {(field) => <field.CheckboxField id="form-terms" label="Remember me on this device" />}
      </form.AppField>
    </form.Root>
  );
}
