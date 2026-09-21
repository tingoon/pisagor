import { Field, Frame, Input, Switch } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Frame,
  parameters: {
    docs: {
      description: {
        component:
          "Embeds external content in a framed viewport with a consistent chrome around it.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Description: Frame.Description,
    Footer: Frame.Footer,
    Header: Frame.Header,
    Panel: Frame.Panel,
    Title: Frame.Title,
  },
  title: "Components/Media/Frame",
});

export const Default = meta.story({
  render: () => (
    <Frame>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>Brief description about the section</Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Frame.Footer>
    </Frame>
  ),
});

export const SeparatedPanels = meta.story({
  render: () => (
    <Frame>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>Brief description about the section</Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
    </Frame>
  ),
});

export const WithFormControls = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Root chrome is a secondary Surface; panels reset to default so nested controls keep contrast.",
      },
    },
  },
  render: () => (
    <Frame>
      <Frame.Header>
        <Frame.Title>Account</Frame.Title>
        <Frame.Description>Controls on muted Frame chrome and raised panels.</Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <Field.Group>
          <Field>
            <Field.Label htmlFor="frame-email">Email</Field.Label>
            <Input clearable id="frame-email" placeholder="you@example.com" />
          </Field>
          <Field orientation="horizontal">
            <Switch id="frame-notify" />
            <Field.Content>
              <Field.Label htmlFor="frame-notify">Email notifications</Field.Label>
            </Field.Content>
          </Field>
        </Field.Group>
      </Frame.Panel>
    </Frame>
  ),
});
