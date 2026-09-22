import { Checkbox } from "@pisagor/react";
import { Field } from "..";
export function CheckboxGroupField() {
  return (
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
  );
}
