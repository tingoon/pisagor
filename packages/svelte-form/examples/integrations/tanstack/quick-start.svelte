<script lang="ts">
  import { createAppForm, Root } from "@pisagor/svelte-form/tanstack";

  const form = createAppForm(() => ({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  }));
</script>

<Root class="flex flex-col gap-4" {form}>
  <form.AppField name="email">
    {#snippet children(field)}
      <field.TextField
        autocomplete="email"
        id="tanstack-quick-start-email"
        label="Email"
        type="email"
      />
    {/snippet}
  </form.AppField>

  <form.AppField name="password">
    {#snippet children(field)}
      <field.PasswordField
        autocomplete="current-password"
        id="tanstack-quick-start-password"
        label="Password"
      />
    {/snippet}
  </form.AppField>

  <form.SubmitButton>Save</form.SubmitButton>
</Root>
