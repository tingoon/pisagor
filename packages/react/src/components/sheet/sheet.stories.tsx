import preview from "#/storybook/preview";
import { Button, Field, Input, Sheet } from "..";

const meta = preview.meta({
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          "Slides a panel in from the edge of the screen for secondary tasks on mobile and desktop.",
      },
    },
    metadata: {
      aliases: ["side-panel"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Backdrop: Sheet.Backdrop,
    Body: Sheet.Body,
    CloseTrigger: Sheet.CloseTrigger,
    Content: Sheet.Content,
    Description: Sheet.Description,
    Footer: Sheet.Footer,
    Header: Sheet.Header,
    Positioner: Sheet.Positioner,
    Title: Sheet.Title,
    Trigger: Sheet.Trigger,
  },
  title: "Components/Overlay/Sheet",
});

export const Default = meta.story({
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit user</Sheet.Title>
          <Sheet.Description>
            Make changes to your account here. Click save when you're done.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Input defaultValue="@jane.doe" />
            </Field>
          </Field.Group>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content className="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
        <Sheet.Header>
          <Sheet.Title>Edit user</Sheet.Title>
          <Sheet.Description>
            Make changes to your account here. Click save when you're done.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Input defaultValue="@jane.doe" />
            </Field>
          </Field.Group>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
});

export const Inset = meta.story({
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content variant="inset">
        <Sheet.Header>
          <Sheet.Title>Inset sheet</Sheet.Title>
          <Sheet.Description>
            This sheet uses the inset variant with rounded corners and padding.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Email</Field.Label>
              <Input defaultValue="you@example.com" />
            </Field>
          </Field.Group>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
});

export const NoCloseButton = meta.story({
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content showCloseButton={false}>
        <Sheet.Header>
          <Sheet.Title>No close button</Sheet.Title>
          <Sheet.Description>
            You can only close this sheet using the buttons in the footer, by pressing Escape or by
            clicking the backdrop.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p className="text-muted-foreground text-sm">
            The close button in the top right corner is hidden. Use the footer buttons or press
            Escape to close.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Confirm</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
});

export const NonModal = meta.story({
  render: () => (
    <Sheet modal={false}>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Non-modal sheet</Sheet.Title>
          <Sheet.Description>
            This is a non-modal sheet. You can interact with elements outside the sheet.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p className="text-muted-foreground text-sm">
            Non-modal sheets allow interaction with elements outside. Focus trapping and scroll
            prevention are turned off.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Close</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
});

export const ScrollArea = meta.story({
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Terms and conditions</Sheet.Title>
        </Sheet.Header>
        <Sheet.Body scrollFade>
          <div className="space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm">
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat
              nisl, ac consequat sem hendrerit in.
            </p>
            <h3>Why do we use it?</h3>
            <p>
              Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam
              posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit, non
              lobortis lacus nunc nec nisl.
            </p>
            <h3>Where does it come from?</h3>
            <p>
              Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Pellentesque
              pellentesque est euismod accumsan ullamcorper. Quisque urna lorem, porttitor ac
              malesuada at, vehicula eget nulla. Donec eget consequat erat, quis pharetra ex.
            </p>
            <h3>Where can I get some?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a
              maximus. Sed consequat tempus lobortis. Phasellus sed vulputate turpis. Nulla
              facilisi. Curabitur consequat dui tellus.
            </p>
            <h3>Who can I contact if I have questions?</h3>
            <p>
              Donec tortor lorem, finibus vel suscipit vehicula, sagittis efficitur erat. Proin
              sagittis aliquam sagittis. Nullam sed porta leo. Nunc sed velit felis.
            </p>
            <h3>What happens if I don't agree to these terms?</h3>
            <p>
              Aenean maximus, libero vel laoreet congue, purus leo iaculis libero, egestas egestas
              quam mi at quam. Curabitur eu tempus mauris. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae;
            </p>
            <h3>Where can I get some?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a
              maximus. Sed consequat tempus lobortis. Phasellus sed vulputate turpis. Nulla
              facilisi. Curabitur consequat dui tellus.
            </p>
          </div>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="ghost">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Agree</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
});

export const Sides = meta.story({
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Right</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="right">
          <Sheet.Header>
            <Sheet.Title>Right placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the right placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Left</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="left">
          <Sheet.Header>
            <Sheet.Title>Left placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the left placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Top</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="top">
          <Sheet.Header>
            <Sheet.Title>Top placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the top placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Bottom</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="bottom">
          <Sheet.Header>
            <Sheet.Title>Bottom placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">This sheet slides in from the bottom.</p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
    </div>
  ),
});

export const CloseBehavior = meta.story({
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Sheet closeOnInteractOutside={false}>
        <Sheet.Trigger asChild>
          <Button variant="outline">No close on outside click</Button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Stays on outside click</Sheet.Title>
            <Sheet.Description>
              Clicking outside does not close this sheet. Press ESC or use the close button.
            </Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
      <Sheet closeOnEscape={false}>
        <Sheet.Trigger asChild>
          <Button variant="outline">No close on Escape</Button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Escape key unavailable</Sheet.Title>
            <Sheet.Description>
              Pressing Escape does not close this sheet. Click outside or use the close button.
            </Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
    </div>
  ),
});
