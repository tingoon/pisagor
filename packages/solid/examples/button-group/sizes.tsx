import source from "./sizes.tsx?raw";
import { Button, ButtonGroup } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col items-start gap-2">
      <For each={sizes}>
        {(size) => (
          <ButtonGroup size={size}>
            <Button size={size} variant="outline">
              Archive
            </Button>
            <Button size={size} variant="outline">
              Report
            </Button>
          </ButtonGroup>
        )}
      </For>
    </div>
  );
}

export { source as SizesSource };
