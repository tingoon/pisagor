import { CheckIcon, PencilSimpleIcon, XIcon } from "@phosphor-icons/react";
import { Button, Card, Editable, Field, Input, Textarea } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: Editable,
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
          "Turns static text into inline editing so users can update a value where it is shown.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Area: Editable.Area,
    CancelTrigger: Editable.CancelTrigger,
    Control: Editable.Control,
    EditTrigger: Editable.EditTrigger,
    Input: Editable.Input,
    Preview: Editable.Preview,
    SubmitTrigger: Editable.SubmitTrigger,
  },
  title: "Components/Forms/Editable",
});

export const Default = meta.story({
  args: {
    defaultValue: "Editable content",
  },
  render: (args) => (
    <Editable {...args}>
      <Editable.Area>
        <Editable.Input asChild>
          <Input />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  ),
});

export const Invalid = meta.story({
  args: {
    defaultValue: "Editable content",
    invalid: true,
  },
  render: (args) => (
    <Editable {...args}>
      <Editable.Area>
        <Editable.Input asChild>
          <Input />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  ),
});

export const Disabled = meta.story({
  args: {
    defaultValue: "Editable content",
    disabled: true,
  },
  render: (args) => (
    <Editable {...args}>
      <Editable.Area>
        <Editable.Input asChild>
          <Input />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input asChild>
            <Input size="sm" />
          </Editable.Input>
          <Editable.Preview size="sm" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger asChild>
            <Button size="icon-sm" variant="outline">
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <Button size="icon-sm" variant="outline">
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input asChild>
            <Input size="md" />
          </Editable.Input>
          <Editable.Preview size="md" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger asChild>
            <Button size="icon-md" variant="outline">
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <Button size="icon-md" variant="outline">
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input asChild>
            <Input size="lg" />
          </Editable.Input>
          <Editable.Preview size="lg" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger asChild>
            <Button size="icon-lg" variant="outline">
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <Button size="icon-lg" variant="outline">
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Editable defaultValue="Primary">
        <Editable.Area>
          <Editable.Input asChild>
            <Input className="w-full" />
          </Editable.Input>
          <Editable.Preview controlVariant="primary" />
        </Editable.Area>
      </Editable>
      <Editable defaultValue="Secondary">
        <Editable.Area>
          <Editable.Input asChild>
            <Input className="w-full" />
          </Editable.Input>
          <Editable.Preview controlVariant="secondary" />
        </Editable.Area>
      </Editable>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Dblclick = meta.story({
  render: () => (
    <Card>
      <Card.Header
        description="Double-click the text to start editing"
        title="Edit with double-click"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="dblclick" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="dblclick" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  ),
});

export const OrientationHorizontal = meta.story({
  args: {
    defaultValue: "Editable content",
    orientation: "horizontal",
  },
  render: (args) => (
    <Editable {...args}>
      <Editable.Area>
        <Editable.Input asChild>
          <Input />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  ),
});

export const OrientationVertical = meta.story({
  args: {
    defaultValue: "Editable content",
    orientation: "vertical",
  },
  render: (args) => (
    <Editable {...args}>
      <Editable.Area>
        <Editable.Input asChild>
          <Textarea className="min-h-24" />
        </Editable.Input>
        <Editable.Preview className="min-h-24" />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  ),
});

export const WithTextarea = meta.story({
  args: {
    defaultValue:
      "This is a longer description that can be edited. Click to edit and make changes.",
    orientation: "vertical",
  },
  render: (args) => (
    <Card>
      <Card.Header description="Double-click the text to start editing" title="Edit description" />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Description</Field.Label>
            <Editable {...args}>
              <Editable.Area>
                <Editable.Input asChild>
                  <Textarea className="min-h-24" />
                </Editable.Input>
                <Editable.Preview className="min-h-24" />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  ),
});

export const WithoutControls = meta.story({
  render: () => (
    <Card>
      <Card.Header
        description="Click the field to edit, press Enter to save, Escape to cancel"
        title="Edit without controls"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Email</Field.Label>
            <Editable defaultValue="jane.doe@example.com">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  ),
});

export const ActivationClick = meta.story({
  render: () => (
    <Card>
      <Card.Header description="Click the text to start editing" title="Edit with click" />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="click" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="click" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  ),
});

export const ActivationFocus = meta.story({
  render: () => (
    <Card>
      <Card.Header
        description="Focus the field to start editing (default activation mode)"
        title="Edit with focus"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="focus" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="focus" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  ),
});

export const ActivationNone = meta.story({
  render: () => (
    <Card>
      <Card.Header
        description="Use the edit button to start editing (no automatic activation)"
        title="Edit with manual trigger"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="none" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <Button aria-label="Edit" size="icon-md" variant="outline">
                    <PencilSimpleIcon />
                  </Button>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="none" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <Button aria-label="Edit" size="icon-md" variant="outline">
                    <PencilSimpleIcon />
                  </Button>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
      <Card>
        <Card.Header description="Click the edit button to start editing" title="Edit user">
          <Card.Action>
            <Button
              onClick={() => setIsEditing((prev) => !prev)}
              variant={isEditing ? "outline" : "ghost"}
            >
              {isEditing ? (
                <>
                  <CheckIcon /> Save
                </>
              ) : (
                <>
                  <PencilSimpleIcon /> Edit
                </>
              )}
            </Button>
          </Card.Action>
        </Card.Header>
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable activationMode="none" defaultValue="Jane Doe" edit={isEditing}>
                <Editable.Area>
                  <Editable.Input asChild>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Editable activationMode="none" defaultValue="@jane.doe" edit={isEditing}>
                <Editable.Area>
                  <Editable.Input asChild>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    );
  },
});
