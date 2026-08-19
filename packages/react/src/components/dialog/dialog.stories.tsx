import { Button } from "@pisagor/react/button";
import { Dialog } from "@pisagor/react/dialog";
import { Field } from "@pisagor/react/field";
import { Input } from "@pisagor/react/input";
import { Select } from "@pisagor/react/select";
import { useRef } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Dialog,
  parameters: {
    docs: {
      aliases: ["modal"],
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
          "Focuses attention on a task or decision in a modal layer above the current page.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Body: Dialog.Body,
    Close: Dialog.Close,
    Content: Dialog.Content,
    Description: Dialog.Description,
    Footer: Dialog.Footer,
    Header: Dialog.Header,
    Overlay: Dialog.Overlay,
    Positioner: Dialog.Positioner,
    Title: Dialog.Title,
    Trigger: Dialog.Trigger,
  },
  title: "Components/Overlay/Dialog",
});

export const Default = meta.story({
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header description="Make changes to your project settings." title="Edit project" />
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
                    { label: "feature/123", value: "feature/123" },
                    { label: "release/1.0.0", value: "release/1.0.0" },
                  ]}
                  placeholder="Select branch"
                />
              </Field>
            </Field.Group>
          </Field.Set>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button>Save</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content className="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
        <Dialog.Header description="Make changes to your project settings." title="Edit project" />
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
          <Dialog.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button>Save</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
});

export const InitialFocus = meta.story({
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <Dialog initialFocusEl={() => inputRef.current}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header
            description="The first input will be focused when the dialog opens."
            title="Edit profile"
          />
          <Dialog.Body>
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
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button>Save</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
});

export const Nested = meta.story({
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header
          description="View and manage a user in your team."
          title="Manage team member"
        />
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
          <Dialog>
            <Dialog.Trigger asChild>
              <Button variant="outline">Edit details</Button>
            </Dialog.Trigger>
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
                <Dialog.Close asChild>
                  <Button variant="ghost">Cancel</Button>
                </Dialog.Close>
                <Button type="submit">Save changes</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
});

export const NoCloseButton = meta.story({
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content showCloseButton={false}>
        <Dialog.Header
          description="You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop."
          title="No close button"
        />
      </Dialog.Content>
    </Dialog>
  ),
});

export const NonModal = meta.story({
  render: () => (
    <Dialog modal={false}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header
          description="This is a non-modal dialog. You can interact with elements outside the dialog."
          title="Non-modal dialog"
        />
        <Dialog.Body>
          <p className="text-muted-foreground text-sm">
            Non-modal dialogs allow interaction with elements outside the dialog. Focus trapping and
            scroll prevention are turned off.
          </p>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">Close</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
});

export const ScrollArea = meta.story({
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content size="lg">
        <Dialog.Header title="Terms and conditions" />
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
              Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque urna lorem,
              porttitor ac malesuada at, vehicula eget nulla.
            </p>
            <h3>Where can I get some?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a
              maximus. Sed consequat tempus lobortis.
            </p>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button>Agree</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
});

export const CloseBehavior = meta.story({
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Dialog closeOnInteractOutside={false}>
        <Dialog.Trigger asChild>
          <Button variant="outline">No close on outside click</Button>
        </Dialog.Trigger>
        <Dialog.Content size="sm">
          <Dialog.Header
            description="Clicking outside does not close this dialog. Press ESC or use the button to close."
            title="Stays on outside click"
          />
        </Dialog.Content>
      </Dialog>
      <Dialog closeOnEscape={false}>
        <Dialog.Trigger asChild>
          <Button variant="outline">No close on Escape</Button>
        </Dialog.Trigger>
        <Dialog.Content size="sm">
          <Dialog.Header
            description="Pressing Escape does not close this dialog. Click outside or use the close button."
            title="Escape key unavailable"
          />
        </Dialog.Content>
      </Dialog>
    </div>
  ),
});
