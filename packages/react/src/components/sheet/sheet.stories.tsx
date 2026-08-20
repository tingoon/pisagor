import { Button, Field, Input, Sheet } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Sheet,
  parameters: {
    docs: {
      aliases: ["side-panel"],
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
          "Slides a panel in from the edge of the screen for secondary tasks on mobile and desktop.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Body: Sheet.Body,
    Close: Sheet.Close,
    Content: Sheet.Content,
    Description: Sheet.Description,
    Footer: Sheet.Footer,
    Header: Sheet.Header,
    Overlay: Sheet.Overlay,
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
        <Sheet.Header
          description="Make changes to your account here. Click save when you're done."
          title="Edit user"
        />
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
          <Sheet.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.Close>
          <Sheet.Close asChild>
            <Button>Save changes</Button>
          </Sheet.Close>
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
        <Sheet.Header
          description="Make changes to your account here. Click save when you're done."
          title="Edit user"
        />
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
          <Sheet.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.Close>
          <Sheet.Close asChild>
            <Button>Save changes</Button>
          </Sheet.Close>
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
        <Sheet.Header
          description="This sheet uses the inset variant with rounded corners and padding."
          title="Inset sheet"
        />
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
          <Sheet.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.Close>
          <Sheet.Close asChild>
            <Button>Save changes</Button>
          </Sheet.Close>
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
        <Sheet.Header
          description="You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop."
          title="No close button"
        />
        <Sheet.Body>
          <p className="text-muted-foreground text-sm">
            The close button in the top right corner is hidden. Use the footer buttons or press
            Escape to close.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.Close>
          <Sheet.Close asChild>
            <Button>Confirm</Button>
          </Sheet.Close>
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
        <Sheet.Header
          description="This is a non-modal sheet. You can interact with elements outside the sheet."
          title="Non-modal sheet"
        />
        <Sheet.Body>
          <p className="text-muted-foreground text-sm">
            Non-modal sheets allow interaction with elements outside. Focus trapping and scroll
            prevention are turned off.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <Button variant="outline">Close</Button>
          </Sheet.Close>
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
        <Sheet.Header title="Terms and conditions" />
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
          <Sheet.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Sheet.Close>
          <Sheet.Close asChild>
            <Button>Agree</Button>
          </Sheet.Close>
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
          <Sheet.Header title="Right placement sheet" />
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
          <Sheet.Header title="Left placement sheet" />
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
          <Sheet.Header title="Top placement sheet" />
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
          <Sheet.Header title="Bottom placement sheet" />
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
          <Sheet.Header
            description="Clicking outside does not close this sheet. Press ESC or use the close button."
            title="Stays on outside click"
          />
        </Sheet.Content>
      </Sheet>
      <Sheet closeOnEscape={false}>
        <Sheet.Trigger asChild>
          <Button variant="outline">No close on Escape</Button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header
            description="Pressing Escape does not close this sheet. Click outside or use the close button."
            title="Escape key unavailable"
          />
        </Sheet.Content>
      </Sheet>
    </div>
  ),
});
