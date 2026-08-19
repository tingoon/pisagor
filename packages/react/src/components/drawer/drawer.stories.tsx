import { Button } from "@pisagor/react/button";
import { Drawer } from "@pisagor/react/drawer";
import { Field } from "@pisagor/react/field";
import { Input } from "@pisagor/react/input";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Drawer,
  parameters: {
    docs: {
      aliases: ["tray"],
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
          "Slides a panel over the page for secondary tasks or details without leaving the current context.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Body: Drawer.Body,
    Close: Drawer.Close,
    Content: Drawer.Content,
    ContentInner: Drawer.ContentInner,
    Description: Drawer.Description,
    Footer: Drawer.Footer,
    Grabber: Drawer.Grabber,
    Header: Drawer.Header,
    Overlay: Drawer.Overlay,
    Positioner: Drawer.Positioner,
    Title: Drawer.Title,
    Trigger: Drawer.Trigger,
  },
  title: "Components/Overlay/Drawer",
});

export const Default = meta.story({
  render: () => (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Make changes to your account here. Swipe down to close."
            title="Edit profile"
          />
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
            <Drawer.Close asChild>
              <Button>Save changes</Button>
            </Drawer.Close>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content className="[--bleed:2rem] [--space:--spacing(6)]">
        <Drawer.ContentInner>
          <Drawer.Header
            description="Tighter bleed and larger internal padding than defaults."
            title="Custom spacing"
          />
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
            <Drawer.Close asChild>
              <Button>Save changes</Button>
            </Drawer.Close>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
});

export const DrawerContentInner = meta.story({
  render: () => (
    <Drawer swipeDirection="down">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Constrains width to max-w-sm and centers content. Use it to wrap the main body or footer actions."
            title="Container"
          />
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
            <Drawer.Close asChild>
              <Button>Save</Button>
            </Drawer.Close>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
});

export const Inset = meta.story({
  render: () => (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content variant="inset">
        <Drawer.ContentInner>
          <Drawer.Header
            description="On larger screens, the drawer appears with rounded corners and padding."
            title="Inset drawer"
          />
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
            <Drawer.Close asChild>
              <Button>Save</Button>
            </Drawer.Close>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
});

export const SnapPoints = meta.story({
  render: () => (
    <Drawer defaultSnapPoint={0.5} snapPoints={[0.25, 0.5, 1]} snapToSequentialPoints>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Drag to 25%, 50%, or 100% height. Swipe down to close."
            title="Snap points"
          />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">
              This drawer has multiple snap points. Try dragging the handle to quarter, half, or
              full height.
            </p>
          </Drawer.Body>
        </Drawer.ContentInner>
      </Drawer.Content>
    </Drawer>
  ),
});

export const SwipeDirections = meta.story({
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Drawer swipeDirection="down">
        <Drawer.Trigger asChild>
          <Button variant="outline">Bottom</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="Bottom drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe down to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="up">
        <Drawer.Trigger asChild>
          <Button variant="outline">Top</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="Top drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe up to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="start">
        <Drawer.Trigger asChild>
          <Button variant="outline">Left</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="Start drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe left to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="end">
        <Drawer.Trigger asChild>
          <Button variant="outline">Right</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="End drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe right to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
    </div>
  ),
});
