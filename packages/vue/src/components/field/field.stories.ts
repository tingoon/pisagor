import { createListCollection, useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhArrowRight } from "@phosphor-icons/vue";
import { Autocomplete } from "@pisagor/vue/autocomplete";
import { Checkbox } from "@pisagor/vue/checkbox";
import { Combobox } from "@pisagor/vue/combobox";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { InputGroup } from "@pisagor/vue/input-group";
import { NumberInput } from "@pisagor/vue/number-input";
import { RadioGroup } from "@pisagor/vue/radio-group";
import { Select } from "@pisagor/vue/select";
import { Slider } from "@pisagor/vue/slider";
import { Surface } from "@pisagor/vue/surface";
import { Switch } from "@pisagor/vue/switch";
import { Textarea } from "@pisagor/vue/textarea";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          "Wraps a form control with label, description, and error text so inputs are easier to understand and fix.",
      },
    },
  },
  subcomponents: {
    Content: Field.Content,
    Description: Field.Description,
    Error: Field.Error,
    Group: Field.Group,
    Helper: Field.Helper,
    Label: Field.Label,
    Legend: Field.Legend,
    RequiredIndicator: Field.RequiredIndicator,
    Separator: Field.Separator,
    Set: Field.Set,
    Title: Field.Title,
  },
  title: "Components/Forms/Field",
});

export const Default = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field>
        <Field.Label>Username</Field.Label>
        <Input placeholder="Enter username" />
        <Field.Description>Choose a unique username for your account.</Field.Description>
      </Field>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Field, Input, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <Field>
          <Field.Label>Username</Field.Label>
          <Input placeholder="Enter username" />
          <Field.Description>Choose a unique username for your account.</Field.Description>
        </Field>
      </Surface>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field orientation="horizontal">
        <Field.Label>Display name</Field.Label>
        <Input placeholder="Jane Doe" />
      </Field>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field orientation="vertical">
        <Field.Label>Name</Field.Label>
        <Input placeholder="Enter your name" type="text" />
        <Field.Description>Stacks label, control, and description vertically.</Field.Description>
      </Field>
    `,
  }),
});

export const AutocompleteField = meta.story({
  render: () => ({
    components: { Autocomplete, Field },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Orange", value: "orange" },
          { label: "Grape", value: "grape" },
          { label: "Strawberry", value: "strawberry" },
          { label: "Mango", value: "mango" },
          { label: "Pineapple", value: "pineapple" },
          { label: "Kiwi", value: "kiwi" },
          { label: "Peach", value: "peach" },
          { label: "Pear", value: "pear" },
        ],
      });

      return { collection, filter };
    },
    template: `
      <Field>
        <Field.Label>Fruits</Field.Label>
        <Autocomplete.Root
          :collection="collection"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Autocomplete.Input aria-label="Search items" placeholder="Search items…" />
          <Autocomplete.Content>
            <Autocomplete.Empty>No items found.</Autocomplete.Empty>
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <Field.Description>Select an item.</Field.Description>
      </Field>
    `,
  }),
});

export const CheckboxField = meta.story({
  render: () => ({
    components: { Checkbox, Field },
    template: `
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Receive notifications</Field.Label>
          <Field.Description>
            You'll receive a notification when someone posts a comment
          </Field.Description>
        </Field.Content>
      </Field>
    `,
  }),
});

export const CheckboxGroupField = meta.story({
  render: () => ({
    components: { Checkbox, Field },
    template: `
      <Field.Set>
        <Field.Legend variant="label">Select the items you want to show:</Field.Legend>
        <Field.Group>
          <Checkbox.Group class="gap-3" :default-value="['hard-disks', 'external-disks']">
            <Field orientation="horizontal">
              <Checkbox default-checked value="hard-disks" />
              <Field.Label class="font-normal">Hard disks</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox default-checked value="external-disks" />
              <Field.Label class="font-normal">External disks</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox value="cds-dvds-ipods" />
              <Field.Label class="font-normal">CDs, DVDs, and iPods</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox value="connected-servers" />
              <Field.Label class="font-normal">Connected servers</Field.Label>
            </Field>
          </Checkbox.Group>
        </Field.Group>
      </Field.Set>
    `,
  }),
});

export const ComboboxField = meta.story({
  render: () => ({
    components: { Combobox, Field },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Orange", value: "orange" },
          { label: "Grape", value: "grape" },
          { label: "Strawberry", value: "strawberry" },
          { label: "Mango", value: "mango" },
          { label: "Pineapple", value: "pineapple" },
          { label: "Kiwi", value: "kiwi" },
          { label: "Peach", value: "peach" },
          { label: "Pear", value: "pear" },
        ],
      });

      return { collection, filter };
    },
    template: `
      <Field>
        <Field.Label>Fruits</Field.Label>
        <Combobox.Root
          :collection="collection"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Combobox.Input aria-label="Select an item" placeholder="Select an item..." />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Field.Description>Select an item.</Field.Description>
      </Field>
    `,
  }),
});

export const ComboboxMultipleField = meta.story({
  render: () => ({
    components: { Combobox, Field },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Orange", value: "orange" },
          { label: "Grape", value: "grape" },
          { label: "Strawberry", value: "strawberry" },
          { label: "Mango", value: "mango" },
          { label: "Pineapple", value: "pineapple" },
          { label: "Kiwi", value: "kiwi" },
          { label: "Peach", value: "peach" },
          { label: "Pear", value: "pear" },
        ],
      });

      return { collection, filter };
    },
    template: `
      <Field>
        <Field.Label>Fruits</Field.Label>
        <Combobox.Root
          :collection="collection"
          multiple
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Combobox.Input aria-label="Select items" placeholder="Select items…" />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Field.Description>Select multiple items.</Field.Description>
      </Field>
    `,
  }),
});

export const DisabledField = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field disabled>
        <Field.Label>Email</Field.Label>
        <Input disabled placeholder="Enter your email" type="email" />
        <Field.Description>This field is currently unavailable.</Field.Description>
      </Field>
    `,
  }),
});

