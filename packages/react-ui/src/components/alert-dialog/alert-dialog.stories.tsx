import { AlertDialog, Button } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          "Interrupts the user with a focused confirmation before a destructive or irreversible action proceeds.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Action: AlertDialog.Action,
    Body: AlertDialog.Body,
    Cancel: AlertDialog.Cancel,
    CloseTrigger: AlertDialog.CloseTrigger,
    Content: AlertDialog.Content,
    Description: AlertDialog.Description,
    Footer: AlertDialog.Footer,
    Header: AlertDialog.Header,
    Root: AlertDialog.Root,
    Title: AlertDialog.Title,
    Trigger: AlertDialog.Trigger,
  },
  title: "Components/Overlay/Alert Dialog",
});

export const Default = meta.story({
  render: () => (
    <AlertDialog
      actions={
        <>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger asChild>
            <AlertDialog.Action>Allow</AlertDialog.Action>
          </AlertDialog.CloseTrigger>
        </>
      }
      description="Do you want to allow the USB accessory to connect to this device?"
      title="Allow accessory to connect?"
      trigger={<Button variant="outline">Open</Button>}
    />
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <AlertDialog
        actions={
          <>
            <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
            <AlertDialog.CloseTrigger asChild>
              <AlertDialog.Action variant="default">Allow</AlertDialog.Action>
            </AlertDialog.CloseTrigger>
          </>
        }
        description="Do you want to allow the USB accessory to connect to this device?"
        title="Allow accessory to connect?"
        trigger={<Button variant="outline">Default</Button>}
      />
      <AlertDialog
        actions={
          <>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.CloseTrigger asChild>
              <AlertDialog.Action variant="destructive">Delete project</AlertDialog.Action>
            </AlertDialog.CloseTrigger>
          </>
        }
        description="This action cannot be undone. This will permanently delete the project and remove all data."
        title="Delete project"
        trigger={<Button variant="outline">Destructive</Button>}
      />
    </div>
  ),
});

export const Composition = meta.story({
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
          <AlertDialog.Description>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger asChild>
            <AlertDialog.Action>Allow</AlertDialog.Action>
          </AlertDialog.CloseTrigger>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
});
