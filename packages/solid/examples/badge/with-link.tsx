import source from "./with-link.tsx?raw";
import { Badge } from "@pisagor/solid";
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

export { source as WithLinkSource };
