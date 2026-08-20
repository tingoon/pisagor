import { Fragment } from "react";
import preview from "#/storybook/preview";
import { SignInForm } from "./sign-in-form";

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
          "Complete sign-in flow with email, password, validation, and remember-me checkbox using form fields.",
      },
    },
  },
  title: "Recipes/Forms/Form/Sign In",
});

export const Default = meta.story({
  render: () => <SignInForm />,
});
