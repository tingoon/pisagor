/** @jsxImportSource solid-js */
import { Input } from "@pisagor/solid";
import { Editable } from "@pisagor/solid/editable";
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
