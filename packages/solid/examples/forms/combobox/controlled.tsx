import { Combobox } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal<string[]>(["banana"]);

  return (
    <div class="flex flex-col gap-2">
      <Combobox
        items={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
          { label: "Date", value: "date" },
        ]}
        onValueChange={setValue}
        value={value()}
      />
      <p class="text-muted-foreground text-center text-sm">
        Selected: {value().at(0) ?? "(none)"}
      </p>
    </div>
  );
}
