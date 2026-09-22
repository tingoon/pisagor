import { Input } from "@pisagor/react";
import { Editable } from "..";
export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Editable defaultValue="Primary">
        <Editable.Area>
          <Editable.Input asChild>
            <Input className="w-full" />
          </Editable.Input>
          <Editable.Preview controlVariant="primary" />
        </Editable.Area>
      </Editable>
      <Editable defaultValue="Secondary">
        <Editable.Area>
          <Editable.Input asChild>
            <Input className="w-full" />
          </Editable.Input>
          <Editable.Preview controlVariant="secondary" />
        </Editable.Area>
      </Editable>
    </div>
  );
}
