import preview from "#/storybook/preview";
import { SignInForm } from "./sign-in-form";

const meta = preview.meta({
  component: SignInForm,
  parameters: {
    docs: {
      description: {
        component:
          "Complete sign-in flow with email, password, validation, and remember-me checkbox using form fields.",
      },
    },
  },
  title: "Recipes/Forms/Form/Sign In",
});

export const Playground = meta.story({
  render: () => ({
    components: { SignInForm },
    template: `<SignInForm />`,
  }),
  tags: ["autodocs"],
});
