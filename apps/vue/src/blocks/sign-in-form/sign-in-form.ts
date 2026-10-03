import { signInFormBlock } from "@pisagor/recipes/blocks/sign-in-form";
import { Field, Surface } from "@pisagor/vue";
import { useAppForm } from "@pisagor/vue-form/tanstack";
import { defineComponent, h } from "vue";
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
      h("div", { class: styles.root() }, () =>
        h(
          Surface,
          {
            bordered: true,
            padding: "lg",
            rounded: true,
          },
          () =>
            h(form.Root as never, { class: styles.form() }, () => [
              h("div", { class: styles.intro() }, [
                h(
                  "h1",
                  {
                    class: styles.title(),
                  },
                  "Sign in",
                ),
                h(
                  "p",
                  { class: styles.description() },
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
                          class: styles.forgotLink(),
                          href: "https://example.com/forgot-password",
                        },
                        "Forgot password?",
                      ),
                      labelProps: { class: styles.full() },
                      placeholder: "Enter your password",
                    }),
                },
              ),
              h(
                form.SubmitButton as never,
                { class: styles.full(), size: "lg" },
                () => "Sign in",
              ),
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
