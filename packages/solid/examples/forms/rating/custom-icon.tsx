import { Rating } from "@pisagor/solid";
import { HeartIcon } from "@squidlab/phosphor-solid/icons";

export function CustomIcon() {
  return <Rating allowHalf class="text-destructive" icon={HeartIcon} />;
}
