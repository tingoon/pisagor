/** @jsxImportSource solid-js */

import { Badge, InputGroup } from "@pisagor/solid";
import { AtIcon } from "@pisagor/solid/icons";
export function WithBadge() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Enter tag" />
      <InputGroup.Addon align="inline-end">
        <Badge pill size="sm" variant="success">
          Available
        </Badge>
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-start">
        <AtIcon />
      </InputGroup.Addon>
    </InputGroup>
  );
}
