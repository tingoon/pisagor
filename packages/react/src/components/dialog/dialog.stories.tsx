import { Portal } from "@ark-ui/react/portal";
import { Button, Dialog, Field, Input, Select } from "@pisagor/react";
import { useRef } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "Focuses attention on a task or decision in a modal layer above the current page.",
      },
    },
    metadata: {
      aliases: ["modal"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Backdrop: Dialog.Backdrop,
    Body: Dialog.Body,
    CloseTrigger: Dialog.CloseTrigger,
    Content: Dialog.Content,
    Description: Dialog.Description,
    Footer: Dialog.Footer,
    Header: Dialog.Header,
    Positioner: Dialog.Positioner,
    Root: Dialog.Root,
    Title: Dialog.Title,
    Trigger: Dialog.Trigger,
  },
  title: "Components/Overlay/Dialog",
});

export const Default = meta.story({
  render: () => (
    <Dialog
      actions={
        <>
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </>
      }
      description="Make changes to your project settings."
      title="Edit project"
      trigger={<Button variant="outline">Open</Button>}
    >
      <Field.Set>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Your project" />
          </Field>
          <Field>
            <Field.Label>Main branch</Field.Label>
            <Select
              items={[
                { label: "main", value: "main" },
                { label: "develop", value: "develop" },
                { label: "feature/123", value: "feature/123" },
                { label: "release/1.0.0", value: "release/1.0.0" },
              ]}
              placeholder="Select branch"
            />
          </Field>
        </Field.Group>
      </Field.Set>
    </Dialog>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content className="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
            <Dialog.Header>
              <Dialog.Title>Edit project</Dialog.Title>
              <Dialog.Description>Make changes to your project settings.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <Field.Set>
                <Field.Group>
                  <Field>
                    <Field.Label>Name</Field.Label>
                    <Input placeholder="Your project" />
                  </Field>
                  <Field>
                    <Field.Label>Main branch</Field.Label>
                    <Select
                      items={[
                        { label: "main", value: "main" },
                        { label: "develop", value: "develop" },
                      ]}
                      placeholder="Select branch"
                    />
                  </Field>
                </Field.Group>
              </Field.Set>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
              <Dialog.CloseTrigger asChild>
                <Button>Save</Button>
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  ),
});

export const InitialFocus = meta.story({
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <Dialog
        actions={
          <>
            <Dialog.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.CloseTrigger>
            <Dialog.CloseTrigger asChild>
              <Button>Save</Button>
            </Dialog.CloseTrigger>
          </>
        }
        description="The first input will be focused when the dialog opens."
        initialFocusEl={() => inputRef.current}
        title="Edit profile"
        trigger={<Button variant="outline">Open</Button>}
      >
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Input placeholder="John Doe" ref={inputRef} />
          </Field>
          <Field>
            <Field.Label>Email</Field.Label>
            <Input placeholder="john.doe@example.com" />
          </Field>
        </Field.Group>
      </Dialog>
    );
  },
});

export const Nested = meta.story({
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Manage team member</Dialog.Title>
              <Dialog.Description>View and manage a user in your team.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body className="grid gap-2">
              <div className="grid gap-1">
                <p className="text-muted-foreground text-sm">Name</p>
                <p className="font-medium text-sm">Jane Doe</p>
              </div>
              <div className="grid gap-1">
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium text-sm">you@example.com</p>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button variant="outline">Edit details</Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />

                  <Dialog.Positioner>
                    <Dialog.Content showCloseButton={false}>
                      <Dialog.Header>
                        <Dialog.Title>Edit details</Dialog.Title>
                        <Dialog.Description>
                          Make changes to the member&apos;s information.
                        </Dialog.Description>
                      </Dialog.Header>
                      <Dialog.Body>
                        <Field.Group>
                          <Field>
                            <Field.Label>Name</Field.Label>
                            <Input defaultValue="Jane Doe" type="text" />
                          </Field>
                          <Field>
                            <Field.Label>Email</Field.Label>
                            <Input defaultValue="you@example.com" type="text" />
                          </Field>
                        </Field.Group>
                      </Dialog.Body>
                      <Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                          <Button variant="ghost">Cancel</Button>
                        </Dialog.CloseTrigger>
                        <Button type="submit">Save changes</Button>
                      </Dialog.Footer>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  ),
});

export const NoCloseButton = meta.story({
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content showCloseButton={false}>
            <Dialog.Header>
              <Dialog.Title>No close button</Dialog.Title>
              <Dialog.Description>
                You can only close this dialog using the buttons in the footer, by pressing Escape
                or by clicking the backdrop.
              </Dialog.Description>
            </Dialog.Header>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  ),
});

export const NonModal = meta.story({
  render: () => (
    <Dialog
      actions={
        <Dialog.CloseTrigger asChild>
          <Button variant="outline">Close</Button>
        </Dialog.CloseTrigger>
      }
      description="This is a non-modal dialog. You can interact with elements outside the dialog."
      modal={false}
      title="Non-modal dialog"
      trigger={<Button variant="outline">Open</Button>}
    >
      <p className="text-muted-foreground text-sm">
        Non-modal dialogs allow interaction with elements outside the dialog. Focus trapping and
        scroll prevention are turned off.
      </p>
    </Dialog>
  ),
});

export const ScrollArea = meta.story({
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content size="lg">
            <Dialog.Header>
              <Dialog.Title>Terms and conditions</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body scrollFade>
              <div className="space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat
                  nisl, ac consequat sem hendrerit in.
                </p>
                <h3>Why do we use it?</h3>
                <p>
                  Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam
                  posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit.
                </p>
                <h3>Where does it come from?</h3>
                <p>
                  Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque urna
                  lorem, porttitor ac malesuada at, vehicula eget nulla.
                </p>
                <h3>Where can I get some?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros
                  a maximus. Sed consequat tempus lobortis.
                </p>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="ghost">Cancel</Button>
              </Dialog.CloseTrigger>
              <Dialog.CloseTrigger asChild>
                <Button>Agree</Button>
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  ),
});

export const CloseBehavior = meta.story({
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Dialog.Root closeOnInteractOutside={false}>
        <Dialog.Trigger asChild>
          <Button variant="outline">No close on outside click</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <Dialog.Title>Stays on outside click</Dialog.Title>
                <Dialog.Description>
                  Clicking outside does not close this dialog. Press ESC or use the button to close.
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Dialog.Root closeOnEscape={false}>
        <Dialog.Trigger asChild>
          <Button variant="outline">No close on Escape</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <Dialog.Title>Escape key unavailable</Dialog.Title>
                <Dialog.Description>
                  Pressing Escape does not close this dialog. Click outside or use the close button.
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  ),
});
