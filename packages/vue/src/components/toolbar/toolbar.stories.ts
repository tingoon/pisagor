import { Button, Toolbar } from "@pisagor/vue";
import { Fragment, h } from "vue";
import preview from "#/vue/preview";

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
  render: () => ({
    setup() {
      return () =>
        h(Toolbar as Parameters<typeof h>[0], {
          actions: h(Fragment, null, [
            h(Button, { variant: "outline" }, () => "Import"),
            h(Button, null, () => "New project"),
          ]),
          description: "Manage deployments and monitor activity.",
          title: "Projects",
        });
    },
  }),
});

export const WrappedActions = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Toolbar as Parameters<typeof h>[0], {
          actions: h(Fragment, null, [
            h(Button, { size: "sm", variant: "outline" }, () => "Invite"),
            h(Button, { size: "sm", variant: "outline" }, () => "Export"),
            h(Button, { size: "sm" }, () => "Add member"),
          ]),
          class: "items-center",
          title: "Team members",
        });
    },
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Toolbar.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { Button, Toolbar },
    template: `
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
    `,
  }),
});
