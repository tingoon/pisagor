import { Button, Toolbar } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Toolbar,
  parameters: {
    docs: {
      api: "compound-shorthand",
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
          "Organizes a section heading on the left and related actions on the right for list and page headers.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Actions: Toolbar.Actions,
    Description: Toolbar.Description,
    Heading: Toolbar.Heading,
    Root: Toolbar.Root,
    Title: Toolbar.Title,
  },
  title: "Components/Layout/Toolbar",
});

export const Default = meta.story({
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
});

export const WrappedActions = meta.story({
  args: {
    actions: (
      <>
        <Button size="sm" variant="outline">
          Invite
        </Button>
        <Button size="sm" variant="outline">
          Export
        </Button>
        <Button size="sm">Add member</Button>
      </>
    ),
    className: "items-center",
    title: "Team members",
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Toolbar.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Toolbar.Root>
      <Toolbar.Heading>
        <Toolbar.Title>Projects</Toolbar.Title>
        <Toolbar.Description>Manage deployments and monitor activity.</Toolbar.Description>
      </Toolbar.Heading>
      <Toolbar.Actions>
        <Button variant="outline">Import</Button>
        <Button>New project</Button>
      </Toolbar.Actions>
    </Toolbar.Root>
  ),
});
