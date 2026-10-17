import source from "./sizes.tsx?raw";
import { Item } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <For each={sizes}>
        {(size) => (
          <Item size={size} variant="outline">
            <Item.Content>
              <Item.Title>Item {size}</Item.Title>
              <Item.Description>
                An item with title and description.
              </Item.Description>
            </Item.Content>
          </Item>
        )}
      </For>
    </div>
  );
}

export { source as SizesSource };
