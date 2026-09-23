import { Field, Surface } from "@pisagor/vue";
import { useAppForm } from "@pisagor/vue-form/tanstack";
import { defineComponent, h } from "vue";
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

export const SignInForm = defineComponent({
  name: "SignInForm",
  setup() {
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

    return () =>
      h("div", { class: "mx-auto w-full max-w-md" }, () =>
        h(
          Surface,
          {
            bordered: true,
            padding: "lg",
            rounded: true,
          },
          () =>
            h(form.Root as never, { class: "flex flex-col gap-4" }, () => [
              h("div", { class: "flex flex-col gap-1.5" }, [
                h("h1", { class: "font-semibold text-xl leading-tight tracking-tight" }, "Sign in"),
                h(
                  "p",
                  { class: "text-muted-foreground text-sm leading-relaxed" },
                  "Enter your email and password to continue.",
                ),
              ]),
              h(
                form.AppField,
                { name: "email" },
                {
                  default: (field: { TextField: unknown }) =>
                    h(field.TextField as never, {
                      autoComplete: "email",
                      id: "form-email",
                      label: "Email",
                      placeholder: "you@example.com",
                      type: "email",
                    }),
                },
              ),
              h(
                form.AppField,
                { name: "password" },
                {
                  default: (field: { PasswordField: unknown }) =>
                    h(field.PasswordField as never, {
                      autoComplete: "current-password",
                      id: "form-password",
                      label: "Password",
                      labelAccessory: h(
                        "a",
                        {
                          class: "ms-auto text-sm underline-offset-4 hover:underline",
                          href: "https://example.com/forgot-password",
                        },
                        "Forgot password?",
                      ),
                      labelProps: { class: "w-full" },
                      placeholder: "Enter your password",
                    }),
                },
              ),
              h(form.SubmitButton as never, { class: "w-full", size: "lg" }, () => "Sign in"),
              h(Field.Separator as never, null, () => "Or continue with"),
              h(
                form.AppField,
                { name: "rememberMe" },
                {
                  default: (field: { CheckboxField: unknown }) =>
                    h(field.CheckboxField as never, {
                      id: "form-remember",
                      label: "Remember me on this device",
                    }),
                },
              ),
            ]),
        ),
      );
  },
});
