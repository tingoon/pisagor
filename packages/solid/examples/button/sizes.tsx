/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { PlusIcon } from "@pisagor/solid/icons";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div class="flex items-center gap-2">
          <Button size={size}>Button</Button>
          <Button size={`icon-${size}`}>
            <PlusIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}
