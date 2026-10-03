/** @jsxImportSource solid-js */

import { inputGroupWithInnerLabelBlock } from "@pisagor/recipes/blocks/input-group";
import { Button, Field, InputGroup, Tooltip } from "@pisagor/solid";
import { InfoIcon } from "@pisagor/solid/icons";

const styles = inputGroupWithInnerLabelBlock();

export function InputGroupWithInnerLabel() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="John Doe" />
      <InputGroup.Addon align="block-start">
        <Field.Label>Username</Field.Label>
        <Tooltip content="Enter a username for your account">
          <Button
            aria-label="More info"
            class={styles.info()}
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
