import { Combobox } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const [value, setValue] = useState<string[]>(["banana"]);

  return (
    <div className="flex flex-col gap-2">
      <Combobox
        items={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
          { label: "Date", value: "date" },
        ]}
        onValueChange={setValue}
        value={value}
      />
      <p className="text-center text-muted-foreground text-sm">
        Selected: {value.at(0) ?? "(none)"}
      </p>
    </div>
  );
}
