import { ArrowRightIcon } from "@phosphor-icons/react";
import { InputGroup } from "@pisagor/react";
import { Field } from "..";
export function WithInputGroup() {
  return (
    <Field>
      <Field.Label>Subscribe</Field.Label>
      <InputGroup>
        <InputGroup.Input placeholder="Your best email" type="email" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            aria-label="Subscribe"
            size="icon-xs"
            variant="ghost"
          >
            <ArrowRightIcon aria-hidden />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
  );
}
