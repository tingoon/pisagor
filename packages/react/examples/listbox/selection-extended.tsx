import { Item, Kbd, Listbox } from "@pisagor/react";

export function SelectionExtended() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-muted-foreground text-sm">
        Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
      </p>
      <Item.Group variant="outline">
        <Item className="w-full p-1">
          <Listbox
            items={[
              { label: "Brazil", value: "br" },
              { label: "Mexico", value: "mx" },
              { label: "Ireland", value: "ie" },
            ]}
            selectionMode="extended"
          />
        </Item>
      </Item.Group>
    </div>
  );
}
