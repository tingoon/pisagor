/** @jsxImportSource solid-js */

import { InputGroup } from "@pisagor/solid";
import { EyeIcon } from "@pisagor/solid/icons";

export function AlignInlineEnd() {
  return (
    <div class="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Input placeholder="Enter password" />
        <InputGroup.Addon align="inline-end">
          <EyeIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <p class="text-muted-foreground text-sm">Icon positioned at the end.</p>
    </div>
  );
}
