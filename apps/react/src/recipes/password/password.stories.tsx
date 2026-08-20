import { Fragment } from "react";
import preview from "#/storybook/preview";
import { PasswordStrength } from "./password-strength";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      description: {
        component:
          "Compose PasswordInput with live strength feedback, a segmented progress bar, and a requirement checklist for password creation flows.",
      },
    },
  },
  title: "Recipes/Forms/Password Input",
});

export const Strength = meta.story({
  render: () => <PasswordStrength />,
});
