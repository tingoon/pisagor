import { EyeIcon } from "@phosphor-icons/react";
import { InputGroup } from "..";

export function AlignInlineEnd() {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Input placeholder="Enter password" />
        <InputGroup.Addon align="inline-end">
          <EyeIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <p className="text-muted-foreground text-sm">Icon positioned at the end.</p>
    </div>
  );
}
