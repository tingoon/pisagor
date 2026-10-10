<script lang="ts">
import { Field, Surface } from "@pisagor/svelte";
import { createAppForm, Root } from "@pisagor/svelte-form/tanstack";
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

const form = createAppForm(() => ({
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
</script>

{#snippet forgotPassword()}
  <a class={styles.forgotLink()} href="https://example.com/forgot-password">
    Forgot password?
  </a>
{/snippet}

<Surface bordered class={styles.root()} padding="lg" rounded>
  <Root class={styles.form()} {form}>
    <div class={styles.intro()}>
      <h1 class={styles.title()}>Sign in</h1>
      <p class={styles.description()}>
        Enter your email and password to continue.
      </p>
    </div>
    <form.AppField name="email">
      {#snippet children(
        field,
      )}
        <field.TextField
          autocomplete="email"
          id="form-email"
          label="Email"
          placeholder="you@example.com"
          type="email"
        />
      {/snippet}
    </form.AppField>
    <form.AppField name="password">
      {#snippet children(
        field,
      )}
        <field.PasswordField
          autocomplete="current-password"
          id="form-password"
          label="Password"
          labelAccessory={forgotPassword}
          labelProps={{ class: styles.full() }}
          placeholder="Enter your password"
        />
      {/snippet}
    </form.AppField>
    <form.SubmitButton class={styles.full()} size="lg"
      >Sign in</form.SubmitButton
    >
    <Field.Separator>Or continue with</Field.Separator>
    <form.AppField name="rememberMe">
      {#snippet children(
        field,
      )}
        <field.CheckboxField
          id="form-remember"
          label="Remember me on this device"
        />
      {/snippet}
    </form.AppField>
  </Root>
</Surface>
