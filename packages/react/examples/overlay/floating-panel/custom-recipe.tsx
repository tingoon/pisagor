import { createListCollection } from "@ark-ui/react";
import { GearSixIcon, XIcon } from "@phosphor-icons/react";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/react";
import { floatingPanelRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandFloatingPanelRecipe = tv({
  extend: floatingPanelRecipe,
  slots: {
    content: "border-emerald-500/40",
    header: "bg-emerald-500/5",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  const collection = createListCollection({
    items: ["Inter", "Roboto", "Helvetica", "Geist"],
  });
  return (
    <FloatingPanel
      defaultSize={{ height: 300, width: 360 }}
      recipe={brandFloatingPanelRecipe}
    >
      <FloatingPanel.Trigger asChild>
        <Button variant="outline">Open</Button>
      </FloatingPanel.Trigger>
      <FloatingPanel.Content>
        <FloatingPanel.Header>
          <GearSixIcon />
          <FloatingPanel.Title>Settings</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.Minimize />
            <FloatingPanel.Maximize />
            <FloatingPanel.Restore />
            <FloatingPanel.CloseTrigger asChild>
              <Button aria-label="Close" size="icon-xs">
                <XIcon aria-hidden />
              </Button>
            </FloatingPanel.CloseTrigger>
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body>
          <Field>
            <Field.Label>Font family</Field.Label>
            <Select.Root collection={collection} defaultValue={["Inter"]}>
              <Select.Trigger className="w-full">
                <Select.ValueText />
              </Select.Trigger>
              <Select.Content>
                {collection.items.map((item) => (
                  <Select.Item item={item} key={item}>
                    {item}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field>
          <Field>
            <Field.Label>Font size</Field.Label>
            <NumberInput className="w-full" defaultValue="16">
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
