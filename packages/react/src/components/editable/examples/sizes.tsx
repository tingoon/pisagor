import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Input } from "@pisagor/react";
import { Editable } from "..";
export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input asChild>
            <Input size="sm" />
          </Editable.Input>
          <Editable.Preview size="sm" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger asChild>
            <Button aria-label="Cancel" size="icon-sm" variant="outline">
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <Button aria-label="Save" size="icon-sm" variant="outline">
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input asChild>
            <Input size="md" />
          </Editable.Input>
          <Editable.Preview size="md" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger asChild>
            <Button aria-label="Cancel" size="icon-md" variant="outline">
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <Button aria-label="Save" size="icon-md" variant="outline">
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input asChild>
            <Input size="lg" />
          </Editable.Input>
          <Editable.Preview size="lg" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger asChild>
            <Button aria-label="Cancel" size="icon-lg" variant="outline">
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <Button aria-label="Save" size="icon-lg" variant="outline">
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    </div>
  );
}
