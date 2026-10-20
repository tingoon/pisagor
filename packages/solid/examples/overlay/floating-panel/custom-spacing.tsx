import { GearSixIcon } from "@squidlab/phosphor-solid/icons";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/solid";

export function CustomSpacing() {
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
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <Field>
        <Field.Label>Font family</Field.Label>
        <Select
          class="w-full"
          defaultValue={["Inter"]}
          items={["Inter", "Roboto", "Helvetica", "Geist"]}
        />
      </Field>
      <Field>
        <Field.Label>Font size</Field.Label>
        <NumberInput class="w-full" defaultValue="16" />
      </Field>
    </FloatingPanel>
  );
}
