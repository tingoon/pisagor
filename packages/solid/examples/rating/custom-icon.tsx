/** @jsxImportSource solid-js */

import { Rating } from "@pisagor/solid";
import { HeartIcon } from "@pisagor/solid/icons";

export function CustomIcon() {
  return <Rating allowHalf class="text-destructive" icon={<HeartIcon />} />;
}
