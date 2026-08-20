import { InfoIcon } from "@phosphor-icons/react";
import { Button, Field, InputGroup, Tooltip } from "@pisagor/react";

export function InputGroupWithInnerLabel() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="John Doe" />
      <InputGroup.Addon align="block-start">
        <Field.Label>Username</Field.Label>

        <Tooltip content="Enter a username for your account">
          <Button
            aria-label="More info"
            className="ms-auto rtl:me-auto"
            size="icon-xs"
            variant="ghost"
          >
            <InfoIcon aria-hidden />
          </Button>
        </Tooltip>
      </InputGroup.Addon>
    </InputGroup>
  );
}
