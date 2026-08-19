import { InfoIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { InputGroup } from "@pisagor/react/input-group";
import { Tooltip } from "@pisagor/react/tooltip";

export function InputGroupWithTooltip() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Enter value" />
      <InputGroup.Addon align="inline-end">
        <Tooltip content="Additional information about this field">
          <Button aria-label="More info" size="icon-xs" variant="ghost">
            <InfoIcon aria-hidden />
          </Button>
        </Tooltip>
      </InputGroup.Addon>
    </InputGroup>
  );
}