export const FieldGroup = meta.story({
  render: () => ({
    components: { Checkbox, Field },
    template: `
      <Field.Group>
        <Field.Set>
          <Field.Legend variant="label">Newsletter</Field.Legend>
          <Field.Description>
            Choose how you want to receive updates about new features and product releases.
          </Field.Description>
          <Field orientation="horizontal">
            <Checkbox default-checked disabled value="weekly" />
            <Field.Label>Weekly digest</Field.Label>
          </Field>
        </Field.Set>
        <Field.Separator />
        <Field.Set>
          <Field.Legend variant="label">Updates</Field.Legend>
          <Field.Description>
            Get notified about important account activity.
            <a href="https://example.com/view-activity-log">View activity log</a>
          </Field.Description>
          <Checkbox.Group>
            <Field orientation="horizontal">
              <Checkbox value="security" />
              <Field.Label>Security alerts</Field.Label>
            </Field>
            <Field orientation="horizontal">
              <Checkbox value="billing" />
              <Field.Label>Billing reminders</Field.Label>
            </Field>
          </Checkbox.Group>
        </Field.Set>
      </Field.Group>
    `,
  }),
});

export const WithInputGroup = meta.story({
  render: () => ({
    components: { Field, InputGroup, PhArrowRight },
    template: `
      <Field>
        <Field.Label>Subscribe</Field.Label>
        <InputGroup>
          <InputGroup.Input placeholder="Your best email" type="email" />
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button aria-label="Subscribe" size="icon-xs" variant="ghost">
              <PhArrowRight aria-hidden="true" />
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Error>Please enter a valid email address.</Field.Error>
      </Field>
    `,
  }),
});

export const NumberInputStory = meta.story({
  render: () => ({
    components: { Field, NumberInput },
    template: `
      <Field>
        <NumberInput default-value="50" :max="100" :min="1">
          <NumberInput.Scrubber>Quantity</NumberInput.Scrubber>
          <NumberInput.Group>
            <NumberInput.Decrement />
            <NumberInput.Input />
            <NumberInput.Increment />
          </NumberInput.Group>
        </NumberInput>
      </Field>
    `,
  }),
});

export const RadioGroupField = meta.story({
  render: () => ({
    components: { Field, RadioGroup },
    template: `
      <Field.Set>
        <Field.Legend variant="label">Choose Plan</Field.Legend>
        <RadioGroup.Root default-value="free">
          <Field>
            <RadioGroup.Item value="free">Free</RadioGroup.Item>
          </Field>
          <Field>
            <RadioGroup.Item value="pro">Pro</RadioGroup.Item>
          </Field>
          <Field>
            <RadioGroup.Item value="enterprise">Enterprise</RadioGroup.Item>
          </Field>
        </RadioGroup.Root>
        <Field.Description>Select the plan that fits your needs.</Field.Description>
      </Field.Set>
    `,
  }),
});

export const RequiredField = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field required>
        <Field.Label>
          Password <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="Enter password" type="password" />
        <Field.Error>Please fill out this field.</Field.Error>
      </Field>
    `,
  }),
});

export const SelectField = meta.story({
  render: () => ({
    components: { Field, Select },
    setup() {
      const collection = createListCollection({
        items: ["Brazil", "Mexico", "Ireland"],
      });
      return { collection };
    },
    template: `
      <Field>
        <Field.Label>Country</Field.Label>
        <Select.Root :collection="collection">
          <Select.Trigger class="w-full">
            <Select.Value placeholder="Select a country" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item v-for="item in collection.items" :key="item" :item="item">
              {{ item }}
            </Select.Item>
          </Select.Content>
        </Select.Root>
        <Field.Description>Used for shipping estimates</Field.Description>
      </Field>
    `,
  }),
});

export const SliderField = meta.story({
  render: () => ({
    components: { Field, Slider },
    template: `
      <Field class="items-stretch gap-3">
        <Slider :default-value="[50]" label="Volume" />
        <Field.Description>Adjust the volume of the media player</Field.Description>
      </Field>
    `,
  }),
});

export const SwitchField = meta.story({
  render: () => ({
    components: { Field, Switch },
    template: `
      <Field orientation="horizontal">
        <Switch default-checked />
        <Field.Label> Airplane mode</Field.Label>
      </Field>
    `,
  }),
});

export const TextareaField = meta.story({
  render: () => ({
    components: { Field, Textarea },
    template: `
      <Field>
        <Field.Label>Bio</Field.Label>
        <Textarea placeholder="Tell us about yourself…" />
        <Field.Description>Write a short bio. Maximum 500 characters.</Field.Description>
      </Field>
    `,
  }),
});

export const WithError = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field invalid>
        <Field.Label>Email</Field.Label>
        <Input placeholder="you@example.com" />
        <Field.Error>Enter a valid email address.</Field.Error>
      </Field>
    `,
  }),
});

export const WithSeparator = meta.story({
  render: () => ({
    components: { Field, Input },
    template: `
      <Field>
        <Field.Label>Account</Field.Label>
        <Input placeholder="Username" />
        <Field.Separator>or</Field.Separator>
        <Input placeholder="Email" />
      </Field>
    `,
  }),
});
