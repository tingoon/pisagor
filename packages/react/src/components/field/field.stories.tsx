import { createListCollection, useFilter, useListCollection } from "@ark-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import {
  Autocomplete,
  Checkbox,
  Combobox,
  Field,
  Input,
  InputGroup,
  NumberInput,
  RadioGroup,
  Select,
  Slider,
  Switch,
  Textarea,
} from "@pisagor/react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: Field,
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
          "Wraps a form control with label, description, and error text so inputs are easier to understand and fix.",
      },
      taxonomy: "standard",
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
  render: () => (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input placeholder="Enter username" />
      <Field.Description>Choose a unique username for your account.</Field.Description>
    </Field>
  ),
});

export const OnSurface = Default.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const OrientationHorizontal = meta.story({
  render: () => (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Enable notifications</Field.Label>
    </Field>
  ),
});

export const OrientationVertical = meta.story({
  render: () => (
    <Field orientation="vertical">
      <Field.Label>Name</Field.Label>
      <Input placeholder="Enter your name" type="text" />
      <Field.Description>Stacks label, control, and description vertically.</Field.Description>
    </Field>
  ),
});

export const AutocompleteField = meta.story({
  render: () => {
    const initialItems = [
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
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Field>
        <Field.Label>Fruits</Field.Label>
        <Autocomplete.Root
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
        >
          <Autocomplete.Input aria-label="Search items" placeholder="Search items…" />
          <Autocomplete.Content>
            <Autocomplete.Empty>No items found.</Autocomplete.Empty>
            <Combobox.List>
              {collection.items.map((item) => (
                <Autocomplete.Item item={item} key={item.value}>
                  {item.label}
                </Autocomplete.Item>
              ))}
            </Combobox.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <Field.Description>Select an item.</Field.Description>
      </Field>
    );
  },
});

export const CheckboxField = meta.story({
  render: () => (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Label>Receive notifications</Field.Label>
        <Field.Description>
          You'll receive a notification when someone posts a comment
        </Field.Description>
      </Field.Content>
    </Field>
  ),
});

export const CheckboxGroupField = meta.story({
  render: () => (
    <Field.Set>
      <Field.Legend variant="label">Select the items you want to show:</Field.Legend>
      <Field.Group>
        <Checkbox.Group className="gap-3" defaultValue={["hard-disks", "external-disks"]}>
          <Field orientation="horizontal">
            <Checkbox defaultChecked value="hard-disks" />
            <Field.Label className="font-normal">Hard disks</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox defaultChecked value="external-disks" />
            <Field.Label className="font-normal">External disks</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox value="cds-dvds-ipods" />
            <Field.Label className="font-normal">CDs, DVDs, and iPods</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox value="connected-servers" />
            <Field.Label className="font-normal">Connected servers</Field.Label>
          </Field>
        </Checkbox.Group>
      </Field.Group>
    </Field.Set>
  ),
});

export const ComboboxField = meta.story({
  render: () => {
    const initialItems = [
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
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Field>
        <Field.Label>Fruits</Field.Label>
        <Combobox.Root
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
        >
          <Combobox.Input aria-label="Select an item" placeholder="Select an item..." />
          <Combobox.Content>
            <Combobox.List>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Field.Description>Select an item.</Field.Description>
      </Field>
    );
  },
});

export const ComboboxMultipleField = meta.story({
  render: () => {
    const initialItems = [
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
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Field>
        <Field.Label>Fruits</Field.Label>
        <Combobox.Root
          collection={collection}
          multiple
          onInputValueChange={({ inputValue }) => filter(inputValue)}
        >
          <Combobox.Input aria-label="Select items" placeholder="Select items…" />
          <Combobox.Content>
            <Combobox.List>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Field.Description>Select multiple items.</Field.Description>
      </Field>
    );
  },
});

export const DisabledField = meta.story({
  render: () => (
    <Field disabled>
      <Field.Label>Email</Field.Label>
      <Input disabled placeholder="Enter your email" type="email" />
      <Field.Description>This field is currently unavailable.</Field.Description>
    </Field>
  ),
});

export const FieldGroup = meta.story({
  render: () => (
    <Field.Group>
      <Field.Set>
        <Field.Legend variant="label">Newsletter</Field.Legend>
        <Field.Description>
          Choose how you want to receive updates about new features and product releases.
        </Field.Description>
        <Field orientation="horizontal">
          <Checkbox defaultChecked disabled value="weekly" />
          <Field.Label>Weekly digest</Field.Label>
        </Field>
      </Field.Set>
      <Field.Separator />
      <Field.Set>
        <Field.Legend variant="label">Updates</Field.Legend>
        <Field.Description>
          Get notified about important account activity.{" "}
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
  ),
});

export const WithInputGroup = meta.story({
  render: () => (
    <Field>
      <Field.Label>Subscribe</Field.Label>
      <InputGroup>
        <InputGroup.Input placeholder="Your best email" type="email" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button aria-label="Subscribe" size="icon-xs" variant="ghost">
            <ArrowRightIcon aria-hidden />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
  ),
});

export const NumberInputStory = meta.story({
  render: () => (
    <Field>
      <NumberInput defaultValue="50" max={100} min={1}>
        <NumberInput.Scrubber>Quantity</NumberInput.Scrubber>
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
    </Field>
  ),
});

export const RadioGroupField = meta.story({
  render: () => (
    <Field.Set>
      <Field.Legend variant="label">Choose Plan</Field.Legend>
      <RadioGroup.Root defaultValue="free">
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
  ),
});

export const RequiredField = meta.story({
  render: () => (
    <Field required>
      <Field.Label>
        Password <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Enter password" type="password" />
      <Field.Error>Please fill out this field.</Field.Error>
    </Field>
  ),
});

export const SelectField = meta.story({
  render: () => {
    const collection = createListCollection({
      items: ["Brazil", "Mexico", "Ireland"],
    });
    return (
      <Field>
        <Field.Label>Country</Field.Label>
        <Select.Root collection={collection}>
          <Select.Trigger className="w-full">
            <Select.Value placeholder="Select a country" />
          </Select.Trigger>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Field.Description>Used for shipping estimates</Field.Description>
      </Field>
    );
  },
});

export const SliderField = meta.story({
  render: () => (
    <Field className="items-stretch gap-3">
      <Slider defaultValue={[50]} label="Volume" />
      <Field.Description>Adjust the volume of the media player</Field.Description>
    </Field>
  ),
});

export const SwitchField = meta.story({
  render: () => (
    <Field orientation="horizontal">
      <Switch defaultChecked />
      <Field.Label> Airplane mode</Field.Label>
    </Field>
  ),
});

export const TextareaField = meta.story({
  render: () => (
    <Field>
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself…" />
      <Field.Description>Write a short bio. Maximum 500 characters.</Field.Description>
    </Field>
  ),
});

export const WithError = meta.story({
  render: () => (
    <Field invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" type="email" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
  ),
});
