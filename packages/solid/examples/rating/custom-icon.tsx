import source from "./custom-icon.tsx?raw";
import { Rating } from "@pisagor/solid";
import { HeartIcon } from "@pisagor/solid/icons";

export function CustomIcon() {
  return <Rating allowHalf class="text-destructive" icon={<HeartIcon />} />;
}

export { source as CustomIconSource };
