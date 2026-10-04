/** @jsxImportSource solid-js */

import { Badge } from "@pisagor/solid/badge";
import { ArrowUpRightIcon, PlusCircleIcon } from "@pisagor/solid/icons";

export function WithLink() {
  return (
    <Badge>
      <a href="https://example.com/components">
        <PlusCircleIcon />
        New components <ArrowUpRightIcon />
      </a>
    </Badge>
  );
}
