import { Portal, createListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon, GearSixIcon } from "@phosphor-icons/react";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/react";

export function CustomSpacing() {
  const collection = createListCollection({
    items: ["Inter", "Roboto", "Helvetica", "Geist"],
  });

  return (
    <FloatingPanel
      defaultSize={{ height: 300, width: 360 }}
      actions={
        <>
          <Button variant="outline">Save</Button>
        </>
      }
      classNames={{
        content: "[--space:--spacing(3)] sm:[--space:--spacing(6)]",
      }}
      icon={<GearSixIcon />}
      title="Settings"
      trigger={<Button variant="outline">Open</Button>}
    >
      <Field>
        <Field.Label>Font family</Field.Label>
        <Select.Root collection={collection} defaultValue={["Inter"]}>
          <Select.Control>
            <Select.Trigger className="w-full">
              <Select.ValueText />
              <Select.Indicator>
                <CaretUpDownIcon />
              </Select.Indicator>
            </Select.Trigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {collection.items.map((item) => (
                  <Select.Item item={item} key={item}>
                    {item}
                    <Select.ItemIndicator>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </Field>
      <Field>
        <Field.Label>Font size</Field.Label>
        <NumberInput className="w-full" defaultValue="16" />
      </Field>
    </FloatingPanel>
  );
}
