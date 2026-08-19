import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { PasswordStrength } from "./password-strength";

const meta = {
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
} satisfies Meta<typeof PasswordStrength>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Strength: Story = {};
