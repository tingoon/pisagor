import { PhCheck, PhPencilSimple, PhX } from "@phosphor-icons/vue";
import { Button, Card, Editable, Field, Input, Surface, Textarea } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Editable,
  parameters: {
    docs: {
      description: {
        component:
          "Turns static text into inline editing so users can update a value where it is shown.",
      },
    },
    metadata: {
      api: "compound",
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
  render: () => ({
    components: { Button, Editable, Input, PhCheck, PhX },
    template: `
      <Editable default-value="Editable content">
        <Editable.Area>
          <Editable.Input as-child>
            <Input />
          </Editable.Input>
          <Editable.Preview />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhX />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhCheck />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Button, Editable, Input, PhCheck, PhX },
    template: `
      <Editable default-value="Editable content" invalid>
        <Editable.Area>
          <Editable.Input as-child>
            <Input />
          </Editable.Input>
          <Editable.Preview />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhX />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhCheck />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Button, Editable, Input, PhCheck, PhX },
    template: `
      <Editable default-value="Editable content" disabled>
        <Editable.Area>
          <Editable.Input as-child>
            <Input />
          </Editable.Input>
          <Editable.Preview />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhX />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhCheck />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Button, Editable, Input, PhCheck, PhX },
    template: `
      <div class="flex flex-col gap-2">
        <Editable default-value="Editable content">
          <Editable.Area>
            <Editable.Input as-child>
              <Input size="sm" />
            </Editable.Input>
            <Editable.Preview size="sm" />
          </Editable.Area>
          <Editable.Control>
            <Editable.CancelTrigger as-child>
              <Button size="icon-sm" variant="outline">
                <PhX />
              </Button>
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger as-child>
              <Button size="icon-sm" variant="outline">
                <PhCheck />
              </Button>
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
        <Editable default-value="Editable content">
          <Editable.Area>
            <Editable.Input as-child>
              <Input size="md" />
            </Editable.Input>
            <Editable.Preview size="md" />
          </Editable.Area>
          <Editable.Control>
            <Editable.CancelTrigger as-child>
              <Button size="icon-md" variant="outline">
                <PhX />
              </Button>
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger as-child>
              <Button size="icon-md" variant="outline">
                <PhCheck />
              </Button>
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
        <Editable default-value="Editable content">
          <Editable.Area>
            <Editable.Input as-child>
              <Input size="lg" />
            </Editable.Input>
            <Editable.Preview size="lg" />
          </Editable.Area>
          <Editable.Control>
            <Editable.CancelTrigger as-child>
              <Button size="icon-lg" variant="outline">
                <PhX />
              </Button>
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger as-child>
              <Button size="icon-lg" variant="outline">
                <PhCheck />
              </Button>
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Editable, Input },
    template: `
      <div class="flex flex-col gap-2">
        <Editable default-value="Primary">
          <Editable.Area>
            <Editable.Input as-child>
              <Input class="w-full" />
            </Editable.Input>
            <Editable.Preview control-variant="primary" />
          </Editable.Area>
        </Editable>
        <Editable default-value="Secondary">
          <Editable.Area>
            <Editable.Input as-child>
              <Input class="w-full" />
            </Editable.Input>
            <Editable.Preview control-variant="secondary" />
          </Editable.Area>
        </Editable>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Editable, Input, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <Editable default-value="Primary">
            <Editable.Area>
              <Editable.Input as-child>
                <Input class="w-full" />
              </Editable.Input>
              <Editable.Preview control-variant="primary" />
            </Editable.Area>
          </Editable>
          <Editable default-value="Secondary">
            <Editable.Area>
              <Editable.Input as-child>
                <Input class="w-full" />
              </Editable.Input>
              <Editable.Preview control-variant="secondary" />
            </Editable.Area>
          </Editable>
        </div>
      </Surface>
    `,
  }),
});

