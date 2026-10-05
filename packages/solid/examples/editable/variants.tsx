import { Editable, Input } from "@pisagor/solid";
export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Editable defaultValue="Primary">
        <Editable.Area>
          <Editable.Input
            asChild={(props) => <Input {...props()} class="w-full" />}
          />
          <Editable.Preview controlVariant="primary" />
        </Editable.Area>
      </Editable>
      <Editable defaultValue="Secondary">
        <Editable.Area>
          <Editable.Input
            asChild={(props) => <Input {...props()} class="w-full" />}
          />
          <Editable.Preview controlVariant="secondary" />
        </Editable.Area>
      </Editable>
    </div>
  );
}
