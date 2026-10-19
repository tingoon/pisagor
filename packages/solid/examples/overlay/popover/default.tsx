import { Button, Field, Input, Popover } from "@pisagor/solid";

export function Default() {
  return (
    <Popover
      classNames={{ base: "w-80" }}
      description="Set the dimensions for the layer."
      title="Dimensions"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <Field.Group class="gap-2">
        <Field class="grid grid-cols-3 items-center gap-2">
          <Field.Label>Width</Field.Label>
          <Input class="col-span-2" defaultValue="100%" />
        </Field>
        <Field class="grid grid-cols-3 items-center gap-2">
          <Field.Label>Max. width</Field.Label>
          <Input class="col-span-2" defaultValue="300px" />
        </Field>
        <Field class="grid grid-cols-3 items-center gap-2">
          <Field.Label>Height</Field.Label>
          <Input class="col-span-2" defaultValue="25px" />
        </Field>
        <Field class="grid grid-cols-3 items-center gap-2">
          <Field.Label>Max. height</Field.Label>
          <Input class="col-span-2" defaultValue="none" />
        </Field>
      </Field.Group>
    </Popover>
  );
}
