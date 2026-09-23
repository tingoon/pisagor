import * as Examples from "@pisagor/react-form/tanstack/examples";
import { Fragment } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Fragment,
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

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});
