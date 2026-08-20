import { AlertDialog, Button } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: AlertDialog,
  parameters: {
    docs: {
      api: "compound",
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
          "Interrupts the user with a focused confirmation before a destructive or irreversible action proceeds.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Action: AlertDialog.Action,
    Body: AlertDialog.Body,
    Cancel: AlertDialog.Cancel,
    Close: AlertDialog.Close,
    Content: AlertDialog.Content,
    Description: AlertDialog.Description,
    Footer: AlertDialog.Footer,
    Header: AlertDialog.Header,
    Title: AlertDialog.Title,
    Trigger: AlertDialog.Trigger,
  },
  title: "Components/Overlay/Alert Dialog",
});

export const Default = meta.story({
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header
          description="Do you want to allow the USB accessory to connect to this device?"
          title="Allow accessory to connect?"
        />
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.Close asChild>
            <AlertDialog.Action>Allow</AlertDialog.Action>
          </AlertDialog.Close>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button variant="outline">Default</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header
            description="Do you want to allow the USB accessory to connect to this device?"
            title="Allow accessory to connect?"
          />
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
            <AlertDialog.Close asChild>
              <AlertDialog.Action variant="default">Allow</AlertDialog.Action>
            </AlertDialog.Close>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button variant="outline">Destructive</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header
            description="This action cannot be undone. This will permanently delete the project and remove all data."
            title="Delete project"
          />
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Close asChild>
              <AlertDialog.Action variant="destructive">Delete project</AlertDialog.Action>
            </AlertDialog.Close>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </div>
  ),
});
