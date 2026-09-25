import { FunnelIcon } from "@phosphor-icons/react";
import { InputGroup } from "..";

export function AlignInlineStart() {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <FunnelIcon aria-hidden />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="Search..." />
      </InputGroup>
      <p className="text-muted-foreground text-sm">
        Icon positioned at the start.
      </p>
    </div>
  );
}
