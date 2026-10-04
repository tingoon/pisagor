<script lang="ts">
import { parseDate } from "@pisagor/svelte";
import { createAppForm, Root } from "@pisagor/svelte-form/tanstack";
import { cityOptions, countryOptions, planOptions } from "../options";

const form = createAppForm(() => ({
  defaultValues: {
    acceptedTerms: false,
    bio: "",
    body: "<p></p>",
    city: "",
    code: "",
    country: "",
    email: "",
    notifications: true,
    password: "",
    phone: "",
    plan: "pro",
    quantity: 1,
    startDate: [parseDate("2026-07-16")],
  },
  onSubmit: () => {},
}));
</script>

<Root class="flex flex-col gap-6" {form}>
  <form.AppField name="email">
    {#snippet children(
      field,
    )}
      <field.TextField
        autocomplete="email"
        id="tanstack-form-email"
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
        id="tanstack-form-password"
        label="Password"
        placeholder="Enter your password"
      />
    {/snippet}
  </form.AppField>

  <form.AppField name="country">
    {#snippet children(
      field,
    )}
      <field.SelectField
        description="Used for shipping estimates."
        id="tanstack-form-country"
        items={countryOptions}
        label="Country"
        placeholder="Select a country"
      />
    {/snippet}
  </form.AppField>

  <form.AppField name="city">
    {#snippet children(
      field,
    )}
      <field.AutocompleteField
        description="Start typing to filter options."
        id="tanstack-form-city"
        items={cityOptions}
        label="City"
      />
    {/snippet}
  </form.AppField>

  <form.AppField name="plan">
    {#snippet children(
      field,
    )}
      <field.RadioGroupField
        description="You can change this anytime in billing settings."
        id="tanstack-form-plan"
        label="Plan"
        options={planOptions}
      />
    {/snippet}
  </form.AppField>

  <form.AppField name="acceptedTerms">
    {#snippet children(
      field,
    )}
      <field.CheckboxField
        id="tanstack-form-accepted-terms"
        label="I accept the terms and conditions"
      />
    {/snippet}
  </form.AppField>

  <form.SubmitButton>Save profile</form.SubmitButton>
</Root>
