/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Dialog } from "@pisagor/solid/dialog";
import { Field } from "@pisagor/solid/field";
import { Input } from "@pisagor/solid/input";
import { Select } from "@pisagor/solid/select";

export function Default() {
  return (
    <Dialog
      actions={
        <>
          <Dialog.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Dialog.CloseTrigger
            asChild={(props) => <Button {...props()}>Save</Button>}
          />
        </>
      }
      description="Make changes to your project settings."
      title="Edit project"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
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
