import { Badge } from "@pisagor/solid";
import {
  ArrowUpRightIcon,
  PlusCircleIcon,
} from "@squidlab/phosphor-solid/icons";

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
