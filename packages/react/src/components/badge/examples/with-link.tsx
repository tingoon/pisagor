import { ArrowUpRightIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { Badge } from "..";

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
