import { Item, Listbox } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const [value, setValue] = useState(["md"]);

  const isLarge = value.includes("lg");

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-muted-foreground text-sm">
        Selected the Large size
      </p>
      <Item.Group variant="outline">
        <Item className="p-1">
          <Listbox
            items={[
              { label: "Small", value: "sm" },
              { label: "Medium", value: "md" },
              { label: "Large", value: "lg" },
              { label: "Extra Large", value: "xl" },
            ]}
            onValueChange={(value) =>
              setValue(Array.isArray(value) ? value : [value])
            }
            value={value}
          />
        </Item>
      </Item.Group>
      <p className="text-center text-muted-foreground text-sm">
        {isLarge ? "✅" : "❌"}
      </p>
    </div>
  );
}
