import { Button, Toolbar } from "@pisagor/react";
import * as Examples from "@pisagor/react/toolbar/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Toolbar,
  parameters: {
    docs: {
      description: {
        component:
          "Organizes a section heading on the left and related actions on the right for list and page headers.",
      },
    },
  },
  title: "Components/Layout/Toolbar",
});

export const Playground = meta.story({
  args: {
    actions: (
      <>
        <Button variant="outline">Import</Button>
        <Button>New project</Button>
      </>
    ),
    description: "Manage deployments and monitor activity.",
    title: "Projects",
  },
  tags: ["autodocs"],
});

export const WrappedActions = meta.story({
  render: Examples.WrappedActions,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
