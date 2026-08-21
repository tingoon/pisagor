import type { DatePickerProps } from "@pisagor/vue";
import { parseDate } from "@pisagor/vue";
import { useAppForm } from "@pisagor/vue-form/tanstack";
import { defineComponent, h } from "vue";
import preview from "#/storybook/preview";

type DatePickerValue = NonNullable<DatePickerProps["value"]>;

const meta = preview.meta({
  component: defineComponent({ name: "TanStackFormDemo" }),
  parameters: {
    docs: {
      description: {
        component:
          "Shows every connected form field wired to a single form with default values and a submit button.",
      },
    },
  },
  title: "Forms/TanStack Form",
});

export const Default = meta.story({
  render: () => ({
    setup() {
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

      return () =>
        h(form.Root as never, { class: "flex flex-col gap-6" }, () => [
          h(
            form.AppField,
            { name: "email" },
            {
              default: (field: { TextField: unknown }) =>
                h(field.TextField as never, {
                  autoComplete: "email",
                  id: "tanstack-form-email",
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
                  id: "tanstack-form-password",
                  label: "Password",
                  placeholder: "Enter your password",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "phone" },
            {
              default: (field: { PhoneField: unknown }) =>
                h(field.PhoneField as never, {
                  defaultCountry: "US",
                  id: "tanstack-form-phone",
                  label: "Phone number",
                  placeholder: "Enter phone number",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "city" },
            {
              default: (field: { AutocompleteField: unknown }) =>
                h(field.AutocompleteField as never, {
                  description: "Start typing to filter options.",
                  id: "tanstack-form-city",
                  items: cityOptions,
                  label: "City",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "country" },
            {
              default: (field: { SelectField: unknown }) =>
                h(field.SelectField as never, {
                  description: "Used for shipping estimates.",
                  id: "tanstack-form-country",
                  items: countryOptions,
                  label: "Country",
                  placeholder: "Select a country",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "startDate" },
            {
              default: (field: { DateField: unknown }) =>
                h(field.DateField as never, {
                  description: "Pick your preferred project kickoff date.",
                  id: "tanstack-form-start-date",
                  label: "Start date",
                  placeholder: "Select a date",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "quantity" },
            {
              default: (field: { NumberField: unknown }) =>
                h(field.NumberField as never, {
                  description: "Choose between 1 and 10.",
                  id: "tanstack-form-quantity",
                  label: "Quantity",
                  max: 10,
                  min: 1,
                  placeholder: "0",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "code" },
            {
              default: (field: { OtpField: unknown }) =>
                h(field.OtpField as never, {
                  class: "items-center",
                  label: "Verification code",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "plan" },
            {
              default: (field: { RadioGroupField: unknown }) =>
                h(field.RadioGroupField as never, {
                  description: "You can change this anytime in billing settings.",
                  id: "tanstack-form-plan",
                  label: "Plan",
                  options: planOptions,
                }),
            },
          ),
          h(
            form.AppField,
            { name: "bio" },
            {
              default: (field: { TextareaField: unknown }) =>
                h(field.TextareaField as never, {
                  id: "tanstack-form-bio",
                  label: "Bio",
                  placeholder: "Tell us about yourself…",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "body" },
            {
              default: (field: { RichTextEditorField: unknown }) =>
                h(field.RichTextEditorField as never, {
                  description: "Supports basic formatting.",
                  id: "tanstack-form-body",
                  label: "Announcement",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "notifications" },
            {
              default: (field: { SwitchField: unknown }) =>
                h(field.SwitchField as never, {
                  description: "Get release updates by email.",
                  id: "tanstack-form-notifications",
                  label: "Enable notifications",
                }),
            },
          ),
          h(
            form.AppField,
            { name: "acceptedTerms" },
            {
              default: (field: { CheckboxField: unknown }) =>
                h(field.CheckboxField as never, {
                  id: "tanstack-form-accepted-terms",
                  label: "I accept the terms and conditions",
                }),
            },
          ),
          h(form.SubmitButton, null, () => "Save profile"),
        ]);
    },
  }),
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
