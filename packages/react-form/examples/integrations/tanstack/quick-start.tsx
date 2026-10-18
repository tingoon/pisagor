import { useAppForm } from "@pisagor/react-form/tanstack";

export function QuickStart() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <form.Root className="flex flex-col gap-4">
      <form.AppField name="email">
        {(field) => (
          <field.TextField
            autoComplete="email"
            id="tanstack-quick-start-email"
            label="Email"
            type="email"
          />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          <field.PasswordField
            autoComplete="current-password"
            id="tanstack-quick-start-password"
            label="Password"
          />
        )}
      </form.AppField>

      <form.SubmitButton>Save</form.SubmitButton>
    </form.Root>
  );
}
