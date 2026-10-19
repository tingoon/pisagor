import { Editable, Input } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Editable.Root defaultValue="Primary">
        <Editable.Area>
          <Editable.Input asChild>
            <Input className="w-full" />
          </Editable.Input>
          <Editable.Preview controlVariant="primary" />
        </Editable.Area>
      </Editable.Root>
      <Editable.Root defaultValue="Secondary">
        <Editable.Area>
          <Editable.Input asChild>
            <Input className="w-full" />
          </Editable.Input>
          <Editable.Preview controlVariant="secondary" />
        </Editable.Area>
      </Editable.Root>
    </div>
  );
}
