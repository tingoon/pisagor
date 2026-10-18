import { Status } from "@pisagor/solid";
import { PlusIcon } from "@squidlab/phosphor-solid/icons";

export function WithIcon() {
  return <Status size="lg">{<PlusIcon />}</Status>;
}
