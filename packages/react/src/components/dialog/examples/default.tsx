import { Button, Field, Input, Select } from "@pisagor/react";
import { Dialog } from "..";
export function Default() {
  return (
    <Dialog
      actions={
        <>
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </>
      }
      description="Make changes to your project settings."
      title="Edit project"
      trigger={<Button variant="outline">Open</Button>}
    >
      <Field.Set>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Your project" />
          </Field>
          <Field>
            <Field.Label>Main branch</Field.Label>
            <Select
              items={[
                { label: "main", value: "main" },
                { label: "develop", value: "develop" },
                { label: "feature/123", value: "feature/123" },
                { label: "release/1.0.0", value: "release/1.0.0" },
              ]}
              placeholder="Select branch"
            />
          </Field>
        </Field.Group>
      </Field.Set>
    </Dialog>
  );
}
