import preview from "#/storybook/preview";
import { PasswordStrength } from "./password-strength";

const meta = preview.meta({
  component: PasswordStrength,
  parameters: {
    docs: {
      description: {
        component:
          "Compose a password field with live strength feedback, a segmented progress bar, and a requirement checklist for password creation flows.",
      },
    },
  },
  title: "Recipes/Forms/Password Input",
});

export const Strength = meta.story({
  render: () => ({
    components: { PasswordStrength },
    template: `<PasswordStrength />`,
  }),
});
