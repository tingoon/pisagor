/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/solid";
import { GearSixIcon, XIcon } from "@pisagor/solid/icons";
export function CustomSpacing() {
  const collection = createListCollection({
    items: ["Inter", "Roboto", "Helvetica", "Geist"],
  });
  return (
    <FloatingPanel defaultSize={{ height: 300, width: 360 }}>
      <FloatingPanel.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <FloatingPanel.Content class="[--space:--spacing(3)] sm:[--space:--spacing(6)]">
        <FloatingPanel.Header>
          <GearSixIcon />
          <FloatingPanel.Title>Settings</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.Minimize />
            <FloatingPanel.Maximize />
            <FloatingPanel.Restore />
            <FloatingPanel.CloseTrigger
              asChild={(props) => (
                <Button {...props()} aria-label="Close" size="icon-xs">
                  <XIcon aria-hidden />
                </Button>
              )}
            />
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body>
          <Field>
            <Field.Label>Font family</Field.Label>
            <Select.Root collection={collection} defaultValue={["Inter"]}>
              <Select.Trigger class="w-full">
                <Select.ValueText />
              </Select.Trigger>
              <Select.Content>
                {collection.items.map((item) => (
                  <Select.Item item={item}>{item}</Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field>
          <Field>
            <Field.Label>Font size</Field.Label>
            <NumberInput class="w-full" defaultValue="16">
              <NumberInput.Control>
                <NumberInput.DecrementTrigger />
                <NumberInput.Input />
                <NumberInput.IncrementTrigger />
              </NumberInput.Control>
            </NumberInput>
          </Field>
        </FloatingPanel.Body>
        <FloatingPanel.Footer>
          <Button variant="outline">Save</Button>
        </FloatingPanel.Footer>
      </FloatingPanel.Content>
    </FloatingPanel>
  );
}
