import source from "./with-icon.tsx?raw";
import { Status } from "@pisagor/solid";
import { PlusIcon } from "@pisagor/solid/icons";

export function WithIcon() {
  return <Status size="lg">{<PlusIcon />}</Status>;
}

export { source as WithIconSource };
