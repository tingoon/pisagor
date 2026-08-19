import { parseDate } from "@pisagor/react/calendar";
import type { DatePickerProps } from "@pisagor/react/date-picker";
import { useAppForm } from "@pisagor/react-form/tanstack";
import { Fragment } from "react";
import preview from "#/react/preview";

type DatePickerValue = NonNullable<DatePickerProps["value"]>;

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Shows every connected form field wired to a single form with default values and a submit button.",
      },
    },
  },
  title: "Forms/TanStack Form",
});

export const Default = meta.story({
  render: () => {
    const form = useAppForm({
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
        startDate: [parseDate("2026-07-16")] as DatePickerValue,
      },
      onSubmit: () => {},
    });

    return (
      <form.Root className="flex flex-col gap-6">
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              autoComplete="email"
              id="tanstack-form-email"
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
              id="tanstack-form-password"
              label="Password"
              placeholder="Enter your password"
            />
          )}
        </form.AppField>

        <form.AppField name="phone">
          {(field) => (
            <field.PhoneField
              defaultCountry="US"
              id="tanstack-form-phone"
              label="Phone number"
              placeholder="Enter phone number"
            />
          )}
        </form.AppField>

        <form.AppField name="city">
          {(field) => (
            <field.AutocompleteField
              description="Start typing to filter options."
              id="tanstack-form-city"
              items={cityOptions}
              label="City"
            />
          )}
        </form.AppField>

        <form.AppField name="country">
          {(field) => (
            <field.SelectField
              description="Used for shipping estimates."
              id="tanstack-form-country"
              items={countryOptions}
              label="Country"
              placeholder="Select a country"
            />
          )}
        </form.AppField>

        <form.AppField name="startDate">
          {(field) => (
            <field.DateField
              description="Pick your preferred project kickoff date."
              id="tanstack-form-start-date"
              label="Start date"
              placeholder="Select a date"
            />
          )}
        </form.AppField>

        <form.AppField name="quantity">
          {(field) => (
            <field.NumberField
              description="Choose between 1 and 10."
              id="tanstack-form-quantity"
              label="Quantity"
              max={10}
              min={1}
              placeholder="0"
            />
          )}
        </form.AppField>

        <form.AppField name="code">
          {(field) => <field.OtpField className="items-center" label="Verification code" />}
        </form.AppField>

        <form.AppField name="plan">
          {(field) => (
            <field.RadioGroupField
              description="You can change this anytime in billing settings."
              id="tanstack-form-plan"
              label="Plan"
              options={planOptions}
            />
          )}
        </form.AppField>

        <form.AppField name="bio">
          {(field) => (
            <field.TextareaField
              id="tanstack-form-bio"
              label="Bio"
              placeholder="Tell us about yourself…"
            />
          )}
        </form.AppField>

        <form.AppField name="body">
          {(field) => (
            <field.RichTextEditorField
              description="Supports basic formatting."
              id="tanstack-form-body"
              label="Announcement"
            />
          )}
        </form.AppField>

        <form.AppField name="notifications">
          {(field) => (
            <field.SwitchField
              description="Get release updates by email."
              id="tanstack-form-notifications"
              label="Enable notifications"
            />
          )}
        </form.AppField>

        <form.AppField name="acceptedTerms">
          {(field) => (
            <field.CheckboxField
              id="tanstack-form-accepted-terms"
              label="I accept the terms and conditions"
            />
          )}
        </form.AppField>

        <form.SubmitButton>Save profile</form.SubmitButton>
      </form.Root>
    );
  },
});

const cityOptions = [
  { label: "Dublin", value: "dublin" },
  { label: "Mexico City", value: "mexico-city" },
  { label: "Sao Paulo", value: "sao-paulo" },
];

const countryOptions = [
  { label: "Brazil", value: "br" },
  { label: "Ireland", value: "ie" },
  { label: "Mexico", value: "mx" },
];

const planOptions = [
  {
    description: "For individuals and hobby projects.",
    label: "Starter",
    value: "starter",
  },
  {
    description: "For teams collaborating across projects.",
    label: "Pro",
    value: "pro",
  },
  {
    description: "For enterprise-grade scale and governance.",
    label: "Enterprise",
    value: "enterprise",
  },
];
