import { Field } from "@pisagor/react";
import { Checkbox } from "..";
export function CheckboxGroup() {
  return (
    <Field.Set>
      <Field.Legend variant="label">Show these items on the desktop:</Field.Legend>
      <Field.Description>Select the items you want to show on the desktop.</Field.Description>
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
  );
}