export const Dblclick = meta.story({
  render: () => ({
    components: { Button, Card, Editable, Field, Input, PhCheck, PhX },
    template: `
      <Card>
        <Card.Header description="Double-click the text to start editing" title="Edit with double-click" />
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable activation-mode="dblclick" default-value="Jane Doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Editable activation-mode="dblclick" default-value="@jane.doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Button, Editable, Input, PhCheck, PhX },
    template: `
      <Editable default-value="Editable content" orientation="horizontal">
        <Editable.Area>
          <Editable.Input as-child>
            <Input />
          </Editable.Input>
          <Editable.Preview />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhX />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhCheck />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Button, Editable, PhCheck, PhX, Textarea },
    template: `
      <Editable default-value="Editable content" orientation="vertical">
        <Editable.Area>
          <Editable.Input as-child>
            <Textarea class="min-h-24" />
          </Editable.Input>
          <Editable.Preview class="min-h-24" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhX />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger as-child>
            <Button size="icon-md" variant="outline">
              <PhCheck />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    `,
  }),
});

export const WithTextarea = meta.story({
  render: () => ({
    components: { Button, Card, Editable, Field, PhCheck, PhX, Textarea },
    template: `
      <Card>
        <Card.Header description="Double-click the text to start editing" title="Edit description" />
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Description</Field.Label>
              <Editable
                default-value="This is a longer description that can be edited. Click to edit and make changes."
                orientation="vertical"
              >
                <Editable.Area>
                  <Editable.Input as-child>
                    <Textarea class="min-h-24" />
                  </Editable.Input>
                  <Editable.Preview class="min-h-24" />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});

export const WithoutControls = meta.story({
  render: () => ({
    components: { Card, Editable, Field, Input },
    template: `
      <Card>
        <Card.Header description="Click the field to edit, press Enter to save, Escape to cancel" title="Edit without controls" />
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable default-value="Jane Doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Email</Field.Label>
              <Editable default-value="jane.doe@example.com">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});

export const ActivationClick = meta.story({
  render: () => ({
    components: { Button, Card, Editable, Field, Input, PhCheck, PhX },
    template: `
      <Card>
        <Card.Header description="Click the text to start editing" title="Edit with click" />
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable activation-mode="click" default-value="Jane Doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Editable activation-mode="click" default-value="@jane.doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});

export const ActivationFocus = meta.story({
  render: () => ({
    components: { Button, Card, Editable, Field, Input, PhCheck, PhX },
    template: `
      <Card>
        <Card.Header description="Focus the field to start editing (default activation mode)" title="Edit with focus" />
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable activation-mode="focus" default-value="Jane Doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Editable activation-mode="focus" default-value="@jane.doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});

export const ActivationNone = meta.story({
  render: () => ({
    components: { Button, Card, Editable, Field, Input, PhCheck, PhPencilSimple, PhX },
    template: `
      <Card>
        <Card.Header description="Use the edit button to start editing (no automatic activation)" title="Edit with manual trigger" />
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable activation-mode="none" default-value="Jane Doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.EditTrigger as-child>
                    <Button aria-label="Edit" size="icon-md" variant="outline">
                      <PhPencilSimple />
                    </Button>
                  </Editable.EditTrigger>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Editable activation-mode="none" default-value="@jane.doe">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
                <Editable.Control>
                  <Editable.EditTrigger as-child>
                    <Button aria-label="Edit" size="icon-md" variant="outline">
                      <PhPencilSimple />
                    </Button>
                  </Editable.EditTrigger>
                  <Editable.CancelTrigger as-child>
                    <Button aria-label="Cancel" size="icon-md" variant="outline">
                      <PhX />
                    </Button>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger as-child>
                    <Button aria-label="Save" size="icon-md" variant="outline">
                      <PhCheck />
                    </Button>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Card, Editable, Field, Input, PhCheck, PhPencilSimple },
    setup() {
      const isEditing = ref(false);
      return { isEditing };
    },
    template: `
      <Card>
        <Card.Header description="Click the edit button to start editing" title="Edit user">
          <Card.Action>
            <Button @click="isEditing = !isEditing" :variant="isEditing ? 'outline' : 'ghost'">
              <template v-if="isEditing">
                <PhCheck /> Save
              </template>
              <template v-else>
                <PhPencilSimple /> Edit
              </template>
            </Button>
          </Card.Action>
        </Card.Header>
        <Card.Content>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Editable activation-mode="none" default-value="Jane Doe" :edit="isEditing">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
              </Editable>
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Editable activation-mode="none" default-value="@jane.doe" :edit="isEditing">
                <Editable.Area>
                  <Editable.Input as-child>
                    <Input />
                  </Editable.Input>
                  <Editable.Preview />
                </Editable.Area>
              </Editable>
            </Field>
          </Field.Group>
        </Card.Content>
      </Card>
    `,
  }),
});
