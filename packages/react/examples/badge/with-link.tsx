import { ArrowUpRightIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { Badge } from "@pisagor/react";

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
